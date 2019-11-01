const atscript = require('./atscript');
global.conzole = console;
const readline = require('readline');
const exitKeywords = ['exit', 'close', 'quit'];
const rl = readline.createInterface(process.stdin, process.stdout);

const interpreter = new atscript.atscript.interpreter();
const scanner = new atscript.atscript.scanner();
const parser = new atscript.atscript.parser();
var source = '';

console.log('AtScript interpreter cli v1.1.2');
console.log('-------------------------------');
console.log('Available cli commands:')
console.log(' - "errors" to view current parse errors');
console.log(' - "exit" or "close" to exit');
console.log('');


rl.setPrompt('> ');
rl.prompt();
rl.on('line', (line) => {
    if (exitKeywords.indexOf(line) !== -1) {
        rl.close();
        return;
    }
    if (line === 'errors') {
        printErrors();
    }
    tryRun(line);
    rl.prompt();
}).on('exit',() => {
    process.exit(0);
});

function printErrors() {
    if (parser && parser.errors && parser.errors.length) {
        parser.errors.forEach((e) => {
            console.error(e);
        });
    }
}

function tryRun(line) {
    source += line;
    const tokens = scanner.scan(source);
    if (scanner.errors.length) {
        scanner.errors.forEach((e) => {
            console.error(e.message);
        });
        return;
    }

    const statements = parser.parse(tokens);
    if (parser.errors.length) {
        return;
    }
    if (statements.length) {
        statements.forEach((statement) => {
            console.info(interpreter.eval(statement), {});
        });
    }
    source  = '';
}