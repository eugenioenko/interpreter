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
/*! exports provided: InternalEntity, PrototypeEntity, CallableEntity, FunctionEntity, InstanceEntity, StringEntity, ArrayEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
            scope.set('super', _runtime__WEBPACK_IMPORTED_MODULE_3__["superCall"](this, thiz));
        }
        try {
            interpreter.executeBlock(this.declaration.body, scope);
        }
        catch (e) {
            if (e instanceof _return__WEBPACK_IMPORTED_MODULE_1__["Return"]) {
                return e.value;
            }
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
    arity() {
        return 0;
    }
    call(interpreter, thiz, args) {
        return new StringEntity(args[0]);
    }
    toString() {
        return this.value;
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
        if (typeof key !== "number") {
            return super.get(key);
        }
        else {
            return this.values[key];
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
/*! exports provided: Expr, Assign, Binary, Ternary, Call, Entity, Get, Set, New, Grouping, Literal, Ztring, Unary, Variable, Key, Lambda, List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expr", function() { return Expr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Assign", function() { return Assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Binary", function() { return Binary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ternary", function() { return Ternary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Call", function() { return Call; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Get", function() { return Get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Set", function() { return Set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "New", function() { return New; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grouping", function() { return Grouping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Literal", function() { return Literal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ztring", function() { return Ztring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unary", function() { return Unary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Variable", function() { return Variable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Key", function() { return Key; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lambda", function() { return Lambda; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
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


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scanner */ "./src/scanner.ts");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser */ "./src/parser.ts");
/* harmony import */ var _interpreter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interpreter */ "./src/interpreter.ts");
/* harmony import */ var _console__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./console */ "./src/console.ts");
/* harmony import */ var _demo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demo */ "./src/demo.ts");





window.conzole = new _console__WEBPACK_IMPORTED_MODULE_3__["Console"]();
window.demoSourceCode = _demo__WEBPACK_IMPORTED_MODULE_4__["DemoSourceCode"];
window.execute = (source) => {
    return (new _interpreter__WEBPACK_IMPORTED_MODULE_2__["Interpreter"]().interpet((new _parser__WEBPACK_IMPORTED_MODULE_1__["Parser"]((new _scanner__WEBPACK_IMPORTED_MODULE_0__["Scanner"](source)).scan())).parse()));
};


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
    }
    visitBinaryExpr(expr) {
        const left = this.evaluate(expr.left);
        const right = this.evaluate(expr.right);
        switch (expr.operator.type) {
            case _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].minus:
                return left - right;
            case _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].slash:
                return left / right;
            case _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].star:
                return left * right;
            case _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].percent:
                return left % right;
            case _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].plus:
                if (typeof left === 'number' && typeof right === 'number') {
                    return (left + right);
                }
                else {
                    return left + right;
                }
            case _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].pipe:
                return left | right;
            case _token__WEBPACK_IMPORTED_MODULE_5__["TokenType"].caret:
                return left ^ right;
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
        if (match) {
            while (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].semicolon))
                ;
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
        const name = this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].identifier, `Expected a class name`);
        let parent = null;
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].extends)) {
            parent = this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].identifier, `Expected a parent name`);
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].leftBrace, `Expected "{" after class name`);
        const methods = [];
        while (!this.check(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].rightBrace) && !this.eof()) {
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
        return this.funcArgsBody(name, "function");
    }
    funcArgsBody(name, kind) {
        this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].leftParen, `Expected "(" after ${kind}`);
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
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].equal)) {
            const equals = this.previous();
            const value = this.ternary();
            if (expr instanceof _expression__WEBPACK_IMPORTED_MODULE_1__["Variable"]) {
                const name = expr.name;
                return new _expression__WEBPACK_IMPORTED_MODULE_1__["Assign"](name, value);
            }
            else if (expr instanceof _expression__WEBPACK_IMPORTED_MODULE_1__["Get"]) {
                return new _expression__WEBPACK_IMPORTED_MODULE_1__["Set"](expr.entity, expr.key, value);
            }
            this.parseError(equals, `Invalid l-value, is not an assigning target.`);
        }
        return expr;
    }
    ternary() {
        const expr = this.equality();
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].question)) {
            const thenExpr = this.equality();
            this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].colon, `Expected ":" after ternary ? expression`);
            const elseExpr = this.equality();
            return new _expression__WEBPACK_IMPORTED_MODULE_1__["Ternary"](expr, thenExpr, elseExpr);
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
                const name = this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].identifier, `Expect property name after '.'`);
                const key = new _expression__WEBPACK_IMPORTED_MODULE_1__["Key"](name);
                expr = new _expression__WEBPACK_IMPORTED_MODULE_1__["Get"](expr, key);
            }
            else if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].leftBracket)) {
                const key = this.expression();
                expr = new _expression__WEBPACK_IMPORTED_MODULE_1__["Get"](expr, key);
                this.consume(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].rightBracket, `Expected "]" after property name expression`);
            }
            else {
                break;
            }
        }
        return expr;
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
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].number, _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].stringSingle)) {
            return new _expression__WEBPACK_IMPORTED_MODULE_1__["Literal"](this.previous().literal);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].stringDouble)) {
            return new _expression__WEBPACK_IMPORTED_MODULE_1__["Ztring"](this.previous().literal);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].identifier)) {
            const identifier = this.previous();
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
            const lambda = this.funcArgsBody(token, "lambda");
            return new _expression__WEBPACK_IMPORTED_MODULE_1__["Lambda"](lambda);
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
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].stringSingle, _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].stringDouble, _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].identifier)) {
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
        if (type === _src_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].stringSingle) {
            this.addToken('stringSingle', value);
        }
        else {
            this.addToken('stringDouble', value);
        }
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
                this.addToken('star', null);
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
                this.addToken('percent', null);
                break;
            case '$':
                this.addToken('dollar', null);
                break;
            case '@':
                this.addToken('function', null);
                break;
            case '-':
                this.addToken(this.match('-') ? 'minusMinus' : this.match('>') ? 'return' : 'minus', null);
                break;
            case '+':
                this.addToken(this.match('+') ? 'plusPlus' : 'plus', null);
                break;
            case '|':
                this.addToken(this.match('|') ? 'or' : 'pipe', null);
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
                else {
                    this.addToken('slash', null);
                }
                break;
            case '\n':
                this.line++;
                break;
            case `'`:
                this.string(char, _src_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].stringSingle);
                break;
            case `"`:
                this.string(char, _src_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].stringDouble);
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
}


/***/ }),

/***/ "./src/statement.ts":
/*!**************************!*\
  !*** ./src/statement.ts ***!
  \**************************/
/*! exports provided: Stmt, Block, Expression, If, Func, Class, Return, While, DoWhile, Print, Var */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stmt", function() { return Stmt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Block", function() { return Block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expression", function() { return Expression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "If", function() { return If; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Func", function() { return Func; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Class", function() { return Class; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Return", function() { return Return; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "While", function() { return While; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoWhile", function() { return DoWhile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Print", function() { return Print; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Var", function() { return Var; });
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
    TokenType[TokenType["leftParen"] = 3] = "leftParen";
    TokenType[TokenType["rightParen"] = 4] = "rightParen";
    TokenType[TokenType["leftBracket"] = 5] = "leftBracket";
    TokenType[TokenType["rightBracket"] = 6] = "rightBracket";
    TokenType[TokenType["leftBrace"] = 7] = "leftBrace";
    TokenType[TokenType["rightBrace"] = 8] = "rightBrace";
    TokenType[TokenType["comma"] = 9] = "comma";
    TokenType[TokenType["dot"] = 10] = "dot";
    TokenType[TokenType["semicolon"] = 11] = "semicolon";
    TokenType[TokenType["slash"] = 12] = "slash";
    TokenType[TokenType["star"] = 13] = "star";
    TokenType[TokenType["pipe"] = 14] = "pipe";
    TokenType[TokenType["caret"] = 15] = "caret";
    TokenType[TokenType["percent"] = 16] = "percent";
    TokenType[TokenType["dollar"] = 17] = "dollar";
    TokenType[TokenType["atSign"] = 18] = "atSign";
    // one or two character tokens
    TokenType[TokenType["minus"] = 19] = "minus";
    TokenType[TokenType["minusMinus"] = 20] = "minusMinus";
    TokenType[TokenType["plus"] = 21] = "plus";
    TokenType[TokenType["plusPlus"] = 22] = "plusPlus";
    TokenType[TokenType["bang"] = 23] = "bang";
    TokenType[TokenType["bangEqual"] = 24] = "bangEqual";
    TokenType[TokenType["equal"] = 25] = "equal";
    TokenType[TokenType["equalEqual"] = 26] = "equalEqual";
    TokenType[TokenType["greater"] = 27] = "greater";
    TokenType[TokenType["greaterEqual"] = 28] = "greaterEqual";
    TokenType[TokenType["less"] = 29] = "less";
    TokenType[TokenType["lessEqual"] = 30] = "lessEqual";
    TokenType[TokenType["colon"] = 31] = "colon";
    TokenType[TokenType["question"] = 32] = "question";
    TokenType[TokenType["arrow"] = 33] = "arrow";
    // three character tokens
    TokenType[TokenType["bangEqualEqual"] = 34] = "bangEqualEqual";
    TokenType[TokenType["equalEqualEqual"] = 35] = "equalEqualEqual";
    // literals
    TokenType[TokenType["identifier"] = 36] = "identifier";
    TokenType[TokenType["stringSingle"] = 37] = "stringSingle";
    TokenType[TokenType["stringDouble"] = 38] = "stringDouble";
    TokenType[TokenType["number"] = 39] = "number";
    // keywords
    TokenType[TokenType["and"] = 40] = "and";
    TokenType[TokenType["class"] = 41] = "class";
    TokenType[TokenType["extends"] = 42] = "extends";
    TokenType[TokenType["do"] = 43] = "do";
    TokenType[TokenType["else"] = 44] = "else";
    TokenType[TokenType["false"] = 45] = "false";
    TokenType[TokenType["function"] = 46] = "function";
    TokenType[TokenType["func"] = 47] = "func";
    TokenType[TokenType["for"] = 48] = "for";
    TokenType[TokenType["if"] = 49] = "if";
    TokenType[TokenType["new"] = 50] = "new";
    TokenType[TokenType["null"] = 51] = "null";
    TokenType[TokenType["or"] = 52] = "or";
    TokenType[TokenType["print"] = 53] = "print";
    TokenType[TokenType["return"] = 54] = "return";
    TokenType[TokenType["true"] = 55] = "true";
    TokenType[TokenType["var"] = 56] = "var";
    TokenType[TokenType["let"] = 57] = "let";
    TokenType[TokenType["while"] = 58] = "while";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlbW8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudGl0eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXhwcmVzc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVycHJldGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3RvdHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmV0dXJuLnRzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2FubmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zY29wZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVtZW50LnRzIiwid2VicGFjazovLy8uL3NyYy90b2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5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QUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDOUMsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDNUMsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDbEQsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDN0MsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDOUMsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDakQsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDOUMsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDaEQsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDL0MsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDakQsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxD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LEtBQVQsU0FBUyxRQXVFcEI7QUFFTSxNQUFNLEtBQUs7SUFPZCxZQUFZLElBQVksRUFBRSxNQUFjLEVBQUUsT0FBWSxFQUFFLElBQVk7UUFDaEUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFFckIsQ0FBQztJQUVNLFFBQVE7UUFDWCxPQUFPLEtBQUssSUFBSSxDQUFDLElBQUksTUFBTSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUM7SUFDL0MsQ0FBQztDQUVKIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZXhwb3J0IGVudW0gQ29uc29sZU1lc3NhZ2VUeXBlIHtcclxuICAgIFVzZXIsXHJcbiAgICBFcnJvcixcclxuICAgIFdhcm5pbmcsXHJcbiAgICBJbmZvXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25zb2xlTWVzc2FnZSB7XHJcbiAgICBwdWJsaWMgdGltZTogRGF0ZTtcclxuICAgIHB1YmxpYyB0ZXh0OiBhbnk7XHJcbiAgICBwdWJsaWMgdHlwZTogQ29uc29sZU1lc3NhZ2VUeXBlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uc29sZSB7XHJcblxyXG4gICAgcHVibGljIG1lc3NhZ2VzOiBDb25zb2xlTWVzc2FnZVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZChtZXNzYWdlOiBhbnksIHR5cGU6IENvbnNvbGVNZXNzYWdlVHlwZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMucHVzaCh7XHJcbiAgICAgICAgICAgIHRleHQ6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgICAgICB0eXBlOiB0eXBlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9nKG1lc3NhZ2U6IGFueSkge1xyXG4gICAgICAgIHRoaXMuYWRkKG1lc3NhZ2UsIENvbnNvbGVNZXNzYWdlVHlwZS5Vc2VyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgd2FybihtZXNzYWdlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmFkZChtZXNzYWdlLCBDb25zb2xlTWVzc2FnZVR5cGUuV2FybmluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVycm9yKG1lc3NhZ2U6IGFueSkge1xyXG4gICAgICAgIHRoaXMuYWRkKG1lc3NhZ2UsIENvbnNvbGVNZXNzYWdlVHlwZS5FcnJvcik7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbmZvKG1lc3NhZ2U6IGFueSkge1xyXG4gICAgICAgIHRoaXMuYWRkKG1lc3NhZ2UsIENvbnNvbGVNZXNzYWdlVHlwZS5JbmZvKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHJpbnQoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2codGhpcy5tZXNzYWdlcy5tYXAoKGNtKSA9PiBjbS50ZXh0KSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBEZW1vU291cmNlQ29kZSA9XHJcbmBcclxuXHJcbi8vIFByb3RvdHlwZSBvYmplY3RzXHJcbkBNeUNsYXNzKHRleHQpIHtcclxuICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbn1cclxuTXlDbGFzcy5tZXRob2QgPSBAKHRleHQpIHtcclxuICAgIHRoaXMudGV4dCA9IHRoaXMudGV4dCArIHRleHQ7XHJcbn07XHJcbk15Q2xhc3MuY291bnQgPSBAKHRpbWVzKSB7XHJcbiAgICBAbmVzdGVkKG51bSkge1xyXG4gICAgICAgIHJldHVybiBudW0gKiBudW07XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbWVzOyArK2kpIHtcclxuICAgICAgICBwcmludCBuZXN0ZWQoaSk7XHJcbiAgICB9XHJcbn07XHJcbnZhciBpbnN0YW5jZSA9IG5ldyBNeUNsYXNzKCdIZWxsbyAnKTtcclxuaW5zdGFuY2UubWV0aG9kKCdXb3JsZCcpO1xyXG5pbnN0YW5jZS5jb3VudCgzKTtcclxucHJpbnQgaW5zdGFuY2UudGV4dDtcclxuXHJcbi8vIHN1Z2FyIGNvYXRlZCBjbGFzc2VzXHJcbmNsYXNzIE15Q2xhc3NDbGFzcyB7XHJcbiAgICBjb25zdHJ1Y3RvcihhbGZhKSB7XHJcbiAgICAgICAgdGhpcy5zb21ldGhpbmcgPSAnYW55dGhpbmcnICsgYWxmYTtcclxuICAgIH1cclxufVxyXG5sZXQgdGVzdENsYXNzQ2xhc3MgPSBuZXcgTXlDbGFzc0NsYXNzKCcgaXMgc29tZXRoaW5nJyk7XHJcbnByaW50IHRlc3RDbGFzc0NsYXNzLnNvbWV0aGluZztcclxuXHJcbi8vIHNoYWxsb3cgbXVsdGlwbGUgaW5oZXJpdGFuY2VcclxuQEJsYWRlKCkge1xyXG4gICAgdGhpcy5zaGFycG5lc3MgPSBcInZlcnkgc2hhcnBcIjtcclxufVxyXG5CbGFkZS5jdXQgPSBAKCkge1xyXG4gICAgcHJpbnQgXCJjdXR0aW5nLi4uXCIgKyB0aGlzLnNoYXJwbmVzcztcclxufTtcclxuQEhhbmRsZSgpIHtcclxuICAgIHRoaXMuY29sb3IgPSBcIndvb2RcIjtcclxufVxyXG5IYW5kbGUuaG9sZCA9IEAoKSB7XHJcbiAgICBwcmludCBcImhvbGRpbmcuLi5cIiArIHRoaXMuY29sb3I7XHJcbn07XHJcbkBLbmlmZSgpIHtcclxuICAgIEJsYWRlLmludm9rZSh0aGlzKTtcclxuICAgIEhhbmRsZS5pbnZva2UodGhpcyk7XHJcbn1cclxuS25pZmUubWVyZ2UoQmxhZGUpO1xyXG5LbmlmZS5tZXJnZShIYW5kbGUpO1xyXG5sZXQga25pZmUgPSBuZXcgS25pZmUoKTtcclxua25pZmUuY3V0KCk7XHJcbmtuaWZlLmhvbGQoKTtcclxuXHJcbi8vIFJlY3Vyc2l2ZSBmdW5jdGlvblxyXG5mdW5jdGlvbiBmYWN0b3JpYWxpemUobikge1xyXG4gICAgaWYgKG4gPCAwKSB7XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gICAgaWYgKG4gPT0gMCkge1xyXG4gICAgICAgIHJldHVybiAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChuICogZmFjdG9yaWFsaXplKG4gLSAxKSk7XHJcbn1cclxucHJpbnQgZmFjdG9yaWFsaXplKDExKTtcclxuXHJcbi8vIHNhbWUgYXMgZmFjdG9yaWFsaXplIGJ1dCB3aXRoIHRlcm5hcnlcclxuLy8gYW5kIHNob3J0IGZvcm0gZnVuY3Rpb24gZGVmaW5pdGlvblxyXG5AZmFjdG9yaWFsaXplMihuKSA9PlxyXG4gICAgbiA8IDAgPyAtMSA6IChuID09IDAgPyAxIDogKG4gKiBmYWN0b3JpYWxpemUobiAtIDEpKSk7XHJcblxyXG5wcmludCBmYWN0b3JpYWxpemUyKDEyKTtcclxuXHJcbi8vIG5lc3RlZCBmdW5jdGlvbiByZXR1cm5zIGZ1bmN0aW9uXHJcbkBhZGQoYSkgPT4gQChiKSA9PiBAKGMpID0+IGEgKyBiICsgYztcclxucHJpbnQgYWRkKDEwMCkoMjApKDMpO1xyXG5cclxuZnVuYyBzdWIoYSkge1xyXG4gICAgcmV0dXJuIGZ1bmMgKGIpIHtcclxuICAgICAgICByZXR1cm4gZnVuYyAoYykge1xyXG4gICAgICAgICAgICByZXR1cm4gYSAtIGIgLSBjO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG59XHJcbnByaW50IHN1YigxMDApKDEwKSgxKTtcclxuXHJcbi8vIHdoaWxlIGxvb3AgYW5kIHRlcm5hcnkgb3BlcmF0b3JcclxubGV0IGkgPSAwO1xyXG53aGlsZSAoaSA8PSA0KSB7XHJcbiAgICBwcmludCBpICUgMiA/ICdvZGQnIDogJ2V2ZW4nO1xyXG4gICAgaSA9IGkgKyAxO1xyXG59XHJcbi8vIGxpdGVyYWxzXHJcbnZhciBsaXRlcmFsID0ge1xyXG4gICAgZmlyc3RuYW1lOiBcIkpvaG5cIixcclxuICAgIGxhc3RuYW1lOiBcIkRvZVwiLFxyXG4gICAgcmVjb3Jkczoge1xyXG4gICAgICAgIHByZXY6IFwicHJldmlvdXNcIixcclxuICAgICAgICBuZXh0OiBcIm5leHRcIlxyXG4gICAgfVxyXG59O1xyXG5wcmludCBsaXRlcmFsLnJlY29yZHMucHJldjtcclxuXHJcbmxldCB4ID0gWzEsIDIwLCAzMDBdO1xyXG5sZXQgeSA9IFsxMDAsIHhbMV1dO1xyXG5wcmludCB5WzBdO1xyXG55LnB1c2goeCk7XHJcbnkubmV3UHJvcGVydHkgPSBcImFueXRoaW5nXCI7XHJcbnByaW50IHkuam9pbignLCcpO1xyXG5sZXQgeiA9IHkuam9pbignLScpO1xyXG5gO1xyXG4iLCJpbXBvcnQgeyBJbnRlcnByZXRlciB9IGZyb20gJy4vaW50ZXJwcmV0ZXInO1xyXG5pbXBvcnQgeyBTY29wZSB9IGZyb20gJy4vc2NvcGUnO1xyXG5pbXBvcnQgeyBSZXR1cm4gfSBmcm9tICcuL3JldHVybic7XHJcbmltcG9ydCB7IFByb3RvdHlwZSB9IGZyb20gJy4vcHJvdG90eXBlJztcclxuaW1wb3J0ICogYXMgU3RtdCBmcm9tICcuL3N0YXRlbWVudCc7XHJcbmltcG9ydCAqIGFzIFJ1bnRpbWUgZnJvbSAnLi9ydW50aW1lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBwdWJsaWMgY2FsbDogKGludGVycHJldGVyOiBJbnRlcnByZXRlciwgdGhpejogYW55LCBhcmdzOiBhbnlbXSkgPT4gYW55O1xyXG4gICAgcHVibGljIHRvU3RyaW5nOiAoKSA9PiBzdHJpbmcgPSAoKSA9PiAnPG5hdGl2ZSBmdW5jdGlvbj4nO1xyXG4gICAgcHVibGljIGFyaXR5OiAoKSA9PiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQcm90b3R5cGVFbnRpdHkge1xyXG4gICAgcHVibGljIHByb3RvdHlwZTogUHJvdG90eXBlO1xyXG4gICAgcHVibGljIHByb3BlcnRpZXM6IE1hcDxzdHJpbmcsIGFueT47XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUgPSBuZXcgUHJvdG90eXBlKG51bGwsIG51bGwsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS52YWx1ZXMuc2V0KCdoYXNPd25Qcm9wZXJ0eScsIFJ1bnRpbWUuaGFzT3duUHJvcGVydHkodGhpcykpO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ3NpemUnLCBSdW50aW1lLmxlbmd0aFByb3BlcnR5KTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS52YWx1ZXMuc2V0KCdpbmhlcml0JywgUnVudGltZS5pbmhlcml0TWV0aG9kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wZXJ0aWVzLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BlcnRpZXMuZ2V0KGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3RvdHlwZS5nZXQoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzLnNldChrZXksIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJzxwcm90b3R5cGUgZW50aXR5Pic7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDYWxsYWJsZUVudGl0eSBleHRlbmRzIFByb3RvdHlwZUVudGl0eSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS52YWx1ZXMuc2V0KCdpbnZva2UnLCBSdW50aW1lLmludm9rZU1ldGhvZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFyaXR5KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhbGwoaW50ZXJwcmV0ZXI6IEludGVycHJldGVyLCB0aGl6OiBhbnksIGFyZ3M6IGFueVtdKTogYW55IHsgcmV0dXJuOyB9XHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJzxpbnRlcm5hbCBmdW5jdGlvbj4nO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uRW50aXR5IGV4dGVuZHMgQ2FsbGFibGVFbnRpdHkge1xyXG4gICAgcHVibGljIGRlY2xhcmF0aW9uOiBTdG10LkZ1bmM7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBjbG9zdXJlOiBTY29wZTtcclxuICAgIHB1YmxpYyBwYXJlbnQ6IEZ1bmN0aW9uRW50aXR5O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRlY2xhcmF0aW9uOiBTdG10LkZ1bmMsIGNsb3N1cmU6IFNjb3BlLCBwYXJlbnQ6IEZ1bmN0aW9uRW50aXR5ID0gbnVsbCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5kZWNsYXJhdGlvbiA9IGRlY2xhcmF0aW9uO1xyXG4gICAgICAgIHRoaXMuY2xvc3VyZSA9IGNsb3N1cmU7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgnbWVyZ2UnLCBSdW50aW1lLm1lcmdlTWV0aG9kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS52YWx1ZXMuc2V0KCdleHRlbmQnLCBSdW50aW1lLmV4dGVuZE1ldGhvZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5kZWNsYXJhdGlvbi5uYW1lLmxleGVtZTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS52YWx1ZXMuc2V0KCduYW1lJywgdGhpcy5uYW1lKTtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYDwke3RoaXMubmFtZX0gIGZ1bmN0aW9uPmA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFyaXR5KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb24ucGFyYW1zLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FsbChpbnRlcnByZXRlcjogSW50ZXJwcmV0ZXIsIHRoaXo6IGFueSwgYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IHNjb3BlID0gbmV3IFNjb3BlKHRoaXMuY2xvc3VyZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRlY2xhcmF0aW9uLnBhcmFtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBzY29wZS5kZWZpbmUodGhpcy5kZWNsYXJhdGlvbi5wYXJhbXNbaV0ubGV4ZW1lLCBhcmdzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2NvcGUuc2V0KCd0aGlzJywgdGhpeik7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XHJcbiAgICAgICAgICAgIHNjb3BlLnNldCgnc3VwZXInLCBSdW50aW1lLnN1cGVyQ2FsbCh0aGlzLCB0aGl6KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGludGVycHJldGVyLmV4ZWN1dGVCbG9jayh0aGlzLmRlY2xhcmF0aW9uLmJvZHksIHNjb3BlKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgUmV0dXJuKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZS52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSdW50aW1lIGVycm9yLiBFeGVjdXRpb24gaGFzIGJlZW4gc3RvcHBlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW5zdGFuY2VFbnRpdHkgZXh0ZW5kcyBDYWxsYWJsZUVudGl0eSB7XHJcbiAgICBwcml2YXRlIGluc3RhbmNlb2Y6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGNvbnN0cnVjdDogRnVuY3Rpb25FbnRpdHkpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VvZiA9IGNvbnN0cnVjdC5kZWNsYXJhdGlvbi5uYW1lLmxleGVtZTtcclxuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUgPSBuZXcgUHJvdG90eXBlKGNvbnN0cnVjdC5wcm9wZXJ0aWVzLCBjb25zdHJ1Y3QucHJvdG90eXBlLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJzwnICsgdGhpcy5pbnN0YW5jZW9mICsgXCIgaW5zdGFuY2U+XCI7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgU3RyaW5nRW50aXR5IGV4dGVuZHMgUHJvdG90eXBlRW50aXR5IHtcclxuICAgIHByaXZhdGUgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZXM6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlcztcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS52YWx1ZXMuc2V0KCdpbnZva2UnLCBSdW50aW1lLmludm9rZU1ldGhvZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgnc2l6ZScsIFJ1bnRpbWUuc3RyaW5nTGVuZ3RoTWV0aG9kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS52YWx1ZXMuc2V0KCdzdWJzdHInLCBSdW50aW1lLnN0cmluZ1N1YlN0ck1ldGhvZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgnc3BsaXQnLCBSdW50aW1lLnN0cmluZ1NwbGl0TWV0aG9kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXJpdHkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FsbChpbnRlcnByZXRlcjogSW50ZXJwcmV0ZXIsIHRoaXo6IGFueSwgYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBuZXcgU3RyaW5nRW50aXR5KGFyZ3NbMF0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFycmF5RW50aXR5IGV4dGVuZHMgUHJvdG90eXBlRW50aXR5IHtcclxuICAgIHByaXZhdGUgdmFsdWVzOiBhbnlbXTtcclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlczogYW55W10pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ2ludm9rZScsIFJ1bnRpbWUuaW52b2tlTWV0aG9kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS52YWx1ZXMuc2V0KCdzaXplJywgUnVudGltZS5hcnJheUxlbmd0aE1ldGhvZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgnam9pbicsIFJ1bnRpbWUuYXJyYXlKb2luTWV0aG9kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS52YWx1ZXMuc2V0KCdwdXNoJywgUnVudGltZS5hcnJheVB1c2hNZXRob2QodGhpcykpO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ3BvcCcsIFJ1bnRpbWUuYXJyYXlQb3BNZXRob2QodGhpcykpO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ2VhY2gnLCBSdW50aW1lLmFycmF5RWFjaE1ldGhvZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgnbWFwJywgUnVudGltZS5hcnJheU1hcE1ldGhvZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgnZmluZCcsIFJ1bnRpbWUuYXJyYXlGaW5kTWV0aG9kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS52YWx1ZXMuc2V0KCdpbmRleE9mJywgUnVudGltZS5hcnJheUluZGV4T2ZNZXRob2QodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcgfCBudW1iZXIpOiBhbnkge1xyXG4gICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdXBlci5nZXQoa2V5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXNba2V5XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQoa2V5OiBzdHJpbmcgfCBudW1iZXIsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGtleSAhPT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BlcnRpZXMuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFyaXR5KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhbGwoaW50ZXJwcmV0ZXI6IEludGVycHJldGVyLCB0aGl6OiBhbnksIGFyZ3M6IGFueVtdKTogYW55IHsgcmV0dXJuOyB9XHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYFske3RoaXMudmFsdWVzLmpvaW4oJywnKX1dYDtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgVG9rZW4gfSBmcm9tICd0b2tlbic7XG5cbmltcG9ydCB7IFN0bXQgfSBmcm9tICdzdGF0ZW1lbnQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRXhwciB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgY29uc3RydWN0b3IoKSB7fVxuICAgIHB1YmxpYyBhYnN0cmFjdCBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSO1xufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmV4cG9ydCBpbnRlcmZhY2UgRXhwclZpc2l0b3I8Uj4ge1xuICAgIHZpc2l0QXNzaWduRXhwcihleHByOiBBc3NpZ24pOiBSO1xuICAgIHZpc2l0QmluYXJ5RXhwcihleHByOiBCaW5hcnkpOiBSO1xuICAgIHZpc2l0VGVybmFyeUV4cHIoZXhwcjogVGVybmFyeSk6IFI7XG4gICAgdmlzaXRDYWxsRXhwcihleHByOiBDYWxsKTogUjtcbiAgICB2aXNpdEVudGl0eUV4cHIoZXhwcjogRW50aXR5KTogUjtcbiAgICB2aXNpdEdldEV4cHIoZXhwcjogR2V0KTogUjtcbiAgICB2aXNpdFNldEV4cHIoZXhwcjogU2V0KTogUjtcbiAgICB2aXNpdE5ld0V4cHIoZXhwcjogTmV3KTogUjtcbiAgICB2aXNpdEdyb3VwaW5nRXhwcihleHByOiBHcm91cGluZyk6IFI7XG4gICAgdmlzaXRMaXRlcmFsRXhwcihleHByOiBMaXRlcmFsKTogUjtcbiAgICB2aXNpdFp0cmluZ0V4cHIoZXhwcjogWnRyaW5nKTogUjtcbiAgICB2aXNpdFVuYXJ5RXhwcihleHByOiBVbmFyeSk6IFI7XG4gICAgdmlzaXRWYXJpYWJsZUV4cHIoZXhwcjogVmFyaWFibGUpOiBSO1xuICAgIHZpc2l0S2V5RXhwcihleHByOiBLZXkpOiBSO1xuICAgIHZpc2l0TGFtYmRhRXhwcihleHByOiBMYW1iZGEpOiBSO1xuICAgIHZpc2l0TGlzdEV4cHIoZXhwcjogTGlzdCk6IFI7XG59XG5cbmV4cG9ydCBjbGFzcyBBc3NpZ24gZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgbmFtZTogVG9rZW47XG4gICAgcHVibGljIHZhbHVlOiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogVG9rZW4sIHZhbHVlOiBFeHByKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0QXNzaWduRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkFzc2lnbic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEJpbmFyeSBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBsZWZ0OiBFeHByO1xuICAgIHB1YmxpYyBvcGVyYXRvcjogVG9rZW47XG4gICAgcHVibGljIHJpZ2h0OiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IobGVmdDogRXhwciwgb3BlcmF0b3I6IFRva2VuLCByaWdodDogRXhwcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0QmluYXJ5RXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkJpbmFyeSc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFRlcm5hcnkgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgY29uZGl0aW9uOiBFeHByO1xuICAgIHB1YmxpYyB0aGVuRXhwcjogRXhwcjtcbiAgICBwdWJsaWMgZWxzZUV4cHI6IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25kaXRpb246IEV4cHIsIHRoZW5FeHByOiBFeHByLCBlbHNlRXhwcjogRXhwcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAgICAgdGhpcy50aGVuRXhwciA9IHRoZW5FeHByO1xuICAgICAgICB0aGlzLmVsc2VFeHByID0gZWxzZUV4cHI7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFRlcm5hcnlFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuVGVybmFyeSc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENhbGwgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgY2FsbGVlOiBFeHByO1xuICAgIHB1YmxpYyBwYXJlbjogVG9rZW47XG4gICAgcHVibGljIGFyZ3M6IEV4cHJbXTtcbiAgICBwdWJsaWMgdGhpejogYW55O1xuXG4gICAgY29uc3RydWN0b3IoY2FsbGVlOiBFeHByLCBwYXJlbjogVG9rZW4sIGFyZ3M6IEV4cHJbXSwgdGhpejogYW55KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY2FsbGVlID0gY2FsbGVlO1xuICAgICAgICB0aGlzLnBhcmVuID0gcGFyZW47XG4gICAgICAgIHRoaXMuYXJncyA9IGFyZ3M7XG4gICAgICAgIHRoaXMudGhpeiA9IHRoaXo7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdENhbGxFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuQ2FsbCc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEVudGl0eSBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBwcm9wZXJ0aWVzOiBFeHByW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzOiBFeHByW10pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RW50aXR5RXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkVudGl0eSc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEdldCBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBlbnRpdHk6IEV4cHI7XG4gICAgcHVibGljIGtleTogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKGVudGl0eTogRXhwciwga2V5OiBFeHByKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZW50aXR5ID0gZW50aXR5O1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0R2V0RXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkdldCc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNldCBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBlbnRpdHk6IEV4cHI7XG4gICAgcHVibGljIGtleTogRXhwcjtcbiAgICBwdWJsaWMgdmFsdWU6IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihlbnRpdHk6IEV4cHIsIGtleTogRXhwciwgdmFsdWU6IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbnRpdHkgPSBlbnRpdHk7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFNldEV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5TZXQnO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBOZXcgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgY29uc3RydWN0OiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IoY29uc3RydWN0OiBFeHByKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY29uc3RydWN0ID0gY29uc3RydWN0O1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXROZXdFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuTmV3JztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgR3JvdXBpbmcgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgZXhwcmVzc2lvbjogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKGV4cHJlc3Npb246IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0R3JvdXBpbmdFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuR3JvdXBpbmcnO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBMaXRlcmFsIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIHZhbHVlOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogYW55KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TGl0ZXJhbEV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5MaXRlcmFsJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgWnRyaW5nIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIHZhbHVlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0WnRyaW5nRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLlp0cmluZyc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFVuYXJ5IGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIG9wZXJhdG9yOiBUb2tlbjtcbiAgICBwdWJsaWMgcmlnaHQ6IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihvcGVyYXRvcjogVG9rZW4sIHJpZ2h0OiBFeHByKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRVbmFyeUV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5VbmFyeSc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFZhcmlhYmxlIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIG5hbWU6IFRva2VuO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogVG9rZW4pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VmFyaWFibGVFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuVmFyaWFibGUnO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBLZXkgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgbmFtZTogVG9rZW47XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBUb2tlbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRLZXlFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuS2V5JztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTGFtYmRhIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIGxhbWJkYTogU3RtdDtcblxuICAgIGNvbnN0cnVjdG9yKGxhbWJkYTogU3RtdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmxhbWJkYSA9IGxhbWJkYTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TGFtYmRhRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkxhbWJkYSc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIExpc3QgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgdmFsdWU6IEV4cHJbXTtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBFeHByW10pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRMaXN0RXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkxpc3QnO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFNjYW5uZXIgfSBmcm9tICcuL3NjYW5uZXInO1xyXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICcuL3BhcnNlcic7XHJcbmltcG9ydCB7IEludGVycHJldGVyIH0gZnJvbSAnLi9pbnRlcnByZXRlcic7XHJcbmltcG9ydCB7IENvbnNvbGUgfSBmcm9tICcuL2NvbnNvbGUnO1xyXG5pbXBvcnQgeyBEZW1vU291cmNlQ29kZSB9IGZyb20gJy4vZGVtbyc7XHJcblxyXG4od2luZG93IGFzIGFueSkuY29uem9sZSA9IG5ldyBDb25zb2xlKCk7XHJcbih3aW5kb3cgYXMgYW55KS5kZW1vU291cmNlQ29kZSA9IERlbW9Tb3VyY2VDb2RlO1xyXG4od2luZG93IGFzIGFueSkuZXhlY3V0ZSA9IChzb3VyY2U6IHN0cmluZyk6IENvbnNvbGUgPT4ge1xyXG4gICAgcmV0dXJuIChuZXcgSW50ZXJwcmV0ZXIoKS5pbnRlcnBldCgobmV3IFBhcnNlcigobmV3IFNjYW5uZXIoc291cmNlKSkuc2NhbigpKSkucGFyc2UoKSkpO1xyXG59O1xyXG4iLCJpbXBvcnQgKiBhcyBFeHByIGZyb20gJy4vZXhwcmVzc2lvbic7XHJcbmltcG9ydCAqIGFzIFN0bXQgZnJvbSAnLi9zdGF0ZW1lbnQnO1xyXG5pbXBvcnQgeyBGdW5jdGlvbkVudGl0eSwgQ2FsbGFibGVFbnRpdHksIEludGVybmFsRW50aXR5LCBJbnN0YW5jZUVudGl0eSwgUHJvdG90eXBlRW50aXR5LCBBcnJheUVudGl0eSwgU3RyaW5nRW50aXR5IH0gZnJvbSAnLi9lbnRpdHknO1xyXG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnLi9jb25zb2xlJztcclxuaW1wb3J0IHsgUmV0dXJuIH0gZnJvbSAnLi9yZXR1cm4nO1xyXG5pbXBvcnQgeyBTY29wZSB9IGZyb20gJy4vc2NvcGUnO1xyXG5pbXBvcnQgeyBUb2tlblR5cGUgfSBmcm9tICcuL3Rva2VuJztcclxuaW1wb3J0ICogYXMgUnVudGltZSBmcm9tICcuL3J1bnRpbWUnO1xyXG5pbXBvcnQgeyBQcm90b3R5cGUgfSBmcm9tICcuL3Byb3RvdHlwZSc7XHJcbmRlY2xhcmUgdmFyIGNvbnpvbGU6IENvbnNvbGU7XHJcblxyXG5leHBvcnQgY2xhc3MgSW50ZXJwcmV0ZXIgaW1wbGVtZW50c1xyXG4gICAgRXhwci5FeHByVmlzaXRvcjxhbnk+LFxyXG4gICAgU3RtdC5TdG10VmlzaXRvcjx2b2lkPiB7XHJcbiAgICBwdWJsaWMgZ2xvYmFsID0gbmV3IFNjb3BlKCk7XHJcbiAgICBwcml2YXRlIHNjb3BlID0gdGhpcy5nbG9iYWw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoICkge1xyXG4gICAgICAgIHRoaXMuZ2xvYmFsLmRlZmluZSgnZWNobycsIFJ1bnRpbWUuZWNob0Z1bmN0aW9uKCkpO1xyXG4gICAgICAgIHRoaXMuZ2xvYmFsLmRlZmluZSgncmFuZCcsIFJ1bnRpbWUucmFuZEZ1bmN0aW9uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXZhbHVhdGUoZXhwcjogRXhwci5FeHByKTogYW55IHtcclxuICAgICAgICByZXR1cm4gZXhwci5hY2NlcHQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleGVjdXRlKHN0bXQ6IFN0bXQuU3RtdCk6IHZvaWQge1xyXG4gICAgICAgIHN0bXQuYWNjZXB0KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcnBldChzdGF0ZW1lbnRzOiBTdG10LlN0bXRbXSk6IGFueSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBzdGF0ZW1lbnQgb2Ygc3RhdGVtZW50cykge1xyXG4gICAgICAgICAgICB0aGlzLmV4ZWN1dGUoc3RhdGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbnRlcnByZXRlckVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnpvbGUubG9nKGBbaW50ZXJwcmV0ZXIgZXJyb3JdID0+ICR7bWVzc2FnZX1gKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRFeHByZXNzaW9uU3RtdChzdG10OiBTdG10LkV4cHJlc3Npb24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmV2YWx1YXRlKHN0bXQuZXhwcmVzc2lvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0UHJpbnRTdG10KHN0bXQ6IFN0bXQuUHJpbnQpOiB2b2lkIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmV2YWx1YXRlKHN0bXQuZXhwcmVzc2lvbik7XHJcbiAgICAgICAgdmFsdWUgPSB2YWx1ZSA9PT0gbnVsbCA/IFwibnVsbFwiIDogdmFsdWU7XHJcbiAgICAgICAgY29uem9sZS5sb2codmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdFZhclN0bXQoc3RtdDogU3RtdC5WYXIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgdmFsdWU6IG9iamVjdCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHN0bXQuaW5pdGlhbGl6ZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmV2YWx1YXRlKHN0bXQuaW5pdGlhbGl6ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbkVudGl0eSAmJiB2YWx1ZS5uYW1lID09PSBcImxhbWJkYVwiKSB7XHJcbiAgICAgICAgICAgIHZhbHVlLm5hbWUgPSBzdG10Lm5hbWUubGV4ZW1lO1xyXG4gICAgICAgICAgICB2YWx1ZS5wcm90b3R5cGUuc2V0KCduYW1lJywgdmFsdWUubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdG10LnR5cGUudHlwZSA9PT0gVG9rZW5UeXBlLnZhcikgIHtcclxuICAgICAgICAgICAgdGhpcy5zY29wZS5zZXQoc3RtdC5uYW1lLmxleGVtZSwgdmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcGUuZGVmaW5lKHN0bXQubmFtZS5sZXhlbWUsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0VmFyaWFibGVFeHByKGV4cHI6IEV4cHIuVmFyaWFibGUpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLmdldChleHByLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdExpc3RFeHByKGV4cHI6IEV4cHIuTGlzdCk6IGFueSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVzOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgZXhwcmVzc2lvbiBvZiBleHByLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKHRoaXMuZXZhbHVhdGUoZXhwcmVzc2lvbikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEFycmF5RW50aXR5KHZhbHVlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0WnRyaW5nRXhwcihleHByOiBFeHByLlp0cmluZyk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdHJpbmdFbnRpdHkoZXhwci52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0QXNzaWduRXhwcihleHByOiBFeHByLkFzc2lnbik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5ldmFsdWF0ZShleHByLnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNjb3BlLmFzc2lnbihleHByLm5hbWUubGV4ZW1lLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0QmluYXJ5RXhwcihleHByOiBFeHByLkJpbmFyeSk6IGFueSB7XHJcbiAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMuZXZhbHVhdGUoZXhwci5sZWZ0KTtcclxuICAgICAgICBjb25zdCByaWdodCA9IHRoaXMuZXZhbHVhdGUoZXhwci5yaWdodCk7XHJcbiAgICAgICAgc3dpdGNoIChleHByLm9wZXJhdG9yLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUubWludXM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPG51bWJlcj4gbGVmdCAtIDxudW1iZXI+IHJpZ2h0O1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5zbGFzaDpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8bnVtYmVyPiBsZWZ0IC8gPG51bWJlcj4gcmlnaHQ7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLnN0YXI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPG51bWJlcj4gbGVmdCAqIDxudW1iZXI+IHJpZ2h0O1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5wZXJjZW50OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxudW1iZXI+IGxlZnQgJSA8bnVtYmVyPiByaWdodDtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUucGx1czpcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbGVmdCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHJpZ2h0ID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8bnVtYmVyPiAobGVmdCArIHJpZ2h0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzdHJpbmc+IGxlZnQgKyA8c3RyaW5nPiByaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUucGlwZTpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8bnVtYmVyPiBsZWZ0IHwgPG51bWJlcj4gcmlnaHQ7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLmNhcmV0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxudW1iZXI+IGxlZnQgXiA8bnVtYmVyPiByaWdodDtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuZ3JlYXRlcjpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8bnVtYmVyPiBsZWZ0ID4gPG51bWJlcj4gcmlnaHQ7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLmdyZWF0ZXJFcXVhbDpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8bnVtYmVyPiBsZWZ0ID49IDxudW1iZXI+IHJpZ2h0O1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5sZXNzOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxudW1iZXI+IGxlZnQgPCA8bnVtYmVyPiByaWdodDtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUubGVzc0VxdWFsOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxudW1iZXI+IGxlZnQgPD0gPG51bWJlcj4gcmlnaHQ7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLmVxdWFsRXF1YWw6XHJcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0ID09IHJpZ2h0O1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5lcXVhbEVxdWFsRXF1YWw6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdCA9PT0gcmlnaHQ7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLmJhbmdFcXVhbDpcclxuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQgIT0gcmlnaHQ7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLmJhbmdFcXVhbEVxdWFsOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQgIT09IHJpZ2h0O1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY29uem9sZS53YXJuKGV4cHIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7IC8vIHVucmVhY2hhYmxlXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0VGVybmFyeUV4cHIoZXhwcjogRXhwci5UZXJuYXJ5KTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZShleHByLmNvbmRpdGlvbikgPyB0aGlzLmV2YWx1YXRlKGV4cHIudGhlbkV4cHIpIDogdGhpcy5ldmFsdWF0ZShleHByLmVsc2VFeHByKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRHcm91cGluZ0V4cHIoZXhwcjogRXhwci5Hcm91cGluZyk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGUoZXhwci5leHByZXNzaW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRMaXRlcmFsRXhwcihleHByOiBFeHByLkxpdGVyYWwpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBleHByLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdFVuYXJ5RXhwcihleHByOiBFeHByLlVuYXJ5KTogYW55IHtcclxuICAgICAgICBjb25zdCByaWdodCA9IHRoaXMuZXZhbHVhdGUoZXhwci5yaWdodCk7XHJcbiAgICAgICAgc3dpdGNoIChleHByLm9wZXJhdG9yLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUubWludXM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gLU51bWJlcihyaWdodCk7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLmJhbmc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIUJvb2xlYW4ocmlnaHQpO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5kb2xsYXI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmlnaHQubGVuZ3RoO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5wbHVzUGx1czpcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluY1ZhbHVlID0gTnVtYmVyKHJpZ2h0KSArIDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3BlLmFzc2lnbigoPEV4cHIuVmFyaWFibGU+IGV4cHIucmlnaHQpLm5hbWUubGV4ZW1lLCBpbmNWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5jVmFsdWU7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLm1pbnVzTWludXM6XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWNWYWx1ZSA9IE51bWJlcihyaWdodCkgLSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY29wZS5hc3NpZ24oKDxFeHByLlZhcmlhYmxlPiBleHByLnJpZ2h0KS5uYW1lLmxleGVtZSwgZGVjVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY1ZhbHVlO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7IC8vIHNob3VsZCBiZSB1bnJlYWNoYWJsZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXhlY3V0ZUJsb2NrKHN0YXRlbWVudHM6IFN0bXQuU3RtdFtdLCBuZXh0U2NvcGU6IFNjb3BlKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFNjb3BlID0gdGhpcy5zY29wZTtcclxuICAgICAgICB0aGlzLnNjb3BlID0gbmV4dFNjb3BlO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc3RhdGVtZW50IG9mIHN0YXRlbWVudHMpIHtcclxuICAgICAgICAgICAgdGhpcy5leGVjdXRlKHN0YXRlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBjdXJyZW50U2NvcGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0QmxvY2tTdG10KHN0bXQ6IFN0bXQuQmxvY2spOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmV4ZWN1dGVCbG9jayhzdG10LnN0YXRlbWVudHMsIG5ldyBTY29wZSh0aGlzLnNjb3BlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0SWZTdG10KHN0bXQ6IFN0bXQuSWYpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5ldmFsdWF0ZShzdG10LmNvbmRpdGlvbikpIHtcclxuICAgICAgICAgICAgdGhpcy5leGVjdXRlKHN0bXQudGhlblN0bXQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc3RtdC5lbHNlU3RtdCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmV4ZWN1dGUoc3RtdC5lbHNlU3RtdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdFdoaWxlU3RtdChzdG10OiBTdG10LldoaWxlKTogdm9pZCB7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuZXZhbHVhdGUoc3RtdC5jb25kaXRpb24pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhlY3V0ZShzdG10Lmxvb3ApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXREb1doaWxlU3RtdChzdG10OiBTdG10LkRvV2hpbGUpOiB2b2lkIHtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhlY3V0ZShzdG10Lmxvb3ApO1xyXG4gICAgICAgIH0gd2hpbGUgKHRoaXMuZXZhbHVhdGUoc3RtdC5jb25kaXRpb24pKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRDYWxsRXhwcihleHByOiBFeHByLkNhbGwpOiBvYmplY3Qge1xyXG4gICAgICAgIGNvbnN0IGNhbGxlZSA9IHRoaXMuZXZhbHVhdGUoZXhwci5jYWxsZWUpO1xyXG4gICAgICAgIGNvbnN0IGFyZ3MgPSBbXTtcclxuICAgICAgICBsZXQgdGhpejogYW55ID0gbnVsbDtcclxuICAgICAgICBpZiAoZXhwci5jYWxsZWUgaW5zdGFuY2VvZiBFeHByLkdldCkge1xyXG4gICAgICAgICAgICB0aGl6ID0gdGhpcy5ldmFsdWF0ZShleHByLmNhbGxlZS5lbnRpdHkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXhwci50aGl6ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXogPSBleHByLnRoaXo7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgYXJndW1lbnQgb2YgZXhwci5hcmdzKSB7XHJcbiAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmV2YWx1YXRlKGFyZ3VtZW50KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIShjYWxsZWUgaW5zdGFuY2VvZiBDYWxsYWJsZUVudGl0eSkgJiZcclxuICAgICAgICAgICAgIShjYWxsZWUgaW5zdGFuY2VvZiBJbnRlcm5hbEVudGl0eSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5pbnRlcnByZXRlckVycm9yKGAke2NhbGxlZX0gaXMgbm90IGEgZnVuY3Rpb25gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZnVuYyA9IGNhbGxlZSBhcyBDYWxsYWJsZUVudGl0eTtcclxuICAgICAgICBpZiAoYXJncy5sZW5ndGggIT09IGZ1bmMuYXJpdHkoKSAmJiBmdW5jLmFyaXR5KCkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnpvbGUud2FybihgV2FybmluZyBhdCAoJHtleHByLnBhcmVuLmxpbmV9KTogJHtjYWxsZWV9IG1pc21hdGNoZWQgYXJndW1lbnQgbGVuZ3RoOyBcXG4gRXhwZWN0ZWQgJHtmdW5jLmFyaXR5KCl9IGJ1dCBnb3QgJHthcmdzLmxlbmd0aH0gYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmdW5jLmNhbGwodGhpcywgdGhpeiwgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0TmV3RXhwcihleHByOiBFeHByLk5ldyk6IG9iamVjdCB7XHJcbiAgICAgICAgY29uc3QgY29uc3RydWN0ID0gZXhwci5jb25zdHJ1Y3QgYXMgRXhwci5DYWxsO1xyXG4gICAgICAgIGNvbnN0IGNhbGxlZSA9IHRoaXMuZXZhbHVhdGUoY29uc3RydWN0LmNhbGxlZSk7XHJcbiAgICAgICAgY29uc3QgbmV3SW5zdGFuY2UgPSBuZXcgSW5zdGFuY2VFbnRpdHkoY2FsbGVlKTtcclxuICAgICAgICBjb25zdHJ1Y3QudGhpeiA9IG5ld0luc3RhbmNlO1xyXG4gICAgICAgIHRoaXMuZXZhbHVhdGUoY29uc3RydWN0KTtcclxuICAgICAgICByZXR1cm4gbmV3SW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0RW50aXR5RXhwcihleHByOiBFeHByLkVudGl0eSkge1xyXG4gICAgICAgIGNvbnN0IGVudGl0eSA9IG5ldyBQcm90b3R5cGVFbnRpdHkoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIGV4cHIucHJvcGVydGllcykge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgID0gdGhpcy5ldmFsdWF0ZSgocHJvcGVydHkgYXMgRXhwci5TZXQpLmtleSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5ldmFsdWF0ZSgocHJvcGVydHkgYXMgRXhwci5TZXQpLnZhbHVlKTtcclxuICAgICAgICAgICAgZW50aXR5LnNldChrZXksIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVudGl0eTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRLZXlFeHByKGV4cHI6IEV4cHIuS2V5KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gZXhwci5uYW1lLmxleGVtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRHZXRFeHByKGV4cHI6IEV4cHIuR2V0KTogYW55IHtcclxuICAgICAgICBjb25zdCBlbnRpdHkgPSB0aGlzLmV2YWx1YXRlKGV4cHIuZW50aXR5KTtcclxuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmV2YWx1YXRlKGV4cHIua2V5KTtcclxuICAgICAgICBpZiAoZW50aXR5IGluc3RhbmNlb2YgUHJvdG90eXBlRW50aXR5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbnRpdHkuZ2V0KGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW50ZXJwcmV0ZXJFcnJvcihgJHtlbnRpdHl9LiR7a2V5fTogb25seSBpbnN0YW5jZXMgaGF2ZSBwcm9wZXJ0aWVzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0U2V0RXhwcihleHByOiBFeHByLlNldCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuZXZhbHVhdGUoZXhwci5lbnRpdHkpO1xyXG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuZXZhbHVhdGUoZXhwci5rZXkpO1xyXG4gICAgICAgIGlmICghKGVudGl0eSBpbnN0YW5jZW9mIFByb3RvdHlwZUVudGl0eSkpIHtcclxuICAgICAgICAgICAgY29uem9sZS53YXJuKGAke2VudGl0eX0gaXMgbm90IGEgcnVudGltZSBPYmplY3RgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmV2YWx1YXRlKGV4cHIudmFsdWUpO1xyXG4gICAgICAgIChlbnRpdHkgYXMgUHJvdG90eXBlRW50aXR5KS5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdEZ1bmNTdG10KHN0bXQ6IFN0bXQuRnVuYyk6IGFueSB7XHJcbiAgICAgICAgY29uc3QgZnVuYzogRnVuY3Rpb25FbnRpdHkgPSBuZXcgRnVuY3Rpb25FbnRpdHkoc3RtdCwgdGhpcy5zY29wZSk7XHJcbiAgICAgICAgdGhpcy5zY29wZS5kZWZpbmUoc3RtdC5uYW1lLmxleGVtZSwgZnVuYyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0Q2xhc3NTdG10KHN0bXQ6IFN0bXQuQ2xhc3MpOiBhbnkge1xyXG4gICAgICAgIGxldCBjb25zdHJ1Y3QgPSBzdG10Lm1ldGhvZHMuZmluZChtZXRob2QgPT4gbWV0aG9kLm5hbWUubGV4ZW1lID09PSBcImNvbnN0cnVjdG9yXCIpO1xyXG4gICAgICAgIGNvbnN0IG1ldGhvZHMgPSBzdG10Lm1ldGhvZHMuZmlsdGVyKG1ldGhvZCA9PiBtZXRob2QubmFtZS5sZXhlbWUgIT09IFwiY29uc3RydWN0b3JcIik7XHJcblxyXG4gICAgICAgIGlmICghY29uc3RydWN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdCA9IG5ldyBTdG10LkZ1bmMoc3RtdC5uYW1lLCBbXSwgW10pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdC5uYW1lID0gc3RtdC5uYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZnVuYzogRnVuY3Rpb25FbnRpdHkgPSBuZXcgRnVuY3Rpb25FbnRpdHkoY29uc3RydWN0LCB0aGlzLnNjb3BlKTtcclxuICAgICAgICBsZXQgcGFyZW50OiBGdW5jdGlvbkVudGl0eSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHN0bXQucGFyZW50KSB7XHJcbiAgICAgICAgICAgIHBhcmVudCA9IHRoaXMuc2NvcGUuZ2V0KHN0bXQucGFyZW50KTtcclxuICAgICAgICAgICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgZnVuYy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBmdW5jLnByb3RvdHlwZSA9IG5ldyBQcm90b3R5cGUocGFyZW50LnByb3BlcnRpZXMsIHBhcmVudC5wcm90b3R5cGUsIGZ1bmMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IG1ldGhvZCBvZiBtZXRob2RzKSB7XHJcbiAgICAgICAgICAgIGZ1bmMucHJvcGVydGllcy5zZXQobWV0aG9kLm5hbWUubGV4ZW1lLCBuZXcgRnVuY3Rpb25FbnRpdHkobWV0aG9kLCB0aGlzLnNjb3BlLCBwYXJlbnQpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2NvcGUuc2V0KHN0bXQubmFtZS5sZXhlbWUsIGZ1bmMpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdExhbWJkYUV4cHIoZXhwcjogRXhwci5MYW1iZGEpOiBvYmplY3Qge1xyXG4gICAgICAgIGNvbnN0IGxhbWJkYTogU3RtdC5GdW5jID0gZXhwci5sYW1iZGEgYXMgU3RtdC5GdW5jO1xyXG4gICAgICAgIGNvbnN0IGZ1bmM6IEZ1bmN0aW9uRW50aXR5ID0gbmV3IEZ1bmN0aW9uRW50aXR5KGxhbWJkYSwgdGhpcy5zY29wZSk7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0UmV0dXJuU3RtdChzdG10OiBTdG10LlJldHVybik6IGFueSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gbnVsbDtcclxuICAgICAgICBpZiAoc3RtdC52YWx1ZSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZXZhbHVhdGUoc3RtdC52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBSZXR1cm4odmFsdWUpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBUb2tlbiwgVG9rZW5UeXBlIH0gZnJvbSAnLi90b2tlbic7XHJcbmltcG9ydCAqIGFzIEV4cHIgZnJvbSAnLi9leHByZXNzaW9uJztcclxuaW1wb3J0ICogYXMgU3RtdCBmcm9tICcuL3N0YXRlbWVudCc7XHJcbmltcG9ydCB7IENvbnNvbGUgfSBmcm9tICcuL2NvbnNvbGUnO1xyXG5kZWNsYXJlIHZhciBjb256b2xlOiBDb25zb2xlO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnNlciB7XHJcbiAgICBwcml2YXRlIGN1cnJlbnQgPSAwO1xyXG4gICAgcHJpdmF0ZSB0b2tlbnM6IFRva2VuW107XHJcblxyXG4gICAgY29uc3RydWN0b3IodG9rZW5zOiBUb2tlbltdKSB7XHJcbiAgICAgICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBhcnNlKCk6IFN0bXQuU3RtdFtdIHtcclxuICAgICAgIGNvbnN0IHN0YXRlbWVudHM6IFN0bXQuU3RtdFtdID0gW107XHJcbiAgICAgICB3aGlsZSAoIXRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICBzdGF0ZW1lbnRzLnB1c2godGhpcy5kZWNsYXJhdGlvbigpKTtcclxuICAgICAgIH1cclxuICAgICAgIHJldHVybiBzdGF0ZW1lbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWF0Y2goLi4udHlwZXM6IFRva2VuVHlwZVtdKTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChjb25zdCB0eXBlIG9mIHR5cGVzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrKHR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkdmFuY2UoKTogVG9rZW4ge1xyXG4gICAgICAgIGlmICghdGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJldmlvdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBlZWsoKTogVG9rZW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmN1cnJlbnRdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJldmlvdXMoKTogVG9rZW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmN1cnJlbnQgLSAxXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrKHR5cGU6IFRva2VuVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBlZWsoKS50eXBlID09PSB0eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZW9mKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrKFRva2VuVHlwZS5lb2YpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29uc3VtZSh0eXBlOiBUb2tlblR5cGUsIG1lc3NhZ2U6IHN0cmluZyk6IFRva2VuIHtcclxuICAgICAgICBpZiAodGhpcy5jaGVjayh0eXBlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUVycm9yKHRoaXMucHJldmlvdXMoKSwgbWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHRyYVNlbWljb2xvbigpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBtYXRjaCA9IHRoaXMubWF0Y2goVG9rZW5UeXBlLnNlbWljb2xvbik7XHJcbiAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgIHdoaWxlKHRoaXMubWF0Y2goVG9rZW5UeXBlLnNlbWljb2xvbikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWF0Y2g7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZUVycm9yKHRva2VuOiBUb2tlbiwgbWVzc2FnZTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICBpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLmVvZikge1xyXG4gICAgICAgICAgICBjb256b2xlLmVycm9yKGBwYXJzZSBlcnJvciBhdCAoJHt0b2tlbi5saW5lfSk6IGF0IGVuZCAke21lc3NhZ2V9YCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uem9sZS5lcnJvcihgW2xpbmUgKCR7dG9rZW4ubGluZX0pIHBhcnNlIGVycm9yIGF0IFwiJHt0b2tlbi5sZXhlbWV9XCJdID0+ICR7bWVzc2FnZX1gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvciAoJ0Vycm9yIHBhcnNpbmcnKTtcclxuICAgICAgICAvLyB1bnJlYWNoYWJsZSBjb2RlXHJcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbigncGFuaWMnLCAnZXJyb3InLCAnZXJyb3InLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBhcnNlV2FybmluZyhtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICBjb256b2xlLndhcm4oYFtsaW5lICgke3Rva2VuLmxpbmV9KSBwYXJzZSB3YXJuaW5nIGF0IFwiJHt0b2tlbi5sZXhlbWV9XCJdID0+ICR7bWVzc2FnZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN5bmNocm9uaXplKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG5cclxuICAgICAgICB3aGlsZSAoIXRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJldmlvdXMoKS50eXBlID09PSBUb2tlblR5cGUuc2VtaWNvbG9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5wZWVrKCkudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuY2xhc3M6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5mdW5jdGlvbjpcclxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLnZhcjpcclxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLmZvcjpcclxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLmlmOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUud2hpbGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5wcmludDpcclxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLnJldHVybjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGVjbGFyYXRpb24oKTogU3RtdC5TdG10IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuY2xhc3MpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jbGFzc0RlY2xhcmF0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmZ1bmN0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnVuY0RlY2xhcmF0aW9uKFwiZnVuY3Rpb25cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLnZhciwgVG9rZW5UeXBlLmxldCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhckRlY2xhcmF0aW9uKHRoaXMucHJldmlvdXMoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50KCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciBwYXJzaW5nLiBFeGVjdXRpb24gaGFzIGJlZW4gc3RvcHBlZCcpO1xyXG4gICAgICAgICAgICAvLyBUT0RPOiByZWVuYWJsZSBzeW5jaHJvbml6ZVxyXG4gICAgICAgICAgICAvLyB0aGlzLnN5bmNocm9uaXplKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsYXNzRGVjbGFyYXRpb24oKTogU3RtdC5DbGFzcyB7XHJcbiAgICAgICAgY29uc3QgbmFtZTogVG9rZW4gPSB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLmlkZW50aWZpZXIsIGBFeHBlY3RlZCBhIGNsYXNzIG5hbWVgKTtcclxuICAgICAgICBsZXQgcGFyZW50OiBUb2tlbiA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmV4dGVuZHMpKSB7XHJcbiAgICAgICAgICAgIHBhcmVudCAgPSB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLmlkZW50aWZpZXIsIGBFeHBlY3RlZCBhIHBhcmVudCBuYW1lYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUubGVmdEJyYWNlLCBgRXhwZWN0ZWQgXCJ7XCIgYWZ0ZXIgY2xhc3MgbmFtZWApO1xyXG4gICAgICAgIGNvbnN0IG1ldGhvZHM6IFN0bXQuRnVuY1tdID0gW107XHJcblxyXG4gICAgICAgIHdoaWxlICghdGhpcy5jaGVjayhUb2tlblR5cGUucmlnaHRCcmFjZSkgJiYgIXRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgbWV0aG9kcy5wdXNoKHRoaXMuZnVuY0RlY2xhcmF0aW9uKFwibWV0aG9kXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUucmlnaHRCcmFjZSwgYEV4cGVjdGVkIFwifVwiIGFmdGVyIGNsYXNzIFwiJHtuYW1lLmxpdGVyYWx9XCIgbWV0aG9kc2ApO1xyXG4gICAgICAgIGlmICh0aGlzLmV4dHJhU2VtaWNvbG9uKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJzZVdhcm5pbmcoYFVubmVjZXNzYXJ5IHNlbWljb2xvbiBhZnRlciBjbGFzcyAke25hbWUubGV4ZW1lfSBkZWNsYXJhdGlvbmApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFN0bXQuQ2xhc3MobmFtZSwgcGFyZW50LCBtZXRob2RzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZ1bmNEZWNsYXJhdGlvbihraW5kOiBzdHJpbmcpOiBTdG10LkZ1bmMge1xyXG4gICAgICAgIGNvbnN0IG5hbWU6IFRva2VuID0gdGhpcy5jb25zdW1lKFRva2VuVHlwZS5pZGVudGlmaWVyLCBgRXhwZWN0ZWQgYSAke2tpbmR9IG5hbWVgKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5mdW5jQXJnc0JvZHkobmFtZSwgXCJmdW5jdGlvblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZ1bmNBcmdzQm9keShuYW1lOiBUb2tlbiwga2luZDogc3RyaW5nKTogU3RtdC5GdW5jIHtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLmxlZnRQYXJlbiwgYEV4cGVjdGVkIFwiKFwiIGFmdGVyICR7a2luZH1gKTtcclxuICAgICAgICBjb25zdCBwYXJhbXM6IFRva2VuW10gPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5yaWdodFBhcmVuKSkge1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmxlbmd0aCA+PSAyNTUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlRXJyb3IodGhpcy5wZWVrKCksIGBQYXJhbWV0ZXIgY291bnQgZXhjZWVkcyAyNTVgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKHRoaXMuY29uc3VtZShUb2tlblR5cGUuaWRlbnRpZmllciwgYEV4cGVjdGVkIGEgcGFyYW1ldGVyIG5hbWVgKSk7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmNvbW1hKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUucmlnaHRQYXJlbiwgYEV4cGVjdCBcIilcIiBhZnRlciBwYXJhbWV0ZXJzYCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5sZWZ0QnJhY2UpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvZHk6IFN0bXQuU3RtdFtdID0gdGhpcy5ibG9jaygpO1xyXG4gICAgICAgICAgICBpZiAobmFtZS50eXBlICE9PSBUb2tlblR5cGUubGFtYmRhICYmIHRoaXMuZXh0cmFTZW1pY29sb24oKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJzZVdhcm5pbmcoYFVubmVjZXNzYXJ5IHNlbWljb2xvbiBhZnRlciBmdW5jdGlvbiAke25hbWUubGV4ZW1lfSBkZWNsYXJhdGlvbmApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3RtdC5GdW5jKG5hbWUsIHBhcmFtcywgYm9keSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuYXJyb3cpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvZHk6IFN0bXQuU3RtdFtdID0gW107XHJcbiAgICAgICAgICAgIGxldCBhcnJvdzogRXhwci5FeHByO1xyXG4gICAgICAgICAgICBjb25zdCBrZXl3b3JkOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5zZW1pY29sb24pKSB7XHJcbiAgICAgICAgICAgICAgICBhcnJvdyA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2goVG9rZW5UeXBlLnNlbWljb2xvbik7XHJcbiAgICAgICAgICAgIGJvZHkucHVzaChuZXcgU3RtdC5SZXR1cm4oa2V5d29yZCwgYXJyb3cpKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdG10LkZ1bmMobmFtZSwgcGFyYW1zLCBib2R5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5sZWZ0QnJhY2UsIGBFeHBlY3QgXCJ7XCIgYmVmb3JlICR7a2luZH0gYm9keWApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdmFyRGVjbGFyYXRpb24odHlwZTogVG9rZW4pOiBTdG10LlN0bXQge1xyXG4gICAgICAgIGNvbnN0IG5hbWU6IFRva2VuID0gdGhpcy5jb25zdW1lKFRva2VuVHlwZS5pZGVudGlmaWVyLCBgRXhwZWN0ZWQgYSB2YXJpYWJsZSBuYW1lYCk7XHJcbiAgICAgICAgbGV0IGluaXRpYWxpemVyOiBFeHByLkV4cHIgID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuZXF1YWwpKSB7XHJcbiAgICAgICAgICAgIGluaXRpYWxpemVyID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuc2VtaWNvbG9uLCBgRXhwZWN0ZWQgc2VtaWNvbG9uIFwiO1wiIGFmdGVyIGEgdmFsdWUuYCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5WYXIobmFtZSwgdHlwZSwgaW5pdGlhbGl6ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGVtZW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5pZikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWZTdGF0ZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLnByaW50KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmludFN0YXRlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuZG8pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRvV2hpbGVTdGF0ZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLndoaWxlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy53aGlsZVN0YXRlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuZm9yKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JTdGF0ZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmxlZnRCcmFjZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdG10LkJsb2NrKHRoaXMuYmxvY2soKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5yZXR1cm4pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJldHVyblN0YXRlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5leHByZXNzaW9uU3RhdGVtZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpZlN0YXRlbWVudCgpOiBTdG10LlN0bXQge1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUubGVmdFBhcmVuLCBgRXhwZWN0ZWQgXCIoXCIgYWZ0ZXIgYW4gaWZgKTtcclxuICAgICAgICBjb25zdCBjb25kaXRpb246IEV4cHIuRXhwciA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUucmlnaHRQYXJlbiwgYEV4cGVjdGVkIFwiKVwiIGFmdGVyIGlmIGNvbmRpdGlvbmApO1xyXG4gICAgICAgIGNvbnN0IHRoZW5TdG10OiBTdG10LlN0bXQgPSB0aGlzLnN0YXRlbWVudCgpO1xyXG4gICAgICAgIGxldCBlbHNlU3RtdDogU3RtdC5TdG10ID0gIG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmVsc2UpKSB7XHJcbiAgICAgICAgICAgIGVsc2VTdG10ID0gdGhpcy5zdGF0ZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdG10LklmKGNvbmRpdGlvbiwgdGhlblN0bXQsIGVsc2VTdG10KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHdoaWxlU3RhdGVtZW50KCk6IFN0bXQuU3RtdCB7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5sZWZ0UGFyZW4sIGBFeHBlY3RlZCBcIihcIiBhZnRlciBhIHdoaWxlIHN0YXRlbWVudGApO1xyXG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbjogRXhwci5FeHByID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5yaWdodFBhcmVuLCBgRXhwZWN0ZWQgXCIpXCIgYWZ0ZXIgd2hpbGUgY29uZGl0aW9uYCk7XHJcbiAgICAgICAgY29uc3QgbG9vcDogU3RtdC5TdG10ID0gdGhpcy5zdGF0ZW1lbnQoKTtcclxuICAgICAgICByZXR1cm4gbmV3IFN0bXQuV2hpbGUoY29uZGl0aW9uLCBsb29wKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZvclN0YXRlbWVudCgpOiBTdG10LlN0bXQge1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUubGVmdFBhcmVuLCBgRXhwZWN0ZWQgXCIoXCIgYWZ0ZXIgYSBmb3Igc3RhdGVtZW50YCk7XHJcblxyXG4gICAgICAgIGxldCBpbml0aWFsaXplcjogU3RtdC5TdG10O1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5zZW1pY29sb24pKSB7XHJcbiAgICAgICAgICAgIGluaXRpYWxpemVyID0gbnVsbDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLnZhciwgVG9rZW5UeXBlLmxldCkpIHtcclxuICAgICAgICAgICAgaW5pdGlhbGl6ZXIgPSB0aGlzLnZhckRlY2xhcmF0aW9uKHRoaXMucHJldmlvdXMoKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW5pdGlhbGl6ZXIgPSB0aGlzLmV4cHJlc3Npb25TdGF0ZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvbmRpdGlvbjogRXhwci5FeHByO1xyXG4gICAgICAgIGlmICghdGhpcy5jaGVjayhUb2tlblR5cGUuc2VtaWNvbG9uKSkge1xyXG4gICAgICAgICAgICBjb25kaXRpb24gPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5zZW1pY29sb24sIGBFeHBlY3RlZCBcIjtcIiBhZnRlciBsb29wIGNvbmRpdGlvbmApO1xyXG4gICAgICAgIGxldCBpbmNyZW1lbnQ6IEV4cHIuRXhwcjtcclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLnJpZ2h0UGFyZW4pKSB7XHJcbiAgICAgICAgICAgIGluY3JlbWVudCA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLnJpZ2h0UGFyZW4sIGBFeHBlY3RlZCBcIjtcIiBhZnRlciBsb29wIGNvbmRpdGlvbmApO1xyXG4gICAgICAgIGxldCBib2R5OiBTdG10LlN0bXQgPSB0aGlzLnN0YXRlbWVudCgpO1xyXG4gICAgICAgIGlmIChpbmNyZW1lbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgYm9keSA9IG5ldyBTdG10LkJsb2NrKFtcclxuICAgICAgICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICAgICAgICBuZXcgU3RtdC5FeHByZXNzaW9uKGluY3JlbWVudClcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25kaXRpb24gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uZGl0aW9uID0gbmV3IEV4cHIuTGl0ZXJhbCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYm9keSA9IG5ldyBTdG10LldoaWxlKGNvbmRpdGlvbiwgYm9keSk7XHJcbiAgICAgICAgaWYgKGluaXRpYWxpemVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGJvZHkgPSBuZXcgU3RtdC5CbG9jayhbXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsaXplcixcclxuICAgICAgICAgICAgICAgIGJvZHlcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBib2R5O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZG9XaGlsZVN0YXRlbWVudCgpOiBTdG10LlN0bXQge1xyXG4gICAgICAgIGNvbnN0IGxvb3A6IFN0bXQuU3RtdCA9IHRoaXMuc3RhdGVtZW50KCk7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS53aGlsZSwgYEV4cGVjdGVkIGNvbmRpdGlvbiBhZnRlciBkbyBzdGF0ZW1lbnRgKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLmxlZnRQYXJlbiwgYEV4cGVjdGVkIFwiKFwiIGFmdGVyIGEgd2hpbGVgKTtcclxuICAgICAgICBjb25zdCBjb25kaXRpb246IEV4cHIuRXhwciA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUucmlnaHRQYXJlbiwgYEV4cGVjdGVkIFwiKVwiIGFmdGVyIHdoaWxlIGNvbmRpdGlvbmApO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuc2VtaWNvbG9uLCBgRXhwZWN0ZWQgc2VtaWNvbG9uIFwiO1wiIGFmdGVyIGEgZG8gd2hpbGUgY29uZGl0aW9uYCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdG10LkRvV2hpbGUobG9vcCwgY29uZGl0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByaW50U3RhdGVtZW50KCk6IFN0bXQuU3RtdCB7XHJcbiAgICAgICAgY29uc3QgdmFsdWU6IEV4cHIuRXhwciA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuc2VtaWNvbG9uLCBgRXhwZWN0ZWQgc2VtaWNvbG9uIFwiO1wiIGFmdGVyIGV4cHJlc3Npb24uYCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdG10LlByaW50KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJldHVyblN0YXRlbWVudCgpOiBTdG10LlN0bXQge1xyXG4gICAgICAgIGNvbnN0IGtleXdvcmQ6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5jaGVjayhUb2tlblR5cGUuc2VtaWNvbG9uKSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5zZW1pY29sb24sIGBFeGVjdGVkIFwiO1wiIGFmdGVyIHJldHVybiBzdGF0ZW1lbnRgKTtcclxuICAgICAgICByZXR1cm4gbmV3IFN0bXQuUmV0dXJuKGtleXdvcmQsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJsb2NrKCk6IFN0bXQuU3RtdFtdIHtcclxuICAgICAgICBjb25zdCBzdGF0ZW1lbnRzOiBTdG10LlN0bXRbXSA9IFtdO1xyXG4gICAgICAgIHdoaWxlICghdGhpcy5jaGVjayhUb2tlblR5cGUucmlnaHRCcmFjZSkgJiYgIXRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgc3RhdGVtZW50cy5wdXNoKHRoaXMuZGVjbGFyYXRpb24oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUucmlnaHRCcmFjZSwgYEV4cGVjdGVkIGNsb3NpbmcgYmxvY2sgXCJ9XCJgKTtcclxuICAgICAgICByZXR1cm4gc3RhdGVtZW50cztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV4cHJlc3Npb25TdGF0ZW1lbnQoKTogU3RtdC5TdG10IHtcclxuICAgICAgICBjb25zdCBleHByZXNzaW9uOiBFeHByLkV4cHIgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLnNlbWljb2xvbiwgYEV4cGVjdGVkIHNlbWljb2xvbiBcIjtcIiBhZnRlciAke2V4cHJlc3Npb259IGV4cHJlc3Npb25gKTtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuc2VtaWNvbG9uKSkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uem9sZS53YXJuKGBbbGluZSAoJHt0b2tlbi5saW5lfSkgcGFyc2Ugd2FybmluZyBhdCBcIiR7dG9rZW4ubGV4ZW1lfVwiXSA9PiB1bm5lY2Vzc2FyeSBzZW1pY29sb24gb3IgZW1wdHkgc3RhdGVtZW50YCk7XHJcbiAgICAgICAgICAgIHdoaWxlKHRoaXMubWF0Y2goVG9rZW5UeXBlLnNlbWljb2xvbikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFN0bXQuRXhwcmVzc2lvbihleHByZXNzaW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV4cHJlc3Npb24oKTogRXhwci5FeHByIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hc3NpZ25tZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3NpZ25tZW50KCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgY29uc3QgZXhwcjogRXhwci5FeHByID0gdGhpcy50ZXJuYXJ5KCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5lcXVhbCkpIHtcclxuICAgICAgICAgICAgY29uc3QgZXF1YWxzOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWU6IEV4cHIuRXhwciA9IHRoaXMudGVybmFyeSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGV4cHIgaW5zdGFuY2VvZiBFeHByLlZhcmlhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lOiBUb2tlbiA9IGV4cHIubmFtZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5Bc3NpZ24obmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV4cHIgaW5zdGFuY2VvZiBFeHByLkdldCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlNldChleHByLmVudGl0eSwgZXhwci5rZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5wYXJzZUVycm9yKGVxdWFscywgYEludmFsaWQgbC12YWx1ZSwgaXMgbm90IGFuIGFzc2lnbmluZyB0YXJnZXQuYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRlcm5hcnkoKTogRXhwci5FeHByIHtcclxuICAgICAgICBjb25zdCBleHByID0gdGhpcy5lcXVhbGl0eSgpO1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5xdWVzdGlvbikpIHtcclxuICAgICAgICAgICAgY29uc3QgdGhlbkV4cHI6IEV4cHIuRXhwciA9IHRoaXMuZXF1YWxpdHkoKTtcclxuICAgICAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5jb2xvbiwgYEV4cGVjdGVkIFwiOlwiIGFmdGVyIHRlcm5hcnkgPyBleHByZXNzaW9uYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsc2VFeHByOiBFeHByLkV4cHIgPSB0aGlzLmVxdWFsaXR5KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5UZXJuYXJ5KGV4cHIsIHRoZW5FeHByLCBlbHNlRXhwcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBleHByO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXF1YWxpdHkoKTogRXhwci5FeHByIHtcclxuICAgICAgICBsZXQgZXhwciAgPSB0aGlzLmNvbXBhcmlzb24oKTtcclxuXHJcbiAgICAgICAgd2hpbGUgKHRoaXMubWF0Y2goXHJcbiAgICAgICAgICAgIFRva2VuVHlwZS5iYW5nRXF1YWwsIFRva2VuVHlwZS5lcXVhbEVxdWFsLFxyXG4gICAgICAgICAgICBUb2tlblR5cGUuYmFuZ0VxdWFsRXF1YWwsIFRva2VuVHlwZS5lcXVhbEVxdWFsRXF1YWwpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMuY29tcGFyaXNvbigpO1xyXG4gICAgICAgICAgICBleHByID0gbmV3IEV4cHIuQmluYXJ5KGV4cHIsIG9wZXJhdG9yLCByaWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbXBhcmlzb24oKTogRXhwci5FeHByIHtcclxuICAgICAgICBsZXQgZXhwcjogRXhwci5FeHByID0gdGhpcy5hZGRpdGlvbigpO1xyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuZ3JlYXRlciwgVG9rZW5UeXBlLmdyZWF0ZXJFcXVhbCwgVG9rZW5UeXBlLmxlc3MsIFRva2VuVHlwZS5sZXNzRXF1YWwpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMuYWRkaXRpb24oKTtcclxuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkJpbmFyeShleHByLCBvcGVyYXRvciwgcmlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRpdGlvbigpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGxldCBleHByOiBFeHByLkV4cHIgPSB0aGlzLm1vZHVsdXMoKTtcclxuXHJcbiAgICAgICAgd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLm1pbnVzLCBUb2tlblR5cGUucGx1cykpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3I6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBjb25zdCByaWdodDogRXhwci5FeHByID0gdGhpcy5tb2R1bHVzKCk7XHJcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5CaW5hcnkoZXhwciwgb3BlcmF0b3IsIHJpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBleHByO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW9kdWx1cygpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGxldCBleHByOiBFeHByLkV4cHIgPSB0aGlzLm11bHRpcGxpY2F0aW9uKCk7XHJcblxyXG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5wZXJjZW50KSkge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0OiBFeHByLkV4cHIgPSB0aGlzLm11bHRpcGxpY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5CaW5hcnkoZXhwciwgb3BlcmF0b3IsIHJpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBleHByO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbXVsdGlwbGljYXRpb24oKTogRXhwci5FeHByIHtcclxuICAgICAgICBsZXQgZXhwcjogRXhwci5FeHByID0gdGhpcy51bmFyeSgpO1xyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuc2xhc2gsIFRva2VuVHlwZS5zdGFyKSkge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0OiBFeHByLkV4cHIgPSB0aGlzLnVuYXJ5KCk7XHJcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5CaW5hcnkoZXhwciwgb3BlcmF0b3IsIHJpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBleHByO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdW5hcnkoKTogRXhwci5FeHByIHtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUubWludXMsIFRva2VuVHlwZS5iYW5nLCBUb2tlblR5cGUuZG9sbGFyLCBUb2tlblR5cGUucGx1c1BsdXMsIFRva2VuVHlwZS5taW51c01pbnVzKSkge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0OiBFeHByLkV4cHIgPSB0aGlzLnVuYXJ5KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5VbmFyeShvcGVyYXRvciwgcmlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV3S2V5d29yZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbmV3S2V5d29yZCgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5uZXcpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdDogRXhwci5FeHByID0gdGhpcy5jYWxsKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5OZXcoY29uc3RydWN0KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhbGwoKTogRXhwci5FeHByIHtcclxuICAgICAgICBsZXQgZXhwcjogRXhwci5FeHByID0gdGhpcy5wcmltYXJ5KCk7XHJcblxyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5sZWZ0UGFyZW4pKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2FsbGVlID0gZXhwcjtcclxuICAgICAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcmdzOiBFeHByLkV4cHJbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jaGVjayhUb2tlblR5cGUucmlnaHRQYXJlbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZXhwcmVzc2lvbigpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuY29tbWEpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW46IFRva2VuID0gdGhpcy5jb25zdW1lKFRva2VuVHlwZS5yaWdodFBhcmVuLCBgRXhwZWN0ZWQgXCIpXCIgYWZ0ZXIgYXJndW1lbnRzYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGVlID0gbmV3IEV4cHIuQ2FsbChjYWxsZWUsIHBhcmVuLCBhcmdzLCBudWxsKVxyXG4gICAgICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUubGVmdFBhcmVuKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmRvdCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWU6IFRva2VuID0gdGhpcy5jb25zdW1lKFRva2VuVHlwZS5pZGVudGlmaWVyLCBgRXhwZWN0IHByb3BlcnR5IG5hbWUgYWZ0ZXIgJy4nYCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXk6IEV4cHIuS2V5ID0gbmV3IEV4cHIuS2V5KG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkdldChleHByLCBrZXkpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmxlZnRCcmFja2V0KSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5OiBFeHByLkV4cHIgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5HZXQoZXhwciwga2V5KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUucmlnaHRCcmFja2V0LCBgRXhwZWN0ZWQgXCJdXCIgYWZ0ZXIgcHJvcGVydHkgbmFtZSBleHByZXNzaW9uYCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcmltYXJ5KCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmZhbHNlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGl0ZXJhbChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS50cnVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGl0ZXJhbCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLm51bGwpKSB7XHJcbiAgICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGl0ZXJhbChudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLm51bWJlciwgVG9rZW5UeXBlLnN0cmluZ1NpbmdsZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkxpdGVyYWwodGhpcy5wcmV2aW91cygpLmxpdGVyYWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuc3RyaW5nRG91YmxlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuWnRyaW5nKHRoaXMucHJldmlvdXMoKS5saXRlcmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmlkZW50aWZpZXIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSAgdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuVmFyaWFibGUoaWRlbnRpZmllcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5sZWZ0UGFyZW4pKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4cHI6IEV4cHIuRXhwciA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLnJpZ2h0UGFyZW4sIGBFeHBlY3RlZCBcIilcIiBhZnRlciBleHByZXNzaW9uYCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5Hcm91cGluZyhleHByKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmxlZnRCcmFjZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW50aXR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5mdW5jdGlvbikpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW46IFRva2VuID0gbmV3IFRva2VuKCdsYW1iZGEnLCAnbGFtYmRhJywgJ2xhbWJkYScsIHRoaXMucHJldmlvdXMoKS5saW5lKTtcclxuICAgICAgICAgICAgY29uc3QgbGFtYmRhOiBTdG10LkZ1bmMgPSB0aGlzLmZ1bmNBcmdzQm9keSh0b2tlbiwgXCJsYW1iZGFcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5MYW1iZGEobGFtYmRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLmxlZnRCcmFja2V0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hcnJheSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhyb3cgdGhpcy5wYXJzZUVycm9yKHRoaXMucGVlaygpLCBgRXhwZWN0ZWQgZXhwcmVzc2lvbmApO1xyXG4gICAgICAgIC8vIHVucmVhY2hlYWJsZSBjb2RlXHJcbiAgICAgICAgcmV0dXJuIG5ldyBFeHByLkxpdGVyYWwobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVudGl0eSgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5yaWdodEJyYWNlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuRW50aXR5KFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcHJvcGVydGllczogRXhwci5TZXRbXSA9IFtdO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLnN0cmluZ1NpbmdsZSwgVG9rZW5UeXBlLnN0cmluZ0RvdWJsZSwgVG9rZW5UeXBlLmlkZW50aWZpZXIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXk6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5jb2xvbiwgYEV4cGVjdGVkIFwiOlwiIGNvbG9uIGFmdGVyIG1lbWJlcmApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXMucHVzaChuZXcgRXhwci5TZXQobnVsbCwgbmV3IEV4cHIuS2V5KGtleSksIHZhbHVlKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnNlRXJyb3IodGhpcy5wZWVrKCksIGBTdHJpbmcgb3IgaWRlbnRpZmllciBleHBlY3RlZCBhZnRlciBPYmplY3Qge2ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuY29tbWEpKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLnJpZ2h0QnJhY2UsIGBFeHBlY3RlZCBcIn1cIiBhZnRlciBvYmplY3QgbGl0ZXJhbGApO1xyXG4gICAgICAgIHJldHVybiBuZXcgRXhwci5FbnRpdHkocHJvcGVydGllcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhcnJheSgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5yaWdodEJyYWNrZXQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5MaXN0KFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICB2YWx1ZXMucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7XHJcbiAgICAgICAgfSB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuY29tbWEpKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLnJpZ2h0QnJhY2tldCwgYEV4cGVjdGVkIFwiXVwiIGFmdGVyIGFycmF5IGRlY2xhcmF0aW9uYCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFeHByLkxpc3QodmFsdWVzKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gJy4vY29uc29sZSc7XHJcbmRlY2xhcmUgdmFyIGNvbnpvbGU6IENvbnNvbGU7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvdG90eXBlIHtcclxuXHJcbiAgICBwdWJsaWMgdmFsdWVzOiBNYXA8c3RyaW5nLCBhbnk+O1xyXG4gICAgcHJpdmF0ZSBwcm90b3R5cGU6IFByb3RvdHlwZTtcclxuICAgIHByaXZhdGUgb3duZXI6IG9iamVjdDtcclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlczogTWFwPHN0cmluZywgYW55PiwgcGFyZW50OiBQcm90b3R5cGUgPSBudWxsLCBvd25lcjogb2JqZWN0KSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXMgPSBuZXcgTWFwKHZhbHVlcyk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUgPSBwYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5vd25lciA9IG93bmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXMuc2V0KG5hbWUsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZXMuaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzLmdldChrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wcm90b3R5cGUgIT09IG51bGwgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3RvdHlwZS5nZXQoa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uem9sZS5lcnJvcihgW2VudGl0eSBlcnJvcl0gPT4gJHtrZXl9IGlzIG5vdCBkZWZpbmVkIGluICR7dGhpcy5vd25lcn1gKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFJldHVybiBleHRlbmRzIEVycm9yIHtcclxuICAgIHB1YmxpYyB2YWx1ZTogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbnRlcm5hbEVudGl0eSwgQXJyYXlFbnRpdHksIFN0cmluZ0VudGl0eSwgRnVuY3Rpb25FbnRpdHkgfSBmcm9tIFwiLi9lbnRpdHlcIjtcclxuaW1wb3J0IHsgUHJvdG90eXBlIH0gZnJvbSBcIi4vcHJvdG90eXBlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFzT3duUHJvcGVydHkodGhhdDogYW55KTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8aW50ZXJuYWwgZnVuY3Rpb24gaGFzT3duUHJvcGVydHk+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAxO1xyXG4gICAgZnVuYy5jYWxsID0gKGludCwgdGhpeiwgYXJncykgPT4gdGhpei5wcm9wZXJ0aWVzLmhhcyhhcmdzWzBdKTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aFByb3BlcnR5KHRoYXQ6IGFueSk6IEludGVybmFsRW50aXR5IHtcclxuICAgIGNvbnN0IGZ1bmMgPSBuZXcgSW50ZXJuYWxFbnRpdHkoKTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPGludGVybmFsIGZ1bmN0aW9uIHNpemU+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAwO1xyXG4gICAgZnVuYy5jYWxsID0gKGludCwgdGhpeiwgYXJncykgPT4gdGhpei5wcm9wZXJ0aWVzLnNpemU7XHJcbiAgICByZXR1cm4gZnVuYztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGludm9rZU1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBmdW5jdGlvbiBpbnZva2U+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAtMTtcclxuICAgIGZ1bmMuY2FsbCA9IChpbnQsIHRoaXosIGFyZ3MpID0+IHRoaXouY2FsbChpbnQsIGFyZ3NbMF0sIGFyZ3Muc2xpY2UoMSkpO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyQ2FsbCh0aGF0OiBhbnksIGluc3RhbmNlOiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLmFyaXR5ID0gKCkgPT4gdGhhdC5wYXJlbnQuYXJpdHkoKTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPG5hdGl2ZSBzdXBlciBmdW5jdGlvbj4nO1xyXG4gICAgZnVuYy5jYWxsID0gKGludCwgdGhpeiwgYXJncykgPT5cclxuICAgICAgICB0aGF0LnBhcmVudC5jYWxsKGludCwgaW5zdGFuY2UsIGFyZ3MpO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZU1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICAvKiogbWVyZ2UoUGFyZW50LCBvdmVycmlkZT1mYWxzZSkgKi9cclxuICAgIGZ1bmMuY2FsbCA9IChpbnQsIHRoaXosIGFyZ3MpID0+IHtcclxuICAgICAgICB0aGF0LnByb3BlcnRpZXMgPSBhcmdzWzFdID9cclxuICAgICAgICAgICAgbmV3IE1hcChbLi4udGhhdC5wcm9wZXJ0aWVzLCAuLi5hcmdzWzBdLnByb3BlcnRpZXNdKSA6XHJcbiAgICAgICAgICAgIG5ldyBNYXAoWy4uLmFyZ3NbMF0ucHJvcGVydGllcywgLi4udGhhdC5wcm9wZXJ0aWVzXSk7XHJcbiAgICB9O1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8aW50ZXJuYWwgbWVyZ2UgZnVuY3Rpb24+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAtMTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kTWV0aG9kKHRoYXQ6IGFueSk6IEludGVybmFsRW50aXR5IHtcclxuICAgIGNvbnN0IGZ1bmMgPSBuZXcgSW50ZXJuYWxFbnRpdHkoKTtcclxuICAgIGZ1bmMuY2FsbCA9IChpbnQsIHRoaXosIGFyZ3MpID0+IHtcclxuICAgICAgICBjb25zdCBwcm90byA9IG5ldyBQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIHRoYXQucHJvcGVydGllcyxcclxuICAgICAgICAgICAgbmV3IFByb3RvdHlwZShhcmdzWzBdLnByb3BlcnRpZXMsIGFyZ3NbMF0ucHJvdG90eXBlLCB0aGl6KSxcclxuICAgICAgICAgICAgdGhpelxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhhdC5wcm90b3R5cGUgPSBwcm90bztcclxuICAgIH07XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBtZXJnZSBmdW5jdGlvbj4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IC0xO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbmhlcml0TWV0aG9kKHRoYXQ6IGFueSk6IEludGVybmFsRW50aXR5IHtcclxuICAgIGNvbnN0IGZ1bmMgPSBuZXcgSW50ZXJuYWxFbnRpdHkoKTtcclxuICAgIGZ1bmMuY2FsbCA9IChpbnQsIHRoaXosIGFyZ3MpID0+IHtcclxuICAgICAgICB0aGF0LnByb3RvdHlwZS52YWx1ZXMgPSBuZXcgTWFwKFsuLi5hcmdzWzBdLnByb3BlcnRpZXMsIC4uLnRoYXQucHJvdG90eXBlLnZhbHVlc10pO1xyXG4gICAgfTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPGludGVybmFsIGluaGVyaXRhbmNlIGZ1bmN0aW9uPic7XHJcbiAgICBmdW5jLmFyaXR5ID0gKCkgPT4gMTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZWNob0Z1bmN0aW9uKCk6IEludGVybmFsRW50aXR5IHtcclxuICAgIGNvbnN0IGZ1bmMgPSBuZXcgSW50ZXJuYWxFbnRpdHkoKTtcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAxO1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8bmF0aXZlIGZ1bmN0aW9uPic7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50ZXJwcmV0ZXIsIHRoaXosIGFyZ3MpID0+IGNvbnNvbGUubG9nKGFyZ3NbMF0pO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kRnVuY3Rpb24oKTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IDA7XHJcbiAgICBmdW5jLmNhbGwgPSAoKSA9PiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8bmF0aXZlIGZ1bmN0aW9uPic7XHJcbiAgICByZXR1cm4gZnVuYztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5TGVuZ3RoTWV0aG9kKHRoYXQ6IGFueSk6IEludGVybmFsRW50aXR5IHtcclxuICAgIGNvbnN0IGZ1bmMgPSBuZXcgSW50ZXJuYWxFbnRpdHkoKTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPGludGVybmFsIGZ1bmN0aW9uIHNpemU+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAwO1xyXG4gICAgZnVuYy5jYWxsID0gKGludCwgdGhpeiwgYXJncykgPT4gdGhpei52YWx1ZXMubGVuZ3RoO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJheUpvaW5NZXRob2QodGhhdDogYW55KTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8aW50ZXJuYWwgZnVuY3Rpb24gc2l6ZT4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IDE7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiBuZXcgU3RyaW5nRW50aXR5KHRoaXoudmFsdWVzLmpvaW4oYXJnc1swXSkpO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJheVB1c2hNZXRob2QodGhhdDogYW55KTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8aW50ZXJuYWwgZnVuY3Rpb24gc2l6ZT4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IDE7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiB0aGl6LnZhbHVlcy5wdXNoKGFyZ3NbMF0pO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJheVBvcE1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBmdW5jdGlvbiBzaXplPic7XHJcbiAgICBmdW5jLmFyaXR5ID0gKCkgPT4gMDtcclxuICAgIGZ1bmMuY2FsbCA9IChpbnQsIHRoaXosIGFyZ3MpID0+IHRoaXoudmFsdWVzLnBvcChhcmdzWzBdKTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlFYWNoTWV0aG9kKHRoYXQ6IGFueSk6IEludGVybmFsRW50aXR5IHtcclxuICAgIGNvbnN0IGZ1bmMgPSBuZXcgSW50ZXJuYWxFbnRpdHkoKTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPGludGVybmFsIGZ1bmN0aW9uIHNpemU+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAtMTtcclxuICAgIGZ1bmMuY2FsbCA9IChpbnQsIHRoaXosIGFyZ3MpID0+IHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpei52YWx1ZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgPEZ1bmN0aW9uRW50aXR5PmFyZ3NbMF0uY2FsbChpbnQsIHRoaXosIFt0aGl6LnZhbHVlc1tpXSwgaSwgdGhpel0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuYztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5TWFwTWV0aG9kKHRoYXQ6IGFueSk6IEludGVybmFsRW50aXR5IHtcclxuICAgIGNvbnN0IGZ1bmMgPSBuZXcgSW50ZXJuYWxFbnRpdHkoKTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPGludGVybmFsIGZ1bmN0aW9uIHNpemU+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAtMTtcclxuICAgIGZ1bmMuY2FsbCA9IChpbnQsIHRoaXosIGFyZ3MpID0+IHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXoudmFsdWVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXoudmFsdWVzW2ldID0gPEZ1bmN0aW9uRW50aXR5PmFyZ3NbMF0uY2FsbChpbnQsIHRoaXosIFt0aGl6LnZhbHVlc1tpXSwgaSwgdGhpel0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuYztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5RmluZE1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBmdW5jdGlvbiBzaXplPic7XHJcbiAgICBmdW5jLmFyaXR5ID0gKCkgPT4gLTE7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGl6LnZhbHVlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAoPEZ1bmN0aW9uRW50aXR5PmFyZ3NbMF0uY2FsbChpbnQsIHRoaXosIFt0aGl6LnZhbHVlc1tpXSwgaSwgdGhpel0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpei52YWx1ZXNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJheUluZGV4T2ZNZXRob2QodGhhdDogYW55KTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8aW50ZXJuYWwgZnVuY3Rpb24gc2l6ZT4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IDE7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGl6LnZhbHVlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAodGhpei52YWx1ZXNbaV0gPT09IGFyZ3NbMF0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nTGVuZ3RoTWV0aG9kKHRoYXQ6IGFueSk6IEludGVybmFsRW50aXR5IHtcclxuICAgIGNvbnN0IGZ1bmMgPSBuZXcgSW50ZXJuYWxFbnRpdHkoKTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPGludGVybmFsIGZ1bmN0aW9uIHNpemU+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAwO1xyXG4gICAgZnVuYy5jYWxsID0gKGludCwgdGhpeiwgYXJncykgPT4gdGhpei52YWx1ZS5sZW5ndGg7XHJcbiAgICByZXR1cm4gZnVuYztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ1N1YlN0ck1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBmdW5jdGlvbiBzaXplPic7XHJcbiAgICBmdW5jLmFyaXR5ID0gKCkgPT4gLTE7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiBuZXcgU3RyaW5nRW50aXR5KHRoaXoudmFsdWUuc3Vic3RyKGFyZ3NbMF0sIGFyZ3NbMV0pKTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nU3BsaXRNZXRob2QodGhhdDogYW55KTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8aW50ZXJuYWwgZnVuY3Rpb24gc2l6ZT4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IDE7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiBuZXcgQXJyYXlFbnRpdHkodGhpei52YWx1ZS5zcGxpdChhcmdzWzBdKSk7XHJcbiAgICByZXR1cm4gZnVuYztcclxufVxyXG4iLCJpbXBvcnQgeyBUb2tlbiwgVG9rZW5UeXBlIH0gZnJvbSAnLi4vc3JjL3Rva2VuJztcclxuaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gJy4vY29uc29sZSc7XHJcbmRlY2xhcmUgdmFyIGNvbnpvbGU6IENvbnNvbGU7XHJcblxyXG5jb25zdCBpc0RpZ2l0ID0gKGNoYXI6IHN0cmluZykgPT4gY2hhciA+PSAnMCcgJiYgY2hhciA8PSAnOSc7XHJcblxyXG5jb25zdCBpc0FscGhhID0gKGNoYXI6IHN0cmluZyApID0+IChjaGFyID49ICdhJyAmJiBjaGFyIDw9ICd6JykgfHwgKGNoYXIgPj0gJ0EnICYmIGNoYXIgPD0gJ1onKTtcclxuXHJcbmNvbnN0IGlzQWxwaGFOdW1lcmljID0gKGNoYXI6IHN0cmluZykgPT4gaXNBbHBoYShjaGFyKSB8fCBpc0RpZ2l0KGNoYXIpO1xyXG5cclxuY29uc3QgaXNLZXl3b3JkID0gKHdvcmQ6IHN0cmluZykgPT4gVG9rZW5UeXBlW3dvcmRdID49IDIzO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjYW5uZXIge1xyXG5cclxuICAgIHB1YmxpYyBzb3VyY2U6IHN0cmluZztcclxuICAgIHB1YmxpYyB0b2tlbnM6IFRva2VuW10gPSBbXTtcclxuICAgIHByaXZhdGUgY3VycmVudCA9IDA7XHJcbiAgICBwcml2YXRlIGxpbmUgPSAxO1xyXG4gICAgcHJpdmF0ZSBzdGFydCA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc291cmNlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVvZigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50ID49IHRoaXMuc291cmNlLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkdmFuY2UoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Kys7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLmNoYXJBdCh0aGlzLmN1cnJlbnQgLSAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFRva2VuKHRva2VuTmFtZTogc3RyaW5nLCBsaXRlcmFsOiBhbnkpIHtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5zb3VyY2Uuc3Vic3RyaW5nKHRoaXMuc3RhcnQsIHRoaXMuY3VycmVudCk7XHJcbiAgICAgICAgdGhpcy50b2tlbnMucHVzaChuZXcgVG9rZW4odG9rZW5OYW1lLCB0ZXh0LCBsaXRlcmFsLCB0aGlzLmxpbmUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1hdGNoKGV4cGVjdGVkOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zb3VyY2UuY2hhckF0KHRoaXMuY3VycmVudCkgIT09IGV4cGVjdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudCsrO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGVlaygpIHtcclxuICAgICAgICBpZiAodGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ1xcMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5jaGFyQXQodGhpcy5jdXJyZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBlZWtOZXh0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnQgKyAxID49IHRoaXMuc291cmNlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ1xcMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5jaGFyQXQodGhpcy5jdXJyZW50ICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb21tZW50KCkge1xyXG4gICAgICAgIHdoaWxlICh0aGlzLnBlZWsoKSAhPT0gJ1xcbicgJiYgIXRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RyaW5nKHF1b3RlOiBzdHJpbmcsIHR5cGU6IFRva2VuVHlwZSkge1xyXG4gICAgICAgIHdoaWxlICh0aGlzLnBlZWsoKSAhPT0gcXVvdGUgJiYgIXRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGVlaygpID09PSAnXFxuJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saW5lKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVbnRlcm1pbmF0ZWQgc3RyaW5nLlxyXG4gICAgICAgIGlmICh0aGlzLmVvZigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NhbkVycm9yKGBVbnRlcm1pbmF0ZWQgc3RyaW5nLCBleHBlY3RpbmcgY2xvc2luZyAke3F1b3RlfWApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUaGUgY2xvc2luZyBcIi5cclxuICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuXHJcbiAgICAgICAgLy8gVHJpbSB0aGUgc3Vycm91bmRpbmcgcXVvdGVzLlxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zb3VyY2Uuc3Vic3RyaW5nKHRoaXMuc3RhcnQgKyAxLCB0aGlzLmN1cnJlbnQgLSAxKTtcclxuICAgICAgICBpZiAodHlwZT09PVRva2VuVHlwZS5zdHJpbmdTaW5nbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRUb2tlbignc3RyaW5nU2luZ2xlJywgdmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4oJ3N0cmluZ0RvdWJsZScsIHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbnVtYmVyKCkge1xyXG4gICAgICAgIC8vIGdldHMgaW50ZWdlciBwYXJ0XHJcbiAgICAgICAgd2hpbGUgKGlzRGlnaXQodGhpcy5wZWVrKCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2hlY2tzIGZvciBmcmFjdGlvblxyXG4gICAgICAgIGlmICh0aGlzLnBlZWsoKSA9PT0gJy4nICYmIGlzRGlnaXQodGhpcy5wZWVrTmV4dCgpKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGdldHMgZnJhY3Rpb24gcGFydFxyXG4gICAgICAgIHdoaWxlIChpc0RpZ2l0KHRoaXMucGVlaygpKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zb3VyY2Uuc3Vic3RyaW5nKHRoaXMuc3RhcnQgLCB0aGlzLmN1cnJlbnQpO1xyXG4gICAgICAgIHRoaXMuYWRkVG9rZW4oJ251bWJlcicsIE51bWJlcih2YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaWRlbnRpZmllcigpIHtcclxuICAgICAgICB3aGlsZSAoaXNBbHBoYU51bWVyaWModGhpcy5wZWVrKCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5zb3VyY2Uuc3Vic3RyaW5nKHRoaXMuc3RhcnQsIHRoaXMuY3VycmVudCk7XHJcbiAgICAgICAgdmFsdWUgPSB2YWx1ZSA9PT0gJ2Z1bmMnID8gJ2Z1bmN0aW9uJyA6IHZhbHVlO1xyXG4gICAgICAgIGlmIChpc0tleXdvcmQodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4odmFsdWUsIG51bGwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4oJ2lkZW50aWZpZXInLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzY2FuKCkge1xyXG4gICAgICAgIHdoaWxlICghdGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0ID0gdGhpcy5jdXJyZW50O1xyXG4gICAgICAgICAgICB0aGlzLnNjYW5Ub2tlbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50b2tlbnMucHVzaChuZXcgVG9rZW4oJ2VvZicsICcnLCBudWxsLCB0aGlzLmxpbmUpKTtcclxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzY2FuVG9rZW4oKSB7XHJcbiAgICAgICAgY29uc3QgY2hhciA9IHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIHN3aXRjaCAoY2hhcikge1xyXG4gICAgICAgICAgICBjYXNlICcoJzogdGhpcy5hZGRUb2tlbignbGVmdFBhcmVuJywgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcpJzogdGhpcy5hZGRUb2tlbigncmlnaHRQYXJlbicsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnWyc6IHRoaXMuYWRkVG9rZW4oJ2xlZnRCcmFja2V0JywgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICddJzogdGhpcy5hZGRUb2tlbigncmlnaHRCcmFja2V0JywgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd7JzogdGhpcy5hZGRUb2tlbignbGVmdEJyYWNlJywgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd9JzogdGhpcy5hZGRUb2tlbigncmlnaHRCcmFjZScsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnLCc6IHRoaXMuYWRkVG9rZW4oJ2NvbW1hJywgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcuJzogdGhpcy5hZGRUb2tlbignZG90JywgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc7JzogdGhpcy5hZGRUb2tlbignc2VtaWNvbG9uJywgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcqJzogdGhpcy5hZGRUb2tlbignc3RhcicsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnXic6IHRoaXMuYWRkVG9rZW4oJ2NhcmV0JywgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc/JzogdGhpcy5hZGRUb2tlbigncXVlc3Rpb24nLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzonOiB0aGlzLmFkZFRva2VuKCdjb2xvbicsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnJSc6IHRoaXMuYWRkVG9rZW4oJ3BlcmNlbnQnLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyQnOiB0aGlzLmFkZFRva2VuKCdkb2xsYXInLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0AnOiB0aGlzLmFkZFRva2VuKCdmdW5jdGlvbicsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnLSc6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnLScpID8gJ21pbnVzTWludXMnIDogdGhpcy5tYXRjaCgnPicpID8gJ3JldHVybicgOiAnbWludXMnLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJysnOiB0aGlzLmFkZFRva2VuKHRoaXMubWF0Y2goJysnKSA/ICdwbHVzUGx1cycgOiAncGx1cycsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnfCc6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnfCcpID8gJ29yJyA6ICdwaXBlJywgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc8JzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCc9JykgPyAnbGVzc0VxdWFsJyA6ICdsZXNzJywgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc+JzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCc9JykgPyAnZ3JlYXRlckVxdWFsJyA6ICdncmVhdGVyJywgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICchJzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCc9JykgPyB0aGlzLm1hdGNoKCc9JykgPyAnYmFuZ0VxdWFsRXF1YWwnIDogJ2JhbmdFcXVhbCcgOiAnYmFuZycsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnPSc6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXRjaCgnPScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goJz0nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKCdlcXVhbEVxdWFsRXF1YWwnLCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKCdlcXVhbEVxdWFsJywgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1hdGNoKCc+JykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKCdhcnJvdycsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKCdlcXVhbCcsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJy8nOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goJy8nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKCdzbGFzaCcsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ1xcbic6IHRoaXMubGluZSsrOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBgJ2A6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0cmluZyhjaGFyLCBUb2tlblR5cGUuc3RyaW5nU2luZ2xlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGBcImA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0cmluZyhjaGFyLCBUb2tlblR5cGUuc3RyaW5nRG91YmxlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvLyBpZ25vcmUgY2FzZXNcclxuICAgICAgICAgICAgY2FzZSAnICc6XHJcbiAgICAgICAgICAgIGNhc2UgJ1xccic6XHJcbiAgICAgICAgICAgIGNhc2UgJ1xcdCc6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gY29tcGV4IGNhc2VzXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNEaWdpdChjaGFyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzQWxwaGEoY2hhcikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlkZW50aWZpZXIoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2FuRXJyb3IoYFVuZXhwZWN0ZWQgY2hhcmFjdGVyICcke2NoYXJ9J2ApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2NhbkVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnpvbGUuZXJyb3IoYEVycm9yIGF0ICgke3RoaXMubGluZX0pOiAgJHttZXNzYWdlfWApO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3Igd2hpbGUgc2Nhbm5pbmcuIEV4ZWN1dGlvbiBoYXMgYmVlbiBzdG9wZWQnKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgVG9rZW4gfSBmcm9tICcuL3Rva2VuJztcclxuaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gJy4vY29uc29sZSc7XHJcbmRlY2xhcmUgdmFyIGNvbnpvbGU6IENvbnNvbGU7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NvcGUge1xyXG5cclxuICAgIHByaXZhdGUgdmFsdWVzOiBNYXA8c3RyaW5nLCBhbnk+O1xyXG4gICAgcHJpdmF0ZSBwYXJlbnQ6IFNjb3BlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmVudDogU2NvcGUgPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzY29wZUVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnpvbGUuZXJyb3IoYFtzY29wZSBlcnJvcl0gPT4gJHttZXNzYWdlfWApO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXMuc2V0KG5hbWUsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVmaW5lKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlcy5oYXMobmFtZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zY29wZUVycm9yKGBpZGVudGlmaWVyIFwiJHtuYW1lfVwiIGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZGApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0KG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzc2lnbihuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZXMuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0KG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5hc3NpZ24obmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcGVFcnJvcihgSWRlbnRpZmllciBcIiR7bmFtZX1cIiBoYXMgbm90IGJlZW4gZGVmaW5lZGApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KG5hbWU6IFRva2VuKTogYW55IHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZXMuaGFzKG5hbWUubGV4ZW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMuZ2V0KG5hbWUubGV4ZW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50ICE9PSBudWxsICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ2V0KG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjb3BlRXJyb3IoYEVycm9yIGF0ICgke25hbWUubGluZX0pOiBcIiR7bmFtZS5sZXhlbWV9XCIgaXMgbm90IGRlZmluZWRgKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgVG9rZW4gfSBmcm9tICd0b2tlbic7XG5cbmltcG9ydCB7IEV4cHIgfSBmcm9tICdleHByZXNzaW9uJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0bXQge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgIGNvbnN0cnVjdG9yKCkge31cbiAgICBwdWJsaWMgYWJzdHJhY3QgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUjtcbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5leHBvcnQgaW50ZXJmYWNlIFN0bXRWaXNpdG9yPFI+IHtcbiAgICB2aXNpdEJsb2NrU3RtdChzdG10OiBCbG9jayk6IFI7XG4gICAgdmlzaXRFeHByZXNzaW9uU3RtdChzdG10OiBFeHByZXNzaW9uKTogUjtcbiAgICB2aXNpdElmU3RtdChzdG10OiBJZik6IFI7XG4gICAgdmlzaXRGdW5jU3RtdChzdG10OiBGdW5jKTogUjtcbiAgICB2aXNpdENsYXNzU3RtdChzdG10OiBDbGFzcyk6IFI7XG4gICAgdmlzaXRSZXR1cm5TdG10KHN0bXQ6IFJldHVybik6IFI7XG4gICAgdmlzaXRXaGlsZVN0bXQoc3RtdDogV2hpbGUpOiBSO1xuICAgIHZpc2l0RG9XaGlsZVN0bXQoc3RtdDogRG9XaGlsZSk6IFI7XG4gICAgdmlzaXRQcmludFN0bXQoc3RtdDogUHJpbnQpOiBSO1xuICAgIHZpc2l0VmFyU3RtdChzdG10OiBWYXIpOiBSO1xufVxuXG5leHBvcnQgY2xhc3MgQmxvY2sgZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMgc3RhdGVtZW50czogU3RtdFtdO1xuXG4gICAgY29uc3RydWN0b3Ioc3RhdGVtZW50czogU3RtdFtdKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGVtZW50cyA9IHN0YXRlbWVudHM7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEJsb2NrU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LkJsb2NrJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRXhwcmVzc2lvbiBleHRlbmRzIFN0bXQge1xuICAgIHB1YmxpYyBleHByZXNzaW9uOiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IoZXhwcmVzc2lvbjogRXhwcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRFeHByZXNzaW9uU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LkV4cHJlc3Npb24nO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBJZiBleHRlbmRzIFN0bXQge1xuICAgIHB1YmxpYyBjb25kaXRpb246IEV4cHI7XG4gICAgcHVibGljIHRoZW5TdG10OiBTdG10O1xuICAgIHB1YmxpYyBlbHNlU3RtdDogU3RtdDtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmRpdGlvbjogRXhwciwgdGhlblN0bXQ6IFN0bXQsIGVsc2VTdG10OiBTdG10KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgICAgICB0aGlzLnRoZW5TdG10ID0gdGhlblN0bXQ7XG4gICAgICAgIHRoaXMuZWxzZVN0bXQgPSBlbHNlU3RtdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0SWZTdG10KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1N0bXQuSWYnO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBGdW5jIGV4dGVuZHMgU3RtdCB7XG4gICAgcHVibGljIG5hbWU6IFRva2VuO1xuICAgIHB1YmxpYyBwYXJhbXM6IFRva2VuW107XG4gICAgcHVibGljIGJvZHk6IFN0bXRbXTtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IFRva2VuLCBwYXJhbXM6IFRva2VuW10sIGJvZHk6IFN0bXRbXSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgICAgICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RnVuY1N0bXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnU3RtdC5GdW5jJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ2xhc3MgZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMgbmFtZTogVG9rZW47XG4gICAgcHVibGljIHBhcmVudDogVG9rZW47XG4gICAgcHVibGljIG1ldGhvZHM6IEZ1bmNbXTtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IFRva2VuLCBwYXJlbnQ6IFRva2VuLCBtZXRob2RzOiBGdW5jW10pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMubWV0aG9kcyA9IG1ldGhvZHM7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdENsYXNzU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LkNsYXNzJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUmV0dXJuIGV4dGVuZHMgU3RtdCB7XG4gICAgcHVibGljIGtleXdvcmQ6IFRva2VuO1xuICAgIHB1YmxpYyB2YWx1ZTogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKGtleXdvcmQ6IFRva2VuLCB2YWx1ZTogRXhwcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmtleXdvcmQgPSBrZXl3b3JkO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFJldHVyblN0bXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnU3RtdC5SZXR1cm4nO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXaGlsZSBleHRlbmRzIFN0bXQge1xuICAgIHB1YmxpYyBjb25kaXRpb246IEV4cHI7XG4gICAgcHVibGljIGxvb3A6IFN0bXQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25kaXRpb246IEV4cHIsIGxvb3A6IFN0bXQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgICAgIHRoaXMubG9vcCA9IGxvb3A7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFdoaWxlU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LldoaWxlJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRG9XaGlsZSBleHRlbmRzIFN0bXQge1xuICAgIHB1YmxpYyBsb29wOiBTdG10O1xuICAgIHB1YmxpYyBjb25kaXRpb246IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3Rvcihsb29wOiBTdG10LCBjb25kaXRpb246IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5sb29wID0gbG9vcDtcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdERvV2hpbGVTdG10KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1N0bXQuRG9XaGlsZSc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFByaW50IGV4dGVuZHMgU3RtdCB7XG4gICAgcHVibGljIGV4cHJlc3Npb246IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihleHByZXNzaW9uOiBFeHByKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFByaW50U3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LlByaW50JztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVmFyIGV4dGVuZHMgU3RtdCB7XG4gICAgcHVibGljIG5hbWU6IFRva2VuO1xuICAgIHB1YmxpYyB0eXBlOiBUb2tlbjtcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZXI6IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBUb2tlbiwgdHlwZTogVG9rZW4sIGluaXRpYWxpemVyOiBFeHByKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZXIgPSBpbml0aWFsaXplcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VmFyU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LlZhcic7XG4gICAgfVxufVxuIiwiZXhwb3J0IGVudW0gVG9rZW5UeXBlIHtcclxuICAgIC8vIHBhcnNlciB0b2tlbnNcclxuICAgIGVvZixcclxuICAgIHBhbmljLFxyXG4gICAgbGFtYmRhLFxyXG5cclxuICAgIC8vIHNpbmdsZSBjaGFyYWN0ZXIgdG9rZW5zXHJcbiAgICBsZWZ0UGFyZW4sXHJcbiAgICByaWdodFBhcmVuLFxyXG4gICAgbGVmdEJyYWNrZXQsXHJcbiAgICByaWdodEJyYWNrZXQsXHJcbiAgICBsZWZ0QnJhY2UsXHJcbiAgICByaWdodEJyYWNlLFxyXG4gICAgY29tbWEsXHJcbiAgICBkb3QsXHJcbiAgICBzZW1pY29sb24sXHJcbiAgICBzbGFzaCxcclxuICAgIHN0YXIsXHJcbiAgICBwaXBlLFxyXG4gICAgY2FyZXQsXHJcbiAgICBwZXJjZW50LFxyXG4gICAgZG9sbGFyLFxyXG4gICAgYXRTaWduLFxyXG5cclxuICAgIC8vIG9uZSBvciB0d28gY2hhcmFjdGVyIHRva2Vuc1xyXG4gICAgbWludXMsXHJcbiAgICBtaW51c01pbnVzLFxyXG4gICAgcGx1cyxcclxuICAgIHBsdXNQbHVzLFxyXG4gICAgYmFuZyxcclxuICAgIGJhbmdFcXVhbCxcclxuICAgIGVxdWFsLFxyXG4gICAgZXF1YWxFcXVhbCxcclxuICAgIGdyZWF0ZXIsXHJcbiAgICBncmVhdGVyRXF1YWwsXHJcbiAgICBsZXNzLFxyXG4gICAgbGVzc0VxdWFsLFxyXG4gICAgY29sb24sXHJcbiAgICBxdWVzdGlvbixcclxuICAgIGFycm93LFxyXG5cclxuICAgIC8vIHRocmVlIGNoYXJhY3RlciB0b2tlbnNcclxuICAgIGJhbmdFcXVhbEVxdWFsLFxyXG4gICAgZXF1YWxFcXVhbEVxdWFsLFxyXG5cclxuICAgIC8vIGxpdGVyYWxzXHJcbiAgICBpZGVudGlmaWVyLFxyXG4gICAgc3RyaW5nU2luZ2xlLFxyXG4gICAgc3RyaW5nRG91YmxlLFxyXG4gICAgbnVtYmVyLFxyXG5cclxuICAgIC8vIGtleXdvcmRzXHJcbiAgICBhbmQsXHJcbiAgICBjbGFzcyxcclxuICAgIGV4dGVuZHMsXHJcbiAgICBkbyxcclxuICAgIGVsc2UsXHJcbiAgICBmYWxzZSxcclxuICAgIGZ1bmN0aW9uLFxyXG4gICAgZnVuYyxcclxuICAgIGZvcixcclxuICAgIGlmLFxyXG4gICAgbmV3LFxyXG4gICAgbnVsbCxcclxuICAgIG9yLFxyXG4gICAgcHJpbnQsXHJcbiAgICByZXR1cm4sXHJcbiAgICB0cnVlLFxyXG4gICAgdmFyLFxyXG4gICAgbGV0LFxyXG4gICAgd2hpbGVcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRva2VuIHtcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbGluZTogbnVtYmVyO1xyXG4gICAgcHVibGljIHR5cGU6IFRva2VuVHlwZTtcclxuICAgIHB1YmxpYyBsaXRlcmFsOiBhbnk7XHJcbiAgICBwdWJsaWMgbGV4ZW1lOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBsZXhlbWU6IHN0cmluZywgbGl0ZXJhbDogYW55LCBsaW5lOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IFRva2VuVHlwZVtuYW1lXTtcclxuICAgICAgICB0aGlzLmxleGVtZSA9IGxleGVtZTtcclxuICAgICAgICB0aGlzLmxpdGVyYWwgPSBsaXRlcmFsO1xyXG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gYFsoJHt0aGlzLmxpbmV9KTpcIiR7dGhpcy5sZXhlbWV9XCJdYDtcclxuICAgIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==