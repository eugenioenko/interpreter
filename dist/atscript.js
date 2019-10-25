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
    return (new _interpreter__WEBPACK_IMPORTED_MODULE_2__["Interpreter"]().interpet((new _parser__WEBPACK_IMPORTED_MODULE_1__["Parser"]((new _scanner__WEBPACK_IMPORTED_MODULE_0__["Scanner"](source)).scan())).parse()));
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
// printing
print "string";
print null;
print 1;
print true;
print null + null;
print 1 + 1;
print "test"[1];
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

/***/ "./src/interpreter.ts":
/*!****************************!*\
  !*** ./src/interpreter.ts ***!
  \****************************/
/*! exports provided: Interpreter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interpreter", function() { return Interpreter; });
/* harmony import */ var _structs_scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./structs/scope */ "./src/structs/scope.ts");
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token */ "./src/token.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./src/types.ts");



class Interpreter {
    constructor() {
        this.global = new _structs_scope__WEBPACK_IMPORTED_MODULE_0__["Scope"]();
        this.scope = this.global;
        // this.global.define('echo', Runtime.echoFunction());
        // this.global.define('rand', Runtime.randFunction());
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
        console.log(data.toString());
        conzole.log(data.toString());
        return data;
    }
    visitVarStmt(stmt) {
        let data = new _types__WEBPACK_IMPORTED_MODULE_2__["$Null"]();
        if (stmt.initializer !== null) {
            data = this.evaluate(stmt.initializer);
        } /*
        if (data instanceof FunctionEntity && data.name === "lambda") {
            data.name = stmt.name.lexeme;
            data.prototype.set('name', data.name);
        }*/
        this.scope.define(stmt.name.lexeme, data);
        return data;
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
        return new _types__WEBPACK_IMPORTED_MODULE_2__["$List"](values);
    }
    visitZtringExpr(expr) {
        return new _types__WEBPACK_IMPORTED_MODULE_2__["$String"](expr.value);
    }
    visitRegExExpr(expr) {
        /*
        return new RegExEntity(expr.value);
        */ return new _types__WEBPACK_IMPORTED_MODULE_2__["$Null"]();
    }
    visitAssignExpr(expr) {
        const value = this.evaluate(expr.value);
        this.scope.assign(expr.name.lexeme, value);
        return value;
    }
    visitBinaryExpr(expr) {
        let left = this.evaluate(expr.left).value;
        let right = this.evaluate(expr.right).value;
        left = left instanceof _types__WEBPACK_IMPORTED_MODULE_2__["$String"] ? left.toString() : left;
        right = right instanceof _types__WEBPACK_IMPORTED_MODULE_2__["$String"] ? right.toString() : right;
        switch (expr.operator.type) {
            case _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Minus:
            case _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].MinusEqual:
                return new _types__WEBPACK_IMPORTED_MODULE_2__["$Number"](left - right);
            case _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Slash:
            case _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].SlashEqual:
                return new _types__WEBPACK_IMPORTED_MODULE_2__["$Number"](left / right);
            case _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Star:
            case _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].StarEqual:
                return new _types__WEBPACK_IMPORTED_MODULE_2__["$Number"](left * right);
            case _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Percent:
            case _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].PercentEqual:
                return new _types__WEBPACK_IMPORTED_MODULE_2__["$Number"](left % right);
            case _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Plus:
            case _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].PlusEqual:
                if (!isNaN(left) && !isNaN(right)) {
                    return new _types__WEBPACK_IMPORTED_MODULE_2__["$Number"](left + right);
                }
                /*
                if (left instanceof ArrayEntity && right instanceof ArrayEntity) {
                    return new ArrayEntity(left.values.concat(right.values));
                } */
                return new _types__WEBPACK_IMPORTED_MODULE_2__["$String"](left + right);
            case _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Pipe:
                return new _types__WEBPACK_IMPORTED_MODULE_2__["$Number"](left | right);
            case _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Caret:
                return new _types__WEBPACK_IMPORTED_MODULE_2__["$Number"](left ^ right);
            case _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Greater:
                return new _types__WEBPACK_IMPORTED_MODULE_2__["$Boolean"](left > right);
            case _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].GreaterEqual:
                return new _types__WEBPACK_IMPORTED_MODULE_2__["$Boolean"](left >= right);
            case _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Less:
                return new _types__WEBPACK_IMPORTED_MODULE_2__["$Boolean"](left < right);
            case _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].LessEqual:
                return new _types__WEBPACK_IMPORTED_MODULE_2__["$Boolean"](left >= right);
            case _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].EqualEqual:
                return new _types__WEBPACK_IMPORTED_MODULE_2__["$Boolean"](left === right);
            case _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].BangEqual:
                return new _types__WEBPACK_IMPORTED_MODULE_2__["$Boolean"](left !== right);
            default:
                conzole.warn(expr);
                return null; // unreachable
                break;
        }
    }
    visitLogicalExpr(expr) {
        if (expr.operator.type === _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].And) {
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
            case _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Minus:
                return new _types__WEBPACK_IMPORTED_MODULE_2__["$Number"](-Number(right));
            case _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].Bang:
                return new _types__WEBPACK_IMPORTED_MODULE_2__["$Boolean"](!Boolean(right));
            case _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].PlusPlus:
                const incValue = Number(right) + 1;
                this.scope.assign(expr.right.name.lexeme, incValue);
                return new _types__WEBPACK_IMPORTED_MODULE_2__["$Number"](incValue);
            case _token__WEBPACK_IMPORTED_MODULE_1__["TokenType"].MinusMinus:
                const decValue = Number(right) - 1;
                this.scope.assign(expr.right.name.lexeme, decValue);
                return new _types__WEBPACK_IMPORTED_MODULE_2__["$Number"](decValue);
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
        return new _types__WEBPACK_IMPORTED_MODULE_2__["$Void"]('block');
    }
    visitBlockStmt(stmt) {
        return this.executeBlock(stmt.statements, new _structs_scope__WEBPACK_IMPORTED_MODULE_0__["Scope"](this.scope));
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
        return new _types__WEBPACK_IMPORTED_MODULE_2__["$Void"]('while');
    }
    visitDoWhileStmt(stmt) {
        do {
            this.execute(stmt.loop);
        } while (this.evaluate(stmt.condition).isTruthy());
        return new _types__WEBPACK_IMPORTED_MODULE_2__["$Void"]('dowhile');
    }
    visitCallExpr(expr) {
        /*
        const callee = this.evaluate(expr.callee);
        const args = [];
        let thiz: any = null;
        if (expr.callee instanceof Expr.Get) {
            thiz = this.evaluate(expr.callee.entity);
        } else if (expr.thiz !== null) {
            thiz = expr.thiz;
        }
        for (const argument of expr.args) {
            args.push(this.evaluate(argument));
        }

        if (!(callee instanceof CallableEntity) &&
            !(callee instanceof InternalEntity)
        ) {
            this.interpreterError(`${callee} is not a function`);
        }
        const func = callee as CallableEntity;
        if (args.length !== func.arity() && func.arity() !== -1) {
            conzole.warn(`Warning at (${expr.paren.line}): ${callee} mismatched argument length; \n Expected ${func.arity()} but got ${args.length} `);
        }
        return func.call(this, thiz, args);
        */ return new _types__WEBPACK_IMPORTED_MODULE_2__["$Null"]();
    }
    visitSuperExpr(expr) {
        /*
        const thiz: InstanceEntity = this.scope.first('this');
        if (!thiz) {
            conzole.error(`super can only be called on child instances`);
        }
        const clazz: FunctionEntity = this.scope.obtain(thiz.instanceof);
        if (!clazz) {
            conzole.error(`${thiz} is not an instance of an entity`);
        }
        const parent: FunctionEntity = clazz.parent;
        if (!parent) {
            conzole.error(`${thiz} entity has no parent`);
        }
        let method: FunctionEntity = null;
        for (const key of expr.index) {
            // method = parent.get(key.lexeme);
        }
        const args = [];
        for (const argument of expr.args) {
            args.push(this.evaluate(argument));
        }
        if (method) {
            return method.call(this, thiz, args);
        } else {
            return parent.call(this, thiz, args);
        }
        */ return new _types__WEBPACK_IMPORTED_MODULE_2__["$Null"]();
    }
    visitNewExpr(expr) {
        /*
        const construct = expr.construct as Expr.Call;
        const callee = this.evaluate(construct.callee);
        const newInstance = new InstanceEntity(<any> callee);
        construct.thiz = newInstance;
        this.evaluate(construct);
        return newInstance;
        */ return new _types__WEBPACK_IMPORTED_MODULE_2__["$Null"]();
    }
    visitDictionaryExpr(expr) {
        const dict = new _types__WEBPACK_IMPORTED_MODULE_2__["$Dictionary"](new Map());
        for (const property of expr.properties) {
            const key = this.evaluate(property.key);
            const value = this.evaluate(property.value);
            dict.set(key, value);
        }
        return dict;
    }
    visitKeyExpr(expr) {
        return new _types__WEBPACK_IMPORTED_MODULE_2__["$Any"](expr.name.lexeme);
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
        /*
        const func: FunctionEntity = new FunctionEntity(stmt, this.scope);
        this.scope.define(stmt.name.lexeme, func);
        return null;
        */ return new _types__WEBPACK_IMPORTED_MODULE_2__["$Null"]();
    }
    visitClassStmt(stmt) {
        /*
        let construct = stmt.methods.find((method) => method.name.lexeme === "constructor");
        const methods = stmt.methods.filter((method) => method.name.lexeme !== "constructor");

        if (!construct) {
            construct = new Stmt.Func(stmt.name, [], []);
        } else {
            construct.name = stmt.name;
        }

        const func: FunctionEntity = new FunctionEntity(construct, this.scope);
        let parent: FunctionEntity = null;
        if (stmt.parent) {
            parent = this.scope.get(stmt.parent);
            if (parent) {
                func.parent = parent;
                func.prototype = new Prototype(parent.properties, parent.prototype, func);
            }
        }
        for (const method of methods) {
            func.properties.set(method.name.lexeme, new FunctionEntity(method, this.scope, parent));
        }

        this.scope.set(stmt.name.lexeme, func);
        return null;
        */ return new _types__WEBPACK_IMPORTED_MODULE_2__["$Null"]();
    }
    visitLambdaExpr(expr) {
        /*
        const lambda: Stmt.Func = expr.lambda as Stmt.Func;
        const func: FunctionEntity = new FunctionEntity(lambda, this.scope);
        return func;
        */ return new _types__WEBPACK_IMPORTED_MODULE_2__["$Null"]();
    }
    visitReturnStmt(stmt) {
        /*
        let value = null;
        if (stmt.value) {
            value = this.evaluate(stmt.value);
        }
        throw new Return(value);
        */ return new _types__WEBPACK_IMPORTED_MODULE_2__["$Null"]();
    }
    visitRangeExpr(expr) {
        return new _types__WEBPACK_IMPORTED_MODULE_2__["$Range"](new _types__WEBPACK_IMPORTED_MODULE_2__["RangeValue"](expr.start ? this.evaluate(expr.start).value : null, expr.end ? this.evaluate(expr.end).value : null, expr.step ? this.evaluate(expr.step).value : null));
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
        /*
        const name: Token = this.consume(TokenType.Identifier, `Expected a class name`);
        let parent: Token = null;
        if (this.match(TokenType.Extends)) {
            parent  = this.consume(TokenType.Identifier, `Expected a parent name`);
        }
        this.consume(TokenType.LeftBrace, `Expected "{" after class name`);
        const methods: Stmt.Func[] = [];

        while (!this.check(TokenType.RightBrace) && !this.eof()) {
            if (this.check(TokenType.Function)) {
                this.consume(TokenType.Function, '');
            }
            methods.push(this.funcDeclaration("method"));
        }

        this.consume(TokenType.RightBrace, `Expected "}" after class "${name.literal}" methods`);
        if (this.extraSemicolon()) {
            this.parseWarning(`Unnecessary semicolon after class ${name.lexeme} declaration`);
        }
        return new Stmt.Class(name, parent, methods);
        */ return null;
    }
    funcDeclaration(kind) {
        /*
        const name: Token = this.consume(TokenType.Identifier, `Expected a ${kind} name`);
        return this.funcParamsBody(name, kind);
        */ return null;
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
        /*
        this.consume(TokenType.LeftParen, `Expected "(" after ${kind}`);
        const params: Token[] = this.funcParams();

        if (this.match(TokenType.LeftBrace)) {
            const body: Stmt.Stmt[] = this.block();
            if (name.type !== TokenType.Lambda && this.extraSemicolon()) {
                this.parseWarning(`Unnecessary semicolon after function ${name.lexeme} declaration`);
            }
            return new Stmt.Func(name, params, body);
        }

        if (this.match(TokenType.Arrow)) {
            const body: Stmt.Stmt[] = [];
            let arrow: Expr.Expr;
            const keyword: Token = this.previous();
            if (!this.check(TokenType.Semicolon)) {
                arrow = this.expression();
            }
            this.match(TokenType.Semicolon);
            body.push(new Stmt.Return(keyword, arrow));
            return new Stmt.Func(name, params, body);
        }
        this.consume(TokenType.LeftBrace, `Expect "{" before ${kind} body`);
        */ return null;
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
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Semicolon, `Exected ";" after return statement`);
        return new _statement__WEBPACK_IMPORTED_MODULE_1__["Return"](keyword, value);
    }
    block() {
        const statements = [];
        while (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightBrace) && !this.eof()) {
            statements.push(this.declaration());
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightBrace, `Expected closing block "}"`);
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
        while (true) {
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LeftParen)) {
                let callee = expr;
                do {
                    const args = [];
                    if (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightParen)) {
                        do {
                            args.push(this.expression());
                        } while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Comma));
                    }
                    const paren = this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightParen, `Expected ")" after arguments`);
                    callee = new _expression__WEBPACK_IMPORTED_MODULE_0__["Call"](callee, paren, args, null);
                } while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LeftParen));
                return callee;
            }
            else if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Dot)) {
                expr = this.dotGet(expr);
            }
            else if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LeftBracket)) {
                expr = this.bracketGet(expr);
            }
            else {
                break;
            }
        }
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
            const token = new _token__WEBPACK_IMPORTED_MODULE_2__["Token"](_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Lambda, 'lambda', 'lambda', this.previous().line);
            const lambda = this.funcParamsBody(token, "lambda");
            return new _expression__WEBPACK_IMPORTED_MODULE_0__["Lambda"](lambda);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Super)) {
            return this.superCall();
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
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].String, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Identifier)) {
                const key = this.previous();
                this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Colon, `Expected ":" colon after member`);
                const value = this.expression();
                properties.push(new _expression__WEBPACK_IMPORTED_MODULE_0__["Set"](null, new _expression__WEBPACK_IMPORTED_MODULE_0__["Key"](key), value));
            }
            else {
                this.parseError(this.peek(), `String or identifier expected after Object {`);
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
    superCall() {
        /*
        const indexes: Token[] = [];
        while (this.match(TokenType.Dot)) {
            const token = this.consume(TokenType.Identifier, `Expected method name after super`);
            indexes.push(token);
        }

        const args: Expr.Expr[] = [];
        this.consume(TokenType.LeftParen, `Expected function parameters or method name after super`);
        do {
            if (!this.check(TokenType.RightParen)) {
                do {
                    args.push(this.expression());
                } while (this.match(TokenType.Comma));
            }
            this.consume(TokenType.RightParen, `Expected ")" after super arguments`);
        } while (this.match(TokenType.LeftParen));

        return new Expr.Super(indexes, args);
        */ return null;
    }
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

/***/ "./src/structs/scope.ts":
/*!******************************!*\
  !*** ./src/structs/scope.ts ***!
  \******************************/
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
/*! exports provided: DataType, $Any, $Boolean, $Null, $Void, RangeValue, $Range, $Number, $String, $List, $Dictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataType", function() { return DataType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$Any", function() { return $Any; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$Boolean", function() { return $Boolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$Null", function() { return $Null; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$Void", function() { return $Void; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeValue", function() { return RangeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$Range", function() { return $Range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$Number", function() { return $Number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$String", function() { return $String; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$List", function() { return $List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$Dictionary", function() { return $Dictionary; });
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
    DataType[DataType["Function"] = 9] = "Function";
    DataType[DataType["Range"] = 10] = "Range";
})(DataType || (DataType = {}));
class $Any {
    constructor(value, type = DataType.Any) {
        this.type = DataType.Any;
        this.value = value;
        this.type = type;
    }
    isString() {
        return this.type === DataType.String;
    }
    isNull() {
        return this.type === DataType.Null;
    }
    isBoolean() {
        return this.type === DataType.Boolean;
    }
    isNumber() {
        return this.type === DataType.Number;
    }
    isRange() {
        return this.type === DataType.Range;
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
class $Boolean extends $Any {
    constructor(value) {
        super(value, DataType.Boolean);
    }
}
class $Null extends $Any {
    constructor() {
        super(null);
        this.type = DataType.Null;
    }
    toString() {
        return 'null';
    }
}
class $Void extends $Any {
    constructor(value) {
        super(value, DataType.Void);
    }
}
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
class $Range extends $Any {
    constructor(value) {
        super(value, DataType.Range);
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
class $Number extends $Any {
    constructor(value) {
        super(value, DataType.Number);
    }
}
class $String extends $Any {
    constructor(value) {
        super(value, DataType.String);
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
        else if (key.value === 'length') {
            return new $Number(this.value.length);
        }
        else if (key.isRange()) {
            return this.range(key);
        }
        else {
            return; //return super.get(key);
        }
    }
    set(key, value) {
        if (typeof key !== 'number') {
            // this.properties.set(key, value);
        }
        return new $Null();
    }
    arity() {
        return 0;
    }
    /*

    public call(interpreter: Interpreter, thiz: any, args: any[]): any {
        return new $String(args[0]);
    }*/
    range(range) {
        let result = '';
        range.iterate(this.value.length, (i) => {
            result += this.value[i];
        });
        return new $String(result);
    }
}
class $List extends $Any {
    constructor(value) {
        super(value, DataType.List);
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
            return new $Null();
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
class $Dictionary extends $Any {
    constructor(value) {
        super(value, DataType.Dictionary);
    }
    get(key) {
        if (this.value.has(key.value)) {
            return this.value.get(key.value);
        }
        return new $Null();
    }
    set(key, value) {
        this.value.set(key.value, value);
        return value;
    }
    toString() {
        const result = [];
        this.value.forEach((value, key) => {
            result.push(`${key}: ${value}`);
        });
        return `{${result.join('; ')}}`;
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXRzY3JpcHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlbW9zL2RlbW8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4cHJlc3Npb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVycHJldGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjYW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RydWN0cy9zY29wZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RydWN0cy91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9rZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZE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REFBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQzVELEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGdEQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDN0QsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsZ0RBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUMxRCxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnREFBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQzNELEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGdEQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDdEQsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsZ0RBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUNwRCxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnREFBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQzFELEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGdEQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDdEQsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsZ0RBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUN6RCxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnREFBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ3RELEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGdEQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDdkQsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsZ0RBQVMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUN4RCxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUM3RixLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUNuRyxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUN0RixLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUM1RixLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUM3RixLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUNuRyxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUM3RixLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDbkksS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ3BJLEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxD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QUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQyxDQUFDO0NBQ0oiLCJmaWxlIjoiYXRzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hdHNjcmlwdC50c1wiKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCB7IFNjYW5uZXIgfSBmcm9tICcuL3NjYW5uZXInO1xyXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICcuL3BhcnNlcic7XHJcbmltcG9ydCB7IEludGVycHJldGVyIH0gZnJvbSAnLi9pbnRlcnByZXRlcic7XHJcbmltcG9ydCB7IENvbnNvbGUgfSBmcm9tICcuL2NvbnNvbGUnO1xyXG5pbXBvcnQgeyBEZW1vU291cmNlQ29kZSB9IGZyb20gJy4vZGVtb3MvZGVtbyc7XHJcbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55O1xyXG5kZWNsYXJlIHZhciBnbG9iYWw6IGFueTtcclxuXHJcbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgZ2xvYmFsLndpbmRvdyA9IGdsb2JhbDtcclxufVxyXG5cclxud2luZG93LmNvbnpvbGUgPSBuZXcgQ29uc29sZSgpO1xyXG53aW5kb3cuZGVtb1NvdXJjZUNvZGUgPSBEZW1vU291cmNlQ29kZTtcclxud2luZG93LmF0c2NyaXB0ID0gKHNvdXJjZTogc3RyaW5nKSAgPT4ge1xyXG4gICAgcmV0dXJuIChuZXcgSW50ZXJwcmV0ZXIoKS5pbnRlcnBldCgobmV3IFBhcnNlcigobmV3IFNjYW5uZXIoc291cmNlKSkuc2NhbigpKSkucGFyc2UoKSkpO1xyXG59O1xyXG4iLCJleHBvcnQgZW51bSBDb25zb2xlTWVzc2FnZVR5cGUge1xyXG4gICAgVXNlcixcclxuICAgIEVycm9yLFxyXG4gICAgV2FybmluZyxcclxuICAgIEluZm9cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnNvbGVNZXNzYWdlIHtcclxuICAgIHB1YmxpYyB0aW1lOiBEYXRlO1xyXG4gICAgcHVibGljIHRleHQ6IGFueTtcclxuICAgIHB1YmxpYyB0eXBlOiBDb25zb2xlTWVzc2FnZVR5cGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25zb2xlIHtcclxuXHJcbiAgICBwdWJsaWMgbWVzc2FnZXM6IENvbnNvbGVNZXNzYWdlW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkKG1lc3NhZ2U6IGFueSwgdHlwZTogQ29uc29sZU1lc3NhZ2VUeXBlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKHtcclxuICAgICAgICAgICAgdGV4dDogbWVzc2FnZSxcclxuICAgICAgICAgICAgdGltZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2cobWVzc2FnZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5hZGQobWVzc2FnZSwgQ29uc29sZU1lc3NhZ2VUeXBlLlVzZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3YXJuKG1lc3NhZ2U6IGFueSkge1xyXG4gICAgICAgIHRoaXMuYWRkKG1lc3NhZ2UsIENvbnNvbGVNZXNzYWdlVHlwZS5XYXJuaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXJyb3IobWVzc2FnZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5hZGQobWVzc2FnZSwgQ29uc29sZU1lc3NhZ2VUeXBlLkVycm9yKTtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluZm8obWVzc2FnZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5hZGQobWVzc2FnZSwgQ29uc29sZU1lc3NhZ2VUeXBlLkluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaXJzdCgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VzWzBdLnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxhc3QoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlc1t0aGlzLm1lc3NhZ2VzLmxlbmd0aCAtIDFdLnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHByaW50KCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKHRoaXMubWVzc2FnZXMubWFwKChjbSkgPT4gY20udGV4dCkpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJleHBvcnQgY29uc3QgRGVtb1NvdXJjZUNvZGUgPVxyXG5gXHJcbi8vIHByaW50aW5nXHJcbnByaW50IFwic3RyaW5nXCI7XHJcbnByaW50IG51bGw7XHJcbnByaW50IDE7XHJcbnByaW50IHRydWU7XHJcbnByaW50IG51bGwgKyBudWxsO1xyXG5wcmludCAxICsgMTtcclxucHJpbnQgXCJ0ZXN0XCJbMV07XHJcbmA7XHJcbiIsImltcG9ydCB7IFRva2VuLCBUb2tlblR5cGUgfSBmcm9tICd0b2tlbic7XG5pbXBvcnQgeyBTdG10IH0gZnJvbSAnc3RhdGVtZW50JztcbmltcG9ydCB7ICRBbnkgfSBmcm9tICd0eXBlcyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFeHByIHtcbiAgICBwdWJsaWMgcmVzdWx0OiBhbnk7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgY29uc3RydWN0b3IoKSB7fVxuICAgIHB1YmxpYyBhYnN0cmFjdCBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSO1xufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmV4cG9ydCBpbnRlcmZhY2UgRXhwclZpc2l0b3I8Uj4ge1xuICAgIHZpc2l0QXNzaWduRXhwcihleHByOiBBc3NpZ24pOiBSO1xuICAgIHZpc2l0QmluYXJ5RXhwcihleHByOiBCaW5hcnkpOiBSO1xuICAgIHZpc2l0Q2FsbEV4cHIoZXhwcjogQ2FsbCk6IFI7XG4gICAgdmlzaXREaWN0aW9uYXJ5RXhwcihleHByOiBEaWN0aW9uYXJ5KTogUjtcbiAgICB2aXNpdEdldEV4cHIoZXhwcjogR2V0KTogUjtcbiAgICB2aXNpdEdyb3VwaW5nRXhwcihleHByOiBHcm91cGluZyk6IFI7XG4gICAgdmlzaXRLZXlFeHByKGV4cHI6IEtleSk6IFI7XG4gICAgdmlzaXRMYW1iZGFFeHByKGV4cHI6IExhbWJkYSk6IFI7XG4gICAgdmlzaXRMb2dpY2FsRXhwcihleHByOiBMb2dpY2FsKTogUjtcbiAgICB2aXNpdExpc3RFeHByKGV4cHI6IExpc3QpOiBSO1xuICAgIHZpc2l0TGl0ZXJhbEV4cHIoZXhwcjogTGl0ZXJhbCk6IFI7XG4gICAgdmlzaXROZXdFeHByKGV4cHI6IE5ldyk6IFI7XG4gICAgdmlzaXRQb3N0Zml4RXhwcihleHByOiBQb3N0Zml4KTogUjtcbiAgICB2aXNpdFJhbmdlRXhwcihleHByOiBSYW5nZSk6IFI7XG4gICAgdmlzaXRSZWdFeEV4cHIoZXhwcjogUmVnRXgpOiBSO1xuICAgIHZpc2l0U2V0RXhwcihleHByOiBTZXQpOiBSO1xuICAgIHZpc2l0U3VwZXJFeHByKGV4cHI6IFN1cGVyKTogUjtcbiAgICB2aXNpdFRlcm5hcnlFeHByKGV4cHI6IFRlcm5hcnkpOiBSO1xuICAgIHZpc2l0VW5hcnlFeHByKGV4cHI6IFVuYXJ5KTogUjtcbiAgICB2aXNpdFZhcmlhYmxlRXhwcihleHByOiBWYXJpYWJsZSk6IFI7XG4gICAgdmlzaXRadHJpbmdFeHByKGV4cHI6IFp0cmluZyk6IFI7XG59XG5cbmV4cG9ydCBjbGFzcyBBc3NpZ24gZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgbmFtZTogVG9rZW47XG4gICAgcHVibGljIHZhbHVlOiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogVG9rZW4sIHZhbHVlOiBFeHByKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0QXNzaWduRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkFzc2lnbic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEJpbmFyeSBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBsZWZ0OiBFeHByO1xuICAgIHB1YmxpYyBvcGVyYXRvcjogVG9rZW47XG4gICAgcHVibGljIHJpZ2h0OiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IobGVmdDogRXhwciwgb3BlcmF0b3I6IFRva2VuLCByaWdodDogRXhwcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0QmluYXJ5RXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkJpbmFyeSc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENhbGwgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgY2FsbGVlOiBFeHByO1xuICAgIHB1YmxpYyBwYXJlbjogVG9rZW47XG4gICAgcHVibGljIGFyZ3M6IEV4cHJbXTtcbiAgICBwdWJsaWMgdGhpejogJEFueTtcblxuICAgIGNvbnN0cnVjdG9yKGNhbGxlZTogRXhwciwgcGFyZW46IFRva2VuLCBhcmdzOiBFeHByW10sIHRoaXo6ICRBbnkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jYWxsZWUgPSBjYWxsZWU7XG4gICAgICAgIHRoaXMucGFyZW4gPSBwYXJlbjtcbiAgICAgICAgdGhpcy5hcmdzID0gYXJncztcbiAgICAgICAgdGhpcy50aGl6ID0gdGhpejtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q2FsbEV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5DYWxsJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRGljdGlvbmFyeSBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBwcm9wZXJ0aWVzOiBFeHByW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzOiBFeHByW10pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RGljdGlvbmFyeUV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5EaWN0aW9uYXJ5JztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgR2V0IGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIGVudGl0eTogRXhwcjtcbiAgICBwdWJsaWMga2V5OiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IoZW50aXR5OiBFeHByLCBrZXk6IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbnRpdHkgPSBlbnRpdHk7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRHZXRFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuR2V0JztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgR3JvdXBpbmcgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgZXhwcmVzc2lvbjogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKGV4cHJlc3Npb246IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0R3JvdXBpbmdFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuR3JvdXBpbmcnO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBLZXkgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgbmFtZTogVG9rZW47XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBUb2tlbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRLZXlFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuS2V5JztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTGFtYmRhIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIGxhbWJkYTogU3RtdDtcblxuICAgIGNvbnN0cnVjdG9yKGxhbWJkYTogU3RtdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmxhbWJkYSA9IGxhbWJkYTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TGFtYmRhRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkxhbWJkYSc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIExvZ2ljYWwgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgbGVmdDogRXhwcjtcbiAgICBwdWJsaWMgb3BlcmF0b3I6IFRva2VuO1xuICAgIHB1YmxpYyByaWdodDogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKGxlZnQ6IEV4cHIsIG9wZXJhdG9yOiBUb2tlbiwgcmlnaHQ6IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdExvZ2ljYWxFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuTG9naWNhbCc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIExpc3QgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgdmFsdWU6IEV4cHJbXTtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBFeHByW10pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRMaXN0RXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkxpc3QnO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBMaXRlcmFsIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIHZhbHVlOiAkQW55O1xuXG4gICAgY29uc3RydWN0b3IodmFsdWU6ICRBbnkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRMaXRlcmFsRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkxpdGVyYWwnO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBOZXcgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgY29uc3RydWN0OiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IoY29uc3RydWN0OiBFeHByKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY29uc3RydWN0ID0gY29uc3RydWN0O1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXROZXdFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuTmV3JztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUG9zdGZpeCBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBuYW1lOiBUb2tlbjtcbiAgICBwdWJsaWMgaW5jcmVtZW50OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBUb2tlbiwgaW5jcmVtZW50OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pbmNyZW1lbnQgPSBpbmNyZW1lbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFBvc3RmaXhFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuUG9zdGZpeCc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFJhbmdlIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIHN0YXJ0OiBFeHByO1xuICAgIHB1YmxpYyBlbmQ6IEV4cHI7XG4gICAgcHVibGljIHN0ZXA6IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihzdGFydDogRXhwciwgZW5kOiBFeHByLCBzdGVwOiBFeHByKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgICAgICAgdGhpcy5lbmQgPSBlbmQ7XG4gICAgICAgIHRoaXMuc3RlcCA9IHN0ZXA7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFJhbmdlRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLlJhbmdlJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUmVnRXggZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgdmFsdWU6IFJlZ0V4cDtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBSZWdFeHApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRSZWdFeEV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5SZWdFeCc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNldCBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBlbnRpdHk6IEV4cHI7XG4gICAgcHVibGljIGtleTogRXhwcjtcbiAgICBwdWJsaWMgdmFsdWU6IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihlbnRpdHk6IEV4cHIsIGtleTogRXhwciwgdmFsdWU6IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbnRpdHkgPSBlbnRpdHk7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFNldEV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5TZXQnO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTdXBlciBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBpbmRleDogVG9rZW5bXTtcbiAgICBwdWJsaWMgYXJnczogRXhwcltdO1xuXG4gICAgY29uc3RydWN0b3IoaW5kZXg6IFRva2VuW10sIGFyZ3M6IEV4cHJbXSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuYXJncyA9IGFyZ3M7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFN1cGVyRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLlN1cGVyJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVGVybmFyeSBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBjb25kaXRpb246IEV4cHI7XG4gICAgcHVibGljIHRoZW5FeHByOiBFeHByO1xuICAgIHB1YmxpYyBlbHNlRXhwcjogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmRpdGlvbjogRXhwciwgdGhlbkV4cHI6IEV4cHIsIGVsc2VFeHByOiBFeHByKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgICAgICB0aGlzLnRoZW5FeHByID0gdGhlbkV4cHI7XG4gICAgICAgIHRoaXMuZWxzZUV4cHIgPSBlbHNlRXhwcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VGVybmFyeUV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5UZXJuYXJ5JztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVW5hcnkgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgb3BlcmF0b3I6IFRva2VuO1xuICAgIHB1YmxpYyByaWdodDogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKG9wZXJhdG9yOiBUb2tlbiwgcmlnaHQ6IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFVuYXJ5RXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLlVuYXJ5JztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVmFyaWFibGUgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgbmFtZTogVG9rZW47XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBUb2tlbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRWYXJpYWJsZUV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5WYXJpYWJsZSc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFp0cmluZyBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyB2YWx1ZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFp0cmluZ0V4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5adHJpbmcnO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIEV4cHIgZnJvbSAnLi9leHByZXNzaW9uJztcclxuLy8gaW1wb3J0ICogYXMgUnVudGltZSBmcm9tICcuL3J1bnRpbWUnO1xyXG5pbXBvcnQgKiBhcyBTdG10IGZyb20gJy4vc3RhdGVtZW50JztcclxuaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gJy4vY29uc29sZSc7XHJcbmltcG9ydCB7IFByb3RvdHlwZSB9IGZyb20gJy4vc3RydWN0cy9wcm90b3R5cGUnO1xyXG5pbXBvcnQgeyBSZXR1cm4gfSBmcm9tICcuL3N0cnVjdHMvcmV0dXJuJztcclxuaW1wb3J0IHsgU2NvcGUgfSBmcm9tICcuL3N0cnVjdHMvc2NvcGUnO1xyXG5pbXBvcnQgeyBUb2tlblR5cGUgfSBmcm9tICcuL3Rva2VuJztcclxuaW1wb3J0IHsgJEFueSwgJFZvaWQsICRTdHJpbmcsICROdW1iZXIsICROdWxsLCAkQm9vbGVhbiwgUmFuZ2VWYWx1ZSwgJFJhbmdlLCAkRGljdGlvbmFyeSwgJExpc3QgfSBmcm9tICcuL3R5cGVzJztcclxuZGVjbGFyZSB2YXIgY29uem9sZTogQ29uc29sZTtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnRlcnByZXRlciBpbXBsZW1lbnRzXHJcbiAgICBFeHByLkV4cHJWaXNpdG9yPCRBbnk+LFxyXG4gICAgU3RtdC5TdG10VmlzaXRvcjwkQW55PiB7XHJcbiAgICBwdWJsaWMgZ2xvYmFsID0gbmV3IFNjb3BlKCk7XHJcbiAgICBwdWJsaWMgc2NvcGUgPSB0aGlzLmdsb2JhbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggKSB7XHJcbiAgICAgICAgLy8gdGhpcy5nbG9iYWwuZGVmaW5lKCdlY2hvJywgUnVudGltZS5lY2hvRnVuY3Rpb24oKSk7XHJcbiAgICAgICAgLy8gdGhpcy5nbG9iYWwuZGVmaW5lKCdyYW5kJywgUnVudGltZS5yYW5kRnVuY3Rpb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBldmFsdWF0ZShleHByOiBFeHByLkV4cHIpOiAkQW55IHtcclxuICAgICAgICByZXR1cm4gZXhwci5yZXN1bHQgPSBleHByLmFjY2VwdCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV4ZWN1dGUoc3RtdDogU3RtdC5TdG10KTogJEFueSB7XHJcbiAgICAgICAgcmV0dXJuIHN0bXQucmVzdWx0ID0gc3RtdC5hY2NlcHQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludGVycGV0KHN0YXRlbWVudHM6IFN0bXQuU3RtdFtdKTogU3RtdC5TdG10W10ge1xyXG4gICAgICAgIGZvciAoY29uc3Qgc3RhdGVtZW50IG9mIHN0YXRlbWVudHMpIHtcclxuICAgICAgICAgICAgdGhpcy5leGVjdXRlKHN0YXRlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW50ZXJwcmV0ZXJFcnJvcihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb256b2xlLmxvZyhgW2ludGVycHJldGVyIGVycm9yXSA9PiAke21lc3NhZ2V9YCk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0RXhwcmVzc2lvblN0bXQoc3RtdDogU3RtdC5FeHByZXNzaW9uKTogJEFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGUoc3RtdC5leHByZXNzaW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRQcmludFN0bXQoc3RtdDogU3RtdC5QcmludCk6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmV2YWx1YXRlKHN0bXQuZXhwcmVzc2lvbik7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS50b1N0cmluZygpKTtcclxuICAgICAgICBjb256b2xlLmxvZyhkYXRhLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdFZhclN0bXQoc3RtdDogU3RtdC5WYXIpOiAkQW55IHtcclxuICAgICAgICBsZXQgZGF0YSA9IG5ldyAkTnVsbCgpO1xyXG4gICAgICAgIGlmIChzdG10LmluaXRpYWxpemVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSB0aGlzLmV2YWx1YXRlKHN0bXQuaW5pdGlhbGl6ZXIpO1xyXG4gICAgICAgIH0gLypcclxuICAgICAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEZ1bmN0aW9uRW50aXR5ICYmIGRhdGEubmFtZSA9PT0gXCJsYW1iZGFcIikge1xyXG4gICAgICAgICAgICBkYXRhLm5hbWUgPSBzdG10Lm5hbWUubGV4ZW1lO1xyXG4gICAgICAgICAgICBkYXRhLnByb3RvdHlwZS5zZXQoJ25hbWUnLCBkYXRhLm5hbWUpO1xyXG4gICAgICAgIH0qL1xyXG4gICAgICAgIHRoaXMuc2NvcGUuZGVmaW5lKHN0bXQubmFtZS5sZXhlbWUsIGRhdGEpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdFZhcmlhYmxlRXhwcihleHByOiBFeHByLlZhcmlhYmxlKTogJEFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuZ2V0KGV4cHIubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0UG9zdGZpeEV4cHIoZXhwcjogRXhwci5Qb3N0Zml4KTogJEFueSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNjb3BlLmdldChleHByLm5hbWUpO1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWUgKyBleHByLmluY3JlbWVudDtcclxuICAgICAgICB0aGlzLnNjb3BlLmFzc2lnbihleHByLm5hbWUubGV4ZW1lLCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdExpc3RFeHByKGV4cHI6IEV4cHIuTGlzdCk6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlczogJEFueVtdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBleHByZXNzaW9uIG9mIGV4cHIudmFsdWUpIHtcclxuICAgICAgICAgICAgdmFsdWVzLnB1c2godGhpcy5ldmFsdWF0ZShleHByZXNzaW9uKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgJExpc3QodmFsdWVzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRadHJpbmdFeHByKGV4cHI6IEV4cHIuWnRyaW5nKTogJEFueSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkU3RyaW5nKGV4cHIudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRSZWdFeEV4cHIoZXhwcjogRXhwci5SZWdFeCk6ICRBbnkge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeEVudGl0eShleHByLnZhbHVlKTtcclxuICAgICAgICAqLyByZXR1cm4gbmV3ICROdWxsKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyB2aXNpdEFzc2lnbkV4cHIoZXhwcjogRXhwci5Bc3NpZ24pOiAkQW55IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZXZhbHVhdGUoZXhwci52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zY29wZS5hc3NpZ24oZXhwci5uYW1lLmxleGVtZSwgdmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRCaW5hcnlFeHByKGV4cHI6IEV4cHIuQmluYXJ5KTogJEFueSB7XHJcbiAgICAgICAgbGV0IGxlZnQgPSB0aGlzLmV2YWx1YXRlKGV4cHIubGVmdCkudmFsdWU7XHJcbiAgICAgICAgbGV0IHJpZ2h0ID0gdGhpcy5ldmFsdWF0ZShleHByLnJpZ2h0KS52YWx1ZTtcclxuICAgICAgICBsZWZ0ID0gbGVmdCBpbnN0YW5jZW9mICRTdHJpbmcgPyBsZWZ0LnRvU3RyaW5nKCkgOiBsZWZ0O1xyXG4gICAgICAgIHJpZ2h0ID0gcmlnaHQgaW5zdGFuY2VvZiAkU3RyaW5nID8gcmlnaHQudG9TdHJpbmcoKSA6IHJpZ2h0O1xyXG4gICAgICAgIHN3aXRjaCAoZXhwci5vcGVyYXRvci50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLk1pbnVzOlxyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5NaW51c0VxdWFsOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVtYmVyKGxlZnQgLSByaWdodCk7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlNsYXNoOlxyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5TbGFzaEVxdWFsOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVtYmVyKGxlZnQgLyByaWdodCk7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlN0YXI6XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlN0YXJFcXVhbDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJE51bWJlcihsZWZ0ICogcmlnaHQpO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5QZXJjZW50OlxyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5QZXJjZW50RXF1YWw6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICROdW1iZXIobGVmdCAlIHJpZ2h0KTtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuUGx1czpcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuUGx1c0VxdWFsOlxyXG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTihsZWZ0KSAmJiAhaXNOYU4ocmlnaHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVtYmVyKGxlZnQgKyByaWdodCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgaWYgKGxlZnQgaW5zdGFuY2VvZiBBcnJheUVudGl0eSAmJiByaWdodCBpbnN0YW5jZW9mIEFycmF5RW50aXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBBcnJheUVudGl0eShsZWZ0LnZhbHVlcy5jb25jYXQocmlnaHQudmFsdWVzKSk7XHJcbiAgICAgICAgICAgICAgICB9ICovXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPGFueT4gbmV3ICRTdHJpbmcobGVmdCBhcyBzdHJpbmcgKyByaWdodCBhcyBzdHJpbmcpO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5QaXBlOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVtYmVyKGxlZnQgfCByaWdodCk7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkNhcmV0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVtYmVyKGxlZnQgXiByaWdodCk7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkdyZWF0ZXI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKGxlZnQgPiByaWdodCk7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkdyZWF0ZXJFcXVhbDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4obGVmdCA+PSByaWdodCk7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkxlc3M6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKGxlZnQgPCByaWdodCk7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkxlc3NFcXVhbDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4obGVmdCA+PSByaWdodCk7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkVxdWFsRXF1YWw6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKGxlZnQgPT09IHJpZ2h0KTtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuQmFuZ0VxdWFsOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbihsZWZ0ICE9PSByaWdodCk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb256b2xlLndhcm4oZXhwcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8gdW5yZWFjaGFibGVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRMb2dpY2FsRXhwcihleHByOiBFeHByLkxvZ2ljYWwpOiAkQW55IHtcclxuICAgICAgICBpZiAoZXhwci5vcGVyYXRvci50eXBlID09PSBUb2tlblR5cGUuQW5kKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlKGV4cHIubGVmdCkgJiYgdGhpcy5ldmFsdWF0ZShleHByLnJpZ2h0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZShleHByLmxlZnQpIHx8IHRoaXMuZXZhbHVhdGUoZXhwci5yaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdFRlcm5hcnlFeHByKGV4cHI6IEV4cHIuVGVybmFyeSk6ICRBbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlKGV4cHIuY29uZGl0aW9uKS5pc1RydXRoeSgpID8gdGhpcy5ldmFsdWF0ZShleHByLnRoZW5FeHByKSA6IHRoaXMuZXZhbHVhdGUoZXhwci5lbHNlRXhwcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0R3JvdXBpbmdFeHByKGV4cHI6IEV4cHIuR3JvdXBpbmcpOiAkQW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZShleHByLmV4cHJlc3Npb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdExpdGVyYWxFeHByKGV4cHI6IEV4cHIuTGl0ZXJhbCk6ICRBbnkge1xyXG4gICAgICAgIHJldHVybiBleHByLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdFVuYXJ5RXhwcihleHByOiBFeHByLlVuYXJ5KTogJEFueSB7XHJcbiAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLmV2YWx1YXRlKGV4cHIucmlnaHQpLnZhbHVlO1xyXG4gICAgICAgIHN3aXRjaCAoZXhwci5vcGVyYXRvci50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLk1pbnVzOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVtYmVyKC1OdW1iZXIocmlnaHQpKTtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuQmFuZzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4oIUJvb2xlYW4ocmlnaHQpKTtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuUGx1c1BsdXM6XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmNWYWx1ZSA9IE51bWJlcihyaWdodCkgKyAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY29wZS5hc3NpZ24oKDxFeHByLlZhcmlhYmxlPiBleHByLnJpZ2h0KS5uYW1lLmxleGVtZSwgaW5jVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVtYmVyKGluY1ZhbHVlKTtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuTWludXNNaW51czpcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlY1ZhbHVlID0gTnVtYmVyKHJpZ2h0KSAtIDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3BlLmFzc2lnbigoPEV4cHIuVmFyaWFibGU+IGV4cHIucmlnaHQpLm5hbWUubGV4ZW1lLCBkZWNWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICROdW1iZXIoZGVjVmFsdWUpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7IC8vIHNob3VsZCBiZSB1bnJlYWNoYWJsZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXhlY3V0ZUJsb2NrKHN0YXRlbWVudHM6IFN0bXQuU3RtdFtdLCBuZXh0U2NvcGU6IFNjb3BlKTogJEFueSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFNjb3BlID0gdGhpcy5zY29wZTtcclxuICAgICAgICB0aGlzLnNjb3BlID0gbmV4dFNjb3BlO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc3RhdGVtZW50IG9mIHN0YXRlbWVudHMpIHtcclxuICAgICAgICAgICAgc3RhdGVtZW50LnJlc3VsdCA9IHRoaXMuZXhlY3V0ZShzdGF0ZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjb3BlID0gY3VycmVudFNjb3BlO1xyXG4gICAgICAgIHJldHVybiBuZXcgJFZvaWQoJ2Jsb2NrJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0QmxvY2tTdG10KHN0bXQ6IFN0bXQuQmxvY2spOiAkQW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlQmxvY2soc3RtdC5zdGF0ZW1lbnRzLCBuZXcgU2NvcGUodGhpcy5zY29wZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdElmU3RtdChzdG10OiBTdG10LklmKTogJEFueSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXZhbHVhdGUoc3RtdC5jb25kaXRpb24pLmlzVHJ1dGh5KCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShzdG10LnRoZW5TdG10KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHN0bXQuZWxzZVN0bXQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShzdG10LmVsc2VTdG10KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0V2hpbGVTdG10KHN0bXQ6IFN0bXQuV2hpbGUpOiAkQW55IHtcclxuICAgICAgICB3aGlsZSAodGhpcy5ldmFsdWF0ZShzdG10LmNvbmRpdGlvbikuaXNUcnV0aHkoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmV4ZWN1dGUoc3RtdC5sb29wKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkVm9pZCgnd2hpbGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXREb1doaWxlU3RtdChzdG10OiBTdG10LkRvV2hpbGUpOiAkQW55IHtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhlY3V0ZShzdG10Lmxvb3ApO1xyXG4gICAgICAgIH0gd2hpbGUgKHRoaXMuZXZhbHVhdGUoc3RtdC5jb25kaXRpb24pLmlzVHJ1dGh5KCkpO1xyXG4gICAgICAgIHJldHVybiBuZXcgJFZvaWQoJ2Rvd2hpbGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRDYWxsRXhwcihleHByOiBFeHByLkNhbGwpOiAkQW55IHtcclxuICAgICAgICAvKlxyXG4gICAgICAgIGNvbnN0IGNhbGxlZSA9IHRoaXMuZXZhbHVhdGUoZXhwci5jYWxsZWUpO1xyXG4gICAgICAgIGNvbnN0IGFyZ3MgPSBbXTtcclxuICAgICAgICBsZXQgdGhpejogYW55ID0gbnVsbDtcclxuICAgICAgICBpZiAoZXhwci5jYWxsZWUgaW5zdGFuY2VvZiBFeHByLkdldCkge1xyXG4gICAgICAgICAgICB0aGl6ID0gdGhpcy5ldmFsdWF0ZShleHByLmNhbGxlZS5lbnRpdHkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXhwci50aGl6ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXogPSBleHByLnRoaXo7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgYXJndW1lbnQgb2YgZXhwci5hcmdzKSB7XHJcbiAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmV2YWx1YXRlKGFyZ3VtZW50KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIShjYWxsZWUgaW5zdGFuY2VvZiBDYWxsYWJsZUVudGl0eSkgJiZcclxuICAgICAgICAgICAgIShjYWxsZWUgaW5zdGFuY2VvZiBJbnRlcm5hbEVudGl0eSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5pbnRlcnByZXRlckVycm9yKGAke2NhbGxlZX0gaXMgbm90IGEgZnVuY3Rpb25gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZnVuYyA9IGNhbGxlZSBhcyBDYWxsYWJsZUVudGl0eTtcclxuICAgICAgICBpZiAoYXJncy5sZW5ndGggIT09IGZ1bmMuYXJpdHkoKSAmJiBmdW5jLmFyaXR5KCkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnpvbGUud2FybihgV2FybmluZyBhdCAoJHtleHByLnBhcmVuLmxpbmV9KTogJHtjYWxsZWV9IG1pc21hdGNoZWQgYXJndW1lbnQgbGVuZ3RoOyBcXG4gRXhwZWN0ZWQgJHtmdW5jLmFyaXR5KCl9IGJ1dCBnb3QgJHthcmdzLmxlbmd0aH0gYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmdW5jLmNhbGwodGhpcywgdGhpeiwgYXJncyk7XHJcbiAgICAgICAgKi8gcmV0dXJuIG5ldyAkTnVsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdFN1cGVyRXhwcihleHByOiBFeHByLlN1cGVyKTogJEFueSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICBjb25zdCB0aGl6OiBJbnN0YW5jZUVudGl0eSA9IHRoaXMuc2NvcGUuZmlyc3QoJ3RoaXMnKTtcclxuICAgICAgICBpZiAoIXRoaXopIHtcclxuICAgICAgICAgICAgY29uem9sZS5lcnJvcihgc3VwZXIgY2FuIG9ubHkgYmUgY2FsbGVkIG9uIGNoaWxkIGluc3RhbmNlc2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjbGF6ejogRnVuY3Rpb25FbnRpdHkgPSB0aGlzLnNjb3BlLm9idGFpbih0aGl6Lmluc3RhbmNlb2YpO1xyXG4gICAgICAgIGlmICghY2xhenopIHtcclxuICAgICAgICAgICAgY29uem9sZS5lcnJvcihgJHt0aGl6fSBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgYW4gZW50aXR5YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBhcmVudDogRnVuY3Rpb25FbnRpdHkgPSBjbGF6ei5wYXJlbnQ7XHJcbiAgICAgICAgaWYgKCFwYXJlbnQpIHtcclxuICAgICAgICAgICAgY29uem9sZS5lcnJvcihgJHt0aGl6fSBlbnRpdHkgaGFzIG5vIHBhcmVudGApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbWV0aG9kOiBGdW5jdGlvbkVudGl0eSA9IG51bGw7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgZXhwci5pbmRleCkge1xyXG4gICAgICAgICAgICAvLyBtZXRob2QgPSBwYXJlbnQuZ2V0KGtleS5sZXhlbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhcmdzID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBhcmd1bWVudCBvZiBleHByLmFyZ3MpIHtcclxuICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZXZhbHVhdGUoYXJndW1lbnQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1ldGhvZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kLmNhbGwodGhpcywgdGhpeiwgYXJncyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5jYWxsKHRoaXMsIHRoaXosIGFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAqLyByZXR1cm4gbmV3ICROdWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0TmV3RXhwcihleHByOiBFeHByLk5ldyk6ICRBbnkge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgY29uc3QgY29uc3RydWN0ID0gZXhwci5jb25zdHJ1Y3QgYXMgRXhwci5DYWxsO1xyXG4gICAgICAgIGNvbnN0IGNhbGxlZSA9IHRoaXMuZXZhbHVhdGUoY29uc3RydWN0LmNhbGxlZSk7XHJcbiAgICAgICAgY29uc3QgbmV3SW5zdGFuY2UgPSBuZXcgSW5zdGFuY2VFbnRpdHkoPGFueT4gY2FsbGVlKTtcclxuICAgICAgICBjb25zdHJ1Y3QudGhpeiA9IG5ld0luc3RhbmNlO1xyXG4gICAgICAgIHRoaXMuZXZhbHVhdGUoY29uc3RydWN0KTtcclxuICAgICAgICByZXR1cm4gbmV3SW5zdGFuY2U7XHJcbiAgICAgICAgKi8gcmV0dXJuIG5ldyAkTnVsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdERpY3Rpb25hcnlFeHByKGV4cHI6IEV4cHIuRGljdGlvbmFyeSkge1xyXG4gICAgICAgIGNvbnN0IGRpY3QgPSBuZXcgJERpY3Rpb25hcnkobmV3IE1hcCgpKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIGV4cHIucHJvcGVydGllcykge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgID0gdGhpcy5ldmFsdWF0ZSgocHJvcGVydHkgYXMgRXhwci5TZXQpLmtleSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5ldmFsdWF0ZSgocHJvcGVydHkgYXMgRXhwci5TZXQpLnZhbHVlKTtcclxuICAgICAgICAgICAgZGljdC5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkaWN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdEtleUV4cHIoZXhwcjogRXhwci5LZXkpOiAkQW55IHtcclxuICAgICAgICByZXR1cm4gbmV3ICRBbnkoZXhwci5uYW1lLmxleGVtZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyB2aXNpdEdldEV4cHIoZXhwcjogRXhwci5HZXQpOiAkQW55IHtcclxuICAgICAgICBjb25zdCBlbnRpdHkgPSB0aGlzLmV2YWx1YXRlKGV4cHIuZW50aXR5KTtcclxuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmV2YWx1YXRlKGV4cHIua2V5KTtcclxuICAgICAgICByZXR1cm4gZW50aXR5LmdldChrZXkpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRTZXRFeHByKGV4cHI6IEV4cHIuU2V0KTogJEFueSB7XHJcbiAgICAgICAgY29uc3QgZW50aXR5ID0gdGhpcy5ldmFsdWF0ZShleHByLmVudGl0eSk7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5ldmFsdWF0ZShleHByLmtleSk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmV2YWx1YXRlKGV4cHIudmFsdWUpO1xyXG4gICAgICAgIGVudGl0eS5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdEZ1bmNTdG10KHN0bXQ6IFN0bXQuRnVuYyk6ICRBbnkge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgY29uc3QgZnVuYzogRnVuY3Rpb25FbnRpdHkgPSBuZXcgRnVuY3Rpb25FbnRpdHkoc3RtdCwgdGhpcy5zY29wZSk7XHJcbiAgICAgICAgdGhpcy5zY29wZS5kZWZpbmUoc3RtdC5uYW1lLmxleGVtZSwgZnVuYyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgKi8gcmV0dXJuIG5ldyAkTnVsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdENsYXNzU3RtdChzdG10OiBTdG10LkNsYXNzKTogJEFueSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICBsZXQgY29uc3RydWN0ID0gc3RtdC5tZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUubGV4ZW1lID09PSBcImNvbnN0cnVjdG9yXCIpO1xyXG4gICAgICAgIGNvbnN0IG1ldGhvZHMgPSBzdG10Lm1ldGhvZHMuZmlsdGVyKChtZXRob2QpID0+IG1ldGhvZC5uYW1lLmxleGVtZSAhPT0gXCJjb25zdHJ1Y3RvclwiKTtcclxuXHJcbiAgICAgICAgaWYgKCFjb25zdHJ1Y3QpIHtcclxuICAgICAgICAgICAgY29uc3RydWN0ID0gbmV3IFN0bXQuRnVuYyhzdG10Lm5hbWUsIFtdLCBbXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3RydWN0Lm5hbWUgPSBzdG10Lm5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBmdW5jOiBGdW5jdGlvbkVudGl0eSA9IG5ldyBGdW5jdGlvbkVudGl0eShjb25zdHJ1Y3QsIHRoaXMuc2NvcGUpO1xyXG4gICAgICAgIGxldCBwYXJlbnQ6IEZ1bmN0aW9uRW50aXR5ID0gbnVsbDtcclxuICAgICAgICBpZiAoc3RtdC5wYXJlbnQpIHtcclxuICAgICAgICAgICAgcGFyZW50ID0gdGhpcy5zY29wZS5nZXQoc3RtdC5wYXJlbnQpO1xyXG4gICAgICAgICAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jLnBhcmVudCA9IHBhcmVudDtcclxuICAgICAgICAgICAgICAgIGZ1bmMucHJvdG90eXBlID0gbmV3IFByb3RvdHlwZShwYXJlbnQucHJvcGVydGllcywgcGFyZW50LnByb3RvdHlwZSwgZnVuYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBtZXRob2Qgb2YgbWV0aG9kcykge1xyXG4gICAgICAgICAgICBmdW5jLnByb3BlcnRpZXMuc2V0KG1ldGhvZC5uYW1lLmxleGVtZSwgbmV3IEZ1bmN0aW9uRW50aXR5KG1ldGhvZCwgdGhpcy5zY29wZSwgcGFyZW50KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNjb3BlLnNldChzdG10Lm5hbWUubGV4ZW1lLCBmdW5jKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAqLyByZXR1cm4gbmV3ICROdWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0TGFtYmRhRXhwcihleHByOiBFeHByLkxhbWJkYSk6ICRBbnkge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgY29uc3QgbGFtYmRhOiBTdG10LkZ1bmMgPSBleHByLmxhbWJkYSBhcyBTdG10LkZ1bmM7XHJcbiAgICAgICAgY29uc3QgZnVuYzogRnVuY3Rpb25FbnRpdHkgPSBuZXcgRnVuY3Rpb25FbnRpdHkobGFtYmRhLCB0aGlzLnNjb3BlKTtcclxuICAgICAgICByZXR1cm4gZnVuYztcclxuICAgICAgICAqLyByZXR1cm4gbmV3ICROdWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0UmV0dXJuU3RtdChzdG10OiBTdG10LlJldHVybik6ICRBbnkge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgbGV0IHZhbHVlID0gbnVsbDtcclxuICAgICAgICBpZiAoc3RtdC52YWx1ZSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZXZhbHVhdGUoc3RtdC52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBSZXR1cm4odmFsdWUpO1xyXG4gICAgICAgICovIHJldHVybiBuZXcgJE51bGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRSYW5nZUV4cHIoZXhwcjogRXhwci5SYW5nZSk6ICRBbnkge1xyXG4gICAgICAgIHJldHVybiBuZXcgJFJhbmdlKG5ldyBSYW5nZVZhbHVlKFxyXG4gICAgICAgICAgICBleHByLnN0YXJ0ID8gdGhpcy5ldmFsdWF0ZShleHByLnN0YXJ0KS52YWx1ZSA6IG51bGwsXHJcbiAgICAgICAgICAgIGV4cHIuZW5kID8gdGhpcy5ldmFsdWF0ZShleHByLmVuZCkudmFsdWUgOiBudWxsLFxyXG4gICAgICAgICAgICBleHByLnN0ZXAgPyB0aGlzLmV2YWx1YXRlKGV4cHIuc3RlcCkudmFsdWUgOiBudWxsXHJcbiAgICAgICAgKSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCAqIGFzIEV4cHIgZnJvbSAnLi9leHByZXNzaW9uJztcclxuaW1wb3J0ICogYXMgU3RtdCBmcm9tICcuL3N0YXRlbWVudCc7XHJcbmltcG9ydCB7IENvbnNvbGUgfSBmcm9tICcuL2NvbnNvbGUnO1xyXG5pbXBvcnQgeyBUb2tlbiwgVG9rZW5UeXBlIH0gZnJvbSAnLi90b2tlbic7XHJcbmltcG9ydCB7ICRCb29sZWFuLCAkTnVtYmVyLCAkTnVsbCB9IGZyb20gJy4vdHlwZXMnO1xyXG5kZWNsYXJlIHZhciBjb256b2xlOiBDb25zb2xlO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnNlciB7XHJcbiAgICBwcml2YXRlIGN1cnJlbnQgPSAwO1xyXG4gICAgcHJpdmF0ZSB0b2tlbnM6IFRva2VuW107XHJcblxyXG4gICAgY29uc3RydWN0b3IodG9rZW5zOiBUb2tlbltdKSB7XHJcbiAgICAgICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBhcnNlKCk6IFN0bXQuU3RtdFtdIHtcclxuICAgICAgIGNvbnN0IHN0YXRlbWVudHM6IFN0bXQuU3RtdFtdID0gW107XHJcbiAgICAgICB3aGlsZSAoIXRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICBzdGF0ZW1lbnRzLnB1c2godGhpcy5kZWNsYXJhdGlvbigpKTtcclxuICAgICAgIH1cclxuICAgICAgIHJldHVybiBzdGF0ZW1lbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWF0Y2goLi4udHlwZXM6IFRva2VuVHlwZVtdKTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChjb25zdCB0eXBlIG9mIHR5cGVzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrKHR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkdmFuY2UoKTogVG9rZW4ge1xyXG4gICAgICAgIGlmICghdGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJldmlvdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBlZWsoKTogVG9rZW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmN1cnJlbnRdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJldmlvdXMoKTogVG9rZW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmN1cnJlbnQgLSAxXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrKHR5cGU6IFRva2VuVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBlZWsoKS50eXBlID09PSB0eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZW9mKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrKFRva2VuVHlwZS5Fb2YpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29uc3VtZSh0eXBlOiBUb2tlblR5cGUsIG1lc3NhZ2U6IHN0cmluZyk6IFRva2VuIHtcclxuICAgICAgICBpZiAodGhpcy5jaGVjayh0eXBlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUVycm9yKHRoaXMucHJldmlvdXMoKSwgbWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHRyYVNlbWljb2xvbigpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBtYXRjaCA9IHRoaXMubWF0Y2goVG9rZW5UeXBlLlNlbWljb2xvbik7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2soVG9rZW5UeXBlLlNlbWljb2xvbikpIHtcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuY2hlY2soVG9rZW5UeXBlLlNlbWljb2xvbikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuU2VtaWNvbG9uLCAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyc2VFcnJvcih0b2tlbjogVG9rZW4sIG1lc3NhZ2U6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgaWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5Fb2YpIHtcclxuICAgICAgICAgICAgY29uem9sZS5lcnJvcihgcGFyc2UgZXJyb3IgYXQgKCR7dG9rZW4ubGluZX0pOiBhdCBlbmQgJHttZXNzYWdlfWApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnpvbGUuZXJyb3IoYFtsaW5lICgke3Rva2VuLmxpbmV9KSBwYXJzZSBlcnJvciBhdCBcIiR7dG9rZW4ubGV4ZW1lfVwiXSA9PiAke21lc3NhZ2V9YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKCdFcnJvciBwYXJzaW5nJyk7XHJcbiAgICAgICAgLy8gdW5yZWFjaGFibGUgY29kZVxyXG4gICAgICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLlBhbmljLCAnZXJyb3InLCAnZXJyb3InLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBhcnNlV2FybmluZyhtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICBjb256b2xlLndhcm4oYFtsaW5lICgke3Rva2VuLmxpbmV9KSBwYXJzZSB3YXJuaW5nIGF0IFwiJHt0b2tlbi5sZXhlbWV9XCJdID0+ICR7bWVzc2FnZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN5bmNocm9uaXplKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG5cclxuICAgICAgICB3aGlsZSAoIXRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJldmlvdXMoKS50eXBlID09PSBUb2tlblR5cGUuU2VtaWNvbG9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5wZWVrKCkudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuQ2xhc3M6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5GdW5jdGlvbjpcclxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlZhcjpcclxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkZvcjpcclxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLklmOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuV2hpbGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5QcmludDpcclxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlJldHVybjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGVjbGFyYXRpb24oKTogU3RtdC5TdG10IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuQ2xhc3MpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jbGFzc0RlY2xhcmF0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkZ1bmN0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnVuY0RlY2xhcmF0aW9uKFwiZnVuY3Rpb25cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlZhcikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhckRlY2xhcmF0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50KCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciBwYXJzaW5nLiBFeGVjdXRpb24gaGFzIGJlZW4gc3RvcHBlZCcpO1xyXG4gICAgICAgICAgICAvLyBUT0RPOiByZWVuYWJsZSBzeW5jaHJvbml6ZVxyXG4gICAgICAgICAgICAvLyB0aGlzLnN5bmNocm9uaXplKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsYXNzRGVjbGFyYXRpb24oKTogU3RtdC5DbGFzcyB7XHJcbiAgICAgICAgLypcclxuICAgICAgICBjb25zdCBuYW1lOiBUb2tlbiA9IHRoaXMuY29uc3VtZShUb2tlblR5cGUuSWRlbnRpZmllciwgYEV4cGVjdGVkIGEgY2xhc3MgbmFtZWApO1xyXG4gICAgICAgIGxldCBwYXJlbnQ6IFRva2VuID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuRXh0ZW5kcykpIHtcclxuICAgICAgICAgICAgcGFyZW50ICA9IHRoaXMuY29uc3VtZShUb2tlblR5cGUuSWRlbnRpZmllciwgYEV4cGVjdGVkIGEgcGFyZW50IG5hbWVgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5MZWZ0QnJhY2UsIGBFeHBlY3RlZCBcIntcIiBhZnRlciBjbGFzcyBuYW1lYCk7XHJcbiAgICAgICAgY29uc3QgbWV0aG9kczogU3RtdC5GdW5jW10gPSBbXTtcclxuXHJcbiAgICAgICAgd2hpbGUgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5SaWdodEJyYWNlKSAmJiAhdGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGVjayhUb2tlblR5cGUuRnVuY3Rpb24pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLkZ1bmN0aW9uLCAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWV0aG9kcy5wdXNoKHRoaXMuZnVuY0RlY2xhcmF0aW9uKFwibWV0aG9kXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuUmlnaHRCcmFjZSwgYEV4cGVjdGVkIFwifVwiIGFmdGVyIGNsYXNzIFwiJHtuYW1lLmxpdGVyYWx9XCIgbWV0aG9kc2ApO1xyXG4gICAgICAgIGlmICh0aGlzLmV4dHJhU2VtaWNvbG9uKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJzZVdhcm5pbmcoYFVubmVjZXNzYXJ5IHNlbWljb2xvbiBhZnRlciBjbGFzcyAke25hbWUubGV4ZW1lfSBkZWNsYXJhdGlvbmApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFN0bXQuQ2xhc3MobmFtZSwgcGFyZW50LCBtZXRob2RzKTtcclxuICAgICAgICAqLyByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZ1bmNEZWNsYXJhdGlvbihraW5kOiBzdHJpbmcpOiBTdG10LkZ1bmMge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgY29uc3QgbmFtZTogVG9rZW4gPSB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLklkZW50aWZpZXIsIGBFeHBlY3RlZCBhICR7a2luZH0gbmFtZWApO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZ1bmNQYXJhbXNCb2R5KG5hbWUsIGtpbmQpO1xyXG4gICAgICAgICovIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZnVuY1BhcmFtcygpOiBUb2tlbltdIHtcclxuICAgICAgICBjb25zdCBwYXJhbXM6IFRva2VuW10gPSBbXTtcclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLlJpZ2h0UGFyZW4pKSB7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMubGVuZ3RoID49IDI1NSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2VFcnJvcih0aGlzLnBlZWsoKSwgYFBhcmFtZXRlciBjb3VudCBleGNlZWRzIDI1NWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnB1c2godGhpcy5jb25zdW1lKFRva2VuVHlwZS5JZGVudGlmaWVyLCBgRXhwZWN0ZWQgYSBwYXJhbWV0ZXIgbmFtZWApKTtcclxuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuQ29tbWEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5SaWdodFBhcmVuLCBgRXhwZWN0IFwiKVwiIGFmdGVyIHBhcmFtZXRlcnNgKTtcclxuICAgICAgICByZXR1cm4gcGFyYW1zO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZnVuY1BhcmFtc0JvZHkobmFtZTogVG9rZW4sIGtpbmQ6IHN0cmluZyk6IFN0bXQuRnVuYyB7XHJcbiAgICAgICAgLypcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLkxlZnRQYXJlbiwgYEV4cGVjdGVkIFwiKFwiIGFmdGVyICR7a2luZH1gKTtcclxuICAgICAgICBjb25zdCBwYXJhbXM6IFRva2VuW10gPSB0aGlzLmZ1bmNQYXJhbXMoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkxlZnRCcmFjZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgYm9keTogU3RtdC5TdG10W10gPSB0aGlzLmJsb2NrKCk7XHJcbiAgICAgICAgICAgIGlmIChuYW1lLnR5cGUgIT09IFRva2VuVHlwZS5MYW1iZGEgJiYgdGhpcy5leHRyYVNlbWljb2xvbigpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnNlV2FybmluZyhgVW5uZWNlc3Nhcnkgc2VtaWNvbG9uIGFmdGVyIGZ1bmN0aW9uICR7bmFtZS5sZXhlbWV9IGRlY2xhcmF0aW9uYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdG10LkZ1bmMobmFtZSwgcGFyYW1zLCBib2R5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5BcnJvdykpIHtcclxuICAgICAgICAgICAgY29uc3QgYm9keTogU3RtdC5TdG10W10gPSBbXTtcclxuICAgICAgICAgICAgbGV0IGFycm93OiBFeHByLkV4cHI7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleXdvcmQ6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLlNlbWljb2xvbikpIHtcclxuICAgICAgICAgICAgICAgIGFycm93ID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tYXRjaChUb2tlblR5cGUuU2VtaWNvbG9uKTtcclxuICAgICAgICAgICAgYm9keS5wdXNoKG5ldyBTdG10LlJldHVybihrZXl3b3JkLCBhcnJvdykpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFN0bXQuRnVuYyhuYW1lLCBwYXJhbXMsIGJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLkxlZnRCcmFjZSwgYEV4cGVjdCBcIntcIiBiZWZvcmUgJHtraW5kfSBib2R5YCk7XHJcbiAgICAgICAgKi8gcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB2YXJEZWNsYXJhdGlvbigpOiBTdG10LlN0bXQge1xyXG4gICAgICAgIGNvbnN0IG5hbWU6IFRva2VuID0gdGhpcy5jb25zdW1lKFRva2VuVHlwZS5JZGVudGlmaWVyLCBgRXhwZWN0ZWQgYSB2YXJpYWJsZSBuYW1lYCk7XHJcbiAgICAgICAgbGV0IGluaXRpYWxpemVyOiBFeHByLkV4cHIgID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuRXF1YWwpKSB7XHJcbiAgICAgICAgICAgIGluaXRpYWxpemVyID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuU2VtaWNvbG9uLCBgRXhwZWN0ZWQgc2VtaWNvbG9uIFwiO1wiIGFmdGVyIGEgdmFsdWUuYCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5WYXIobmFtZSwgbnVsbCwgaW5pdGlhbGl6ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGVtZW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5JZikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWZTdGF0ZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlByaW50KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmludFN0YXRlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuRG8pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRvV2hpbGVTdGF0ZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLldoaWxlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy53aGlsZVN0YXRlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuRm9yKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JTdGF0ZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkxlZnRCcmFjZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdG10LkJsb2NrKHRoaXMuYmxvY2soKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5SZXR1cm4pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJldHVyblN0YXRlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5leHByZXNzaW9uU3RhdGVtZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpZlN0YXRlbWVudCgpOiBTdG10LlN0bXQge1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuTGVmdFBhcmVuLCBgRXhwZWN0ZWQgXCIoXCIgYWZ0ZXIgYW4gaWZgKTtcclxuICAgICAgICBjb25zdCBjb25kaXRpb246IEV4cHIuRXhwciA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuUmlnaHRQYXJlbiwgYEV4cGVjdGVkIFwiKVwiIGFmdGVyIGlmIGNvbmRpdGlvbmApO1xyXG4gICAgICAgIGNvbnN0IHRoZW5TdG10OiBTdG10LlN0bXQgPSB0aGlzLnN0YXRlbWVudCgpO1xyXG4gICAgICAgIGxldCBlbHNlU3RtdDogU3RtdC5TdG10ID0gIG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkVsc2UpKSB7XHJcbiAgICAgICAgICAgIGVsc2VTdG10ID0gdGhpcy5zdGF0ZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdG10LklmKGNvbmRpdGlvbiwgdGhlblN0bXQsIGVsc2VTdG10KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHdoaWxlU3RhdGVtZW50KCk6IFN0bXQuU3RtdCB7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5MZWZ0UGFyZW4sIGBFeHBlY3RlZCBcIihcIiBhZnRlciBhIHdoaWxlIHN0YXRlbWVudGApO1xyXG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbjogRXhwci5FeHByID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5SaWdodFBhcmVuLCBgRXhwZWN0ZWQgXCIpXCIgYWZ0ZXIgd2hpbGUgY29uZGl0aW9uYCk7XHJcbiAgICAgICAgY29uc3QgbG9vcDogU3RtdC5TdG10ID0gdGhpcy5zdGF0ZW1lbnQoKTtcclxuICAgICAgICByZXR1cm4gbmV3IFN0bXQuV2hpbGUoY29uZGl0aW9uLCBsb29wKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZvclN0YXRlbWVudCgpOiBTdG10LlN0bXQge1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuTGVmdFBhcmVuLCBgRXhwZWN0ZWQgXCIoXCIgYWZ0ZXIgYSBmb3Igc3RhdGVtZW50YCk7XHJcblxyXG4gICAgICAgIGxldCBpbml0aWFsaXplcjogU3RtdC5TdG10O1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5TZW1pY29sb24pKSB7XHJcbiAgICAgICAgICAgIGluaXRpYWxpemVyID0gbnVsbDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlZhcikpIHtcclxuICAgICAgICAgICAgaW5pdGlhbGl6ZXIgPSB0aGlzLnZhckRlY2xhcmF0aW9uKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW5pdGlhbGl6ZXIgPSB0aGlzLmV4cHJlc3Npb25TdGF0ZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvbmRpdGlvbjogRXhwci5FeHByO1xyXG4gICAgICAgIGlmICghdGhpcy5jaGVjayhUb2tlblR5cGUuU2VtaWNvbG9uKSkge1xyXG4gICAgICAgICAgICBjb25kaXRpb24gPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5TZW1pY29sb24sIGBFeHBlY3RlZCBcIjtcIiBhZnRlciBsb29wIGNvbmRpdGlvbmApO1xyXG4gICAgICAgIGxldCBpbmNyZW1lbnQ6IEV4cHIuRXhwcjtcclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLlJpZ2h0UGFyZW4pKSB7XHJcbiAgICAgICAgICAgIGluY3JlbWVudCA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlJpZ2h0UGFyZW4sIGBFeHBlY3RlZCBcIjtcIiBhZnRlciBsb29wIGNvbmRpdGlvbmApO1xyXG4gICAgICAgIGxldCBib2R5OiBTdG10LlN0bXQgPSB0aGlzLnN0YXRlbWVudCgpO1xyXG4gICAgICAgIGlmIChpbmNyZW1lbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgYm9keSA9IG5ldyBTdG10LkJsb2NrKFtcclxuICAgICAgICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICAgICAgICBuZXcgU3RtdC5FeHByZXNzaW9uKGluY3JlbWVudClcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25kaXRpb24gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uZGl0aW9uID0gbmV3IEV4cHIuTGl0ZXJhbChuZXcgJEJvb2xlYW4odHJ1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib2R5ID0gbmV3IFN0bXQuV2hpbGUoY29uZGl0aW9uLCBib2R5KTtcclxuICAgICAgICBpZiAoaW5pdGlhbGl6ZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgYm9keSA9IG5ldyBTdG10LkJsb2NrKFtcclxuICAgICAgICAgICAgICAgIGluaXRpYWxpemVyLFxyXG4gICAgICAgICAgICAgICAgYm9keVxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJvZHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkb1doaWxlU3RhdGVtZW50KCk6IFN0bXQuU3RtdCB7XHJcbiAgICAgICAgY29uc3QgbG9vcDogU3RtdC5TdG10ID0gdGhpcy5zdGF0ZW1lbnQoKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLldoaWxlLCBgRXhwZWN0ZWQgY29uZGl0aW9uIGFmdGVyIGRvIHN0YXRlbWVudGApO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuTGVmdFBhcmVuLCBgRXhwZWN0ZWQgXCIoXCIgYWZ0ZXIgYSB3aGlsZWApO1xyXG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbjogRXhwci5FeHByID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5SaWdodFBhcmVuLCBgRXhwZWN0ZWQgXCIpXCIgYWZ0ZXIgd2hpbGUgY29uZGl0aW9uYCk7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5TZW1pY29sb24sIGBFeHBlY3RlZCBzZW1pY29sb24gXCI7XCIgYWZ0ZXIgYSBkbyB3aGlsZSBjb25kaXRpb25gKTtcclxuICAgICAgICByZXR1cm4gbmV3IFN0bXQuRG9XaGlsZShsb29wLCBjb25kaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJpbnRTdGF0ZW1lbnQoKTogU3RtdC5TdG10IHtcclxuICAgICAgICBjb25zdCB2YWx1ZTogRXhwci5FeHByID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5TZW1pY29sb24sIGBFeHBlY3RlZCBzZW1pY29sb24gXCI7XCIgYWZ0ZXIgZXhwcmVzc2lvbi5gKTtcclxuICAgICAgICByZXR1cm4gbmV3IFN0bXQuUHJpbnQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmV0dXJuU3RhdGVtZW50KCk6IFN0bXQuU3RtdCB7XHJcbiAgICAgICAgY29uc3Qga2V5d29yZDogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5TZW1pY29sb24pKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlNlbWljb2xvbiwgYEV4ZWN0ZWQgXCI7XCIgYWZ0ZXIgcmV0dXJuIHN0YXRlbWVudGApO1xyXG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5SZXR1cm4oa2V5d29yZCwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYmxvY2soKTogU3RtdC5TdG10W10ge1xyXG4gICAgICAgIGNvbnN0IHN0YXRlbWVudHM6IFN0bXQuU3RtdFtdID0gW107XHJcbiAgICAgICAgd2hpbGUgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5SaWdodEJyYWNlKSAmJiAhdGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICBzdGF0ZW1lbnRzLnB1c2godGhpcy5kZWNsYXJhdGlvbigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5SaWdodEJyYWNlLCBgRXhwZWN0ZWQgY2xvc2luZyBibG9jayBcIn1cImApO1xyXG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXhwcmVzc2lvblN0YXRlbWVudCgpOiBTdG10LlN0bXQge1xyXG4gICAgICAgIGNvbnN0IGV4cHJlc3Npb246IEV4cHIuRXhwciA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuU2VtaWNvbG9uLCBgRXhwZWN0ZWQgc2VtaWNvbG9uIFwiO1wiIGFmdGVyICR7ZXhwcmVzc2lvbn0gZXhwcmVzc2lvbmApO1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5TZW1pY29sb24pKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBjb256b2xlLndhcm4oYFtsaW5lICgke3Rva2VuLmxpbmV9KSBwYXJzZSB3YXJuaW5nIGF0IFwiJHt0b2tlbi5sZXhlbWV9XCJdID0+IHVubmVjZXNzYXJ5IHNlbWljb2xvbiBvciBlbXB0eSBzdGF0ZW1lbnRgKTtcclxuICAgICAgICAgICAgLy8gY29uc3VtZSBhbGwgc2VtaWNvbG9uc1xyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlNlbWljb2xvbikpeyB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFN0bXQuRXhwcmVzc2lvbihleHByZXNzaW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV4cHJlc3Npb24oKTogRXhwci5FeHByIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hc3NpZ25tZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3NpZ25tZW50KCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgY29uc3QgZXhwcjogRXhwci5FeHByID0gdGhpcy50ZXJuYXJ5KCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5FcXVhbCwgVG9rZW5UeXBlLlBsdXNFcXVhbCxcclxuICAgICAgICAgICAgVG9rZW5UeXBlLk1pbnVzRXF1YWwsIFRva2VuVHlwZS5TdGFyRXF1YWwsIFRva2VuVHlwZS5TbGFzaEVxdWFsKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZTogRXhwci5FeHByID0gdGhpcy5hc3NpZ25tZW50KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXhwciBpbnN0YW5jZW9mIEV4cHIuVmFyaWFibGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWU6IFRva2VuID0gZXhwci5uYW1lO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wZXJhdG9yLnR5cGUgIT09IFRva2VuVHlwZS5FcXVhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbmV3IEV4cHIuQmluYXJ5KG5ldyBFeHByLlZhcmlhYmxlKG5hbWUpLCBvcGVyYXRvciwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkFzc2lnbihuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXhwciBpbnN0YW5jZW9mIEV4cHIuR2V0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3BlcmF0b3IudHlwZSAhPT0gVG9rZW5UeXBlLkVxdWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRXhwci5CaW5hcnkobmV3IEV4cHIuR2V0KGV4cHIuZW50aXR5LCBleHByLmtleSksIG9wZXJhdG9yLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuU2V0KGV4cHIuZW50aXR5LCBleHByLmtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBhcnNlRXJyb3Iob3BlcmF0b3IsIGBJbnZhbGlkIGwtdmFsdWUsIGlzIG5vdCBhbiBhc3NpZ25pbmcgdGFyZ2V0LmApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0ZXJuYXJ5KCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgY29uc3QgZXhwciA9IHRoaXMubG9naWNhbE9yKCk7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlF1ZXN0aW9uKSkge1xyXG4gICAgICAgICAgICBjb25zdCB0aGVuRXhwcjogRXhwci5FeHByID0gdGhpcy50ZXJuYXJ5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuQ29sb24sIGBFeHBlY3RlZCBcIjpcIiBhZnRlciB0ZXJuYXJ5ID8gZXhwcmVzc2lvbmApO1xyXG4gICAgICAgICAgICBjb25zdCBlbHNlRXhwcjogRXhwci5FeHByID0gdGhpcy50ZXJuYXJ5KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5UZXJuYXJ5KGV4cHIsIHRoZW5FeHByLCBlbHNlRXhwcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBleHByO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9naWNhbE9yKCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgbGV0IGV4cHIgPSB0aGlzLmxvZ2ljYWxBbmQoKTtcclxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuT3IpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMubG9naWNhbEFuZCgpO1xyXG4gICAgICAgICAgICBleHByID0gbmV3IEV4cHIuTG9naWNhbChleHByLCBvcGVyYXRvciwgcmlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvZ2ljYWxBbmQoKTogRXhwci5FeHByIHtcclxuICAgICAgICBsZXQgZXhwciA9IHRoaXMuZXF1YWxpdHkoKTtcclxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuQW5kKSkge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0OiBFeHByLkV4cHIgPSB0aGlzLmVxdWFsaXR5KCk7XHJcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5Mb2dpY2FsKGV4cHIsIG9wZXJhdG9yLCByaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBleHByO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXF1YWxpdHkoKTogRXhwci5FeHByIHtcclxuICAgICAgICBsZXQgZXhwciAgPSB0aGlzLmNvbXBhcmlzb24oKTtcclxuXHJcbiAgICAgICAgd2hpbGUgKHRoaXMubWF0Y2goXHJcbiAgICAgICAgICAgIFRva2VuVHlwZS5CYW5nRXF1YWwsIFRva2VuVHlwZS5FcXVhbEVxdWFsKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0OiBFeHByLkV4cHIgPSB0aGlzLmNvbXBhcmlzb24oKTtcclxuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkJpbmFyeShleHByLCBvcGVyYXRvciwgcmlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb21wYXJpc29uKCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgbGV0IGV4cHI6IEV4cHIuRXhwciA9IHRoaXMuYWRkaXRpb24oKTtcclxuXHJcbiAgICAgICAgd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkdyZWF0ZXIsIFRva2VuVHlwZS5HcmVhdGVyRXF1YWwsIFRva2VuVHlwZS5MZXNzLCBUb2tlblR5cGUuTGVzc0VxdWFsKSkge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0OiBFeHByLkV4cHIgPSB0aGlzLmFkZGl0aW9uKCk7XHJcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5CaW5hcnkoZXhwciwgb3BlcmF0b3IsIHJpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBleHByO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkaXRpb24oKTogRXhwci5FeHByIHtcclxuICAgICAgICBsZXQgZXhwcjogRXhwci5FeHByID0gdGhpcy5tb2R1bHVzKCk7XHJcblxyXG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5NaW51cywgVG9rZW5UeXBlLlBsdXMpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMubW9kdWx1cygpO1xyXG4gICAgICAgICAgICBleHByID0gbmV3IEV4cHIuQmluYXJ5KGV4cHIsIG9wZXJhdG9yLCByaWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vZHVsdXMoKTogRXhwci5FeHByIHtcclxuICAgICAgICBsZXQgZXhwcjogRXhwci5FeHByID0gdGhpcy5tdWx0aXBsaWNhdGlvbigpO1xyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuUGVyY2VudCkpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3I6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBjb25zdCByaWdodDogRXhwci5FeHByID0gdGhpcy5tdWx0aXBsaWNhdGlvbigpO1xyXG4gICAgICAgICAgICBleHByID0gbmV3IEV4cHIuQmluYXJ5KGV4cHIsIG9wZXJhdG9yLCByaWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG11bHRpcGxpY2F0aW9uKCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgbGV0IGV4cHI6IEV4cHIuRXhwciA9IHRoaXMudW5hcnkoKTtcclxuXHJcbiAgICAgICAgd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlNsYXNoLCBUb2tlblR5cGUuU3RhcikpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3I6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBjb25zdCByaWdodDogRXhwci5FeHByID0gdGhpcy51bmFyeSgpO1xyXG4gICAgICAgICAgICBleHByID0gbmV3IEV4cHIuQmluYXJ5KGV4cHIsIG9wZXJhdG9yLCByaWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVuYXJ5KCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLk1pbnVzLCBUb2tlblR5cGUuQmFuZywgVG9rZW5UeXBlLkRvbGxhciwgVG9rZW5UeXBlLlBsdXNQbHVzLCBUb2tlblR5cGUuTWludXNNaW51cykpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3I6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBjb25zdCByaWdodDogRXhwci5FeHByID0gdGhpcy51bmFyeSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuVW5hcnkob3BlcmF0b3IsIHJpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm5ld0tleXdvcmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG5ld0tleXdvcmQoKTogRXhwci5FeHByIHtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuTmV3KSkge1xyXG4gICAgICAgICAgICBjb25zdCBjb25zdHJ1Y3Q6IEV4cHIuRXhwciA9IHRoaXMuY2FsbCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTmV3KGNvbnN0cnVjdCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jYWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxsKCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgbGV0IGV4cHI6IEV4cHIuRXhwciA9IHRoaXMucHJpbWFyeSgpO1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5MZWZ0UGFyZW4pKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2FsbGVlID0gZXhwcjtcclxuICAgICAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcmdzOiBFeHByLkV4cHJbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jaGVjayhUb2tlblR5cGUuUmlnaHRQYXJlbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZXhwcmVzc2lvbigpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuQ29tbWEpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW46IFRva2VuID0gdGhpcy5jb25zdW1lKFRva2VuVHlwZS5SaWdodFBhcmVuLCBgRXhwZWN0ZWQgXCIpXCIgYWZ0ZXIgYXJndW1lbnRzYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGVlID0gbmV3IEV4cHIuQ2FsbChjYWxsZWUsIHBhcmVuLCBhcmdzLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkxlZnRQYXJlbikpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxlZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5Eb3QpKSB7XHJcbiAgICAgICAgICAgICAgICBleHByID0gdGhpcy5kb3RHZXQoZXhwcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuTGVmdEJyYWNrZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBleHByID0gdGhpcy5icmFja2V0R2V0KGV4cHIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBleHByO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZG90R2V0KGV4cHI6IEV4cHIuRXhwcik6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgY29uc3QgbmFtZTogVG9rZW4gPSB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLklkZW50aWZpZXIsIGBFeHBlY3QgcHJvcGVydHkgbmFtZSBhZnRlciAnLidgKTtcclxuICAgICAgICBjb25zdCBrZXk6IEV4cHIuS2V5ID0gbmV3IEV4cHIuS2V5KG5hbWUpO1xyXG4gICAgICAgIHJldHVybiBuZXcgRXhwci5HZXQoZXhwciwga2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJyYWNrZXRHZXQoZXhwcjogRXhwci5FeHByKTogRXhwci5FeHByIHtcclxuICAgICAgICBsZXQga2V5OiBFeHByLkV4cHIgPSBudWxsO1xyXG4gICAgICAgIGxldCBlbmQ6IEV4cHIuRXhwciA9IG51bGw7XHJcbiAgICAgICAgbGV0IHN0ZXA6IEV4cHIuRXhwciA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5jaGVjayhUb2tlblR5cGUuQ29sb24pKSB7XHJcbiAgICAgICAgICAgIGtleSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuQ29sb24pICYmICF0aGlzLmNoZWNrKFRva2VuVHlwZS5Db2xvbikpIHtcclxuICAgICAgICAgICAgZW5kID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5Db2xvbikgJiYgIXRoaXMuY2hlY2soVG9rZW5UeXBlLlJpZ2h0QnJhY2tldCkpIHtcclxuICAgICAgICAgICAgc3RlcCA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlJpZ2h0QnJhY2tldCwgYEV4cGVjdGVkIFwiXVwiIGFmdGVyIHByb3BlcnR5IG5hbWUgZXhwcmVzc2lvbmApO1xyXG4gICAgICAgIGlmICgha2V5IHx8IGVuZCB8fCBzdGVwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gbmV3IEV4cHIuUmFuZ2Uoa2V5LCBlbmQsIHN0ZXApO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuR2V0KGV4cHIsIHJhbmdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFeHByLkdldChleHByLCBrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJpbWFyeSgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5GYWxzZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkxpdGVyYWwobmV3ICRCb29sZWFuKGZhbHNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5UcnVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGl0ZXJhbChuZXcgJEJvb2xlYW4odHJ1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuTnVsbCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkxpdGVyYWwobmV3ICROdWxsKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuTnVtYmVyKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGl0ZXJhbChuZXcgJE51bWJlcih0aGlzLnByZXZpb3VzKCkubGl0ZXJhbCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuU3RyaW5nKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuWnRyaW5nKHRoaXMucHJldmlvdXMoKS5saXRlcmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlJlZ2V4KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuUmVnRXgodGhpcy5wcmV2aW91cygpLmxpdGVyYWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuSWRlbnRpZmllcikpIHtcclxuICAgICAgICAgICAgY29uc3QgaWRlbnRpZmllciA9ICB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5QbHVzUGx1cykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5Qb3N0Zml4KGlkZW50aWZpZXIsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5NaW51c01pbnVzKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlBvc3RmaXgoaWRlbnRpZmllciwgLTEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5WYXJpYWJsZShpZGVudGlmaWVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkxlZnRQYXJlbikpIHtcclxuICAgICAgICAgICAgY29uc3QgZXhwcjogRXhwci5FeHByID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuUmlnaHRQYXJlbiwgYEV4cGVjdGVkIFwiKVwiIGFmdGVyIGV4cHJlc3Npb25gKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkdyb3VwaW5nKGV4cHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuTGVmdEJyYWNlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaWN0aW9uYXJ5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5GdW5jdGlvbikpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW46IFRva2VuID0gbmV3IFRva2VuKFRva2VuVHlwZS5MYW1iZGEsICdsYW1iZGEnLCAnbGFtYmRhJywgdGhpcy5wcmV2aW91cygpLmxpbmUpO1xyXG4gICAgICAgICAgICBjb25zdCBsYW1iZGE6IFN0bXQuRnVuYyA9IHRoaXMuZnVuY1BhcmFtc0JvZHkodG9rZW4sIFwibGFtYmRhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGFtYmRhKGxhbWJkYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5TdXBlcikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3VwZXJDYWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5MZWZ0QnJhY2tldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlzdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhyb3cgdGhpcy5wYXJzZUVycm9yKHRoaXMucGVlaygpLCBgRXhwZWN0ZWQgZXhwcmVzc2lvbmApO1xyXG4gICAgICAgIC8vIHVucmVhY2hlYWJsZSBjb2RlXHJcbiAgICAgICAgcmV0dXJuIG5ldyBFeHByLkxpdGVyYWwobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpY3Rpb25hcnkoKTogRXhwci5FeHByIHtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuUmlnaHRCcmFjZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkRpY3Rpb25hcnkoW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzOiBFeHByLlNldFtdID0gW107XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuU3RyaW5nLCBUb2tlblR5cGUuSWRlbnRpZmllcikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleTogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLkNvbG9uLCBgRXhwZWN0ZWQgXCI6XCIgY29sb24gYWZ0ZXIgbWVtYmVyYCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydGllcy5wdXNoKG5ldyBFeHByLlNldChudWxsLCBuZXcgRXhwci5LZXkoa2V5KSwgdmFsdWUpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyc2VFcnJvcih0aGlzLnBlZWsoKSwgYFN0cmluZyBvciBpZGVudGlmaWVyIGV4cGVjdGVkIGFmdGVyIE9iamVjdCB7YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5Db21tYSkpO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuUmlnaHRCcmFjZSwgYEV4cGVjdGVkIFwifVwiIGFmdGVyIG9iamVjdCBsaXRlcmFsYCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgRXhwci5EaWN0aW9uYXJ5KHByb3BlcnRpZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbGlzdCgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5SaWdodEJyYWNrZXQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5MaXN0KFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICB2YWx1ZXMucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7XHJcbiAgICAgICAgfSB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuQ29tbWEpKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlJpZ2h0QnJhY2tldCwgYEV4cGVjdGVkIFwiXVwiIGFmdGVyIGFycmF5IGRlY2xhcmF0aW9uYCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgRXhwci5MaXN0KHZhbHVlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdXBlckNhbGwoKTogRXhwci5FeHByIHtcclxuICAgICAgICAvKlxyXG4gICAgICAgIGNvbnN0IGluZGV4ZXM6IFRva2VuW10gPSBbXTtcclxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuRG90KSkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMuY29uc3VtZShUb2tlblR5cGUuSWRlbnRpZmllciwgYEV4cGVjdGVkIG1ldGhvZCBuYW1lIGFmdGVyIHN1cGVyYCk7XHJcbiAgICAgICAgICAgIGluZGV4ZXMucHVzaCh0b2tlbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhcmdzOiBFeHByLkV4cHJbXSA9IFtdO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuTGVmdFBhcmVuLCBgRXhwZWN0ZWQgZnVuY3Rpb24gcGFyYW1ldGVycyBvciBtZXRob2QgbmFtZSBhZnRlciBzdXBlcmApO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5SaWdodFBhcmVuKSkge1xyXG4gICAgICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7XHJcbiAgICAgICAgICAgICAgICB9IHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5Db21tYSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuUmlnaHRQYXJlbiwgYEV4cGVjdGVkIFwiKVwiIGFmdGVyIHN1cGVyIGFyZ3VtZW50c2ApO1xyXG4gICAgICAgIH0gd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkxlZnRQYXJlbikpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IEV4cHIuU3VwZXIoaW5kZXhlcywgYXJncyk7XHJcbiAgICAgICAgKi8gcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFRva2VuLCBUb2tlblR5cGUgfSBmcm9tICcuL3Rva2VuJztcclxuaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gJy4vY29uc29sZSc7XHJcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJy4vc3RydWN0cy91dGlscyc7XHJcbmRlY2xhcmUgdmFyIGNvbnpvbGU6IENvbnNvbGU7XHJcblxyXG5leHBvcnQgY2xhc3MgU2Nhbm5lciB7XHJcblxyXG4gICAgcHVibGljIHNvdXJjZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHRva2VuczogVG9rZW5bXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50ID0gMDtcclxuICAgIHByaXZhdGUgbGluZSA9IDE7XHJcbiAgICBwcml2YXRlIHN0YXJ0ID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihzb3VyY2U6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZW9mKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnQgPj0gdGhpcy5zb3VyY2UubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWR2YW5jZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHRoaXMuY3VycmVudCsrO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5jaGFyQXQodGhpcy5jdXJyZW50IC0gMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRUb2tlbih0b2tlblR5cGU6IFRva2VuVHlwZSwgbGl0ZXJhbDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IHRoaXMuc291cmNlLnN1YnN0cmluZyh0aGlzLnN0YXJ0LCB0aGlzLmN1cnJlbnQpO1xyXG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2gobmV3IFRva2VuKHRva2VuVHlwZSwgdGV4dCwgbGl0ZXJhbCwgdGhpcy5saW5lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtYXRjaChleHBlY3RlZDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc291cmNlLmNoYXJBdCh0aGlzLmN1cnJlbnQpICE9PSBleHBlY3RlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnQrKztcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBlZWsoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ1xcMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5jaGFyQXQodGhpcy5jdXJyZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBlZWtOZXh0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudCArIDEgPj0gdGhpcy5zb3VyY2UubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnXFwwJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLmNoYXJBdCh0aGlzLmN1cnJlbnQgKyAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbW1lbnQoKTogdm9pZCB7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMucGVlaygpICE9PSAnXFxuJyAmJiAhdGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdHJpbmcocXVvdGU6IHN0cmluZywgdHlwZTogVG9rZW5UeXBlKTogdm9pZCB7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMucGVlaygpICE9PSBxdW90ZSAmJiAhdGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wZWVrKCkgPT09ICdcXG4nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmUrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFVudGVybWluYXRlZCBzdHJpbmcuXHJcbiAgICAgICAgaWYgKHRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2FuRXJyb3IoYFVudGVybWluYXRlZCBzdHJpbmcsIGV4cGVjdGluZyBjbG9zaW5nICR7cXVvdGV9YCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRoZSBjbG9zaW5nIFwiLlxyXG4gICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG5cclxuICAgICAgICAvLyBUcmltIHRoZSBzdXJyb3VuZGluZyBxdW90ZXMuXHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNvdXJjZS5zdWJzdHJpbmcodGhpcy5zdGFydCArIDEsIHRoaXMuY3VycmVudCAtIDEpO1xyXG4gICAgICAgIHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLlN0cmluZywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbnVtYmVyKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGdldHMgaW50ZWdlciBwYXJ0XHJcbiAgICAgICAgd2hpbGUgKFV0aWxzLmlzRGlnaXQodGhpcy5wZWVrKCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2hlY2tzIGZvciBmcmFjdGlvblxyXG4gICAgICAgIGlmICh0aGlzLnBlZWsoKSA9PT0gJy4nICYmIFV0aWxzLmlzRGlnaXQodGhpcy5wZWVrTmV4dCgpKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGdldHMgZnJhY3Rpb24gcGFydFxyXG4gICAgICAgIHdoaWxlIChVdGlscy5pc0RpZ2l0KHRoaXMucGVlaygpKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNoZWNrcyBmb3IgZXhwb25lbnRcclxuICAgICAgICBpZiAodGhpcy5wZWVrKCkudG9Mb3dlckNhc2UoKSA9PT0gJ2UnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wZWVrKCkgPT09ICctJyB8fCB0aGlzLnBlZWsoKSA9PT0gJysnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2hpbGUgKFV0aWxzLmlzRGlnaXQodGhpcy5wZWVrKCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNvdXJjZS5zdWJzdHJpbmcodGhpcy5zdGFydCAsIHRoaXMuY3VycmVudCk7XHJcbiAgICAgICAgdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuTnVtYmVyLCBOdW1iZXIodmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlkZW50aWZpZXIoKTogdm9pZCB7XHJcbiAgICAgICAgd2hpbGUgKFV0aWxzLmlzQWxwaGFOdW1lcmljKHRoaXMucGVlaygpKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zb3VyY2Uuc3Vic3RyaW5nKHRoaXMuc3RhcnQsIHRoaXMuY3VycmVudCk7XHJcbiAgICAgICAgY29uc3QgY2FwaXRhbGl6ZWQgPSB2YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHVlLnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChVdGlscy5pc0tleXdvcmQoY2FwaXRhbGl6ZWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlW2NhcGl0YWxpemVkXSwgdmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLklkZW50aWZpZXIsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWdleCgpOiB2b2lkIHtcclxuICAgICAgICB3aGlsZSAodGhpcy5wZWVrKCkgIT09ICcjJyAmJiAhdGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wZWVrKCkgPT09ICdcXG4nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmUrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFVudGVybWluYXRlZCByZWdleC5cclxuICAgICAgICBpZiAodGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjYW5FcnJvcihgVW50ZXJtaW5hdGVkIFJlZ0V4LCBleHBlY3RpbmcgY2xvc2luZyAjYCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRoZSBjbG9zaW5nICMuXHJcbiAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgY29uc3QgcmVnZXggPSB0aGlzLnNvdXJjZS5zdWJzdHJpbmcodGhpcy5zdGFydCArIDEsIHRoaXMuY3VycmVudCAtIDEpO1xyXG5cclxuICAgICAgICBsZXQgZmxhZ3MgPSAnJztcclxuICAgICAgICBpZiAoWydnJywgJ2knLCAncycsICd1JywgJ3knXS5pbmRleE9mKHRoaXMucGVlaygpKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLnBlZWsoKSAhPT0gJyMnICYmICF0aGlzLmVvZigpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCkgPT09ICdcXG4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saW5lKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2FuRXJyb3IoYFVudGVybWluYXRlZCBSZWdFeCwgZXhwZWN0aW5nIGNsb3NpbmcgIyBhZnRlciBmbGFnc2ApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZsYWdzID0gdGhpcy5zb3VyY2Uuc3Vic3RyaW5nKHN0YXJ0LCB0aGlzLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAvLyBUaGUgY2xvc2luZyAjIGFmdGVyIGZsYWdzLlxyXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLlJlZ2V4LCBuZXcgUmVnRXhwKHJlZ2V4LCBmbGFncykpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzY2FuKCk6IFRva2VuW10ge1xyXG4gICAgICAgIHdoaWxlICghdGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0ID0gdGhpcy5jdXJyZW50O1xyXG4gICAgICAgICAgICB0aGlzLnNjYW5Ub2tlbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50b2tlbnMucHVzaChuZXcgVG9rZW4oVG9rZW5UeXBlLkVvZiwgJycsIG51bGwsIHRoaXMubGluZSkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRva2VucztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNjYW5Ub2tlbigpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjaGFyID0gdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgc3dpdGNoIChjaGFyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJygnOiB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5MZWZ0UGFyZW4sIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnKSc6IHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLlJpZ2h0UGFyZW4sIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnWyc6IHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLkxlZnRCcmFja2V0LCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ10nOiB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5SaWdodEJyYWNrZXQsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAneyc6IHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLkxlZnRCcmFjZSwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd9JzogdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuUmlnaHRCcmFjZSwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcsJzogdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuQ29tbWEsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnLic6IHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLkRvdCwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc7JzogdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuU2VtaWNvbG9uLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ14nOiB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5DYXJldCwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc/JzogdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuUXVlc3Rpb24sIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnOic6IHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLkNvbG9uLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyQnOiB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5Eb2xsYXIsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnQCc6IHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLkZ1bmN0aW9uLCAnQCcpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnKic6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnPScpID8gVG9rZW5UeXBlLlN0YXJFcXVhbCA6IFRva2VuVHlwZS5TdGFyLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyUnOiB0aGlzLmFkZFRva2VuKHRoaXMubWF0Y2goJz0nKSA/IFRva2VuVHlwZS5QZXJjZW50RXF1YWwgOiBUb2tlblR5cGUuUGVyY2VudCwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd8JzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCd8JykgPyBUb2tlblR5cGUuT3IgOiBUb2tlblR5cGUuUGlwZSwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcmJzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCcmJykgPyBUb2tlblR5cGUuQW5kIDogVG9rZW5UeXBlLkFtcGVyc2FuZCwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc8JzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCc9JykgPyBUb2tlblR5cGUuTGVzc0VxdWFsIDogVG9rZW5UeXBlLkxlc3MsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnPic6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnPScpID8gVG9rZW5UeXBlLkdyZWF0ZXJFcXVhbCA6IFRva2VuVHlwZS5HcmVhdGVyLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyEnOiB0aGlzLmFkZFRva2VuKHRoaXMubWF0Y2goJz0nKSA/IFRva2VuVHlwZS5CYW5nRXF1YWwgOiBUb2tlblR5cGUuQmFuZywgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc9JzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCc9JykgPyBUb2tlblR5cGUuRXF1YWxFcXVhbCA6IHRoaXMubWF0Y2goJz4nKSA/IFRva2VuVHlwZS5BcnJvdyA6IFRva2VuVHlwZS5FcXVhbCwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcrJzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCcrJykgPyBUb2tlblR5cGUuUGx1c1BsdXMgOiB0aGlzLm1hdGNoKCc9JykgPyBUb2tlblR5cGUuUGx1c0VxdWFsIDogVG9rZW5UeXBlLlBsdXMsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnLSc6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnLScpID8gVG9rZW5UeXBlLk1pbnVzTWludXMgOiB0aGlzLm1hdGNoKCc+JykgPyBUb2tlblR5cGUuUmV0dXJuIDogdGhpcy5tYXRjaCgnPScpID8gVG9rZW5UeXBlLk1pbnVzRXF1YWwgOiBUb2tlblR5cGUuTWludXMsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnLyc6IHRoaXMubWF0Y2goJy8nKSA/IHRoaXMuY29tbWVudCgpIDogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCc9JykgPyBUb2tlblR5cGUuU2xhc2hFcXVhbCA6IFRva2VuVHlwZS5TbGFzaCwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdcXG4nOiB0aGlzLmxpbmUrKzsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgYCdgOlxyXG4gICAgICAgICAgICBjYXNlIGBcImA6XHJcbiAgICAgICAgICAgIGNhc2UgJ2AnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHJpbmcoY2hhciwgVG9rZW5UeXBlLlN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnIyc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2V4KCk7XHJcbiAgICAgICAgICAgIC8vIGlnbm9yZSBjYXNlc1xyXG4gICAgICAgICAgICBjYXNlICcgJzpcclxuICAgICAgICAgICAgY2FzZSAnXFxyJzpcclxuICAgICAgICAgICAgY2FzZSAnXFx0JzpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvLyBjb21wZXggY2FzZXNcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGlmIChVdGlscy5pc0RpZ2l0KGNoYXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5udW1iZXIoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoVXRpbHMuaXNBbHBoYShjaGFyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWRlbnRpZmllcigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjYW5FcnJvcihgVW5leHBlY3RlZCBjaGFyYWN0ZXIgJyR7Y2hhcn0nYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzY2FuRXJyb3IobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29uem9sZS5lcnJvcihgRXJyb3IgYXQgKCR7dGhpcy5saW5lfSk6ICAke21lc3NhZ2V9YCk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciB3aGlsZSBzY2FubmluZy4gRXhlY3V0aW9uIGhhcyBiZWVuIHN0b3BlZCcpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBUb2tlbiB9IGZyb20gJ3Rva2VuJztcblxuaW1wb3J0IHsgRXhwciB9IGZyb20gJ2V4cHJlc3Npb24nO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3RtdCB7XG4gICAgcHVibGljIHJlc3VsdDogYW55O1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgIGNvbnN0cnVjdG9yKCkge31cbiAgICBwdWJsaWMgYWJzdHJhY3QgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUjtcbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5leHBvcnQgaW50ZXJmYWNlIFN0bXRWaXNpdG9yPFI+IHtcbiAgICB2aXNpdEJsb2NrU3RtdChzdG10OiBCbG9jayk6IFI7XG4gICAgdmlzaXRDbGFzc1N0bXQoc3RtdDogQ2xhc3MpOiBSO1xuICAgIHZpc2l0RG9XaGlsZVN0bXQoc3RtdDogRG9XaGlsZSk6IFI7XG4gICAgdmlzaXRFeHByZXNzaW9uU3RtdChzdG10OiBFeHByZXNzaW9uKTogUjtcbiAgICB2aXNpdEZ1bmNTdG10KHN0bXQ6IEZ1bmMpOiBSO1xuICAgIHZpc2l0SWZTdG10KHN0bXQ6IElmKTogUjtcbiAgICB2aXNpdFByaW50U3RtdChzdG10OiBQcmludCk6IFI7XG4gICAgdmlzaXRSZXR1cm5TdG10KHN0bXQ6IFJldHVybik6IFI7XG4gICAgdmlzaXRWYXJTdG10KHN0bXQ6IFZhcik6IFI7XG4gICAgdmlzaXRXaGlsZVN0bXQoc3RtdDogV2hpbGUpOiBSO1xufVxuXG5leHBvcnQgY2xhc3MgQmxvY2sgZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMgc3RhdGVtZW50czogU3RtdFtdO1xuXG4gICAgY29uc3RydWN0b3Ioc3RhdGVtZW50czogU3RtdFtdKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGVtZW50cyA9IHN0YXRlbWVudHM7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEJsb2NrU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LkJsb2NrJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ2xhc3MgZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMgbmFtZTogVG9rZW47XG4gICAgcHVibGljIHBhcmVudDogVG9rZW47XG4gICAgcHVibGljIG1ldGhvZHM6IEZ1bmNbXTtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IFRva2VuLCBwYXJlbnQ6IFRva2VuLCBtZXRob2RzOiBGdW5jW10pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMubWV0aG9kcyA9IG1ldGhvZHM7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdENsYXNzU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LkNsYXNzJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRG9XaGlsZSBleHRlbmRzIFN0bXQge1xuICAgIHB1YmxpYyBsb29wOiBTdG10O1xuICAgIHB1YmxpYyBjb25kaXRpb246IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3Rvcihsb29wOiBTdG10LCBjb25kaXRpb246IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5sb29wID0gbG9vcDtcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdERvV2hpbGVTdG10KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1N0bXQuRG9XaGlsZSc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEV4cHJlc3Npb24gZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMgZXhwcmVzc2lvbjogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKGV4cHJlc3Npb246IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RXhwcmVzc2lvblN0bXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnU3RtdC5FeHByZXNzaW9uJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRnVuYyBleHRlbmRzIFN0bXQge1xuICAgIHB1YmxpYyBuYW1lOiBUb2tlbjtcbiAgICBwdWJsaWMgcGFyYW1zOiBUb2tlbltdO1xuICAgIHB1YmxpYyBib2R5OiBTdG10W107XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBUb2tlbiwgcGFyYW1zOiBUb2tlbltdLCBib2R5OiBTdG10W10pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gICAgICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEZ1bmNTdG10KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1N0bXQuRnVuYyc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIElmIGV4dGVuZHMgU3RtdCB7XG4gICAgcHVibGljIGNvbmRpdGlvbjogRXhwcjtcbiAgICBwdWJsaWMgdGhlblN0bXQ6IFN0bXQ7XG4gICAgcHVibGljIGVsc2VTdG10OiBTdG10O1xuXG4gICAgY29uc3RydWN0b3IoY29uZGl0aW9uOiBFeHByLCB0aGVuU3RtdDogU3RtdCwgZWxzZVN0bXQ6IFN0bXQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgICAgIHRoaXMudGhlblN0bXQgPSB0aGVuU3RtdDtcbiAgICAgICAgdGhpcy5lbHNlU3RtdCA9IGVsc2VTdG10O1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRJZlN0bXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnU3RtdC5JZic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFByaW50IGV4dGVuZHMgU3RtdCB7XG4gICAgcHVibGljIGV4cHJlc3Npb246IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihleHByZXNzaW9uOiBFeHByKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFByaW50U3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LlByaW50JztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUmV0dXJuIGV4dGVuZHMgU3RtdCB7XG4gICAgcHVibGljIGtleXdvcmQ6IFRva2VuO1xuICAgIHB1YmxpYyB2YWx1ZTogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKGtleXdvcmQ6IFRva2VuLCB2YWx1ZTogRXhwcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmtleXdvcmQgPSBrZXl3b3JkO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFJldHVyblN0bXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnU3RtdC5SZXR1cm4nO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBWYXIgZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMgbmFtZTogVG9rZW47XG4gICAgcHVibGljIHR5cGU6IFRva2VuO1xuICAgIHB1YmxpYyBpbml0aWFsaXplcjogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IFRva2VuLCB0eXBlOiBUb2tlbiwgaW5pdGlhbGl6ZXI6IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplciA9IGluaXRpYWxpemVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRWYXJTdG10KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1N0bXQuVmFyJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2hpbGUgZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMgY29uZGl0aW9uOiBFeHByO1xuICAgIHB1YmxpYyBsb29wOiBTdG10O1xuXG4gICAgY29uc3RydWN0b3IoY29uZGl0aW9uOiBFeHByLCBsb29wOiBTdG10KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgICAgICB0aGlzLmxvb3AgPSBsb29wO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRXaGlsZVN0bXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnU3RtdC5XaGlsZSc7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVG9rZW4gfSBmcm9tICcuLi90b2tlbic7XHJcbmltcG9ydCB7IENvbnNvbGUgfSBmcm9tICcuLi9jb25zb2xlJztcclxuZGVjbGFyZSB2YXIgY29uem9sZTogQ29uc29sZTtcclxuXHJcbmV4cG9ydCBjbGFzcyBTY29wZSB7XHJcblxyXG4gICAgcHJpdmF0ZSB2YWx1ZXM6IE1hcDxzdHJpbmcsIGFueT47XHJcbiAgICBwcml2YXRlIHBhcmVudDogU2NvcGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyZW50OiBTY29wZSA9IG51bGwpIHtcclxuICAgICAgICB0aGlzLnZhbHVlcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNjb3BlRXJyb3IobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29uem9sZS5lcnJvcihgW3Njb3BlIGVycm9yXSA9PiAke21lc3NhZ2V9YCk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnZhbHVlcy5zZXQobmFtZSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWZpbmUobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWVzLmhhcyhuYW1lKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjb3BlRXJyb3IoYGlkZW50aWZpZXIgXCIke25hbWV9XCIgaGFzIGFscmVhZHkgYmVlbiBkZWZpbmVkYCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXQobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXNzaWduKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlcy5oYXMobmFtZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXQobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50LmFzc2lnbihuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY29wZUVycm9yKGBJZGVudGlmaWVyIFwiJHtuYW1lfVwiIGhhcyBub3QgYmVlbiBkZWZpbmVkYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQobmFtZTogVG9rZW4pOiBhbnkge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlcy5oYXMobmFtZS5sZXhlbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5nZXQobmFtZS5sZXhlbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wYXJlbnQgIT09IG51bGwgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5nZXQobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NvcGVFcnJvcihgRXJyb3IgYXQgKCR7bmFtZS5saW5lfSk6IFwiJHtuYW1lLmxleGVtZX1cIiBpcyBub3QgZGVmaW5lZGApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaXJzdChrZXk6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWVzLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5nZXQoa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9idGFpbihrZXk6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWVzLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5nZXQoa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5vYnRhaW4oa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFRva2VuVHlwZSB9IGZyb20gJy4uL3Rva2VuJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0RpZ2l0KGNoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoYXIgPj0gJzAnICYmIGNoYXIgPD0gJzknO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNBbHBoYShjaGFyOiBzdHJpbmcgKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKGNoYXIgPj0gJ2EnICYmIGNoYXIgPD0gJ3onKSB8fCAoY2hhciA+PSAnQScgJiYgY2hhciA8PSAnWicpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNBbHBoYU51bWVyaWMoY2hhcjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXNBbHBoYShjaGFyKSB8fCBpc0RpZ2l0KGNoYXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNLZXl3b3JkKHdvcmQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIFRva2VuVHlwZVt3b3JkXSA+PSBUb2tlblR5cGUuQW5kO1xyXG59XHJcbiIsImV4cG9ydCBlbnVtIFRva2VuVHlwZSB7XHJcbiAgICAvLyBQYXJzZXIgVG9rZW5zXHJcbiAgICBFb2YsXHJcbiAgICBQYW5pYyxcclxuICAgIExhbWJkYSxcclxuXHJcbiAgICAvLyBTaW5nbGUgQ2hhcmFjdGVyIFRva2Vuc1xyXG4gICAgQW1wZXJzYW5kLFxyXG4gICAgQXRTaWduLFxyXG4gICAgQ2FyZXQsXHJcbiAgICBDb21tYSxcclxuICAgIERvbGxhcixcclxuICAgIERvdCxcclxuICAgIEhhc2gsXHJcbiAgICBMZWZ0QnJhY2UsXHJcbiAgICBMZWZ0QnJhY2tldCxcclxuICAgIExlZnRQYXJlbixcclxuICAgIFBlcmNlbnQsXHJcbiAgICBQaXBlLFxyXG4gICAgUmlnaHRCcmFjZSxcclxuICAgIFJpZ2h0QnJhY2tldCxcclxuICAgIFJpZ2h0UGFyZW4sXHJcbiAgICBTZW1pY29sb24sXHJcbiAgICBTbGFzaCxcclxuICAgIFN0YXIsXHJcblxyXG4gICAgLy8gT25lIE9yIFR3byBDaGFyYWN0ZXIgVG9rZW5zXHJcbiAgICBBcnJvdyxcclxuICAgIEJhbmcsXHJcbiAgICBCYW5nRXF1YWwsXHJcbiAgICBDb2xvbixcclxuICAgIEVxdWFsLFxyXG4gICAgRXF1YWxFcXVhbCxcclxuICAgIEdyZWF0ZXIsXHJcbiAgICBHcmVhdGVyRXF1YWwsXHJcbiAgICBMZXNzLFxyXG4gICAgTGVzc0VxdWFsLFxyXG4gICAgTWludXMsXHJcbiAgICBNaW51c0VxdWFsLFxyXG4gICAgTWludXNNaW51cyxcclxuICAgIFBlcmNlbnRFcXVhbCxcclxuICAgIFBsdXMsXHJcbiAgICBQbHVzRXF1YWwsXHJcbiAgICBQbHVzUGx1cyxcclxuICAgIFF1ZXN0aW9uLFxyXG4gICAgU2xhc2hFcXVhbCxcclxuICAgIFN0YXJFcXVhbCxcclxuXHJcbiAgICAvLyBMaXRlcmFsc1xyXG4gICAgSWRlbnRpZmllcixcclxuICAgIFN0cmluZyxcclxuICAgIE51bWJlcixcclxuICAgIFJlZ2V4LFxyXG5cclxuICAgIC8vIEtleXdvcmRzXHJcbiAgICBBbmQsXHJcbiAgICBDbGFzcyxcclxuICAgIERvLFxyXG4gICAgRWxzZSxcclxuICAgIEV4dGVuZHMsXHJcbiAgICBGYWxzZSxcclxuICAgIEZvcixcclxuICAgIEZ1bmN0aW9uLFxyXG4gICAgSWYsXHJcbiAgICBOZXcsXHJcbiAgICBOdWxsLFxyXG4gICAgT3IsXHJcbiAgICBQcmludCxcclxuICAgIFJldHVybixcclxuICAgIFN1cGVyLFxyXG4gICAgVHJ1ZSxcclxuICAgIFZhcixcclxuICAgIFdoaWxlXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUb2tlbiB7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGxpbmU6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0eXBlOiBUb2tlblR5cGU7XHJcbiAgICBwdWJsaWMgbGl0ZXJhbDogYW55O1xyXG4gICAgcHVibGljIGxleGVtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHR5cGU6IFRva2VuVHlwZSwgbGV4ZW1lOiBzdHJpbmcsIGxpdGVyYWw6IGFueSwgbGluZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gVG9rZW5UeXBlW3R5cGVdO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5sZXhlbWUgPSBsZXhlbWU7XHJcbiAgICAgICAgdGhpcy5saXRlcmFsID0gbGl0ZXJhbDtcclxuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gYFsoJHt0aGlzLmxpbmV9KTpcIiR7dGhpcy5sZXhlbWV9XCJdYDtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiZGVjbGFyZSB2YXIgY29uem9sZTogQ29uc29sZTtcclxuXHJcbmV4cG9ydCBlbnVtIERhdGFUeXBlIHtcclxuICAgIE51bGwsXHJcbiAgICBWb2lkLFxyXG4gICAgQW55LFxyXG4gICAgQm9vbGVhbixcclxuICAgIE51bWJlcixcclxuICAgIFN0cmluZyxcclxuICAgIExpc3QsXHJcbiAgICBEaWN0aW9uYXJ5LFxyXG4gICAgT2JqZWN0LFxyXG4gICAgRnVuY3Rpb24sXHJcbiAgICBSYW5nZVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgJEFueSB7XHJcblxyXG4gICAgcHVibGljIHZhbHVlOiBhbnk7XHJcbiAgICBwdWJsaWMgdHlwZSA9IERhdGFUeXBlLkFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogYW55LCB0eXBlOiBEYXRhVHlwZSA9IERhdGFUeXBlLkFueSkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1N0cmluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBEYXRhVHlwZS5TdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzTnVsbCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBEYXRhVHlwZS5OdWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0Jvb2xlYW4oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gRGF0YVR5cGUuQm9vbGVhbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNOdW1iZXIoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gRGF0YVR5cGUuTnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1JhbmdlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IERhdGFUeXBlLlJhbmdlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1RydXRoeSgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5pc051bGwoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzQm9vbGVhbigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBCb29sZWFuKHRoaXMudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc051bWJlcigpICYmIHRoaXMudmFsdWUgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1N0cmluZygpICYmIHRoaXMudmFsdWUudG9TdHJpbmcoKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIGVycm9yIHZhbHVlIEFueSBpcyBudWxsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMudmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gZXJyb3IgdmFsdWUgQW55IGlzIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzRXF1YWwob3RoZXI6ICRBbnkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA9PT0gb3RoZXIudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldChrZXk6ICRBbnkpOiAkQW55IHtcclxuICAgICAgICBjb256b2xlLmVycm9yKGBrZXkgJHtrZXl9IGRvZXMgbm90IGV4aXN0IGluICR7dGhpc31gKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvciBpbiBBbnkgZ2V0dGVyXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQoa2V5OiAkQW55LCB2YWx1ZTogJEFueSk6ICRBbnkge1xyXG4gICAgICAgIGNvbnpvbGUuZXJyb3IoYGtleSAke2tleX0gZG9lcyBub3QgZXhpc3QgaW4gJHt0aGlzfWApO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIGluIEFueSBzZXR0ZXJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUudG9TdHJpbmcoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzICRCb29sZWFuIGV4dGVuZHMgJEFueSB7XHJcblxyXG4gICAgcHVibGljIHZhbHVlOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgc3VwZXIodmFsdWUsIERhdGFUeXBlLkJvb2xlYW4pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzICROdWxsIGV4dGVuZHMgJEFueSB7XHJcblxyXG4gICAgcHVibGljIHZhbHVlOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKG51bGwpO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IERhdGFUeXBlLk51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiAnbnVsbCc7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgJFZvaWQgZXh0ZW5kcyAkQW55IHtcclxuXHJcbiAgICBwdWJsaWMgdmFsdWU6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKHZhbHVlLCBEYXRhVHlwZS5Wb2lkKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCAgY2xhc3MgUmFuZ2VWYWx1ZSB7XHJcbiAgICBwdWJsaWMgc3RhcnQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBlbmQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBzdGVwOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIsIHN0ZXA6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcclxuICAgICAgICB0aGlzLmVuZCA9IGVuZDtcclxuICAgICAgICB0aGlzLnN0ZXAgPSBzdGVwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBub3JtYWxpemUobGVuZ3RoOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5zdGVwID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RlcCA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmVuZCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZCA9IHRoaXMuc3RlcCA+IDAgPyBsZW5ndGggLSAxIDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhcnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydCA9IHRoaXMuc3RlcCA+IDAgPyAwIDogbGVuZ3RoIC0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyAkUmFuZ2UgZXh0ZW5kcyAkQW55IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogUmFuZ2VWYWx1ZSkge1xyXG4gICAgICAgIHN1cGVyKHZhbHVlLCBEYXRhVHlwZS5SYW5nZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGl0ZXJhdGUobGVuZ3RoOiBudW1iZXIsIGNhbGxiYWNrOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudmFsdWUubm9ybWFsaXplKGxlbmd0aCk7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUuc3RlcCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMudmFsdWUuc3RhcnQ7IGkgPD0gdGhpcy52YWx1ZS5lbmQ7IGkgKz0gdGhpcy52YWx1ZS5zdGVwKSB7XHJcbiAgICAgICAgICAgICAgIGNhbGxiYWNrKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnZhbHVlLnN0ZXAgPCAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnZhbHVlLnN0YXJ0OyBpID49IHRoaXMudmFsdWUuZW5kOyBpICs9IHRoaXMudmFsdWUuc3RlcCkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb256b2xlLndhcm4oYFtyYW5nZSBlcnJvcl0gPT4gMCBpcyBub3QgYSB2YWxpZCBzdGVwYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgJE51bWJlciBleHRlbmRzICRBbnkge1xyXG5cclxuICAgIHB1YmxpYyB2YWx1ZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcih2YWx1ZSwgRGF0YVR5cGUuTnVtYmVyKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyAkU3RyaW5nIGV4dGVuZHMgJEFueSB7XHJcbiAgICBwdWJsaWMgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIodmFsdWUsIERhdGFUeXBlLlN0cmluZyk7XHJcbiAgICAgICAgLyogdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgnaW52b2tlJywgUnVudGltZS5pbnZva2VNZXRob2QodGhpcykpO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ3NpemUnLCBSdW50aW1lLnN0cmluZ0xlbmd0aE1ldGhvZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgnc3Vic3RyJywgUnVudGltZS5zdHJpbmdTdWJTdHJNZXRob2QodGhpcykpO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ3NwbGl0JywgUnVudGltZS5zdHJpbmdTcGxpdE1ldGhvZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgnbWF0Y2gnLCBSdW50aW1lLnN0cmluZ01hdGNoTWV0aG9kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS52YWx1ZXMuc2V0KCdyZXBsYWNlJywgUnVudGltZS5zdHJpbmdSZXBsYWNlTWV0aG9kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS52YWx1ZXMuc2V0KCdhbHRlcicsIFJ1bnRpbWUuc3RyaW5nQWx0ZXJNZXRob2QodGhpcykpO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnZhbHVlcy5zZXQoJ3RvVXBwZXJDYXNlJywgUnVudGltZS5zdHJpbmdUb1VwcGVyQ2FzZSh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUudmFsdWVzLnNldCgndG9Mb3dlckNhc2UnLCBSdW50aW1lLnN0cmluZ1RvTG93ZXJjYXNlKHRoaXMpKTsgKi9cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KGtleTogJEFueSk6ICRBbnkge1xyXG4gICAgICAgIGlmIChrZXkuaXNOdW1iZXIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3ICRTdHJpbmcodGhpcy52YWx1ZVtrZXkudmFsdWVdKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGtleS52YWx1ZSA9PT0gJ2xlbmd0aCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVtYmVyKHRoaXMudmFsdWUubGVuZ3RoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGtleS5pc1JhbmdlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmFuZ2UoPCRSYW5nZT4ga2V5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm47IC8vcmV0dXJuIHN1cGVyLmdldChrZXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldChrZXk6ICRBbnksIHZhbHVlOiBhbnkpOiAkQW55IHtcclxuICAgICAgICBpZiAodHlwZW9mIGtleSAhPT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5wcm9wZXJ0aWVzLnNldChrZXksIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhcml0eSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgLypcclxuXHJcbiAgICBwdWJsaWMgY2FsbChpbnRlcnByZXRlcjogSW50ZXJwcmV0ZXIsIHRoaXo6IGFueSwgYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBuZXcgJFN0cmluZyhhcmdzWzBdKTtcclxuICAgIH0qL1xyXG5cclxuICAgIHByaXZhdGUgcmFuZ2UocmFuZ2U6ICRSYW5nZSk6ICRTdHJpbmcge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgICAgICByYW5nZS5pdGVyYXRlKHRoaXMudmFsdWUubGVuZ3RoLCAoaSkgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gdGhpcy52YWx1ZVtpXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbmV3ICRTdHJpbmcocmVzdWx0KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyAkTGlzdCBleHRlbmRzICRBbnkge1xyXG4gICAgcHVibGljIHZhbHVlOiAkQW55W107XHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogJEFueVtdKSB7XHJcbiAgICAgICAgc3VwZXIodmFsdWUsIERhdGFUeXBlLkxpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoa2V5OiAkQW55KTogJEFueSB7XHJcbiAgICAgICAgaWYgKGtleS5pc051bWJlcigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlW2tleS52YWx1ZV07XHJcbiAgICAgICAgfSBlbHNlIGlmIChrZXkuaXNSYW5nZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yYW5nZSg8JFJhbmdlPiBrZXkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiBzdXBlci5nZXQoa2V5KTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldChrZXk6ICRBbnksIHZhbHVlOiAkQW55KTogJEFueSB7XHJcbiAgICAgICAgaWYgKGtleS5pc051bWJlcigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVba2V5LnZhbHVlXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByYW5nZShyYW5nZTogJFJhbmdlKTogJExpc3Qge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdDogJEFueVtdID0gW107XHJcbiAgICAgICAgcmFuZ2UuaXRlcmF0ZSh0aGlzLnZhbHVlLmxlbmd0aCwgKGkpID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy52YWx1ZVtpXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkTGlzdChyZXN1bHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgWyR7dGhpcy52YWx1ZS5qb2luKCcsJyl9XWA7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgJERpY3Rpb25hcnkgZXh0ZW5kcyAkQW55IHtcclxuICAgIHB1YmxpYyB2YWx1ZTogTWFwPGFueSwgJEFueT47XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IE1hcDxhbnksICRBbnk+KSB7XHJcbiAgICAgICAgc3VwZXIodmFsdWUsIERhdGFUeXBlLkRpY3Rpb25hcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoa2V5OiAkQW55KTogYW55IHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZS5oYXMoa2V5LnZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS5nZXQoa2V5LnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQoa2V5OiAkQW55LCB2YWx1ZTogJEFueSk6ICRBbnkge1xyXG4gICAgICAgIHRoaXMudmFsdWUuc2V0KGtleS52YWx1ZSwgdmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XHJcbiAgICAgICAgdGhpcy52YWx1ZS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGAke2tleX06ICR7dmFsdWV9YCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGB7JHtyZXN1bHQuam9pbignOyAnKX19YDtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9