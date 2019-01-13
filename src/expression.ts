import { Token } from 'token';

import { Stmt } from 'statement';

export abstract class Expr {
    constructor() {}
    abstract accept<R>(visitor: ExprVisitor<R>): R;
}

export interface ExprVisitor<R> {
	visitAssignExpr(expr: Assign): R;
	visitBinaryExpr(expr: Binary): R;
	visitTernaryExpr(expr: Ternary): R;
	visitCallExpr(expr: Call): R;
	visitEntityExpr(expr: Entity): R;
	visitGetExpr(expr: Get): R;
	visitSetExpr(expr: Set): R;
	visitNewExpr(expr: New): R;
	visitGroupingExpr(expr: Grouping): R;
	visitLiteralExpr(expr: Literal): R;
	visitUnaryExpr(expr: Unary): R;
	visitVariableExpr(expr: Variable): R;
	visitLambdaExpr(expr: Lambda): R;
	visitArrayExpr(expr: Array): R;
}

export class Assign extends Expr {
	public name: Token;
	public value: Expr;

	constructor(name: Token, value: Expr) {
		super();
		this.name = name;
		this.value = value;
	}

    accept<R>(visitor: ExprVisitor<R>): R {
      return visitor.visitAssignExpr(this);
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

    accept<R>(visitor: ExprVisitor<R>): R {
      return visitor.visitBinaryExpr(this);
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

    accept<R>(visitor: ExprVisitor<R>): R {
      return visitor.visitTernaryExpr(this);
    }
}

export class Call extends Expr {
	public callee: Expr;
	public paren: Token;
	public args: Expr[];

	constructor(callee: Expr, paren: Token, args: Expr[]) {
		super();
		this.callee = callee;
		this.paren = paren;
		this.args = args;
	}

    accept<R>(visitor: ExprVisitor<R>): R {
      return visitor.visitCallExpr(this);
    }
}

export class Entity extends Expr {
	public object: Expr;

	constructor(object: Expr) {
		super();
		this.object = object;
	}

    accept<R>(visitor: ExprVisitor<R>): R {
      return visitor.visitEntityExpr(this);
    }
}

export class Get extends Expr {
	public object: Expr;
	public name: Token;

	constructor(object: Expr, name: Token) {
		super();
		this.object = object;
		this.name = name;
	}

    accept<R>(visitor: ExprVisitor<R>): R {
      return visitor.visitGetExpr(this);
    }
}

export class Set extends Expr {
	public object: Expr;
	public name: Token;
	public value: Expr;

	constructor(object: Expr, name: Token, value: Expr) {
		super();
		this.object = object;
		this.name = name;
		this.value = value;
	}

    accept<R>(visitor: ExprVisitor<R>): R {
      return visitor.visitSetExpr(this);
    }
}

export class New extends Expr {
	public construct: Expr;

	constructor(construct: Expr) {
		super();
		this.construct = construct;
	}

    accept<R>(visitor: ExprVisitor<R>): R {
      return visitor.visitNewExpr(this);
    }
}

export class Grouping extends Expr {
	public expression: Expr;

	constructor(expression: Expr) {
		super();
		this.expression = expression;
	}

    accept<R>(visitor: ExprVisitor<R>): R {
      return visitor.visitGroupingExpr(this);
    }
}

export class Literal extends Expr {
	public value: any;

	constructor(value: any) {
		super();
		this.value = value;
	}

    accept<R>(visitor: ExprVisitor<R>): R {
      return visitor.visitLiteralExpr(this);
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

    accept<R>(visitor: ExprVisitor<R>): R {
      return visitor.visitUnaryExpr(this);
    }
}

export class Variable extends Expr {
	public name: Token;

	constructor(name: Token) {
		super();
		this.name = name;
	}

    accept<R>(visitor: ExprVisitor<R>): R {
      return visitor.visitVariableExpr(this);
    }
}

export class Lambda extends Expr {
	public lambda: Stmt;

	constructor(lambda: Stmt) {
		super();
		this.lambda = lambda;
	}

    accept<R>(visitor: ExprVisitor<R>): R {
      return visitor.visitLambdaExpr(this);
    }
}

export class Array extends Expr {
	public value: Expr[];

	constructor(value: Expr[]) {
		super();
		this.value = value;
	}

    accept<R>(visitor: ExprVisitor<R>): R {
      return visitor.visitArrayExpr(this);
    }
}


