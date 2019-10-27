import { DataType } from './type.enum';
import { $Any } from './any';

export class $Null extends $Any {

    public value: boolean;

    constructor() {
        super(null);
        this.type = DataType.Null;
    }

    public toString() {
        return 'null';
    }

}