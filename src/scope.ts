import { Token } from "./token";
import { Console } from "./console";
import { $Any } from "./types/any";
import { $Null } from "./types/null";

export class Scope {
    private values: Map<string, any>;
    private parent: Scope;

    constructor(parent: Scope = null) {
        this.values = new Map();
        this.parent = parent;
    }

    private error(message: string): void {
        throw new Error(`Runtime Error => ${message}`);
    }

    public clone(): Scope {
        const clone = new Scope(this.parent);
        clone.values = new Map(this.values);
        return clone;
    }

    public set(name: string, value: $Any) {
        this.values.set(name, value);
    }

    public define(name: string, value: $Any) {
        if (this.values.has(name)) {
            this.error(`Identifier "${name}" has already been defined`);
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
            this.error(`Identifier "${name}" has not been defined`);
        }
    }

    public get(key: string, token: Token = null): $Any {
        if (this.values.has(key)) {
            return this.values.get(key);
        }
        if (this.parent !== null) {
            return this.parent.get(key);
        }

        if (token) {
            this.error(
                ` at (${token.line}:${token.col}) => "${token.lexeme}" is not defined`
            );
        } else {
            this.error(`"${key}" is not defined`);
        }
        return new $Null();
    }
}
