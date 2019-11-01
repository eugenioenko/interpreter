import { Token } from 'token';

import { Expr } from '../types/expression';

export abstract class Stmt {
    public result: any;
    public line: number;
    // tslint:disable-next-line
    constructor() { }
    public abstract accept<R>(visitor: StmtVisitor<R>): R;
}

// tslint:disable-next-line
export interface StmtVisitor<R> {
    visitBlockStmt(stmt: Block): R;
    visitBreakStmt(stmt: Break): R;
    visitClassStmt(stmt: Class): R;
    visitContinueStmt(stmt: Continue): R;
    visitDoWhileStmt(stmt: DoWhile): R;
    visitExpressionStmt(stmt: Expression): R;
    visitFuncStmt(stmt: Func): R;
    visitIfStmt(stmt: If): R;
    visitPrintStmt(stmt: Print): R;
    visitReturnStmt(stmt: Return): R;
    visitVarStmt(stmt: Var): R;
    visitWhileStmt(stmt: While): R;
}

export class Block extends Stmt {
    public statements: Stmt[];

    constructor(statements: Stmt[], line: number) {
        super();
        this.statements = statements;
        this.line = line;
    }

    public accept<R>(visitor: StmtVisitor<R>): R {
        return visitor.visitBlockStmt(this);
    }

    public toString(): string {
        return 'Stmt.Block';
    }
}

export class Break extends Stmt {
    public keyword: Token;

    constructor(keyword: Token, line: number) {
        super();
        this.keyword = keyword;
        this.line = line;
    }

    public accept<R>(visitor: StmtVisitor<R>): R {
        return visitor.visitBreakStmt(this);
    }

    public toString(): string {
        return 'Stmt.Break';
    }
}

export class Class extends Stmt {
    public name: Token;
    public parent: Token;
    public methods: Func[];

    constructor(name: Token, parent: Token, methods: Func[], line: number) {
        super();
        this.name = name;
        this.parent = parent;
        this.methods = methods;
        this.line = line;
    }

    public accept<R>(visitor: StmtVisitor<R>): R {
        return visitor.visitClassStmt(this);
    }

    public toString(): string {
        return 'Stmt.Class';
    }
}

export class Continue extends Stmt {
    public keyword: Token;

    constructor(keyword: Token, line: number) {
        super();
        this.keyword = keyword;
        this.line = line;
    }

    public accept<R>(visitor: StmtVisitor<R>): R {
        return visitor.visitContinueStmt(this);
    }

    public toString(): string {
        return 'Stmt.Continue';
    }
}

export class DoWhile extends Stmt {
    public loop: Stmt;
    public condition: Expr;

    constructor(loop: Stmt, condition: Expr, line: number) {
        super();
        this.loop = loop;
        this.condition = condition;
        this.line = line;
    }

    public accept<R>(visitor: StmtVisitor<R>): R {
        return visitor.visitDoWhileStmt(this);
    }

    public toString(): string {
        return 'Stmt.DoWhile';
    }
}

export class Expression extends Stmt {
    public expression: Expr;

    constructor(expression: Expr, line: number) {
        super();
        this.expression = expression;
        this.line = line;
    }

    public accept<R>(visitor: StmtVisitor<R>): R {
        return visitor.visitExpressionStmt(this);
    }

    public toString(): string {
        return 'Stmt.Expression';
    }
}

export class Func extends Stmt {
    public name: Token;
    public params: Token[];
    public body: Stmt[];

    constructor(name: Token, params: Token[], body: Stmt[], line: number) {
        super();
        this.name = name;
        this.params = params;
        this.body = body;
        this.line = line;
    }

    public accept<R>(visitor: StmtVisitor<R>): R {
        return visitor.visitFuncStmt(this);
    }

    public toString(): string {
        return 'Stmt.Func';
    }
}

export class If extends Stmt {
    public condition: Expr;
    public thenStmt: Stmt;
    public elseStmt: Stmt;

    constructor(condition: Expr, thenStmt: Stmt, elseStmt: Stmt, line: number) {
        super();
        this.condition = condition;
        this.thenStmt = thenStmt;
        this.elseStmt = elseStmt;
        this.line = line;
    }

    public accept<R>(visitor: StmtVisitor<R>): R {
        return visitor.visitIfStmt(this);
    }

    public toString(): string {
        return 'Stmt.If';
    }
}

export class Print extends Stmt {
    public expression: Expr;

    constructor(expression: Expr, line: number) {
        super();
        this.expression = expression;
        this.line = line;
    }

    public accept<R>(visitor: StmtVisitor<R>): R {
        return visitor.visitPrintStmt(this);
    }

    public toString(): string {
        return 'Stmt.Print';
    }
}

export class Return extends Stmt {
    public keyword: Token;
    public value: Expr;

    constructor(keyword: Token, value: Expr, line: number) {
        super();
        this.keyword = keyword;
        this.value = value;
        this.line = line;
    }

    public accept<R>(visitor: StmtVisitor<R>): R {
        return visitor.visitReturnStmt(this);
    }

    public toString(): string {
        return 'Stmt.Return';
    }
}

export class Var extends Stmt {
    public name: Token;
    public type: Token;
    public initializer: Expr;

    constructor(name: Token, type: Token, initializer: Expr, line: number) {
        super();
        this.name = name;
        this.type = type;
        this.initializer = initializer;
        this.line = line;
    }

    public accept<R>(visitor: StmtVisitor<R>): R {
        return visitor.visitVarStmt(this);
    }

    public toString(): string {
        return 'Stmt.Var';
    }
}

export class While extends Stmt {
    public condition: Expr;
    public loop: Stmt;

    constructor(condition: Expr, loop: Stmt, line: number) {
        super();
        this.condition = condition;
        this.loop = loop;
        this.line = line;
    }

    public accept<R>(visitor: StmtVisitor<R>): R {
        return visitor.visitWhileStmt(this);
    }

    public toString(): string {
        return 'Stmt.While';
    }
}

