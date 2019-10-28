import { DataType } from './type.enum';
import { $Any } from './any';

export class $Return extends $Any {

    public value: $Any;

    constructor(value: $Any) {
        super(value, DataType.Return);
    }
}
