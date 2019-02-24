export enum TokenType {
    // parser tokens
    eof,
    panic,
    lambda,

    // single character tokens
    leftParen,
    rightParen,
    leftBracket,
    rightBracket,
    leftBrace,
    rightBrace,
    comma,
    dot,
    semicolon,
    slash,
    star,
    pipe,
    caret,
    percent,
    dollar,
    atSign,

    // one or two character tokens
    minus,
    minusMinus,
    plus,
    plusPlus,
    bang,
    bangEqual,
    equal,
    equalEqual,
    greater,
    greaterEqual,
    less,
    lessEqual,
    colon,
    question,
    arrow,

    // three character tokens
    bangEqualEqual,
    equalEqualEqual,

    // literals
    identifier,
    string,
    number,

    // keywords
    and,
    class,
    extends,
    do,
    else,
    false,
    function,
    func,
    for,
    if,
    new,
    null,
    or,
    print,
    return,
    true,
    var,
    let,
    while,
    super
}

export class Token {
    public name: string;
    public line: number;
    public type: TokenType;
    public literal: any;
    public lexeme: string;

    constructor(name: string, lexeme: string, literal: any, line: number) {
        this.name = name;
        this.type = TokenType[name];
        this.lexeme = lexeme;
        this.literal = literal;
        this.line = line;

    }

    public toString() {
        return `[(${this.line}):"${this.lexeme}"]`;
    }

}
