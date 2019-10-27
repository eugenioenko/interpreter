import { DataType } from './type.enum';
import { $Any } from './any';
import { Console } from '../console';
declare var conzole: Console;

export  class RangeValue {
    public start: number;
    public end: number;
    public step: number;

    constructor(start: number, end: number, step: number) {
        this.start = start;
        this.end = end;
        this.step = step;
    }

    public normalize(length: number): void {
        if (this.step === null) {
            this.step = 1;
        }
        if (this.end === null) {
            this.end = this.step > 0 ? length - 1 : 0;
        }
        if (this.start === null) {
            this.start = this.step > 0 ? 0 : length - 1;
        }
    }
}

export class $Range extends $Any {

    constructor(value: RangeValue) {
        super(value, DataType.Range);
    }

    public iterate(length: number, callback: (index: number) => void): void {
        this.value.normalize(length);
        if (this.value.step > 0) {
            for (let i = this.value.start; i <= this.value.end; i += this.value.step) {
               callback(i);
            }
        } else if (this.value.step < 0) {
            for (let i = this.value.start; i >= this.value.end; i += this.value.step) {
                callback(i);
            }
        } else {
            conzole.warn(`[range error] => 0 is not a valid step`);
        }
    }
}
