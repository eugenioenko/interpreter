let fs = require('fs');

const ExpressionAST = {
    Assign: ['name: Token', 'value: Expr'],
    Binary: ['left: Expr', 'operator: Token', 'right: Expr'],
    Call: ['callee: Expr', 'paren: Token', 'args: Expr[]', 'thiz: $Any'],
    Dictionary: ['properties: Expr[]'],
    Get: ['entity: Expr', 'key: Expr'],
    Grouping: ['expression: Expr'],
    Key: ['name: Token'],
    Lambda: ['lambda: Stmt'],
    Logical: ['left: Expr', 'operator: Token', 'right: Expr'],
    List: ['value: Expr[]'],
    Literal: ['value: $Any'],
    New: ['clazz: Expr'],
    Postfix: ['name: Token', 'increment: number'],
    Range: ['start: Expr', 'end: Expr', 'step: Expr'],
    RegEx: ['value: RegExp'],
    Set: ['entity: Expr', 'key: Expr', 'value: Expr'],
    Super: ['index: Token[]', 'args: Expr[]'],
    Ternary: ['condition: Expr', 'thenExpr: Expr', 'elseExpr: Expr'],
    Unary: ['operator: Token', 'right: Expr'],
    Variable: ['name: Token'],
    Ztring: ['value: string']
};

const StatementAST = {
    Block: ['statements: Stmt[]'],
    Class: ['name: Token', 'parent: Token', 'methods: Func[]'],
    DoWhile: ['loop: Stmt', 'condition: Expr'],
    Expression : ['expression: Expr'],
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
    // tslint:disable-next-line
    constructor() {}
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
        file += `\n    constructor(${syntax.join(', ')}) {\n        super();\n`
        syntax.forEach(member => {
            const name = member.split(': ')[0];
            file += '        this.' + name + ' = ' + name + ';\n'
        });
        file += '    }\n'
        file += `
    public accept<R>(visitor: ${baseClass}Visitor<R>): R {
        return visitor.visit${name}${baseClass}(this);
    }\n`;
        file += `
    public toString(): string {
        return '${baseClass}.${name}';
    }\n`;
        file += '}\n'
    });

    fs.writeFile(`src/${filename}.ts`, file, function (err, data) {
        if (err) console.log(err);
        console.log(`${filename}.ts generated`);
    });
}

generateAST('Expr', ExpressionAST, 'expression', `import { Token, TokenType } from 'token';\nimport { Stmt } from 'statement';\nimport { $Any } from 'types';\n\n`);
generateAST('Stmt', StatementAST, 'statement', `import { Token } from 'token';\n\nimport { Expr } from 'expression';\n\n`);
