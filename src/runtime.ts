import { $Callable, FunctionCall, $Null, $Any, $Number, $String, $List } from './types';

class StringRT {

    public static size(thiz: $Any, args: $Any[]): $Any {
        if (!args || !args.length || !args[0].isString() || args[0].value === null || typeof args[0].value.length === 'undefined') {
            return new $Null();
        }
        return new $Number(args[0].value.length);
    }

    public static toUpperCase(thiz: $Any, args: $Any[]): $Any {
        return new $Number(args[0].value.toUpperCase());
    }

    public static toLowerCase(thiz: $Any, args: $Any[]): $Any {
        return new $Number(args[0].value.toLowerCase());
    }

    public static split(thiz: $Any, args: $Any[]): $Any {
        return new $List(args[0].value.split(args[1].value));
    }

    public static join(thiz: $Any, args: $Any[]): $Any {
        return new $List(args[0].value.join(args[1].value));
    }

}

export const Runtime = {
    Math: new Map([
        ['pi', new $Number(Math.PI)],
        ['test', new $Any(Math.PI)],
        ['rand', new $Callable('rand', 0, (thiz: $Any, args: $Any[]) => new $Number(Math.PI))]
    ]),
    String: new Map([
        ['toUpper', new $Callable('toUpper', 1, StringRT.toUpperCase)],
        ['toLower', new $Callable('toLower', 1, StringRT.toLowerCase)],
        ['size', new $Callable('size', 1, StringRT.size)],
        ['split', new $Callable('split', 2, StringRT.split)],
        ['join', new $Callable('join', 2, StringRT.join)]
    ])
};

/*

*/
/*
export function hasOwnProperty(that: any): InternalEntity {
    const func = new InternalEntity();
    func.toString = () => '<internal function>';
    func.arity = () => 1;
    func.call = (int, thiz, args) => thiz.properties.has(args[0]);
    return func;
}

export function lengthProperty(that: any): InternalEntity {
    const func = new InternalEntity();
    func.toString = () => '<internal function>';
    func.arity = () => 0;
    func.call = (int, thiz, args) => thiz.properties.size;
    return func;
}

export function invokeMethod(that: any): InternalEntity {
    const func = new InternalEntity();
    func.toString = () => '<internal function>';
    func.arity = () => -1;
    func.call = (int, thiz, args) => thiz.call(int, args[0], args.slice(1));
    return func;
}
export function superCall(that: any, instance: any): InternalEntity {
    const func = new InternalEntity();
    func.arity = () => that.parent.arity();
    func.toString = () => '<native super function>';
    func.call = (int, thiz, args) =>
        that.parent.call(int, instance, args);
    return func;
}

export function mergeMethod(that: any): InternalEntity {
    const func = new InternalEntity();
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

export function arrayLengthMethod(that: any): InternalEntity {
    const func = new InternalEntity();
    func.toString = () => '<internal function>';
    func.arity = () => 0;
    func.call = (int, thiz, args) => thiz.values.length;
    return func;
}

export function arrayJoinMethod(that: any): InternalEntity {
    const func = new InternalEntity();
    func.toString = () => '<internal function>';
    func.arity = () => 1;
    func.call = (int, thiz, args) => new $String(thiz.values.join(args[0]));
    return func;
}

export function arrayPushMethod(that: any): InternalEntity {
    const func = new InternalEntity();
    func.toString = () => '<internal function>';
    func.arity = () => 1;
    func.call = (int, thiz, args) => thiz.values.push(args[0]);
    return func;
}

export function arrayPopMethod(that: any): InternalEntity {
    const func = new InternalEntity();
    func.toString = () => '<internal function>';
    func.arity = () => 0;
    func.call = (int, thiz, args) => thiz.values.pop(args[0]);
    return func;
}

export function arrayReverseMethod(that: any): InternalEntity {
    const func = new InternalEntity();
    func.toString = () => '<internal function>';
    func.arity = () => 0;
    func.call = (int, thiz, args) => new ArrayEntity(thiz.values.reverse());
    return func;
}

export function arraySliceMethod(that: any): InternalEntity {
    const func = new InternalEntity();
    func.toString = () => '<internal function>';
    func.arity = () => -1;
    func.call = (int, thiz, args) => new ArrayEntity(thiz.values.slice(args[0], args[1]));
    return func;
}

export function arrayEachMethod(that: any): InternalEntity {
    const func = new InternalEntity();
    func.toString = () => '<internal function>';
    func.arity = () => -1;
    func.call = (int, thiz, args) => {
        for (let i = 0; i < thiz.values.length; ++i) {
            args[0].call(int, thiz, [thiz.values[i], i, thiz]);
        }
    };
    return func;
}

export function arrayMapMethod(that: any): InternalEntity {
    const func = new InternalEntity();
    func.toString = () => '<internal function>';
    func.arity = () => -1;
    func.call = (int, thiz, args) => {
        for (let i = 0; i < thiz.values.length; ++i) {
            thiz.values[i] = <FunctionEntity> args[0].call(int, thiz, [thiz.values[i], i, thiz]);
        }
        return thiz;
    };
    return func;
}

export function arrayFindMethod(that: any): InternalEntity {
    const func = new InternalEntity();
    func.toString = () => '<internal function>';
    func.arity = () => -1;
    func.call = (int, thiz, args) => {
        for (let i = 0; i < thiz.values.length; ++i) {
            if (<FunctionEntity> args[0].call(int, thiz, [thiz.values[i], i, thiz])) {
                return thiz.values[i];
            }
        }
        return null;
    };
    return func;
}

export function arrayIndexOfMethod(that: any): InternalEntity {
    const func = new InternalEntity();
    func.toString = () => '<internal function>';
    func.arity = () => 1;
    func.call = (int, thiz, args) => {
        for (let i = 0; i < thiz.values.length; ++i) {
            if (thiz.values[i] === args[0]) {
                return i;
            }
        }
        return null;
    };
    return func;
}

export function arrayConcatMethod(that: any): InternalEntity {
    const func = new InternalEntity();
    func.toString = () => '<internal function>';
    func.arity = () => 1;
    func.call = (int, thiz, args) => new ArrayEntity(thiz.values.concat(args[0].values));
    return func;
}

export function stringLengthMethod(that: any): InternalEntity {
    const func = new InternalEntity();
    func.toString = () => '<internal function>';
    func.arity = () => 0;
    func.call = (int, thiz, args) => thiz.value.length;
    return func;
}

export function stringSubStrMethod(that: any): InternalEntity {
    const func = new InternalEntity();
    func.toString = () => '<internal function>';
    func.arity = () => -1;
    func.call = (int, thiz, args) => new $String(thiz.value.substr(args[0], args[1]));
    return func;
}

export function stringSplitMethod(that: any): InternalEntity {
    const func = new InternalEntity();
    func.toString = () => '<internal function>';
    func.arity = () => 1;
    func.call = (int, thiz, args) => new ArrayEntity(thiz.value.split(args[0]));
    return func;
}

export function stringMatchMethod(that: any): InternalEntity {
    const func = new InternalEntity();
    func.toString = () => '<internal function>';
    func.arity = () => 1;
    func.call = (int, thiz, args) => new ArrayEntity(thiz.value.match(args[0].regex));
    return func;
}

export function stringReplaceMethod(that: any): InternalEntity {
    const func = new InternalEntity();
    func.toString = () => '<internal function>';
    func.arity = () => 2;
    func.call = (int, thiz, args) => new $String(thiz.value.replace(args[0], args[1]));
    return func;
}

export function stringAlterMethod(that: any): InternalEntity {
    const func = new InternalEntity();
    func.toString = () => '<internal function>';
    func.arity = () => 2;
    func.call = (int, thiz, args) => new $String(thiz.value.replace(args[0].regex, args[1]));
    return func;
}

export function stringToUpperCase(that: any): InternalEntity {
    const func = new InternalEntity();
    func.toString = () => '<internal function>';
    func.arity = () => 0;
    func.call = (int, thiz, args) => new $String(thiz.value.toUpperCase());
    return func;
}

export function stringToLowercase(that: any): InternalEntity {
    const func = new InternalEntity();
    func.toString = () => '<internal function>';
    func.arity = () => 0;
    func.call = (int, thiz, args) => new $String(thiz.value.toLowerCase());
    return func;
}

export function regexTestMethod(that: any): InternalEntity {
    const func = new InternalEntity();
    func.toString = () => '<internal function>';
    func.arity = () => 1;
    func.call = (int, thiz, args) => thiz.regex.test(args[0]);
    return func;
}

export function regexExecMethod(that: any): InternalEntity {
    const func = new InternalEntity();
    func.toString = () => '<internal function>';
    func.arity = () => 1;
    func.call = (int, thiz, args) => thiz.regex.exec(args[0]);
    return func;
}
*/