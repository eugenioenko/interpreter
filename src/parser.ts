import * as Expr from './expression';
import * as Stmt from './statement';
import { Console } from './console';
import { Token, TokenType } from './token';
declare var conzole: Console;

export class Parser {
    private current = 0;
    private tokens: Token[];

    constructor(tokens: Token[]) {
        this.tokens = tokens;
    }

    public parse(): Stmt.Stmt[] {
       const statements: Stmt.Stmt[] = [];
       while (!this.eof()) {
           statements.push(this.declaration());
       }
       return statements;
    }

    private match(...types: TokenType[]): boolean {
        for (const type of types) {
            if (this.check(type)) {
                this.advance();
                return true;
            }
        }
        return false;
    }

    private advance(): Token {
        if (!this.eof()) {
            this.current++;
        }
        return this.previous();
    }

    private peek(): Token {
        return this.tokens[this.current];
    }

    private previous(): Token {
        return this.tokens[this.current - 1];
    }

    private check(type: TokenType): boolean {
        return this.peek().type === type;
    }

    private eof(): boolean {
        return this.check(TokenType.eof);
    }

    private consume(type: TokenType, message: string): Token {
        if (this.check(type)) {
            return this.advance();
        }

        return this.parseError(this.previous(), message);
    }

    private extraSemicolon(): boolean {
        const match = this.match(TokenType.semicolon);
        if (this.check(TokenType.semicolon)) {
            while (this.check(TokenType.semicolon)) {
                this.consume(TokenType.semicolon, '');
            }
        }
        return match;
    }

    private parseError(token: Token, message: string): any {
        // tslint:disable-next-line
        if (token.type === TokenType.eof) {
            conzole.error(`parse error at (${token.line}): at end ${message}`);
        } else {
            conzole.error(`[line (${token.line}) parse error at "${token.lexeme}"] => ${message}`);
        }

        throw new Error ('Error parsing');
        // unreachable code
        return new Token('panic', 'error', 'error', 0);
    }

    private parseWarning(message: string): void {
        const token = this.previous();
        conzole.warn(`[line (${token.line}) parse warning at "${token.lexeme}"] => ${message}`);
    }

    private synchronize(): void {
        this.advance();

        while (!this.eof()) {
            if (this.previous().type === TokenType.semicolon) {
                return;
            }

            switch (this.peek().type) {
                case TokenType.class:
                case TokenType.function:
                case TokenType.var:
                case TokenType.for:
                case TokenType.if:
                case TokenType.while:
                case TokenType.print:
                case TokenType.return:
                    return;
            }
            this.advance();
        }
    }

    private declaration(): Stmt.Stmt {
        try {
            if (this.match(TokenType.class)) {
                return this.classDeclaration();
            }
            if (this.match(TokenType.function)) {
                return this.funcDeclaration("function");
            }
            if (this.match(TokenType.var, TokenType.let)) {
                return this.varDeclaration(this.previous());
            }
            return this.statement();
        } catch (error) {
            throw new Error('Error parsing. Execution has been stopped');
            // TODO: reenable synchronize
            // this.synchronize();
            return null;
        }
    }

    private classDeclaration(): Stmt.Class {
        if (this.check(TokenType.function)) {
            this.consume(TokenType.function, '');
        }
        const name: Token = this.consume(TokenType.identifier, `Expected a class name`);
        let parent: Token = null;
        if (this.match(TokenType.extends)) {
            parent  = this.consume(TokenType.identifier, `Expected a parent name`);
        }
        this.consume(TokenType.leftBrace, `Expected "{" after class name`);
        const methods: Stmt.Func[] = [];

        while (!this.check(TokenType.rightBrace) && !this.eof()) {
            if (this.check(TokenType.function)) {
                this.consume(TokenType.function, '');
            }
            methods.push(this.funcDeclaration("method"));
        }

        this.consume(TokenType.rightBrace, `Expected "}" after class "${name.literal}" methods`);
        if (this.extraSemicolon()) {
            this.parseWarning(`Unnecessary semicolon after class ${name.lexeme} declaration`);
        }
        return new Stmt.Class(name, parent, methods);
    }

    private funcDeclaration(kind: string): Stmt.Func {
        const name: Token = this.consume(TokenType.identifier, `Expected a ${kind} name`);
        return this.funcParamsBody(name, kind);
    }

    private funcParams(): Token[] {
        const params: Token[] = [];
        if (!this.check(TokenType.rightParen)) {
            do {
                if (params.length >= 255) {
                    this.parseError(this.peek(), `Parameter count exceeds 255`);
                }
                params.push(this.consume(TokenType.identifier, `Expected a parameter name`));
            } while (this.match(TokenType.comma));
        }
        this.consume(TokenType.rightParen, `Expect ")" after parameters`);
        return params;
    }

    private funcParamsBody(name: Token, kind: string): Stmt.Func {
        this.consume(TokenType.leftParen, `Expected "(" after ${kind}`);
        const params: Token[] = this.funcParams();

        if (this.match(TokenType.leftBrace)) {
            const body: Stmt.Stmt[] = this.block();
            if (name.type !== TokenType.lambda && this.extraSemicolon()) {
                this.parseWarning(`Unnecessary semicolon after function ${name.lexeme} declaration`);
            }
            return new Stmt.Func(name, params, body);
        }

        if (this.match(TokenType.arrow)) {
            const body: Stmt.Stmt[] = [];
            let arrow: Expr.Expr;
            const keyword: Token = this.previous();
            if (!this.check(TokenType.semicolon)) {
                arrow = this.expression();
            }
            this.match(TokenType.semicolon);
            body.push(new Stmt.Return(keyword, arrow));
            return new Stmt.Func(name, params, body);
        }
        this.consume(TokenType.leftBrace, `Expect "{" before ${kind} body`);
    }

    private varDeclaration(type: Token): Stmt.Stmt {
        const name: Token = this.consume(TokenType.identifier, `Expected a variable name`);
        let initializer: Expr.Expr  = null;
        if (this.match(TokenType.equal)) {
            initializer = this.expression();
        }
        this.consume(TokenType.semicolon, `Expected semicolon ";" after a value.`);

        return new Stmt.Var(name, type, initializer);
    }

    private statement() {
        if (this.match(TokenType.if)) {
            return this.ifStatement();
        }
        if (this.match(TokenType.print)) {
            return this.printStatement();
        }
        if (this.match(TokenType.do)) {
            return this.doWhileStatement();
        }
        if (this.match(TokenType.while)) {
            return this.whileStatement();
        }
        if (this.match(TokenType.for)) {
            return this.forStatement();
        }
        if (this.match(TokenType.leftBrace)) {
            return new Stmt.Block(this.block());
        }
        if (this.match(TokenType.return)) {
            return this.returnStatement();
        }
        return this.expressionStatement();
    }

    private ifStatement(): Stmt.Stmt {
        this.consume(TokenType.leftParen, `Expected "(" after an if`);
        const condition: Expr.Expr = this.expression();
        this.consume(TokenType.rightParen, `Expected ")" after if condition`);
        const thenStmt: Stmt.Stmt = this.statement();
        let elseStmt: Stmt.Stmt =  null;
        if (this.match(TokenType.else)) {
            elseStmt = this.statement();
        }
        return new Stmt.If(condition, thenStmt, elseStmt);
    }

    private whileStatement(): Stmt.Stmt {
        this.consume(TokenType.leftParen, `Expected "(" after a while statement`);
        const condition: Expr.Expr = this.expression();
        this.consume(TokenType.rightParen, `Expected ")" after while condition`);
        const loop: Stmt.Stmt = this.statement();
        return new Stmt.While(condition, loop);
    }

    private forStatement(): Stmt.Stmt {
        this.consume(TokenType.leftParen, `Expected "(" after a for statement`);

        let initializer: Stmt.Stmt;
        if (this.match(TokenType.semicolon)) {
            initializer = null;
        } else if (this.match(TokenType.var, TokenType.let)) {
            initializer = this.varDeclaration(this.previous());
        } else {
            initializer = this.expressionStatement();
        }
        let condition: Expr.Expr;
        if (!this.check(TokenType.semicolon)) {
            condition = this.expression();
        }
        this.consume(TokenType.semicolon, `Expected ";" after loop condition`);
        let increment: Expr.Expr;
        if (!this.check(TokenType.rightParen)) {
            increment = this.expression();
        }
        this.consume(TokenType.rightParen, `Expected ";" after loop condition`);
        let body: Stmt.Stmt = this.statement();
        if (increment !== null) {
            body = new Stmt.Block([
                body,
                new Stmt.Expression(increment)
            ]);
        }
        if (condition === null) {
            condition = new Expr.Literal(true);
        }
        body = new Stmt.While(condition, body);
        if (initializer !== null) {
            body = new Stmt.Block([
                initializer,
                body
            ]);
        }
        return body;
    }

    private doWhileStatement(): Stmt.Stmt {
        const loop: Stmt.Stmt = this.statement();
        this.consume(TokenType.while, `Expected condition after do statement`);
        this.consume(TokenType.leftParen, `Expected "(" after a while`);
        const condition: Expr.Expr = this.expression();
        this.consume(TokenType.rightParen, `Expected ")" after while condition`);
        this.consume(TokenType.semicolon, `Expected semicolon ";" after a do while condition`);
        return new Stmt.DoWhile(loop, condition);
    }

    private printStatement(): Stmt.Stmt {
        const value: Expr.Expr = this.expression();
        this.consume(TokenType.semicolon, `Expected semicolon ";" after expression.`);
        return new Stmt.Print(value);
    }

    private returnStatement(): Stmt.Stmt {
        const keyword: Token = this.previous();
        let value = null;

        if (!this.check(TokenType.semicolon)) {
            value = this.expression();
        }

        this.consume(TokenType.semicolon, `Exected ";" after return statement`);
        return new Stmt.Return(keyword, value);
    }

    private block(): Stmt.Stmt[] {
        const statements: Stmt.Stmt[] = [];
        while (!this.check(TokenType.rightBrace) && !this.eof()) {
            statements.push(this.declaration());
        }
        this.consume(TokenType.rightBrace, `Expected closing block "}"`);
        return statements;
    }

    private expressionStatement(): Stmt.Stmt {
        const expression: Expr.Expr = this.expression();
        this.consume(TokenType.semicolon, `Expected semicolon ";" after ${expression} expression`);
        if (this.match(TokenType.semicolon)) {
            const token = this.previous();
            conzole.warn(`[line (${token.line}) parse warning at "${token.lexeme}"] => unnecessary semicolon or empty statement`);
            // consume all semicolons
            // tslint:disable-next-line
            while (this.match(TokenType.semicolon)){ };
        }
        return new Stmt.Expression(expression);
    }

    private expression(): Expr.Expr {
        return this.assignment();
    }

    private assignment(): Expr.Expr {
        const expr: Expr.Expr = this.ternary();

        if (this.match(TokenType.equal, TokenType.plusEqual,
            TokenType.minusEqual, TokenType.starEqual, TokenType.slashEqual)
        ) {
            const operator: Token = this.previous();
            let value: Expr.Expr = this.assignment();

            if (expr instanceof Expr.Variable) {
                const name: Token = expr.name;
                if (operator.type !== TokenType.equal) {
                    value = new Expr.Binary(new Expr.Variable(name), operator, value);
                }
                return new Expr.Assign(name, value);
            } else if (expr instanceof Expr.Get) {
                if (operator.type !== TokenType.equal) {
                    value = new Expr.Binary(new Expr.Get(expr.entity, expr.key), operator, value);
                }
                return new Expr.Set(expr.entity, expr.key, value);
            }

            this.parseError(operator, `Invalid l-value, is not an assigning target.`);
        }

        return expr;
    }

    private ternary(): Expr.Expr {
        const expr = this.logicalOr();
        if (this.match(TokenType.question)) {
            const thenExpr: Expr.Expr = this.ternary();
            this.consume(TokenType.colon, `Expected ":" after ternary ? expression`);
            const elseExpr: Expr.Expr = this.ternary();
            return new Expr.Ternary(expr, thenExpr, elseExpr);
        }
        return expr;
    }

    private logicalOr(): Expr.Expr {
        let expr = this.logicalAnd();
        while (this.match(TokenType.or)) {
            const operator: Token = this.previous();
            const right: Expr.Expr = this.logicalAnd();
            expr = new Expr.Logical(expr, operator, right);
        }
        return expr;
    }

    private logicalAnd(): Expr.Expr {
        let expr = this.equality();
        while (this.match(TokenType.and)) {
            const operator: Token = this.previous();
            const right: Expr.Expr = this.equality();
            expr = new Expr.Logical(expr, operator, right);
        }
        return expr;
    }

    private equality(): Expr.Expr {
        let expr  = this.comparison();

        while (this.match(
            TokenType.bangEqual, TokenType.equalEqual,
            TokenType.bangEqualEqual, TokenType.equalEqualEqual)
        ) {
            const operator: Token = this.previous();
            const right: Expr.Expr = this.comparison();
            expr = new Expr.Binary(expr, operator, right);
        }

        return expr;
    }

    private comparison(): Expr.Expr {
        let expr: Expr.Expr = this.addition();

        while (this.match(TokenType.greater, TokenType.greaterEqual, TokenType.less, TokenType.lessEqual)) {
            const operator: Token = this.previous();
            const right: Expr.Expr = this.addition();
            expr = new Expr.Binary(expr, operator, right);
        }

        return expr;
    }

    private addition(): Expr.Expr {
        let expr: Expr.Expr = this.modulus();

        while (this.match(TokenType.minus, TokenType.plus)) {
            const operator: Token = this.previous();
            const right: Expr.Expr = this.modulus();
            expr = new Expr.Binary(expr, operator, right);
        }

        return expr;
    }

    private modulus(): Expr.Expr {
        let expr: Expr.Expr = this.multiplication();

        while (this.match(TokenType.percent)) {
            const operator: Token = this.previous();
            const right: Expr.Expr = this.multiplication();
            expr = new Expr.Binary(expr, operator, right);
        }

        return expr;
    }

    private multiplication(): Expr.Expr {
        let expr: Expr.Expr = this.unary();

        while (this.match(TokenType.slash, TokenType.star)) {
            const operator: Token = this.previous();
            const right: Expr.Expr = this.unary();
            expr = new Expr.Binary(expr, operator, right);
        }

        return expr;
    }

    private unary(): Expr.Expr {
        if (this.match(TokenType.minus, TokenType.bang, TokenType.dollar, TokenType.plusPlus, TokenType.minusMinus)) {
            const operator: Token = this.previous();
            const right: Expr.Expr = this.unary();
            return new Expr.Unary(operator, right);
        }

        return this.newKeyword();
    }

    private newKeyword(): Expr.Expr {
        if (this.match(TokenType.new)) {
            const construct: Expr.Expr = this.call();
            return new Expr.New(construct);

        }
        return this.call();
    }

    private call(): Expr.Expr {
        let expr: Expr.Expr = this.primary();
        while (true) {
            if (this.match(TokenType.leftParen)) {
                let callee = expr;
                do {
                    const args: Expr.Expr[] = [];
                    if (!this.check(TokenType.rightParen)) {
                        do {
                            args.push(this.expression());
                        } while (this.match(TokenType.comma));
                    }
                    const paren: Token = this.consume(TokenType.rightParen, `Expected ")" after arguments`);
                    callee = new Expr.Call(callee, paren, args, null);
                } while (this.match(TokenType.leftParen));
                return callee;
            } else if (this.match(TokenType.dot)) {
                expr = this.dotGet(expr);
            } else if (this.match(TokenType.leftBracket)) {
                expr = this.bracketGet(expr);
            } else {
                break;
            }
        }

        return expr;
    }

    private dotGet(expr: Expr.Expr): Expr.Expr {
        const name: Token = this.consume(TokenType.identifier, `Expect property name after '.'`);
        const key: Expr.Key = new Expr.Key(name);
        return new Expr.Get(expr, key);
    }

    private bracketGet(expr: Expr.Expr): Expr.Expr {
        let key: Expr.Expr = null;
        let end: Expr.Expr = null;
        let step: Expr.Expr = null;

        if (!this.check(TokenType.colon)) {
            key = this.expression();
        }
        if (this.match(TokenType.colon) && !this.check(TokenType.colon)) {
            end = this.expression();
        }
        if (this.match(TokenType.colon) && !this.check(TokenType.rightBracket)) {
            step = this.expression();
        }
        this.consume(TokenType.rightBracket, `Expected "]" after property name expression`);
        if (!key || end || step) {
            const range = new Expr.Range(key, end, step);
            return new Expr.Get(expr, range);
        }
        return new Expr.Get(expr, key);
    }

    private primary(): Expr.Expr {
        if (this.match(TokenType.false)) {
            return new Expr.Literal(false);
        }
        if (this.match(TokenType.true)) {
            return new Expr.Literal(true);
        }
        if (this.match(TokenType.null)) {
             return new Expr.Literal(null);
        }
        if (this.match(TokenType.number)) {
            return new Expr.Literal(this.previous().literal);
        }
        if (this.match(TokenType.string)) {
            return new Expr.Ztring(this.previous().literal);
        }
        if (this.match(TokenType.identifier)) {
            const identifier =  this.previous();
            if (this.match(TokenType.plusPlus)) {
                return new Expr.Postfix(identifier, 1);
            }
            if (this.match(TokenType.minusMinus)) {
                return new Expr.Postfix(identifier, -1);
            }
            return new Expr.Variable(identifier);
        }
        if (this.match(TokenType.leftParen)) {
            const expr: Expr.Expr = this.expression();
            this.consume(TokenType.rightParen, `Expected ")" after expression`);
            return new Expr.Grouping(expr);
        }
        if (this.match(TokenType.leftBrace)) {
            return this.entity();
        }
        if (this.match(TokenType.function)) {
            const token: Token = new Token('lambda', 'lambda', 'lambda', this.previous().line);
            const lambda: Stmt.Func = this.funcParamsBody(token, "lambda");
            return new Expr.Lambda(lambda);
        }
        if (this.match(TokenType.super)) {
            return this.superCall();
        }
        if (this.match(TokenType.leftBracket)) {
            return this.array();
        }

        throw this.parseError(this.peek(), `Expected expression`);
        // unreacheable code
        return new Expr.Literal(null);
    }

    public entity(): Expr.Expr {
        if (this.match(TokenType.rightBrace)) {
            return new Expr.Entity([]);
        }
        const properties: Expr.Set[] = [];
        do {
            if (this.match(TokenType.string, TokenType.identifier)) {
                const key: Token = this.previous();
                this.consume(TokenType.colon, `Expected ":" colon after member`);
                const value = this.expression();
                properties.push(new Expr.Set(null, new Expr.Key(key), value));
            } else {
                this.parseError(this.peek(), `String or identifier expected after Object {`);
            }
        } while (this.match(TokenType.comma));
        this.consume(TokenType.rightBrace, `Expected "}" after object literal`);

        return new Expr.Entity(properties);
    }

    private array(): Expr.Expr {
        const values = [];
        if (this.match(TokenType.rightBracket)) {
            return new Expr.List([]);
        }
        do {
            values.push(this.expression());
        } while (this.match(TokenType.comma));
        this.consume(TokenType.rightBracket, `Expected "]" after array declaration`);

        return new Expr.List(values);
    }

    private superCall(): Expr.Expr {
        const indexes: Token[] = [];
        while (this.match(TokenType.dot)) {
            const token = this.consume(TokenType.identifier, `Expected method name after super`);
            indexes.push(token);
        }

        const args: Expr.Expr[] = [];
        this.consume(TokenType.leftParen, `Expected function parameters or method name after super`);
        do {
            if (!this.check(TokenType.rightParen)) {
                do {
                    args.push(this.expression());
                } while (this.match(TokenType.comma));
            }
            this.consume(TokenType.rightParen, `Expected ")" after super arguments`);
        } while (this.match(TokenType.leftParen));

        return new Expr.Super(indexes, args);
    }

}
