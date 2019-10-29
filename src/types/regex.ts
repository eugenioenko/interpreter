import { DataType } from './type.enum';
import { $Any } from './any';

export class $RegExp extends $Any {

    public value: RegExp;

    constructor(value: RegExp) {
        super(value, DataType.RegExp);
    }

}
