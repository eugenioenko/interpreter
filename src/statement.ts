import { Token } from 'token';

import { Expr } from 'expression';

export abstract class Stmt {
    constructor() {}
    abstract accept<R>(visitor: StmtVisitor<R>): R;
}

export interface StmtVisitor<R> {
	visitBlockStmt(stmt: Block): R;
	visitExpressionStmt(stmt: Expression): R;
	visitIfStmt(stmt: If): R;
	visitFuncStmt(stmt: Func): R;
	visitClassStmt(stmt: Class): R;
	visitReturnStmt(stmt: Return): R;
	visitWhileStmt(stmt: While): R;
	visitDoWhileStmt(stmt: DoWhile): R;
	visitPrintStmt(stmt: Print): R;
	visitVarStmt(stmt: Var): R;
}

export class Block extends Stmt {
	public statements: Stmt[];

	constructor(statements: Stmt[]) {
		super();
		this.statements = statements;
	}

    accept<R>(visitor: StmtVisitor<R>): R {
      return visitor.visitBlockStmt(this);
    }

    toString(): string {
      return 'Stmt.Block';
    }
}

export class Expression extends Stmt {
	public expression: Expr;

	constructor(expression: Expr) {
		super();
		this.expression = expression;
	}

    accept<R>(visitor: StmtVisitor<R>): R {
      return visitor.visitExpressionStmt(this);
    }

    toString(): string {
      return 'Stmt.Expression';
    }
}

export class If extends Stmt {
	public condition: Expr;
	public thenStmt: Stmt;
	public elseStmt: Stmt;

	constructor(condition: Expr, thenStmt: Stmt, elseStmt: Stmt) {
		super();
		this.condition = condition;
		this.thenStmt = thenStmt;
		this.elseStmt = elseStmt;
	}

    accept<R>(visitor: StmtVisitor<R>): R {
      return visitor.visitIfStmt(this);
    }

    toString(): string {
      return 'Stmt.If';
    }
}

export class Func extends Stmt {
	public name: Token;
	public params: Token[];
	public body: Stmt[];

	constructor(name: Token, params: Token[], body: Stmt[]) {
		super();
		this.name = name;
		this.params = params;
		this.body = body;
	}

    accept<R>(visitor: StmtVisitor<R>): R {
      return visitor.visitFuncStmt(this);
    }

    toString(): string {
      return 'Stmt.Func';
    }
}

export class Class extends Stmt {
	public name: Token;
	public methods: Func[];

	constructor(name: Token, methods: Func[]) {
		super();
		this.name = name;
		this.methods = methods;
	}

    accept<R>(visitor: StmtVisitor<R>): R {
      return visitor.visitClassStmt(this);
    }

    toString(): string {
      return 'Stmt.Class';
    }
}

export class Return extends Stmt {
	public keyword: Token;
	public value: Expr;

	constructor(keyword: Token, value: Expr) {
		super();
		this.keyword = keyword;
		this.value = value;
	}

    accept<R>(visitor: StmtVisitor<R>): R {
      return visitor.visitReturnStmt(this);
    }

    toString(): string {
      return 'Stmt.Return';
    }
}

export class While extends Stmt {
	public condition: Expr;
	public loop: Stmt;

	constructor(condition: Expr, loop: Stmt) {
		super();
		this.condition = condition;
		this.loop = loop;
	}

    accept<R>(visitor: StmtVisitor<R>): R {
      return visitor.visitWhileStmt(this);
    }

    toString(): string {
      return 'Stmt.While';
    }
}

export class DoWhile extends Stmt {
	public loop: Stmt;
	public condition: Expr;

	constructor(loop: Stmt, condition: Expr) {
		super();
		this.loop = loop;
		this.condition = condition;
	}

    accept<R>(visitor: StmtVisitor<R>): R {
      return visitor.visitDoWhileStmt(this);
    }

    toString(): string {
      return 'Stmt.DoWhile';
    }
}

export class Print extends Stmt {
	public expression: Expr;

	constructor(expression: Expr) {
		super();
		this.expression = expression;
	}

    accept<R>(visitor: StmtVisitor<R>): R {
      return visitor.visitPrintStmt(this);
    }

    toString(): string {
      return 'Stmt.Print';
    }
}

export class Var extends Stmt {
	public name: Token;
	public type: Token;
	public initializer: Expr;

	constructor(name: Token, type: Token, initializer: Expr) {
		super();
		this.name = name;
		this.type = type;
		this.initializer = initializer;
	}

    accept<R>(visitor: StmtVisitor<R>): R {
      return visitor.visitVarStmt(this);
    }

    toString(): string {
      return 'Stmt.Var';
    }
}


