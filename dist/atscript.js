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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/atscript.ts");
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

/***/ "./src/atscript.ts":
/*!*************************!*\
  !*** ./src/atscript.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _scanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scanner */ "./src/scanner.ts");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser */ "./src/parser.ts");
/* harmony import */ var _interpreter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interpreter */ "./src/interpreter.ts");
/* harmony import */ var _console__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./console */ "./src/console.ts");
/* harmony import */ var _demos_demo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demos/demo */ "./src/demos/demo.ts");





if (typeof window === 'undefined') {
    global.window = global;
}
window.conzole = new _console__WEBPACK_IMPORTED_MODULE_3__["Console"]();
window.demoSourceCode = _demos_demo__WEBPACK_IMPORTED_MODULE_4__["DemoSourceCode"];
window.atscript = (source) => {
    try {
        return (new _interpreter__WEBPACK_IMPORTED_MODULE_2__["Interpreter"]().interpet((new _parser__WEBPACK_IMPORTED_MODULE_1__["Parser"]((new _scanner__WEBPACK_IMPORTED_MODULE_0__["Scanner"](source)).scan())).parse()));
    }
    catch (e) {
        console.error(e);
    }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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

/***/ "./src/demos/demo.ts":
/*!***************************!*\
  !*** ./src/demos/demo.ts ***!
  \***************************/
/*! exports provided: DemoSourceCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoSourceCode", function() { return DemoSourceCode; });
const DemoSourceCode = `

class Person {

    constructor(name) {
        this.name = name;
    }

    hello() {
        print this.name + ' says hello';
    }
}

class Student extends Person {

    constructor(name, grade) {
        super.constructor(name);
        this.grade = grade;
    }

    hello() {
        super.hello();
        print this.name + 'is in grade ' + this.grade;
    }
}

var s = new Student('John', 3);
s.hello();


`;


/***/ }),

/***/ "./src/expression.ts":
/*!***************************!*\
  !*** ./src/expression.ts ***!
  \***************************/
/*! exports provided: Expr, Assign, Binary, Call, Dictionary, Get, Grouping, Key, Lambda, Logical, List, Literal, New, Postfix, Range, RegEx, Set, Super, Ternary, Unary, Variable, Ztring */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expr", function() { return Expr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Assign", function() { return Assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Binary", function() { return Binary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Call", function() { return Call; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return Dictionary; });
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
class Dictionary extends Expr {
    constructor(properties) {
        super();
        this.properties = properties;
    }
    accept(visitor) {
        return visitor.visitDictionaryExpr(this);
    }
    toString() {
        return 'Expr.Dictionary';
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
    constructor(clazz) {
        super();
        this.clazz = clazz;
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
    constructor(paren) {
        super();
        this.paren = paren;
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
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scope */ "./src/scope.ts");
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token */ "./src/token.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./src/types.ts");
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./runtime */ "./src/runtime.ts");





class Interpreter {
    constructor() {
        this.global = new _scope__WEBPACK_IMPORTED_MODULE_1__["Scope"]();
        this.scope = this.global;
        // this.global.define('echo', Runtime.echoFunction());
        // this.global.define('rand', Runtime.randFunction());
        const math = new _types__WEBPACK_IMPORTED_MODULE_3__["$Dictionary"](new Map());
        math.set(new _types__WEBPACK_IMPORTED_MODULE_3__["$String"]('pi'), new _types__WEBPACK_IMPORTED_MODULE_3__["$Number"](Math.PI));
        this.global.set('math', new _types__WEBPACK_IMPORTED_MODULE_3__["$Dictionary"](_runtime__WEBPACK_IMPORTED_MODULE_4__["Runtime"].Math));
    }
    evaluate(expr) {
        return expr.result = expr.accept(this);
    }
    execute(stmt) {
        return stmt.result = stmt.accept(this);
    }
    interpet(statements) {
        for (const statement of statements) {
            this.execute(statement);
        }
        return statements;
    }
    interpreterError(message) {
        conzole.log(`[interpreter error] => ${message}`);
        throw new Error();
    }
    visitExpressionStmt(stmt) {
        return this.evaluate(stmt.expression);
    }
    visitPrintStmt(stmt) {
        const data = this.evaluate(stmt.expression);
        conzole.log(data.toString());
        return data;
    }
    visitVarStmt(stmt) {
        let value = new _types__WEBPACK_IMPORTED_MODULE_3__["$Null"]();
        if (stmt.initializer !== null) {
            value = this.evaluate(stmt.initializer);
        }
        if (value.isLambda()) {
            value.name = stmt.name.lexeme;
        }
        this.scope.define(stmt.name.lexeme, value);
        return value;
    }
    visitVariableExpr(expr) {
        return this.scope.get(expr.name);
    }
    visitPostfixExpr(expr) {
        const value = this.scope.get(expr.name).value;
        const newValue = new _types__WEBPACK_IMPORTED_MODULE_3__["$Number"](value + expr.increment);
        this.scope.assign(expr.name.lexeme, newValue);
        return value;
    }
    visitListExpr(expr) {
        const values = [];
        for (const expression of expr.value) {
            values.push(this.evaluate(expression));
        }
        return new _types__WEBPACK_IMPORTED_MODULE_3__["$List"](values);
    }
    visitZtringExpr(expr) {
        return new _types__WEBPACK_IMPORTED_MODULE_3__["$String"](expr.value);
    }
    visitRegExExpr(expr) {
        /*
        return new RegExEntity(expr.value);
        */ return new _types__WEBPACK_IMPORTED_MODULE_3__["$Null"]();
    }
    visitAssignExpr(expr) {
        const value = this.evaluate(expr.value);
        this.scope.assign(expr.name.lexeme, value);
        return value;
    }
    visitBinaryExpr(expr) {
        let left = this.evaluate(expr.left).value;
        let right = this.evaluate(expr.right).value;
        left = left instanceof _types__WEBPACK_IMPORTED_MODULE_3__["$String"] ? left.toString() : left;
        right = right instanceof _types__WEBPACK_IMPORTED_MODULE_3__["$String"] ? right.toString() : right;
        switch (expr.operator.type) {
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Minus:
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].MinusEqual:
                return new _types__WEBPACK_IMPORTED_MODULE_3__["$Number"](left - right);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Slash:
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].SlashEqual:
                return new _types__WEBPACK_IMPORTED_MODULE_3__["$Number"](left / right);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Star:
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].StarEqual:
                return new _types__WEBPACK_IMPORTED_MODULE_3__["$Number"](left * right);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Percent:
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].PercentEqual:
                return new _types__WEBPACK_IMPORTED_MODULE_3__["$Number"](left % right);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Plus:
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].PlusEqual:
                if (!isNaN(left) && !isNaN(right)) {
                    return new _types__WEBPACK_IMPORTED_MODULE_3__["$Number"](left + right);
                }
                /*
                if (left instanceof ArrayEntity && right instanceof ArrayEntity) {
                    return new ArrayEntity(left.values.concat(right.values));
                } */
                return new _types__WEBPACK_IMPORTED_MODULE_3__["$String"](left + right);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Pipe:
                return new _types__WEBPACK_IMPORTED_MODULE_3__["$Number"](left | right);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Caret:
                return new _types__WEBPACK_IMPORTED_MODULE_3__["$Number"](left ^ right);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Greater:
                return new _types__WEBPACK_IMPORTED_MODULE_3__["$Boolean"](left > right);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].GreaterEqual:
                return new _types__WEBPACK_IMPORTED_MODULE_3__["$Boolean"](left >= right);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Less:
                return new _types__WEBPACK_IMPORTED_MODULE_3__["$Boolean"](left < right);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LessEqual:
                return new _types__WEBPACK_IMPORTED_MODULE_3__["$Boolean"](left <= right);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].EqualEqual:
                return new _types__WEBPACK_IMPORTED_MODULE_3__["$Boolean"](left === right);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].BangEqual:
                return new _types__WEBPACK_IMPORTED_MODULE_3__["$Boolean"](left !== right);
            default:
                conzole.warn(expr);
                return null; // unreachable
                break;
        }
    }
    visitLogicalExpr(expr) {
        if (expr.operator.type === _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].And) {
            return this.evaluate(expr.left) && this.evaluate(expr.right);
        }
        else {
            return this.evaluate(expr.left) || this.evaluate(expr.right);
        }
    }
    visitTernaryExpr(expr) {
        return this.evaluate(expr.condition).isTruthy() ? this.evaluate(expr.thenExpr) : this.evaluate(expr.elseExpr);
    }
    visitGroupingExpr(expr) {
        return this.evaluate(expr.expression);
    }
    visitLiteralExpr(expr) {
        return expr.value;
    }
    visitUnaryExpr(expr) {
        const right = this.evaluate(expr.right).value;
        switch (expr.operator.type) {
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Minus:
                return new _types__WEBPACK_IMPORTED_MODULE_3__["$Number"](-Number(right));
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Bang:
                return new _types__WEBPACK_IMPORTED_MODULE_3__["$Boolean"](!Boolean(right));
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].PlusPlus:
                const incValue = Number(right) + 1;
                this.scope.assign(expr.right.name.lexeme, new _types__WEBPACK_IMPORTED_MODULE_3__["$Number"](incValue));
                return new _types__WEBPACK_IMPORTED_MODULE_3__["$Number"](incValue);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].MinusMinus:
                const decValue = Number(right) - 1;
                this.scope.assign(expr.right.name.lexeme, new _types__WEBPACK_IMPORTED_MODULE_3__["$Number"](decValue));
                return new _types__WEBPACK_IMPORTED_MODULE_3__["$Number"](decValue);
            default:
                return null; // should be unreachable
        }
    }
    executeBlock(statements, nextScope) {
        const currentScope = this.scope;
        this.scope = nextScope;
        for (const statement of statements) {
            statement.result = this.execute(statement);
        }
        this.scope = currentScope;
        return new _types__WEBPACK_IMPORTED_MODULE_3__["$Void"]('block');
    }
    visitBlockStmt(stmt) {
        return this.executeBlock(stmt.statements, new _scope__WEBPACK_IMPORTED_MODULE_1__["Scope"](this.scope));
    }
    visitIfStmt(stmt) {
        if (this.evaluate(stmt.condition).isTruthy()) {
            return this.execute(stmt.thenStmt);
        }
        else if (stmt.elseStmt !== null) {
            return this.execute(stmt.elseStmt);
        }
    }
    visitWhileStmt(stmt) {
        while (this.evaluate(stmt.condition).isTruthy()) {
            this.execute(stmt.loop);
        }
        return new _types__WEBPACK_IMPORTED_MODULE_3__["$Void"]('while');
    }
    visitDoWhileStmt(stmt) {
        do {
            this.execute(stmt.loop);
        } while (this.evaluate(stmt.condition).isTruthy());
        return new _types__WEBPACK_IMPORTED_MODULE_3__["$Void"]('dowhile');
    }
    visitCallExpr(expr) {
        // verify callee is a function
        const callee = this.evaluate(expr.callee);
        if (!callee.isFunction()) {
            this.interpreterError(`${callee} is not a function`);
        }
        // set this in function scope
        let thiz = null;
        if (expr.callee instanceof _expression__WEBPACK_IMPORTED_MODULE_0__["Get"]) {
            if (expr.callee.entity instanceof _expression__WEBPACK_IMPORTED_MODULE_0__["Super"]) {
                thiz = this.scope.get(new _token__WEBPACK_IMPORTED_MODULE_2__["Token"](_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Identifier, 'this', 'this', 0));
            }
            else {
                thiz = this.evaluate(expr.callee.entity);
            }
        }
        else if (expr.thiz !== null) {
            thiz = expr.thiz;
        }
        // evaluate function arguments
        const args = [];
        for (const argument of expr.args) {
            args.push(this.evaluate(argument));
        }
        // pass arguments to function
        const func = callee;
        if (args.length !== func.arity && func.arity !== -1) {
            conzole.warn(`Warning at (${expr.paren.line}): ${callee} mismatched argument length; \n Expected ${func.arity} but got ${args.length} `);
            if (args.length < func.arity) {
                for (let i = args.length; i <= func.arity; ++i) {
                    args.push(new _types__WEBPACK_IMPORTED_MODULE_3__["$Null"]());
                }
            }
        }
        // execute function
        return func.call(thiz, args, this);
    }
    visitSuperExpr(expr) {
        const thiz = this.scope.get(expr.paren);
        if (!thiz.isObject()) {
            this.interpreterError("base expression can be used only inside methods");
        }
        const clazz = thiz.conztructor;
        const parent = clazz.parent;
        if (parent.isNull()) {
            this.interpreterError("Class " + clazz + "is not inherited from parent");
        }
        return parent;
    }
    visitNewExpr(expr) {
        const newCall = expr.clazz;
        // internal class definition instance
        const clazz = this.evaluate(newCall.callee);
        if (!clazz.isClass()) {
            this.interpreterError(`'${clazz}' is not a class. 'new' statement must be used with classes.`);
        }
        // new object
        const entity = new _types__WEBPACK_IMPORTED_MODULE_3__["$Object"](new Map(), clazz);
        // constructor method of the class
        const conztructor = clazz.get(new _types__WEBPACK_IMPORTED_MODULE_3__["$String"]('constructor'));
        if (conztructor.isFunction()) {
            /*
            const args: $Any[] = [];
            for (const arg of newCall.args) {
                args.push(this.evaluate(arg));
            }
            conztructor.call(this, entity, args);
            */
            this.evaluate(new _expression__WEBPACK_IMPORTED_MODULE_0__["Call"](new _expression__WEBPACK_IMPORTED_MODULE_0__["Get"](new _expression__WEBPACK_IMPORTED_MODULE_0__["Literal"](entity), new _expression__WEBPACK_IMPORTED_MODULE_0__["Key"](conztructor.declaration.name)), conztructor.declaration.name, newCall.args, entity));
        }
        return entity;
    }
    visitDictionaryExpr(expr) {
        const dict = new _types__WEBPACK_IMPORTED_MODULE_3__["$Dictionary"](new Map());
        for (const property of expr.properties) {
            const key = this.evaluate(property.key);
            const value = this.evaluate(property.value);
            dict.set(key, value);
        }
        return dict;
    }
    visitKeyExpr(expr) {
        return new _types__WEBPACK_IMPORTED_MODULE_3__["$Any"](expr.name.literal);
    }
    visitGetExpr(expr) {
        const entity = this.evaluate(expr.entity);
        const key = this.evaluate(expr.key);
        return entity.get(key);
    }
    visitSetExpr(expr) {
        const entity = this.evaluate(expr.entity);
        const key = this.evaluate(expr.key);
        const value = this.evaluate(expr.value);
        entity.set(key, value);
        return value.value;
    }
    visitFuncStmt(stmt) {
        const func = new _types__WEBPACK_IMPORTED_MODULE_3__["$Function"](stmt, this.scope);
        this.scope.define(stmt.name.lexeme, func);
        return new _types__WEBPACK_IMPORTED_MODULE_3__["$Null"]();
    }
    visitClassStmt(stmt) {
        let parent;
        if (stmt.parent === null) {
            parent = new _types__WEBPACK_IMPORTED_MODULE_3__["$Null"]();
        }
        else {
            parent = this.scope.get(stmt.parent);
        }
        const methods = new Map();
        for (const method of stmt.methods) {
            methods.set(method.name.lexeme, new _types__WEBPACK_IMPORTED_MODULE_3__["$Function"](method, this.scope));
        }
        const clazz = new _types__WEBPACK_IMPORTED_MODULE_3__["$Class"](stmt.name.lexeme, methods, parent);
        this.scope.define(stmt.name.lexeme, clazz);
        return clazz;
    }
    visitLambdaExpr(expr) {
        const lambda = expr.lambda;
        const func = new _types__WEBPACK_IMPORTED_MODULE_3__["$Function"](lambda, this.scope);
        return func;
    }
    visitReturnStmt(stmt) {
        let value = new _types__WEBPACK_IMPORTED_MODULE_3__["$Null"]();
        if (stmt.value) {
            value = this.evaluate(stmt.value);
        }
        throw new _types__WEBPACK_IMPORTED_MODULE_3__["$Return"](value);
    }
    visitRangeExpr(expr) {
        return new _types__WEBPACK_IMPORTED_MODULE_3__["$Range"](new _types__WEBPACK_IMPORTED_MODULE_3__["RangeValue"](expr.start ? this.evaluate(expr.start).value : null, expr.end ? this.evaluate(expr.end).value : null, expr.step ? this.evaluate(expr.step).value : null));
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
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./src/types.ts");




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
        return this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Eof);
    }
    consume(type, message) {
        if (this.check(type)) {
            return this.advance();
        }
        return this.parseError(this.previous(), message);
    }
    extraSemicolon() {
        const match = this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Semicolon);
        if (this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Semicolon)) {
            while (this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Semicolon)) {
                this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Semicolon, '');
            }
        }
        return match;
    }
    parseError(token, message) {
        // tslint:disable-next-line
        if (token.type === _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Eof) {
            conzole.error(`parse error at (${token.line}): at end ${message}`);
        }
        else {
            conzole.error(`[line (${token.line}) parse error at "${token.lexeme}"] => ${message}`);
        }
        throw new Error('Error parsing');
        // unreachable code
        return new _token__WEBPACK_IMPORTED_MODULE_2__["Token"](_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Panic, 'error', 'error', 0);
    }
    parseWarning(message) {
        const token = this.previous();
        conzole.warn(`[line (${token.line}) parse warning at "${token.lexeme}"] => ${message}`);
    }
    synchronize() {
        this.advance();
        while (!this.eof()) {
            if (this.previous().type === _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Semicolon) {
                return;
            }
            switch (this.peek().type) {
                case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Class:
                case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Function:
                case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Var:
                case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].For:
                case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].If:
                case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].While:
                case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Print:
                case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Return:
                    return;
            }
            this.advance();
        }
    }
    declaration() {
        try {
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Class)) {
                return this.classDeclaration();
            }
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Function)) {
                return this.funcDeclaration("function");
            }
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Var)) {
                return this.varDeclaration();
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
        const name = this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Identifier, `Expected a class name`);
        let parent = null;
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Extends)) {
            parent = this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Identifier, `Expected a parent name`);
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LeftBrace, `Expected "{" after class name`);
        const methods = [];
        while (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightBrace) && !this.eof()) {
            if (this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Function)) {
                this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Function, '');
            }
            methods.push(this.funcDeclaration("method"));
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightBrace, `Expected "}" after class "${name.literal}" methods`);
        if (this.extraSemicolon()) {
            this.parseWarning(`Unnecessary semicolon after class ${name.lexeme} declaration`);
        }
        return new _statement__WEBPACK_IMPORTED_MODULE_1__["Class"](name, parent, methods);
    }
    funcDeclaration(kind) {
        const name = this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Identifier, `Expected a ${kind} name`);
        return this.funcParamsBody(name, kind);
    }
    funcParams() {
        const params = [];
        if (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightParen)) {
            do {
                if (params.length >= 255) {
                    this.parseError(this.peek(), `Parameter count exceeds 255`);
                }
                params.push(this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Identifier, `Expected a parameter name`));
            } while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Comma));
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightParen, `Expect ")" after parameters`);
        return params;
    }
    funcParamsBody(name, kind) {
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LeftParen, `Expected "(" after ${kind}`);
        const params = this.funcParams();
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LeftBrace)) {
            const body = this.block();
            if (name.type !== _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Lambda && this.extraSemicolon()) {
                this.parseWarning(`Unnecessary semicolon after function ${name.lexeme} declaration`);
            }
            return new _statement__WEBPACK_IMPORTED_MODULE_1__["Func"](name, params, body);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Arrow)) {
            const body = [];
            let arrow;
            const keyword = this.previous();
            if (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Semicolon)) {
                arrow = this.expression();
            }
            this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Semicolon);
            body.push(new _statement__WEBPACK_IMPORTED_MODULE_1__["Return"](keyword, arrow));
            return new _statement__WEBPACK_IMPORTED_MODULE_1__["Func"](name, params, body);
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LeftBrace, `Expect "{" before ${kind} body`);
    }
    varDeclaration() {
        const name = this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Identifier, `Expected a variable name`);
        let initializer = null;
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Equal)) {
            initializer = this.expression();
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Semicolon, `Expected semicolon ";" after a value.`);
        return new _statement__WEBPACK_IMPORTED_MODULE_1__["Var"](name, null, initializer);
    }
    statement() {
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].If)) {
            return this.ifStatement();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Print)) {
            return this.printStatement();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Do)) {
            return this.doWhileStatement();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].While)) {
            return this.whileStatement();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].For)) {
            return this.forStatement();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LeftBrace)) {
            return new _statement__WEBPACK_IMPORTED_MODULE_1__["Block"](this.block());
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Return)) {
            return this.returnStatement();
        }
        return this.expressionStatement();
    }
    ifStatement() {
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LeftParen, `Expected "(" after an if`);
        const condition = this.expression();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightParen, `Expected ")" after if condition`);
        const thenStmt = this.statement();
        let elseStmt = null;
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Else)) {
            elseStmt = this.statement();
        }
        return new _statement__WEBPACK_IMPORTED_MODULE_1__["If"](condition, thenStmt, elseStmt);
    }
    whileStatement() {
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LeftParen, `Expected "(" after a while statement`);
        const condition = this.expression();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightParen, `Expected ")" after while condition`);
        const loop = this.statement();
        return new _statement__WEBPACK_IMPORTED_MODULE_1__["While"](condition, loop);
    }
    forStatement() {
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LeftParen, `Expected "(" after a for statement`);
        let initializer;
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Semicolon)) {
            initializer = null;
        }
        else if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Var)) {
            initializer = this.varDeclaration();
        }
        else {
            initializer = this.expressionStatement();
        }
        let condition;
        if (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Semicolon)) {
            condition = this.expression();
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Semicolon, `Expected ";" after loop condition`);
        let increment;
        if (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightParen)) {
            increment = this.expression();
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightParen, `Expected ";" after loop condition`);
        let body = this.statement();
        if (increment !== null) {
            body = new _statement__WEBPACK_IMPORTED_MODULE_1__["Block"]([
                body,
                new _statement__WEBPACK_IMPORTED_MODULE_1__["Expression"](increment)
            ]);
        }
        if (condition === null) {
            condition = new _expression__WEBPACK_IMPORTED_MODULE_0__["Literal"](new _types__WEBPACK_IMPORTED_MODULE_3__["$Boolean"](true));
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
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].While, `Expected condition after do statement`);
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LeftParen, `Expected "(" after a while`);
        const condition = this.expression();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightParen, `Expected ")" after while condition`);
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Semicolon, `Expected semicolon ";" after a do while condition`);
        return new _statement__WEBPACK_IMPORTED_MODULE_1__["DoWhile"](loop, condition);
    }
    printStatement() {
        const value = this.expression();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Semicolon, `Expected semicolon ";" after expression.`);
        return new _statement__WEBPACK_IMPORTED_MODULE_1__["Print"](value);
    }
    returnStatement() {
        const keyword = this.previous();
        let value = null;
        if (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Semicolon)) {
            value = this.expression();
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Semicolon, `Exected semicolon ";" after return statement`);
        return new _statement__WEBPACK_IMPORTED_MODULE_1__["Return"](keyword, value);
    }
    block() {
        const statements = [];
        while (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightBrace) && !this.eof()) {
            statements.push(this.declaration());
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightBrace, `Expected closing brace "}" after block statement`);
        return statements;
    }
    expressionStatement() {
        const expression = this.expression();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Semicolon, `Expected semicolon ";" after ${expression} expression`);
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Semicolon)) {
            const token = this.previous();
            conzole.warn(`[line (${token.line}) parse warning at "${token.lexeme}"] => unnecessary semicolon or empty statement`);
            // consume all semicolons
            // tslint:disable-next-line
            while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Semicolon)) { }
            ;
        }
        return new _statement__WEBPACK_IMPORTED_MODULE_1__["Expression"](expression);
    }
    expression() {
        return this.assignment();
    }
    assignment() {
        const expr = this.ternary();
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Equal, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].PlusEqual, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].MinusEqual, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].StarEqual, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].SlashEqual)) {
            const operator = this.previous();
            let value = this.assignment();
            if (expr instanceof _expression__WEBPACK_IMPORTED_MODULE_0__["Variable"]) {
                const name = expr.name;
                if (operator.type !== _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Equal) {
                    value = new _expression__WEBPACK_IMPORTED_MODULE_0__["Binary"](new _expression__WEBPACK_IMPORTED_MODULE_0__["Variable"](name), operator, value);
                }
                return new _expression__WEBPACK_IMPORTED_MODULE_0__["Assign"](name, value);
            }
            else if (expr instanceof _expression__WEBPACK_IMPORTED_MODULE_0__["Get"]) {
                if (operator.type !== _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Equal) {
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
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Question)) {
            const thenExpr = this.ternary();
            this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Colon, `Expected ":" after ternary ? expression`);
            const elseExpr = this.ternary();
            return new _expression__WEBPACK_IMPORTED_MODULE_0__["Ternary"](expr, thenExpr, elseExpr);
        }
        return expr;
    }
    logicalOr() {
        let expr = this.logicalAnd();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Or)) {
            const operator = this.previous();
            const right = this.logicalAnd();
            expr = new _expression__WEBPACK_IMPORTED_MODULE_0__["Logical"](expr, operator, right);
        }
        return expr;
    }
    logicalAnd() {
        let expr = this.equality();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].And)) {
            const operator = this.previous();
            const right = this.equality();
            expr = new _expression__WEBPACK_IMPORTED_MODULE_0__["Logical"](expr, operator, right);
        }
        return expr;
    }
    equality() {
        let expr = this.comparison();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].BangEqual, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].EqualEqual)) {
            const operator = this.previous();
            const right = this.comparison();
            expr = new _expression__WEBPACK_IMPORTED_MODULE_0__["Binary"](expr, operator, right);
        }
        return expr;
    }
    comparison() {
        let expr = this.addition();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Greater, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].GreaterEqual, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Less, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LessEqual)) {
            const operator = this.previous();
            const right = this.addition();
            expr = new _expression__WEBPACK_IMPORTED_MODULE_0__["Binary"](expr, operator, right);
        }
        return expr;
    }
    addition() {
        let expr = this.modulus();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Minus, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Plus)) {
            const operator = this.previous();
            const right = this.modulus();
            expr = new _expression__WEBPACK_IMPORTED_MODULE_0__["Binary"](expr, operator, right);
        }
        return expr;
    }
    modulus() {
        let expr = this.multiplication();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Percent)) {
            const operator = this.previous();
            const right = this.multiplication();
            expr = new _expression__WEBPACK_IMPORTED_MODULE_0__["Binary"](expr, operator, right);
        }
        return expr;
    }
    multiplication() {
        let expr = this.unary();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Slash, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Star)) {
            const operator = this.previous();
            const right = this.unary();
            expr = new _expression__WEBPACK_IMPORTED_MODULE_0__["Binary"](expr, operator, right);
        }
        return expr;
    }
    unary() {
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Minus, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Bang, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Dollar, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].PlusPlus, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].MinusMinus)) {
            const operator = this.previous();
            const right = this.unary();
            return new _expression__WEBPACK_IMPORTED_MODULE_0__["Unary"](operator, right);
        }
        return this.newKeyword();
    }
    newKeyword() {
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].New)) {
            const construct = this.call();
            return new _expression__WEBPACK_IMPORTED_MODULE_0__["New"](construct);
        }
        return this.call();
    }
    call() {
        let expr = this.primary();
        let consumed = true;
        do {
            consumed = false;
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LeftParen)) {
                consumed = true;
                do {
                    const args = [];
                    if (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightParen)) {
                        do {
                            args.push(this.expression());
                        } while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Comma));
                    }
                    const paren = this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightParen, `Expected ")" after arguments`);
                    expr = new _expression__WEBPACK_IMPORTED_MODULE_0__["Call"](expr, paren, args, null);
                } while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LeftParen));
            }
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Dot)) {
                consumed = true;
                expr = this.dotGet(expr);
            }
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LeftBracket)) {
                consumed = true;
                expr = this.bracketGet(expr);
            }
        } while (consumed);
        return expr;
    }
    dotGet(expr) {
        const name = this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Identifier, `Expect property name after '.'`);
        const key = new _expression__WEBPACK_IMPORTED_MODULE_0__["Key"](name);
        return new _expression__WEBPACK_IMPORTED_MODULE_0__["Get"](expr, key);
    }
    bracketGet(expr) {
        let key = null;
        let end = null;
        let step = null;
        if (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Colon)) {
            key = this.expression();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Colon) && !this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Colon)) {
            end = this.expression();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Colon) && !this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightBracket)) {
            step = this.expression();
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightBracket, `Expected "]" after property name expression`);
        if (!key || end || step) {
            const range = new _expression__WEBPACK_IMPORTED_MODULE_0__["Range"](key, end, step);
            return new _expression__WEBPACK_IMPORTED_MODULE_0__["Get"](expr, range);
        }
        return new _expression__WEBPACK_IMPORTED_MODULE_0__["Get"](expr, key);
    }
    primary() {
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].False)) {
            return new _expression__WEBPACK_IMPORTED_MODULE_0__["Literal"](new _types__WEBPACK_IMPORTED_MODULE_3__["$Boolean"](false));
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].True)) {
            return new _expression__WEBPACK_IMPORTED_MODULE_0__["Literal"](new _types__WEBPACK_IMPORTED_MODULE_3__["$Boolean"](true));
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Null)) {
            return new _expression__WEBPACK_IMPORTED_MODULE_0__["Literal"](new _types__WEBPACK_IMPORTED_MODULE_3__["$Null"]());
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Number)) {
            return new _expression__WEBPACK_IMPORTED_MODULE_0__["Literal"](new _types__WEBPACK_IMPORTED_MODULE_3__["$Number"](this.previous().literal));
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].String)) {
            return new _expression__WEBPACK_IMPORTED_MODULE_0__["Ztring"](this.previous().literal);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Regex)) {
            return new _expression__WEBPACK_IMPORTED_MODULE_0__["RegEx"](this.previous().literal);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Super)) {
            const paren = this.previous();
            paren.lexeme = 'this';
            return new _expression__WEBPACK_IMPORTED_MODULE_0__["Super"](paren);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Identifier)) {
            const identifier = this.previous();
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].PlusPlus)) {
                return new _expression__WEBPACK_IMPORTED_MODULE_0__["Postfix"](identifier, 1);
            }
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].MinusMinus)) {
                return new _expression__WEBPACK_IMPORTED_MODULE_0__["Postfix"](identifier, -1);
            }
            return new _expression__WEBPACK_IMPORTED_MODULE_0__["Variable"](identifier);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LeftParen)) {
            const expr = this.expression();
            this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightParen, `Expected ")" after expression`);
            return new _expression__WEBPACK_IMPORTED_MODULE_0__["Grouping"](expr);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LeftBrace)) {
            return this.dictionary();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Function)) {
            const token = new _token__WEBPACK_IMPORTED_MODULE_2__["Token"](_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Lambda, '@', '@', this.previous().line);
            const lambda = this.funcParamsBody(token, 'lambda');
            return new _expression__WEBPACK_IMPORTED_MODULE_0__["Lambda"](lambda);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LeftBracket)) {
            return this.list();
        }
        throw this.parseError(this.peek(), `Expected expression`);
        // unreacheable code
        return new _expression__WEBPACK_IMPORTED_MODULE_0__["Literal"](null);
    }
    dictionary() {
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightBrace)) {
            return new _expression__WEBPACK_IMPORTED_MODULE_0__["Dictionary"]([]);
        }
        const properties = [];
        do {
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].String, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Identifier, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Number)) {
                const key = this.previous();
                this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Colon, `Expected ":" colon after member`);
                const value = this.expression();
                properties.push(new _expression__WEBPACK_IMPORTED_MODULE_0__["Set"](null, new _expression__WEBPACK_IMPORTED_MODULE_0__["Key"](key), value));
            }
            else {
                this.parseError(this.peek(), `String, Number or Identifier expected as a Key of Dictionary {`);
            }
        } while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Comma));
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightBrace, `Expected "}" after object literal`);
        return new _expression__WEBPACK_IMPORTED_MODULE_0__["Dictionary"](properties);
    }
    list() {
        const values = [];
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightBracket)) {
            return new _expression__WEBPACK_IMPORTED_MODULE_0__["List"]([]);
        }
        do {
            values.push(this.expression());
        } while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Comma));
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightBracket, `Expected "]" after array declaration`);
        return new _expression__WEBPACK_IMPORTED_MODULE_0__["List"](values);
    }
}


/***/ }),

/***/ "./src/runtime.ts":
/*!************************!*\
  !*** ./src/runtime.ts ***!
  \************************/
/*! exports provided: StringRuntime, ListRuntime, Runtime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringRuntime", function() { return StringRuntime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRuntime", function() { return ListRuntime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Runtime", function() { return Runtime; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/types.ts");

function fromJavaScript(jsName, arity, type) {
    return new _types__WEBPACK_IMPORTED_MODULE_0__["$Callable"](jsName, arity, (thiz, args) => {
        const argValues = args.map((arg) => arg.value);
        const result = thiz.value[jsName](...argValues);
        switch (type) {
            case _types__WEBPACK_IMPORTED_MODULE_0__["DataType"].Boolean:
                return new _types__WEBPACK_IMPORTED_MODULE_0__["$Boolean"](result);
            case _types__WEBPACK_IMPORTED_MODULE_0__["DataType"].String:
                return new _types__WEBPACK_IMPORTED_MODULE_0__["$String"](result);
            case _types__WEBPACK_IMPORTED_MODULE_0__["DataType"].Number:
                return new _types__WEBPACK_IMPORTED_MODULE_0__["$Number"](result);
            case _types__WEBPACK_IMPORTED_MODULE_0__["DataType"].List:
                return new _types__WEBPACK_IMPORTED_MODULE_0__["$List"](result);
            default:
                return new _types__WEBPACK_IMPORTED_MODULE_0__["$Any"](result);
                break;
        }
    });
}
class StringRuntime {
    // new $Callable('toUpper', 0, StringRuntime.toUpperCase)
    static size(thiz, args) {
        return new _types__WEBPACK_IMPORTED_MODULE_0__["$Number"](thiz.value.length);
    }
    static indexOf(thiz, args) {
        return new _types__WEBPACK_IMPORTED_MODULE_0__["$Number"](thiz.value.indexOf(args[0].value));
    }
}
class ListRuntime {
    static size(thiz, args) {
        return new _types__WEBPACK_IMPORTED_MODULE_0__["$Number"](args[0].value.length);
    }
    static join(thiz, args) {
        return new _types__WEBPACK_IMPORTED_MODULE_0__["$String"](thiz.value.join(args[0].value));
    }
}
const Runtime = {
    List: new Map([
        ['size', new _types__WEBPACK_IMPORTED_MODULE_0__["$Callable"]('size', 0, ListRuntime.size)],
        ['split', new _types__WEBPACK_IMPORTED_MODULE_0__["$Callable"]('join', 1, ListRuntime.join)]
    ]),
    Math: new Map([
        ['pi', new _types__WEBPACK_IMPORTED_MODULE_0__["$Number"](Math.PI)],
        ['test', new _types__WEBPACK_IMPORTED_MODULE_0__["$Any"](Math.PI)],
        ['rand', new _types__WEBPACK_IMPORTED_MODULE_0__["$Callable"]('rand', 0, (thiz, args) => new _types__WEBPACK_IMPORTED_MODULE_0__["$Number"](Math.PI))]
    ]),
    String: new Map([
        ['toUpper', fromJavaScript('toUpperCase', 0, _types__WEBPACK_IMPORTED_MODULE_0__["DataType"].String)],
        ['toLower', fromJavaScript('toLowerCase', 0, _types__WEBPACK_IMPORTED_MODULE_0__["DataType"].String)],
        ['size', new _types__WEBPACK_IMPORTED_MODULE_0__["$Callable"]('size', 0, StringRuntime.size)],
        ['split', fromJavaScript('split', 1, _types__WEBPACK_IMPORTED_MODULE_0__["DataType"].List)],
        ['concat', fromJavaScript('concat', 1, _types__WEBPACK_IMPORTED_MODULE_0__["DataType"].String)],
        ['includes', fromJavaScript('includes', 1, _types__WEBPACK_IMPORTED_MODULE_0__["DataType"].Boolean)],
        ['indexOf', fromJavaScript('indexOf', 1, _types__WEBPACK_IMPORTED_MODULE_0__["DataType"].Number)],
        ['repeat', fromJavaScript('repeat', 1, _types__WEBPACK_IMPORTED_MODULE_0__["DataType"].String)],
        ['replace', fromJavaScript('replace', 2, _types__WEBPACK_IMPORTED_MODULE_0__["DataType"].String)],
        ['search', fromJavaScript('search', 1, _types__WEBPACK_IMPORTED_MODULE_0__["DataType"].Number)],
        ['slice', fromJavaScript('slice', -1, _types__WEBPACK_IMPORTED_MODULE_0__["DataType"].String)],
        ['substring', fromJavaScript('substring', -1, _types__WEBPACK_IMPORTED_MODULE_0__["DataType"].String)],
        ['trim', fromJavaScript('trim', 0, _types__WEBPACK_IMPORTED_MODULE_0__["DataType"].String)],
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
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token */ "./src/token.ts");
/* harmony import */ var _structs_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./structs/utils */ "./src/structs/utils.ts");


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
    addToken(tokenType, literal) {
        const text = this.source.substring(this.start, this.current);
        this.tokens.push(new _token__WEBPACK_IMPORTED_MODULE_0__["Token"](tokenType, text, literal, this.line));
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
        this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].String, value);
    }
    number() {
        // gets integer part
        while (_structs_utils__WEBPACK_IMPORTED_MODULE_1__["isDigit"](this.peek())) {
            this.advance();
        }
        // checks for fraction
        if (this.peek() === '.' && _structs_utils__WEBPACK_IMPORTED_MODULE_1__["isDigit"](this.peekNext())) {
            this.advance();
        }
        // gets fraction part
        while (_structs_utils__WEBPACK_IMPORTED_MODULE_1__["isDigit"](this.peek())) {
            this.advance();
        }
        // checks for exponent
        if (this.peek().toLowerCase() === 'e') {
            this.advance();
            if (this.peek() === '-' || this.peek() === '+') {
                this.advance();
            }
        }
        while (_structs_utils__WEBPACK_IMPORTED_MODULE_1__["isDigit"](this.peek())) {
            this.advance();
        }
        const value = this.source.substring(this.start, this.current);
        this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Number, Number(value));
    }
    identifier() {
        while (_structs_utils__WEBPACK_IMPORTED_MODULE_1__["isAlphaNumeric"](this.peek())) {
            this.advance();
        }
        const value = this.source.substring(this.start, this.current);
        const capitalized = value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
        if (_structs_utils__WEBPACK_IMPORTED_MODULE_1__["isKeyword"](capitalized)) {
            this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"][capitalized], value);
        }
        else {
            this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Identifier, value);
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
            // The closing # after flags.
            this.advance();
        }
        this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Regex, new RegExp(regex, flags));
    }
    scan() {
        while (!this.eof()) {
            this.start = this.current;
            this.scanToken();
        }
        this.tokens.push(new _token__WEBPACK_IMPORTED_MODULE_0__["Token"](_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Eof, '', null, this.line));
        return this.tokens;
    }
    scanToken() {
        const char = this.advance();
        switch (char) {
            case '(':
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].LeftParen, null);
                break;
            case ')':
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].RightParen, null);
                break;
            case '[':
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].LeftBracket, null);
                break;
            case ']':
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].RightBracket, null);
                break;
            case '{':
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].LeftBrace, null);
                break;
            case '}':
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].RightBrace, null);
                break;
            case ',':
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Comma, null);
                break;
            case '.':
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Dot, null);
                break;
            case ';':
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Semicolon, null);
                break;
            case '^':
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Caret, null);
                break;
            case '?':
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Question, null);
                break;
            case ':':
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Colon, null);
                break;
            case '$':
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Dollar, null);
                break;
            case '@':
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Function, '@');
                break;
            case '*':
                this.addToken(this.match('=') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].StarEqual : _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Star, null);
                break;
            case '%':
                this.addToken(this.match('=') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].PercentEqual : _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Percent, null);
                break;
            case '|':
                this.addToken(this.match('|') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Or : _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Pipe, null);
                break;
            case '&':
                this.addToken(this.match('&') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].And : _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Ampersand, null);
                break;
            case '<':
                this.addToken(this.match('=') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].LessEqual : _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Less, null);
                break;
            case '>':
                this.addToken(this.match('=') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].GreaterEqual : _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Greater, null);
                break;
            case '!':
                this.addToken(this.match('=') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].BangEqual : _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Bang, null);
                break;
            case '=':
                this.addToken(this.match('=') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].EqualEqual : this.match('>') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Arrow : _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Equal, null);
                break;
            case '+':
                this.addToken(this.match('+') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].PlusPlus : this.match('=') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].PlusEqual : _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Plus, null);
                break;
            case '-':
                this.addToken(this.match('-') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].MinusMinus : this.match('>') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Return : this.match('=') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].MinusEqual : _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Minus, null);
                break;
            case '/':
                this.match('/') ? this.comment() : this.addToken(this.match('=') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].SlashEqual : _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Slash, null);
                break;
            case '\n':
                this.line++;
                break;
            case `'`:
            case `"`:
            case '`':
                this.string(char, _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].String);
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
                if (_structs_utils__WEBPACK_IMPORTED_MODULE_1__["isDigit"](char)) {
                    this.number();
                }
                else if (_structs_utils__WEBPACK_IMPORTED_MODULE_1__["isAlpha"](char)) {
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

/***/ "./src/structs/utils.ts":
/*!******************************!*\
  !*** ./src/structs/utils.ts ***!
  \******************************/
/*! exports provided: isDigit, isAlpha, isAlphaNumeric, isKeyword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDigit", function() { return isDigit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAlpha", function() { return isAlpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAlphaNumeric", function() { return isAlphaNumeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isKeyword", function() { return isKeyword; });
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../token */ "./src/token.ts");

function isDigit(char) {
    return char >= '0' && char <= '9';
}
function isAlpha(char) {
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}
function isAlphaNumeric(char) {
    return isAlpha(char) || isDigit(char);
}
function isKeyword(word) {
    return _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"][word] >= _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].And;
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
    // Parser Tokens
    TokenType[TokenType["Eof"] = 0] = "Eof";
    TokenType[TokenType["Panic"] = 1] = "Panic";
    TokenType[TokenType["Lambda"] = 2] = "Lambda";
    // Single Character Tokens
    TokenType[TokenType["Ampersand"] = 3] = "Ampersand";
    TokenType[TokenType["AtSign"] = 4] = "AtSign";
    TokenType[TokenType["Caret"] = 5] = "Caret";
    TokenType[TokenType["Comma"] = 6] = "Comma";
    TokenType[TokenType["Dollar"] = 7] = "Dollar";
    TokenType[TokenType["Dot"] = 8] = "Dot";
    TokenType[TokenType["Hash"] = 9] = "Hash";
    TokenType[TokenType["LeftBrace"] = 10] = "LeftBrace";
    TokenType[TokenType["LeftBracket"] = 11] = "LeftBracket";
    TokenType[TokenType["LeftParen"] = 12] = "LeftParen";
    TokenType[TokenType["Percent"] = 13] = "Percent";
    TokenType[TokenType["Pipe"] = 14] = "Pipe";
    TokenType[TokenType["RightBrace"] = 15] = "RightBrace";
    TokenType[TokenType["RightBracket"] = 16] = "RightBracket";
    TokenType[TokenType["RightParen"] = 17] = "RightParen";
    TokenType[TokenType["Semicolon"] = 18] = "Semicolon";
    TokenType[TokenType["Slash"] = 19] = "Slash";
    TokenType[TokenType["Star"] = 20] = "Star";
    // One Or Two Character Tokens
    TokenType[TokenType["Arrow"] = 21] = "Arrow";
    TokenType[TokenType["Bang"] = 22] = "Bang";
    TokenType[TokenType["BangEqual"] = 23] = "BangEqual";
    TokenType[TokenType["Colon"] = 24] = "Colon";
    TokenType[TokenType["Equal"] = 25] = "Equal";
    TokenType[TokenType["EqualEqual"] = 26] = "EqualEqual";
    TokenType[TokenType["Greater"] = 27] = "Greater";
    TokenType[TokenType["GreaterEqual"] = 28] = "GreaterEqual";
    TokenType[TokenType["Less"] = 29] = "Less";
    TokenType[TokenType["LessEqual"] = 30] = "LessEqual";
    TokenType[TokenType["Minus"] = 31] = "Minus";
    TokenType[TokenType["MinusEqual"] = 32] = "MinusEqual";
    TokenType[TokenType["MinusMinus"] = 33] = "MinusMinus";
    TokenType[TokenType["PercentEqual"] = 34] = "PercentEqual";
    TokenType[TokenType["Plus"] = 35] = "Plus";
    TokenType[TokenType["PlusEqual"] = 36] = "PlusEqual";
    TokenType[TokenType["PlusPlus"] = 37] = "PlusPlus";
    TokenType[TokenType["Question"] = 38] = "Question";
    TokenType[TokenType["SlashEqual"] = 39] = "SlashEqual";
    TokenType[TokenType["StarEqual"] = 40] = "StarEqual";
    // Literals
    TokenType[TokenType["Identifier"] = 41] = "Identifier";
    TokenType[TokenType["String"] = 42] = "String";
    TokenType[TokenType["Number"] = 43] = "Number";
    TokenType[TokenType["Regex"] = 44] = "Regex";
    // Keywords
    TokenType[TokenType["And"] = 45] = "And";
    TokenType[TokenType["Class"] = 46] = "Class";
    TokenType[TokenType["Do"] = 47] = "Do";
    TokenType[TokenType["Else"] = 48] = "Else";
    TokenType[TokenType["Extends"] = 49] = "Extends";
    TokenType[TokenType["False"] = 50] = "False";
    TokenType[TokenType["For"] = 51] = "For";
    TokenType[TokenType["Function"] = 52] = "Function";
    TokenType[TokenType["If"] = 53] = "If";
    TokenType[TokenType["New"] = 54] = "New";
    TokenType[TokenType["Null"] = 55] = "Null";
    TokenType[TokenType["Or"] = 56] = "Or";
    TokenType[TokenType["Print"] = 57] = "Print";
    TokenType[TokenType["Return"] = 58] = "Return";
    TokenType[TokenType["Super"] = 59] = "Super";
    TokenType[TokenType["True"] = 60] = "True";
    TokenType[TokenType["Var"] = 61] = "Var";
    TokenType[TokenType["While"] = 62] = "While";
})(TokenType || (TokenType = {}));
class Token {
    constructor(type, lexeme, literal, line) {
        this.name = TokenType[type];
        this.type = type;
        this.lexeme = lexeme;
        this.literal = literal;
        this.line = line;
    }
    toString() {
        return `[(${this.line}):"${this.lexeme}"]`;
    }
}


/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/*! exports provided: DataType, $Any, $Callable, $Function, $Boolean, $Class, $Dictionary, $List, $Number, $Null, $Object, $Range, RangeValue, $Return, $String, $Void */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/type.enum */ "./src/types/type.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataType", function() { return _types_type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"]; });

/* harmony import */ var _types_null__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/null */ "./src/types/null.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$Null", function() { return _types_null__WEBPACK_IMPORTED_MODULE_1__["$Null"]; });

/* harmony import */ var _types_any__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/any */ "./src/types/any.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$Any", function() { return _types_any__WEBPACK_IMPORTED_MODULE_2__["$Any"]; });

/* harmony import */ var _types_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types/function */ "./src/types/function.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$Callable", function() { return _types_function__WEBPACK_IMPORTED_MODULE_3__["$Callable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$Function", function() { return _types_function__WEBPACK_IMPORTED_MODULE_3__["$Function"]; });

/* harmony import */ var _types_boolean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types/boolean */ "./src/types/boolean.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$Boolean", function() { return _types_boolean__WEBPACK_IMPORTED_MODULE_4__["$Boolean"]; });

/* harmony import */ var _types_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types/class */ "./src/types/class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$Class", function() { return _types_class__WEBPACK_IMPORTED_MODULE_5__["$Class"]; });

/* harmony import */ var _types_dictionary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types/dictionary */ "./src/types/dictionary.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$Dictionary", function() { return _types_dictionary__WEBPACK_IMPORTED_MODULE_6__["$Dictionary"]; });

/* harmony import */ var _types_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types/list */ "./src/types/list.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$List", function() { return _types_list__WEBPACK_IMPORTED_MODULE_7__["$List"]; });

/* harmony import */ var _types_number__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types/number */ "./src/types/number.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$Number", function() { return _types_number__WEBPACK_IMPORTED_MODULE_8__["$Number"]; });

/* harmony import */ var _types_object__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./types/object */ "./src/types/object.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$Object", function() { return _types_object__WEBPACK_IMPORTED_MODULE_9__["$Object"]; });

/* harmony import */ var _types_range__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./types/range */ "./src/types/range.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$Range", function() { return _types_range__WEBPACK_IMPORTED_MODULE_10__["$Range"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RangeValue", function() { return _types_range__WEBPACK_IMPORTED_MODULE_10__["RangeValue"]; });

/* harmony import */ var _types_return__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./types/return */ "./src/types/return.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$Return", function() { return _types_return__WEBPACK_IMPORTED_MODULE_11__["$Return"]; });

/* harmony import */ var _types_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./types/string */ "./src/types/string.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$String", function() { return _types_string__WEBPACK_IMPORTED_MODULE_12__["$String"]; });

/* harmony import */ var _types_void__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./types/void */ "./src/types/void.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$Void", function() { return _types_void__WEBPACK_IMPORTED_MODULE_13__["$Void"]; });


















/***/ }),

/***/ "./src/types/any.ts":
/*!**************************!*\
  !*** ./src/types/any.ts ***!
  \**************************/
/*! exports provided: $Any */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$Any", function() { return $Any; });
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");

class $Any {
    constructor(value, type = _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Any) {
        this.type = _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Any;
        this.value = value;
        this.type = type;
    }
    isString() {
        return this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].String;
    }
    isNull() {
        return this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Null;
    }
    isBoolean() {
        return this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Boolean;
    }
    isNumber() {
        return this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Number;
    }
    isRange() {
        return this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Range;
    }
    isFunction() {
        return this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Function;
    }
    isClass() {
        return this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Class;
    }
    isLambda() {
        return this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Function && this.name === '@';
    }
    isObject() {
        return this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Object;
    }
    isTruthy() {
        if (this.isNull()) {
            return false;
        }
        if (this.isBoolean()) {
            return Boolean(this.value);
        }
        if (this.isNumber() && this.value === 0) {
            return false;
        }
        if (this.isString() && this.value.toString().length === 0) {
            return false;
        }
        if (this.value === null) {
            throw new Error("Unknown error value Any is null");
        }
        if (typeof this.value === 'undefined') {
            throw new Error("Unknown error value Any is undefined");
        }
        return true;
    }
    isEqual(other) {
        return this.value === other.value;
    }
    get(key) {
        conzole.error(`key ${key} does not exist in ${this}`);
        throw new Error("Error in Any getter");
    }
    set(key, value) {
        conzole.error(`key ${key} does not exist in ${this}`);
        throw new Error("Error in Any setter");
    }
    toString() {
        return this.value.toString();
    }
}


/***/ }),

/***/ "./src/types/boolean.ts":
/*!******************************!*\
  !*** ./src/types/boolean.ts ***!
  \******************************/
/*! exports provided: $Boolean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$Boolean", function() { return $Boolean; });
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");


class $Boolean extends _any__WEBPACK_IMPORTED_MODULE_1__["$Any"] {
    constructor(value) {
        super(value, _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Boolean);
    }
}


/***/ }),

/***/ "./src/types/class.ts":
/*!****************************!*\
  !*** ./src/types/class.ts ***!
  \****************************/
/*! exports provided: $Class */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$Class", function() { return $Class; });
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");
/* harmony import */ var _null__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./null */ "./src/types/null.ts");



class $Class extends _any__WEBPACK_IMPORTED_MODULE_1__["$Any"] {
    constructor(name, value, parent) {
        super(value, _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Class);
        this.name = name;
        this.parent = parent;
    }
    get(key) {
        if (this.value.has(key.value)) {
            return this.value.get(key.value);
        }
        if (this.parent.isClass()) {
            return this.parent.get(key);
        }
        return new _null__WEBPACK_IMPORTED_MODULE_2__["$Null"]();
    }
    set(key, value) {
        this.value.set(key.value, value);
        return value;
    }
    toString() {
        return `<${this.name} class>`;
    }
}


/***/ }),

/***/ "./src/types/dictionary.ts":
/*!*********************************!*\
  !*** ./src/types/dictionary.ts ***!
  \*********************************/
/*! exports provided: $Dictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$Dictionary", function() { return $Dictionary; });
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");
/* harmony import */ var _null__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./null */ "./src/types/null.ts");



class $Dictionary extends _any__WEBPACK_IMPORTED_MODULE_1__["$Any"] {
    constructor(value) {
        super(value, _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Dictionary);
    }
    get(key) {
        if (this.value.has(key.value)) {
            return this.value.get(key.value);
        }
        return new _null__WEBPACK_IMPORTED_MODULE_2__["$Null"]();
    }
    set(key, value) {
        this.value.set(key.value, value);
        return value;
    }
    toString() {
        const result = [];
        this.value.forEach((value, key) => {
            result.push(`${key.toString()}: ${value}`);
        });
        return `{${result.join('; ')}}`;
    }
}


/***/ }),

/***/ "./src/types/function.ts":
/*!*******************************!*\
  !*** ./src/types/function.ts ***!
  \*******************************/
/*! exports provided: $Callable, $Function */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$Callable", function() { return $Callable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$Function", function() { return $Function; });
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scope */ "./src/scope.ts");
/* harmony import */ var _return__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./return */ "./src/types/return.ts");




class $Callable extends _any__WEBPACK_IMPORTED_MODULE_1__["$Any"] {
    constructor(name, arity, value) {
        super(value, _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Function);
        this.arity = arity;
        this.name = name;
    }
    call(thiz, args, interpreter) {
        return this.value(thiz, args, interpreter);
    }
    toString() {
        return `<${this.name}  function>`;
    }
}
class $Function extends $Callable {
    constructor(declaration, closure) {
        super(declaration.name.lexeme, declaration.params.length, null);
        this.declaration = declaration;
        this.closure = closure;
    }
    call(thiz, args, interpreter) {
        const scope = new _scope__WEBPACK_IMPORTED_MODULE_2__["Scope"](this.closure);
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
            if (e instanceof _return__WEBPACK_IMPORTED_MODULE_3__["$Return"]) {
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


/***/ }),

/***/ "./src/types/list.ts":
/*!***************************!*\
  !*** ./src/types/list.ts ***!
  \***************************/
/*! exports provided: $List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$List", function() { return $List; });
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");
/* harmony import */ var _null__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./null */ "./src/types/null.ts");



class $List extends _any__WEBPACK_IMPORTED_MODULE_1__["$Any"] {
    constructor(value) {
        super(value, _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].List);
    }
    get(key) {
        if (key.isNumber()) {
            return this.value[key.value];
        }
        else if (key.isRange) {
            return this.range(key);
        }
        else {
            // return super.get(key);
            return new _null__WEBPACK_IMPORTED_MODULE_2__["$Null"]();
        }
    }
    set(key, value) {
        if (key.isNumber()) {
            this.value[key.value] = value;
        }
        return value;
    }
    range(range) {
        const result = [];
        range.iterate(this.value.length, (i) => {
            result.push(this.value[i]);
        });
        return new $List(result);
    }
    toString() {
        return `[${this.value.join(',')}]`;
    }
}


/***/ }),

/***/ "./src/types/null.ts":
/*!***************************!*\
  !*** ./src/types/null.ts ***!
  \***************************/
/*! exports provided: $Null */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$Null", function() { return $Null; });
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");


class $Null extends _any__WEBPACK_IMPORTED_MODULE_1__["$Any"] {
    constructor() {
        super(null);
        this.type = _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Null;
    }
    toString() {
        return 'null';
    }
}


/***/ }),

/***/ "./src/types/number.ts":
/*!*****************************!*\
  !*** ./src/types/number.ts ***!
  \*****************************/
/*! exports provided: $Number */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$Number", function() { return $Number; });
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");


class $Number extends _any__WEBPACK_IMPORTED_MODULE_1__["$Any"] {
    constructor(value) {
        super(value, _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Number);
    }
}


/***/ }),

/***/ "./src/types/object.ts":
/*!*****************************!*\
  !*** ./src/types/object.ts ***!
  \*****************************/
/*! exports provided: $Object */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$Object", function() { return $Object; });
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");
/* harmony import */ var _null__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./null */ "./src/types/null.ts");



class $Object extends _any__WEBPACK_IMPORTED_MODULE_1__["$Any"] {
    constructor(value, conztructor) {
        super(value, _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Object);
        this.conztructor = conztructor;
    }
    get(key) {
        const method = this.conztructor.get(key);
        if (method.isFunction()) {
            return method;
        }
        if (this.value.has(key.value)) {
            return this.value.get(key.value);
        }
        return new _null__WEBPACK_IMPORTED_MODULE_2__["$Null"]();
    }
    set(key, value) {
        this.value.set(key.value, value);
        return value;
    }
    toString() {
        return `<${this.constructor.name} object>`;
    }
}


/***/ }),

/***/ "./src/types/range.ts":
/*!****************************!*\
  !*** ./src/types/range.ts ***!
  \****************************/
/*! exports provided: RangeValue, $Range */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeValue", function() { return RangeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$Range", function() { return $Range; });
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");


class RangeValue {
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
}
class $Range extends _any__WEBPACK_IMPORTED_MODULE_1__["$Any"] {
    constructor(value) {
        super(value, _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Range);
    }
    iterate(length, callback) {
        this.value.normalize(length);
        if (this.value.step > 0) {
            for (let i = this.value.start; i <= this.value.end; i += this.value.step) {
                callback(i);
            }
        }
        else if (this.value.step < 0) {
            for (let i = this.value.start; i >= this.value.end; i += this.value.step) {
                callback(i);
            }
        }
        else {
            conzole.warn(`[range error] => 0 is not a valid step`);
        }
    }
}


/***/ }),

/***/ "./src/types/return.ts":
/*!*****************************!*\
  !*** ./src/types/return.ts ***!
  \*****************************/
/*! exports provided: $Return */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$Return", function() { return $Return; });
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");


class $Return extends _any__WEBPACK_IMPORTED_MODULE_1__["$Any"] {
    constructor(value) {
        super(value, _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Return);
    }
}


/***/ }),

/***/ "./src/types/string.ts":
/*!*****************************!*\
  !*** ./src/types/string.ts ***!
  \*****************************/
/*! exports provided: $String */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$String", function() { return $String; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/types.ts");
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../runtime */ "./src/runtime.ts");


class $String extends _types__WEBPACK_IMPORTED_MODULE_0__["$Any"] {
    constructor(value) {
        super(value, _types__WEBPACK_IMPORTED_MODULE_0__["DataType"].String);
        /* this.prototype.values.set('invoke', Runtime.invokeMethod(this));
        this.prototype.values.set('size', Runtime.stringLengthMethod(this));
        this.prototype.values.set('substr', Runtime.stringSubStrMethod(this));
        this.prototype.values.set('split', Runtime.stringSplitMethod(this));
        this.prototype.values.set('match', Runtime.stringMatchMethod(this));
        this.prototype.values.set('replace', Runtime.stringReplaceMethod(this));
        this.prototype.values.set('alter', Runtime.stringAlterMethod(this));
        this.prototype.values.set('toUpperCase', Runtime.stringToUpperCase(this));
        this.prototype.values.set('toLowerCase', Runtime.stringToLowercase(this)); */
    }
    get(key) {
        if (key.isNumber()) {
            return new $String(this.value[key.value]);
        }
        else if (key.isRange()) {
            return this.range(key);
        }
        else if (key.value === 'length') {
            return new _types__WEBPACK_IMPORTED_MODULE_0__["$Number"](this.value.length);
        }
        else if (_runtime__WEBPACK_IMPORTED_MODULE_1__["Runtime"].String.has(key.value)) {
            return _runtime__WEBPACK_IMPORTED_MODULE_1__["Runtime"].String.get(key.value);
        }
        return new _types__WEBPACK_IMPORTED_MODULE_0__["$Null"]();
    }
    set(key, value) {
        if (typeof key !== 'number') {
            // this.properties.set(key, value);
        }
        return new _types__WEBPACK_IMPORTED_MODULE_0__["$Null"]();
    }
    arity() {
        return 0;
    }
    range(range) {
        let result = '';
        range.iterate(this.value.length, (i) => {
            result += this.value[i];
        });
        return new $String(result);
    }
}


/***/ }),

/***/ "./src/types/type.enum.ts":
/*!********************************!*\
  !*** ./src/types/type.enum.ts ***!
  \********************************/
/*! exports provided: DataType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataType", function() { return DataType; });
var DataType;
(function (DataType) {
    DataType[DataType["Null"] = 0] = "Null";
    DataType[DataType["Void"] = 1] = "Void";
    DataType[DataType["Any"] = 2] = "Any";
    DataType[DataType["Boolean"] = 3] = "Boolean";
    DataType[DataType["Number"] = 4] = "Number";
    DataType[DataType["String"] = 5] = "String";
    DataType[DataType["List"] = 6] = "List";
    DataType[DataType["Dictionary"] = 7] = "Dictionary";
    DataType[DataType["Object"] = 8] = "Object";
    DataType[DataType["Class"] = 9] = "Class";
    DataType[DataType["Function"] = 10] = "Function";
    DataType[DataType["Lambda"] = 11] = "Lambda";
    DataType[DataType["Range"] = 12] = "Range";
    DataType[DataType["Return"] = 13] = "Return"; // 13
})(DataType || (DataType = {}));


/***/ }),

/***/ "./src/types/void.ts":
/*!***************************!*\
  !*** ./src/types/void.ts ***!
  \***************************/
/*! exports provided: $Void */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$Void", function() { return $Void; });
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");


class $Void extends _any__WEBPACK_IMPORTED_MODULE_1__["$Any"] {
    constructor(value) {
        super(value, _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Void);
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXRzY3JpcHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlbW9zL2RlbW8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4cHJlc3Npb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVycHJldGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjYW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njb3BlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cnVjdHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rva2VuLnRzIiwid2VicGFjazovLy8uL3NyYy90eXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvYW55LnRzIiwid2VicGFjazovLy8uL3NyYy90eXBlcy9ib29sZWFuLnRzIiwid2VicGFjazovLy8uL3NyYy90eXBlcy9jbGFzcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvZGljdGlvbmFyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvZnVuY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL2xpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL251bGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL251bWJlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy90eXBlcy9yYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvcmV0dXJuLnRzIiwid2VicGFjazovLy8uL3NyYy90eXBlcy9zdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL3R5cGUuZW51bS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvdm9pZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvQztBQUNGO0FBQ1U7QUFDUjtBQUNVO0FBSTlDLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO0lBQy9CLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0NBQzFCO0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLGdEQUFPLEVBQUUsQ0FBQztBQUMv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QUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnREFBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQzFELEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGdEQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDM0QsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsZ0RBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUM1RCxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnREFBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQzdELEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGdEQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDMUQsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsZ0RBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUMzRCxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnREFBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ3RELEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGdEQUFTLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDcEQsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsZ0RBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUMxRCxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnREFBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ3RELEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGdEQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDekQsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsZ0RBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUN0RCxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnREFBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ3ZELEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGdEQUFTLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDeEQsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDN0YsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDbkcsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDdEYsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDNUYsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDN0YsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDbkcsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDN0YsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ25JLEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUNwSSxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQzdLLEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDbEksS0FBSyxJQUFJO2dCQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFBQyxNQUFNO1lBQzlCLEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUc7Z0JBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsZ0RBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEMsTUFBTTtZQUNWLEtBQUssR0FBRztnQkFDSixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDakIsZUFBZTtZQUNmLEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxJQUFJLENBQUM7WUFDVixLQUFLLElBQUk7Z0JBQ0wsTUFBTTtZQUNWLGVBQWU7WUFDZjtnQkFDSSxJQUFJLHNEQUFhLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3JCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztpQkFDakI7cUJBQU0sSUFBSSxzREFBYSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUM1QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7aUJBQ3JCO3FCQUFNO29CQUNILElBQUksQ0FBQyxTQUFTLENBQUMseUJBQXlCLElBQUksR0FBRyxDQUFDLENBQUM7aUJBQ3BEO2dCQUNELE1BQU07U0FDYjtJQUNMLENBQUM7SUFFTyxTQUFTLENBQUMsT0FBZTtRQUM3QixPQUFPLENBQUMsS0FBSyxDQUFDLGFBQWEsSUFBSSxDQUFDLElBQUksT0FBTyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sSUFBSSxLQUFLLENBQUMsaURBQWlELENBQUMsQ0FBQztJQUN2RSxDQUFDO0NBRUo7Ozs7Ozs7Ozs7Ozs7QUMzT0Q7QUFBQTtBQUFPLE1BQU0sS0FBSztJQUtkLFlBQVksU0FBZ0IsSUFBSTtRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVPLFVBQVUsQ0FBQyxPQUFlO1FBQzlCLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDN0MsTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTSxHQUFHLENBQUMsSUFBWSxFQUFFLEtBQVc7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTSxNQUFNLENBQUMsSUFBWSxFQUFFLEtBQVc7UUFDbkMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsSUFBSSw0QkFBNEIsQ0FBQyxDQUFDO1NBQ3BFO2FBQU07WUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFFTSxNQUFNLENBQUMsSUFBWSxFQUFFLEtBQVc7UUFDbkMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN6QjthQUFNO1lBQ0gsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtnQkFDdEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDMUM7WUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsSUFBSSx3QkFBd0IsQ0FBQyxDQUFDO1NBQ2hFO0lBQ0wsQ0FBQztJQUVNLEdBQUcsQ0FBQyxJQUFXO1FBQ2xCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzlCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRztZQUN2QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLElBQUksQ0FBQyxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sa0JBQWtCLENBQUMsQ0FBQztJQUNoRixDQUFDO0NBRUo7Ozs7Ozs7Ozs7Ozs7QUNqREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBZSxJQUFJO0lBRXRCLDJCQUEyQjtJQUMzQixnQkFBZSxDQUFDO0NBRW5CO0FBZ0JNLE1BQU0sS0FBTSxTQUFRLElBQUk7SUFHM0IsWUFBWSxVQUFrQjtRQUMxQixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFFTSxNQUFNLENBQUksT0FBdUI7UUFDcEMsT0FBTyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxZQUFZLENBQUM7SUFDeEIsQ0FBQztDQUNKO0FBQ00sTUFBTSxLQUFNLFNBQVEsSUFBSTtJQUszQixZQUFZLElBQVcsRUFBRSxNQUFhLEVBQUUsT0FBZTtRQUNuRCxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFTSxNQUFNLENBQUksT0FBdUI7UUFDcEMsT0FBTyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxZQUFZLENBQUM7SUFDeEIsQ0FBQztDQUNKO0FBQ00sTUFBTSxPQUFRLFNBQVEsSUFBSTtJQUk3QixZQUFZLElBQVUsRUFBRSxTQUFlO1FBQ25DLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUVNLE1BQU0sQ0FBSSxPQUF1QjtRQUNwQyxPQUFPLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8sY0FBYyxDQUFDO0lBQzFCLENBQUM7Q0FDSjtBQUNNLE1BQU0sVUFBVyxTQUFRLElBQUk7SUFHaEMsWUFBWSxVQUFnQjtRQUN4QixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFFTSxNQUFNLENBQUksT0FBdUI7UUFDcEMsT0FBTyxPQUFPLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLFFBQVE7UUFDWCxPQUFPLGlCQUFpQixDQUFDO0lBQzdCLENBQUM7Q0FDSjtBQUNNLE1BQU0sSUFBSyxTQUFRLElBQUk7SUFLMUIsWUFBWSxJQUFXLEVBQUUsTUFBZSxFQUFFLElBQVk7UUFDbEQsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sTUFBTSxDQUFJLE9BQXVCO1FBQ3BDLE9BQU8sT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7Q0FDSjtBQUNNLE1BQU0sRUFBRyxTQUFRLElBQUk7SUFLeEIsWUFBWSxTQUFlLEVBQUUsUUFBYyxFQUFFLFFBQWM7UUFDdkQsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRU0sTUFBTSxDQUFJLE9BQXVCO1FBQ3BDLE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7Q0FDSjtBQUNNLE1BQU0sS0FBTSxTQUFRLElBQUk7SUFHM0IsWUFBWSxVQUFnQjtRQUN4QixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFFTSxNQUFNLENBQUksT0FBdUI7UUFDcEMsT0FBTyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxZQUFZLENBQUM7SUFDeEIsQ0FBQztDQUNKO0FBQ00sTUFBTSxNQUFPLFNBQVEsSUFBSTtJQUk1QixZQUFZLE9BQWMsRUFBRSxLQUFXO1FBQ25DLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVNLE1BQU0sQ0FBSSxPQUF1QjtRQUNwQyxPQUFPLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLFFBQVE7UUFDWCxPQUFPLGFBQWEsQ0FBQztJQUN6QixDQUFDO0NBQ0o7QUFDTSxNQUFNLEdBQUksU0FBUSxJQUFJO0lBS3pCLFlBQVksSUFBVyxFQUFFLElBQVcsRUFBRSxXQUFpQjtRQUNuRCxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFFTSxNQUFNLENBQUksT0FBdUI7UUFDcEMsT0FBTyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQztDQUNKO0FBQ00sTUFBTSxLQUFNLFNBQVEsSUFBSTtJQUkzQixZQUFZLFNBQWUsRUFBRSxJQUFVO1FBQ25DLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVNLE1BQU0sQ0FBSSxPQUF1QjtRQUNwQyxPQUFPLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVNLFFBQVE7UUFDWCxPQUFPLFlBQVksQ0FBQztJQUN4QixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUM5TUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFDO0FBRTlCLFNBQVMsT0FBTyxDQUFDLElBQVk7SUFDaEMsT0FBTyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLENBQUM7QUFDdEMsQ0FBQztBQUVNLFNBQVMsT0FBTyxDQUFDLElBQVk7SUFDaEMsT0FBTyxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7QUFDeEUsQ0FBQztBQUVNLFNBQVMsY0FBYyxDQUFDLElBQVk7SUFDdkMsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFFTSxTQUFTLFNBQVMsQ0FBQyxJQUFZO0lBQ2xDLE9BQU8sZ0RBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxnREFBUyxDQUFDLEdBQUcsQ0FBQztBQUM1QyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDaEJEO0FBQUE7QUFBQTtBQUFBLElBQVksU0F5RVg7QUF6RUQsV0FBWSxTQUFTO0lBQ2pCLGdCQUFnQjtJQUNoQix1Q0FBRztJQUNILDJDQUFLO0lBQ0wsNkNBQU07SUFFTiwwQkFBMEI7SUFDMUIsbURBQVM7SUFDVCw2Q0FBTTtJQUNOLDJDQUFLO0lBQ0wsMkNBQUs7SUFDTCw2Q0FBTTtJQUNOLHVDQUFHO0lBQ0gseUNBQUk7SUFDSixvREFBUztJQUNULHdEQUFXO0lBQ1gsb0RBQVM7SUFDVCxnREFBTztJQUNQLDBDQUFJO0lBQ0osc0RBQVU7SUFDViwwREFBWTtJQUNaLHNEQUFVO0lBQ1Ysb0RBQVM7SUFDVCw0Q0FBSztJQUNMLDBDQUFJO0lBRUosOEJBQThCO0lBQzlCLDRDQUFLO0lBQ0wsMENBQUk7SUFDSixvREFBUztJQUNULDRDQUFLO0lBQ0wsNENBQUs7SUFDTCxzREFBVTtJQUNWLGdEQUFPO0lBQ1AsMERBQVk7SUFDWiwwQ0FBSTtJQUNKLG9EQUFTO0lBQ1QsNENBQUs7SUFDTCxzREFBVTtJQUNWLHNEQUFVO0lBQ1YsMERBQVk7SUFDWiwwQ0FBSTtJQUNKLG9EQUFTO0lBQ1Qsa0RBQVE7SUFDUixrREFBUTtJQUNSLHNEQUFVO0lBQ1Ysb0RBQVM7SUFFVCxXQUFXO0lBQ1gsc0RBQVU7SUFDViw4Q0FBTTtJQUNOLDhDQUFNO0lBQ04sNENBQUs7SUFFTCxXQUFXO0lBQ1gsd0NBQUc7SUFDSCw0Q0FBSztJQUNMLHNDQUFFO0lBQ0YsMENBQUk7SUFDSixnREFBTztJQUNQLDRDQUFLO0lBQ0wsd0NBQUc7SUFDSCxrREFBUTtJQUNSLHNDQUFFO0lBQ0Ysd0NBQUc7SUFDSCwwQ0FBSTtJQUNKLHNDQUFFO0lBQ0YsNENBQUs7SUFDTCw4Q0FBTTtJQUNOLDRDQUFLO0lBQ0wsMENBQUk7SUFDSix3Q0FBRztJQUNILDRDQUFLO0FBQ1QsQ0FBQyxFQXpFVyxTQUFTLEtBQVQsU0FBUyxRQXlFcEI7QUFFTSxNQUFNLEtBQUs7SUFPZCxZQUFZLElBQWUsRUFBRSxNQUFjLEVBQUUsT0FBWSxFQUFFLElBQVk7UUFDbkUsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVNLFFBQVE7UUFDWCxPQUFPLEtBQUssSUFBSSxDQUFDLElBQUksTUFBTSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUM7SUFDL0MsQ0FBQztDQUVKOzs7Ozs7Ozs7Ozs7O0FDOUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkM7QUFDUjtBQUNGO0FBQ21DO0FBQzNCO0FBQ0o7QUFDVTtBQUNaO0FBQ0k7QUFDQTtBQUNVO0FBQ1Y7QUFDQTtBQUNKO0FBcUJuQzs7Ozs7Ozs7Ozs7OztBQ2pDRjtBQUFBO0FBQUE7QUFBdUM7QUFHaEMsTUFBTSxJQUFJO0lBS2IsWUFBWSxLQUFVLEVBQUUsT0FBaUIsbURBQVEsQ0FBQyxHQUFHO1FBRjlDLFNBQUksR0FBRyxtREFBUSxDQUFDLEdBQUcsQ0FBQztRQUd2QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxtREFBUSxDQUFDLE1BQU0sQ0FBQztJQUN6QyxDQUFDO0lBRU0sTUFBTTtRQUNULE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxtREFBUSxDQUFDLElBQUksQ0FBQztJQUN2QyxDQUFDO0lBRU0sU0FBUztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxtREFBUSxDQUFDLE9BQU8sQ0FBQztJQUMxQyxDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxtREFBUSxDQUFDLE1BQU0sQ0FBQztJQUN6QyxDQUFDO0lBRU0sT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxtREFBUSxDQUFDLEtBQUssQ0FBQztJQUN4QyxDQUFDO0lBRU0sVUFBVTtRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxtREFBUSxDQUFDLFFBQVEsQ0FBQztJQUMzQyxDQUFDO0lBRU0sT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxtREFBUSxDQUFDLEtBQUssQ0FBQztJQUN4QyxDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxtREFBUSxDQUFDLFFBQVEsSUFBSyxJQUFZLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQztJQUN6RSxDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxtREFBUSxDQUFDLE1BQU0sQ0FBQztJQUN6QyxDQUFDO0lBRU0sUUFBUTtRQUNYLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ2YsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNsQixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUI7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRTtZQUNyQyxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN2RCxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1NBQ3REO1FBQ0QsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssV0FBVyxFQUFFO1lBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQztTQUMzRDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxPQUFPLENBQUMsS0FBVztRQUN0QixPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssQ0FBQztJQUN0QyxDQUFDO0lBRU0sR0FBRyxDQUFDLEdBQVM7UUFDaEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsc0JBQXNCLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdEQsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSxHQUFHLENBQUMsR0FBUyxFQUFFLEtBQVc7UUFDN0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsc0JBQXNCLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdEQsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pDLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ3pGRDtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUNWO0FBRXRCLE1BQU0sUUFBUyxTQUFRLHlDQUFJO0lBSTlCLFlBQVksS0FBYztRQUN0QixLQUFLLENBQUMsS0FBSyxFQUFFLG1EQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztDQUVKOzs7Ozs7Ozs7Ozs7O0FDVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUNWO0FBQ0U7QUFHeEIsTUFBTSxNQUFPLFNBQVEseUNBQUk7SUFLNUIsWUFBWSxJQUFZLEVBQUUsS0FBd0IsRUFBRSxNQUFxQjtRQUNyRSxLQUFLLENBQUMsS0FBSyxFQUFFLG1EQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVNLEdBQUcsQ0FBQyxHQUFTO1FBQ2hCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzNCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDO1FBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDL0I7UUFFRCxPQUFPLElBQUksMkNBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxHQUFHLENBQUMsR0FBUyxFQUFFLEtBQVc7UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqQyxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUM7SUFDbEMsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDckNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFDVjtBQUNFO0FBRXhCLE1BQU0sV0FBWSxTQUFRLHlDQUFJO0lBR2pDLFlBQVksS0FBcUI7UUFDN0IsS0FBSyxDQUFDLEtBQUssRUFBRSxtREFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSxHQUFHLENBQUMsR0FBUztRQUNoQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMzQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQztRQUNELE9BQU8sSUFBSSwyQ0FBSyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVNLEdBQUcsQ0FBQyxHQUFTLEVBQUUsS0FBVztRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTSxRQUFRO1FBQ1gsTUFBTSxNQUFNLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSyxFQUFFLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEMsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDN0JEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVDO0FBQ1Y7QUFFSTtBQUVFO0FBSzVCLE1BQU0sU0FBVSxTQUFRLHlDQUFJO0lBTS9CLFlBQVksSUFBWSxFQUFHLEtBQWEsRUFBRSxLQUFtQjtRQUN6RCxLQUFLLENBQUMsS0FBSyxFQUFFLG1EQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVNLElBQUksQ0FBQyxJQUFTLEVBQUUsSUFBVyxFQUFFLFdBQXdCO1FBQ3hELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLGFBQWEsQ0FBQztJQUN0QyxDQUFDO0NBRUo7QUFFTSxNQUFNLFNBQVUsU0FBUSxTQUFTO0lBS3BDLFlBQVksV0FBc0IsRUFBRSxPQUFjO1FBQzlDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBRU0sSUFBSSxDQUFDLElBQVMsRUFBRSxJQUFXLEVBQUUsV0FBd0I7UUFDeEQsTUFBTSxLQUFLLEdBQUcsSUFBSSw0Q0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JELEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzVEO1FBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxZQUFZLEdBQVUsSUFBSSxDQUFDO1FBQy9CLElBQUk7WUFDQSxZQUFZLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNqQyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzFEO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDUixJQUFJLENBQUMsWUFBWSwrQ0FBTyxFQUFFO2dCQUN0QixJQUFJLFlBQVksRUFBRTtvQkFDZCxXQUFXLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztpQkFDcEM7Z0JBQ0QsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ2xCO1lBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1lBQzNELE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sSUFBSSxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQztTQUNoRTtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Q0FFSjs7Ozs7Ozs7Ozs7OztBQ25FRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVDO0FBQ1Y7QUFFRTtBQUV4QixNQUFNLEtBQU0sU0FBUSx5Q0FBSTtJQUUzQixZQUFZLEtBQWE7UUFDckIsS0FBSyxDQUFDLEtBQUssRUFBRSxtREFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFTSxHQUFHLENBQUMsR0FBUztRQUNoQixJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNoQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hDO2FBQU0sSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO1lBQ3BCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBVSxHQUFHLENBQUMsQ0FBQztTQUNuQzthQUFNO1lBQ0gseUJBQXlCO1lBQ3pCLE9BQU8sSUFBSSwyQ0FBSyxFQUFFLENBQUM7U0FDdEI7SUFFTCxDQUFDO0lBRU0sR0FBRyxDQUFDLEdBQVMsRUFBRSxLQUFXO1FBQzdCLElBQUksR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUNqQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTyxLQUFLLENBQUMsS0FBYTtRQUN2QixNQUFNLE1BQU0sR0FBVyxFQUFFLENBQUM7UUFDMUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO0lBQ3ZDLENBQUM7Q0FFSjs7Ozs7Ozs7Ozs7OztBQzNDRDtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUNWO0FBRXRCLE1BQU0sS0FBTSxTQUFRLHlDQUFJO0lBSTNCO1FBQ0ksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxtREFBUSxDQUFDLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Q0FFSjs7Ozs7Ozs7Ozs7OztBQ2hCRDtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUNWO0FBRXRCLE1BQU0sT0FBUSxTQUFRLHlDQUFJO0lBSTdCLFlBQVksS0FBYTtRQUNyQixLQUFLLENBQUMsS0FBSyxFQUFFLG1EQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUVKOzs7Ozs7Ozs7Ozs7O0FDWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUNWO0FBQ0U7QUFJeEIsTUFBTSxPQUFRLFNBQVEseUNBQUk7SUFJN0IsWUFBWSxLQUF3QixFQUFFLFdBQTBCO1FBQzVELEtBQUssQ0FBQyxLQUFLLEVBQUUsbURBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBRU0sR0FBRyxDQUFDLEdBQVM7UUFDaEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFekMsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDckIsT0FBTyxNQUFNLENBQUM7U0FDakI7UUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMzQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQztRQUVELE9BQU8sSUFBSSwyQ0FBSyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVNLEdBQUcsQ0FBQyxHQUFTLEVBQUUsS0FBVztRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxVQUFVLENBQUM7SUFDL0MsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDckNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFDVjtBQUl0QixNQUFPLFVBQVU7SUFLcEIsWUFBWSxLQUFhLEVBQUUsR0FBVyxFQUFFLElBQVk7UUFDaEQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sU0FBUyxDQUFDLE1BQWM7UUFDM0IsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztTQUNqQjtRQUNELElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxJQUFJLEVBQUU7WUFDbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDL0M7SUFDTCxDQUFDO0NBQ0o7QUFFTSxNQUFNLE1BQU8sU0FBUSx5Q0FBSTtJQUU1QixZQUFZLEtBQWlCO1FBQ3pCLEtBQUssQ0FBQyxLQUFLLEVBQUUsbURBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0sT0FBTyxDQUFDLE1BQWMsRUFBRSxRQUFpQztRQUM1RCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNyQixLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQ3ZFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNkO1NBQ0o7YUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTtZQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQ3RFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNmO1NBQ0o7YUFBTTtZQUNILE9BQU8sQ0FBQyxJQUFJLENBQUMsd0NBQXdDLENBQUMsQ0FBQztTQUMxRDtJQUNMLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ2pERDtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUNWO0FBRXRCLE1BQU0sT0FBUSxTQUFRLHlDQUFJO0lBSTdCLFlBQVksS0FBVztRQUNuQixLQUFLLENBQUMsS0FBSyxFQUFFLG1EQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDVkQ7QUFBQTtBQUFBO0FBQUE7QUFBb0Y7QUFDL0M7QUFFOUIsTUFBTSxPQUFRLFNBQVEsMkNBQUk7SUFHN0IsWUFBWSxLQUFhO1FBQ3JCLEtBQUssQ0FBQyxLQUFLLEVBQUUsK0NBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5Qjs7Ozs7Ozs7cUZBUTZFO0lBQ2pGLENBQUM7SUFFTSxHQUFHLENBQUMsR0FBUztRQUNoQixJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNoQixPQUFPLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDN0M7YUFBTSxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUN0QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQVUsR0FBRyxDQUFDLENBQUM7U0FDbkM7YUFBTSxJQUFJLEdBQUcsQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQy9CLE9BQU8sSUFBSSw4Q0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekM7YUFBTSxJQUFJLGdEQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdEMsT0FBTyxnREFBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxJQUFJLDRDQUFLLEVBQUUsQ0FBQztJQUV2QixDQUFDO0lBRU0sR0FBRyxDQUFDLEdBQVMsRUFBRSxLQUFVO1FBQzVCLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQ3pCLG1DQUFtQztTQUN0QztRQUNELE9BQU8sSUFBSSw0Q0FBSyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVNLEtBQUs7UUFDUixPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFTyxLQUFLLENBQUMsS0FBYTtRQUN2QixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ25DLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBRUo7Ozs7Ozs7Ozs7Ozs7QUNwREQ7QUFBQTtBQUFBLElBQVksUUFlWDtBQWZELFdBQVksUUFBUTtJQUNoQix1Q0FBSTtJQUNKLHVDQUFJO0lBQ0oscUNBQUc7SUFDSCw2Q0FBTztJQUNQLDJDQUFNO0lBQ04sMkNBQU07SUFDTix1Q0FBSTtJQUNKLG1EQUFVO0lBQ1YsMkNBQU07SUFDTix5Q0FBSztJQUNMLGdEQUFRO0lBQ1IsNENBQU07SUFDTiwwQ0FBSztJQUNMLDRDQUFNLEVBQUksS0FBSztBQUNuQixDQUFDLEVBZlcsUUFBUSxLQUFSLFFBQVEsUUFlbkI7Ozs7Ozs7Ozs7Ozs7QUNmRDtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUNWO0FBRXRCLE1BQU0sS0FBTSxTQUFRLHlDQUFJO0lBSTNCLFlBQVksS0FBYTtRQUNyQixLQUFLLENBQUMsS0FBSyxFQUFFLG1EQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztDQUVKIiwiZmlsZSI6ImF0c2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXRzY3JpcHQudHNcIik7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgeyBTY2FubmVyIH0gZnJvbSAnLi9zY2FubmVyJztcclxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnLi9wYXJzZXInO1xyXG5pbXBvcnQgeyBJbnRlcnByZXRlciB9IGZyb20gJy4vaW50ZXJwcmV0ZXInO1xyXG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnLi9jb25zb2xlJztcclxuaW1wb3J0IHsgRGVtb1NvdXJjZUNvZGUgfSBmcm9tICcuL2RlbW9zL2RlbW8nO1xyXG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueTtcclxuZGVjbGFyZSB2YXIgZ2xvYmFsOiBhbnk7XHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIGdsb2JhbC53aW5kb3cgPSBnbG9iYWw7XHJcbn1cclxuXHJcbndpbmRvdy5jb256b2xlID0gbmV3IENvbnNvbGUoKTtcclxud2luZG93LmRlbW9Tb3VyY2VDb2RlID0gRGVtb1NvdXJjZUNvZGU7XHJcbndpbmRvdy5hdHNjcmlwdCA9IChzb3VyY2U6IHN0cmluZykgID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIChuZXcgSW50ZXJwcmV0ZXIoKS5pbnRlcnBldCgobmV3IFBhcnNlcigobmV3IFNjYW5uZXIoc291cmNlKSkuc2NhbigpKSkucGFyc2UoKSkpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB9XHJcbn07XHJcbiIsImV4cG9ydCBlbnVtIENvbnNvbGVNZXNzYWdlVHlwZSB7XHJcbiAgICBVc2VyLFxyXG4gICAgRXJyb3IsXHJcbiAgICBXYXJuaW5nLFxyXG4gICAgSW5mb1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uc29sZU1lc3NhZ2Uge1xyXG4gICAgcHVibGljIHRpbWU6IERhdGU7XHJcbiAgICBwdWJsaWMgdGV4dDogYW55O1xyXG4gICAgcHVibGljIHR5cGU6IENvbnNvbGVNZXNzYWdlVHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnNvbGUge1xyXG5cclxuICAgIHB1YmxpYyBtZXNzYWdlczogQ29uc29sZU1lc3NhZ2VbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGQobWVzc2FnZTogYW55LCB0eXBlOiBDb25zb2xlTWVzc2FnZVR5cGUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goe1xyXG4gICAgICAgICAgICB0ZXh0OiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICAgICAgdHlwZTogdHlwZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZyhtZXNzYWdlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmFkZChtZXNzYWdlLCBDb25zb2xlTWVzc2FnZVR5cGUuVXNlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdhcm4obWVzc2FnZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5hZGQobWVzc2FnZSwgQ29uc29sZU1lc3NhZ2VUeXBlLldhcm5pbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlcnJvcihtZXNzYWdlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmFkZChtZXNzYWdlLCBDb25zb2xlTWVzc2FnZVR5cGUuRXJyb3IpO1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5mbyhtZXNzYWdlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmFkZChtZXNzYWdlLCBDb25zb2xlTWVzc2FnZVR5cGUuSW5mbyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpcnN0KCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZXNbMF0udGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbGFzdCgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VzW3RoaXMubWVzc2FnZXMubGVuZ3RoIC0gMV0udGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHJpbnQoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2codGhpcy5tZXNzYWdlcy5tYXAoKGNtKSA9PiBjbS50ZXh0KSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBEZW1vU291cmNlQ29kZSA9XHJcbmBcclxuXHJcbmNsYXNzIFBlcnNvbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgaGVsbG8oKSB7XHJcbiAgICAgICAgcHJpbnQgdGhpcy5uYW1lICsgJyBzYXlzIGhlbGxvJztcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgU3R1ZGVudCBleHRlbmRzIFBlcnNvbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZSwgZ3JhZGUpIHtcclxuICAgICAgICBzdXBlci5jb25zdHJ1Y3RvcihuYW1lKTtcclxuICAgICAgICB0aGlzLmdyYWRlID0gZ3JhZGU7XHJcbiAgICB9XHJcblxyXG4gICAgaGVsbG8oKSB7XHJcbiAgICAgICAgc3VwZXIuaGVsbG8oKTtcclxuICAgICAgICBwcmludCB0aGlzLm5hbWUgKyAnaXMgaW4gZ3JhZGUgJyArIHRoaXMuZ3JhZGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBzID0gbmV3IFN0dWRlbnQoJ0pvaG4nLCAzKTtcclxucy5oZWxsbygpO1xyXG5cclxuXHJcbmA7XHJcbiIsImltcG9ydCB7IFRva2VuLCBUb2tlblR5cGUgfSBmcm9tICd0b2tlbic7XG5pbXBvcnQgeyBTdG10IH0gZnJvbSAnc3RhdGVtZW50JztcbmltcG9ydCB7ICRBbnkgfSBmcm9tICd0eXBlcyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFeHByIHtcbiAgICBwdWJsaWMgcmVzdWx0OiBhbnk7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgY29uc3RydWN0b3IoKSB7fVxuICAgIHB1YmxpYyBhYnN0cmFjdCBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSO1xufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmV4cG9ydCBpbnRlcmZhY2UgRXhwclZpc2l0b3I8Uj4ge1xuICAgIHZpc2l0QXNzaWduRXhwcihleHByOiBBc3NpZ24pOiBSO1xuICAgIHZpc2l0QmluYXJ5RXhwcihleHByOiBCaW5hcnkpOiBSO1xuICAgIHZpc2l0Q2FsbEV4cHIoZXhwcjogQ2FsbCk6IFI7XG4gICAgdmlzaXREaWN0aW9uYXJ5RXhwcihleHByOiBEaWN0aW9uYXJ5KTogUjtcbiAgICB2aXNpdEdldEV4cHIoZXhwcjogR2V0KTogUjtcbiAgICB2aXNpdEdyb3VwaW5nRXhwcihleHByOiBHcm91cGluZyk6IFI7XG4gICAgdmlzaXRLZXlFeHByKGV4cHI6IEtleSk6IFI7XG4gICAgdmlzaXRMYW1iZGFFeHByKGV4cHI6IExhbWJkYSk6IFI7XG4gICAgdmlzaXRMb2dpY2FsRXhwcihleHByOiBMb2dpY2FsKTogUjtcbiAgICB2aXNpdExpc3RFeHByKGV4cHI6IExpc3QpOiBSO1xuICAgIHZpc2l0TGl0ZXJhbEV4cHIoZXhwcjogTGl0ZXJhbCk6IFI7XG4gICAgdmlzaXROZXdFeHByKGV4cHI6IE5ldyk6IFI7XG4gICAgdmlzaXRQb3N0Zml4RXhwcihleHByOiBQb3N0Zml4KTogUjtcbiAgICB2aXNpdFJhbmdlRXhwcihleHByOiBSYW5nZSk6IFI7XG4gICAgdmlzaXRSZWdFeEV4cHIoZXhwcjogUmVnRXgpOiBSO1xuICAgIHZpc2l0U2V0RXhwcihleHByOiBTZXQpOiBSO1xuICAgIHZpc2l0U3VwZXJFeHByKGV4cHI6IFN1cGVyKTogUjtcbiAgICB2aXNpdFRlcm5hcnlFeHByKGV4cHI6IFRlcm5hcnkpOiBSO1xuICAgIHZpc2l0VW5hcnlFeHByKGV4cHI6IFVuYXJ5KTogUjtcbiAgICB2aXNpdFZhcmlhYmxlRXhwcihleHByOiBWYXJpYWJsZSk6IFI7XG4gICAgdmlzaXRadHJpbmdFeHByKGV4cHI6IFp0cmluZyk6IFI7XG59XG5cbmV4cG9ydCBjbGFzcyBBc3NpZ24gZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgbmFtZTogVG9rZW47XG4gICAgcHVibGljIHZhbHVlOiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogVG9rZW4sIHZhbHVlOiBFeHByKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0QXNzaWduRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkFzc2lnbic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEJpbmFyeSBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBsZWZ0OiBFeHByO1xuICAgIHB1YmxpYyBvcGVyYXRvcjogVG9rZW47XG4gICAgcHVibGljIHJpZ2h0OiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IobGVmdDogRXhwciwgb3BlcmF0b3I6IFRva2VuLCByaWdodDogRXhwcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0QmluYXJ5RXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkJpbmFyeSc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENhbGwgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgY2FsbGVlOiBFeHByO1xuICAgIHB1YmxpYyBwYXJlbjogVG9rZW47XG4gICAgcHVibGljIGFyZ3M6IEV4cHJbXTtcbiAgICBwdWJsaWMgdGhpejogJEFueTtcblxuICAgIGNvbnN0cnVjdG9yKGNhbGxlZTogRXhwciwgcGFyZW46IFRva2VuLCBhcmdzOiBFeHByW10sIHRoaXo6ICRBbnkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jYWxsZWUgPSBjYWxsZWU7XG4gICAgICAgIHRoaXMucGFyZW4gPSBwYXJlbjtcbiAgICAgICAgdGhpcy5hcmdzID0gYXJncztcbiAgICAgICAgdGhpcy50aGl6ID0gdGhpejtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q2FsbEV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5DYWxsJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRGljdGlvbmFyeSBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBwcm9wZXJ0aWVzOiBFeHByW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzOiBFeHByW10pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RGljdGlvbmFyeUV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5EaWN0aW9uYXJ5JztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgR2V0IGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIGVudGl0eTogRXhwcjtcbiAgICBwdWJsaWMga2V5OiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IoZW50aXR5OiBFeHByLCBrZXk6IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbnRpdHkgPSBlbnRpdHk7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRHZXRFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuR2V0JztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgR3JvdXBpbmcgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgZXhwcmVzc2lvbjogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKGV4cHJlc3Npb246IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0R3JvdXBpbmdFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuR3JvdXBpbmcnO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBLZXkgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgbmFtZTogVG9rZW47XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBUb2tlbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRLZXlFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuS2V5JztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTGFtYmRhIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIGxhbWJkYTogU3RtdDtcblxuICAgIGNvbnN0cnVjdG9yKGxhbWJkYTogU3RtdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmxhbWJkYSA9IGxhbWJkYTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TGFtYmRhRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkxhbWJkYSc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIExvZ2ljYWwgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgbGVmdDogRXhwcjtcbiAgICBwdWJsaWMgb3BlcmF0b3I6IFRva2VuO1xuICAgIHB1YmxpYyByaWdodDogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKGxlZnQ6IEV4cHIsIG9wZXJhdG9yOiBUb2tlbiwgcmlnaHQ6IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdExvZ2ljYWxFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuTG9naWNhbCc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIExpc3QgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgdmFsdWU6IEV4cHJbXTtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBFeHByW10pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRMaXN0RXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkxpc3QnO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBMaXRlcmFsIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIHZhbHVlOiAkQW55O1xuXG4gICAgY29uc3RydWN0b3IodmFsdWU6ICRBbnkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRMaXRlcmFsRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkxpdGVyYWwnO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBOZXcgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgY2xheno6IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihjbGF6ejogRXhwcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNsYXp6ID0gY2xheno7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdE5ld0V4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5OZXcnO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBQb3N0Zml4IGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIG5hbWU6IFRva2VuO1xuICAgIHB1YmxpYyBpbmNyZW1lbnQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IFRva2VuLCBpbmNyZW1lbnQ6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmluY3JlbWVudCA9IGluY3JlbWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UG9zdGZpeEV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5Qb3N0Zml4JztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUmFuZ2UgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgc3RhcnQ6IEV4cHI7XG4gICAgcHVibGljIGVuZDogRXhwcjtcbiAgICBwdWJsaWMgc3RlcDogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKHN0YXJ0OiBFeHByLCBlbmQ6IEV4cHIsIHN0ZXA6IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xuICAgICAgICB0aGlzLmVuZCA9IGVuZDtcbiAgICAgICAgdGhpcy5zdGVwID0gc3RlcDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UmFuZ2VFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuUmFuZ2UnO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBSZWdFeCBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyB2YWx1ZTogUmVnRXhwO1xuXG4gICAgY29uc3RydWN0b3IodmFsdWU6IFJlZ0V4cCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFJlZ0V4RXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLlJlZ0V4JztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU2V0IGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIGVudGl0eTogRXhwcjtcbiAgICBwdWJsaWMga2V5OiBFeHByO1xuICAgIHB1YmxpYyB2YWx1ZTogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKGVudGl0eTogRXhwciwga2V5OiBFeHByLCB2YWx1ZTogRXhwcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmVudGl0eSA9IGVudGl0eTtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0U2V0RXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLlNldCc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFN1cGVyIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIHBhcmVuOiBUb2tlbjtcblxuICAgIGNvbnN0cnVjdG9yKHBhcmVuOiBUb2tlbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnBhcmVuID0gcGFyZW47XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFN1cGVyRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLlN1cGVyJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVGVybmFyeSBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBjb25kaXRpb246IEV4cHI7XG4gICAgcHVibGljIHRoZW5FeHByOiBFeHByO1xuICAgIHB1YmxpYyBlbHNlRXhwcjogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmRpdGlvbjogRXhwciwgdGhlbkV4cHI6IEV4cHIsIGVsc2VFeHByOiBFeHByKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgICAgICB0aGlzLnRoZW5FeHByID0gdGhlbkV4cHI7XG4gICAgICAgIHRoaXMuZWxzZUV4cHIgPSBlbHNlRXhwcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VGVybmFyeUV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5UZXJuYXJ5JztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVW5hcnkgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgb3BlcmF0b3I6IFRva2VuO1xuICAgIHB1YmxpYyByaWdodDogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKG9wZXJhdG9yOiBUb2tlbiwgcmlnaHQ6IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFVuYXJ5RXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLlVuYXJ5JztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVmFyaWFibGUgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgbmFtZTogVG9rZW47XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBUb2tlbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRWYXJpYWJsZUV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5WYXJpYWJsZSc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFp0cmluZyBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyB2YWx1ZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFp0cmluZ0V4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5adHJpbmcnO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIEV4cHIgZnJvbSAnLi9leHByZXNzaW9uJztcclxuaW1wb3J0ICogYXMgU3RtdCBmcm9tICcuL3N0YXRlbWVudCc7XHJcbmltcG9ydCB7IENvbnNvbGUgfSBmcm9tICcuL2NvbnNvbGUnO1xyXG5pbXBvcnQgeyBTY29wZSB9IGZyb20gJy4vc2NvcGUnO1xyXG5pbXBvcnQgeyBUb2tlblR5cGUsIFRva2VuIH0gZnJvbSAnLi90b2tlbic7XHJcbmltcG9ydCB7ICRBbnksICRWb2lkLCAkU3RyaW5nLCAkTnVtYmVyLCAkTnVsbCwgJEJvb2xlYW4sIFJhbmdlVmFsdWUsICRSYW5nZSwgJERpY3Rpb25hcnksICRMaXN0LCAkRnVuY3Rpb24sICRSZXR1cm4sICRDbGFzcywgJE9iamVjdCB9IGZyb20gJy4vdHlwZXMnO1xyXG5pbXBvcnQgeyBSdW50aW1lIH0gZnJvbSAnLi9ydW50aW1lJztcclxuZGVjbGFyZSB2YXIgY29uem9sZTogQ29uc29sZTtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnRlcnByZXRlciBpbXBsZW1lbnRzXHJcbiAgICBFeHByLkV4cHJWaXNpdG9yPCRBbnk+LFxyXG4gICAgU3RtdC5TdG10VmlzaXRvcjwkQW55PiB7XHJcbiAgICBwdWJsaWMgZ2xvYmFsID0gbmV3IFNjb3BlKCk7XHJcbiAgICBwdWJsaWMgc2NvcGUgPSB0aGlzLmdsb2JhbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggKSB7XHJcbiAgICAgICAgLy8gdGhpcy5nbG9iYWwuZGVmaW5lKCdlY2hvJywgUnVudGltZS5lY2hvRnVuY3Rpb24oKSk7XHJcbiAgICAgICAgLy8gdGhpcy5nbG9iYWwuZGVmaW5lKCdyYW5kJywgUnVudGltZS5yYW5kRnVuY3Rpb24oKSk7XHJcbiAgICAgICAgY29uc3QgbWF0aCA9IG5ldyAkRGljdGlvbmFyeShuZXcgTWFwKCkpO1xyXG4gICAgICAgIG1hdGguc2V0KG5ldyAkU3RyaW5nKCdwaScpLCBuZXcgJE51bWJlcihNYXRoLlBJKSk7XHJcbiAgICAgICAgdGhpcy5nbG9iYWwuc2V0KCdtYXRoJywgbmV3ICREaWN0aW9uYXJ5KFJ1bnRpbWUuTWF0aCkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV2YWx1YXRlKGV4cHI6IEV4cHIuRXhwcik6ICRBbnkge1xyXG4gICAgICAgIHJldHVybiBleHByLnJlc3VsdCA9IGV4cHIuYWNjZXB0KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXhlY3V0ZShzdG10OiBTdG10LlN0bXQpOiAkQW55IHtcclxuICAgICAgICByZXR1cm4gc3RtdC5yZXN1bHQgPSBzdG10LmFjY2VwdCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJwZXQoc3RhdGVtZW50czogU3RtdC5TdG10W10pOiBTdG10LlN0bXRbXSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBzdGF0ZW1lbnQgb2Ygc3RhdGVtZW50cykge1xyXG4gICAgICAgICAgICB0aGlzLmV4ZWN1dGUoc3RhdGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlbWVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbnRlcnByZXRlckVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnpvbGUubG9nKGBbaW50ZXJwcmV0ZXIgZXJyb3JdID0+ICR7bWVzc2FnZX1gKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRFeHByZXNzaW9uU3RtdChzdG10OiBTdG10LkV4cHJlc3Npb24pOiAkQW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZShzdG10LmV4cHJlc3Npb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdFByaW50U3RtdChzdG10OiBTdG10LlByaW50KTogJEFueSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZXZhbHVhdGUoc3RtdC5leHByZXNzaW9uKTtcclxuICAgICAgICBjb256b2xlLmxvZyhkYXRhLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdFZhclN0bXQoc3RtdDogU3RtdC5WYXIpOiAkQW55IHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBuZXcgJE51bGwoKTtcclxuICAgICAgICBpZiAoc3RtdC5pbml0aWFsaXplciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZXZhbHVhdGUoc3RtdC5pbml0aWFsaXplcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZS5pc0xhbWJkYSgpKSB7XHJcbiAgICAgICAgICAgICh2YWx1ZSBhcyBhbnkpLm5hbWUgPSBzdG10Lm5hbWUubGV4ZW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjb3BlLmRlZmluZShzdG10Lm5hbWUubGV4ZW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdFZhcmlhYmxlRXhwcihleHByOiBFeHByLlZhcmlhYmxlKTogJEFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuZ2V0KGV4cHIubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0UG9zdGZpeEV4cHIoZXhwcjogRXhwci5Qb3N0Zml4KTogJEFueSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNjb3BlLmdldChleHByLm5hbWUpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gbmV3ICROdW1iZXIodmFsdWUgKyBleHByLmluY3JlbWVudCk7XHJcbiAgICAgICAgdGhpcy5zY29wZS5hc3NpZ24oZXhwci5uYW1lLmxleGVtZSwgbmV3VmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRMaXN0RXhwcihleHByOiBFeHByLkxpc3QpOiAkQW55IHtcclxuICAgICAgICBjb25zdCB2YWx1ZXM6ICRBbnlbXSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgZXhwcmVzc2lvbiBvZiBleHByLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKHRoaXMuZXZhbHVhdGUoZXhwcmVzc2lvbikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3ICRMaXN0KHZhbHVlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0WnRyaW5nRXhwcihleHByOiBFeHByLlp0cmluZyk6ICRBbnkge1xyXG4gICAgICAgIHJldHVybiBuZXcgJFN0cmluZyhleHByLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRSZWdFeEV4cHIoZXhwcjogRXhwci5SZWdFeCk6ICRBbnkge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeEVudGl0eShleHByLnZhbHVlKTtcclxuICAgICAgICAqLyByZXR1cm4gbmV3ICROdWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0QXNzaWduRXhwcihleHByOiBFeHByLkFzc2lnbik6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5ldmFsdWF0ZShleHByLnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNjb3BlLmFzc2lnbihleHByLm5hbWUubGV4ZW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdEJpbmFyeUV4cHIoZXhwcjogRXhwci5CaW5hcnkpOiAkQW55IHtcclxuICAgICAgICBsZXQgbGVmdCA9IHRoaXMuZXZhbHVhdGUoZXhwci5sZWZ0KS52YWx1ZTtcclxuICAgICAgICBsZXQgcmlnaHQgPSB0aGlzLmV2YWx1YXRlKGV4cHIucmlnaHQpLnZhbHVlO1xyXG4gICAgICAgIGxlZnQgPSBsZWZ0IGluc3RhbmNlb2YgJFN0cmluZyA/IGxlZnQudG9TdHJpbmcoKSA6IGxlZnQ7XHJcbiAgICAgICAgcmlnaHQgPSByaWdodCBpbnN0YW5jZW9mICRTdHJpbmcgPyByaWdodC50b1N0cmluZygpIDogcmlnaHQ7XHJcbiAgICAgICAgc3dpdGNoIChleHByLm9wZXJhdG9yLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuTWludXM6XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLk1pbnVzRXF1YWw6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICROdW1iZXIobGVmdCAtIHJpZ2h0KTtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuU2xhc2g6XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlNsYXNoRXF1YWw6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICROdW1iZXIobGVmdCAvIHJpZ2h0KTtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuU3RhcjpcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuU3RhckVxdWFsOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVtYmVyKGxlZnQgKiByaWdodCk7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlBlcmNlbnQ6XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlBlcmNlbnRFcXVhbDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJE51bWJlcihsZWZ0ICUgcmlnaHQpO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5QbHVzOlxyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5QbHVzRXF1YWw6XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKGxlZnQpICYmICFpc05hTihyaWdodCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICROdW1iZXIobGVmdCArIHJpZ2h0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICBpZiAobGVmdCBpbnN0YW5jZW9mIEFycmF5RW50aXR5ICYmIHJpZ2h0IGluc3RhbmNlb2YgQXJyYXlFbnRpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5RW50aXR5KGxlZnQudmFsdWVzLmNvbmNhdChyaWdodC52YWx1ZXMpKTtcclxuICAgICAgICAgICAgICAgIH0gKi9cclxuICAgICAgICAgICAgICAgIHJldHVybiA8YW55PiBuZXcgJFN0cmluZyhsZWZ0IGFzIHN0cmluZyArIHJpZ2h0IGFzIHN0cmluZyk7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlBpcGU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICROdW1iZXIobGVmdCB8IHJpZ2h0KTtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuQ2FyZXQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICROdW1iZXIobGVmdCBeIHJpZ2h0KTtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuR3JlYXRlcjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4obGVmdCA+IHJpZ2h0KTtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuR3JlYXRlckVxdWFsOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbihsZWZ0ID49IHJpZ2h0KTtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuTGVzczpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4obGVmdCA8IHJpZ2h0KTtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuTGVzc0VxdWFsOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbihsZWZ0IDw9IHJpZ2h0KTtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuRXF1YWxFcXVhbDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4obGVmdCA9PT0gcmlnaHQpO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5CYW5nRXF1YWw6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKGxlZnQgIT09IHJpZ2h0KTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbnpvbGUud2FybihleHByKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsOyAvLyB1bnJlYWNoYWJsZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdExvZ2ljYWxFeHByKGV4cHI6IEV4cHIuTG9naWNhbCk6ICRBbnkge1xyXG4gICAgICAgIGlmIChleHByLm9wZXJhdG9yLnR5cGUgPT09IFRva2VuVHlwZS5BbmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGUoZXhwci5sZWZ0KSAmJiB0aGlzLmV2YWx1YXRlKGV4cHIucmlnaHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlKGV4cHIubGVmdCkgfHwgdGhpcy5ldmFsdWF0ZShleHByLnJpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0VGVybmFyeUV4cHIoZXhwcjogRXhwci5UZXJuYXJ5KTogJEFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGUoZXhwci5jb25kaXRpb24pLmlzVHJ1dGh5KCkgPyB0aGlzLmV2YWx1YXRlKGV4cHIudGhlbkV4cHIpIDogdGhpcy5ldmFsdWF0ZShleHByLmVsc2VFeHByKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRHcm91cGluZ0V4cHIoZXhwcjogRXhwci5Hcm91cGluZyk6ICRBbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlKGV4cHIuZXhwcmVzc2lvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0TGl0ZXJhbEV4cHIoZXhwcjogRXhwci5MaXRlcmFsKTogJEFueSB7XHJcbiAgICAgICAgcmV0dXJuIGV4cHIudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0VW5hcnlFeHByKGV4cHI6IEV4cHIuVW5hcnkpOiAkQW55IHtcclxuICAgICAgICBjb25zdCByaWdodCA9IHRoaXMuZXZhbHVhdGUoZXhwci5yaWdodCkudmFsdWU7XHJcbiAgICAgICAgc3dpdGNoIChleHByLm9wZXJhdG9yLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuTWludXM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICROdW1iZXIoLU51bWJlcihyaWdodCkpO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5CYW5nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbighQm9vbGVhbihyaWdodCkpO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5QbHVzUGx1czpcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluY1ZhbHVlID0gTnVtYmVyKHJpZ2h0KSArIDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3BlLmFzc2lnbigoPEV4cHIuVmFyaWFibGU+IGV4cHIucmlnaHQpLm5hbWUubGV4ZW1lLCBuZXcgJE51bWJlcihpbmNWYWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVtYmVyKGluY1ZhbHVlKTtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuTWludXNNaW51czpcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlY1ZhbHVlID0gTnVtYmVyKHJpZ2h0KSAtIDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3BlLmFzc2lnbigoPEV4cHIuVmFyaWFibGU+IGV4cHIucmlnaHQpLm5hbWUubGV4ZW1lLCBuZXcgJE51bWJlcihkZWNWYWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVtYmVyKGRlY1ZhbHVlKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsOyAvLyBzaG91bGQgYmUgdW5yZWFjaGFibGVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGV4ZWN1dGVCbG9jayhzdGF0ZW1lbnRzOiBTdG10LlN0bXRbXSwgbmV4dFNjb3BlOiBTY29wZSk6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTY29wZSA9IHRoaXMuc2NvcGU7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IG5leHRTY29wZTtcclxuICAgICAgICBmb3IgKGNvbnN0IHN0YXRlbWVudCBvZiBzdGF0ZW1lbnRzKSB7XHJcbiAgICAgICAgICAgIHN0YXRlbWVudC5yZXN1bHQgPSB0aGlzLmV4ZWN1dGUoc3RhdGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IGN1cnJlbnRTY29wZTtcclxuICAgICAgICByZXR1cm4gbmV3ICRWb2lkKCdibG9jaycpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdEJsb2NrU3RtdChzdG10OiBTdG10LkJsb2NrKTogJEFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZUJsb2NrKHN0bXQuc3RhdGVtZW50cywgbmV3IFNjb3BlKHRoaXMuc2NvcGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRJZlN0bXQoc3RtdDogU3RtdC5JZik6ICRBbnkge1xyXG4gICAgICAgIGlmICh0aGlzLmV2YWx1YXRlKHN0bXQuY29uZGl0aW9uKS5pc1RydXRoeSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoc3RtdC50aGVuU3RtdCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdG10LmVsc2VTdG10ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoc3RtdC5lbHNlU3RtdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdFdoaWxlU3RtdChzdG10OiBTdG10LldoaWxlKTogJEFueSB7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuZXZhbHVhdGUoc3RtdC5jb25kaXRpb24pLmlzVHJ1dGh5KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5leGVjdXRlKHN0bXQubG9vcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgJFZvaWQoJ3doaWxlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0RG9XaGlsZVN0bXQoc3RtdDogU3RtdC5Eb1doaWxlKTogJEFueSB7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICB0aGlzLmV4ZWN1dGUoc3RtdC5sb29wKTtcclxuICAgICAgICB9IHdoaWxlICh0aGlzLmV2YWx1YXRlKHN0bXQuY29uZGl0aW9uKS5pc1RydXRoeSgpKTtcclxuICAgICAgICByZXR1cm4gbmV3ICRWb2lkKCdkb3doaWxlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0Q2FsbEV4cHIoZXhwcjogRXhwci5DYWxsKTogJEFueSB7XHJcbiAgICAgICAgLy8gdmVyaWZ5IGNhbGxlZSBpcyBhIGZ1bmN0aW9uXHJcbiAgICAgICAgY29uc3QgY2FsbGVlID0gdGhpcy5ldmFsdWF0ZShleHByLmNhbGxlZSk7XHJcbiAgICAgICAgaWYgKCFjYWxsZWUuaXNGdW5jdGlvbigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW50ZXJwcmV0ZXJFcnJvcihgJHtjYWxsZWV9IGlzIG5vdCBhIGZ1bmN0aW9uYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzZXQgdGhpcyBpbiBmdW5jdGlvbiBzY29wZVxyXG4gICAgICAgIGxldCB0aGl6OiBhbnkgPSBudWxsO1xyXG4gICAgICAgIGlmIChleHByLmNhbGxlZSBpbnN0YW5jZW9mIEV4cHIuR2V0KSB7XHJcbiAgICAgICAgICAgIGlmIChleHByLmNhbGxlZS5lbnRpdHkgaW5zdGFuY2VvZiBFeHByLlN1cGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGl6ID0gdGhpcy5zY29wZS5nZXQobmV3IFRva2VuKFRva2VuVHlwZS5JZGVudGlmaWVyLCAndGhpcycsICd0aGlzJywgMCkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpeiA9IHRoaXMuZXZhbHVhdGUoZXhwci5jYWxsZWUuZW50aXR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZXhwci50aGl6ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXogPSBleHByLnRoaXo7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBldmFsdWF0ZSBmdW5jdGlvbiBhcmd1bWVudHNcclxuICAgICAgICBjb25zdCBhcmdzID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBhcmd1bWVudCBvZiBleHByLmFyZ3MpIHtcclxuICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZXZhbHVhdGUoYXJndW1lbnQpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHBhc3MgYXJndW1lbnRzIHRvIGZ1bmN0aW9uXHJcbiAgICAgICAgY29uc3QgZnVuYyA9IGNhbGxlZSBhcyAkRnVuY3Rpb247XHJcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoICE9PSBmdW5jLmFyaXR5ICYmIGZ1bmMuYXJpdHkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnpvbGUud2FybihgV2FybmluZyBhdCAoJHtleHByLnBhcmVuLmxpbmV9KTogJHtjYWxsZWV9IG1pc21hdGNoZWQgYXJndW1lbnQgbGVuZ3RoOyBcXG4gRXhwZWN0ZWQgJHtmdW5jLmFyaXR5fSBidXQgZ290ICR7YXJncy5sZW5ndGh9IGApO1xyXG4gICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPCBmdW5jLmFyaXR5KSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gYXJncy5sZW5ndGg7IGkgPD0gZnVuYy5hcml0eTsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKG5ldyAkTnVsbCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBleGVjdXRlIGZ1bmN0aW9uXHJcbiAgICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGl6LCBhcmdzLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRTdXBlckV4cHIoZXhwcjogRXhwci5TdXBlcik6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IHRoaXogPSB0aGlzLnNjb3BlLmdldChleHByLnBhcmVuKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGl6LmlzT2JqZWN0KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnRlcnByZXRlckVycm9yKFwiYmFzZSBleHByZXNzaW9uIGNhbiBiZSB1c2VkIG9ubHkgaW5zaWRlIG1ldGhvZHNcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjbGF6ejogJENsYXNzID0gKHRoaXogYXMgJE9iamVjdCkuY29uenRydWN0b3IgYXMgJENsYXNzO1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGNsYXp6LnBhcmVudDtcclxuICAgICAgICBpZiAocGFyZW50LmlzTnVsbCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW50ZXJwcmV0ZXJFcnJvcihcIkNsYXNzIFwiICsgY2xhenogKyBcImlzIG5vdCBpbmhlcml0ZWQgZnJvbSBwYXJlbnRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdE5ld0V4cHIoZXhwcjogRXhwci5OZXcpOiAkQW55IHtcclxuICAgICAgICBjb25zdCBuZXdDYWxsID0gKGV4cHIuY2xhenogYXMgRXhwci5DYWxsKTtcclxuICAgICAgICAvLyBpbnRlcm5hbCBjbGFzcyBkZWZpbml0aW9uIGluc3RhbmNlXHJcbiAgICAgICAgY29uc3QgY2xheno6ICRDbGFzcyA9IHRoaXMuZXZhbHVhdGUobmV3Q2FsbC5jYWxsZWUpIGFzICRDbGFzcztcclxuXHJcbiAgICAgICAgaWYgKCFjbGF6ei5pc0NsYXNzKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnRlcnByZXRlckVycm9yKGAnJHtjbGF6en0nIGlzIG5vdCBhIGNsYXNzLiAnbmV3JyBzdGF0ZW1lbnQgbXVzdCBiZSB1c2VkIHdpdGggY2xhc3Nlcy5gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbmV3IG9iamVjdFxyXG4gICAgICAgIGNvbnN0IGVudGl0eSA9IG5ldyAkT2JqZWN0KG5ldyBNYXAoKSwgY2xhenopO1xyXG4gICAgICAgIC8vIGNvbnN0cnVjdG9yIG1ldGhvZCBvZiB0aGUgY2xhc3NcclxuICAgICAgICBjb25zdCBjb256dHJ1Y3RvciA9IGNsYXp6LmdldChuZXcgJFN0cmluZygnY29uc3RydWN0b3InKSkgYXMgJEZ1bmN0aW9uO1xyXG4gICAgICAgIGlmIChjb256dHJ1Y3Rvci5pc0Z1bmN0aW9uKCkpIHtcclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgY29uc3QgYXJnczogJEFueVtdID0gW107XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYXJnIG9mIG5ld0NhbGwuYXJncykge1xyXG4gICAgICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZXZhbHVhdGUoYXJnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uenRydWN0b3IuY2FsbCh0aGlzLCBlbnRpdHksIGFyZ3MpO1xyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgIHRoaXMuZXZhbHVhdGUoXHJcbiAgICAgICAgICAgICAgIG5ldyBFeHByLkNhbGwoXHJcbiAgICAgICAgICAgICAgICAgICBuZXcgRXhwci5HZXQobmV3IEV4cHIuTGl0ZXJhbChlbnRpdHkpLCBuZXcgRXhwci5LZXkoY29uenRydWN0b3IuZGVjbGFyYXRpb24ubmFtZSkpLFxyXG4gICAgICAgICAgICAgICAgICAgY29uenRydWN0b3IuZGVjbGFyYXRpb24ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgIG5ld0NhbGwuYXJncyxcclxuICAgICAgICAgICAgICAgICAgIGVudGl0eVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZW50aXR5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdERpY3Rpb25hcnlFeHByKGV4cHI6IEV4cHIuRGljdGlvbmFyeSkge1xyXG4gICAgICAgIGNvbnN0IGRpY3QgPSBuZXcgJERpY3Rpb25hcnkobmV3IE1hcCgpKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIGV4cHIucHJvcGVydGllcykge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgID0gdGhpcy5ldmFsdWF0ZSgocHJvcGVydHkgYXMgRXhwci5TZXQpLmtleSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5ldmFsdWF0ZSgocHJvcGVydHkgYXMgRXhwci5TZXQpLnZhbHVlKTtcclxuICAgICAgICAgICAgZGljdC5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkaWN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdEtleUV4cHIoZXhwcjogRXhwci5LZXkpOiAkQW55IHtcclxuICAgICAgICByZXR1cm4gbmV3ICRBbnkoZXhwci5uYW1lLmxpdGVyYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdEdldEV4cHIoZXhwcjogRXhwci5HZXQpOiAkQW55IHtcclxuICAgICAgICBjb25zdCBlbnRpdHkgPSB0aGlzLmV2YWx1YXRlKGV4cHIuZW50aXR5KTtcclxuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmV2YWx1YXRlKGV4cHIua2V5KTtcclxuICAgICAgICByZXR1cm4gZW50aXR5LmdldChrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdFNldEV4cHIoZXhwcjogRXhwci5TZXQpOiAkQW55IHtcclxuICAgICAgICBjb25zdCBlbnRpdHkgPSB0aGlzLmV2YWx1YXRlKGV4cHIuZW50aXR5KTtcclxuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmV2YWx1YXRlKGV4cHIua2V5KTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZXZhbHVhdGUoZXhwci52YWx1ZSk7XHJcbiAgICAgICAgZW50aXR5LnNldChrZXksIHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdmFsdWUudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0RnVuY1N0bXQoc3RtdDogU3RtdC5GdW5jKTogJEFueSB7XHJcbiAgICAgICAgY29uc3QgZnVuYyA9IG5ldyAkRnVuY3Rpb24oc3RtdCwgdGhpcy5zY29wZSk7XHJcbiAgICAgICAgdGhpcy5zY29wZS5kZWZpbmUoc3RtdC5uYW1lLmxleGVtZSwgZnVuYyk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdENsYXNzU3RtdChzdG10OiBTdG10LkNsYXNzKTogJEFueSB7XHJcbiAgICAgICAgbGV0IHBhcmVudDogJEFueTtcclxuXHJcbiAgICAgICAgaWYgKHN0bXQucGFyZW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHBhcmVudCA9IG5ldyAkTnVsbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBhcmVudCA9IHRoaXMuc2NvcGUuZ2V0KHN0bXQucGFyZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1ldGhvZHMgPSBuZXcgTWFwPGFueSwgJEFueT4oKTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBtZXRob2Qgb2Ygc3RtdC5tZXRob2RzKSB7XHJcbiAgICAgICAgICAgIG1ldGhvZHMuc2V0KG1ldGhvZC5uYW1lLmxleGVtZSwgbmV3ICRGdW5jdGlvbihtZXRob2QsIHRoaXMuc2NvcGUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2xhenogPSBuZXcgJENsYXNzKHN0bXQubmFtZS5sZXhlbWUsIG1ldGhvZHMsIHBhcmVudCk7XHJcbiAgICAgICAgdGhpcy5zY29wZS5kZWZpbmUoc3RtdC5uYW1lLmxleGVtZSwgY2xhenopO1xyXG4gICAgICAgIHJldHVybiBjbGF6ejtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRMYW1iZGFFeHByKGV4cHI6IEV4cHIuTGFtYmRhKTogJEFueSB7XHJcbiAgICAgICAgY29uc3QgbGFtYmRhOiBTdG10LkZ1bmMgPSBleHByLmxhbWJkYSBhcyBTdG10LkZ1bmM7XHJcbiAgICAgICAgY29uc3QgZnVuYzogJEZ1bmN0aW9uID0gbmV3ICRGdW5jdGlvbihsYW1iZGEsIHRoaXMuc2NvcGUpO1xyXG4gICAgICAgIHJldHVybiBmdW5jO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdFJldHVyblN0bXQoc3RtdDogU3RtdC5SZXR1cm4pOiAkQW55IHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBuZXcgJE51bGwoKTtcclxuICAgICAgICBpZiAoc3RtdC52YWx1ZSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZXZhbHVhdGUoc3RtdC52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyAkUmV0dXJuKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRSYW5nZUV4cHIoZXhwcjogRXhwci5SYW5nZSk6ICRBbnkge1xyXG4gICAgICAgIHJldHVybiBuZXcgJFJhbmdlKG5ldyBSYW5nZVZhbHVlKFxyXG4gICAgICAgICAgICBleHByLnN0YXJ0ID8gdGhpcy5ldmFsdWF0ZShleHByLnN0YXJ0KS52YWx1ZSA6IG51bGwsXHJcbiAgICAgICAgICAgIGV4cHIuZW5kID8gdGhpcy5ldmFsdWF0ZShleHByLmVuZCkudmFsdWUgOiBudWxsLFxyXG4gICAgICAgICAgICBleHByLnN0ZXAgPyB0aGlzLmV2YWx1YXRlKGV4cHIuc3RlcCkudmFsdWUgOiBudWxsXHJcbiAgICAgICAgKSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCAqIGFzIEV4cHIgZnJvbSAnLi9leHByZXNzaW9uJztcclxuaW1wb3J0ICogYXMgU3RtdCBmcm9tICcuL3N0YXRlbWVudCc7XHJcbmltcG9ydCB7IENvbnNvbGUgfSBmcm9tICcuL2NvbnNvbGUnO1xyXG5pbXBvcnQgeyBUb2tlbiwgVG9rZW5UeXBlIH0gZnJvbSAnLi90b2tlbic7XHJcbmltcG9ydCB7ICRCb29sZWFuLCAkTnVtYmVyLCAkTnVsbCB9IGZyb20gJy4vdHlwZXMnO1xyXG5kZWNsYXJlIHZhciBjb256b2xlOiBDb25zb2xlO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnNlciB7XHJcbiAgICBwcml2YXRlIGN1cnJlbnQgPSAwO1xyXG4gICAgcHJpdmF0ZSB0b2tlbnM6IFRva2VuW107XHJcblxyXG4gICAgY29uc3RydWN0b3IodG9rZW5zOiBUb2tlbltdKSB7XHJcbiAgICAgICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBhcnNlKCk6IFN0bXQuU3RtdFtdIHtcclxuICAgICAgIGNvbnN0IHN0YXRlbWVudHM6IFN0bXQuU3RtdFtdID0gW107XHJcbiAgICAgICB3aGlsZSAoIXRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICBzdGF0ZW1lbnRzLnB1c2godGhpcy5kZWNsYXJhdGlvbigpKTtcclxuICAgICAgIH1cclxuICAgICAgIHJldHVybiBzdGF0ZW1lbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWF0Y2goLi4udHlwZXM6IFRva2VuVHlwZVtdKTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChjb25zdCB0eXBlIG9mIHR5cGVzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrKHR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkdmFuY2UoKTogVG9rZW4ge1xyXG4gICAgICAgIGlmICghdGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJldmlvdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBlZWsoKTogVG9rZW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmN1cnJlbnRdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJldmlvdXMoKTogVG9rZW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmN1cnJlbnQgLSAxXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrKHR5cGU6IFRva2VuVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBlZWsoKS50eXBlID09PSB0eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZW9mKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrKFRva2VuVHlwZS5Fb2YpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29uc3VtZSh0eXBlOiBUb2tlblR5cGUsIG1lc3NhZ2U6IHN0cmluZyk6IFRva2VuIHtcclxuICAgICAgICBpZiAodGhpcy5jaGVjayh0eXBlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUVycm9yKHRoaXMucHJldmlvdXMoKSwgbWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHRyYVNlbWljb2xvbigpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBtYXRjaCA9IHRoaXMubWF0Y2goVG9rZW5UeXBlLlNlbWljb2xvbik7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2soVG9rZW5UeXBlLlNlbWljb2xvbikpIHtcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuY2hlY2soVG9rZW5UeXBlLlNlbWljb2xvbikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuU2VtaWNvbG9uLCAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyc2VFcnJvcih0b2tlbjogVG9rZW4sIG1lc3NhZ2U6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgaWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5Fb2YpIHtcclxuICAgICAgICAgICAgY29uem9sZS5lcnJvcihgcGFyc2UgZXJyb3IgYXQgKCR7dG9rZW4ubGluZX0pOiBhdCBlbmQgJHttZXNzYWdlfWApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnpvbGUuZXJyb3IoYFtsaW5lICgke3Rva2VuLmxpbmV9KSBwYXJzZSBlcnJvciBhdCBcIiR7dG9rZW4ubGV4ZW1lfVwiXSA9PiAke21lc3NhZ2V9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvciAoJ0Vycm9yIHBhcnNpbmcnKTtcclxuICAgICAgICAvLyB1bnJlYWNoYWJsZSBjb2RlXHJcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuUGFuaWMsICdlcnJvcicsICdlcnJvcicsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyc2VXYXJuaW5nKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgIGNvbnpvbGUud2FybihgW2xpbmUgKCR7dG9rZW4ubGluZX0pIHBhcnNlIHdhcm5pbmcgYXQgXCIke3Rva2VuLmxleGVtZX1cIl0gPT4gJHttZXNzYWdlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3luY2hyb25pemUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgd2hpbGUgKCF0aGlzLmVvZigpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXZpb3VzKCkudHlwZSA9PT0gVG9rZW5UeXBlLlNlbWljb2xvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMucGVlaygpLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkNsYXNzOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuRnVuY3Rpb246XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5WYXI6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5Gb3I6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5JZjpcclxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLldoaWxlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuUHJpbnQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5SZXR1cm46XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlY2xhcmF0aW9uKCk6IFN0bXQuU3RtdCB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkNsYXNzKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xhc3NEZWNsYXJhdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5GdW5jdGlvbikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZ1bmNEZWNsYXJhdGlvbihcImZ1bmN0aW9uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5WYXIpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YXJEZWNsYXJhdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlbWVudCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgcGFyc2luZy4gRXhlY3V0aW9uIGhhcyBiZWVuIHN0b3BwZWQnKTtcclxuICAgICAgICAgICAgLy8gVE9ETzogcmVlbmFibGUgc3luY2hyb25pemVcclxuICAgICAgICAgICAgLy8gdGhpcy5zeW5jaHJvbml6ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbGFzc0RlY2xhcmF0aW9uKCk6IFN0bXQuQ2xhc3Mge1xyXG4gICAgICAgIGNvbnN0IG5hbWU6IFRva2VuID0gdGhpcy5jb25zdW1lKFRva2VuVHlwZS5JZGVudGlmaWVyLCBgRXhwZWN0ZWQgYSBjbGFzcyBuYW1lYCk7XHJcbiAgICAgICAgbGV0IHBhcmVudDogVG9rZW4gPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5FeHRlbmRzKSkge1xyXG4gICAgICAgICAgICBwYXJlbnQgID0gdGhpcy5jb25zdW1lKFRva2VuVHlwZS5JZGVudGlmaWVyLCBgRXhwZWN0ZWQgYSBwYXJlbnQgbmFtZWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLkxlZnRCcmFjZSwgYEV4cGVjdGVkIFwie1wiIGFmdGVyIGNsYXNzIG5hbWVgKTtcclxuICAgICAgICBjb25zdCBtZXRob2RzOiBTdG10LkZ1bmNbXSA9IFtdO1xyXG5cclxuICAgICAgICB3aGlsZSAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLlJpZ2h0QnJhY2UpICYmICF0aGlzLmVvZigpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrKFRva2VuVHlwZS5GdW5jdGlvbikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuRnVuY3Rpb24sICcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtZXRob2RzLnB1c2godGhpcy5mdW5jRGVjbGFyYXRpb24oXCJtZXRob2RcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5SaWdodEJyYWNlLCBgRXhwZWN0ZWQgXCJ9XCIgYWZ0ZXIgY2xhc3MgXCIke25hbWUubGl0ZXJhbH1cIiBtZXRob2RzYCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZXh0cmFTZW1pY29sb24oKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcnNlV2FybmluZyhgVW5uZWNlc3Nhcnkgc2VtaWNvbG9uIGFmdGVyIGNsYXNzICR7bmFtZS5sZXhlbWV9IGRlY2xhcmF0aW9uYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5DbGFzcyhuYW1lLCBwYXJlbnQsIG1ldGhvZHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZnVuY0RlY2xhcmF0aW9uKGtpbmQ6IHN0cmluZyk6IFN0bXQuRnVuYyB7XHJcbiAgICAgICAgY29uc3QgbmFtZTogVG9rZW4gPSB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLklkZW50aWZpZXIsIGBFeHBlY3RlZCBhICR7a2luZH0gbmFtZWApO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZ1bmNQYXJhbXNCb2R5KG5hbWUsIGtpbmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZnVuY1BhcmFtcygpOiBUb2tlbltdIHtcclxuICAgICAgICBjb25zdCBwYXJhbXM6IFRva2VuW10gPSBbXTtcclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLlJpZ2h0UGFyZW4pKSB7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMubGVuZ3RoID49IDI1NSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2VFcnJvcih0aGlzLnBlZWsoKSwgYFBhcmFtZXRlciBjb3VudCBleGNlZWRzIDI1NWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnB1c2godGhpcy5jb25zdW1lKFRva2VuVHlwZS5JZGVudGlmaWVyLCBgRXhwZWN0ZWQgYSBwYXJhbWV0ZXIgbmFtZWApKTtcclxuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuQ29tbWEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5SaWdodFBhcmVuLCBgRXhwZWN0IFwiKVwiIGFmdGVyIHBhcmFtZXRlcnNgKTtcclxuICAgICAgICByZXR1cm4gcGFyYW1zO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZnVuY1BhcmFtc0JvZHkobmFtZTogVG9rZW4sIGtpbmQ6IHN0cmluZyk6IFN0bXQuRnVuYyB7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5MZWZ0UGFyZW4sIGBFeHBlY3RlZCBcIihcIiBhZnRlciAke2tpbmR9YCk7XHJcbiAgICAgICAgY29uc3QgcGFyYW1zOiBUb2tlbltdID0gdGhpcy5mdW5jUGFyYW1zKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5MZWZ0QnJhY2UpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvZHk6IFN0bXQuU3RtdFtdID0gdGhpcy5ibG9jaygpO1xyXG4gICAgICAgICAgICBpZiAobmFtZS50eXBlICE9PSBUb2tlblR5cGUuTGFtYmRhICYmIHRoaXMuZXh0cmFTZW1pY29sb24oKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJzZVdhcm5pbmcoYFVubmVjZXNzYXJ5IHNlbWljb2xvbiBhZnRlciBmdW5jdGlvbiAke25hbWUubGV4ZW1lfSBkZWNsYXJhdGlvbmApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3RtdC5GdW5jKG5hbWUsIHBhcmFtcywgYm9keSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuQXJyb3cpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvZHk6IFN0bXQuU3RtdFtdID0gW107XHJcbiAgICAgICAgICAgIGxldCBhcnJvdzogRXhwci5FeHByO1xyXG4gICAgICAgICAgICBjb25zdCBrZXl3b3JkOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5TZW1pY29sb24pKSB7XHJcbiAgICAgICAgICAgICAgICBhcnJvdyA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2goVG9rZW5UeXBlLlNlbWljb2xvbik7XHJcbiAgICAgICAgICAgIGJvZHkucHVzaChuZXcgU3RtdC5SZXR1cm4oa2V5d29yZCwgYXJyb3cpKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdG10LkZ1bmMobmFtZSwgcGFyYW1zLCBib2R5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5MZWZ0QnJhY2UsIGBFeHBlY3QgXCJ7XCIgYmVmb3JlICR7a2luZH0gYm9keWApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdmFyRGVjbGFyYXRpb24oKTogU3RtdC5TdG10IHtcclxuICAgICAgICBjb25zdCBuYW1lOiBUb2tlbiA9IHRoaXMuY29uc3VtZShUb2tlblR5cGUuSWRlbnRpZmllciwgYEV4cGVjdGVkIGEgdmFyaWFibGUgbmFtZWApO1xyXG4gICAgICAgIGxldCBpbml0aWFsaXplcjogRXhwci5FeHByICA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkVxdWFsKSkge1xyXG4gICAgICAgICAgICBpbml0aWFsaXplciA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlNlbWljb2xvbiwgYEV4cGVjdGVkIHNlbWljb2xvbiBcIjtcIiBhZnRlciBhIHZhbHVlLmApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFN0bXQuVmFyKG5hbWUsIG51bGwsIGluaXRpYWxpemVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRlbWVudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuSWYpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlmU3RhdGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5QcmludCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJpbnRTdGF0ZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkRvKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kb1doaWxlU3RhdGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5XaGlsZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hpbGVTdGF0ZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkZvcikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9yU3RhdGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5MZWZ0QnJhY2UpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3RtdC5CbG9jayh0aGlzLmJsb2NrKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuUmV0dXJuKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXR1cm5TdGF0ZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvblN0YXRlbWVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaWZTdGF0ZW1lbnQoKTogU3RtdC5TdG10IHtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLkxlZnRQYXJlbiwgYEV4cGVjdGVkIFwiKFwiIGFmdGVyIGFuIGlmYCk7XHJcbiAgICAgICAgY29uc3QgY29uZGl0aW9uOiBFeHByLkV4cHIgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlJpZ2h0UGFyZW4sIGBFeHBlY3RlZCBcIilcIiBhZnRlciBpZiBjb25kaXRpb25gKTtcclxuICAgICAgICBjb25zdCB0aGVuU3RtdDogU3RtdC5TdG10ID0gdGhpcy5zdGF0ZW1lbnQoKTtcclxuICAgICAgICBsZXQgZWxzZVN0bXQ6IFN0bXQuU3RtdCA9ICBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5FbHNlKSkge1xyXG4gICAgICAgICAgICBlbHNlU3RtdCA9IHRoaXMuc3RhdGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5JZihjb25kaXRpb24sIHRoZW5TdG10LCBlbHNlU3RtdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB3aGlsZVN0YXRlbWVudCgpOiBTdG10LlN0bXQge1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuTGVmdFBhcmVuLCBgRXhwZWN0ZWQgXCIoXCIgYWZ0ZXIgYSB3aGlsZSBzdGF0ZW1lbnRgKTtcclxuICAgICAgICBjb25zdCBjb25kaXRpb246IEV4cHIuRXhwciA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuUmlnaHRQYXJlbiwgYEV4cGVjdGVkIFwiKVwiIGFmdGVyIHdoaWxlIGNvbmRpdGlvbmApO1xyXG4gICAgICAgIGNvbnN0IGxvb3A6IFN0bXQuU3RtdCA9IHRoaXMuc3RhdGVtZW50KCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdG10LldoaWxlKGNvbmRpdGlvbiwgbG9vcCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmb3JTdGF0ZW1lbnQoKTogU3RtdC5TdG10IHtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLkxlZnRQYXJlbiwgYEV4cGVjdGVkIFwiKFwiIGFmdGVyIGEgZm9yIHN0YXRlbWVudGApO1xyXG5cclxuICAgICAgICBsZXQgaW5pdGlhbGl6ZXI6IFN0bXQuU3RtdDtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuU2VtaWNvbG9uKSkge1xyXG4gICAgICAgICAgICBpbml0aWFsaXplciA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5WYXIpKSB7XHJcbiAgICAgICAgICAgIGluaXRpYWxpemVyID0gdGhpcy52YXJEZWNsYXJhdGlvbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGluaXRpYWxpemVyID0gdGhpcy5leHByZXNzaW9uU3RhdGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjb25kaXRpb246IEV4cHIuRXhwcjtcclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLlNlbWljb2xvbikpIHtcclxuICAgICAgICAgICAgY29uZGl0aW9uID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuU2VtaWNvbG9uLCBgRXhwZWN0ZWQgXCI7XCIgYWZ0ZXIgbG9vcCBjb25kaXRpb25gKTtcclxuICAgICAgICBsZXQgaW5jcmVtZW50OiBFeHByLkV4cHI7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5SaWdodFBhcmVuKSkge1xyXG4gICAgICAgICAgICBpbmNyZW1lbnQgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5SaWdodFBhcmVuLCBgRXhwZWN0ZWQgXCI7XCIgYWZ0ZXIgbG9vcCBjb25kaXRpb25gKTtcclxuICAgICAgICBsZXQgYm9keTogU3RtdC5TdG10ID0gdGhpcy5zdGF0ZW1lbnQoKTtcclxuICAgICAgICBpZiAoaW5jcmVtZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGJvZHkgPSBuZXcgU3RtdC5CbG9jayhbXHJcbiAgICAgICAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgICAgICAgbmV3IFN0bXQuRXhwcmVzc2lvbihpbmNyZW1lbnQpXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZGl0aW9uID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbmRpdGlvbiA9IG5ldyBFeHByLkxpdGVyYWwobmV3ICRCb29sZWFuKHRydWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYm9keSA9IG5ldyBTdG10LldoaWxlKGNvbmRpdGlvbiwgYm9keSk7XHJcbiAgICAgICAgaWYgKGluaXRpYWxpemVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGJvZHkgPSBuZXcgU3RtdC5CbG9jayhbXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsaXplcixcclxuICAgICAgICAgICAgICAgIGJvZHlcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBib2R5O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZG9XaGlsZVN0YXRlbWVudCgpOiBTdG10LlN0bXQge1xyXG4gICAgICAgIGNvbnN0IGxvb3A6IFN0bXQuU3RtdCA9IHRoaXMuc3RhdGVtZW50KCk7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5XaGlsZSwgYEV4cGVjdGVkIGNvbmRpdGlvbiBhZnRlciBkbyBzdGF0ZW1lbnRgKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLkxlZnRQYXJlbiwgYEV4cGVjdGVkIFwiKFwiIGFmdGVyIGEgd2hpbGVgKTtcclxuICAgICAgICBjb25zdCBjb25kaXRpb246IEV4cHIuRXhwciA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuUmlnaHRQYXJlbiwgYEV4cGVjdGVkIFwiKVwiIGFmdGVyIHdoaWxlIGNvbmRpdGlvbmApO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuU2VtaWNvbG9uLCBgRXhwZWN0ZWQgc2VtaWNvbG9uIFwiO1wiIGFmdGVyIGEgZG8gd2hpbGUgY29uZGl0aW9uYCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdG10LkRvV2hpbGUobG9vcCwgY29uZGl0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByaW50U3RhdGVtZW50KCk6IFN0bXQuU3RtdCB7XHJcbiAgICAgICAgY29uc3QgdmFsdWU6IEV4cHIuRXhwciA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuU2VtaWNvbG9uLCBgRXhwZWN0ZWQgc2VtaWNvbG9uIFwiO1wiIGFmdGVyIGV4cHJlc3Npb24uYCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdG10LlByaW50KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJldHVyblN0YXRlbWVudCgpOiBTdG10LlN0bXQge1xyXG4gICAgICAgIGNvbnN0IGtleXdvcmQ6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5jaGVjayhUb2tlblR5cGUuU2VtaWNvbG9uKSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5TZW1pY29sb24sIGBFeGVjdGVkIHNlbWljb2xvbiBcIjtcIiBhZnRlciByZXR1cm4gc3RhdGVtZW50YCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdG10LlJldHVybihrZXl3b3JkLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBibG9jaygpOiBTdG10LlN0bXRbXSB7XHJcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50czogU3RtdC5TdG10W10gPSBbXTtcclxuICAgICAgICB3aGlsZSAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLlJpZ2h0QnJhY2UpICYmICF0aGlzLmVvZigpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlbWVudHMucHVzaCh0aGlzLmRlY2xhcmF0aW9uKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlJpZ2h0QnJhY2UsIGBFeHBlY3RlZCBjbG9zaW5nIGJyYWNlIFwifVwiIGFmdGVyIGJsb2NrIHN0YXRlbWVudGApO1xyXG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXhwcmVzc2lvblN0YXRlbWVudCgpOiBTdG10LlN0bXQge1xyXG4gICAgICAgIGNvbnN0IGV4cHJlc3Npb246IEV4cHIuRXhwciA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuU2VtaWNvbG9uLCBgRXhwZWN0ZWQgc2VtaWNvbG9uIFwiO1wiIGFmdGVyICR7ZXhwcmVzc2lvbn0gZXhwcmVzc2lvbmApO1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5TZW1pY29sb24pKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBjb256b2xlLndhcm4oYFtsaW5lICgke3Rva2VuLmxpbmV9KSBwYXJzZSB3YXJuaW5nIGF0IFwiJHt0b2tlbi5sZXhlbWV9XCJdID0+IHVubmVjZXNzYXJ5IHNlbWljb2xvbiBvciBlbXB0eSBzdGF0ZW1lbnRgKTtcclxuICAgICAgICAgICAgLy8gY29uc3VtZSBhbGwgc2VtaWNvbG9uc1xyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlNlbWljb2xvbikpeyB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFN0bXQuRXhwcmVzc2lvbihleHByZXNzaW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV4cHJlc3Npb24oKTogRXhwci5FeHByIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hc3NpZ25tZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3NpZ25tZW50KCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgY29uc3QgZXhwcjogRXhwci5FeHByID0gdGhpcy50ZXJuYXJ5KCk7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkVxdWFsLCBUb2tlblR5cGUuUGx1c0VxdWFsLFxyXG4gICAgICAgICAgICBUb2tlblR5cGUuTWludXNFcXVhbCwgVG9rZW5UeXBlLlN0YXJFcXVhbCwgVG9rZW5UeXBlLlNsYXNoRXF1YWwpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgbGV0IHZhbHVlOiBFeHByLkV4cHIgPSB0aGlzLmFzc2lnbm1lbnQoKTtcclxuICAgICAgICAgICAgaWYgKGV4cHIgaW5zdGFuY2VvZiBFeHByLlZhcmlhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lOiBUb2tlbiA9IGV4cHIubmFtZTtcclxuICAgICAgICAgICAgICAgIGlmIChvcGVyYXRvci50eXBlICE9PSBUb2tlblR5cGUuRXF1YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG5ldyBFeHByLkJpbmFyeShuZXcgRXhwci5WYXJpYWJsZShuYW1lKSwgb3BlcmF0b3IsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5Bc3NpZ24obmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV4cHIgaW5zdGFuY2VvZiBFeHByLkdldCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wZXJhdG9yLnR5cGUgIT09IFRva2VuVHlwZS5FcXVhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbmV3IEV4cHIuQmluYXJ5KG5ldyBFeHByLkdldChleHByLmVudGl0eSwgZXhwci5rZXkpLCBvcGVyYXRvciwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlNldChleHByLmVudGl0eSwgZXhwci5rZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBhcnNlRXJyb3Iob3BlcmF0b3IsIGBJbnZhbGlkIGwtdmFsdWUsIGlzIG5vdCBhbiBhc3NpZ25pbmcgdGFyZ2V0LmApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRlcm5hcnkoKTogRXhwci5FeHByIHtcclxuICAgICAgICBjb25zdCBleHByID0gdGhpcy5sb2dpY2FsT3IoKTtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuUXVlc3Rpb24pKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoZW5FeHByOiBFeHByLkV4cHIgPSB0aGlzLnRlcm5hcnkoKTtcclxuICAgICAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5Db2xvbiwgYEV4cGVjdGVkIFwiOlwiIGFmdGVyIHRlcm5hcnkgPyBleHByZXNzaW9uYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsc2VFeHByOiBFeHByLkV4cHIgPSB0aGlzLnRlcm5hcnkoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlRlcm5hcnkoZXhwciwgdGhlbkV4cHIsIGVsc2VFeHByKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2dpY2FsT3IoKTogRXhwci5FeHByIHtcclxuICAgICAgICBsZXQgZXhwciA9IHRoaXMubG9naWNhbEFuZCgpO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5PcikpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3I6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBjb25zdCByaWdodDogRXhwci5FeHByID0gdGhpcy5sb2dpY2FsQW5kKCk7XHJcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5Mb2dpY2FsKGV4cHIsIG9wZXJhdG9yLCByaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBleHByO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9naWNhbEFuZCgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGxldCBleHByID0gdGhpcy5lcXVhbGl0eSgpO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5BbmQpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMuZXF1YWxpdHkoKTtcclxuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkxvZ2ljYWwoZXhwciwgb3BlcmF0b3IsIHJpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlcXVhbGl0eSgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGxldCBleHByICA9IHRoaXMuY29tcGFyaXNvbigpO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFxyXG4gICAgICAgICAgICBUb2tlblR5cGUuQmFuZ0VxdWFsLCBUb2tlblR5cGUuRXF1YWxFcXVhbClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3I6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBjb25zdCByaWdodDogRXhwci5FeHByID0gdGhpcy5jb21wYXJpc29uKCk7XHJcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5CaW5hcnkoZXhwciwgb3BlcmF0b3IsIHJpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb21wYXJpc29uKCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgbGV0IGV4cHI6IEV4cHIuRXhwciA9IHRoaXMuYWRkaXRpb24oKTtcclxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuR3JlYXRlciwgVG9rZW5UeXBlLkdyZWF0ZXJFcXVhbCwgVG9rZW5UeXBlLkxlc3MsIFRva2VuVHlwZS5MZXNzRXF1YWwpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMuYWRkaXRpb24oKTtcclxuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkJpbmFyeShleHByLCBvcGVyYXRvciwgcmlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZGl0aW9uKCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgbGV0IGV4cHI6IEV4cHIuRXhwciA9IHRoaXMubW9kdWx1cygpO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5NaW51cywgVG9rZW5UeXBlLlBsdXMpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMubW9kdWx1cygpO1xyXG4gICAgICAgICAgICBleHByID0gbmV3IEV4cHIuQmluYXJ5KGV4cHIsIG9wZXJhdG9yLCByaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBleHByO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW9kdWx1cygpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGxldCBleHByOiBFeHByLkV4cHIgPSB0aGlzLm11bHRpcGxpY2F0aW9uKCk7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlBlcmNlbnQpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMubXVsdGlwbGljYXRpb24oKTtcclxuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkJpbmFyeShleHByLCBvcGVyYXRvciwgcmlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG11bHRpcGxpY2F0aW9uKCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgbGV0IGV4cHI6IEV4cHIuRXhwciA9IHRoaXMudW5hcnkoKTtcclxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuU2xhc2gsIFRva2VuVHlwZS5TdGFyKSkge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0OiBFeHByLkV4cHIgPSB0aGlzLnVuYXJ5KCk7XHJcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5CaW5hcnkoZXhwciwgb3BlcmF0b3IsIHJpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1bmFyeSgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5NaW51cywgVG9rZW5UeXBlLkJhbmcsIFRva2VuVHlwZS5Eb2xsYXIsIFRva2VuVHlwZS5QbHVzUGx1cywgVG9rZW5UeXBlLk1pbnVzTWludXMpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMudW5hcnkoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlVuYXJ5KG9wZXJhdG9yLCByaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLm5ld0tleXdvcmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG5ld0tleXdvcmQoKTogRXhwci5FeHByIHtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuTmV3KSkge1xyXG4gICAgICAgICAgICBjb25zdCBjb25zdHJ1Y3Q6IEV4cHIuRXhwciA9IHRoaXMuY2FsbCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTmV3KGNvbnN0cnVjdCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jYWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxsKCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgbGV0IGV4cHI6IEV4cHIuRXhwciA9IHRoaXMucHJpbWFyeSgpO1xyXG4gICAgICAgIGxldCBjb25zdW1lZCA9IHRydWU7XHJcbiAgICAgICAgZG8gIHtcclxuICAgICAgICAgICAgY29uc3VtZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkxlZnRQYXJlbikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN1bWVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcmdzOiBFeHByLkV4cHJbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jaGVjayhUb2tlblR5cGUuUmlnaHRQYXJlbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZXhwcmVzc2lvbigpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuQ29tbWEpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW46IFRva2VuID0gdGhpcy5jb25zdW1lKFRva2VuVHlwZS5SaWdodFBhcmVuLCBgRXhwZWN0ZWQgXCIpXCIgYWZ0ZXIgYXJndW1lbnRzYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkNhbGwoZXhwciwgcGFyZW4sIGFyZ3MsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuTGVmdFBhcmVuKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkRvdCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN1bWVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGV4cHIgPSB0aGlzLmRvdEdldChleHByKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuTGVmdEJyYWNrZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdW1lZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBleHByID0gdGhpcy5icmFja2V0R2V0KGV4cHIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSB3aGlsZSAoY29uc3VtZWQpO1xyXG4gICAgICAgIHJldHVybiBleHByO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZG90R2V0KGV4cHI6IEV4cHIuRXhwcik6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgY29uc3QgbmFtZTogVG9rZW4gPSB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLklkZW50aWZpZXIsIGBFeHBlY3QgcHJvcGVydHkgbmFtZSBhZnRlciAnLidgKTtcclxuICAgICAgICBjb25zdCBrZXk6IEV4cHIuS2V5ID0gbmV3IEV4cHIuS2V5KG5hbWUpO1xyXG4gICAgICAgIHJldHVybiBuZXcgRXhwci5HZXQoZXhwciwga2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJyYWNrZXRHZXQoZXhwcjogRXhwci5FeHByKTogRXhwci5FeHByIHtcclxuICAgICAgICBsZXQga2V5OiBFeHByLkV4cHIgPSBudWxsO1xyXG4gICAgICAgIGxldCBlbmQ6IEV4cHIuRXhwciA9IG51bGw7XHJcbiAgICAgICAgbGV0IHN0ZXA6IEV4cHIuRXhwciA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5jaGVjayhUb2tlblR5cGUuQ29sb24pKSB7XHJcbiAgICAgICAgICAgIGtleSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuQ29sb24pICYmICF0aGlzLmNoZWNrKFRva2VuVHlwZS5Db2xvbikpIHtcclxuICAgICAgICAgICAgZW5kID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5Db2xvbikgJiYgIXRoaXMuY2hlY2soVG9rZW5UeXBlLlJpZ2h0QnJhY2tldCkpIHtcclxuICAgICAgICAgICAgc3RlcCA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlJpZ2h0QnJhY2tldCwgYEV4cGVjdGVkIFwiXVwiIGFmdGVyIHByb3BlcnR5IG5hbWUgZXhwcmVzc2lvbmApO1xyXG4gICAgICAgIGlmICgha2V5IHx8IGVuZCB8fCBzdGVwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gbmV3IEV4cHIuUmFuZ2Uoa2V5LCBlbmQsIHN0ZXApO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuR2V0KGV4cHIsIHJhbmdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFeHByLkdldChleHByLCBrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJpbWFyeSgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5GYWxzZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkxpdGVyYWwobmV3ICRCb29sZWFuKGZhbHNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5UcnVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGl0ZXJhbChuZXcgJEJvb2xlYW4odHJ1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuTnVsbCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkxpdGVyYWwobmV3ICROdWxsKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuTnVtYmVyKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGl0ZXJhbChuZXcgJE51bWJlcih0aGlzLnByZXZpb3VzKCkubGl0ZXJhbCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuU3RyaW5nKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuWnRyaW5nKHRoaXMucHJldmlvdXMoKS5saXRlcmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlJlZ2V4KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuUmVnRXgodGhpcy5wcmV2aW91cygpLmxpdGVyYWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuU3VwZXIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmVuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBwYXJlbi5sZXhlbWUgPSAndGhpcyc7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5TdXBlcihwYXJlbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5JZGVudGlmaWVyKSkge1xyXG4gICAgICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gIHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlBsdXNQbHVzKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlBvc3RmaXgoaWRlbnRpZmllciwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLk1pbnVzTWludXMpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuUG9zdGZpeChpZGVudGlmaWVyLCAtMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlZhcmlhYmxlKGlkZW50aWZpZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuTGVmdFBhcmVuKSkge1xyXG4gICAgICAgICAgICBjb25zdCBleHByOiBFeHByLkV4cHIgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5SaWdodFBhcmVuLCBgRXhwZWN0ZWQgXCIpXCIgYWZ0ZXIgZXhwcmVzc2lvbmApO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuR3JvdXBpbmcoZXhwcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5MZWZ0QnJhY2UpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRpY3Rpb25hcnkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkZ1bmN0aW9uKSkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbjogVG9rZW4gPSBuZXcgVG9rZW4oVG9rZW5UeXBlLkxhbWJkYSwgJ0AnLCAnQCcsIHRoaXMucHJldmlvdXMoKS5saW5lKTtcclxuICAgICAgICAgICAgY29uc3QgbGFtYmRhOiBTdG10LkZ1bmMgPSB0aGlzLmZ1bmNQYXJhbXNCb2R5KHRva2VuLCAnbGFtYmRhJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5MYW1iZGEobGFtYmRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkxlZnRCcmFja2V0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saXN0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aHJvdyB0aGlzLnBhcnNlRXJyb3IodGhpcy5wZWVrKCksIGBFeHBlY3RlZCBleHByZXNzaW9uYCk7XHJcbiAgICAgICAgLy8gdW5yZWFjaGVhYmxlIGNvZGVcclxuICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGl0ZXJhbChudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGljdGlvbmFyeSgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5SaWdodEJyYWNlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuRGljdGlvbmFyeShbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXM6IEV4cHIuU2V0W10gPSBbXTtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5TdHJpbmcsIFRva2VuVHlwZS5JZGVudGlmaWVyLCBUb2tlblR5cGUuTnVtYmVyKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5OiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuQ29sb24sIGBFeHBlY3RlZCBcIjpcIiBjb2xvbiBhZnRlciBtZW1iZXJgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLnB1c2gobmV3IEV4cHIuU2V0KG51bGwsIG5ldyBFeHByLktleShrZXkpLCB2YWx1ZSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJzZUVycm9yKHRoaXMucGVlaygpLCBgU3RyaW5nLCBOdW1iZXIgb3IgSWRlbnRpZmllciBleHBlY3RlZCBhcyBhIEtleSBvZiBEaWN0aW9uYXJ5IHtgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkNvbW1hKSk7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5SaWdodEJyYWNlLCBgRXhwZWN0ZWQgXCJ9XCIgYWZ0ZXIgb2JqZWN0IGxpdGVyYWxgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBFeHByLkRpY3Rpb25hcnkocHJvcGVydGllcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsaXN0KCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlJpZ2h0QnJhY2tldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkxpc3QoW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKHRoaXMuZXhwcmVzc2lvbigpKTtcclxuICAgICAgICB9IHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5Db21tYSkpO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuUmlnaHRCcmFja2V0LCBgRXhwZWN0ZWQgXCJdXCIgYWZ0ZXIgYXJyYXkgZGVjbGFyYXRpb25gKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBFeHByLkxpc3QodmFsdWVzKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgRGF0YVR5cGUsICRDYWxsYWJsZSwgRnVuY3Rpb25DYWxsLCAkTnVsbCwgJEFueSwgJE51bWJlciwgJFN0cmluZywgJExpc3QsICRCb29sZWFuLCAkRGljdGlvbmFyeSB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZnVuY3Rpb24gZnJvbUphdmFTY3JpcHQoanNOYW1lOiBzdHJpbmcsIGFyaXR5OiBudW1iZXIsIHR5cGU6IERhdGFUeXBlKTogJENhbGxhYmxlIHtcclxuICAgIHJldHVybiBuZXcgJENhbGxhYmxlKGpzTmFtZSwgYXJpdHksICh0aGl6OiAkQW55LCBhcmdzOiAkQW55W10pOiAkQW55ID0+IHtcclxuICAgICAgICBjb25zdCBhcmdWYWx1ZXMgPSBhcmdzLm1hcCgoYXJnOiAkQW55KSA9PiBhcmcudmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXoudmFsdWVbanNOYW1lXSguLi5hcmdWYWx1ZXMpO1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIERhdGFUeXBlLkJvb2xlYW46XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGNhc2UgRGF0YVR5cGUuU3RyaW5nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkU3RyaW5nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGNhc2UgRGF0YVR5cGUuTnVtYmVyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVtYmVyKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGNhc2UgRGF0YVR5cGUuTGlzdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJExpc3QocmVzdWx0KTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJEFueShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFN0cmluZ1J1bnRpbWUge1xyXG4gICAgLy8gbmV3ICRDYWxsYWJsZSgndG9VcHBlcicsIDAsIFN0cmluZ1J1bnRpbWUudG9VcHBlckNhc2UpXHJcbiAgICBwdWJsaWMgc3RhdGljIHNpemUodGhpejogJEFueSwgYXJnczogJEFueVtdKTogJEFueSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkTnVtYmVyKHRoaXoudmFsdWUubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGluZGV4T2YodGhpejogJEFueSwgYXJnczogJEFueVtdKTogJEFueSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkTnVtYmVyKHRoaXoudmFsdWUuaW5kZXhPZihhcmdzWzBdLnZhbHVlKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMaXN0UnVudGltZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHNpemUodGhpejogJEFueSwgYXJnczogJEFueVtdKTogJEFueSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkTnVtYmVyKGFyZ3NbMF0udmFsdWUubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGpvaW4odGhpejogJEFueSwgYXJnczogJEFueVtdKTogJEFueSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkU3RyaW5nKHRoaXoudmFsdWUuam9pbihhcmdzWzBdLnZhbHVlKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBSdW50aW1lID0ge1xyXG4gICAgTGlzdDogbmV3IE1hcChbXHJcbiAgICAgICAgWydzaXplJywgbmV3ICRDYWxsYWJsZSgnc2l6ZScsIDAsIExpc3RSdW50aW1lLnNpemUpXSxcclxuICAgICAgICBbJ3NwbGl0JywgbmV3ICRDYWxsYWJsZSgnam9pbicsIDEsIExpc3RSdW50aW1lLmpvaW4pXVxyXG4gICAgXSksXHJcbiAgICBNYXRoOiBuZXcgTWFwKFtcclxuICAgICAgICBbJ3BpJywgbmV3ICROdW1iZXIoTWF0aC5QSSldLFxyXG4gICAgICAgIFsndGVzdCcsIG5ldyAkQW55KE1hdGguUEkpXSxcclxuICAgICAgICBbJ3JhbmQnLCBuZXcgJENhbGxhYmxlKCdyYW5kJywgMCwgKHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSkgPT4gbmV3ICROdW1iZXIoTWF0aC5QSSkpXVxyXG4gICAgXSksXHJcbiAgICBTdHJpbmc6IG5ldyBNYXAoW1xyXG4gICAgICAgIFsndG9VcHBlcicsICBmcm9tSmF2YVNjcmlwdCgndG9VcHBlckNhc2UnLCAwLCBEYXRhVHlwZS5TdHJpbmcpXSxcclxuICAgICAgICBbJ3RvTG93ZXInLCBmcm9tSmF2YVNjcmlwdCgndG9Mb3dlckNhc2UnLCAwLCBEYXRhVHlwZS5TdHJpbmcpXSxcclxuICAgICAgICBbJ3NpemUnLCBuZXcgJENhbGxhYmxlKCdzaXplJywgMCwgU3RyaW5nUnVudGltZS5zaXplKV0sXHJcbiAgICAgICAgWydzcGxpdCcsICBmcm9tSmF2YVNjcmlwdCgnc3BsaXQnLCAxLCBEYXRhVHlwZS5MaXN0KV0sXHJcbiAgICAgICAgWydjb25jYXQnLCBmcm9tSmF2YVNjcmlwdCgnY29uY2F0JywgMSwgRGF0YVR5cGUuU3RyaW5nKV0sXHJcbiAgICAgICAgWydpbmNsdWRlcycsIGZyb21KYXZhU2NyaXB0KCdpbmNsdWRlcycsIDEsIERhdGFUeXBlLkJvb2xlYW4pXSxcclxuICAgICAgICBbJ2luZGV4T2YnLCBmcm9tSmF2YVNjcmlwdCgnaW5kZXhPZicsIDEsIERhdGFUeXBlLk51bWJlcildLFxyXG4gICAgICAgIFsncmVwZWF0JywgZnJvbUphdmFTY3JpcHQoJ3JlcGVhdCcsIDEsIERhdGFUeXBlLlN0cmluZyldLFxyXG4gICAgICAgIFsncmVwbGFjZScsIGZyb21KYXZhU2NyaXB0KCdyZXBsYWNlJywgMiwgRGF0YVR5cGUuU3RyaW5nKV0sXHJcbiAgICAgICAgWydzZWFyY2gnLCBmcm9tSmF2YVNjcmlwdCgnc2VhcmNoJywgMSwgRGF0YVR5cGUuTnVtYmVyKV0sXHJcbiAgICAgICAgWydzbGljZScsIGZyb21KYXZhU2NyaXB0KCdzbGljZScsIC0xLCBEYXRhVHlwZS5TdHJpbmcpXSxcclxuICAgICAgICBbJ3N1YnN0cmluZycsIGZyb21KYXZhU2NyaXB0KCdzdWJzdHJpbmcnLCAtMSwgRGF0YVR5cGUuU3RyaW5nKV0sXHJcbiAgICAgICAgWyd0cmltJywgZnJvbUphdmFTY3JpcHQoJ3RyaW0nLCAwLCBEYXRhVHlwZS5TdHJpbmcpXSxcclxuICAgIF0pXHJcbn07XHJcblxyXG4vKlxyXG5cclxuKi9cclxuLypcclxuZXhwb3J0IGZ1bmN0aW9uIGhhc093blByb3BlcnR5KHRoYXQ6IGFueSk6IEludGVybmFsRW50aXR5IHtcclxuICAgIGNvbnN0IGZ1bmMgPSBuZXcgSW50ZXJuYWxFbnRpdHkoKTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPGludGVybmFsIGZ1bmN0aW9uPic7XHJcbiAgICBmdW5jLmFyaXR5ID0gKCkgPT4gMTtcclxuICAgIGZ1bmMuY2FsbCA9IChpbnQsIHRoaXosIGFyZ3MpID0+IHRoaXoucHJvcGVydGllcy5oYXMoYXJnc1swXSk7XHJcbiAgICByZXR1cm4gZnVuYztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aFByb3BlcnR5KHRoYXQ6IGFueSk6IEludGVybmFsRW50aXR5IHtcclxuICAgIGNvbnN0IGZ1bmMgPSBuZXcgSW50ZXJuYWxFbnRpdHkoKTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPGludGVybmFsIGZ1bmN0aW9uPic7XHJcbiAgICBmdW5jLmFyaXR5ID0gKCkgPT4gMDtcclxuICAgIGZ1bmMuY2FsbCA9IChpbnQsIHRoaXosIGFyZ3MpID0+IHRoaXoucHJvcGVydGllcy5zaXplO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnZva2VNZXRob2QodGhhdDogYW55KTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8aW50ZXJuYWwgZnVuY3Rpb24+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAtMTtcclxuICAgIGZ1bmMuY2FsbCA9IChpbnQsIHRoaXosIGFyZ3MpID0+IHRoaXouY2FsbChpbnQsIGFyZ3NbMF0sIGFyZ3Muc2xpY2UoMSkpO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyQ2FsbCh0aGF0OiBhbnksIGluc3RhbmNlOiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLmFyaXR5ID0gKCkgPT4gdGhhdC5wYXJlbnQuYXJpdHkoKTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPG5hdGl2ZSBzdXBlciBmdW5jdGlvbj4nO1xyXG4gICAgZnVuYy5jYWxsID0gKGludCwgdGhpeiwgYXJncykgPT5cclxuICAgICAgICB0aGF0LnBhcmVudC5jYWxsKGludCwgaW5zdGFuY2UsIGFyZ3MpO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZU1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiB7XHJcbiAgICAgICAgdGhhdC5wcm9wZXJ0aWVzID0gYXJnc1sxXSA/XHJcbiAgICAgICAgICAgIG5ldyBNYXAoWy4uLnRoYXQucHJvcGVydGllcywgLi4uYXJnc1swXS5wcm9wZXJ0aWVzXSkgOlxyXG4gICAgICAgICAgICBuZXcgTWFwKFsuLi5hcmdzWzBdLnByb3BlcnRpZXMsIC4uLnRoYXQucHJvcGVydGllc10pO1xyXG4gICAgfTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPGludGVybmFsIG1lcmdlIGZ1bmN0aW9uPic7XHJcbiAgICBmdW5jLmFyaXR5ID0gKCkgPT4gLTE7XHJcbiAgICByZXR1cm4gZnVuYztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZE1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvdG8gPSBuZXcgUHJvdG90eXBlKFxyXG4gICAgICAgICAgICB0aGF0LnByb3BlcnRpZXMsXHJcbiAgICAgICAgICAgIG5ldyBQcm90b3R5cGUoYXJnc1swXS5wcm9wZXJ0aWVzLCBhcmdzWzBdLnByb3RvdHlwZSwgdGhpeiksXHJcbiAgICAgICAgICAgIHRoaXpcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoYXQucHJvdG90eXBlID0gcHJvdG87XHJcbiAgICB9O1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8aW50ZXJuYWwgbWVyZ2UgZnVuY3Rpb24+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAtMTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5oZXJpdE1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiB7XHJcbiAgICAgICAgdGhhdC5wcm90b3R5cGUudmFsdWVzID0gbmV3IE1hcChbLi4uYXJnc1swXS5wcm9wZXJ0aWVzLCAuLi50aGF0LnByb3RvdHlwZS52YWx1ZXNdKTtcclxuICAgIH07XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBpbmhlcml0YW5jZSBmdW5jdGlvbj4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IDE7XHJcbiAgICByZXR1cm4gZnVuYztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVjaG9GdW5jdGlvbigpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLmFyaXR5ID0gKCkgPT4gMTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPG5hdGl2ZSBmdW5jdGlvbj4nO1xyXG4gICAgZnVuYy5jYWxsID0gKGludGVycHJldGVyLCB0aGl6LCBhcmdzKSA9PiBjb25zb2xlLmxvZyhhcmdzWzBdKTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlMZW5ndGhNZXRob2QodGhhdDogYW55KTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8aW50ZXJuYWwgZnVuY3Rpb24+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAwO1xyXG4gICAgZnVuYy5jYWxsID0gKGludCwgdGhpeiwgYXJncykgPT4gdGhpei52YWx1ZXMubGVuZ3RoO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJheUpvaW5NZXRob2QodGhhdDogYW55KTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8aW50ZXJuYWwgZnVuY3Rpb24+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAxO1xyXG4gICAgZnVuYy5jYWxsID0gKGludCwgdGhpeiwgYXJncykgPT4gbmV3ICRTdHJpbmcodGhpei52YWx1ZXMuam9pbihhcmdzWzBdKSk7XHJcbiAgICByZXR1cm4gZnVuYztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5UHVzaE1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBmdW5jdGlvbj4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IDE7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiB0aGl6LnZhbHVlcy5wdXNoKGFyZ3NbMF0pO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJheVBvcE1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBmdW5jdGlvbj4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IDA7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiB0aGl6LnZhbHVlcy5wb3AoYXJnc1swXSk7XHJcbiAgICByZXR1cm4gZnVuYztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5UmV2ZXJzZU1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBmdW5jdGlvbj4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IDA7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiBuZXcgQXJyYXlFbnRpdHkodGhpei52YWx1ZXMucmV2ZXJzZSgpKTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlTbGljZU1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBmdW5jdGlvbj4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IC0xO1xyXG4gICAgZnVuYy5jYWxsID0gKGludCwgdGhpeiwgYXJncykgPT4gbmV3IEFycmF5RW50aXR5KHRoaXoudmFsdWVzLnNsaWNlKGFyZ3NbMF0sIGFyZ3NbMV0pKTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlFYWNoTWV0aG9kKHRoYXQ6IGFueSk6IEludGVybmFsRW50aXR5IHtcclxuICAgIGNvbnN0IGZ1bmMgPSBuZXcgSW50ZXJuYWxFbnRpdHkoKTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPGludGVybmFsIGZ1bmN0aW9uPic7XHJcbiAgICBmdW5jLmFyaXR5ID0gKCkgPT4gLTE7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGl6LnZhbHVlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBhcmdzWzBdLmNhbGwoaW50LCB0aGl6LCBbdGhpei52YWx1ZXNbaV0sIGksIHRoaXpdKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJheU1hcE1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBmdW5jdGlvbj4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IC0xO1xyXG4gICAgZnVuYy5jYWxsID0gKGludCwgdGhpeiwgYXJncykgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpei52YWx1ZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpei52YWx1ZXNbaV0gPSA8RnVuY3Rpb25FbnRpdHk+IGFyZ3NbMF0uY2FsbChpbnQsIHRoaXosIFt0aGl6LnZhbHVlc1tpXSwgaSwgdGhpel0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpejtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuYztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5RmluZE1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBmdW5jdGlvbj4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IC0xO1xyXG4gICAgZnVuYy5jYWxsID0gKGludCwgdGhpeiwgYXJncykgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpei52YWx1ZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgaWYgKDxGdW5jdGlvbkVudGl0eT4gYXJnc1swXS5jYWxsKGludCwgdGhpeiwgW3RoaXoudmFsdWVzW2ldLCBpLCB0aGl6XSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGl6LnZhbHVlc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuYztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5SW5kZXhPZk1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBmdW5jdGlvbj4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IDE7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGl6LnZhbHVlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAodGhpei52YWx1ZXNbaV0gPT09IGFyZ3NbMF0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlDb25jYXRNZXRob2QodGhhdDogYW55KTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8aW50ZXJuYWwgZnVuY3Rpb24+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAxO1xyXG4gICAgZnVuYy5jYWxsID0gKGludCwgdGhpeiwgYXJncykgPT4gbmV3IEFycmF5RW50aXR5KHRoaXoudmFsdWVzLmNvbmNhdChhcmdzWzBdLnZhbHVlcykpO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdMZW5ndGhNZXRob2QodGhhdDogYW55KTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8aW50ZXJuYWwgZnVuY3Rpb24+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAwO1xyXG4gICAgZnVuYy5jYWxsID0gKGludCwgdGhpeiwgYXJncykgPT4gdGhpei52YWx1ZS5sZW5ndGg7XHJcbiAgICByZXR1cm4gZnVuYztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ1N1YlN0ck1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBmdW5jdGlvbj4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IC0xO1xyXG4gICAgZnVuYy5jYWxsID0gKGludCwgdGhpeiwgYXJncykgPT4gbmV3ICRTdHJpbmcodGhpei52YWx1ZS5zdWJzdHIoYXJnc1swXSwgYXJnc1sxXSkpO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdTcGxpdE1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBmdW5jdGlvbj4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IDE7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiBuZXcgQXJyYXlFbnRpdHkodGhpei52YWx1ZS5zcGxpdChhcmdzWzBdKSk7XHJcbiAgICByZXR1cm4gZnVuYztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ01hdGNoTWV0aG9kKHRoYXQ6IGFueSk6IEludGVybmFsRW50aXR5IHtcclxuICAgIGNvbnN0IGZ1bmMgPSBuZXcgSW50ZXJuYWxFbnRpdHkoKTtcclxuICAgIGZ1bmMudG9TdHJpbmcgPSAoKSA9PiAnPGludGVybmFsIGZ1bmN0aW9uPic7XHJcbiAgICBmdW5jLmFyaXR5ID0gKCkgPT4gMTtcclxuICAgIGZ1bmMuY2FsbCA9IChpbnQsIHRoaXosIGFyZ3MpID0+IG5ldyBBcnJheUVudGl0eSh0aGl6LnZhbHVlLm1hdGNoKGFyZ3NbMF0ucmVnZXgpKTtcclxuICAgIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nUmVwbGFjZU1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBmdW5jdGlvbj4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IDI7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiBuZXcgJFN0cmluZyh0aGl6LnZhbHVlLnJlcGxhY2UoYXJnc1swXSwgYXJnc1sxXSkpO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdBbHRlck1ldGhvZCh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBmdW5jdGlvbj4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IDI7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiBuZXcgJFN0cmluZyh0aGl6LnZhbHVlLnJlcGxhY2UoYXJnc1swXS5yZWdleCwgYXJnc1sxXSkpO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdUb1VwcGVyQ2FzZSh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBmdW5jdGlvbj4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IDA7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiBuZXcgJFN0cmluZyh0aGl6LnZhbHVlLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdUb0xvd2VyY2FzZSh0aGF0OiBhbnkpOiBJbnRlcm5hbEVudGl0eSB7XHJcbiAgICBjb25zdCBmdW5jID0gbmV3IEludGVybmFsRW50aXR5KCk7XHJcbiAgICBmdW5jLnRvU3RyaW5nID0gKCkgPT4gJzxpbnRlcm5hbCBmdW5jdGlvbj4nO1xyXG4gICAgZnVuYy5hcml0eSA9ICgpID0+IDA7XHJcbiAgICBmdW5jLmNhbGwgPSAoaW50LCB0aGl6LCBhcmdzKSA9PiBuZXcgJFN0cmluZyh0aGl6LnZhbHVlLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdleFRlc3RNZXRob2QodGhhdDogYW55KTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8aW50ZXJuYWwgZnVuY3Rpb24+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAxO1xyXG4gICAgZnVuYy5jYWxsID0gKGludCwgdGhpeiwgYXJncykgPT4gdGhpei5yZWdleC50ZXN0KGFyZ3NbMF0pO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdleEV4ZWNNZXRob2QodGhhdDogYW55KTogSW50ZXJuYWxFbnRpdHkge1xyXG4gICAgY29uc3QgZnVuYyA9IG5ldyBJbnRlcm5hbEVudGl0eSgpO1xyXG4gICAgZnVuYy50b1N0cmluZyA9ICgpID0+ICc8aW50ZXJuYWwgZnVuY3Rpb24+JztcclxuICAgIGZ1bmMuYXJpdHkgPSAoKSA9PiAxO1xyXG4gICAgZnVuYy5jYWxsID0gKGludCwgdGhpeiwgYXJncykgPT4gdGhpei5yZWdleC5leGVjKGFyZ3NbMF0pO1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuKi8iLCJpbXBvcnQgeyBUb2tlbiwgVG9rZW5UeXBlIH0gZnJvbSAnLi90b2tlbic7XHJcbmltcG9ydCB7IENvbnNvbGUgfSBmcm9tICcuL2NvbnNvbGUnO1xyXG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3N0cnVjdHMvdXRpbHMnO1xyXG5kZWNsYXJlIHZhciBjb256b2xlOiBDb25zb2xlO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjYW5uZXIge1xyXG5cclxuICAgIHB1YmxpYyBzb3VyY2U6IHN0cmluZztcclxuICAgIHB1YmxpYyB0b2tlbnM6IFRva2VuW10gPSBbXTtcclxuICAgIHByaXZhdGUgY3VycmVudCA9IDA7XHJcbiAgICBwcml2YXRlIGxpbmUgPSAxO1xyXG4gICAgcHJpdmF0ZSBzdGFydCA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc291cmNlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVvZigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50ID49IHRoaXMuc291cmNlLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkdmFuY2UoKTogc3RyaW5nIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnQrKztcclxuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2UuY2hhckF0KHRoaXMuY3VycmVudCAtIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkVG9rZW4odG9rZW5UeXBlOiBUb2tlblR5cGUsIGxpdGVyYWw6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHRleHQgPSB0aGlzLnNvdXJjZS5zdWJzdHJpbmcodGhpcy5zdGFydCwgdGhpcy5jdXJyZW50KTtcclxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKG5ldyBUb2tlbih0b2tlblR5cGUsIHRleHQsIGxpdGVyYWwsIHRoaXMubGluZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWF0Y2goZXhwZWN0ZWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmVvZigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNvdXJjZS5jaGFyQXQodGhpcy5jdXJyZW50KSAhPT0gZXhwZWN0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50Kys7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwZWVrKCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdcXDAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2UuY2hhckF0KHRoaXMuY3VycmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwZWVrTmV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnQgKyAxID49IHRoaXMuc291cmNlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ1xcMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5jaGFyQXQodGhpcy5jdXJyZW50ICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb21tZW50KCk6IHZvaWQge1xyXG4gICAgICAgIHdoaWxlICh0aGlzLnBlZWsoKSAhPT0gJ1xcbicgJiYgIXRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RyaW5nKHF1b3RlOiBzdHJpbmcsIHR5cGU6IFRva2VuVHlwZSk6IHZvaWQge1xyXG4gICAgICAgIHdoaWxlICh0aGlzLnBlZWsoKSAhPT0gcXVvdGUgJiYgIXRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGVlaygpID09PSAnXFxuJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saW5lKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVbnRlcm1pbmF0ZWQgc3RyaW5nLlxyXG4gICAgICAgIGlmICh0aGlzLmVvZigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NhbkVycm9yKGBVbnRlcm1pbmF0ZWQgc3RyaW5nLCBleHBlY3RpbmcgY2xvc2luZyAke3F1b3RlfWApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUaGUgY2xvc2luZyBcIi5cclxuICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuXHJcbiAgICAgICAgLy8gVHJpbSB0aGUgc3Vycm91bmRpbmcgcXVvdGVzLlxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zb3VyY2Uuc3Vic3RyaW5nKHRoaXMuc3RhcnQgKyAxLCB0aGlzLmN1cnJlbnQgLSAxKTtcclxuICAgICAgICB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5TdHJpbmcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG51bWJlcigpOiB2b2lkIHtcclxuICAgICAgICAvLyBnZXRzIGludGVnZXIgcGFydFxyXG4gICAgICAgIHdoaWxlIChVdGlscy5pc0RpZ2l0KHRoaXMucGVlaygpKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNoZWNrcyBmb3IgZnJhY3Rpb25cclxuICAgICAgICBpZiAodGhpcy5wZWVrKCkgPT09ICcuJyAmJiBVdGlscy5pc0RpZ2l0KHRoaXMucGVla05leHQoKSkpIHtcclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBnZXRzIGZyYWN0aW9uIHBhcnRcclxuICAgICAgICB3aGlsZSAoVXRpbHMuaXNEaWdpdCh0aGlzLnBlZWsoKSkpIHtcclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjaGVja3MgZm9yIGV4cG9uZW50XHJcbiAgICAgICAgaWYgKHRoaXMucGVlaygpLnRvTG93ZXJDYXNlKCkgPT09ICdlJykge1xyXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGVlaygpID09PSAnLScgfHwgdGhpcy5wZWVrKCkgPT09ICcrJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdoaWxlIChVdGlscy5pc0RpZ2l0KHRoaXMucGVlaygpKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zb3VyY2Uuc3Vic3RyaW5nKHRoaXMuc3RhcnQgLCB0aGlzLmN1cnJlbnQpO1xyXG4gICAgICAgIHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLk51bWJlciwgTnVtYmVyKHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpZGVudGlmaWVyKCk6IHZvaWQge1xyXG4gICAgICAgIHdoaWxlIChVdGlscy5pc0FscGhhTnVtZXJpYyh0aGlzLnBlZWsoKSkpIHtcclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc291cmNlLnN1YnN0cmluZyh0aGlzLnN0YXJ0LCB0aGlzLmN1cnJlbnQpO1xyXG4gICAgICAgIGNvbnN0IGNhcGl0YWxpemVkID0gdmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoVXRpbHMuaXNLZXl3b3JkKGNhcGl0YWxpemVkKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFRva2VuKFRva2VuVHlwZVtjYXBpdGFsaXplZF0sIHZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5JZGVudGlmaWVyLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVnZXgoKTogdm9pZCB7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMucGVlaygpICE9PSAnIycgJiYgIXRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGVlaygpID09PSAnXFxuJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saW5lKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVbnRlcm1pbmF0ZWQgcmVnZXguXHJcbiAgICAgICAgaWYgKHRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2FuRXJyb3IoYFVudGVybWluYXRlZCBSZWdFeCwgZXhwZWN0aW5nIGNsb3NpbmcgI2ApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUaGUgY2xvc2luZyAjLlxyXG4gICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gdGhpcy5zb3VyY2Uuc3Vic3RyaW5nKHRoaXMuc3RhcnQgKyAxLCB0aGlzLmN1cnJlbnQgLSAxKTtcclxuXHJcbiAgICAgICAgbGV0IGZsYWdzID0gJyc7XHJcbiAgICAgICAgaWYgKFsnZycsICdpJywgJ3MnLCAndScsICd5J10uaW5kZXhPZih0aGlzLnBlZWsoKSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5jdXJyZW50O1xyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5wZWVrKCkgIT09ICcjJyAmJiAhdGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygpID09PSAnXFxuJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGluZSsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NhbkVycm9yKGBVbnRlcm1pbmF0ZWQgUmVnRXgsIGV4cGVjdGluZyBjbG9zaW5nICMgYWZ0ZXIgZmxhZ3NgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmbGFncyA9IHRoaXMuc291cmNlLnN1YnN0cmluZyhzdGFydCwgdGhpcy5jdXJyZW50KTtcclxuICAgICAgICAgICAgLy8gVGhlIGNsb3NpbmcgIyBhZnRlciBmbGFncy5cclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5SZWdleCwgbmV3IFJlZ0V4cChyZWdleCwgZmxhZ3MpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2NhbigpOiBUb2tlbltdIHtcclxuICAgICAgICB3aGlsZSAoIXRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydCA9IHRoaXMuY3VycmVudDtcclxuICAgICAgICAgICAgdGhpcy5zY2FuVG9rZW4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2gobmV3IFRva2VuKFRva2VuVHlwZS5Fb2YsICcnLCBudWxsLCB0aGlzLmxpbmUpKTtcclxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzY2FuVG9rZW4oKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY2hhciA9IHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIHN3aXRjaCAoY2hhcikge1xyXG4gICAgICAgICAgICBjYXNlICcoJzogdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuTGVmdFBhcmVuLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyknOiB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5SaWdodFBhcmVuLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ1snOiB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5MZWZ0QnJhY2tldCwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICddJzogdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuUmlnaHRCcmFja2V0LCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3snOiB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5MZWZ0QnJhY2UsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnfSc6IHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLlJpZ2h0QnJhY2UsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnLCc6IHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLkNvbW1hLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJy4nOiB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5Eb3QsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnOyc6IHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLlNlbWljb2xvbiwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdeJzogdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuQ2FyZXQsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnPyc6IHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLlF1ZXN0aW9uLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzonOiB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5Db2xvbiwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICckJzogdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuRG9sbGFyLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0AnOiB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5GdW5jdGlvbiwgJ0AnKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyonOiB0aGlzLmFkZFRva2VuKHRoaXMubWF0Y2goJz0nKSA/IFRva2VuVHlwZS5TdGFyRXF1YWwgOiBUb2tlblR5cGUuU3RhciwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICclJzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCc9JykgPyBUb2tlblR5cGUuUGVyY2VudEVxdWFsIDogVG9rZW5UeXBlLlBlcmNlbnQsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnfCc6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnfCcpID8gVG9rZW5UeXBlLk9yIDogVG9rZW5UeXBlLlBpcGUsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnJic6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnJicpID8gVG9rZW5UeXBlLkFuZCA6IFRva2VuVHlwZS5BbXBlcnNhbmQsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnPCc6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnPScpID8gVG9rZW5UeXBlLkxlc3NFcXVhbCA6IFRva2VuVHlwZS5MZXNzLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJz4nOiB0aGlzLmFkZFRva2VuKHRoaXMubWF0Y2goJz0nKSA/IFRva2VuVHlwZS5HcmVhdGVyRXF1YWwgOiBUb2tlblR5cGUuR3JlYXRlciwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICchJzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCc9JykgPyBUb2tlblR5cGUuQmFuZ0VxdWFsIDogVG9rZW5UeXBlLkJhbmcsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnPSc6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnPScpID8gVG9rZW5UeXBlLkVxdWFsRXF1YWwgOiB0aGlzLm1hdGNoKCc+JykgPyBUb2tlblR5cGUuQXJyb3cgOiBUb2tlblR5cGUuRXF1YWwsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnKyc6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnKycpID8gVG9rZW5UeXBlLlBsdXNQbHVzIDogdGhpcy5tYXRjaCgnPScpID8gVG9rZW5UeXBlLlBsdXNFcXVhbCA6IFRva2VuVHlwZS5QbHVzLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJy0nOiB0aGlzLmFkZFRva2VuKHRoaXMubWF0Y2goJy0nKSA/IFRva2VuVHlwZS5NaW51c01pbnVzIDogdGhpcy5tYXRjaCgnPicpID8gVG9rZW5UeXBlLlJldHVybiA6IHRoaXMubWF0Y2goJz0nKSA/IFRva2VuVHlwZS5NaW51c0VxdWFsIDogVG9rZW5UeXBlLk1pbnVzLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJy8nOiB0aGlzLm1hdGNoKCcvJykgPyB0aGlzLmNvbW1lbnQoKSA6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnPScpID8gVG9rZW5UeXBlLlNsYXNoRXF1YWwgOiBUb2tlblR5cGUuU2xhc2gsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnXFxuJzogdGhpcy5saW5lKys7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGAnYDpcclxuICAgICAgICAgICAgY2FzZSBgXCJgOlxyXG4gICAgICAgICAgICBjYXNlICdgJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RyaW5nKGNoYXIsIFRva2VuVHlwZS5TdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyMnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWdleCgpO1xyXG4gICAgICAgICAgICAvLyBpZ25vcmUgY2FzZXNcclxuICAgICAgICAgICAgY2FzZSAnICc6XHJcbiAgICAgICAgICAgIGNhc2UgJ1xccic6XHJcbiAgICAgICAgICAgIGNhc2UgJ1xcdCc6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gY29tcGV4IGNhc2VzXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBpZiAoVXRpbHMuaXNEaWdpdChjaGFyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFV0aWxzLmlzQWxwaGEoY2hhcikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlkZW50aWZpZXIoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2FuRXJyb3IoYFVuZXhwZWN0ZWQgY2hhcmFjdGVyICcke2NoYXJ9J2ApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2NhbkVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnpvbGUuZXJyb3IoYEVycm9yIGF0ICgke3RoaXMubGluZX0pOiAgJHttZXNzYWdlfWApO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3Igd2hpbGUgc2Nhbm5pbmcuIEV4ZWN1dGlvbiBoYXMgYmVlbiBzdG9wZWQnKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgVG9rZW4gfSBmcm9tICcuL3Rva2VuJztcclxuaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gJy4vY29uc29sZSc7XHJcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL3R5cGVzJztcclxuZGVjbGFyZSB2YXIgY29uem9sZTogQ29uc29sZTtcclxuXHJcbmV4cG9ydCBjbGFzcyBTY29wZSB7XHJcblxyXG4gICAgcHJpdmF0ZSB2YWx1ZXM6IE1hcDxzdHJpbmcsIGFueT47XHJcbiAgICBwcml2YXRlIHBhcmVudDogU2NvcGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyZW50OiBTY29wZSA9IG51bGwpIHtcclxuICAgICAgICB0aGlzLnZhbHVlcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNjb3BlRXJyb3IobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29uem9sZS5lcnJvcihgW3Njb3BlIGVycm9yXSA9PiAke21lc3NhZ2V9YCk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldChuYW1lOiBzdHJpbmcsIHZhbHVlOiAkQW55KSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXMuc2V0KG5hbWUsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVmaW5lKG5hbWU6IHN0cmluZywgdmFsdWU6ICRBbnkpIHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZXMuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcGVFcnJvcihgaWRlbnRpZmllciBcIiR7bmFtZX1cIiBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWRgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldChuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3NpZ24obmFtZTogc3RyaW5nLCB2YWx1ZTogJEFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlcy5oYXMobmFtZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXQobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50LmFzc2lnbihuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY29wZUVycm9yKGBJZGVudGlmaWVyIFwiJHtuYW1lfVwiIGhhcyBub3QgYmVlbiBkZWZpbmVkYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQobmFtZTogVG9rZW4pOiAkQW55IHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZXMuaGFzKG5hbWUubGV4ZW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMuZ2V0KG5hbWUubGV4ZW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50ICE9PSBudWxsICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ2V0KG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjb3BlRXJyb3IoYEVycm9yIGF0ICgke25hbWUubGluZX0pOiBcIiR7bmFtZS5sZXhlbWV9XCIgaXMgbm90IGRlZmluZWRgKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgVG9rZW4gfSBmcm9tICd0b2tlbic7XG5cbmltcG9ydCB7IEV4cHIgfSBmcm9tICdleHByZXNzaW9uJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0bXQge1xuICAgIHB1YmxpYyByZXN1bHQ6IGFueTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBjb25zdHJ1Y3RvcigpIHt9XG4gICAgcHVibGljIGFic3RyYWN0IGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFI7XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuZXhwb3J0IGludGVyZmFjZSBTdG10VmlzaXRvcjxSPiB7XG4gICAgdmlzaXRCbG9ja1N0bXQoc3RtdDogQmxvY2spOiBSO1xuICAgIHZpc2l0Q2xhc3NTdG10KHN0bXQ6IENsYXNzKTogUjtcbiAgICB2aXNpdERvV2hpbGVTdG10KHN0bXQ6IERvV2hpbGUpOiBSO1xuICAgIHZpc2l0RXhwcmVzc2lvblN0bXQoc3RtdDogRXhwcmVzc2lvbik6IFI7XG4gICAgdmlzaXRGdW5jU3RtdChzdG10OiBGdW5jKTogUjtcbiAgICB2aXNpdElmU3RtdChzdG10OiBJZik6IFI7XG4gICAgdmlzaXRQcmludFN0bXQoc3RtdDogUHJpbnQpOiBSO1xuICAgIHZpc2l0UmV0dXJuU3RtdChzdG10OiBSZXR1cm4pOiBSO1xuICAgIHZpc2l0VmFyU3RtdChzdG10OiBWYXIpOiBSO1xuICAgIHZpc2l0V2hpbGVTdG10KHN0bXQ6IFdoaWxlKTogUjtcbn1cblxuZXhwb3J0IGNsYXNzIEJsb2NrIGV4dGVuZHMgU3RtdCB7XG4gICAgcHVibGljIHN0YXRlbWVudHM6IFN0bXRbXTtcblxuICAgIGNvbnN0cnVjdG9yKHN0YXRlbWVudHM6IFN0bXRbXSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRCbG9ja1N0bXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnU3RtdC5CbG9jayc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENsYXNzIGV4dGVuZHMgU3RtdCB7XG4gICAgcHVibGljIG5hbWU6IFRva2VuO1xuICAgIHB1YmxpYyBwYXJlbnQ6IFRva2VuO1xuICAgIHB1YmxpYyBtZXRob2RzOiBGdW5jW107XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBUb2tlbiwgcGFyZW50OiBUb2tlbiwgbWV0aG9kczogRnVuY1tdKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLm1ldGhvZHMgPSBtZXRob2RzO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRDbGFzc1N0bXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnU3RtdC5DbGFzcyc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIERvV2hpbGUgZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMgbG9vcDogU3RtdDtcbiAgICBwdWJsaWMgY29uZGl0aW9uOiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IobG9vcDogU3RtdCwgY29uZGl0aW9uOiBFeHByKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubG9vcCA9IGxvb3A7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXREb1doaWxlU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LkRvV2hpbGUnO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBFeHByZXNzaW9uIGV4dGVuZHMgU3RtdCB7XG4gICAgcHVibGljIGV4cHJlc3Npb246IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihleHByZXNzaW9uOiBFeHByKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEV4cHJlc3Npb25TdG10KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1N0bXQuRXhwcmVzc2lvbic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEZ1bmMgZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMgbmFtZTogVG9rZW47XG4gICAgcHVibGljIHBhcmFtczogVG9rZW5bXTtcbiAgICBwdWJsaWMgYm9keTogU3RtdFtdO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogVG9rZW4sIHBhcmFtczogVG9rZW5bXSwgYm9keTogU3RtdFtdKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgICAgICB0aGlzLmJvZHkgPSBib2R5O1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRGdW5jU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LkZ1bmMnO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBJZiBleHRlbmRzIFN0bXQge1xuICAgIHB1YmxpYyBjb25kaXRpb246IEV4cHI7XG4gICAgcHVibGljIHRoZW5TdG10OiBTdG10O1xuICAgIHB1YmxpYyBlbHNlU3RtdDogU3RtdDtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmRpdGlvbjogRXhwciwgdGhlblN0bXQ6IFN0bXQsIGVsc2VTdG10OiBTdG10KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgICAgICB0aGlzLnRoZW5TdG10ID0gdGhlblN0bXQ7XG4gICAgICAgIHRoaXMuZWxzZVN0bXQgPSBlbHNlU3RtdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0SWZTdG10KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1N0bXQuSWYnO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBQcmludCBleHRlbmRzIFN0bXQge1xuICAgIHB1YmxpYyBleHByZXNzaW9uOiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IoZXhwcmVzc2lvbjogRXhwcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRQcmludFN0bXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnU3RtdC5QcmludCc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFJldHVybiBleHRlbmRzIFN0bXQge1xuICAgIHB1YmxpYyBrZXl3b3JkOiBUb2tlbjtcbiAgICBwdWJsaWMgdmFsdWU6IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihrZXl3b3JkOiBUb2tlbiwgdmFsdWU6IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5rZXl3b3JkID0ga2V5d29yZDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRSZXR1cm5TdG10KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1N0bXQuUmV0dXJuJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVmFyIGV4dGVuZHMgU3RtdCB7XG4gICAgcHVibGljIG5hbWU6IFRva2VuO1xuICAgIHB1YmxpYyB0eXBlOiBUb2tlbjtcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZXI6IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBUb2tlbiwgdHlwZTogVG9rZW4sIGluaXRpYWxpemVyOiBFeHByKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZXIgPSBpbml0aWFsaXplcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VmFyU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LlZhcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdoaWxlIGV4dGVuZHMgU3RtdCB7XG4gICAgcHVibGljIGNvbmRpdGlvbjogRXhwcjtcbiAgICBwdWJsaWMgbG9vcDogU3RtdDtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmRpdGlvbjogRXhwciwgbG9vcDogU3RtdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAgICAgdGhpcy5sb29wID0gbG9vcDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0V2hpbGVTdG10KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1N0bXQuV2hpbGUnO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFRva2VuVHlwZSB9IGZyb20gJy4uL3Rva2VuJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0RpZ2l0KGNoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoYXIgPj0gJzAnICYmIGNoYXIgPD0gJzknO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNBbHBoYShjaGFyOiBzdHJpbmcgKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKGNoYXIgPj0gJ2EnICYmIGNoYXIgPD0gJ3onKSB8fCAoY2hhciA+PSAnQScgJiYgY2hhciA8PSAnWicpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNBbHBoYU51bWVyaWMoY2hhcjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXNBbHBoYShjaGFyKSB8fCBpc0RpZ2l0KGNoYXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNLZXl3b3JkKHdvcmQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIFRva2VuVHlwZVt3b3JkXSA+PSBUb2tlblR5cGUuQW5kO1xyXG59XHJcbiIsImV4cG9ydCBlbnVtIFRva2VuVHlwZSB7XHJcbiAgICAvLyBQYXJzZXIgVG9rZW5zXHJcbiAgICBFb2YsXHJcbiAgICBQYW5pYyxcclxuICAgIExhbWJkYSxcclxuXHJcbiAgICAvLyBTaW5nbGUgQ2hhcmFjdGVyIFRva2Vuc1xyXG4gICAgQW1wZXJzYW5kLFxyXG4gICAgQXRTaWduLFxyXG4gICAgQ2FyZXQsXHJcbiAgICBDb21tYSxcclxuICAgIERvbGxhcixcclxuICAgIERvdCxcclxuICAgIEhhc2gsXHJcbiAgICBMZWZ0QnJhY2UsXHJcbiAgICBMZWZ0QnJhY2tldCxcclxuICAgIExlZnRQYXJlbixcclxuICAgIFBlcmNlbnQsXHJcbiAgICBQaXBlLFxyXG4gICAgUmlnaHRCcmFjZSxcclxuICAgIFJpZ2h0QnJhY2tldCxcclxuICAgIFJpZ2h0UGFyZW4sXHJcbiAgICBTZW1pY29sb24sXHJcbiAgICBTbGFzaCxcclxuICAgIFN0YXIsXHJcblxyXG4gICAgLy8gT25lIE9yIFR3byBDaGFyYWN0ZXIgVG9rZW5zXHJcbiAgICBBcnJvdyxcclxuICAgIEJhbmcsXHJcbiAgICBCYW5nRXF1YWwsXHJcbiAgICBDb2xvbixcclxuICAgIEVxdWFsLFxyXG4gICAgRXF1YWxFcXVhbCxcclxuICAgIEdyZWF0ZXIsXHJcbiAgICBHcmVhdGVyRXF1YWwsXHJcbiAgICBMZXNzLFxyXG4gICAgTGVzc0VxdWFsLFxyXG4gICAgTWludXMsXHJcbiAgICBNaW51c0VxdWFsLFxyXG4gICAgTWludXNNaW51cyxcclxuICAgIFBlcmNlbnRFcXVhbCxcclxuICAgIFBsdXMsXHJcbiAgICBQbHVzRXF1YWwsXHJcbiAgICBQbHVzUGx1cyxcclxuICAgIFF1ZXN0aW9uLFxyXG4gICAgU2xhc2hFcXVhbCxcclxuICAgIFN0YXJFcXVhbCxcclxuXHJcbiAgICAvLyBMaXRlcmFsc1xyXG4gICAgSWRlbnRpZmllcixcclxuICAgIFN0cmluZyxcclxuICAgIE51bWJlcixcclxuICAgIFJlZ2V4LFxyXG5cclxuICAgIC8vIEtleXdvcmRzXHJcbiAgICBBbmQsXHJcbiAgICBDbGFzcyxcclxuICAgIERvLFxyXG4gICAgRWxzZSxcclxuICAgIEV4dGVuZHMsXHJcbiAgICBGYWxzZSxcclxuICAgIEZvcixcclxuICAgIEZ1bmN0aW9uLFxyXG4gICAgSWYsXHJcbiAgICBOZXcsXHJcbiAgICBOdWxsLFxyXG4gICAgT3IsXHJcbiAgICBQcmludCxcclxuICAgIFJldHVybixcclxuICAgIFN1cGVyLFxyXG4gICAgVHJ1ZSxcclxuICAgIFZhcixcclxuICAgIFdoaWxlXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUb2tlbiB7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGxpbmU6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0eXBlOiBUb2tlblR5cGU7XHJcbiAgICBwdWJsaWMgbGl0ZXJhbDogYW55O1xyXG4gICAgcHVibGljIGxleGVtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHR5cGU6IFRva2VuVHlwZSwgbGV4ZW1lOiBzdHJpbmcsIGxpdGVyYWw6IGFueSwgbGluZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gVG9rZW5UeXBlW3R5cGVdO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5sZXhlbWUgPSBsZXhlbWU7XHJcbiAgICAgICAgdGhpcy5saXRlcmFsID0gbGl0ZXJhbDtcclxuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gYFsoJHt0aGlzLmxpbmV9KTpcIiR7dGhpcy5sZXhlbWV9XCJdYDtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGVzL3R5cGUuZW51bSc7XHJcbmltcG9ydCB7ICROdWxsIH0gZnJvbSAnLi90eXBlcy9udWxsJztcclxuaW1wb3J0IHsgJEFueSB9IGZyb20gJy4vdHlwZXMvYW55JztcclxuaW1wb3J0IHsgJENhbGxhYmxlLCAkRnVuY3Rpb24sIEZ1bmN0aW9uQ2FsbCB9IGZyb20gJy4vdHlwZXMvZnVuY3Rpb24nO1xyXG5pbXBvcnQgeyAkQm9vbGVhbiB9IGZyb20gJy4vdHlwZXMvYm9vbGVhbic7XHJcbmltcG9ydCB7ICRDbGFzcyB9IGZyb20gJy4vdHlwZXMvY2xhc3MnO1xyXG5pbXBvcnQgeyAkRGljdGlvbmFyeSB9IGZyb20gJy4vdHlwZXMvZGljdGlvbmFyeSc7XHJcbmltcG9ydCB7ICRMaXN0IH0gZnJvbSAnLi90eXBlcy9saXN0JztcclxuaW1wb3J0IHsgJE51bWJlciB9IGZyb20gJy4vdHlwZXMvbnVtYmVyJztcclxuaW1wb3J0IHsgJE9iamVjdCB9IGZyb20gJy4vdHlwZXMvb2JqZWN0JztcclxuaW1wb3J0IHsgJFJhbmdlLCBSYW5nZVZhbHVlIH0gZnJvbSAnLi90eXBlcy9yYW5nZSc7XHJcbmltcG9ydCB7ICRSZXR1cm4gfSBmcm9tICcuL3R5cGVzL3JldHVybic7XHJcbmltcG9ydCB7ICRTdHJpbmcgfSBmcm9tICcuL3R5cGVzL3N0cmluZyc7XHJcbmltcG9ydCB7ICRWb2lkIH0gZnJvbSAnLi90eXBlcy92b2lkJztcclxuXHJcblxyXG5leHBvcnQge1xyXG4gICAgRGF0YVR5cGUsXHJcbiAgICAkQW55LFxyXG4gICAgJENhbGxhYmxlLFxyXG4gICAgJEZ1bmN0aW9uLFxyXG4gICAgRnVuY3Rpb25DYWxsLFxyXG4gICAgJEJvb2xlYW4sXHJcbiAgICAkQ2xhc3MsXHJcbiAgICAkRGljdGlvbmFyeSxcclxuICAgICRMaXN0LFxyXG4gICAgJE51bWJlcixcclxuICAgICROdWxsLFxyXG4gICAgJE9iamVjdCxcclxuICAgICRSYW5nZSxcclxuICAgIFJhbmdlVmFsdWUsXHJcbiAgICAkUmV0dXJuLFxyXG4gICAgJFN0cmluZyxcclxuICAgICRWb2lkXHJcbn07XHJcbiIsImltcG9ydCB7IENvbnNvbGUgfSBmcm9tICcuLi9jb25zb2xlJztcclxuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGUuZW51bSc7XHJcbmRlY2xhcmUgdmFyIGNvbnpvbGU6IENvbnNvbGU7XHJcblxyXG5leHBvcnQgY2xhc3MgJEFueSB7XHJcblxyXG4gICAgcHVibGljIHZhbHVlOiBhbnk7XHJcbiAgICBwdWJsaWMgdHlwZSA9IERhdGFUeXBlLkFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogYW55LCB0eXBlOiBEYXRhVHlwZSA9IERhdGFUeXBlLkFueSkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1N0cmluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBEYXRhVHlwZS5TdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzTnVsbCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBEYXRhVHlwZS5OdWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0Jvb2xlYW4oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gRGF0YVR5cGUuQm9vbGVhbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNOdW1iZXIoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gRGF0YVR5cGUuTnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1JhbmdlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IERhdGFUeXBlLlJhbmdlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0Z1bmN0aW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IERhdGFUeXBlLkZ1bmN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0NsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IERhdGFUeXBlLkNsYXNzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0xhbWJkYSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBEYXRhVHlwZS5GdW5jdGlvbiAmJiAodGhpcyBhcyBhbnkpLm5hbWUgPT09ICdAJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNPYmplY3QoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gRGF0YVR5cGUuT2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1RydXRoeSgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5pc051bGwoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzQm9vbGVhbigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBCb29sZWFuKHRoaXMudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc051bWJlcigpICYmIHRoaXMudmFsdWUgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1N0cmluZygpICYmIHRoaXMudmFsdWUudG9TdHJpbmcoKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIGVycm9yIHZhbHVlIEFueSBpcyBudWxsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMudmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gZXJyb3IgdmFsdWUgQW55IGlzIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzRXF1YWwob3RoZXI6ICRBbnkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA9PT0gb3RoZXIudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldChrZXk6ICRBbnkpOiAkQW55IHtcclxuICAgICAgICBjb256b2xlLmVycm9yKGBrZXkgJHtrZXl9IGRvZXMgbm90IGV4aXN0IGluICR7dGhpc31gKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvciBpbiBBbnkgZ2V0dGVyXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQoa2V5OiAkQW55LCB2YWx1ZTogJEFueSk6ICRBbnkge1xyXG4gICAgICAgIGNvbnpvbGUuZXJyb3IoYGtleSAke2tleX0gZG9lcyBub3QgZXhpc3QgaW4gJHt0aGlzfWApO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIGluIEFueSBzZXR0ZXJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUudG9TdHJpbmcoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgJEFueSB9IGZyb20gJy4vYW55JztcclxuXHJcbmV4cG9ydCBjbGFzcyAkQm9vbGVhbiBleHRlbmRzICRBbnkge1xyXG5cclxuICAgIHB1YmxpYyB2YWx1ZTogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHN1cGVyKHZhbHVlLCBEYXRhVHlwZS5Cb29sZWFuKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnLi4vY29uc29sZSc7XHJcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi90eXBlLmVudW0nO1xyXG5pbXBvcnQgeyAkQW55IH0gZnJvbSAnLi9hbnknO1xyXG5pbXBvcnQgeyAkTnVsbCB9IGZyb20gJy4vbnVsbCc7XHJcbmRlY2xhcmUgdmFyIGNvbnpvbGU6IENvbnNvbGU7XHJcblxyXG5leHBvcnQgY2xhc3MgJENsYXNzIGV4dGVuZHMgJEFueSB7XHJcbiAgICBwdWJsaWMgdmFsdWU6IE1hcDxzdHJpbmcsICRBbnk+O1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBwYXJlbnQ6ICRDbGFzcyB8ICRBbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB2YWx1ZTogTWFwPHN0cmluZywgJEFueT4sIHBhcmVudDogJEFueSB8ICRDbGFzcykge1xyXG4gICAgICAgIHN1cGVyKHZhbHVlLCBEYXRhVHlwZS5DbGFzcyk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KGtleTogJEFueSk6ICRBbnkge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlLmhhcyhrZXkudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlLmdldChrZXkudmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50LmlzQ2xhc3MoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ2V0KGtleSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3ICROdWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldChrZXk6ICRBbnksIHZhbHVlOiAkQW55KTogJEFueSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZS5zZXQoa2V5LnZhbHVlLCB2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgPCR7dGhpcy5uYW1lfSBjbGFzcz5gO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi90eXBlLmVudW0nO1xyXG5pbXBvcnQgeyAkQW55IH0gZnJvbSAnLi9hbnknO1xyXG5pbXBvcnQgeyAkTnVsbCB9IGZyb20gJy4vbnVsbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgJERpY3Rpb25hcnkgZXh0ZW5kcyAkQW55IHtcclxuICAgIHB1YmxpYyB2YWx1ZTogTWFwPGFueSwgJEFueT47XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IE1hcDxhbnksICRBbnk+KSB7XHJcbiAgICAgICAgc3VwZXIodmFsdWUsIERhdGFUeXBlLkRpY3Rpb25hcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoa2V5OiAkQW55KTogYW55IHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZS5oYXMoa2V5LnZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS5nZXQoa2V5LnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQoa2V5OiAkQW55LCB2YWx1ZTogJEFueSk6ICRBbnkge1xyXG4gICAgICAgIHRoaXMudmFsdWUuc2V0KGtleS52YWx1ZSwgdmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XHJcbiAgICAgICAgdGhpcy52YWx1ZS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGAke2tleS50b1N0cmluZygpfTogJHt2YWx1ZX1gKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gYHske3Jlc3VsdC5qb2luKCc7ICcpfX1gO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnNvbGUgfSBmcm9tICcuLi9jb25zb2xlJztcclxuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGUuZW51bSc7XHJcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL2FueSc7XHJcbmltcG9ydCB7IEludGVycHJldGVyIH0gZnJvbSAnLi4vaW50ZXJwcmV0ZXInO1xyXG5pbXBvcnQgeyBTY29wZSB9IGZyb20gJy4uL3Njb3BlJztcclxuaW1wb3J0ICogYXMgU3RtdCBmcm9tICcuLi9zdGF0ZW1lbnQnO1xyXG5pbXBvcnQgeyAkUmV0dXJuIH0gZnJvbSAnLi9yZXR1cm4nO1xyXG5kZWNsYXJlIHZhciBjb256b2xlOiBDb25zb2xlO1xyXG5cclxuZXhwb3J0IHR5cGUgRnVuY3Rpb25DYWxsID0gKHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSwgaW50ZXJwcmV0ZXI6IEludGVycHJldGVyKSA9PiAkQW55O1xyXG5cclxuZXhwb3J0IGNsYXNzICRDYWxsYWJsZSBleHRlbmRzICRBbnkge1xyXG5cclxuICAgIHB1YmxpYyB2YWx1ZTogRnVuY3Rpb25DYWxsO1xyXG4gICAgcHVibGljIGFyaXR5OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgIGFyaXR5OiBudW1iZXIsIHZhbHVlOiBGdW5jdGlvbkNhbGwpIHtcclxuICAgICAgICBzdXBlcih2YWx1ZSwgRGF0YVR5cGUuRnVuY3Rpb24pO1xyXG4gICAgICAgIHRoaXMuYXJpdHkgPSBhcml0eTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYWxsKHRoaXo6IGFueSwgYXJnczogYW55W10sIGludGVycHJldGVyOiBJbnRlcnByZXRlciwgKTogJEFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUodGhpeiwgYXJncywgaW50ZXJwcmV0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgPCR7dGhpcy5uYW1lfSAgZnVuY3Rpb24+YDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyAkRnVuY3Rpb24gZXh0ZW5kcyAkQ2FsbGFibGUge1xyXG4gICAgcHVibGljIGRlY2xhcmF0aW9uOiBTdG10LkZ1bmM7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBjbG9zdXJlOiBTY29wZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkZWNsYXJhdGlvbjogU3RtdC5GdW5jLCBjbG9zdXJlOiBTY29wZSkge1xyXG4gICAgICAgIHN1cGVyKGRlY2xhcmF0aW9uLm5hbWUubGV4ZW1lLCBkZWNsYXJhdGlvbi5wYXJhbXMubGVuZ3RoLCBudWxsKTtcclxuICAgICAgICB0aGlzLmRlY2xhcmF0aW9uID0gZGVjbGFyYXRpb247XHJcbiAgICAgICAgdGhpcy5jbG9zdXJlID0gY2xvc3VyZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FsbCh0aGl6OiBhbnksIGFyZ3M6IGFueVtdLCBpbnRlcnByZXRlcjogSW50ZXJwcmV0ZXIpOiAkQW55IHtcclxuICAgICAgICBjb25zdCBzY29wZSA9IG5ldyBTY29wZSh0aGlzLmNsb3N1cmUpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kZWNsYXJhdGlvbi5wYXJhbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc2NvcGUuZGVmaW5lKHRoaXMuZGVjbGFyYXRpb24ucGFyYW1zW2ldLmxleGVtZSwgYXJnc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNjb3BlLnNldCgndGhpcycsIHRoaXopO1xyXG4gICAgICAgIGxldCByZXN0b3JlU2NvcGU6IFNjb3BlID0gbnVsbDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXN0b3JlU2NvcGUgPSBpbnRlcnByZXRlci5zY29wZTtcclxuICAgICAgICAgICAgaW50ZXJwcmV0ZXIuZXhlY3V0ZUJsb2NrKHRoaXMuZGVjbGFyYXRpb24uYm9keSwgc2NvcGUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiAkUmV0dXJuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdG9yZVNjb3BlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJwcmV0ZXIuc2NvcGUgPSByZXN0b3JlU2NvcGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZS52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb256b2xlLmVycm9yKFwiUnVudGltZSBlcnJvci4gRXhlY3V0aW9uIGhhcyBiZWVuIHN0b3BwZWRcIik7XHJcbiAgICAgICAgICAgIGNvbnpvbGUuZXJyb3IoZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUnVudGltZSBlcnJvci4gRXhlY3V0aW9uIGhhcyBiZWVuIHN0b3BwZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJcclxuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGUuZW51bSc7XHJcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL2FueSc7XHJcbmltcG9ydCB7ICRSYW5nZSB9IGZyb20gJy4vcmFuZ2UnO1xyXG5pbXBvcnQgeyAkTnVsbCB9IGZyb20gJy4vbnVsbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgJExpc3QgZXh0ZW5kcyAkQW55IHtcclxuICAgIHB1YmxpYyB2YWx1ZTogJEFueVtdO1xyXG4gICAgY29uc3RydWN0b3IodmFsdWU6ICRBbnlbXSkge1xyXG4gICAgICAgIHN1cGVyKHZhbHVlLCBEYXRhVHlwZS5MaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KGtleTogJEFueSk6ICRBbnkge1xyXG4gICAgICAgIGlmIChrZXkuaXNOdW1iZXIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZVtrZXkudmFsdWVdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5LmlzUmFuZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmFuZ2UoPCRSYW5nZT4ga2V5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gc3VwZXIuZ2V0KGtleSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgJE51bGwoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQoa2V5OiAkQW55LCB2YWx1ZTogJEFueSk6ICRBbnkge1xyXG4gICAgICAgIGlmIChrZXkuaXNOdW1iZXIoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlW2tleS52YWx1ZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmFuZ2UocmFuZ2U6ICRSYW5nZSk6ICRMaXN0IHtcclxuICAgICAgICBjb25zdCByZXN1bHQ6ICRBbnlbXSA9IFtdO1xyXG4gICAgICAgIHJhbmdlLml0ZXJhdGUodGhpcy52YWx1ZS5sZW5ndGgsIChpKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMudmFsdWVbaV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBuZXcgJExpc3QocmVzdWx0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYFske3RoaXMudmFsdWUuam9pbignLCcpfV1gO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgJEFueSB9IGZyb20gJy4vYW55JztcclxuXHJcbmV4cG9ydCBjbGFzcyAkTnVsbCBleHRlbmRzICRBbnkge1xyXG5cclxuICAgIHB1YmxpYyB2YWx1ZTogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihudWxsKTtcclxuICAgICAgICB0aGlzLnR5cGUgPSBEYXRhVHlwZS5OdWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gJ251bGwnO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi90eXBlLmVudW0nO1xyXG5pbXBvcnQgeyAkQW55IH0gZnJvbSAnLi9hbnknO1xyXG5cclxuZXhwb3J0IGNsYXNzICROdW1iZXIgZXh0ZW5kcyAkQW55IHtcclxuXHJcbiAgICBwdWJsaWMgdmFsdWU6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIodmFsdWUsIERhdGFUeXBlLk51bWJlcik7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi90eXBlLmVudW0nO1xyXG5pbXBvcnQgeyAkQW55IH0gZnJvbSAnLi9hbnknO1xyXG5pbXBvcnQgeyAkTnVsbCB9IGZyb20gJy4vbnVsbCc7XHJcbmltcG9ydCB7ICRDbGFzcyB9IGZyb20gJy4vY2xhc3MnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyAkT2JqZWN0IGV4dGVuZHMgJEFueSB7XHJcbiAgICBwdWJsaWMgdmFsdWU6IE1hcDxzdHJpbmcsICRBbnk+O1xyXG4gICAgcHVibGljIGNvbnp0cnVjdG9yOiAkQ2xhc3MgfCAkQW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBNYXA8c3RyaW5nLCAkQW55PiwgY29uenRydWN0b3I6ICRDbGFzcyB8ICRBbnkpIHtcclxuICAgICAgICBzdXBlcih2YWx1ZSwgRGF0YVR5cGUuT2JqZWN0KTtcclxuICAgICAgICB0aGlzLmNvbnp0cnVjdG9yID0gY29uenRydWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldChrZXk6ICRBbnkpOiAkQW55IHtcclxuICAgICAgICBjb25zdCBtZXRob2QgPSB0aGlzLmNvbnp0cnVjdG9yLmdldChrZXkpO1xyXG5cclxuICAgICAgICBpZiAobWV0aG9kLmlzRnVuY3Rpb24oKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUuaGFzKGtleS52YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUuZ2V0KGtleS52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3ICROdWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldChrZXk6ICRBbnksIHZhbHVlOiAkQW55KTogJEFueSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZS5zZXQoa2V5LnZhbHVlLCB2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgPCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBvYmplY3Q+YDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgJEFueSB9IGZyb20gJy4vYW55JztcclxuaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gJy4uL2NvbnNvbGUnO1xyXG5kZWNsYXJlIHZhciBjb256b2xlOiBDb25zb2xlO1xyXG5cclxuZXhwb3J0ICBjbGFzcyBSYW5nZVZhbHVlIHtcclxuICAgIHB1YmxpYyBzdGFydDogbnVtYmVyO1xyXG4gICAgcHVibGljIGVuZDogbnVtYmVyO1xyXG4gICAgcHVibGljIHN0ZXA6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlciwgc3RlcDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xyXG4gICAgICAgIHRoaXMuZW5kID0gZW5kO1xyXG4gICAgICAgIHRoaXMuc3RlcCA9IHN0ZXA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5vcm1hbGl6ZShsZW5ndGg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnN0ZXAgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGVwID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZW5kID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kID0gdGhpcy5zdGVwID4gMCA/IGxlbmd0aCAtIDEgOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zdGFydCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdGVwID4gMCA/IDAgOiBsZW5ndGggLSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzICRSYW5nZSBleHRlbmRzICRBbnkge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBSYW5nZVZhbHVlKSB7XHJcbiAgICAgICAgc3VwZXIodmFsdWUsIERhdGFUeXBlLlJhbmdlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXRlcmF0ZShsZW5ndGg6IG51bWJlciwgY2FsbGJhY2s6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52YWx1ZS5ub3JtYWxpemUobGVuZ3RoKTtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZS5zdGVwID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy52YWx1ZS5zdGFydDsgaSA8PSB0aGlzLnZhbHVlLmVuZDsgaSArPSB0aGlzLnZhbHVlLnN0ZXApIHtcclxuICAgICAgICAgICAgICAgY2FsbGJhY2soaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudmFsdWUuc3RlcCA8IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMudmFsdWUuc3RhcnQ7IGkgPj0gdGhpcy52YWx1ZS5lbmQ7IGkgKz0gdGhpcy52YWx1ZS5zdGVwKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnpvbGUud2FybihgW3JhbmdlIGVycm9yXSA9PiAwIGlzIG5vdCBhIHZhbGlkIHN0ZXBgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGUuZW51bSc7XHJcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL2FueSc7XHJcblxyXG5leHBvcnQgY2xhc3MgJFJldHVybiBleHRlbmRzICRBbnkge1xyXG5cclxuICAgIHB1YmxpYyB2YWx1ZTogJEFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogJEFueSkge1xyXG4gICAgICAgIHN1cGVyKHZhbHVlLCBEYXRhVHlwZS5SZXR1cm4pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IERhdGFUeXBlLCAkTGlzdCwgJENhbGxhYmxlLCAkQW55LCAkUmFuZ2UsICROdWxsLCAkTnVtYmVyIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBSdW50aW1lIH0gZnJvbSAnLi4vcnVudGltZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgJFN0cmluZyBleHRlbmRzICRBbnkge1xyXG4gICAgcHVibGljIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKHZhbHVlLCBEYXRhVHlwZS5TdHJpbmcpO1xyXG4gICAgICAgIC8qIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ2ludm9rZScsIFJ1bnRpbWUuaW52b2tlTWV0aG9kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS52YWx1ZXMuc2V0KCdzaXplJywgUnVudGltZS5zdHJpbmdMZW5ndGhNZXRob2QodGhpcykpO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ3N1YnN0cicsIFJ1bnRpbWUuc3RyaW5nU3ViU3RyTWV0aG9kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS52YWx1ZXMuc2V0KCdzcGxpdCcsIFJ1bnRpbWUuc3RyaW5nU3BsaXRNZXRob2QodGhpcykpO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ21hdGNoJywgUnVudGltZS5zdHJpbmdNYXRjaE1ldGhvZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgncmVwbGFjZScsIFJ1bnRpbWUuc3RyaW5nUmVwbGFjZU1ldGhvZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgnYWx0ZXInLCBSdW50aW1lLnN0cmluZ0FsdGVyTWV0aG9kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS52YWx1ZXMuc2V0KCd0b1VwcGVyQ2FzZScsIFJ1bnRpbWUuc3RyaW5nVG9VcHBlckNhc2UodGhpcykpO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ3RvTG93ZXJDYXNlJywgUnVudGltZS5zdHJpbmdUb0xvd2VyY2FzZSh0aGlzKSk7ICovXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldChrZXk6ICRBbnkpOiAkQW55IHtcclxuICAgICAgICBpZiAoa2V5LmlzTnVtYmVyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyAkU3RyaW5nKHRoaXMudmFsdWVba2V5LnZhbHVlXSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChrZXkuaXNSYW5nZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJhbmdlKDwkUmFuZ2U+IGtleSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChrZXkudmFsdWUgPT09ICdsZW5ndGgnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgJE51bWJlcih0aGlzLnZhbHVlLmxlbmd0aCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChSdW50aW1lLlN0cmluZy5oYXMoa2V5LnZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gUnVudGltZS5TdHJpbmcuZ2V0KGtleS52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgJE51bGwoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldChrZXk6ICRBbnksIHZhbHVlOiBhbnkpOiAkQW55IHtcclxuICAgICAgICBpZiAodHlwZW9mIGtleSAhPT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5wcm9wZXJ0aWVzLnNldChrZXksIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhcml0eSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmFuZ2UocmFuZ2U6ICRSYW5nZSk6ICRTdHJpbmcge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgICAgICByYW5nZS5pdGVyYXRlKHRoaXMudmFsdWUubGVuZ3RoLCAoaSkgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gdGhpcy52YWx1ZVtpXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbmV3ICRTdHJpbmcocmVzdWx0KTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiZXhwb3J0IGVudW0gRGF0YVR5cGUge1xyXG4gICAgTnVsbCwgICAgLy8gMFxyXG4gICAgVm9pZCwgICAgLy8gMVxyXG4gICAgQW55LCAgICAgLy8gMlxyXG4gICAgQm9vbGVhbiwgLy8gM1xyXG4gICAgTnVtYmVyLCAgLy8gNFxyXG4gICAgU3RyaW5nLCAgLy8gNVxyXG4gICAgTGlzdCwgICAgLy8gNlxyXG4gICAgRGljdGlvbmFyeSwgLy8gN1xyXG4gICAgT2JqZWN0LCAgIC8vIDhcclxuICAgIENsYXNzLCAgICAvLyA5XHJcbiAgICBGdW5jdGlvbiwgLy8gMTBcclxuICAgIExhbWJkYSwgICAvLyAxMVxyXG4gICAgUmFuZ2UsICAgIC8vIDEyXHJcbiAgICBSZXR1cm4gICAgLy8gMTNcclxufVxyXG4iLCJpbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgJEFueSB9IGZyb20gJy4vYW55JztcclxuXHJcbmV4cG9ydCBjbGFzcyAkVm9pZCBleHRlbmRzICRBbnkge1xyXG5cclxuICAgIHB1YmxpYyB2YWx1ZTogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIodmFsdWUsIERhdGFUeXBlLlZvaWQpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9