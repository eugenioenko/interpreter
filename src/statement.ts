import { Token } from 'token';

import { Expr } from 'expression';

export abstract class Stmt {
    // tslint:disable-next-line
    constructor() {}
    public abstract accept<R>(visitor: StmtVisitor<R>): R;
}

// tslint:disable-next-line
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

    public accept<R>(visitor: StmtVisitor<R>): R {
        return visitor.visitBlockStmt(this);
    }

    public toString(): string {
        return 'Stmt.Block';
    }
}
export class Expression extends Stmt {
    public expression: Expr;

    constructor(expression: Expr) {
        super();
        this.expression = expression;
    }

    public accept<R>(visitor: StmtVisitor<R>): R {
        return visitor.visitExpressionStmt(this);
    }

    public toString(): string {
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

    public accept<R>(visitor: StmtVisitor<R>): R {
        return visitor.visitIfStmt(this);
    }

    public toString(): string {
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

    public accept<R>(visitor: StmtVisitor<R>): R {
        return visitor.visitFuncStmt(this);
    }

    public toString(): string {
        return 'Stmt.Func';
    }
}
export class Class extends Stmt {
    public name: Token;
    public parent: Token;
    public methods: Func[];

    constructor(name: Token, parent: Token, methods: Func[]) {
        super();
        this.name = name;
        this.parent = parent;
        this.methods = methods;
    }

    public accept<R>(visitor: StmtVisitor<R>): R {
        return visitor.visitClassStmt(this);
    }

    public toString(): string {
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

    public accept<R>(visitor: StmtVisitor<R>): R {
        return visitor.visitReturnStmt(this);
    }

    public toString(): string {
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

    public accept<R>(visitor: StmtVisitor<R>): R {
        return visitor.visitWhileStmt(this);
    }

    public toString(): string {
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

    public accept<R>(visitor: StmtVisitor<R>): R {
        return visitor.visitDoWhileStmt(this);
    }

    public toString(): string {
        return 'Stmt.DoWhile';
    }
}
export class Print extends Stmt {
    public expression: Expr;

    constructor(expression: Expr) {
        super();
        this.expression = expression;
    }

    public accept<R>(visitor: StmtVisitor<R>): R {
        return visitor.visitPrintStmt(this);
    }

    public toString(): string {
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

    public accept<R>(visitor: StmtVisitor<R>): R {
        return visitor.visitVarStmt(this);
    }

    public toString(): string {
        return 'Stmt.Var';
    }
}
