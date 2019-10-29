import { Console } from '../console';
import { DataType } from './type.enum';
declare var conzole: Console;

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

    public isFunction(): boolean {
        return this.type === DataType.Function;
    }

    public isClass(): boolean {
        return this.type === DataType.Class;
    }

    public isLambda(): boolean {
        return this.type === DataType.Function && (this as any).name === '@';
    }

    public isList(): boolean {
        return this.type === DataType.List;
    }

    public isDictionary(): boolean {
        return this.type === DataType.Dictionary;
    }

    public isObject(): boolean {
        return this.type === DataType.Object;
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
        if (this.isList() && this.value.length === 0) {
            return false;
        }
        if (this.isDictionary() && this.value.size === 0) {
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

    public set(key: $Any, value: $Any): $Any {
        conzole.error(`key ${key} does not exist in ${this}`);
        throw new Error("Error in Any setter");
    }

    public toString(): string {
        return this.value.toString();
    }
}
