import * as Expr from './expression';
// import * as Runtime from './runtime';
import * as Stmt from './statement';
import { Console } from './console';
import { Scope } from './scope';
import { TokenType, Token } from './token';
import { $Any, $Void, $String, $Number, $Null, $Boolean, RangeValue, $Range, $Dictionary, $List, $Function, $Return, $Class, $Object } from './types';
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
        console.log(data.toString());
        conzole.log(data.toString());
        return data;
    }

    public visitVarStmt(stmt: Stmt.Var): $Any {
        let value = new $Null();
        if (stmt.initializer !== null) {
            value = this.evaluate(stmt.initializer);
        }
        if (value.isLambda()) {
            (value as any).name = stmt.name.lexeme;
        }
        this.scope.define(stmt.name.lexeme, value);
        return value;
    }

    public visitVariableExpr(expr: Expr.Variable): $Any {
        return this.scope.get(expr.name);
    }

    public visitPostfixExpr(expr: Expr.Postfix): $Any {
        const value = this.scope.get(expr.name).value;
        const newValue = new $Number(value + expr.increment);
        this.scope.assign(expr.name.lexeme, newValue);
        return value;
    }

    public visitListExpr(expr: Expr.List): $Any {
        const values: $Any[] = [];
        for (const expression of expr.value) {
            values.push(this.evaluate(expression));
        }
        return new $List(values);
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
                this.scope.assign((<Expr.Variable> expr.right).name.lexeme, new $Number(incValue));
                return new $Number(incValue);
            case TokenType.MinusMinus:
                const decValue = Number(right) - 1;
                this.scope.assign((<Expr.Variable> expr.right).name.lexeme, new $Number(decValue));
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
        const callee = this.evaluate(expr.callee);
        const args = [];
        let thiz: any = null;
        if (expr.callee instanceof Expr.Get) {
            if (expr.callee.entity instanceof Expr.Super) {
                thiz = this.scope.get(new Token(TokenType.Identifier, 'this', 'this', 0));
            } else {
                thiz = this.evaluate(expr.callee.entity);
            }
        } else if (expr.thiz !== null) {
            thiz = expr.thiz;
        }
        for (const argument of expr.args) {
            args.push(this.evaluate(argument));
        }

        if (!callee.isFunction()) {
            this.interpreterError(`${callee} is not a function`);
        }
        const func = callee as $Function;
        if (args.length !== func.arity && func.arity !== -1) {
            conzole.warn(`Warning at (${expr.paren.line}): ${callee} mismatched argument length; \n Expected ${func.arity} but got ${args.length} `);
            if (args.length < func.arity) {
                for (let i = args.length; i <= func.arity; ++i) {
                    args.push(new $Null());
                }
            }
        }
        return func.call(this, thiz, args);
    }

    public visitSuperExpr(expr: Expr.Super): $Any {
        const thiz = this.scope.get(expr.paren);

        if (!thiz.isObject()) {
            this.interpreterError("base expression can be used only inside methods");
        }

        const clazz: $Class = (thiz as $Object).conztructor as $Class;
        const parent = clazz.parent;
        if (parent.isNull()) {
            this.interpreterError("Class " + clazz + "is not inherited from parent");
        }

        return parent;
    }

    public visitNewExpr(expr: Expr.New): $Any {
        const newCall = (expr.clazz as Expr.Call);
        // internal class definition instance
        const clazz: $Class = this.evaluate(newCall.callee) as $Class;

        if (!clazz.isClass()) {
            this.interpreterError(`'${clazz}' is not a class. 'new' statement must be used with classes.`);
        }
        // new object
        const entity = new $Object(new Map(), clazz);
        // constructor method of the class
        const conztructor = clazz.get(new $String('constructor')) as $Function;
        if (conztructor.isFunction()) {
            /*
            const args: $Any[] = [];
            for (const arg of newCall.args) {
                args.push(this.evaluate(arg));
            }
            conztructor.call(this, entity, args);
            */
           this.evaluate(
               new Expr.Call(
                   new Expr.Get(new Expr.Literal(entity), new Expr.Key(conztructor.name)),
                   conztructor.name,
                   newCall.args,
                   entity
                )
            );
        }
        return entity;
    }

    public visitDictionaryExpr(expr: Expr.Dictionary) {
        const dict = new $Dictionary(new Map());
        for (const property of expr.properties) {
            const key  = this.evaluate((property as Expr.Set).key);
            const value = this.evaluate((property as Expr.Set).value);
            dict.set(key, value);
        }
        return dict;
    }

    public visitKeyExpr(expr: Expr.Key): $Any {
        return new $Any(expr.name.literal);
    }

    public visitGetExpr(expr: Expr.Get): $Any {
        const entity = this.evaluate(expr.entity);
        const key = this.evaluate(expr.key);
        return entity.get(key);
    }

    public visitSetExpr(expr: Expr.Set): $Any {
        const entity = this.evaluate(expr.entity);
        const key = this.evaluate(expr.key);
        const value = this.evaluate(expr.value);
        entity.set(key, value);
        return value.value;
    }

    public visitFuncStmt(stmt: Stmt.Func): $Any {
        const func = new $Function(stmt, this.scope);
        this.scope.define(stmt.name.lexeme, func);
        return new $Null();
    }

    public visitClassStmt(stmt: Stmt.Class): $Any {
        let parent: $Any;

        if (stmt.parent === null) {
            parent = new $Null();
        } else {
            parent = this.scope.get(stmt.parent);
        }

        const methods = new Map<any, $Any>();

        for (const method of stmt.methods) {
            methods.set(method.name.lexeme, new $Function(method, this.scope));
        }
        const clazz = new $Class(stmt.name.lexeme, methods, parent);
        this.scope.define(stmt.name.lexeme, clazz);
        return clazz;
    }

    public visitLambdaExpr(expr: Expr.Lambda): $Any {
        const lambda: Stmt.Func = expr.lambda as Stmt.Func;
        const func: $Function = new $Function(lambda, this.scope);
        return func;
    }

    public visitReturnStmt(stmt: Stmt.Return): $Any {
        let value = new $Null();
        if (stmt.value) {
            value = this.evaluate(stmt.value);
        }
        throw new $Return(value);
    }

    public visitRangeExpr(expr: Expr.Range): $Any {
        return new $Range(new RangeValue(
            expr.start ? this.evaluate(expr.start).value : null,
            expr.end ? this.evaluate(expr.end).value : null,
            expr.step ? this.evaluate(expr.step).value : null
        ));
    }

}
