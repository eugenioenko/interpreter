import { DataType } from './type.enum';
import { $Any } from './any';
import { Interpreter } from '../interpreter';
import { $Dictionary } from './dictionary';
import { $Null } from './null';

export class IteratorValue {
    public index: string | number;
    public value: $Any;

    constructor(index: string | number, value: $Any) {
        this.index = index;
        this.value = value;
    }
}

export class $Iterator extends $Any {

    public value: $Any;
    public key: $Any;

    constructor(value: $Any) {
        super(value, DataType.RegExp);
    }

    public get(key: $Any): $Any {
        return new $Null();

    }

    public set(key: $Any, value: any): $Any {
        return new $Null();
    }

    public toString(): string {
        return `"${this.value}"`;
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


    /*
    var it = dictionary.iterator()
    do {
        it.key();
        it.value

    } while (it.next() != it.last())
    } while (it.prev() != it.first())

     */


}
