import { DataType } from './type.enum';
import { $Any } from './any';
import { Interpreter } from '../interpreter';
import { $Dictionary } from './dictionary';
import { $Null } from './null';
import { $Callable, $Function } from './function';
import { $String } from './string';
import { $Number } from './number';
import { $List } from './list';
import { $Boolean } from './boolean';

export class IteratorValue {
    public value: $Any;
    public index: $Any;
    public done: $Any;
    public inner: any;

    constructor(value: $Any, index: $Any, done: $Any, inner: any) {
        this.value = value;
        this.index = index;
        this.done = done;
        this.inner = inner;
    }
}

export class $Iterator extends $Any {
    public value: $Any;
    public iter: IteratorValue;

    constructor(value: $Any) {
        super(value, DataType.RegExp);
        this.iter = new IteratorValue(new $Null(), new $Null(), new $Boolean(false), null);
    }

    public get(key: $Any): $Any {
        if (key.value === 'key' || key.value === 'index') {
            return this.iter.index;
        }
        if (key.value === 'done') {
            return this.iter.done;
        }
        if (key.value === 'value') {
            return this.iter.value;
        }
        if ($Iterator.runtime.has(key.value)) {
            return $Iterator.runtime.get(key.value);
        }
        return new $Null();

    }

    public complete(): void {
        this.iter.done = new $Boolean(true);
        this.iter.value = new $Null();
        this.iter.index = new $Null();
    }

    public set(key: $Any, value: $Any): $Any {
        if (typeof this.iter[key.value] !== 'undefined') {
            this.iter[key.value] = value;
        }
        return value;
    }

    public toString(): string {
        return `<${DataType[this.value.value.type]} iterator>`;
    }

    public static next(thiz: $Any, args: $Any[], interpreter: Interpreter): $Any {
        const it = thiz as $Iterator;
        if (it.value.isList()) {
            $List.next(thiz);
        }
        if (it.value.isDictionary()) {
            $Dictionary.next(thiz);
        }
        if (it.value.isObject()) {
            (thiz.value.get(interpreter.strings.next) as $Callable).call(thiz.value, [(thiz as $Iterator)], interpreter);
        }
        return it;
    }

    public static first(thiz: $Any, args: $Any[], interpreter: Interpreter): $Any {
        if ((thiz as $Iterator).value.value.isList()) {
            return new $Dictionary(new Map([
                ['key', 0],
                ['value', thiz.value.value[0]]
            ]));
        }
        return new $Null();
    }

    public static runtime = new Map([
        ['first', new $Callable('first', 0, $Iterator.first)],
        ['next', new $Callable('next', 0, $Iterator.next)]
    ]);

}
