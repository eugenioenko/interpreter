import * as Expr from './expression';
import * as Stmt from './statement';
import { FunctionEntity, CallableEntity, InternalEntity, InstanceEntity, PrototypeEntity, ArrayEntity, StringEntity, IndexRange } from './entity';
import { Console } from './console';
import { Return } from './return';
import { Scope } from './scope';
import { TokenType } from './token';
import * as Runtime from './runtime';
import { Prototype } from './prototype';
declare var conzole: Console;

export class Interpreter implements
    Expr.ExprVisitor<any>,
    Stmt.StmtVisitor<void> {
    public global = new Scope();
    private scope = this.global;

    constructor( ) {
        this.global.define('echo', Runtime.echoFunction());
        this.global.define('rand', Runtime.randFunction());
    }

    private evaluate(expr: Expr.Expr): any {
        return expr.accept(this);
    }

    private execute(stmt: Stmt.Stmt): void {
        stmt.accept(this);
    }

    public interpet(statements: Stmt.Stmt[]): any {
        for (const statement of statements) {
            this.execute(statement);
        }
    }

    private interpreterError(message: string): void {
        conzole.log(`[interpreter error] => ${message}`);
        throw new Error();
    }

    public visitExpressionStmt(stmt: Stmt.Expression): void {
        this.evaluate(stmt.expression);
    }

    public visitPrintStmt(stmt: Stmt.Print): void {
        let value = this.evaluate(stmt.expression);
        value = value === null ? "null" : value;
        conzole.log(value);
    }

    public visitVarStmt(stmt: Stmt.Var): void {
        let value: object = null;
        if (stmt.initializer !== null) {
            value = this.evaluate(stmt.initializer);
        }
        if (value instanceof FunctionEntity && value.name === "lambda") {
            value.name = stmt.name.lexeme;
            value.prototype.set('name', value.name);
        }
        if (stmt.type.type === TokenType.var)  {
            this.scope.set(stmt.name.lexeme, value);
        } else {
            this.scope.define(stmt.name.lexeme, value);
        }
    }

    public visitVariableExpr(expr: Expr.Variable): any {
        return this.scope.get(expr.name);
    }

    public visitListExpr(expr: Expr.List): any {
        const values: any[] = [];
        for (const expression of expr.value) {
            values.push(this.evaluate(expression));
        }
        return new ArrayEntity(values);
    }

    public visitZtringExpr(expr: Expr.Ztring): any {
        return new StringEntity(expr.value);
    }

    public visitAssignExpr(expr: Expr.Assign): void {
        const value = this.evaluate(expr.value);
        this.scope.assign(expr.name.lexeme, value);
    }

    public visitBinaryExpr(expr: Expr.Binary): any {
        let left = this.evaluate(expr.left);
        let right = this.evaluate(expr.right);
        left = left instanceof StringEntity ? left.toString() : left;
        right = right instanceof StringEntity ? right.toString() : right;
        switch (expr.operator.type) {
            case TokenType.minus:
                return (left - right) as number;
            case TokenType.slash:
                return (left / right) as number;
            case TokenType.star:
                return (left * right) as number;
            case TokenType.percent:
                return (left % right) as number;
            case TokenType.plus:
                if (!isNaN(left) && !isNaN(right)) {
                    return (left + right) as number;
                }
                if (left instanceof ArrayEntity && right instanceof ArrayEntity) {
                    return new ArrayEntity(left.values.concat(right.values));
                }
                return new StringEntity(left as string + right as string);
            case TokenType.pipe:
                return (left | right) as number;
            case TokenType.caret:
                return (left ^ right) as number;
            case TokenType.greater:
                return <number> left > <number> right;
            case TokenType.greaterEqual:
                return <number> left >= <number> right;
            case TokenType.less:
                return <number> left < <number> right;
            case TokenType.lessEqual:
                return <number> left <= <number> right;
            case TokenType.equalEqual:
                // tslint:disable-next-line
                return left == right;
            case TokenType.equalEqualEqual:
                return left === right;
            case TokenType.bangEqual:
                // tslint:disable-next-line
                return left != right;
            case TokenType.bangEqualEqual:
                return left !== right;
            default:
                conzole.warn(expr);
                return null; // unreachable
                break;
        }
    }

    public visitTernaryExpr(expr: Expr.Ternary): any {
        return this.evaluate(expr.condition) ? this.evaluate(expr.thenExpr) : this.evaluate(expr.elseExpr);
    }

    public visitGroupingExpr(expr: Expr.Grouping): any {
        return this.evaluate(expr.expression);
    }

    public visitLiteralExpr(expr: Expr.Literal): any {
        return expr.value;
    }

    public visitUnaryExpr(expr: Expr.Unary): any {
        const right = this.evaluate(expr.right);
        switch (expr.operator.type) {
            case TokenType.minus:
                return -Number(right);
            case TokenType.bang:
                return !Boolean(right);
            case TokenType.dollar:
                return right.length;
            case TokenType.plusPlus:
                const incValue = Number(right) + 1;
                this.scope.assign((<Expr.Variable> expr.right).name.lexeme, incValue);
                return incValue;
            case TokenType.minusMinus:
                const decValue = Number(right) - 1;
                this.scope.assign((<Expr.Variable> expr.right).name.lexeme, decValue);
                return decValue;
            default:
                return null; // should be unreachable
        }
    }

    public executeBlock(statements: Stmt.Stmt[], nextScope: Scope): void {
        const currentScope = this.scope;
        this.scope = nextScope;
        for (const statement of statements) {
            this.execute(statement);
        }
        this.scope = currentScope;
    }

    public visitBlockStmt(stmt: Stmt.Block): void {
        this.executeBlock(stmt.statements, new Scope(this.scope));
    }

    public visitIfStmt(stmt: Stmt.If): void {
        if (this.evaluate(stmt.condition)) {
            this.execute(stmt.thenStmt);
        } else if (stmt.elseStmt !== null) {
            this.execute(stmt.elseStmt);
        }
    }

    public visitWhileStmt(stmt: Stmt.While): void {
        while (this.evaluate(stmt.condition)) {
            this.execute(stmt.loop);
        }
    }

    public visitDoWhileStmt(stmt: Stmt.DoWhile): void {
        do {
            this.execute(stmt.loop);
        } while (this.evaluate(stmt.condition));
    }

    public visitCallExpr(expr: Expr.Call): object {
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
    }

    public visitSuperExpr(expr: Expr.Super): any {
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
        for (let key of expr.index) {
            method = parent.get(key.lexeme);
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
    }

    public visitNewExpr(expr: Expr.New): object {
        const construct = expr.construct as Expr.Call;
        const callee = this.evaluate(construct.callee);
        const newInstance = new InstanceEntity(callee);
        construct.thiz = newInstance;
        this.evaluate(construct);
        return newInstance;
    }

    public visitEntityExpr(expr: Expr.Entity) {
        const entity = new PrototypeEntity();
        for (const property of expr.properties) {
            const key  = this.evaluate((property as Expr.Set).key);
            const value = this.evaluate((property as Expr.Set).value);
            entity.set(key, value);
        }
        return entity;
    }

    public visitKeyExpr(expr: Expr.Key): string {
        return expr.name.lexeme;
    }

    public visitGetExpr(expr: Expr.Get): any {
        const entity = this.evaluate(expr.entity);
        const key = this.evaluate(expr.key);
        if (entity instanceof PrototypeEntity) {
            return entity.get(key);
        }
        this.interpreterError(`${entity}.${key}: only instances have properties`);
    }

    public visitSetExpr(expr: Expr.Set): void {
        const entity = this.evaluate(expr.entity);
        const key = this.evaluate(expr.key);
        if (!(entity instanceof PrototypeEntity)) {
            conzole.warn(`${entity} is not a runtime Object`);
        }
        const value = this.evaluate(expr.value);
        (entity as PrototypeEntity).set(key, value);
        return value;
    }

    public visitFuncStmt(stmt: Stmt.Func): any {
        const func: FunctionEntity = new FunctionEntity(stmt, this.scope);
        this.scope.define(stmt.name.lexeme, func);
        return null;
    }

    public visitClassStmt(stmt: Stmt.Class): any {
        let construct = stmt.methods.find(method => method.name.lexeme === "constructor");
        const methods = stmt.methods.filter(method => method.name.lexeme !== "constructor");

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
        for (let method of methods) {
            func.properties.set(method.name.lexeme, new FunctionEntity(method, this.scope, parent));
        }

        this.scope.set(stmt.name.lexeme, func);
        return null;
    }

    public visitLambdaExpr(expr: Expr.Lambda): object {
        const lambda: Stmt.Func = expr.lambda as Stmt.Func;
        const func: FunctionEntity = new FunctionEntity(lambda, this.scope);
        return func;
    }

    public visitReturnStmt(stmt: Stmt.Return): any {
        let value = null;
        if (stmt.value) {
            value = this.evaluate(stmt.value);
        }
        throw new Return(value);
    }

    public visitRangeExpr(expr: Expr.Range): any {
        return new IndexRange(
            expr.start ? this.evaluate(expr.start) : null,
            expr.end ? this.evaluate(expr.end) : null,
            expr.step ? this.evaluate(expr.step) : null
        );
    }

}
