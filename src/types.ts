import { Interpreter } from "./interpreter";
import * as Stmt from './statement';
import { Scope } from "./scope";
import { Token } from "./token";

declare var conzole: Console;

export enum DataType {
    Null,    // 0
    Void,    // 1
    Any,     // 2
    Boolean, // 3
    Number,  // 4
    String,  // 5
    List,    // 6
    Dictionary, // 7
    Object,   // 8
    Class,    // 9
    Function, // 10
    Lambda,   // 11
    Range,    // 12
    Return    // 13
}

export class $Any {

    public value: any;
    public type = DataType.Any;

    constructor(value: any, type: DataType = DataType.Any) {
        this.value = value;
        this.type = type;
    }

    public isString(): boolean {
        return this.type === DataType.String;
    }

    public isNull(): boolean {
        return this.type === DataType.Null;
    }

    public isBoolean(): boolean {
        return this.type === DataType.Boolean;
    }

    public isNumber(): boolean {
        return this.type === DataType.Number;
    }

    public isRange(): boolean {
        return this.type === DataType.Range;
    }

    public isFunction(): boolean {
        return this.type === DataType.Function;
    }

    public isClass(): boolean {
        return this.type === DataType.Class;
    }

    public isLambda(): boolean {
        return this.type === DataType.Function && (this as any).name === '@';
    }

    public isObject(): boolean {
        return this.type === DataType.Object;
    }

    public isTruthy(): boolean {
        if (this.isNull()) {
            return false;
        }
        if (this.isBoolean()) {
            return Boolean(this.value);
        }
        if (this.isNumber() && this.value === 0) {
            return false;
        }
        if (this.isString() && this.value.toString().length === 0) {
            return false;
        }
        if (this.value === null) {
            throw new Error("Unknown error value Any is null");
        }
        if (typeof this.value === 'undefined') {
            throw new Error("Unknown error value Any is undefined");
        }
        return true;
    }

    public isEqual(other: $Any) {
        return this.value === other.value;
    }

    public get(key: $Any): $Any {
        conzole.error(`key ${key} does not exist in ${this}`);
        throw new Error("Error in Any getter");
    }

    public set(key: $Any, value: $Any): $Any {
        conzole.error(`key ${key} does not exist in ${this}`);
        throw new Error("Error in Any setter");
    }

    public toString(): string {
        return this.value.toString();
    }
}

export class $Boolean extends $Any {

    public value: boolean;

    constructor(value: boolean) {
        super(value, DataType.Boolean);
    }

}

export class $Null extends $Any {

    public value: boolean;

    constructor() {
        super(null);
        this.type = DataType.Null;
    }

    public toString() {
        return 'null';
    }

}

export class $Void extends $Any {

    public value: boolean;

    constructor(value: string) {
        super(value, DataType.Void);
    }

}

export  class RangeValue {
    public start: number;
    public end: number;
    public step: number;

    constructor(start: number, end: number, step: number) {
        this.start = start;
        this.end = end;
        this.step = step;
    }

    public normalize(length: number): void {
        if (this.step === null) {
            this.step = 1;
        }
        if (this.end === null) {
            this.end = this.step > 0 ? length - 1 : 0;
        }
        if (this.start === null) {
            this.start = this.step > 0 ? 0 : length - 1;
        }
    }
}

export class $Range extends $Any {

    constructor(value: RangeValue) {
        super(value, DataType.Range);
    }

    public iterate(length: number, callback: (index: number) => void): void {
        this.value.normalize(length);
        if (this.value.step > 0) {
            for (let i = this.value.start; i <= this.value.end; i += this.value.step) {
               callback(i);
            }
        } else if (this.value.step < 0) {
            for (let i = this.value.start; i >= this.value.end; i += this.value.step) {
                callback(i);
            }
        } else {
            conzole.warn(`[range error] => 0 is not a valid step`);
        }
    }
}

export class $Number extends $Any {

    public value: number;

    constructor(value: number) {
        super(value, DataType.Number);
    }

}

export class $String extends $Any {
    public value: string;

    constructor(value: string) {
        super(value, DataType.String);
        /* this.prototype.values.set('invoke', Runtime.invokeMethod(this));
        this.prototype.values.set('size', Runtime.stringLengthMethod(this));
        this.prototype.values.set('substr', Runtime.stringSubStrMethod(this));
        this.prototype.values.set('split', Runtime.stringSplitMethod(this));
        this.prototype.values.set('match', Runtime.stringMatchMethod(this));
        this.prototype.values.set('replace', Runtime.stringReplaceMethod(this));
        this.prototype.values.set('alter', Runtime.stringAlterMethod(this));
        this.prototype.values.set('toUpperCase', Runtime.stringToUpperCase(this));
        this.prototype.values.set('toLowerCase', Runtime.stringToLowercase(this)); */
    }

    public get(key: $Any): $Any {
        if (key.isNumber()) {
            return new $String(this.value[key.value]);
        } else if (key.isRange()) {
            return this.range(<$Range> key);
        } else if (key.value === 'length') {
            return new $Number(this.value.length);
        }
        return new $Null();

    }

    public set(key: $Any, value: any): $Any {
        if (typeof key !== 'number') {
            // this.properties.set(key, value);
        }
        return new $Null();
    }

    public arity(): number {
        return 0;
    }
    /*

    public call(interpreter: Interpreter, thiz: any, args: any[]): any {
        return new $String(args[0]);
    }*/

    private range(range: $Range): $String {
        let result = '';
        range.iterate(this.value.length, (i) => {
            result += this.value[i];
        });
        return new $String(result);
    }

}

export class $List extends $Any {
    public value: $Any[];
    constructor(value: $Any[]) {
        super(value, DataType.List);
    }

    public get(key: $Any): $Any {
        if (key.isNumber()) {
            return this.value[key.value];
        } else if (key.isRange) {
            return this.range(<$Range> key);
        } else {
            // return super.get(key);
            return new $Null();
        }

    }

    public set(key: $Any, value: $Any): $Any {
        if (key.isNumber()) {
            this.value[key.value] = value;
        }
        return value;
    }

    private range(range: $Range): $List {
        const result: $Any[] = [];
        range.iterate(this.value.length, (i) => {
            result.push(this.value[i]);
        });
        return new $List(result);
    }

    public toString(): string {
        return `[${this.value.join(',')}]`;
    }

}

export class $Dictionary extends $Any {
    public value: Map<any, $Any>;

    constructor(value: Map<any, $Any>) {
        super(value, DataType.Dictionary);
    }

    public get(key: $Any): any {
        if (this.value.has(key.value)) {
            return this.value.get(key.value);
        }
        return new $Null();
    }

    public set(key: $Any, value: $Any): $Any {
        this.value.set(key.value, value);
        return value;
    }

    public toString(): string {
        const result: any[] = [];
        this.value.forEach((value, key) => {
            result.push(`${key.toString()}: ${value}`);
        });
        return `{${result.join('; ')}}`;
    }
}

export type FunctionCall = (thiz: $Any, args: $Any[], interpreter: Interpreter) => $Any;

export class $Callable extends $Any {

    public value: FunctionCall;
    public arity: number;
    public name: string;

    constructor(name: string,  arity: number, value: FunctionCall) {
        super(value, DataType.Function);
        this.arity = arity;
        this.name = name;
    }

    public call(thiz: any, args: any[], interpreter: Interpreter, ): $Any {
        return this.value(thiz, args, interpreter);
    }

    public toString(): string {
        return `<${this.name}  function>`;
    }

}

export class $Function extends $Callable {
    public declaration: Stmt.Func;
    public name: string;
    private closure: Scope;

    constructor(declaration: Stmt.Func, closure: Scope) {
        super(declaration.name.lexeme, declaration.params.length, null);
        this.declaration = declaration;
        this.closure = closure;
    }

    public call(thiz: any, args: any[], interpreter: Interpreter): $Any {
        const scope = new Scope(this.closure);
        for (let i = 0; i < this.declaration.params.length; i++) {
            scope.define(this.declaration.params[i].lexeme, args[i]);
        }
        scope.set('this', thiz);
        let restoreScope: Scope = null;
        try {
            restoreScope = interpreter.scope;
            interpreter.executeBlock(this.declaration.body, scope);
        } catch (e) {
            if (e instanceof $Return) {
                if (restoreScope) {
                    interpreter.scope = restoreScope;
                }
                return e.value;
            }
            conzole.error("Runtime error. Execution has been stopped");
            conzole.error(e.message);
            throw new Error("Runtime error. Execution has been stopped");
        }
        return null;
    }

}

export class $Class extends $Any {
    public value: Map<string, $Any>;
    public name: string;
    public parent: $Class | $Any;

    constructor(name: string, value: Map<string, $Any>, parent: $Any | $Class) {
        super(value, DataType.Class);
        this.name = name;
        this.parent = parent;
    }

    public get(key: $Any): $Any {
        if (this.value.has(key.value)) {
            return this.value.get(key.value);
        }

        if (this.parent.isClass()) {
            return this.parent.get(key);
        }

        return new $Null();
    }

    public set(key: $Any, value: $Any): $Any {
        this.value.set(key.value, value);
        return value;
    }

    public toString(): string {
        return `<${this.name} class>`;
    }
}

export class $Object extends $Any {
    public value: Map<string, $Any>;
    public conztructor: $Class | $Any;

    constructor(value: Map<string, $Any>, conztructor: $Class | $Any) {
        super(value, DataType.Object);
        this.conztructor = conztructor;
    }

    public get(key: $Any): $Any {
        const method = this.conztructor.get(key);

        if (method.isFunction()) {
            return method;
        }

        if (this.value.has(key.value)) {
            return this.value.get(key.value);
        }

        return new $Null();
    }

    public set(key: $Any, value: $Any): $Any {
        this.value.set(key.value, value);
        return value;
    }

    public toString(): string {
        return `<${this.constructor.name} object>`;
    }
}

export class $Return extends $Any {

    public value: $Any;

    constructor(value: $Any) {
        super(value, DataType.Return);
    }
}
