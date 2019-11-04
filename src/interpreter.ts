import * as Expr from './types/expression';
import * as Stmt from './types/statement';
import { Console } from './console';
import { Scope } from './scope';
import { TokenType, Token } from './token';
import { Runtime } from './runtime';
import { $Any } from './types/any';
import { $Boolean } from './types/boolean';
import { $Class } from './types/class';
import { $Dictionary } from './types/dictionary';
import { $Function } from './types/function';
import { $List } from './types/list';
import { $Null } from './types/null';
import { $Number } from './types/number';
import { $Object } from './types/object';
import { $Range, RangeValue } from './types/range';
import { $String } from './types/string';
import { $Void } from './types/void';
import { DataType } from './types/type.enum';
import { capitalize } from './utils';
declare var conzole: Console;

export class Interpreter implements
    Expr.ExprVisitor<$Any>,
    Stmt.StmtVisitor<$Any> {
    public global = new Scope();
    public scope = this.global;
    public errors: string[] = [];

    constructor( ) {
        this.global.set('math', new $Dictionary(Runtime.Math));
        this.global.set('console', new $Dictionary(Runtime.Console));
        this.global.set('re', Runtime.Utils.get('re'));
    }

    private evaluate(expr: Expr.Expr): $Any {
        return expr.result = expr.accept(this);
    }

    private execute(stmt: Stmt.Stmt): $Any {
        return stmt.result = stmt.accept(this);
    }

    public eval(stmt: Stmt.Stmt): any {
        try {
            return  {
                error: false,
                value: stmt.accept(this).toString(),
            };
        } catch (e) {
            return {
                error: true,
                value: e.message
            };
        }
    }

    public interpet(statements: Stmt.Stmt[]): Stmt.Stmt[] {
        this.errors = [];
        for (const statement of statements) {
            try {
                this.execute(statement);
            } catch (e) {
                conzole.error(e.message);
                this.errors.push(e.message);
                if (this.errors.length > 100) {
                    this.errors.push('Runtime Error limit exceeded');
                    return statements;
                }
            }
        }
        return statements;
    }

    private error(message: string): void {
        throw new Error(`Runtime Error => ${message}`);
    }

    public visitExpressionStmt(stmt: Stmt.Expression): $Any {
        return this.evaluate(stmt.expression);
    }

    public visitPrintStmt(stmt: Stmt.Print): $Any {
        const data = this.evaluate(stmt.expression);
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
        return this.scope.get(expr.name.lexeme, expr.name);
    }

    public visitPostfixExpr(expr: Expr.Postfix): $Any {
        const value = this.scope.get(expr.name.lexeme, expr.name);
        const newValue = new $Number(value.value + expr.increment);
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
        const left = this.evaluate(expr.left);
        const right = this.evaluate(expr.right);
        switch (expr.operator.type) {
            case TokenType.Minus:
            case TokenType.MinusEqual:
                return new $Number(left.value - right.value);
            case TokenType.Slash:
            case TokenType.SlashEqual:
                return new $Number(left.value / right.value);
            case TokenType.Star:
            case TokenType.StarEqual:
                return new $Number(left.value * right.value);
            case TokenType.Percent:
            case TokenType.PercentEqual:
                return new $Number(left.value % right.value);
            case TokenType.Plus:
            case TokenType.PlusEqual:
                if (left.isNumber() && right.isNumber()) {
                    return new $Number(left.value + right.value);
                }
                if (left.isString() && right.isString()) {
                    return new $String(left.value + right.value);
                }
                if (left.isList() && right.isList()) {
                    return new $List(left.value.concat(right.value));
                }
                if (left.isDictionary() && right.isDictionary()) {
                    return new $Dictionary(new Map([...left.value, ...right.value]));
                }
                return new $String(left.value.toString() + right.value.toString());
            case TokenType.Pipe:
                return new $Number(left.value | right.value);
            case TokenType.Caret:
                return new $Number(left.value ^ right.value);
            case TokenType.Greater:
                return new $Boolean(left.value > right.value);
            case TokenType.GreaterEqual:
                return new $Boolean(left.value >= right.value);
            case TokenType.Less:
                return new $Boolean(left.value < right.value);
            case TokenType.LessEqual:
                return new $Boolean(left.value <= right.value);
            case TokenType.EqualEqual:
                return new $Boolean(left.value === right.value);
            case TokenType.BangEqual:
                return new $Boolean(left.value !== right.value);
            default:
                this.error('Unknown binary operator ' + expr.operator);
                return new $Null(); // unreachable
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
        const right = this.evaluate(expr.right);
        switch (expr.operator.type) {
            case TokenType.Minus:
                return new $Number(-Number(right.value));
            case TokenType.Bang:
                return new $Boolean(!right.isTruthy());
            case TokenType.PlusPlus:
                const incValue = Number(right.value) + 1;
                this.scope.assign((<Expr.Variable> expr.right).name.lexeme, new $Number(incValue));
                return new $Number(incValue);
            case TokenType.MinusMinus:
                const decValue = Number(right.value) - 1;
                this.scope.assign((<Expr.Variable> expr.right).name.lexeme, new $Number(decValue));
                return new $Number(decValue);
            default:
                this.error('Unknown unary operator ' + expr.operator);
                return new $Null(); // should be unreachable
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
            try {
                this.execute(stmt.loop);
            } catch (e) {
                if (e instanceof $Any && e.type === DataType.Break) {
                    break;
                } else if (e instanceof $Any && e.type === DataType.Continue) {
                    continue;
                } else {
                    throw e;
                }
            }
        }
        return new $Void('while');
    }

    public visitDoWhileStmt(stmt: Stmt.DoWhile): $Any {
        do {
            try {
                this.execute(stmt.loop);
            } catch (e) {
                if (e instanceof $Any && e.type === DataType.Break) {
                    break;
                } else if (e instanceof $Any && e.type === DataType.Continue) {
                    continue;
                } else {
                    throw e;
                }
            }
        } while (this.evaluate(stmt.condition).isTruthy());
        return new $Void('dowhile');
    }

    public visitCallExpr(expr: Expr.Call): $Any {
        // verify callee is a function
        const callee = this.evaluate(expr.callee);
        if (!callee.isFunction()) {
            this.error(`${callee} is not a function`);
        }

        // set this in function scope
        let thiz: any = null;
        if (expr.callee instanceof Expr.Get) {
            if (expr.callee.entity instanceof Expr.Base) {
                thiz = this.scope.get('this', expr.paren);
            } else {
                thiz = this.evaluate(expr.callee.entity);
            }
        } else if (expr.thiz !== null) {
            thiz = expr.thiz;
        }

        // evaluate function arguments
        const args = [];
        for (const argument of expr.args) {
            args.push(this.evaluate(argument));
        }

        // pass arguments to function
        const func = callee as $Function;
        if (args.length !== func.arity && func.arity !== -1) {
            conzole.warn(`Warning at (${expr.paren.line}): ${callee} mismatched argument count; \n Expected ${func.arity} but got ${args.length} `);
            if (args.length < func.arity) {
                for (let i = args.length; i <= func.arity; ++i) {
                    args.push(new $Null());
                }
            }
        }
        // execute function
        return func.call(thiz, args, this);
    }

    public visitBaseExpr(expr: Expr.Base): $Any {
        const thiz = this.scope.get(expr.paren.lexeme, expr.paren);

        if (!thiz.isObject()) {
            this.error("base expression can be used only inside methods");
        }

        const clazz: $Class = (thiz as $Object).conztructor as $Class;
        const parent = clazz.parent;
        if (parent.isNull()) {
            this.error("Class " + clazz + " has not been extended and has no base");
        }

        return parent;
    }

    public visitNewExpr(expr: Expr.New): $Any {
        const newCall = (expr.clazz as Expr.Call);
        // internal class definition instance
        const clazz: $Class = this.evaluate(newCall.callee) as $Class;

        if (!clazz.isClass()) {
            this.error(`'${clazz}' is not a class. 'new' statement must be used with classes.`);
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
                   new Expr.Get(new Expr.Literal(entity, expr.line), new Expr.Key(conztructor.declaration.name, expr.line), TokenType.Dot, expr.line),
                   conztructor.declaration.name,
                   newCall.args,
                   entity,
                   expr.line
                )
            );
        }
        return entity;
    }

    public visitDictionaryExpr(expr: Expr.Dictionary): $Any {
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
        if (entity.isNull() && expr.type === TokenType.QuestionDot) {
            return new $Null();
        }
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
        return func;
    }

    public visitClassStmt(stmt: Stmt.Class): $Any {
        let parent: $Any;

        if (stmt.parent === null) {
            parent = new $Null();
        } else {
            parent = this.scope.get(stmt.parent.lexeme, stmt.parent);
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
        throw new $Any(value, DataType.Return);
    }

    public visitBreakStmt(stmt: Stmt.Break): $Any {
        throw new $Any(null, DataType.Break);
    }

    public visitContinueStmt(stmt: Stmt.Continue): $Any {
        throw new $Any(null, DataType.Continue);
    }

    public visitRangeExpr(expr: Expr.Range): $Any {
        return new $Range(new RangeValue(
            expr.start ? this.evaluate(expr.start).value : null,
            expr.end ? this.evaluate(expr.end).value : null,
            expr.step ? this.evaluate(expr.step).value : null
        ));
    }

    public visitTypeofExpr(expr: Expr.Typeof): $Any {
        const value = this.evaluate(expr.value);
        return new $String(DataType[value.type].toLowerCase());
    }

    public visitIsExpr(expr: Expr.InstanceOf): $Any {
        const left = this.evaluate(expr.left);
        const right = DataType[capitalize(expr.right.lexeme)];
        // is direct instance of class
        if (left.isObject() && (left as $Object).name === expr.right.lexeme) {
            return new $Boolean(true);
        }
        // is not a type
        if (typeof right === 'undefined' || isNaN(right)) {
            return new $Boolean(false);
        }
        // is a type
        return new $Boolean(left.type === right);
    }

    public visitInstanceOfExpr(expr: Expr.InstanceOf): $Any {
        const left = this.evaluate(expr.left);
        if (!left.isObject()) {
            return new $Boolean(false);
        }
        const className = expr.right.lexeme;

        // All instances derive from Object
        if (className.toLowerCase() === 'object') {
            return new $Boolean(true);
        }
        const instance = left as $Object;
        let conztructor = instance.conztructor as $Class;
        if (conztructor.name === className) {
            return new $Boolean(true);
        }
        while (!conztructor.parent.isNull()) {
            conztructor = conztructor.parent as $Class;
            if (conztructor.name === className) {
                return new $Boolean(true);
            }
        }
        return new $Boolean(false);

    }

}
