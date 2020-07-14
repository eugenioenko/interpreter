import * as Expr from './types/expression';
import * as Stmt from './types/statement';
import { Console } from './console';
import { Token, TokenType } from './token';
import { $Boolean } from './types/boolean';
import { $Null } from './types/null';
import { $Number } from './types/number';
import { $Error } from './types/error';
declare var conzole: Console;

export class Parser {
    private current: number;
    private tokens: Token[];
    public errors: string[];
    public errorLevel = 1;

    public parse(tokens: Token[]): Stmt.Stmt[] {
        this.current = 0;
        this.tokens = tokens;
        this.errors = [];
        const statements: Stmt.Stmt[] = [];
        while (!this.eof()) {
            try {
                statements.push(this.declaration());
            } catch (e) {
                if (e instanceof $Error) {
                    this.errors.push(`Parse Error (${e.line}:${e.col}) => ${e.value}`);
                } else {
                    this.errors.push(e);
                    if (this.errors.length > 100) {
                        this.errors.push('Parse Error limit exceeded');
                        return statements;
                    }
                }
                this.synchronize();
            }
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

    private peekNext(): Token {
        if (!this.eof()) {
            return this.tokens[this.current + 1];
        }
        return this.peek();
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

        return this.error(this.previous(), message + `, unexpected token "${this.peek().lexeme}"`);
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

    private error(token: Token, message: string): any {
        throw new $Error(message, token.line, token.col);
    }

    private warning(message: string): void {
        if (this.errorLevel === 1) {
            const token = this.previous();
            conzole.warn(`[line (${token.line}) parse warning at "${token.lexeme}"] => ${message}`);
        }
    }

    private synchronize(): void {
        do {
            switch (this.peek().type) {
                case TokenType.Class:
                case TokenType.Function:
                case TokenType.Var:
                case TokenType.For:
                case TokenType.If:
                case TokenType.While:
                case TokenType.Do:
                case TokenType.Print:
                case TokenType.Return:
                    this.advance();
                    return;
            }
            if (this.check(TokenType.Semicolon) || this.check(TokenType.RightBrace)) {
                this.advance();
                return;
            }
            this.advance();
        } while (!this.eof());
    }

    private declaration(): Stmt.Stmt {
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
    }

    private classDeclaration(): Stmt.Class {
        const name: Token = this.consume(TokenType.Identifier, `Expected a class name`);
        let parent: Token = null;
        if (this.match(TokenType.Extends)) {
            parent  = this.consume(TokenType.Identifier, `Expected a parent name`);
        }
        this.consume(TokenType.LeftBrace, `Expected open brace "{" after class name`);
        const methods: Stmt.Func[] = [];

        while (!this.check(TokenType.RightBrace) && !this.eof()) {
            if (this.check(TokenType.Function)) {
                this.consume(TokenType.Function, '');
            }
            methods.push(this.funcDeclaration("method"));
        }

        this.consume(TokenType.RightBrace, `Expected "}" after class "${name.literal}" methods`);
        if (this.extraSemicolon()) {
            this.warning(`Unnecessary semicolon after class ${name.lexeme} declaration`);
        }
        return new Stmt.Class(name, parent, methods, name.line);
    }

    private funcDeclaration(kind: string): Stmt.Func {
        const name: Token = this.consume(TokenType.Identifier, `Expected a ${kind} name`);
        return this.funcParamsBody(name, kind);
    }

    private funcParams(kind: string): Token[] {
        const params: Token[] = [];
        if (!this.check(TokenType.RightParen)) {
            do {
                if (params.length >= 255) {
                    this.error(this.peek(), `Parameter count exceeds 255`);
                }
                params.push(this.consume(TokenType.Identifier, `Expected a parameter name`));
            } while (this.match(TokenType.Comma));
        }
        this.consume(TokenType.RightParen, `Expected close parenthesis ")" after ${kind} parameters`);
        return params;
    }

    private funcParamsBody(name: Token, kind: string): Stmt.Func {
        this.consume(TokenType.LeftParen, `Expected open parenthesis "(" after ${kind}`);
        const params: Token[] = this.funcParams(kind);

        if (this.match(TokenType.LeftBrace)) {
            const body: Stmt.Stmt[] = this.block();
            if (name.type !== TokenType.Lambda && this.extraSemicolon()) {
                this.warning(`Unnecessary semicolon after function ${name.lexeme} declaration`);
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
        const name: Token = this.consume(TokenType.Identifier, `Expected a variable name after "var" keyword`);
        let initializer: Expr.Expr  = null;
        if (this.match(TokenType.Equal)) {
            initializer = this.expression();
        }
        this.consume(TokenType.Semicolon, `Expected semicolon ";" after a variable declaration`);

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
        if (this.match(TokenType.Foreach)) {
            return this.foreachStatement();
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
        this.consume(TokenType.LeftParen, `Expected open parenthesis "(" after an "if" keyword`);
        const condition: Expr.Expr = this.expression();
        this.consume(TokenType.RightParen, `Expected close parenthesis ")" after "if" statement condition`);
        const thenStmt: Stmt.Stmt = this.statement();
        let elseStmt: Stmt.Stmt =  null;
        if (this.match(TokenType.Else)) {
            elseStmt = this.statement();
        }
        return new Stmt.If(condition, thenStmt, elseStmt, keyword.line);
    }

    private whileStatement(): Stmt.Stmt {
        const keyword = this.previous();
        this.consume(TokenType.LeftParen, `Expected open parenthesis "(" after a "while" statement`);
        const condition: Expr.Expr = this.expression();
        this.consume(TokenType.RightParen, `Expected close parenthesis ")" after "while" condition`);
        const loop: Stmt.Stmt = this.statement();
        return new Stmt.While(condition, loop, keyword.line);
    }

    private forStatement(): Stmt.Stmt {
        const keyword = this.previous();
        this.consume(TokenType.LeftParen, `Expected open parenthesis "(" after a "for" statement`);

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
        this.consume(TokenType.Semicolon, `Expected semicolon ";" after a "for" statement loop condition`);
        let increment: Expr.Expr;
        if (!this.check(TokenType.RightParen)) {
            increment = this.expression();
        }
        this.consume(TokenType.RightParen, `Expected semicolon ";" after a "for" stement increment expression`);
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

    private foreachStatement(): Stmt.Stmt {
        const keyword = this.previous();
        this.consume(TokenType.LeftParen, `Expected open parenthesis "(" after a "foreach" statement`);
        const name = this.consume(TokenType.Identifier, `Expected an identifier inside "foreach" statement`);
        let key: Token = null;
        if (this.match(TokenType.With)) {
            key = this.consume(TokenType.Identifier, `Expected a "key" identifier after "with" keyword in foreach statement`);
        }
        this.consume(TokenType.In, `Expected "in" keyword inside foreach statement`);
        const iterable = this.expression();
        this.consume(TokenType.RightParen, `Expected close parenthesis ")" after a "foreach" initialization`);

        const loop: Stmt.Stmt = this.statement();
        return new Stmt.Foreach(name, key, iterable, loop, keyword.line);
    }

    private doWhileStatement(): Stmt.Stmt {
        const keyword = this.previous();
        const loop: Stmt.Stmt = this.statement();
        this.consume(TokenType.While, `Expected a "while" condition after "do" statement`);
        this.consume(TokenType.LeftParen, `Expected open parenthesis "(" after a "while" keyword`);
        const condition: Expr.Expr = this.expression();
        this.consume(TokenType.RightParen, `Expected close parenthesis ")" after "while" condition`);
        this.consume(TokenType.Semicolon, `Expected semicolon ";" after a do while condition`);
        return new Stmt.DoWhile(loop, condition, keyword.line);
    }

    private printStatement(): Stmt.Stmt {
        const keyword = this.previous();
        const value: Expr.Expr = this.expression();
        this.consume(TokenType.Semicolon, `Expected semicolon ";" after expression`);
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
        this.consume(TokenType.RightBrace, `Expected close brace "}" after block statement`);
        return statements;
    }

    private expressionStatement(): Stmt.Stmt {
        const expression: Expr.Expr = this.expression();
        this.consume(TokenType.Semicolon, `Expected semicolon ";" after ${expression} expression`);
        if (this.match(TokenType.Semicolon)) {
            const token = this.previous();
            this.warning(`[line (${token.line}) parse warning at "${token.lexeme}"] => unnecessary semicolon or empty statement`);
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
            this.error(operator, `Invalid l-value, is not an assigning target.`);
        }
        return expr;
    }

    private ternary(): Expr.Expr {
        const expr = this.nullCoalescing();
        if (this.match(TokenType.Question)) {
            const thenExpr: Expr.Expr = this.ternary();
            this.consume(TokenType.Colon, `Expected ":" after ternary ? expression`);
            const elseExpr: Expr.Expr = this.ternary();
            return new Expr.Ternary(expr, thenExpr, elseExpr, expr.line);
        }
        return expr;
    }

    private nullCoalescing(): Expr.Expr {
        const expr = this.logicalOr();
        if (this.match(TokenType.QuestionQuestion)) {
            const rightExpr: Expr.Expr = this.nullCoalescing();
            return new Expr.NullCoalescing(expr, rightExpr, expr.line);
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
        let expr  = this.instanceof();
        while (this.match(
            TokenType.BangEqual, TokenType.EqualEqual, TokenType.LessEqualGreater)
        ) {
            const operator: Token = this.previous();
            const right: Expr.Expr = this.instanceof();
            expr = new Expr.Binary(expr, operator, right, operator.line);
        }
        return expr;
    }

    private instanceof(): Expr.Expr {
        let expr = this.in();
        while (this.match(TokenType.Is, TokenType.Instanceof)) {
            const operator = this.previous();
            if (this.match(TokenType.Identifier, TokenType.Class, TokenType.Function, TokenType.Null)) {
                const right = this.previous();
                if (operator.type === TokenType.Instanceof) {
                    expr = new Expr.InstanceOf(expr, right, operator.line);
                } else {
                    expr = new Expr.Is(expr, right, operator.line);
                }
            } else {
                this.error(this.previous(), `Expected a Type or ClassName identifier after "is" operator`);
            }
        }
        return expr;
    }

    private in(): Expr.Expr {
        let expr = this.comparison();
        while (this.match(TokenType.In)) {
            const operator = this.previous();
            const entity = this.expression();
            expr = new Expr.In(expr, entity, operator.line);
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
        let expr: Expr.Expr = this.typeof();
        while (this.match(TokenType.Slash, TokenType.Star)) {
            const operator: Token = this.previous();
            const right: Expr.Expr = this.typeof();
            expr = new Expr.Binary(expr, operator, right, operator.line);
        }
        return expr;
    }

    private typeof(): Expr.Expr {
        if (this.match(TokenType.Typeof)) {
            const operator: Token = this.previous();
            const value: Expr.Expr = this.typeof();
            return new Expr.Typeof(value, operator.line);
        }
        return this.range();
    }

    private range(): Expr.Expr {
        let expr: Expr.Expr = this.unary();
        if (this.match(TokenType.DotDot)) {
            const end: Expr.Expr = this.unary();
            expr = new Expr.Range(expr, end, null, expr.line);
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
        let step: Expr.Expr = new Expr.Literal(new $Number(1), operator.line);

        if (!this.check(TokenType.Colon)) {
            key = this.expression();
        }

        // range get expression
        if (this.match(TokenType.Colon) && !this.check(TokenType.Colon)) {
            end = this.expression();
            if (this.match(TokenType.Colon) && !this.check(TokenType.RightBracket)) {
                step = this.expression();
            }
            this.consume(TokenType.RightBracket, `Expected "]" after an index`);
            const range = new Expr.Range(key, end, step, operator.line);
            return new Expr.Get(expr, range, operator.type, operator.line);
        }
        // index get expression
        this.consume(TokenType.RightBracket, `Expected "]" after an index`);
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
        if (this.match(TokenType.Template)) {
            return new Expr.Template(this.previous().literal, this.previous().line);
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
        if (this.match(TokenType.Void)) {
            const expr: Expr.Expr = this.expression();
            return new Expr.Void(expr, this.previous().line);
        }
        if (this.match(TokenType.DotDotDot)) {
            const expr: Expr.Expr = this.range();
            return new Expr.Spread(expr, this.previous().line);
        }
        if (this.match(TokenType.Hash)) {
            return new Expr.Char(this.call(), this.previous().line);
        }

        throw this.error(this.peek(), `Expected expression, unexpected token "${this.peek().lexeme}"`);
        // unreacheable code
        return new Expr.Literal(null, 0);
    }

    public dictionary(): Expr.Expr {
        const leftBrace = this.previous();
        if (this.match(TokenType.RightBrace)) {
            return new Expr.Dictionary([], this.previous().line);
        }
        const properties: Expr.Expr[] = [];
        do {
            if (this.match(TokenType.String, TokenType.Identifier, TokenType.Number)) {
                const key: Token = this.previous();
                if (this.match(TokenType.Colon)) {
                    const value = this.expression();
                    properties.push(new Expr.Set(null, new Expr.Key(key, key.line), value, key.line));
                } else {
                    const value = new Expr.Variable(key, key.line);
                    properties.push(new Expr.Set(null, new Expr.Key(key, key.line), value, key.line));
                }
            } else if (this.match(TokenType.DotDotDot)) {
                const value = this.expression();
                properties.push(new Expr.Spread(value, value.line));
            } else {
                this.error(this.peek(), `String, Number or Identifier expected as a Key of Dictionary {, unexpected token ${this.peek().lexeme}`);
            }
        } while (this.match(TokenType.Comma));
        this.consume(TokenType.RightBrace, `Expected "}" after object literal`);

        return new Expr.Dictionary(properties, leftBrace.line);
    }

    private list(): Expr.Expr {
        const values: Expr.Expr[] = [];
        const leftBracket = this.previous();

        if (this.match(TokenType.RightBracket)) {
            return new Expr.List([], this.previous().line);
        }

        if (this.peekNext().type === TokenType.Colon) {
            let step: Expr.Expr = new Expr.Literal(new $Number(1), leftBracket.line);
            const start: Expr.Expr = this.expression();
            this.consume(TokenType.Colon, `Expected ":" color after start of range expression`);
            const end =  this.expression();
            this.consume(TokenType.Colon, `Expected ":" color after end of range expression`);
            if (!this.check(TokenType.RightBracket)) {
                step = this.expression();
            }
            values.push(new Expr.Range(start, end, step, start.line));
        } else {
            do {
                values.push(this.expression());
            } while (this.match(TokenType.Comma));
        }

        this.consume(TokenType.RightBracket, `Expected "]" after array declaration`);
        return new Expr.List(values, leftBracket.line);

    }

}
