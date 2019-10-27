export enum TokenType {
    // Parser Tokens
    Eof,
    Panic,
    Lambda,

    // Single Character Tokens
    Ampersand,
    AtSign,
    Caret,
    Comma,
    Dollar,
    Dot,
    Hash,
    LeftBrace,
    LeftBracket,
    LeftParen,
    Percent,
    Pipe,
    RightBrace,
    RightBracket,
    RightParen,
    Semicolon,
    Slash,
    Star,

    // One Or Two Character Tokens
    Arrow,
    Bang,
    BangEqual,
    Colon,
    Equal,
    EqualEqual,
    Greater,
    GreaterEqual,
    Less,
    LessEqual,
    Minus,
    MinusEqual,
    MinusMinus,
    PercentEqual,
    Plus,
    PlusEqual,
    PlusPlus,
    Question,
    SlashEqual,
    StarEqual,

    // Literals
    Identifier,
    String,
    Number,
    Regex,

    // Keywords
    And,
    Base,
    Class,
    Do,
    Else,
    Extends,
    False,
    For,
    Function,
    If,
    New,
    Null,
    Or,
    Print,
    Return,
    True,
    Var,
    While
}

export class Token {
    public name: string;
    public line: number;
    public type: TokenType;
    public literal: any;
    public lexeme: string;

    constructor(type: TokenType, lexeme: string, literal: any, line: number) {
        this.name = TokenType[type];
        this.type = type;
        this.lexeme = lexeme;
        this.literal = literal;
        this.line = line;
    }

    public toString() {
        return `[(${this.line}):"${this.lexeme}"]`;
    }

}
