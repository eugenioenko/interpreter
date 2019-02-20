import * as Runtime from './runtime';
import { Interpreter } from './interpreter';
import { PrototypeEntity } from './entity';

export class ArrayEntity extends PrototypeEntity {
    private values: any[];
    constructor(values: any[]) {
        super();
        this.values = values;
        this.prototype.values.set('invoke', Runtime.invokeMethod(this));
        this.prototype.values.set('size', Runtime.arrayLengthMethod(this));
        this.prototype.values.set('join', Runtime.arrayJoinMethod(this));
        this.prototype.values.set('push', Runtime.arrayPushMethod(this));
        this.prototype.values.set('pop', Runtime.arrayPopMethod(this));
    }

    public get(key: string|number): any {
        if (typeof key !== "number") {
            return super.get(key);
        } else {
            return this.values[key];
        }

    }

    public set(key: string|number, value: any) {
        if (typeof key !== "number") {
            this.properties.set(key, value);
        } else {
            this.values[key] = value;
        }
    }

    public arity(): number {
        return 0;
    }

    public call(interpreter: Interpreter, thiz: any, args: any[]): any { return; }
    public toString(): string {
        return `[${this.values.join(',')}]`;
    }

}
