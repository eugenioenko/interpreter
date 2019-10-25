import { Token } from './token';
import { Console } from '../console';
declare var conzole: Console;

export class Scope {

    private values: Map<string, any>;
    private parent: Scope;

    constructor(parent: Scope = null) {
        this.values = new Map();
        this.parent = parent;
    }

    private scopeError(message: string): void {
        conzole.error(`[scope error] => ${message}`);
        throw new Error();
    }

    public set(name: string, value: any) {
        this.values.set(name, value);
    }

    public define(name: string, value: any) {
        if (this.values.has(name)) {
            this.scopeError(`identifier "${name}" has already been defined`);
        } else {
            this.set(name, value);
        }
    }

    public assign(name: string, value: any): void {
        if (this.values.has(name)) {
            this.set(name, value);
        } else {
            if (this.parent !== null) {
                return this.parent.assign(name, value);
            }
            this.scopeError(`Identifier "${name}" has not been defined`);
        }
    }

    public get(name: Token): any {
        if (this.values.has(name.lexeme)) {
            return this.values.get(name.lexeme);
        }
        if (this.parent !== null ) {
            return this.parent.get(name);
        }
        this.scopeError(`Error at (${name.line}): "${name.lexeme}" is not defined`);
    }

    public first(key: string): any {
        if (this.values.has(key)) {
            return this.values.get(key);
        }
        return null;
    }

    public obtain(key: string): any {
        if (this.values.has(key)) {
            return this.values.get(key);
        }
        if (this.parent !== null) {
            return this.parent.obtain(key);
        }
        return null;
    }

}
