import * as Runtime from './runtime';
import { Interpreter } from './interpreter';
import { PrototypeEntity } from './entity';

export class StringEntity extends PrototypeEntity {
    private value: string;

    constructor(values: string) {
        super();
        this.value = values;
        this.prototype.values.set('invoke', Runtime.invokeMethod(this));
        this.prototype.values.set('size', Runtime.stringLengthMethod(this));
    }

    public arity(): number {
        return 0;
    }

    public call(interpreter: Interpreter, thiz: any, args: any[]): any { return; }

    public toString(): string {
        return this.value;
    }

}
