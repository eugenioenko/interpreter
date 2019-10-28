import { DataType, $Callable, FunctionCall, $Null, $Any, $String, $List, $Boolean, $Dictionary } from './types';
import { Interpreter } from './interpreter';
import { $Number } from './types/number';

export function fromJavaScriptMethod(jsName: string, arity: number, type: DataType): $Callable {
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
        }
    });
}

export function fromJavaScriptFuncNumber(func: (...argz: any) => any, name: string, arity: number): $Callable {
    return new $Callable(name, arity, (thiz: $Any, args: $Any[]): $Any => {
        const argValues = args.map((arg: $Any) => arg.value);
        const result = func(...argValues);
        return new $Number(result);
    });
}

export const Runtime = {
    Math:  new Map<string, $Any>([
        ['ceil', fromJavaScriptFuncNumber(Math.ceil, 'ceil', 1)],
        ['cos', fromJavaScriptFuncNumber(Math.cos, 'cos', 1)],
        ['floor', fromJavaScriptFuncNumber(Math.floor, 'floor', 1)],
        ['log', fromJavaScriptFuncNumber(Math.log, 'log', 1)],
        ['max', fromJavaScriptFuncNumber(Math.max, 'max', -1)],
        ['min', fromJavaScriptFuncNumber(Math.min, 'min', -1)],
        ['pi', new $Number(Math.PI)],
        ['pow', fromJavaScriptFuncNumber(Math.pow, 'pow', 2)],
        ['random', fromJavaScriptFuncNumber(Math.random, 'random', 0)],
        ['round', fromJavaScriptFuncNumber(Math.round, 'round', 1)],
        ['sin', fromJavaScriptFuncNumber(Math.sin, 'sin', 1)],
        ['sqrt', fromJavaScriptFuncNumber(Math.sqrt, 'sqrt', 1)],
        ['tan', fromJavaScriptFuncNumber(Math.tan, 'tan', 1)],
        ['trunc', fromJavaScriptFuncNumber(Math.trunc, 'trunc', 1)]
    ])
};
