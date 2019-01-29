import { Interpreter } from './interpreter';
import { Scope } from './scope';
import { Return } from './return';
import { Prototype } from './prototype';
import * as Stmt from './statement';

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

        const hasOwnProperty = new InternalEntity();
        hasOwnProperty.call = (int, thiz, args) => this.properties.has(args[1]);
        hasOwnProperty.toString = () => 'hasOwnProperty';
        hasOwnProperty.arity = () => 2;
        this.prototype.values.set('hasOwnProperty', hasOwnProperty);

        const lengthProperty = new InternalEntity();
        lengthProperty.call = (int, thiz, args) => this.properties.size;
        lengthProperty.toString = () => 'lengthProperty';
        lengthProperty.arity = () => 1;
        this.prototype.values.set('length', lengthProperty);
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
        return 'object';
    }
}

export class CallableEntity extends PrototypeEntity {

    constructor() {
        super();
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
    public name: string;
    private declaration: Stmt.Func;
    private closure: Scope;

    constructor(declaration: Stmt.Func, closure: Scope) {
        super();
        this.declaration = declaration;
        this.closure = closure;
        this.name = this.declaration.name.lexeme;
    }

    public toString(): string {
        return '<' + this.declaration.name.lexeme + ' function>';
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
        }
        return undefined;
    }

}

export class InstanceEntity extends CallableEntity {
    private instanceof: string;
    constructor(construct: FunctionEntity) {
        super();
        this.instanceof = construct.name;
        this.properties = new Map();
        this.prototype = new Prototype(construct.properties, construct.prototype, this);
    }

    public get(key: string): any {
        if (this.properties.has(key)) {
            return this.properties.get(key);
        }
        return this.prototype.get(key);
        throw new Error(`${this.instanceof} does not have ${key}`);
    }

    public set(key: string, value: any) {
        this.prototype.set(key, value);
    }

    public toString(): string {
        return '<' + this.instanceof + " instance>";
    }
}

export class ClassPrototype  extends CallableEntity {

    public name: string;
    public prototype: Prototype;

    constructor(name: string, methods: Stmt.Func[]) {
        super();
        this.name = name;
        this.prototype = new Prototype(null,null, this);
        for (const method of methods) {
            this.prototype.set(method.name.lexeme, method);
        }
    }

    public arity(): number {
        return 0;
    }

    public call(interpreter: Interpreter, args: any[]): any {
        const instance: InstanceEntity  = new InstanceEntity(null);
        return instance;
    }

    public toString(): string {
        return '<' + this.name + ' class>';
    }

}
