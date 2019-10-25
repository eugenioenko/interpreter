import * as Expr from './expression';
import * as Stmt from './statement';
import { Console } from './console';
import { Token, TokenType } from './token';
import { $Boolean, $Number, $Null } from './types';
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
        return this.check(TokenType.Eof);
    }

    private consume(type: TokenType, message: string): Token {
        if (this.check(type)) {
            return this.advance();
        }

        return this.parseError(this.previous(), message);
    }

    private extraSemicolon(): boolean {
        const match = this.match(TokenType.Semicolon);
        if (this.check(TokenType.Semicolon)) {
            while (this.check(TokenType.Semicolon)) {
                this.consume(TokenType.Semicolon, '');
            }
        }
        return match;
    }

    private parseError(token: Token, message: string): any {
        // tslint:disable-next-line
        if (token.type === TokenType.Eof) {
            conzole.error(`parse error at (${token.line}): at end ${message}`);
        } else {
            conzole.error(`[line (${token.line}) parse error at "${token.lexeme}"] => ${message}`);
        }

        throw new Error ('Error parsing');
        // unreachable code
        return new Token(TokenType.Panic, 'error', 'error', 0);
    }

    private parseWarning(message: string): void {
        const token = this.previous();
        conzole.warn(`[line (${token.line}) parse warning at "${token.lexeme}"] => ${message}`);
    }

    private synchronize(): void {
        this.advance();

        while (!this.eof()) {
            if (this.previous().type === TokenType.Semicolon) {
                return;
            }

            switch (this.peek().type) {
                case TokenType.Class:
                case TokenType.Function:
                case TokenType.Var:
                case TokenType.For:
                case TokenType.If:
                case TokenType.While:
                case TokenType.Print:
                case TokenType.Return:
                    return;
            }
            this.advance();
        }
    }

    private declaration(): Stmt.Stmt {
        try {
            if (this.match(TokenType.Class)) {
                return this.classDeclaration();
            }
            if (this.match(TokenType.Function)) {
                return this.funcDeclaration("function");
            }
            if (this.match(TokenType.Var)) {
                return this.varDeclaration();
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
        /*
        const name: Token = this.consume(TokenType.Identifier, `Expected a class name`);
        let parent: Token = null;
        if (this.match(TokenType.Extends)) {
            parent  = this.consume(TokenType.Identifier, `Expected a parent name`);
        }
        this.consume(TokenType.LeftBrace, `Expected "{" after class name`);
        const methods: Stmt.Func[] = [];

        while (!this.check(TokenType.RightBrace) && !this.eof()) {
            if (this.check(TokenType.Function)) {
                this.consume(TokenType.Function, '');
            }
            methods.push(this.funcDeclaration("method"));
        }

        this.consume(TokenType.RightBrace, `Expected "}" after class "${name.literal}" methods`);
        if (this.extraSemicolon()) {
            this.parseWarning(`Unnecessary semicolon after class ${name.lexeme} declaration`);
        }
        return new Stmt.Class(name, parent, methods);
        */ return null;
    }

    private funcDeclaration(kind: string): Stmt.Func {
        /*
        const name: Token = this.consume(TokenType.Identifier, `Expected a ${kind} name`);
        return this.funcParamsBody(name, kind);
        */ return null;
    }

    private funcParams(): Token[] {
        const params: Token[] = [];
        if (!this.check(TokenType.RightParen)) {
            do {
                if (params.length >= 255) {
                    this.parseError(this.peek(), `Parameter count exceeds 255`);
                }
                params.push(this.consume(TokenType.Identifier, `Expected a parameter name`));
            } while (this.match(TokenType.Comma));
        }
        this.consume(TokenType.RightParen, `Expect ")" after parameters`);
        return params;
    }

    private funcParamsBody(name: Token, kind: string): Stmt.Func {
        /*
        this.consume(TokenType.LeftParen, `Expected "(" after ${kind}`);
        const params: Token[] = this.funcParams();

        if (this.match(TokenType.LeftBrace)) {
            const body: Stmt.Stmt[] = this.block();
            if (name.type !== TokenType.Lambda && this.extraSemicolon()) {
                this.parseWarning(`Unnecessary semicolon after function ${name.lexeme} declaration`);
            }
            return new Stmt.Func(name, params, body);
        }

        if (this.match(TokenType.Arrow)) {
            const body: Stmt.Stmt[] = [];
            let arrow: Expr.Expr;
            const keyword: Token = this.previous();
            if (!this.check(TokenType.Semicolon)) {
                arrow = this.expression();
            }
            this.match(TokenType.Semicolon);
            body.push(new Stmt.Return(keyword, arrow));
            return new Stmt.Func(name, params, body);
        }
        this.consume(TokenType.LeftBrace, `Expect "{" before ${kind} body`);
        */ return null;
    }

    private varDeclaration(): Stmt.Stmt {
        const name: Token = this.consume(TokenType.Identifier, `Expected a variable name`);
        let initializer: Expr.Expr  = null;
        if (this.match(TokenType.Equal)) {
            initializer = this.expression();
        }
        this.consume(TokenType.Semicolon, `Expected semicolon ";" after a value.`);

        return new Stmt.Var(name, null, initializer);
    }

    private statement() {
        if (this.match(TokenType.If)) {
            return this.ifStatement();
        }
        if (this.match(TokenType.Print)) {
            return this.printStatement();
        }
        if (this.match(TokenType.Do)) {
            return this.doWhileStatement();
        }
        if (this.match(TokenType.While)) {
            return this.whileStatement();
        }
        if (this.match(TokenType.For)) {
            return this.forStatement();
        }
        if (this.match(TokenType.LeftBrace)) {
            return new Stmt.Block(this.block());
        }
        if (this.match(TokenType.Return)) {
            return this.returnStatement();
        }
        return this.expressionStatement();
    }

    private ifStatement(): Stmt.Stmt {
        this.consume(TokenType.LeftParen, `Expected "(" after an if`);
        const condition: Expr.Expr = this.expression();
        this.consume(TokenType.RightParen, `Expected ")" after if condition`);
        const thenStmt: Stmt.Stmt = this.statement();
        let elseStmt: Stmt.Stmt =  null;
        if (this.match(TokenType.Else)) {
            elseStmt = this.statement();
        }
        return new Stmt.If(condition, thenStmt, elseStmt);
    }

    private whileStatement(): Stmt.Stmt {
        this.consume(TokenType.LeftParen, `Expected "(" after a while statement`);
        const condition: Expr.Expr = this.expression();
        this.consume(TokenType.RightParen, `Expected ")" after while condition`);
        const loop: Stmt.Stmt = this.statement();
        return new Stmt.While(condition, loop);
    }

    private forStatement(): Stmt.Stmt {
        this.consume(TokenType.LeftParen, `Expected "(" after a for statement`);

        let initializer: Stmt.Stmt;
        if (this.match(TokenType.Semicolon)) {
            initializer = null;
        } else if (this.match(TokenType.Var)) {
            initializer = this.varDeclaration();
        } else {
            initializer = this.expressionStatement();
        }
        let condition: Expr.Expr;
        if (!this.check(TokenType.Semicolon)) {
            condition = this.expression();
        }
        this.consume(TokenType.Semicolon, `Expected ";" after loop condition`);
        let increment: Expr.Expr;
        if (!this.check(TokenType.RightParen)) {
            increment = this.expression();
        }
        this.consume(TokenType.RightParen, `Expected ";" after loop condition`);
        let body: Stmt.Stmt = this.statement();
        if (increment !== null) {
            body = new Stmt.Block([
                body,
                new Stmt.Expression(increment)
            ]);
        }
        if (condition === null) {
            condition = new Expr.Literal(new $Boolean(true));
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
        this.consume(TokenType.While, `Expected condition after do statement`);
        this.consume(TokenType.LeftParen, `Expected "(" after a while`);
        const condition: Expr.Expr = this.expression();
        this.consume(TokenType.RightParen, `Expected ")" after while condition`);
        this.consume(TokenType.Semicolon, `Expected semicolon ";" after a do while condition`);
        return new Stmt.DoWhile(loop, condition);
    }

    private printStatement(): Stmt.Stmt {
        const value: Expr.Expr = this.expression();
        this.consume(TokenType.Semicolon, `Expected semicolon ";" after expression.`);
        return new Stmt.Print(value);
    }

    private returnStatement(): Stmt.Stmt {
        const keyword: Token = this.previous();
        let value = null;

        if (!this.check(TokenType.Semicolon)) {
            value = this.expression();
        }

        this.consume(TokenType.Semicolon, `Exected ";" after return statement`);
        return new Stmt.Return(keyword, value);
    }

    private block(): Stmt.Stmt[] {
        const statements: Stmt.Stmt[] = [];
        while (!this.check(TokenType.RightBrace) && !this.eof()) {
            statements.push(this.declaration());
        }
        this.consume(TokenType.RightBrace, `Expected closing block "}"`);
        return statements;
    }

    private expressionStatement(): Stmt.Stmt {
        const expression: Expr.Expr = this.expression();
        this.consume(TokenType.Semicolon, `Expected semicolon ";" after ${expression} expression`);
        if (this.match(TokenType.Semicolon)) {
            const token = this.previous();
            conzole.warn(`[line (${token.line}) parse warning at "${token.lexeme}"] => unnecessary semicolon or empty statement`);
            // consume all semicolons
            // tslint:disable-next-line
            while (this.match(TokenType.Semicolon)){ };
        }
        return new Stmt.Expression(expression);
    }

    private expression(): Expr.Expr {
        return this.assignment();
    }

    private assignment(): Expr.Expr {
        const expr: Expr.Expr = this.ternary();

        if (this.match(TokenType.Equal, TokenType.PlusEqual,
            TokenType.MinusEqual, TokenType.StarEqual, TokenType.SlashEqual)
        ) {
            const operator: Token = this.previous();
            let value: Expr.Expr = this.assignment();

            if (expr instanceof Expr.Variable) {
                const name: Token = expr.name;
                if (operator.type !== TokenType.Equal) {
                    value = new Expr.Binary(new Expr.Variable(name), operator, value);
                }
                return new Expr.Assign(name, value);
            } else if (expr instanceof Expr.Get) {
                if (operator.type !== TokenType.Equal) {
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
        if (this.match(TokenType.Question)) {
            const thenExpr: Expr.Expr = this.ternary();
            this.consume(TokenType.Colon, `Expected ":" after ternary ? expression`);
            const elseExpr: Expr.Expr = this.ternary();
            return new Expr.Ternary(expr, thenExpr, elseExpr);
        }
        return expr;
    }

    private logicalOr(): Expr.Expr {
        let expr = this.logicalAnd();
        while (this.match(TokenType.Or)) {
            const operator: Token = this.previous();
            const right: Expr.Expr = this.logicalAnd();
            expr = new Expr.Logical(expr, operator, right);
        }
        return expr;
    }

    private logicalAnd(): Expr.Expr {
        let expr = this.equality();
        while (this.match(TokenType.And)) {
            const operator: Token = this.previous();
            const right: Expr.Expr = this.equality();
            expr = new Expr.Logical(expr, operator, right);
        }
        return expr;
    }

    private equality(): Expr.Expr {
        let expr  = this.comparison();

        while (this.match(
            TokenType.BangEqual, TokenType.EqualEqual)
        ) {
            const operator: Token = this.previous();
            const right: Expr.Expr = this.comparison();
            expr = new Expr.Binary(expr, operator, right);
        }

        return expr;
    }

    private comparison(): Expr.Expr {
        let expr: Expr.Expr = this.addition();

        while (this.match(TokenType.Greater, TokenType.GreaterEqual, TokenType.Less, TokenType.LessEqual)) {
            const operator: Token = this.previous();
            const right: Expr.Expr = this.addition();
            expr = new Expr.Binary(expr, operator, right);
        }

        return expr;
    }

    private addition(): Expr.Expr {
        let expr: Expr.Expr = this.modulus();

        while (this.match(TokenType.Minus, TokenType.Plus)) {
            const operator: Token = this.previous();
            const right: Expr.Expr = this.modulus();
            expr = new Expr.Binary(expr, operator, right);
        }

        return expr;
    }

    private modulus(): Expr.Expr {
        let expr: Expr.Expr = this.multiplication();

        while (this.match(TokenType.Percent)) {
            const operator: Token = this.previous();
            const right: Expr.Expr = this.multiplication();
            expr = new Expr.Binary(expr, operator, right);
        }

        return expr;
    }

    private multiplication(): Expr.Expr {
        let expr: Expr.Expr = this.unary();

        while (this.match(TokenType.Slash, TokenType.Star)) {
            const operator: Token = this.previous();
            const right: Expr.Expr = this.unary();
            expr = new Expr.Binary(expr, operator, right);
        }

        return expr;
    }

    private unary(): Expr.Expr {
        if (this.match(TokenType.Minus, TokenType.Bang, TokenType.Dollar, TokenType.PlusPlus, TokenType.MinusMinus)) {
            const operator: Token = this.previous();
            const right: Expr.Expr = this.unary();
            return new Expr.Unary(operator, right);
        }

        return this.newKeyword();
    }

    private newKeyword(): Expr.Expr {
        if (this.match(TokenType.New)) {
            const construct: Expr.Expr = this.call();
            return new Expr.New(construct);

        }
        return this.call();
    }

    private call(): Expr.Expr {
        let expr: Expr.Expr = this.primary();
        while (true) {
            if (this.match(TokenType.LeftParen)) {
                let callee = expr;
                do {
                    const args: Expr.Expr[] = [];
                    if (!this.check(TokenType.RightParen)) {
                        do {
                            args.push(this.expression());
                        } while (this.match(TokenType.Comma));
                    }
                    const paren: Token = this.consume(TokenType.RightParen, `Expected ")" after arguments`);
                    callee = new Expr.Call(callee, paren, args, null);
                } while (this.match(TokenType.LeftParen));
                return callee;
            } else if (this.match(TokenType.Dot)) {
                expr = this.dotGet(expr);
            } else if (this.match(TokenType.LeftBracket)) {
                expr = this.bracketGet(expr);
            } else {
                break;
            }
        }

        return expr;
    }

    private dotGet(expr: Expr.Expr): Expr.Expr {
        const name: Token = this.consume(TokenType.Identifier, `Expect property name after '.'`);
        const key: Expr.Key = new Expr.Key(name);
        return new Expr.Get(expr, key);
    }

    private bracketGet(expr: Expr.Expr): Expr.Expr {
        let key: Expr.Expr = null;
        let end: Expr.Expr = null;
        let step: Expr.Expr = null;

        if (!this.check(TokenType.Colon)) {
            key = this.expression();
        }
        if (this.match(TokenType.Colon) && !this.check(TokenType.Colon)) {
            end = this.expression();
        }
        if (this.match(TokenType.Colon) && !this.check(TokenType.RightBracket)) {
            step = this.expression();
        }
        this.consume(TokenType.RightBracket, `Expected "]" after property name expression`);
        if (!key || end || step) {
            const range = new Expr.Range(key, end, step);
            return new Expr.Get(expr, range);
        }
        return new Expr.Get(expr, key);
    }

    private primary(): Expr.Expr {
        if (this.match(TokenType.False)) {
            return new Expr.Literal(new $Boolean(false));
        }
        if (this.match(TokenType.True)) {
            return new Expr.Literal(new $Boolean(true));
        }
        if (this.match(TokenType.Null)) {
            return new Expr.Literal(new $Null());
        }
        if (this.match(TokenType.Number)) {
            return new Expr.Literal(new $Number(this.previous().literal));
        }
        if (this.match(TokenType.String)) {
            return new Expr.Ztring(this.previous().literal);
        }
        if (this.match(TokenType.Regex)) {
            return new Expr.RegEx(this.previous().literal);
        }
        if (this.match(TokenType.Identifier)) {
            const identifier =  this.previous();
            if (this.match(TokenType.PlusPlus)) {
                return new Expr.Postfix(identifier, 1);
            }
            if (this.match(TokenType.MinusMinus)) {
                return new Expr.Postfix(identifier, -1);
            }
            return new Expr.Variable(identifier);
        }
        if (this.match(TokenType.LeftParen)) {
            const expr: Expr.Expr = this.expression();
            this.consume(TokenType.RightParen, `Expected ")" after expression`);
            return new Expr.Grouping(expr);
        }
        if (this.match(TokenType.LeftBrace)) {
            return this.dictionary();
        }
        if (this.match(TokenType.Function)) {
            const token: Token = new Token(TokenType.Lambda, 'lambda', 'lambda', this.previous().line);
            const lambda: Stmt.Func = this.funcParamsBody(token, "lambda");
            return new Expr.Lambda(lambda);
        }
        if (this.match(TokenType.Super)) {
            return this.superCall();
        }
        if (this.match(TokenType.LeftBracket)) {
            return this.list();
        }

        throw this.parseError(this.peek(), `Expected expression`);
        // unreacheable code
        return new Expr.Literal(null);
    }

    public dictionary(): Expr.Expr {
        if (this.match(TokenType.RightBrace)) {
            return new Expr.Dictionary([]);
        }
        const properties: Expr.Set[] = [];
        do {
            if (this.match(TokenType.String, TokenType.Identifier)) {
                const key: Token = this.previous();
                this.consume(TokenType.Colon, `Expected ":" colon after member`);
                const value = this.expression();
                properties.push(new Expr.Set(null, new Expr.Key(key), value));
            } else {
                this.parseError(this.peek(), `String or identifier expected after Object {`);
            }
        } while (this.match(TokenType.Comma));
        this.consume(TokenType.RightBrace, `Expected "}" after object literal`);

        return new Expr.Dictionary(properties);
    }

    private list(): Expr.Expr {
        const values = [];
        if (this.match(TokenType.RightBracket)) {
            return new Expr.List([]);
        }
        do {
            values.push(this.expression());
        } while (this.match(TokenType.Comma));
        this.consume(TokenType.RightBracket, `Expected "]" after array declaration`);

        return new Expr.List(values);
    }

    private superCall(): Expr.Expr {
        /*
        const indexes: Token[] = [];
        while (this.match(TokenType.Dot)) {
            const token = this.consume(TokenType.Identifier, `Expected method name after super`);
            indexes.push(token);
        }

        const args: Expr.Expr[] = [];
        this.consume(TokenType.LeftParen, `Expected function parameters or method name after super`);
        do {
            if (!this.check(TokenType.RightParen)) {
                do {
                    args.push(this.expression());
                } while (this.match(TokenType.Comma));
            }
            this.consume(TokenType.RightParen, `Expected ")" after super arguments`);
        } while (this.match(TokenType.LeftParen));

        return new Expr.Super(indexes, args);
        */ return null;
    }

}
