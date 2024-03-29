let fs = require('fs');

const ExpressionAST = {
    Assign: ['name: Token', 'value: Expr'],
    Base: ['paren: Token'],
    Binary: ['left: Expr', 'operator: Token', 'right: Expr'],
    Call: ['callee: Expr', 'paren: Token', 'args: Expr[]', 'thiz: $Any'],
    Char: ['value: Expr'],
    Delete: ['value: Expr'],
    Dictionary: ['properties: Expr[]'],
    Get: ['entity: Expr', 'key: Expr', 'type: TokenType'],
    Grouping: ['expression: Expr'],
    In: ['key: Expr', 'entity: Expr'],
    InstanceOf: ['left: Expr', 'right: Token'],
    Is: ['left: Expr', 'right: Token'],
    Key: ['name: Token'],
    Lambda: ['lambda: Stmt'],
    Logical: ['left: Expr', 'operator: Token', 'right: Expr'],
    List: ['value: Expr[]'],
    Literal: ['value: $Any'],
    New: ['clazz: Expr'],
    NullCoalescing: ['left: Expr', 'right: Expr'],
    Postfix: ['name: Token', 'increment: number'],
    Range: ['start: Expr', 'end: Expr', 'step: Expr'],
    RegEx: ['value: RegExp'],
    Set: ['entity: Expr', 'key: Expr', 'value: Expr'],
    Spread: ['value: Expr'],
    Template: ['value: string'],
    Ternary: ['condition: Expr', 'thenExpr: Expr', 'elseExpr: Expr'],
    Typeof: ['value: Expr'],
    Unary: ['operator: Token', 'right: Expr'],
    Variable: ['name: Token'],
    Void: ['value: Expr'],
    Ztring: ['value: string']
};

const StatementAST = {
    Block: ['statements: Stmt[]'],
    Break: ['keyword: Token'],
    Class: ['name: Token', 'parent: Token', 'methods: Func[]'],
    Continue: ['keyword: Token'],
    DoWhile: ['loop: Stmt', 'condition: Expr'],
    Expression : ['expression: Expr'],
    For: ['initializer: Stmt', 'condition: Expr', 'increment: Expr', 'loop: Stmt'],
    Foreach: ['name: Token', 'key: Token', 'iterable: Expr', 'loop: Stmt', 'none: Stmt'],
    Func: ['name: Token', 'params: Token[]', 'body: Stmt[]'],
    If: ['condition: Expr', 'thenStmt: Stmt', 'elseStmt: Stmt'],
    Print : ['expression: Expr'],
    Return: ['keyword: Token', 'value: Expr'],
    Var : ['name: Token', 'type: Token', 'initializer: Expr'],
    While: ['condition: Expr', 'loop: Stmt']
};

function generateAST(baseClass, AST, filename, imports = '') {
    let file = imports +
`export abstract class ${baseClass} {
    public result: any;
    public line: number;
    // tslint:disable-next-line
    constructor() { }
    public abstract accept<R>(visitor: ${baseClass}Visitor<R>): R;
}\n\n`;

    file += `// tslint:disable-next-line\nexport interface ${baseClass}Visitor<R> {\n`;
    Object.keys(AST).forEach(name => {
        file += `    visit${name}${baseClass}(${baseClass.toLowerCase()}: ${name}): R;\n`;
    });
    file += '}\n\n';

    Object.keys(AST).forEach(name => {
        const syntax = AST[name];
        file += `export class ${name} extends ${baseClass} {\n`;
        syntax.forEach(member => {
            file += '    public ' + member + ';\n'
        });
        file += `\n    constructor(${syntax.join(', ')}, line: number) {\n        super();\n`
        syntax.forEach(member => {
            const name = member.split(': ')[0];
            file += '        this.' + name + ' = ' + name + ';\n'
        });
        file += '        this.line = line;\n'
        file += '    }\n'
        file += `
    public accept<R>(visitor: ${baseClass}Visitor<R>): R {
        return visitor.visit${name}${baseClass}(this);
    }\n`;
        file += `
    public toString(): string {
        return '${baseClass}.${name}';
    }\n`;
        file += '}\n\n'
    });

    fs.writeFile(`src/types/${filename}.ts`, file, function (err, data) {
        if (err) console.log(err);
        console.log(`${filename}.ts generated`);
    });
}

generateAST('Expr', ExpressionAST, 'expression', `import { Token, TokenType } from 'token';\nimport { Stmt } from 'statement';\nimport { $Any } from 'any';\n\n`);
generateAST('Stmt', StatementAST, 'statement', `import { Token } from 'token';\n\nimport { Expr } from 'expression';\n\n`);
