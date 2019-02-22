import { Scanner } from './scanner';
import { Parser } from './parser';
import { Interpreter } from './interpreter';
import { Console } from './console';
import { DemoSourceCode } from './demo';

declare var global: any;

if (typeof window !== 'undefined') {
    global = window;
}

global.conzole = new Console();
global.demoSourceCode = DemoSourceCode;
global.execute = (source: string): Console => {
    return (new Interpreter().interpet((new Parser((new Scanner(source)).scan())).parse()));
};

global.atscript = (source: string) => {
    global.conzole.clear();
    global.execute(source);
}
