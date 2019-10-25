import { Console } from '../console';
declare var conzole: Console;

export class Prototype {

    public values: Map<string, any>;
    private prototype: Prototype;
    private owner: object;
    constructor(values: Map<string, any>, parent: Prototype = null, owner: object) {
        this.values = new Map(values);
        this.prototype = parent;
        this.owner = owner;
    }

    public set(name: string, value: any): void {
        this.values.set(name, value);
    }

    public get(key: string): any {
        if (this.values.has(key)) {
            return this.values.get(key);
        }
        if (this.prototype !== null ) {
            return this.prototype.get(key);
        }
        conzole.error(`[entity error] => ${key} is not defined in ${this.owner}`);
        throw new Error();
    }

}
