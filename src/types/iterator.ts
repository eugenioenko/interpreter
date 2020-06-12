import { DataType } from './type.enum';
import { $Any } from './any';
import { Interpreter } from '../interpreter';
import { $Dictionary } from './dictionary';
import { $Null } from './null';
import { $Callable } from './function';
import { $List } from './list';
import { $Boolean } from './boolean';
import { $Number } from './number';
import { $String } from './string';
import { $Range, RangeValue } from './range';

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

        // already iterated, return completed iterator
        if (it.iter.done.value) {
            return it;
        }

        if (it.value.isList()) {
            $Iterator.listNext(thiz);
            return it;
        }

        if (it.value.isDictionary()) {
            $Iterator.dictionaryNext(thiz);
            return it;
        }

        if (it.value.isString()) {
            $Iterator.stringNext(thiz);
            return it;
        }

        if (it.value.isNumber()) {
            $Iterator.numberNext(thiz);
            return it;
        }

        if(it.value.isRange()) {
            $Iterator.rangeNext(thiz);
            return it;
        }

        if (it.value.isObject()) {
            (thiz.value.get(interpreter.strings.next) as $Callable).call(thiz.value, [(thiz as $Iterator)], interpreter);
            return it;
        }

        // default
        interpreter.error(`${DataType[it.value.type].toLowerCase()} with value ${it.value} is not an iterable`);
        it.complete();
        return it;
    }

    public static listNext(thiz: $Any) {
        const it = thiz as $Iterator;
        const list = it.value as $List;
        const index = it.iter.index;

        // list is empty, no iteration required
        if (!list.value.length) {
            it.complete();
            return it;
        }

        // first value
        if (it.iter.inner === null) {
            it.iter.inner = true;
            it.iter.index = new $Number(0);
            it.iter.value = list.value[0];
            return it;
        }

        // no more values to iterate
        if (index.value >= list.value.length - 1) {
            it.complete();
            return it;
        }

        // normal iteration
        const newIndex = index.value + 1;
        it.iter.index = new $Number(newIndex);
        it.iter.value = list.value[newIndex];
        return it;
    }

    public static stringNext(thiz: $Any) {
        const it = thiz as $Iterator;
        const str = it.value as $String;
        const index = it.iter.index;

        // string is empty
        if (!str.value.length) {
            it.complete();
            return it;
        }

        // first value
        if (it.iter.inner === null) {
            it.iter.inner = true;
            it.iter.index = new $Number(0);
            it.iter.value = new $String(str.value.charAt(0));
            return it;
        }

        // no more values to iterate
        if (index.value >= str.value.length - 1) {
            it.complete();
            return it;
        }

        // normal iteration
        const newIndex = index.value + 1;
        it.iter.index = new $Number(newIndex);
        it.iter.value = new $String(str.value.charAt(newIndex));
        return it;
    }

    public static numberNext(thiz: $Any) {
        const it = thiz as $Iterator;
        const number = it.value as $Number;
        const index = it.iter.index;

        // number is 0 or negative
        if (number.value <= 0) {
            it.complete();
            return it;
        }

        // first value
        if (it.iter.inner === null) {
            it.iter.inner = number.value - 1; //inner holds last value
            it.iter.index = new $Number(0);
            it.iter.value = it.iter.index;
            return it;
        }

        // no more values to iterate
        if (index.value >= it.iter.inner) {
            it.complete();
            return it;
        }

        // normal iteration
        const newIndex = index.value + 1;
        it.iter.index = new $Number(newIndex);
        it.iter.value = it.iter.index;
        return it;
    }

    public static rangeNext(thiz: $Any) {
        const it = thiz as $Iterator;
        const range = it.value as $Range;
        const value: RangeValue = range.value;

        // imposible range
        if (
            value.step === 0 ||
            (value.start > value.end && value.step > 0) ||
            (value.start < value.end && value.step < 0)
        ) {
            it.complete();
            return it;
        }

        // first value
        if (it.iter.inner === null) {
            it.iter.inner =  true;
            it.iter.index = new $Number(0);
            it.iter.value = new $Number(value.start);
            return it;
        }


        if (value.step > 0) {
            if(it.iter.value.value >= value.end) {
                it.complete();
                return it;
            }
        } else {
            if(it.iter.value.value <= value.end) {
                it.complete();
                return it;
            }
        }

        // normal iteration
        const newIndex = it.iter.index.value + 1;
        const newValue = it.iter.value.value + value.step;
        it.iter.index = new $Number(newIndex);
        it.iter.value = new $Number(newValue);
        return it;
    }

    public static dictionaryNext(thiz: $Any): $Any {
        const it = thiz as $Iterator;
        const dict = it.value as $Dictionary;

        // empty dictionary
        if (!dict.value.size) {
            it.complete();
            return it;
        }

        // first value
        if (it.iter.inner === null) {
            it.iter.inner = dict.value.keys();
        }

        // normal iteration
        const current = it.iter.inner.next();
        it.iter.value = it.value.get(new $Any(current.value));
        it.iter.index = new $String(current.value);

        // no more values to iterate
        if (current.done) {
            it.complete();
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
