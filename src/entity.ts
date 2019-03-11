import { Interpreter } from './interpreter';
import { Scope } from './scope';
import { Return } from './return';
import { Prototype } from './prototype';
import * as Stmt from './statement';
import * as Runtime from './runtime';
declare var conzole: Console;

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
        const result: any[] = [];
        this.properties.forEach((value, key) => {
            result.push(`${key}: ${value}`);
        });
        return `{${result.join('; ')}}`;
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
        let restoreScope: Scope = null;
        try {
            restoreScope = interpreter.scope;
            interpreter.executeBlock(this.declaration.body, scope);
        } catch (e) {
            if (e instanceof Return) {
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
