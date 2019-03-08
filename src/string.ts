import { IndexRange } from './range';
import { PrototypeEntity } from './entity';
import * as Runtime from './runtime';
import { Interpreter } from './interpreter';

export class StringEntity extends PrototypeEntity {
    private value: string;

    constructor(values: string) {
        super();
        this.value = values;
        this.prototype.values.set('invoke', Runtime.invokeMethod(this));
        this.prototype.values.set('size', Runtime.stringLengthMethod(this));
        this.prototype.values.set('substr', Runtime.stringSubStrMethod(this));
        this.prototype.values.set('split', Runtime.stringSplitMethod(this));
    }

    public get(key: any): any {
        if (typeof key === "number") {
            return this.value[key];
        } else if (key instanceof IndexRange) {
            return this.range(key);
        } else {
            return super.get(key);
        }

    }

    public set(key: string | number, value: any): void {
        if (typeof key !== "number") {
            this.properties.set(key, value);
        }
    }

    public arity(): number {
        return 0;
    }

    public call(interpreter: Interpreter, thiz: any, args: any[]): any {
        return new StringEntity(args[0]);
    }

    public toString(): string {
        return this.value;
    }

    private range(range: IndexRange): StringEntity {
        range.normalize(this.value.length);
        let result = '';
        range.iterate((i) => {
            result += this.value[i];
        });
        return new StringEntity(result);
    }

}
