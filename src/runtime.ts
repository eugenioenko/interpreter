import { InternalEntity, FunctionEntity } from "./entity";
import { Prototype } from "./prototype";

export function hasOwnProperty(that: any): InternalEntity {
    const func = new InternalEntity();
    func.toString = () => '<internal function hasOwnProperty>';
    func.arity = () => 1;
    func.call = (int, thiz, args) => thiz.properties.has(args[0]);
    return func;
};

export function lengthProperty(that: any): InternalEntity {
    const func = new InternalEntity();
    func.toString = () => '<internal function size>';
    func.arity = () => 0;
    func.call = (int, thiz, args) => thiz.properties.size;
    return func;
}

export function invokeMethod(that: any): InternalEntity {
    const func = new InternalEntity();
    func.toString = () => '<internal function invoke>';
    func.arity = () => -1;
    func.call = (int, thiz, args) => thiz.call(int, args[0], args.slice(1));
    return func;
}

export function mergeMethod(that: any): InternalEntity {
    const func = new InternalEntity();
    /** merge(Parent, override=false) */
    func.call = (int, thiz, args) => {
        that.properties = args[1] ?
            new Map([...that.properties, ...args[0].properties]) :
            new Map([...args[0].properties, ...that.properties]);
    };
    func.toString = () => '<internal merge function>';
    func.arity = () => -1;
    return func;
}

export function extendMethod(that: any): InternalEntity {
    const func = new InternalEntity();
    func.call = (int, thiz, args) => {
        const proto = new Prototype(
            that.properties,
            new Prototype(args[0].properties, args[0].prototype, thiz),
            thiz
        );
        that.prototype = proto;
    };
    func.toString = () => '<internal merge function>';
    func.arity = () => -1;
    return func;
}

export function inheritMethod(that: any): InternalEntity {
    const func = new InternalEntity();
    func.call = (int, thiz, args) => {
        that.prototype.values = new Map([...args[0].properties, ...that.prototype.values]);
    };
    func.toString = () => '<internal inheritance function>';
    func.arity = () => 1;
    return func;
}

export function echoFunction(): InternalEntity {
    const func = new InternalEntity();
    func.arity = () => 1;
    func.toString = () => '<native function>';
    func.call = (interpreter, thiz, args) => console.log(args[0]);
    return func;
}

export function randFunction(): InternalEntity {
    const func = new InternalEntity();
    func.arity = () => 0;
    func.call = () => Math.random();
    func.toString = () => '<native function>';
    return func;
}
