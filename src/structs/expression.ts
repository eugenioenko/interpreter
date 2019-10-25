import { Token, TokenType } from './token';

import { Stmt } from 'statement';

export abstract class Expr {
    // tslint:disable-next-line
    constructor() {}
    public abstract accept<R>(visitor: ExprVisitor<R>): R;
}

// tslint:disable-next-line
export interface ExprVisitor<R> {
    visitAssignExpr(expr: Assign): R;
    visitBinaryExpr(expr: Binary): R;
    visitCallExpr(expr: Call): R;
    visitEntityExpr(expr: Entity): R;
    visitGetExpr(expr: Get): R;
    visitGroupingExpr(expr: Grouping): R;
    visitKeyExpr(expr: Key): R;
    visitLambdaExpr(expr: Lambda): R;
    visitLogicalExpr(expr: Logical): R;
    visitListExpr(expr: List): R;
    visitLiteralExpr(expr: Literal): R;
    visitNewExpr(expr: New): R;
    visitPostfixExpr(expr: Postfix): R;
    visitRangeExpr(expr: Range): R;
    visitRegExExpr(expr: RegEx): R;
    visitSetExpr(expr: Set): R;
    visitSuperExpr(expr: Super): R;
    visitTernaryExpr(expr: Ternary): R;
    visitUnaryExpr(expr: Unary): R;
    visitVariableExpr(expr: Variable): R;
    visitZtringExpr(expr: Ztring): R;
}

export class Assign extends Expr {
    public name: Token;
    public value: Expr;

    constructor(name: Token, value: Expr) {
        super();
        this.name = name;
        this.value = value;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitAssignExpr(this);
    }

    public toString(): string {
        return 'Expr.Assign';
    }
}
export class Binary extends Expr {
    public left: Expr;
    public operator: Token;
    public right: Expr;

    constructor(left: Expr, operator: Token, right: Expr) {
        super();
        this.left = left;
        this.operator = operator;
        this.right = right;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitBinaryExpr(this);
    }

    public toString(): string {
        return 'Expr.Binary';
    }
}
export class Call extends Expr {
    public callee: Expr;
    public paren: Token;
    public args: Expr[];
    public thiz: any;

    constructor(callee: Expr, paren: Token, args: Expr[], thiz: any) {
        super();
        this.callee = callee;
        this.paren = paren;
        this.args = args;
        this.thiz = thiz;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitCallExpr(this);
    }

    public toString(): string {
        return 'Expr.Call';
    }
}
export class Entity extends Expr {
    public properties: Expr[];

    constructor(properties: Expr[]) {
        super();
        this.properties = properties;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitEntityExpr(this);
    }

    public toString(): string {
        return 'Expr.Entity';
    }
}
export class Get extends Expr {
    public entity: Expr;
    public key: Expr;

    constructor(entity: Expr, key: Expr) {
        super();
        this.entity = entity;
        this.key = key;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitGetExpr(this);
    }

    public toString(): string {
        return 'Expr.Get';
    }
}
export class Grouping extends Expr {
    public expression: Expr;

    constructor(expression: Expr) {
        super();
        this.expression = expression;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitGroupingExpr(this);
    }

    public toString(): string {
        return 'Expr.Grouping';
    }
}
export class Key extends Expr {
    public name: Token;

    constructor(name: Token) {
        super();
        this.name = name;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitKeyExpr(this);
    }

    public toString(): string {
        return 'Expr.Key';
    }
}
export class Lambda extends Expr {
    public lambda: Stmt;

    constructor(lambda: Stmt) {
        super();
        this.lambda = lambda;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitLambdaExpr(this);
    }

    public toString(): string {
        return 'Expr.Lambda';
    }
}
export class Logical extends Expr {
    public left: Expr;
    public operator: Token;
    public right: Expr;

    constructor(left: Expr, operator: Token, right: Expr) {
        super();
        this.left = left;
        this.operator = operator;
        this.right = right;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitLogicalExpr(this);
    }

    public toString(): string {
        return 'Expr.Logical';
    }
}
export class List extends Expr {
    public value: Expr[];

    constructor(value: Expr[]) {
        super();
        this.value = value;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitListExpr(this);
    }

    public toString(): string {
        return 'Expr.List';
    }
}
export class Literal extends Expr {
    public value: any;

    constructor(value: any) {
        super();
        this.value = value;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitLiteralExpr(this);
    }

    public toString(): string {
        return 'Expr.Literal';
    }
}
export class New extends Expr {
    public construct: Expr;

    constructor(construct: Expr) {
        super();
        this.construct = construct;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitNewExpr(this);
    }

    public toString(): string {
        return 'Expr.New';
    }
}
export class Postfix extends Expr {
    public name: Token;
    public increment: number;

    constructor(name: Token, increment: number) {
        super();
        this.name = name;
        this.increment = increment;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitPostfixExpr(this);
    }

    public toString(): string {
        return 'Expr.Postfix';
    }
}
export class Range extends Expr {
    public start: Expr;
    public end: Expr;
    public step: Expr;

    constructor(start: Expr, end: Expr, step: Expr) {
        super();
        this.start = start;
        this.end = end;
        this.step = step;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitRangeExpr(this);
    }

    public toString(): string {
        return 'Expr.Range';
    }
}
export class RegEx extends Expr {
    public value: RegExp;

    constructor(value: RegExp) {
        super();
        this.value = value;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitRegExExpr(this);
    }

    public toString(): string {
        return 'Expr.RegEx';
    }
}
export class Set extends Expr {
    public entity: Expr;
    public key: Expr;
    public value: Expr;

    constructor(entity: Expr, key: Expr, value: Expr) {
        super();
        this.entity = entity;
        this.key = key;
        this.value = value;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitSetExpr(this);
    }

    public toString(): string {
        return 'Expr.Set';
    }
}
export class Super extends Expr {
    public index: Token[];
    public args: Expr[];

    constructor(index: Token[], args: Expr[]) {
        super();
        this.index = index;
        this.args = args;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitSuperExpr(this);
    }

    public toString(): string {
        return 'Expr.Super';
    }
}
export class Ternary extends Expr {
    public condition: Expr;
    public thenExpr: Expr;
    public elseExpr: Expr;

    constructor(condition: Expr, thenExpr: Expr, elseExpr: Expr) {
        super();
        this.condition = condition;
        this.thenExpr = thenExpr;
        this.elseExpr = elseExpr;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitTernaryExpr(this);
    }

    public toString(): string {
        return 'Expr.Ternary';
    }
}
export class Unary extends Expr {
    public operator: Token;
    public right: Expr;

    constructor(operator: Token, right: Expr) {
        super();
        this.operator = operator;
        this.right = right;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitUnaryExpr(this);
    }

    public toString(): string {
        return 'Expr.Unary';
    }
}
export class Variable extends Expr {
    public name: Token;

    constructor(name: Token) {
        super();
        this.name = name;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitVariableExpr(this);
    }

    public toString(): string {
        return 'Expr.Variable';
    }
}
export class Ztring extends Expr {
    public value: string;

    constructor(value: string) {
        super();
        this.value = value;
    }

    public accept<R>(visitor: ExprVisitor<R>): R {
        return visitor.visitZtringExpr(this);
    }

    public toString(): string {
        return 'Expr.Ztring';
    }
}
