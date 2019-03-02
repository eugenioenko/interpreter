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
        if (this.parent) {
            //scope.set('super', Runtime.superCall(this, thiz));
        }
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
            debugger;
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
        let result = [];
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
    window.conzole.clear();
    window.execute(source);
    return window.conzole.first();
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
        stmt.accept(this);
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
        this.evaluate(stmt.expression);
    }
    visitPrintStmt(stmt) {
        let value = this.evaluate(stmt.expression);
        value = value === null ? "null" : value;
        conzole.log(value);
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
        for (let key of expr.index) {
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
        let construct = stmt.methods.find(method => method.name.lexeme === "constructor");
        const methods = stmt.methods.filter(method => method.name.lexeme !== "constructor");
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
        for (let method of methods) {
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
        let match = this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].semicolon);
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
            while (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].semicolon))
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
;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVtby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50aXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9leHByZXNzaW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJwcmV0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhcnNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdG90eXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZXR1cm4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjYW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njb3BlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rva2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7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LEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUMvQyxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUNqRCxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUM3SSxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDNUcsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUN0RSxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQzVFLEtBQUssR0FBRztnQkFBRSxJ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Q1AsNENBQUs7SUFDTCx3Q0FBRztJQUNILDBDQUFJO0lBQ0osa0RBQVE7SUFDUixzQ0FBRTtJQUNGLHdDQUFHO0lBQ0gsd0NBQUc7SUFDSCwwQ0FBSTtJQUNKLHNDQUFFO0lBQ0YsNENBQUs7SUFDTCw4Q0FBTTtJQUNOLDRDQUFLO0lBQ0wsMENBQUk7SUFDSix3Q0FBRztJQUNILDRDQUFLO0FBQ1QsQ0FBQyxFQTdFVyxTQUFTLEtBQVQsU0FBUyxRQTZFcEI7QUFFTSxNQUFNLEtBQUs7SUFPZCxZQUFZLElBQVksRUFBRSxNQUFjLEVBQUUsT0FBWSxFQUFFLElBQVk7UUFDaEUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFFckIsQ0FBQztJQUVNLFFBQVE7UUFDWCxPQUFPLEtBQUssSUFBSSxDQUFDLElBQUksTUFBTSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUM7SUFDL0MsQ0FBQztDQUVKIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiZXhwb3J0IGVudW0gQ29uc29sZU1lc3NhZ2VUeXBlIHtcclxuICAgIFVzZXIsXHJcbiAgICBFcnJvcixcclxuICAgIFdhcm5pbmcsXHJcbiAgICBJbmZvXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25zb2xlTWVzc2FnZSB7XHJcbiAgICBwdWJsaWMgdGltZTogRGF0ZTtcclxuICAgIHB1YmxpYyB0ZXh0OiBhbnk7XHJcbiAgICBwdWJsaWMgdHlwZTogQ29uc29sZU1lc3NhZ2VUeXBlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uc29sZSB7XHJcblxyXG4gICAgcHVibGljIG1lc3NhZ2VzOiBDb25zb2xlTWVzc2FnZVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZChtZXNzYWdlOiBhbnksIHR5cGU6IENvbnNvbGVNZXNzYWdlVHlwZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMucHVzaCh7XHJcbiAgICAgICAgICAgIHRleHQ6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgICAgICB0eXBlOiB0eXBlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9nKG1lc3NhZ2U6IGFueSkge1xyXG4gICAgICAgIHRoaXMuYWRkKG1lc3NhZ2UsIENvbnNvbGVNZXNzYWdlVHlwZS5Vc2VyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgd2FybihtZXNzYWdlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmFkZChtZXNzYWdlLCBDb25zb2xlTWVzc2FnZVR5cGUuV2FybmluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVycm9yKG1lc3NhZ2U6IGFueSkge1xyXG4gICAgICAgIHRoaXMuYWRkKG1lc3NhZ2UsIENvbnNvbGVNZXNzYWdlVHlwZS5FcnJvcik7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbmZvKG1lc3NhZ2U6IGFueSkge1xyXG4gICAgICAgIHRoaXMuYWRkKG1lc3NhZ2UsIENvbnNvbGVNZXNzYWdlVHlwZS5JbmZvKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmlyc3QoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlc1swXS50ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsYXN0KCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZXNbdGhpcy5tZXNzYWdlcy5sZW5ndGgtMV0udGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHJpbnQoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2codGhpcy5tZXNzYWdlcy5tYXAoKGNtKSA9PiBjbS50ZXh0KSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBEZW1vU291cmNlQ29kZSA9XHJcbmBcclxuLy8gc2xpY2luZyBzdHJpbmdzXHJcbnByaW50IFwib25lIHR3byB0aHJlZSBmb3VyXCJbNDo3OjFdOyAvLyBwcmludHMgdHdvXHJcbnByaW50IFwiaGVsbG8gd29ybGRcIls2OjoxXTsgLy8gcHJpbnRzIHdvcmxkXHJcbnByaW50IFwiaGVsbG8gd29ybGRcIls6Oi0xXTsgLy9wcmludHMgZGxyb3cgb2xsZWhcclxuXHJcbi8vIFByb3RvdHlwZSBvYmplY3RzXHJcbkBNeUNsYXNzKHRleHQpIHtcclxuICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbn1cclxuTXlDbGFzcy5tZXRob2QgPSBAKHRleHQpIHtcclxuICAgIHRoaXMudGV4dCA9IHRoaXMudGV4dCArIHRleHQ7XHJcbn07XHJcbk15Q2xhc3MuY291bnQgPSBAKHRpbWVzKSB7XHJcbiAgICBAbmVzdGVkKG51bSkge1xyXG4gICAgICAgIHJldHVybiBudW0gKiBudW07XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbWVzOyArK2kpIHtcclxuICAgICAgICBwcmludCBuZXN0ZWQoaSk7XHJcbiAgICB9XHJcbn07XHJcbnZhciBpbnN0YW5jZSA9IG5ldyBNeUNsYXNzKCdIZWxsbyAnKTtcclxuaW5zdGFuY2UubWV0aG9kKCdXb3JsZCcpO1xyXG5pbnN0YW5jZS5jb3VudCgzKTtcclxucHJpbnQgaW5zdGFuY2UudGV4dDtcclxuXHJcbi8vIHN1Z2FyIGNvYXRlZCBjbGFzc2VzXHJcbmNsYXNzIE15Q2xhc3NDbGFzcyB7XHJcbiAgICBjb25zdHJ1Y3RvcihhbGZhKSB7XHJcbiAgICAgICAgdGhpcy5zb21ldGhpbmcgPSAnYW55dGhpbmcnICsgYWxmYTtcclxuICAgIH1cclxufVxyXG5sZXQgdGVzdENsYXNzQ2xhc3MgPSBuZXcgTXlDbGFzc0NsYXNzKCcgaXMgc29tZXRoaW5nJyk7XHJcbnByaW50IHRlc3RDbGFzc0NsYXNzLnNvbWV0aGluZztcclxuXHJcbi8vIHNoYWxsb3cgbXVsdGlwbGUgaW5oZXJpdGFuY2VcclxuQEJsYWRlKCkge1xyXG4gICAgdGhpcy5zaGFycG5lc3MgPSBcInZlcnkgc2hhcnBcIjtcclxufVxyXG5CbGFkZS5jdXQgPSBAKCkge1xyXG4gICAgcHJpbnQgXCJjdXR0aW5nLi4uXCIgKyB0aGlzLnNoYXJwbmVzcztcclxufTtcclxuQEhhbmRsZSgpIHtcclxuICAgIHRoaXMuY29sb3IgPSBcIndvb2RcIjtcclxufVxyXG5IYW5kbGUuaG9sZCA9IEAoKSB7XHJcbiAgICBwcmludCBcImhvbGRpbmcuLi5cIiArIHRoaXMuY29sb3I7XHJcbn07XHJcbkBLbmlmZSgpIHtcclxuICAgIEJsYWRlLmludm9rZSh0aGlzKTtcclxuICAgIEhhbmRsZS5pbnZva2UodGhpcyk7XHJcbn1cclxuS25pZmUubWVyZ2UoQmxhZGUpO1xyXG5LbmlmZS5tZXJnZShIYW5kbGUpO1xyXG5sZXQga25pZmUgPSBuZXcgS25pZmUoKTtcclxua25pZmUuY3V0KCk7XHJcbmtuaWZlLmhvbGQoKTtcclxuXHJcbi8vIFJlY3Vyc2l2ZSBmdW5jdGlvblxyXG5mdW5jdGlvbiBmYWN0b3JpYWxpemUobikge1xyXG4gICAgaWYgKG4gPCAwKSB7XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gICAgaWYgKG4gPT0gMCkge1xyXG4gICAgICAgIHJldHVybiAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChuICogZmFjdG9yaWFsaXplKG4gLSAxKSk7XHJcbn1cclxucHJpbnQgZmFjdG9yaWFsaXplKDExKTtcclxuXHJcbi8vIHNhbWUgYXMgZmFjdG9yaWFsaXplIGJ1dCB3aXRoIHRlcm5hcnlcclxuLy8gYW5kIHNob3J0IGZvcm0gZnVuY3Rpb24gZGVmaW5pdGlvblxyXG5AZmFjdG9yaWFsaXplMihuKSA9PlxyXG4gICAgbiA8IDAgPyAtMSA6IChuID09IDAgPyAxIDogKG4gKiBmYWN0b3JpYWxpemUobiAtIDEpKSk7XHJcblxyXG5wcmludCBmYWN0b3JpYWxpemUyKDEyKTtcclxuXHJcbi8vIG5lc3RlZCBmdW5jdGlvbiByZXR1cm5zIGZ1bmN0aW9uXHJcbkBhZGQoYSkgPT4gQChiKSA9PiBAKGMpID0+IGEgKyBiICsgYztcclxucHJpbnQgYWRkKDEwMCkoMjApKDMpO1xyXG5cclxuZnVuYyBzdWIoYSkge1xyXG4gICAgcmV0dXJuIGZ1bmMgKGIpIHtcclxuICAgICAgICByZXR1cm4gZnVuYyAoYykge1xyXG4gICAgICAgICAgICByZXR1cm4gYSAtIGIgLSBjO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG59XHJcbnByaW50IHN1YigxMDApKDEwKSgxKTtcclxuXHJcbi8vIHdoaWxlIGxvb3AgYW5kIHRlcm5hcnkgb3BlcmF0b3JcclxubGV0IGkgPSAwO1xyXG53aGlsZSAoaSA8PSA0KSB7XHJcbiAgICBwcmludCBpICUgMiA/ICdvZGQnIDogJ2V2ZW4nO1xyXG4gICAgaSA9IGkgKyAxO1xyXG59XHJcbi8vIGxpdGVyYWxzXHJcbnZhciBsaXRlcmFsID0ge1xyXG4gICAgZmlyc3RuYW1lOiBcIkpvaG5cIixcclxuICAgIGxhc3RuYW1lOiBcIkRvZVwiLFxyXG4gICAgcmVjb3Jkczoge1xyXG4gICAgICAgIHByZXY6IFwicHJldmlvdXNcIixcclxuICAgICAgICBuZXh0OiBcIm5leHRcIlxyXG4gICAgfVxyXG59O1xyXG5wcmludCBsaXRlcmFsLnJlY29yZHMucHJldjtcclxuXHJcbmxldCB4ID0gWzEsIDIwLCAzMDBdO1xyXG5sZXQgeSA9IFsxMDAsIHhbMV1dO1xyXG5wcmludCB5WzBdO1xyXG55LnB1c2goeCk7XHJcbnkubmV3UHJvcGVydHkgPSBcImFueXRoaW5nXCI7XHJcbnByaW50IHkuam9pbignLCcpO1xyXG5sZXQgeiA9IHkuam9pbignLScpO1xyXG5gO1xyXG4iLCJpbXBvcnQgeyBJbnRlcnByZXRlciB9IGZyb20gJy4vaW50ZXJwcmV0ZXInO1xyXG5pbXBvcnQgeyBTY29wZSB9IGZyb20gJy4vc2NvcGUnO1xyXG5pbXBvcnQgeyBSZXR1cm4gfSBmcm9tICcuL3JldHVybic7XHJcbmltcG9ydCB7IFByb3RvdHlwZSB9IGZyb20gJy4vcHJvdG90eXBlJztcclxuaW1wb3J0ICogYXMgU3RtdCBmcm9tICcuL3N0YXRlbWVudCc7XHJcbmltcG9ydCAqIGFzIFJ1bnRpbWUgZnJvbSAnLi9ydW50aW1lJztcclxuZGVjbGFyZSB2YXIgY29uem9sZTogQ29uc29sZTtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbmRleFJhbmdlIHtcclxuICAgIHB1YmxpYyBzdGFydDogbnVtYmVyO1xyXG4gICAgcHVibGljIGVuZDogbnVtYmVyO1xyXG4gICAgcHVibGljIHN0ZXA6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlciwgc3RlcDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xyXG4gICAgICAgIHRoaXMuZW5kID0gZW5kO1xyXG4gICAgICAgIHRoaXMuc3RlcCA9IHN0ZXA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBwdWJsaWMgY2FsbDogKGludGVycHJldGVyOiBJbnRlcnByZXRlciwgdGhpejogYW55LCBhcmdzOiBhbnlbXSkgPT4gYW55O1xyXG4gICAgcHVibGljIHRvU3RyaW5nOiAoKSA9PiBzdHJpbmcgPSAoKSA9PiAnPG5hdGl2ZSBmdW5jdGlvbj4nO1xyXG4gICAgcHVibGljIGFyaXR5OiAoKSA9PiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQcm90b3R5cGVFbnRpdHkge1xyXG4gICAgcHVibGljIHByb3RvdHlwZTogUHJvdG90eXBlO1xyXG4gICAgcHVibGljIHByb3BlcnRpZXM6IE1hcDxzdHJpbmcsIGFueT47XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUgPSBuZXcgUHJvdG90eXBlKG51bGwsIG51bGwsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS52YWx1ZXMuc2V0KCdoYXNPd25Qcm9wZXJ0eScsIFJ1bnRpbWUuaGFzT3duUHJvcGVydHkodGhpcykpO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ3NpemUnLCBSdW50aW1lLmxlbmd0aFByb3BlcnR5KTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS52YWx1ZXMuc2V0KCdpbmhlcml0JywgUnVudGltZS5pbmhlcml0TWV0aG9kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wZXJ0aWVzLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BlcnRpZXMuZ2V0KGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3RvdHlwZS5nZXQoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzLnNldChrZXksIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJzxwcm90b3R5cGUgZW50aXR5Pic7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDYWxsYWJsZUVudGl0eSBleHRlbmRzIFByb3RvdHlwZUVudGl0eSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS52YWx1ZXMuc2V0KCdpbnZva2UnLCBSdW50aW1lLmludm9rZU1ldGhvZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFyaXR5KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhbGwoaW50ZXJwcmV0ZXI6IEludGVycHJldGVyLCB0aGl6OiBhbnksIGFyZ3M6IGFueVtdKTogYW55IHsgcmV0dXJuOyB9XHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJzxpbnRlcm5hbCBmdW5jdGlvbj4nO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uRW50aXR5IGV4dGVuZHMgQ2FsbGFibGVFbnRpdHkge1xyXG4gICAgcHVibGljIGRlY2xhcmF0aW9uOiBTdG10LkZ1bmM7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBjbG9zdXJlOiBTY29wZTtcclxuICAgIHB1YmxpYyBwYXJlbnQ6IEZ1bmN0aW9uRW50aXR5O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRlY2xhcmF0aW9uOiBTdG10LkZ1bmMsIGNsb3N1cmU6IFNjb3BlLCBwYXJlbnQ6IEZ1bmN0aW9uRW50aXR5ID0gbnVsbCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5kZWNsYXJhdGlvbiA9IGRlY2xhcmF0aW9uO1xyXG4gICAgICAgIHRoaXMuY2xvc3VyZSA9IGNsb3N1cmU7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgnbWVyZ2UnLCBSdW50aW1lLm1lcmdlTWV0aG9kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS52YWx1ZXMuc2V0KCdleHRlbmQnLCBSdW50aW1lLmV4dGVuZE1ldGhvZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5kZWNsYXJhdGlvbi5uYW1lLmxleGVtZTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS52YWx1ZXMuc2V0KCduYW1lJywgdGhpcy5uYW1lKTtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYDwke3RoaXMubmFtZX0gIGZ1bmN0aW9uPmA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFyaXR5KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb24ucGFyYW1zLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FsbChpbnRlcnByZXRlcjogSW50ZXJwcmV0ZXIsIHRoaXo6IGFueSwgYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IHNjb3BlID0gbmV3IFNjb3BlKHRoaXMuY2xvc3VyZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRlY2xhcmF0aW9uLnBhcmFtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBzY29wZS5kZWZpbmUodGhpcy5kZWNsYXJhdGlvbi5wYXJhbXNbaV0ubGV4ZW1lLCBhcmdzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2NvcGUuc2V0KCd0aGlzJywgdGhpeik7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XHJcbiAgICAgICAgICAgIC8vc2NvcGUuc2V0KCdzdXBlcicsIFJ1bnRpbWUuc3VwZXJDYWxsKHRoaXMsIHRoaXopKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaW50ZXJwcmV0ZXIuZXhlY3V0ZUJsb2NrKHRoaXMuZGVjbGFyYXRpb24uYm9keSwgc2NvcGUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBSZXR1cm4pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb256b2xlLmVycm9yKFwiUnVudGltZSBlcnJvci4gRXhlY3V0aW9uIGhhcyBiZWVuIHN0b3BwZWRcIik7XHJcbiAgICAgICAgICAgIGNvbnpvbGUuZXJyb3IoZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUnVudGltZSBlcnJvci4gRXhlY3V0aW9uIGhhcyBiZWVuIHN0b3BwZWRcIik7XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJbnN0YW5jZUVudGl0eSBleHRlbmRzIENhbGxhYmxlRW50aXR5IHtcclxuICAgIHB1YmxpYyBpbnN0YW5jZW9mOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25zdHJ1Y3Q6IEZ1bmN0aW9uRW50aXR5KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmluc3RhbmNlb2YgPSBjb25zdHJ1Y3QuZGVjbGFyYXRpb24ubmFtZS5sZXhlbWU7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlID0gbmV3IFByb3RvdHlwZShjb25zdHJ1Y3QucHJvcGVydGllcywgY29uc3RydWN0LnByb3RvdHlwZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICc8JyArIHRoaXMuaW5zdGFuY2VvZiArIFwiIGluc3RhbmNlPlwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFN0cmluZ0VudGl0eSBleHRlbmRzIFByb3RvdHlwZUVudGl0eSB7XHJcbiAgICBwcml2YXRlIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWVzOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZXM7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgnaW52b2tlJywgUnVudGltZS5pbnZva2VNZXRob2QodGhpcykpO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ3NpemUnLCBSdW50aW1lLnN0cmluZ0xlbmd0aE1ldGhvZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgnc3Vic3RyJywgUnVudGltZS5zdHJpbmdTdWJTdHJNZXRob2QodGhpcykpO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ3NwbGl0JywgUnVudGltZS5zdHJpbmdTcGxpdE1ldGhvZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldChrZXk6IGFueSk6IGFueSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVba2V5XTtcclxuICAgICAgICB9IGVsc2UgaWYgKGtleSBpbnN0YW5jZW9mIEluZGV4UmFuZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmFuZ2Uoa2V5KTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdXBlci5nZXQoa2V5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQoa2V5OiBzdHJpbmcgfCBudW1iZXIsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGtleSAhPT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BlcnRpZXMuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXJpdHkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FsbChpbnRlcnByZXRlcjogSW50ZXJwcmV0ZXIsIHRoaXo6IGFueSwgYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBuZXcgU3RyaW5nRW50aXR5KGFyZ3NbMF0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmFuZ2UocmFuZ2U6IEluZGV4UmFuZ2UpOiBTdHJpbmdFbnRpdHkge1xyXG4gICAgICAgIGlmIChyYW5nZS5zdGVwID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJhbmdlLnN0ZXAgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmFuZ2UuZW5kID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJhbmdlLmVuZCA9IHJhbmdlLnN0ZXAgPiAwID8gdGhpcy52YWx1ZS5sZW5ndGggLSAxIDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJhbmdlLnN0YXJ0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJhbmdlLnN0YXJ0ID0gcmFuZ2Uuc3RlcCA+IDAgPyAwIDogdGhpcy52YWx1ZS5sZW5ndGggLSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gICAgICAgIGlmIChyYW5nZS5zdGVwID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcmFuZ2Uuc3RhcnQ7IGkgPD0gcmFuZ2UuZW5kOyBpICs9IHJhbmdlLnN0ZXApIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSB0aGlzLnZhbHVlW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyYW5nZS5zdGVwIDwgMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcmFuZ2Uuc3RhcnQ7IGkgPj0gcmFuZ2UuZW5kOyBpICs9IHJhbmdlLnN0ZXApIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSB0aGlzLnZhbHVlW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFN0cmluZ0VudGl0eShyZXN1bHQpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFycmF5RW50aXR5IGV4dGVuZHMgUHJvdG90eXBlRW50aXR5IHtcclxuICAgIHB1YmxpYyB2YWx1ZXM6IGFueVtdO1xyXG4gICAgY29uc3RydWN0b3IodmFsdWVzOiBhbnlbXSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy52YWx1ZXMgPSB2YWx1ZXM7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgnaW52b2tlJywgUnVudGltZS5pbnZva2VNZXRob2QodGhpcykpO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ3NpemUnLCBSdW50aW1lLmFycmF5TGVuZ3RoTWV0aG9kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS52YWx1ZXMuc2V0KCdqb2luJywgUnVudGltZS5hcnJheUpvaW5NZXRob2QodGhpcykpO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ3B1c2gnLCBSdW50aW1lLmFycmF5UHVzaE1ldGhvZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgncG9wJywgUnVudGltZS5hcnJheVBvcE1ldGhvZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgnZWFjaCcsIFJ1bnRpbWUuYXJyYXlFYWNoTWV0aG9kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS52YWx1ZXMuc2V0KCdtYXAnLCBSdW50aW1lLmFycmF5TWFwTWV0aG9kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS52YWx1ZXMuc2V0KCdmaW5kJywgUnVudGltZS5hcnJheUZpbmRNZXRob2QodGhpcykpO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ2luZGV4T2YnLCBSdW50aW1lLmFycmF5SW5kZXhPZk1ldGhvZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldChrZXk6IGFueSk6IGFueSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzW2tleV07XHJcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgaW5zdGFuY2VvZiBJbmRleFJhbmdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJhbmdlKGtleSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLmdldChrZXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldChrZXk6IHN0cmluZyB8IG51bWJlciwgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcGVydGllcy5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZXNba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJhbmdlKHJhbmdlOiBJbmRleFJhbmdlKTogQXJyYXlFbnRpdHkge1xyXG4gICAgICAgIGlmIChyYW5nZS5zdGVwID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJhbmdlLnN0ZXAgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmFuZ2UuZW5kID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJhbmdlLmVuZCA9IHJhbmdlLnN0ZXAgPiAwID8gdGhpcy52YWx1ZXMubGVuZ3RoIC0gMSA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyYW5nZS5zdGFydCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByYW5nZS5zdGFydCA9IHJhbmdlLnN0ZXAgPiAwID8gMCA6IHRoaXMudmFsdWVzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgaWYgKHJhbmdlLnN0ZXAgPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSByYW5nZS5zdGFydDsgaSA8PSByYW5nZS5lbmQ7IGkgKz0gcmFuZ2Uuc3RlcCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy52YWx1ZXNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyYW5nZS5zdGVwIDwgMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcmFuZ2Uuc3RhcnQ7IGkgPj0gcmFuZ2UuZW5kOyBpICs9IHJhbmdlLnN0ZXApIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMudmFsdWVzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheUVudGl0eShyZXN1bHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhcml0eSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYWxsKGludGVycHJldGVyOiBJbnRlcnByZXRlciwgdGhpejogYW55LCBhcmdzOiBhbnlbXSk6IGFueSB7IHJldHVybjsgfVxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGBbJHt0aGlzLnZhbHVlcy5qb2luKCcsJyl9XWA7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFRva2VuLCBUb2tlblR5cGUgfSBmcm9tICd0b2tlbic7XG5cbmltcG9ydCB7IFN0bXQgfSBmcm9tICdzdGF0ZW1lbnQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRXhwciB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgY29uc3RydWN0b3IoKSB7fVxuICAgIHB1YmxpYyBhYnN0cmFjdCBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSO1xufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmV4cG9ydCBpbnRlcmZhY2UgRXhwclZpc2l0b3I8Uj4ge1xuICAgIHZpc2l0QXNzaWduRXhwcihleHByOiBBc3NpZ24pOiBSO1xuICAgIHZpc2l0QmluYXJ5RXhwcihleHByOiBCaW5hcnkpOiBSO1xuICAgIHZpc2l0Q2FsbEV4cHIoZXhwcjogQ2FsbCk6IFI7XG4gICAgdmlzaXRFbnRpdHlFeHByKGV4cHI6IEVudGl0eSk6IFI7XG4gICAgdmlzaXRHZXRFeHByKGV4cHI6IEdldCk6IFI7XG4gICAgdmlzaXRHcm91cGluZ0V4cHIoZXhwcjogR3JvdXBpbmcpOiBSO1xuICAgIHZpc2l0S2V5RXhwcihleHByOiBLZXkpOiBSO1xuICAgIHZpc2l0TGFtYmRhRXhwcihleHByOiBMYW1iZGEpOiBSO1xuICAgIHZpc2l0TG9naWNhbEV4cHIoZXhwcjogTG9naWNhbCk6IFI7XG4gICAgdmlzaXRMaXN0RXhwcihleHByOiBMaXN0KTogUjtcbiAgICB2aXNpdExpdGVyYWxFeHByKGV4cHI6IExpdGVyYWwpOiBSO1xuICAgIHZpc2l0TmV3RXhwcihleHByOiBOZXcpOiBSO1xuICAgIHZpc2l0UG9zdGZpeEV4cHIoZXhwcjogUG9zdGZpeCk6IFI7XG4gICAgdmlzaXRSYW5nZUV4cHIoZXhwcjogUmFuZ2UpOiBSO1xuICAgIHZpc2l0U2V0RXhwcihleHByOiBTZXQpOiBSO1xuICAgIHZpc2l0U3VwZXJFeHByKGV4cHI6IFN1cGVyKTogUjtcbiAgICB2aXNpdFRlcm5hcnlFeHByKGV4cHI6IFRlcm5hcnkpOiBSO1xuICAgIHZpc2l0VW5hcnlFeHByKGV4cHI6IFVuYXJ5KTogUjtcbiAgICB2aXNpdFZhcmlhYmxlRXhwcihleHByOiBWYXJpYWJsZSk6IFI7XG4gICAgdmlzaXRadHJpbmdFeHByKGV4cHI6IFp0cmluZyk6IFI7XG59XG5cbmV4cG9ydCBjbGFzcyBBc3NpZ24gZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgbmFtZTogVG9rZW47XG4gICAgcHVibGljIHZhbHVlOiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogVG9rZW4sIHZhbHVlOiBFeHByKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0QXNzaWduRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkFzc2lnbic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEJpbmFyeSBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBsZWZ0OiBFeHByO1xuICAgIHB1YmxpYyBvcGVyYXRvcjogVG9rZW47XG4gICAgcHVibGljIHJpZ2h0OiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IobGVmdDogRXhwciwgb3BlcmF0b3I6IFRva2VuLCByaWdodDogRXhwcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0QmluYXJ5RXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkJpbmFyeSc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENhbGwgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgY2FsbGVlOiBFeHByO1xuICAgIHB1YmxpYyBwYXJlbjogVG9rZW47XG4gICAgcHVibGljIGFyZ3M6IEV4cHJbXTtcbiAgICBwdWJsaWMgdGhpejogYW55O1xuXG4gICAgY29uc3RydWN0b3IoY2FsbGVlOiBFeHByLCBwYXJlbjogVG9rZW4sIGFyZ3M6IEV4cHJbXSwgdGhpejogYW55KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY2FsbGVlID0gY2FsbGVlO1xuICAgICAgICB0aGlzLnBhcmVuID0gcGFyZW47XG4gICAgICAgIHRoaXMuYXJncyA9IGFyZ3M7XG4gICAgICAgIHRoaXMudGhpeiA9IHRoaXo7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdENhbGxFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuQ2FsbCc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEVudGl0eSBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBwcm9wZXJ0aWVzOiBFeHByW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzOiBFeHByW10pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RW50aXR5RXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkVudGl0eSc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEdldCBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBlbnRpdHk6IEV4cHI7XG4gICAgcHVibGljIGtleTogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKGVudGl0eTogRXhwciwga2V5OiBFeHByKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZW50aXR5ID0gZW50aXR5O1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0R2V0RXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkdldCc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEdyb3VwaW5nIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIGV4cHJlc3Npb246IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihleHByZXNzaW9uOiBFeHByKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEdyb3VwaW5nRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkdyb3VwaW5nJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgS2V5IGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIG5hbWU6IFRva2VuO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogVG9rZW4pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0S2V5RXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLktleSc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIExhbWJkYSBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBsYW1iZGE6IFN0bXQ7XG5cbiAgICBjb25zdHJ1Y3RvcihsYW1iZGE6IFN0bXQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5sYW1iZGEgPSBsYW1iZGE7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdExhbWJkYUV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5MYW1iZGEnO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBMb2dpY2FsIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIGxlZnQ6IEV4cHI7XG4gICAgcHVibGljIG9wZXJhdG9yOiBUb2tlbjtcbiAgICBwdWJsaWMgcmlnaHQ6IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihsZWZ0OiBFeHByLCBvcGVyYXRvcjogVG9rZW4sIHJpZ2h0OiBFeHByKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRMb2dpY2FsRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkxvZ2ljYWwnO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBMaXN0IGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIHZhbHVlOiBFeHByW107XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogRXhwcltdKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TGlzdEV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5MaXN0JztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTGl0ZXJhbCBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyB2YWx1ZTogYW55O1xuXG4gICAgY29uc3RydWN0b3IodmFsdWU6IGFueSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdExpdGVyYWxFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuTGl0ZXJhbCc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE5ldyBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBjb25zdHJ1Y3Q6IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25zdHJ1Y3Q6IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3QgPSBjb25zdHJ1Y3Q7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdE5ld0V4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5OZXcnO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBQb3N0Zml4IGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIG5hbWU6IFRva2VuO1xuICAgIHB1YmxpYyBpbmNyZW1lbnQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IFRva2VuLCBpbmNyZW1lbnQ6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmluY3JlbWVudCA9IGluY3JlbWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UG9zdGZpeEV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5Qb3N0Zml4JztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUmFuZ2UgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgc3RhcnQ6IEV4cHI7XG4gICAgcHVibGljIGVuZDogRXhwcjtcbiAgICBwdWJsaWMgc3RlcDogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKHN0YXJ0OiBFeHByLCBlbmQ6IEV4cHIsIHN0ZXA6IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xuICAgICAgICB0aGlzLmVuZCA9IGVuZDtcbiAgICAgICAgdGhpcy5zdGVwID0gc3RlcDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UmFuZ2VFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuUmFuZ2UnO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTZXQgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgZW50aXR5OiBFeHByO1xuICAgIHB1YmxpYyBrZXk6IEV4cHI7XG4gICAgcHVibGljIHZhbHVlOiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IoZW50aXR5OiBFeHByLCBrZXk6IEV4cHIsIHZhbHVlOiBFeHByKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZW50aXR5ID0gZW50aXR5O1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRTZXRFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuU2V0JztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU3VwZXIgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgaW5kZXg6IFRva2VuW107XG4gICAgcHVibGljIGFyZ3M6IEV4cHJbXTtcblxuICAgIGNvbnN0cnVjdG9yKGluZGV4OiBUb2tlbltdLCBhcmdzOiBFeHByW10pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLmFyZ3MgPSBhcmdzO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRTdXBlckV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5TdXBlcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFRlcm5hcnkgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgY29uZGl0aW9uOiBFeHByO1xuICAgIHB1YmxpYyB0aGVuRXhwcjogRXhwcjtcbiAgICBwdWJsaWMgZWxzZUV4cHI6IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25kaXRpb246IEV4cHIsIHRoZW5FeHByOiBFeHByLCBlbHNlRXhwcjogRXhwcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAgICAgdGhpcy50aGVuRXhwciA9IHRoZW5FeHByO1xuICAgICAgICB0aGlzLmVsc2VFeHByID0gZWxzZUV4cHI7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFRlcm5hcnlFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuVGVybmFyeSc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFVuYXJ5IGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIG9wZXJhdG9yOiBUb2tlbjtcbiAgICBwdWJsaWMgcmlnaHQ6IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihvcGVyYXRvcjogVG9rZW4sIHJpZ2h0OiBFeHByKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRVbmFyeUV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5VbmFyeSc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFZhcmlhYmxlIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIG5hbWU6IFRva2VuO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogVG9rZW4pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VmFyaWFibGVFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuVmFyaWFibGUnO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBadHJpbmcgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgdmFsdWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRadHJpbmdFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuWnRyaW5nJztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBTY2FubmVyIH0gZnJvbSAnLi9zY2FubmVyJztcclxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnLi9wYXJzZXInO1xyXG5pbXBvcnQgeyBJbnRlcnByZXRlciB9IGZyb20gJy4vaW50ZXJwcmV0ZXInO1xyXG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnLi9jb25zb2xlJztcclxuaW1wb3J0IHsgRGVtb1NvdXJjZUNvZGUgfSBmcm9tICcuL2RlbW8nO1xyXG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueTtcclxuZGVjbGFyZSB2YXIgZ2xvYmFsOiBhbnk7XHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIGdsb2JhbC53aW5kb3cgPSBnbG9iYWw7XHJcbn1cclxuXHJcbndpbmRvdy5jb256b2xlID0gbmV3IENvbnNvbGUoKTtcclxud2luZG93LmRlbW9Tb3VyY2VDb2RlID0gRGVtb1NvdXJjZUNvZGU7XHJcbndpbmRvdy5leGVjdXRlID0gKHNvdXJjZTogc3RyaW5nKTogQ29uc29sZSA9PiB7XHJcbiAgICByZXR1cm4gKG5ldyBJbnRlcnByZXRlcigpLmludGVycGV0KChuZXcgUGFyc2VyKChuZXcgU2Nhbm5lcihzb3VyY2UpKS5zY2FuKCkpKS5wYXJzZSgpKSk7XHJcbn07XHJcblxyXG53aW5kb3cuYXRzY3JpcHQgPSAoc291cmNlOiBzdHJpbmcpID0+IHtcclxuICAgIHdpbmRvdy5jb256b2xlLmNsZWFyKCk7XHJcbiAgICB3aW5kb3cuZXhlY3V0ZShzb3VyY2UpO1xyXG4gICAgcmV0dXJuIHdpbmRvdy5jb256b2xlLmZpcnN0KCk7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgRXhwciBmcm9tICcuL2V4cHJlc3Npb24nO1xyXG5pbXBvcnQgKiBhcyBTdG10IGZyb20gJy4vc3RhdGVtZW50JztcclxuaW1wb3J0IHsgRnVuY3Rpb25FbnRpdHksIENhbGxhYmxlRW50aXR5LCBJbnRlcm5hbEVudGl0eSwgSW5zdGFuY2VFbnRpdHksIFByb3RvdHlwZUVudGl0eSwgQXJyYXlFbnRpdHksIFN0cmluZ0VudGl0eSwgSW5kZXhSYW5nZSB9IGZyb20gJy4vZW50aXR5JztcclxuaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gJy4vY29uc29sZSc7XHJcbmltcG9ydCB7IFJldHVybiB9IGZyb20gJy4vcmV0dXJuJztcclxuaW1wb3J0IHsgU2NvcGUgfSBmcm9tICcuL3Njb3BlJztcclxuaW1wb3J0IHsgVG9rZW5UeXBlIH0gZnJvbSAnLi90b2tlbic7XHJcbmltcG9ydCAqIGFzIFJ1bnRpbWUgZnJvbSAnLi9ydW50aW1lJztcclxuaW1wb3J0IHsgUHJvdG90eXBlIH0gZnJvbSAnLi9wcm90b3R5cGUnO1xyXG5kZWNsYXJlIHZhciBjb256b2xlOiBDb25zb2xlO1xyXG5cclxuZXhwb3J0IGNsYXNzIEludGVycHJldGVyIGltcGxlbWVudHNcclxuICAgIEV4cHIuRXhwclZpc2l0b3I8YW55PixcclxuICAgIFN0bXQuU3RtdFZpc2l0b3I8dm9pZD4ge1xyXG4gICAgcHVibGljIGdsb2JhbCA9IG5ldyBTY29wZSgpO1xyXG4gICAgcHJpdmF0ZSBzY29wZSA9IHRoaXMuZ2xvYmFsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCApIHtcclxuICAgICAgICB0aGlzLmdsb2JhbC5kZWZpbmUoJ2VjaG8nLCBSdW50aW1lLmVjaG9GdW5jdGlvbigpKTtcclxuICAgICAgICB0aGlzLmdsb2JhbC5kZWZpbmUoJ3JhbmQnLCBSdW50aW1lLnJhbmRGdW5jdGlvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV2YWx1YXRlKGV4cHI6IEV4cHIuRXhwcik6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIGV4cHIuYWNjZXB0KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXhlY3V0ZShzdG10OiBTdG10LlN0bXQpOiB2b2lkIHtcclxuICAgICAgICBzdG10LmFjY2VwdCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJwZXQoc3RhdGVtZW50czogU3RtdC5TdG10W10pOiBhbnkge1xyXG4gICAgICAgIGZvciAoY29uc3Qgc3RhdGVtZW50IG9mIHN0YXRlbWVudHMpIHtcclxuICAgICAgICAgICAgdGhpcy5leGVjdXRlKHN0YXRlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW50ZXJwcmV0ZXJFcnJvcihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb256b2xlLmxvZyhgW2ludGVycHJldGVyIGVycm9yXSA9PiAke21lc3NhZ2V9YCk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0RXhwcmVzc2lvblN0bXQoc3RtdDogU3RtdC5FeHByZXNzaW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ldmFsdWF0ZShzdG10LmV4cHJlc3Npb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdFByaW50U3RtdChzdG10OiBTdG10LlByaW50KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5ldmFsdWF0ZShzdG10LmV4cHJlc3Npb24pO1xyXG4gICAgICAgIHZhbHVlID0gdmFsdWUgPT09IG51bGwgPyBcIm51bGxcIiA6IHZhbHVlO1xyXG4gICAgICAgIGNvbnpvbGUubG9nKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRWYXJTdG10KHN0bXQ6IFN0bXQuVmFyKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHZhbHVlOiBvYmplY3QgPSBudWxsO1xyXG4gICAgICAgIGlmIChzdG10LmluaXRpYWxpemVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5ldmFsdWF0ZShzdG10LmluaXRpYWxpemVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb25FbnRpdHkgJiYgdmFsdWUubmFtZSA9PT0gXCJsYW1iZGFcIikge1xyXG4gICAgICAgICAgICB2YWx1ZS5uYW1lID0gc3RtdC5uYW1lLmxleGVtZTtcclxuICAgICAgICAgICAgdmFsdWUucHJvdG90eXBlLnNldCgnbmFtZScsIHZhbHVlLm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RtdC50eXBlLnR5cGUgPT09IFRva2VuVHlwZS52YXIpICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcGUuc2V0KHN0bXQubmFtZS5sZXhlbWUsIHZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNjb3BlLmRlZmluZShzdG10Lm5hbWUubGV4ZW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdFZhcmlhYmxlRXhwcihleHByOiBFeHByLlZhcmlhYmxlKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5nZXQoZXhwci5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRQb3N0Zml4RXhwcihleHByOiBFeHByLlBvc3RmaXgpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zY29wZS5nZXQoZXhwci5uYW1lKTtcclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlICsgZXhwci5pbmNyZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5zY29wZS5hc3NpZ24oZXhwci5uYW1lLmxleGVtZSwgbmV3VmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRMaXN0RXhwcihleHByOiBFeHByLkxpc3QpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlczogYW55W10gPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGV4cHJlc3Npb24gb2YgZXhwci52YWx1ZSkge1xyXG4gICAgICAgICAgICB2YWx1ZXMucHVzaCh0aGlzLmV2YWx1YXRlKGV4cHJlc3Npb24pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheUVudGl0eSh2YWx1ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdFp0cmluZ0V4cHIoZXhwcjogRXhwci5adHJpbmcpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBuZXcgU3RyaW5nRW50aXR5KGV4cHIudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdEFzc2lnbkV4cHIoZXhwcjogRXhwci5Bc3NpZ24pOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5ldmFsdWF0ZShleHByLnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNjb3BlLmFzc2lnbihleHByLm5hbWUubGV4ZW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdEJpbmFyeUV4cHIoZXhwcjogRXhwci5CaW5hcnkpOiBhbnkge1xyXG4gICAgICAgIGxldCBsZWZ0ID0gdGhpcy5ldmFsdWF0ZShleHByLmxlZnQpO1xyXG4gICAgICAgIGxldCByaWdodCA9IHRoaXMuZXZhbHVhdGUoZXhwci5yaWdodCk7XHJcbiAgICAgICAgbGVmdCA9IGxlZnQgaW5zdGFuY2VvZiBTdHJpbmdFbnRpdHkgPyBsZWZ0LnRvU3RyaW5nKCkgOiBsZWZ0O1xyXG4gICAgICAgIHJpZ2h0ID0gcmlnaHQgaW5zdGFuY2VvZiBTdHJpbmdFbnRpdHkgPyByaWdodC50b1N0cmluZygpIDogcmlnaHQ7XHJcbiAgICAgICAgc3dpdGNoIChleHByLm9wZXJhdG9yLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUubWludXM6XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLm1pbnVzRXF1YWw6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGxlZnQgLSByaWdodCkgYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5zbGFzaDpcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuc2xhc2hFcXVhbDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAobGVmdCAvIHJpZ2h0KSBhcyBudW1iZXI7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLnN0YXI6XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLnN0YXJFcXVhbDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAobGVmdCAqIHJpZ2h0KSBhcyBudW1iZXI7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLnBlcmNlbnQ6XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLnBlcmNlbnRFcXVhbDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAobGVmdCAlIHJpZ2h0KSBhcyBudW1iZXI7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLnBsdXM6XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLnBsdXNFcXVhbDpcclxuICAgICAgICAgICAgICAgIGlmICghaXNOYU4obGVmdCkgJiYgIWlzTmFOKHJpZ2h0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAobGVmdCArIHJpZ2h0KSBhcyBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobGVmdCBpbnN0YW5jZW9mIEFycmF5RW50aXR5ICYmIHJpZ2h0IGluc3RhbmNlb2YgQXJyYXlFbnRpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5RW50aXR5KGxlZnQudmFsdWVzLmNvbmNhdChyaWdodC52YWx1ZXMpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU3RyaW5nRW50aXR5KGxlZnQgYXMgc3RyaW5nICsgcmlnaHQgYXMgc3RyaW5nKTtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUucGlwZTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAobGVmdCB8IHJpZ2h0KSBhcyBudW1iZXI7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLmNhcmV0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChsZWZ0IF4gcmlnaHQpIGFzIG51bWJlcjtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuZ3JlYXRlcjpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8bnVtYmVyPiBsZWZ0ID4gPG51bWJlcj4gcmlnaHQ7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLmdyZWF0ZXJFcXVhbDpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8bnVtYmVyPiBsZWZ0ID49IDxudW1iZXI+IHJpZ2h0O1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5sZXNzOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxudW1iZXI+IGxlZnQgPCA8bnVtYmVyPiByaWdodDtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUubGVzc0VxdWFsOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxudW1iZXI+IGxlZnQgPD0gPG51bWJlcj4gcmlnaHQ7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLmVxdWFsRXF1YWw6XHJcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0ID09IHJpZ2h0O1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5lcXVhbEVxdWFsRXF1YWw6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdCA9PT0gcmlnaHQ7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLmJhbmdFcXVhbDpcclxuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQgIT0gcmlnaHQ7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLmJhbmdFcXVhbEVxdWFsOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQgIT09IHJpZ2h0O1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY29uem9sZS53YXJuKGV4cHIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7IC8vIHVucmVhY2hhYmxlXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0TG9naWNhbEV4cHIoZXhwcjogRXhwci5Mb2dpY2FsKTogYW55IHtcclxuICAgICAgICBpZiAoZXhwci5vcGVyYXRvci50eXBlID09PSBUb2tlblR5cGUuYW5kKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlKGV4cHIubGVmdCkgJiYgdGhpcy5ldmFsdWF0ZShleHByLnJpZ2h0KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlKGV4cHIubGVmdCkgfHwgdGhpcy5ldmFsdWF0ZShleHByLnJpZ2h0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRUZXJuYXJ5RXhwcihleHByOiBFeHByLlRlcm5hcnkpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlKGV4cHIuY29uZGl0aW9uKSA/IHRoaXMuZXZhbHVhdGUoZXhwci50aGVuRXhwcikgOiB0aGlzLmV2YWx1YXRlKGV4cHIuZWxzZUV4cHIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdEdyb3VwaW5nRXhwcihleHByOiBFeHByLkdyb3VwaW5nKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZShleHByLmV4cHJlc3Npb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdExpdGVyYWxFeHByKGV4cHI6IEV4cHIuTGl0ZXJhbCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIGV4cHIudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0VW5hcnlFeHByKGV4cHI6IEV4cHIuVW5hcnkpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5ldmFsdWF0ZShleHByLnJpZ2h0KTtcclxuICAgICAgICBzd2l0Y2ggKGV4cHIub3BlcmF0b3IudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5taW51czpcclxuICAgICAgICAgICAgICAgIHJldHVybiAtTnVtYmVyKHJpZ2h0KTtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuYmFuZzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAhQm9vbGVhbihyaWdodCk7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLmRvbGxhcjpcclxuICAgICAgICAgICAgICAgIHJldHVybiByaWdodC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLnBsdXNQbHVzOlxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5jVmFsdWUgPSBOdW1iZXIocmlnaHQpICsgMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NvcGUuYXNzaWduKCg8RXhwci5WYXJpYWJsZT4gZXhwci5yaWdodCkubmFtZS5sZXhlbWUsIGluY1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbmNWYWx1ZTtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUubWludXNNaW51czpcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlY1ZhbHVlID0gTnVtYmVyKHJpZ2h0KSAtIDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3BlLmFzc2lnbigoPEV4cHIuVmFyaWFibGU+IGV4cHIucmlnaHQpLm5hbWUubGV4ZW1lLCBkZWNWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjVmFsdWU7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8gc2hvdWxkIGJlIHVucmVhY2hhYmxlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBleGVjdXRlQmxvY2soc3RhdGVtZW50czogU3RtdC5TdG10W10sIG5leHRTY29wZTogU2NvcGUpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50U2NvcGUgPSB0aGlzLnNjb3BlO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBuZXh0U2NvcGU7XHJcbiAgICAgICAgZm9yIChjb25zdCBzdGF0ZW1lbnQgb2Ygc3RhdGVtZW50cykge1xyXG4gICAgICAgICAgICB0aGlzLmV4ZWN1dGUoc3RhdGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IGN1cnJlbnRTY29wZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRCbG9ja1N0bXQoc3RtdDogU3RtdC5CbG9jayk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZXhlY3V0ZUJsb2NrKHN0bXQuc3RhdGVtZW50cywgbmV3IFNjb3BlKHRoaXMuc2NvcGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRJZlN0bXQoc3RtdDogU3RtdC5JZik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmV2YWx1YXRlKHN0bXQuY29uZGl0aW9uKSkge1xyXG4gICAgICAgICAgICB0aGlzLmV4ZWN1dGUoc3RtdC50aGVuU3RtdCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdG10LmVsc2VTdG10ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhlY3V0ZShzdG10LmVsc2VTdG10KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0V2hpbGVTdG10KHN0bXQ6IFN0bXQuV2hpbGUpOiB2b2lkIHtcclxuICAgICAgICB3aGlsZSAodGhpcy5ldmFsdWF0ZShzdG10LmNvbmRpdGlvbikpIHtcclxuICAgICAgICAgICAgdGhpcy5leGVjdXRlKHN0bXQubG9vcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdERvV2hpbGVTdG10KHN0bXQ6IFN0bXQuRG9XaGlsZSk6IHZvaWQge1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgdGhpcy5leGVjdXRlKHN0bXQubG9vcCk7XHJcbiAgICAgICAgfSB3aGlsZSAodGhpcy5ldmFsdWF0ZShzdG10LmNvbmRpdGlvbikpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdENhbGxFeHByKGV4cHI6IEV4cHIuQ2FsbCk6IG9iamVjdCB7XHJcbiAgICAgICAgY29uc3QgY2FsbGVlID0gdGhpcy5ldmFsdWF0ZShleHByLmNhbGxlZSk7XHJcbiAgICAgICAgY29uc3QgYXJncyA9IFtdO1xyXG4gICAgICAgIGxldCB0aGl6OiBhbnkgPSBudWxsO1xyXG4gICAgICAgIGlmIChleHByLmNhbGxlZSBpbnN0YW5jZW9mIEV4cHIuR2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXogPSB0aGlzLmV2YWx1YXRlKGV4cHIuY2FsbGVlLmVudGl0eSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChleHByLnRoaXogIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpeiA9IGV4cHIudGhpejtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBhcmd1bWVudCBvZiBleHByLmFyZ3MpIHtcclxuICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZXZhbHVhdGUoYXJndW1lbnQpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghKGNhbGxlZSBpbnN0YW5jZW9mIENhbGxhYmxlRW50aXR5KSAmJlxyXG4gICAgICAgICAgICAhKGNhbGxlZSBpbnN0YW5jZW9mIEludGVybmFsRW50aXR5KVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLmludGVycHJldGVyRXJyb3IoYCR7Y2FsbGVlfSBpcyBub3QgYSBmdW5jdGlvbmApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBmdW5jID0gY2FsbGVlIGFzIENhbGxhYmxlRW50aXR5O1xyXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCAhPT0gZnVuYy5hcml0eSgpICYmIGZ1bmMuYXJpdHkoKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgY29uem9sZS53YXJuKGBXYXJuaW5nIGF0ICgke2V4cHIucGFyZW4ubGluZX0pOiAke2NhbGxlZX0gbWlzbWF0Y2hlZCBhcmd1bWVudCBsZW5ndGg7IFxcbiBFeHBlY3RlZCAke2Z1bmMuYXJpdHkoKX0gYnV0IGdvdCAke2FyZ3MubGVuZ3RofSBgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCB0aGl6LCBhcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRTdXBlckV4cHIoZXhwcjogRXhwci5TdXBlcik6IGFueSB7XHJcbiAgICAgICAgY29uc3QgdGhpejogSW5zdGFuY2VFbnRpdHkgPSB0aGlzLnNjb3BlLmZpcnN0KCd0aGlzJyk7XHJcbiAgICAgICAgaWYgKCF0aGl6KSB7XHJcbiAgICAgICAgICAgIGNvbnpvbGUuZXJyb3IoYHN1cGVyIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiBjaGlsZCBpbnN0YW5jZXNgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2xheno6IEZ1bmN0aW9uRW50aXR5ID0gdGhpcy5zY29wZS5vYnRhaW4odGhpei5pbnN0YW5jZW9mKTtcclxuICAgICAgICBpZiAoIWNsYXp6KSB7XHJcbiAgICAgICAgICAgIGNvbnpvbGUuZXJyb3IoYCR7dGhpen0gaXMgbm90IGFuIGluc3RhbmNlIG9mIGFuIGVudGl0eWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwYXJlbnQ6IEZ1bmN0aW9uRW50aXR5ID0gY2xhenoucGFyZW50O1xyXG4gICAgICAgIGlmICghcGFyZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnpvbGUuZXJyb3IoYCR7dGhpen0gZW50aXR5IGhhcyBubyBwYXJlbnRgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1ldGhvZDogRnVuY3Rpb25FbnRpdHkgPSBudWxsO1xyXG4gICAgICAgIGZvciAobGV0IGtleSBvZiBleHByLmluZGV4KSB7XHJcbiAgICAgICAgICAgIG1ldGhvZCA9IHBhcmVudC5nZXQoa2V5LmxleGVtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGFyZ3VtZW50IG9mIGV4cHIuYXJncykge1xyXG4gICAgICAgICAgICBhcmdzLnB1c2godGhpcy5ldmFsdWF0ZShhcmd1bWVudCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWV0aG9kKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZXRob2QuY2FsbCh0aGlzLCB0aGl6LCBhcmdzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50LmNhbGwodGhpcywgdGhpeiwgYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdE5ld0V4cHIoZXhwcjogRXhwci5OZXcpOiBvYmplY3Qge1xyXG4gICAgICAgIGNvbnN0IGNvbnN0cnVjdCA9IGV4cHIuY29uc3RydWN0IGFzIEV4cHIuQ2FsbDtcclxuICAgICAgICBjb25zdCBjYWxsZWUgPSB0aGlzLmV2YWx1YXRlKGNvbnN0cnVjdC5jYWxsZWUpO1xyXG4gICAgICAgIGNvbnN0IG5ld0luc3RhbmNlID0gbmV3IEluc3RhbmNlRW50aXR5KGNhbGxlZSk7XHJcbiAgICAgICAgY29uc3RydWN0LnRoaXogPSBuZXdJbnN0YW5jZTtcclxuICAgICAgICB0aGlzLmV2YWx1YXRlKGNvbnN0cnVjdCk7XHJcbiAgICAgICAgcmV0dXJuIG5ld0luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdEVudGl0eUV4cHIoZXhwcjogRXhwci5FbnRpdHkpIHtcclxuICAgICAgICBjb25zdCBlbnRpdHkgPSBuZXcgUHJvdG90eXBlRW50aXR5KCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiBleHByLnByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ICA9IHRoaXMuZXZhbHVhdGUoKHByb3BlcnR5IGFzIEV4cHIuU2V0KS5rZXkpO1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZXZhbHVhdGUoKHByb3BlcnR5IGFzIEV4cHIuU2V0KS52YWx1ZSk7XHJcbiAgICAgICAgICAgIGVudGl0eS5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbnRpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0S2V5RXhwcihleHByOiBFeHByLktleSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGV4cHIubmFtZS5sZXhlbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0R2V0RXhwcihleHByOiBFeHByLkdldCk6IGFueSB7XHJcbiAgICAgICAgY29uc3QgZW50aXR5ID0gdGhpcy5ldmFsdWF0ZShleHByLmVudGl0eSk7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5ldmFsdWF0ZShleHByLmtleSk7XHJcbiAgICAgICAgaWYgKGVudGl0eSBpbnN0YW5jZW9mIFByb3RvdHlwZUVudGl0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZW50aXR5LmdldChrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmludGVycHJldGVyRXJyb3IoYCR7ZW50aXR5fS4ke2tleX06IG9ubHkgaW5zdGFuY2VzIGhhdmUgcHJvcGVydGllc2ApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdFNldEV4cHIoZXhwcjogRXhwci5TZXQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBlbnRpdHkgPSB0aGlzLmV2YWx1YXRlKGV4cHIuZW50aXR5KTtcclxuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmV2YWx1YXRlKGV4cHIua2V5KTtcclxuICAgICAgICBpZiAoIShlbnRpdHkgaW5zdGFuY2VvZiBQcm90b3R5cGVFbnRpdHkpKSB7XHJcbiAgICAgICAgICAgIGNvbnpvbGUud2FybihgJHtlbnRpdHl9IGlzIG5vdCBhIHJ1bnRpbWUgT2JqZWN0YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5ldmFsdWF0ZShleHByLnZhbHVlKTtcclxuICAgICAgICAoZW50aXR5IGFzIFByb3RvdHlwZUVudGl0eSkuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRGdW5jU3RtdChzdG10OiBTdG10LkZ1bmMpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IGZ1bmM6IEZ1bmN0aW9uRW50aXR5ID0gbmV3IEZ1bmN0aW9uRW50aXR5KHN0bXQsIHRoaXMuc2NvcGUpO1xyXG4gICAgICAgIHRoaXMuc2NvcGUuZGVmaW5lKHN0bXQubmFtZS5sZXhlbWUsIGZ1bmMpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdENsYXNzU3RtdChzdG10OiBTdG10LkNsYXNzKTogYW55IHtcclxuICAgICAgICBsZXQgY29uc3RydWN0ID0gc3RtdC5tZXRob2RzLmZpbmQobWV0aG9kID0+IG1ldGhvZC5uYW1lLmxleGVtZSA9PT0gXCJjb25zdHJ1Y3RvclwiKTtcclxuICAgICAgICBjb25zdCBtZXRob2RzID0gc3RtdC5tZXRob2RzLmZpbHRlcihtZXRob2QgPT4gbWV0aG9kLm5hbWUubGV4ZW1lICE9PSBcImNvbnN0cnVjdG9yXCIpO1xyXG5cclxuICAgICAgICBpZiAoIWNvbnN0cnVjdCkge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3QgPSBuZXcgU3RtdC5GdW5jKHN0bXQubmFtZSwgW10sIFtdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3QubmFtZSA9IHN0bXQubmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZ1bmM6IEZ1bmN0aW9uRW50aXR5ID0gbmV3IEZ1bmN0aW9uRW50aXR5KGNvbnN0cnVjdCwgdGhpcy5zY29wZSk7XHJcbiAgICAgICAgbGV0IHBhcmVudDogRnVuY3Rpb25FbnRpdHkgPSBudWxsO1xyXG4gICAgICAgIGlmIChzdG10LnBhcmVudCkge1xyXG4gICAgICAgICAgICBwYXJlbnQgPSB0aGlzLnNjb3BlLmdldChzdG10LnBhcmVudCk7XHJcbiAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIGZ1bmMucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgZnVuYy5wcm90b3R5cGUgPSBuZXcgUHJvdG90eXBlKHBhcmVudC5wcm9wZXJ0aWVzLCBwYXJlbnQucHJvdG90eXBlLCBmdW5jKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBtZXRob2Qgb2YgbWV0aG9kcykge1xyXG4gICAgICAgICAgICBmdW5jLnByb3BlcnRpZXMuc2V0KG1ldGhvZC5uYW1lLmxleGVtZSwgbmV3IEZ1bmN0aW9uRW50aXR5KG1ldGhvZCwgdGhpcy5zY29wZSwgcGFyZW50KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNjb3BlLnNldChzdG10Lm5hbWUubGV4ZW1lLCBmdW5jKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRMYW1iZGFFeHByKGV4cHI6IEV4cHIuTGFtYmRhKTogb2JqZWN0IHtcclxuICAgICAgICBjb25zdCBsYW1iZGE6IFN0bXQuRnVuYyA9IGV4cHIubGFtYmRhIGFzIFN0bXQuRnVuYztcclxuICAgICAgICBjb25zdCBmdW5jOiBGdW5jdGlvbkVudGl0eSA9IG5ldyBGdW5jdGlvbkVudGl0eShsYW1iZGEsIHRoaXMuc2NvcGUpO1xyXG4gICAgICAgIHJldHVybiBmdW5jO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdFJldHVyblN0bXQoc3RtdDogU3RtdC5SZXR1cm4pOiBhbnkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHN0bXQudmFsdWUpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmV2YWx1YXRlKHN0bXQudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgUmV0dXJuKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRSYW5nZUV4cHIoZXhwcjogRXhwci5SYW5nZSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBJbmRleFJhbmdlKFxyXG4gICAgICAgICAgICBleHByLnN0YXJ0ID8gdGhpcy5ldmFsdWF0ZShleHByLnN0YXJ0KSA6IG51bGwsXHJcbiAgICAgICAgICAgIGV4cHIuZW5kID8gdGhpcy5ldmFsdWF0ZShleHByLmVuZCkgOiBudWxsLFxyXG4gICAgICAgICAgICBleHByLnN0ZXAgPyB0aGlzLmV2YWx1YXRlKGV4cHIuc3RlcCkgOiBudWxsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgVG9rZW4sIFRva2VuVHlwZSB9IGZyb20gJy4vdG9rZW4nO1xyXG5pbXBvcnQgKiBhcyBFeHByIGZyb20gJy4vZXhwcmVzc2lvbic7XHJcbmltcG9ydCAqIGFzIFN0bXQgZnJvbSAnLi9zdGF0ZW1lbnQnO1xyXG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnLi9jb25zb2xlJztcclxuZGVjbGFyZSB2YXIgY29uem9sZTogQ29uc29sZTtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJzZXIge1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50ID0gMDtcclxuICAgIHByaXZhdGUgdG9rZW5zOiBUb2tlbltdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRva2VuczogVG9rZW5bXSkge1xyXG4gICAgICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwYXJzZSgpOiBTdG10LlN0bXRbXSB7XHJcbiAgICAgICBjb25zdCBzdGF0ZW1lbnRzOiBTdG10LlN0bXRbXSA9IFtdO1xyXG4gICAgICAgd2hpbGUgKCF0aGlzLmVvZigpKSB7XHJcbiAgICAgICAgICAgc3RhdGVtZW50cy5wdXNoKHRoaXMuZGVjbGFyYXRpb24oKSk7XHJcbiAgICAgICB9XHJcbiAgICAgICByZXR1cm4gc3RhdGVtZW50cztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1hdGNoKC4uLnR5cGVzOiBUb2tlblR5cGVbXSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgdHlwZSBvZiB0eXBlcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGVjayh0eXBlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZHZhbmNlKCk6IFRva2VuIHtcclxuICAgICAgICBpZiAoIXRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwZWVrKCk6IFRva2VuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5jdXJyZW50XTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByZXZpb3VzKCk6IFRva2VuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5jdXJyZW50IC0gMV07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVjayh0eXBlOiBUb2tlblR5cGUpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wZWVrKCkudHlwZSA9PT0gdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVvZigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGVjayhUb2tlblR5cGUuZW9mKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbnN1bWUodHlwZTogVG9rZW5UeXBlLCBtZXNzYWdlOiBzdHJpbmcpOiBUb2tlbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2sodHlwZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VFcnJvcih0aGlzLnByZXZpb3VzKCksIG1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXh0cmFTZW1pY29sb24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IG1hdGNoID0gdGhpcy5tYXRjaChUb2tlblR5cGUuc2VtaWNvbG9uKTtcclxuICAgICAgICBpZiAodGhpcy5jaGVjayhUb2tlblR5cGUuc2VtaWNvbG9uKSkge1xyXG4gICAgICAgICAgICB3aGlsZSh0aGlzLmNoZWNrKFRva2VuVHlwZS5zZW1pY29sb24pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLnNlbWljb2xvbiwgJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYXRjaDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBhcnNlRXJyb3IodG9rZW46IFRva2VuLCBtZXNzYWdlOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgIGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuZW9mKSB7XHJcbiAgICAgICAgICAgIGNvbnpvbGUuZXJyb3IoYHBhcnNlIGVycm9yIGF0ICgke3Rva2VuLmxpbmV9KTogYXQgZW5kICR7bWVzc2FnZX1gKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb256b2xlLmVycm9yKGBbbGluZSAoJHt0b2tlbi5saW5lfSkgcGFyc2UgZXJyb3IgYXQgXCIke3Rva2VuLmxleGVtZX1cIl0gPT4gJHttZXNzYWdlfWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yICgnRXJyb3IgcGFyc2luZycpO1xyXG4gICAgICAgIC8vIHVucmVhY2hhYmxlIGNvZGVcclxuICAgICAgICByZXR1cm4gbmV3IFRva2VuKCdwYW5pYycsICdlcnJvcicsICdlcnJvcicsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyc2VXYXJuaW5nKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgIGNvbnpvbGUud2FybihgW2xpbmUgKCR7dG9rZW4ubGluZX0pIHBhcnNlIHdhcm5pbmcgYXQgXCIke3Rva2VuLmxleGVtZX1cIl0gPT4gJHttZXNzYWdlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3luY2hyb25pemUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcblxyXG4gICAgICAgIHdoaWxlICghdGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2aW91cygpLnR5cGUgPT09IFRva2VuVHlwZS5zZW1pY29sb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnBlZWsoKS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5jbGFzczpcclxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLmZ1bmN0aW9uOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUudmFyOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuZm9yOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuaWY6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS53aGlsZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLnByaW50OlxyXG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUucmV0dXJuOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkZWNsYXJhdGlvbigpOiBTdG10LlN0bXQge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5jbGFzcykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNsYXNzRGVjbGFyYXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuZnVuY3Rpb24pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mdW5jRGVjbGFyYXRpb24oXCJmdW5jdGlvblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUudmFyLCBUb2tlblR5cGUubGV0KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFyRGVjbGFyYXRpb24odGhpcy5wcmV2aW91cygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIHBhcnNpbmcuIEV4ZWN1dGlvbiBoYXMgYmVlbiBzdG9wcGVkJyk7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IHJlZW5hYmxlIHN5bmNocm9uaXplXHJcbiAgICAgICAgICAgIC8vIHRoaXMuc3luY2hyb25pemUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xhc3NEZWNsYXJhdGlvbigpOiBTdG10LkNsYXNzIHtcclxuICAgICAgICBpZiAodGhpcy5jaGVjayhUb2tlblR5cGUuZnVuY3Rpb24pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuZnVuY3Rpb24sICcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbmFtZTogVG9rZW4gPSB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLmlkZW50aWZpZXIsIGBFeHBlY3RlZCBhIGNsYXNzIG5hbWVgKTtcclxuICAgICAgICBsZXQgcGFyZW50OiBUb2tlbiA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmV4dGVuZHMpKSB7XHJcbiAgICAgICAgICAgIHBhcmVudCAgPSB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLmlkZW50aWZpZXIsIGBFeHBlY3RlZCBhIHBhcmVudCBuYW1lYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUubGVmdEJyYWNlLCBgRXhwZWN0ZWQgXCJ7XCIgYWZ0ZXIgY2xhc3MgbmFtZWApO1xyXG4gICAgICAgIGNvbnN0IG1ldGhvZHM6IFN0bXQuRnVuY1tdID0gW107XHJcblxyXG4gICAgICAgIHdoaWxlICghdGhpcy5jaGVjayhUb2tlblR5cGUucmlnaHRCcmFjZSkgJiYgIXRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2soVG9rZW5UeXBlLmZ1bmN0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5mdW5jdGlvbiwgJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1ldGhvZHMucHVzaCh0aGlzLmZ1bmNEZWNsYXJhdGlvbihcIm1ldGhvZFwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLnJpZ2h0QnJhY2UsIGBFeHBlY3RlZCBcIn1cIiBhZnRlciBjbGFzcyBcIiR7bmFtZS5saXRlcmFsfVwiIG1ldGhvZHNgKTtcclxuICAgICAgICBpZiAodGhpcy5leHRyYVNlbWljb2xvbigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyc2VXYXJuaW5nKGBVbm5lY2Vzc2FyeSBzZW1pY29sb24gYWZ0ZXIgY2xhc3MgJHtuYW1lLmxleGVtZX0gZGVjbGFyYXRpb25gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdG10LkNsYXNzKG5hbWUsIHBhcmVudCwgbWV0aG9kcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmdW5jRGVjbGFyYXRpb24oa2luZDogc3RyaW5nKTogU3RtdC5GdW5jIHtcclxuICAgICAgICBjb25zdCBuYW1lOiBUb2tlbiA9IHRoaXMuY29uc3VtZShUb2tlblR5cGUuaWRlbnRpZmllciwgYEV4cGVjdGVkIGEgJHtraW5kfSBuYW1lYCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZnVuY1BhcmFtc0JvZHkobmFtZSwga2luZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmdW5jUGFyYW1zKCk6IFRva2VuW10ge1xyXG4gICAgICAgIGNvbnN0IHBhcmFtczogVG9rZW5bXSA9IFtdO1xyXG4gICAgICAgIGlmICghdGhpcy5jaGVjayhUb2tlblR5cGUucmlnaHRQYXJlbikpIHtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5sZW5ndGggPj0gMjU1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJzZUVycm9yKHRoaXMucGVlaygpLCBgUGFyYW1ldGVyIGNvdW50IGV4Y2VlZHMgMjU1YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMucHVzaCh0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLmlkZW50aWZpZXIsIGBFeHBlY3RlZCBhIHBhcmFtZXRlciBuYW1lYCkpO1xyXG4gICAgICAgICAgICB9IHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5jb21tYSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLnJpZ2h0UGFyZW4sIGBFeHBlY3QgXCIpXCIgYWZ0ZXIgcGFyYW1ldGVyc2ApO1xyXG4gICAgICAgIHJldHVybiBwYXJhbXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmdW5jUGFyYW1zQm9keShuYW1lOiBUb2tlbiwga2luZDogc3RyaW5nKTogU3RtdC5GdW5jIHtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLmxlZnRQYXJlbiwgYEV4cGVjdGVkIFwiKFwiIGFmdGVyICR7a2luZH1gKTtcclxuICAgICAgICBjb25zdCBwYXJhbXM6IFRva2VuW10gPSB0aGlzLmZ1bmNQYXJhbXMoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmxlZnRCcmFjZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgYm9keTogU3RtdC5TdG10W10gPSB0aGlzLmJsb2NrKCk7XHJcbiAgICAgICAgICAgIGlmIChuYW1lLnR5cGUgIT09IFRva2VuVHlwZS5sYW1iZGEgJiYgdGhpcy5leHRyYVNlbWljb2xvbigpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnNlV2FybmluZyhgVW5uZWNlc3Nhcnkgc2VtaWNvbG9uIGFmdGVyIGZ1bmN0aW9uICR7bmFtZS5sZXhlbWV9IGRlY2xhcmF0aW9uYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdG10LkZ1bmMobmFtZSwgcGFyYW1zLCBib2R5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5hcnJvdykpIHtcclxuICAgICAgICAgICAgY29uc3QgYm9keTogU3RtdC5TdG10W10gPSBbXTtcclxuICAgICAgICAgICAgbGV0IGFycm93OiBFeHByLkV4cHI7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleXdvcmQ6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLnNlbWljb2xvbikpIHtcclxuICAgICAgICAgICAgICAgIGFycm93ID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tYXRjaChUb2tlblR5cGUuc2VtaWNvbG9uKTtcclxuICAgICAgICAgICAgYm9keS5wdXNoKG5ldyBTdG10LlJldHVybihrZXl3b3JkLCBhcnJvdykpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFN0bXQuRnVuYyhuYW1lLCBwYXJhbXMsIGJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLmxlZnRCcmFjZSwgYEV4cGVjdCBcIntcIiBiZWZvcmUgJHtraW5kfSBib2R5YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB2YXJEZWNsYXJhdGlvbih0eXBlOiBUb2tlbik6IFN0bXQuU3RtdCB7XHJcbiAgICAgICAgY29uc3QgbmFtZTogVG9rZW4gPSB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLmlkZW50aWZpZXIsIGBFeHBlY3RlZCBhIHZhcmlhYmxlIG5hbWVgKTtcclxuICAgICAgICBsZXQgaW5pdGlhbGl6ZXI6IEV4cHIuRXhwciAgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5lcXVhbCkpIHtcclxuICAgICAgICAgICAgaW5pdGlhbGl6ZXIgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5zZW1pY29sb24sIGBFeHBlY3RlZCBzZW1pY29sb24gXCI7XCIgYWZ0ZXIgYSB2YWx1ZS5gKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdG10LlZhcihuYW1lLCB0eXBlLCBpbml0aWFsaXplcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0ZW1lbnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmlmKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pZlN0YXRlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUucHJpbnQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByaW50U3RhdGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5kbykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZG9XaGlsZVN0YXRlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUud2hpbGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndoaWxlU3RhdGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5mb3IpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvclN0YXRlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUubGVmdEJyYWNlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFN0bXQuQmxvY2sodGhpcy5ibG9jaygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLnJldHVybikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmV0dXJuU3RhdGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmV4cHJlc3Npb25TdGF0ZW1lbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlmU3RhdGVtZW50KCk6IFN0bXQuU3RtdCB7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5sZWZ0UGFyZW4sIGBFeHBlY3RlZCBcIihcIiBhZnRlciBhbiBpZmApO1xyXG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbjogRXhwci5FeHByID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5yaWdodFBhcmVuLCBgRXhwZWN0ZWQgXCIpXCIgYWZ0ZXIgaWYgY29uZGl0aW9uYCk7XHJcbiAgICAgICAgY29uc3QgdGhlblN0bXQ6IFN0bXQuU3RtdCA9IHRoaXMuc3RhdGVtZW50KCk7XHJcbiAgICAgICAgbGV0IGVsc2VTdG10OiBTdG10LlN0bXQgPSAgbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuZWxzZSkpIHtcclxuICAgICAgICAgICAgZWxzZVN0bXQgPSB0aGlzLnN0YXRlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFN0bXQuSWYoY29uZGl0aW9uLCB0aGVuU3RtdCwgZWxzZVN0bXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgd2hpbGVTdGF0ZW1lbnQoKTogU3RtdC5TdG10IHtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLmxlZnRQYXJlbiwgYEV4cGVjdGVkIFwiKFwiIGFmdGVyIGEgd2hpbGUgc3RhdGVtZW50YCk7XHJcbiAgICAgICAgY29uc3QgY29uZGl0aW9uOiBFeHByLkV4cHIgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLnJpZ2h0UGFyZW4sIGBFeHBlY3RlZCBcIilcIiBhZnRlciB3aGlsZSBjb25kaXRpb25gKTtcclxuICAgICAgICBjb25zdCBsb29wOiBTdG10LlN0bXQgPSB0aGlzLnN0YXRlbWVudCgpO1xyXG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5XaGlsZShjb25kaXRpb24sIGxvb3ApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZm9yU3RhdGVtZW50KCk6IFN0bXQuU3RtdCB7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5sZWZ0UGFyZW4sIGBFeHBlY3RlZCBcIihcIiBhZnRlciBhIGZvciBzdGF0ZW1lbnRgKTtcclxuXHJcbiAgICAgICAgbGV0IGluaXRpYWxpemVyOiBTdG10LlN0bXQ7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLnNlbWljb2xvbikpIHtcclxuICAgICAgICAgICAgaW5pdGlhbGl6ZXIgPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUudmFyLCBUb2tlblR5cGUubGV0KSkge1xyXG4gICAgICAgICAgICBpbml0aWFsaXplciA9IHRoaXMudmFyRGVjbGFyYXRpb24odGhpcy5wcmV2aW91cygpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbml0aWFsaXplciA9IHRoaXMuZXhwcmVzc2lvblN0YXRlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY29uZGl0aW9uOiBFeHByLkV4cHI7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5zZW1pY29sb24pKSB7XHJcbiAgICAgICAgICAgIGNvbmRpdGlvbiA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLnNlbWljb2xvbiwgYEV4cGVjdGVkIFwiO1wiIGFmdGVyIGxvb3AgY29uZGl0aW9uYCk7XHJcbiAgICAgICAgbGV0IGluY3JlbWVudDogRXhwci5FeHByO1xyXG4gICAgICAgIGlmICghdGhpcy5jaGVjayhUb2tlblR5cGUucmlnaHRQYXJlbikpIHtcclxuICAgICAgICAgICAgaW5jcmVtZW50ID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUucmlnaHRQYXJlbiwgYEV4cGVjdGVkIFwiO1wiIGFmdGVyIGxvb3AgY29uZGl0aW9uYCk7XHJcbiAgICAgICAgbGV0IGJvZHk6IFN0bXQuU3RtdCA9IHRoaXMuc3RhdGVtZW50KCk7XHJcbiAgICAgICAgaWYgKGluY3JlbWVudCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBib2R5ID0gbmV3IFN0bXQuQmxvY2soW1xyXG4gICAgICAgICAgICAgICAgYm9keSxcclxuICAgICAgICAgICAgICAgIG5ldyBTdG10LkV4cHJlc3Npb24oaW5jcmVtZW50KVxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbmRpdGlvbiA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25kaXRpb24gPSBuZXcgRXhwci5MaXRlcmFsKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib2R5ID0gbmV3IFN0bXQuV2hpbGUoY29uZGl0aW9uLCBib2R5KTtcclxuICAgICAgICBpZiAoaW5pdGlhbGl6ZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgYm9keSA9IG5ldyBTdG10LkJsb2NrKFtcclxuICAgICAgICAgICAgICAgIGluaXRpYWxpemVyLFxyXG4gICAgICAgICAgICAgICAgYm9keVxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJvZHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkb1doaWxlU3RhdGVtZW50KCk6IFN0bXQuU3RtdCB7XHJcbiAgICAgICAgY29uc3QgbG9vcDogU3RtdC5TdG10ID0gdGhpcy5zdGF0ZW1lbnQoKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLndoaWxlLCBgRXhwZWN0ZWQgY29uZGl0aW9uIGFmdGVyIGRvIHN0YXRlbWVudGApO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUubGVmdFBhcmVuLCBgRXhwZWN0ZWQgXCIoXCIgYWZ0ZXIgYSB3aGlsZWApO1xyXG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbjogRXhwci5FeHByID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5yaWdodFBhcmVuLCBgRXhwZWN0ZWQgXCIpXCIgYWZ0ZXIgd2hpbGUgY29uZGl0aW9uYCk7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5zZW1pY29sb24sIGBFeHBlY3RlZCBzZW1pY29sb24gXCI7XCIgYWZ0ZXIgYSBkbyB3aGlsZSBjb25kaXRpb25gKTtcclxuICAgICAgICByZXR1cm4gbmV3IFN0bXQuRG9XaGlsZShsb29wLCBjb25kaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJpbnRTdGF0ZW1lbnQoKTogU3RtdC5TdG10IHtcclxuICAgICAgICBjb25zdCB2YWx1ZTogRXhwci5FeHByID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5zZW1pY29sb24sIGBFeHBlY3RlZCBzZW1pY29sb24gXCI7XCIgYWZ0ZXIgZXhwcmVzc2lvbi5gKTtcclxuICAgICAgICByZXR1cm4gbmV3IFN0bXQuUHJpbnQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmV0dXJuU3RhdGVtZW50KCk6IFN0bXQuU3RtdCB7XHJcbiAgICAgICAgY29uc3Qga2V5d29yZDogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5zZW1pY29sb24pKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLnNlbWljb2xvbiwgYEV4ZWN0ZWQgXCI7XCIgYWZ0ZXIgcmV0dXJuIHN0YXRlbWVudGApO1xyXG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5SZXR1cm4oa2V5d29yZCwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYmxvY2soKTogU3RtdC5TdG10W10ge1xyXG4gICAgICAgIGNvbnN0IHN0YXRlbWVudHM6IFN0bXQuU3RtdFtdID0gW107XHJcbiAgICAgICAgd2hpbGUgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5yaWdodEJyYWNlKSAmJiAhdGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICBzdGF0ZW1lbnRzLnB1c2godGhpcy5kZWNsYXJhdGlvbigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5yaWdodEJyYWNlLCBgRXhwZWN0ZWQgY2xvc2luZyBibG9jayBcIn1cImApO1xyXG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXhwcmVzc2lvblN0YXRlbWVudCgpOiBTdG10LlN0bXQge1xyXG4gICAgICAgIGNvbnN0IGV4cHJlc3Npb246IEV4cHIuRXhwciA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuc2VtaWNvbG9uLCBgRXhwZWN0ZWQgc2VtaWNvbG9uIFwiO1wiIGFmdGVyICR7ZXhwcmVzc2lvbn0gZXhwcmVzc2lvbmApO1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5zZW1pY29sb24pKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBjb256b2xlLndhcm4oYFtsaW5lICgke3Rva2VuLmxpbmV9KSBwYXJzZSB3YXJuaW5nIGF0IFwiJHt0b2tlbi5sZXhlbWV9XCJdID0+IHVubmVjZXNzYXJ5IHNlbWljb2xvbiBvciBlbXB0eSBzdGF0ZW1lbnRgKTtcclxuICAgICAgICAgICAgd2hpbGUodGhpcy5tYXRjaChUb2tlblR5cGUuc2VtaWNvbG9uKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5FeHByZXNzaW9uKGV4cHJlc3Npb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXhwcmVzc2lvbigpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFzc2lnbm1lbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzc2lnbm1lbnQoKTogRXhwci5FeHByIHtcclxuICAgICAgICBjb25zdCBleHByOiBFeHByLkV4cHIgPSB0aGlzLnRlcm5hcnkoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmVxdWFsLCBUb2tlblR5cGUucGx1c0VxdWFsLFxyXG4gICAgICAgICAgICBUb2tlblR5cGUubWludXNFcXVhbCwgVG9rZW5UeXBlLnN0YXJFcXVhbCwgVG9rZW5UeXBlLnNsYXNoRXF1YWwpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgbGV0IHZhbHVlOiBFeHByLkV4cHIgPSB0aGlzLmFzc2lnbm1lbnQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChleHByIGluc3RhbmNlb2YgRXhwci5WYXJpYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZTogVG9rZW4gPSBleHByLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBpZiAob3BlcmF0b3IudHlwZSAhPT0gVG9rZW5UeXBlLmVxdWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRXhwci5CaW5hcnkobmV3IEV4cHIuVmFyaWFibGUobmFtZSksIG9wZXJhdG9yLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuQXNzaWduKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChleHByIGluc3RhbmNlb2YgRXhwci5HZXQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvcGVyYXRvci50eXBlICE9PSBUb2tlblR5cGUuZXF1YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG5ldyBFeHByLkJpbmFyeShuZXcgRXhwci5HZXQoZXhwci5lbnRpdHksIGV4cHIua2V5KSwgb3BlcmF0b3IsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5TZXQoZXhwci5lbnRpdHksIGV4cHIua2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucGFyc2VFcnJvcihvcGVyYXRvciwgYEludmFsaWQgbC12YWx1ZSwgaXMgbm90IGFuIGFzc2lnbmluZyB0YXJnZXQuYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRlcm5hcnkoKTogRXhwci5FeHByIHtcclxuICAgICAgICBjb25zdCBleHByID0gdGhpcy5sb2dpY2FsT3IoKTtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUucXVlc3Rpb24pKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoZW5FeHByOiBFeHByLkV4cHIgPSB0aGlzLnRlcm5hcnkoKTtcclxuICAgICAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5jb2xvbiwgYEV4cGVjdGVkIFwiOlwiIGFmdGVyIHRlcm5hcnkgPyBleHByZXNzaW9uYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsc2VFeHByOiBFeHByLkV4cHIgPSB0aGlzLnRlcm5hcnkoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlRlcm5hcnkoZXhwciwgdGhlbkV4cHIsIGVsc2VFeHByKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2dpY2FsT3IoKTogRXhwci5FeHByIHtcclxuICAgICAgICBsZXQgZXhwciA9IHRoaXMubG9naWNhbEFuZCgpO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5vcikpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3I6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBjb25zdCByaWdodDogRXhwci5FeHByID0gdGhpcy5sb2dpY2FsQW5kKCk7XHJcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5Mb2dpY2FsKGV4cHIsIG9wZXJhdG9yLCByaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBleHByO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9naWNhbEFuZCgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGxldCBleHByID0gdGhpcy5lcXVhbGl0eSgpO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5hbmQpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMuZXF1YWxpdHkoKTtcclxuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkxvZ2ljYWwoZXhwciwgb3BlcmF0b3IsIHJpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlcXVhbGl0eSgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGxldCBleHByICA9IHRoaXMuY29tcGFyaXNvbigpO1xyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChcclxuICAgICAgICAgICAgVG9rZW5UeXBlLmJhbmdFcXVhbCwgVG9rZW5UeXBlLmVxdWFsRXF1YWwsXHJcbiAgICAgICAgICAgIFRva2VuVHlwZS5iYW5nRXF1YWxFcXVhbCwgVG9rZW5UeXBlLmVxdWFsRXF1YWxFcXVhbClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3I6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBjb25zdCByaWdodDogRXhwci5FeHByID0gdGhpcy5jb21wYXJpc29uKCk7XHJcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5CaW5hcnkoZXhwciwgb3BlcmF0b3IsIHJpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBleHByO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29tcGFyaXNvbigpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGxldCBleHByOiBFeHByLkV4cHIgPSB0aGlzLmFkZGl0aW9uKCk7XHJcblxyXG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5ncmVhdGVyLCBUb2tlblR5cGUuZ3JlYXRlckVxdWFsLCBUb2tlblR5cGUubGVzcywgVG9rZW5UeXBlLmxlc3NFcXVhbCkpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3I6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBjb25zdCByaWdodDogRXhwci5FeHByID0gdGhpcy5hZGRpdGlvbigpO1xyXG4gICAgICAgICAgICBleHByID0gbmV3IEV4cHIuQmluYXJ5KGV4cHIsIG9wZXJhdG9yLCByaWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZGl0aW9uKCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgbGV0IGV4cHI6IEV4cHIuRXhwciA9IHRoaXMubW9kdWx1cygpO1xyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUubWludXMsIFRva2VuVHlwZS5wbHVzKSkge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0OiBFeHByLkV4cHIgPSB0aGlzLm1vZHVsdXMoKTtcclxuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkJpbmFyeShleHByLCBvcGVyYXRvciwgcmlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb2R1bHVzKCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgbGV0IGV4cHI6IEV4cHIuRXhwciA9IHRoaXMubXVsdGlwbGljYXRpb24oKTtcclxuXHJcbiAgICAgICAgd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLnBlcmNlbnQpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMubXVsdGlwbGljYXRpb24oKTtcclxuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkJpbmFyeShleHByLCBvcGVyYXRvciwgcmlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtdWx0aXBsaWNhdGlvbigpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGxldCBleHByOiBFeHByLkV4cHIgPSB0aGlzLnVuYXJ5KCk7XHJcblxyXG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5zbGFzaCwgVG9rZW5UeXBlLnN0YXIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMudW5hcnkoKTtcclxuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkJpbmFyeShleHByLCBvcGVyYXRvciwgcmlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1bmFyeSgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5taW51cywgVG9rZW5UeXBlLmJhbmcsIFRva2VuVHlwZS5kb2xsYXIsIFRva2VuVHlwZS5wbHVzUGx1cywgVG9rZW5UeXBlLm1pbnVzTWludXMpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMudW5hcnkoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlVuYXJ5KG9wZXJhdG9yLCByaWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5uZXdLZXl3b3JkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBuZXdLZXl3b3JkKCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLm5ldykpIHtcclxuICAgICAgICAgICAgY29uc3QgY29uc3RydWN0OiBFeHByLkV4cHIgPSB0aGlzLmNhbGwoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLk5ldyhjb25zdHJ1Y3QpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FsbCgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGxldCBleHByOiBFeHByLkV4cHIgPSB0aGlzLnByaW1hcnkoKTtcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUubGVmdFBhcmVuKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNhbGxlZSA9IGV4cHI7XHJcbiAgICAgICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJnczogRXhwci5FeHByW10gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLnJpZ2h0UGFyZW4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmNvbW1hKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVuOiBUb2tlbiA9IHRoaXMuY29uc3VtZShUb2tlblR5cGUucmlnaHRQYXJlbiwgYEV4cGVjdGVkIFwiKVwiIGFmdGVyIGFyZ3VtZW50c2ApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxlZSA9IG5ldyBFeHByLkNhbGwoY2FsbGVlLCBwYXJlbiwgYXJncywgbnVsbClcclxuICAgICAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmxlZnRQYXJlbikpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxlZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5kb3QpKSB7XHJcbiAgICAgICAgICAgICAgICBleHByID0gdGhpcy5kb3RHZXQoZXhwcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUubGVmdEJyYWNrZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBleHByID0gdGhpcy5icmFja2V0R2V0KGV4cHIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBleHByO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZG90R2V0KGV4cHI6IEV4cHIuRXhwcik6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgY29uc3QgbmFtZTogVG9rZW4gPSB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLmlkZW50aWZpZXIsIGBFeHBlY3QgcHJvcGVydHkgbmFtZSBhZnRlciAnLidgKTtcclxuICAgICAgICBjb25zdCBrZXk6IEV4cHIuS2V5ID0gbmV3IEV4cHIuS2V5KG5hbWUpO1xyXG4gICAgICAgIHJldHVybiBuZXcgRXhwci5HZXQoZXhwciwga2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJyYWNrZXRHZXQoZXhwcjogRXhwci5FeHByKTogRXhwci5FeHByIHtcclxuICAgICAgICBsZXQga2V5OiBFeHByLkV4cHIgPSBudWxsO1xyXG4gICAgICAgIGxldCBlbmQ6IEV4cHIuRXhwciA9IG51bGw7XHJcbiAgICAgICAgbGV0IHN0ZXA6IEV4cHIuRXhwciA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5jaGVjayhUb2tlblR5cGUuY29sb24pKSB7XHJcbiAgICAgICAgICAgIGtleSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuY29sb24pICYmICF0aGlzLmNoZWNrKFRva2VuVHlwZS5jb2xvbikpIHtcclxuICAgICAgICAgICAgZW5kID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5jb2xvbikgJiYgIXRoaXMuY2hlY2soVG9rZW5UeXBlLnJpZ2h0QnJhY2tldCkpIHtcclxuICAgICAgICAgICAgc3RlcCA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLnJpZ2h0QnJhY2tldCwgYEV4cGVjdGVkIFwiXVwiIGFmdGVyIHByb3BlcnR5IG5hbWUgZXhwcmVzc2lvbmApO1xyXG4gICAgICAgIGlmICgha2V5IHx8IGVuZCB8fCBzdGVwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gbmV3IEV4cHIuUmFuZ2Uoa2V5LCBlbmQsIHN0ZXApO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuR2V0KGV4cHIsIHJhbmdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFeHByLkdldChleHByLCBrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJpbWFyeSgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5mYWxzZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkxpdGVyYWwoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUudHJ1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkxpdGVyYWwodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5udWxsKSkge1xyXG4gICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkxpdGVyYWwobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5udW1iZXIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5MaXRlcmFsKHRoaXMucHJldmlvdXMoKS5saXRlcmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLnN0cmluZykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlp0cmluZyh0aGlzLnByZXZpb3VzKCkubGl0ZXJhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5pZGVudGlmaWVyKSkge1xyXG4gICAgICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gIHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLnBsdXNQbHVzKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlBvc3RmaXgoaWRlbnRpZmllciwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLm1pbnVzTWludXMpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuUG9zdGZpeChpZGVudGlmaWVyLCAtMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlZhcmlhYmxlKGlkZW50aWZpZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUubGVmdFBhcmVuKSkge1xyXG4gICAgICAgICAgICBjb25zdCBleHByOiBFeHByLkV4cHIgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5yaWdodFBhcmVuLCBgRXhwZWN0ZWQgXCIpXCIgYWZ0ZXIgZXhwcmVzc2lvbmApO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuR3JvdXBpbmcoZXhwcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5sZWZ0QnJhY2UpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVudGl0eSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuZnVuY3Rpb24pKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuOiBUb2tlbiA9IG5ldyBUb2tlbignbGFtYmRhJywgJ2xhbWJkYScsICdsYW1iZGEnLCB0aGlzLnByZXZpb3VzKCkubGluZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhbWJkYTogU3RtdC5GdW5jID0gdGhpcy5mdW5jUGFyYW1zQm9keSh0b2tlbiwgXCJsYW1iZGFcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5MYW1iZGEobGFtYmRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLnN1cGVyKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdXBlckNhbGwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmxlZnRCcmFja2V0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hcnJheSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhyb3cgdGhpcy5wYXJzZUVycm9yKHRoaXMucGVlaygpLCBgRXhwZWN0ZWQgZXhwcmVzc2lvbmApO1xyXG4gICAgICAgIC8vIHVucmVhY2hlYWJsZSBjb2RlXHJcbiAgICAgICAgcmV0dXJuIG5ldyBFeHByLkxpdGVyYWwobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVudGl0eSgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5yaWdodEJyYWNlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuRW50aXR5KFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcHJvcGVydGllczogRXhwci5TZXRbXSA9IFtdO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLnN0cmluZywgVG9rZW5UeXBlLmlkZW50aWZpZXIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXk6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5jb2xvbiwgYEV4cGVjdGVkIFwiOlwiIGNvbG9uIGFmdGVyIG1lbWJlcmApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXMucHVzaChuZXcgRXhwci5TZXQobnVsbCwgbmV3IEV4cHIuS2V5KGtleSksIHZhbHVlKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnNlRXJyb3IodGhpcy5wZWVrKCksIGBTdHJpbmcgb3IgaWRlbnRpZmllciBleHBlY3RlZCBhZnRlciBPYmplY3Qge2ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuY29tbWEpKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLnJpZ2h0QnJhY2UsIGBFeHBlY3RlZCBcIn1cIiBhZnRlciBvYmplY3QgbGl0ZXJhbGApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IEV4cHIuRW50aXR5KHByb3BlcnRpZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXJyYXkoKTogRXhwci5FeHByIHtcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUucmlnaHRCcmFja2V0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGlzdChbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgdmFsdWVzLnB1c2godGhpcy5leHByZXNzaW9uKCkpO1xyXG4gICAgICAgIH0gd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmNvbW1hKSk7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5yaWdodEJyYWNrZXQsIGBFeHBlY3RlZCBcIl1cIiBhZnRlciBhcnJheSBkZWNsYXJhdGlvbmApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGlzdCh2YWx1ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3VwZXJDYWxsKCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgY29uc3QgaW5kZXhlczogVG9rZW5bXSA9IFtdO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5kb3QpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5jb25zdW1lKFRva2VuVHlwZS5pZGVudGlmaWVyLCBgRXhwZWN0ZWQgbWV0aG9kIG5hbWUgYWZ0ZXIgc3VwZXJgKTtcclxuICAgICAgICAgICAgaW5kZXhlcy5wdXNoKHRva2VuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGFyZ3M6IEV4cHIuRXhwcltdID0gW107XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5sZWZ0UGFyZW4sIGBFeHBlY3RlZCBmdW5jdGlvbiBwYXJhbWV0ZXJzIG9yIG1ldGhvZCBuYW1lIGFmdGVyIHN1cGVyYCk7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLnJpZ2h0UGFyZW4pKSB7XHJcbiAgICAgICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZXhwcmVzc2lvbigpKTtcclxuICAgICAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmNvbW1hKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5yaWdodFBhcmVuLCBgRXhwZWN0ZWQgXCIpXCIgYWZ0ZXIgc3VwZXIgYXJndW1lbnRzYCk7XHJcbiAgICAgICAgfSB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUubGVmdFBhcmVuKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgRXhwci5TdXBlcihpbmRleGVzLCBhcmdzKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gJy4vY29uc29sZSc7XHJcbmRlY2xhcmUgdmFyIGNvbnpvbGU6IENvbnNvbGU7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvdG90eXBlIHtcclxuXHJcbiAgICBwdWJsaWMgdmFsdWVzOiBNYXA8c3RyaW5nLCBhbnk+O1xyXG4gICAgcHJpdmF0ZSBwcm90b3R5cGU6IFByb3RvdHlwZTtcclxuICAgIHByaXZhdGUgb3duZXI6IG9iamVjdDtcclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlczogTWFwPHN0cmluZywgYW55PiwgcGFyZW50OiBQcm90b3R5cGUgPSBudWxsLCBvd25lcjogb2JqZWN0KSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXMgPSBuZXcgTWFwKHZhbHVlcyk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUgPSBwYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5vd25lciA9IG93bmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXMuc2V0KG5hbWUsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZXMuaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzLmdldChrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wcm90b3R5cGUgIT09IG51bGwgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3RvdHlwZS5nZXQoa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uem9sZS5lcnJvcihgW2VudGl0eSBlcnJvcl0gPT4gJHtrZXl9IGlzIG5vdCBkZWZpbmVkIGluICR7dGhpcy5vd25lcn1gKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFJldHVybiBleHRlbmRzIEVycm9yIHtcclxuICAgIHB1YmxpYyB2YWx1ZTogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbnRlcm5hbEVudGl0eSwgQXJyYXlFbnRpdHksIFN0cmluZ0VudGl0eSwgRnVuY3Rpb25FbnRpdHkgfSBmcm9tIFwiLi9lbnRpdHlcIjtcclxuaW1wb3J0IHsgUHJvdG90eXBlIH0gZnJvbSBcIi4vcHJvdG90eXBlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFzT3duUHJvcGVydHkodGhhdDogYW55KTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8aW50ZXJuYWwgZnVuY3Rpb24gaGFzT3duUHJvcGVydHk+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAxO1xyXG4gICAgZnVuYy5jYWxsID0gKGludCwgdGhpeiwgYXJncykgPT4gdGhpei5wcm9wZXJ0aWVzLmhhcyhhcmdzWzBdKTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aFByb3BlcnR5KHRoYXQ6IGFueSk6IEludGVybmFsRW50aXR5IHtcclxuICAgIGNvbnN0IGZ1bmMgPSBuZXcgSW50ZXJuYWxFbnRpdHkoKTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPGludGVybmFsIGZ1bmN0aW9uIHNpemU+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAwO1xyXG4gICAgZnVuYy5jYWxsID0gKGludCwgdGhpeiwgYXJncykgPT4gdGhpei5wcm9wZXJ0aWVzLnNpemU7XHJcbiAgICByZXR1cm4gZnVuYztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGludm9rZU1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBmdW5jdGlvbiBpbnZva2U+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAtMTtcclxuICAgIGZ1bmMuY2FsbCA9IChpbnQsIHRoaXosIGFyZ3MpID0+IHRoaXouY2FsbChpbnQsIGFyZ3NbMF0sIGFyZ3Muc2xpY2UoMSkpO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyQ2FsbCh0aGF0OiBhbnksIGluc3RhbmNlOiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLmFyaXR5ID0gKCkgPT4gdGhhdC5wYXJlbnQuYXJpdHkoKTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPG5hdGl2ZSBzdXBlciBmdW5jdGlvbj4nO1xyXG4gICAgZnVuYy5jYWxsID0gKGludCwgdGhpeiwgYXJncykgPT5cclxuICAgICAgICB0aGF0LnBhcmVudC5jYWxsKGludCwgaW5zdGFuY2UsIGFyZ3MpO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZU1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICAvKiogbWVyZ2UoUGFyZW50LCBvdmVycmlkZT1mYWxzZSkgKi9cclxuICAgIGZ1bmMuY2FsbCA9IChpbnQsIHRoaXosIGFyZ3MpID0+IHtcclxuICAgICAgICB0aGF0LnByb3BlcnRpZXMgPSBhcmdzWzFdID9cclxuICAgICAgICAgICAgbmV3IE1hcChbLi4udGhhdC5wcm9wZXJ0aWVzLCAuLi5hcmdzWzBdLnByb3BlcnRpZXNdKSA6XHJcbiAgICAgICAgICAgIG5ldyBNYXAoWy4uLmFyZ3NbMF0ucHJvcGVydGllcywgLi4udGhhdC5wcm9wZXJ0aWVzXSk7XHJcbiAgICB9O1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8aW50ZXJuYWwgbWVyZ2UgZnVuY3Rpb24+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAtMTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kTWV0aG9kKHRoYXQ6IGFueSk6IEludGVybmFsRW50aXR5IHtcclxuICAgIGNvbnN0IGZ1bmMgPSBuZXcgSW50ZXJuYWxFbnRpdHkoKTtcclxuICAgIGZ1bmMuY2FsbCA9IChpbnQsIHRoaXosIGFyZ3MpID0+IHtcclxuICAgICAgICBjb25zdCBwcm90byA9IG5ldyBQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIHRoYXQucHJvcGVydGllcyxcclxuICAgICAgICAgICAgbmV3IFByb3RvdHlwZShhcmdzWzBdLnByb3BlcnRpZXMsIGFyZ3NbMF0ucHJvdG90eXBlLCB0aGl6KSxcclxuICAgICAgICAgICAgdGhpelxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhhdC5wcm90b3R5cGUgPSBwcm90bztcclxuICAgIH07XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBtZXJnZSBmdW5jdGlvbj4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IC0xO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbmhlcml0TWV0aG9kKHRoYXQ6IGFueSk6IEludGVybmFsRW50aXR5IHtcclxuICAgIGNvbnN0IGZ1bmMgPSBuZXcgSW50ZXJuYWxFbnRpdHkoKTtcclxuICAgIGZ1bmMuY2FsbCA9IChpbnQsIHRoaXosIGFyZ3MpID0+IHtcclxuICAgICAgICB0aGF0LnByb3RvdHlwZS52YWx1ZXMgPSBuZXcgTWFwKFsuLi5hcmdzWzBdLnByb3BlcnRpZXMsIC4uLnRoYXQucHJvdG90eXBlLnZhbHVlc10pO1xyXG4gICAgfTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPGludGVybmFsIGluaGVyaXRhbmNlIGZ1bmN0aW9uPic7XHJcbiAgICBmdW5jLmFyaXR5ID0gKCkgPT4gMTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZWNob0Z1bmN0aW9uKCk6IEludGVybmFsRW50aXR5IHtcclxuICAgIGNvbnN0IGZ1bmMgPSBuZXcgSW50ZXJuYWxFbnRpdHkoKTtcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAxO1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8bmF0aXZlIGZ1bmN0aW9uPic7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50ZXJwcmV0ZXIsIHRoaXosIGFyZ3MpID0+IGNvbnNvbGUubG9nKGFyZ3NbMF0pO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kRnVuY3Rpb24oKTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IDA7XHJcbiAgICBmdW5jLmNhbGwgPSAoKSA9PiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8bmF0aXZlIGZ1bmN0aW9uPic7XHJcbiAgICByZXR1cm4gZnVuYztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5TGVuZ3RoTWV0aG9kKHRoYXQ6IGFueSk6IEludGVybmFsRW50aXR5IHtcclxuICAgIGNvbnN0IGZ1bmMgPSBuZXcgSW50ZXJuYWxFbnRpdHkoKTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPGludGVybmFsIGZ1bmN0aW9uIHNpemU+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAwO1xyXG4gICAgZnVuYy5jYWxsID0gKGludCwgdGhpeiwgYXJncykgPT4gdGhpei52YWx1ZXMubGVuZ3RoO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJheUpvaW5NZXRob2QodGhhdDogYW55KTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8aW50ZXJuYWwgZnVuY3Rpb24gc2l6ZT4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IDE7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiBuZXcgU3RyaW5nRW50aXR5KHRoaXoudmFsdWVzLmpvaW4oYXJnc1swXSkpO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJheVB1c2hNZXRob2QodGhhdDogYW55KTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8aW50ZXJuYWwgZnVuY3Rpb24gc2l6ZT4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IDE7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiB0aGl6LnZhbHVlcy5wdXNoKGFyZ3NbMF0pO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJheVBvcE1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBmdW5jdGlvbiBzaXplPic7XHJcbiAgICBmdW5jLmFyaXR5ID0gKCkgPT4gMDtcclxuICAgIGZ1bmMuY2FsbCA9IChpbnQsIHRoaXosIGFyZ3MpID0+IHRoaXoudmFsdWVzLnBvcChhcmdzWzBdKTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlFYWNoTWV0aG9kKHRoYXQ6IGFueSk6IEludGVybmFsRW50aXR5IHtcclxuICAgIGNvbnN0IGZ1bmMgPSBuZXcgSW50ZXJuYWxFbnRpdHkoKTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPGludGVybmFsIGZ1bmN0aW9uIHNpemU+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAtMTtcclxuICAgIGZ1bmMuY2FsbCA9IChpbnQsIHRoaXosIGFyZ3MpID0+IHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpei52YWx1ZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgPEZ1bmN0aW9uRW50aXR5PmFyZ3NbMF0uY2FsbChpbnQsIHRoaXosIFt0aGl6LnZhbHVlc1tpXSwgaSwgdGhpel0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuYztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5TWFwTWV0aG9kKHRoYXQ6IGFueSk6IEludGVybmFsRW50aXR5IHtcclxuICAgIGNvbnN0IGZ1bmMgPSBuZXcgSW50ZXJuYWxFbnRpdHkoKTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPGludGVybmFsIGZ1bmN0aW9uIHNpemU+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAtMTtcclxuICAgIGZ1bmMuY2FsbCA9IChpbnQsIHRoaXosIGFyZ3MpID0+IHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXoudmFsdWVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXoudmFsdWVzW2ldID0gPEZ1bmN0aW9uRW50aXR5PmFyZ3NbMF0uY2FsbChpbnQsIHRoaXosIFt0aGl6LnZhbHVlc1tpXSwgaSwgdGhpel0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuYztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5RmluZE1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBmdW5jdGlvbiBzaXplPic7XHJcbiAgICBmdW5jLmFyaXR5ID0gKCkgPT4gLTE7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGl6LnZhbHVlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAoPEZ1bmN0aW9uRW50aXR5PmFyZ3NbMF0uY2FsbChpbnQsIHRoaXosIFt0aGl6LnZhbHVlc1tpXSwgaSwgdGhpel0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpei52YWx1ZXNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJheUluZGV4T2ZNZXRob2QodGhhdDogYW55KTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8aW50ZXJuYWwgZnVuY3Rpb24gc2l6ZT4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IDE7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGl6LnZhbHVlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAodGhpei52YWx1ZXNbaV0gPT09IGFyZ3NbMF0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nTGVuZ3RoTWV0aG9kKHRoYXQ6IGFueSk6IEludGVybmFsRW50aXR5IHtcclxuICAgIGNvbnN0IGZ1bmMgPSBuZXcgSW50ZXJuYWxFbnRpdHkoKTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPGludGVybmFsIGZ1bmN0aW9uIHNpemU+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAwO1xyXG4gICAgZnVuYy5jYWxsID0gKGludCwgdGhpeiwgYXJncykgPT4gdGhpei52YWx1ZS5sZW5ndGg7XHJcbiAgICByZXR1cm4gZnVuYztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ1N1YlN0ck1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBmdW5jdGlvbiBzaXplPic7XHJcbiAgICBmdW5jLmFyaXR5ID0gKCkgPT4gLTE7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiBuZXcgU3RyaW5nRW50aXR5KHRoaXoudmFsdWUuc3Vic3RyKGFyZ3NbMF0sIGFyZ3NbMV0pKTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nU3BsaXRNZXRob2QodGhhdDogYW55KTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8aW50ZXJuYWwgZnVuY3Rpb24gc2l6ZT4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IDE7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiBuZXcgQXJyYXlFbnRpdHkodGhpei52YWx1ZS5zcGxpdChhcmdzWzBdKSk7XHJcbiAgICByZXR1cm4gZnVuYztcclxufVxyXG4iLCJpbXBvcnQgeyBUb2tlbiwgVG9rZW5UeXBlIH0gZnJvbSAnLi4vc3JjL3Rva2VuJztcclxuaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gJy4vY29uc29sZSc7XHJcbmRlY2xhcmUgdmFyIGNvbnpvbGU6IENvbnNvbGU7XHJcblxyXG5jb25zdCBpc0RpZ2l0ID0gKGNoYXI6IHN0cmluZykgPT4gY2hhciA+PSAnMCcgJiYgY2hhciA8PSAnOSc7XHJcblxyXG5jb25zdCBpc0FscGhhID0gKGNoYXI6IHN0cmluZyApID0+IChjaGFyID49ICdhJyAmJiBjaGFyIDw9ICd6JykgfHwgKGNoYXIgPj0gJ0EnICYmIGNoYXIgPD0gJ1onKTtcclxuXHJcbmNvbnN0IGlzQWxwaGFOdW1lcmljID0gKGNoYXI6IHN0cmluZykgPT4gaXNBbHBoYShjaGFyKSB8fCBpc0RpZ2l0KGNoYXIpO1xyXG5cclxuY29uc3QgaXNLZXl3b3JkID0gKHdvcmQ6IHN0cmluZykgPT4gVG9rZW5UeXBlW3dvcmRdID49IDIzO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjYW5uZXIge1xyXG5cclxuICAgIHB1YmxpYyBzb3VyY2U6IHN0cmluZztcclxuICAgIHB1YmxpYyB0b2tlbnM6IFRva2VuW10gPSBbXTtcclxuICAgIHByaXZhdGUgY3VycmVudCA9IDA7XHJcbiAgICBwcml2YXRlIGxpbmUgPSAxO1xyXG4gICAgcHJpdmF0ZSBzdGFydCA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc291cmNlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVvZigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50ID49IHRoaXMuc291cmNlLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkdmFuY2UoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Kys7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLmNoYXJBdCh0aGlzLmN1cnJlbnQgLSAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFRva2VuKHRva2VuTmFtZTogc3RyaW5nLCBsaXRlcmFsOiBhbnkpIHtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5zb3VyY2Uuc3Vic3RyaW5nKHRoaXMuc3RhcnQsIHRoaXMuY3VycmVudCk7XHJcbiAgICAgICAgdGhpcy50b2tlbnMucHVzaChuZXcgVG9rZW4odG9rZW5OYW1lLCB0ZXh0LCBsaXRlcmFsLCB0aGlzLmxpbmUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1hdGNoKGV4cGVjdGVkOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zb3VyY2UuY2hhckF0KHRoaXMuY3VycmVudCkgIT09IGV4cGVjdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudCsrO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGVlaygpIHtcclxuICAgICAgICBpZiAodGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ1xcMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5jaGFyQXQodGhpcy5jdXJyZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBlZWtOZXh0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnQgKyAxID49IHRoaXMuc291cmNlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ1xcMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5jaGFyQXQodGhpcy5jdXJyZW50ICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb21tZW50KCkge1xyXG4gICAgICAgIHdoaWxlICh0aGlzLnBlZWsoKSAhPT0gJ1xcbicgJiYgIXRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RyaW5nKHF1b3RlOiBzdHJpbmcsIHR5cGU6IFRva2VuVHlwZSkge1xyXG4gICAgICAgIHdoaWxlICh0aGlzLnBlZWsoKSAhPT0gcXVvdGUgJiYgIXRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGVlaygpID09PSAnXFxuJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saW5lKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVbnRlcm1pbmF0ZWQgc3RyaW5nLlxyXG4gICAgICAgIGlmICh0aGlzLmVvZigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NhbkVycm9yKGBVbnRlcm1pbmF0ZWQgc3RyaW5nLCBleHBlY3RpbmcgY2xvc2luZyAke3F1b3RlfWApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUaGUgY2xvc2luZyBcIi5cclxuICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuXHJcbiAgICAgICAgLy8gVHJpbSB0aGUgc3Vycm91bmRpbmcgcXVvdGVzLlxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zb3VyY2Uuc3Vic3RyaW5nKHRoaXMuc3RhcnQgKyAxLCB0aGlzLmN1cnJlbnQgLSAxKTtcclxuICAgICAgICB0aGlzLmFkZFRva2VuKCdzdHJpbmcnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBudW1iZXIoKSB7XHJcbiAgICAgICAgLy8gZ2V0cyBpbnRlZ2VyIHBhcnRcclxuICAgICAgICB3aGlsZSAoaXNEaWdpdCh0aGlzLnBlZWsoKSkpIHtcclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjaGVja3MgZm9yIGZyYWN0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMucGVlaygpID09PSAnLicgJiYgaXNEaWdpdCh0aGlzLnBlZWtOZXh0KCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZ2V0cyBmcmFjdGlvbiBwYXJ0XHJcbiAgICAgICAgd2hpbGUgKGlzRGlnaXQodGhpcy5wZWVrKCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNvdXJjZS5zdWJzdHJpbmcodGhpcy5zdGFydCAsIHRoaXMuY3VycmVudCk7XHJcbiAgICAgICAgdGhpcy5hZGRUb2tlbignbnVtYmVyJywgTnVtYmVyKHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpZGVudGlmaWVyKCkge1xyXG4gICAgICAgIHdoaWxlIChpc0FscGhhTnVtZXJpYyh0aGlzLnBlZWsoKSkpIHtcclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnNvdXJjZS5zdWJzdHJpbmcodGhpcy5zdGFydCwgdGhpcy5jdXJyZW50KTtcclxuICAgICAgICB2YWx1ZSA9IHZhbHVlID09PSAnZnVuYycgPyAnZnVuY3Rpb24nIDogdmFsdWU7XHJcbiAgICAgICAgaWYgKGlzS2V5d29yZCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRUb2tlbih2YWx1ZSwgbnVsbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRUb2tlbignaWRlbnRpZmllcicsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNjYW4oKSB7XHJcbiAgICAgICAgd2hpbGUgKCF0aGlzLmVvZigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQgPSB0aGlzLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2NhblRva2VuKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKG5ldyBUb2tlbignZW9mJywgJycsIG51bGwsIHRoaXMubGluZSkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRva2VucztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNjYW5Ub2tlbigpIHtcclxuICAgICAgICBjb25zdCBjaGFyID0gdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgc3dpdGNoIChjaGFyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJygnOiB0aGlzLmFkZFRva2VuKCdsZWZ0UGFyZW4nLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyknOiB0aGlzLmFkZFRva2VuKCdyaWdodFBhcmVuJywgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdbJzogdGhpcy5hZGRUb2tlbignbGVmdEJyYWNrZXQnLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ10nOiB0aGlzLmFkZFRva2VuKCdyaWdodEJyYWNrZXQnLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3snOiB0aGlzLmFkZFRva2VuKCdsZWZ0QnJhY2UnLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ30nOiB0aGlzLmFkZFRva2VuKCdyaWdodEJyYWNlJywgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcsJzogdGhpcy5hZGRUb2tlbignY29tbWEnLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJy4nOiB0aGlzLmFkZFRva2VuKCdkb3QnLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzsnOiB0aGlzLmFkZFRva2VuKCdzZW1pY29sb24nLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyonOiB0aGlzLmFkZFRva2VuKHRoaXMubWF0Y2goJz0nKSA/ICdzdGFyRXF1YWwnIDogJ3N0YXInLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ14nOiB0aGlzLmFkZFRva2VuKCdjYXJldCcsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnPyc6IHRoaXMuYWRkVG9rZW4oJ3F1ZXN0aW9uJywgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc6JzogdGhpcy5hZGRUb2tlbignY29sb24nLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyUnOiB0aGlzLmFkZFRva2VuKHRoaXMubWF0Y2goJz0nKSA/ICdwZXJjZW50RXF1YWwnIDogJ3BlcmNlbnQnLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyQnOiB0aGlzLmFkZFRva2VuKCdkb2xsYXInLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0AnOiB0aGlzLmFkZFRva2VuKCdmdW5jdGlvbicsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnLSc6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnLScpID8gJ21pbnVzTWludXMnIDogdGhpcy5tYXRjaCgnPicpID8gJ3JldHVybicgOiB0aGlzLm1hdGNoKCc9JykgPyAnbWludXNFcXVhbCcgOiAnbWludXMnLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJysnOiB0aGlzLmFkZFRva2VuKHRoaXMubWF0Y2goJysnKSA/ICdwbHVzUGx1cycgOiB0aGlzLm1hdGNoKCc9JykgPyAncGx1c0VxdWFsJyA6ICdwbHVzJywgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd8JzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCd8JykgPyAnb3InIDogJ3BpcGUnLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyYnOiB0aGlzLmFkZFRva2VuKHRoaXMubWF0Y2goJyYnKSA/ICdhbmQnIDogJ2FtcGVyc2FuZCcsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnPCc6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnPScpID8gJ2xlc3NFcXVhbCcgOiAnbGVzcycsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnPic6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnPScpID8gJ2dyZWF0ZXJFcXVhbCcgOiAnZ3JlYXRlcicsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnISc6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnPScpID8gdGhpcy5tYXRjaCgnPScpID8gJ2JhbmdFcXVhbEVxdWFsJyA6ICdiYW5nRXF1YWwnIDogJ2JhbmcnLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJz0nOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goJz0nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKCc9JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbignZXF1YWxFcXVhbEVxdWFsJywgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbignZXF1YWxFcXVhbCcsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXRjaCgnPicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbignYXJyb3cnLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbignZXF1YWwnLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcvJzpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKCcvJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnQoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXRjaCgnPScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbignc2xhc2hFcXVhbCcsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKCdzbGFzaCcsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ1xcbic6IHRoaXMubGluZSsrOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBgJ2A6XHJcbiAgICAgICAgICAgIGNhc2UgYFwiYDpcclxuICAgICAgICAgICAgY2FzZSAnYCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0cmluZyhjaGFyLCBUb2tlblR5cGUuc3RyaW5nKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvLyBpZ25vcmUgY2FzZXNcclxuICAgICAgICAgICAgY2FzZSAnICc6XHJcbiAgICAgICAgICAgIGNhc2UgJ1xccic6XHJcbiAgICAgICAgICAgIGNhc2UgJ1xcdCc6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gY29tcGV4IGNhc2VzXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNEaWdpdChjaGFyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzQWxwaGEoY2hhcikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlkZW50aWZpZXIoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2FuRXJyb3IoYFVuZXhwZWN0ZWQgY2hhcmFjdGVyICcke2NoYXJ9J2ApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2NhbkVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnpvbGUuZXJyb3IoYEVycm9yIGF0ICgke3RoaXMubGluZX0pOiAgJHttZXNzYWdlfWApO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3Igd2hpbGUgc2Nhbm5pbmcuIEV4ZWN1dGlvbiBoYXMgYmVlbiBzdG9wZWQnKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgVG9rZW4gfSBmcm9tICcuL3Rva2VuJztcclxuaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gJy4vY29uc29sZSc7XHJcbmRlY2xhcmUgdmFyIGNvbnpvbGU6IENvbnNvbGU7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NvcGUge1xyXG5cclxuICAgIHByaXZhdGUgdmFsdWVzOiBNYXA8c3RyaW5nLCBhbnk+O1xyXG4gICAgcHJpdmF0ZSBwYXJlbnQ6IFNjb3BlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmVudDogU2NvcGUgPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzY29wZUVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnpvbGUuZXJyb3IoYFtzY29wZSBlcnJvcl0gPT4gJHttZXNzYWdlfWApO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXMuc2V0KG5hbWUsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVmaW5lKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlcy5oYXMobmFtZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zY29wZUVycm9yKGBpZGVudGlmaWVyIFwiJHtuYW1lfVwiIGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZGApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0KG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzc2lnbihuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZXMuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0KG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5hc3NpZ24obmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcGVFcnJvcihgSWRlbnRpZmllciBcIiR7bmFtZX1cIiBoYXMgbm90IGJlZW4gZGVmaW5lZGApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KG5hbWU6IFRva2VuKTogYW55IHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZXMuaGFzKG5hbWUubGV4ZW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMuZ2V0KG5hbWUubGV4ZW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50ICE9PSBudWxsICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ2V0KG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjb3BlRXJyb3IoYEVycm9yIGF0ICgke25hbWUubGluZX0pOiBcIiR7bmFtZS5sZXhlbWV9XCIgaXMgbm90IGRlZmluZWRgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmlyc3Qoa2V5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlcy5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMuZ2V0KGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvYnRhaW4oa2V5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlcy5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMuZ2V0KGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQub2J0YWluKGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBUb2tlbiB9IGZyb20gJ3Rva2VuJztcblxuaW1wb3J0IHsgRXhwciB9IGZyb20gJ2V4cHJlc3Npb24nO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3RtdCB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgY29uc3RydWN0b3IoKSB7fVxuICAgIHB1YmxpYyBhYnN0cmFjdCBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSO1xufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmV4cG9ydCBpbnRlcmZhY2UgU3RtdFZpc2l0b3I8Uj4ge1xuICAgIHZpc2l0QmxvY2tTdG10KHN0bXQ6IEJsb2NrKTogUjtcbiAgICB2aXNpdENsYXNzU3RtdChzdG10OiBDbGFzcyk6IFI7XG4gICAgdmlzaXREb1doaWxlU3RtdChzdG10OiBEb1doaWxlKTogUjtcbiAgICB2aXNpdEV4cHJlc3Npb25TdG10KHN0bXQ6IEV4cHJlc3Npb24pOiBSO1xuICAgIHZpc2l0RnVuY1N0bXQoc3RtdDogRnVuYyk6IFI7XG4gICAgdmlzaXRJZlN0bXQoc3RtdDogSWYpOiBSO1xuICAgIHZpc2l0UHJpbnRTdG10KHN0bXQ6IFByaW50KTogUjtcbiAgICB2aXNpdFJldHVyblN0bXQoc3RtdDogUmV0dXJuKTogUjtcbiAgICB2aXNpdFZhclN0bXQoc3RtdDogVmFyKTogUjtcbiAgICB2aXNpdFdoaWxlU3RtdChzdG10OiBXaGlsZSk6IFI7XG59XG5cbmV4cG9ydCBjbGFzcyBCbG9jayBleHRlbmRzIFN0bXQge1xuICAgIHB1YmxpYyBzdGF0ZW1lbnRzOiBTdG10W107XG5cbiAgICBjb25zdHJ1Y3RvcihzdGF0ZW1lbnRzOiBTdG10W10pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZW1lbnRzID0gc3RhdGVtZW50cztcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0QmxvY2tTdG10KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1N0bXQuQmxvY2snO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDbGFzcyBleHRlbmRzIFN0bXQge1xuICAgIHB1YmxpYyBuYW1lOiBUb2tlbjtcbiAgICBwdWJsaWMgcGFyZW50OiBUb2tlbjtcbiAgICBwdWJsaWMgbWV0aG9kczogRnVuY1tdO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogVG9rZW4sIHBhcmVudDogVG9rZW4sIG1ldGhvZHM6IEZ1bmNbXSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5tZXRob2RzID0gbWV0aG9kcztcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q2xhc3NTdG10KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1N0bXQuQ2xhc3MnO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBEb1doaWxlIGV4dGVuZHMgU3RtdCB7XG4gICAgcHVibGljIGxvb3A6IFN0bXQ7XG4gICAgcHVibGljIGNvbmRpdGlvbjogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKGxvb3A6IFN0bXQsIGNvbmRpdGlvbjogRXhwcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmxvb3AgPSBsb29wO1xuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RG9XaGlsZVN0bXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnU3RtdC5Eb1doaWxlJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRXhwcmVzc2lvbiBleHRlbmRzIFN0bXQge1xuICAgIHB1YmxpYyBleHByZXNzaW9uOiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IoZXhwcmVzc2lvbjogRXhwcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRFeHByZXNzaW9uU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LkV4cHJlc3Npb24nO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBGdW5jIGV4dGVuZHMgU3RtdCB7XG4gICAgcHVibGljIG5hbWU6IFRva2VuO1xuICAgIHB1YmxpYyBwYXJhbXM6IFRva2VuW107XG4gICAgcHVibGljIGJvZHk6IFN0bXRbXTtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IFRva2VuLCBwYXJhbXM6IFRva2VuW10sIGJvZHk6IFN0bXRbXSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgICAgICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RnVuY1N0bXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnU3RtdC5GdW5jJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSWYgZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMgY29uZGl0aW9uOiBFeHByO1xuICAgIHB1YmxpYyB0aGVuU3RtdDogU3RtdDtcbiAgICBwdWJsaWMgZWxzZVN0bXQ6IFN0bXQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25kaXRpb246IEV4cHIsIHRoZW5TdG10OiBTdG10LCBlbHNlU3RtdDogU3RtdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAgICAgdGhpcy50aGVuU3RtdCA9IHRoZW5TdG10O1xuICAgICAgICB0aGlzLmVsc2VTdG10ID0gZWxzZVN0bXQ7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdElmU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LklmJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUHJpbnQgZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMgZXhwcmVzc2lvbjogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKGV4cHJlc3Npb246IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UHJpbnRTdG10KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1N0bXQuUHJpbnQnO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBSZXR1cm4gZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMga2V5d29yZDogVG9rZW47XG4gICAgcHVibGljIHZhbHVlOiBFeHByO1xuXG4gICAgY29uc3RydWN0b3Ioa2V5d29yZDogVG9rZW4sIHZhbHVlOiBFeHByKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMua2V5d29yZCA9IGtleXdvcmQ7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UmV0dXJuU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LlJldHVybic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFZhciBleHRlbmRzIFN0bXQge1xuICAgIHB1YmxpYyBuYW1lOiBUb2tlbjtcbiAgICBwdWJsaWMgdHlwZTogVG9rZW47XG4gICAgcHVibGljIGluaXRpYWxpemVyOiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogVG9rZW4sIHR5cGU6IFRva2VuLCBpbml0aWFsaXplcjogRXhwcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVyID0gaW5pdGlhbGl6ZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFZhclN0bXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnU3RtdC5WYXInO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXaGlsZSBleHRlbmRzIFN0bXQge1xuICAgIHB1YmxpYyBjb25kaXRpb246IEV4cHI7XG4gICAgcHVibGljIGxvb3A6IFN0bXQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25kaXRpb246IEV4cHIsIGxvb3A6IFN0bXQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgICAgIHRoaXMubG9vcCA9IGxvb3A7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFdoaWxlU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LldoaWxlJztcbiAgICB9XG59XG4iLCJleHBvcnQgZW51bSBUb2tlblR5cGUge1xyXG4gICAgLy8gcGFyc2VyIHRva2Vuc1xyXG4gICAgZW9mLFxyXG4gICAgcGFuaWMsXHJcbiAgICBsYW1iZGEsXHJcblxyXG4gICAgLy8gc2luZ2xlIGNoYXJhY3RlciB0b2tlbnNcclxuICAgIGFtcGVyc2FuZCxcclxuICAgIGF0U2lnbixcclxuICAgIGNhcmV0LFxyXG4gICAgY29tbWEsXHJcbiAgICBkb2xsYXIsXHJcbiAgICBkb3QsXHJcbiAgICBsZWZ0QnJhY2UsXHJcbiAgICBsZWZ0QnJhY2tldCxcclxuICAgIGxlZnRQYXJlbixcclxuICAgIHBlcmNlbnQsXHJcbiAgICBwaXBlLFxyXG4gICAgcmlnaHRCcmFjZSxcclxuICAgIHJpZ2h0QnJhY2tldCxcclxuICAgIHJpZ2h0UGFyZW4sXHJcbiAgICBzZW1pY29sb24sXHJcbiAgICBzbGFzaCxcclxuICAgIHN0YXIsXHJcblxyXG4gICAgLy8gb25lIG9yIHR3byBjaGFyYWN0ZXIgdG9rZW5zXHJcbiAgICBhcnJvdyxcclxuICAgIGJhbmcsXHJcbiAgICBiYW5nRXF1YWwsXHJcbiAgICBjb2xvbixcclxuICAgIGVxdWFsLFxyXG4gICAgZXF1YWxFcXVhbCxcclxuICAgIGdyZWF0ZXIsXHJcbiAgICBncmVhdGVyRXF1YWwsXHJcbiAgICBsZXNzLFxyXG4gICAgbGVzc0VxdWFsLFxyXG4gICAgbWludXMsXHJcbiAgICBtaW51c0VxdWFsLFxyXG4gICAgbWludXNNaW51cyxcclxuICAgIHBlcmNlbnRFcXVhbCxcclxuICAgIHBsdXMsXHJcbiAgICBwbHVzRXF1YWwsXHJcbiAgICBwbHVzUGx1cyxcclxuICAgIHF1ZXN0aW9uLFxyXG4gICAgc2xhc2hFcXVhbCxcclxuICAgIHN0YXJFcXVhbCxcclxuXHJcbiAgICAvLyB0aHJlZSBjaGFyYWN0ZXIgdG9rZW5zXHJcbiAgICBiYW5nRXF1YWxFcXVhbCxcclxuICAgIGVxdWFsRXF1YWxFcXVhbCxcclxuXHJcbiAgICAvLyBsaXRlcmFsc1xyXG4gICAgaWRlbnRpZmllcixcclxuICAgIHN0cmluZyxcclxuICAgIG51bWJlcixcclxuXHJcbiAgICAvLyBrZXl3b3Jkc1xyXG4gICAgYW5kLFxyXG4gICAgY2xhc3MsXHJcbiAgICBkbyxcclxuICAgIGVsc2UsXHJcbiAgICBleHRlbmRzLFxyXG4gICAgZmFsc2UsXHJcbiAgICBmb3IsXHJcbiAgICBmdW5jLFxyXG4gICAgZnVuY3Rpb24sXHJcbiAgICBpZixcclxuICAgIGxldCxcclxuICAgIG5ldyxcclxuICAgIG51bGwsXHJcbiAgICBvcixcclxuICAgIHByaW50LFxyXG4gICAgcmV0dXJuLFxyXG4gICAgc3VwZXIsXHJcbiAgICB0cnVlLFxyXG4gICAgdmFyLFxyXG4gICAgd2hpbGVcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRva2VuIHtcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbGluZTogbnVtYmVyO1xyXG4gICAgcHVibGljIHR5cGU6IFRva2VuVHlwZTtcclxuICAgIHB1YmxpYyBsaXRlcmFsOiBhbnk7XHJcbiAgICBwdWJsaWMgbGV4ZW1lOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBsZXhlbWU6IHN0cmluZywgbGl0ZXJhbDogYW55LCBsaW5lOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IFRva2VuVHlwZVtuYW1lXTtcclxuICAgICAgICB0aGlzLmxleGVtZSA9IGxleGVtZTtcclxuICAgICAgICB0aGlzLmxpdGVyYWwgPSBsaXRlcmFsO1xyXG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gYFsoJHt0aGlzLmxpbmV9KTpcIiR7dGhpcy5sZXhlbWV9XCJdYDtcclxuICAgIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==