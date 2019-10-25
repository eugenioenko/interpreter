declare var conzole: Console;

export enum DataType {
    Null,
    Void,
    Any,
    Boolean,
    Number,
    String,
    List,
    Dictionary,
    Object,
    Function,
    Range
}

export class $Any {

    public value: any;
    public type = DataType.Any;

    constructor(value: any, type: DataType = DataType.Any) {
        this.value = value;
        this.type = type;
    }

    public isString(): boolean {
        return this.type === DataType.String;
    }

    public isNull(): boolean {
        return this.type === DataType.Null;
    }

    public isBoolean(): boolean {
        return this.type === DataType.Boolean;
    }

    public isNumber(): boolean {
        return this.type === DataType.Number;
    }

    public isRange(): boolean {
        return this.type === DataType.Range;
    }

    public isTruthy(): boolean {
        if (this.isNull()) {
            return false;
        }
        if (this.isBoolean()) {
            return Boolean(this.value);
        }
        if (this.isNumber() && this.value === 0) {
            return false;
        }
        if (this.isString() && this.value.toString().length === 0) {
            return false;
        }
        if (this.value === null) {
            throw new Error("Unknown error value Any is null");
        }
        if (typeof this.value === 'undefined') {
            throw new Error("Unknown error value Any is undefined");
        }
        return true;
    }

    public isEqual(other: $Any) {
        return this.value === other.value;
    }

    public get(key: $Any): $Any {
        conzole.error(`key ${key} does not exist in ${this}`);
        throw new Error("Error in Any getter");
    }

    public toString(): string {
        return this.value.toString();
    }
}

export class $Boolean extends $Any {

    public value: boolean;

    constructor(value: boolean) {
        super(value, DataType.Boolean);
    }

}

export class $Null extends $Any {

    public value: boolean;

    constructor() {
        super(null);
        this.type = DataType.Null;
    }

    public toString() {
        return 'null';
    }

}

export class $Void extends $Any {

    public value: boolean;

    constructor(value: string) {
        super(value, DataType.Void);
    }

}

export  class RangeValue {
    public start: number;
    public end: number;
    public step: number;

    constructor(start: number, end: number, step: number) {
        this.start = start;
        this.end = end;
        this.step = step;
    }

    public normalize(length: number): void {
        if (this.step === null) {
            this.step = 1;
        }
        if (this.end === null) {
            this.end = this.step > 0 ? length - 1 : 0;
        }
        if (this.start === null) {
            this.start = this.step > 0 ? 0 : length - 1;
        }
    }
}

export class $Range extends $Any {

    constructor(value: RangeValue) {
        super(value, DataType.Range);
    }

    public iterate(length: number, callback: (index: number) => void): void {
        this.value.normalize(length);
        if (this.value.step > 0) {
            for (let i = this.value.start; i <= this.value.end; i += this.value.step) {
               callback(i);
            }
        } else if (this.value.step < 0) {
            for (let i = this.value.start; i >= this.value.end; i += this.value.step) {
                callback(i);
            }
        } else {
            conzole.warn(`[range error] => 0 is not a valid step`);
        }
    }
}

export class $Number extends $Any {

    public value: number;

    constructor(value: number) {
        super(value, DataType.Number);
    }

}

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
        } else if (key.value === 'length') {
            return new $Number(this.value.length);
        } else if (key.isRange()) {
            return this.range(<$Range> key);
        } else {
            return; //return super.get(key);
        }

    }

    public set(key: string | number, value: any): void {
        if (typeof key !== 'number') {
            // this.properties.set(key, value);
        }
    }

    public arity(): number {
        return 0;
    }
    /*

    public call(interpreter: Interpreter, thiz: any, args: any[]): any {
        return new $String(args[0]);
    }*/

    private range(range: $Range): $String {
        let result = '';
        range.iterate(this.value.length, (i) => {
            result += this.value[i];
        });
        return new $String(result);
    }

}
