const atscript = require('./atscript.min');
global.conzole = console;
const readline = require('readline');
const exitKeywords = ['exit', 'close', 'quit'];
const rl = readline.createInterface(process.stdin, process.stdout);

const interpreter = new atscript.atscript.interpreter();
const scanner = new atscript.atscript.scanner();
const parser = new atscript.atscript.parser();
var source = '';
console.log('\x1b[33m');
console.log('AtScript interpreter cli v1.1.2');
console.log('-------------------------------');
console.log('Available cli commands:')
console.log(' - "errors" to view current parse errors');
console.log(' - "clear" to empty buffered source code');
console.log(' - "source" to show currrently parsed source code');
console.log(' - "exit" or "close" to exit');
console.log('\x1b[0m');


rl.setPrompt('> ');
rl.prompt();
rl.on('line', (line) => {
    if (exitKeywords.indexOf(line) !== -1) {
        rl.close();
        return;
    }
    if (line === 'errors') {
        printErrors();
        return;
    } else if (line === 'clear') {
        source = '';
        console.clear();
        parser.errors = [];
        return;
    } else if (line === 'source') {
        console.log('\x1b[33m', source, '\x1b[0m');
        return;
    }
    tryRun(line);
    rl.prompt();
}).on('exit',() => {
    process.exit(0);
});

function printErrors() {
    if (parser && parser.errors && parser.errors.length) {
        parser.errors.forEach((e) => {
            console.error('\x1b[31m', e, '\x1b[0m');
        });
    }
}

function tryRun(line) {
    source += line;
    const tokens = scanner.scan(source);
    if (scanner.errors.length) {
        scanner.errors.forEach((e) => {
            console.error('\x1b[31m', e, '\x1b[0m');
        });
        source = '';
        return;
    }

    const statements = parser.parse(tokens);
    if (parser.errors.length > 2) {
        parser.errors.forEach((e) => {
            console.error('\x1b[31m', e, '\x1b[0m');
        });
        source = '';
    }
    if (parser.errors.length) {
        return;
    }
    if (statements.length) {
        source = '';
        statements.forEach((statement) => {
            const result = interpreter.eval(statement);
            console.log(result.error ? '\x1b[31m' : '\x1b[34m', result.value, '\x1b[0m');
        });
    }
}