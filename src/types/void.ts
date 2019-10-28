import { DataType } from './type.enum';
import { $Any } from './any';

export class $Void extends $Any {

    public value: boolean;

    constructor(value: string) {
        super(value, DataType.Void);
    }

}
