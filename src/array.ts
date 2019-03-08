import * as Runtime from './runtime';
import { IndexRange } from './range';
import { Interpreter } from './interpreter';
import { PrototypeEntity } from './entity';

export class ArrayEntity extends PrototypeEntity {
    public values: any[];
    constructor(values: any[]) {
        super();
        this.values = values;
        this.prototype.values.set('invoke', Runtime.invokeMethod(this));
        this.prototype.values.set('size', Runtime.arrayLengthMethod(this));
        this.prototype.values.set('join', Runtime.arrayJoinMethod(this));
        this.prototype.values.set('push', Runtime.arrayPushMethod(this));
        this.prototype.values.set('pop', Runtime.arrayPopMethod(this));
        this.prototype.values.set('each', Runtime.arrayEachMethod(this));
        this.prototype.values.set('map', Runtime.arrayMapMethod(this));
        this.prototype.values.set('find', Runtime.arrayFindMethod(this));
        this.prototype.values.set('indexOf', Runtime.arrayIndexOfMethod(this));
    }

    public get(key: any): any {
        if (typeof key === "number") {
            return this.values[key];
        } else if (key instanceof IndexRange) {
            return this.range(key);
        } else {
            return super.get(key);
        }

    }

    public set(key: string | number, value: any) {
        if (typeof key !== "number") {
            this.properties.set(key, value);
        } else {
            this.values[key] = value;
        }
    }

    private range(range: IndexRange): ArrayEntity {
        const result: any[] = [];
        range.iterate(this.values.length, (i) => {
            result.push(this.values[i]);
        });
        return new ArrayEntity(result);
    }

    public arity(): number {
        return 0;
    }

    public call(interpreter: Interpreter, thiz: any, args: any[]): any { return; }
    public toString(): string {
        return `[${this.values.join(',')}]`;
    }

}
