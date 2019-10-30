import { Token, TokenType } from './token';
import { Console } from './console';
import * as Utils from './utils';
declare var conzole: Console;

export class Scanner {

    public source: string;
    public tokens: Token[] = [];
    private current = 0;
    private line = 1;
    private col = 1;
    private start = 0;

    constructor(source: string) {
        this.source = source;
    }

    private eof(): boolean {
        return this.current >= this.source.length;
    }

    private advance(): string {
        if (this.peek() === '\n') {
            this.line++;
            this.col = 0;
        }
        this.current++;
        this.col++;
        return this.source.charAt(this.current - 1);
    }

    private addToken(tokenType: TokenType, literal: any): void {
        const text = this.source.substring(this.start, this.current);
        this.tokens.push(new Token(tokenType, text, literal, this.line, this.col));
    }

    private match(expected: string): boolean {
        if (this.eof()) {
            return false;
        }

        if (this.source.charAt(this.current) !== expected) {
            return false;
        }

        this.current++;
        return true;
    }

    private peek(): string {
        if (this.eof()) {
            return '\0';
        }
        return this.source.charAt(this.current);
    }

    private peekNext(): string {
        if (this.current + 1 >= this.source.length) {
            return '\0';
        }
        return this.source.charAt(this.current + 1);
    }

    private comment(): void {
        while (this.peek() !== '\n' && !this.eof()) {
            this.advance();
        }
    }

    private multilineComment(): void {
        while (!this.eof() && !(this.peek() === '*' && this.peekNext() === '/')) {
            this.advance();
        }
        if (this.eof()) {
            this.scanError('Unterminated comment, expecting closing "*/"');
        } else {
            // the closing slash '*/'
            this.advance();
            this.advance();
        }
    }

    private string(quote: string, type: TokenType): void {
        while (this.peek() !== quote && !this.eof()) {
            this.advance();
        }

        // Unterminated string.
        if (this.eof()) {
            this.scanError(`Unterminated string, expecting closing ${quote}`);
            return;
        }

        // The closing ".
        this.advance();

        // Trim the surrounding quotes.
        const value = this.source.substring(this.start + 1, this.current - 1);
        this.addToken(TokenType.String, value);
    }

    private number(): void {
        // gets integer part
        while (Utils.isDigit(this.peek())) {
            this.advance();
        }

        // checks for fraction
        if (this.peek() === '.' && Utils.isDigit(this.peekNext())) {
            this.advance();
        }

        // gets fraction part
        while (Utils.isDigit(this.peek())) {
            this.advance();
        }

        // checks for exponent
        if (this.peek().toLowerCase() === 'e') {
            this.advance();
            if (this.peek() === '-' || this.peek() === '+') {
                this.advance();
            }
        }

        while (Utils.isDigit(this.peek())) {
            this.advance();
        }

        const value = this.source.substring(this.start , this.current);
        this.addToken(TokenType.Number, Number(value));
    }

    private identifier(): void {
        while (Utils.isAlphaNumeric(this.peek())) {
            this.advance();
        }

        const value = this.source.substring(this.start, this.current);
        const capitalized = value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
        if (Utils.isKeyword(capitalized)) {
            this.addToken(TokenType[capitalized], value);
        } else {
            this.addToken(TokenType.Identifier, value);
        }
    }

    private regex(): void {
        while (this.peek() !== '#' && !this.eof()) {
            this.advance();
        }

        // Unterminated regex.
        if (this.eof()) {
            this.scanError(`Unterminated RegEx, expecting closing #`);
            return;
        }

        // The closing #.
        this.advance();
        const regex = this.source.substring(this.start + 1, this.current - 1);

        let flags = '';
        if (['g', 'i', 's', 'u', 'y'].indexOf(this.peek()) !== -1) {
            const start = this.current;
            while (this.peek() !== '#' && !this.eof()) {
                this.advance();
            }
            if (this.eof()) {
                this.scanError(`Unterminated RegEx, expecting closing # after flags`);
                return;
            }
            flags = this.source.substring(start, this.current);
            // The closing # after flags.
            this.advance();
        }

        this.addToken(TokenType.Regex, new RegExp(regex, flags));
    }

    public scan(): Token[] {
        while (!this.eof()) {
            this.start = this.current;
            this.scanToken();
        }

        this.tokens.push(new Token(TokenType.Eof, '', null, this.line, 0));
        return this.tokens;
    }

    private scanToken(): void {
        const char = this.advance();
        switch (char) {
            case '(': this.addToken(TokenType.LeftParen, null); break;
            case ')': this.addToken(TokenType.RightParen, null); break;
            case '[': this.addToken(TokenType.LeftBracket, null); break;
            case ']': this.addToken(TokenType.RightBracket, null); break;
            case '{': this.addToken(TokenType.LeftBrace, null); break;
            case '}': this.addToken(TokenType.RightBrace, null); break;
            case ',': this.addToken(TokenType.Comma, null); break;
            case '.': this.addToken(TokenType.Dot, null); break;
            case ';': this.addToken(TokenType.Semicolon, null); break;
            case '^': this.addToken(TokenType.Caret, null); break;
            case '?': this.addToken(TokenType.Question, null); break;
            case ':': this.addToken(TokenType.Colon, null); break;
            case '$': this.addToken(TokenType.Dollar, null); break;
            case '@': this.addToken(TokenType.Function, '@'); break;
            case '*': this.addToken(this.match('=') ? TokenType.StarEqual : TokenType.Star, null); break;
            case '%': this.addToken(this.match('=') ? TokenType.PercentEqual : TokenType.Percent, null); break;
            case '|': this.addToken(this.match('|') ? TokenType.Or : TokenType.Pipe, null); break;
            case '&': this.addToken(this.match('&') ? TokenType.And : TokenType.Ampersand, null); break;
            case '<': this.addToken(this.match('=') ? TokenType.LessEqual : TokenType.Less, null); break;
            case '>': this.addToken(this.match('=') ? TokenType.GreaterEqual : TokenType.Greater, null); break;
            case '!': this.addToken(this.match('=') ? TokenType.BangEqual : TokenType.Bang, null); break;
            case '=': this.addToken(this.match('=') ? TokenType.EqualEqual : this.match('>') ? TokenType.Arrow : TokenType.Equal, null); break;
            case '+': this.addToken(this.match('+') ? TokenType.PlusPlus : this.match('=') ? TokenType.PlusEqual : TokenType.Plus, null); break;
            case '-': this.addToken(this.match('-') ? TokenType.MinusMinus : this.match('>') ? TokenType.Return : this.match('=') ? TokenType.MinusEqual : TokenType.Minus, null); break;
            case '/':
                if (this.match('/')) {
                    this.comment();
                } else if (this.match('*')) {
                    this.multilineComment();
                } else {
                    this.addToken(this.match('=') ? TokenType.SlashEqual : TokenType.Slash, null);
                }
                break;
            case `'`:
            case `"`:
            case '`':
                this.string(char, TokenType.String);
                break;
            case '#':
                this.regex();
            // ignore cases
            case '\n':
            case ' ':
            case '\r':
            case '\t':
                break;
            // compex cases
            default:
                if (Utils.isDigit(char)) {
                    this.number();
                } else if (Utils.isAlpha(char)) {
                    this.identifier();
                } else {
                    this.scanError(`Unexpected character '${char}'`);
                }
                break;
        }
    }

    private scanError(message: string): void {
        conzole.error(`Tokenizer error at (${this.line}:${this.col}) =>  ${message}`);
        throw new Error('Error while scanning. Execution has been stoped');
    }

}
