import { Interpreter } from './interpreter';
import { Scope } from './scope';
import { Return } from './return';
import { Prototype } from './prototype';
import * as Stmt from './statement';
import * as Runtime from './runtime';
declare var conzole: Console;

export class IndexRange {
    public start: number;
    public end: number;
    public step: number;

    constructor(start: number, end: number, step: number) {
        this.start = start;
        this.end = end;
        this.step = step;
    }
}

export class InternalEntity {
    public call: (interpreter: Interpreter, thiz: any, args: any[]) => any;
    public toString: () => string = () => '<native function>';
    public arity: () => number;
}

export class PrototypeEntity {
    public prototype: Prototype;
    public properties: Map<string, any>;

    constructor() {
        this.prototype = new Prototype(null, null, this);
        this.properties = new Map();
        this.prototype.values.set('hasOwnProperty', Runtime.hasOwnProperty(this));
        this.prototype.values.set('size', Runtime.lengthProperty);
        this.prototype.values.set('inherit', Runtime.inheritMethod(this));
    }

    public get(key: string): any {
        if (this.properties.has(key)) {
            return this.properties.get(key);
        }
        return this.prototype.get(key);
    }

    public set(key: string, value: any) {
        this.properties.set(key, value);
    }

    public toString(): string {
        return '<prototype entity>';
    }
}

export class CallableEntity extends PrototypeEntity {

    constructor() {
        super();
        this.prototype.values.set('invoke', Runtime.invokeMethod(this));
    }

    public arity(): number {
        return 0;
    }

    public call(interpreter: Interpreter, thiz: any, args: any[]): any { return; }
    public toString(): string {
        return '<internal function>';
    }

}

export class FunctionEntity extends CallableEntity {
    public declaration: Stmt.Func;
    public name: string;
    private closure: Scope;
    public parent: FunctionEntity;

    constructor(declaration: Stmt.Func, closure: Scope, parent: FunctionEntity = null) {
        super();
        this.declaration = declaration;
        this.closure = closure;
        this.prototype.values.set('merge', Runtime.mergeMethod(this));
        this.prototype.values.set('extend', Runtime.extendMethod(this));
        this.name = this.declaration.name.lexeme;
        this.prototype.values.set('name', this.name);
        this.parent = parent;
    }

    public toString(): string {
        return `<${this.name}  function>`;
    }

    public arity(): number {
        return this.declaration.params.length;
    }

    public call(interpreter: Interpreter, thiz: any, args: any[]): any {
        const scope = new Scope(this.closure);
        for (let i = 0; i < this.declaration.params.length; i++) {
            scope.define(this.declaration.params[i].lexeme, args[i]);
        }
        scope.set('this', thiz);
        try {
            interpreter.executeBlock(this.declaration.body, scope);
        } catch (e) {
            if (e instanceof Return) {
                return e.value;
            }

            conzole.error("Runtime error. Execution has been stopped");
            conzole.error(e.message);
            throw new Error("Runtime error. Execution has been stopped");
        }
        return null;
    }

}

export class InstanceEntity extends CallableEntity {
    public instanceof: string;
    constructor(construct: FunctionEntity) {
        super();
        this.instanceof = construct.declaration.name.lexeme;
        this.properties = new Map();
        this.prototype = new Prototype(construct.properties, construct.prototype, this);
    }

    public toString(): string {
        return '<' + this.instanceof + " instance>";
    }
}

export class StringEntity extends PrototypeEntity {
    private value: string;

    constructor(values: string) {
        super();
        this.value = values;
        this.prototype.values.set('invoke', Runtime.invokeMethod(this));
        this.prototype.values.set('size', Runtime.stringLengthMethod(this));
        this.prototype.values.set('substr', Runtime.stringSubStrMethod(this));
        this.prototype.values.set('split', Runtime.stringSplitMethod(this));
    }

    public get(key: any): any {
        if (typeof key === "number") {
            return this.value[key];
        } else if (key instanceof IndexRange) {
            return this.range(key);
        } else {
            return super.get(key);
        }

    }

    public set(key: string | number, value: any): void {
        if (typeof key !== "number") {
            this.properties.set(key, value);
        }
    }

    public arity(): number {
        return 0;
    }

    public call(interpreter: Interpreter, thiz: any, args: any[]): any {
        return new StringEntity(args[0]);
    }

    public toString(): string {
        return this.value;
    }

    private range(range: IndexRange): StringEntity {
        if (range.step === null) {
            range.step = 1;
        }
        if (range.end === null) {
            range.end = range.step > 0 ? this.value.length - 1 : 0;
        }
        if (range.start === null) {
            range.start = range.step > 0 ? 0 : this.value.length - 1;
        }

        let result = '';
        if (range.step > 0) {
            for (let i = range.start; i <= range.end; i += range.step) {
                result += this.value[i];
            }
        }
        if (range.step < 0) {
            for (let i = range.start; i >= range.end; i += range.step) {
                result += this.value[i];
            }
        }

        return new StringEntity(result);
    }

}

export class ArrayEntity extends PrototypeEntity {
    public values: any[];
    constructor(values: any[]) {
        super();
        this.values = values;
        this.prototype.values.set('invoke', Runtime.invokeMethod(this));
        this.prototype.values.set('size', Runtime.arrayLengthMethod(this));
        this.prototype.values.set('join', Runtime.arrayJoinMethod(this));
        this.prototype.values.set('push', Runtime.arrayPushMethod(this));
        this.prototype.values.set('pop', Runtime.arrayPopMethod(this));
        this.prototype.values.set('each', Runtime.arrayEachMethod(this));
        this.prototype.values.set('map', Runtime.arrayMapMethod(this));
        this.prototype.values.set('find', Runtime.arrayFindMethod(this));
        this.prototype.values.set('indexOf', Runtime.arrayIndexOfMethod(this));
    }

    public get(key: any): any {
        if (typeof key === "number") {
            return this.values[key];
        } else if (key instanceof IndexRange) {
            return this.range(key);
        } else {
            return super.get(key);
        }

    }

    public set(key: string | number, value: any) {
        if (typeof key !== "number") {
            this.properties.set(key, value);
        } else {
            this.values[key] = value;
        }
    }

    private range(range: IndexRange): ArrayEntity {
        if (range.step === null) {
            range.step = 1;
        }
        if (range.end === null) {
            range.end = range.step > 0 ? this.values.length - 1 : 0;
        }
        if (range.start === null) {
            range.start = range.step > 0 ? 0 : this.values.length - 1;
        }

        const result = [];
        if (range.step > 0) {
            for (let i = range.start; i <= range.end; i += range.step) {
                result.push(this.values[i]);
            }
        }
        if (range.step < 0) {
            for (let i = range.start; i >= range.end; i += range.step) {
                result.push(this.values[i]);
            }
        }

        return new ArrayEntity(result);
    }

    public arity(): number {
        return 0;
    }

    public call(interpreter: Interpreter, thiz: any, args: any[]): any { return; }
    public toString(): string {
        return `[${this.values.join(',')}]`;
    }

}
