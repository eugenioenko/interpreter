
import { fromJavaScriptMethod } from '../runtime';
import { Interpreter } from '../interpreter';
import { $Any } from './any';
import { $Function, $Callable } from './function';
import { $Null } from './null';
import { $Number } from './number';
import { $String } from './string';
import { DataType } from './type.enum';
import { $Iterator } from './iterator';

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

    public static each(thiz: $Any, args: $Any[], interpreter: Interpreter): $Any {
        thiz.value.forEach((value: $Any, key: string) => {
            (args[0] as $Function).call(thiz, [value, new $String(key), thiz], interpreter);
        });
        return thiz;
    }

    public static map(thiz: $Any, args: $Any[], interpreter: Interpreter): $Any {
        thiz.value.forEach((value: $Any, key: string) => {
            thiz.value.set('key', (args[0] as $Function).call(thiz, [value, new $String(key), thiz], interpreter));
        });
        return thiz;
    }

    public static indexOf(thiz: $Any, args: $Any[], interpreter: Interpreter): $Any {
        let index: string = null;
        thiz.value.forEach((value: $Any, key: string) => {
            if (value.type === args[0].type && value.value === args[0].value) {
                index = key;
            }
        });
        if (index !== null) {
            return new $String(index);
        }
        return new $Null();
    }

    public static runtime =  new Map([
        ['clear', fromJavaScriptMethod('clear', 0, DataType.Null)],
        ['delete', fromJavaScriptMethod('delete', 1, DataType.Boolean)],
        ['each', new $Callable('each', 1, $Dictionary.each)],
        ['has', fromJavaScriptMethod('has', 1, DataType.Boolean)],
        ['indexOf', new $Callable('indexOf', 1, $Dictionary.indexOf)],
        ['map', new $Callable('map', 1, $Dictionary.map)],
        ['merge', new $Callable('merge', 1,  (thiz: $Any, args: $Any[]): $Any => new $Dictionary(new Map([...(thiz.value), ...(args[0].value)])))],
        ['size', new $Callable('size', 0,  (thiz: $Any, args: $Any[]): $Any => new $Number(thiz.value.size))]
    ]);

}
