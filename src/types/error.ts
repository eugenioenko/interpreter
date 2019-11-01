import { DataType } from './type.enum';
import { $Any } from './any';

export class $Error extends $Any {

    public value: string;
    public line: number;
    public col: number;

    constructor(value: string, line: number, col: number) {
        super(value, DataType.Error);
        this.line = line;
        this.col = col;
    }

    public toString(): string {
        return this.value.toString();
    }

}
