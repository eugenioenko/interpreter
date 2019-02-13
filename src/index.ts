import { Scanner } from './scanner';
import { Parser } from './parser';
import { Interpreter } from './interpreter';
import { Console } from './console';
import { DemoSourceCode } from './demo';

(window as any).conzole = new Console();
(window as any).demoSourceCode = DemoSourceCode;
(window as any).execute = (source: string): Console => {
    return (new Interpreter().interpet((new Parser((new Scanner(source)).scan())).parse()));
};
