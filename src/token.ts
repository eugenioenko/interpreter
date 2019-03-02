export enum TokenType {
    // parser tokens
    eof,
    panic,
    lambda,

    // single character tokens
    ampersand,
    atSign,
    caret,
    comma,
    dollar,
    dot,
    leftBrace,
    leftBracket,
    leftParen,
    percent,
    pipe,
    rightBrace,
    rightBracket,
    rightParen,
    semicolon,
    slash,
    star,

    // one or two character tokens
    arrow,
    bang,
    bangEqual,
    colon,
    equal,
    equalEqual,
    greater,
    greaterEqual,
    less,
    lessEqual,
    minus,
    minusEqual,
    minusMinus,
    percentEqual,
    plus,
    plusEqual,
    plusPlus,
    question,
    slashEqual,
    starEqual,

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
    do,
    else,
    extends,
    false,
    for,
    func,
    function,
    if,
    let,
    new,
    null,
    or,
    print,
    return,
    super,
    true,
    var,
    while
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
