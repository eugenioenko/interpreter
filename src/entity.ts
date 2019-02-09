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
        hasOwnProperty.call = (int, thiz, args) => { return this.properties.has(args[0])};
        hasOwnProperty.toString = () => 'hasOwnProperty';
        hasOwnProperty.arity = () => 1;
        this.prototype.values.set('hasOwnProperty', hasOwnProperty);

        const lengthProperty = new InternalEntity();
        lengthProperty.call = (int, thiz, args) => this.properties.size;
        lengthProperty.toString = () => 'lengthProperty';
        lengthProperty.arity = () => 0;
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

        const invokeMethod = new InternalEntity();
        invokeMethod.call = (int, thiz, args) => thiz.call(int, args[0], args.slice(1));
        invokeMethod.toString = () => '<internal invoke function>';
        invokeMethod.arity = () => -1;
        this.prototype.values.set('invoke', invokeMethod);
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
    private closure: Scope;

    constructor(declaration: Stmt.Func, closure: Scope) {
        super();
        this.declaration = declaration;
        this.closure = closure;

        const extendsMethod = new InternalEntity();
        extendsMethod.call = (int, thiz, args) =>
            this.properties = new Map([...args[0].properties, ...this.properties]);
        extendsMethod.toString = () => '<internal extend function>';
        extendsMethod.arity = () => 1;
        this.prototype.values.set('extends', extendsMethod);
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
        this.instanceof = construct.declaration.name.lexeme;
        this.properties = new Map();
        this.prototype = new Prototype(construct.properties, construct.prototype, this);

        const inheritMethod = new InternalEntity();
        inheritMethod.call = (int, thiz, args) =>
            this.prototype.values = new Map([...args[0].properties, ...this.prototype.values]);
        inheritMethod.toString = () => '<internal inheritance function>';
        inheritMethod.arity = () => 1;
        this.prototype.values.set('inherits', inheritMethod);
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
        this.prototype = new Prototype(null, null, this);
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
