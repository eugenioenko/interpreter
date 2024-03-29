import { DataType } from './type.enum';
import { $Any } from './any';
import { $Null } from './null';
import { $Boolean } from './boolean';

export class $Class extends $Any {
    public value: Map<string, $Any>;
    public name: string;
    public parent: $Any;

    constructor(name: string, value: Map<string, $Any>, parent: $Any) {
        super(value, DataType.Class);
        this.name = name;
        this.parent = parent;
    }

    public get(key: $Any): $Any {
        if (this.value.has(key.value)) {
            return this.value.get(key.value);
        }

        if (this.parent.isClass()) {
            return this.parent.get(key);
        }

        return new $Null();
    }

    public set(key: $Any, value: $Any): $Any {
        this.value.set(key.value, value);
        return value;
    }

    public delete(key: $Any): $Any {
        const result = this.value.delete(key.value);
        return new $Boolean(result);
    }

    public toString(): string {
        return `<${this.name} class>`;
    }

}
