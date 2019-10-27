import { DataType } from './type.enum';
import { $Any } from './any';

export class $Number extends $Any {

    public value: number;

    constructor(value: number) {
        super(value, DataType.Number);
    }

}
