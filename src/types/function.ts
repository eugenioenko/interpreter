import * as Stmt from '../classes/statement';
import { $Any } from './any';
import { $Return } from './return';
import { Console } from '../console';
import { DataType } from './type.enum';
import { Interpreter } from '../interpreter';
import { Scope } from '../scope';
declare var conzole: Console;

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
