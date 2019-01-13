import { Interpreter } from './interpreter';
import { Scope } from './scope';
import { Return } from './return';
import { Prototype } from './prototype';
import * as Stmt from './statement';

export class RuntimeObject {
    public prototype: Prototype;
    public properties: Map<string, any>;

    constructor() {
        this.prototype = new Prototype(null);
        this.properties = new Map();
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

export class CallableObject extends RuntimeObject {

    constructor() {
        super();
        // TODO: inheritance place
        this.properties.set('prototype', this.prototype);
    }
    public arity(): number {
        return 0;
    }
    public call(interpreter: Interpreter, args: any[], thiz: ClassInstance): any { return; }
    public toString(): string {
        return 'function';
    }
}

export class CallableFunc extends CallableObject {
    public name: string;
    private declaration: Stmt.Func;
    private closure: Scope;
    private thiz: ClassInstance;

    constructor(declaration: Stmt.Func, closure: Scope, thiz: ClassInstance) {
        super();
        this.declaration = declaration;
        this.closure = closure;
        this.thiz = thiz;
        this.name = this.declaration.name.lexeme;
    }

    public toString(): string {
        return this.declaration.name.lexeme;
    }

    public arity(): number {
        return this.declaration.params.length;
    }

    public call(interpreter: Interpreter, args: any[], thiz: ClassInstance): any {
        const scope = new Scope(this.closure);
        scope.define('this', thiz);
        for (let i = 0; i < this.declaration.params.length; i++) {
            scope.define(this.declaration.params[i].lexeme, args[i]);
        }
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

export class ClassPrototype  extends CallableObject {

    public name: string;
    public prototype: Prototype;

    constructor(name: string, methods: Stmt.Func[]) {
        super();
        this.name = name;
        this.prototype = new Prototype(null);
        for (const method of methods) {
            this.prototype.set(method.name.lexeme, method);
        }
    }

    public arity(): number {
        return 0;
    }

    public call(interpreter: Interpreter, args: any[]): any {
        const instance: ClassInstance  = new ClassInstance(null);
        return instance;
    }

    public toString(): string {
        return this.name;
    }

}

export class ClassInstance extends RuntimeObject {
    private instanceof: string;

    constructor(construct: CallableFunc) {
        super();
        console.log(construct);
        this.instanceof = construct.name;
        this.properties = new Map();
        this.prototype = construct.prototype;
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
        return this.instanceof + " instance";
    }
}
