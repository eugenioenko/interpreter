let fs = require('fs');

const ExpressionAST = {
    Assign: ['name: Token', 'value: Expr'],
    Binary: ['left: Expr', 'operator: Token', 'right: Expr'],
    Ternary: ['condition: Expr', 'thenExpr: Expr', 'elseExpr: Expr'],
    Call: ['callee: Expr', 'paren: Token', 'args: Expr[]', 'thiz: any'],
    Super: ['index: Token[]', 'args: Expr[]'],
    Entity: ['properties: Expr[]'],
    Get: ['entity: Expr', 'key: Expr'],
    Set: ['entity: Expr', 'key: Expr', 'value: Expr'],
    New: ['construct: Expr'],
    Grouping: ['expression: Expr'],
    Literal: ['value: any'],
    Ztring: ['value: string'],
    Unary: ['operator: Token', 'right: Expr'],
    Variable: ['name: Token'],
    Key: ['name: Token'],
    Lambda: ['lambda: Stmt'],
    List: ['value: Expr[]']
};

const StatementAST = {
    Block: ['statements: Stmt[]'],
    Expression : ['expression: Expr'],
    If: ['condition: Expr', 'thenStmt: Stmt', 'elseStmt: Stmt'],
    Func: ['name: Token', 'params: Token[]', 'body: Stmt[]'],
    Class: ['name: Token', 'parent: Token', 'methods: Func[]'],
    Return: ['keyword: Token', 'value: Expr'],
    While: ['condition: Expr', 'loop: Stmt'],
    DoWhile: ['loop: Stmt', 'condition: Expr'],
    Print : ['expression: Expr'],
    Var : ['name: Token', 'type: Token', 'initializer: Expr']
};

function generateAST(baseClass, AST, filename, imports = '') {
    let file = imports +
`export abstract class ${baseClass} {
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

generateAST('Expr', ExpressionAST, 'expression', `import { Token } from 'token';\n\nimport { Stmt } from 'statement';\n\n`);
generateAST('Stmt', StatementAST, 'statement', `import { Token } from 'token';\n\nimport { Expr } from 'expression';\n\n`);
