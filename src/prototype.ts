import { Console } from './console';
declare var conzole: Console;

export class Prototype {

    public values: Map<string, any>;
    private parent: Prototype;

    constructor(parent: Prototype = null) {
        this.values = new Map();
        this.parent = parent;
    }

    public set(name: string, value: any): void {
        this.values.set(name, value);
    }

    public get(key: string): any {
        if (this.values.has(key)) {
            return this.values.get(key);
        }
        if (this.parent !== null ) {
            return this.parent.get(name);
        }
        conzole.error(`${key} is not defined in prototype`);
    }

}
