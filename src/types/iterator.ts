import { DataType } from './type.enum';
import { $Any } from './any';
import { Interpreter } from '../interpreter';
import { $Dictionary } from './dictionary';
import { $Null } from './null';
import { $Callable, $Function } from './function';
import { $String } from './string';

export class $Iterator extends $Any {

    public value: $Any;
    public index: $Any;

    constructor(value: $Any) {
        super(value, DataType.RegExp);
        this.index = new $Null();
    }

    public get(key: $Any): $Any {
        if (key.value === 'key' || key.value === 'index') {
            return this.index;
        }
        if (key.value === 'value') {
            return this.value.get(this.index);
        }
        if ($Iterator.runtime.has(key.value)) {
            return $Iterator.runtime.get(key.value);
        }
        return new $Null();

    }

    public set(key: $Any, value: any): $Any {
        return new $Null();
    }

    public toString(): string {
        return `"${this.value}"`;
    }

    public static next(thiz: $Any, args: $Any[], interpreter: Interpreter): $Any {
        (thiz as $Iterator).index = (thiz.value.get(new $String('next')) as $Callable).call(thiz.value, [(thiz as $Iterator).index], interpreter);
        return (thiz as $Iterator).index;
    }

    public static complete(thiz: $Any, args: $Any[], interpreter: Interpreter): $Any {
        return (thiz.value.get(new $String('complete')) as $Callable).call(thiz.value, [(thiz as $Iterator).index], interpreter);
    }

    public static first(thiz: $Any, args: $Any[], interpreter: Interpreter): $Any {
        if ((thiz as $Iterator).value.isList()) {
            return new $Dictionary(new Map([
                ['key', 0],
                ['value', thiz.value.value[0]]
            ]));
        }
        return new $Null();
    }

    public static runtime = new Map([
        ['first', new $Callable('first', 0, $Iterator.first)],
        ['next', new $Callable('next', 0, $Iterator.next)],
        ['complete', new $Callable('complete', 0, $Iterator.complete)]
    ]);


    /*
    var it = dictionary.iterator()
    do {
        it.key();
        it.value

    } while (!it.complete()) {
        print l[it.index];
    }

     */


}
