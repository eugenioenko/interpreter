import { Console } from './console';
declare var conzole: Console;

export class IndexRange {
    public start: number;
    public end: number;
    public step: number;

    constructor(start: number, end: number, step: number) {
        this.start = start;
        this.end = end;
        this.step = step;
    }

    private normalize(length: number): void {
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

    public iterate(length: number, callback: (index: number) => void): void {
        this.normalize(length);
        if (this.step > 0) {
            for (let i = this.start; i <= this.end; i += this.step) {
               callback(i);
            }
        } else if (this.step < 0) {
            for (let i = this.start; i >= this.end; i += this.step) {
                callback(i);
            }
        } else {
            conzole.warn(`[range error] => 0 is not a valid step`);
        }
    }
}
