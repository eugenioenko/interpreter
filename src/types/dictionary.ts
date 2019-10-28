import { DataType, $Callable, $Any, $Null, $Number, $Function } from '../types';
import { fromJavaScriptMethod } from '../runtime';
import { Interpreter } from '../interpreter';

export class $Dictionary extends $Any {
    public value: Map<any, $Any>;

    constructor(value: Map<any, $Any>) {
        super(value, DataType.Dictionary);
    }

    public get(key: $Any): any {
        if (this.value.has(key.value)) {
            return this.value.get(key.value);
        } else if ($Dictionary.runtime.has(key.value)) {
            return $Dictionary.runtime.get(key.value);
        } else {
            return new $Null();
        }
        return new $Null();
    }

    public set(key: $Any, value: $Any): $Any {
        this.value.set(key.value, value);
        return value;
    }

    public toString(): string {
        const result: any[] = [];
        this.value.forEach((value, key) => {
            result.push(`${key.toString()}: ${value}`);
        });
        return `{${result.join('; ')}}`;
    }


    public static runtime =  new Map([
        ['size', new $Callable('size', 0,  (thiz: $Any, args: $Any[]): $Any => new $Number(thiz.value.size))],
        ['merge', new $Callable('merge', 1,  (thiz: $Any, args: $Any[]): $Any => new $Dictionary(new Map([...(thiz.value), ...(args[0].value)])))],
        ['delete', fromJavaScriptMethod('delete', 1, DataType.Boolean)],
        ['has', fromJavaScriptMethod('has', 1, DataType.Boolean)],
        ['clear', fromJavaScriptMethod('clear', 0, DataType.Null)],
    ]);
}
