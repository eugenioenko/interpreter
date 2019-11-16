import { fromJavaScriptMethod } from '../runtime';
import { Interpreter } from '../interpreter';
import { $Any } from './any';
import { $Function, $Callable } from './function';
import { $Null } from './null';
import { $Number } from './number';
import { DataType } from './type.enum';
import { $Range } from './range';
import { $Iterator } from './iterator';
import { $Boolean } from './boolean';

export class $List extends $Any {
    public value: $Any[];

    constructor(value: $Any[]) {
        super(value, DataType.List);
    }

    public get(key: $Any): $Any {
        if (key.isNumber()) {
            if (typeof this.value[key.value] !== 'undefined') {
                return this.value[key.value];
            } else {
                return new $Null();
            }
        } else if (key.isRange()) {
            return this.range(<$Range> key);
        } else if ($List.runtime.has(key.value)) {
            return $List.runtime.get(key.value);
        } else {
            return new $Null();
        }

    }

    public set(key: $Any, value: $Any): $Any {
        if (key.isNumber()) {
            this.value[key.value] = value;
        }
        return value;
    }

    private range(range: $Range): $List {
        const result: $Any[] = [];
        range.iterate(this.value.length, (i) => {
            result.push(this.value[i]);
        });
        return new $List(result);
    }

    public toString(): string {
        return `[${this.value.join(',')}]`;
    }

    public static size(thiz: $Any, args: $Any[]): $Any {
        return new $Number(args[0].value.length);
    }

    public static each(thiz: $Any, args: $Any[], interpreter: Interpreter): $Any {
        for (let i = 0; i < thiz.value.length; ++i) {
            (args[0] as $Function).call(thiz, [thiz.value[i], new $Number(i), thiz], interpreter);
        }
        return thiz;
    }

    public static map(thiz: $Any, args: $Any[], interpreter: Interpreter): $Any {
        for (let i = 0; i < thiz.value.length; ++i) {
            thiz.value[i] = (args[0] as $Function).call(thiz, [new $Any(thiz.value[i]), new $Number(i), thiz], interpreter);
        }
        return thiz;
    }

    public static iterator(thiz: $Any, args: $Any[], interpreter: Interpreter): $Any {
       return new $Iterator(thiz);
    }

    public static next(thiz: $Any) {
        const it = thiz as $Iterator;
        const list = it.value as $List;

        // emtpy list or iteration over
        if (!list.value.length || it.index.isNull()) {
            return new $Null();
        }
        // first value
        if (it.iter === null) {
            it.iter = true;
            return new $Number(0);
        }
        // no more values to iterate
        if (it.index.value >= list.value.length - 1) {
            return new $Null();
        }
        return new $Number(it.index.value + 1);
    }

    public static runtime =  new Map([
        ['concat', fromJavaScriptMethod('concat', -1, DataType.List)],
        ['each', new $Callable('each', 1, $List.each)],
        ['includes', fromJavaScriptMethod('includes', 1, DataType.Boolean)],
        ['indexOf', fromJavaScriptMethod('indexOf', 1, DataType.Number)],
        ['join', fromJavaScriptMethod('join', 1, DataType.String)],
        ['lastIndexOf', fromJavaScriptMethod('lastIndexOf', 1, DataType.Number)],
        ['map', new $Callable('map', 1, $List.map)],
        ['pop', fromJavaScriptMethod('pop', 0, DataType.List)],
        ['push', fromJavaScriptMethod('push', -1, DataType.List)],
        ['shift', fromJavaScriptMethod('shift', 0, DataType.List)],
        ['size', new $Callable('size', 0,  (thiz: $Any, args: $Any[]): $Any => new $Number(thiz.value.length))],
        ['slice', fromJavaScriptMethod('slice', -1, DataType.List)],
        ['splice', fromJavaScriptMethod('splice', -1, DataType.List)],
        ['unshift', fromJavaScriptMethod('unshift', -1, DataType.List)],
        ['iterator', new $Callable('iterator', 0, $List.iterator)]
    ]);

}
