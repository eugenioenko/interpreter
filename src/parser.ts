import * as Expr from './types/expression';
import * as Stmt from './types/statement';
import { Console } from './console';
import { Token, TokenType } from './token';
import { $Boolean } from './types/boolean';
import { $Null } from './types/null';
import { $Number } from './types/number';
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
            conzole.error(`Parse error at (${token.line}): at end ${message}`);
        } else {
            conzole.error(`Parse error at (${token.line}:${token.col}) near "${token.lexeme}" => ${message}`);
        }
        throw new Error ('Error parsing');
        // unreachable code
        return new Token(TokenType.Panic, 'error', 'error', 0, 0);
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
            console.error(error);
            throw new Error('Error parsing. Execution has been stopped');
            // TODO: reenable synchronize
            // this.synchronize();
            return null;
        }
    }

    private classDeclaration(): Stmt.Class {
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
        return new Stmt.Class(name, parent, methods, name.line);
    }

    private funcDeclaration(kind: string): Stmt.Func {
        const name: Token = this.consume(TokenType.Identifier, `Expected a ${kind} name`);
        return this.funcParamsBody(name, kind);
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
        this.consume(TokenType.LeftParen, `Expected "(" after ${kind}`);
        const params: Token[] = this.funcParams();

        if (this.match(TokenType.LeftBrace)) {
            const body: Stmt.Stmt[] = this.block();
            if (name.type !== TokenType.Lambda && this.extraSemicolon()) {
                this.parseWarning(`Unnecessary semicolon after function ${name.lexeme} declaration`);
            }
            return new Stmt.Func(name, params, body, name.line);
        }

        if (this.match(TokenType.Arrow)) {
            const body: Stmt.Stmt[] = [];
            let arrow: Expr.Expr;
            const keyword: Token = this.previous();
            if (!this.check(TokenType.Semicolon)) {
                arrow = this.expression();
            }
            this.match(TokenType.Semicolon);
            body.push(new Stmt.Return(keyword, arrow, keyword.line));
            return new Stmt.Func(name, params, body, name.line);
        }
        this.consume(TokenType.LeftBrace, `Expect "{" before ${kind} body`);
    }

    private varDeclaration(): Stmt.Stmt {
        const name: Token = this.consume(TokenType.Identifier, `Expected a variable name`);
        let initializer: Expr.Expr  = null;
        if (this.match(TokenType.Equal)) {
            initializer = this.expression();
        }
        this.consume(TokenType.Semicolon, `Expected semicolon ";" after a value.`);

        return new Stmt.Var(name, null, initializer, name.line);
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
            return new Stmt.Block(this.block(), this.previous().line);
        }
        if (this.match(TokenType.Return)) {
            return this.returnStatement();
        }
        if (this.match(TokenType.Break)) {
            return this.breakStatement();
        }
        if (this.match(TokenType.Continue)) {
            return this.continueStatement();
        }
        return this.expressionStatement();
    }

    private ifStatement(): Stmt.Stmt {
        const keyword = this.previous();
        this.consume(TokenType.LeftParen, `Expected "(" after an if`);
        const condition: Expr.Expr = this.expression();
        this.consume(TokenType.RightParen, `Expected ")" after if condition`);
        const thenStmt: Stmt.Stmt = this.statement();
        let elseStmt: Stmt.Stmt =  null;
        if (this.match(TokenType.Else)) {
            elseStmt = this.statement();
        }
        return new Stmt.If(condition, thenStmt, elseStmt, keyword.line);
    }

    private whileStatement(): Stmt.Stmt {
        const keyword = this.previous();
        this.consume(TokenType.LeftParen, `Expected "(" after a while statement`);
        const condition: Expr.Expr = this.expression();
        this.consume(TokenType.RightParen, `Expected ")" after while condition`);
        const loop: Stmt.Stmt = this.statement();
        return new Stmt.While(condition, loop, keyword.line);
    }

    private forStatement(): Stmt.Stmt {
        const keyword = this.previous();
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
                new Stmt.Expression(increment, keyword.line)
            ], keyword.line);
        }
        if (condition === null) {
            condition = new Expr.Literal(new $Boolean(true), keyword.line);
        }
        body = new Stmt.While(condition, body, keyword.line);
        if (initializer !== null) {
            body = new Stmt.Block([
                initializer,
                body
            ], keyword.line);
        }
        return body;
    }

    private doWhileStatement(): Stmt.Stmt {
        const keyword = this.previous();
        const loop: Stmt.Stmt = this.statement();
        this.consume(TokenType.While, `Expected condition after do statement`);
        this.consume(TokenType.LeftParen, `Expected "(" after a while`);
        const condition: Expr.Expr = this.expression();
        this.consume(TokenType.RightParen, `Expected ")" after while condition`);
        this.consume(TokenType.Semicolon, `Expected semicolon ";" after a do while condition`);
        return new Stmt.DoWhile(loop, condition, keyword.line);
    }

    private printStatement(): Stmt.Stmt {
        const keyword = this.previous();
        const value: Expr.Expr = this.expression();
        this.consume(TokenType.Semicolon, `Expected semicolon ";" after expression.`);
        return new Stmt.Print(value, keyword.line);
    }

    private returnStatement(): Stmt.Stmt {
        const keyword: Token = this.previous();
        let value = null;

        if (!this.check(TokenType.Semicolon)) {
            value = this.expression();
        }

        this.consume(TokenType.Semicolon, `Exected semicolon ";" after return statement`);
        return new Stmt.Return(keyword, value, keyword.line);
    }

    private breakStatement(): Stmt.Stmt {
        const keyword: Token = this.previous();
        this.consume(TokenType.Semicolon, `Exected semicolon ";" after break statement`);
        return new Stmt.Break(keyword, keyword.line);
    }

    private continueStatement(): Stmt.Stmt {
        const keyword: Token = this.previous();
        this.consume(TokenType.Semicolon, `Exected semicolon ";" after continue statement`);
        return new Stmt.Continue(keyword, keyword.line);
    }

    private block(): Stmt.Stmt[] {
        const statements: Stmt.Stmt[] = [];
        while (!this.check(TokenType.RightBrace) && !this.eof()) {
            statements.push(this.declaration());
        }
        this.consume(TokenType.RightBrace, `Expected closing brace "}" after block statement`);
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
        return new Stmt.Expression(expression, expression.line);
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
                    value = new Expr.Binary(new Expr.Variable(name, name.line), operator, value, operator.line);
                }
                return new Expr.Assign(name, value, name.line);
            } else if (expr instanceof Expr.Get) {
                if (operator.type !== TokenType.Equal) {
                    value = new Expr.Binary(new Expr.Get(expr.entity, expr.key, expr.type, expr.line), operator, value, operator.line);
                }
                return new Expr.Set(expr.entity, expr.key, value, expr.line);
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
            return new Expr.Ternary(expr, thenExpr, elseExpr, expr.line);
        }
        return expr;
    }

    private logicalOr(): Expr.Expr {
        let expr = this.logicalAnd();
        while (this.match(TokenType.Or)) {
            const operator: Token = this.previous();
            const right: Expr.Expr = this.logicalAnd();
            expr = new Expr.Logical(expr, operator, right, operator.line);
        }
        return expr;
    }

    private logicalAnd(): Expr.Expr {
        let expr = this.equality();
        while (this.match(TokenType.And)) {
            const operator: Token = this.previous();
            const right: Expr.Expr = this.equality();
            expr = new Expr.Logical(expr, operator, right, operator.line);
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
            expr = new Expr.Binary(expr, operator, right, operator.line);
        }
        return expr;
    }

    private comparison(): Expr.Expr {
        let expr: Expr.Expr = this.addition();
        while (this.match(TokenType.Greater, TokenType.GreaterEqual, TokenType.Less, TokenType.LessEqual)) {
            const operator: Token = this.previous();
            const right: Expr.Expr = this.addition();
            expr = new Expr.Binary(expr, operator, right, operator.line);
        }
        return expr;
    }

    private addition(): Expr.Expr {
        let expr: Expr.Expr = this.modulus();
        while (this.match(TokenType.Minus, TokenType.Plus)) {
            const operator: Token = this.previous();
            const right: Expr.Expr = this.modulus();
            expr = new Expr.Binary(expr, operator, right, operator.line);
        }
        return expr;
    }

    private modulus(): Expr.Expr {
        let expr: Expr.Expr = this.multiplication();
        while (this.match(TokenType.Percent)) {
            const operator: Token = this.previous();
            const right: Expr.Expr = this.multiplication();
            expr = new Expr.Binary(expr, operator, right, operator.line);
        }
        return expr;
    }

    private multiplication(): Expr.Expr {
        let expr: Expr.Expr = this.unary();
        while (this.match(TokenType.Slash, TokenType.Star)) {
            const operator: Token = this.previous();
            const right: Expr.Expr = this.unary();
            expr = new Expr.Binary(expr, operator, right, operator.line);
        }
        return expr;
    }

    private unary(): Expr.Expr {
        if (this.match(TokenType.Minus, TokenType.Bang, TokenType.Dollar, TokenType.PlusPlus, TokenType.MinusMinus)) {
            const operator: Token = this.previous();
            const right: Expr.Expr = this.unary();
            return new Expr.Unary(operator, right, operator.line);
        }
        return this.newKeyword();
    }

    private newKeyword(): Expr.Expr {
        if (this.match(TokenType.New)) {
            const keyword = this.previous();
            const construct: Expr.Expr = this.call();
            return new Expr.New(construct, keyword.line);

        }
        return this.call();
    }

    private call(): Expr.Expr {
        let expr: Expr.Expr = this.primary();
        let consumed = true;
        do  {
            consumed = false;
            if (this.match(TokenType.LeftParen)) {
                consumed = true;
                do {
                    const args: Expr.Expr[] = [];
                    if (!this.check(TokenType.RightParen)) {
                        do {
                            args.push(this.expression());
                        } while (this.match(TokenType.Comma));
                    }
                    const paren: Token = this.consume(TokenType.RightParen, `Expected ")" after arguments`);
                    expr = new Expr.Call(expr, paren, args, null, paren.line);
                } while (this.match(TokenType.LeftParen));
            }
            if (this.match(TokenType.Dot, TokenType.QuestionDot)) {
                consumed = true;
                expr = this.dotGet(expr, this.previous());
            }
            if (this.match(TokenType.LeftBracket)) {
                consumed = true;
                expr = this.bracketGet(expr, this.previous());
            }
        } while (consumed);
        return expr;
    }

    private dotGet(expr: Expr.Expr, operator: Token): Expr.Expr {
        const name: Token = this.consume(TokenType.Identifier, `Expect property name after '.'`);
        const key: Expr.Key = new Expr.Key(name, name.line);
        return new Expr.Get(expr, key, operator.type, name.line);
    }

    private bracketGet(expr: Expr.Expr, operator: Token): Expr.Expr {
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
            const range = new Expr.Range(key, end, step, operator.line);
            return new Expr.Get(expr, range, operator.type, operator.line);
        }
        return new Expr.Get(expr, key, operator.type, operator.line);
    }

    private primary(): Expr.Expr {
        if (this.match(TokenType.False)) {
            return new Expr.Literal(new $Boolean(false), this.previous().line);
        }
        if (this.match(TokenType.True)) {
            return new Expr.Literal(new $Boolean(true), this.previous().line);
        }
        if (this.match(TokenType.Null)) {
            return new Expr.Literal(new $Null(), this.previous().line);
        }
        if (this.match(TokenType.Number)) {
            return new Expr.Literal(new $Number(this.previous().literal), this.previous().line);
        }
        if (this.match(TokenType.String)) {
            return new Expr.Ztring(this.previous().literal, this.previous().line);
        }
        if (this.match(TokenType.Regex)) {
            return new Expr.RegEx(this.previous().literal, this.previous().line);
        }
        if (this.match(TokenType.Base)) {
            const paren = this.previous();
            paren.lexeme = 'this';
            return new Expr.Base(paren, paren.line);
        }
        if (this.match(TokenType.Identifier)) {
            const identifier =  this.previous();
            if (this.match(TokenType.PlusPlus)) {
                return new Expr.Postfix(identifier, 1, identifier.line);
            }
            if (this.match(TokenType.MinusMinus)) {
                return new Expr.Postfix(identifier, -1, identifier.line);
            }
            return new Expr.Variable(identifier, identifier.line);
        }
        if (this.match(TokenType.LeftParen)) {
            const expr: Expr.Expr = this.expression();
            this.consume(TokenType.RightParen, `Expected ")" after expression`);
            return new Expr.Grouping(expr, expr.line);
        }
        if (this.match(TokenType.LeftBrace)) {
            return this.dictionary();
        }
        if (this.match(TokenType.Function)) {
            const token: Token = new Token(TokenType.Lambda, '@', '@', this.previous().line, this.previous().col);
            const lambda: Stmt.Func = this.funcParamsBody(token, 'lambda');
            return new Expr.Lambda(lambda, token.line);
        }
        if (this.match(TokenType.LeftBracket)) {
            return this.list();
        }

        throw this.parseError(this.peek(), `Expected expression`);
        // unreacheable code
        return new Expr.Literal(null, 0);
    }

    public dictionary(): Expr.Expr {
        const leftBrace = this.previous();
        if (this.match(TokenType.RightBrace)) {
            return new Expr.Dictionary([], this.previous().line);
        }
        const properties: Expr.Set[] = [];
        do {
            if (this.match(TokenType.String, TokenType.Identifier, TokenType.Number)) {
                const key: Token = this.previous();
                this.consume(TokenType.Colon, `Expected ":" colon after member`);
                const value = this.expression();
                properties.push(new Expr.Set(null, new Expr.Key(key, key.line), value, key.line));
            } else {
                this.parseError(this.peek(), `String, Number or Identifier expected as a Key of Dictionary {`);
            }
        } while (this.match(TokenType.Comma));
        this.consume(TokenType.RightBrace, `Expected "}" after object literal`);

        return new Expr.Dictionary(properties, leftBrace.line);
    }

    private list(): Expr.Expr {
        const values = [];
        const leftBracket = this.previous();
        if (this.match(TokenType.RightBracket)) {
            return new Expr.List([], this.previous().line);
        }
        do {
            values.push(this.expression());
        } while (this.match(TokenType.Comma));
        this.consume(TokenType.RightBracket, `Expected "]" after array declaration`);

        return new Expr.List(values, leftBracket.line);
    }

}
