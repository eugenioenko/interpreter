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

/***/ "./src/array.ts":
/*!**********************!*\
  !*** ./src/array.ts ***!
  \**********************/
/*! exports provided: ArrayEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayEntity", function() { return ArrayEntity; });
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./runtime */ "./src/runtime.ts");
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./range */ "./src/range.ts");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entity */ "./src/entity.ts");



class ArrayEntity extends _entity__WEBPACK_IMPORTED_MODULE_2__["PrototypeEntity"] {
    constructor(values) {
        super();
        this.values = values ? values : [];
        this.prototype.values.set('invoke', _runtime__WEBPACK_IMPORTED_MODULE_0__["invokeMethod"](this));
        this.prototype.values.set('size', _runtime__WEBPACK_IMPORTED_MODULE_0__["arrayLengthMethod"](this));
        this.prototype.values.set('join', _runtime__WEBPACK_IMPORTED_MODULE_0__["arrayJoinMethod"](this));
        this.prototype.values.set('push', _runtime__WEBPACK_IMPORTED_MODULE_0__["arrayPushMethod"](this));
        this.prototype.values.set('pop', _runtime__WEBPACK_IMPORTED_MODULE_0__["arrayPopMethod"](this));
        this.prototype.values.set('each', _runtime__WEBPACK_IMPORTED_MODULE_0__["arrayEachMethod"](this));
        this.prototype.values.set('map', _runtime__WEBPACK_IMPORTED_MODULE_0__["arrayMapMethod"](this));
        this.prototype.values.set('find', _runtime__WEBPACK_IMPORTED_MODULE_0__["arrayFindMethod"](this));
        this.prototype.values.set('indexOf', _runtime__WEBPACK_IMPORTED_MODULE_0__["arrayIndexOfMethod"](this));
    }
    get(key) {
        if (typeof key === "number") {
            return this.values[key];
        }
        else if (key instanceof _range__WEBPACK_IMPORTED_MODULE_1__["IndexRange"]) {
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
        const result = [];
        range.iterate(this.values.length, (i) => {
            result.push(this.values[i]);
        });
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
/*! exports provided: InternalEntity, PrototypeEntity, CallableEntity, FunctionEntity, InstanceEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalEntity", function() { return InternalEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrototypeEntity", function() { return PrototypeEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallableEntity", function() { return CallableEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionEntity", function() { return FunctionEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstanceEntity", function() { return InstanceEntity; });
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scope */ "./src/scope.ts");
/* harmony import */ var _return__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./return */ "./src/return.ts");
/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prototype */ "./src/prototype.ts");
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./runtime */ "./src/runtime.ts");




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
        let result = [];
        this.properties.forEach((value, key) => {
            result.push(`${key}: ${value}`);
        });
        return `{${result.join('; ')}}`;
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
        let restoreScope = null;
        try {
            restoreScope = interpreter.scope;
            interpreter.executeBlock(this.declaration.body, scope);
        }
        catch (e) {
            if (e instanceof _return__WEBPACK_IMPORTED_MODULE_1__["Return"]) {
                if (restoreScope) {
                    interpreter.scope = restoreScope;
                }
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


/***/ }),

/***/ "./src/expression.ts":
/*!***************************!*\
  !*** ./src/expression.ts ***!
  \***************************/
/*! exports provided: Expr, Assign, Binary, Call, Entity, Get, Grouping, Key, Lambda, Logical, List, Literal, New, Postfix, Range, RegEx, Set, Super, Ternary, Unary, Variable, Ztring */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegEx", function() { return RegEx; });
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
class RegEx extends Expr {
    constructor(value) {
        super();
        this.value = value;
    }
    accept(visitor) {
        return visitor.visitRegExExpr(this);
    }
    toString() {
        return 'Expr.RegEx';
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
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./runtime */ "./src/runtime.ts");
/* harmony import */ var _statement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statement */ "./src/statement.ts");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array */ "./src/array.ts");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entity */ "./src/entity.ts");
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./range */ "./src/range.ts");
/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prototype */ "./src/prototype.ts");
/* harmony import */ var _return__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./return */ "./src/return.ts");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scope */ "./src/scope.ts");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./string */ "./src/string.ts");
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./token */ "./src/token.ts");
/* harmony import */ var _regex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./regex */ "./src/regex.ts");












class Interpreter {
    constructor() {
        this.global = new _scope__WEBPACK_IMPORTED_MODULE_8__["Scope"]();
        this.scope = this.global;
        this.global.define('echo', _runtime__WEBPACK_IMPORTED_MODULE_1__["echoFunction"]());
        this.global.define('rand', _runtime__WEBPACK_IMPORTED_MODULE_1__["randFunction"]());
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
        if (value instanceof _entity__WEBPACK_IMPORTED_MODULE_4__["FunctionEntity"] && value.name === "lambda") {
            value.name = stmt.name.lexeme;
            value.prototype.set('name', value.name);
        }
        if (stmt.type.type === _token__WEBPACK_IMPORTED_MODULE_10__["TokenType"].var) {
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
        return new _array__WEBPACK_IMPORTED_MODULE_3__["ArrayEntity"](values);
    }
    visitZtringExpr(expr) {
        return new _string__WEBPACK_IMPORTED_MODULE_9__["StringEntity"](expr.value);
    }
    visitRegExExpr(expr) {
        return new _regex__WEBPACK_IMPORTED_MODULE_11__["RegExEntity"](expr.value);
    }
    visitAssignExpr(expr) {
        const value = this.evaluate(expr.value);
        this.scope.assign(expr.name.lexeme, value);
        return value;
    }
    visitBinaryExpr(expr) {
        let left = this.evaluate(expr.left);
        let right = this.evaluate(expr.right);
        left = left instanceof _string__WEBPACK_IMPORTED_MODULE_9__["StringEntity"] ? left.toString() : left;
        right = right instanceof _string__WEBPACK_IMPORTED_MODULE_9__["StringEntity"] ? right.toString() : right;
        switch (expr.operator.type) {
            case _token__WEBPACK_IMPORTED_MODULE_10__["TokenType"].minus:
            case _token__WEBPACK_IMPORTED_MODULE_10__["TokenType"].minusEqual:
                return (left - right);
            case _token__WEBPACK_IMPORTED_MODULE_10__["TokenType"].slash:
            case _token__WEBPACK_IMPORTED_MODULE_10__["TokenType"].slashEqual:
                return (left / right);
            case _token__WEBPACK_IMPORTED_MODULE_10__["TokenType"].star:
            case _token__WEBPACK_IMPORTED_MODULE_10__["TokenType"].starEqual:
                return (left * right);
            case _token__WEBPACK_IMPORTED_MODULE_10__["TokenType"].percent:
            case _token__WEBPACK_IMPORTED_MODULE_10__["TokenType"].percentEqual:
                return (left % right);
            case _token__WEBPACK_IMPORTED_MODULE_10__["TokenType"].plus:
            case _token__WEBPACK_IMPORTED_MODULE_10__["TokenType"].plusEqual:
                if (!isNaN(left) && !isNaN(right)) {
                    return (left + right);
                }
                if (left instanceof _array__WEBPACK_IMPORTED_MODULE_3__["ArrayEntity"] && right instanceof _array__WEBPACK_IMPORTED_MODULE_3__["ArrayEntity"]) {
                    return new _array__WEBPACK_IMPORTED_MODULE_3__["ArrayEntity"](left.values.concat(right.values));
                }
                return new _string__WEBPACK_IMPORTED_MODULE_9__["StringEntity"](left + right);
            case _token__WEBPACK_IMPORTED_MODULE_10__["TokenType"].pipe:
                return (left | right);
            case _token__WEBPACK_IMPORTED_MODULE_10__["TokenType"].caret:
                return (left ^ right);
            case _token__WEBPACK_IMPORTED_MODULE_10__["TokenType"].greater:
                return left > right;
            case _token__WEBPACK_IMPORTED_MODULE_10__["TokenType"].greaterEqual:
                return left >= right;
            case _token__WEBPACK_IMPORTED_MODULE_10__["TokenType"].less:
                return left < right;
            case _token__WEBPACK_IMPORTED_MODULE_10__["TokenType"].lessEqual:
                return left <= right;
            case _token__WEBPACK_IMPORTED_MODULE_10__["TokenType"].equalEqual:
                // tslint:disable-next-line
                return left == right;
            case _token__WEBPACK_IMPORTED_MODULE_10__["TokenType"].equalEqualEqual:
                return left === right;
            case _token__WEBPACK_IMPORTED_MODULE_10__["TokenType"].bangEqual:
                // tslint:disable-next-line
                return left != right;
            case _token__WEBPACK_IMPORTED_MODULE_10__["TokenType"].bangEqualEqual:
                return left !== right;
            default:
                conzole.warn(expr);
                return null; // unreachable
                break;
        }
    }
    visitLogicalExpr(expr) {
        if (expr.operator.type === _token__WEBPACK_IMPORTED_MODULE_10__["TokenType"].and) {
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
            case _token__WEBPACK_IMPORTED_MODULE_10__["TokenType"].minus:
                return -Number(right);
            case _token__WEBPACK_IMPORTED_MODULE_10__["TokenType"].bang:
                return !Boolean(right);
            case _token__WEBPACK_IMPORTED_MODULE_10__["TokenType"].dollar:
                return right.length;
            case _token__WEBPACK_IMPORTED_MODULE_10__["TokenType"].plusPlus:
                const incValue = Number(right) + 1;
                this.scope.assign(expr.right.name.lexeme, incValue);
                return incValue;
            case _token__WEBPACK_IMPORTED_MODULE_10__["TokenType"].minusMinus:
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
        this.executeBlock(stmt.statements, new _scope__WEBPACK_IMPORTED_MODULE_8__["Scope"](this.scope));
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
        if (!(callee instanceof _entity__WEBPACK_IMPORTED_MODULE_4__["CallableEntity"]) &&
            !(callee instanceof _entity__WEBPACK_IMPORTED_MODULE_4__["InternalEntity"])) {
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
        const newInstance = new _entity__WEBPACK_IMPORTED_MODULE_4__["InstanceEntity"](callee);
        construct.thiz = newInstance;
        this.evaluate(construct);
        return newInstance;
    }
    visitEntityExpr(expr) {
        const entity = new _entity__WEBPACK_IMPORTED_MODULE_4__["PrototypeEntity"]();
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
        if (entity instanceof _entity__WEBPACK_IMPORTED_MODULE_4__["PrototypeEntity"]) {
            return entity.get(key);
        }
        this.interpreterError(`${entity}.${key}: only instances have properties`);
    }
    visitSetExpr(expr) {
        const entity = this.evaluate(expr.entity);
        const key = this.evaluate(expr.key);
        if (!(entity instanceof _entity__WEBPACK_IMPORTED_MODULE_4__["PrototypeEntity"])) {
            conzole.warn(`${entity} is not a runtime Object`);
        }
        const value = this.evaluate(expr.value);
        entity.set(key, value);
        return value;
    }
    visitFuncStmt(stmt) {
        const func = new _entity__WEBPACK_IMPORTED_MODULE_4__["FunctionEntity"](stmt, this.scope);
        this.scope.define(stmt.name.lexeme, func);
        return null;
    }
    visitClassStmt(stmt) {
        let construct = stmt.methods.find((method) => method.name.lexeme === "constructor");
        const methods = stmt.methods.filter((method) => method.name.lexeme !== "constructor");
        if (!construct) {
            construct = new _statement__WEBPACK_IMPORTED_MODULE_2__["Func"](stmt.name, [], []);
        }
        else {
            construct.name = stmt.name;
        }
        const func = new _entity__WEBPACK_IMPORTED_MODULE_4__["FunctionEntity"](construct, this.scope);
        let parent = null;
        if (stmt.parent) {
            parent = this.scope.get(stmt.parent);
            if (parent) {
                func.parent = parent;
                func.prototype = new _prototype__WEBPACK_IMPORTED_MODULE_6__["Prototype"](parent.properties, parent.prototype, func);
            }
        }
        for (const method of methods) {
            func.properties.set(method.name.lexeme, new _entity__WEBPACK_IMPORTED_MODULE_4__["FunctionEntity"](method, this.scope, parent));
        }
        this.scope.set(stmt.name.lexeme, func);
        return null;
    }
    visitLambdaExpr(expr) {
        const lambda = expr.lambda;
        const func = new _entity__WEBPACK_IMPORTED_MODULE_4__["FunctionEntity"](lambda, this.scope);
        return func;
    }
    visitReturnStmt(stmt) {
        let value = null;
        if (stmt.value) {
            value = this.evaluate(stmt.value);
        }
        throw new _return__WEBPACK_IMPORTED_MODULE_7__["Return"](value);
    }
    visitRangeExpr(expr) {
        return new _range__WEBPACK_IMPORTED_MODULE_5__["IndexRange"](expr.start ? this.evaluate(expr.start) : null, expr.end ? this.evaluate(expr.end) : null, expr.step ? this.evaluate(expr.step) : null);
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
/* harmony import */ var _expression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expression */ "./src/expression.ts");
/* harmony import */ var _statement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statement */ "./src/statement.ts");
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token */ "./src/token.ts");



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
        return this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].eof);
    }
    consume(type, message) {
        if (this.check(type)) {
            return this.advance();
        }
        return this.parseError(this.previous(), message);
    }
    extraSemicolon() {
        const match = this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].semicolon);
        if (this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].semicolon)) {
            while (this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].semicolon)) {
                this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].semicolon, '');
            }
        }
        return match;
    }
    parseError(token, message) {
        // tslint:disable-next-line
        if (token.type === _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].eof) {
            conzole.error(`parse error at (${token.line}): at end ${message}`);
        }
        else {
            conzole.error(`[line (${token.line}) parse error at "${token.lexeme}"] => ${message}`);
        }
        throw new Error('Error parsing');
        // unreachable code
        return new _token__WEBPACK_IMPORTED_MODULE_2__["Token"]('panic', 'error', 'error', 0);
    }
    parseWarning(message) {
        const token = this.previous();
        conzole.warn(`[line (${token.line}) parse warning at "${token.lexeme}"] => ${message}`);
    }
    synchronize() {
        this.advance();
        while (!this.eof()) {
            if (this.previous().type === _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].semicolon) {
                return;
            }
            switch (this.peek().type) {
                case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].class:
                case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].function:
                case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].var:
                case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].for:
                case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].if:
                case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].while:
                case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].print:
                case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].return:
                    return;
            }
            this.advance();
        }
    }
    declaration() {
        try {
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].class)) {
                return this.classDeclaration();
            }
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].function)) {
                return this.funcDeclaration("function");
            }
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].var, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].let)) {
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
        if (this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].function)) {
            this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].function, '');
        }
        const name = this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].identifier, `Expected a class name`);
        let parent = null;
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].extends)) {
            parent = this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].identifier, `Expected a parent name`);
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].leftBrace, `Expected "{" after class name`);
        const methods = [];
        while (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].rightBrace) && !this.eof()) {
            if (this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].function)) {
                this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].function, '');
            }
            methods.push(this.funcDeclaration("method"));
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].rightBrace, `Expected "}" after class "${name.literal}" methods`);
        if (this.extraSemicolon()) {
            this.parseWarning(`Unnecessary semicolon after class ${name.lexeme} declaration`);
        }
        return new _statement__WEBPACK_IMPORTED_MODULE_1__["Class"](name, parent, methods);
    }
    funcDeclaration(kind) {
        const name = this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].identifier, `Expected a ${kind} name`);
        return this.funcParamsBody(name, kind);
    }
    funcParams() {
        const params = [];
        if (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].rightParen)) {
            do {
                if (params.length >= 255) {
                    this.parseError(this.peek(), `Parameter count exceeds 255`);
                }
                params.push(this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].identifier, `Expected a parameter name`));
            } while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].comma));
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].rightParen, `Expect ")" after parameters`);
        return params;
    }
    funcParamsBody(name, kind) {
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].leftParen, `Expected "(" after ${kind}`);
        const params = this.funcParams();
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].leftBrace)) {
            const body = this.block();
            if (name.type !== _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].lambda && this.extraSemicolon()) {
                this.parseWarning(`Unnecessary semicolon after function ${name.lexeme} declaration`);
            }
            return new _statement__WEBPACK_IMPORTED_MODULE_1__["Func"](name, params, body);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].arrow)) {
            const body = [];
            let arrow;
            const keyword = this.previous();
            if (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].semicolon)) {
                arrow = this.expression();
            }
            this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].semicolon);
            body.push(new _statement__WEBPACK_IMPORTED_MODULE_1__["Return"](keyword, arrow));
            return new _statement__WEBPACK_IMPORTED_MODULE_1__["Func"](name, params, body);
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].leftBrace, `Expect "{" before ${kind} body`);
    }
    varDeclaration(type) {
        const name = this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].identifier, `Expected a variable name`);
        let initializer = null;
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].equal)) {
            initializer = this.expression();
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].semicolon, `Expected semicolon ";" after a value.`);
        return new _statement__WEBPACK_IMPORTED_MODULE_1__["Var"](name, type, initializer);
    }
    statement() {
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].if)) {
            return this.ifStatement();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].print)) {
            return this.printStatement();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].do)) {
            return this.doWhileStatement();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].while)) {
            return this.whileStatement();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].for)) {
            return this.forStatement();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].leftBrace)) {
            return new _statement__WEBPACK_IMPORTED_MODULE_1__["Block"](this.block());
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].return)) {
            return this.returnStatement();
        }
        return this.expressionStatement();
    }
    ifStatement() {
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].leftParen, `Expected "(" after an if`);
        const condition = this.expression();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].rightParen, `Expected ")" after if condition`);
        const thenStmt = this.statement();
        let elseStmt = null;
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].else)) {
            elseStmt = this.statement();
        }
        return new _statement__WEBPACK_IMPORTED_MODULE_1__["If"](condition, thenStmt, elseStmt);
    }
    whileStatement() {
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].leftParen, `Expected "(" after a while statement`);
        const condition = this.expression();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].rightParen, `Expected ")" after while condition`);
        const loop = this.statement();
        return new _statement__WEBPACK_IMPORTED_MODULE_1__["While"](condition, loop);
    }
    forStatement() {
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].leftParen, `Expected "(" after a for statement`);
        let initializer;
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].semicolon)) {
            initializer = null;
        }
        else if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].var, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].let)) {
            initializer = this.varDeclaration(this.previous());
        }
        else {
            initializer = this.expressionStatement();
        }
        let condition;
        if (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].semicolon)) {
            condition = this.expression();
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].semicolon, `Expected ";" after loop condition`);
        let increment;
        if (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].rightParen)) {
            increment = this.expression();
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].rightParen, `Expected ";" after loop condition`);
        let body = this.statement();
        if (increment !== null) {
            body = new _statement__WEBPACK_IMPORTED_MODULE_1__["Block"]([
                body,
                new _statement__WEBPACK_IMPORTED_MODULE_1__["Expression"](increment)
            ]);
        }
        if (condition === null) {
            condition = new _expression__WEBPACK_IMPORTED_MODULE_0__["Literal"](true);
        }
        body = new _statement__WEBPACK_IMPORTED_MODULE_1__["While"](condition, body);
        if (initializer !== null) {
            body = new _statement__WEBPACK_IMPORTED_MODULE_1__["Block"]([
                initializer,
                body
            ]);
        }
        return body;
    }
    doWhileStatement() {
        const loop = this.statement();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].while, `Expected condition after do statement`);
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].leftParen, `Expected "(" after a while`);
        const condition = this.expression();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].rightParen, `Expected ")" after while condition`);
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].semicolon, `Expected semicolon ";" after a do while condition`);
        return new _statement__WEBPACK_IMPORTED_MODULE_1__["DoWhile"](loop, condition);
    }
    printStatement() {
        const value = this.expression();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].semicolon, `Expected semicolon ";" after expression.`);
        return new _statement__WEBPACK_IMPORTED_MODULE_1__["Print"](value);
    }
    returnStatement() {
        const keyword = this.previous();
        let value = null;
        if (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].semicolon)) {
            value = this.expression();
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].semicolon, `Exected ";" after return statement`);
        return new _statement__WEBPACK_IMPORTED_MODULE_1__["Return"](keyword, value);
    }
    block() {
        const statements = [];
        while (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].rightBrace) && !this.eof()) {
            statements.push(this.declaration());
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].rightBrace, `Expected closing block "}"`);
        return statements;
    }
    expressionStatement() {
        const expression = this.expression();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].semicolon, `Expected semicolon ";" after ${expression} expression`);
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].semicolon)) {
            const token = this.previous();
            conzole.warn(`[line (${token.line}) parse warning at "${token.lexeme}"] => unnecessary semicolon or empty statement`);
            // consume all semicolons
            // tslint:disable-next-line
            while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].semicolon)) { }
            ;
        }
        return new _statement__WEBPACK_IMPORTED_MODULE_1__["Expression"](expression);
    }
    expression() {
        return this.assignment();
    }
    assignment() {
        const expr = this.ternary();
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].equal, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].plusEqual, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].minusEqual, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].starEqual, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].slashEqual)) {
            const operator = this.previous();
            let value = this.assignment();
            if (expr instanceof _expression__WEBPACK_IMPORTED_MODULE_0__["Variable"]) {
                const name = expr.name;
                if (operator.type !== _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].equal) {
                    value = new _expression__WEBPACK_IMPORTED_MODULE_0__["Binary"](new _expression__WEBPACK_IMPORTED_MODULE_0__["Variable"](name), operator, value);
                }
                return new _expression__WEBPACK_IMPORTED_MODULE_0__["Assign"](name, value);
            }
            else if (expr instanceof _expression__WEBPACK_IMPORTED_MODULE_0__["Get"]) {
                if (operator.type !== _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].equal) {
                    value = new _expression__WEBPACK_IMPORTED_MODULE_0__["Binary"](new _expression__WEBPACK_IMPORTED_MODULE_0__["Get"](expr.entity, expr.key), operator, value);
                }
                return new _expression__WEBPACK_IMPORTED_MODULE_0__["Set"](expr.entity, expr.key, value);
            }
            this.parseError(operator, `Invalid l-value, is not an assigning target.`);
        }
        return expr;
    }
    ternary() {
        const expr = this.logicalOr();
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].question)) {
            const thenExpr = this.ternary();
            this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].colon, `Expected ":" after ternary ? expression`);
            const elseExpr = this.ternary();
            return new _expression__WEBPACK_IMPORTED_MODULE_0__["Ternary"](expr, thenExpr, elseExpr);
        }
        return expr;
    }
    logicalOr() {
        let expr = this.logicalAnd();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].or)) {
            const operator = this.previous();
            const right = this.logicalAnd();
            expr = new _expression__WEBPACK_IMPORTED_MODULE_0__["Logical"](expr, operator, right);
        }
        return expr;
    }
    logicalAnd() {
        let expr = this.equality();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].and)) {
            const operator = this.previous();
            const right = this.equality();
            expr = new _expression__WEBPACK_IMPORTED_MODULE_0__["Logical"](expr, operator, right);
        }
        return expr;
    }
    equality() {
        let expr = this.comparison();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].bangEqual, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].equalEqual, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].bangEqualEqual, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].equalEqualEqual)) {
            const operator = this.previous();
            const right = this.comparison();
            expr = new _expression__WEBPACK_IMPORTED_MODULE_0__["Binary"](expr, operator, right);
        }
        return expr;
    }
    comparison() {
        let expr = this.addition();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].greater, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].greaterEqual, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].less, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].lessEqual)) {
            const operator = this.previous();
            const right = this.addition();
            expr = new _expression__WEBPACK_IMPORTED_MODULE_0__["Binary"](expr, operator, right);
        }
        return expr;
    }
    addition() {
        let expr = this.modulus();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].minus, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].plus)) {
            const operator = this.previous();
            const right = this.modulus();
            expr = new _expression__WEBPACK_IMPORTED_MODULE_0__["Binary"](expr, operator, right);
        }
        return expr;
    }
    modulus() {
        let expr = this.multiplication();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].percent)) {
            const operator = this.previous();
            const right = this.multiplication();
            expr = new _expression__WEBPACK_IMPORTED_MODULE_0__["Binary"](expr, operator, right);
        }
        return expr;
    }
    multiplication() {
        let expr = this.unary();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].slash, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].star)) {
            const operator = this.previous();
            const right = this.unary();
            expr = new _expression__WEBPACK_IMPORTED_MODULE_0__["Binary"](expr, operator, right);
        }
        return expr;
    }
    unary() {
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].minus, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].bang, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].dollar, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].plusPlus, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].minusMinus)) {
            const operator = this.previous();
            const right = this.unary();
            return new _expression__WEBPACK_IMPORTED_MODULE_0__["Unary"](operator, right);
        }
        return this.newKeyword();
    }
    newKeyword() {
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].new)) {
            const construct = this.call();
            return new _expression__WEBPACK_IMPORTED_MODULE_0__["New"](construct);
        }
        return this.call();
    }
    call() {
        let expr = this.primary();
        while (true) {
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].leftParen)) {
                let callee = expr;
                do {
                    const args = [];
                    if (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].rightParen)) {
                        do {
                            args.push(this.expression());
                        } while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].comma));
                    }
                    const paren = this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].rightParen, `Expected ")" after arguments`);
                    callee = new _expression__WEBPACK_IMPORTED_MODULE_0__["Call"](callee, paren, args, null);
                } while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].leftParen));
                return callee;
            }
            else if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].dot)) {
                expr = this.dotGet(expr);
            }
            else if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].leftBracket)) {
                expr = this.bracketGet(expr);
            }
            else {
                break;
            }
        }
        return expr;
    }
    dotGet(expr) {
        const name = this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].identifier, `Expect property name after '.'`);
        const key = new _expression__WEBPACK_IMPORTED_MODULE_0__["Key"](name);
        return new _expression__WEBPACK_IMPORTED_MODULE_0__["Get"](expr, key);
    }
    bracketGet(expr) {
        let key = null;
        let end = null;
        let step = null;
        if (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].colon)) {
            key = this.expression();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].colon) && !this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].colon)) {
            end = this.expression();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].colon) && !this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].rightBracket)) {
            step = this.expression();
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].rightBracket, `Expected "]" after property name expression`);
        if (!key || end || step) {
            const range = new _expression__WEBPACK_IMPORTED_MODULE_0__["Range"](key, end, step);
            return new _expression__WEBPACK_IMPORTED_MODULE_0__["Get"](expr, range);
        }
        return new _expression__WEBPACK_IMPORTED_MODULE_0__["Get"](expr, key);
    }
    primary() {
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].false)) {
            return new _expression__WEBPACK_IMPORTED_MODULE_0__["Literal"](false);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].true)) {
            return new _expression__WEBPACK_IMPORTED_MODULE_0__["Literal"](true);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].null)) {
            return new _expression__WEBPACK_IMPORTED_MODULE_0__["Literal"](null);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].number)) {
            return new _expression__WEBPACK_IMPORTED_MODULE_0__["Literal"](this.previous().literal);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].string)) {
            return new _expression__WEBPACK_IMPORTED_MODULE_0__["Ztring"](this.previous().literal);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].regex)) {
            return new _expression__WEBPACK_IMPORTED_MODULE_0__["RegEx"](this.previous().literal);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].identifier)) {
            const identifier = this.previous();
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].plusPlus)) {
                return new _expression__WEBPACK_IMPORTED_MODULE_0__["Postfix"](identifier, 1);
            }
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].minusMinus)) {
                return new _expression__WEBPACK_IMPORTED_MODULE_0__["Postfix"](identifier, -1);
            }
            return new _expression__WEBPACK_IMPORTED_MODULE_0__["Variable"](identifier);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].leftParen)) {
            const expr = this.expression();
            this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].rightParen, `Expected ")" after expression`);
            return new _expression__WEBPACK_IMPORTED_MODULE_0__["Grouping"](expr);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].leftBrace)) {
            return this.entity();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].function)) {
            const token = new _token__WEBPACK_IMPORTED_MODULE_2__["Token"]('lambda', 'lambda', 'lambda', this.previous().line);
            const lambda = this.funcParamsBody(token, "lambda");
            return new _expression__WEBPACK_IMPORTED_MODULE_0__["Lambda"](lambda);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].super)) {
            return this.superCall();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].leftBracket)) {
            return this.array();
        }
        throw this.parseError(this.peek(), `Expected expression`);
        // unreacheable code
        return new _expression__WEBPACK_IMPORTED_MODULE_0__["Literal"](null);
    }
    entity() {
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].rightBrace)) {
            return new _expression__WEBPACK_IMPORTED_MODULE_0__["Entity"]([]);
        }
        const properties = [];
        do {
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].string, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].identifier)) {
                const key = this.previous();
                this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].colon, `Expected ":" colon after member`);
                const value = this.expression();
                properties.push(new _expression__WEBPACK_IMPORTED_MODULE_0__["Set"](null, new _expression__WEBPACK_IMPORTED_MODULE_0__["Key"](key), value));
            }
            else {
                this.parseError(this.peek(), `String or identifier expected after Object {`);
            }
        } while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].comma));
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].rightBrace, `Expected "}" after object literal`);
        return new _expression__WEBPACK_IMPORTED_MODULE_0__["Entity"](properties);
    }
    array() {
        const values = [];
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].rightBracket)) {
            return new _expression__WEBPACK_IMPORTED_MODULE_0__["List"]([]);
        }
        do {
            values.push(this.expression());
        } while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].comma));
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].rightBracket, `Expected "]" after array declaration`);
        return new _expression__WEBPACK_IMPORTED_MODULE_0__["List"](values);
    }
    superCall() {
        const indexes = [];
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].dot)) {
            const token = this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].identifier, `Expected method name after super`);
            indexes.push(token);
        }
        const args = [];
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].leftParen, `Expected function parameters or method name after super`);
        do {
            if (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].rightParen)) {
                do {
                    args.push(this.expression());
                } while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].comma));
            }
            this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].rightParen, `Expected ")" after super arguments`);
        } while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].leftParen));
        return new _expression__WEBPACK_IMPORTED_MODULE_0__["Super"](indexes, args);
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

/***/ "./src/range.ts":
/*!**********************!*\
  !*** ./src/range.ts ***!
  \**********************/
/*! exports provided: IndexRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexRange", function() { return IndexRange; });
class IndexRange {
    constructor(start, end, step) {
        this.start = start;
        this.end = end;
        this.step = step;
    }
    normalize(length) {
        if (this.step === null) {
            this.step = 1;
        }
        if (this.end === null) {
            this.end = this.step > 0 ? length - 1 : 0;
        }
        if (this.start === null) {
            this.start = this.step > 0 ? 0 : length - 1;
        }
    }
    iterate(length, callback) {
        this.normalize(length);
        if (this.step > 0) {
            for (let i = this.start; i <= this.end; i += this.step) {
                callback(i);
            }
        }
        else if (this.step < 0) {
            for (let i = this.start; i >= this.end; i += this.step) {
                callback(i);
            }
        }
        else {
            conzole.warn(`[range error] => 0 is not a valid step`);
        }
    }
}


/***/ }),

/***/ "./src/regex.ts":
/*!**********************!*\
  !*** ./src/regex.ts ***!
  \**********************/
/*! exports provided: RegExEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegExEntity", function() { return RegExEntity; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/entity.ts");
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./runtime */ "./src/runtime.ts");


class RegExEntity extends _entity__WEBPACK_IMPORTED_MODULE_0__["PrototypeEntity"] {
    constructor(regex) {
        super();
        this.regex = regex;
        this.prototype.values.set('exec', _runtime__WEBPACK_IMPORTED_MODULE_1__["regexExecMethod"](this));
        this.prototype.values.set('test', _runtime__WEBPACK_IMPORTED_MODULE_1__["regexTestMethod"](this));
    }
    arity() {
        return 0;
    }
    call(interpreter, thiz, args) {
        return this;
    }
    toString() {
        return this.regex.toString();
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
/*! exports provided: hasOwnProperty, lengthProperty, invokeMethod, superCall, mergeMethod, extendMethod, inheritMethod, echoFunction, randFunction, arrayLengthMethod, arrayJoinMethod, arrayPushMethod, arrayPopMethod, arrayEachMethod, arrayMapMethod, arrayFindMethod, arrayIndexOfMethod, stringLengthMethod, stringSubStrMethod, stringSplitMethod, stringMatchMethod, regexTestMethod, regexExecMethod */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringMatchMethod", function() { return stringMatchMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regexTestMethod", function() { return regexTestMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regexExecMethod", function() { return regexExecMethod; });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./src/array.ts");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entity */ "./src/entity.ts");
/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prototype */ "./src/prototype.ts");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./string */ "./src/string.ts");




function hasOwnProperty(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_1__["InternalEntity"]();
    func.toString = () => '<internal function>';
    func.arity = () => 1;
    func.call = (int, thiz, args) => thiz.properties.has(args[0]);
    return func;
}
function lengthProperty(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_1__["InternalEntity"]();
    func.toString = () => '<internal function>';
    func.arity = () => 0;
    func.call = (int, thiz, args) => thiz.properties.size;
    return func;
}
function invokeMethod(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_1__["InternalEntity"]();
    func.toString = () => '<internal function>';
    func.arity = () => -1;
    func.call = (int, thiz, args) => thiz.call(int, args[0], args.slice(1));
    return func;
}
function superCall(that, instance) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_1__["InternalEntity"]();
    func.arity = () => that.parent.arity();
    func.toString = () => '<native super function>';
    func.call = (int, thiz, args) => that.parent.call(int, instance, args);
    return func;
}
function mergeMethod(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_1__["InternalEntity"]();
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
    const func = new _entity__WEBPACK_IMPORTED_MODULE_1__["InternalEntity"]();
    func.call = (int, thiz, args) => {
        const proto = new _prototype__WEBPACK_IMPORTED_MODULE_2__["Prototype"](that.properties, new _prototype__WEBPACK_IMPORTED_MODULE_2__["Prototype"](args[0].properties, args[0].prototype, thiz), thiz);
        that.prototype = proto;
    };
    func.toString = () => '<internal merge function>';
    func.arity = () => -1;
    return func;
}
function inheritMethod(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_1__["InternalEntity"]();
    func.call = (int, thiz, args) => {
        that.prototype.values = new Map([...args[0].properties, ...that.prototype.values]);
    };
    func.toString = () => '<internal inheritance function>';
    func.arity = () => 1;
    return func;
}
function echoFunction() {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_1__["InternalEntity"]();
    func.arity = () => 1;
    func.toString = () => '<native function>';
    func.call = (interpreter, thiz, args) => console.log(args[0]);
    return func;
}
function randFunction() {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_1__["InternalEntity"]();
    func.arity = () => 0;
    func.call = () => Math.random();
    func.toString = () => '<native function>';
    return func;
}
function arrayLengthMethod(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_1__["InternalEntity"]();
    func.toString = () => '<internal function>';
    func.arity = () => 0;
    func.call = (int, thiz, args) => thiz.values.length;
    return func;
}
function arrayJoinMethod(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_1__["InternalEntity"]();
    func.toString = () => '<internal function>';
    func.arity = () => 1;
    func.call = (int, thiz, args) => new _string__WEBPACK_IMPORTED_MODULE_3__["StringEntity"](thiz.values.join(args[0]));
    return func;
}
function arrayPushMethod(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_1__["InternalEntity"]();
    func.toString = () => '<internal function>';
    func.arity = () => 1;
    func.call = (int, thiz, args) => thiz.values.push(args[0]);
    return func;
}
function arrayPopMethod(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_1__["InternalEntity"]();
    func.toString = () => '<internal function>';
    func.arity = () => 0;
    func.call = (int, thiz, args) => thiz.values.pop(args[0]);
    return func;
}
function arrayEachMethod(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_1__["InternalEntity"]();
    func.toString = () => '<internal function>';
    func.arity = () => -1;
    func.call = (int, thiz, args) => {
        for (let i = 0; i < thiz.values.length; ++i) {
            args[0].call(int, thiz, [thiz.values[i], i, thiz]);
        }
    };
    return func;
}
function arrayMapMethod(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_1__["InternalEntity"]();
    func.toString = () => '<internal function>';
    func.arity = () => -1;
    func.call = (int, thiz, args) => {
        for (let i = 0; i < thiz.values.length; ++i) {
            thiz.values[i] = args[0].call(int, thiz, [thiz.values[i], i, thiz]);
        }
    };
    return func;
}
function arrayFindMethod(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_1__["InternalEntity"]();
    func.toString = () => '<internal function>';
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
    const func = new _entity__WEBPACK_IMPORTED_MODULE_1__["InternalEntity"]();
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
function stringLengthMethod(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_1__["InternalEntity"]();
    func.toString = () => '<internal function>';
    func.arity = () => 0;
    func.call = (int, thiz, args) => thiz.value.length;
    return func;
}
function stringSubStrMethod(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_1__["InternalEntity"]();
    func.toString = () => '<internal function>';
    func.arity = () => -1;
    func.call = (int, thiz, args) => new _string__WEBPACK_IMPORTED_MODULE_3__["StringEntity"](thiz.value.substr(args[0], args[1]));
    return func;
}
function stringSplitMethod(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_1__["InternalEntity"]();
    func.toString = () => '<internal function>';
    func.arity = () => 1;
    func.call = (int, thiz, args) => new _array__WEBPACK_IMPORTED_MODULE_0__["ArrayEntity"](thiz.value.split(args[0]));
    return func;
}
function stringMatchMethod(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_1__["InternalEntity"]();
    func.toString = () => '<internal function>';
    func.arity = () => 1;
    func.call = (int, thiz, args) => new _array__WEBPACK_IMPORTED_MODULE_0__["ArrayEntity"](thiz.value.match(args[0].regex));
    return func;
}
function regexTestMethod(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_1__["InternalEntity"]();
    func.toString = () => '<internal function>';
    func.arity = () => 1;
    func.call = (int, thiz, args) => thiz.regex.test(args[0]);
    return func;
}
function regexExecMethod(that) {
    const func = new _entity__WEBPACK_IMPORTED_MODULE_1__["InternalEntity"]();
    func.toString = () => '<internal function>';
    func.arity = () => 1;
    func.call = (int, thiz, args) => thiz.regex.exec(args[0]);
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
    regex() {
        while (this.peek() !== '#' && !this.eof()) {
            if (this.peek() === '\n') {
                this.line++;
            }
            this.advance();
        }
        // Unterminated regex.
        if (this.eof()) {
            this.scanError(`Unterminated RegEx, expecting closing #`);
            return;
        }
        // The closing #.
        this.advance();
        const regex = this.source.substring(this.start + 1, this.current - 1);
        let flags = '';
        if (['g', 'i', 's', 'u', 'y'].indexOf(this.peek()) !== -1) {
            const start = this.current;
            while (this.peek() !== '#' && !this.eof()) {
                if (this.peek() === '\n') {
                    this.line++;
                }
                this.advance();
            }
            if (this.eof()) {
                this.scanError(`Unterminated RegEx, expecting closing # after flags`);
                return;
            }
            flags = this.source.substring(start, this.current);
        }
        // The closing # after flags.
        this.advance();
        this.addToken('regex', new RegExp(regex, flags));
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
            case '#':
                this.regex();
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

/***/ "./src/string.ts":
/*!***********************!*\
  !*** ./src/string.ts ***!
  \***********************/
/*! exports provided: StringEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringEntity", function() { return StringEntity; });
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./range */ "./src/range.ts");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entity */ "./src/entity.ts");
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./runtime */ "./src/runtime.ts");



class StringEntity extends _entity__WEBPACK_IMPORTED_MODULE_1__["PrototypeEntity"] {
    constructor(value) {
        super();
        this.value = value;
        this.prototype.values.set('invoke', _runtime__WEBPACK_IMPORTED_MODULE_2__["invokeMethod"](this));
        this.prototype.values.set('size', _runtime__WEBPACK_IMPORTED_MODULE_2__["stringLengthMethod"](this));
        this.prototype.values.set('substr', _runtime__WEBPACK_IMPORTED_MODULE_2__["stringSubStrMethod"](this));
        this.prototype.values.set('split', _runtime__WEBPACK_IMPORTED_MODULE_2__["stringSplitMethod"](this));
        this.prototype.values.set('match', _runtime__WEBPACK_IMPORTED_MODULE_2__["stringMatchMethod"](this));
    }
    get(key) {
        if (typeof key === "number") {
            return new StringEntity(this.value[key]);
        }
        else if (key instanceof _range__WEBPACK_IMPORTED_MODULE_0__["IndexRange"]) {
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
        let result = '';
        range.iterate(this.value.length, (i) => {
            result += this.value[i];
        });
        return new StringEntity(result);
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
    TokenType[TokenType["hash"] = 9] = "hash";
    TokenType[TokenType["leftBrace"] = 10] = "leftBrace";
    TokenType[TokenType["leftBracket"] = 11] = "leftBracket";
    TokenType[TokenType["leftParen"] = 12] = "leftParen";
    TokenType[TokenType["percent"] = 13] = "percent";
    TokenType[TokenType["pipe"] = 14] = "pipe";
    TokenType[TokenType["rightBrace"] = 15] = "rightBrace";
    TokenType[TokenType["rightBracket"] = 16] = "rightBracket";
    TokenType[TokenType["rightParen"] = 17] = "rightParen";
    TokenType[TokenType["semicolon"] = 18] = "semicolon";
    TokenType[TokenType["slash"] = 19] = "slash";
    TokenType[TokenType["star"] = 20] = "star";
    // one or two character tokens
    TokenType[TokenType["arrow"] = 21] = "arrow";
    TokenType[TokenType["bang"] = 22] = "bang";
    TokenType[TokenType["bangEqual"] = 23] = "bangEqual";
    TokenType[TokenType["colon"] = 24] = "colon";
    TokenType[TokenType["equal"] = 25] = "equal";
    TokenType[TokenType["equalEqual"] = 26] = "equalEqual";
    TokenType[TokenType["greater"] = 27] = "greater";
    TokenType[TokenType["greaterEqual"] = 28] = "greaterEqual";
    TokenType[TokenType["less"] = 29] = "less";
    TokenType[TokenType["lessEqual"] = 30] = "lessEqual";
    TokenType[TokenType["minus"] = 31] = "minus";
    TokenType[TokenType["minusEqual"] = 32] = "minusEqual";
    TokenType[TokenType["minusMinus"] = 33] = "minusMinus";
    TokenType[TokenType["percentEqual"] = 34] = "percentEqual";
    TokenType[TokenType["plus"] = 35] = "plus";
    TokenType[TokenType["plusEqual"] = 36] = "plusEqual";
    TokenType[TokenType["plusPlus"] = 37] = "plusPlus";
    TokenType[TokenType["question"] = 38] = "question";
    TokenType[TokenType["slashEqual"] = 39] = "slashEqual";
    TokenType[TokenType["starEqual"] = 40] = "starEqual";
    // three character tokens
    TokenType[TokenType["bangEqualEqual"] = 41] = "bangEqualEqual";
    TokenType[TokenType["equalEqualEqual"] = 42] = "equalEqualEqual";
    // literals
    TokenType[TokenType["identifier"] = 43] = "identifier";
    TokenType[TokenType["string"] = 44] = "string";
    TokenType[TokenType["number"] = 45] = "number";
    TokenType[TokenType["regex"] = 46] = "regex";
    // keywords
    TokenType[TokenType["and"] = 47] = "and";
    TokenType[TokenType["class"] = 48] = "class";
    TokenType[TokenType["do"] = 49] = "do";
    TokenType[TokenType["else"] = 50] = "else";
    TokenType[TokenType["extends"] = 51] = "extends";
    TokenType[TokenType["false"] = 52] = "false";
    TokenType[TokenType["for"] = 53] = "for";
    TokenType[TokenType["func"] = 54] = "func";
    TokenType[TokenType["function"] = 55] = "function";
    TokenType[TokenType["if"] = 56] = "if";
    TokenType[TokenType["let"] = 57] = "let";
    TokenType[TokenType["new"] = 58] = "new";
    TokenType[TokenType["null"] = 59] = "null";
    TokenType[TokenType["or"] = 60] = "or";
    TokenType[TokenType["print"] = 61] = "print";
    TokenType[TokenType["return"] = 62] = "return";
    TokenType[TokenType["super"] = 63] = "super";
    TokenType[TokenType["true"] = 64] = "true";
    TokenType[TokenType["var"] = 65] = "var";
    TokenType[TokenType["while"] = 66] = "while";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXJyYXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlbW8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudGl0eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXhwcmVzc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVycHJldGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvdHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmFuZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZ2V4LnRzIiwid2VicGFjazovLy8uL3NyYy9yZXR1cm4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjYW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njb3BlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9rZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFF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QUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUQsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUVNLFNBQVMsZUFBZSxDQUFDLElBQVM7SUFDckMsTUFBTSxJQUFJLEdBQUcsSUFBSSxzREFBYyxFQUFFLENBQUM7SUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztJQUM1QyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO1FBQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtZQUN6QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3REO0lBQ0wsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUVNLFNBQVMsY0FBYyxDQUFDLElBQVM7SUFDcEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxzREFBYyxFQUFFLENBQUM7SUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztJQUM1QyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO1FBQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcs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LFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQy9DLEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ2pELEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQzdJLEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUM1RyxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ3RFLEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDNUUsS0FBSyxHQUFHO2dC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QUFZLEVBQUUsSUFBWTtRQUNoRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUVyQixDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8sS0FBSyxJQUFJLENBQUMsSUFBSSxNQUFNLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQztJQUMvQyxDQUFDO0NBRUoiLCJmaWxlIjoiYXRzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCAqIGFzIFJ1bnRpbWUgZnJvbSAnLi9ydW50aW1lJztcclxuaW1wb3J0IHsgSW5kZXhSYW5nZSB9IGZyb20gJy4vcmFuZ2UnO1xyXG5pbXBvcnQgeyBJbnRlcnByZXRlciB9IGZyb20gJy4vaW50ZXJwcmV0ZXInO1xyXG5pbXBvcnQgeyBQcm90b3R5cGVFbnRpdHkgfSBmcm9tICcuL2VudGl0eSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXJyYXlFbnRpdHkgZXh0ZW5kcyBQcm90b3R5cGVFbnRpdHkge1xyXG4gICAgcHVibGljIHZhbHVlczogYW55W107XHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZXM6IGFueVtdKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcyA/IHZhbHVlcyA6IFtdO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ2ludm9rZScsIFJ1bnRpbWUuaW52b2tlTWV0aG9kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS52YWx1ZXMuc2V0KCdzaXplJywgUnVudGltZS5hcnJheUxlbmd0aE1ldGhvZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgnam9pbicsIFJ1bnRpbWUuYXJyYXlKb2luTWV0aG9kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS52YWx1ZXMuc2V0KCdwdXNoJywgUnVudGltZS5hcnJheVB1c2hNZXRob2QodGhpcykpO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ3BvcCcsIFJ1bnRpbWUuYXJyYXlQb3BNZXRob2QodGhpcykpO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ2VhY2gnLCBSdW50aW1lLmFycmF5RWFjaE1ldGhvZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgnbWFwJywgUnVudGltZS5hcnJheU1hcE1ldGhvZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgnZmluZCcsIFJ1bnRpbWUuYXJyYXlGaW5kTWV0aG9kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS52YWx1ZXMuc2V0KCdpbmRleE9mJywgUnVudGltZS5hcnJheUluZGV4T2ZNZXRob2QodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoa2V5OiBhbnkpOiBhbnkge1xyXG4gICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlc1trZXldO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5IGluc3RhbmNlb2YgSW5kZXhSYW5nZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yYW5nZShrZXkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdXBlci5nZXQoa2V5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQoa2V5OiBzdHJpbmcgfCBudW1iZXIsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGtleSAhPT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BlcnRpZXMuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByYW5nZShyYW5nZTogSW5kZXhSYW5nZSk6IEFycmF5RW50aXR5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XHJcbiAgICAgICAgcmFuZ2UuaXRlcmF0ZSh0aGlzLnZhbHVlcy5sZW5ndGgsIChpKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMudmFsdWVzW2ldKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbmV3IEFycmF5RW50aXR5KHJlc3VsdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFyaXR5KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhbGwoaW50ZXJwcmV0ZXI6IEludGVycHJldGVyLCB0aGl6OiBhbnksIGFyZ3M6IGFueVtdKTogYW55IHsgcmV0dXJuOyB9XHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYFske3RoaXMudmFsdWVzLmpvaW4oJywnKX1dYDtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiZXhwb3J0IGVudW0gQ29uc29sZU1lc3NhZ2VUeXBlIHtcclxuICAgIFVzZXIsXHJcbiAgICBFcnJvcixcclxuICAgIFdhcm5pbmcsXHJcbiAgICBJbmZvXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25zb2xlTWVzc2FnZSB7XHJcbiAgICBwdWJsaWMgdGltZTogRGF0ZTtcclxuICAgIHB1YmxpYyB0ZXh0OiBhbnk7XHJcbiAgICBwdWJsaWMgdHlwZTogQ29uc29sZU1lc3NhZ2VUeXBlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uc29sZSB7XHJcblxyXG4gICAgcHVibGljIG1lc3NhZ2VzOiBDb25zb2xlTWVzc2FnZVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZChtZXNzYWdlOiBhbnksIHR5cGU6IENvbnNvbGVNZXNzYWdlVHlwZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMucHVzaCh7XHJcbiAgICAgICAgICAgIHRleHQ6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgICAgICB0eXBlOiB0eXBlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9nKG1lc3NhZ2U6IGFueSkge1xyXG4gICAgICAgIHRoaXMuYWRkKG1lc3NhZ2UsIENvbnNvbGVNZXNzYWdlVHlwZS5Vc2VyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgd2FybihtZXNzYWdlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmFkZChtZXNzYWdlLCBDb25zb2xlTWVzc2FnZVR5cGUuV2FybmluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVycm9yKG1lc3NhZ2U6IGFueSkge1xyXG4gICAgICAgIHRoaXMuYWRkKG1lc3NhZ2UsIENvbnNvbGVNZXNzYWdlVHlwZS5FcnJvcik7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbmZvKG1lc3NhZ2U6IGFueSkge1xyXG4gICAgICAgIHRoaXMuYWRkKG1lc3NhZ2UsIENvbnNvbGVNZXNzYWdlVHlwZS5JbmZvKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmlyc3QoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlc1swXS50ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsYXN0KCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZXNbdGhpcy5tZXNzYWdlcy5sZW5ndGggLSAxXS50ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcmludCgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyh0aGlzLm1lc3NhZ2VzLm1hcCgoY20pID0+IGNtLnRleHQpKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IERlbW9Tb3VyY2VDb2RlID1cclxuYFxyXG4vLyBzbGljaW5nIHN0cmluZ3NcclxucHJpbnQgXCJvbmUgdHdvIHRocmVlIGZvdXJcIls0Ojc6MV07IC8vIHByaW50cyB0d29cclxucHJpbnQgXCJoZWxsbyB3b3JsZFwiWzY6OjFdOyAvLyBwcmludHMgd29ybGRcclxucHJpbnQgXCJoZWxsbyB3b3JsZFwiWzo6LTFdOyAvL3ByaW50cyBkbHJvdyBvbGxlaFxyXG5cclxuLy8gUHJvdG90eXBlIG9iamVjdHNcclxuQE15Q2xhc3ModGV4dCkge1xyXG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcclxufVxyXG5NeUNsYXNzLm1ldGhvZCA9IEAodGV4dCkge1xyXG4gICAgdGhpcy50ZXh0ID0gdGhpcy50ZXh0ICsgdGV4dDtcclxufTtcclxuTXlDbGFzcy5jb3VudCA9IEAodGltZXMpIHtcclxuICAgIEBuZXN0ZWQobnVtKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bSAqIG51bTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGltZXM7ICsraSkge1xyXG4gICAgICAgIHByaW50IG5lc3RlZChpKTtcclxuICAgIH1cclxufTtcclxudmFyIGluc3RhbmNlID0gbmV3IE15Q2xhc3MoJ0hlbGxvICcpO1xyXG5pbnN0YW5jZS5tZXRob2QoJ1dvcmxkJyk7XHJcbmluc3RhbmNlLmNvdW50KDMpO1xyXG5wcmludCBpbnN0YW5jZS50ZXh0O1xyXG5cclxuLy8gc3VnYXIgY29hdGVkIGNsYXNzZXNcclxuY2xhc3MgTXlDbGFzc0NsYXNzIHtcclxuICAgIGNvbnN0cnVjdG9yKGFsZmEpIHtcclxuICAgICAgICB0aGlzLnNvbWV0aGluZyA9ICdhbnl0aGluZycgKyBhbGZhO1xyXG4gICAgfVxyXG59XHJcbmxldCB0ZXN0Q2xhc3NDbGFzcyA9IG5ldyBNeUNsYXNzQ2xhc3MoJyBpcyBzb21ldGhpbmcnKTtcclxucHJpbnQgdGVzdENsYXNzQ2xhc3Muc29tZXRoaW5nO1xyXG5cclxuLy8gc2hhbGxvdyBtdWx0aXBsZSBpbmhlcml0YW5jZVxyXG5AQmxhZGUoKSB7XHJcbiAgICB0aGlzLnNoYXJwbmVzcyA9IFwidmVyeSBzaGFycFwiO1xyXG59XHJcbkJsYWRlLmN1dCA9IEAoKSB7XHJcbiAgICBwcmludCBcImN1dHRpbmcuLi5cIiArIHRoaXMuc2hhcnBuZXNzO1xyXG59O1xyXG5ASGFuZGxlKCkge1xyXG4gICAgdGhpcy5jb2xvciA9IFwid29vZFwiO1xyXG59XHJcbkhhbmRsZS5ob2xkID0gQCgpIHtcclxuICAgIHByaW50IFwiaG9sZGluZy4uLlwiICsgdGhpcy5jb2xvcjtcclxufTtcclxuQEtuaWZlKCkge1xyXG4gICAgQmxhZGUuaW52b2tlKHRoaXMpO1xyXG4gICAgSGFuZGxlLmludm9rZSh0aGlzKTtcclxufVxyXG5LbmlmZS5tZXJnZShCbGFkZSk7XHJcbktuaWZlLm1lcmdlKEhhbmRsZSk7XHJcbmxldCBrbmlmZSA9IG5ldyBLbmlmZSgpO1xyXG5rbmlmZS5jdXQoKTtcclxua25pZmUuaG9sZCgpO1xyXG5cclxuLy8gUmVjdXJzaXZlIGZ1bmN0aW9uXHJcbmZ1bmN0aW9uIGZhY3RvcmlhbGl6ZShuKSB7XHJcbiAgICBpZiAobiA8IDApIHtcclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgICBpZiAobiA9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKG4gKiBmYWN0b3JpYWxpemUobiAtIDEpKTtcclxufVxyXG5wcmludCBmYWN0b3JpYWxpemUoMTEpO1xyXG5cclxuLy8gc2FtZSBhcyBmYWN0b3JpYWxpemUgYnV0IHdpdGggdGVybmFyeVxyXG4vLyBhbmQgc2hvcnQgZm9ybSBmdW5jdGlvbiBkZWZpbml0aW9uXHJcbkBmYWN0b3JpYWxpemUyKG4pID0+XHJcbiAgICBuIDwgMCA/IC0xIDogKG4gPT0gMCA/IDEgOiAobiAqIGZhY3RvcmlhbGl6ZShuIC0gMSkpKTtcclxuXHJcbnByaW50IGZhY3RvcmlhbGl6ZTIoMTIpO1xyXG5cclxuLy8gbmVzdGVkIGZ1bmN0aW9uIHJldHVybnMgZnVuY3Rpb25cclxuQGFkZChhKSA9PiBAKGIpID0+IEAoYykgPT4gYSArIGIgKyBjO1xyXG5wcmludCBhZGQoMTAwKSgyMCkoMyk7XHJcblxyXG5mdW5jIHN1YihhKSB7XHJcbiAgICByZXR1cm4gZnVuYyAoYikge1xyXG4gICAgICAgIHJldHVybiBmdW5jIChjKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhIC0gYiAtIGM7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbn1cclxucHJpbnQgc3ViKDEwMCkoMTApKDEpO1xyXG5cclxuLy8gd2hpbGUgbG9vcCBhbmQgdGVybmFyeSBvcGVyYXRvclxyXG5sZXQgaSA9IDA7XHJcbndoaWxlIChpIDw9IDQpIHtcclxuICAgIHByaW50IGkgJSAyID8gJ29kZCcgOiAnZXZlbic7XHJcbiAgICBpID0gaSArIDE7XHJcbn1cclxuLy8gbGl0ZXJhbHNcclxudmFyIGxpdGVyYWwgPSB7XHJcbiAgICBmaXJzdG5hbWU6IFwiSm9oblwiLFxyXG4gICAgbGFzdG5hbWU6IFwiRG9lXCIsXHJcbiAgICByZWNvcmRzOiB7XHJcbiAgICAgICAgcHJldjogXCJwcmV2aW91c1wiLFxyXG4gICAgICAgIG5leHQ6IFwibmV4dFwiXHJcbiAgICB9XHJcbn07XHJcbnByaW50IGxpdGVyYWwucmVjb3Jkcy5wcmV2O1xyXG5cclxubGV0IHggPSBbMSwgMjAsIDMwMF07XHJcbmxldCB5ID0gWzEwMCwgeFsxXV07XHJcbnByaW50IHlbMF07XHJcbnkucHVzaCh4KTtcclxueS5uZXdQcm9wZXJ0eSA9IFwiYW55dGhpbmdcIjtcclxucHJpbnQgeS5qb2luKCcsJyk7XHJcbmxldCB6ID0geS5qb2luKCctJyk7XHJcbmA7XHJcbiIsImltcG9ydCB7IEludGVycHJldGVyIH0gZnJvbSAnLi9pbnRlcnByZXRlcic7XHJcbmltcG9ydCB7IFNjb3BlIH0gZnJvbSAnLi9zY29wZSc7XHJcbmltcG9ydCB7IFJldHVybiB9IGZyb20gJy4vcmV0dXJuJztcclxuaW1wb3J0IHsgUHJvdG90eXBlIH0gZnJvbSAnLi9wcm90b3R5cGUnO1xyXG5pbXBvcnQgKiBhcyBTdG10IGZyb20gJy4vc3RhdGVtZW50JztcclxuaW1wb3J0ICogYXMgUnVudGltZSBmcm9tICcuL3J1bnRpbWUnO1xyXG5kZWNsYXJlIHZhciBjb256b2xlOiBDb25zb2xlO1xyXG5cclxuZXhwb3J0IGNsYXNzIEludGVybmFsRW50aXR5IHtcclxuICAgIHB1YmxpYyBjYWxsOiAoaW50ZXJwcmV0ZXI6IEludGVycHJldGVyLCB0aGl6OiBhbnksIGFyZ3M6IGFueVtdKSA9PiBhbnk7XHJcbiAgICBwdWJsaWMgdG9TdHJpbmc6ICgpID0+IHN0cmluZyA9ICgpID0+ICc8bmF0aXZlIGZ1bmN0aW9uPic7XHJcbiAgICBwdWJsaWMgYXJpdHk6ICgpID0+IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb3RvdHlwZUVudGl0eSB7XHJcbiAgICBwdWJsaWMgcHJvdG90eXBlOiBQcm90b3R5cGU7XHJcbiAgICBwdWJsaWMgcHJvcGVydGllczogTWFwPHN0cmluZywgYW55PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZSA9IG5ldyBQcm90b3R5cGUobnVsbCwgbnVsbCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ2hhc093blByb3BlcnR5JywgUnVudGltZS5oYXNPd25Qcm9wZXJ0eSh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgnc2l6ZScsIFJ1bnRpbWUubGVuZ3RoUHJvcGVydHkpO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ2luaGVyaXQnLCBSdW50aW1lLmluaGVyaXRNZXRob2QodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BlcnRpZXMuaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcGVydGllcy5nZXQoa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvdG90eXBlLmdldChrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnByb3BlcnRpZXMuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCByZXN1bHQ6IGFueVtdID0gW107XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goYCR7a2V5fTogJHt2YWx1ZX1gKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gYHske3Jlc3VsdC5qb2luKCc7ICcpfX1gO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FsbGFibGVFbnRpdHkgZXh0ZW5kcyBQcm90b3R5cGVFbnRpdHkge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgnaW52b2tlJywgUnVudGltZS5pbnZva2VNZXRob2QodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhcml0eSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYWxsKGludGVycHJldGVyOiBJbnRlcnByZXRlciwgdGhpejogYW55LCBhcmdzOiBhbnlbXSk6IGFueSB7IHJldHVybjsgfVxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICc8aW50ZXJuYWwgZnVuY3Rpb24+JztcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGdW5jdGlvbkVudGl0eSBleHRlbmRzIENhbGxhYmxlRW50aXR5IHtcclxuICAgIHB1YmxpYyBkZWNsYXJhdGlvbjogU3RtdC5GdW5jO1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgY2xvc3VyZTogU2NvcGU7XHJcbiAgICBwdWJsaWMgcGFyZW50OiBGdW5jdGlvbkVudGl0eTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkZWNsYXJhdGlvbjogU3RtdC5GdW5jLCBjbG9zdXJlOiBTY29wZSwgcGFyZW50OiBGdW5jdGlvbkVudGl0eSA9IG51bGwpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuZGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbjtcclxuICAgICAgICB0aGlzLmNsb3N1cmUgPSBjbG9zdXJlO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ21lcmdlJywgUnVudGltZS5tZXJnZU1ldGhvZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgnZXh0ZW5kJywgUnVudGltZS5leHRlbmRNZXRob2QodGhpcykpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMuZGVjbGFyYXRpb24ubmFtZS5sZXhlbWU7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgnbmFtZScsIHRoaXMubmFtZSk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGA8JHt0aGlzLm5hbWV9ICBmdW5jdGlvbj5gO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhcml0eSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9uLnBhcmFtcy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhbGwoaW50ZXJwcmV0ZXI6IEludGVycHJldGVyLCB0aGl6OiBhbnksIGFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgICBjb25zdCBzY29wZSA9IG5ldyBTY29wZSh0aGlzLmNsb3N1cmUpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kZWNsYXJhdGlvbi5wYXJhbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc2NvcGUuZGVmaW5lKHRoaXMuZGVjbGFyYXRpb24ucGFyYW1zW2ldLmxleGVtZSwgYXJnc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNjb3BlLnNldCgndGhpcycsIHRoaXopO1xyXG4gICAgICAgIGxldCByZXN0b3JlU2NvcGU6IFNjb3BlID0gbnVsbDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXN0b3JlU2NvcGUgPSBpbnRlcnByZXRlci5zY29wZTtcclxuICAgICAgICAgICAgaW50ZXJwcmV0ZXIuZXhlY3V0ZUJsb2NrKHRoaXMuZGVjbGFyYXRpb24uYm9keSwgc2NvcGUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBSZXR1cm4pIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN0b3JlU2NvcGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcnByZXRlci5zY29wZSA9IHJlc3RvcmVTY29wZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBlLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb256b2xlLmVycm9yKFwiUnVudGltZSBlcnJvci4gRXhlY3V0aW9uIGhhcyBiZWVuIHN0b3BwZWRcIik7XHJcbiAgICAgICAgICAgIGNvbnpvbGUuZXJyb3IoZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUnVudGltZSBlcnJvci4gRXhlY3V0aW9uIGhhcyBiZWVuIHN0b3BwZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEluc3RhbmNlRW50aXR5IGV4dGVuZHMgQ2FsbGFibGVFbnRpdHkge1xyXG4gICAgcHVibGljIGluc3RhbmNlb2Y6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGNvbnN0cnVjdDogRnVuY3Rpb25FbnRpdHkpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VvZiA9IGNvbnN0cnVjdC5kZWNsYXJhdGlvbi5uYW1lLmxleGVtZTtcclxuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUgPSBuZXcgUHJvdG90eXBlKGNvbnN0cnVjdC5wcm9wZXJ0aWVzLCBjb25zdHJ1Y3QucHJvdG90eXBlLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJzwnICsgdGhpcy5pbnN0YW5jZW9mICsgXCIgaW5zdGFuY2U+XCI7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVG9rZW4sIFRva2VuVHlwZSB9IGZyb20gJ3Rva2VuJztcclxuXHJcbmltcG9ydCB7IFN0bXQgfSBmcm9tICdzdGF0ZW1lbnQnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEV4cHIge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICBjb25zdHJ1Y3RvcigpIHt9XHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUjtcclxufVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXhwclZpc2l0b3I8Uj4ge1xyXG4gICAgdmlzaXRBc3NpZ25FeHByKGV4cHI6IEFzc2lnbik6IFI7XHJcbiAgICB2aXNpdEJpbmFyeUV4cHIoZXhwcjogQmluYXJ5KTogUjtcclxuICAgIHZpc2l0Q2FsbEV4cHIoZXhwcjogQ2FsbCk6IFI7XHJcbiAgICB2aXNpdEVudGl0eUV4cHIoZXhwcjogRW50aXR5KTogUjtcclxuICAgIHZpc2l0R2V0RXhwcihleHByOiBHZXQpOiBSO1xyXG4gICAgdmlzaXRHcm91cGluZ0V4cHIoZXhwcjogR3JvdXBpbmcpOiBSO1xyXG4gICAgdmlzaXRLZXlFeHByKGV4cHI6IEtleSk6IFI7XHJcbiAgICB2aXNpdExhbWJkYUV4cHIoZXhwcjogTGFtYmRhKTogUjtcclxuICAgIHZpc2l0TG9naWNhbEV4cHIoZXhwcjogTG9naWNhbCk6IFI7XHJcbiAgICB2aXNpdExpc3RFeHByKGV4cHI6IExpc3QpOiBSO1xyXG4gICAgdmlzaXRMaXRlcmFsRXhwcihleHByOiBMaXRlcmFsKTogUjtcclxuICAgIHZpc2l0TmV3RXhwcihleHByOiBOZXcpOiBSO1xyXG4gICAgdmlzaXRQb3N0Zml4RXhwcihleHByOiBQb3N0Zml4KTogUjtcclxuICAgIHZpc2l0UmFuZ2VFeHByKGV4cHI6IFJhbmdlKTogUjtcclxuICAgIHZpc2l0UmVnRXhFeHByKGV4cHI6IFJlZ0V4KTogUjtcclxuICAgIHZpc2l0U2V0RXhwcihleHByOiBTZXQpOiBSO1xyXG4gICAgdmlzaXRTdXBlckV4cHIoZXhwcjogU3VwZXIpOiBSO1xyXG4gICAgdmlzaXRUZXJuYXJ5RXhwcihleHByOiBUZXJuYXJ5KTogUjtcclxuICAgIHZpc2l0VW5hcnlFeHByKGV4cHI6IFVuYXJ5KTogUjtcclxuICAgIHZpc2l0VmFyaWFibGVFeHByKGV4cHI6IFZhcmlhYmxlKTogUjtcclxuICAgIHZpc2l0WnRyaW5nRXhwcihleHByOiBadHJpbmcpOiBSO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXNzaWduIGV4dGVuZHMgRXhwciB7XHJcbiAgICBwdWJsaWMgbmFtZTogVG9rZW47XHJcbiAgICBwdWJsaWMgdmFsdWU6IEV4cHI7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogVG9rZW4sIHZhbHVlOiBFeHByKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XHJcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRBc3NpZ25FeHByKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnRXhwci5Bc3NpZ24nO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBCaW5hcnkgZXh0ZW5kcyBFeHByIHtcclxuICAgIHB1YmxpYyBsZWZ0OiBFeHByO1xyXG4gICAgcHVibGljIG9wZXJhdG9yOiBUb2tlbjtcclxuICAgIHB1YmxpYyByaWdodDogRXhwcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZWZ0OiBFeHByLCBvcGVyYXRvcjogVG9rZW4sIHJpZ2h0OiBFeHByKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcclxuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xyXG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0QmluYXJ5RXhwcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ0V4cHIuQmluYXJ5JztcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgQ2FsbCBleHRlbmRzIEV4cHIge1xyXG4gICAgcHVibGljIGNhbGxlZTogRXhwcjtcclxuICAgIHB1YmxpYyBwYXJlbjogVG9rZW47XHJcbiAgICBwdWJsaWMgYXJnczogRXhwcltdO1xyXG4gICAgcHVibGljIHRoaXo6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYWxsZWU6IEV4cHIsIHBhcmVuOiBUb2tlbiwgYXJnczogRXhwcltdLCB0aGl6OiBhbnkpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY2FsbGVlID0gY2FsbGVlO1xyXG4gICAgICAgIHRoaXMucGFyZW4gPSBwYXJlbjtcclxuICAgICAgICB0aGlzLmFyZ3MgPSBhcmdzO1xyXG4gICAgICAgIHRoaXMudGhpeiA9IHRoaXo7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xyXG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q2FsbEV4cHIodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdFeHByLkNhbGwnO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFbnRpdHkgZXh0ZW5kcyBFeHByIHtcclxuICAgIHB1YmxpYyBwcm9wZXJ0aWVzOiBFeHByW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcGVydGllczogRXhwcltdKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcclxuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEVudGl0eUV4cHIodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdFeHByLkVudGl0eSc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldCBleHRlbmRzIEV4cHIge1xyXG4gICAgcHVibGljIGVudGl0eTogRXhwcjtcclxuICAgIHB1YmxpYyBrZXk6IEV4cHI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW50aXR5OiBFeHByLCBrZXk6IEV4cHIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuZW50aXR5ID0gZW50aXR5O1xyXG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcclxuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEdldEV4cHIodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdFeHByLkdldCc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdyb3VwaW5nIGV4dGVuZHMgRXhwciB7XHJcbiAgICBwdWJsaWMgZXhwcmVzc2lvbjogRXhwcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihleHByZXNzaW9uOiBFeHByKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcclxuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEdyb3VwaW5nRXhwcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ0V4cHIuR3JvdXBpbmcnO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBLZXkgZXh0ZW5kcyBFeHByIHtcclxuICAgIHB1YmxpYyBuYW1lOiBUb2tlbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBUb2tlbikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XHJcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRLZXlFeHByKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnRXhwci5LZXknO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBMYW1iZGEgZXh0ZW5kcyBFeHByIHtcclxuICAgIHB1YmxpYyBsYW1iZGE6IFN0bXQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IobGFtYmRhOiBTdG10KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmxhbWJkYSA9IGxhbWJkYTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XHJcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRMYW1iZGFFeHByKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnRXhwci5MYW1iZGEnO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBMb2dpY2FsIGV4dGVuZHMgRXhwciB7XHJcbiAgICBwdWJsaWMgbGVmdDogRXhwcjtcclxuICAgIHB1YmxpYyBvcGVyYXRvcjogVG9rZW47XHJcbiAgICBwdWJsaWMgcmlnaHQ6IEV4cHI7XHJcblxyXG4gICAgY29uc3RydWN0b3IobGVmdDogRXhwciwgb3BlcmF0b3I6IFRva2VuLCByaWdodDogRXhwcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcclxuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XHJcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcclxuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdExvZ2ljYWxFeHByKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnRXhwci5Mb2dpY2FsJztcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgTGlzdCBleHRlbmRzIEV4cHIge1xyXG4gICAgcHVibGljIHZhbHVlOiBFeHByW107XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IEV4cHJbXSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcclxuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdExpc3RFeHByKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnRXhwci5MaXN0JztcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgTGl0ZXJhbCBleHRlbmRzIEV4cHIge1xyXG4gICAgcHVibGljIHZhbHVlOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcclxuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdExpdGVyYWxFeHByKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnRXhwci5MaXRlcmFsJztcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgTmV3IGV4dGVuZHMgRXhwciB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0OiBFeHByO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbnN0cnVjdDogRXhwcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3QgPSBjb25zdHJ1Y3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xyXG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TmV3RXhwcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ0V4cHIuTmV3JztcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgUG9zdGZpeCBleHRlbmRzIEV4cHIge1xyXG4gICAgcHVibGljIG5hbWU6IFRva2VuO1xyXG4gICAgcHVibGljIGluY3JlbWVudDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IFRva2VuLCBpbmNyZW1lbnQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmluY3JlbWVudCA9IGluY3JlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XHJcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRQb3N0Zml4RXhwcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ0V4cHIuUG9zdGZpeCc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJhbmdlIGV4dGVuZHMgRXhwciB7XHJcbiAgICBwdWJsaWMgc3RhcnQ6IEV4cHI7XHJcbiAgICBwdWJsaWMgZW5kOiBFeHByO1xyXG4gICAgcHVibGljIHN0ZXA6IEV4cHI7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc3RhcnQ6IEV4cHIsIGVuZDogRXhwciwgc3RlcDogRXhwcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xyXG4gICAgICAgIHRoaXMuZW5kID0gZW5kO1xyXG4gICAgICAgIHRoaXMuc3RlcCA9IHN0ZXA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xyXG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UmFuZ2VFeHByKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnRXhwci5SYW5nZSc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJlZ0V4IGV4dGVuZHMgRXhwciB7XHJcbiAgICBwdWJsaWMgdmFsdWU6IFJlZ0V4cDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogUmVnRXhwKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xyXG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UmVnRXhFeHByKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnRXhwci5SZWdFeCc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNldCBleHRlbmRzIEV4cHIge1xyXG4gICAgcHVibGljIGVudGl0eTogRXhwcjtcclxuICAgIHB1YmxpYyBrZXk6IEV4cHI7XHJcbiAgICBwdWJsaWMgdmFsdWU6IEV4cHI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW50aXR5OiBFeHByLCBrZXk6IEV4cHIsIHZhbHVlOiBFeHByKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmVudGl0eSA9IGVudGl0eTtcclxuICAgICAgICB0aGlzLmtleSA9IGtleTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xyXG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0U2V0RXhwcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ0V4cHIuU2V0JztcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgU3VwZXIgZXh0ZW5kcyBFeHByIHtcclxuICAgIHB1YmxpYyBpbmRleDogVG9rZW5bXTtcclxuICAgIHB1YmxpYyBhcmdzOiBFeHByW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoaW5kZXg6IFRva2VuW10sIGFyZ3M6IEV4cHJbXSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuYXJncyA9IGFyZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xyXG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0U3VwZXJFeHByKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnRXhwci5TdXBlcic7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFRlcm5hcnkgZXh0ZW5kcyBFeHByIHtcclxuICAgIHB1YmxpYyBjb25kaXRpb246IEV4cHI7XHJcbiAgICBwdWJsaWMgdGhlbkV4cHI6IEV4cHI7XHJcbiAgICBwdWJsaWMgZWxzZUV4cHI6IEV4cHI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZGl0aW9uOiBFeHByLCB0aGVuRXhwcjogRXhwciwgZWxzZUV4cHI6IEV4cHIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xyXG4gICAgICAgIHRoaXMudGhlbkV4cHIgPSB0aGVuRXhwcjtcclxuICAgICAgICB0aGlzLmVsc2VFeHByID0gZWxzZUV4cHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xyXG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VGVybmFyeUV4cHIodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdFeHByLlRlcm5hcnknO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBVbmFyeSBleHRlbmRzIEV4cHIge1xyXG4gICAgcHVibGljIG9wZXJhdG9yOiBUb2tlbjtcclxuICAgIHB1YmxpYyByaWdodDogRXhwcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvcGVyYXRvcjogVG9rZW4sIHJpZ2h0OiBFeHByKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XHJcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcclxuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFVuYXJ5RXhwcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ0V4cHIuVW5hcnknO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBWYXJpYWJsZSBleHRlbmRzIEV4cHIge1xyXG4gICAgcHVibGljIG5hbWU6IFRva2VuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IFRva2VuKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcclxuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFZhcmlhYmxlRXhwcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ0V4cHIuVmFyaWFibGUnO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBadHJpbmcgZXh0ZW5kcyBFeHByIHtcclxuICAgIHB1YmxpYyB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XHJcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRadHJpbmdFeHByKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnRXhwci5adHJpbmcnO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNjYW5uZXIgfSBmcm9tICcuL3NjYW5uZXInO1xyXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICcuL3BhcnNlcic7XHJcbmltcG9ydCB7IEludGVycHJldGVyIH0gZnJvbSAnLi9pbnRlcnByZXRlcic7XHJcbmltcG9ydCB7IENvbnNvbGUgfSBmcm9tICcuL2NvbnNvbGUnO1xyXG5pbXBvcnQgeyBEZW1vU291cmNlQ29kZSB9IGZyb20gJy4vZGVtbyc7XHJcbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55O1xyXG5kZWNsYXJlIHZhciBnbG9iYWw6IGFueTtcclxuXHJcbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgZ2xvYmFsLndpbmRvdyA9IGdsb2JhbDtcclxufVxyXG5cclxud2luZG93LmNvbnpvbGUgPSBuZXcgQ29uc29sZSgpO1xyXG53aW5kb3cuZGVtb1NvdXJjZUNvZGUgPSBEZW1vU291cmNlQ29kZTtcclxud2luZG93LmV4ZWN1dGUgPSAoc291cmNlOiBzdHJpbmcpOiBDb25zb2xlID0+IHtcclxuICAgIHJldHVybiAobmV3IEludGVycHJldGVyKCkuaW50ZXJwZXQoKG5ldyBQYXJzZXIoKG5ldyBTY2FubmVyKHNvdXJjZSkpLnNjYW4oKSkpLnBhcnNlKCkpKTtcclxufTtcclxuXHJcbndpbmRvdy5hdHNjcmlwdCA9IChzb3VyY2U6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIChuZXcgSW50ZXJwcmV0ZXIoKS5ldmFsKChuZXcgUGFyc2VyKChuZXcgU2Nhbm5lcihzb3VyY2UpKS5zY2FuKCkpKS5wYXJzZSgpKSk7XHJcbn07XHJcbiIsImltcG9ydCAqIGFzIEV4cHIgZnJvbSAnLi9leHByZXNzaW9uJztcclxuaW1wb3J0ICogYXMgUnVudGltZSBmcm9tICcuL3J1bnRpbWUnO1xyXG5pbXBvcnQgKiBhcyBTdG10IGZyb20gJy4vc3RhdGVtZW50JztcclxuaW1wb3J0IHsgQXJyYXlFbnRpdHkgfSBmcm9tICcuL2FycmF5JztcclxuaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gJy4vY29uc29sZSc7XHJcbmltcG9ydCB7IEZ1bmN0aW9uRW50aXR5LCBDYWxsYWJsZUVudGl0eSwgSW50ZXJuYWxFbnRpdHksIEluc3RhbmNlRW50aXR5LCBQcm90b3R5cGVFbnRpdHkgfSBmcm9tICcuL2VudGl0eSc7XHJcbmltcG9ydCB7IEluZGV4UmFuZ2UgfSBmcm9tICcuL3JhbmdlJztcclxuaW1wb3J0IHsgUHJvdG90eXBlIH0gZnJvbSAnLi9wcm90b3R5cGUnO1xyXG5pbXBvcnQgeyBSZXR1cm4gfSBmcm9tICcuL3JldHVybic7XHJcbmltcG9ydCB7IFNjb3BlIH0gZnJvbSAnLi9zY29wZSc7XHJcbmltcG9ydCB7IFN0cmluZ0VudGl0eSB9IGZyb20gJy4vc3RyaW5nJztcclxuaW1wb3J0IHsgVG9rZW5UeXBlIH0gZnJvbSAnLi90b2tlbic7XHJcbmltcG9ydCB7IFJlZ0V4RW50aXR5IH0gZnJvbSAnLi9yZWdleCc7XHJcbmRlY2xhcmUgdmFyIGNvbnpvbGU6IENvbnNvbGU7XHJcblxyXG5leHBvcnQgY2xhc3MgSW50ZXJwcmV0ZXIgaW1wbGVtZW50c1xyXG4gICAgRXhwci5FeHByVmlzaXRvcjxhbnk+LFxyXG4gICAgU3RtdC5TdG10VmlzaXRvcjx2b2lkPiB7XHJcbiAgICBwdWJsaWMgZ2xvYmFsID0gbmV3IFNjb3BlKCk7XHJcbiAgICBwdWJsaWMgc2NvcGUgPSB0aGlzLmdsb2JhbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggKSB7XHJcbiAgICAgICAgdGhpcy5nbG9iYWwuZGVmaW5lKCdlY2hvJywgUnVudGltZS5lY2hvRnVuY3Rpb24oKSk7XHJcbiAgICAgICAgdGhpcy5nbG9iYWwuZGVmaW5lKCdyYW5kJywgUnVudGltZS5yYW5kRnVuY3Rpb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBldmFsdWF0ZShleHByOiBFeHByLkV4cHIpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBleHByLmFjY2VwdCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV4ZWN1dGUoc3RtdDogU3RtdC5TdG10KTogYW55IHtcclxuICAgICAgICByZXR1cm4gc3RtdC5hY2NlcHQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGV2YWwoc3RhdGVtZW50czogU3RtdC5TdG10W10pOiBhbnkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGVtZW50cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBpZiAoaSAhPT0gc3RhdGVtZW50cy5sZW5ndGggLSAxICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlKHN0YXRlbWVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlKHN0YXRlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludGVycGV0KHN0YXRlbWVudHM6IFN0bXQuU3RtdFtdKTogYW55IHtcclxuICAgICAgICBmb3IgKGNvbnN0IHN0YXRlbWVudCBvZiBzdGF0ZW1lbnRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhlY3V0ZShzdGF0ZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGludGVycHJldGVyRXJyb3IobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29uem9sZS5sb2coYFtpbnRlcnByZXRlciBlcnJvcl0gPT4gJHttZXNzYWdlfWApO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdEV4cHJlc3Npb25TdG10KHN0bXQ6IFN0bXQuRXhwcmVzc2lvbik6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGUoc3RtdC5leHByZXNzaW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRQcmludFN0bXQoc3RtdDogU3RtdC5QcmludCk6IGFueSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5ldmFsdWF0ZShzdG10LmV4cHJlc3Npb24pO1xyXG4gICAgICAgIHZhbHVlID0gdmFsdWUgPT09IG51bGwgPyBcIm51bGxcIiA6IHZhbHVlO1xyXG4gICAgICAgIGNvbnpvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0VmFyU3RtdChzdG10OiBTdG10LlZhcik6IHZvaWQge1xyXG4gICAgICAgIGxldCB2YWx1ZTogb2JqZWN0ID0gbnVsbDtcclxuICAgICAgICBpZiAoc3RtdC5pbml0aWFsaXplciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZXZhbHVhdGUoc3RtdC5pbml0aWFsaXplcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uRW50aXR5ICYmIHZhbHVlLm5hbWUgPT09IFwibGFtYmRhXCIpIHtcclxuICAgICAgICAgICAgdmFsdWUubmFtZSA9IHN0bXQubmFtZS5sZXhlbWU7XHJcbiAgICAgICAgICAgIHZhbHVlLnByb3RvdHlwZS5zZXQoJ25hbWUnLCB2YWx1ZS5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0bXQudHlwZS50eXBlID09PSBUb2tlblR5cGUudmFyKSAge1xyXG4gICAgICAgICAgICB0aGlzLnNjb3BlLnNldChzdG10Lm5hbWUubGV4ZW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zY29wZS5kZWZpbmUoc3RtdC5uYW1lLmxleGVtZSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRWYXJpYWJsZUV4cHIoZXhwcjogRXhwci5WYXJpYWJsZSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuZ2V0KGV4cHIubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0UG9zdGZpeEV4cHIoZXhwcjogRXhwci5Qb3N0Zml4KTogYW55IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2NvcGUuZ2V0KGV4cHIubmFtZSk7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZSArIGV4cHIuaW5jcmVtZW50O1xyXG4gICAgICAgIHRoaXMuc2NvcGUuYXNzaWduKGV4cHIubmFtZS5sZXhlbWUsIG5ld1ZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0TGlzdEV4cHIoZXhwcjogRXhwci5MaXN0KTogYW55IHtcclxuICAgICAgICBjb25zdCB2YWx1ZXM6IGFueVtdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBleHByZXNzaW9uIG9mIGV4cHIudmFsdWUpIHtcclxuICAgICAgICAgICAgdmFsdWVzLnB1c2godGhpcy5ldmFsdWF0ZShleHByZXNzaW9uKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQXJyYXlFbnRpdHkodmFsdWVzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRadHJpbmdFeHByKGV4cHI6IEV4cHIuWnRyaW5nKTogYW55IHtcclxuICAgICAgICByZXR1cm4gbmV3IFN0cmluZ0VudGl0eShleHByLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRSZWdFeEV4cHIoZXhwcjogRXhwci5SZWdFeCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeEVudGl0eShleHByLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRBc3NpZ25FeHByKGV4cHI6IEV4cHIuQXNzaWduKTogYW55IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZXZhbHVhdGUoZXhwci52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zY29wZS5hc3NpZ24oZXhwci5uYW1lLmxleGVtZSwgdmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRCaW5hcnlFeHByKGV4cHI6IEV4cHIuQmluYXJ5KTogYW55IHtcclxuICAgICAgICBsZXQgbGVmdCA9IHRoaXMuZXZhbHVhdGUoZXhwci5sZWZ0KTtcclxuICAgICAgICBsZXQgcmlnaHQgPSB0aGlzLmV2YWx1YXRlKGV4cHIucmlnaHQpO1xyXG4gICAgICAgIGxlZnQgPSBsZWZ0IGluc3RhbmNlb2YgU3RyaW5nRW50aXR5ID8gbGVmdC50b1N0cmluZygpIDogbGVmdDtcclxuICAgICAgICByaWdodCA9IHJpZ2h0IGluc3RhbmNlb2YgU3RyaW5nRW50aXR5ID8gcmlnaHQudG9TdHJpbmcoKSA6IHJpZ2h0O1xyXG4gICAgICAgIHN3aXRjaCAoZXhwci5vcGVyYXRvci50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLm1pbnVzOlxyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5taW51c0VxdWFsOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChsZWZ0IC0gcmlnaHQpIGFzIG51bWJlcjtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuc2xhc2g6XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLnNsYXNoRXF1YWw6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGxlZnQgLyByaWdodCkgYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5zdGFyOlxyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5zdGFyRXF1YWw6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGxlZnQgKiByaWdodCkgYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5wZXJjZW50OlxyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5wZXJjZW50RXF1YWw6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGxlZnQgJSByaWdodCkgYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5wbHVzOlxyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5wbHVzRXF1YWw6XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKGxlZnQpICYmICFpc05hTihyaWdodCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGxlZnQgKyByaWdodCkgYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGxlZnQgaW5zdGFuY2VvZiBBcnJheUVudGl0eSAmJiByaWdodCBpbnN0YW5jZW9mIEFycmF5RW50aXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBBcnJheUVudGl0eShsZWZ0LnZhbHVlcy5jb25jYXQocmlnaHQudmFsdWVzKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFN0cmluZ0VudGl0eShsZWZ0IGFzIHN0cmluZyArIHJpZ2h0IGFzIHN0cmluZyk7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLnBpcGU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGxlZnQgfCByaWdodCkgYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5jYXJldDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAobGVmdCBeIHJpZ2h0KSBhcyBudW1iZXI7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLmdyZWF0ZXI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPG51bWJlcj4gbGVmdCA+IDxudW1iZXI+IHJpZ2h0O1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5ncmVhdGVyRXF1YWw6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPG51bWJlcj4gbGVmdCA+PSA8bnVtYmVyPiByaWdodDtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUubGVzczpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8bnVtYmVyPiBsZWZ0IDwgPG51bWJlcj4gcmlnaHQ7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLmxlc3NFcXVhbDpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8bnVtYmVyPiBsZWZ0IDw9IDxudW1iZXI+IHJpZ2h0O1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5lcXVhbEVxdWFsOlxyXG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdCA9PSByaWdodDtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuZXF1YWxFcXVhbEVxdWFsOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQgPT09IHJpZ2h0O1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5iYW5nRXF1YWw6XHJcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0ICE9IHJpZ2h0O1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5iYW5nRXF1YWxFcXVhbDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0ICE9PSByaWdodDtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbnpvbGUud2FybihleHByKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsOyAvLyB1bnJlYWNoYWJsZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdExvZ2ljYWxFeHByKGV4cHI6IEV4cHIuTG9naWNhbCk6IGFueSB7XHJcbiAgICAgICAgaWYgKGV4cHIub3BlcmF0b3IudHlwZSA9PT0gVG9rZW5UeXBlLmFuZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZShleHByLmxlZnQpICYmIHRoaXMuZXZhbHVhdGUoZXhwci5yaWdodCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGUoZXhwci5sZWZ0KSB8fCB0aGlzLmV2YWx1YXRlKGV4cHIucmlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRUZXJuYXJ5RXhwcihleHByOiBFeHByLlRlcm5hcnkpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlKGV4cHIuY29uZGl0aW9uKSA/IHRoaXMuZXZhbHVhdGUoZXhwci50aGVuRXhwcikgOiB0aGlzLmV2YWx1YXRlKGV4cHIuZWxzZUV4cHIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdEdyb3VwaW5nRXhwcihleHByOiBFeHByLkdyb3VwaW5nKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZShleHByLmV4cHJlc3Npb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdExpdGVyYWxFeHByKGV4cHI6IEV4cHIuTGl0ZXJhbCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIGV4cHIudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0VW5hcnlFeHByKGV4cHI6IEV4cHIuVW5hcnkpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5ldmFsdWF0ZShleHByLnJpZ2h0KTtcclxuICAgICAgICBzd2l0Y2ggKGV4cHIub3BlcmF0b3IudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5taW51czpcclxuICAgICAgICAgICAgICAgIHJldHVybiAtTnVtYmVyKHJpZ2h0KTtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuYmFuZzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAhQm9vbGVhbihyaWdodCk7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLmRvbGxhcjpcclxuICAgICAgICAgICAgICAgIHJldHVybiByaWdodC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLnBsdXNQbHVzOlxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5jVmFsdWUgPSBOdW1iZXIocmlnaHQpICsgMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NvcGUuYXNzaWduKCg8RXhwci5WYXJpYWJsZT4gZXhwci5yaWdodCkubmFtZS5sZXhlbWUsIGluY1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbmNWYWx1ZTtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUubWludXNNaW51czpcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlY1ZhbHVlID0gTnVtYmVyKHJpZ2h0KSAtIDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3BlLmFzc2lnbigoPEV4cHIuVmFyaWFibGU+IGV4cHIucmlnaHQpLm5hbWUubGV4ZW1lLCBkZWNWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjVmFsdWU7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8gc2hvdWxkIGJlIHVucmVhY2hhYmxlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBleGVjdXRlQmxvY2soc3RhdGVtZW50czogU3RtdC5TdG10W10sIG5leHRTY29wZTogU2NvcGUpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50U2NvcGUgPSB0aGlzLnNjb3BlO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBuZXh0U2NvcGU7XHJcbiAgICAgICAgZm9yIChjb25zdCBzdGF0ZW1lbnQgb2Ygc3RhdGVtZW50cykge1xyXG4gICAgICAgICAgICB0aGlzLmV4ZWN1dGUoc3RhdGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IGN1cnJlbnRTY29wZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRCbG9ja1N0bXQoc3RtdDogU3RtdC5CbG9jayk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZXhlY3V0ZUJsb2NrKHN0bXQuc3RhdGVtZW50cywgbmV3IFNjb3BlKHRoaXMuc2NvcGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRJZlN0bXQoc3RtdDogU3RtdC5JZik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmV2YWx1YXRlKHN0bXQuY29uZGl0aW9uKSkge1xyXG4gICAgICAgICAgICB0aGlzLmV4ZWN1dGUoc3RtdC50aGVuU3RtdCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdG10LmVsc2VTdG10ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhlY3V0ZShzdG10LmVsc2VTdG10KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0V2hpbGVTdG10KHN0bXQ6IFN0bXQuV2hpbGUpOiB2b2lkIHtcclxuICAgICAgICB3aGlsZSAodGhpcy5ldmFsdWF0ZShzdG10LmNvbmRpdGlvbikpIHtcclxuICAgICAgICAgICAgdGhpcy5leGVjdXRlKHN0bXQubG9vcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdERvV2hpbGVTdG10KHN0bXQ6IFN0bXQuRG9XaGlsZSk6IHZvaWQge1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgdGhpcy5leGVjdXRlKHN0bXQubG9vcCk7XHJcbiAgICAgICAgfSB3aGlsZSAodGhpcy5ldmFsdWF0ZShzdG10LmNvbmRpdGlvbikpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdENhbGxFeHByKGV4cHI6IEV4cHIuQ2FsbCk6IG9iamVjdCB7XHJcbiAgICAgICAgY29uc3QgY2FsbGVlID0gdGhpcy5ldmFsdWF0ZShleHByLmNhbGxlZSk7XHJcbiAgICAgICAgY29uc3QgYXJncyA9IFtdO1xyXG4gICAgICAgIGxldCB0aGl6OiBhbnkgPSBudWxsO1xyXG4gICAgICAgIGlmIChleHByLmNhbGxlZSBpbnN0YW5jZW9mIEV4cHIuR2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXogPSB0aGlzLmV2YWx1YXRlKGV4cHIuY2FsbGVlLmVudGl0eSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChleHByLnRoaXogIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpeiA9IGV4cHIudGhpejtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBhcmd1bWVudCBvZiBleHByLmFyZ3MpIHtcclxuICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZXZhbHVhdGUoYXJndW1lbnQpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghKGNhbGxlZSBpbnN0YW5jZW9mIENhbGxhYmxlRW50aXR5KSAmJlxyXG4gICAgICAgICAgICAhKGNhbGxlZSBpbnN0YW5jZW9mIEludGVybmFsRW50aXR5KVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLmludGVycHJldGVyRXJyb3IoYCR7Y2FsbGVlfSBpcyBub3QgYSBmdW5jdGlvbmApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBmdW5jID0gY2FsbGVlIGFzIENhbGxhYmxlRW50aXR5O1xyXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCAhPT0gZnVuYy5hcml0eSgpICYmIGZ1bmMuYXJpdHkoKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgY29uem9sZS53YXJuKGBXYXJuaW5nIGF0ICgke2V4cHIucGFyZW4ubGluZX0pOiAke2NhbGxlZX0gbWlzbWF0Y2hlZCBhcmd1bWVudCBsZW5ndGg7IFxcbiBFeHBlY3RlZCAke2Z1bmMuYXJpdHkoKX0gYnV0IGdvdCAke2FyZ3MubGVuZ3RofSBgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCB0aGl6LCBhcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRTdXBlckV4cHIoZXhwcjogRXhwci5TdXBlcik6IGFueSB7XHJcbiAgICAgICAgY29uc3QgdGhpejogSW5zdGFuY2VFbnRpdHkgPSB0aGlzLnNjb3BlLmZpcnN0KCd0aGlzJyk7XHJcbiAgICAgICAgaWYgKCF0aGl6KSB7XHJcbiAgICAgICAgICAgIGNvbnpvbGUuZXJyb3IoYHN1cGVyIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiBjaGlsZCBpbnN0YW5jZXNgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2xheno6IEZ1bmN0aW9uRW50aXR5ID0gdGhpcy5zY29wZS5vYnRhaW4odGhpei5pbnN0YW5jZW9mKTtcclxuICAgICAgICBpZiAoIWNsYXp6KSB7XHJcbiAgICAgICAgICAgIGNvbnpvbGUuZXJyb3IoYCR7dGhpen0gaXMgbm90IGFuIGluc3RhbmNlIG9mIGFuIGVudGl0eWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwYXJlbnQ6IEZ1bmN0aW9uRW50aXR5ID0gY2xhenoucGFyZW50O1xyXG4gICAgICAgIGlmICghcGFyZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnpvbGUuZXJyb3IoYCR7dGhpen0gZW50aXR5IGhhcyBubyBwYXJlbnRgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1ldGhvZDogRnVuY3Rpb25FbnRpdHkgPSBudWxsO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGV4cHIuaW5kZXgpIHtcclxuICAgICAgICAgICAgbWV0aG9kID0gcGFyZW50LmdldChrZXkubGV4ZW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYXJncyA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgYXJndW1lbnQgb2YgZXhwci5hcmdzKSB7XHJcbiAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmV2YWx1YXRlKGFyZ3VtZW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXRob2QpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZC5jYWxsKHRoaXMsIHRoaXosIGFyZ3MpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQuY2FsbCh0aGlzLCB0aGl6LCBhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0TmV3RXhwcihleHByOiBFeHByLk5ldyk6IG9iamVjdCB7XHJcbiAgICAgICAgY29uc3QgY29uc3RydWN0ID0gZXhwci5jb25zdHJ1Y3QgYXMgRXhwci5DYWxsO1xyXG4gICAgICAgIGNvbnN0IGNhbGxlZSA9IHRoaXMuZXZhbHVhdGUoY29uc3RydWN0LmNhbGxlZSk7XHJcbiAgICAgICAgY29uc3QgbmV3SW5zdGFuY2UgPSBuZXcgSW5zdGFuY2VFbnRpdHkoY2FsbGVlKTtcclxuICAgICAgICBjb25zdHJ1Y3QudGhpeiA9IG5ld0luc3RhbmNlO1xyXG4gICAgICAgIHRoaXMuZXZhbHVhdGUoY29uc3RydWN0KTtcclxuICAgICAgICByZXR1cm4gbmV3SW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0RW50aXR5RXhwcihleHByOiBFeHByLkVudGl0eSkge1xyXG4gICAgICAgIGNvbnN0IGVudGl0eSA9IG5ldyBQcm90b3R5cGVFbnRpdHkoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIGV4cHIucHJvcGVydGllcykge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgID0gdGhpcy5ldmFsdWF0ZSgocHJvcGVydHkgYXMgRXhwci5TZXQpLmtleSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5ldmFsdWF0ZSgocHJvcGVydHkgYXMgRXhwci5TZXQpLnZhbHVlKTtcclxuICAgICAgICAgICAgZW50aXR5LnNldChrZXksIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVudGl0eTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRLZXlFeHByKGV4cHI6IEV4cHIuS2V5KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gZXhwci5uYW1lLmxleGVtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRHZXRFeHByKGV4cHI6IEV4cHIuR2V0KTogYW55IHtcclxuICAgICAgICBjb25zdCBlbnRpdHkgPSB0aGlzLmV2YWx1YXRlKGV4cHIuZW50aXR5KTtcclxuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmV2YWx1YXRlKGV4cHIua2V5KTtcclxuICAgICAgICBpZiAoZW50aXR5IGluc3RhbmNlb2YgUHJvdG90eXBlRW50aXR5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbnRpdHkuZ2V0KGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW50ZXJwcmV0ZXJFcnJvcihgJHtlbnRpdHl9LiR7a2V5fTogb25seSBpbnN0YW5jZXMgaGF2ZSBwcm9wZXJ0aWVzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0U2V0RXhwcihleHByOiBFeHByLlNldCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuZXZhbHVhdGUoZXhwci5lbnRpdHkpO1xyXG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuZXZhbHVhdGUoZXhwci5rZXkpO1xyXG4gICAgICAgIGlmICghKGVudGl0eSBpbnN0YW5jZW9mIFByb3RvdHlwZUVudGl0eSkpIHtcclxuICAgICAgICAgICAgY29uem9sZS53YXJuKGAke2VudGl0eX0gaXMgbm90IGEgcnVudGltZSBPYmplY3RgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmV2YWx1YXRlKGV4cHIudmFsdWUpO1xyXG4gICAgICAgIChlbnRpdHkgYXMgUHJvdG90eXBlRW50aXR5KS5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdEZ1bmNTdG10KHN0bXQ6IFN0bXQuRnVuYyk6IGFueSB7XHJcbiAgICAgICAgY29uc3QgZnVuYzogRnVuY3Rpb25FbnRpdHkgPSBuZXcgRnVuY3Rpb25FbnRpdHkoc3RtdCwgdGhpcy5zY29wZSk7XHJcbiAgICAgICAgdGhpcy5zY29wZS5kZWZpbmUoc3RtdC5uYW1lLmxleGVtZSwgZnVuYyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0Q2xhc3NTdG10KHN0bXQ6IFN0bXQuQ2xhc3MpOiBhbnkge1xyXG4gICAgICAgIGxldCBjb25zdHJ1Y3QgPSBzdG10Lm1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZS5sZXhlbWUgPT09IFwiY29uc3RydWN0b3JcIik7XHJcbiAgICAgICAgY29uc3QgbWV0aG9kcyA9IHN0bXQubWV0aG9kcy5maWx0ZXIoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUubGV4ZW1lICE9PSBcImNvbnN0cnVjdG9yXCIpO1xyXG5cclxuICAgICAgICBpZiAoIWNvbnN0cnVjdCkge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3QgPSBuZXcgU3RtdC5GdW5jKHN0bXQubmFtZSwgW10sIFtdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3QubmFtZSA9IHN0bXQubmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZ1bmM6IEZ1bmN0aW9uRW50aXR5ID0gbmV3IEZ1bmN0aW9uRW50aXR5KGNvbnN0cnVjdCwgdGhpcy5zY29wZSk7XHJcbiAgICAgICAgbGV0IHBhcmVudDogRnVuY3Rpb25FbnRpdHkgPSBudWxsO1xyXG4gICAgICAgIGlmIChzdG10LnBhcmVudCkge1xyXG4gICAgICAgICAgICBwYXJlbnQgPSB0aGlzLnNjb3BlLmdldChzdG10LnBhcmVudCk7XHJcbiAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIGZ1bmMucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgZnVuYy5wcm90b3R5cGUgPSBuZXcgUHJvdG90eXBlKHBhcmVudC5wcm9wZXJ0aWVzLCBwYXJlbnQucHJvdG90eXBlLCBmdW5jKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IG1ldGhvZCBvZiBtZXRob2RzKSB7XHJcbiAgICAgICAgICAgIGZ1bmMucHJvcGVydGllcy5zZXQobWV0aG9kLm5hbWUubGV4ZW1lLCBuZXcgRnVuY3Rpb25FbnRpdHkobWV0aG9kLCB0aGlzLnNjb3BlLCBwYXJlbnQpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2NvcGUuc2V0KHN0bXQubmFtZS5sZXhlbWUsIGZ1bmMpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdExhbWJkYUV4cHIoZXhwcjogRXhwci5MYW1iZGEpOiBvYmplY3Qge1xyXG4gICAgICAgIGNvbnN0IGxhbWJkYTogU3RtdC5GdW5jID0gZXhwci5sYW1iZGEgYXMgU3RtdC5GdW5jO1xyXG4gICAgICAgIGNvbnN0IGZ1bmM6IEZ1bmN0aW9uRW50aXR5ID0gbmV3IEZ1bmN0aW9uRW50aXR5KGxhbWJkYSwgdGhpcy5zY29wZSk7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0UmV0dXJuU3RtdChzdG10OiBTdG10LlJldHVybik6IGFueSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gbnVsbDtcclxuICAgICAgICBpZiAoc3RtdC52YWx1ZSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZXZhbHVhdGUoc3RtdC52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBSZXR1cm4odmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdFJhbmdlRXhwcihleHByOiBFeHByLlJhbmdlKTogYW55IHtcclxuICAgICAgICByZXR1cm4gbmV3IEluZGV4UmFuZ2UoXHJcbiAgICAgICAgICAgIGV4cHIuc3RhcnQgPyB0aGlzLmV2YWx1YXRlKGV4cHIuc3RhcnQpIDogbnVsbCxcclxuICAgICAgICAgICAgZXhwci5lbmQgPyB0aGlzLmV2YWx1YXRlKGV4cHIuZW5kKSA6IG51bGwsXHJcbiAgICAgICAgICAgIGV4cHIuc3RlcCA/IHRoaXMuZXZhbHVhdGUoZXhwci5zdGVwKSA6IG51bGxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBFeHByIGZyb20gJy4vZXhwcmVzc2lvbic7XHJcbmltcG9ydCAqIGFzIFN0bXQgZnJvbSAnLi9zdGF0ZW1lbnQnO1xyXG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnLi9jb25zb2xlJztcclxuaW1wb3J0IHsgVG9rZW4sIFRva2VuVHlwZSB9IGZyb20gJy4vdG9rZW4nO1xyXG5kZWNsYXJlIHZhciBjb256b2xlOiBDb25zb2xlO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnNlciB7XHJcbiAgICBwcml2YXRlIGN1cnJlbnQgPSAwO1xyXG4gICAgcHJpdmF0ZSB0b2tlbnM6IFRva2VuW107XHJcblxyXG4gICAgY29uc3RydWN0b3IodG9rZW5zOiBUb2tlbltdKSB7XHJcbiAgICAgICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBhcnNlKCk6IFN0bXQuU3RtdFtdIHtcclxuICAgICAgIGNvbnN0IHN0YXRlbWVudHM6IFN0bXQuU3RtdFtdID0gW107XHJcbiAgICAgICB3aGlsZSAoIXRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICBzdGF0ZW1lbnRzLnB1c2godGhpcy5kZWNsYXJhdGlvbigpKTtcclxuICAgICAgIH1cclxuICAgICAgIHJldHVybiBzdGF0ZW1lbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWF0Y2goLi4udHlwZXM6IFRva2VuVHlwZVtdKTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChjb25zdCB0eXBlIG9mIHR5cGVzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrKHR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkdmFuY2UoKTogVG9rZW4ge1xyXG4gICAgICAgIGlmICghdGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJldmlvdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBlZWsoKTogVG9rZW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmN1cnJlbnRdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJldmlvdXMoKTogVG9rZW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmN1cnJlbnQgLSAxXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrKHR5cGU6IFRva2VuVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBlZWsoKS50eXBlID09PSB0eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZW9mKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrKFRva2VuVHlwZS5lb2YpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29uc3VtZSh0eXBlOiBUb2tlblR5cGUsIG1lc3NhZ2U6IHN0cmluZyk6IFRva2VuIHtcclxuICAgICAgICBpZiAodGhpcy5jaGVjayh0eXBlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUVycm9yKHRoaXMucHJldmlvdXMoKSwgbWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHRyYVNlbWljb2xvbigpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBtYXRjaCA9IHRoaXMubWF0Y2goVG9rZW5UeXBlLnNlbWljb2xvbik7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2soVG9rZW5UeXBlLnNlbWljb2xvbikpIHtcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuY2hlY2soVG9rZW5UeXBlLnNlbWljb2xvbikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuc2VtaWNvbG9uLCAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyc2VFcnJvcih0b2tlbjogVG9rZW4sIG1lc3NhZ2U6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgaWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5lb2YpIHtcclxuICAgICAgICAgICAgY29uem9sZS5lcnJvcihgcGFyc2UgZXJyb3IgYXQgKCR7dG9rZW4ubGluZX0pOiBhdCBlbmQgJHttZXNzYWdlfWApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnpvbGUuZXJyb3IoYFtsaW5lICgke3Rva2VuLmxpbmV9KSBwYXJzZSBlcnJvciBhdCBcIiR7dG9rZW4ubGV4ZW1lfVwiXSA9PiAke21lc3NhZ2V9YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKCdFcnJvciBwYXJzaW5nJyk7XHJcbiAgICAgICAgLy8gdW5yZWFjaGFibGUgY29kZVxyXG4gICAgICAgIHJldHVybiBuZXcgVG9rZW4oJ3BhbmljJywgJ2Vycm9yJywgJ2Vycm9yJywgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZVdhcm5pbmcobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgY29uem9sZS53YXJuKGBbbGluZSAoJHt0b2tlbi5saW5lfSkgcGFyc2Ugd2FybmluZyBhdCBcIiR7dG9rZW4ubGV4ZW1lfVwiXSA9PiAke21lc3NhZ2V9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzeW5jaHJvbml6ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuXHJcbiAgICAgICAgd2hpbGUgKCF0aGlzLmVvZigpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXZpb3VzKCkudHlwZSA9PT0gVG9rZW5UeXBlLnNlbWljb2xvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMucGVlaygpLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLmNsYXNzOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuZnVuY3Rpb246XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS52YXI6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5mb3I6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5pZjpcclxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLndoaWxlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUucHJpbnQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5yZXR1cm46XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlY2xhcmF0aW9uKCk6IFN0bXQuU3RtdCB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmNsYXNzKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xhc3NEZWNsYXJhdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5mdW5jdGlvbikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZ1bmNEZWNsYXJhdGlvbihcImZ1bmN0aW9uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS52YXIsIFRva2VuVHlwZS5sZXQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YXJEZWNsYXJhdGlvbih0aGlzLnByZXZpb3VzKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlbWVudCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgcGFyc2luZy4gRXhlY3V0aW9uIGhhcyBiZWVuIHN0b3BwZWQnKTtcclxuICAgICAgICAgICAgLy8gVE9ETzogcmVlbmFibGUgc3luY2hyb25pemVcclxuICAgICAgICAgICAgLy8gdGhpcy5zeW5jaHJvbml6ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbGFzc0RlY2xhcmF0aW9uKCk6IFN0bXQuQ2xhc3Mge1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrKFRva2VuVHlwZS5mdW5jdGlvbikpIHtcclxuICAgICAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5mdW5jdGlvbiwgJycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBuYW1lOiBUb2tlbiA9IHRoaXMuY29uc3VtZShUb2tlblR5cGUuaWRlbnRpZmllciwgYEV4cGVjdGVkIGEgY2xhc3MgbmFtZWApO1xyXG4gICAgICAgIGxldCBwYXJlbnQ6IFRva2VuID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuZXh0ZW5kcykpIHtcclxuICAgICAgICAgICAgcGFyZW50ICA9IHRoaXMuY29uc3VtZShUb2tlblR5cGUuaWRlbnRpZmllciwgYEV4cGVjdGVkIGEgcGFyZW50IG5hbWVgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5sZWZ0QnJhY2UsIGBFeHBlY3RlZCBcIntcIiBhZnRlciBjbGFzcyBuYW1lYCk7XHJcbiAgICAgICAgY29uc3QgbWV0aG9kczogU3RtdC5GdW5jW10gPSBbXTtcclxuXHJcbiAgICAgICAgd2hpbGUgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5yaWdodEJyYWNlKSAmJiAhdGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGVjayhUb2tlblR5cGUuZnVuY3Rpb24pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLmZ1bmN0aW9uLCAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWV0aG9kcy5wdXNoKHRoaXMuZnVuY0RlY2xhcmF0aW9uKFwibWV0aG9kXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUucmlnaHRCcmFjZSwgYEV4cGVjdGVkIFwifVwiIGFmdGVyIGNsYXNzIFwiJHtuYW1lLmxpdGVyYWx9XCIgbWV0aG9kc2ApO1xyXG4gICAgICAgIGlmICh0aGlzLmV4dHJhU2VtaWNvbG9uKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJzZVdhcm5pbmcoYFVubmVjZXNzYXJ5IHNlbWljb2xvbiBhZnRlciBjbGFzcyAke25hbWUubGV4ZW1lfSBkZWNsYXJhdGlvbmApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFN0bXQuQ2xhc3MobmFtZSwgcGFyZW50LCBtZXRob2RzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZ1bmNEZWNsYXJhdGlvbihraW5kOiBzdHJpbmcpOiBTdG10LkZ1bmMge1xyXG4gICAgICAgIGNvbnN0IG5hbWU6IFRva2VuID0gdGhpcy5jb25zdW1lKFRva2VuVHlwZS5pZGVudGlmaWVyLCBgRXhwZWN0ZWQgYSAke2tpbmR9IG5hbWVgKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5mdW5jUGFyYW1zQm9keShuYW1lLCBraW5kKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZ1bmNQYXJhbXMoKTogVG9rZW5bXSB7XHJcbiAgICAgICAgY29uc3QgcGFyYW1zOiBUb2tlbltdID0gW107XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5yaWdodFBhcmVuKSkge1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmxlbmd0aCA+PSAyNTUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlRXJyb3IodGhpcy5wZWVrKCksIGBQYXJhbWV0ZXIgY291bnQgZXhjZWVkcyAyNTVgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKHRoaXMuY29uc3VtZShUb2tlblR5cGUuaWRlbnRpZmllciwgYEV4cGVjdGVkIGEgcGFyYW1ldGVyIG5hbWVgKSk7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmNvbW1hKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUucmlnaHRQYXJlbiwgYEV4cGVjdCBcIilcIiBhZnRlciBwYXJhbWV0ZXJzYCk7XHJcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZ1bmNQYXJhbXNCb2R5KG5hbWU6IFRva2VuLCBraW5kOiBzdHJpbmcpOiBTdG10LkZ1bmMge1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUubGVmdFBhcmVuLCBgRXhwZWN0ZWQgXCIoXCIgYWZ0ZXIgJHtraW5kfWApO1xyXG4gICAgICAgIGNvbnN0IHBhcmFtczogVG9rZW5bXSA9IHRoaXMuZnVuY1BhcmFtcygpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUubGVmdEJyYWNlKSkge1xyXG4gICAgICAgICAgICBjb25zdCBib2R5OiBTdG10LlN0bXRbXSA9IHRoaXMuYmxvY2soKTtcclxuICAgICAgICAgICAgaWYgKG5hbWUudHlwZSAhPT0gVG9rZW5UeXBlLmxhbWJkYSAmJiB0aGlzLmV4dHJhU2VtaWNvbG9uKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyc2VXYXJuaW5nKGBVbm5lY2Vzc2FyeSBzZW1pY29sb24gYWZ0ZXIgZnVuY3Rpb24gJHtuYW1lLmxleGVtZX0gZGVjbGFyYXRpb25gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFN0bXQuRnVuYyhuYW1lLCBwYXJhbXMsIGJvZHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmFycm93KSkge1xyXG4gICAgICAgICAgICBjb25zdCBib2R5OiBTdG10LlN0bXRbXSA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgYXJyb3c6IEV4cHIuRXhwcjtcclxuICAgICAgICAgICAgY29uc3Qga2V5d29yZDogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jaGVjayhUb2tlblR5cGUuc2VtaWNvbG9uKSkge1xyXG4gICAgICAgICAgICAgICAgYXJyb3cgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm1hdGNoKFRva2VuVHlwZS5zZW1pY29sb24pO1xyXG4gICAgICAgICAgICBib2R5LnB1c2gobmV3IFN0bXQuUmV0dXJuKGtleXdvcmQsIGFycm93KSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3RtdC5GdW5jKG5hbWUsIHBhcmFtcywgYm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUubGVmdEJyYWNlLCBgRXhwZWN0IFwie1wiIGJlZm9yZSAke2tpbmR9IGJvZHlgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHZhckRlY2xhcmF0aW9uKHR5cGU6IFRva2VuKTogU3RtdC5TdG10IHtcclxuICAgICAgICBjb25zdCBuYW1lOiBUb2tlbiA9IHRoaXMuY29uc3VtZShUb2tlblR5cGUuaWRlbnRpZmllciwgYEV4cGVjdGVkIGEgdmFyaWFibGUgbmFtZWApO1xyXG4gICAgICAgIGxldCBpbml0aWFsaXplcjogRXhwci5FeHByICA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmVxdWFsKSkge1xyXG4gICAgICAgICAgICBpbml0aWFsaXplciA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLnNlbWljb2xvbiwgYEV4cGVjdGVkIHNlbWljb2xvbiBcIjtcIiBhZnRlciBhIHZhbHVlLmApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFN0bXQuVmFyKG5hbWUsIHR5cGUsIGluaXRpYWxpemVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRlbWVudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuaWYpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlmU3RhdGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5wcmludCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJpbnRTdGF0ZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmRvKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kb1doaWxlU3RhdGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS53aGlsZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hpbGVTdGF0ZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmZvcikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9yU3RhdGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5sZWZ0QnJhY2UpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3RtdC5CbG9jayh0aGlzLmJsb2NrKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUucmV0dXJuKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXR1cm5TdGF0ZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvblN0YXRlbWVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaWZTdGF0ZW1lbnQoKTogU3RtdC5TdG10IHtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLmxlZnRQYXJlbiwgYEV4cGVjdGVkIFwiKFwiIGFmdGVyIGFuIGlmYCk7XHJcbiAgICAgICAgY29uc3QgY29uZGl0aW9uOiBFeHByLkV4cHIgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLnJpZ2h0UGFyZW4sIGBFeHBlY3RlZCBcIilcIiBhZnRlciBpZiBjb25kaXRpb25gKTtcclxuICAgICAgICBjb25zdCB0aGVuU3RtdDogU3RtdC5TdG10ID0gdGhpcy5zdGF0ZW1lbnQoKTtcclxuICAgICAgICBsZXQgZWxzZVN0bXQ6IFN0bXQuU3RtdCA9ICBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5lbHNlKSkge1xyXG4gICAgICAgICAgICBlbHNlU3RtdCA9IHRoaXMuc3RhdGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5JZihjb25kaXRpb24sIHRoZW5TdG10LCBlbHNlU3RtdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB3aGlsZVN0YXRlbWVudCgpOiBTdG10LlN0bXQge1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUubGVmdFBhcmVuLCBgRXhwZWN0ZWQgXCIoXCIgYWZ0ZXIgYSB3aGlsZSBzdGF0ZW1lbnRgKTtcclxuICAgICAgICBjb25zdCBjb25kaXRpb246IEV4cHIuRXhwciA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUucmlnaHRQYXJlbiwgYEV4cGVjdGVkIFwiKVwiIGFmdGVyIHdoaWxlIGNvbmRpdGlvbmApO1xyXG4gICAgICAgIGNvbnN0IGxvb3A6IFN0bXQuU3RtdCA9IHRoaXMuc3RhdGVtZW50KCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdG10LldoaWxlKGNvbmRpdGlvbiwgbG9vcCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmb3JTdGF0ZW1lbnQoKTogU3RtdC5TdG10IHtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLmxlZnRQYXJlbiwgYEV4cGVjdGVkIFwiKFwiIGFmdGVyIGEgZm9yIHN0YXRlbWVudGApO1xyXG5cclxuICAgICAgICBsZXQgaW5pdGlhbGl6ZXI6IFN0bXQuU3RtdDtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuc2VtaWNvbG9uKSkge1xyXG4gICAgICAgICAgICBpbml0aWFsaXplciA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS52YXIsIFRva2VuVHlwZS5sZXQpKSB7XHJcbiAgICAgICAgICAgIGluaXRpYWxpemVyID0gdGhpcy52YXJEZWNsYXJhdGlvbih0aGlzLnByZXZpb3VzKCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGluaXRpYWxpemVyID0gdGhpcy5leHByZXNzaW9uU3RhdGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjb25kaXRpb246IEV4cHIuRXhwcjtcclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLnNlbWljb2xvbikpIHtcclxuICAgICAgICAgICAgY29uZGl0aW9uID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuc2VtaWNvbG9uLCBgRXhwZWN0ZWQgXCI7XCIgYWZ0ZXIgbG9vcCBjb25kaXRpb25gKTtcclxuICAgICAgICBsZXQgaW5jcmVtZW50OiBFeHByLkV4cHI7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5yaWdodFBhcmVuKSkge1xyXG4gICAgICAgICAgICBpbmNyZW1lbnQgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5yaWdodFBhcmVuLCBgRXhwZWN0ZWQgXCI7XCIgYWZ0ZXIgbG9vcCBjb25kaXRpb25gKTtcclxuICAgICAgICBsZXQgYm9keTogU3RtdC5TdG10ID0gdGhpcy5zdGF0ZW1lbnQoKTtcclxuICAgICAgICBpZiAoaW5jcmVtZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGJvZHkgPSBuZXcgU3RtdC5CbG9jayhbXHJcbiAgICAgICAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgICAgICAgbmV3IFN0bXQuRXhwcmVzc2lvbihpbmNyZW1lbnQpXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZGl0aW9uID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbmRpdGlvbiA9IG5ldyBFeHByLkxpdGVyYWwodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvZHkgPSBuZXcgU3RtdC5XaGlsZShjb25kaXRpb24sIGJvZHkpO1xyXG4gICAgICAgIGlmIChpbml0aWFsaXplciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBib2R5ID0gbmV3IFN0bXQuQmxvY2soW1xyXG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZXIsXHJcbiAgICAgICAgICAgICAgICBib2R5XHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYm9keTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRvV2hpbGVTdGF0ZW1lbnQoKTogU3RtdC5TdG10IHtcclxuICAgICAgICBjb25zdCBsb29wOiBTdG10LlN0bXQgPSB0aGlzLnN0YXRlbWVudCgpO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUud2hpbGUsIGBFeHBlY3RlZCBjb25kaXRpb24gYWZ0ZXIgZG8gc3RhdGVtZW50YCk7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5sZWZ0UGFyZW4sIGBFeHBlY3RlZCBcIihcIiBhZnRlciBhIHdoaWxlYCk7XHJcbiAgICAgICAgY29uc3QgY29uZGl0aW9uOiBFeHByLkV4cHIgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLnJpZ2h0UGFyZW4sIGBFeHBlY3RlZCBcIilcIiBhZnRlciB3aGlsZSBjb25kaXRpb25gKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLnNlbWljb2xvbiwgYEV4cGVjdGVkIHNlbWljb2xvbiBcIjtcIiBhZnRlciBhIGRvIHdoaWxlIGNvbmRpdGlvbmApO1xyXG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5Eb1doaWxlKGxvb3AsIGNvbmRpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcmludFN0YXRlbWVudCgpOiBTdG10LlN0bXQge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlOiBFeHByLkV4cHIgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLnNlbWljb2xvbiwgYEV4cGVjdGVkIHNlbWljb2xvbiBcIjtcIiBhZnRlciBleHByZXNzaW9uLmApO1xyXG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5QcmludCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXR1cm5TdGF0ZW1lbnQoKTogU3RtdC5TdG10IHtcclxuICAgICAgICBjb25zdCBrZXl3b3JkOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICBsZXQgdmFsdWUgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLnNlbWljb2xvbikpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuc2VtaWNvbG9uLCBgRXhlY3RlZCBcIjtcIiBhZnRlciByZXR1cm4gc3RhdGVtZW50YCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdG10LlJldHVybihrZXl3b3JkLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBibG9jaygpOiBTdG10LlN0bXRbXSB7XHJcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50czogU3RtdC5TdG10W10gPSBbXTtcclxuICAgICAgICB3aGlsZSAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLnJpZ2h0QnJhY2UpICYmICF0aGlzLmVvZigpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlbWVudHMucHVzaCh0aGlzLmRlY2xhcmF0aW9uKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLnJpZ2h0QnJhY2UsIGBFeHBlY3RlZCBjbG9zaW5nIGJsb2NrIFwifVwiYCk7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlbWVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHByZXNzaW9uU3RhdGVtZW50KCk6IFN0bXQuU3RtdCB7XHJcbiAgICAgICAgY29uc3QgZXhwcmVzc2lvbjogRXhwci5FeHByID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5zZW1pY29sb24sIGBFeHBlY3RlZCBzZW1pY29sb24gXCI7XCIgYWZ0ZXIgJHtleHByZXNzaW9ufSBleHByZXNzaW9uYCk7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLnNlbWljb2xvbikpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGNvbnpvbGUud2FybihgW2xpbmUgKCR7dG9rZW4ubGluZX0pIHBhcnNlIHdhcm5pbmcgYXQgXCIke3Rva2VuLmxleGVtZX1cIl0gPT4gdW5uZWNlc3Nhcnkgc2VtaWNvbG9uIG9yIGVtcHR5IHN0YXRlbWVudGApO1xyXG4gICAgICAgICAgICAvLyBjb25zdW1lIGFsbCBzZW1pY29sb25zXHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuc2VtaWNvbG9uKSl7IH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5FeHByZXNzaW9uKGV4cHJlc3Npb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXhwcmVzc2lvbigpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFzc2lnbm1lbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzc2lnbm1lbnQoKTogRXhwci5FeHByIHtcclxuICAgICAgICBjb25zdCBleHByOiBFeHByLkV4cHIgPSB0aGlzLnRlcm5hcnkoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmVxdWFsLCBUb2tlblR5cGUucGx1c0VxdWFsLFxyXG4gICAgICAgICAgICBUb2tlblR5cGUubWludXNFcXVhbCwgVG9rZW5UeXBlLnN0YXJFcXVhbCwgVG9rZW5UeXBlLnNsYXNoRXF1YWwpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgbGV0IHZhbHVlOiBFeHByLkV4cHIgPSB0aGlzLmFzc2lnbm1lbnQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChleHByIGluc3RhbmNlb2YgRXhwci5WYXJpYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZTogVG9rZW4gPSBleHByLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBpZiAob3BlcmF0b3IudHlwZSAhPT0gVG9rZW5UeXBlLmVxdWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRXhwci5CaW5hcnkobmV3IEV4cHIuVmFyaWFibGUobmFtZSksIG9wZXJhdG9yLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuQXNzaWduKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChleHByIGluc3RhbmNlb2YgRXhwci5HZXQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvcGVyYXRvci50eXBlICE9PSBUb2tlblR5cGUuZXF1YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG5ldyBFeHByLkJpbmFyeShuZXcgRXhwci5HZXQoZXhwci5lbnRpdHksIGV4cHIua2V5KSwgb3BlcmF0b3IsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5TZXQoZXhwci5lbnRpdHksIGV4cHIua2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucGFyc2VFcnJvcihvcGVyYXRvciwgYEludmFsaWQgbC12YWx1ZSwgaXMgbm90IGFuIGFzc2lnbmluZyB0YXJnZXQuYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRlcm5hcnkoKTogRXhwci5FeHByIHtcclxuICAgICAgICBjb25zdCBleHByID0gdGhpcy5sb2dpY2FsT3IoKTtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUucXVlc3Rpb24pKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoZW5FeHByOiBFeHByLkV4cHIgPSB0aGlzLnRlcm5hcnkoKTtcclxuICAgICAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5jb2xvbiwgYEV4cGVjdGVkIFwiOlwiIGFmdGVyIHRlcm5hcnkgPyBleHByZXNzaW9uYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsc2VFeHByOiBFeHByLkV4cHIgPSB0aGlzLnRlcm5hcnkoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlRlcm5hcnkoZXhwciwgdGhlbkV4cHIsIGVsc2VFeHByKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2dpY2FsT3IoKTogRXhwci5FeHByIHtcclxuICAgICAgICBsZXQgZXhwciA9IHRoaXMubG9naWNhbEFuZCgpO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5vcikpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3I6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBjb25zdCByaWdodDogRXhwci5FeHByID0gdGhpcy5sb2dpY2FsQW5kKCk7XHJcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5Mb2dpY2FsKGV4cHIsIG9wZXJhdG9yLCByaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBleHByO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9naWNhbEFuZCgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGxldCBleHByID0gdGhpcy5lcXVhbGl0eSgpO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5hbmQpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMuZXF1YWxpdHkoKTtcclxuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkxvZ2ljYWwoZXhwciwgb3BlcmF0b3IsIHJpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlcXVhbGl0eSgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGxldCBleHByICA9IHRoaXMuY29tcGFyaXNvbigpO1xyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChcclxuICAgICAgICAgICAgVG9rZW5UeXBlLmJhbmdFcXVhbCwgVG9rZW5UeXBlLmVxdWFsRXF1YWwsXHJcbiAgICAgICAgICAgIFRva2VuVHlwZS5iYW5nRXF1YWxFcXVhbCwgVG9rZW5UeXBlLmVxdWFsRXF1YWxFcXVhbClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3I6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBjb25zdCByaWdodDogRXhwci5FeHByID0gdGhpcy5jb21wYXJpc29uKCk7XHJcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5CaW5hcnkoZXhwciwgb3BlcmF0b3IsIHJpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBleHByO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29tcGFyaXNvbigpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGxldCBleHByOiBFeHByLkV4cHIgPSB0aGlzLmFkZGl0aW9uKCk7XHJcblxyXG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5ncmVhdGVyLCBUb2tlblR5cGUuZ3JlYXRlckVxdWFsLCBUb2tlblR5cGUubGVzcywgVG9rZW5UeXBlLmxlc3NFcXVhbCkpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3I6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBjb25zdCByaWdodDogRXhwci5FeHByID0gdGhpcy5hZGRpdGlvbigpO1xyXG4gICAgICAgICAgICBleHByID0gbmV3IEV4cHIuQmluYXJ5KGV4cHIsIG9wZXJhdG9yLCByaWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZGl0aW9uKCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgbGV0IGV4cHI6IEV4cHIuRXhwciA9IHRoaXMubW9kdWx1cygpO1xyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUubWludXMsIFRva2VuVHlwZS5wbHVzKSkge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0OiBFeHByLkV4cHIgPSB0aGlzLm1vZHVsdXMoKTtcclxuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkJpbmFyeShleHByLCBvcGVyYXRvciwgcmlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb2R1bHVzKCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgbGV0IGV4cHI6IEV4cHIuRXhwciA9IHRoaXMubXVsdGlwbGljYXRpb24oKTtcclxuXHJcbiAgICAgICAgd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLnBlcmNlbnQpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMubXVsdGlwbGljYXRpb24oKTtcclxuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkJpbmFyeShleHByLCBvcGVyYXRvciwgcmlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtdWx0aXBsaWNhdGlvbigpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGxldCBleHByOiBFeHByLkV4cHIgPSB0aGlzLnVuYXJ5KCk7XHJcblxyXG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5zbGFzaCwgVG9rZW5UeXBlLnN0YXIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMudW5hcnkoKTtcclxuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkJpbmFyeShleHByLCBvcGVyYXRvciwgcmlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1bmFyeSgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5taW51cywgVG9rZW5UeXBlLmJhbmcsIFRva2VuVHlwZS5kb2xsYXIsIFRva2VuVHlwZS5wbHVzUGx1cywgVG9rZW5UeXBlLm1pbnVzTWludXMpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMudW5hcnkoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlVuYXJ5KG9wZXJhdG9yLCByaWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5uZXdLZXl3b3JkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBuZXdLZXl3b3JkKCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLm5ldykpIHtcclxuICAgICAgICAgICAgY29uc3QgY29uc3RydWN0OiBFeHByLkV4cHIgPSB0aGlzLmNhbGwoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLk5ldyhjb25zdHJ1Y3QpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FsbCgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGxldCBleHByOiBFeHByLkV4cHIgPSB0aGlzLnByaW1hcnkoKTtcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUubGVmdFBhcmVuKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNhbGxlZSA9IGV4cHI7XHJcbiAgICAgICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJnczogRXhwci5FeHByW10gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLnJpZ2h0UGFyZW4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmNvbW1hKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVuOiBUb2tlbiA9IHRoaXMuY29uc3VtZShUb2tlblR5cGUucmlnaHRQYXJlbiwgYEV4cGVjdGVkIFwiKVwiIGFmdGVyIGFyZ3VtZW50c2ApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxlZSA9IG5ldyBFeHByLkNhbGwoY2FsbGVlLCBwYXJlbiwgYXJncywgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9IHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5sZWZ0UGFyZW4pKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsZWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuZG90KSkge1xyXG4gICAgICAgICAgICAgICAgZXhwciA9IHRoaXMuZG90R2V0KGV4cHIpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmxlZnRCcmFja2V0KSkge1xyXG4gICAgICAgICAgICAgICAgZXhwciA9IHRoaXMuYnJhY2tldEdldChleHByKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRvdEdldChleHByOiBFeHByLkV4cHIpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGNvbnN0IG5hbWU6IFRva2VuID0gdGhpcy5jb25zdW1lKFRva2VuVHlwZS5pZGVudGlmaWVyLCBgRXhwZWN0IHByb3BlcnR5IG5hbWUgYWZ0ZXIgJy4nYCk7XHJcbiAgICAgICAgY29uc3Qga2V5OiBFeHByLktleSA9IG5ldyBFeHByLktleShuYW1lKTtcclxuICAgICAgICByZXR1cm4gbmV3IEV4cHIuR2V0KGV4cHIsIGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBicmFja2V0R2V0KGV4cHI6IEV4cHIuRXhwcik6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgbGV0IGtleTogRXhwci5FeHByID0gbnVsbDtcclxuICAgICAgICBsZXQgZW5kOiBFeHByLkV4cHIgPSBudWxsO1xyXG4gICAgICAgIGxldCBzdGVwOiBFeHByLkV4cHIgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLmNvbG9uKSkge1xyXG4gICAgICAgICAgICBrZXkgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmNvbG9uKSAmJiAhdGhpcy5jaGVjayhUb2tlblR5cGUuY29sb24pKSB7XHJcbiAgICAgICAgICAgIGVuZCA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuY29sb24pICYmICF0aGlzLmNoZWNrKFRva2VuVHlwZS5yaWdodEJyYWNrZXQpKSB7XHJcbiAgICAgICAgICAgIHN0ZXAgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5yaWdodEJyYWNrZXQsIGBFeHBlY3RlZCBcIl1cIiBhZnRlciBwcm9wZXJ0eSBuYW1lIGV4cHJlc3Npb25gKTtcclxuICAgICAgICBpZiAoIWtleSB8fCBlbmQgfHwgc3RlcCkge1xyXG4gICAgICAgICAgICBjb25zdCByYW5nZSA9IG5ldyBFeHByLlJhbmdlKGtleSwgZW5kLCBzdGVwKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkdldChleHByLCByYW5nZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgRXhwci5HZXQoZXhwciwga2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByaW1hcnkoKTogRXhwci5FeHByIHtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuZmFsc2UpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5MaXRlcmFsKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLnRydWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5MaXRlcmFsKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUubnVsbCkpIHtcclxuICAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5MaXRlcmFsKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUubnVtYmVyKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGl0ZXJhbCh0aGlzLnByZXZpb3VzKCkubGl0ZXJhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5zdHJpbmcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5adHJpbmcodGhpcy5wcmV2aW91cygpLmxpdGVyYWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUucmVnZXgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5SZWdFeCh0aGlzLnByZXZpb3VzKCkubGl0ZXJhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5pZGVudGlmaWVyKSkge1xyXG4gICAgICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gIHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLnBsdXNQbHVzKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlBvc3RmaXgoaWRlbnRpZmllciwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLm1pbnVzTWludXMpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuUG9zdGZpeChpZGVudGlmaWVyLCAtMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlZhcmlhYmxlKGlkZW50aWZpZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUubGVmdFBhcmVuKSkge1xyXG4gICAgICAgICAgICBjb25zdCBleHByOiBFeHByLkV4cHIgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5yaWdodFBhcmVuLCBgRXhwZWN0ZWQgXCIpXCIgYWZ0ZXIgZXhwcmVzc2lvbmApO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuR3JvdXBpbmcoZXhwcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5sZWZ0QnJhY2UpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVudGl0eSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuZnVuY3Rpb24pKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuOiBUb2tlbiA9IG5ldyBUb2tlbignbGFtYmRhJywgJ2xhbWJkYScsICdsYW1iZGEnLCB0aGlzLnByZXZpb3VzKCkubGluZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhbWJkYTogU3RtdC5GdW5jID0gdGhpcy5mdW5jUGFyYW1zQm9keSh0b2tlbiwgXCJsYW1iZGFcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5MYW1iZGEobGFtYmRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLnN1cGVyKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdXBlckNhbGwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmxlZnRCcmFja2V0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hcnJheSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhyb3cgdGhpcy5wYXJzZUVycm9yKHRoaXMucGVlaygpLCBgRXhwZWN0ZWQgZXhwcmVzc2lvbmApO1xyXG4gICAgICAgIC8vIHVucmVhY2hlYWJsZSBjb2RlXHJcbiAgICAgICAgcmV0dXJuIG5ldyBFeHByLkxpdGVyYWwobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVudGl0eSgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5yaWdodEJyYWNlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuRW50aXR5KFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcHJvcGVydGllczogRXhwci5TZXRbXSA9IFtdO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLnN0cmluZywgVG9rZW5UeXBlLmlkZW50aWZpZXIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXk6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5jb2xvbiwgYEV4cGVjdGVkIFwiOlwiIGNvbG9uIGFmdGVyIG1lbWJlcmApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXMucHVzaChuZXcgRXhwci5TZXQobnVsbCwgbmV3IEV4cHIuS2V5KGtleSksIHZhbHVlKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnNlRXJyb3IodGhpcy5wZWVrKCksIGBTdHJpbmcgb3IgaWRlbnRpZmllciBleHBlY3RlZCBhZnRlciBPYmplY3Qge2ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuY29tbWEpKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLnJpZ2h0QnJhY2UsIGBFeHBlY3RlZCBcIn1cIiBhZnRlciBvYmplY3QgbGl0ZXJhbGApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IEV4cHIuRW50aXR5KHByb3BlcnRpZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXJyYXkoKTogRXhwci5FeHByIHtcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUucmlnaHRCcmFja2V0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGlzdChbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgdmFsdWVzLnB1c2godGhpcy5leHByZXNzaW9uKCkpO1xyXG4gICAgICAgIH0gd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmNvbW1hKSk7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5yaWdodEJyYWNrZXQsIGBFeHBlY3RlZCBcIl1cIiBhZnRlciBhcnJheSBkZWNsYXJhdGlvbmApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGlzdCh2YWx1ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3VwZXJDYWxsKCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgY29uc3QgaW5kZXhlczogVG9rZW5bXSA9IFtdO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5kb3QpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5jb25zdW1lKFRva2VuVHlwZS5pZGVudGlmaWVyLCBgRXhwZWN0ZWQgbWV0aG9kIG5hbWUgYWZ0ZXIgc3VwZXJgKTtcclxuICAgICAgICAgICAgaW5kZXhlcy5wdXNoKHRva2VuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGFyZ3M6IEV4cHIuRXhwcltdID0gW107XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5sZWZ0UGFyZW4sIGBFeHBlY3RlZCBmdW5jdGlvbiBwYXJhbWV0ZXJzIG9yIG1ldGhvZCBuYW1lIGFmdGVyIHN1cGVyYCk7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLnJpZ2h0UGFyZW4pKSB7XHJcbiAgICAgICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZXhwcmVzc2lvbigpKTtcclxuICAgICAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmNvbW1hKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5yaWdodFBhcmVuLCBgRXhwZWN0ZWQgXCIpXCIgYWZ0ZXIgc3VwZXIgYXJndW1lbnRzYCk7XHJcbiAgICAgICAgfSB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUubGVmdFBhcmVuKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgRXhwci5TdXBlcihpbmRleGVzLCBhcmdzKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gJy4vY29uc29sZSc7XHJcbmRlY2xhcmUgdmFyIGNvbnpvbGU6IENvbnNvbGU7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvdG90eXBlIHtcclxuXHJcbiAgICBwdWJsaWMgdmFsdWVzOiBNYXA8c3RyaW5nLCBhbnk+O1xyXG4gICAgcHJpdmF0ZSBwcm90b3R5cGU6IFByb3RvdHlwZTtcclxuICAgIHByaXZhdGUgb3duZXI6IG9iamVjdDtcclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlczogTWFwPHN0cmluZywgYW55PiwgcGFyZW50OiBQcm90b3R5cGUgPSBudWxsLCBvd25lcjogb2JqZWN0KSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXMgPSBuZXcgTWFwKHZhbHVlcyk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUgPSBwYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5vd25lciA9IG93bmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXMuc2V0KG5hbWUsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZXMuaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzLmdldChrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wcm90b3R5cGUgIT09IG51bGwgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3RvdHlwZS5nZXQoa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uem9sZS5lcnJvcihgW2VudGl0eSBlcnJvcl0gPT4gJHtrZXl9IGlzIG5vdCBkZWZpbmVkIGluICR7dGhpcy5vd25lcn1gKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gJy4vY29uc29sZSc7XHJcbmRlY2xhcmUgdmFyIGNvbnpvbGU6IENvbnNvbGU7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5kZXhSYW5nZSB7XHJcbiAgICBwdWJsaWMgc3RhcnQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBlbmQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBzdGVwOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIsIHN0ZXA6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcclxuICAgICAgICB0aGlzLmVuZCA9IGVuZDtcclxuICAgICAgICB0aGlzLnN0ZXAgPSBzdGVwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbm9ybWFsaXplKGxlbmd0aDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RlcCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0ZXAgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5lbmQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmQgPSB0aGlzLnN0ZXAgPiAwID8gbGVuZ3RoIC0gMSA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXJ0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQgPSB0aGlzLnN0ZXAgPiAwID8gMCA6IGxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpdGVyYXRlKGxlbmd0aDogbnVtYmVyLCBjYWxsYmFjazogKGluZGV4OiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vcm1hbGl6ZShsZW5ndGgpO1xyXG4gICAgICAgIGlmICh0aGlzLnN0ZXAgPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnN0YXJ0OyBpIDw9IHRoaXMuZW5kOyBpICs9IHRoaXMuc3RlcCkge1xyXG4gICAgICAgICAgICAgICBjYWxsYmFjayhpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGVwIDwgMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5zdGFydDsgaSA+PSB0aGlzLmVuZDsgaSArPSB0aGlzLnN0ZXApIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uem9sZS53YXJuKGBbcmFuZ2UgZXJyb3JdID0+IDAgaXMgbm90IGEgdmFsaWQgc3RlcGApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBQcm90b3R5cGVFbnRpdHkgfSBmcm9tICcuL2VudGl0eSc7XHJcbmltcG9ydCAqIGFzIFJ1bnRpbWUgZnJvbSAnLi9ydW50aW1lJztcclxuaW1wb3J0IHsgSW50ZXJwcmV0ZXIgfSBmcm9tICcuL2ludGVycHJldGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWdFeEVudGl0eSBleHRlbmRzIFByb3RvdHlwZUVudGl0eSB7XHJcbiAgICBwcml2YXRlIHJlZ2V4OiBSZWdFeHA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocmVnZXg6IFJlZ0V4cCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5yZWdleCA9IHJlZ2V4O1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ2V4ZWMnLCBSdW50aW1lLnJlZ2V4RXhlY01ldGhvZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgndGVzdCcsIFJ1bnRpbWUucmVnZXhUZXN0TWV0aG9kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXJpdHkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FsbChpbnRlcnByZXRlcjogSW50ZXJwcmV0ZXIsIHRoaXo6IGFueSwgYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWdleC50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgUmV0dXJuIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgcHVibGljIHZhbHVlOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFycmF5RW50aXR5IH0gZnJvbSBcIi4vYXJyYXlcIjtcclxuaW1wb3J0IHsgSW50ZXJuYWxFbnRpdHksIEZ1bmN0aW9uRW50aXR5IH0gZnJvbSBcIi4vZW50aXR5XCI7XHJcbmltcG9ydCB7IFByb3RvdHlwZSB9IGZyb20gXCIuL3Byb3RvdHlwZVwiO1xyXG5pbXBvcnQgeyBTdHJpbmdFbnRpdHkgfSBmcm9tIFwiLi9zdHJpbmdcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eSh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBmdW5jdGlvbj4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IDE7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiB0aGl6LnByb3BlcnRpZXMuaGFzKGFyZ3NbMF0pO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGhQcm9wZXJ0eSh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBmdW5jdGlvbj4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IDA7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiB0aGl6LnByb3BlcnRpZXMuc2l6ZTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW52b2tlTWV0aG9kKHRoYXQ6IGFueSk6IEludGVybmFsRW50aXR5IHtcclxuICAgIGNvbnN0IGZ1bmMgPSBuZXcgSW50ZXJuYWxFbnRpdHkoKTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPGludGVybmFsIGZ1bmN0aW9uPic7XHJcbiAgICBmdW5jLmFyaXR5ID0gKCkgPT4gLTE7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiB0aGl6LmNhbGwoaW50LCBhcmdzWzBdLCBhcmdzLnNsaWNlKDEpKTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzdXBlckNhbGwodGhhdDogYW55LCBpbnN0YW5jZTogYW55KTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IHRoYXQucGFyZW50LmFyaXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxuYXRpdmUgc3VwZXIgZnVuY3Rpb24+JztcclxuICAgIGZ1bmMuY2FsbCA9IChpbnQsIHRoaXosIGFyZ3MpID0+XHJcbiAgICAgICAgdGhhdC5wYXJlbnQuY2FsbChpbnQsIGluc3RhbmNlLCBhcmdzKTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VNZXRob2QodGhhdDogYW55KTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgLyoqIG1lcmdlKFBhcmVudCwgb3ZlcnJpZGU9ZmFsc2UpICovXHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiB7XHJcbiAgICAgICAgdGhhdC5wcm9wZXJ0aWVzID0gYXJnc1sxXSA/XHJcbiAgICAgICAgICAgIG5ldyBNYXAoWy4uLnRoYXQucHJvcGVydGllcywgLi4uYXJnc1swXS5wcm9wZXJ0aWVzXSkgOlxyXG4gICAgICAgICAgICBuZXcgTWFwKFsuLi5hcmdzWzBdLnByb3BlcnRpZXMsIC4uLnRoYXQucHJvcGVydGllc10pO1xyXG4gICAgfTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPGludGVybmFsIG1lcmdlIGZ1bmN0aW9uPic7XHJcbiAgICBmdW5jLmFyaXR5ID0gKCkgPT4gLTE7XHJcbiAgICByZXR1cm4gZnVuYztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZE1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvdG8gPSBuZXcgUHJvdG90eXBlKFxyXG4gICAgICAgICAgICB0aGF0LnByb3BlcnRpZXMsXHJcbiAgICAgICAgICAgIG5ldyBQcm90b3R5cGUoYXJnc1swXS5wcm9wZXJ0aWVzLCBhcmdzWzBdLnByb3RvdHlwZSwgdGhpeiksXHJcbiAgICAgICAgICAgIHRoaXpcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoYXQucHJvdG90eXBlID0gcHJvdG87XHJcbiAgICB9O1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8aW50ZXJuYWwgbWVyZ2UgZnVuY3Rpb24+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAtMTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5oZXJpdE1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiB7XHJcbiAgICAgICAgdGhhdC5wcm90b3R5cGUudmFsdWVzID0gbmV3IE1hcChbLi4uYXJnc1swXS5wcm9wZXJ0aWVzLCAuLi50aGF0LnByb3RvdHlwZS52YWx1ZXNdKTtcclxuICAgIH07XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBpbmhlcml0YW5jZSBmdW5jdGlvbj4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IDE7XHJcbiAgICByZXR1cm4gZnVuYztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVjaG9GdW5jdGlvbigpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLmFyaXR5ID0gKCkgPT4gMTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPG5hdGl2ZSBmdW5jdGlvbj4nO1xyXG4gICAgZnVuYy5jYWxsID0gKGludGVycHJldGVyLCB0aGl6LCBhcmdzKSA9PiBjb25zb2xlLmxvZyhhcmdzWzBdKTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZEZ1bmN0aW9uKCk6IEludGVybmFsRW50aXR5IHtcclxuICAgIGNvbnN0IGZ1bmMgPSBuZXcgSW50ZXJuYWxFbnRpdHkoKTtcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAwO1xyXG4gICAgZnVuYy5jYWxsID0gKCkgPT4gTWF0aC5yYW5kb20oKTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPG5hdGl2ZSBmdW5jdGlvbj4nO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJheUxlbmd0aE1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBmdW5jdGlvbj4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IDA7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiB0aGl6LnZhbHVlcy5sZW5ndGg7XHJcbiAgICByZXR1cm4gZnVuYztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5Sm9pbk1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBmdW5jdGlvbj4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IDE7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiBuZXcgU3RyaW5nRW50aXR5KHRoaXoudmFsdWVzLmpvaW4oYXJnc1swXSkpO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJheVB1c2hNZXRob2QodGhhdDogYW55KTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8aW50ZXJuYWwgZnVuY3Rpb24+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAxO1xyXG4gICAgZnVuYy5jYWxsID0gKGludCwgdGhpeiwgYXJncykgPT4gdGhpei52YWx1ZXMucHVzaChhcmdzWzBdKTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlQb3BNZXRob2QodGhhdDogYW55KTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8aW50ZXJuYWwgZnVuY3Rpb24+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAwO1xyXG4gICAgZnVuYy5jYWxsID0gKGludCwgdGhpeiwgYXJncykgPT4gdGhpei52YWx1ZXMucG9wKGFyZ3NbMF0pO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJheUVhY2hNZXRob2QodGhhdDogYW55KTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8aW50ZXJuYWwgZnVuY3Rpb24+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAtMTtcclxuICAgIGZ1bmMuY2FsbCA9IChpbnQsIHRoaXosIGFyZ3MpID0+IHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXoudmFsdWVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGFyZ3NbMF0uY2FsbChpbnQsIHRoaXosIFt0aGl6LnZhbHVlc1tpXSwgaSwgdGhpel0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuYztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5TWFwTWV0aG9kKHRoYXQ6IGFueSk6IEludGVybmFsRW50aXR5IHtcclxuICAgIGNvbnN0IGZ1bmMgPSBuZXcgSW50ZXJuYWxFbnRpdHkoKTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPGludGVybmFsIGZ1bmN0aW9uPic7XHJcbiAgICBmdW5jLmFyaXR5ID0gKCkgPT4gLTE7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGl6LnZhbHVlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICB0aGl6LnZhbHVlc1tpXSA9IDxGdW5jdGlvbkVudGl0eT4gYXJnc1swXS5jYWxsKGludCwgdGhpeiwgW3RoaXoudmFsdWVzW2ldLCBpLCB0aGl6XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlGaW5kTWV0aG9kKHRoYXQ6IGFueSk6IEludGVybmFsRW50aXR5IHtcclxuICAgIGNvbnN0IGZ1bmMgPSBuZXcgSW50ZXJuYWxFbnRpdHkoKTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPGludGVybmFsIGZ1bmN0aW9uPic7XHJcbiAgICBmdW5jLmFyaXR5ID0gKCkgPT4gLTE7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGl6LnZhbHVlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAoPEZ1bmN0aW9uRW50aXR5PiBhcmdzWzBdLmNhbGwoaW50LCB0aGl6LCBbdGhpei52YWx1ZXNbaV0sIGksIHRoaXpdKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXoudmFsdWVzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlJbmRleE9mTWV0aG9kKHRoYXQ6IGFueSk6IEludGVybmFsRW50aXR5IHtcclxuICAgIGNvbnN0IGZ1bmMgPSBuZXcgSW50ZXJuYWxFbnRpdHkoKTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPGludGVybmFsIGZ1bmN0aW9uPic7XHJcbiAgICBmdW5jLmFyaXR5ID0gKCkgPT4gMTtcclxuICAgIGZ1bmMuY2FsbCA9IChpbnQsIHRoaXosIGFyZ3MpID0+IHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXoudmFsdWVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGl6LnZhbHVlc1tpXSA9PT0gYXJnc1swXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdMZW5ndGhNZXRob2QodGhhdDogYW55KTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8aW50ZXJuYWwgZnVuY3Rpb24+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAwO1xyXG4gICAgZnVuYy5jYWxsID0gKGludCwgdGhpeiwgYXJncykgPT4gdGhpei52YWx1ZS5sZW5ndGg7XHJcbiAgICByZXR1cm4gZnVuYztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ1N1YlN0ck1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBmdW5jdGlvbj4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IC0xO1xyXG4gICAgZnVuYy5jYWxsID0gKGludCwgdGhpeiwgYXJncykgPT4gbmV3IFN0cmluZ0VudGl0eSh0aGl6LnZhbHVlLnN1YnN0cihhcmdzWzBdLCBhcmdzWzFdKSk7XHJcbiAgICByZXR1cm4gZnVuYztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ1NwbGl0TWV0aG9kKHRoYXQ6IGFueSk6IEludGVybmFsRW50aXR5IHtcclxuICAgIGNvbnN0IGZ1bmMgPSBuZXcgSW50ZXJuYWxFbnRpdHkoKTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPGludGVybmFsIGZ1bmN0aW9uPic7XHJcbiAgICBmdW5jLmFyaXR5ID0gKCkgPT4gMTtcclxuICAgIGZ1bmMuY2FsbCA9IChpbnQsIHRoaXosIGFyZ3MpID0+IG5ldyBBcnJheUVudGl0eSh0aGl6LnZhbHVlLnNwbGl0KGFyZ3NbMF0pKTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nTWF0Y2hNZXRob2QodGhhdDogYW55KTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8aW50ZXJuYWwgZnVuY3Rpb24+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAxO1xyXG4gICAgZnVuYy5jYWxsID0gKGludCwgdGhpeiwgYXJncykgPT4gbmV3IEFycmF5RW50aXR5KHRoaXoudmFsdWUubWF0Y2goYXJnc1swXS5yZWdleCkpO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdleFRlc3RNZXRob2QodGhhdDogYW55KTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8aW50ZXJuYWwgZnVuY3Rpb24+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAxO1xyXG4gICAgZnVuYy5jYWxsID0gKGludCwgdGhpeiwgYXJncykgPT4gdGhpei5yZWdleC50ZXN0KGFyZ3NbMF0pO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdleEV4ZWNNZXRob2QodGhhdDogYW55KTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8aW50ZXJuYWwgZnVuY3Rpb24+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAxO1xyXG4gICAgZnVuYy5jYWxsID0gKGludCwgdGhpeiwgYXJncykgPT4gdGhpei5yZWdleC5leGVjKGFyZ3NbMF0pO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuIiwiaW1wb3J0IHsgVG9rZW4sIFRva2VuVHlwZSB9IGZyb20gJy4uL3NyYy90b2tlbic7XHJcbmltcG9ydCB7IENvbnNvbGUgfSBmcm9tICcuL2NvbnNvbGUnO1xyXG5kZWNsYXJlIHZhciBjb256b2xlOiBDb25zb2xlO1xyXG5cclxuY29uc3QgaXNEaWdpdCA9IChjaGFyOiBzdHJpbmcpID0+IGNoYXIgPj0gJzAnICYmIGNoYXIgPD0gJzknO1xyXG5cclxuY29uc3QgaXNBbHBoYSA9IChjaGFyOiBzdHJpbmcgKSA9PiAoY2hhciA+PSAnYScgJiYgY2hhciA8PSAneicpIHx8IChjaGFyID49ICdBJyAmJiBjaGFyIDw9ICdaJyk7XHJcblxyXG5jb25zdCBpc0FscGhhTnVtZXJpYyA9IChjaGFyOiBzdHJpbmcpID0+IGlzQWxwaGEoY2hhcikgfHwgaXNEaWdpdChjaGFyKTtcclxuXHJcbmNvbnN0IGlzS2V5d29yZCA9ICh3b3JkOiBzdHJpbmcpID0+IFRva2VuVHlwZVt3b3JkXSA+PSAyMztcclxuXHJcbmV4cG9ydCBjbGFzcyBTY2FubmVyIHtcclxuXHJcbiAgICBwdWJsaWMgc291cmNlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdG9rZW5zOiBUb2tlbltdID0gW107XHJcbiAgICBwcml2YXRlIGN1cnJlbnQgPSAwO1xyXG4gICAgcHJpdmF0ZSBsaW5lID0gMTtcclxuICAgIHByaXZhdGUgc3RhcnQgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNvdXJjZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlb2YoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudCA+PSB0aGlzLnNvdXJjZS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZHZhbmNlKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudCsrO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5jaGFyQXQodGhpcy5jdXJyZW50IC0gMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRUb2tlbih0b2tlbk5hbWU6IHN0cmluZywgbGl0ZXJhbDogYW55KSB7XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IHRoaXMuc291cmNlLnN1YnN0cmluZyh0aGlzLnN0YXJ0LCB0aGlzLmN1cnJlbnQpO1xyXG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2gobmV3IFRva2VuKHRva2VuTmFtZSwgdGV4dCwgbGl0ZXJhbCwgdGhpcy5saW5lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtYXRjaChleHBlY3RlZDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc291cmNlLmNoYXJBdCh0aGlzLmN1cnJlbnQpICE9PSBleHBlY3RlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnQrKztcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBlZWsoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdcXDAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2UuY2hhckF0KHRoaXMuY3VycmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwZWVrTmV4dCgpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50ICsgMSA+PSB0aGlzLnNvdXJjZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdcXDAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2UuY2hhckF0KHRoaXMuY3VycmVudCArIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29tbWVudCgpIHtcclxuICAgICAgICB3aGlsZSAodGhpcy5wZWVrKCkgIT09ICdcXG4nICYmICF0aGlzLmVvZigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0cmluZyhxdW90ZTogc3RyaW5nLCB0eXBlOiBUb2tlblR5cGUpIHtcclxuICAgICAgICB3aGlsZSAodGhpcy5wZWVrKCkgIT09IHF1b3RlICYmICF0aGlzLmVvZigpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoKSA9PT0gJ1xcbicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGluZSsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVW50ZXJtaW5hdGVkIHN0cmluZy5cclxuICAgICAgICBpZiAodGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjYW5FcnJvcihgVW50ZXJtaW5hdGVkIHN0cmluZywgZXhwZWN0aW5nIGNsb3NpbmcgJHtxdW90ZX1gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVGhlIGNsb3NpbmcgXCIuXHJcbiAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcblxyXG4gICAgICAgIC8vIFRyaW0gdGhlIHN1cnJvdW5kaW5nIHF1b3Rlcy5cclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc291cmNlLnN1YnN0cmluZyh0aGlzLnN0YXJ0ICsgMSwgdGhpcy5jdXJyZW50IC0gMSk7XHJcbiAgICAgICAgdGhpcy5hZGRUb2tlbignc3RyaW5nJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbnVtYmVyKCkge1xyXG4gICAgICAgIC8vIGdldHMgaW50ZWdlciBwYXJ0XHJcbiAgICAgICAgd2hpbGUgKGlzRGlnaXQodGhpcy5wZWVrKCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2hlY2tzIGZvciBmcmFjdGlvblxyXG4gICAgICAgIGlmICh0aGlzLnBlZWsoKSA9PT0gJy4nICYmIGlzRGlnaXQodGhpcy5wZWVrTmV4dCgpKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGdldHMgZnJhY3Rpb24gcGFydFxyXG4gICAgICAgIHdoaWxlIChpc0RpZ2l0KHRoaXMucGVlaygpKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNoZWNrcyBmb3IgZXhwb25lbnRcclxuICAgICAgICBpZiAodGhpcy5wZWVrKCkudG9Mb3dlckNhc2UoKSA9PT0gJ2UnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wZWVrKCkgPT09ICctJyB8fCB0aGlzLnBlZWsoKSA9PT0gJysnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2hpbGUgKGlzRGlnaXQodGhpcy5wZWVrKCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNvdXJjZS5zdWJzdHJpbmcodGhpcy5zdGFydCAsIHRoaXMuY3VycmVudCk7XHJcbiAgICAgICAgdGhpcy5hZGRUb2tlbignbnVtYmVyJywgTnVtYmVyKHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpZGVudGlmaWVyKCkge1xyXG4gICAgICAgIHdoaWxlIChpc0FscGhhTnVtZXJpYyh0aGlzLnBlZWsoKSkpIHtcclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnNvdXJjZS5zdWJzdHJpbmcodGhpcy5zdGFydCwgdGhpcy5jdXJyZW50KTtcclxuICAgICAgICB2YWx1ZSA9IHZhbHVlID09PSAnZnVuYycgPyAnZnVuY3Rpb24nIDogdmFsdWU7XHJcbiAgICAgICAgaWYgKGlzS2V5d29yZCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRUb2tlbih2YWx1ZSwgbnVsbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRUb2tlbignaWRlbnRpZmllcicsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWdleCgpIHtcclxuICAgICAgICB3aGlsZSAodGhpcy5wZWVrKCkgIT09ICcjJyAmJiAhdGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wZWVrKCkgPT09ICdcXG4nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmUrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFVudGVybWluYXRlZCByZWdleC5cclxuICAgICAgICBpZiAodGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjYW5FcnJvcihgVW50ZXJtaW5hdGVkIFJlZ0V4LCBleHBlY3RpbmcgY2xvc2luZyAjYCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRoZSBjbG9zaW5nICMuXHJcbiAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgY29uc3QgcmVnZXggPSB0aGlzLnNvdXJjZS5zdWJzdHJpbmcodGhpcy5zdGFydCArIDEsIHRoaXMuY3VycmVudCAtIDEpO1xyXG5cclxuICAgICAgICBsZXQgZmxhZ3MgPSAnJztcclxuICAgICAgICBpZiAoWydnJywgJ2knLCAncycsICd1JywgJ3knXS5pbmRleE9mKHRoaXMucGVlaygpKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLnBlZWsoKSAhPT0gJyMnICYmICF0aGlzLmVvZigpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCkgPT09ICdcXG4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saW5lKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2FuRXJyb3IoYFVudGVybWluYXRlZCBSZWdFeCwgZXhwZWN0aW5nIGNsb3NpbmcgIyBhZnRlciBmbGFnc2ApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZsYWdzID0gdGhpcy5zb3VyY2Uuc3Vic3RyaW5nKHN0YXJ0LCB0aGlzLmN1cnJlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBUaGUgY2xvc2luZyAjIGFmdGVyIGZsYWdzLlxyXG4gICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZFRva2VuKCdyZWdleCcsIG5ldyBSZWdFeHAocmVnZXgsIGZsYWdzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNjYW4oKSB7XHJcbiAgICAgICAgd2hpbGUgKCF0aGlzLmVvZigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQgPSB0aGlzLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2NhblRva2VuKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKG5ldyBUb2tlbignZW9mJywgJycsIG51bGwsIHRoaXMubGluZSkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRva2VucztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNjYW5Ub2tlbigpIHtcclxuICAgICAgICBjb25zdCBjaGFyID0gdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgc3dpdGNoIChjaGFyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJygnOiB0aGlzLmFkZFRva2VuKCdsZWZ0UGFyZW4nLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyknOiB0aGlzLmFkZFRva2VuKCdyaWdodFBhcmVuJywgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdbJzogdGhpcy5hZGRUb2tlbignbGVmdEJyYWNrZXQnLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ10nOiB0aGlzLmFkZFRva2VuKCdyaWdodEJyYWNrZXQnLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3snOiB0aGlzLmFkZFRva2VuKCdsZWZ0QnJhY2UnLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ30nOiB0aGlzLmFkZFRva2VuKCdyaWdodEJyYWNlJywgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcsJzogdGhpcy5hZGRUb2tlbignY29tbWEnLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJy4nOiB0aGlzLmFkZFRva2VuKCdkb3QnLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzsnOiB0aGlzLmFkZFRva2VuKCdzZW1pY29sb24nLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyonOiB0aGlzLmFkZFRva2VuKHRoaXMubWF0Y2goJz0nKSA/ICdzdGFyRXF1YWwnIDogJ3N0YXInLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ14nOiB0aGlzLmFkZFRva2VuKCdjYXJldCcsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnPyc6IHRoaXMuYWRkVG9rZW4oJ3F1ZXN0aW9uJywgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc6JzogdGhpcy5hZGRUb2tlbignY29sb24nLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyUnOiB0aGlzLmFkZFRva2VuKHRoaXMubWF0Y2goJz0nKSA/ICdwZXJjZW50RXF1YWwnIDogJ3BlcmNlbnQnLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyQnOiB0aGlzLmFkZFRva2VuKCdkb2xsYXInLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0AnOiB0aGlzLmFkZFRva2VuKCdmdW5jdGlvbicsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnLSc6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnLScpID8gJ21pbnVzTWludXMnIDogdGhpcy5tYXRjaCgnPicpID8gJ3JldHVybicgOiB0aGlzLm1hdGNoKCc9JykgPyAnbWludXNFcXVhbCcgOiAnbWludXMnLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJysnOiB0aGlzLmFkZFRva2VuKHRoaXMubWF0Y2goJysnKSA/ICdwbHVzUGx1cycgOiB0aGlzLm1hdGNoKCc9JykgPyAncGx1c0VxdWFsJyA6ICdwbHVzJywgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd8JzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCd8JykgPyAnb3InIDogJ3BpcGUnLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyYnOiB0aGlzLmFkZFRva2VuKHRoaXMubWF0Y2goJyYnKSA/ICdhbmQnIDogJ2FtcGVyc2FuZCcsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnPCc6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnPScpID8gJ2xlc3NFcXVhbCcgOiAnbGVzcycsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnPic6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnPScpID8gJ2dyZWF0ZXJFcXVhbCcgOiAnZ3JlYXRlcicsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnISc6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnPScpID8gdGhpcy5tYXRjaCgnPScpID8gJ2JhbmdFcXVhbEVxdWFsJyA6ICdiYW5nRXF1YWwnIDogJ2JhbmcnLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJz0nOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goJz0nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKCc9JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbignZXF1YWxFcXVhbEVxdWFsJywgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbignZXF1YWxFcXVhbCcsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXRjaCgnPicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbignYXJyb3cnLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbignZXF1YWwnLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcvJzpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKCcvJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnQoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXRjaCgnPScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbignc2xhc2hFcXVhbCcsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKCdzbGFzaCcsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ1xcbic6IHRoaXMubGluZSsrOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBgJ2A6XHJcbiAgICAgICAgICAgIGNhc2UgYFwiYDpcclxuICAgICAgICAgICAgY2FzZSAnYCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0cmluZyhjaGFyLCBUb2tlblR5cGUuc3RyaW5nKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcjJzpcclxuICAgICAgICAgICAgICAgIHRoaXMucmVnZXgoKTtcclxuICAgICAgICAgICAgLy8gaWdub3JlIGNhc2VzXHJcbiAgICAgICAgICAgIGNhc2UgJyAnOlxyXG4gICAgICAgICAgICBjYXNlICdcXHInOlxyXG4gICAgICAgICAgICBjYXNlICdcXHQnOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vIGNvbXBleCBjYXNlc1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgaWYgKGlzRGlnaXQoY2hhcikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm51bWJlcigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc0FscGhhKGNoYXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGVudGlmaWVyKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NhbkVycm9yKGBVbmV4cGVjdGVkIGNoYXJhY3RlciAnJHtjaGFyfSdgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNjYW5FcnJvcihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb256b2xlLmVycm9yKGBFcnJvciBhdCAoJHt0aGlzLmxpbmV9KTogICR7bWVzc2FnZX1gKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIHdoaWxlIHNjYW5uaW5nLiBFeGVjdXRpb24gaGFzIGJlZW4gc3RvcGVkJyk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFRva2VuIH0gZnJvbSAnLi90b2tlbic7XHJcbmltcG9ydCB7IENvbnNvbGUgfSBmcm9tICcuL2NvbnNvbGUnO1xyXG5kZWNsYXJlIHZhciBjb256b2xlOiBDb25zb2xlO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjb3BlIHtcclxuXHJcbiAgICBwcml2YXRlIHZhbHVlczogTWFwPHN0cmluZywgYW55PjtcclxuICAgIHByaXZhdGUgcGFyZW50OiBTY29wZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQ6IFNjb3BlID0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMudmFsdWVzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2NvcGVFcnJvcihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb256b2xlLmVycm9yKGBbc2NvcGUgZXJyb3JdID0+ICR7bWVzc2FnZX1gKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0KG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMudmFsdWVzLnNldChuYW1lLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlZmluZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZXMuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcGVFcnJvcihgaWRlbnRpZmllciBcIiR7bmFtZX1cIiBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWRgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldChuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3NpZ24obmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWVzLmhhcyhuYW1lKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldChuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuYXNzaWduKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNjb3BlRXJyb3IoYElkZW50aWZpZXIgXCIke25hbWV9XCIgaGFzIG5vdCBiZWVuIGRlZmluZWRgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldChuYW1lOiBUb2tlbik6IGFueSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWVzLmhhcyhuYW1lLmxleGVtZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzLmdldChuYW1lLmxleGVtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudCAhPT0gbnVsbCApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50LmdldChuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY29wZUVycm9yKGBFcnJvciBhdCAoJHtuYW1lLmxpbmV9KTogXCIke25hbWUubGV4ZW1lfVwiIGlzIG5vdCBkZWZpbmVkYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpcnN0KGtleTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZXMuaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzLmdldChrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb2J0YWluKGtleTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZXMuaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzLmdldChrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wYXJlbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Lm9idGFpbihrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgVG9rZW4gfSBmcm9tICd0b2tlbic7XG5cbmltcG9ydCB7IEV4cHIgfSBmcm9tICdleHByZXNzaW9uJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0bXQge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgIGNvbnN0cnVjdG9yKCkge31cbiAgICBwdWJsaWMgYWJzdHJhY3QgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUjtcbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5leHBvcnQgaW50ZXJmYWNlIFN0bXRWaXNpdG9yPFI+IHtcbiAgICB2aXNpdEJsb2NrU3RtdChzdG10OiBCbG9jayk6IFI7XG4gICAgdmlzaXRDbGFzc1N0bXQoc3RtdDogQ2xhc3MpOiBSO1xuICAgIHZpc2l0RG9XaGlsZVN0bXQoc3RtdDogRG9XaGlsZSk6IFI7XG4gICAgdmlzaXRFeHByZXNzaW9uU3RtdChzdG10OiBFeHByZXNzaW9uKTogUjtcbiAgICB2aXNpdEZ1bmNTdG10KHN0bXQ6IEZ1bmMpOiBSO1xuICAgIHZpc2l0SWZTdG10KHN0bXQ6IElmKTogUjtcbiAgICB2aXNpdFByaW50U3RtdChzdG10OiBQcmludCk6IFI7XG4gICAgdmlzaXRSZXR1cm5TdG10KHN0bXQ6IFJldHVybik6IFI7XG4gICAgdmlzaXRWYXJTdG10KHN0bXQ6IFZhcik6IFI7XG4gICAgdmlzaXRXaGlsZVN0bXQoc3RtdDogV2hpbGUpOiBSO1xufVxuXG5leHBvcnQgY2xhc3MgQmxvY2sgZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMgc3RhdGVtZW50czogU3RtdFtdO1xuXG4gICAgY29uc3RydWN0b3Ioc3RhdGVtZW50czogU3RtdFtdKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGVtZW50cyA9IHN0YXRlbWVudHM7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEJsb2NrU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LkJsb2NrJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ2xhc3MgZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMgbmFtZTogVG9rZW47XG4gICAgcHVibGljIHBhcmVudDogVG9rZW47XG4gICAgcHVibGljIG1ldGhvZHM6IEZ1bmNbXTtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IFRva2VuLCBwYXJlbnQ6IFRva2VuLCBtZXRob2RzOiBGdW5jW10pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMubWV0aG9kcyA9IG1ldGhvZHM7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdENsYXNzU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LkNsYXNzJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRG9XaGlsZSBleHRlbmRzIFN0bXQge1xuICAgIHB1YmxpYyBsb29wOiBTdG10O1xuICAgIHB1YmxpYyBjb25kaXRpb246IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3Rvcihsb29wOiBTdG10LCBjb25kaXRpb246IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5sb29wID0gbG9vcDtcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdERvV2hpbGVTdG10KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1N0bXQuRG9XaGlsZSc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEV4cHJlc3Npb24gZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMgZXhwcmVzc2lvbjogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKGV4cHJlc3Npb246IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RXhwcmVzc2lvblN0bXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnU3RtdC5FeHByZXNzaW9uJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRnVuYyBleHRlbmRzIFN0bXQge1xuICAgIHB1YmxpYyBuYW1lOiBUb2tlbjtcbiAgICBwdWJsaWMgcGFyYW1zOiBUb2tlbltdO1xuICAgIHB1YmxpYyBib2R5OiBTdG10W107XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBUb2tlbiwgcGFyYW1zOiBUb2tlbltdLCBib2R5OiBTdG10W10pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gICAgICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEZ1bmNTdG10KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1N0bXQuRnVuYyc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIElmIGV4dGVuZHMgU3RtdCB7XG4gICAgcHVibGljIGNvbmRpdGlvbjogRXhwcjtcbiAgICBwdWJsaWMgdGhlblN0bXQ6IFN0bXQ7XG4gICAgcHVibGljIGVsc2VTdG10OiBTdG10O1xuXG4gICAgY29uc3RydWN0b3IoY29uZGl0aW9uOiBFeHByLCB0aGVuU3RtdDogU3RtdCwgZWxzZVN0bXQ6IFN0bXQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgICAgIHRoaXMudGhlblN0bXQgPSB0aGVuU3RtdDtcbiAgICAgICAgdGhpcy5lbHNlU3RtdCA9IGVsc2VTdG10O1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRJZlN0bXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnU3RtdC5JZic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFByaW50IGV4dGVuZHMgU3RtdCB7XG4gICAgcHVibGljIGV4cHJlc3Npb246IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihleHByZXNzaW9uOiBFeHByKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFByaW50U3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LlByaW50JztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUmV0dXJuIGV4dGVuZHMgU3RtdCB7XG4gICAgcHVibGljIGtleXdvcmQ6IFRva2VuO1xuICAgIHB1YmxpYyB2YWx1ZTogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKGtleXdvcmQ6IFRva2VuLCB2YWx1ZTogRXhwcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmtleXdvcmQgPSBrZXl3b3JkO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFJldHVyblN0bXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnU3RtdC5SZXR1cm4nO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBWYXIgZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMgbmFtZTogVG9rZW47XG4gICAgcHVibGljIHR5cGU6IFRva2VuO1xuICAgIHB1YmxpYyBpbml0aWFsaXplcjogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IFRva2VuLCB0eXBlOiBUb2tlbiwgaW5pdGlhbGl6ZXI6IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplciA9IGluaXRpYWxpemVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRWYXJTdG10KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1N0bXQuVmFyJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2hpbGUgZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMgY29uZGl0aW9uOiBFeHByO1xuICAgIHB1YmxpYyBsb29wOiBTdG10O1xuXG4gICAgY29uc3RydWN0b3IoY29uZGl0aW9uOiBFeHByLCBsb29wOiBTdG10KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgICAgICB0aGlzLmxvb3AgPSBsb29wO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRXaGlsZVN0bXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnU3RtdC5XaGlsZSc7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW5kZXhSYW5nZSB9IGZyb20gJy4vcmFuZ2UnO1xyXG5pbXBvcnQgeyBQcm90b3R5cGVFbnRpdHkgfSBmcm9tICcuL2VudGl0eSc7XHJcbmltcG9ydCAqIGFzIFJ1bnRpbWUgZnJvbSAnLi9ydW50aW1lJztcclxuaW1wb3J0IHsgSW50ZXJwcmV0ZXIgfSBmcm9tICcuL2ludGVycHJldGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTdHJpbmdFbnRpdHkgZXh0ZW5kcyBQcm90b3R5cGVFbnRpdHkge1xyXG4gICAgcHJpdmF0ZSB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS52YWx1ZXMuc2V0KCdpbnZva2UnLCBSdW50aW1lLmludm9rZU1ldGhvZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgnc2l6ZScsIFJ1bnRpbWUuc3RyaW5nTGVuZ3RoTWV0aG9kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS52YWx1ZXMuc2V0KCdzdWJzdHInLCBSdW50aW1lLnN0cmluZ1N1YlN0ck1ldGhvZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgnc3BsaXQnLCBSdW50aW1lLnN0cmluZ1NwbGl0TWV0aG9kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS52YWx1ZXMuc2V0KCdtYXRjaCcsIFJ1bnRpbWUuc3RyaW5nTWF0Y2hNZXRob2QodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoa2V5OiBhbnkpOiBhbnkge1xyXG4gICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3RyaW5nRW50aXR5KHRoaXMudmFsdWVba2V5XSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgaW5zdGFuY2VvZiBJbmRleFJhbmdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJhbmdlKGtleSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLmdldChrZXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldChrZXk6IHN0cmluZyB8IG51bWJlciwgdmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcGVydGllcy5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhcml0eSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYWxsKGludGVycHJldGVyOiBJbnRlcnByZXRlciwgdGhpejogYW55LCBhcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdHJpbmdFbnRpdHkoYXJnc1swXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByYW5nZShyYW5nZTogSW5kZXhSYW5nZSk6IFN0cmluZ0VudGl0eSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gICAgICAgIHJhbmdlLml0ZXJhdGUodGhpcy52YWx1ZS5sZW5ndGgsIChpKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSB0aGlzLnZhbHVlW2ldO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBuZXcgU3RyaW5nRW50aXR5KHJlc3VsdCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImV4cG9ydCBlbnVtIFRva2VuVHlwZSB7XHJcbiAgICAvLyBwYXJzZXIgdG9rZW5zXHJcbiAgICBlb2YsXHJcbiAgICBwYW5pYyxcclxuICAgIGxhbWJkYSxcclxuXHJcbiAgICAvLyBzaW5nbGUgY2hhcmFjdGVyIHRva2Vuc1xyXG4gICAgYW1wZXJzYW5kLFxyXG4gICAgYXRTaWduLFxyXG4gICAgY2FyZXQsXHJcbiAgICBjb21tYSxcclxuICAgIGRvbGxhcixcclxuICAgIGRvdCxcclxuICAgIGhhc2gsXHJcbiAgICBsZWZ0QnJhY2UsXHJcbiAgICBsZWZ0QnJhY2tldCxcclxuICAgIGxlZnRQYXJlbixcclxuICAgIHBlcmNlbnQsXHJcbiAgICBwaXBlLFxyXG4gICAgcmlnaHRCcmFjZSxcclxuICAgIHJpZ2h0QnJhY2tldCxcclxuICAgIHJpZ2h0UGFyZW4sXHJcbiAgICBzZW1pY29sb24sXHJcbiAgICBzbGFzaCxcclxuICAgIHN0YXIsXHJcblxyXG4gICAgLy8gb25lIG9yIHR3byBjaGFyYWN0ZXIgdG9rZW5zXHJcbiAgICBhcnJvdyxcclxuICAgIGJhbmcsXHJcbiAgICBiYW5nRXF1YWwsXHJcbiAgICBjb2xvbixcclxuICAgIGVxdWFsLFxyXG4gICAgZXF1YWxFcXVhbCxcclxuICAgIGdyZWF0ZXIsXHJcbiAgICBncmVhdGVyRXF1YWwsXHJcbiAgICBsZXNzLFxyXG4gICAgbGVzc0VxdWFsLFxyXG4gICAgbWludXMsXHJcbiAgICBtaW51c0VxdWFsLFxyXG4gICAgbWludXNNaW51cyxcclxuICAgIHBlcmNlbnRFcXVhbCxcclxuICAgIHBsdXMsXHJcbiAgICBwbHVzRXF1YWwsXHJcbiAgICBwbHVzUGx1cyxcclxuICAgIHF1ZXN0aW9uLFxyXG4gICAgc2xhc2hFcXVhbCxcclxuICAgIHN0YXJFcXVhbCxcclxuXHJcbiAgICAvLyB0aHJlZSBjaGFyYWN0ZXIgdG9rZW5zXHJcbiAgICBiYW5nRXF1YWxFcXVhbCxcclxuICAgIGVxdWFsRXF1YWxFcXVhbCxcclxuXHJcbiAgICAvLyBsaXRlcmFsc1xyXG4gICAgaWRlbnRpZmllcixcclxuICAgIHN0cmluZyxcclxuICAgIG51bWJlcixcclxuICAgIHJlZ2V4LFxyXG5cclxuICAgIC8vIGtleXdvcmRzXHJcbiAgICBhbmQsXHJcbiAgICBjbGFzcyxcclxuICAgIGRvLFxyXG4gICAgZWxzZSxcclxuICAgIGV4dGVuZHMsXHJcbiAgICBmYWxzZSxcclxuICAgIGZvcixcclxuICAgIGZ1bmMsXHJcbiAgICBmdW5jdGlvbixcclxuICAgIGlmLFxyXG4gICAgbGV0LFxyXG4gICAgbmV3LFxyXG4gICAgbnVsbCxcclxuICAgIG9yLFxyXG4gICAgcHJpbnQsXHJcbiAgICByZXR1cm4sXHJcbiAgICBzdXBlcixcclxuICAgIHRydWUsXHJcbiAgICB2YXIsXHJcbiAgICB3aGlsZVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVG9rZW4ge1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBsaW5lOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdHlwZTogVG9rZW5UeXBlO1xyXG4gICAgcHVibGljIGxpdGVyYWw6IGFueTtcclxuICAgIHB1YmxpYyBsZXhlbWU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGxleGVtZTogc3RyaW5nLCBsaXRlcmFsOiBhbnksIGxpbmU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy50eXBlID0gVG9rZW5UeXBlW25hbWVdO1xyXG4gICAgICAgIHRoaXMubGV4ZW1lID0gbGV4ZW1lO1xyXG4gICAgICAgIHRoaXMubGl0ZXJhbCA9IGxpdGVyYWw7XHJcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBgWygke3RoaXMubGluZX0pOlwiJHt0aGlzLmxleGVtZX1cIl1gO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9