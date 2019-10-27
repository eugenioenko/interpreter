import { DataType, $Callable, FunctionCall, $Null, $Any, $Number, $String, $List, $Boolean, $Dictionary } from './types';

function fromJavaScript(jsName: string, arity: number, type: DataType): $Callable {
    return new $Callable(jsName, arity, (thiz: $Any, args: $Any[]): $Any => {
        const argValues = args.map((arg: $Any) => arg.value);
        const result = thiz.value[jsName](...argValues);
        switch (type) {
            case DataType.Boolean:
                return new $Boolean(result);
            case DataType.String:
                return new $String(result);
            case DataType.Number:
                return new $Number(result);
            case DataType.List:
                return new $List(result);
            default:
                return new $Any(result);
                break;
        }
    });
}
export class StringRuntime {
    // new $Callable('toUpper', 0, StringRuntime.toUpperCase)
    public static size(thiz: $Any, args: $Any[]): $Any {
        return new $Number(thiz.value.length);
    }

    public static indexOf(thiz: $Any, args: $Any[]): $Any {
        return new $Number(thiz.value.indexOf(args[0].value));
    }
}

export class ListRuntime {
    public static size(thiz: $Any, args: $Any[]): $Any {
        return new $Number(args[0].value.length);
    }

    public static join(thiz: $Any, args: $Any[]): $Any {
        return new $String(thiz.value.join(args[0].value));
    }
}

export const Runtime = {
    List: new Map([
        ['size', new $Callable('size', 0, ListRuntime.size)],
        ['split', new $Callable('join', 1, ListRuntime.join)]
    ]),
    Math: new Map([
        ['pi', new $Number(Math.PI)],
        ['test', new $Any(Math.PI)],
        ['rand', new $Callable('rand', 0, (thiz: $Any, args: $Any[]) => new $Number(Math.PI))]
    ]),
    String: new Map([
        ['toUpper',  fromJavaScript('toUpperCase', 0, DataType.String)],
        ['toLower', fromJavaScript('toLowerCase', 0, DataType.String)],
        ['size', new $Callable('size', 0, StringRuntime.size)],
        ['split',  fromJavaScript('split', 1, DataType.List)],
        ['concat', fromJavaScript('concat', 1, DataType.String)],
        ['includes', fromJavaScript('includes', 1, DataType.Boolean)],
        ['indexOf', fromJavaScript('indexOf', 1, DataType.Number)],
        ['repeat', fromJavaScript('repeat', 1, DataType.String)],
        ['replace', fromJavaScript('replace', 2, DataType.String)],
        ['search', fromJavaScript('search', 1, DataType.Number)],
        ['slice', fromJavaScript('slice', -1, DataType.String)],
        ['substring', fromJavaScript('substring', -1, DataType.String)],
        ['trim', fromJavaScript('trim', 0, DataType.String)],
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