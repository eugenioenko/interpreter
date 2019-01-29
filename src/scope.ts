import { Token } from './token';
import { Console } from './console';
declare var conzole: Console;

export class Scope {

    private values: Map<string, any>;
    private parent: Scope;

    constructor(parent: Scope = null) {
        this.values = new Map();
        this.parent = parent;
    }

    public set(name: string, value: any) {
        this.values.set(name, value);
    }

    public define(name: string, value: any) {
        if (this.values.has(name)) {
            conzole.error(`identifier "${name}" has already been declared`);
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
            conzole.error(`Identifier "${name}" has not been declared`);
        }
    }

    public get(name: Token): any {
        if (this.values.has(name.lexeme)) {
            return this.values.get(name.lexeme);
        }
        if (this.parent !== null ) {
            return this.parent.get(name);
        } else {
            // this is global scope
            /**
             * TODO: reconsider this
             * its injecting javascript global scope into application
             */
            if (typeof window[name.lexeme] !== 'undefined') {
                this.values.set(name.lexeme, window[name.lexeme]);
                return this.values.get(name.lexeme);
            }
        }
        conzole.error(`Error at (${name.line}): ${name.lexeme} is not defined`);
    }

}
