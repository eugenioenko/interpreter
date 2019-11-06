import { DataType } from './type.enum';
import { $Any } from './any';
import { $Null } from './null';
import { $Class } from './class';
import { $Boolean } from './boolean';

export class $Object extends $Any {
    public value: Map<string, $Any>;
    public conztructor: $Any;
    public name: string;

    constructor(value: Map<string, $Any>, conztructor: $Any) {
        super(value, DataType.Object);
        this.conztructor = conztructor;
        this.name = (conztructor as $Class).name;
    }

    public get(key: $Any): $Any {
        const method = this.conztructor.get(key);

        if (method.isFunction()) {
            return method;
        }

        if (this.value.has(key.value)) {
            return this.value.get(key.value);
        }

        return new $Null();
    }

    public set(key: $Any, value: $Any): $Any {
        this.value.set(key.value, value);
        return value;
    }

    public operatorIn(key: $Any): $Any {
        return new $Boolean(this.value.has(key.value));
    }

    public toString(): string {
        return `<${this.name} object>`;
    }
}
