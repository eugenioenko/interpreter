import { DataType, $List, $Callable, $Any, $Range, $Null, $Number } from '../types';
import { fromJavaScriptMethod } from '../runtime';

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
        } else if ($String.runtime.has(key.value)) {
            return $String.runtime.get(key.value);
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

    public static  runtime =  new Map([
        ['toUpper',  fromJavaScriptMethod('toUpperCase', 0, DataType.String)],
        ['toLower', fromJavaScriptMethod('toLowerCase', 0, DataType.String)],
        ['size', new $Callable('size', 0,  (thiz: $Any, args: $Any[]): $Any => new $Number(thiz.value.length))],
        ['split',  fromJavaScriptMethod('split', 1, DataType.List)],
        ['concat', fromJavaScriptMethod('concat', 1, DataType.String)],
        ['includes', fromJavaScriptMethod('includes', 1, DataType.Boolean)],
        ['indexOf', fromJavaScriptMethod('indexOf', 1, DataType.Number)],
        ['lastIndexOf', fromJavaScriptMethod('lastIndexOf', 1, DataType.Number)],
        ['repeat', fromJavaScriptMethod('repeat', 1, DataType.String)],
        ['replace', fromJavaScriptMethod('replace', 2, DataType.String)],
        ['search', fromJavaScriptMethod('search', 1, DataType.Number)],
        ['slice', fromJavaScriptMethod('slice', -1, DataType.String)],
        ['substring', fromJavaScriptMethod('substring', -1, DataType.String)],
        ['trim', fromJavaScriptMethod('trim', 0, DataType.String)],
    ])

}
