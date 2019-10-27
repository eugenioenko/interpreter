import { DataType, $List, $Callable, $Any, $Range, $Null, $Number } from '../types';
import { Runtime } from '../runtime';

export class $String extends $Any {
    public value: string;

    constructor(value: string) {
        super(value, DataType.String);
        /* this.prototype.values.set('invoke', Runtime.invokeMethod(this));
        this.prototype.values.set('size', Runtime.stringLengthMethod(this));
        this.prototype.values.set('substr', Runtime.stringSubStrMethod(this));
        this.prototype.values.set('split', Runtime.stringSplitMethod(this));
        this.prototype.values.set('match', Runtime.stringMatchMethod(this));
        this.prototype.values.set('replace', Runtime.stringReplaceMethod(this));
        this.prototype.values.set('alter', Runtime.stringAlterMethod(this));
        this.prototype.values.set('toUpperCase', Runtime.stringToUpperCase(this));
        this.prototype.values.set('toLowerCase', Runtime.stringToLowercase(this)); */
    }

    public get(key: $Any): $Any {
        if (key.isNumber()) {
            return new $String(this.value[key.value]);
        } else if (key.isRange()) {
            return this.range(<$Range> key);
        } else if (key.value === 'length') {
            return new $Number(this.value.length);
        } else if (Runtime.String.has(key.value)) {
            return Runtime.String.get(key.value);
        }
        return new $Null();

    }

    public set(key: $Any, value: any): $Any {
        if (typeof key !== 'number') {
            // this.properties.set(key, value);
        }
        return new $Null();
    }

    public arity(): number {
        return 0;
    }

    private range(range: $Range): $String {
        let result = '';
        range.iterate(this.value.length, (i) => {
            result += this.value[i];
        });
        return new $String(result);
    }

}
