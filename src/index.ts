import { Scanner } from './scanner';
import { Parser } from './parser';
import { Interpreter } from './interpreter';
import { Console } from './console';
import { DemoSourceCode } from './demo';

(<any>window).conzole = new Console();
(<any>window).demoSourceCode = DemoSourceCode;
(<any>window).execute = function(source: string): Console {
    /*
    const consoleInstance = new Console();
    const scanner = new Scanner(source);
    const printer = new TreePrinter();
    const tokens = scanner.scanTokens();
    const parser = new Parser(tokens);
    const intererpreter = new Interpreter(consoleInstance);
    const statements = parser.parse();
    intererpreter.interpet(statements);
    */


    return (new Interpreter().interpet((new Parser((new Scanner(source)).scan())).parse()));
}
