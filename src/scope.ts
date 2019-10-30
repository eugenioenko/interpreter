import { Token } from './token';
import { Console } from './console';
import { $Any } from './types/any';
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

    public set(name: string, value: $Any) {
        this.values.set(name, value);
    }

    public define(name: string, value: $Any) {
        if (this.values.has(name)) {
            this.scopeError(`identifier "${name}" has already been defined`);
        } else {
            this.set(name, value);
        }
    }

    public assign(name: string, value: $Any): void {
        if (this.values.has(name)) {
            this.set(name, value);
        } else {
            if (this.parent !== null) {
                return this.parent.assign(name, value);
            }
            this.scopeError(`Runtime error identifier "${name}" has not been defined`);
        }
    }

    public get(key: string, token: Token = null): $Any {
        if (this.values.has(key)) {
            return this.values.get(key);
        }
        if (this.parent !== null ) {
            return this.parent.get(key);
        }
        this.scopeError(`Runtime error at (${token.line}:${token.col}) => "${token.lexeme}" is not defined`);
    }

}
