import { DataType } from './type.enum';
import { $Any } from './any';
import { $Null } from './null';
import { $Class } from './class';

export class $Object extends $Any {
    public value: Map<string, $Any>;
    public conztructor: $Class | $Any;

    constructor(value: Map<string, $Any>, conztructor: $Class | $Any) {
        super(value, DataType.Object);
        this.conztructor = conztructor;
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

    public toString(): string {
        return `<${this.constructor.name} object>`;
    }
}
