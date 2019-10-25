import * as Expr from './expression';
// import * as Runtime from './runtime';
import * as Stmt from './statement';
import { Console } from './console';
import { Prototype } from './structs/prototype';
import { Return } from './structs/return';
import { Scope } from './structs/scope';
import { TokenType } from './token';
import { $Any, $Void, $String, $Number, $Null, $Boolean, RangeValue, $Range } from './types';
declare var conzole: Console;

export class Interpreter implements
    Expr.ExprVisitor<$Any>,
    Stmt.StmtVisitor<$Any> {
    public global = new Scope();
    public scope = this.global;

    constructor( ) {
        // this.global.define('echo', Runtime.echoFunction());
        // this.global.define('rand', Runtime.randFunction());
    }

    private evaluate(expr: Expr.Expr): $Any {
        return expr.result = expr.accept(this);
    }

    private execute(stmt: Stmt.Stmt): $Any {
        return stmt.result = stmt.accept(this);
    }

    public interpet(statements: Stmt.Stmt[]): Stmt.Stmt[] {
        for (const statement of statements) {
            this.execute(statement);
        }
        return statements;
    }

    private interpreterError(message: string): void {
        conzole.log(`[interpreter error] => ${message}`);
        throw new Error();
    }

    public visitExpressionStmt(stmt: Stmt.Expression): $Any {
        return this.evaluate(stmt.expression);
    }

    public visitPrintStmt(stmt: Stmt.Print): $Any {
        const data = this.evaluate(stmt.expression);
        conzole.log(data);
        return data;
    }

    public visitVarStmt(stmt: Stmt.Var): $Any {
        let data = new $Null();
        if (stmt.initializer !== null) {
            data = this.evaluate(stmt.initializer);
        } /*
        if (data instanceof FunctionEntity && data.name === "lambda") {
            data.name = stmt.name.lexeme;
            data.prototype.set('name', data.name);
        }*/
        this.scope.define(stmt.name.lexeme, data);
        return data;
    }

    public visitVariableExpr(expr: Expr.Variable): $Any {
        return this.scope.get(expr.name);
    }

    public visitPostfixExpr(expr: Expr.Postfix): $Any {
        const value = this.scope.get(expr.name);
        const newValue = value + expr.increment;
        this.scope.assign(expr.name.lexeme, newValue);
        return value;
    }


    public visitListExpr(expr: Expr.List): $Any {/*
        const values: any[] = [];
        for (const expression of expr.value) {
            values.push(this.evaluate(expression));
        }
        return new ArrayEntity(values);
        */ return new $Null();
    }


    public visitZtringExpr(expr: Expr.Ztring): $Any {
        return new $String(expr.value);
    }


    public visitRegExExpr(expr: Expr.RegEx): $Any {
        /*
        return new RegExEntity(expr.value);
        */ return new $Null();
    }


    public visitAssignExpr(expr: Expr.Assign): $Any {
        const value = this.evaluate(expr.value);
        this.scope.assign(expr.name.lexeme, value);
        return value;
    }

    public visitBinaryExpr(expr: Expr.Binary): $Any {
        let left = this.evaluate(expr.left).value;
        let right = this.evaluate(expr.right).value;
        left = left instanceof $String ? left.toString() : left;
        right = right instanceof $String ? right.toString() : right;
        switch (expr.operator.type) {
            case TokenType.Minus:
            case TokenType.MinusEqual:
                return new $Number(left - right);
            case TokenType.Slash:
            case TokenType.SlashEqual:
                return new $Number(left / right);
            case TokenType.Star:
            case TokenType.StarEqual:
                return new $Number(left * right);
            case TokenType.Percent:
            case TokenType.PercentEqual:
                return new $Number(left % right);
            case TokenType.Plus:
            case TokenType.PlusEqual:
                if (!isNaN(left) && !isNaN(right)) {
                    return new $Number(left + right);
                }
                /*
                if (left instanceof ArrayEntity && right instanceof ArrayEntity) {
                    return new ArrayEntity(left.values.concat(right.values));
                } */
                return <any> new $String(left as string + right as string);
            case TokenType.Pipe:
                return new $Number(left | right);
            case TokenType.Caret:
                return new $Number(left ^ right);
            case TokenType.Greater:
                return new $Boolean(left > right);
            case TokenType.GreaterEqual:
                return new $Boolean(left >= right);
            case TokenType.Less:
                return new $Boolean(left < right);
            case TokenType.LessEqual:
                return new $Boolean(left >= right);
            case TokenType.EqualEqual:
                return new $Boolean(left === right);
            case TokenType.BangEqual:
                return new $Boolean(left !== right);
            default:
                conzole.warn(expr);
                return null; // unreachable
                break;
        }
    }

    public visitLogicalExpr(expr: Expr.Logical): $Any {
        if (expr.operator.type === TokenType.And) {
            return this.evaluate(expr.left) && this.evaluate(expr.right);
        } else {
            return this.evaluate(expr.left) || this.evaluate(expr.right);
        }
    }

    public visitTernaryExpr(expr: Expr.Ternary): $Any {
        return this.evaluate(expr.condition).isTruthy() ? this.evaluate(expr.thenExpr) : this.evaluate(expr.elseExpr);
    }

    public visitGroupingExpr(expr: Expr.Grouping): $Any {
        return this.evaluate(expr.expression);
    }

    public visitLiteralExpr(expr: Expr.Literal): $Any {
        return expr.value;
    }

    public visitUnaryExpr(expr: Expr.Unary): $Any {
        const right = this.evaluate(expr.right).value;
        switch (expr.operator.type) {
            case TokenType.Minus:
                return new $Number(-Number(right));
            case TokenType.Bang:
                return new $Boolean(!Boolean(right));
            case TokenType.PlusPlus:
                const incValue = Number(right) + 1;
                this.scope.assign((<Expr.Variable> expr.right).name.lexeme, incValue);
                return new $Number(incValue);
            case TokenType.MinusMinus:
                const decValue = Number(right) - 1;
                this.scope.assign((<Expr.Variable> expr.right).name.lexeme, decValue);
                return new $Number(decValue);
            default:
                return null; // should be unreachable
        }
    }

    public executeBlock(statements: Stmt.Stmt[], nextScope: Scope): $Any {
        const currentScope = this.scope;
        this.scope = nextScope;
        for (const statement of statements) {
            statement.result = this.execute(statement);
        }
        this.scope = currentScope;
        return new $Void('block');
    }

    public visitBlockStmt(stmt: Stmt.Block): $Any {
        return this.executeBlock(stmt.statements, new Scope(this.scope));
    }

    public visitIfStmt(stmt: Stmt.If): $Any {
        if (this.evaluate(stmt.condition).isTruthy()) {
            return this.execute(stmt.thenStmt);
        } else if (stmt.elseStmt !== null) {
            return this.execute(stmt.elseStmt);
        }
    }

    public visitWhileStmt(stmt: Stmt.While): $Any {
        while (this.evaluate(stmt.condition).isTruthy()) {
            this.execute(stmt.loop);
        }
        return new $Void('while');
    }

    public visitDoWhileStmt(stmt: Stmt.DoWhile): $Any {
        do {
            this.execute(stmt.loop);
        } while (this.evaluate(stmt.condition).isTruthy());
        return new $Void('dowhile');
    }

    public visitCallExpr(expr: Expr.Call): $Any {
        /*
        const callee = this.evaluate(expr.callee);
        const args = [];
        let thiz: any = null;
        if (expr.callee instanceof Expr.Get) {
            thiz = this.evaluate(expr.callee.entity);
        } else if (expr.thiz !== null) {
            thiz = expr.thiz;
        }
        for (const argument of expr.args) {
            args.push(this.evaluate(argument));
        }

        if (!(callee instanceof CallableEntity) &&
            !(callee instanceof InternalEntity)
        ) {
            this.interpreterError(`${callee} is not a function`);
        }
        const func = callee as CallableEntity;
        if (args.length !== func.arity() && func.arity() !== -1) {
            conzole.warn(`Warning at (${expr.paren.line}): ${callee} mismatched argument length; \n Expected ${func.arity()} but got ${args.length} `);
        }
        return func.call(this, thiz, args);
        */ return new $Null();
    }

    public visitSuperExpr(expr: Expr.Super): $Any {
        /*
        const thiz: InstanceEntity = this.scope.first('this');
        if (!thiz) {
            conzole.error(`super can only be called on child instances`);
        }
        const clazz: FunctionEntity = this.scope.obtain(thiz.instanceof);
        if (!clazz) {
            conzole.error(`${thiz} is not an instance of an entity`);
        }
        const parent: FunctionEntity = clazz.parent;
        if (!parent) {
            conzole.error(`${thiz} entity has no parent`);
        }
        let method: FunctionEntity = null;
        for (const key of expr.index) {
            // method = parent.get(key.lexeme);
        }
        const args = [];
        for (const argument of expr.args) {
            args.push(this.evaluate(argument));
        }
        if (method) {
            return method.call(this, thiz, args);
        } else {
            return parent.call(this, thiz, args);
        }
        */ return new $Null();
    }

    public visitNewExpr(expr: Expr.New): $Any {
        /*
        const construct = expr.construct as Expr.Call;
        const callee = this.evaluate(construct.callee);
        const newInstance = new InstanceEntity(<any> callee);
        construct.thiz = newInstance;
        this.evaluate(construct);
        return newInstance;
        */ return new $Null();
    }

    public visitEntityExpr(expr: Expr.Entity) {
        /*
        const entity = new PrototypeEntity();
        for (const property of expr.properties) {
            const key  = this.evaluate((property as Expr.Set).key);
            const value = this.evaluate((property as Expr.Set).value);
            entity.set(key.value, value);
        }
        return entity;
        */ return new $Null();
    }

    public visitKeyExpr(expr: Expr.Key): $Any {
        return new $Any(expr.name.lexeme);
    }


    public visitGetExpr(expr: Expr.Get): $Any {
        const entity = this.evaluate(expr.entity);
        const key = this.evaluate(expr.key);
        return entity.get(key);
    }


    public visitSetExpr(expr: Expr.Set): $Any {
        /*
        const entity = this.evaluate(expr.entity);
        const key = this.evaluate(expr.key);
        if (!(entity instanceof PrototypeEntity)) {
            conzole.warn(`${entity} is not a runtime Object`);
        }
        const value = this.evaluate(expr.value);
        (entity as PrototypeEntity).set(key.value, value);
        return value.value;
        */ return new $Null();
    }

    public visitFuncStmt(stmt: Stmt.Func): $Any {
        /*
        const func: FunctionEntity = new FunctionEntity(stmt, this.scope);
        this.scope.define(stmt.name.lexeme, func);
        return null;
        */ return new $Null();
    }

    public visitClassStmt(stmt: Stmt.Class): $Any {
        /*
        let construct = stmt.methods.find((method) => method.name.lexeme === "constructor");
        const methods = stmt.methods.filter((method) => method.name.lexeme !== "constructor");

        if (!construct) {
            construct = new Stmt.Func(stmt.name, [], []);
        } else {
            construct.name = stmt.name;
        }

        const func: FunctionEntity = new FunctionEntity(construct, this.scope);
        let parent: FunctionEntity = null;
        if (stmt.parent) {
            parent = this.scope.get(stmt.parent);
            if (parent) {
                func.parent = parent;
                func.prototype = new Prototype(parent.properties, parent.prototype, func);
            }
        }
        for (const method of methods) {
            func.properties.set(method.name.lexeme, new FunctionEntity(method, this.scope, parent));
        }

        this.scope.set(stmt.name.lexeme, func);
        return null;
        */ return new $Null();
    }

    public visitLambdaExpr(expr: Expr.Lambda): $Any {
        /*
        const lambda: Stmt.Func = expr.lambda as Stmt.Func;
        const func: FunctionEntity = new FunctionEntity(lambda, this.scope);
        return func;
        */ return new $Null();
    }

    public visitReturnStmt(stmt: Stmt.Return): $Any {
        /*
        let value = null;
        if (stmt.value) {
            value = this.evaluate(stmt.value);
        }
        throw new Return(value);
        */ return new $Null();
    }

    public visitRangeExpr(expr: Expr.Range): $Any {
        return new $Range(new RangeValue(
            expr.start ? this.evaluate(expr.start).value : null,
            expr.end ? this.evaluate(expr.end).value : null,
            expr.step ? this.evaluate(expr.step).value : null
        ));
    }

}
