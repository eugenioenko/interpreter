import { DataType } from './types/type.enum';
import { $Null } from './types/null';
import { $Any } from './types/any';
import { $Callable } from './types/function';
import { $Boolean } from './types/boolean';
import { $List } from './types/list';
import { $Number } from './types/number';
import { $String } from './types/string';
import { $Void } from './types/void';
import { $RegExp } from './types/regex';
import { $Iterator } from './types/iterator';

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
            case DataType.Null:
                return new $Null();
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

export function fromJavaScriptFuncVoid(func: (...argz: any) => any, name: string, arity: number): $Callable {
    return new $Callable(name, arity, (thiz: $Any, args: $Any[]): $Any => {
        const argValues = args.map((arg: $Any) => arg.value);
        func(...argValues);
        return new $Void('void');
    });
}

export const Runtime = {
    Console:  new Map<string, $Any>([
        ['log', fromJavaScriptFuncVoid(console.log, 'console.log', -1)],
        ['warn', fromJavaScriptFuncVoid(console.warn, 'console.warn', -1)],
        ['info', fromJavaScriptFuncVoid(console.info, 'console.info', -1)],
        ['error', fromJavaScriptFuncVoid(console.error, 'console.error', -1)]
    ]),
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
    ]),
    Utils: new Map<string, $Any>([
        ['re', new $Callable('regex', -1, (thiz: $Any, args: $Any[]): $Any => {
            const values = args.map((arg) => arg.value);
            if (values.length === 1) {
                return new $RegExp(new RegExp(values[0]));
            }
            return new $RegExp(new RegExp(values[0], values[1]));
        })],
        ['$', new $Callable('$', 1, (thiz: $Any, args: $Any[]): $Any => {
            return new $Iterator(args[0]);
        })]
    ])
};
