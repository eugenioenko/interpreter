import { Scanner } from './scanner';
import { Parser } from './parser';
import { Interpreter } from './interpreter';
import { Console } from './console';
import { DemoSourceCode } from './demos/demo';
declare var window: any;
declare var global: any;

if (typeof window === 'undefined') {
    global.window = global;
}

window.conzole = new Console();
window.demoSourceCode = DemoSourceCode;
window.execute = (source: string): Console => {
     return (new Interpreter().interpet((new Parser((new Scanner(source)).scan())).parse()));
};

window.atscript = (source: string) => {
    return (new Interpreter().eval((new Parser((new Scanner(source)).scan())).parse()));
};
