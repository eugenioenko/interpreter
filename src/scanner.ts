import { Token, TokenType } from '../src/token';
import { Console } from './console';
declare var conzole: Console;

const isDigit = (char: string) => char >= '0' && char <= '9';

const isAlpha = (char: string ) => (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');

const isAlphaNumeric = (char: string) => isAlpha(char) || isDigit(char);

const isKeyword = (word: string) => TokenType[word] >= 23;

export class Scanner {

    public source: string;
    public tokens: Token[] = [];
    private current = 0;
    private line = 1;
    private start = 0;

    constructor(source: string) {
        this.source = source;
    }

    private eof() {
        return this.current >= this.source.length;
    }

    private advance() {
        this.current++;
        return this.source.charAt(this.current - 1);
    }

    private addToken(tokenName: string, literal: any) {
        const text = this.source.substring(this.start, this.current);
        this.tokens.push(new Token(tokenName, text, literal, this.line));
    }

    private match(expected: string) {
        if (this.eof()) {
            return false;
        }

        if (this.source.charAt(this.current) !== expected) {
            return false;
        }

        this.current++;
        return true;
    }

    private peek() {
        if (this.eof()) {
            return '\0';
        }
        return this.source.charAt(this.current);
    }

    private peekNext() {
        if (this.current + 1 >= this.source.length) {
            return '\0';
        }
        return this.source.charAt(this.current + 1);
    }

    private comment() {
        while (this.peek() !== '\n' && !this.eof()) {
            this.advance();
        }
    }

    private string(quote: string, type: TokenType) {
        while (this.peek() !== quote && !this.eof()) {
            if (this.peek() === '\n') {
                this.line++;
            }
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
        this.addToken('string', value);
    }

    private number() {
        // gets integer part
        while (isDigit(this.peek())) {
            this.advance();
        }

        // checks for fraction
        if (this.peek() === '.' && isDigit(this.peekNext())) {
            this.advance();
        }

        // gets fraction part
        while (isDigit(this.peek())) {
            this.advance();
        }

        // checks for exponent
        if (this.peek().toLowerCase() === 'e') {
            this.advance();
            if (this.peek() === '-' || this.peek() === '+') {
                this.advance();
            }
        }

        while (isDigit(this.peek())) {
            this.advance();
        }

        const value = this.source.substring(this.start , this.current);
        this.addToken('number', Number(value));
    }

    private identifier() {
        while (isAlphaNumeric(this.peek())) {
            this.advance();
        }

        let value = this.source.substring(this.start, this.current);
        value = value === 'func' ? 'function' : value;
        if (isKeyword(value)) {
            this.addToken(value, null);
        } else {
            this.addToken('identifier', value);
        }
    }

    public scan() {
        while (!this.eof()) {
            this.start = this.current;
            this.scanToken();
        }

        this.tokens.push(new Token('eof', '', null, this.line));
        return this.tokens;
    }

    private scanToken() {
        const char = this.advance();
        switch (char) {
            case '(': this.addToken('leftParen', null); break;
            case ')': this.addToken('rightParen', null); break;
            case '[': this.addToken('leftBracket', null); break;
            case ']': this.addToken('rightBracket', null); break;
            case '{': this.addToken('leftBrace', null); break;
            case '}': this.addToken('rightBrace', null); break;
            case ',': this.addToken('comma', null); break;
            case '.': this.addToken('dot', null); break;
            case ';': this.addToken('semicolon', null); break;
            case '*': this.addToken(this.match('=') ? 'starEqual' : 'star', null); break;
            case '^': this.addToken('caret', null); break;
            case '?': this.addToken('question', null); break;
            case ':': this.addToken('colon', null); break;
            case '%': this.addToken(this.match('=') ? 'percentEqual' : 'percent', null); break;
            case '$': this.addToken('dollar', null); break;
            case '@': this.addToken('function', null); break;
            case '-': this.addToken(this.match('-') ? 'minusMinus' : this.match('>') ? 'return' : this.match('=') ? 'minusEqual' : 'minus', null); break;
            case '+': this.addToken(this.match('+') ? 'plusPlus' : this.match('=') ? 'plusEqual' : 'plus', null); break;
            case '|': this.addToken(this.match('|') ? 'or' : 'pipe', null); break;
            case '&': this.addToken(this.match('&') ? 'and' : 'ampersand', null); break;
            case '<': this.addToken(this.match('=') ? 'lessEqual' : 'less', null); break;
            case '>': this.addToken(this.match('=') ? 'greaterEqual' : 'greater', null); break;
            case '!': this.addToken(this.match('=') ? this.match('=') ? 'bangEqualEqual' : 'bangEqual' : 'bang', null); break;
            case '=':
                if (this.match('=')) {
                    if (this.match('=')) {
                        this.addToken('equalEqualEqual', null);
                    } else {
                        this.addToken('equalEqual', null);
                    }
                } else if (this.match('>')) {
                    this.addToken('arrow', null);
                } else {
                    this.addToken('equal', null);
                }
                break;
            case '/':
                if (this.match('/')) {
                    this.comment();
                } else if (this.match('=')) {
                    this.addToken('slashEqual', null);
                } else {
                    this.addToken('slash', null);
                }
                break;
            case '\n': this.line++; break;
            case `'`:
            case `"`:
            case '`':
                this.string(char, TokenType.string);
                break;
            // ignore cases
            case ' ':
            case '\r':
            case '\t':
                break;
            // compex cases
            default:
                if (isDigit(char)) {
                    this.number();
                } else if (isAlpha(char)) {
                    this.identifier();
                } else {
                    this.scanError(`Unexpected character '${char}'`);
                }
                break;
        }
    }

    private scanError(message: string): void {
        conzole.error(`Error at (${this.line}):  ${message}`);
        throw new Error('Error while scanning. Execution has been stoped');
    }

}
