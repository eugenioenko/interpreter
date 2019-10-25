/* import { PrototypeEntity } from './entity';
import * as Runtime from '../runtime';
import { Interpreter } from '../interpreter';

export class RegExEntity extends PrototypeEntity {
    private regex: RegExp;

    constructor(regex: RegExp) {
        super();
        this.regex = regex;
        this.prototype.values.set('exec', Runtime.regexExecMethod(this));
        this.prototype.values.set('test', Runtime.regexTestMethod(this));
    }

    public arity(): number {
        return 0;
    }

    public call(interpreter: Interpreter, thiz: any, args: any[]): any {
        return this;
     }

    public toString(): string {
        return this.regex.toString();
    }

}
*/