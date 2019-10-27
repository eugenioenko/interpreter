
import { DataType } from './type.enum';
import { $Any } from './any';
import { $Range } from './range';
import { $Null } from './null';

export class $List extends $Any {
    public value: $Any[];
    constructor(value: $Any[]) {
        super(value, DataType.List);
    }

    public get(key: $Any): $Any {
        if (key.isNumber()) {
            return this.value[key.value];
        } else if (key.isRange) {
            return this.range(<$Range> key);
        } else {
            // return super.get(key);
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

}
