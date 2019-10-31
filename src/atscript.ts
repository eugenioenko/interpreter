import { Scanner } from './scanner';
import { Parser } from './parser';
import { Interpreter } from './interpreter';
import { Console } from './console';
import { DemoSourceCode } from './demos/demo';
import { Stmt } from './types/statement';
declare var window: any;
declare var global: any;

if (typeof window === 'undefined') {
    global.window = global;
}

window.conzole = new Console();
window.demoSourceCode = DemoSourceCode;
window.atscript = { };
window.atscript.execute = (source: string)  => {
    try {
        return (new Interpreter().interpet((new Parser((new Scanner(source)).scan())).parse()));
    } catch (e) {
        console.error(e);
    }
};
window.atscript.interpreter = Interpreter;

window.atscript.parse = (source: string)  => {
    return new Parser((new Scanner(source)).scan()).parse();
};
