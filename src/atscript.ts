import { Scanner } from './scanner';
import { Parser } from './parser';
import { Interpreter } from './interpreter';
import { Console } from './console';
import { DemoSourceCode } from './demos/demo';
import { Stmt } from './types/statement';
declare var window: any;
declare var global: any;

const conzole = new Console();

const atscript = {
    execute: (source: string): Stmt[] => {
        const scanner = new Scanner();
        const parser = new Parser();
        const interpreter = new Interpreter();
        const tokens = scanner.scan(source);
        if (scanner.errors.length) {
            scanner.errors.forEach((e) => {
                conzole.error(e);
            });
            return [];
        }
        const statements = parser.parse(tokens);
        if (parser.errors.length) {
            parser.errors.forEach((e) => {
                conzole.error(e);
            });
            return [];
        }
        return interpreter.interpet(statements);
    },
    interpreter: Interpreter,
    parser: Parser,
    scanner: Scanner
};

if (typeof window !== 'undefined') {
    window.demoSourceCode = DemoSourceCode;
    window.atscript = atscript;
    window.conzole = conzole;
} else {
    global.conzole = conzole;
    exports.atscript = atscript;
}
