import { Console } from '../console';
import { DataType } from './type.enum';
import { $Any } from './any';
import { $Null } from './null';
declare var conzole: Console;

export class $Class extends $Any {
    public value: Map<string, $Any>;
    public name: string;
    public parent: $Class | $Any;

    constructor(name: string, value: Map<string, $Any>, parent: $Any | $Class) {
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

    public toString(): string {
        return `<${this.name} class>`;
    }
}
