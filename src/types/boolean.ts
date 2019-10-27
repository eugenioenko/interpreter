import { DataType } from './type.enum';
import { $Any } from './any';

export class $Boolean extends $Any {

    public value: boolean;

    constructor(value: boolean) {
        super(value, DataType.Boolean);
    }

}