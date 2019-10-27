import { DataType } from './type.enum';
import { $Any } from './any';
import { $Null } from './null';

export class $Dictionary extends $Any {
    public value: Map<any, $Any>;

    constructor(value: Map<any, $Any>) {
        super(value, DataType.Dictionary);
    }

    public get(key: $Any): any {
        if (this.value.has(key.value)) {
            return this.value.get(key.value);
        }
        return new $Null();
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
}
