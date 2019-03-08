/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/console.ts":
/*!************************!*\
  !*** ./src/console.ts ***!
  \************************/
/*! exports provided: ConsoleMessageType, ConsoleMessage, Console */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleMessageType", function() { return ConsoleMessageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleMessage", function() { return ConsoleMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Console", function() { return Console; });
var ConsoleMessageType;
(function (ConsoleMessageType) {
    ConsoleMessageType[ConsoleMessageType["User"] = 0] = "User";
    ConsoleMessageType[ConsoleMessageType["Error"] = 1] = "Error";
    ConsoleMessageType[ConsoleMessageType["Warning"] = 2] = "Warning";
    ConsoleMessageType[ConsoleMessageType["Info"] = 3] = "Info";
})(ConsoleMessageType || (ConsoleMessageType = {}));
class ConsoleMessage {
}
class Console {
    constructor() {
        this.messages = [];
    }
    add(message, type) {
        this.messages.push({
            text: message,
            time: new Date(),
            // tslint:disable-next-line
            type: type
        });
    }
    clear() {
        this.messages = [];
    }
    log(message) {
        this.add(message, ConsoleMessageType.User);
    }
    warn(message) {
        this.add(message, ConsoleMessageType.Warning);
    }
    error(message) {
        this.add(message, ConsoleMessageType.Error);
        // throw new Error("");
    }
    info(message) {
        this.add(message, ConsoleMessageType.Info);
    }
    first() {
        return this.messages[0].text;
    }
    last() {
        return this.messages[this.messages.length - 1].text;
    }
    print() {
        return console.log(this.messages.map((cm) => cm.text));
    }
}


/***/ }),

/***/ "./src/demo.ts":
/*!*********************!*\
  !*** ./src/demo.ts ***!
  \*********************/
/*! exports provided: DemoSourceCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoSourceCode", function() { return DemoSourceCode; });
const DemoSourceCode = `
// slicing strings
print "one two three four"[4:7:1]; // prints two
print "hello world"[6::1]; // prints world
print "hello world"[::-1]; //prints dlrow olleh

// Prototype objects
@MyClass(text) {
    this.text = text;
}
MyClass.method = @(text) {
    this.text = this.text + text;
};
MyClass.count = @(times) {
    @nested(num) {
        return num * num;
    }
    for (let i = 0; i < times; ++i) {
        print nested(i);
    }
};
var instance = new MyClass('Hello ');
instance.method('World');
instance.count(3);
print instance.text;

// sugar coated classes
class MyClassClass {
    constructor(alfa) {
        this.something = 'anything' + alfa;
    }
}
let testClassClass = new MyClassClass(' is something');
print testClassClass.something;

// shallow multiple inheritance
@Blade() {
    this.sharpness = "very sharp";
}
Blade.cut = @() {
    print "cutting..." + this.sharpness;
};
@Handle() {
    this.color = "wood";
}
Handle.hold = @() {
    print "holding..." + this.color;
};
@Knife() {
    Blade.invoke(this);
    Handle.invoke(this);
}
Knife.merge(Blade);
Knife.merge(Handle);
let knife = new Knife();
knife.cut();
knife.hold();

// Recursive function
function factorialize(n) {
    if (n < 0) {
        return -1;
    }
    if (n == 0) {
        return 1;
    }
    return (n * factorialize(n - 1));
}
print factorialize(11);

// same as factorialize but with ternary
// and short form function definition
@factorialize2(n) =>
    n < 0 ? -1 : (n == 0 ? 1 : (n * factorialize(n - 1)));

print factorialize2(12);

// nested function returns function
@add(a) => @(b) => @(c) => a + b + c;
print add(100)(20)(3);

func sub(a) {
    return func (b) {
        return func (c) {
            return a - b - c;
        };
    };
}
print sub(100)(10)(1);

// while loop and ternary operator
let i = 0;
while (i <= 4) {
    print i % 2 ? 'odd' : 'even';
    i = i + 1;
}
// literals
var literal = {
    firstname: "John",
    lastname: "Doe",
    records: {
        prev: "previous",
        next: "next"
    }
};
print literal.records.prev;

let x = [1, 20, 300];
let y = [100, x[1]];
print y[0];
y.push(x);
y.newProperty = "anything";
print y.join(',');
let z = y.join('-');
`;


/***/ }),

/***/ "./src/entity.ts":
/*!***********************!*\
  !*** ./src/entity.ts ***!
  \***********************/
/*! exports provided: IndexRange, InternalEntity, PrototypeEntity, CallableEntity, FunctionEntity, InstanceEntity, StringEntity, ArrayEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexRange", function() { return IndexRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalEntity", function() { return InternalEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrototypeEntity", function() { return PrototypeEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallableEntity", function() { return CallableEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionEntity", function() { return FunctionEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstanceEntity", function() { return InstanceEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringEntity", function() { return StringEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayEntity", function() { return ArrayEntity; });
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scope */ "./src/scope.ts");
/* harmony import */ var _return__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./return */ "./src/return.ts");
/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prototype */ "./src/prototype.ts");
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./runtime */ "./src/runtime.ts");




class IndexRange {
    constructor(start, end, step) {
        this.start = start;
        this.end = end;
        this.step = step;
    }
}
class InternalEntity {
    constructor() {
        this.toString = () => '<native function>';
    }
}
class PrototypeEntity {
    constructor() {
        this.prototype = new _prototype__WEBPACK_IMPORTED_MODULE_2__["Prototype"](null, null, this);
        this.properties = new Map();
        this.prototype.values.set('hasOwnProperty', _runtime__WEBPACK_IMPORTED_MODULE_3__["hasOwnProperty"](this));
        this.prototype.values.set('size', _runtime__WEBPACK_IMPORTED_MODULE_3__["lengthProperty"]);
        this.prototype.values.set('inherit', _runtime__WEBPACK_IMPORTED_MODULE_3__["inheritMethod"](this));
    }
    get(key) {
        if (this.properties.has(key)) {
            return this.properties.get(key);
        }
        return this.prototype.get(key);
    }
    set(key, value) {
        this.properties.set(key, value);
    }
    toString() {
        return '<prototype entity>';
    }
}
class CallableEntity extends PrototypeEntity {
    constructor() {
        super();
        this.prototype.values.set('invoke', _runtime__WEBPACK_IMPORTED_MODULE_3__["invokeMethod"](this));
    }
    arity() {
        return 0;
    }
    call(interpreter, thiz, args) { return; }
    toString() {
        return '<internal function>';
    }
}
class FunctionEntity extends CallableEntity {
    constructor(declaration, closure, parent = null) {
        super();
        this.declaration = declaration;
        this.closure = closure;
        this.prototype.values.set('merge', _runtime__WEBPACK_IMPORTED_MODULE_3__["mergeMethod"](this));
        this.prototype.values.set('extend', _runtime__WEBPACK_IMPORTED_MODULE_3__["extendMethod"](this));
        this.name = this.declaration.name.lexeme;
        this.prototype.values.set('name', this.name);
        this.parent = parent;
    }
    toString() {
        return `<${this.name}  function>`;
    }
    arity() {
        return this.declaration.params.length;
    }
    call(interpreter, thiz, args) {
        const scope = new _scope__WEBPACK_IMPORTED_MODULE_0__["Scope"](this.closure);
        for (let i = 0; i < this.declaration.params.length; i++) {
            scope.define(this.declaration.params[i].lexeme, args[i]);
        }
        scope.set('this', thiz);
        try {
            interpreter.executeBlock(this.declaration.body, scope);
        }
        catch (e) {
            if (e instanceof _return__WEBPACK_IMPORTED_MODULE_1__["Return"]) {
                return e.value;
            }
            conzole.error("Runtime error. Execution has been stopped");
            conzole.error(e.message);
            throw new Error("Runtime error. Execution has been stopped");
        }
        return null;
    }
}
class InstanceEntity extends CallableEntity {
    constructor(construct) {
        super();
        this.instanceof = construct.declaration.name.lexeme;
        this.properties = new Map();
        this.prototype = new _prototype__WEBPACK_IMPORTED_MODULE_2__["Prototype"](construct.properties, construct.prototype, this);
    }
    toString() {
        return '<' + this.instanceof + " instance>";
    }
}
class StringEntity extends PrototypeEntity {
    constructor(values) {
        super();
        this.value = values;
        this.prototype.values.set('invoke', _runtime__WEBPACK_IMPORTED_MODULE_3__["invokeMethod"](this));
        this.prototype.values.set('size', _runtime__WEBPACK_IMPORTED_MODULE_3__["stringLengthMethod"](this));
        this.prototype.values.set('substr', _runtime__WEBPACK_IMPORTED_MODULE_3__["stringSubStrMethod"](this));
        this.prototype.values.set('split', _runtime__WEBPACK_IMPORTED_MODULE_3__["stringSplitMethod"](this));
    }
    get(key) {
        if (typeof key === "number") {
            return this.value[key];
        }
        else if (key instanceof IndexRange) {
            return this.range(key);
        }
        else {
            return super.get(key);
        }
    }
    set(key, value) {
        if (typeof key !== "number") {
            this.properties.set(key, value);
        }
    }
    arity() {
        return 0;
    }
    call(interpreter, thiz, args) {
        return new StringEntity(args[0]);
    }
    toString() {
        return this.value;
    }
    range(range) {
        if (range.step === null) {
            range.step = 1;
        }
        if (range.end === null) {
            range.end = range.step > 0 ? this.value.length - 1 : 0;
        }
        if (range.start === null) {
            range.start = range.step > 0 ? 0 : this.value.length - 1;
        }
        let result = '';
        if (range.step > 0) {
            for (let i = range.start; i <= range.end; i += range.step) {
                result += this.value[i];
            }
        }
        if (range.step < 0) {
            for (let i = range.start; i >= range.end; i += range.step) {
                result += this.value[i];
            }
        }
        return new StringEntity(result);
    }
}
class ArrayEntity extends PrototypeEntity {
    constructor(values) {
        super();
        this.values = values;
        this.prototype.values.set('invoke', _runtime__WEBPACK_IMPORTED_MODULE_3__["invokeMethod"](this));
        this.prototype.values.set('size', _runtime__WEBPACK_IMPORTED_MODULE_3__["arrayLengthMethod"](this));
        this.prototype.values.set('join', _runtime__WEBPACK_IMPORTED_MODULE_3__["arrayJoinMethod"](this));
        this.prototype.values.set('push', _runtime__WEBPACK_IMPORTED_MODULE_3__["arrayPushMethod"](this));
        this.prototype.values.set('pop', _runtime__WEBPACK_IMPORTED_MODULE_3__["arrayPopMethod"](this));
        this.prototype.values.set('each', _runtime__WEBPACK_IMPORTED_MODULE_3__["arrayEachMethod"](this));
        this.prototype.values.set('map', _runtime__WEBPACK_IMPORTED_MODULE_3__["arrayMapMethod"](this));
        this.prototype.values.set('find', _runtime__WEBPACK_IMPORTED_MODULE_3__["arrayFindMethod"](this));
        this.prototype.values.set('indexOf', _runtime__WEBPACK_IMPORTED_MODULE_3__["arrayIndexOfMethod"](this));
    }
    get(key) {
        if (typeof key === "number") {
            return this.values[key];
        }
        else if (key instanceof IndexRange) {
            return this.range(key);
        }
        else {
            return super.get(key);
        }
    }
    set(key, value) {
        if (typeof key !== "number") {
            this.properties.set(key, value);
        }
        else {
            this.values[key] = value;
        }
    }
    range(range) {
        if (range.step === null) {
            range.step = 1;
        }
        if (range.end === null) {
            range.end = range.step > 0 ? this.values.length - 1 : 0;
        }
        if (range.start === null) {
            range.start = range.step > 0 ? 0 : this.values.length - 1;
        }
        const result = [];
        if (range.step > 0) {
            for (let i = range.start; i <= range.end; i += range.step) {
                result.push(this.values[i]);
            }
        }
        if (range.step < 0) {
            for (let i = range.start; i >= range.end; i += range.step) {
                result.push(this.values[i]);
            }
        }
        return new ArrayEntity(result);
    }
    arity() {
        return 0;
    }
    call(interpreter, thiz, args) { return; }
    toString() {
        return `[${this.values.join(',')}]`;
    }
}


/***/ }),

/***/ "./src/expression.ts":
/*!***************************!*\
  !*** ./src/expression.ts ***!
  \***************************/
/*! exports provided: Expr, Assign, Binary, Call, Entity, Get, Grouping, Key, Lambda, Logical, List, Literal, New, Postfix, Range, Set, Super, Ternary, Unary, Variable, Ztring */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expr", function() { return Expr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Assign", function() { return Assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Binary", function() { return Binary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Call", function() { return Call; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Get", function() { return Get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grouping", function() { return Grouping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Key", function() { return Key; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lambda", function() { return Lambda; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logical", function() { return Logical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Literal", function() { return Literal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "New", function() { return New; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Postfix", function() { return Postfix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Set", function() { return Set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Super", function() { return Super; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ternary", function() { return Ternary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unary", function() { return Unary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Variable", function() { return Variable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ztring", function() { return Ztring; });
class Expr {
    // tslint:disable-next-line
    constructor() { }
}
class Assign extends Expr {
    constructor(name, value) {
        super();
        this.name = name;
        this.value = value;
    }
    accept(visitor) {
        return visitor.visitAssignExpr(this);
    }
    toString() {
        return 'Expr.Assign';
    }
}
class Binary extends Expr {
    constructor(left, operator, right) {
        super();
        this.left = left;
        this.operator = operator;
        this.right = right;
    }
    accept(visitor) {
        return visitor.visitBinaryExpr(this);
    }
    toString() {
        return 'Expr.Binary';
    }
}
class Call extends Expr {
    constructor(callee, paren, args, thiz) {
        super();
        this.callee = callee;
        this.paren = paren;
        this.args = args;
        this.thiz = thiz;
    }
    accept(visitor) {
        return visitor.visitCallExpr(this);
    }
    toString() {
        return 'Expr.Call';
    }
}
class Entity extends Expr {
    constructor(properties) {
        super();
        this.properties = properties;
    }
    accept(visitor) {
        return visitor.visitEntityExpr(this);
    }
    toString() {
        return 'Expr.Entity';
    }
}
class Get extends Expr {
    constructor(entity, key) {
        super();
        this.entity = entity;
        this.key = key;
    }
    accept(visitor) {
        return visitor.visitGetExpr(this);
    }
    toString() {
        return 'Expr.Get';
    }
}
class Grouping extends Expr {
    constructor(expression) {
        super();
        this.expression = expression;
    }
    accept(visitor) {
        return visitor.visitGroupingExpr(this);
    }
    toString() {
        return 'Expr.Grouping';
    }
}
class Key extends Expr {
    constructor(name) {
        super();
        this.name = name;
    }
    accept(visitor) {
        return visitor.visitKeyExpr(this);
    }
    toString() {
        return 'Expr.Key';
    }
}
class Lambda extends Expr {
    constructor(lambda) {
        super();
        this.lambda = lambda;
    }
    accept(visitor) {
        return visitor.visitLambdaExpr(this);
    }
    toString() {
        return 'Expr.Lambda';
    }
}
class Logical extends Expr {
    constructor(left, operator, right) {
        super();
        this.left = left;
        this.operator = operator;
        this.right = right;
    }
    accept(visitor) {
        return visitor.visitLogicalExpr(this);
    }
    toString() {
        return 'Expr.Logical';
    }
}
class List extends Expr {
    constructor(value) {
        super();
        this.value = value;
    }
    accept(visitor) {
        return visitor.visitListExpr(this);
    }
    toString() {
        return 'Expr.List';
    }
}
class Literal extends Expr {
    constructor(value) {
        super();
        this.value = value;
    }
    accept(visitor) {
        return visitor.visitLiteralExpr(this);
    }
    toString() {
        return 'Expr.Literal';
    }
}
class New extends Expr {
    constructor(construct) {
        super();
        this.construct = construct;
    }
    accept(visitor) {
        return visitor.visitNewExpr(this);
    }
    toString() {
        return 'Expr.New';
    }
}
class Postfix extends Expr {
    constructor(name, increment) {
        super();
        this.name = name;
        this.increment = increment;
    }
    accept(visitor) {
        return visitor.visitPostfixExpr(this);
    }
    toString() {
        return 'Expr.Postfix';
    }
}
class Range extends Expr {
    constructor(start, end, step) {
        super();
        this.start = start;
        this.end = end;
        this.step = step;
    }
    accept(visitor) {
        return visitor.visitRangeExpr(this);
    }
    toString() {
        return 'Expr.Range';
    }
}
class Set extends Expr {
    constructor(entity, key, value) {
        super();
        this.entity = entity;
        this.key = key;
        this.value = value;
    }
    accept(visitor) {
        return visitor.visitSetExpr(this);
    }
    toString() {
        return 'Expr.Set';
    }
}
class Super extends Expr {
    constructor(index, args) {
        super();
        this.index = index;
        this.args = args;
    }
    accept(visitor) {
        return visitor.visitSuperExpr(this);
    }
    toString() {
        return 'Expr.Super';
    }
}
class Ternary extends Expr {
    constructor(condition, thenExpr, elseExpr) {
        super();
        this.condition = condition;
        this.thenExpr = thenExpr;
        this.elseExpr = elseExpr;
    }
    accept(visitor) {
        return visitor.visitTernaryExpr(this);
    }
    toString() {
        return 'Expr.Ternary';
    }
}
class Unary extends Expr {
    constructor(operator, right) {
        super();
        this.operator = operator;
        this.right = right;
    }
    accept(visitor) {
        return visitor.visitUnaryExpr(this);
    }
    toString() {
        return 'Expr.Unary';
    }
}
class Variable extends Expr {
    constructor(name) {
        super();
        this.name = name;
    }
    accept(visitor) {
        return visitor.visitVariableExpr(this);
    }
    toString() {
        return 'Expr.Variable';
    }
}
class Ztring extends Expr {
    constructor(value) {
        super();
        this.value = value;
    }
    accept(visitor) {
        return visitor.visitZtringExpr(this);
    }
    toString() {
        return 'Expr.Ztring';
    }
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _scanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scanner */ "./src/scanner.ts");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser */ "./src/parser.ts");
/* harmony import */ var _interpreter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interpreter */ "./src/interpreter.ts");
/* harmony import */ var _console__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./console */ "./src/console.ts");
/* harmony import */ var _demo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demo */ "./src/demo.ts");





if (typeof window === 'undefined') {
    global.window = global;
}
window.conzole = new _console__WEBPACK_IMPORTED_MODULE_3__["Console"]();
window.demoSourceCode = _demo__WEBPACK_IMPORTED_MODULE_4__["DemoSourceCode"];
window.execute = (source) => {
    return (new _interpreter__WEBPACK_IMPORTED_MODULE_2__["Interpreter"]().interpet((new _parser__WEBPACK_IMPORTED_MODULE_1__["Parser"]((new _scanner__WEBPACK_IMPORTED_MODULE_0__["Scanner"](source)).scan())).parse()));
};
window.atscript = (source) => {
    return (new _interpreter__WEBPACK_IMPORTED_MODULE_2__["Interpreter"]().eval((new _parser__WEBPACK_IMPORTED_MODULE_1__["Parser"]((new _scanner__WEBPACK_IMPORTED_MODULE_0__["Scanner"](source)).scan())).parse()));
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/interpreter.ts":
/*!****************************!*\
  !*** ./src/interpreter.ts ***!
  \****************************/
/*! exports provided: Interpreter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interpreter", function() { return Interpreter; });
/* harmony import */ var _expression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expression */ "./src/expression.ts");
/* harmony import */ var _statement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statement */ "./src/statement.ts");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entity */ "./src/entity.ts");
/* harmony import */ var _return__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./return */ "./src/return.ts");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scope */ "./src/scope.ts");
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token */ "./src/token.ts");
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./runtime */ "./src/runtime.ts");
/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./prototype */ "./src/prototype.ts");








class Interpreter {
    constructor() {
        this.global = new _scope__WEBPACK_IMPORTED_MODULE_4__["Scope"]();
        this.scope = this.global;
        this.global.define('echo', _runtime__WEBPACK_IMPORTED_MODULE_6__["echoFunction"]());
        this.global.define('rand', _runtime__WEBPACK_IMPORTED_MODULE_6__["randFunction"]());
    }
    evaluate(expr) {
        return expr.accept(this);
    }
    execute(stmt) {
        return stmt.accept(this);
    }
    eval(statements) {
        for (let i = 0; i < statements.length; ++i) {
            const statement = statements[i];
            if (i !== statements.length - 1) {
                this.execute(statement);
            }
            else {
                return this.execute(statement);
            }
        }
    }
    interpet(statements) {
        for (const statement of statements) {
            this.execute(statement);
        }
    }
    interpreterError(message) {
        conzole.log(`[interpreter error] => ${message}`);
        throw new Error();
    }
    visitExpressionStmt(stmt) {
        return this.evaluate(stmt.expression);
    }
    visitPrintStmt(stmt) {
        let value = this.evaluate(stmt.expression);
        value = value === null ? "null" : value;
        conzole.log(value);
        return value;
    }
    visitVarStmt(stmt) {
        let value = null;
        if (stmt.initializer !== null) {
            value = this.evaluate(stmt.initializer);
        }
        if (value instanceof _entity__WEBPACK_IMPORTED_MODULE_2__["FunctionEntity"] && value.name === "lambda") {
            value.name = stmt.name.lexeme;
            value.prototype.set('name', value.name);
        }
        if (stmt.type.type === _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].var) {
            this.scope.set(stmt.name.lexeme, value);
        }
        else {
            this.scope.define(stmt.name.lexeme, value);
        }
    }
    visitVariableExpr(expr) {
        return this.scope.get(expr.name);
    }
    visitPostfixExpr(expr) {
        const value = this.scope.get(expr.name);
        const newValue = value + expr.increment;
        this.scope.assign(expr.name.lexeme, newValue);
        return value;
    }
    visitListExpr(expr) {
        const values = [];
        for (const expression of expr.value) {
            values.push(this.evaluate(expression));
        }
        return new _entity__WEBPACK_IMPORTED_MODULE_2__["ArrayEntity"](values);
    }
    visitZtringExpr(expr) {
        return new _entity__WEBPACK_IMPORTED_MODULE_2__["StringEntity"](expr.value);
    }
    visitAssignExpr(expr) {
        const value = this.evaluate(expr.value);
        this.scope.assign(expr.name.lexeme, value);
        return value;
    }
    visitBinaryExpr(expr) {
        let left = this.evaluate(expr.left);
        let right = this.evaluate(expr.right);
        left = left instanceof _entity__WEBPACK_IMPORTED_MODULE_2__["StringEntity"] ? left.toString() : left;
        right = right instanceof _entity__WEBPACK_IMPORTED_MODULE_2__["StringEntity"] ? right.toString() : right;
        switch (expr.operator.type) {
            case _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].minus:
            case _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].minusEqual:
                return (left - right);
            case _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].slash:
            case _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].slashEqual:
                return (left / right);
            case _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].star:
            case _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].starEqual:
                return (left * right);
            case _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].percent:
            case _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].percentEqual:
                return (left % right);
            case _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].plus:
            case _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].plusEqual:
                if (!isNaN(left) && !isNaN(right)) {
                    return (left + right);
                }
                if (left instanceof _entity__WEBPACK_IMPORTED_MODULE_2__["ArrayEntity"] && right instanceof _entity__WEBPACK_IMPORTED_MODULE_2__["ArrayEntity"]) {
                    return new _entity__WEBPACK_IMPORTED_MODULE_2__["ArrayEntity"](left.values.concat(right.values));
                }
                return new _entity__WEBPACK_IMPORTED_MODULE_2__["StringEntity"](left + right);
            case _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].pipe:
                return (left | right);
            case _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].caret:
                return (left ^ right);
            case _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].greater:
                return left > right;
            case _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].greaterEqual:
                return left >= right;
            case _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].less:
                return left < right;
            case _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].lessEqual:
                return left <= right;
            case _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].equalEqual:
                // tslint:disable-next-line
                return left == right;
            case _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].equalEqualEqual:
                return left === right;
            case _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].bangEqual:
                // tslint:disable-next-line
                return left != right;
            case _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].bangEqualEqual:
                return left !== right;
            default:
                conzole.warn(expr);
                return null; // unreachable
                break;
        }
    }
    visitLogicalExpr(expr) {
        if (expr.operator.type === _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].and) {
            return this.evaluate(expr.left) && this.evaluate(expr.right);
        }
        else {
            return this.evaluate(expr.left) || this.evaluate(expr.right);
        }
    }
    visitTernaryExpr(expr) {
        return this.evaluate(expr.condition) ? this.evaluate(expr.thenExpr) : this.evaluate(expr.elseExpr);
    }
    visitGroupingExpr(expr) {
        return this.evaluate(expr.expression);
    }
    visitLiteralExpr(expr) {
        return expr.value;
    }
    visitUnaryExpr(expr) {
        const right = this.evaluate(expr.right);
        switch (expr.operator.type) {
            case _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].minus:
                return -Number(right);
            case _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].bang:
                return !Boolean(right);
            case _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].dollar:
                return right.length;
            case _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].plusPlus:
                const incValue = Number(right) + 1;
                this.scope.assign(expr.right.name.lexeme, incValue);
                return incValue;
            case _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].minusMinus:
                const decValue = Number(right) - 1;
                this.scope.assign(expr.right.name.lexeme, decValue);
                return decValue;
            default:
                return null; // should be unreachable
        }
    }
    executeBlock(statements, nextScope) {
        const currentScope = this.scope;
        this.scope = nextScope;
        for (const statement of statements) {
            this.execute(statement);
        }
        this.scope = currentScope;
    }
    visitBlockStmt(stmt) {
        this.executeBlock(stmt.statements, new _scope__WEBPACK_IMPORTED_MODULE_4__["Scope"](this.scope));
    }
    visitIfStmt(stmt) {
        if (this.evaluate(stmt.condition)) {
            this.execute(stmt.thenStmt);
        }
        else if (stmt.elseStmt !== null) {
            this.execute(stmt.elseStmt);
        }
    }
    visitWhileStmt(stmt) {
        while (this.evaluate(stmt.condition)) {
            this.execute(stmt.loop);
        }
    }
    visitDoWhileStmt(stmt) {
        do {
            this.execute(stmt.loop);
        } while (this.evaluate(stmt.condition));
    }
    visitCallExpr(expr) {
        const callee = this.evaluate(expr.callee);
        const args = [];
        let thiz = null;
        if (expr.callee instanceof _expression__WEBPACK_IMPORTED_MODULE_0__["Get"]) {
            thiz = this.evaluate(expr.callee.entity);
        }
        else if (expr.thiz !== null) {
            thiz = expr.thiz;
        }
        for (const argument of expr.args) {
            args.push(this.evaluate(argument));
        }
        if (!(callee instanceof _entity__WEBPACK_IMPORTED_MODULE_2__["CallableEntity"]) &&
            !(callee instanceof _entity__WEBPACK_IMPORTED_MODULE_2__["InternalEntity"])) {
            this.interpreterError(`${callee} is not a function`);
        }
        const func = callee;
        if (args.length !== func.arity() && func.arity() !== -1) {
            conzole.warn(`Warning at (${expr.paren.line}): ${callee} mismatched argument length; \n Expected ${func.arity()} but got ${args.length} `);
        }
        return func.call(this, thiz, args);
    }
    visitSuperExpr(expr) {
        const thiz = this.scope.first('this');
        if (!thiz) {
            conzole.error(`super can only be called on child instances`);
        }
        const clazz = this.scope.obtain(thiz.instanceof);
        if (!clazz) {
            conzole.error(`${thiz} is not an instance of an entity`);
        }
        const parent = clazz.parent;
        if (!parent) {
            conzole.error(`${thiz} entity has no parent`);
        }
        let method = null;
        for (const key of expr.index) {
            method = parent.get(key.lexeme);
        }
        const args = [];
        for (const argument of expr.args) {
            args.push(this.evaluate(argument));
        }
        if (method) {
            return method.call(this, thiz, args);
        }
        else {
            return parent.call(this, thiz, args);
        }
    }
    visitNewExpr(expr) {
        const construct = expr.construct;
        const callee = this.evaluate(construct.callee);
        const newInstance = new _entity__WEBPACK_IMPORTED_MODULE_2__["InstanceEntity"](callee);
        construct.thiz = newInstance;
        this.evaluate(construct);
        return newInstance;
    }
    visitEntityExpr(expr) {
        const entity = new _entity__WEBPACK_IMPORTED_MODULE_2__["PrototypeEntity"]();
        for (const property of expr.properties) {
            const key = this.evaluate(property.key);
            const value = this.evaluate(property.value);
            entity.set(key, value);
        }
        return entity;
    }
    visitKeyExpr(expr) {
        return expr.name.lexeme;
    }
    visitGetExpr(expr) {
        const entity = this.evaluate(expr.entity);
        const key = this.evaluate(expr.key);
        if (entity instanceof _entity__WEBPACK_IMPORTED_MODULE_2__["PrototypeEntity"]) {
            return entity.get(key);
        }
        this.interpreterError(`${entity}.${key}: only instances have properties`);
    }
    visitSetExpr(expr) {
        const entity = this.evaluate(expr.entity);
        const key = this.evaluate(expr.key);
        if (!(entity instanceof _entity__WEBPACK_IMPORTED_MODULE_2__["PrototypeEntity"])) {
            conzole.warn(`${entity} is not a runtime Object`);
        }
        const value = this.evaluate(expr.value);
        entity.set(key, value);
        return value;
    }
    visitFuncStmt(stmt) {
        const func = new _entity__WEBPACK_IMPORTED_MODULE_2__["FunctionEntity"](stmt, this.scope);
        this.scope.define(stmt.name.lexeme, func);
        return null;
    }
    visitClassStmt(stmt) {
        let construct = stmt.methods.find((method) => method.name.lexeme === "constructor");
        const methods = stmt.methods.filter((method) => method.name.lexeme !== "constructor");
        if (!construct) {
            construct = new _statement__WEBPACK_IMPORTED_MODULE_1__["Func"](stmt.name, [], []);
        }
        else {
            construct.name = stmt.name;
        }
        const func = new _entity__WEBPACK_IMPORTED_MODULE_2__["FunctionEntity"](construct, this.scope);
        let parent = null;
        if (stmt.parent) {
            parent = this.scope.get(stmt.parent);
            if (parent) {
                func.parent = parent;
                func.prototype = new _prototype__WEBPACK_IMPORTED_MODULE_7__["Prototype"](parent.properties, parent.prototype, func);
            }
        }
        for (const method of methods) {
            func.properties.set(method.name.lexeme, new _entity__WEBPACK_IMPORTED_MODULE_2__["FunctionEntity"](method, this.scope, parent));
        }
        this.scope.set(stmt.name.lexeme, func);
        return null;
    }
    visitLambdaExpr(expr) {
        const lambda = expr.lambda;
        const func = new _entity__WEBPACK_IMPORTED_MODULE_2__["FunctionEntity"](lambda, this.scope);
        return func;
    }
    visitReturnStmt(stmt) {
        let value = null;
        if (stmt.value) {
            value = this.evaluate(stmt.value);
        }
        throw new _return__WEBPACK_IMPORTED_MODULE_3__["Return"](value);
    }
    visitRangeExpr(expr) {
        return new _entity__WEBPACK_IMPORTED_MODULE_2__["IndexRange"](expr.start ? this.evaluate(expr.start) : null, expr.end ? this.evaluate(expr.end) : null, expr.step ? this.evaluate(expr.step) : null);
    }
}


/***/ }),

/***/ "./src/parser.ts":
/*!***********************!*\
  !*** ./src/parser.ts ***!
  \***********************/
/*! exports provided: Parser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parser", function() { return Parser; });
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token */ "./src/token.ts");
/* harmony import */ var _expression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expression */ "./src/expression.ts");
/* harmony import */ var _statement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statement */ "./src/statement.ts");



class Parser {
    constructor(tokens) {
        this.current = 0;
        this.tokens = tokens;
    }
    parse() {
        const statements = [];
        while (!this.eof()) {
            statements.push(this.declaration());
        }
        return statements;
    }
    match(...types) {
        for (const type of types) {
            if (this.check(type)) {
                this.advance();
                return true;
            }
        }
        return false;
    }
    advance() {
        if (!this.eof()) {
            this.current++;
        }
        return this.previous();
    }
    peek() {
        return this.tokens[this.current];
    }
    previous() {
        return this.tokens[this.current - 1];
    }
    check(type) {
        return this.peek().type === type;
    }
    eof() {
        return this.check(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].eof);
    }
    consume(type, message) {
        if (this.check(type)) {
            return this.advance();
        }
        return this.parseError(this.previous(), message);
    }
    extraSemicolon() {
        const match = this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].semicolon);
        if (this.check(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].semicolon)) {
            while (this.check(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].semicolon)) {
                this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].semicolon, '');
            }
        }
        return match;
    }
    parseError(token, message) {
        // tslint:disable-next-line
        if (token.type === _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].eof) {
            conzole.error(`parse error at (${token.line}): at end ${message}`);
        }
        else {
            conzole.error(`[line (${token.line}) parse error at "${token.lexeme}"] => ${message}`);
        }
        throw new Error('Error parsing');
        // unreachable code
        return new _token__WEBPACK_IMPORTED_MODULE_0__["Token"]('panic', 'error', 'error', 0);
    }
    parseWarning(message) {
        const token = this.previous();
        conzole.warn(`[line (${token.line}) parse warning at "${token.lexeme}"] => ${message}`);
    }
    synchronize() {
        this.advance();
        while (!this.eof()) {
            if (this.previous().type === _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].semicolon) {
                return;
            }
            switch (this.peek().type) {
                case _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].class:
                case _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].function:
                case _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].var:
                case _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].for:
                case _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].if:
                case _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].while:
                case _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].print:
                case _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].return:
                    return;
            }
            this.advance();
        }
    }
    declaration() {
        try {
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].class)) {
                return this.classDeclaration();
            }
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].function)) {
                return this.funcDeclaration("function");
            }
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].var, _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].let)) {
                return this.varDeclaration(this.previous());
            }
            return this.statement();
        }
        catch (error) {
            throw new Error('Error parsing. Execution has been stopped');
            // TODO: reenable synchronize
            // this.synchronize();
            return null;
        }
    }
    classDeclaration() {
        if (this.check(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].function)) {
            this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].function, '');
        }
        const name = this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].identifier, `Expected a class name`);
        let parent = null;
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].extends)) {
            parent = this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].identifier, `Expected a parent name`);
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].leftBrace, `Expected "{" after class name`);
        const methods = [];
        while (!this.check(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].rightBrace) && !this.eof()) {
            if (this.check(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].function)) {
                this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].function, '');
            }
            methods.push(this.funcDeclaration("method"));
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].rightBrace, `Expected "}" after class "${name.literal}" methods`);
        if (this.extraSemicolon()) {
            this.parseWarning(`Unnecessary semicolon after class ${name.lexeme} declaration`);
        }
        return new _statement__WEBPACK_IMPORTED_MODULE_2__["Class"](name, parent, methods);
    }
    funcDeclaration(kind) {
        const name = this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].identifier, `Expected a ${kind} name`);
        return this.funcParamsBody(name, kind);
    }
    funcParams() {
        const params = [];
        if (!this.check(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].rightParen)) {
            do {
                if (params.length >= 255) {
                    this.parseError(this.peek(), `Parameter count exceeds 255`);
                }
                params.push(this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].identifier, `Expected a parameter name`));
            } while (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].comma));
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].rightParen, `Expect ")" after parameters`);
        return params;
    }
    funcParamsBody(name, kind) {
        this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].leftParen, `Expected "(" after ${kind}`);
        const params = this.funcParams();
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].leftBrace)) {
            const body = this.block();
            if (name.type !== _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].lambda && this.extraSemicolon()) {
                this.parseWarning(`Unnecessary semicolon after function ${name.lexeme} declaration`);
            }
            return new _statement__WEBPACK_IMPORTED_MODULE_2__["Func"](name, params, body);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].arrow)) {
            const body = [];
            let arrow;
            const keyword = this.previous();
            if (!this.check(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].semicolon)) {
                arrow = this.expression();
            }
            this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].semicolon);
            body.push(new _statement__WEBPACK_IMPORTED_MODULE_2__["Return"](keyword, arrow));
            return new _statement__WEBPACK_IMPORTED_MODULE_2__["Func"](name, params, body);
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].leftBrace, `Expect "{" before ${kind} body`);
    }
    varDeclaration(type) {
        const name = this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].identifier, `Expected a variable name`);
        let initializer = null;
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].equal)) {
            initializer = this.expression();
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].semicolon, `Expected semicolon ";" after a value.`);
        return new _statement__WEBPACK_IMPORTED_MODULE_2__["Var"](name, type, initializer);
    }
    statement() {
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].if)) {
            return this.ifStatement();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].print)) {
            return this.printStatement();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].do)) {
            return this.doWhileStatement();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].while)) {
            return this.whileStatement();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].for)) {
            return this.forStatement();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].leftBrace)) {
            return new _statement__WEBPACK_IMPORTED_MODULE_2__["Block"](this.block());
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].return)) {
            return this.returnStatement();
        }
        return this.expressionStatement();
    }
    ifStatement() {
        this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].leftParen, `Expected "(" after an if`);
        const condition = this.expression();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].rightParen, `Expected ")" after if condition`);
        const thenStmt = this.statement();
        let elseStmt = null;
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].else)) {
            elseStmt = this.statement();
        }
        return new _statement__WEBPACK_IMPORTED_MODULE_2__["If"](condition, thenStmt, elseStmt);
    }
    whileStatement() {
        this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].leftParen, `Expected "(" after a while statement`);
        const condition = this.expression();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].rightParen, `Expected ")" after while condition`);
        const loop = this.statement();
        return new _statement__WEBPACK_IMPORTED_MODULE_2__["While"](condition, loop);
    }
    forStatement() {
        this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].leftParen, `Expected "(" after a for statement`);
        let initializer;
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].semicolon)) {
            initializer = null;
        }
        else if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].var, _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].let)) {
            initializer = this.varDeclaration(this.previous());
        }
        else {
            initializer = this.expressionStatement();
        }
        let condition;
        if (!this.check(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].semicolon)) {
            condition = this.expression();
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].semicolon, `Expected ";" after loop condition`);
        let increment;
        if (!this.check(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].rightParen)) {
            increment = this.expression();
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].rightParen, `Expected ";" after loop condition`);
        let body = this.statement();
        if (increment !== null) {
            body = new _statement__WEBPACK_IMPORTED_MODULE_2__["Block"]([
                body,
                new _statement__WEBPACK_IMPORTED_MODULE_2__["Expression"](increment)
            ]);
        }
        if (condition === null) {
            condition = new _expression__WEBPACK_IMPORTED_MODULE_1__["Literal"](true);
        }
        body = new _statement__WEBPACK_IMPORTED_MODULE_2__["While"](condition, body);
        if (initializer !== null) {
            body = new _statement__WEBPACK_IMPORTED_MODULE_2__["Block"]([
                initializer,
                body
            ]);
        }
        return body;
    }
    doWhileStatement() {
        const loop = this.statement();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].while, `Expected condition after do statement`);
        this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].leftParen, `Expected "(" after a while`);
        const condition = this.expression();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].rightParen, `Expected ")" after while condition`);
        this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].semicolon, `Expected semicolon ";" after a do while condition`);
        return new _statement__WEBPACK_IMPORTED_MODULE_2__["DoWhile"](loop, condition);
    }
    printStatement() {
        const value = this.expression();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].semicolon, `Expected semicolon ";" after expression.`);
        return new _statement__WEBPACK_IMPORTED_MODULE_2__["Print"](value);
    }
    returnStatement() {
        const keyword = this.previous();
        let value = null;
        if (!this.check(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].semicolon)) {
            value = this.expression();
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].semicolon, `Exected ";" after return statement`);
        return new _statement__WEBPACK_IMPORTED_MODULE_2__["Return"](keyword, value);
    }
    block() {
        const statements = [];
        while (!this.check(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].rightBrace) && !this.eof()) {
            statements.push(this.declaration());
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].rightBrace, `Expected closing block "}"`);
        return statements;
    }
    expressionStatement() {
        const expression = this.expression();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].semicolon, `Expected semicolon ";" after ${expression} expression`);
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].semicolon)) {
            const token = this.previous();
            conzole.warn(`[line (${token.line}) parse warning at "${token.lexeme}"] => unnecessary semicolon or empty statement`);
            // consume all semicolons
            // tslint:disable-next-line
            while (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].semicolon)) { }
            ;
        }
        return new _statement__WEBPACK_IMPORTED_MODULE_2__["Expression"](expression);
    }
    expression() {
        return this.assignment();
    }
    assignment() {
        const expr = this.ternary();
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].equal, _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].plusEqual, _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].minusEqual, _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].starEqual, _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].slashEqual)) {
            const operator = this.previous();
            let value = this.assignment();
            if (expr instanceof _expression__WEBPACK_IMPORTED_MODULE_1__["Variable"]) {
                const name = expr.name;
                if (operator.type !== _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].equal) {
                    value = new _expression__WEBPACK_IMPORTED_MODULE_1__["Binary"](new _expression__WEBPACK_IMPORTED_MODULE_1__["Variable"](name), operator, value);
                }
                return new _expression__WEBPACK_IMPORTED_MODULE_1__["Assign"](name, value);
            }
            else if (expr instanceof _expression__WEBPACK_IMPORTED_MODULE_1__["Get"]) {
                if (operator.type !== _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].equal) {
                    value = new _expression__WEBPACK_IMPORTED_MODULE_1__["Binary"](new _expression__WEBPACK_IMPORTED_MODULE_1__["Get"](expr.entity, expr.key), operator, value);
                }
                return new _expression__WEBPACK_IMPORTED_MODULE_1__["Set"](expr.entity, expr.key, value);
            }
            this.parseError(operator, `Invalid l-value, is not an assigning target.`);
        }
        return expr;
    }
    ternary() {
        const expr = this.logicalOr();
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].question)) {
            const thenExpr = this.ternary();
            this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].colon, `Expected ":" after ternary ? expression`);
            const elseExpr = this.ternary();
            return new _expression__WEBPACK_IMPORTED_MODULE_1__["Ternary"](expr, thenExpr, elseExpr);
        }
        return expr;
    }
    logicalOr() {
        let expr = this.logicalAnd();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].or)) {
            const operator = this.previous();
            const right = this.logicalAnd();
            expr = new _expression__WEBPACK_IMPORTED_MODULE_1__["Logical"](expr, operator, right);
        }
        return expr;
    }
    logicalAnd() {
        let expr = this.equality();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].and)) {
            const operator = this.previous();
            const right = this.equality();
            expr = new _expression__WEBPACK_IMPORTED_MODULE_1__["Logical"](expr, operator, right);
        }
        return expr;
    }
    equality() {
        let expr = this.comparison();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].bangEqual, _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].equalEqual, _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].bangEqualEqual, _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].equalEqualEqual)) {
            const operator = this.previous();
            const right = this.comparison();
            expr = new _expression__WEBPACK_IMPORTED_MODULE_1__["Binary"](expr, operator, right);
        }
        return expr;
    }
    comparison() {
        let expr = this.addition();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].greater, _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].greaterEqual, _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].less, _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].lessEqual)) {
            const operator = this.previous();
            const right = this.addition();
            expr = new _expression__WEBPACK_IMPORTED_MODULE_1__["Binary"](expr, operator, right);
        }
        return expr;
    }
    addition() {
        let expr = this.modulus();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].minus, _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].plus)) {
            const operator = this.previous();
            const right = this.modulus();
            expr = new _expression__WEBPACK_IMPORTED_MODULE_1__["Binary"](expr, operator, right);
        }
        return expr;
    }
    modulus() {
        let expr = this.multiplication();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].percent)) {
            const operator = this.previous();
            const right = this.multiplication();
            expr = new _expression__WEBPACK_IMPORTED_MODULE_1__["Binary"](expr, operator, right);
        }
        return expr;
    }
    multiplication() {
        let expr = this.unary();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].slash, _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].star)) {
            const operator = this.previous();
            const right = this.unary();
            expr = new _expression__WEBPACK_IMPORTED_MODULE_1__["Binary"](expr, operator, right);
        }
        return expr;
    }
    unary() {
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].minus, _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].bang, _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].dollar, _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].plusPlus, _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].minusMinus)) {
            const operator = this.previous();
            const right = this.unary();
            return new _expression__WEBPACK_IMPORTED_MODULE_1__["Unary"](operator, right);
        }
        return this.newKeyword();
    }
    newKeyword() {
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].new)) {
            const construct = this.call();
            return new _expression__WEBPACK_IMPORTED_MODULE_1__["New"](construct);
        }
        return this.call();
    }
    call() {
        let expr = this.primary();
        while (true) {
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].leftParen)) {
                let callee = expr;
                do {
                    const args = [];
                    if (!this.check(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].rightParen)) {
                        do {
                            args.push(this.expression());
                        } while (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].comma));
                    }
                    const paren = this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].rightParen, `Expected ")" after arguments`);
                    callee = new _expression__WEBPACK_IMPORTED_MODULE_1__["Call"](callee, paren, args, null);
                } while (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].leftParen));
                return callee;
            }
            else if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].dot)) {
                expr = this.dotGet(expr);
            }
            else if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].leftBracket)) {
                expr = this.bracketGet(expr);
            }
            else {
                break;
            }
        }
        return expr;
    }
    dotGet(expr) {
        const name = this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].identifier, `Expect property name after '.'`);
        const key = new _expression__WEBPACK_IMPORTED_MODULE_1__["Key"](name);
        return new _expression__WEBPACK_IMPORTED_MODULE_1__["Get"](expr, key);
    }
    bracketGet(expr) {
        let key = null;
        let end = null;
        let step = null;
        if (!this.check(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].colon)) {
            key = this.expression();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].colon) && !this.check(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].colon)) {
            end = this.expression();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].colon) && !this.check(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].rightBracket)) {
            step = this.expression();
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].rightBracket, `Expected "]" after property name expression`);
        if (!key || end || step) {
            const range = new _expression__WEBPACK_IMPORTED_MODULE_1__["Range"](key, end, step);
            return new _expression__WEBPACK_IMPORTED_MODULE_1__["Get"](expr, range);
        }
        return new _expression__WEBPACK_IMPORTED_MODULE_1__["Get"](expr, key);
    }
    primary() {
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].false)) {
            return new _expression__WEBPACK_IMPORTED_MODULE_1__["Literal"](false);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].true)) {
            return new _expression__WEBPACK_IMPORTED_MODULE_1__["Literal"](true);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].null)) {
            return new _expression__WEBPACK_IMPORTED_MODULE_1__["Literal"](null);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].number)) {
            return new _expression__WEBPACK_IMPORTED_MODULE_1__["Literal"](this.previous().literal);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].string)) {
            return new _expression__WEBPACK_IMPORTED_MODULE_1__["Ztring"](this.previous().literal);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].identifier)) {
            const identifier = this.previous();
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].plusPlus)) {
                return new _expression__WEBPACK_IMPORTED_MODULE_1__["Postfix"](identifier, 1);
            }
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].minusMinus)) {
                return new _expression__WEBPACK_IMPORTED_MODULE_1__["Postfix"](identifier, -1);
            }
            return new _expression__WEBPACK_IMPORTED_MODULE_1__["Variable"](identifier);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].leftParen)) {
            const expr = this.expression();
            this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].rightParen, `Expected ")" after expression`);
            return new _expression__WEBPACK_IMPORTED_MODULE_1__["Grouping"](expr);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].leftBrace)) {
            return this.entity();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].function)) {
            const token = new _token__WEBPACK_IMPORTED_MODULE_0__["Token"]('lambda', 'lambda', 'lambda', this.previous().line);
            const lambda = this.funcParamsBody(token, "lambda");
            return new _expression__WEBPACK_IMPORTED_MODULE_1__["Lambda"](lambda);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].super)) {
            return this.superCall();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].leftBracket)) {
            return this.array();
        }
        throw this.parseError(this.peek(), `Expected expression`);
        // unreacheable code
        return new _expression__WEBPACK_IMPORTED_MODULE_1__["Literal"](null);
    }
    entity() {
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].rightBrace)) {
            return new _expression__WEBPACK_IMPORTED_MODULE_1__["Entity"]([]);
        }
        const properties = [];
        do {
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].string, _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].identifier)) {
                const key = this.previous();
                this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].colon, `Expected ":" colon after member`);
                const value = this.expression();
                properties.push(new _expression__WEBPACK_IMPORTED_MODULE_1__["Set"](null, new _expression__WEBPACK_IMPORTED_MODULE_1__["Key"](key), value));
            }
            else {
                this.parseError(this.peek(), `String or identifier expected after Object {`);
            }
        } while (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].comma));
        this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].rightBrace, `Expected "}" after object literal`);
        return new _expression__WEBPACK_IMPORTED_MODULE_1__["Entity"](properties);
    }
    array() {
        const values = [];
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].rightBracket)) {
            return new _expression__WEBPACK_IMPORTED_MODULE_1__["List"]([]);
        }
        do {
            values.push(this.expression());
        } while (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].comma));
        this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].rightBracket, `Expected "]" after array declaration`);
        return new _expression__WEBPACK_IMPORTED_MODULE_1__["List"](values);
    }
    superCall() {
        const indexes = [];
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].dot)) {
            const token = this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].identifier, `Expected method name after super`);
            indexes.push(token);
        }
        const args = [];
        this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].leftParen, `Expected function parameters or method name after super`);
        do {
            if (!this.check(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].rightParen)) {
                do {
                    args.push(this.expression());
                } while (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].comma));
            }
            this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].rightParen, `Expected ")" after super arguments`);
        } while (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].leftParen));
        return new _expression__WEBPACK_IMPORTED_MODULE_1__["Super"](indexes, args);
    }
}


/***/ }),

/***/ "./src/prototype.ts":
/*!**************************!*\
  !*** ./src/prototype.ts ***!
  \**************************/
/*! exports provided: Prototype */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prototype", function() { return Prototype; });
class Prototype {
    constructor(values, parent = null, owner) {
        this.values = new Map(values);
        this.prototype = parent;
        this.owner = owner;
    }
    set(name, value) {
        this.values.set(name, value);
    }
    get(key) {
        if (this.values.has(key)) {
            return this.values.get(key);
        }
        if (this.prototype !== null) {
            return this.prototype.get(key);
        }
        conzole.error(`[entity error] => ${key} is not defined in ${this.owner}`);
        throw new Error();
    }
}


/***/ }),

/***/ "./src/return.ts":
/*!***********************!*\
  !*** ./src/return.ts ***!
  \***********************/
/*! exports provided: Return */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Return", function() { return Return; });
class Return extends Error {
    constructor(value) {
        super();
        this.value = value;
    }
}


/***/ }),

/***/ "./src/runtime.ts":
/*!************************!*\
  !*** ./src/runtime.ts ***!
  \************************/
/*! exports provided: hasOwnProperty, lengthProperty, invokeMethod, superCall, mergeMethod, extendMethod, inheritMethod, echoFunction, randFunction, arrayLengthMethod, arrayJoinMethod, arrayPushMethod, arrayPopMethod, arrayEachMethod, arrayMapMethod, arrayFindMethod, arrayIndexOfMethod, stringLengthMethod, stringSubStrMethod, stringSplitMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOwnProperty", function() { return hasOwnProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lengthProperty", function() { return lengthProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invokeMethod", function() { return invokeMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "superCall", function() { return superCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeMethod", function() { return mergeMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendMethod", function() { return extendMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inheritMethod", function() { return inheritMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "echoFunction", function() { return echoFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randFunction", function() { return randFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayLengthMethod", function() { return arrayLengthMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayJoinMethod", function() { return arrayJoinMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayPushMethod", function() { return arrayPushMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayPopMethod", function() { return arrayPopMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayEachMethod", function() { return arrayEachMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayMapMethod", function() { return arrayMapMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayFindMethod", function() { return arrayFindMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayIndexOfMethod", function() { return arrayIndexOfMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringLengthMethod", function() { return stringLengthMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringSubStrMethod", function() { return stringSubStrMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringSplitMethod", function() { return stringSplitMethod; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/entity.ts");
/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prototype */ "./src/prototype.ts");


function hasOwnProperty(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_0__["InternalEntity"]();
    func.toString = () => '<internal function hasOwnProperty>';
    func.arity = () => 1;
    func.call = (int, thiz, args) => thiz.properties.has(args[0]);
    return func;
}
function lengthProperty(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_0__["InternalEntity"]();
    func.toString = () => '<internal function size>';
    func.arity = () => 0;
    func.call = (int, thiz, args) => thiz.properties.size;
    return func;
}
function invokeMethod(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_0__["InternalEntity"]();
    func.toString = () => '<internal function invoke>';
    func.arity = () => -1;
    func.call = (int, thiz, args) => thiz.call(int, args[0], args.slice(1));
    return func;
}
function superCall(that, instance) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_0__["InternalEntity"]();
    func.arity = () => that.parent.arity();
    func.toString = () => '<native super function>';
    func.call = (int, thiz, args) => that.parent.call(int, instance, args);
    return func;
}
function mergeMethod(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_0__["InternalEntity"]();
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
function extendMethod(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_0__["InternalEntity"]();
    func.call = (int, thiz, args) => {
        const proto = new _prototype__WEBPACK_IMPORTED_MODULE_1__["Prototype"](that.properties, new _prototype__WEBPACK_IMPORTED_MODULE_1__["Prototype"](args[0].properties, args[0].prototype, thiz), thiz);
        that.prototype = proto;
    };
    func.toString = () => '<internal merge function>';
    func.arity = () => -1;
    return func;
}
function inheritMethod(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_0__["InternalEntity"]();
    func.call = (int, thiz, args) => {
        that.prototype.values = new Map([...args[0].properties, ...that.prototype.values]);
    };
    func.toString = () => '<internal inheritance function>';
    func.arity = () => 1;
    return func;
}
function echoFunction() {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_0__["InternalEntity"]();
    func.arity = () => 1;
    func.toString = () => '<native function>';
    func.call = (interpreter, thiz, args) => console.log(args[0]);
    return func;
}
function randFunction() {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_0__["InternalEntity"]();
    func.arity = () => 0;
    func.call = () => Math.random();
    func.toString = () => '<native function>';
    return func;
}
function arrayLengthMethod(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_0__["InternalEntity"]();
    func.toString = () => '<internal function size>';
    func.arity = () => 0;
    func.call = (int, thiz, args) => thiz.values.length;
    return func;
}
function arrayJoinMethod(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_0__["InternalEntity"]();
    func.toString = () => '<internal function size>';
    func.arity = () => 1;
    func.call = (int, thiz, args) => new _entity__WEBPACK_IMPORTED_MODULE_0__["StringEntity"](thiz.values.join(args[0]));
    return func;
}
function arrayPushMethod(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_0__["InternalEntity"]();
    func.toString = () => '<internal function size>';
    func.arity = () => 1;
    func.call = (int, thiz, args) => thiz.values.push(args[0]);
    return func;
}
function arrayPopMethod(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_0__["InternalEntity"]();
    func.toString = () => '<internal function size>';
    func.arity = () => 0;
    func.call = (int, thiz, args) => thiz.values.pop(args[0]);
    return func;
}
function arrayEachMethod(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_0__["InternalEntity"]();
    func.toString = () => '<internal function size>';
    func.arity = () => -1;
    func.call = (int, thiz, args) => {
        for (let i = 0; i < thiz.values.length; ++i) {
            args[0].call(int, thiz, [thiz.values[i], i, thiz]);
        }
    };
    return func;
}
function arrayMapMethod(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_0__["InternalEntity"]();
    func.toString = () => '<internal function size>';
    func.arity = () => -1;
    func.call = (int, thiz, args) => {
        for (let i = 0; i < thiz.values.length; ++i) {
            thiz.values[i] = args[0].call(int, thiz, [thiz.values[i], i, thiz]);
        }
    };
    return func;
}
function arrayFindMethod(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_0__["InternalEntity"]();
    func.toString = () => '<internal function size>';
    func.arity = () => -1;
    func.call = (int, thiz, args) => {
        for (let i = 0; i < thiz.values.length; ++i) {
            if (args[0].call(int, thiz, [thiz.values[i], i, thiz])) {
                return thiz.values[i];
            }
        }
        return null;
    };
    return func;
}
function arrayIndexOfMethod(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_0__["InternalEntity"]();
    func.toString = () => '<internal function size>';
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
function stringLengthMethod(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_0__["InternalEntity"]();
    func.toString = () => '<internal function size>';
    func.arity = () => 0;
    func.call = (int, thiz, args) => thiz.value.length;
    return func;
}
function stringSubStrMethod(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_0__["InternalEntity"]();
    func.toString = () => '<internal function size>';
    func.arity = () => -1;
    func.call = (int, thiz, args) => new _entity__WEBPACK_IMPORTED_MODULE_0__["StringEntity"](thiz.value.substr(args[0], args[1]));
    return func;
}
function stringSplitMethod(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_0__["InternalEntity"]();
    func.toString = () => '<internal function size>';
    func.arity = () => 1;
    func.call = (int, thiz, args) => new _entity__WEBPACK_IMPORTED_MODULE_0__["ArrayEntity"](thiz.value.split(args[0]));
    return func;
}


/***/ }),

/***/ "./src/scanner.ts":
/*!************************!*\
  !*** ./src/scanner.ts ***!
  \************************/
/*! exports provided: Scanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scanner", function() { return Scanner; });
/* harmony import */ var _src_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/token */ "./src/token.ts");

const isDigit = (char) => char >= '0' && char <= '9';
const isAlpha = (char) => (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
const isAlphaNumeric = (char) => isAlpha(char) || isDigit(char);
const isKeyword = (word) => _src_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"][word] >= 23;
class Scanner {
    constructor(source) {
        this.tokens = [];
        this.current = 0;
        this.line = 1;
        this.start = 0;
        this.source = source;
    }
    eof() {
        return this.current >= this.source.length;
    }
    advance() {
        this.current++;
        return this.source.charAt(this.current - 1);
    }
    addToken(tokenName, literal) {
        const text = this.source.substring(this.start, this.current);
        this.tokens.push(new _src_token__WEBPACK_IMPORTED_MODULE_0__["Token"](tokenName, text, literal, this.line));
    }
    match(expected) {
        if (this.eof()) {
            return false;
        }
        if (this.source.charAt(this.current) !== expected) {
            return false;
        }
        this.current++;
        return true;
    }
    peek() {
        if (this.eof()) {
            return '\0';
        }
        return this.source.charAt(this.current);
    }
    peekNext() {
        if (this.current + 1 >= this.source.length) {
            return '\0';
        }
        return this.source.charAt(this.current + 1);
    }
    comment() {
        while (this.peek() !== '\n' && !this.eof()) {
            this.advance();
        }
    }
    string(quote, type) {
        while (this.peek() !== quote && !this.eof()) {
            if (this.peek() === '\n') {
                this.line++;
            }
            this.advance();
        }
        // Unterminated string.
        if (this.eof()) {
            this.scanError(`Unterminated string, expecting closing ${quote}`);
            return;
        }
        // The closing ".
        this.advance();
        // Trim the surrounding quotes.
        const value = this.source.substring(this.start + 1, this.current - 1);
        this.addToken('string', value);
    }
    number() {
        // gets integer part
        while (isDigit(this.peek())) {
            this.advance();
        }
        // checks for fraction
        if (this.peek() === '.' && isDigit(this.peekNext())) {
            this.advance();
        }
        // gets fraction part
        while (isDigit(this.peek())) {
            this.advance();
        }
        // checks for exponent
        if (this.peek().toLowerCase() === 'e') {
            this.advance();
            if (this.peek() === '-' || this.peek() === '+') {
                this.advance();
            }
        }
        while (isDigit(this.peek())) {
            this.advance();
        }
        const value = this.source.substring(this.start, this.current);
        this.addToken('number', Number(value));
    }
    identifier() {
        while (isAlphaNumeric(this.peek())) {
            this.advance();
        }
        let value = this.source.substring(this.start, this.current);
        value = value === 'func' ? 'function' : value;
        if (isKeyword(value)) {
            this.addToken(value, null);
        }
        else {
            this.addToken('identifier', value);
        }
    }
    scan() {
        while (!this.eof()) {
            this.start = this.current;
            this.scanToken();
        }
        this.tokens.push(new _src_token__WEBPACK_IMPORTED_MODULE_0__["Token"]('eof', '', null, this.line));
        return this.tokens;
    }
    scanToken() {
        const char = this.advance();
        switch (char) {
            case '(':
                this.addToken('leftParen', null);
                break;
            case ')':
                this.addToken('rightParen', null);
                break;
            case '[':
                this.addToken('leftBracket', null);
                break;
            case ']':
                this.addToken('rightBracket', null);
                break;
            case '{':
                this.addToken('leftBrace', null);
                break;
            case '}':
                this.addToken('rightBrace', null);
                break;
            case ',':
                this.addToken('comma', null);
                break;
            case '.':
                this.addToken('dot', null);
                break;
            case ';':
                this.addToken('semicolon', null);
                break;
            case '*':
                this.addToken(this.match('=') ? 'starEqual' : 'star', null);
                break;
            case '^':
                this.addToken('caret', null);
                break;
            case '?':
                this.addToken('question', null);
                break;
            case ':':
                this.addToken('colon', null);
                break;
            case '%':
                this.addToken(this.match('=') ? 'percentEqual' : 'percent', null);
                break;
            case '$':
                this.addToken('dollar', null);
                break;
            case '@':
                this.addToken('function', null);
                break;
            case '-':
                this.addToken(this.match('-') ? 'minusMinus' : this.match('>') ? 'return' : this.match('=') ? 'minusEqual' : 'minus', null);
                break;
            case '+':
                this.addToken(this.match('+') ? 'plusPlus' : this.match('=') ? 'plusEqual' : 'plus', null);
                break;
            case '|':
                this.addToken(this.match('|') ? 'or' : 'pipe', null);
                break;
            case '&':
                this.addToken(this.match('&') ? 'and' : 'ampersand', null);
                break;
            case '<':
                this.addToken(this.match('=') ? 'lessEqual' : 'less', null);
                break;
            case '>':
                this.addToken(this.match('=') ? 'greaterEqual' : 'greater', null);
                break;
            case '!':
                this.addToken(this.match('=') ? this.match('=') ? 'bangEqualEqual' : 'bangEqual' : 'bang', null);
                break;
            case '=':
                if (this.match('=')) {
                    if (this.match('=')) {
                        this.addToken('equalEqualEqual', null);
                    }
                    else {
                        this.addToken('equalEqual', null);
                    }
                }
                else if (this.match('>')) {
                    this.addToken('arrow', null);
                }
                else {
                    this.addToken('equal', null);
                }
                break;
            case '/':
                if (this.match('/')) {
                    this.comment();
                }
                else if (this.match('=')) {
                    this.addToken('slashEqual', null);
                }
                else {
                    this.addToken('slash', null);
                }
                break;
            case '\n':
                this.line++;
                break;
            case `'`:
            case `"`:
            case '`':
                this.string(char, _src_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].string);
                break;
            // ignore cases
            case ' ':
            case '\r':
            case '\t':
                break;
            // compex cases
            default:
                if (isDigit(char)) {
                    this.number();
                }
                else if (isAlpha(char)) {
                    this.identifier();
                }
                else {
                    this.scanError(`Unexpected character '${char}'`);
                }
                break;
        }
    }
    scanError(message) {
        conzole.error(`Error at (${this.line}):  ${message}`);
        throw new Error('Error while scanning. Execution has been stoped');
    }
}


/***/ }),

/***/ "./src/scope.ts":
/*!**********************!*\
  !*** ./src/scope.ts ***!
  \**********************/
/*! exports provided: Scope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return Scope; });
class Scope {
    constructor(parent = null) {
        this.values = new Map();
        this.parent = parent;
    }
    scopeError(message) {
        conzole.error(`[scope error] => ${message}`);
        throw new Error();
    }
    set(name, value) {
        this.values.set(name, value);
    }
    define(name, value) {
        if (this.values.has(name)) {
            this.scopeError(`identifier "${name}" has already been defined`);
        }
        else {
            this.set(name, value);
        }
    }
    assign(name, value) {
        if (this.values.has(name)) {
            this.set(name, value);
        }
        else {
            if (this.parent !== null) {
                return this.parent.assign(name, value);
            }
            this.scopeError(`Identifier "${name}" has not been defined`);
        }
    }
    get(name) {
        if (this.values.has(name.lexeme)) {
            return this.values.get(name.lexeme);
        }
        if (this.parent !== null) {
            return this.parent.get(name);
        }
        this.scopeError(`Error at (${name.line}): "${name.lexeme}" is not defined`);
    }
    first(key) {
        if (this.values.has(key)) {
            return this.values.get(key);
        }
        return null;
    }
    obtain(key) {
        if (this.values.has(key)) {
            return this.values.get(key);
        }
        if (this.parent !== null) {
            return this.parent.obtain(key);
        }
        return null;
    }
}


/***/ }),

/***/ "./src/statement.ts":
/*!**************************!*\
  !*** ./src/statement.ts ***!
  \**************************/
/*! exports provided: Stmt, Block, Class, DoWhile, Expression, Func, If, Print, Return, Var, While */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stmt", function() { return Stmt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Block", function() { return Block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Class", function() { return Class; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoWhile", function() { return DoWhile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expression", function() { return Expression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Func", function() { return Func; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "If", function() { return If; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Print", function() { return Print; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Return", function() { return Return; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Var", function() { return Var; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "While", function() { return While; });
class Stmt {
    // tslint:disable-next-line
    constructor() { }
}
class Block extends Stmt {
    constructor(statements) {
        super();
        this.statements = statements;
    }
    accept(visitor) {
        return visitor.visitBlockStmt(this);
    }
    toString() {
        return 'Stmt.Block';
    }
}
class Class extends Stmt {
    constructor(name, parent, methods) {
        super();
        this.name = name;
        this.parent = parent;
        this.methods = methods;
    }
    accept(visitor) {
        return visitor.visitClassStmt(this);
    }
    toString() {
        return 'Stmt.Class';
    }
}
class DoWhile extends Stmt {
    constructor(loop, condition) {
        super();
        this.loop = loop;
        this.condition = condition;
    }
    accept(visitor) {
        return visitor.visitDoWhileStmt(this);
    }
    toString() {
        return 'Stmt.DoWhile';
    }
}
class Expression extends Stmt {
    constructor(expression) {
        super();
        this.expression = expression;
    }
    accept(visitor) {
        return visitor.visitExpressionStmt(this);
    }
    toString() {
        return 'Stmt.Expression';
    }
}
class Func extends Stmt {
    constructor(name, params, body) {
        super();
        this.name = name;
        this.params = params;
        this.body = body;
    }
    accept(visitor) {
        return visitor.visitFuncStmt(this);
    }
    toString() {
        return 'Stmt.Func';
    }
}
class If extends Stmt {
    constructor(condition, thenStmt, elseStmt) {
        super();
        this.condition = condition;
        this.thenStmt = thenStmt;
        this.elseStmt = elseStmt;
    }
    accept(visitor) {
        return visitor.visitIfStmt(this);
    }
    toString() {
        return 'Stmt.If';
    }
}
class Print extends Stmt {
    constructor(expression) {
        super();
        this.expression = expression;
    }
    accept(visitor) {
        return visitor.visitPrintStmt(this);
    }
    toString() {
        return 'Stmt.Print';
    }
}
class Return extends Stmt {
    constructor(keyword, value) {
        super();
        this.keyword = keyword;
        this.value = value;
    }
    accept(visitor) {
        return visitor.visitReturnStmt(this);
    }
    toString() {
        return 'Stmt.Return';
    }
}
class Var extends Stmt {
    constructor(name, type, initializer) {
        super();
        this.name = name;
        this.type = type;
        this.initializer = initializer;
    }
    accept(visitor) {
        return visitor.visitVarStmt(this);
    }
    toString() {
        return 'Stmt.Var';
    }
}
class While extends Stmt {
    constructor(condition, loop) {
        super();
        this.condition = condition;
        this.loop = loop;
    }
    accept(visitor) {
        return visitor.visitWhileStmt(this);
    }
    toString() {
        return 'Stmt.While';
    }
}


/***/ }),

/***/ "./src/token.ts":
/*!**********************!*\
  !*** ./src/token.ts ***!
  \**********************/
/*! exports provided: TokenType, Token */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenType", function() { return TokenType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Token", function() { return Token; });
var TokenType;
(function (TokenType) {
    // parser tokens
    TokenType[TokenType["eof"] = 0] = "eof";
    TokenType[TokenType["panic"] = 1] = "panic";
    TokenType[TokenType["lambda"] = 2] = "lambda";
    // single character tokens
    TokenType[TokenType["ampersand"] = 3] = "ampersand";
    TokenType[TokenType["atSign"] = 4] = "atSign";
    TokenType[TokenType["caret"] = 5] = "caret";
    TokenType[TokenType["comma"] = 6] = "comma";
    TokenType[TokenType["dollar"] = 7] = "dollar";
    TokenType[TokenType["dot"] = 8] = "dot";
    TokenType[TokenType["leftBrace"] = 9] = "leftBrace";
    TokenType[TokenType["leftBracket"] = 10] = "leftBracket";
    TokenType[TokenType["leftParen"] = 11] = "leftParen";
    TokenType[TokenType["percent"] = 12] = "percent";
    TokenType[TokenType["pipe"] = 13] = "pipe";
    TokenType[TokenType["rightBrace"] = 14] = "rightBrace";
    TokenType[TokenType["rightBracket"] = 15] = "rightBracket";
    TokenType[TokenType["rightParen"] = 16] = "rightParen";
    TokenType[TokenType["semicolon"] = 17] = "semicolon";
    TokenType[TokenType["slash"] = 18] = "slash";
    TokenType[TokenType["star"] = 19] = "star";
    // one or two character tokens
    TokenType[TokenType["arrow"] = 20] = "arrow";
    TokenType[TokenType["bang"] = 21] = "bang";
    TokenType[TokenType["bangEqual"] = 22] = "bangEqual";
    TokenType[TokenType["colon"] = 23] = "colon";
    TokenType[TokenType["equal"] = 24] = "equal";
    TokenType[TokenType["equalEqual"] = 25] = "equalEqual";
    TokenType[TokenType["greater"] = 26] = "greater";
    TokenType[TokenType["greaterEqual"] = 27] = "greaterEqual";
    TokenType[TokenType["less"] = 28] = "less";
    TokenType[TokenType["lessEqual"] = 29] = "lessEqual";
    TokenType[TokenType["minus"] = 30] = "minus";
    TokenType[TokenType["minusEqual"] = 31] = "minusEqual";
    TokenType[TokenType["minusMinus"] = 32] = "minusMinus";
    TokenType[TokenType["percentEqual"] = 33] = "percentEqual";
    TokenType[TokenType["plus"] = 34] = "plus";
    TokenType[TokenType["plusEqual"] = 35] = "plusEqual";
    TokenType[TokenType["plusPlus"] = 36] = "plusPlus";
    TokenType[TokenType["question"] = 37] = "question";
    TokenType[TokenType["slashEqual"] = 38] = "slashEqual";
    TokenType[TokenType["starEqual"] = 39] = "starEqual";
    // three character tokens
    TokenType[TokenType["bangEqualEqual"] = 40] = "bangEqualEqual";
    TokenType[TokenType["equalEqualEqual"] = 41] = "equalEqualEqual";
    // literals
    TokenType[TokenType["identifier"] = 42] = "identifier";
    TokenType[TokenType["string"] = 43] = "string";
    TokenType[TokenType["number"] = 44] = "number";
    // keywords
    TokenType[TokenType["and"] = 45] = "and";
    TokenType[TokenType["class"] = 46] = "class";
    TokenType[TokenType["do"] = 47] = "do";
    TokenType[TokenType["else"] = 48] = "else";
    TokenType[TokenType["extends"] = 49] = "extends";
    TokenType[TokenType["false"] = 50] = "false";
    TokenType[TokenType["for"] = 51] = "for";
    TokenType[TokenType["func"] = 52] = "func";
    TokenType[TokenType["function"] = 53] = "function";
    TokenType[TokenType["if"] = 54] = "if";
    TokenType[TokenType["let"] = 55] = "let";
    TokenType[TokenType["new"] = 56] = "new";
    TokenType[TokenType["null"] = 57] = "null";
    TokenType[TokenType["or"] = 58] = "or";
    TokenType[TokenType["print"] = 59] = "print";
    TokenType[TokenType["return"] = 60] = "return";
    TokenType[TokenType["super"] = 61] = "super";
    TokenType[TokenType["true"] = 62] = "true";
    TokenType[TokenType["var"] = 63] = "var";
    TokenType[TokenType["while"] = 64] = "while";
})(TokenType || (TokenType = {}));
class Token {
    constructor(name, lexeme, literal, line) {
        this.name = name;
        this.type = TokenType[name];
        this.lexeme = lexeme;
        this.literal = literal;
        this.line = line;
    }
    toString() {
        return `[(${this.line}):"${this.lexeme}"]`;
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVtby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50aXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9leHByZXNzaW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJwcmV0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhcnNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG90eXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZXR1cm4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjYW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njb3BlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rva2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7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Q0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDN0ksS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQzVHLEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDdEUsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUM1RSxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQzdFLEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMs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QUFLO0lBT2QsWUFBWSxJQUFZLEVBQUUsTUFBYyxFQUFFLE9BQVksRUFBRSxJQUFZO1FBQ2hFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBRXJCLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxLQUFLLElBQUksQ0FBQyxJQUFJLE1BQU0sSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDO0lBQy9DLENBQUM7Q0FFSiIsImZpbGUiOiJhdHNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiZXhwb3J0IGVudW0gQ29uc29sZU1lc3NhZ2VUeXBlIHtcclxuICAgIFVzZXIsXHJcbiAgICBFcnJvcixcclxuICAgIFdhcm5pbmcsXHJcbiAgICBJbmZvXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25zb2xlTWVzc2FnZSB7XHJcbiAgICBwdWJsaWMgdGltZTogRGF0ZTtcclxuICAgIHB1YmxpYyB0ZXh0OiBhbnk7XHJcbiAgICBwdWJsaWMgdHlwZTogQ29uc29sZU1lc3NhZ2VUeXBlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uc29sZSB7XHJcblxyXG4gICAgcHVibGljIG1lc3NhZ2VzOiBDb25zb2xlTWVzc2FnZVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZChtZXNzYWdlOiBhbnksIHR5cGU6IENvbnNvbGVNZXNzYWdlVHlwZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMucHVzaCh7XHJcbiAgICAgICAgICAgIHRleHQ6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgICAgICB0eXBlOiB0eXBlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9nKG1lc3NhZ2U6IGFueSkge1xyXG4gICAgICAgIHRoaXMuYWRkKG1lc3NhZ2UsIENvbnNvbGVNZXNzYWdlVHlwZS5Vc2VyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgd2FybihtZXNzYWdlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmFkZChtZXNzYWdlLCBDb25zb2xlTWVzc2FnZVR5cGUuV2FybmluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVycm9yKG1lc3NhZ2U6IGFueSkge1xyXG4gICAgICAgIHRoaXMuYWRkKG1lc3NhZ2UsIENvbnNvbGVNZXNzYWdlVHlwZS5FcnJvcik7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbmZvKG1lc3NhZ2U6IGFueSkge1xyXG4gICAgICAgIHRoaXMuYWRkKG1lc3NhZ2UsIENvbnNvbGVNZXNzYWdlVHlwZS5JbmZvKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmlyc3QoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlc1swXS50ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsYXN0KCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZXNbdGhpcy5tZXNzYWdlcy5sZW5ndGggLSAxXS50ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcmludCgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyh0aGlzLm1lc3NhZ2VzLm1hcCgoY20pID0+IGNtLnRleHQpKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IERlbW9Tb3VyY2VDb2RlID1cclxuYFxyXG4vLyBzbGljaW5nIHN0cmluZ3NcclxucHJpbnQgXCJvbmUgdHdvIHRocmVlIGZvdXJcIls0Ojc6MV07IC8vIHByaW50cyB0d29cclxucHJpbnQgXCJoZWxsbyB3b3JsZFwiWzY6OjFdOyAvLyBwcmludHMgd29ybGRcclxucHJpbnQgXCJoZWxsbyB3b3JsZFwiWzo6LTFdOyAvL3ByaW50cyBkbHJvdyBvbGxlaFxyXG5cclxuLy8gUHJvdG90eXBlIG9iamVjdHNcclxuQE15Q2xhc3ModGV4dCkge1xyXG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcclxufVxyXG5NeUNsYXNzLm1ldGhvZCA9IEAodGV4dCkge1xyXG4gICAgdGhpcy50ZXh0ID0gdGhpcy50ZXh0ICsgdGV4dDtcclxufTtcclxuTXlDbGFzcy5jb3VudCA9IEAodGltZXMpIHtcclxuICAgIEBuZXN0ZWQobnVtKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bSAqIG51bTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGltZXM7ICsraSkge1xyXG4gICAgICAgIHByaW50IG5lc3RlZChpKTtcclxuICAgIH1cclxufTtcclxudmFyIGluc3RhbmNlID0gbmV3IE15Q2xhc3MoJ0hlbGxvICcpO1xyXG5pbnN0YW5jZS5tZXRob2QoJ1dvcmxkJyk7XHJcbmluc3RhbmNlLmNvdW50KDMpO1xyXG5wcmludCBpbnN0YW5jZS50ZXh0O1xyXG5cclxuLy8gc3VnYXIgY29hdGVkIGNsYXNzZXNcclxuY2xhc3MgTXlDbGFzc0NsYXNzIHtcclxuICAgIGNvbnN0cnVjdG9yKGFsZmEpIHtcclxuICAgICAgICB0aGlzLnNvbWV0aGluZyA9ICdhbnl0aGluZycgKyBhbGZhO1xyXG4gICAgfVxyXG59XHJcbmxldCB0ZXN0Q2xhc3NDbGFzcyA9IG5ldyBNeUNsYXNzQ2xhc3MoJyBpcyBzb21ldGhpbmcnKTtcclxucHJpbnQgdGVzdENsYXNzQ2xhc3Muc29tZXRoaW5nO1xyXG5cclxuLy8gc2hhbGxvdyBtdWx0aXBsZSBpbmhlcml0YW5jZVxyXG5AQmxhZGUoKSB7XHJcbiAgICB0aGlzLnNoYXJwbmVzcyA9IFwidmVyeSBzaGFycFwiO1xyXG59XHJcbkJsYWRlLmN1dCA9IEAoKSB7XHJcbiAgICBwcmludCBcImN1dHRpbmcuLi5cIiArIHRoaXMuc2hhcnBuZXNzO1xyXG59O1xyXG5ASGFuZGxlKCkge1xyXG4gICAgdGhpcy5jb2xvciA9IFwid29vZFwiO1xyXG59XHJcbkhhbmRsZS5ob2xkID0gQCgpIHtcclxuICAgIHByaW50IFwiaG9sZGluZy4uLlwiICsgdGhpcy5jb2xvcjtcclxufTtcclxuQEtuaWZlKCkge1xyXG4gICAgQmxhZGUuaW52b2tlKHRoaXMpO1xyXG4gICAgSGFuZGxlLmludm9rZSh0aGlzKTtcclxufVxyXG5LbmlmZS5tZXJnZShCbGFkZSk7XHJcbktuaWZlLm1lcmdlKEhhbmRsZSk7XHJcbmxldCBrbmlmZSA9IG5ldyBLbmlmZSgpO1xyXG5rbmlmZS5jdXQoKTtcclxua25pZmUuaG9sZCgpO1xyXG5cclxuLy8gUmVjdXJzaXZlIGZ1bmN0aW9uXHJcbmZ1bmN0aW9uIGZhY3RvcmlhbGl6ZShuKSB7XHJcbiAgICBpZiAobiA8IDApIHtcclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgICBpZiAobiA9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKG4gKiBmYWN0b3JpYWxpemUobiAtIDEpKTtcclxufVxyXG5wcmludCBmYWN0b3JpYWxpemUoMTEpO1xyXG5cclxuLy8gc2FtZSBhcyBmYWN0b3JpYWxpemUgYnV0IHdpdGggdGVybmFyeVxyXG4vLyBhbmQgc2hvcnQgZm9ybSBmdW5jdGlvbiBkZWZpbml0aW9uXHJcbkBmYWN0b3JpYWxpemUyKG4pID0+XHJcbiAgICBuIDwgMCA/IC0xIDogKG4gPT0gMCA/IDEgOiAobiAqIGZhY3RvcmlhbGl6ZShuIC0gMSkpKTtcclxuXHJcbnByaW50IGZhY3RvcmlhbGl6ZTIoMTIpO1xyXG5cclxuLy8gbmVzdGVkIGZ1bmN0aW9uIHJldHVybnMgZnVuY3Rpb25cclxuQGFkZChhKSA9PiBAKGIpID0+IEAoYykgPT4gYSArIGIgKyBjO1xyXG5wcmludCBhZGQoMTAwKSgyMCkoMyk7XHJcblxyXG5mdW5jIHN1YihhKSB7XHJcbiAgICByZXR1cm4gZnVuYyAoYikge1xyXG4gICAgICAgIHJldHVybiBmdW5jIChjKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhIC0gYiAtIGM7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbn1cclxucHJpbnQgc3ViKDEwMCkoMTApKDEpO1xyXG5cclxuLy8gd2hpbGUgbG9vcCBhbmQgdGVybmFyeSBvcGVyYXRvclxyXG5sZXQgaSA9IDA7XHJcbndoaWxlIChpIDw9IDQpIHtcclxuICAgIHByaW50IGkgJSAyID8gJ29kZCcgOiAnZXZlbic7XHJcbiAgICBpID0gaSArIDE7XHJcbn1cclxuLy8gbGl0ZXJhbHNcclxudmFyIGxpdGVyYWwgPSB7XHJcbiAgICBmaXJzdG5hbWU6IFwiSm9oblwiLFxyXG4gICAgbGFzdG5hbWU6IFwiRG9lXCIsXHJcbiAgICByZWNvcmRzOiB7XHJcbiAgICAgICAgcHJldjogXCJwcmV2aW91c1wiLFxyXG4gICAgICAgIG5leHQ6IFwibmV4dFwiXHJcbiAgICB9XHJcbn07XHJcbnByaW50IGxpdGVyYWwucmVjb3Jkcy5wcmV2O1xyXG5cclxubGV0IHggPSBbMSwgMjAsIDMwMF07XHJcbmxldCB5ID0gWzEwMCwgeFsxXV07XHJcbnByaW50IHlbMF07XHJcbnkucHVzaCh4KTtcclxueS5uZXdQcm9wZXJ0eSA9IFwiYW55dGhpbmdcIjtcclxucHJpbnQgeS5qb2luKCcsJyk7XHJcbmxldCB6ID0geS5qb2luKCctJyk7XHJcbmA7XHJcbiIsImltcG9ydCB7IEludGVycHJldGVyIH0gZnJvbSAnLi9pbnRlcnByZXRlcic7XHJcbmltcG9ydCB7IFNjb3BlIH0gZnJvbSAnLi9zY29wZSc7XHJcbmltcG9ydCB7IFJldHVybiB9IGZyb20gJy4vcmV0dXJuJztcclxuaW1wb3J0IHsgUHJvdG90eXBlIH0gZnJvbSAnLi9wcm90b3R5cGUnO1xyXG5pbXBvcnQgKiBhcyBTdG10IGZyb20gJy4vc3RhdGVtZW50JztcclxuaW1wb3J0ICogYXMgUnVudGltZSBmcm9tICcuL3J1bnRpbWUnO1xyXG5kZWNsYXJlIHZhciBjb256b2xlOiBDb25zb2xlO1xyXG5cclxuZXhwb3J0IGNsYXNzIEluZGV4UmFuZ2Uge1xyXG4gICAgcHVibGljIHN0YXJ0OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZW5kOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgc3RlcDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyLCBzdGVwOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XHJcbiAgICAgICAgdGhpcy5lbmQgPSBlbmQ7XHJcbiAgICAgICAgdGhpcy5zdGVwID0gc3RlcDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEludGVybmFsRW50aXR5IHtcclxuICAgIHB1YmxpYyBjYWxsOiAoaW50ZXJwcmV0ZXI6IEludGVycHJldGVyLCB0aGl6OiBhbnksIGFyZ3M6IGFueVtdKSA9PiBhbnk7XHJcbiAgICBwdWJsaWMgdG9TdHJpbmc6ICgpID0+IHN0cmluZyA9ICgpID0+ICc8bmF0aXZlIGZ1bmN0aW9uPic7XHJcbiAgICBwdWJsaWMgYXJpdHk6ICgpID0+IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb3RvdHlwZUVudGl0eSB7XHJcbiAgICBwdWJsaWMgcHJvdG90eXBlOiBQcm90b3R5cGU7XHJcbiAgICBwdWJsaWMgcHJvcGVydGllczogTWFwPHN0cmluZywgYW55PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZSA9IG5ldyBQcm90b3R5cGUobnVsbCwgbnVsbCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ2hhc093blByb3BlcnR5JywgUnVudGltZS5oYXNPd25Qcm9wZXJ0eSh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgnc2l6ZScsIFJ1bnRpbWUubGVuZ3RoUHJvcGVydHkpO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ2luaGVyaXQnLCBSdW50aW1lLmluaGVyaXRNZXRob2QodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BlcnRpZXMuaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcGVydGllcy5nZXQoa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvdG90eXBlLmdldChrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnByb3BlcnRpZXMuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnPHByb3RvdHlwZSBlbnRpdHk+JztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENhbGxhYmxlRW50aXR5IGV4dGVuZHMgUHJvdG90eXBlRW50aXR5IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ2ludm9rZScsIFJ1bnRpbWUuaW52b2tlTWV0aG9kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXJpdHkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FsbChpbnRlcnByZXRlcjogSW50ZXJwcmV0ZXIsIHRoaXo6IGFueSwgYXJnczogYW55W10pOiBhbnkgeyByZXR1cm47IH1cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnPGludGVybmFsIGZ1bmN0aW9uPic7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRnVuY3Rpb25FbnRpdHkgZXh0ZW5kcyBDYWxsYWJsZUVudGl0eSB7XHJcbiAgICBwdWJsaWMgZGVjbGFyYXRpb246IFN0bXQuRnVuYztcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGNsb3N1cmU6IFNjb3BlO1xyXG4gICAgcHVibGljIHBhcmVudDogRnVuY3Rpb25FbnRpdHk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZGVjbGFyYXRpb246IFN0bXQuRnVuYywgY2xvc3VyZTogU2NvcGUsIHBhcmVudDogRnVuY3Rpb25FbnRpdHkgPSBudWxsKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmRlY2xhcmF0aW9uID0gZGVjbGFyYXRpb247XHJcbiAgICAgICAgdGhpcy5jbG9zdXJlID0gY2xvc3VyZTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS52YWx1ZXMuc2V0KCdtZXJnZScsIFJ1bnRpbWUubWVyZ2VNZXRob2QodGhpcykpO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ2V4dGVuZCcsIFJ1bnRpbWUuZXh0ZW5kTWV0aG9kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLmRlY2xhcmF0aW9uLm5hbWUubGV4ZW1lO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ25hbWUnLCB0aGlzLm5hbWUpO1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgPCR7dGhpcy5uYW1lfSAgZnVuY3Rpb24+YDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXJpdHkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbi5wYXJhbXMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYWxsKGludGVycHJldGVyOiBJbnRlcnByZXRlciwgdGhpejogYW55LCBhcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgY29uc3Qgc2NvcGUgPSBuZXcgU2NvcGUodGhpcy5jbG9zdXJlKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGVjbGFyYXRpb24ucGFyYW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNjb3BlLmRlZmluZSh0aGlzLmRlY2xhcmF0aW9uLnBhcmFtc1tpXS5sZXhlbWUsIGFyZ3NbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzY29wZS5zZXQoJ3RoaXMnLCB0aGl6KTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpbnRlcnByZXRlci5leGVjdXRlQmxvY2sodGhpcy5kZWNsYXJhdGlvbi5ib2R5LCBzY29wZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIFJldHVybikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGUudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnpvbGUuZXJyb3IoXCJSdW50aW1lIGVycm9yLiBFeGVjdXRpb24gaGFzIGJlZW4gc3RvcHBlZFwiKTtcclxuICAgICAgICAgICAgY29uem9sZS5lcnJvcihlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSdW50aW1lIGVycm9yLiBFeGVjdXRpb24gaGFzIGJlZW4gc3RvcHBlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW5zdGFuY2VFbnRpdHkgZXh0ZW5kcyBDYWxsYWJsZUVudGl0eSB7XHJcbiAgICBwdWJsaWMgaW5zdGFuY2VvZjogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoY29uc3RydWN0OiBGdW5jdGlvbkVudGl0eSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZW9mID0gY29uc3RydWN0LmRlY2xhcmF0aW9uLm5hbWUubGV4ZW1lO1xyXG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZSA9IG5ldyBQcm90b3R5cGUoY29uc3RydWN0LnByb3BlcnRpZXMsIGNvbnN0cnVjdC5wcm90b3R5cGUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnPCcgKyB0aGlzLmluc3RhbmNlb2YgKyBcIiBpbnN0YW5jZT5cIjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0cmluZ0VudGl0eSBleHRlbmRzIFByb3RvdHlwZUVudGl0eSB7XHJcbiAgICBwcml2YXRlIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWVzOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZXM7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgnaW52b2tlJywgUnVudGltZS5pbnZva2VNZXRob2QodGhpcykpO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ3NpemUnLCBSdW50aW1lLnN0cmluZ0xlbmd0aE1ldGhvZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgnc3Vic3RyJywgUnVudGltZS5zdHJpbmdTdWJTdHJNZXRob2QodGhpcykpO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ3NwbGl0JywgUnVudGltZS5zdHJpbmdTcGxpdE1ldGhvZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldChrZXk6IGFueSk6IGFueSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVba2V5XTtcclxuICAgICAgICB9IGVsc2UgaWYgKGtleSBpbnN0YW5jZW9mIEluZGV4UmFuZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmFuZ2Uoa2V5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gc3VwZXIuZ2V0KGtleSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0KGtleTogc3RyaW5nIHwgbnVtYmVyLCB2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgIT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wZXJ0aWVzLnNldChrZXksIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFyaXR5KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhbGwoaW50ZXJwcmV0ZXI6IEludGVycHJldGVyLCB0aGl6OiBhbnksIGFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgICByZXR1cm4gbmV3IFN0cmluZ0VudGl0eShhcmdzWzBdKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJhbmdlKHJhbmdlOiBJbmRleFJhbmdlKTogU3RyaW5nRW50aXR5IHtcclxuICAgICAgICBpZiAocmFuZ2Uuc3RlcCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByYW5nZS5zdGVwID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJhbmdlLmVuZCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByYW5nZS5lbmQgPSByYW5nZS5zdGVwID4gMCA/IHRoaXMudmFsdWUubGVuZ3RoIC0gMSA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyYW5nZS5zdGFydCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByYW5nZS5zdGFydCA9IHJhbmdlLnN0ZXAgPiAwID8gMCA6IHRoaXMudmFsdWUubGVuZ3RoIC0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgICAgICBpZiAocmFuZ2Uuc3RlcCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHJhbmdlLnN0YXJ0OyBpIDw9IHJhbmdlLmVuZDsgaSArPSByYW5nZS5zdGVwKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gdGhpcy52YWx1ZVtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmFuZ2Uuc3RlcCA8IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHJhbmdlLnN0YXJ0OyBpID49IHJhbmdlLmVuZDsgaSArPSByYW5nZS5zdGVwKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gdGhpcy52YWx1ZVtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdHJpbmdFbnRpdHkocmVzdWx0KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBcnJheUVudGl0eSBleHRlbmRzIFByb3RvdHlwZUVudGl0eSB7XHJcbiAgICBwdWJsaWMgdmFsdWVzOiBhbnlbXTtcclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlczogYW55W10pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ2ludm9rZScsIFJ1bnRpbWUuaW52b2tlTWV0aG9kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS52YWx1ZXMuc2V0KCdzaXplJywgUnVudGltZS5hcnJheUxlbmd0aE1ldGhvZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgnam9pbicsIFJ1bnRpbWUuYXJyYXlKb2luTWV0aG9kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS52YWx1ZXMuc2V0KCdwdXNoJywgUnVudGltZS5hcnJheVB1c2hNZXRob2QodGhpcykpO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ3BvcCcsIFJ1bnRpbWUuYXJyYXlQb3BNZXRob2QodGhpcykpO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ2VhY2gnLCBSdW50aW1lLmFycmF5RWFjaE1ldGhvZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgnbWFwJywgUnVudGltZS5hcnJheU1hcE1ldGhvZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgnZmluZCcsIFJ1bnRpbWUuYXJyYXlGaW5kTWV0aG9kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS52YWx1ZXMuc2V0KCdpbmRleE9mJywgUnVudGltZS5hcnJheUluZGV4T2ZNZXRob2QodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoa2V5OiBhbnkpOiBhbnkge1xyXG4gICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlc1trZXldO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5IGluc3RhbmNlb2YgSW5kZXhSYW5nZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yYW5nZShrZXkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdXBlci5nZXQoa2V5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQoa2V5OiBzdHJpbmcgfCBudW1iZXIsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGtleSAhPT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BlcnRpZXMuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByYW5nZShyYW5nZTogSW5kZXhSYW5nZSk6IEFycmF5RW50aXR5IHtcclxuICAgICAgICBpZiAocmFuZ2Uuc3RlcCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByYW5nZS5zdGVwID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJhbmdlLmVuZCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByYW5nZS5lbmQgPSByYW5nZS5zdGVwID4gMCA/IHRoaXMudmFsdWVzLmxlbmd0aCAtIDEgOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmFuZ2Uuc3RhcnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmFuZ2Uuc3RhcnQgPSByYW5nZS5zdGVwID4gMCA/IDAgOiB0aGlzLnZhbHVlcy5sZW5ndGggLSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgaWYgKHJhbmdlLnN0ZXAgPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSByYW5nZS5zdGFydDsgaSA8PSByYW5nZS5lbmQ7IGkgKz0gcmFuZ2Uuc3RlcCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy52YWx1ZXNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyYW5nZS5zdGVwIDwgMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcmFuZ2Uuc3RhcnQ7IGkgPj0gcmFuZ2UuZW5kOyBpICs9IHJhbmdlLnN0ZXApIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMudmFsdWVzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheUVudGl0eShyZXN1bHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhcml0eSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYWxsKGludGVycHJldGVyOiBJbnRlcnByZXRlciwgdGhpejogYW55LCBhcmdzOiBhbnlbXSk6IGFueSB7IHJldHVybjsgfVxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGBbJHt0aGlzLnZhbHVlcy5qb2luKCcsJyl9XWA7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFRva2VuLCBUb2tlblR5cGUgfSBmcm9tICd0b2tlbic7XHJcblxyXG5pbXBvcnQgeyBTdG10IH0gZnJvbSAnc3RhdGVtZW50JztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFeHByIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG4gICAgcHVibGljIGFic3RyYWN0IGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFI7XHJcbn1cclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG5leHBvcnQgaW50ZXJmYWNlIEV4cHJWaXNpdG9yPFI+IHtcclxuICAgIHZpc2l0QXNzaWduRXhwcihleHByOiBBc3NpZ24pOiBSO1xyXG4gICAgdmlzaXRCaW5hcnlFeHByKGV4cHI6IEJpbmFyeSk6IFI7XHJcbiAgICB2aXNpdENhbGxFeHByKGV4cHI6IENhbGwpOiBSO1xyXG4gICAgdmlzaXRFbnRpdHlFeHByKGV4cHI6IEVudGl0eSk6IFI7XHJcbiAgICB2aXNpdEdldEV4cHIoZXhwcjogR2V0KTogUjtcclxuICAgIHZpc2l0R3JvdXBpbmdFeHByKGV4cHI6IEdyb3VwaW5nKTogUjtcclxuICAgIHZpc2l0S2V5RXhwcihleHByOiBLZXkpOiBSO1xyXG4gICAgdmlzaXRMYW1iZGFFeHByKGV4cHI6IExhbWJkYSk6IFI7XHJcbiAgICB2aXNpdExvZ2ljYWxFeHByKGV4cHI6IExvZ2ljYWwpOiBSO1xyXG4gICAgdmlzaXRMaXN0RXhwcihleHByOiBMaXN0KTogUjtcclxuICAgIHZpc2l0TGl0ZXJhbEV4cHIoZXhwcjogTGl0ZXJhbCk6IFI7XHJcbiAgICB2aXNpdE5ld0V4cHIoZXhwcjogTmV3KTogUjtcclxuICAgIHZpc2l0UG9zdGZpeEV4cHIoZXhwcjogUG9zdGZpeCk6IFI7XHJcbiAgICB2aXNpdFJhbmdlRXhwcihleHByOiBSYW5nZSk6IFI7XHJcbiAgICB2aXNpdFNldEV4cHIoZXhwcjogU2V0KTogUjtcclxuICAgIHZpc2l0U3VwZXJFeHByKGV4cHI6IFN1cGVyKTogUjtcclxuICAgIHZpc2l0VGVybmFyeUV4cHIoZXhwcjogVGVybmFyeSk6IFI7XHJcbiAgICB2aXNpdFVuYXJ5RXhwcihleHByOiBVbmFyeSk6IFI7XHJcbiAgICB2aXNpdFZhcmlhYmxlRXhwcihleHByOiBWYXJpYWJsZSk6IFI7XHJcbiAgICB2aXNpdFp0cmluZ0V4cHIoZXhwcjogWnRyaW5nKTogUjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFzc2lnbiBleHRlbmRzIEV4cHIge1xyXG4gICAgcHVibGljIG5hbWU6IFRva2VuO1xyXG4gICAgcHVibGljIHZhbHVlOiBFeHByO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IFRva2VuLCB2YWx1ZTogRXhwcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xyXG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0QXNzaWduRXhwcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ0V4cHIuQXNzaWduJztcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgQmluYXJ5IGV4dGVuZHMgRXhwciB7XHJcbiAgICBwdWJsaWMgbGVmdDogRXhwcjtcclxuICAgIHB1YmxpYyBvcGVyYXRvcjogVG9rZW47XHJcbiAgICBwdWJsaWMgcmlnaHQ6IEV4cHI7XHJcblxyXG4gICAgY29uc3RydWN0b3IobGVmdDogRXhwciwgb3BlcmF0b3I6IFRva2VuLCByaWdodDogRXhwcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcclxuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XHJcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcclxuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEJpbmFyeUV4cHIodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdFeHByLkJpbmFyeSc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENhbGwgZXh0ZW5kcyBFeHByIHtcclxuICAgIHB1YmxpYyBjYWxsZWU6IEV4cHI7XHJcbiAgICBwdWJsaWMgcGFyZW46IFRva2VuO1xyXG4gICAgcHVibGljIGFyZ3M6IEV4cHJbXTtcclxuICAgIHB1YmxpYyB0aGl6OiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FsbGVlOiBFeHByLCBwYXJlbjogVG9rZW4sIGFyZ3M6IEV4cHJbXSwgdGhpejogYW55KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmNhbGxlZSA9IGNhbGxlZTtcclxuICAgICAgICB0aGlzLnBhcmVuID0gcGFyZW47XHJcbiAgICAgICAgdGhpcy5hcmdzID0gYXJncztcclxuICAgICAgICB0aGlzLnRoaXogPSB0aGl6O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcclxuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdENhbGxFeHByKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnRXhwci5DYWxsJztcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgRW50aXR5IGV4dGVuZHMgRXhwciB7XHJcbiAgICBwdWJsaWMgcHJvcGVydGllczogRXhwcltdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM6IEV4cHJbXSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XHJcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRFbnRpdHlFeHByKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnRXhwci5FbnRpdHknO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXQgZXh0ZW5kcyBFeHByIHtcclxuICAgIHB1YmxpYyBlbnRpdHk6IEV4cHI7XHJcbiAgICBwdWJsaWMga2V5OiBFeHByO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVudGl0eTogRXhwciwga2V5OiBFeHByKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmVudGl0eSA9IGVudGl0eTtcclxuICAgICAgICB0aGlzLmtleSA9IGtleTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XHJcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRHZXRFeHByKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnRXhwci5HZXQnO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHcm91cGluZyBleHRlbmRzIEV4cHIge1xyXG4gICAgcHVibGljIGV4cHJlc3Npb246IEV4cHI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXhwcmVzc2lvbjogRXhwcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XHJcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRHcm91cGluZ0V4cHIodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdFeHByLkdyb3VwaW5nJztcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgS2V5IGV4dGVuZHMgRXhwciB7XHJcbiAgICBwdWJsaWMgbmFtZTogVG9rZW47XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogVG9rZW4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xyXG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0S2V5RXhwcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ0V4cHIuS2V5JztcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgTGFtYmRhIGV4dGVuZHMgRXhwciB7XHJcbiAgICBwdWJsaWMgbGFtYmRhOiBTdG10O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxhbWJkYTogU3RtdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5sYW1iZGEgPSBsYW1iZGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xyXG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TGFtYmRhRXhwcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ0V4cHIuTGFtYmRhJztcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgTG9naWNhbCBleHRlbmRzIEV4cHIge1xyXG4gICAgcHVibGljIGxlZnQ6IEV4cHI7XHJcbiAgICBwdWJsaWMgb3BlcmF0b3I6IFRva2VuO1xyXG4gICAgcHVibGljIHJpZ2h0OiBFeHByO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxlZnQ6IEV4cHIsIG9wZXJhdG9yOiBUb2tlbiwgcmlnaHQ6IEV4cHIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XHJcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XHJcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRMb2dpY2FsRXhwcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ0V4cHIuTG9naWNhbCc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIExpc3QgZXh0ZW5kcyBFeHByIHtcclxuICAgIHB1YmxpYyB2YWx1ZTogRXhwcltdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBFeHByW10pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XHJcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRMaXN0RXhwcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ0V4cHIuTGlzdCc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIExpdGVyYWwgZXh0ZW5kcyBFeHByIHtcclxuICAgIHB1YmxpYyB2YWx1ZTogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XHJcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRMaXRlcmFsRXhwcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ0V4cHIuTGl0ZXJhbCc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIE5ldyBleHRlbmRzIEV4cHIge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdDogRXhwcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25zdHJ1Y3Q6IEV4cHIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY29uc3RydWN0ID0gY29uc3RydWN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcclxuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdE5ld0V4cHIodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdFeHByLk5ldyc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFBvc3RmaXggZXh0ZW5kcyBFeHByIHtcclxuICAgIHB1YmxpYyBuYW1lOiBUb2tlbjtcclxuICAgIHB1YmxpYyBpbmNyZW1lbnQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBUb2tlbiwgaW5jcmVtZW50OiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5pbmNyZW1lbnQgPSBpbmNyZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xyXG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UG9zdGZpeEV4cHIodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdFeHByLlBvc3RmaXgnO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBSYW5nZSBleHRlbmRzIEV4cHIge1xyXG4gICAgcHVibGljIHN0YXJ0OiBFeHByO1xyXG4gICAgcHVibGljIGVuZDogRXhwcjtcclxuICAgIHB1YmxpYyBzdGVwOiBFeHByO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHN0YXJ0OiBFeHByLCBlbmQ6IEV4cHIsIHN0ZXA6IEV4cHIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcclxuICAgICAgICB0aGlzLmVuZCA9IGVuZDtcclxuICAgICAgICB0aGlzLnN0ZXAgPSBzdGVwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcclxuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFJhbmdlRXhwcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ0V4cHIuUmFuZ2UnO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTZXQgZXh0ZW5kcyBFeHByIHtcclxuICAgIHB1YmxpYyBlbnRpdHk6IEV4cHI7XHJcbiAgICBwdWJsaWMga2V5OiBFeHByO1xyXG4gICAgcHVibGljIHZhbHVlOiBFeHByO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVudGl0eTogRXhwciwga2V5OiBFeHByLCB2YWx1ZTogRXhwcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5lbnRpdHkgPSBlbnRpdHk7XHJcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcclxuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFNldEV4cHIodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdFeHByLlNldCc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFN1cGVyIGV4dGVuZHMgRXhwciB7XHJcbiAgICBwdWJsaWMgaW5kZXg6IFRva2VuW107XHJcbiAgICBwdWJsaWMgYXJnczogRXhwcltdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGluZGV4OiBUb2tlbltdLCBhcmdzOiBFeHByW10pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLmFyZ3MgPSBhcmdzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcclxuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFN1cGVyRXhwcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ0V4cHIuU3VwZXInO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBUZXJuYXJ5IGV4dGVuZHMgRXhwciB7XHJcbiAgICBwdWJsaWMgY29uZGl0aW9uOiBFeHByO1xyXG4gICAgcHVibGljIHRoZW5FeHByOiBFeHByO1xyXG4gICAgcHVibGljIGVsc2VFeHByOiBFeHByO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmRpdGlvbjogRXhwciwgdGhlbkV4cHI6IEV4cHIsIGVsc2VFeHByOiBFeHByKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcclxuICAgICAgICB0aGlzLnRoZW5FeHByID0gdGhlbkV4cHI7XHJcbiAgICAgICAgdGhpcy5lbHNlRXhwciA9IGVsc2VFeHByO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcclxuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFRlcm5hcnlFeHByKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnRXhwci5UZXJuYXJ5JztcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgVW5hcnkgZXh0ZW5kcyBFeHByIHtcclxuICAgIHB1YmxpYyBvcGVyYXRvcjogVG9rZW47XHJcbiAgICBwdWJsaWMgcmlnaHQ6IEV4cHI7XHJcblxyXG4gICAgY29uc3RydWN0b3Iob3BlcmF0b3I6IFRva2VuLCByaWdodDogRXhwcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XHJcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRVbmFyeUV4cHIodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdFeHByLlVuYXJ5JztcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgVmFyaWFibGUgZXh0ZW5kcyBFeHByIHtcclxuICAgIHB1YmxpYyBuYW1lOiBUb2tlbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBUb2tlbikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XHJcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRWYXJpYWJsZUV4cHIodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdFeHByLlZhcmlhYmxlJztcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgWnRyaW5nIGV4dGVuZHMgRXhwciB7XHJcbiAgICBwdWJsaWMgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xyXG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0WnRyaW5nRXhwcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ0V4cHIuWnRyaW5nJztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTY2FubmVyIH0gZnJvbSAnLi9zY2FubmVyJztcclxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnLi9wYXJzZXInO1xyXG5pbXBvcnQgeyBJbnRlcnByZXRlciB9IGZyb20gJy4vaW50ZXJwcmV0ZXInO1xyXG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnLi9jb25zb2xlJztcclxuaW1wb3J0IHsgRGVtb1NvdXJjZUNvZGUgfSBmcm9tICcuL2RlbW8nO1xyXG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueTtcclxuZGVjbGFyZSB2YXIgZ2xvYmFsOiBhbnk7XHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIGdsb2JhbC53aW5kb3cgPSBnbG9iYWw7XHJcbn1cclxuXHJcbndpbmRvdy5jb256b2xlID0gbmV3IENvbnNvbGUoKTtcclxud2luZG93LmRlbW9Tb3VyY2VDb2RlID0gRGVtb1NvdXJjZUNvZGU7XHJcbndpbmRvdy5leGVjdXRlID0gKHNvdXJjZTogc3RyaW5nKTogQ29uc29sZSA9PiB7XHJcbiAgICByZXR1cm4gKG5ldyBJbnRlcnByZXRlcigpLmludGVycGV0KChuZXcgUGFyc2VyKChuZXcgU2Nhbm5lcihzb3VyY2UpKS5zY2FuKCkpKS5wYXJzZSgpKSk7XHJcbn07XHJcblxyXG53aW5kb3cuYXRzY3JpcHQgPSAoc291cmNlOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiAobmV3IEludGVycHJldGVyKCkuZXZhbCgobmV3IFBhcnNlcigobmV3IFNjYW5uZXIoc291cmNlKSkuc2NhbigpKSkucGFyc2UoKSkpO1xyXG59O1xyXG4iLCJpbXBvcnQgKiBhcyBFeHByIGZyb20gJy4vZXhwcmVzc2lvbic7XHJcbmltcG9ydCAqIGFzIFN0bXQgZnJvbSAnLi9zdGF0ZW1lbnQnO1xyXG5pbXBvcnQgeyBGdW5jdGlvbkVudGl0eSwgQ2FsbGFibGVFbnRpdHksIEludGVybmFsRW50aXR5LCBJbnN0YW5jZUVudGl0eSwgUHJvdG90eXBlRW50aXR5LCBBcnJheUVudGl0eSwgU3RyaW5nRW50aXR5LCBJbmRleFJhbmdlIH0gZnJvbSAnLi9lbnRpdHknO1xyXG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnLi9jb25zb2xlJztcclxuaW1wb3J0IHsgUmV0dXJuIH0gZnJvbSAnLi9yZXR1cm4nO1xyXG5pbXBvcnQgeyBTY29wZSB9IGZyb20gJy4vc2NvcGUnO1xyXG5pbXBvcnQgeyBUb2tlblR5cGUgfSBmcm9tICcuL3Rva2VuJztcclxuaW1wb3J0ICogYXMgUnVudGltZSBmcm9tICcuL3J1bnRpbWUnO1xyXG5pbXBvcnQgeyBQcm90b3R5cGUgfSBmcm9tICcuL3Byb3RvdHlwZSc7XHJcbmRlY2xhcmUgdmFyIGNvbnpvbGU6IENvbnNvbGU7XHJcblxyXG5leHBvcnQgY2xhc3MgSW50ZXJwcmV0ZXIgaW1wbGVtZW50c1xyXG4gICAgRXhwci5FeHByVmlzaXRvcjxhbnk+LFxyXG4gICAgU3RtdC5TdG10VmlzaXRvcjx2b2lkPiB7XHJcbiAgICBwdWJsaWMgZ2xvYmFsID0gbmV3IFNjb3BlKCk7XHJcbiAgICBwcml2YXRlIHNjb3BlID0gdGhpcy5nbG9iYWw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoICkge1xyXG4gICAgICAgIHRoaXMuZ2xvYmFsLmRlZmluZSgnZWNobycsIFJ1bnRpbWUuZWNob0Z1bmN0aW9uKCkpO1xyXG4gICAgICAgIHRoaXMuZ2xvYmFsLmRlZmluZSgncmFuZCcsIFJ1bnRpbWUucmFuZEZ1bmN0aW9uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXZhbHVhdGUoZXhwcjogRXhwci5FeHByKTogYW55IHtcclxuICAgICAgICByZXR1cm4gZXhwci5hY2NlcHQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleGVjdXRlKHN0bXQ6IFN0bXQuU3RtdCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHN0bXQuYWNjZXB0KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBldmFsKHN0YXRlbWVudHM6IFN0bXQuU3RtdFtdKTogYW55IHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlbWVudHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gc3RhdGVtZW50c1tpXTtcclxuICAgICAgICAgICAgaWYgKGkgIT09IHN0YXRlbWVudHMubGVuZ3RoIC0gMSApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhlY3V0ZShzdGF0ZW1lbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShzdGF0ZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcnBldChzdGF0ZW1lbnRzOiBTdG10LlN0bXRbXSk6IGFueSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBzdGF0ZW1lbnQgb2Ygc3RhdGVtZW50cykge1xyXG4gICAgICAgICAgICB0aGlzLmV4ZWN1dGUoc3RhdGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbnRlcnByZXRlckVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnpvbGUubG9nKGBbaW50ZXJwcmV0ZXIgZXJyb3JdID0+ICR7bWVzc2FnZX1gKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRFeHByZXNzaW9uU3RtdChzdG10OiBTdG10LkV4cHJlc3Npb24pOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlKHN0bXQuZXhwcmVzc2lvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0UHJpbnRTdG10KHN0bXQ6IFN0bXQuUHJpbnQpOiBhbnkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuZXZhbHVhdGUoc3RtdC5leHByZXNzaW9uKTtcclxuICAgICAgICB2YWx1ZSA9IHZhbHVlID09PSBudWxsID8gXCJudWxsXCIgOiB2YWx1ZTtcclxuICAgICAgICBjb256b2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdFZhclN0bXQoc3RtdDogU3RtdC5WYXIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgdmFsdWU6IG9iamVjdCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHN0bXQuaW5pdGlhbGl6ZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmV2YWx1YXRlKHN0bXQuaW5pdGlhbGl6ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbkVudGl0eSAmJiB2YWx1ZS5uYW1lID09PSBcImxhbWJkYVwiKSB7XHJcbiAgICAgICAgICAgIHZhbHVlLm5hbWUgPSBzdG10Lm5hbWUubGV4ZW1lO1xyXG4gICAgICAgICAgICB2YWx1ZS5wcm90b3R5cGUuc2V0KCduYW1lJywgdmFsdWUubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdG10LnR5cGUudHlwZSA9PT0gVG9rZW5UeXBlLnZhcikgIHtcclxuICAgICAgICAgICAgdGhpcy5zY29wZS5zZXQoc3RtdC5uYW1lLmxleGVtZSwgdmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcGUuZGVmaW5lKHN0bXQubmFtZS5sZXhlbWUsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0VmFyaWFibGVFeHByKGV4cHI6IEV4cHIuVmFyaWFibGUpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLmdldChleHByLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdFBvc3RmaXhFeHByKGV4cHI6IEV4cHIuUG9zdGZpeCk6IGFueSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNjb3BlLmdldChleHByLm5hbWUpO1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWUgKyBleHByLmluY3JlbWVudDtcclxuICAgICAgICB0aGlzLnNjb3BlLmFzc2lnbihleHByLm5hbWUubGV4ZW1lLCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdExpc3RFeHByKGV4cHI6IEV4cHIuTGlzdCk6IGFueSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVzOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgZXhwcmVzc2lvbiBvZiBleHByLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKHRoaXMuZXZhbHVhdGUoZXhwcmVzc2lvbikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEFycmF5RW50aXR5KHZhbHVlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0WnRyaW5nRXhwcihleHByOiBFeHByLlp0cmluZyk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdHJpbmdFbnRpdHkoZXhwci52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0QXNzaWduRXhwcihleHByOiBFeHByLkFzc2lnbik6IGFueSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmV2YWx1YXRlKGV4cHIudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2NvcGUuYXNzaWduKGV4cHIubmFtZS5sZXhlbWUsIHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0QmluYXJ5RXhwcihleHByOiBFeHByLkJpbmFyeSk6IGFueSB7XHJcbiAgICAgICAgbGV0IGxlZnQgPSB0aGlzLmV2YWx1YXRlKGV4cHIubGVmdCk7XHJcbiAgICAgICAgbGV0IHJpZ2h0ID0gdGhpcy5ldmFsdWF0ZShleHByLnJpZ2h0KTtcclxuICAgICAgICBsZWZ0ID0gbGVmdCBpbnN0YW5jZW9mIFN0cmluZ0VudGl0eSA/IGxlZnQudG9TdHJpbmcoKSA6IGxlZnQ7XHJcbiAgICAgICAgcmlnaHQgPSByaWdodCBpbnN0YW5jZW9mIFN0cmluZ0VudGl0eSA/IHJpZ2h0LnRvU3RyaW5nKCkgOiByaWdodDtcclxuICAgICAgICBzd2l0Y2ggKGV4cHIub3BlcmF0b3IudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5taW51czpcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUubWludXNFcXVhbDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAobGVmdCAtIHJpZ2h0KSBhcyBudW1iZXI7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLnNsYXNoOlxyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5zbGFzaEVxdWFsOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChsZWZ0IC8gcmlnaHQpIGFzIG51bWJlcjtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuc3RhcjpcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuc3RhckVxdWFsOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChsZWZ0ICogcmlnaHQpIGFzIG51bWJlcjtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUucGVyY2VudDpcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUucGVyY2VudEVxdWFsOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChsZWZ0ICUgcmlnaHQpIGFzIG51bWJlcjtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUucGx1czpcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUucGx1c0VxdWFsOlxyXG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTihsZWZ0KSAmJiAhaXNOYU4ocmlnaHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChsZWZ0ICsgcmlnaHQpIGFzIG51bWJlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChsZWZ0IGluc3RhbmNlb2YgQXJyYXlFbnRpdHkgJiYgcmlnaHQgaW5zdGFuY2VvZiBBcnJheUVudGl0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQXJyYXlFbnRpdHkobGVmdC52YWx1ZXMuY29uY2F0KHJpZ2h0LnZhbHVlcykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTdHJpbmdFbnRpdHkobGVmdCBhcyBzdHJpbmcgKyByaWdodCBhcyBzdHJpbmcpO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5waXBlOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChsZWZ0IHwgcmlnaHQpIGFzIG51bWJlcjtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuY2FyZXQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGxlZnQgXiByaWdodCkgYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5ncmVhdGVyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxudW1iZXI+IGxlZnQgPiA8bnVtYmVyPiByaWdodDtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuZ3JlYXRlckVxdWFsOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxudW1iZXI+IGxlZnQgPj0gPG51bWJlcj4gcmlnaHQ7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLmxlc3M6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPG51bWJlcj4gbGVmdCA8IDxudW1iZXI+IHJpZ2h0O1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5sZXNzRXF1YWw6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPG51bWJlcj4gbGVmdCA8PSA8bnVtYmVyPiByaWdodDtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuZXF1YWxFcXVhbDpcclxuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQgPT0gcmlnaHQ7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLmVxdWFsRXF1YWxFcXVhbDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0ID09PSByaWdodDtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuYmFuZ0VxdWFsOlxyXG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdCAhPSByaWdodDtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuYmFuZ0VxdWFsRXF1YWw6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdCAhPT0gcmlnaHQ7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb256b2xlLndhcm4oZXhwcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8gdW5yZWFjaGFibGVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRMb2dpY2FsRXhwcihleHByOiBFeHByLkxvZ2ljYWwpOiBhbnkge1xyXG4gICAgICAgIGlmIChleHByLm9wZXJhdG9yLnR5cGUgPT09IFRva2VuVHlwZS5hbmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGUoZXhwci5sZWZ0KSAmJiB0aGlzLmV2YWx1YXRlKGV4cHIucmlnaHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlKGV4cHIubGVmdCkgfHwgdGhpcy5ldmFsdWF0ZShleHByLnJpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0VGVybmFyeUV4cHIoZXhwcjogRXhwci5UZXJuYXJ5KTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZShleHByLmNvbmRpdGlvbikgPyB0aGlzLmV2YWx1YXRlKGV4cHIudGhlbkV4cHIpIDogdGhpcy5ldmFsdWF0ZShleHByLmVsc2VFeHByKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRHcm91cGluZ0V4cHIoZXhwcjogRXhwci5Hcm91cGluZyk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGUoZXhwci5leHByZXNzaW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRMaXRlcmFsRXhwcihleHByOiBFeHByLkxpdGVyYWwpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBleHByLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdFVuYXJ5RXhwcihleHByOiBFeHByLlVuYXJ5KTogYW55IHtcclxuICAgICAgICBjb25zdCByaWdodCA9IHRoaXMuZXZhbHVhdGUoZXhwci5yaWdodCk7XHJcbiAgICAgICAgc3dpdGNoIChleHByLm9wZXJhdG9yLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUubWludXM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gLU51bWJlcihyaWdodCk7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLmJhbmc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIUJvb2xlYW4ocmlnaHQpO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5kb2xsYXI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmlnaHQubGVuZ3RoO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5wbHVzUGx1czpcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluY1ZhbHVlID0gTnVtYmVyKHJpZ2h0KSArIDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3BlLmFzc2lnbigoPEV4cHIuVmFyaWFibGU+IGV4cHIucmlnaHQpLm5hbWUubGV4ZW1lLCBpbmNWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5jVmFsdWU7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLm1pbnVzTWludXM6XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWNWYWx1ZSA9IE51bWJlcihyaWdodCkgLSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY29wZS5hc3NpZ24oKDxFeHByLlZhcmlhYmxlPiBleHByLnJpZ2h0KS5uYW1lLmxleGVtZSwgZGVjVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY1ZhbHVlO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7IC8vIHNob3VsZCBiZSB1bnJlYWNoYWJsZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXhlY3V0ZUJsb2NrKHN0YXRlbWVudHM6IFN0bXQuU3RtdFtdLCBuZXh0U2NvcGU6IFNjb3BlKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFNjb3BlID0gdGhpcy5zY29wZTtcclxuICAgICAgICB0aGlzLnNjb3BlID0gbmV4dFNjb3BlO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc3RhdGVtZW50IG9mIHN0YXRlbWVudHMpIHtcclxuICAgICAgICAgICAgdGhpcy5leGVjdXRlKHN0YXRlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBjdXJyZW50U2NvcGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0QmxvY2tTdG10KHN0bXQ6IFN0bXQuQmxvY2spOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmV4ZWN1dGVCbG9jayhzdG10LnN0YXRlbWVudHMsIG5ldyBTY29wZSh0aGlzLnNjb3BlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0SWZTdG10KHN0bXQ6IFN0bXQuSWYpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5ldmFsdWF0ZShzdG10LmNvbmRpdGlvbikpIHtcclxuICAgICAgICAgICAgdGhpcy5leGVjdXRlKHN0bXQudGhlblN0bXQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc3RtdC5lbHNlU3RtdCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmV4ZWN1dGUoc3RtdC5lbHNlU3RtdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdFdoaWxlU3RtdChzdG10OiBTdG10LldoaWxlKTogdm9pZCB7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuZXZhbHVhdGUoc3RtdC5jb25kaXRpb24pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhlY3V0ZShzdG10Lmxvb3ApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXREb1doaWxlU3RtdChzdG10OiBTdG10LkRvV2hpbGUpOiB2b2lkIHtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhlY3V0ZShzdG10Lmxvb3ApO1xyXG4gICAgICAgIH0gd2hpbGUgKHRoaXMuZXZhbHVhdGUoc3RtdC5jb25kaXRpb24pKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRDYWxsRXhwcihleHByOiBFeHByLkNhbGwpOiBvYmplY3Qge1xyXG4gICAgICAgIGNvbnN0IGNhbGxlZSA9IHRoaXMuZXZhbHVhdGUoZXhwci5jYWxsZWUpO1xyXG4gICAgICAgIGNvbnN0IGFyZ3MgPSBbXTtcclxuICAgICAgICBsZXQgdGhpejogYW55ID0gbnVsbDtcclxuICAgICAgICBpZiAoZXhwci5jYWxsZWUgaW5zdGFuY2VvZiBFeHByLkdldCkge1xyXG4gICAgICAgICAgICB0aGl6ID0gdGhpcy5ldmFsdWF0ZShleHByLmNhbGxlZS5lbnRpdHkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXhwci50aGl6ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXogPSBleHByLnRoaXo7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgYXJndW1lbnQgb2YgZXhwci5hcmdzKSB7XHJcbiAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmV2YWx1YXRlKGFyZ3VtZW50KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIShjYWxsZWUgaW5zdGFuY2VvZiBDYWxsYWJsZUVudGl0eSkgJiZcclxuICAgICAgICAgICAgIShjYWxsZWUgaW5zdGFuY2VvZiBJbnRlcm5hbEVudGl0eSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5pbnRlcnByZXRlckVycm9yKGAke2NhbGxlZX0gaXMgbm90IGEgZnVuY3Rpb25gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZnVuYyA9IGNhbGxlZSBhcyBDYWxsYWJsZUVudGl0eTtcclxuICAgICAgICBpZiAoYXJncy5sZW5ndGggIT09IGZ1bmMuYXJpdHkoKSAmJiBmdW5jLmFyaXR5KCkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnpvbGUud2FybihgV2FybmluZyBhdCAoJHtleHByLnBhcmVuLmxpbmV9KTogJHtjYWxsZWV9IG1pc21hdGNoZWQgYXJndW1lbnQgbGVuZ3RoOyBcXG4gRXhwZWN0ZWQgJHtmdW5jLmFyaXR5KCl9IGJ1dCBnb3QgJHthcmdzLmxlbmd0aH0gYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmdW5jLmNhbGwodGhpcywgdGhpeiwgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0U3VwZXJFeHByKGV4cHI6IEV4cHIuU3VwZXIpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IHRoaXo6IEluc3RhbmNlRW50aXR5ID0gdGhpcy5zY29wZS5maXJzdCgndGhpcycpO1xyXG4gICAgICAgIGlmICghdGhpeikge1xyXG4gICAgICAgICAgICBjb256b2xlLmVycm9yKGBzdXBlciBjYW4gb25seSBiZSBjYWxsZWQgb24gY2hpbGQgaW5zdGFuY2VzYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNsYXp6OiBGdW5jdGlvbkVudGl0eSA9IHRoaXMuc2NvcGUub2J0YWluKHRoaXouaW5zdGFuY2VvZik7XHJcbiAgICAgICAgaWYgKCFjbGF6eikge1xyXG4gICAgICAgICAgICBjb256b2xlLmVycm9yKGAke3RoaXp9IGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBhbiBlbnRpdHlgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGFyZW50OiBGdW5jdGlvbkVudGl0eSA9IGNsYXp6LnBhcmVudDtcclxuICAgICAgICBpZiAoIXBhcmVudCkge1xyXG4gICAgICAgICAgICBjb256b2xlLmVycm9yKGAke3RoaXp9IGVudGl0eSBoYXMgbm8gcGFyZW50YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBtZXRob2Q6IEZ1bmN0aW9uRW50aXR5ID0gbnVsbDtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBleHByLmluZGV4KSB7XHJcbiAgICAgICAgICAgIG1ldGhvZCA9IHBhcmVudC5nZXQoa2V5LmxleGVtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGFyZ3VtZW50IG9mIGV4cHIuYXJncykge1xyXG4gICAgICAgICAgICBhcmdzLnB1c2godGhpcy5ldmFsdWF0ZShhcmd1bWVudCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWV0aG9kKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZXRob2QuY2FsbCh0aGlzLCB0aGl6LCBhcmdzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50LmNhbGwodGhpcywgdGhpeiwgYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdE5ld0V4cHIoZXhwcjogRXhwci5OZXcpOiBvYmplY3Qge1xyXG4gICAgICAgIGNvbnN0IGNvbnN0cnVjdCA9IGV4cHIuY29uc3RydWN0IGFzIEV4cHIuQ2FsbDtcclxuICAgICAgICBjb25zdCBjYWxsZWUgPSB0aGlzLmV2YWx1YXRlKGNvbnN0cnVjdC5jYWxsZWUpO1xyXG4gICAgICAgIGNvbnN0IG5ld0luc3RhbmNlID0gbmV3IEluc3RhbmNlRW50aXR5KGNhbGxlZSk7XHJcbiAgICAgICAgY29uc3RydWN0LnRoaXogPSBuZXdJbnN0YW5jZTtcclxuICAgICAgICB0aGlzLmV2YWx1YXRlKGNvbnN0cnVjdCk7XHJcbiAgICAgICAgcmV0dXJuIG5ld0luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdEVudGl0eUV4cHIoZXhwcjogRXhwci5FbnRpdHkpIHtcclxuICAgICAgICBjb25zdCBlbnRpdHkgPSBuZXcgUHJvdG90eXBlRW50aXR5KCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiBleHByLnByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ICA9IHRoaXMuZXZhbHVhdGUoKHByb3BlcnR5IGFzIEV4cHIuU2V0KS5rZXkpO1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZXZhbHVhdGUoKHByb3BlcnR5IGFzIEV4cHIuU2V0KS52YWx1ZSk7XHJcbiAgICAgICAgICAgIGVudGl0eS5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbnRpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0S2V5RXhwcihleHByOiBFeHByLktleSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGV4cHIubmFtZS5sZXhlbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0R2V0RXhwcihleHByOiBFeHByLkdldCk6IGFueSB7XHJcbiAgICAgICAgY29uc3QgZW50aXR5ID0gdGhpcy5ldmFsdWF0ZShleHByLmVudGl0eSk7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5ldmFsdWF0ZShleHByLmtleSk7XHJcbiAgICAgICAgaWYgKGVudGl0eSBpbnN0YW5jZW9mIFByb3RvdHlwZUVudGl0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZW50aXR5LmdldChrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmludGVycHJldGVyRXJyb3IoYCR7ZW50aXR5fS4ke2tleX06IG9ubHkgaW5zdGFuY2VzIGhhdmUgcHJvcGVydGllc2ApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdFNldEV4cHIoZXhwcjogRXhwci5TZXQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBlbnRpdHkgPSB0aGlzLmV2YWx1YXRlKGV4cHIuZW50aXR5KTtcclxuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmV2YWx1YXRlKGV4cHIua2V5KTtcclxuICAgICAgICBpZiAoIShlbnRpdHkgaW5zdGFuY2VvZiBQcm90b3R5cGVFbnRpdHkpKSB7XHJcbiAgICAgICAgICAgIGNvbnpvbGUud2FybihgJHtlbnRpdHl9IGlzIG5vdCBhIHJ1bnRpbWUgT2JqZWN0YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5ldmFsdWF0ZShleHByLnZhbHVlKTtcclxuICAgICAgICAoZW50aXR5IGFzIFByb3RvdHlwZUVudGl0eSkuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRGdW5jU3RtdChzdG10OiBTdG10LkZ1bmMpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IGZ1bmM6IEZ1bmN0aW9uRW50aXR5ID0gbmV3IEZ1bmN0aW9uRW50aXR5KHN0bXQsIHRoaXMuc2NvcGUpO1xyXG4gICAgICAgIHRoaXMuc2NvcGUuZGVmaW5lKHN0bXQubmFtZS5sZXhlbWUsIGZ1bmMpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdENsYXNzU3RtdChzdG10OiBTdG10LkNsYXNzKTogYW55IHtcclxuICAgICAgICBsZXQgY29uc3RydWN0ID0gc3RtdC5tZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUubGV4ZW1lID09PSBcImNvbnN0cnVjdG9yXCIpO1xyXG4gICAgICAgIGNvbnN0IG1ldGhvZHMgPSBzdG10Lm1ldGhvZHMuZmlsdGVyKChtZXRob2QpID0+IG1ldGhvZC5uYW1lLmxleGVtZSAhPT0gXCJjb25zdHJ1Y3RvclwiKTtcclxuXHJcbiAgICAgICAgaWYgKCFjb25zdHJ1Y3QpIHtcclxuICAgICAgICAgICAgY29uc3RydWN0ID0gbmV3IFN0bXQuRnVuYyhzdG10Lm5hbWUsIFtdLCBbXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3RydWN0Lm5hbWUgPSBzdG10Lm5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBmdW5jOiBGdW5jdGlvbkVudGl0eSA9IG5ldyBGdW5jdGlvbkVudGl0eShjb25zdHJ1Y3QsIHRoaXMuc2NvcGUpO1xyXG4gICAgICAgIGxldCBwYXJlbnQ6IEZ1bmN0aW9uRW50aXR5ID0gbnVsbDtcclxuICAgICAgICBpZiAoc3RtdC5wYXJlbnQpIHtcclxuICAgICAgICAgICAgcGFyZW50ID0gdGhpcy5zY29wZS5nZXQoc3RtdC5wYXJlbnQpO1xyXG4gICAgICAgICAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jLnBhcmVudCA9IHBhcmVudDtcclxuICAgICAgICAgICAgICAgIGZ1bmMucHJvdG90eXBlID0gbmV3IFByb3RvdHlwZShwYXJlbnQucHJvcGVydGllcywgcGFyZW50LnByb3RvdHlwZSwgZnVuYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBtZXRob2Qgb2YgbWV0aG9kcykge1xyXG4gICAgICAgICAgICBmdW5jLnByb3BlcnRpZXMuc2V0KG1ldGhvZC5uYW1lLmxleGVtZSwgbmV3IEZ1bmN0aW9uRW50aXR5KG1ldGhvZCwgdGhpcy5zY29wZSwgcGFyZW50KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNjb3BlLnNldChzdG10Lm5hbWUubGV4ZW1lLCBmdW5jKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRMYW1iZGFFeHByKGV4cHI6IEV4cHIuTGFtYmRhKTogb2JqZWN0IHtcclxuICAgICAgICBjb25zdCBsYW1iZGE6IFN0bXQuRnVuYyA9IGV4cHIubGFtYmRhIGFzIFN0bXQuRnVuYztcclxuICAgICAgICBjb25zdCBmdW5jOiBGdW5jdGlvbkVudGl0eSA9IG5ldyBGdW5jdGlvbkVudGl0eShsYW1iZGEsIHRoaXMuc2NvcGUpO1xyXG4gICAgICAgIHJldHVybiBmdW5jO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdFJldHVyblN0bXQoc3RtdDogU3RtdC5SZXR1cm4pOiBhbnkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHN0bXQudmFsdWUpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmV2YWx1YXRlKHN0bXQudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgUmV0dXJuKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRSYW5nZUV4cHIoZXhwcjogRXhwci5SYW5nZSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBJbmRleFJhbmdlKFxyXG4gICAgICAgICAgICBleHByLnN0YXJ0ID8gdGhpcy5ldmFsdWF0ZShleHByLnN0YXJ0KSA6IG51bGwsXHJcbiAgICAgICAgICAgIGV4cHIuZW5kID8gdGhpcy5ldmFsdWF0ZShleHByLmVuZCkgOiBudWxsLFxyXG4gICAgICAgICAgICBleHByLnN0ZXAgPyB0aGlzLmV2YWx1YXRlKGV4cHIuc3RlcCkgOiBudWxsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgVG9rZW4sIFRva2VuVHlwZSB9IGZyb20gJy4vdG9rZW4nO1xyXG5pbXBvcnQgKiBhcyBFeHByIGZyb20gJy4vZXhwcmVzc2lvbic7XHJcbmltcG9ydCAqIGFzIFN0bXQgZnJvbSAnLi9zdGF0ZW1lbnQnO1xyXG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnLi9jb25zb2xlJztcclxuZGVjbGFyZSB2YXIgY29uem9sZTogQ29uc29sZTtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJzZXIge1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50ID0gMDtcclxuICAgIHByaXZhdGUgdG9rZW5zOiBUb2tlbltdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRva2VuczogVG9rZW5bXSkge1xyXG4gICAgICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwYXJzZSgpOiBTdG10LlN0bXRbXSB7XHJcbiAgICAgICBjb25zdCBzdGF0ZW1lbnRzOiBTdG10LlN0bXRbXSA9IFtdO1xyXG4gICAgICAgd2hpbGUgKCF0aGlzLmVvZigpKSB7XHJcbiAgICAgICAgICAgc3RhdGVtZW50cy5wdXNoKHRoaXMuZGVjbGFyYXRpb24oKSk7XHJcbiAgICAgICB9XHJcbiAgICAgICByZXR1cm4gc3RhdGVtZW50cztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1hdGNoKC4uLnR5cGVzOiBUb2tlblR5cGVbXSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgdHlwZSBvZiB0eXBlcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGVjayh0eXBlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZHZhbmNlKCk6IFRva2VuIHtcclxuICAgICAgICBpZiAoIXRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwZWVrKCk6IFRva2VuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5jdXJyZW50XTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByZXZpb3VzKCk6IFRva2VuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5jdXJyZW50IC0gMV07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVjayh0eXBlOiBUb2tlblR5cGUpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wZWVrKCkudHlwZSA9PT0gdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVvZigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGVjayhUb2tlblR5cGUuZW9mKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbnN1bWUodHlwZTogVG9rZW5UeXBlLCBtZXNzYWdlOiBzdHJpbmcpOiBUb2tlbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2sodHlwZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VFcnJvcih0aGlzLnByZXZpb3VzKCksIG1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXh0cmFTZW1pY29sb24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2ggPSB0aGlzLm1hdGNoKFRva2VuVHlwZS5zZW1pY29sb24pO1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrKFRva2VuVHlwZS5zZW1pY29sb24pKSB7XHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmNoZWNrKFRva2VuVHlwZS5zZW1pY29sb24pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLnNlbWljb2xvbiwgJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYXRjaDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBhcnNlRXJyb3IodG9rZW46IFRva2VuLCBtZXNzYWdlOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgIGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuZW9mKSB7XHJcbiAgICAgICAgICAgIGNvbnpvbGUuZXJyb3IoYHBhcnNlIGVycm9yIGF0ICgke3Rva2VuLmxpbmV9KTogYXQgZW5kICR7bWVzc2FnZX1gKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb256b2xlLmVycm9yKGBbbGluZSAoJHt0b2tlbi5saW5lfSkgcGFyc2UgZXJyb3IgYXQgXCIke3Rva2VuLmxleGVtZX1cIl0gPT4gJHttZXNzYWdlfWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yICgnRXJyb3IgcGFyc2luZycpO1xyXG4gICAgICAgIC8vIHVucmVhY2hhYmxlIGNvZGVcclxuICAgICAgICByZXR1cm4gbmV3IFRva2VuKCdwYW5pYycsICdlcnJvcicsICdlcnJvcicsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyc2VXYXJuaW5nKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgIGNvbnpvbGUud2FybihgW2xpbmUgKCR7dG9rZW4ubGluZX0pIHBhcnNlIHdhcm5pbmcgYXQgXCIke3Rva2VuLmxleGVtZX1cIl0gPT4gJHttZXNzYWdlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3luY2hyb25pemUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcblxyXG4gICAgICAgIHdoaWxlICghdGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2aW91cygpLnR5cGUgPT09IFRva2VuVHlwZS5zZW1pY29sb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnBlZWsoKS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5jbGFzczpcclxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLmZ1bmN0aW9uOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUudmFyOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuZm9yOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuaWY6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS53aGlsZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLnByaW50OlxyXG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUucmV0dXJuOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkZWNsYXJhdGlvbigpOiBTdG10LlN0bXQge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5jbGFzcykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNsYXNzRGVjbGFyYXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuZnVuY3Rpb24pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mdW5jRGVjbGFyYXRpb24oXCJmdW5jdGlvblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUudmFyLCBUb2tlblR5cGUubGV0KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFyRGVjbGFyYXRpb24odGhpcy5wcmV2aW91cygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIHBhcnNpbmcuIEV4ZWN1dGlvbiBoYXMgYmVlbiBzdG9wcGVkJyk7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IHJlZW5hYmxlIHN5bmNocm9uaXplXHJcbiAgICAgICAgICAgIC8vIHRoaXMuc3luY2hyb25pemUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xhc3NEZWNsYXJhdGlvbigpOiBTdG10LkNsYXNzIHtcclxuICAgICAgICBpZiAodGhpcy5jaGVjayhUb2tlblR5cGUuZnVuY3Rpb24pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuZnVuY3Rpb24sICcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbmFtZTogVG9rZW4gPSB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLmlkZW50aWZpZXIsIGBFeHBlY3RlZCBhIGNsYXNzIG5hbWVgKTtcclxuICAgICAgICBsZXQgcGFyZW50OiBUb2tlbiA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmV4dGVuZHMpKSB7XHJcbiAgICAgICAgICAgIHBhcmVudCAgPSB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLmlkZW50aWZpZXIsIGBFeHBlY3RlZCBhIHBhcmVudCBuYW1lYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUubGVmdEJyYWNlLCBgRXhwZWN0ZWQgXCJ7XCIgYWZ0ZXIgY2xhc3MgbmFtZWApO1xyXG4gICAgICAgIGNvbnN0IG1ldGhvZHM6IFN0bXQuRnVuY1tdID0gW107XHJcblxyXG4gICAgICAgIHdoaWxlICghdGhpcy5jaGVjayhUb2tlblR5cGUucmlnaHRCcmFjZSkgJiYgIXRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2soVG9rZW5UeXBlLmZ1bmN0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5mdW5jdGlvbiwgJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1ldGhvZHMucHVzaCh0aGlzLmZ1bmNEZWNsYXJhdGlvbihcIm1ldGhvZFwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLnJpZ2h0QnJhY2UsIGBFeHBlY3RlZCBcIn1cIiBhZnRlciBjbGFzcyBcIiR7bmFtZS5saXRlcmFsfVwiIG1ldGhvZHNgKTtcclxuICAgICAgICBpZiAodGhpcy5leHRyYVNlbWljb2xvbigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyc2VXYXJuaW5nKGBVbm5lY2Vzc2FyeSBzZW1pY29sb24gYWZ0ZXIgY2xhc3MgJHtuYW1lLmxleGVtZX0gZGVjbGFyYXRpb25gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdG10LkNsYXNzKG5hbWUsIHBhcmVudCwgbWV0aG9kcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmdW5jRGVjbGFyYXRpb24oa2luZDogc3RyaW5nKTogU3RtdC5GdW5jIHtcclxuICAgICAgICBjb25zdCBuYW1lOiBUb2tlbiA9IHRoaXMuY29uc3VtZShUb2tlblR5cGUuaWRlbnRpZmllciwgYEV4cGVjdGVkIGEgJHtraW5kfSBuYW1lYCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZnVuY1BhcmFtc0JvZHkobmFtZSwga2luZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmdW5jUGFyYW1zKCk6IFRva2VuW10ge1xyXG4gICAgICAgIGNvbnN0IHBhcmFtczogVG9rZW5bXSA9IFtdO1xyXG4gICAgICAgIGlmICghdGhpcy5jaGVjayhUb2tlblR5cGUucmlnaHRQYXJlbikpIHtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5sZW5ndGggPj0gMjU1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJzZUVycm9yKHRoaXMucGVlaygpLCBgUGFyYW1ldGVyIGNvdW50IGV4Y2VlZHMgMjU1YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMucHVzaCh0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLmlkZW50aWZpZXIsIGBFeHBlY3RlZCBhIHBhcmFtZXRlciBuYW1lYCkpO1xyXG4gICAgICAgICAgICB9IHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5jb21tYSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLnJpZ2h0UGFyZW4sIGBFeHBlY3QgXCIpXCIgYWZ0ZXIgcGFyYW1ldGVyc2ApO1xyXG4gICAgICAgIHJldHVybiBwYXJhbXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmdW5jUGFyYW1zQm9keShuYW1lOiBUb2tlbiwga2luZDogc3RyaW5nKTogU3RtdC5GdW5jIHtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLmxlZnRQYXJlbiwgYEV4cGVjdGVkIFwiKFwiIGFmdGVyICR7a2luZH1gKTtcclxuICAgICAgICBjb25zdCBwYXJhbXM6IFRva2VuW10gPSB0aGlzLmZ1bmNQYXJhbXMoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmxlZnRCcmFjZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgYm9keTogU3RtdC5TdG10W10gPSB0aGlzLmJsb2NrKCk7XHJcbiAgICAgICAgICAgIGlmIChuYW1lLnR5cGUgIT09IFRva2VuVHlwZS5sYW1iZGEgJiYgdGhpcy5leHRyYVNlbWljb2xvbigpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnNlV2FybmluZyhgVW5uZWNlc3Nhcnkgc2VtaWNvbG9uIGFmdGVyIGZ1bmN0aW9uICR7bmFtZS5sZXhlbWV9IGRlY2xhcmF0aW9uYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdG10LkZ1bmMobmFtZSwgcGFyYW1zLCBib2R5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5hcnJvdykpIHtcclxuICAgICAgICAgICAgY29uc3QgYm9keTogU3RtdC5TdG10W10gPSBbXTtcclxuICAgICAgICAgICAgbGV0IGFycm93OiBFeHByLkV4cHI7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleXdvcmQ6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLnNlbWljb2xvbikpIHtcclxuICAgICAgICAgICAgICAgIGFycm93ID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tYXRjaChUb2tlblR5cGUuc2VtaWNvbG9uKTtcclxuICAgICAgICAgICAgYm9keS5wdXNoKG5ldyBTdG10LlJldHVybihrZXl3b3JkLCBhcnJvdykpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFN0bXQuRnVuYyhuYW1lLCBwYXJhbXMsIGJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLmxlZnRCcmFjZSwgYEV4cGVjdCBcIntcIiBiZWZvcmUgJHtraW5kfSBib2R5YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB2YXJEZWNsYXJhdGlvbih0eXBlOiBUb2tlbik6IFN0bXQuU3RtdCB7XHJcbiAgICAgICAgY29uc3QgbmFtZTogVG9rZW4gPSB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLmlkZW50aWZpZXIsIGBFeHBlY3RlZCBhIHZhcmlhYmxlIG5hbWVgKTtcclxuICAgICAgICBsZXQgaW5pdGlhbGl6ZXI6IEV4cHIuRXhwciAgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5lcXVhbCkpIHtcclxuICAgICAgICAgICAgaW5pdGlhbGl6ZXIgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5zZW1pY29sb24sIGBFeHBlY3RlZCBzZW1pY29sb24gXCI7XCIgYWZ0ZXIgYSB2YWx1ZS5gKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdG10LlZhcihuYW1lLCB0eXBlLCBpbml0aWFsaXplcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0ZW1lbnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmlmKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pZlN0YXRlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUucHJpbnQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByaW50U3RhdGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5kbykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZG9XaGlsZVN0YXRlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUud2hpbGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndoaWxlU3RhdGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5mb3IpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvclN0YXRlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUubGVmdEJyYWNlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFN0bXQuQmxvY2sodGhpcy5ibG9jaygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLnJldHVybikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmV0dXJuU3RhdGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmV4cHJlc3Npb25TdGF0ZW1lbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlmU3RhdGVtZW50KCk6IFN0bXQuU3RtdCB7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5sZWZ0UGFyZW4sIGBFeHBlY3RlZCBcIihcIiBhZnRlciBhbiBpZmApO1xyXG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbjogRXhwci5FeHByID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5yaWdodFBhcmVuLCBgRXhwZWN0ZWQgXCIpXCIgYWZ0ZXIgaWYgY29uZGl0aW9uYCk7XHJcbiAgICAgICAgY29uc3QgdGhlblN0bXQ6IFN0bXQuU3RtdCA9IHRoaXMuc3RhdGVtZW50KCk7XHJcbiAgICAgICAgbGV0IGVsc2VTdG10OiBTdG10LlN0bXQgPSAgbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuZWxzZSkpIHtcclxuICAgICAgICAgICAgZWxzZVN0bXQgPSB0aGlzLnN0YXRlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFN0bXQuSWYoY29uZGl0aW9uLCB0aGVuU3RtdCwgZWxzZVN0bXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgd2hpbGVTdGF0ZW1lbnQoKTogU3RtdC5TdG10IHtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLmxlZnRQYXJlbiwgYEV4cGVjdGVkIFwiKFwiIGFmdGVyIGEgd2hpbGUgc3RhdGVtZW50YCk7XHJcbiAgICAgICAgY29uc3QgY29uZGl0aW9uOiBFeHByLkV4cHIgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLnJpZ2h0UGFyZW4sIGBFeHBlY3RlZCBcIilcIiBhZnRlciB3aGlsZSBjb25kaXRpb25gKTtcclxuICAgICAgICBjb25zdCBsb29wOiBTdG10LlN0bXQgPSB0aGlzLnN0YXRlbWVudCgpO1xyXG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5XaGlsZShjb25kaXRpb24sIGxvb3ApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZm9yU3RhdGVtZW50KCk6IFN0bXQuU3RtdCB7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5sZWZ0UGFyZW4sIGBFeHBlY3RlZCBcIihcIiBhZnRlciBhIGZvciBzdGF0ZW1lbnRgKTtcclxuXHJcbiAgICAgICAgbGV0IGluaXRpYWxpemVyOiBTdG10LlN0bXQ7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLnNlbWljb2xvbikpIHtcclxuICAgICAgICAgICAgaW5pdGlhbGl6ZXIgPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUudmFyLCBUb2tlblR5cGUubGV0KSkge1xyXG4gICAgICAgICAgICBpbml0aWFsaXplciA9IHRoaXMudmFyRGVjbGFyYXRpb24odGhpcy5wcmV2aW91cygpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbml0aWFsaXplciA9IHRoaXMuZXhwcmVzc2lvblN0YXRlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY29uZGl0aW9uOiBFeHByLkV4cHI7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5zZW1pY29sb24pKSB7XHJcbiAgICAgICAgICAgIGNvbmRpdGlvbiA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLnNlbWljb2xvbiwgYEV4cGVjdGVkIFwiO1wiIGFmdGVyIGxvb3AgY29uZGl0aW9uYCk7XHJcbiAgICAgICAgbGV0IGluY3JlbWVudDogRXhwci5FeHByO1xyXG4gICAgICAgIGlmICghdGhpcy5jaGVjayhUb2tlblR5cGUucmlnaHRQYXJlbikpIHtcclxuICAgICAgICAgICAgaW5jcmVtZW50ID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUucmlnaHRQYXJlbiwgYEV4cGVjdGVkIFwiO1wiIGFmdGVyIGxvb3AgY29uZGl0aW9uYCk7XHJcbiAgICAgICAgbGV0IGJvZHk6IFN0bXQuU3RtdCA9IHRoaXMuc3RhdGVtZW50KCk7XHJcbiAgICAgICAgaWYgKGluY3JlbWVudCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBib2R5ID0gbmV3IFN0bXQuQmxvY2soW1xyXG4gICAgICAgICAgICAgICAgYm9keSxcclxuICAgICAgICAgICAgICAgIG5ldyBTdG10LkV4cHJlc3Npb24oaW5jcmVtZW50KVxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbmRpdGlvbiA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25kaXRpb24gPSBuZXcgRXhwci5MaXRlcmFsKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib2R5ID0gbmV3IFN0bXQuV2hpbGUoY29uZGl0aW9uLCBib2R5KTtcclxuICAgICAgICBpZiAoaW5pdGlhbGl6ZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgYm9keSA9IG5ldyBTdG10LkJsb2NrKFtcclxuICAgICAgICAgICAgICAgIGluaXRpYWxpemVyLFxyXG4gICAgICAgICAgICAgICAgYm9keVxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJvZHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkb1doaWxlU3RhdGVtZW50KCk6IFN0bXQuU3RtdCB7XHJcbiAgICAgICAgY29uc3QgbG9vcDogU3RtdC5TdG10ID0gdGhpcy5zdGF0ZW1lbnQoKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLndoaWxlLCBgRXhwZWN0ZWQgY29uZGl0aW9uIGFmdGVyIGRvIHN0YXRlbWVudGApO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUubGVmdFBhcmVuLCBgRXhwZWN0ZWQgXCIoXCIgYWZ0ZXIgYSB3aGlsZWApO1xyXG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbjogRXhwci5FeHByID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5yaWdodFBhcmVuLCBgRXhwZWN0ZWQgXCIpXCIgYWZ0ZXIgd2hpbGUgY29uZGl0aW9uYCk7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5zZW1pY29sb24sIGBFeHBlY3RlZCBzZW1pY29sb24gXCI7XCIgYWZ0ZXIgYSBkbyB3aGlsZSBjb25kaXRpb25gKTtcclxuICAgICAgICByZXR1cm4gbmV3IFN0bXQuRG9XaGlsZShsb29wLCBjb25kaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJpbnRTdGF0ZW1lbnQoKTogU3RtdC5TdG10IHtcclxuICAgICAgICBjb25zdCB2YWx1ZTogRXhwci5FeHByID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5zZW1pY29sb24sIGBFeHBlY3RlZCBzZW1pY29sb24gXCI7XCIgYWZ0ZXIgZXhwcmVzc2lvbi5gKTtcclxuICAgICAgICByZXR1cm4gbmV3IFN0bXQuUHJpbnQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmV0dXJuU3RhdGVtZW50KCk6IFN0bXQuU3RtdCB7XHJcbiAgICAgICAgY29uc3Qga2V5d29yZDogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5zZW1pY29sb24pKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLnNlbWljb2xvbiwgYEV4ZWN0ZWQgXCI7XCIgYWZ0ZXIgcmV0dXJuIHN0YXRlbWVudGApO1xyXG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5SZXR1cm4oa2V5d29yZCwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYmxvY2soKTogU3RtdC5TdG10W10ge1xyXG4gICAgICAgIGNvbnN0IHN0YXRlbWVudHM6IFN0bXQuU3RtdFtdID0gW107XHJcbiAgICAgICAgd2hpbGUgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5yaWdodEJyYWNlKSAmJiAhdGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICBzdGF0ZW1lbnRzLnB1c2godGhpcy5kZWNsYXJhdGlvbigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5yaWdodEJyYWNlLCBgRXhwZWN0ZWQgY2xvc2luZyBibG9jayBcIn1cImApO1xyXG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXhwcmVzc2lvblN0YXRlbWVudCgpOiBTdG10LlN0bXQge1xyXG4gICAgICAgIGNvbnN0IGV4cHJlc3Npb246IEV4cHIuRXhwciA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuc2VtaWNvbG9uLCBgRXhwZWN0ZWQgc2VtaWNvbG9uIFwiO1wiIGFmdGVyICR7ZXhwcmVzc2lvbn0gZXhwcmVzc2lvbmApO1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5zZW1pY29sb24pKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBjb256b2xlLndhcm4oYFtsaW5lICgke3Rva2VuLmxpbmV9KSBwYXJzZSB3YXJuaW5nIGF0IFwiJHt0b2tlbi5sZXhlbWV9XCJdID0+IHVubmVjZXNzYXJ5IHNlbWljb2xvbiBvciBlbXB0eSBzdGF0ZW1lbnRgKTtcclxuICAgICAgICAgICAgLy8gY29uc3VtZSBhbGwgc2VtaWNvbG9uc1xyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLnNlbWljb2xvbikpeyB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFN0bXQuRXhwcmVzc2lvbihleHByZXNzaW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV4cHJlc3Npb24oKTogRXhwci5FeHByIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hc3NpZ25tZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3NpZ25tZW50KCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgY29uc3QgZXhwcjogRXhwci5FeHByID0gdGhpcy50ZXJuYXJ5KCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5lcXVhbCwgVG9rZW5UeXBlLnBsdXNFcXVhbCxcclxuICAgICAgICAgICAgVG9rZW5UeXBlLm1pbnVzRXF1YWwsIFRva2VuVHlwZS5zdGFyRXF1YWwsIFRva2VuVHlwZS5zbGFzaEVxdWFsKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZTogRXhwci5FeHByID0gdGhpcy5hc3NpZ25tZW50KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXhwciBpbnN0YW5jZW9mIEV4cHIuVmFyaWFibGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWU6IFRva2VuID0gZXhwci5uYW1lO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wZXJhdG9yLnR5cGUgIT09IFRva2VuVHlwZS5lcXVhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbmV3IEV4cHIuQmluYXJ5KG5ldyBFeHByLlZhcmlhYmxlKG5hbWUpLCBvcGVyYXRvciwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkFzc2lnbihuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXhwciBpbnN0YW5jZW9mIEV4cHIuR2V0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3BlcmF0b3IudHlwZSAhPT0gVG9rZW5UeXBlLmVxdWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRXhwci5CaW5hcnkobmV3IEV4cHIuR2V0KGV4cHIuZW50aXR5LCBleHByLmtleSksIG9wZXJhdG9yLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuU2V0KGV4cHIuZW50aXR5LCBleHByLmtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBhcnNlRXJyb3Iob3BlcmF0b3IsIGBJbnZhbGlkIGwtdmFsdWUsIGlzIG5vdCBhbiBhc3NpZ25pbmcgdGFyZ2V0LmApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0ZXJuYXJ5KCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgY29uc3QgZXhwciA9IHRoaXMubG9naWNhbE9yKCk7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLnF1ZXN0aW9uKSkge1xyXG4gICAgICAgICAgICBjb25zdCB0aGVuRXhwcjogRXhwci5FeHByID0gdGhpcy50ZXJuYXJ5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuY29sb24sIGBFeHBlY3RlZCBcIjpcIiBhZnRlciB0ZXJuYXJ5ID8gZXhwcmVzc2lvbmApO1xyXG4gICAgICAgICAgICBjb25zdCBlbHNlRXhwcjogRXhwci5FeHByID0gdGhpcy50ZXJuYXJ5KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5UZXJuYXJ5KGV4cHIsIHRoZW5FeHByLCBlbHNlRXhwcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBleHByO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9naWNhbE9yKCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgbGV0IGV4cHIgPSB0aGlzLmxvZ2ljYWxBbmQoKTtcclxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUub3IpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMubG9naWNhbEFuZCgpO1xyXG4gICAgICAgICAgICBleHByID0gbmV3IEV4cHIuTG9naWNhbChleHByLCBvcGVyYXRvciwgcmlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvZ2ljYWxBbmQoKTogRXhwci5FeHByIHtcclxuICAgICAgICBsZXQgZXhwciA9IHRoaXMuZXF1YWxpdHkoKTtcclxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuYW5kKSkge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0OiBFeHByLkV4cHIgPSB0aGlzLmVxdWFsaXR5KCk7XHJcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5Mb2dpY2FsKGV4cHIsIG9wZXJhdG9yLCByaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBleHByO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXF1YWxpdHkoKTogRXhwci5FeHByIHtcclxuICAgICAgICBsZXQgZXhwciAgPSB0aGlzLmNvbXBhcmlzb24oKTtcclxuXHJcbiAgICAgICAgd2hpbGUgKHRoaXMubWF0Y2goXHJcbiAgICAgICAgICAgIFRva2VuVHlwZS5iYW5nRXF1YWwsIFRva2VuVHlwZS5lcXVhbEVxdWFsLFxyXG4gICAgICAgICAgICBUb2tlblR5cGUuYmFuZ0VxdWFsRXF1YWwsIFRva2VuVHlwZS5lcXVhbEVxdWFsRXF1YWwpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMuY29tcGFyaXNvbigpO1xyXG4gICAgICAgICAgICBleHByID0gbmV3IEV4cHIuQmluYXJ5KGV4cHIsIG9wZXJhdG9yLCByaWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbXBhcmlzb24oKTogRXhwci5FeHByIHtcclxuICAgICAgICBsZXQgZXhwcjogRXhwci5FeHByID0gdGhpcy5hZGRpdGlvbigpO1xyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuZ3JlYXRlciwgVG9rZW5UeXBlLmdyZWF0ZXJFcXVhbCwgVG9rZW5UeXBlLmxlc3MsIFRva2VuVHlwZS5sZXNzRXF1YWwpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMuYWRkaXRpb24oKTtcclxuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkJpbmFyeShleHByLCBvcGVyYXRvciwgcmlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRpdGlvbigpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGxldCBleHByOiBFeHByLkV4cHIgPSB0aGlzLm1vZHVsdXMoKTtcclxuXHJcbiAgICAgICAgd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLm1pbnVzLCBUb2tlblR5cGUucGx1cykpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3I6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBjb25zdCByaWdodDogRXhwci5FeHByID0gdGhpcy5tb2R1bHVzKCk7XHJcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5CaW5hcnkoZXhwciwgb3BlcmF0b3IsIHJpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBleHByO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW9kdWx1cygpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGxldCBleHByOiBFeHByLkV4cHIgPSB0aGlzLm11bHRpcGxpY2F0aW9uKCk7XHJcblxyXG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5wZXJjZW50KSkge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0OiBFeHByLkV4cHIgPSB0aGlzLm11bHRpcGxpY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5CaW5hcnkoZXhwciwgb3BlcmF0b3IsIHJpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBleHByO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbXVsdGlwbGljYXRpb24oKTogRXhwci5FeHByIHtcclxuICAgICAgICBsZXQgZXhwcjogRXhwci5FeHByID0gdGhpcy51bmFyeSgpO1xyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuc2xhc2gsIFRva2VuVHlwZS5zdGFyKSkge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0OiBFeHByLkV4cHIgPSB0aGlzLnVuYXJ5KCk7XHJcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5CaW5hcnkoZXhwciwgb3BlcmF0b3IsIHJpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBleHByO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdW5hcnkoKTogRXhwci5FeHByIHtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUubWludXMsIFRva2VuVHlwZS5iYW5nLCBUb2tlblR5cGUuZG9sbGFyLCBUb2tlblR5cGUucGx1c1BsdXMsIFRva2VuVHlwZS5taW51c01pbnVzKSkge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0OiBFeHByLkV4cHIgPSB0aGlzLnVuYXJ5KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5VbmFyeShvcGVyYXRvciwgcmlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV3S2V5d29yZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbmV3S2V5d29yZCgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5uZXcpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdDogRXhwci5FeHByID0gdGhpcy5jYWxsKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5OZXcoY29uc3RydWN0KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhbGwoKTogRXhwci5FeHByIHtcclxuICAgICAgICBsZXQgZXhwcjogRXhwci5FeHByID0gdGhpcy5wcmltYXJ5KCk7XHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmxlZnRQYXJlbikpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjYWxsZWUgPSBleHByO1xyXG4gICAgICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3M6IEV4cHIuRXhwcltdID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5yaWdodFBhcmVuKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmdzLnB1c2godGhpcy5leHByZXNzaW9uKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5jb21tYSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbjogVG9rZW4gPSB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLnJpZ2h0UGFyZW4sIGBFeHBlY3RlZCBcIilcIiBhZnRlciBhcmd1bWVudHNgKTtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsZWUgPSBuZXcgRXhwci5DYWxsKGNhbGxlZSwgcGFyZW4sIGFyZ3MsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUubGVmdFBhcmVuKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmRvdCkpIHtcclxuICAgICAgICAgICAgICAgIGV4cHIgPSB0aGlzLmRvdEdldChleHByKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5sZWZ0QnJhY2tldCkpIHtcclxuICAgICAgICAgICAgICAgIGV4cHIgPSB0aGlzLmJyYWNrZXRHZXQoZXhwcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkb3RHZXQoZXhwcjogRXhwci5FeHByKTogRXhwci5FeHByIHtcclxuICAgICAgICBjb25zdCBuYW1lOiBUb2tlbiA9IHRoaXMuY29uc3VtZShUb2tlblR5cGUuaWRlbnRpZmllciwgYEV4cGVjdCBwcm9wZXJ0eSBuYW1lIGFmdGVyICcuJ2ApO1xyXG4gICAgICAgIGNvbnN0IGtleTogRXhwci5LZXkgPSBuZXcgRXhwci5LZXkobmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFeHByLkdldChleHByLCBrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYnJhY2tldEdldChleHByOiBFeHByLkV4cHIpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGxldCBrZXk6IEV4cHIuRXhwciA9IG51bGw7XHJcbiAgICAgICAgbGV0IGVuZDogRXhwci5FeHByID0gbnVsbDtcclxuICAgICAgICBsZXQgc3RlcDogRXhwci5FeHByID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5jb2xvbikpIHtcclxuICAgICAgICAgICAga2V5ID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5jb2xvbikgJiYgIXRoaXMuY2hlY2soVG9rZW5UeXBlLmNvbG9uKSkge1xyXG4gICAgICAgICAgICBlbmQgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmNvbG9uKSAmJiAhdGhpcy5jaGVjayhUb2tlblR5cGUucmlnaHRCcmFja2V0KSkge1xyXG4gICAgICAgICAgICBzdGVwID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUucmlnaHRCcmFja2V0LCBgRXhwZWN0ZWQgXCJdXCIgYWZ0ZXIgcHJvcGVydHkgbmFtZSBleHByZXNzaW9uYCk7XHJcbiAgICAgICAgaWYgKCFrZXkgfHwgZW5kIHx8IHN0ZXApIHtcclxuICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBuZXcgRXhwci5SYW5nZShrZXksIGVuZCwgc3RlcCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5HZXQoZXhwciwgcmFuZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEV4cHIuR2V0KGV4cHIsIGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcmltYXJ5KCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmZhbHNlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGl0ZXJhbChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS50cnVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGl0ZXJhbCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLm51bGwpKSB7XHJcbiAgICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGl0ZXJhbChudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLm51bWJlcikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkxpdGVyYWwodGhpcy5wcmV2aW91cygpLmxpdGVyYWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuc3RyaW5nKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuWnRyaW5nKHRoaXMucHJldmlvdXMoKS5saXRlcmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmlkZW50aWZpZXIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSAgdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUucGx1c1BsdXMpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuUG9zdGZpeChpZGVudGlmaWVyLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUubWludXNNaW51cykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5Qb3N0Zml4KGlkZW50aWZpZXIsIC0xKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuVmFyaWFibGUoaWRlbnRpZmllcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5sZWZ0UGFyZW4pKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4cHI6IEV4cHIuRXhwciA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLnJpZ2h0UGFyZW4sIGBFeHBlY3RlZCBcIilcIiBhZnRlciBleHByZXNzaW9uYCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5Hcm91cGluZyhleHByKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmxlZnRCcmFjZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW50aXR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5mdW5jdGlvbikpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW46IFRva2VuID0gbmV3IFRva2VuKCdsYW1iZGEnLCAnbGFtYmRhJywgJ2xhbWJkYScsIHRoaXMucHJldmlvdXMoKS5saW5lKTtcclxuICAgICAgICAgICAgY29uc3QgbGFtYmRhOiBTdG10LkZ1bmMgPSB0aGlzLmZ1bmNQYXJhbXNCb2R5KHRva2VuLCBcImxhbWJkYVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkxhbWJkYShsYW1iZGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuc3VwZXIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN1cGVyQ2FsbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUubGVmdEJyYWNrZXQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFycmF5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aHJvdyB0aGlzLnBhcnNlRXJyb3IodGhpcy5wZWVrKCksIGBFeHBlY3RlZCBleHByZXNzaW9uYCk7XHJcbiAgICAgICAgLy8gdW5yZWFjaGVhYmxlIGNvZGVcclxuICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGl0ZXJhbChudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW50aXR5KCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLnJpZ2h0QnJhY2UpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5FbnRpdHkoW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzOiBFeHByLlNldFtdID0gW107XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuc3RyaW5nLCBUb2tlblR5cGUuaWRlbnRpZmllcikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleTogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLmNvbG9uLCBgRXhwZWN0ZWQgXCI6XCIgY29sb24gYWZ0ZXIgbWVtYmVyYCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydGllcy5wdXNoKG5ldyBFeHByLlNldChudWxsLCBuZXcgRXhwci5LZXkoa2V5KSwgdmFsdWUpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyc2VFcnJvcih0aGlzLnBlZWsoKSwgYFN0cmluZyBvciBpZGVudGlmaWVyIGV4cGVjdGVkIGFmdGVyIE9iamVjdCB7YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5jb21tYSkpO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUucmlnaHRCcmFjZSwgYEV4cGVjdGVkIFwifVwiIGFmdGVyIG9iamVjdCBsaXRlcmFsYCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgRXhwci5FbnRpdHkocHJvcGVydGllcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhcnJheSgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5yaWdodEJyYWNrZXQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5MaXN0KFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICB2YWx1ZXMucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7XHJcbiAgICAgICAgfSB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuY29tbWEpKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLnJpZ2h0QnJhY2tldCwgYEV4cGVjdGVkIFwiXVwiIGFmdGVyIGFycmF5IGRlY2xhcmF0aW9uYCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgRXhwci5MaXN0KHZhbHVlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdXBlckNhbGwoKTogRXhwci5FeHByIHtcclxuICAgICAgICBjb25zdCBpbmRleGVzOiBUb2tlbltdID0gW107XHJcbiAgICAgICAgd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmRvdCkpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLmlkZW50aWZpZXIsIGBFeHBlY3RlZCBtZXRob2QgbmFtZSBhZnRlciBzdXBlcmApO1xyXG4gICAgICAgICAgICBpbmRleGVzLnB1c2godG9rZW4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYXJnczogRXhwci5FeHByW10gPSBbXTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLmxlZnRQYXJlbiwgYEV4cGVjdGVkIGZ1bmN0aW9uIHBhcmFtZXRlcnMgb3IgbWV0aG9kIG5hbWUgYWZ0ZXIgc3VwZXJgKTtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jaGVjayhUb2tlblR5cGUucmlnaHRQYXJlbikpIHtcclxuICAgICAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgICAgICBhcmdzLnB1c2godGhpcy5leHByZXNzaW9uKCkpO1xyXG4gICAgICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuY29tbWEpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLnJpZ2h0UGFyZW4sIGBFeHBlY3RlZCBcIilcIiBhZnRlciBzdXBlciBhcmd1bWVudHNgKTtcclxuICAgICAgICB9IHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5sZWZ0UGFyZW4pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBFeHByLlN1cGVyKGluZGV4ZXMsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnLi9jb25zb2xlJztcclxuZGVjbGFyZSB2YXIgY29uem9sZTogQ29uc29sZTtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm90b3R5cGUge1xyXG5cclxuICAgIHB1YmxpYyB2YWx1ZXM6IE1hcDxzdHJpbmcsIGFueT47XHJcbiAgICBwcml2YXRlIHByb3RvdHlwZTogUHJvdG90eXBlO1xyXG4gICAgcHJpdmF0ZSBvd25lcjogb2JqZWN0O1xyXG4gICAgY29uc3RydWN0b3IodmFsdWVzOiBNYXA8c3RyaW5nLCBhbnk+LCBwYXJlbnQ6IFByb3RvdHlwZSA9IG51bGwsIG93bmVyOiBvYmplY3QpIHtcclxuICAgICAgICB0aGlzLnZhbHVlcyA9IG5ldyBNYXAodmFsdWVzKTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZSA9IHBhcmVudDtcclxuICAgICAgICB0aGlzLm93bmVyID0gb3duZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnZhbHVlcy5zZXQobmFtZSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlcy5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMuZ2V0KGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnByb3RvdHlwZSAhPT0gbnVsbCApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvdG90eXBlLmdldChrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb256b2xlLmVycm9yKGBbZW50aXR5IGVycm9yXSA9PiAke2tleX0gaXMgbm90IGRlZmluZWQgaW4gJHt0aGlzLm93bmVyfWApO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgUmV0dXJuIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgcHVibGljIHZhbHVlOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEludGVybmFsRW50aXR5LCBBcnJheUVudGl0eSwgU3RyaW5nRW50aXR5LCBGdW5jdGlvbkVudGl0eSB9IGZyb20gXCIuL2VudGl0eVwiO1xyXG5pbXBvcnQgeyBQcm90b3R5cGUgfSBmcm9tIFwiLi9wcm90b3R5cGVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eSh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBmdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eT4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IDE7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiB0aGl6LnByb3BlcnRpZXMuaGFzKGFyZ3NbMF0pO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGhQcm9wZXJ0eSh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBmdW5jdGlvbiBzaXplPic7XHJcbiAgICBmdW5jLmFyaXR5ID0gKCkgPT4gMDtcclxuICAgIGZ1bmMuY2FsbCA9IChpbnQsIHRoaXosIGFyZ3MpID0+IHRoaXoucHJvcGVydGllcy5zaXplO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnZva2VNZXRob2QodGhhdDogYW55KTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8aW50ZXJuYWwgZnVuY3Rpb24gaW52b2tlPic7XHJcbiAgICBmdW5jLmFyaXR5ID0gKCkgPT4gLTE7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiB0aGl6LmNhbGwoaW50LCBhcmdzWzBdLCBhcmdzLnNsaWNlKDEpKTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzdXBlckNhbGwodGhhdDogYW55LCBpbnN0YW5jZTogYW55KTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IHRoYXQucGFyZW50LmFyaXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxuYXRpdmUgc3VwZXIgZnVuY3Rpb24+JztcclxuICAgIGZ1bmMuY2FsbCA9IChpbnQsIHRoaXosIGFyZ3MpID0+XHJcbiAgICAgICAgdGhhdC5wYXJlbnQuY2FsbChpbnQsIGluc3RhbmNlLCBhcmdzKTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VNZXRob2QodGhhdDogYW55KTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgLyoqIG1lcmdlKFBhcmVudCwgb3ZlcnJpZGU9ZmFsc2UpICovXHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiB7XHJcbiAgICAgICAgdGhhdC5wcm9wZXJ0aWVzID0gYXJnc1sxXSA/XHJcbiAgICAgICAgICAgIG5ldyBNYXAoWy4uLnRoYXQucHJvcGVydGllcywgLi4uYXJnc1swXS5wcm9wZXJ0aWVzXSkgOlxyXG4gICAgICAgICAgICBuZXcgTWFwKFsuLi5hcmdzWzBdLnByb3BlcnRpZXMsIC4uLnRoYXQucHJvcGVydGllc10pO1xyXG4gICAgfTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPGludGVybmFsIG1lcmdlIGZ1bmN0aW9uPic7XHJcbiAgICBmdW5jLmFyaXR5ID0gKCkgPT4gLTE7XHJcbiAgICByZXR1cm4gZnVuYztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZE1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvdG8gPSBuZXcgUHJvdG90eXBlKFxyXG4gICAgICAgICAgICB0aGF0LnByb3BlcnRpZXMsXHJcbiAgICAgICAgICAgIG5ldyBQcm90b3R5cGUoYXJnc1swXS5wcm9wZXJ0aWVzLCBhcmdzWzBdLnByb3RvdHlwZSwgdGhpeiksXHJcbiAgICAgICAgICAgIHRoaXpcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoYXQucHJvdG90eXBlID0gcHJvdG87XHJcbiAgICB9O1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8aW50ZXJuYWwgbWVyZ2UgZnVuY3Rpb24+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAtMTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5oZXJpdE1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiB7XHJcbiAgICAgICAgdGhhdC5wcm90b3R5cGUudmFsdWVzID0gbmV3IE1hcChbLi4uYXJnc1swXS5wcm9wZXJ0aWVzLCAuLi50aGF0LnByb3RvdHlwZS52YWx1ZXNdKTtcclxuICAgIH07XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBpbmhlcml0YW5jZSBmdW5jdGlvbj4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IDE7XHJcbiAgICByZXR1cm4gZnVuYztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVjaG9GdW5jdGlvbigpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLmFyaXR5ID0gKCkgPT4gMTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPG5hdGl2ZSBmdW5jdGlvbj4nO1xyXG4gICAgZnVuYy5jYWxsID0gKGludGVycHJldGVyLCB0aGl6LCBhcmdzKSA9PiBjb25zb2xlLmxvZyhhcmdzWzBdKTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZEZ1bmN0aW9uKCk6IEludGVybmFsRW50aXR5IHtcclxuICAgIGNvbnN0IGZ1bmMgPSBuZXcgSW50ZXJuYWxFbnRpdHkoKTtcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAwO1xyXG4gICAgZnVuYy5jYWxsID0gKCkgPT4gTWF0aC5yYW5kb20oKTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPG5hdGl2ZSBmdW5jdGlvbj4nO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJheUxlbmd0aE1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBmdW5jdGlvbiBzaXplPic7XHJcbiAgICBmdW5jLmFyaXR5ID0gKCkgPT4gMDtcclxuICAgIGZ1bmMuY2FsbCA9IChpbnQsIHRoaXosIGFyZ3MpID0+IHRoaXoudmFsdWVzLmxlbmd0aDtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlKb2luTWV0aG9kKHRoYXQ6IGFueSk6IEludGVybmFsRW50aXR5IHtcclxuICAgIGNvbnN0IGZ1bmMgPSBuZXcgSW50ZXJuYWxFbnRpdHkoKTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPGludGVybmFsIGZ1bmN0aW9uIHNpemU+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAxO1xyXG4gICAgZnVuYy5jYWxsID0gKGludCwgdGhpeiwgYXJncykgPT4gbmV3IFN0cmluZ0VudGl0eSh0aGl6LnZhbHVlcy5qb2luKGFyZ3NbMF0pKTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlQdXNoTWV0aG9kKHRoYXQ6IGFueSk6IEludGVybmFsRW50aXR5IHtcclxuICAgIGNvbnN0IGZ1bmMgPSBuZXcgSW50ZXJuYWxFbnRpdHkoKTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPGludGVybmFsIGZ1bmN0aW9uIHNpemU+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAxO1xyXG4gICAgZnVuYy5jYWxsID0gKGludCwgdGhpeiwgYXJncykgPT4gdGhpei52YWx1ZXMucHVzaChhcmdzWzBdKTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlQb3BNZXRob2QodGhhdDogYW55KTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8aW50ZXJuYWwgZnVuY3Rpb24gc2l6ZT4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IDA7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiB0aGl6LnZhbHVlcy5wb3AoYXJnc1swXSk7XHJcbiAgICByZXR1cm4gZnVuYztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5RWFjaE1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBmdW5jdGlvbiBzaXplPic7XHJcbiAgICBmdW5jLmFyaXR5ID0gKCkgPT4gLTE7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGl6LnZhbHVlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBhcmdzWzBdLmNhbGwoaW50LCB0aGl6LCBbdGhpei52YWx1ZXNbaV0sIGksIHRoaXpdKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJheU1hcE1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBmdW5jdGlvbiBzaXplPic7XHJcbiAgICBmdW5jLmFyaXR5ID0gKCkgPT4gLTE7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGl6LnZhbHVlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICB0aGl6LnZhbHVlc1tpXSA9IDxGdW5jdGlvbkVudGl0eT4gYXJnc1swXS5jYWxsKGludCwgdGhpeiwgW3RoaXoudmFsdWVzW2ldLCBpLCB0aGl6XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlGaW5kTWV0aG9kKHRoYXQ6IGFueSk6IEludGVybmFsRW50aXR5IHtcclxuICAgIGNvbnN0IGZ1bmMgPSBuZXcgSW50ZXJuYWxFbnRpdHkoKTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPGludGVybmFsIGZ1bmN0aW9uIHNpemU+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAtMTtcclxuICAgIGZ1bmMuY2FsbCA9IChpbnQsIHRoaXosIGFyZ3MpID0+IHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXoudmFsdWVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmICg8RnVuY3Rpb25FbnRpdHk+IGFyZ3NbMF0uY2FsbChpbnQsIHRoaXosIFt0aGl6LnZhbHVlc1tpXSwgaSwgdGhpel0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpei52YWx1ZXNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJheUluZGV4T2ZNZXRob2QodGhhdDogYW55KTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8aW50ZXJuYWwgZnVuY3Rpb24gc2l6ZT4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IDE7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGl6LnZhbHVlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAodGhpei52YWx1ZXNbaV0gPT09IGFyZ3NbMF0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nTGVuZ3RoTWV0aG9kKHRoYXQ6IGFueSk6IEludGVybmFsRW50aXR5IHtcclxuICAgIGNvbnN0IGZ1bmMgPSBuZXcgSW50ZXJuYWxFbnRpdHkoKTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPGludGVybmFsIGZ1bmN0aW9uIHNpemU+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAwO1xyXG4gICAgZnVuYy5jYWxsID0gKGludCwgdGhpeiwgYXJncykgPT4gdGhpei52YWx1ZS5sZW5ndGg7XHJcbiAgICByZXR1cm4gZnVuYztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ1N1YlN0ck1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBmdW5jdGlvbiBzaXplPic7XHJcbiAgICBmdW5jLmFyaXR5ID0gKCkgPT4gLTE7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiBuZXcgU3RyaW5nRW50aXR5KHRoaXoudmFsdWUuc3Vic3RyKGFyZ3NbMF0sIGFyZ3NbMV0pKTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nU3BsaXRNZXRob2QodGhhdDogYW55KTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8aW50ZXJuYWwgZnVuY3Rpb24gc2l6ZT4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IDE7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiBuZXcgQXJyYXlFbnRpdHkodGhpei52YWx1ZS5zcGxpdChhcmdzWzBdKSk7XHJcbiAgICByZXR1cm4gZnVuYztcclxufVxyXG4iLCJpbXBvcnQgeyBUb2tlbiwgVG9rZW5UeXBlIH0gZnJvbSAnLi4vc3JjL3Rva2VuJztcclxuaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gJy4vY29uc29sZSc7XHJcbmRlY2xhcmUgdmFyIGNvbnpvbGU6IENvbnNvbGU7XHJcblxyXG5jb25zdCBpc0RpZ2l0ID0gKGNoYXI6IHN0cmluZykgPT4gY2hhciA+PSAnMCcgJiYgY2hhciA8PSAnOSc7XHJcblxyXG5jb25zdCBpc0FscGhhID0gKGNoYXI6IHN0cmluZyApID0+IChjaGFyID49ICdhJyAmJiBjaGFyIDw9ICd6JykgfHwgKGNoYXIgPj0gJ0EnICYmIGNoYXIgPD0gJ1onKTtcclxuXHJcbmNvbnN0IGlzQWxwaGFOdW1lcmljID0gKGNoYXI6IHN0cmluZykgPT4gaXNBbHBoYShjaGFyKSB8fCBpc0RpZ2l0KGNoYXIpO1xyXG5cclxuY29uc3QgaXNLZXl3b3JkID0gKHdvcmQ6IHN0cmluZykgPT4gVG9rZW5UeXBlW3dvcmRdID49IDIzO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjYW5uZXIge1xyXG5cclxuICAgIHB1YmxpYyBzb3VyY2U6IHN0cmluZztcclxuICAgIHB1YmxpYyB0b2tlbnM6IFRva2VuW10gPSBbXTtcclxuICAgIHByaXZhdGUgY3VycmVudCA9IDA7XHJcbiAgICBwcml2YXRlIGxpbmUgPSAxO1xyXG4gICAgcHJpdmF0ZSBzdGFydCA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc291cmNlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVvZigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50ID49IHRoaXMuc291cmNlLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkdmFuY2UoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Kys7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLmNoYXJBdCh0aGlzLmN1cnJlbnQgLSAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFRva2VuKHRva2VuTmFtZTogc3RyaW5nLCBsaXRlcmFsOiBhbnkpIHtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5zb3VyY2Uuc3Vic3RyaW5nKHRoaXMuc3RhcnQsIHRoaXMuY3VycmVudCk7XHJcbiAgICAgICAgdGhpcy50b2tlbnMucHVzaChuZXcgVG9rZW4odG9rZW5OYW1lLCB0ZXh0LCBsaXRlcmFsLCB0aGlzLmxpbmUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1hdGNoKGV4cGVjdGVkOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zb3VyY2UuY2hhckF0KHRoaXMuY3VycmVudCkgIT09IGV4cGVjdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudCsrO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGVlaygpIHtcclxuICAgICAgICBpZiAodGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ1xcMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5jaGFyQXQodGhpcy5jdXJyZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBlZWtOZXh0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnQgKyAxID49IHRoaXMuc291cmNlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ1xcMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5jaGFyQXQodGhpcy5jdXJyZW50ICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb21tZW50KCkge1xyXG4gICAgICAgIHdoaWxlICh0aGlzLnBlZWsoKSAhPT0gJ1xcbicgJiYgIXRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RyaW5nKHF1b3RlOiBzdHJpbmcsIHR5cGU6IFRva2VuVHlwZSkge1xyXG4gICAgICAgIHdoaWxlICh0aGlzLnBlZWsoKSAhPT0gcXVvdGUgJiYgIXRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGVlaygpID09PSAnXFxuJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saW5lKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVbnRlcm1pbmF0ZWQgc3RyaW5nLlxyXG4gICAgICAgIGlmICh0aGlzLmVvZigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NhbkVycm9yKGBVbnRlcm1pbmF0ZWQgc3RyaW5nLCBleHBlY3RpbmcgY2xvc2luZyAke3F1b3RlfWApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUaGUgY2xvc2luZyBcIi5cclxuICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuXHJcbiAgICAgICAgLy8gVHJpbSB0aGUgc3Vycm91bmRpbmcgcXVvdGVzLlxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zb3VyY2Uuc3Vic3RyaW5nKHRoaXMuc3RhcnQgKyAxLCB0aGlzLmN1cnJlbnQgLSAxKTtcclxuICAgICAgICB0aGlzLmFkZFRva2VuKCdzdHJpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBudW1iZXIoKSB7XHJcbiAgICAgICAgLy8gZ2V0cyBpbnRlZ2VyIHBhcnRcclxuICAgICAgICB3aGlsZSAoaXNEaWdpdCh0aGlzLnBlZWsoKSkpIHtcclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjaGVja3MgZm9yIGZyYWN0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMucGVlaygpID09PSAnLicgJiYgaXNEaWdpdCh0aGlzLnBlZWtOZXh0KCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZ2V0cyBmcmFjdGlvbiBwYXJ0XHJcbiAgICAgICAgd2hpbGUgKGlzRGlnaXQodGhpcy5wZWVrKCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2hlY2tzIGZvciBleHBvbmVudFxyXG4gICAgICAgIGlmICh0aGlzLnBlZWsoKS50b0xvd2VyQ2FzZSgpID09PSAnZScpIHtcclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoKSA9PT0gJy0nIHx8IHRoaXMucGVlaygpID09PSAnKycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aGlsZSAoaXNEaWdpdCh0aGlzLnBlZWsoKSkpIHtcclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc291cmNlLnN1YnN0cmluZyh0aGlzLnN0YXJ0ICwgdGhpcy5jdXJyZW50KTtcclxuICAgICAgICB0aGlzLmFkZFRva2VuKCdudW1iZXInLCBOdW1iZXIodmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlkZW50aWZpZXIoKSB7XHJcbiAgICAgICAgd2hpbGUgKGlzQWxwaGFOdW1lcmljKHRoaXMucGVlaygpKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuc291cmNlLnN1YnN0cmluZyh0aGlzLnN0YXJ0LCB0aGlzLmN1cnJlbnQpO1xyXG4gICAgICAgIHZhbHVlID0gdmFsdWUgPT09ICdmdW5jJyA/ICdmdW5jdGlvbicgOiB2YWx1ZTtcclxuICAgICAgICBpZiAoaXNLZXl3b3JkKHZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFRva2VuKHZhbHVlLCBudWxsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFRva2VuKCdpZGVudGlmaWVyJywgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2NhbigpIHtcclxuICAgICAgICB3aGlsZSAoIXRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydCA9IHRoaXMuY3VycmVudDtcclxuICAgICAgICAgICAgdGhpcy5zY2FuVG9rZW4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2gobmV3IFRva2VuKCdlb2YnLCAnJywgbnVsbCwgdGhpcy5saW5lKSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2NhblRva2VuKCkge1xyXG4gICAgICAgIGNvbnN0IGNoYXIgPSB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICBzd2l0Y2ggKGNoYXIpIHtcclxuICAgICAgICAgICAgY2FzZSAnKCc6IHRoaXMuYWRkVG9rZW4oJ2xlZnRQYXJlbicsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnKSc6IHRoaXMuYWRkVG9rZW4oJ3JpZ2h0UGFyZW4nLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ1snOiB0aGlzLmFkZFRva2VuKCdsZWZ0QnJhY2tldCcsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnXSc6IHRoaXMuYWRkVG9rZW4oJ3JpZ2h0QnJhY2tldCcsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAneyc6IHRoaXMuYWRkVG9rZW4oJ2xlZnRCcmFjZScsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnfSc6IHRoaXMuYWRkVG9rZW4oJ3JpZ2h0QnJhY2UnLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJywnOiB0aGlzLmFkZFRva2VuKCdjb21tYScsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnLic6IHRoaXMuYWRkVG9rZW4oJ2RvdCcsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnOyc6IHRoaXMuYWRkVG9rZW4oJ3NlbWljb2xvbicsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnKic6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnPScpID8gJ3N0YXJFcXVhbCcgOiAnc3RhcicsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnXic6IHRoaXMuYWRkVG9rZW4oJ2NhcmV0JywgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc/JzogdGhpcy5hZGRUb2tlbigncXVlc3Rpb24nLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzonOiB0aGlzLmFkZFRva2VuKCdjb2xvbicsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnJSc6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnPScpID8gJ3BlcmNlbnRFcXVhbCcgOiAncGVyY2VudCcsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnJCc6IHRoaXMuYWRkVG9rZW4oJ2RvbGxhcicsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnQCc6IHRoaXMuYWRkVG9rZW4oJ2Z1bmN0aW9uJywgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICctJzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCctJykgPyAnbWludXNNaW51cycgOiB0aGlzLm1hdGNoKCc+JykgPyAncmV0dXJuJyA6IHRoaXMubWF0Y2goJz0nKSA/ICdtaW51c0VxdWFsJyA6ICdtaW51cycsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnKyc6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnKycpID8gJ3BsdXNQbHVzJyA6IHRoaXMubWF0Y2goJz0nKSA/ICdwbHVzRXF1YWwnIDogJ3BsdXMnLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3wnOiB0aGlzLmFkZFRva2VuKHRoaXMubWF0Y2goJ3wnKSA/ICdvcicgOiAncGlwZScsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnJic6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnJicpID8gJ2FuZCcgOiAnYW1wZXJzYW5kJywgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc8JzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCc9JykgPyAnbGVzc0VxdWFsJyA6ICdsZXNzJywgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc+JzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCc9JykgPyAnZ3JlYXRlckVxdWFsJyA6ICdncmVhdGVyJywgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICchJzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCc9JykgPyB0aGlzLm1hdGNoKCc9JykgPyAnYmFuZ0VxdWFsRXF1YWwnIDogJ2JhbmdFcXVhbCcgOiAnYmFuZycsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnPSc6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXRjaCgnPScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goJz0nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKCdlcXVhbEVxdWFsRXF1YWwnLCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKCdlcXVhbEVxdWFsJywgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1hdGNoKCc+JykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKCdhcnJvdycsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKCdlcXVhbCcsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJy8nOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goJy8nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1hdGNoKCc9JykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKCdzbGFzaEVxdWFsJywgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4oJ3NsYXNoJywgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnXFxuJzogdGhpcy5saW5lKys7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGAnYDpcclxuICAgICAgICAgICAgY2FzZSBgXCJgOlxyXG4gICAgICAgICAgICBjYXNlICdgJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RyaW5nKGNoYXIsIFRva2VuVHlwZS5zdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vIGlnbm9yZSBjYXNlc1xyXG4gICAgICAgICAgICBjYXNlICcgJzpcclxuICAgICAgICAgICAgY2FzZSAnXFxyJzpcclxuICAgICAgICAgICAgY2FzZSAnXFx0JzpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvLyBjb21wZXggY2FzZXNcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGlmIChpc0RpZ2l0KGNoYXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5udW1iZXIoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNBbHBoYShjaGFyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWRlbnRpZmllcigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjYW5FcnJvcihgVW5leHBlY3RlZCBjaGFyYWN0ZXIgJyR7Y2hhcn0nYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzY2FuRXJyb3IobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29uem9sZS5lcnJvcihgRXJyb3IgYXQgKCR7dGhpcy5saW5lfSk6ICAke21lc3NhZ2V9YCk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciB3aGlsZSBzY2FubmluZy4gRXhlY3V0aW9uIGhhcyBiZWVuIHN0b3BlZCcpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBUb2tlbiB9IGZyb20gJy4vdG9rZW4nO1xyXG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnLi9jb25zb2xlJztcclxuZGVjbGFyZSB2YXIgY29uem9sZTogQ29uc29sZTtcclxuXHJcbmV4cG9ydCBjbGFzcyBTY29wZSB7XHJcblxyXG4gICAgcHJpdmF0ZSB2YWx1ZXM6IE1hcDxzdHJpbmcsIGFueT47XHJcbiAgICBwcml2YXRlIHBhcmVudDogU2NvcGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyZW50OiBTY29wZSA9IG51bGwpIHtcclxuICAgICAgICB0aGlzLnZhbHVlcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNjb3BlRXJyb3IobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29uem9sZS5lcnJvcihgW3Njb3BlIGVycm9yXSA9PiAke21lc3NhZ2V9YCk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnZhbHVlcy5zZXQobmFtZSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWZpbmUobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWVzLmhhcyhuYW1lKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjb3BlRXJyb3IoYGlkZW50aWZpZXIgXCIke25hbWV9XCIgaGFzIGFscmVhZHkgYmVlbiBkZWZpbmVkYCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXQobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXNzaWduKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlcy5oYXMobmFtZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXQobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50LmFzc2lnbihuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY29wZUVycm9yKGBJZGVudGlmaWVyIFwiJHtuYW1lfVwiIGhhcyBub3QgYmVlbiBkZWZpbmVkYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQobmFtZTogVG9rZW4pOiBhbnkge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlcy5oYXMobmFtZS5sZXhlbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5nZXQobmFtZS5sZXhlbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wYXJlbnQgIT09IG51bGwgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5nZXQobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NvcGVFcnJvcihgRXJyb3IgYXQgKCR7bmFtZS5saW5lfSk6IFwiJHtuYW1lLmxleGVtZX1cIiBpcyBub3QgZGVmaW5lZGApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaXJzdChrZXk6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWVzLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5nZXQoa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9idGFpbihrZXk6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWVzLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5nZXQoa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5vYnRhaW4oa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFRva2VuIH0gZnJvbSAndG9rZW4nO1xyXG5cclxuaW1wb3J0IHsgRXhwciB9IGZyb20gJ2V4cHJlc3Npb24nO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0bXQge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICBjb25zdHJ1Y3RvcigpIHt9XHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUjtcclxufVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RtdFZpc2l0b3I8Uj4ge1xyXG4gICAgdmlzaXRCbG9ja1N0bXQoc3RtdDogQmxvY2spOiBSO1xyXG4gICAgdmlzaXRDbGFzc1N0bXQoc3RtdDogQ2xhc3MpOiBSO1xyXG4gICAgdmlzaXREb1doaWxlU3RtdChzdG10OiBEb1doaWxlKTogUjtcclxuICAgIHZpc2l0RXhwcmVzc2lvblN0bXQoc3RtdDogRXhwcmVzc2lvbik6IFI7XHJcbiAgICB2aXNpdEZ1bmNTdG10KHN0bXQ6IEZ1bmMpOiBSO1xyXG4gICAgdmlzaXRJZlN0bXQoc3RtdDogSWYpOiBSO1xyXG4gICAgdmlzaXRQcmludFN0bXQoc3RtdDogUHJpbnQpOiBSO1xyXG4gICAgdmlzaXRSZXR1cm5TdG10KHN0bXQ6IFJldHVybik6IFI7XHJcbiAgICB2aXNpdFZhclN0bXQoc3RtdDogVmFyKTogUjtcclxuICAgIHZpc2l0V2hpbGVTdG10KHN0bXQ6IFdoaWxlKTogUjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJsb2NrIGV4dGVuZHMgU3RtdCB7XHJcbiAgICBwdWJsaWMgc3RhdGVtZW50czogU3RtdFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHN0YXRlbWVudHM6IFN0bXRbXSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZW1lbnRzID0gc3RhdGVtZW50cztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XHJcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRCbG9ja1N0bXQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdTdG10LkJsb2NrJztcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgQ2xhc3MgZXh0ZW5kcyBTdG10IHtcclxuICAgIHB1YmxpYyBuYW1lOiBUb2tlbjtcclxuICAgIHB1YmxpYyBwYXJlbnQ6IFRva2VuO1xyXG4gICAgcHVibGljIG1ldGhvZHM6IEZ1bmNbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBUb2tlbiwgcGFyZW50OiBUb2tlbiwgbWV0aG9kczogRnVuY1tdKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgIHRoaXMubWV0aG9kcyA9IG1ldGhvZHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xyXG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q2xhc3NTdG10KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnU3RtdC5DbGFzcyc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERvV2hpbGUgZXh0ZW5kcyBTdG10IHtcclxuICAgIHB1YmxpYyBsb29wOiBTdG10O1xyXG4gICAgcHVibGljIGNvbmRpdGlvbjogRXhwcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihsb29wOiBTdG10LCBjb25kaXRpb246IEV4cHIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubG9vcCA9IGxvb3A7XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xyXG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RG9XaGlsZVN0bXQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdTdG10LkRvV2hpbGUnO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFeHByZXNzaW9uIGV4dGVuZHMgU3RtdCB7XHJcbiAgICBwdWJsaWMgZXhwcmVzc2lvbjogRXhwcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihleHByZXNzaW9uOiBFeHByKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcclxuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEV4cHJlc3Npb25TdG10KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnU3RtdC5FeHByZXNzaW9uJztcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgRnVuYyBleHRlbmRzIFN0bXQge1xyXG4gICAgcHVibGljIG5hbWU6IFRva2VuO1xyXG4gICAgcHVibGljIHBhcmFtczogVG9rZW5bXTtcclxuICAgIHB1YmxpYyBib2R5OiBTdG10W107XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogVG9rZW4sIHBhcmFtczogVG9rZW5bXSwgYm9keTogU3RtdFtdKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xyXG4gICAgICAgIHRoaXMuYm9keSA9IGJvZHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xyXG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RnVuY1N0bXQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdTdG10LkZ1bmMnO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBJZiBleHRlbmRzIFN0bXQge1xyXG4gICAgcHVibGljIGNvbmRpdGlvbjogRXhwcjtcclxuICAgIHB1YmxpYyB0aGVuU3RtdDogU3RtdDtcclxuICAgIHB1YmxpYyBlbHNlU3RtdDogU3RtdDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25kaXRpb246IEV4cHIsIHRoZW5TdG10OiBTdG10LCBlbHNlU3RtdDogU3RtdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XHJcbiAgICAgICAgdGhpcy50aGVuU3RtdCA9IHRoZW5TdG10O1xyXG4gICAgICAgIHRoaXMuZWxzZVN0bXQgPSBlbHNlU3RtdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XHJcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRJZlN0bXQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdTdG10LklmJztcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgUHJpbnQgZXh0ZW5kcyBTdG10IHtcclxuICAgIHB1YmxpYyBleHByZXNzaW9uOiBFeHByO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGV4cHJlc3Npb246IEV4cHIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xyXG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UHJpbnRTdG10KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnU3RtdC5QcmludCc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJldHVybiBleHRlbmRzIFN0bXQge1xyXG4gICAgcHVibGljIGtleXdvcmQ6IFRva2VuO1xyXG4gICAgcHVibGljIHZhbHVlOiBFeHByO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGtleXdvcmQ6IFRva2VuLCB2YWx1ZTogRXhwcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5rZXl3b3JkID0ga2V5d29yZDtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xyXG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UmV0dXJuU3RtdCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ1N0bXQuUmV0dXJuJztcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgVmFyIGV4dGVuZHMgU3RtdCB7XHJcbiAgICBwdWJsaWMgbmFtZTogVG9rZW47XHJcbiAgICBwdWJsaWMgdHlwZTogVG9rZW47XHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZXI6IEV4cHI7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogVG9rZW4sIHR5cGU6IFRva2VuLCBpbml0aWFsaXplcjogRXhwcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZXIgPSBpbml0aWFsaXplcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XHJcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRWYXJTdG10KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnU3RtdC5WYXInO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBXaGlsZSBleHRlbmRzIFN0bXQge1xyXG4gICAgcHVibGljIGNvbmRpdGlvbjogRXhwcjtcclxuICAgIHB1YmxpYyBsb29wOiBTdG10O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmRpdGlvbjogRXhwciwgbG9vcDogU3RtdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XHJcbiAgICAgICAgdGhpcy5sb29wID0gbG9vcDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XHJcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRXaGlsZVN0bXQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdTdG10LldoaWxlJztcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZW51bSBUb2tlblR5cGUge1xyXG4gICAgLy8gcGFyc2VyIHRva2Vuc1xyXG4gICAgZW9mLFxyXG4gICAgcGFuaWMsXHJcbiAgICBsYW1iZGEsXHJcblxyXG4gICAgLy8gc2luZ2xlIGNoYXJhY3RlciB0b2tlbnNcclxuICAgIGFtcGVyc2FuZCxcclxuICAgIGF0U2lnbixcclxuICAgIGNhcmV0LFxyXG4gICAgY29tbWEsXHJcbiAgICBkb2xsYXIsXHJcbiAgICBkb3QsXHJcbiAgICBsZWZ0QnJhY2UsXHJcbiAgICBsZWZ0QnJhY2tldCxcclxuICAgIGxlZnRQYXJlbixcclxuICAgIHBlcmNlbnQsXHJcbiAgICBwaXBlLFxyXG4gICAgcmlnaHRCcmFjZSxcclxuICAgIHJpZ2h0QnJhY2tldCxcclxuICAgIHJpZ2h0UGFyZW4sXHJcbiAgICBzZW1pY29sb24sXHJcbiAgICBzbGFzaCxcclxuICAgIHN0YXIsXHJcblxyXG4gICAgLy8gb25lIG9yIHR3byBjaGFyYWN0ZXIgdG9rZW5zXHJcbiAgICBhcnJvdyxcclxuICAgIGJhbmcsXHJcbiAgICBiYW5nRXF1YWwsXHJcbiAgICBjb2xvbixcclxuICAgIGVxdWFsLFxyXG4gICAgZXF1YWxFcXVhbCxcclxuICAgIGdyZWF0ZXIsXHJcbiAgICBncmVhdGVyRXF1YWwsXHJcbiAgICBsZXNzLFxyXG4gICAgbGVzc0VxdWFsLFxyXG4gICAgbWludXMsXHJcbiAgICBtaW51c0VxdWFsLFxyXG4gICAgbWludXNNaW51cyxcclxuICAgIHBlcmNlbnRFcXVhbCxcclxuICAgIHBsdXMsXHJcbiAgICBwbHVzRXF1YWwsXHJcbiAgICBwbHVzUGx1cyxcclxuICAgIHF1ZXN0aW9uLFxyXG4gICAgc2xhc2hFcXVhbCxcclxuICAgIHN0YXJFcXVhbCxcclxuXHJcbiAgICAvLyB0aHJlZSBjaGFyYWN0ZXIgdG9rZW5zXHJcbiAgICBiYW5nRXF1YWxFcXVhbCxcclxuICAgIGVxdWFsRXF1YWxFcXVhbCxcclxuXHJcbiAgICAvLyBsaXRlcmFsc1xyXG4gICAgaWRlbnRpZmllcixcclxuICAgIHN0cmluZyxcclxuICAgIG51bWJlcixcclxuXHJcbiAgICAvLyBrZXl3b3Jkc1xyXG4gICAgYW5kLFxyXG4gICAgY2xhc3MsXHJcbiAgICBkbyxcclxuICAgIGVsc2UsXHJcbiAgICBleHRlbmRzLFxyXG4gICAgZmFsc2UsXHJcbiAgICBmb3IsXHJcbiAgICBmdW5jLFxyXG4gICAgZnVuY3Rpb24sXHJcbiAgICBpZixcclxuICAgIGxldCxcclxuICAgIG5ldyxcclxuICAgIG51bGwsXHJcbiAgICBvcixcclxuICAgIHByaW50LFxyXG4gICAgcmV0dXJuLFxyXG4gICAgc3VwZXIsXHJcbiAgICB0cnVlLFxyXG4gICAgdmFyLFxyXG4gICAgd2hpbGVcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRva2VuIHtcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbGluZTogbnVtYmVyO1xyXG4gICAgcHVibGljIHR5cGU6IFRva2VuVHlwZTtcclxuICAgIHB1YmxpYyBsaXRlcmFsOiBhbnk7XHJcbiAgICBwdWJsaWMgbGV4ZW1lOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBsZXhlbWU6IHN0cmluZywgbGl0ZXJhbDogYW55LCBsaW5lOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IFRva2VuVHlwZVtuYW1lXTtcclxuICAgICAgICB0aGlzLmxleGVtZSA9IGxleGVtZTtcclxuICAgICAgICB0aGlzLmxpdGVyYWwgPSBsaXRlcmFsO1xyXG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gYFsoJHt0aGlzLmxpbmV9KTpcIiR7dGhpcy5sZXhlbWV9XCJdYDtcclxuICAgIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==