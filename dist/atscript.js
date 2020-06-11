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





const conzole = new _console__WEBPACK_IMPORTED_MODULE_3__["Console"]();
const atscript = {
    execute: (source) => {
        const scanner = new _scanner__WEBPACK_IMPORTED_MODULE_0__["Scanner"]();
        const parser = new _parser__WEBPACK_IMPORTED_MODULE_1__["Parser"]();
        const interpreter = new _interpreter__WEBPACK_IMPORTED_MODULE_2__["Interpreter"]();
        const tokens = scanner.scan(source);
        if (scanner.errors.length) {
            scanner.errors.forEach((e) => {
                conzole.error(e);
            });
            return [];
        }
        const statements = parser.parse(tokens);
        if (parser.errors.length) {
            parser.errors.forEach((e) => {
                conzole.error(e);
            });
            return [];
        }
        return interpreter.interpet(statements);
    },
    interpreter: _interpreter__WEBPACK_IMPORTED_MODULE_2__["Interpreter"],
    parser: _parser__WEBPACK_IMPORTED_MODULE_1__["Parser"],
    scanner: _scanner__WEBPACK_IMPORTED_MODULE_0__["Scanner"]
};
if (typeof window !== 'undefined') {
    window.demoSourceCode = _demos_demo__WEBPACK_IMPORTED_MODULE_4__["DemoSourceCode"];
    window.atscript = atscript;
    window.conzole = conzole;
}
else {
    global.conzole = conzole;
    exports.atscript = atscript;
}

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
/*! exports provided: DemoSourceCode, DemoSourceCodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoSourceCode", function() { return DemoSourceCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoSourceCodes", function() { return DemoSourceCodes; });
const DemoSourceCode = `
var a = ['one', 'two', 'three'];
print a;
var b = [...a, 'four', 'five'];
print b;
`;
const DemoSourceCodes = `
// slicing strings
print "one two three four"[4:7:1]; // prints two
print "hello world"[6::1].size(); // 5
print "hello world"[::-1]; //prints dlrow olleh
// functions
function sayHello(text) {
    print text;
}
sayHello('hello');
// classes
class Person {
    constructor(name) {
        this.name = name;
    }
    hello() {
        print this.name + ' says hi';
    }
}
class Student extends Person {
    constructor(name, grade) {
        base.constructor(name);
        this.grade = grade;
    }
    hello() {
        base.hello();
        print 'from ' + this.grade + ' grade';
    }
}
var student = new Student('John', 3);
student.hello();
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
print 'factor of 11: ' + factorialize(11);
// same as factorialize but with ternary
// and short form function definition
@factor(n) =>
    n < 0 ? -1 : (n == 0 ? 1 : (n * factorialize(n - 1)));
print 'factor of 11: ' +factor(11);
// nested function returns function
@add(a) => @(b) => @(c) => a + b + c;
print add(100)(20)(3);
function sub(a) {
    return function (b) {
        return function (c) {
            return a - b - c;
        };
    };
}
print sub(100)(10)(1);
// while loop and ternary operator
var i = 0;
var counts = '';
while (i <= 10) {
    counts += i % 2 ? 'odd ' : 'even ';
    i = i + 1;
}
print counts;
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
// safe navigator operator ?.
print literal.safeNavigator?.propertyDoesNotExist;
var x = [1, 20, 300];
var y = [100, x[1]];
print y[0];
y.push(x);
y.newProperty = "anything";
print y.join(',');
var z = y.join('-');
// new scope test
{
    var a = {a: 'one'};
    var b = {b: 'two'};
    var c = a + b;
    print c; // prints {a: 'one', b: 'two'}
}
// new scope test
{
    var a = {d: 'three'};
    var b = {e: 'four'};
    var c = a + b;
    print c; // prints {d: 'three', e: 'four'}
}
// typeof, is, instanceof operator
print typeof Person;
print typeof student;
print 'Student is Class: ' + (Student is Class);
print 'student is Object: ' + (student is Object);
print 'student is Person: ' + (student is Person);
print 'student is Student: ' + (student is Student);
print 'student instanceof Person: ' + (student instanceof Person);
print typeof '' + 'string';


// iterators
var it = iter(['one', 'two', 'three']);
while (!it.next().done) {
    print it.value;
}

// foreach statement
foreach (item with key in ['one', 'two', 'three']) {
    print item;
}
`;


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
/* harmony import */ var _types_expression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/expression */ "./src/types/expression.ts");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scope */ "./src/scope.ts");
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token */ "./src/token.ts");
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./runtime */ "./src/runtime.ts");
/* harmony import */ var _types_any__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types/any */ "./src/types/any.ts");
/* harmony import */ var _types_boolean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types/boolean */ "./src/types/boolean.ts");
/* harmony import */ var _types_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types/class */ "./src/types/class.ts");
/* harmony import */ var _types_dictionary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types/dictionary */ "./src/types/dictionary.ts");
/* harmony import */ var _types_function__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types/function */ "./src/types/function.ts");
/* harmony import */ var _types_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./types/list */ "./src/types/list.ts");
/* harmony import */ var _types_null__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./types/null */ "./src/types/null.ts");
/* harmony import */ var _types_number__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./types/number */ "./src/types/number.ts");
/* harmony import */ var _types_object__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./types/object */ "./src/types/object.ts");
/* harmony import */ var _types_range__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./types/range */ "./src/types/range.ts");
/* harmony import */ var _types_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./types/string */ "./src/types/string.ts");
/* harmony import */ var _types_void__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./types/void */ "./src/types/void.ts");
/* harmony import */ var _types_type_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./types/type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _scanner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./scanner */ "./src/scanner.ts");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./parser */ "./src/parser.ts");
/* harmony import */ var _types_iterator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./types/iterator */ "./src/types/iterator.ts");





















class Interpreter {
    constructor() {
        this.global = new _scope__WEBPACK_IMPORTED_MODULE_1__["Scope"]();
        this.scope = this.global;
        this.errors = [];
        this.scanner = new _scanner__WEBPACK_IMPORTED_MODULE_18__["Scanner"]();
        this.parser = new _parser__WEBPACK_IMPORTED_MODULE_19__["Parser"]();
        this.strings = {
            next: new _types_string__WEBPACK_IMPORTED_MODULE_14__["$String"]('next')
        };
        this.global.set('math', new _types_dictionary__WEBPACK_IMPORTED_MODULE_7__["$Dictionary"](_runtime__WEBPACK_IMPORTED_MODULE_3__["Runtime"].Math));
        this.global.set('console', new _types_dictionary__WEBPACK_IMPORTED_MODULE_7__["$Dictionary"](_runtime__WEBPACK_IMPORTED_MODULE_3__["Runtime"].Console));
        this.global.set('re', _runtime__WEBPACK_IMPORTED_MODULE_3__["Runtime"].Utils.get('re'));
        this.global.set('iter', _runtime__WEBPACK_IMPORTED_MODULE_3__["Runtime"].Utils.get('iter'));
        this.parser.errorLevel = 0;
    }
    evaluate(expr) {
        return expr.result = expr.accept(this);
    }
    execute(stmt) {
        return stmt.result = stmt.accept(this);
    }
    eval(stmt) {
        try {
            return {
                error: false,
                value: stmt.accept(this).toString(),
            };
        }
        catch (e) {
            return {
                error: true,
                value: e.message
            };
        }
    }
    interpet(statements) {
        this.errors = [];
        for (const statement of statements) {
            try {
                this.execute(statement);
            }
            catch (e) {
                conzole.error(e.message);
                this.errors.push(e.message);
                if (this.errors.length > 100) {
                    this.errors.push('Runtime Error limit exceeded');
                    return statements;
                }
            }
        }
        return statements;
    }
    error(message) {
        throw new Error(`Runtime Error => ${message}`);
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
        let value = new _types_null__WEBPACK_IMPORTED_MODULE_10__["$Null"]();
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
        return this.scope.get(expr.name.lexeme, expr.name);
    }
    visitPostfixExpr(expr) {
        const value = this.scope.get(expr.name.lexeme, expr.name);
        const newValue = new _types_number__WEBPACK_IMPORTED_MODULE_11__["$Number"](value.value + expr.increment);
        this.scope.assign(expr.name.lexeme, newValue);
        return value;
    }
    visitListExpr(expr) {
        const values = [];
        for (const expression of expr.value) {
            if (expression instanceof _types_expression__WEBPACK_IMPORTED_MODULE_0__["Spread"]) {
                const value = this.evaluate(expression.value);
                for (let val of value.value) {
                    values.push(val);
                }
            }
            else {
                const value = this.evaluate(expression);
                values.push(value);
            }
        }
        return new _types_list__WEBPACK_IMPORTED_MODULE_9__["$List"](values);
    }
    visitZtringExpr(expr) {
        return new _types_string__WEBPACK_IMPORTED_MODULE_14__["$String"](expr.value);
    }
    templateParse(source) {
        const tokens = this.scanner.scan(source);
        const statements = this.parser.parse(tokens);
        if (this.parser.errors.length) {
            this.error(`Template string  error: ${this.parser.errors[0]}`);
        }
        let result = '';
        for (const statement of statements) {
            result += this.execute(statement).toString();
        }
        return result;
    }
    visitTemplateExpr(expr) {
        const result = expr.value.replace(/\$\{([\s\S]+?)\}/g, (m, placeholder) => {
            if (placeholder[placeholder.length] !== ';') {
                placeholder += ';';
            }
            return this.templateParse(placeholder);
        });
        return new _types_string__WEBPACK_IMPORTED_MODULE_14__["$String"](result);
    }
    visitRegExExpr(expr) {
        /*
        return new RegExEntity(expr.value);
        */ return new _types_null__WEBPACK_IMPORTED_MODULE_10__["$Null"]();
    }
    visitAssignExpr(expr) {
        const value = this.evaluate(expr.value);
        this.scope.assign(expr.name.lexeme, value);
        return value;
    }
    visitBinaryExpr(expr) {
        const left = this.evaluate(expr.left);
        const right = this.evaluate(expr.right);
        switch (expr.operator.type) {
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Minus:
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].MinusEqual:
                return new _types_number__WEBPACK_IMPORTED_MODULE_11__["$Number"](left.value - right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Slash:
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].SlashEqual:
                return new _types_number__WEBPACK_IMPORTED_MODULE_11__["$Number"](left.value / right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Star:
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].StarEqual:
                return new _types_number__WEBPACK_IMPORTED_MODULE_11__["$Number"](left.value * right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Percent:
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].PercentEqual:
                return new _types_number__WEBPACK_IMPORTED_MODULE_11__["$Number"](left.value % right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Plus:
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].PlusEqual:
                if (left.isNumber() && right.isNumber()) {
                    return new _types_number__WEBPACK_IMPORTED_MODULE_11__["$Number"](left.value + right.value);
                }
                if (left.isString() && right.isString()) {
                    return new _types_string__WEBPACK_IMPORTED_MODULE_14__["$String"](left.value + right.value);
                }
                if (left.isList() && right.isList()) {
                    return new _types_list__WEBPACK_IMPORTED_MODULE_9__["$List"](left.value.concat(right.value));
                }
                if (left.isDictionary() && right.isDictionary()) {
                    return new _types_dictionary__WEBPACK_IMPORTED_MODULE_7__["$Dictionary"](new Map([...left.value, ...right.value]));
                }
                return new _types_string__WEBPACK_IMPORTED_MODULE_14__["$String"](left.toString() + right.toString());
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Pipe:
                return new _types_number__WEBPACK_IMPORTED_MODULE_11__["$Number"](left.value | right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Caret:
                return new _types_number__WEBPACK_IMPORTED_MODULE_11__["$Number"](left.value ^ right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Greater:
                return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__["$Boolean"](left.value > right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].GreaterEqual:
                return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__["$Boolean"](left.value >= right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Less:
                return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__["$Boolean"](left.value < right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LessEqual:
                return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__["$Boolean"](left.value <= right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].EqualEqual:
                return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__["$Boolean"](left.value === right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].BangEqual:
                return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__["$Boolean"](left.value !== right.value);
            default:
                this.error('Unknown binary operator ' + expr.operator);
                return new _types_null__WEBPACK_IMPORTED_MODULE_10__["$Null"](); // unreachable
        }
    }
    visitLogicalExpr(expr) {
        const left = this.evaluate(expr.left);
        if (expr.operator.type === _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Or) {
            if (left.isTruthy()) {
                return left;
            }
        }
        else {
            if (!left.isTruthy()) {
                return left;
            }
        }
        return this.evaluate(expr.right);
    }
    visitTernaryExpr(expr) {
        return this.evaluate(expr.condition).isTruthy() ? this.evaluate(expr.thenExpr) : this.evaluate(expr.elseExpr);
    }
    visitNullCoalescingExpr(expr) {
        const left = this.evaluate(expr.left);
        if (left.isNull()) {
            return this.evaluate(expr.right);
        }
        return left;
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
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Minus:
                return new _types_number__WEBPACK_IMPORTED_MODULE_11__["$Number"](-Number(right.value));
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Bang:
                return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__["$Boolean"](!right.isTruthy());
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].PlusPlus:
            case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].MinusMinus:
                if (!right.isNumber()) {
                    this.error(`Invalid right-hand side expression in prefix operation:  "${_types_type_enum__WEBPACK_IMPORTED_MODULE_16__["DataType"][right.type]} ${right} is not a number`);
                }
                const newValue = Number(right.value) + (expr.operator.type === _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].PlusPlus ? 1 : -1);
                if (expr.right instanceof _types_expression__WEBPACK_IMPORTED_MODULE_0__["Variable"]) {
                    this.scope.assign(expr.right.name.lexeme, new _types_number__WEBPACK_IMPORTED_MODULE_11__["$Number"](newValue));
                }
                else if (expr.right instanceof _types_expression__WEBPACK_IMPORTED_MODULE_0__["Get"]) {
                    const assing = new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Set"](expr.right.entity, expr.right.key, new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Literal"](new _types_number__WEBPACK_IMPORTED_MODULE_11__["$Number"](newValue), expr.line), expr.line);
                    this.evaluate(assing);
                }
                else {
                    this.error(`Invalid right-hand side expression in prefix operation:  ${expr.right}`);
                }
                return new _types_number__WEBPACK_IMPORTED_MODULE_11__["$Number"](newValue);
            default:
                this.error(`Unknown unary operator ' + expr.operator`);
                return new _types_null__WEBPACK_IMPORTED_MODULE_10__["$Null"](); // should be unreachable
        }
    }
    executeBlock(statements, nextScope) {
        const currentScope = this.scope;
        this.scope = nextScope;
        for (const statement of statements) {
            statement.result = this.execute(statement);
        }
        this.scope = currentScope;
        return new _types_void__WEBPACK_IMPORTED_MODULE_15__["$Void"]('block');
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
            try {
                this.execute(stmt.loop);
            }
            catch (e) {
                if (e instanceof _types_any__WEBPACK_IMPORTED_MODULE_4__["$Any"] && e.type === _types_type_enum__WEBPACK_IMPORTED_MODULE_16__["DataType"].Break) {
                    break;
                }
                else if (e instanceof _types_any__WEBPACK_IMPORTED_MODULE_4__["$Any"] && e.type === _types_type_enum__WEBPACK_IMPORTED_MODULE_16__["DataType"].Continue) {
                    continue;
                }
                else {
                    throw e;
                }
            }
        }
        return new _types_void__WEBPACK_IMPORTED_MODULE_15__["$Void"]('while');
    }
    visitDoWhileStmt(stmt) {
        do {
            try {
                this.execute(stmt.loop);
            }
            catch (e) {
                if (e instanceof _types_any__WEBPACK_IMPORTED_MODULE_4__["$Any"] && e.type === _types_type_enum__WEBPACK_IMPORTED_MODULE_16__["DataType"].Break) {
                    break;
                }
                else if (e instanceof _types_any__WEBPACK_IMPORTED_MODULE_4__["$Any"] && e.type === _types_type_enum__WEBPACK_IMPORTED_MODULE_16__["DataType"].Continue) {
                    continue;
                }
                else {
                    throw e;
                }
            }
        } while (this.evaluate(stmt.condition).isTruthy());
        return new _types_void__WEBPACK_IMPORTED_MODULE_15__["$Void"]('dowhile');
    }
    visitForeachStmt(stmt) {
        const it = new _types_iterator__WEBPACK_IMPORTED_MODULE_20__["$Iterator"](this.evaluate(stmt.iterable));
        const restoreScope = this.scope;
        while (!_types_iterator__WEBPACK_IMPORTED_MODULE_20__["$Iterator"].next(it, [], this).iter.done.value) {
            const foreachScope = new _scope__WEBPACK_IMPORTED_MODULE_1__["Scope"](this.scope);
            foreachScope.set(stmt.name.lexeme, it.iter.value);
            if (stmt.key) {
                foreachScope.set(stmt.key.lexeme, it.iter.index);
            }
            try {
                this.executeBlock([stmt.loop], foreachScope);
            }
            catch (e) {
                this.scope = restoreScope;
                if (e instanceof _types_any__WEBPACK_IMPORTED_MODULE_4__["$Any"] && e.type === _types_type_enum__WEBPACK_IMPORTED_MODULE_16__["DataType"].Break) {
                    break;
                }
                else if (e instanceof _types_any__WEBPACK_IMPORTED_MODULE_4__["$Any"] && e.type === _types_type_enum__WEBPACK_IMPORTED_MODULE_16__["DataType"].Continue) {
                    continue;
                }
                else {
                    throw e;
                }
            }
        }
        return new _types_void__WEBPACK_IMPORTED_MODULE_15__["$Void"]('foreach');
    }
    visitCallExpr(expr) {
        // verify callee is a function
        const callee = this.evaluate(expr.callee);
        if (!callee.isFunction()) {
            this.error(`${callee} is not a function`);
        }
        // set this in function scope
        let thiz = null;
        if (expr.callee instanceof _types_expression__WEBPACK_IMPORTED_MODULE_0__["Get"]) {
            if (expr.callee.entity instanceof _types_expression__WEBPACK_IMPORTED_MODULE_0__["Base"]) {
                thiz = this.scope.get('this', expr.paren);
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
            if (argument instanceof _types_expression__WEBPACK_IMPORTED_MODULE_0__["Spread"]) {
                const value = this.evaluate(argument.value);
                for (let val of value.value) {
                    args.push(val);
                }
            }
            else {
                args.push(this.evaluate(argument));
            }
        }
        // pass arguments to function
        const func = callee;
        if (args.length !== func.arity && func.arity !== -1) {
            conzole.warn(`Warning at (${expr.paren.line}): ${callee} mismatched argument count; \n Expected ${func.arity} but got ${args.length} `);
            if (args.length < func.arity) {
                for (let i = args.length; i <= func.arity; ++i) {
                    args.push(new _types_null__WEBPACK_IMPORTED_MODULE_10__["$Null"]());
                }
            }
        }
        // execute function
        return func.call(thiz, args, this);
    }
    visitBaseExpr(expr) {
        const thiz = this.scope.get(expr.paren.lexeme, expr.paren);
        if (!thiz.isObject()) {
            this.error("base expression can be used only inside methods");
        }
        const clazz = thiz.conztructor;
        const parent = clazz.parent;
        if (parent.isNull()) {
            this.error("Class " + clazz + " has not been extended and has no base");
        }
        return parent;
    }
    visitNewExpr(expr) {
        const newCall = expr.clazz;
        // internal class definition instance
        const clazz = this.evaluate(newCall.callee);
        if (!clazz.isClass()) {
            this.error(`'${clazz}' is not a class. 'new' statement must be used with classes.`);
        }
        // new object
        const entity = new _types_object__WEBPACK_IMPORTED_MODULE_12__["$Object"](new Map(), clazz);
        // constructor method of the class
        const conztructor = clazz.get(new _types_string__WEBPACK_IMPORTED_MODULE_14__["$String"]('constructor'));
        if (conztructor.isFunction()) {
            /*
            const args: $Any[] = [];
            for (const arg of newCall.args) {
                args.push(this.evaluate(arg));
            }
            conztructor.call(this, entity, args);
            */
            this.evaluate(new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Call"](new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Get"](new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Literal"](entity, expr.line), new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Key"](conztructor.declaration.name, expr.line), _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Dot, expr.line), conztructor.declaration.name, newCall.args, entity, expr.line));
        }
        return entity;
    }
    visitDictionaryExpr(expr) {
        const dict = new _types_dictionary__WEBPACK_IMPORTED_MODULE_7__["$Dictionary"](new Map());
        for (const property of expr.properties) {
            const key = this.evaluate(property.key);
            const value = this.evaluate(property.value);
            dict.set(key, value);
        }
        return dict;
    }
    visitKeyExpr(expr) {
        return new _types_any__WEBPACK_IMPORTED_MODULE_4__["$Any"](expr.name.literal);
    }
    visitGetExpr(expr) {
        const entity = this.evaluate(expr.entity);
        const key = this.evaluate(expr.key);
        if (entity.isNull() && expr.type === _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].QuestionDot) {
            return new _types_null__WEBPACK_IMPORTED_MODULE_10__["$Null"]();
        }
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
        const func = new _types_function__WEBPACK_IMPORTED_MODULE_8__["$Function"](stmt, this.scope);
        this.scope.define(stmt.name.lexeme, func);
        return func;
    }
    visitClassStmt(stmt) {
        let parent;
        if (stmt.parent === null) {
            parent = new _types_null__WEBPACK_IMPORTED_MODULE_10__["$Null"]();
        }
        else {
            parent = this.scope.get(stmt.parent.lexeme, stmt.parent);
        }
        const methods = new Map();
        for (const method of stmt.methods) {
            methods.set(method.name.lexeme, new _types_function__WEBPACK_IMPORTED_MODULE_8__["$Function"](method, this.scope));
        }
        const clazz = new _types_class__WEBPACK_IMPORTED_MODULE_6__["$Class"](stmt.name.lexeme, methods, parent);
        this.scope.define(stmt.name.lexeme, clazz);
        return clazz;
    }
    visitLambdaExpr(expr) {
        const lambda = expr.lambda;
        const func = new _types_function__WEBPACK_IMPORTED_MODULE_8__["$Function"](lambda, this.scope);
        return func;
    }
    visitReturnStmt(stmt) {
        let value = new _types_null__WEBPACK_IMPORTED_MODULE_10__["$Null"]();
        if (stmt.value) {
            value = this.evaluate(stmt.value);
        }
        throw new _types_any__WEBPACK_IMPORTED_MODULE_4__["$Any"](value, _types_type_enum__WEBPACK_IMPORTED_MODULE_16__["DataType"].Return);
    }
    visitBreakStmt(stmt) {
        throw new _types_any__WEBPACK_IMPORTED_MODULE_4__["$Any"](null, _types_type_enum__WEBPACK_IMPORTED_MODULE_16__["DataType"].Break);
    }
    visitContinueStmt(stmt) {
        throw new _types_any__WEBPACK_IMPORTED_MODULE_4__["$Any"](null, _types_type_enum__WEBPACK_IMPORTED_MODULE_16__["DataType"].Continue);
    }
    visitRangeExpr(expr) {
        return new _types_range__WEBPACK_IMPORTED_MODULE_13__["$Range"](new _types_range__WEBPACK_IMPORTED_MODULE_13__["RangeValue"](expr.start ? this.evaluate(expr.start).value : null, expr.end ? this.evaluate(expr.end).value : null, expr.step ? this.evaluate(expr.step).value : null));
    }
    visitTypeofExpr(expr) {
        const value = this.evaluate(expr.value);
        return new _types_string__WEBPACK_IMPORTED_MODULE_14__["$String"](_types_type_enum__WEBPACK_IMPORTED_MODULE_16__["DataType"][value.type].toLowerCase());
    }
    visitIsExpr(expr) {
        const left = this.evaluate(expr.left);
        const right = _types_type_enum__WEBPACK_IMPORTED_MODULE_16__["DataType"][Object(_utils__WEBPACK_IMPORTED_MODULE_17__["capitalize"])(expr.right.lexeme)];
        // is direct instance of class
        if (left.isObject() && left.name === expr.right.lexeme) {
            return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__["$Boolean"](true);
        }
        // is not a type
        if (typeof right === 'undefined' || isNaN(right)) {
            return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__["$Boolean"](false);
        }
        // is a type
        return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__["$Boolean"](left.type === right);
    }
    visitInstanceOfExpr(expr) {
        const left = this.evaluate(expr.left);
        if (!left.isObject()) {
            return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__["$Boolean"](false);
        }
        const className = expr.right.lexeme;
        // All instances derive from Object
        if (className.toLowerCase() === 'object') {
            return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__["$Boolean"](true);
        }
        const instance = left;
        let conztructor = instance.conztructor;
        if (conztructor.name === className) {
            return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__["$Boolean"](true);
        }
        while (!conztructor.parent.isNull()) {
            conztructor = conztructor.parent;
            if (conztructor.name === className) {
                return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__["$Boolean"](true);
            }
        }
        return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__["$Boolean"](false);
    }
    visitVoidExpr(expr) {
        this.evaluate(expr.value);
        return new _types_null__WEBPACK_IMPORTED_MODULE_10__["$Null"]();
    }
    visitInExpr(expr) {
        const key = this.evaluate(expr.key);
        const entity = this.evaluate(expr.entity);
        if (entity.isKeyValue()) {
            return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__["$Boolean"](entity.value.has(key.value));
        }
        if (entity.isList()) {
            return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__["$Boolean"](typeof entity.value[key.value] !== 'undefined');
        }
        if (entity.isString()) {
            return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__["$Boolean"](entity.value.includes(key.value));
        }
        this.error(`Operator "in" can't be used on type ${_types_type_enum__WEBPACK_IMPORTED_MODULE_16__["DataType"][entity.type]} with value "${entity}"`);
        return new _types_null__WEBPACK_IMPORTED_MODULE_10__["$Null"]();
    }
    visitSpreadExpr(expr) {
        this.error(`unexpected spread '...' operator at line ${expr.line}`);
        return new _types_null__WEBPACK_IMPORTED_MODULE_10__["$Null"]();
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
/* harmony import */ var _types_expression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/expression */ "./src/types/expression.ts");
/* harmony import */ var _types_statement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/statement */ "./src/types/statement.ts");
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token */ "./src/token.ts");
/* harmony import */ var _types_boolean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types/boolean */ "./src/types/boolean.ts");
/* harmony import */ var _types_null__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types/null */ "./src/types/null.ts");
/* harmony import */ var _types_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types/number */ "./src/types/number.ts");
/* harmony import */ var _types_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types/error */ "./src/types/error.ts");







class Parser {
    constructor() {
        this.errorLevel = 1;
    }
    parse(tokens) {
        this.current = 0;
        this.tokens = tokens;
        this.errors = [];
        const statements = [];
        while (!this.eof()) {
            try {
                statements.push(this.declaration());
            }
            catch (e) {
                if (e instanceof _types_error__WEBPACK_IMPORTED_MODULE_6__["$Error"]) {
                    this.errors.push(`Parse Error (${e.line}:${e.col}) => ${e.value}`);
                }
                else {
                    this.errors.push(e);
                    if (this.errors.length > 100) {
                        this.errors.push('Parse Error limit exceeded');
                        return statements;
                    }
                }
                this.synchronize();
            }
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
        return this.error(this.previous(), message + `, unexpected token "${this.peek().lexeme}"`);
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
    error(token, message) {
        throw new _types_error__WEBPACK_IMPORTED_MODULE_6__["$Error"](message, token.line, token.col);
    }
    warning(message) {
        if (this.errorLevel === 1) {
            const token = this.previous();
            conzole.warn(`[line (${token.line}) parse warning at "${token.lexeme}"] => ${message}`);
        }
    }
    synchronize() {
        do {
            switch (this.peek().type) {
                case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Class:
                case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Function:
                case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Var:
                case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].For:
                case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].If:
                case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].While:
                case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Do:
                case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Print:
                case _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Return:
                    this.advance();
                    return;
            }
            if (this.peek().type === _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Semicolon || this.peek().type === _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightBrace) {
                this.advance();
                return;
            }
            this.advance();
        } while (!this.eof());
    }
    declaration() {
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
    classDeclaration() {
        const name = this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Identifier, `Expected a class name`);
        let parent = null;
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Extends)) {
            parent = this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Identifier, `Expected a parent name`);
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LeftBrace, `Expected open brace "{" after class name`);
        const methods = [];
        while (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightBrace) && !this.eof()) {
            if (this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Function)) {
                this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Function, '');
            }
            methods.push(this.funcDeclaration("method"));
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightBrace, `Expected "}" after class "${name.literal}" methods`);
        if (this.extraSemicolon()) {
            this.warning(`Unnecessary semicolon after class ${name.lexeme} declaration`);
        }
        return new _types_statement__WEBPACK_IMPORTED_MODULE_1__["Class"](name, parent, methods, name.line);
    }
    funcDeclaration(kind) {
        const name = this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Identifier, `Expected a ${kind} name`);
        return this.funcParamsBody(name, kind);
    }
    funcParams(kind) {
        const params = [];
        if (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightParen)) {
            do {
                if (params.length >= 255) {
                    this.error(this.peek(), `Parameter count exceeds 255`);
                }
                params.push(this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Identifier, `Expected a parameter name`));
            } while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Comma));
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightParen, `Expected close parenthesis ")" after ${kind} parameters`);
        return params;
    }
    funcParamsBody(name, kind) {
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LeftParen, `Expected open parenthesis "(" after ${kind}`);
        const params = this.funcParams(kind);
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LeftBrace)) {
            const body = this.block();
            if (name.type !== _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Lambda && this.extraSemicolon()) {
                this.warning(`Unnecessary semicolon after function ${name.lexeme} declaration`);
            }
            return new _types_statement__WEBPACK_IMPORTED_MODULE_1__["Func"](name, params, body, name.line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Arrow)) {
            const body = [];
            let arrow;
            const keyword = this.previous();
            if (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Semicolon)) {
                arrow = this.expression();
            }
            this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Semicolon);
            body.push(new _types_statement__WEBPACK_IMPORTED_MODULE_1__["Return"](keyword, arrow, keyword.line));
            return new _types_statement__WEBPACK_IMPORTED_MODULE_1__["Func"](name, params, body, name.line);
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LeftBrace, `Expect "{" before ${kind} body`);
    }
    varDeclaration() {
        const name = this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Identifier, `Expected a variable name after "var" keyword`);
        let initializer = null;
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Equal)) {
            initializer = this.expression();
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Semicolon, `Expected semicolon ";" after a variable declaration`);
        return new _types_statement__WEBPACK_IMPORTED_MODULE_1__["Var"](name, null, initializer, name.line);
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
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Foreach)) {
            return this.foreachStatement();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LeftBrace)) {
            return new _types_statement__WEBPACK_IMPORTED_MODULE_1__["Block"](this.block(), this.previous().line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Return)) {
            return this.returnStatement();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Break)) {
            return this.breakStatement();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Continue)) {
            return this.continueStatement();
        }
        return this.expressionStatement();
    }
    ifStatement() {
        const keyword = this.previous();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LeftParen, `Expected open parenthesis "(" after an "if" keyword`);
        const condition = this.expression();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightParen, `Expected close parenthesis ")" after "if" statement condition`);
        const thenStmt = this.statement();
        let elseStmt = null;
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Else)) {
            elseStmt = this.statement();
        }
        return new _types_statement__WEBPACK_IMPORTED_MODULE_1__["If"](condition, thenStmt, elseStmt, keyword.line);
    }
    whileStatement() {
        const keyword = this.previous();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LeftParen, `Expected open parenthesis "(" after a "while" statement`);
        const condition = this.expression();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightParen, `Expected close parenthesis ")" after "while" condition`);
        const loop = this.statement();
        return new _types_statement__WEBPACK_IMPORTED_MODULE_1__["While"](condition, loop, keyword.line);
    }
    forStatement() {
        const keyword = this.previous();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LeftParen, `Expected open parenthesis "(" after a "for" statement`);
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
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Semicolon, `Expected semicolon ";" after a "for" statement loop condition`);
        let increment;
        if (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightParen)) {
            increment = this.expression();
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightParen, `Expected semicolon ";" after a "for" stement increment expression`);
        let body = this.statement();
        if (increment !== null) {
            body = new _types_statement__WEBPACK_IMPORTED_MODULE_1__["Block"]([
                body,
                new _types_statement__WEBPACK_IMPORTED_MODULE_1__["Expression"](increment, keyword.line)
            ], keyword.line);
        }
        if (condition === null) {
            condition = new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Literal"](new _types_boolean__WEBPACK_IMPORTED_MODULE_3__["$Boolean"](true), keyword.line);
        }
        body = new _types_statement__WEBPACK_IMPORTED_MODULE_1__["While"](condition, body, keyword.line);
        if (initializer !== null) {
            body = new _types_statement__WEBPACK_IMPORTED_MODULE_1__["Block"]([
                initializer,
                body
            ], keyword.line);
        }
        return body;
    }
    foreachStatement() {
        const keyword = this.previous();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LeftParen, `Expected open parenthesis "(" after a "foreach" statement`);
        const name = this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Identifier, `Expected an identifier inside "foreach" statement`);
        let key = null;
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].With)) {
            key = this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Identifier, `Expected a "key" identifier after "with" keyword in foreach statement`);
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].In, `Expected "in" keyword inside foreach statement`);
        const iterable = this.expression();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightParen, `Expected close parenthesis ")" after a "foreach" initialization`);
        const loop = this.statement();
        return new _types_statement__WEBPACK_IMPORTED_MODULE_1__["Foreach"](name, key, iterable, loop, keyword.line);
    }
    doWhileStatement() {
        const keyword = this.previous();
        const loop = this.statement();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].While, `Expected a "while" condition after "do" statement`);
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LeftParen, `Expected open parenthesis "(" after a "while" keyword`);
        const condition = this.expression();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightParen, `Expected close parenthesis ")" after "while" condition`);
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Semicolon, `Expected semicolon ";" after a do while condition`);
        return new _types_statement__WEBPACK_IMPORTED_MODULE_1__["DoWhile"](loop, condition, keyword.line);
    }
    printStatement() {
        const keyword = this.previous();
        const value = this.expression();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Semicolon, `Expected semicolon ";" after expression`);
        return new _types_statement__WEBPACK_IMPORTED_MODULE_1__["Print"](value, keyword.line);
    }
    returnStatement() {
        const keyword = this.previous();
        let value = null;
        if (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Semicolon)) {
            value = this.expression();
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Semicolon, `Exected semicolon ";" after return statement`);
        return new _types_statement__WEBPACK_IMPORTED_MODULE_1__["Return"](keyword, value, keyword.line);
    }
    breakStatement() {
        const keyword = this.previous();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Semicolon, `Exected semicolon ";" after break statement`);
        return new _types_statement__WEBPACK_IMPORTED_MODULE_1__["Break"](keyword, keyword.line);
    }
    continueStatement() {
        const keyword = this.previous();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Semicolon, `Exected semicolon ";" after continue statement`);
        return new _types_statement__WEBPACK_IMPORTED_MODULE_1__["Continue"](keyword, keyword.line);
    }
    block() {
        const statements = [];
        while (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightBrace) && !this.eof()) {
            statements.push(this.declaration());
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightBrace, `Expected close brace "}" after block statement`);
        return statements;
    }
    expressionStatement() {
        const expression = this.expression();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Semicolon, `Expected semicolon ";" after ${expression} expression`);
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Semicolon)) {
            const token = this.previous();
            this.warning(`[line (${token.line}) parse warning at "${token.lexeme}"] => unnecessary semicolon or empty statement`);
            // consume all semicolons
            // tslint:disable-next-line
            while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Semicolon)) { }
            ;
        }
        return new _types_statement__WEBPACK_IMPORTED_MODULE_1__["Expression"](expression, expression.line);
    }
    expression() {
        return this.assignment();
    }
    assignment() {
        const expr = this.ternary();
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Equal, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].PlusEqual, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].MinusEqual, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].StarEqual, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].SlashEqual)) {
            const operator = this.previous();
            let value = this.assignment();
            if (expr instanceof _types_expression__WEBPACK_IMPORTED_MODULE_0__["Variable"]) {
                const name = expr.name;
                if (operator.type !== _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Equal) {
                    value = new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Binary"](new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Variable"](name, name.line), operator, value, operator.line);
                }
                return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Assign"](name, value, name.line);
            }
            else if (expr instanceof _types_expression__WEBPACK_IMPORTED_MODULE_0__["Get"]) {
                if (operator.type !== _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Equal) {
                    value = new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Binary"](new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Get"](expr.entity, expr.key, expr.type, expr.line), operator, value, operator.line);
                }
                return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Set"](expr.entity, expr.key, value, expr.line);
            }
            this.error(operator, `Invalid l-value, is not an assigning target.`);
        }
        return expr;
    }
    ternary() {
        const expr = this.nullCoalescing();
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Question)) {
            const thenExpr = this.ternary();
            this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Colon, `Expected ":" after ternary ? expression`);
            const elseExpr = this.ternary();
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Ternary"](expr, thenExpr, elseExpr, expr.line);
        }
        return expr;
    }
    nullCoalescing() {
        const expr = this.logicalOr();
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].QuestionQuestion)) {
            const rightExpr = this.nullCoalescing();
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["NullCoalescing"](expr, rightExpr, expr.line);
        }
        return expr;
    }
    logicalOr() {
        let expr = this.logicalAnd();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Or)) {
            const operator = this.previous();
            const right = this.logicalAnd();
            expr = new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Logical"](expr, operator, right, operator.line);
        }
        return expr;
    }
    logicalAnd() {
        let expr = this.equality();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].And)) {
            const operator = this.previous();
            const right = this.equality();
            expr = new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Logical"](expr, operator, right, operator.line);
        }
        return expr;
    }
    equality() {
        let expr = this.instanceof();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].BangEqual, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].EqualEqual)) {
            const operator = this.previous();
            const right = this.instanceof();
            expr = new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Binary"](expr, operator, right, operator.line);
        }
        return expr;
    }
    instanceof() {
        let expr = this.in();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Is, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Instanceof)) {
            const operator = this.previous();
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Identifier, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Class, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Function, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Null)) {
                const right = this.previous();
                if (operator.type === _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Instanceof) {
                    expr = new _types_expression__WEBPACK_IMPORTED_MODULE_0__["InstanceOf"](expr, right, operator.line);
                }
                else {
                    expr = new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Is"](expr, right, operator.line);
                }
            }
            else {
                this.error(this.previous(), `Expected a Type or ClassName identifier after "is" operator`);
            }
        }
        return expr;
    }
    in() {
        let expr = this.comparison();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].In)) {
            const operator = this.previous();
            const entity = this.expression();
            expr = new _types_expression__WEBPACK_IMPORTED_MODULE_0__["In"](expr, entity, operator.line);
        }
        return expr;
    }
    comparison() {
        let expr = this.addition();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Greater, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].GreaterEqual, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Less, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LessEqual)) {
            const operator = this.previous();
            const right = this.addition();
            expr = new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Binary"](expr, operator, right, operator.line);
        }
        return expr;
    }
    addition() {
        let expr = this.modulus();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Minus, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Plus)) {
            const operator = this.previous();
            const right = this.modulus();
            expr = new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Binary"](expr, operator, right, operator.line);
        }
        return expr;
    }
    modulus() {
        let expr = this.multiplication();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Percent)) {
            const operator = this.previous();
            const right = this.multiplication();
            expr = new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Binary"](expr, operator, right, operator.line);
        }
        return expr;
    }
    multiplication() {
        let expr = this.typeof();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Slash, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Star)) {
            const operator = this.previous();
            const right = this.typeof();
            expr = new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Binary"](expr, operator, right, operator.line);
        }
        return expr;
    }
    typeof() {
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Typeof)) {
            const operator = this.previous();
            const value = this.typeof();
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Typeof"](value, operator.line);
        }
        return this.unary();
    }
    unary() {
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Minus, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Bang, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Dollar, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].PlusPlus, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].MinusMinus)) {
            const operator = this.previous();
            const right = this.unary();
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Unary"](operator, right, operator.line);
        }
        return this.newKeyword();
    }
    newKeyword() {
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].New)) {
            const keyword = this.previous();
            const construct = this.call();
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["New"](construct, keyword.line);
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
                    expr = new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Call"](expr, paren, args, null, paren.line);
                } while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LeftParen));
            }
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Dot, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].QuestionDot)) {
                consumed = true;
                expr = this.dotGet(expr, this.previous());
            }
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LeftBracket)) {
                consumed = true;
                expr = this.bracketGet(expr, this.previous());
            }
        } while (consumed);
        return expr;
    }
    dotGet(expr, operator) {
        const name = this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Identifier, `Expect property name after '.'`);
        const key = new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Key"](name, name.line);
        return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Get"](expr, key, operator.type, name.line);
    }
    bracketGet(expr, operator) {
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
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightBracket, `Expected "]" after an index`);
        if (!key || end || step) {
            const range = new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Range"](key, end, step, operator.line);
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Get"](expr, range, operator.type, operator.line);
        }
        return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Get"](expr, key, operator.type, operator.line);
    }
    primary() {
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].False)) {
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Literal"](new _types_boolean__WEBPACK_IMPORTED_MODULE_3__["$Boolean"](false), this.previous().line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].True)) {
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Literal"](new _types_boolean__WEBPACK_IMPORTED_MODULE_3__["$Boolean"](true), this.previous().line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Null)) {
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Literal"](new _types_null__WEBPACK_IMPORTED_MODULE_4__["$Null"](), this.previous().line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Number)) {
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Literal"](new _types_number__WEBPACK_IMPORTED_MODULE_5__["$Number"](this.previous().literal), this.previous().line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].String)) {
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Ztring"](this.previous().literal, this.previous().line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Template)) {
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Template"](this.previous().literal, this.previous().line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Regex)) {
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["RegEx"](this.previous().literal, this.previous().line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Base)) {
            const paren = this.previous();
            paren.lexeme = 'this';
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Base"](paren, paren.line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Identifier)) {
            const identifier = this.previous();
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].PlusPlus)) {
                return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Postfix"](identifier, 1, identifier.line);
            }
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].MinusMinus)) {
                return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Postfix"](identifier, -1, identifier.line);
            }
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Variable"](identifier, identifier.line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LeftParen)) {
            const expr = this.expression();
            this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightParen, `Expected ")" after expression`);
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Grouping"](expr, expr.line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LeftBrace)) {
            return this.dictionary();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Function)) {
            const token = new _token__WEBPACK_IMPORTED_MODULE_2__["Token"](_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Lambda, '@', '@', this.previous().line, this.previous().col);
            const lambda = this.funcParamsBody(token, 'lambda');
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Lambda"](lambda, token.line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].LeftBracket)) {
            return this.list();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Void)) {
            const expr = this.expression();
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Void"](expr, this.previous().line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].DotDotDot)) {
            const expr = this.expression();
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Spread"](expr, this.previous().line);
        }
        throw this.error(this.peek(), `Expected expression, unexpected token "${this.peek().lexeme}"`);
        // unreacheable code
        return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Literal"](null, 0);
    }
    dictionary() {
        const leftBrace = this.previous();
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightBrace)) {
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Dictionary"]([], this.previous().line);
        }
        const properties = [];
        do {
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].String, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Identifier, _token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Number)) {
                const key = this.previous();
                this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Colon, `Expected ":" colon after member`);
                const value = this.expression();
                properties.push(new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Set"](null, new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Key"](key, key.line), value, key.line));
            }
            else {
                this.error(this.peek(), `String, Number or Identifier expected as a Key of Dictionary {, unexpected token ${this.peek().lexeme}`);
            }
        } while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Comma));
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightBrace, `Expected "}" after object literal`);
        return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["Dictionary"](properties, leftBrace.line);
    }
    list() {
        const values = [];
        const leftBracket = this.previous();
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightBracket)) {
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["List"]([], this.previous().line);
        }
        do {
            values.push(this.expression());
        } while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].Comma));
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__["TokenType"].RightBracket, `Expected "]" after array declaration`);
        return new _types_expression__WEBPACK_IMPORTED_MODULE_0__["List"](values, leftBracket.line);
    }
}


/***/ }),

/***/ "./src/runtime.ts":
/*!************************!*\
  !*** ./src/runtime.ts ***!
  \************************/
/*! exports provided: fromJavaScriptMethod, fromJavaScriptFuncNumber, fromJavaScriptFuncVoid, Runtime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromJavaScriptMethod", function() { return fromJavaScriptMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromJavaScriptFuncNumber", function() { return fromJavaScriptFuncNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromJavaScriptFuncVoid", function() { return fromJavaScriptFuncVoid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Runtime", function() { return Runtime; });
/* harmony import */ var _types_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _types_null__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/null */ "./src/types/null.ts");
/* harmony import */ var _types_any__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/any */ "./src/types/any.ts");
/* harmony import */ var _types_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types/function */ "./src/types/function.ts");
/* harmony import */ var _types_boolean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types/boolean */ "./src/types/boolean.ts");
/* harmony import */ var _types_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types/list */ "./src/types/list.ts");
/* harmony import */ var _types_number__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types/number */ "./src/types/number.ts");
/* harmony import */ var _types_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types/string */ "./src/types/string.ts");
/* harmony import */ var _types_void__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types/void */ "./src/types/void.ts");
/* harmony import */ var _types_regex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./types/regex */ "./src/types/regex.ts");
/* harmony import */ var _types_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./types/iterator */ "./src/types/iterator.ts");











function fromJavaScriptMethod(jsName, arity, type) {
    return new _types_function__WEBPACK_IMPORTED_MODULE_3__["$Callable"](jsName, arity, (thiz, args) => {
        const argValues = args.map((arg) => arg.value);
        const result = thiz.value[jsName](...argValues);
        switch (type) {
            case _types_type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Boolean:
                return new _types_boolean__WEBPACK_IMPORTED_MODULE_4__["$Boolean"](result);
            case _types_type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].String:
                return new _types_string__WEBPACK_IMPORTED_MODULE_7__["$String"](result);
            case _types_type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Number:
                return new _types_number__WEBPACK_IMPORTED_MODULE_6__["$Number"](result);
            case _types_type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].List:
                return new _types_list__WEBPACK_IMPORTED_MODULE_5__["$List"](result);
            case _types_type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Null:
                return new _types_null__WEBPACK_IMPORTED_MODULE_1__["$Null"]();
            default:
                return new _types_any__WEBPACK_IMPORTED_MODULE_2__["$Any"](result);
        }
    });
}
function fromJavaScriptFuncNumber(func, name, arity) {
    return new _types_function__WEBPACK_IMPORTED_MODULE_3__["$Callable"](name, arity, (thiz, args) => {
        const argValues = args.map((arg) => arg.value);
        const result = func(...argValues);
        return new _types_number__WEBPACK_IMPORTED_MODULE_6__["$Number"](result);
    });
}
function fromJavaScriptFuncVoid(func, name, arity) {
    return new _types_function__WEBPACK_IMPORTED_MODULE_3__["$Callable"](name, arity, (thiz, args) => {
        const argValues = args.map((arg) => arg.value);
        func(...argValues);
        return new _types_void__WEBPACK_IMPORTED_MODULE_8__["$Void"]('void');
    });
}
const Runtime = {
    Console: new Map([
        ['log', fromJavaScriptFuncVoid(console.log, 'console.log', -1)],
        ['warn', fromJavaScriptFuncVoid(console.warn, 'console.warn', -1)],
        ['info', fromJavaScriptFuncVoid(console.info, 'console.info', -1)],
        ['error', fromJavaScriptFuncVoid(console.error, 'console.error', -1)]
    ]),
    Math: new Map([
        ['ceil', fromJavaScriptFuncNumber(Math.ceil, 'ceil', 1)],
        ['cos', fromJavaScriptFuncNumber(Math.cos, 'cos', 1)],
        ['floor', fromJavaScriptFuncNumber(Math.floor, 'floor', 1)],
        ['log', fromJavaScriptFuncNumber(Math.log, 'log', 1)],
        ['max', fromJavaScriptFuncNumber(Math.max, 'max', -1)],
        ['min', fromJavaScriptFuncNumber(Math.min, 'min', -1)],
        ['pi', new _types_number__WEBPACK_IMPORTED_MODULE_6__["$Number"](Math.PI)],
        ['pow', fromJavaScriptFuncNumber(Math.pow, 'pow', 2)],
        ['random', fromJavaScriptFuncNumber(Math.random, 'random', 0)],
        ['round', fromJavaScriptFuncNumber(Math.round, 'round', 1)],
        ['sin', fromJavaScriptFuncNumber(Math.sin, 'sin', 1)],
        ['sqrt', fromJavaScriptFuncNumber(Math.sqrt, 'sqrt', 1)],
        ['tan', fromJavaScriptFuncNumber(Math.tan, 'tan', 1)],
        ['trunc', fromJavaScriptFuncNumber(Math.trunc, 'trunc', 1)]
    ]),
    Utils: new Map([
        ['re', new _types_function__WEBPACK_IMPORTED_MODULE_3__["$Callable"]('regex', -1, (thiz, args) => {
                const values = args.map((arg) => arg.value);
                if (values.length === 1) {
                    return new _types_regex__WEBPACK_IMPORTED_MODULE_9__["$RegExp"](new RegExp(values[0]));
                }
                return new _types_regex__WEBPACK_IMPORTED_MODULE_9__["$RegExp"](new RegExp(values[0], values[1]));
            })],
        ['iter', new _types_function__WEBPACK_IMPORTED_MODULE_3__["$Callable"]('iter', 1, (thiz, args) => {
                return new _types_iterator__WEBPACK_IMPORTED_MODULE_10__["$Iterator"](args[0]);
            })]
    ])
};


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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");


class Scanner {
    scan(source) {
        this.source = source;
        this.tokens = [];
        this.errors = [];
        this.current = 0;
        this.start = 0;
        this.line = 1;
        this.col = 1;
        while (!this.eof()) {
            this.start = this.current;
            try {
                this.getToken();
            }
            catch (e) {
                this.errors.push(e.message);
                if (this.errors.length > 100) {
                    this.errors.push('Error limit exceeded');
                    return this.tokens;
                }
            }
        }
        this.tokens.push(new _token__WEBPACK_IMPORTED_MODULE_0__["Token"](_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Eof, '', null, this.line, 0));
        return this.tokens;
    }
    eof() {
        return this.current >= this.source.length;
    }
    advance() {
        if (this.peek() === '\n') {
            this.line++;
            this.col = 0;
        }
        this.current++;
        this.col++;
        return this.source.charAt(this.current - 1);
    }
    addToken(tokenType, literal) {
        const text = this.source.substring(this.start, this.current);
        this.tokens.push(new _token__WEBPACK_IMPORTED_MODULE_0__["Token"](tokenType, text, literal, this.line, this.col));
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
    multilineComment() {
        while (!this.eof() && !(this.peek() === '*' && this.peekNext() === '/')) {
            this.advance();
        }
        if (this.eof()) {
            this.error('Unterminated comment, expecting closing "*/"');
        }
        else {
            // the closing slash '*/'
            this.advance();
            this.advance();
        }
    }
    string(quote) {
        while (this.peek() !== quote && !this.eof()) {
            this.advance();
        }
        // Unterminated string.
        if (this.eof()) {
            this.error(`Unterminated string, expecting closing ${quote}`);
            return;
        }
        // The closing ".
        this.advance();
        // Trim the surrounding quotes.
        const value = this.source.substring(this.start + 1, this.current - 1);
        this.addToken(quote !== '`' ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].String : _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Template, value);
    }
    number() {
        // gets integer part
        while (_utils__WEBPACK_IMPORTED_MODULE_1__["isDigit"](this.peek())) {
            this.advance();
        }
        // checks for fraction
        if (this.peek() === '.' && _utils__WEBPACK_IMPORTED_MODULE_1__["isDigit"](this.peekNext())) {
            this.advance();
        }
        // gets fraction part
        while (_utils__WEBPACK_IMPORTED_MODULE_1__["isDigit"](this.peek())) {
            this.advance();
        }
        // checks for exponent
        if (this.peek().toLowerCase() === 'e') {
            this.advance();
            if (this.peek() === '-' || this.peek() === '+') {
                this.advance();
            }
        }
        while (_utils__WEBPACK_IMPORTED_MODULE_1__["isDigit"](this.peek())) {
            this.advance();
        }
        const value = this.source.substring(this.start, this.current);
        this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Number, Number(value));
    }
    identifier() {
        while (_utils__WEBPACK_IMPORTED_MODULE_1__["isAlphaNumeric"](this.peek())) {
            this.advance();
        }
        const value = this.source.substring(this.start, this.current);
        const capitalized = _utils__WEBPACK_IMPORTED_MODULE_1__["capitalize"](value);
        if (_utils__WEBPACK_IMPORTED_MODULE_1__["isKeyword"](capitalized)) {
            this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"][capitalized], value);
        }
        else {
            this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Identifier, value);
        }
    }
    getToken() {
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
            case ';':
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Semicolon, null);
                break;
            case '^':
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Caret, null);
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
            case '?':
                this.addToken(this.match('?') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].QuestionQuestion : this.match('.') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].QuestionDot : _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Question, null);
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
            case '.':
                if (this.match('.')) {
                    if (this.match('.')) {
                        this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].DotDotDot, null);
                    }
                    else {
                        this.error(`Unexpected character '..'`);
                    }
                }
                else {
                    this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Dot, null);
                }
                break;
            case '/':
                if (this.match('/')) {
                    this.comment();
                }
                else if (this.match('*')) {
                    this.multilineComment();
                }
                else {
                    this.addToken(this.match('=') ? _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].SlashEqual : _token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Slash, null);
                }
                break;
            case `'`:
            case `"`:
            case '`':
                this.string(char);
                break;
            // ignore cases
            case '\n':
            case ' ':
            case '\r':
            case '\t':
                break;
            // compex cases
            default:
                if (_utils__WEBPACK_IMPORTED_MODULE_1__["isDigit"](char)) {
                    this.number();
                }
                else if (_utils__WEBPACK_IMPORTED_MODULE_1__["isAlpha"](char)) {
                    this.identifier();
                }
                else {
                    this.error(`Unexpected character '${char}'`);
                }
                break;
        }
    }
    error(message) {
        throw new Error(`Scan Error (${this.line}:${this.col}) => ${message}`);
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
/* harmony import */ var _types_null__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/null */ "./src/types/null.ts");

class Scope {
    constructor(parent = null) {
        this.values = new Map();
        this.parent = parent;
    }
    error(message) {
        throw new Error(`Runtime Error => ${message}`);
    }
    set(name, value) {
        this.values.set(name, value);
    }
    define(name, value) {
        if (this.values.has(name)) {
            this.error(`Identifier "${name}" has already been defined`);
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
            this.error(`Identifier "${name}" has not been defined`);
        }
    }
    get(key, token = null) {
        if (this.values.has(key)) {
            return this.values.get(key);
        }
        if (this.parent !== null) {
            return this.parent.get(key);
        }
        if (token) {
            this.error(` at (${token.line}:${token.col}) => "${token.lexeme}" is not defined`);
        }
        else {
            this.error(`"${key}" is not defined`);
        }
        return new _types_null__WEBPACK_IMPORTED_MODULE_0__["$Null"]();
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
    TokenType[TokenType["QuestionDot"] = 39] = "QuestionDot";
    TokenType[TokenType["QuestionQuestion"] = 40] = "QuestionQuestion";
    TokenType[TokenType["SlashEqual"] = 41] = "SlashEqual";
    TokenType[TokenType["StarEqual"] = 42] = "StarEqual";
    TokenType[TokenType["DotDotDot"] = 43] = "DotDotDot";
    // Literals
    TokenType[TokenType["Identifier"] = 44] = "Identifier";
    TokenType[TokenType["Template"] = 45] = "Template";
    TokenType[TokenType["String"] = 46] = "String";
    TokenType[TokenType["Number"] = 47] = "Number";
    TokenType[TokenType["Regex"] = 48] = "Regex";
    // Keywords
    TokenType[TokenType["And"] = 49] = "And";
    TokenType[TokenType["Break"] = 50] = "Break";
    TokenType[TokenType["Base"] = 51] = "Base";
    TokenType[TokenType["Class"] = 52] = "Class";
    TokenType[TokenType["Continue"] = 53] = "Continue";
    TokenType[TokenType["Do"] = 54] = "Do";
    TokenType[TokenType["Else"] = 55] = "Else";
    TokenType[TokenType["Extends"] = 56] = "Extends";
    TokenType[TokenType["False"] = 57] = "False";
    TokenType[TokenType["For"] = 58] = "For";
    TokenType[TokenType["Foreach"] = 59] = "Foreach";
    TokenType[TokenType["Function"] = 60] = "Function";
    TokenType[TokenType["If"] = 61] = "If";
    TokenType[TokenType["In"] = 62] = "In";
    TokenType[TokenType["Instanceof"] = 63] = "Instanceof";
    TokenType[TokenType["Is"] = 64] = "Is";
    TokenType[TokenType["New"] = 65] = "New";
    TokenType[TokenType["Null"] = 66] = "Null";
    TokenType[TokenType["Or"] = 67] = "Or";
    TokenType[TokenType["Print"] = 68] = "Print";
    TokenType[TokenType["Return"] = 69] = "Return";
    TokenType[TokenType["True"] = 70] = "True";
    TokenType[TokenType["Typeof"] = 71] = "Typeof";
    TokenType[TokenType["Var"] = 72] = "Var";
    TokenType[TokenType["Void"] = 73] = "Void";
    TokenType[TokenType["While"] = 74] = "While";
    TokenType[TokenType["With"] = 75] = "With";
})(TokenType || (TokenType = {}));
class Token {
    constructor(type, lexeme, literal, line, col) {
        this.name = TokenType[type];
        this.type = type;
        this.lexeme = lexeme;
        this.literal = literal;
        this.line = line;
        this.col = col;
    }
    toString() {
        return `[(${this.line}):"${this.lexeme}"]`;
    }
}


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
    isList() {
        return this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].List;
    }
    isDictionary() {
        return this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Dictionary;
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
        if (this.isList() && this.value.length === 0) {
            return false;
        }
        if (this.isDictionary() && this.value.size === 0) {
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
    isKeyValue() {
        if (this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Class ||
            this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Dictionary ||
            this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Object) {
            return true;
        }
        return false;
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
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../runtime */ "./src/runtime.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function */ "./src/types/function.ts");
/* harmony import */ var _null__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./null */ "./src/types/null.ts");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number */ "./src/types/number.ts");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./string */ "./src/types/string.ts");
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");







let $Dictionary = /** @class */ (() => {
    class $Dictionary extends _any__WEBPACK_IMPORTED_MODULE_1__["$Any"] {
        constructor(value) {
            super(value, _type_enum__WEBPACK_IMPORTED_MODULE_6__["DataType"].Dictionary);
        }
        get(key) {
            if (this.value.has(key.value)) {
                return this.value.get(key.value);
            }
            else if ($Dictionary.runtime.has(key.value)) {
                return $Dictionary.runtime.get(key.value);
            }
            else {
                return new _null__WEBPACK_IMPORTED_MODULE_3__["$Null"]();
            }
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
        static each(thiz, args, interpreter) {
            thiz.value.forEach((value, key) => {
                args[0].call(thiz, [value, new _string__WEBPACK_IMPORTED_MODULE_5__["$String"](key), thiz], interpreter);
            });
            return thiz;
        }
        static map(thiz, args, interpreter) {
            thiz.value.forEach((value, key) => {
                thiz.value.set('key', args[0].call(thiz, [value, new _string__WEBPACK_IMPORTED_MODULE_5__["$String"](key), thiz], interpreter));
            });
            return thiz;
        }
        static indexOf(thiz, args, interpreter) {
            let index = null;
            thiz.value.forEach((value, key) => {
                if (value.type === args[0].type && value.value === args[0].value) {
                    index = key;
                }
            });
            if (index !== null) {
                return new _string__WEBPACK_IMPORTED_MODULE_5__["$String"](index);
            }
            return new _null__WEBPACK_IMPORTED_MODULE_3__["$Null"]();
        }
        static next(thiz) {
            const it = thiz;
            const dict = it.value;
            // empty list
            if (!dict.value.size) {
                it.complete();
                return it;
            }
            // first value
            if (it.iter.inner === null) {
                it.iter.inner = dict.value.keys();
            }
            const current = it.iter.inner.next();
            it.iter.value = current.value;
            // no more values to iterate
            if (current.done) {
                it.complete();
            }
            return it;
        }
    }
    $Dictionary.runtime = new Map([
        ['clear', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('clear', 0, _type_enum__WEBPACK_IMPORTED_MODULE_6__["DataType"].Null)],
        ['delete', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('delete', 1, _type_enum__WEBPACK_IMPORTED_MODULE_6__["DataType"].Boolean)],
        ['each', new _function__WEBPACK_IMPORTED_MODULE_2__["$Callable"]('each', 1, $Dictionary.each)],
        ['has', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('has', 1, _type_enum__WEBPACK_IMPORTED_MODULE_6__["DataType"].Boolean)],
        ['indexOf', new _function__WEBPACK_IMPORTED_MODULE_2__["$Callable"]('indexOf', 1, $Dictionary.indexOf)],
        ['map', new _function__WEBPACK_IMPORTED_MODULE_2__["$Callable"]('map', 1, $Dictionary.map)],
        ['merge', new _function__WEBPACK_IMPORTED_MODULE_2__["$Callable"]('merge', 1, (thiz, args) => new $Dictionary(new Map([...(thiz.value), ...(args[0].value)])))],
        ['size', new _function__WEBPACK_IMPORTED_MODULE_2__["$Callable"]('size', 0, (thiz, args) => new _number__WEBPACK_IMPORTED_MODULE_4__["$Number"](thiz.value.size))],
        ['next', new _function__WEBPACK_IMPORTED_MODULE_2__["$Callable"]('next', 0, $Dictionary.next)]
    ]);
    return $Dictionary;
})();



/***/ }),

/***/ "./src/types/error.ts":
/*!****************************!*\
  !*** ./src/types/error.ts ***!
  \****************************/
/*! exports provided: $Error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$Error", function() { return $Error; });
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");


class $Error extends _any__WEBPACK_IMPORTED_MODULE_1__["$Any"] {
    constructor(value, line, col) {
        super(value, _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].Error);
        this.line = line;
        this.col = col;
    }
    toString() {
        return this.value.toString();
    }
}


/***/ }),

/***/ "./src/types/expression.ts":
/*!*********************************!*\
  !*** ./src/types/expression.ts ***!
  \*********************************/
/*! exports provided: Expr, Assign, Base, Binary, Call, Dictionary, Get, Grouping, In, InstanceOf, Is, Key, Lambda, Logical, List, Literal, New, NullCoalescing, Postfix, Range, RegEx, Set, Spread, Template, Ternary, Typeof, Unary, Variable, Void, Ztring */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expr", function() { return Expr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Assign", function() { return Assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return Base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Binary", function() { return Binary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Call", function() { return Call; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return Dictionary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Get", function() { return Get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grouping", function() { return Grouping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "In", function() { return In; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstanceOf", function() { return InstanceOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Is", function() { return Is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Key", function() { return Key; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lambda", function() { return Lambda; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logical", function() { return Logical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Literal", function() { return Literal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "New", function() { return New; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NullCoalescing", function() { return NullCoalescing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Postfix", function() { return Postfix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegEx", function() { return RegEx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Set", function() { return Set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spread", function() { return Spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ternary", function() { return Ternary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Typeof", function() { return Typeof; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unary", function() { return Unary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Variable", function() { return Variable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Void", function() { return Void; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ztring", function() { return Ztring; });
class Expr {
    // tslint:disable-next-line
    constructor() { }
}
class Assign extends Expr {
    constructor(name, value, line) {
        super();
        this.name = name;
        this.value = value;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitAssignExpr(this);
    }
    toString() {
        return 'Expr.Assign';
    }
}
class Base extends Expr {
    constructor(paren, line) {
        super();
        this.paren = paren;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitBaseExpr(this);
    }
    toString() {
        return 'Expr.Base';
    }
}
class Binary extends Expr {
    constructor(left, operator, right, line) {
        super();
        this.left = left;
        this.operator = operator;
        this.right = right;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitBinaryExpr(this);
    }
    toString() {
        return 'Expr.Binary';
    }
}
class Call extends Expr {
    constructor(callee, paren, args, thiz, line) {
        super();
        this.callee = callee;
        this.paren = paren;
        this.args = args;
        this.thiz = thiz;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitCallExpr(this);
    }
    toString() {
        return 'Expr.Call';
    }
}
class Dictionary extends Expr {
    constructor(properties, line) {
        super();
        this.properties = properties;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitDictionaryExpr(this);
    }
    toString() {
        return 'Expr.Dictionary';
    }
}
class Get extends Expr {
    constructor(entity, key, type, line) {
        super();
        this.entity = entity;
        this.key = key;
        this.type = type;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitGetExpr(this);
    }
    toString() {
        return 'Expr.Get';
    }
}
class Grouping extends Expr {
    constructor(expression, line) {
        super();
        this.expression = expression;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitGroupingExpr(this);
    }
    toString() {
        return 'Expr.Grouping';
    }
}
class In extends Expr {
    constructor(key, entity, line) {
        super();
        this.key = key;
        this.entity = entity;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitInExpr(this);
    }
    toString() {
        return 'Expr.In';
    }
}
class InstanceOf extends Expr {
    constructor(left, right, line) {
        super();
        this.left = left;
        this.right = right;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitInstanceOfExpr(this);
    }
    toString() {
        return 'Expr.InstanceOf';
    }
}
class Is extends Expr {
    constructor(left, right, line) {
        super();
        this.left = left;
        this.right = right;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitIsExpr(this);
    }
    toString() {
        return 'Expr.Is';
    }
}
class Key extends Expr {
    constructor(name, line) {
        super();
        this.name = name;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitKeyExpr(this);
    }
    toString() {
        return 'Expr.Key';
    }
}
class Lambda extends Expr {
    constructor(lambda, line) {
        super();
        this.lambda = lambda;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitLambdaExpr(this);
    }
    toString() {
        return 'Expr.Lambda';
    }
}
class Logical extends Expr {
    constructor(left, operator, right, line) {
        super();
        this.left = left;
        this.operator = operator;
        this.right = right;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitLogicalExpr(this);
    }
    toString() {
        return 'Expr.Logical';
    }
}
class List extends Expr {
    constructor(value, line) {
        super();
        this.value = value;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitListExpr(this);
    }
    toString() {
        return 'Expr.List';
    }
}
class Literal extends Expr {
    constructor(value, line) {
        super();
        this.value = value;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitLiteralExpr(this);
    }
    toString() {
        return 'Expr.Literal';
    }
}
class New extends Expr {
    constructor(clazz, line) {
        super();
        this.clazz = clazz;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitNewExpr(this);
    }
    toString() {
        return 'Expr.New';
    }
}
class NullCoalescing extends Expr {
    constructor(left, right, line) {
        super();
        this.left = left;
        this.right = right;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitNullCoalescingExpr(this);
    }
    toString() {
        return 'Expr.NullCoalescing';
    }
}
class Postfix extends Expr {
    constructor(name, increment, line) {
        super();
        this.name = name;
        this.increment = increment;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitPostfixExpr(this);
    }
    toString() {
        return 'Expr.Postfix';
    }
}
class Range extends Expr {
    constructor(start, end, step, line) {
        super();
        this.start = start;
        this.end = end;
        this.step = step;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitRangeExpr(this);
    }
    toString() {
        return 'Expr.Range';
    }
}
class RegEx extends Expr {
    constructor(value, line) {
        super();
        this.value = value;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitRegExExpr(this);
    }
    toString() {
        return 'Expr.RegEx';
    }
}
class Set extends Expr {
    constructor(entity, key, value, line) {
        super();
        this.entity = entity;
        this.key = key;
        this.value = value;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitSetExpr(this);
    }
    toString() {
        return 'Expr.Set';
    }
}
class Spread extends Expr {
    constructor(value, line) {
        super();
        this.value = value;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitSpreadExpr(this);
    }
    toString() {
        return 'Expr.Spread';
    }
}
class Template extends Expr {
    constructor(value, line) {
        super();
        this.value = value;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitTemplateExpr(this);
    }
    toString() {
        return 'Expr.Template';
    }
}
class Ternary extends Expr {
    constructor(condition, thenExpr, elseExpr, line) {
        super();
        this.condition = condition;
        this.thenExpr = thenExpr;
        this.elseExpr = elseExpr;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitTernaryExpr(this);
    }
    toString() {
        return 'Expr.Ternary';
    }
}
class Typeof extends Expr {
    constructor(value, line) {
        super();
        this.value = value;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitTypeofExpr(this);
    }
    toString() {
        return 'Expr.Typeof';
    }
}
class Unary extends Expr {
    constructor(operator, right, line) {
        super();
        this.operator = operator;
        this.right = right;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitUnaryExpr(this);
    }
    toString() {
        return 'Expr.Unary';
    }
}
class Variable extends Expr {
    constructor(name, line) {
        super();
        this.name = name;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitVariableExpr(this);
    }
    toString() {
        return 'Expr.Variable';
    }
}
class Void extends Expr {
    constructor(value, line) {
        super();
        this.value = value;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitVoidExpr(this);
    }
    toString() {
        return 'Expr.Void';
    }
}
class Ztring extends Expr {
    constructor(value, line) {
        super();
        this.value = value;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitZtringExpr(this);
    }
    toString() {
        return 'Expr.Ztring';
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
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scope */ "./src/scope.ts");
/* harmony import */ var _null__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./null */ "./src/types/null.ts");




class $Callable extends _any__WEBPACK_IMPORTED_MODULE_0__["$Any"] {
    constructor(name, arity, value) {
        super(value, _type_enum__WEBPACK_IMPORTED_MODULE_1__["DataType"].Function);
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
            if (e instanceof _any__WEBPACK_IMPORTED_MODULE_0__["$Any"] && e.type === _type_enum__WEBPACK_IMPORTED_MODULE_1__["DataType"].Return) {
                if (restoreScope) {
                    interpreter.scope = restoreScope;
                }
                return e.value;
            }
            else {
                throw e;
            }
        }
        return new _null__WEBPACK_IMPORTED_MODULE_3__["$Null"]();
    }
}


/***/ }),

/***/ "./src/types/iterator.ts":
/*!*******************************!*\
  !*** ./src/types/iterator.ts ***!
  \*******************************/
/*! exports provided: IteratorValue, $Iterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IteratorValue", function() { return IteratorValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$Iterator", function() { return $Iterator; });
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");
/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dictionary */ "./src/types/dictionary.ts");
/* harmony import */ var _null__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./null */ "./src/types/null.ts");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function */ "./src/types/function.ts");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list */ "./src/types/list.ts");
/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./boolean */ "./src/types/boolean.ts");







class IteratorValue {
    constructor(value, index, done, inner) {
        this.value = value;
        this.index = index;
        this.done = done;
        this.inner = inner;
    }
}
let $Iterator = /** @class */ (() => {
    class $Iterator extends _any__WEBPACK_IMPORTED_MODULE_1__["$Any"] {
        constructor(value) {
            super(value, _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].RegExp);
            this.iter = new IteratorValue(new _null__WEBPACK_IMPORTED_MODULE_3__["$Null"](), new _null__WEBPACK_IMPORTED_MODULE_3__["$Null"](), new _boolean__WEBPACK_IMPORTED_MODULE_6__["$Boolean"](false), null);
        }
        get(key) {
            if (key.value === 'key' || key.value === 'index') {
                return this.iter.index;
            }
            if (key.value === 'done') {
                return this.iter.done;
            }
            if (key.value === 'value') {
                return this.iter.value;
            }
            if ($Iterator.runtime.has(key.value)) {
                return $Iterator.runtime.get(key.value);
            }
            return new _null__WEBPACK_IMPORTED_MODULE_3__["$Null"]();
        }
        complete() {
            this.iter.done = new _boolean__WEBPACK_IMPORTED_MODULE_6__["$Boolean"](true);
            this.iter.value = new _null__WEBPACK_IMPORTED_MODULE_3__["$Null"]();
            this.iter.index = new _null__WEBPACK_IMPORTED_MODULE_3__["$Null"]();
        }
        set(key, value) {
            if (typeof this.iter[key.value] !== 'undefined') {
                this.iter[key.value] = value;
            }
            return value;
        }
        toString() {
            return `<${_type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"][this.value.value.type]} iterator>`;
        }
        static next(thiz, args, interpreter) {
            const it = thiz;
            if (it.value.isList()) {
                _list__WEBPACK_IMPORTED_MODULE_5__["$List"].next(thiz);
            }
            if (it.value.isDictionary()) {
                _dictionary__WEBPACK_IMPORTED_MODULE_2__["$Dictionary"].next(thiz);
            }
            if (it.value.isObject()) {
                thiz.value.get(interpreter.strings.next).call(thiz.value, [thiz], interpreter);
            }
            return it;
        }
        static first(thiz, args, interpreter) {
            if (thiz.value.value.isList()) {
                return new _dictionary__WEBPACK_IMPORTED_MODULE_2__["$Dictionary"](new Map([
                    ['key', 0],
                    ['value', thiz.value.value[0]]
                ]));
            }
            return new _null__WEBPACK_IMPORTED_MODULE_3__["$Null"]();
        }
    }
    $Iterator.runtime = new Map([
        ['first', new _function__WEBPACK_IMPORTED_MODULE_4__["$Callable"]('first', 0, $Iterator.first)],
        ['next', new _function__WEBPACK_IMPORTED_MODULE_4__["$Callable"]('next', 0, $Iterator.next)]
    ]);
    return $Iterator;
})();



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
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../runtime */ "./src/runtime.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function */ "./src/types/function.ts");
/* harmony import */ var _null__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./null */ "./src/types/null.ts");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number */ "./src/types/number.ts");
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");






let $List = /** @class */ (() => {
    class $List extends _any__WEBPACK_IMPORTED_MODULE_1__["$Any"] {
        constructor(value) {
            super(value, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].List);
        }
        get(key) {
            if (key.isNumber()) {
                if (typeof this.value[key.value] !== 'undefined') {
                    return this.value[key.value];
                }
                else {
                    return new _null__WEBPACK_IMPORTED_MODULE_3__["$Null"]();
                }
            }
            else if (key.isRange()) {
                return this.range(key);
            }
            else if ($List.runtime.has(key.value)) {
                return $List.runtime.get(key.value);
            }
            else {
                return new _null__WEBPACK_IMPORTED_MODULE_3__["$Null"]();
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
        static size(thiz, args) {
            return new _number__WEBPACK_IMPORTED_MODULE_4__["$Number"](args[0].value.length);
        }
        static each(thiz, args, interpreter) {
            for (let i = 0; i < thiz.value.length; ++i) {
                args[0].call(thiz, [thiz.value[i], new _number__WEBPACK_IMPORTED_MODULE_4__["$Number"](i), thiz], interpreter);
            }
            return thiz;
        }
        static map(thiz, args, interpreter) {
            for (let i = 0; i < thiz.value.length; ++i) {
                thiz.value[i] = args[0].call(thiz, [new _any__WEBPACK_IMPORTED_MODULE_1__["$Any"](thiz.value[i]), new _number__WEBPACK_IMPORTED_MODULE_4__["$Number"](i), thiz], interpreter);
            }
            return thiz;
        }
        static next(thiz) {
            const it = thiz;
            const list = it.value;
            const index = it.iter.index;
            // emtpy list
            if (!list.value.length) {
                it.complete();
                return it;
            }
            // first value
            if (it.iter.inner === null) {
                it.iter.inner = true;
                it.iter.index = new _number__WEBPACK_IMPORTED_MODULE_4__["$Number"](0);
                it.iter.value = list.value[0];
                return it;
            }
            // already iterated
            if (it.iter.done.value) {
                return it;
            }
            // no more values to iterate
            if (index.value >= list.value.length - 1) {
                it.complete();
                return it;
            }
            const newIndex = index.value + 1;
            it.iter.index = new _number__WEBPACK_IMPORTED_MODULE_4__["$Number"](newIndex);
            it.iter.value = list.value[newIndex];
            return it;
        }
    }
    $List.runtime = new Map([
        ['concat', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('concat', -1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].List)],
        ['each', new _function__WEBPACK_IMPORTED_MODULE_2__["$Callable"]('each', 1, $List.each)],
        ['includes', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('includes', 1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].Boolean)],
        ['indexOf', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('indexOf', 1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].Number)],
        ['join', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('join', 1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].String)],
        ['lastIndexOf', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('lastIndexOf', 1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].Number)],
        ['map', new _function__WEBPACK_IMPORTED_MODULE_2__["$Callable"]('map', 1, $List.map)],
        ['pop', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('pop', 0, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].List)],
        ['push', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('push', -1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].List)],
        ['shift', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('shift', 0, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].List)],
        ['size', new _function__WEBPACK_IMPORTED_MODULE_2__["$Callable"]('size', 0, (thiz, args) => new _number__WEBPACK_IMPORTED_MODULE_4__["$Number"](thiz.value.length))],
        ['slice', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('slice', -1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].List)],
        ['splice', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('splice', -1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].List)],
        ['unshift', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('unshift', -1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].List)]
    ]);
    return $List;
})();



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
    toString() {
        return this.value.toString();
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
        this.name = conztructor.name;
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
        return `<${this.name} object>`;
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

/***/ "./src/types/regex.ts":
/*!****************************!*\
  !*** ./src/types/regex.ts ***!
  \****************************/
/*! exports provided: $RegExp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$RegExp", function() { return $RegExp; });
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");


class $RegExp extends _any__WEBPACK_IMPORTED_MODULE_1__["$Any"] {
    constructor(value) {
        super(value, _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].RegExp);
    }
}


/***/ }),

/***/ "./src/types/statement.ts":
/*!********************************!*\
  !*** ./src/types/statement.ts ***!
  \********************************/
/*! exports provided: Stmt, Block, Break, Class, Continue, DoWhile, Expression, Foreach, Func, If, Print, Return, Var, While */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stmt", function() { return Stmt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Block", function() { return Block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Break", function() { return Break; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Class", function() { return Class; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Continue", function() { return Continue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoWhile", function() { return DoWhile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expression", function() { return Expression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Foreach", function() { return Foreach; });
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
    constructor(statements, line) {
        super();
        this.statements = statements;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitBlockStmt(this);
    }
    toString() {
        return 'Stmt.Block';
    }
}
class Break extends Stmt {
    constructor(keyword, line) {
        super();
        this.keyword = keyword;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitBreakStmt(this);
    }
    toString() {
        return 'Stmt.Break';
    }
}
class Class extends Stmt {
    constructor(name, parent, methods, line) {
        super();
        this.name = name;
        this.parent = parent;
        this.methods = methods;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitClassStmt(this);
    }
    toString() {
        return 'Stmt.Class';
    }
}
class Continue extends Stmt {
    constructor(keyword, line) {
        super();
        this.keyword = keyword;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitContinueStmt(this);
    }
    toString() {
        return 'Stmt.Continue';
    }
}
class DoWhile extends Stmt {
    constructor(loop, condition, line) {
        super();
        this.loop = loop;
        this.condition = condition;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitDoWhileStmt(this);
    }
    toString() {
        return 'Stmt.DoWhile';
    }
}
class Expression extends Stmt {
    constructor(expression, line) {
        super();
        this.expression = expression;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitExpressionStmt(this);
    }
    toString() {
        return 'Stmt.Expression';
    }
}
class Foreach extends Stmt {
    constructor(name, key, iterable, loop, line) {
        super();
        this.name = name;
        this.key = key;
        this.iterable = iterable;
        this.loop = loop;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitForeachStmt(this);
    }
    toString() {
        return 'Stmt.Foreach';
    }
}
class Func extends Stmt {
    constructor(name, params, body, line) {
        super();
        this.name = name;
        this.params = params;
        this.body = body;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitFuncStmt(this);
    }
    toString() {
        return 'Stmt.Func';
    }
}
class If extends Stmt {
    constructor(condition, thenStmt, elseStmt, line) {
        super();
        this.condition = condition;
        this.thenStmt = thenStmt;
        this.elseStmt = elseStmt;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitIfStmt(this);
    }
    toString() {
        return 'Stmt.If';
    }
}
class Print extends Stmt {
    constructor(expression, line) {
        super();
        this.expression = expression;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitPrintStmt(this);
    }
    toString() {
        return 'Stmt.Print';
    }
}
class Return extends Stmt {
    constructor(keyword, value, line) {
        super();
        this.keyword = keyword;
        this.value = value;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitReturnStmt(this);
    }
    toString() {
        return 'Stmt.Return';
    }
}
class Var extends Stmt {
    constructor(name, type, initializer, line) {
        super();
        this.name = name;
        this.type = type;
        this.initializer = initializer;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitVarStmt(this);
    }
    toString() {
        return 'Stmt.Var';
    }
}
class While extends Stmt {
    constructor(condition, loop, line) {
        super();
        this.condition = condition;
        this.loop = loop;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitWhileStmt(this);
    }
    toString() {
        return 'Stmt.While';
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
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../runtime */ "./src/runtime.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function */ "./src/types/function.ts");
/* harmony import */ var _null__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./null */ "./src/types/null.ts");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number */ "./src/types/number.ts");
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");






let $String = /** @class */ (() => {
    class $String extends _any__WEBPACK_IMPORTED_MODULE_1__["$Any"] {
        constructor(value) {
            super(value, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].String);
        }
        get(key) {
            if (key.isNumber()) {
                return new $String(this.value[key.value]);
            }
            else if (key.isRange()) {
                return this.range(key);
            }
            else if ($String.runtime.has(key.value)) {
                return $String.runtime.get(key.value);
            }
            return new _null__WEBPACK_IMPORTED_MODULE_3__["$Null"]();
        }
        set(key, value) {
            if (typeof key !== 'number') {
                // this.properties.set(key, value);
            }
            return new _null__WEBPACK_IMPORTED_MODULE_3__["$Null"]();
        }
        toString() {
            return `${this.value}`;
        }
        range(range) {
            let result = '';
            range.iterate(this.value.length, (i) => {
                result += this.value[i];
            });
            return new $String(result);
        }
        static replace(thiz, args, interpeter) {
            if (args[1].isFunction()) {
                // return new $String(thiz.value.replace(args[0].value, args[1].value));
                return thiz.value.replace(args[0].value, ((match) => (args[1].call(thiz, [new $String(match)], interpeter)).value));
            }
            return new $String(thiz.value.replace(args[0].value, args[1].value));
        }
    }
    $String.runtime = new Map([
        ['toUpper', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('toUpperCase', 0, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].String)],
        ['toLower', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('toLowerCase', 0, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].String)],
        ['size', new _function__WEBPACK_IMPORTED_MODULE_2__["$Callable"]('size', 0, (thiz, args) => new _number__WEBPACK_IMPORTED_MODULE_4__["$Number"](thiz.value.length))],
        ['split', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('split', 1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].List)],
        ['concat', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('concat', 1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].String)],
        ['includes', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('includes', 1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].Boolean)],
        ['indexOf', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('indexOf', 1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].Number)],
        ['lastIndexOf', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('lastIndexOf', 1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].Number)],
        ['repeat', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('repeat', 1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].String)],
        ['replace', new _function__WEBPACK_IMPORTED_MODULE_2__["$Callable"]('replace', -1, $String.replace)],
        ['search', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('search', 1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].Number)],
        ['slice', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('slice', -1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].String)],
        ['substring', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('substring', -1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].String)],
        ['trim', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('trim', 0, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].String)],
    ]);
    return $String;
})();



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
    DataType[DataType["Any"] = 1] = "Any";
    DataType[DataType["Boolean"] = 2] = "Boolean";
    DataType[DataType["Number"] = 3] = "Number";
    DataType[DataType["String"] = 4] = "String";
    DataType[DataType["List"] = 5] = "List";
    DataType[DataType["Dictionary"] = 6] = "Dictionary";
    DataType[DataType["Object"] = 7] = "Object";
    DataType[DataType["Class"] = 8] = "Class";
    DataType[DataType["Function"] = 9] = "Function";
    DataType[DataType["Lambda"] = 10] = "Lambda";
    DataType[DataType["Range"] = 11] = "Range";
    DataType[DataType["RegExp"] = 12] = "RegExp";
    DataType[DataType["Error"] = 13] = "Error";
    DataType[DataType["Iterator"] = 14] = "Iterator";
    // internal types
    DataType[DataType["Void"] = 100] = "Void";
    DataType[DataType["Return"] = 101] = "Return";
    DataType[DataType["Break"] = 102] = "Break";
    DataType[DataType["Continue"] = 103] = "Continue"; // 103
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


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: isDigit, isAlpha, isAlphaNumeric, isKeyword, capitalize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDigit", function() { return isDigit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAlpha", function() { return isAlpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAlphaNumeric", function() { return isAlphaNumeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isKeyword", function() { return isKeyword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token */ "./src/token.ts");

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
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXRzY3JpcHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlbW9zL2RlbW8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVycHJldGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3J1bnRpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjYW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njb3BlLnRzIiwid2VicGFjazovLy8uL3NyYy90b2tlbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvYW55LnRzIiwid2VicGFjazovLy8uL3NyYy90eXBlcy9ib29sZWFuLnRzIiwid2VicGFjazovLy8uL3NyYy90eXBlcy9jbGFzcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvZGljdGlvbmFyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvZXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL2V4cHJlc3Npb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL2Z1bmN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy90eXBlcy9pdGVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvbGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvbnVsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvbnVtYmVyLnRzIiwid2VicGFjazovLy8uL3NyYy90eXBlcy9vYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL3JhbmdlLnRzIiwid2VicGFjazovLy8uL3NyYy90eXBlcy9yZWdleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvc3RhdGVtZW50LnRzIiwid2VicGFjazovLy8uL3NyYy90eXBlcy9zdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL3R5cGUuZW51bS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvdm9pZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0M7QUFDRjtBQUNVO0FBQ1I7QUFDVTtBQUs5QyxNQUFNLE9BQU8sR0FBRyxJQUFJLGdEQUFPLEVBQUUsQ0FBQztBQUU5QixNQUFNLFFBQVEsR0FBRztJQUNiLE9BQU8sRUFBRSxDQUFD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QUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDLEtBQUssRUFBRSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELENBQUMsS0FBSyxFQUFFLHdCQUF3QixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsQ0FBQyxJQUFJLEVBQUUsSUFBSSxxREFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1QixDQUFDLEtBQUssRUFBRSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDLFFBQVEsRUFBRSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5RCxDQUFDLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzRCxDQUFDLEtBQUssRUFBRSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDLE1BQU0sRUFBRSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4RCxDQUFDLEtBQUssRUFBRSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztLQUM5RCxDQUFDO0lBQ0YsS0FBSyxFQUFFLElBQUksR0FBRyxDQUFlO1FBQ3pCLENBQUMsSUFBSSxFQUFFLElBQUkseURBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFV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RSxJQUFJLENBQUMsUUFBUSxDQUFDLGdEQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDMUQsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsZ0RBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUMzRCxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnREFBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ3RELEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGdEQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDMUQsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsZ0RBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUN0RCxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnREFBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ3RELEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGdEQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDdkQsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsZ0RBQVMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUN4RCxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUM3RixLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUNuRyxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUN0RixLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUM1RixLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUM3RixLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUNuRyxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUM3RixLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUNsSixLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDbkksS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ3BJLEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMs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Ozs7Ozs7QUNyQkQ7QUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFDVjtBQUV0QixNQUFNLEtBQU0sU0FBUSx5Q0FBSTtJQUkzQixZQUFZLEtBQWE7UUFDckIsS0FBSyxDQUFDLEtBQUssRUFBRSxtREFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Q0FFSjs7Ozs7Ozs7Ozs7OztBQ1hEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9DO0FBRTdCLFNBQVMsT0FBTyxDQUFDLElBQVk7SUFDaEMsT0FBTyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLENBQUM7QUFDdEMsQ0FBQztBQUVNLFNBQVMsT0FBTyxDQUFDLElBQVk7SUFDaEMsT0FBTyxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7QUFDeEUsQ0FBQztBQUVNLFNBQVMsY0FBYyxDQUFDLElBQVk7SUFDdkMsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFFTSxTQUFTLFNBQVMsQ0FBQyxJQUFZO0lBQ2xDLE9BQU8sZ0RBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxnREFBUyxDQUFDLEdBQUcsQ0FBQztBQUM1QyxDQUFDO0FBRU0sU0FBUyxVQUFVLENBQUMsSUFBWTtJQUNuQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUN2RSxDQUFDIiwiZmlsZSI6ImF0c2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXRzY3JpcHQudHNcIik7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgeyBTY2FubmVyIH0gZnJvbSAnLi9zY2FubmVyJztcclxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnLi9wYXJzZXInO1xyXG5pbXBvcnQgeyBJbnRlcnByZXRlciB9IGZyb20gJy4vaW50ZXJwcmV0ZXInO1xyXG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnLi9jb25zb2xlJztcclxuaW1wb3J0IHsgRGVtb1NvdXJjZUNvZGUgfSBmcm9tICcuL2RlbW9zL2RlbW8nO1xyXG5pbXBvcnQgeyBTdG10IH0gZnJvbSAnLi90eXBlcy9zdGF0ZW1lbnQnO1xyXG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueTtcclxuZGVjbGFyZSB2YXIgZ2xvYmFsOiBhbnk7XHJcblxyXG5jb25zdCBjb256b2xlID0gbmV3IENvbnNvbGUoKTtcclxuXHJcbmNvbnN0IGF0c2NyaXB0ID0ge1xyXG4gICAgZXhlY3V0ZTogKHNvdXJjZTogc3RyaW5nKTogU3RtdFtdID0+IHtcclxuICAgICAgICBjb25zdCBzY2FubmVyID0gbmV3IFNjYW5uZXIoKTtcclxuICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgUGFyc2VyKCk7XHJcbiAgICAgICAgY29uc3QgaW50ZXJwcmV0ZXIgPSBuZXcgSW50ZXJwcmV0ZXIoKTtcclxuICAgICAgICBjb25zdCB0b2tlbnMgPSBzY2FubmVyLnNjYW4oc291cmNlKTtcclxuICAgICAgICBpZiAoc2Nhbm5lci5lcnJvcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHNjYW5uZXIuZXJyb3JzLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnpvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN0YXRlbWVudHMgPSBwYXJzZXIucGFyc2UodG9rZW5zKTtcclxuICAgICAgICBpZiAocGFyc2VyLmVycm9ycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcGFyc2VyLmVycm9ycy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb256b2xlLmVycm9yKGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaW50ZXJwcmV0ZXIuaW50ZXJwZXQoc3RhdGVtZW50cyk7XHJcbiAgICB9LFxyXG4gICAgaW50ZXJwcmV0ZXI6IEludGVycHJldGVyLFxyXG4gICAgcGFyc2VyOiBQYXJzZXIsXHJcbiAgICBzY2FubmVyOiBTY2FubmVyXHJcbn07XHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHdpbmRvdy5kZW1vU291cmNlQ29kZSA9IERlbW9Tb3VyY2VDb2RlO1xyXG4gICAgd2luZG93LmF0c2NyaXB0ID0gYXRzY3JpcHQ7XHJcbiAgICB3aW5kb3cuY29uem9sZSA9IGNvbnpvbGU7XHJcbn0gZWxzZSB7XHJcbiAgICBnbG9iYWwuY29uem9sZSA9IGNvbnpvbGU7XHJcbiAgICBleHBvcnRzLmF0c2NyaXB0ID0gYXRzY3JpcHQ7XHJcbn1cclxuIiwiZXhwb3J0IGVudW0gQ29uc29sZU1lc3NhZ2VUeXBlIHtcclxuICAgIFVzZXIsXHJcbiAgICBFcnJvcixcclxuICAgIFdhcm5pbmcsXHJcbiAgICBJbmZvXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25zb2xlTWVzc2FnZSB7XHJcbiAgICBwdWJsaWMgdGltZTogRGF0ZTtcclxuICAgIHB1YmxpYyB0ZXh0OiBhbnk7XHJcbiAgICBwdWJsaWMgdHlwZTogQ29uc29sZU1lc3NhZ2VUeXBlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uc29sZSB7XHJcblxyXG4gICAgcHVibGljIG1lc3NhZ2VzOiBDb25zb2xlTWVzc2FnZVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZChtZXNzYWdlOiBhbnksIHR5cGU6IENvbnNvbGVNZXNzYWdlVHlwZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMucHVzaCh7XHJcbiAgICAgICAgICAgIHRleHQ6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgICAgICB0eXBlOiB0eXBlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9nKG1lc3NhZ2U6IGFueSkge1xyXG4gICAgICAgIHRoaXMuYWRkKG1lc3NhZ2UsIENvbnNvbGVNZXNzYWdlVHlwZS5Vc2VyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgd2FybihtZXNzYWdlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmFkZChtZXNzYWdlLCBDb25zb2xlTWVzc2FnZVR5cGUuV2FybmluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVycm9yKG1lc3NhZ2U6IGFueSkge1xyXG4gICAgICAgIHRoaXMuYWRkKG1lc3NhZ2UsIENvbnNvbGVNZXNzYWdlVHlwZS5FcnJvcik7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbmZvKG1lc3NhZ2U6IGFueSkge1xyXG4gICAgICAgIHRoaXMuYWRkKG1lc3NhZ2UsIENvbnNvbGVNZXNzYWdlVHlwZS5JbmZvKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmlyc3QoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlc1swXS50ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsYXN0KCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZXNbdGhpcy5tZXNzYWdlcy5sZW5ndGggLSAxXS50ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcmludCgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyh0aGlzLm1lc3NhZ2VzLm1hcCgoY20pID0+IGNtLnRleHQpKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IERlbW9Tb3VyY2VDb2RlID0gYFxyXG52YXIgYSA9IFsnb25lJywgJ3R3bycsICd0aHJlZSddO1xyXG5wcmludCBhO1xyXG52YXIgYiA9IFsuLi5hLCAnZm91cicsICdmaXZlJ107XHJcbnByaW50IGI7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBEZW1vU291cmNlQ29kZXMgPVxyXG5gXHJcbi8vIHNsaWNpbmcgc3RyaW5nc1xyXG5wcmludCBcIm9uZSB0d28gdGhyZWUgZm91clwiWzQ6NzoxXTsgLy8gcHJpbnRzIHR3b1xyXG5wcmludCBcImhlbGxvIHdvcmxkXCJbNjo6MV0uc2l6ZSgpOyAvLyA1XHJcbnByaW50IFwiaGVsbG8gd29ybGRcIls6Oi0xXTsgLy9wcmludHMgZGxyb3cgb2xsZWhcclxuLy8gZnVuY3Rpb25zXHJcbmZ1bmN0aW9uIHNheUhlbGxvKHRleHQpIHtcclxuICAgIHByaW50IHRleHQ7XHJcbn1cclxuc2F5SGVsbG8oJ2hlbGxvJyk7XHJcbi8vIGNsYXNzZXNcclxuY2xhc3MgUGVyc29uIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG4gICAgaGVsbG8oKSB7XHJcbiAgICAgICAgcHJpbnQgdGhpcy5uYW1lICsgJyBzYXlzIGhpJztcclxuICAgIH1cclxufVxyXG5jbGFzcyBTdHVkZW50IGV4dGVuZHMgUGVyc29uIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGdyYWRlKSB7XHJcbiAgICAgICAgYmFzZS5jb25zdHJ1Y3RvcihuYW1lKTtcclxuICAgICAgICB0aGlzLmdyYWRlID0gZ3JhZGU7XHJcbiAgICB9XHJcbiAgICBoZWxsbygpIHtcclxuICAgICAgICBiYXNlLmhlbGxvKCk7XHJcbiAgICAgICAgcHJpbnQgJ2Zyb20gJyArIHRoaXMuZ3JhZGUgKyAnIGdyYWRlJztcclxuICAgIH1cclxufVxyXG52YXIgc3R1ZGVudCA9IG5ldyBTdHVkZW50KCdKb2huJywgMyk7XHJcbnN0dWRlbnQuaGVsbG8oKTtcclxuLy8gUmVjdXJzaXZlIGZ1bmN0aW9uXHJcbmZ1bmN0aW9uIGZhY3RvcmlhbGl6ZShuKSB7XHJcbiAgICBpZiAobiA8IDApIHtcclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgICBpZiAobiA9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKG4gKiBmYWN0b3JpYWxpemUobiAtIDEpKTtcclxufVxyXG5wcmludCAnZmFjdG9yIG9mIDExOiAnICsgZmFjdG9yaWFsaXplKDExKTtcclxuLy8gc2FtZSBhcyBmYWN0b3JpYWxpemUgYnV0IHdpdGggdGVybmFyeVxyXG4vLyBhbmQgc2hvcnQgZm9ybSBmdW5jdGlvbiBkZWZpbml0aW9uXHJcbkBmYWN0b3IobikgPT5cclxuICAgIG4gPCAwID8gLTEgOiAobiA9PSAwID8gMSA6IChuICogZmFjdG9yaWFsaXplKG4gLSAxKSkpO1xyXG5wcmludCAnZmFjdG9yIG9mIDExOiAnICtmYWN0b3IoMTEpO1xyXG4vLyBuZXN0ZWQgZnVuY3Rpb24gcmV0dXJucyBmdW5jdGlvblxyXG5AYWRkKGEpID0+IEAoYikgPT4gQChjKSA9PiBhICsgYiArIGM7XHJcbnByaW50IGFkZCgxMDApKDIwKSgzKTtcclxuZnVuY3Rpb24gc3ViKGEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoYikge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICByZXR1cm4gYSAtIGIgLSBjO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG59XHJcbnByaW50IHN1YigxMDApKDEwKSgxKTtcclxuLy8gd2hpbGUgbG9vcCBhbmQgdGVybmFyeSBvcGVyYXRvclxyXG52YXIgaSA9IDA7XHJcbnZhciBjb3VudHMgPSAnJztcclxud2hpbGUgKGkgPD0gMTApIHtcclxuICAgIGNvdW50cyArPSBpICUgMiA/ICdvZGQgJyA6ICdldmVuICc7XHJcbiAgICBpID0gaSArIDE7XHJcbn1cclxucHJpbnQgY291bnRzO1xyXG4vLyBsaXRlcmFsc1xyXG52YXIgbGl0ZXJhbCA9IHtcclxuICAgIGZpcnN0bmFtZTogXCJKb2huXCIsXHJcbiAgICBsYXN0bmFtZTogXCJEb2VcIixcclxuICAgIHJlY29yZHM6IHtcclxuICAgICAgICBwcmV2OiBcInByZXZpb3VzXCIsXHJcbiAgICAgICAgbmV4dDogXCJuZXh0XCJcclxuICAgIH1cclxufTtcclxucHJpbnQgbGl0ZXJhbC5yZWNvcmRzLnByZXY7XHJcbi8vIHNhZmUgbmF2aWdhdG9yIG9wZXJhdG9yID8uXHJcbnByaW50IGxpdGVyYWwuc2FmZU5hdmlnYXRvcj8ucHJvcGVydHlEb2VzTm90RXhpc3Q7XHJcbnZhciB4ID0gWzEsIDIwLCAzMDBdO1xyXG52YXIgeSA9IFsxMDAsIHhbMV1dO1xyXG5wcmludCB5WzBdO1xyXG55LnB1c2goeCk7XHJcbnkubmV3UHJvcGVydHkgPSBcImFueXRoaW5nXCI7XHJcbnByaW50IHkuam9pbignLCcpO1xyXG52YXIgeiA9IHkuam9pbignLScpO1xyXG4vLyBuZXcgc2NvcGUgdGVzdFxyXG57XHJcbiAgICB2YXIgYSA9IHthOiAnb25lJ307XHJcbiAgICB2YXIgYiA9IHtiOiAndHdvJ307XHJcbiAgICB2YXIgYyA9IGEgKyBiO1xyXG4gICAgcHJpbnQgYzsgLy8gcHJpbnRzIHthOiAnb25lJywgYjogJ3R3byd9XHJcbn1cclxuLy8gbmV3IHNjb3BlIHRlc3Rcclxue1xyXG4gICAgdmFyIGEgPSB7ZDogJ3RocmVlJ307XHJcbiAgICB2YXIgYiA9IHtlOiAnZm91cid9O1xyXG4gICAgdmFyIGMgPSBhICsgYjtcclxuICAgIHByaW50IGM7IC8vIHByaW50cyB7ZDogJ3RocmVlJywgZTogJ2ZvdXInfVxyXG59XHJcbi8vIHR5cGVvZiwgaXMsIGluc3RhbmNlb2Ygb3BlcmF0b3JcclxucHJpbnQgdHlwZW9mIFBlcnNvbjtcclxucHJpbnQgdHlwZW9mIHN0dWRlbnQ7XHJcbnByaW50ICdTdHVkZW50IGlzIENsYXNzOiAnICsgKFN0dWRlbnQgaXMgQ2xhc3MpO1xyXG5wcmludCAnc3R1ZGVudCBpcyBPYmplY3Q6ICcgKyAoc3R1ZGVudCBpcyBPYmplY3QpO1xyXG5wcmludCAnc3R1ZGVudCBpcyBQZXJzb246ICcgKyAoc3R1ZGVudCBpcyBQZXJzb24pO1xyXG5wcmludCAnc3R1ZGVudCBpcyBTdHVkZW50OiAnICsgKHN0dWRlbnQgaXMgU3R1ZGVudCk7XHJcbnByaW50ICdzdHVkZW50IGluc3RhbmNlb2YgUGVyc29uOiAnICsgKHN0dWRlbnQgaW5zdGFuY2VvZiBQZXJzb24pO1xyXG5wcmludCB0eXBlb2YgJycgKyAnc3RyaW5nJztcclxuXHJcblxyXG4vLyBpdGVyYXRvcnNcclxudmFyIGl0ID0gaXRlcihbJ29uZScsICd0d28nLCAndGhyZWUnXSk7XHJcbndoaWxlICghaXQubmV4dCgpLmRvbmUpIHtcclxuICAgIHByaW50IGl0LnZhbHVlO1xyXG59XHJcblxyXG4vLyBmb3JlYWNoIHN0YXRlbWVudFxyXG5mb3JlYWNoIChpdGVtIHdpdGgga2V5IGluIFsnb25lJywgJ3R3bycsICd0aHJlZSddKSB7XHJcbiAgICBwcmludCBpdGVtO1xyXG59XHJcbmA7XHJcbiIsImltcG9ydCAqIGFzIEV4cHIgZnJvbSAnLi90eXBlcy9leHByZXNzaW9uJztcclxuaW1wb3J0ICogYXMgU3RtdCBmcm9tICcuL3R5cGVzL3N0YXRlbWVudCc7XHJcbmltcG9ydCB7IENvbnNvbGUgfSBmcm9tICcuL2NvbnNvbGUnO1xyXG5pbXBvcnQgeyBTY29wZSB9IGZyb20gJy4vc2NvcGUnO1xyXG5pbXBvcnQgeyBUb2tlblR5cGUsIFRva2VuIH0gZnJvbSAnLi90b2tlbic7XHJcbmltcG9ydCB7IFJ1bnRpbWUgfSBmcm9tICcuL3J1bnRpbWUnO1xyXG5pbXBvcnQgeyAkQW55IH0gZnJvbSAnLi90eXBlcy9hbnknO1xyXG5pbXBvcnQgeyAkQm9vbGVhbiB9IGZyb20gJy4vdHlwZXMvYm9vbGVhbic7XHJcbmltcG9ydCB7ICRDbGFzcyB9IGZyb20gJy4vdHlwZXMvY2xhc3MnO1xyXG5pbXBvcnQgeyAkRGljdGlvbmFyeSB9IGZyb20gJy4vdHlwZXMvZGljdGlvbmFyeSc7XHJcbmltcG9ydCB7ICRGdW5jdGlvbiB9IGZyb20gJy4vdHlwZXMvZnVuY3Rpb24nO1xyXG5pbXBvcnQgeyAkTGlzdCB9IGZyb20gJy4vdHlwZXMvbGlzdCc7XHJcbmltcG9ydCB7ICROdWxsIH0gZnJvbSAnLi90eXBlcy9udWxsJztcclxuaW1wb3J0IHsgJE51bWJlciB9IGZyb20gJy4vdHlwZXMvbnVtYmVyJztcclxuaW1wb3J0IHsgJE9iamVjdCB9IGZyb20gJy4vdHlwZXMvb2JqZWN0JztcclxuaW1wb3J0IHsgJFJhbmdlLCBSYW5nZVZhbHVlIH0gZnJvbSAnLi90eXBlcy9yYW5nZSc7XHJcbmltcG9ydCB7ICRTdHJpbmcgfSBmcm9tICcuL3R5cGVzL3N0cmluZyc7XHJcbmltcG9ydCB7ICRWb2lkIH0gZnJvbSAnLi90eXBlcy92b2lkJztcclxuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGVzL3R5cGUuZW51bSc7XHJcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHsgU2Nhbm5lciB9IGZyb20gJy4vc2Nhbm5lcic7XHJcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJy4vcGFyc2VyJztcclxuaW1wb3J0IHsgJEl0ZXJhdG9yIH0gZnJvbSAnLi90eXBlcy9pdGVyYXRvcic7XHJcbmRlY2xhcmUgdmFyIGNvbnpvbGU6IENvbnNvbGU7XHJcblxyXG5leHBvcnQgY2xhc3MgSW50ZXJwcmV0ZXIgaW1wbGVtZW50c1xyXG4gICAgRXhwci5FeHByVmlzaXRvcjwkQW55PixcclxuICAgIFN0bXQuU3RtdFZpc2l0b3I8JEFueT4ge1xyXG4gICAgcHVibGljIGdsb2JhbCA9IG5ldyBTY29wZSgpO1xyXG4gICAgcHVibGljIHNjb3BlID0gdGhpcy5nbG9iYWw7XHJcbiAgICBwdWJsaWMgZXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBzY2FubmVyID0gbmV3IFNjYW5uZXIoKTtcclxuICAgIHByaXZhdGUgcGFyc2VyID0gbmV3IFBhcnNlcigpO1xyXG4gICAgcHVibGljIHN0cmluZ3MgPSB7XHJcbiAgICAgICAgbmV4dDogbmV3ICRTdHJpbmcoJ25leHQnKVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggKSB7XHJcbiAgICAgICAgdGhpcy5nbG9iYWwuc2V0KCdtYXRoJywgbmV3ICREaWN0aW9uYXJ5KFJ1bnRpbWUuTWF0aCkpO1xyXG4gICAgICAgIHRoaXMuZ2xvYmFsLnNldCgnY29uc29sZScsIG5ldyAkRGljdGlvbmFyeShSdW50aW1lLkNvbnNvbGUpKTtcclxuICAgICAgICB0aGlzLmdsb2JhbC5zZXQoJ3JlJywgUnVudGltZS5VdGlscy5nZXQoJ3JlJykpO1xyXG4gICAgICAgIHRoaXMuZ2xvYmFsLnNldCgnaXRlcicsIFJ1bnRpbWUuVXRpbHMuZ2V0KCdpdGVyJykpO1xyXG4gICAgICAgIHRoaXMucGFyc2VyLmVycm9yTGV2ZWwgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXZhbHVhdGUoZXhwcjogRXhwci5FeHByKTogJEFueSB7XHJcbiAgICAgICAgcmV0dXJuIGV4cHIucmVzdWx0ID0gZXhwci5hY2NlcHQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleGVjdXRlKHN0bXQ6IFN0bXQuU3RtdCk6ICRBbnkge1xyXG4gICAgICAgIHJldHVybiBzdG10LnJlc3VsdCA9IHN0bXQuYWNjZXB0KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBldmFsKHN0bXQ6IFN0bXQuU3RtdCk6IGFueSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuICB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogc3RtdC5hY2NlcHQodGhpcykudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBlLm1lc3NhZ2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludGVycGV0KHN0YXRlbWVudHM6IFN0bXQuU3RtdFtdKTogU3RtdC5TdG10W10ge1xyXG4gICAgICAgIHRoaXMuZXJyb3JzID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBzdGF0ZW1lbnQgb2Ygc3RhdGVtZW50cykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlKHN0YXRlbWVudCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnpvbGUuZXJyb3IoZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVycm9ycy5sZW5ndGggPiAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKCdSdW50aW1lIEVycm9yIGxpbWl0IGV4Y2VlZGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlbWVudHM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlbWVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlcnJvcihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJ1bnRpbWUgRXJyb3IgPT4gJHttZXNzYWdlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdEV4cHJlc3Npb25TdG10KHN0bXQ6IFN0bXQuRXhwcmVzc2lvbik6ICRBbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlKHN0bXQuZXhwcmVzc2lvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0UHJpbnRTdG10KHN0bXQ6IFN0bXQuUHJpbnQpOiAkQW55IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5ldmFsdWF0ZShzdG10LmV4cHJlc3Npb24pO1xyXG4gICAgICAgIGNvbnpvbGUubG9nKGRhdGEudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0VmFyU3RtdChzdG10OiBTdG10LlZhcik6ICRBbnkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IG5ldyAkTnVsbCgpO1xyXG4gICAgICAgIGlmIChzdG10LmluaXRpYWxpemVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5ldmFsdWF0ZShzdG10LmluaXRpYWxpemVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZhbHVlLmlzTGFtYmRhKCkpIHtcclxuICAgICAgICAgICAgKHZhbHVlIGFzIGFueSkubmFtZSA9IHN0bXQubmFtZS5sZXhlbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NvcGUuZGVmaW5lKHN0bXQubmFtZS5sZXhlbWUsIHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0VmFyaWFibGVFeHByKGV4cHI6IEV4cHIuVmFyaWFibGUpOiAkQW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5nZXQoZXhwci5uYW1lLmxleGVtZSwgZXhwci5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRQb3N0Zml4RXhwcihleHByOiBFeHByLlBvc3RmaXgpOiAkQW55IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2NvcGUuZ2V0KGV4cHIubmFtZS5sZXhlbWUsIGV4cHIubmFtZSk7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBuZXcgJE51bWJlcih2YWx1ZS52YWx1ZSArIGV4cHIuaW5jcmVtZW50KTtcclxuICAgICAgICB0aGlzLnNjb3BlLmFzc2lnbihleHByLm5hbWUubGV4ZW1lLCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdExpc3RFeHByKGV4cHI6IEV4cHIuTGlzdCk6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlczogJEFueVtdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBleHByZXNzaW9uIG9mIGV4cHIudmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKGV4cHJlc3Npb24gaW5zdGFuY2VvZiBFeHByLlNwcmVhZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmV2YWx1YXRlKGV4cHJlc3Npb24udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdmFsIG9mIHZhbHVlLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnB1c2godmFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5ldmFsdWF0ZShleHByZXNzaW9uKTtcclxuICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3ICRMaXN0KHZhbHVlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0WnRyaW5nRXhwcihleHByOiBFeHByLlp0cmluZyk6ICRBbnkge1xyXG4gICAgICAgIHJldHVybiBuZXcgJFN0cmluZyhleHByLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRlbXBsYXRlUGFyc2Uoc291cmNlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHRva2VucyA9IHRoaXMuc2Nhbm5lci5zY2FuKHNvdXJjZSk7XHJcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50cyA9IHRoaXMucGFyc2VyLnBhcnNlKHRva2Vucyk7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyc2VyLmVycm9ycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvcihgVGVtcGxhdGUgc3RyaW5nICBlcnJvcjogJHt0aGlzLnBhcnNlci5lcnJvcnNbMF19YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgICAgICBmb3IgKGNvbnN0IHN0YXRlbWVudCBvZiBzdGF0ZW1lbnRzKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSB0aGlzLmV4ZWN1dGUoc3RhdGVtZW50KS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdFRlbXBsYXRlRXhwcihleHByOiBFeHByLlRlbXBsYXRlKTogJEFueSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZXhwci52YWx1ZS5yZXBsYWNlKC9cXCRcXHsoW1xcc1xcU10rPylcXH0vZywgKG0sIHBsYWNlaG9sZGVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwbGFjZWhvbGRlcltwbGFjZWhvbGRlci5sZW5ndGhdICE9PSAnOycpIHtcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyICs9ICc7JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZVBhcnNlKHBsYWNlaG9sZGVyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbmV3ICRTdHJpbmcocmVzdWx0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRSZWdFeEV4cHIoZXhwcjogRXhwci5SZWdFeCk6ICRBbnkge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeEVudGl0eShleHByLnZhbHVlKTtcclxuICAgICAgICAqLyByZXR1cm4gbmV3ICROdWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0QXNzaWduRXhwcihleHByOiBFeHByLkFzc2lnbik6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5ldmFsdWF0ZShleHByLnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNjb3BlLmFzc2lnbihleHByLm5hbWUubGV4ZW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdEJpbmFyeUV4cHIoZXhwcjogRXhwci5CaW5hcnkpOiAkQW55IHtcclxuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5ldmFsdWF0ZShleHByLmxlZnQpO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5ldmFsdWF0ZShleHByLnJpZ2h0KTtcclxuICAgICAgICBzd2l0Y2ggKGV4cHIub3BlcmF0b3IudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5NaW51czpcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuTWludXNFcXVhbDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJE51bWJlcihsZWZ0LnZhbHVlIC0gcmlnaHQudmFsdWUpO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5TbGFzaDpcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuU2xhc2hFcXVhbDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJE51bWJlcihsZWZ0LnZhbHVlIC8gcmlnaHQudmFsdWUpO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5TdGFyOlxyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5TdGFyRXF1YWw6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICROdW1iZXIobGVmdC52YWx1ZSAqIHJpZ2h0LnZhbHVlKTtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuUGVyY2VudDpcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuUGVyY2VudEVxdWFsOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVtYmVyKGxlZnQudmFsdWUgJSByaWdodC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlBsdXM6XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlBsdXNFcXVhbDpcclxuICAgICAgICAgICAgICAgIGlmIChsZWZ0LmlzTnVtYmVyKCkgJiYgcmlnaHQuaXNOdW1iZXIoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJE51bWJlcihsZWZ0LnZhbHVlICsgcmlnaHQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGxlZnQuaXNTdHJpbmcoKSAmJiByaWdodC5pc1N0cmluZygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkU3RyaW5nKGxlZnQudmFsdWUgKyByaWdodC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobGVmdC5pc0xpc3QoKSAmJiByaWdodC5pc0xpc3QoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJExpc3QobGVmdC52YWx1ZS5jb25jYXQocmlnaHQudmFsdWUpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChsZWZ0LmlzRGljdGlvbmFyeSgpICYmIHJpZ2h0LmlzRGljdGlvbmFyeSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkRGljdGlvbmFyeShuZXcgTWFwKFsuLi5sZWZ0LnZhbHVlLCAuLi5yaWdodC52YWx1ZV0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJFN0cmluZyhsZWZ0LnRvU3RyaW5nKCkgKyByaWdodC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuUGlwZTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJE51bWJlcihsZWZ0LnZhbHVlIHwgcmlnaHQudmFsdWUpO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5DYXJldDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJE51bWJlcihsZWZ0LnZhbHVlIF4gcmlnaHQudmFsdWUpO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5HcmVhdGVyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbihsZWZ0LnZhbHVlID4gcmlnaHQudmFsdWUpO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5HcmVhdGVyRXF1YWw6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKGxlZnQudmFsdWUgPj0gcmlnaHQudmFsdWUpO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5MZXNzOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbihsZWZ0LnZhbHVlIDwgcmlnaHQudmFsdWUpO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5MZXNzRXF1YWw6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKGxlZnQudmFsdWUgPD0gcmlnaHQudmFsdWUpO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5FcXVhbEVxdWFsOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbihsZWZ0LnZhbHVlID09PSByaWdodC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkJhbmdFcXVhbDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4obGVmdC52YWx1ZSAhPT0gcmlnaHQudmFsdWUpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcignVW5rbm93biBiaW5hcnkgb3BlcmF0b3IgJyArIGV4cHIub3BlcmF0b3IpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpOyAvLyB1bnJlYWNoYWJsZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRMb2dpY2FsRXhwcihleHByOiBFeHByLkxvZ2ljYWwpOiAkQW55IHtcclxuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5ldmFsdWF0ZShleHByLmxlZnQpO1xyXG5cclxuICAgICAgICBpZiAoZXhwci5vcGVyYXRvci50eXBlID09PSBUb2tlblR5cGUuT3IpIHtcclxuICAgICAgICAgICAgaWYgKGxlZnQuaXNUcnV0aHkoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIWxlZnQuaXNUcnV0aHkoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlKGV4cHIucmlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdFRlcm5hcnlFeHByKGV4cHI6IEV4cHIuVGVybmFyeSk6ICRBbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlKGV4cHIuY29uZGl0aW9uKS5pc1RydXRoeSgpID8gdGhpcy5ldmFsdWF0ZShleHByLnRoZW5FeHByKSA6IHRoaXMuZXZhbHVhdGUoZXhwci5lbHNlRXhwcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0TnVsbENvYWxlc2NpbmdFeHByKGV4cHI6IEV4cHIuTnVsbENvYWxlc2NpbmcpOiAkQW55IHtcclxuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5ldmFsdWF0ZShleHByLmxlZnQpO1xyXG4gICAgICAgIGlmIChsZWZ0LmlzTnVsbCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlKGV4cHIucmlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRHcm91cGluZ0V4cHIoZXhwcjogRXhwci5Hcm91cGluZyk6ICRBbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlKGV4cHIuZXhwcmVzc2lvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0TGl0ZXJhbEV4cHIoZXhwcjogRXhwci5MaXRlcmFsKTogJEFueSB7XHJcbiAgICAgICAgcmV0dXJuIGV4cHIudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0VW5hcnlFeHByKGV4cHI6IEV4cHIuVW5hcnkpOiAkQW55IHtcclxuICAgICAgICBjb25zdCByaWdodCA9IHRoaXMuZXZhbHVhdGUoZXhwci5yaWdodCk7XHJcbiAgICAgICAgc3dpdGNoIChleHByLm9wZXJhdG9yLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuTWludXM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICROdW1iZXIoLU51bWJlcihyaWdodC52YWx1ZSkpO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5CYW5nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbighcmlnaHQuaXNUcnV0aHkoKSk7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlBsdXNQbHVzOlxyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5NaW51c01pbnVzOlxyXG4gICAgICAgICAgICAgICAgaWYgKCFyaWdodC5pc051bWJlcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihgSW52YWxpZCByaWdodC1oYW5kIHNpZGUgZXhwcmVzc2lvbiBpbiBwcmVmaXggb3BlcmF0aW9uOiAgXCIke0RhdGFUeXBlW3JpZ2h0LnR5cGVdfSAke3JpZ2h0fSBpcyBub3QgYSBudW1iZXJgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gTnVtYmVyKHJpZ2h0LnZhbHVlKSArIChleHByLm9wZXJhdG9yLnR5cGUgPT09IFRva2VuVHlwZS5QbHVzUGx1cyA/IDEgOiAtMSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXhwci5yaWdodCBpbnN0YW5jZW9mIEV4cHIuVmFyaWFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3BlLmFzc2lnbihleHByLnJpZ2h0Lm5hbWUubGV4ZW1lLCBuZXcgJE51bWJlcihuZXdWYWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChleHByLnJpZ2h0IGluc3RhbmNlb2YgRXhwci5HZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhc3NpbmcgPSBuZXcgRXhwci5TZXQoZXhwci5yaWdodC5lbnRpdHksIGV4cHIucmlnaHQua2V5LCBuZXcgRXhwci5MaXRlcmFsKG5ldyAkTnVtYmVyKG5ld1ZhbHVlKSwgZXhwci5saW5lKSwgZXhwci5saW5lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2YWx1YXRlKGFzc2luZyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoYEludmFsaWQgcmlnaHQtaGFuZCBzaWRlIGV4cHJlc3Npb24gaW4gcHJlZml4IG9wZXJhdGlvbjogICR7ZXhwci5yaWdodH1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJE51bWJlcihuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGBVbmtub3duIHVuYXJ5IG9wZXJhdG9yICcgKyBleHByLm9wZXJhdG9yYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICROdWxsKCk7IC8vIHNob3VsZCBiZSB1bnJlYWNoYWJsZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXhlY3V0ZUJsb2NrKHN0YXRlbWVudHM6IFN0bXQuU3RtdFtdLCBuZXh0U2NvcGU6IFNjb3BlKTogJEFueSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFNjb3BlID0gdGhpcy5zY29wZTtcclxuICAgICAgICB0aGlzLnNjb3BlID0gbmV4dFNjb3BlO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc3RhdGVtZW50IG9mIHN0YXRlbWVudHMpIHtcclxuICAgICAgICAgICAgc3RhdGVtZW50LnJlc3VsdCA9IHRoaXMuZXhlY3V0ZShzdGF0ZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjb3BlID0gY3VycmVudFNjb3BlO1xyXG4gICAgICAgIHJldHVybiBuZXcgJFZvaWQoJ2Jsb2NrJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0QmxvY2tTdG10KHN0bXQ6IFN0bXQuQmxvY2spOiAkQW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlQmxvY2soc3RtdC5zdGF0ZW1lbnRzLCBuZXcgU2NvcGUodGhpcy5zY29wZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdElmU3RtdChzdG10OiBTdG10LklmKTogJEFueSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXZhbHVhdGUoc3RtdC5jb25kaXRpb24pLmlzVHJ1dGh5KCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShzdG10LnRoZW5TdG10KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHN0bXQuZWxzZVN0bXQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShzdG10LmVsc2VTdG10KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0V2hpbGVTdG10KHN0bXQ6IFN0bXQuV2hpbGUpOiAkQW55IHtcclxuICAgICAgICB3aGlsZSAodGhpcy5ldmFsdWF0ZShzdG10LmNvbmRpdGlvbikuaXNUcnV0aHkoKSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlKHN0bXQubG9vcCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgJEFueSAmJiBlLnR5cGUgPT09IERhdGFUeXBlLkJyZWFrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUgaW5zdGFuY2VvZiAkQW55ICYmIGUudHlwZSA9PT0gRGF0YVR5cGUuQ29udGludWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3ICRWb2lkKCd3aGlsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdERvV2hpbGVTdG10KHN0bXQ6IFN0bXQuRG9XaGlsZSk6ICRBbnkge1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhlY3V0ZShzdG10Lmxvb3ApO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mICRBbnkgJiYgZS50eXBlID09PSBEYXRhVHlwZS5CcmVhaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlIGluc3RhbmNlb2YgJEFueSAmJiBlLnR5cGUgPT09IERhdGFUeXBlLkNvbnRpbnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IHdoaWxlICh0aGlzLmV2YWx1YXRlKHN0bXQuY29uZGl0aW9uKS5pc1RydXRoeSgpKTtcclxuICAgICAgICByZXR1cm4gbmV3ICRWb2lkKCdkb3doaWxlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0Rm9yZWFjaFN0bXQoc3RtdDogU3RtdC5Gb3JlYWNoKTogJEFueSB7XHJcbiAgICAgICAgY29uc3QgaXQgPSBuZXcgJEl0ZXJhdG9yKHRoaXMuZXZhbHVhdGUoc3RtdC5pdGVyYWJsZSkpO1xyXG4gICAgICAgIGNvbnN0IHJlc3RvcmVTY29wZSA9IHRoaXMuc2NvcGU7XHJcbiAgICAgICAgd2hpbGUgKCEoJEl0ZXJhdG9yLm5leHQoaXQsIFtdLCB0aGlzKSBhcyAkSXRlcmF0b3IpLml0ZXIuZG9uZS52YWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBmb3JlYWNoU2NvcGUgPSBuZXcgU2NvcGUodGhpcy5zY29wZSk7XHJcbiAgICAgICAgICAgIGZvcmVhY2hTY29wZS5zZXQoc3RtdC5uYW1lLmxleGVtZSwgaXQuaXRlci52YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmIChzdG10LmtleSkge1xyXG4gICAgICAgICAgICAgICAgZm9yZWFjaFNjb3BlLnNldChzdG10LmtleS5sZXhlbWUsIGl0Lml0ZXIuaW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGVCbG9jayhbc3RtdC5sb29wXSwgZm9yZWFjaFNjb3BlKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY29wZSA9IHJlc3RvcmVTY29wZTtcclxuICAgICAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgJEFueSAmJiBlLnR5cGUgPT09IERhdGFUeXBlLkJyZWFrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUgaW5zdGFuY2VvZiAkQW55ICYmIGUudHlwZSA9PT0gRGF0YVR5cGUuQ29udGludWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3ICRWb2lkKCdmb3JlYWNoJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0Q2FsbEV4cHIoZXhwcjogRXhwci5DYWxsKTogJEFueSB7XHJcbiAgICAgICAgLy8gdmVyaWZ5IGNhbGxlZSBpcyBhIGZ1bmN0aW9uXHJcbiAgICAgICAgY29uc3QgY2FsbGVlID0gdGhpcy5ldmFsdWF0ZShleHByLmNhbGxlZSk7XHJcbiAgICAgICAgaWYgKCFjYWxsZWUuaXNGdW5jdGlvbigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoYCR7Y2FsbGVlfSBpcyBub3QgYSBmdW5jdGlvbmApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2V0IHRoaXMgaW4gZnVuY3Rpb24gc2NvcGVcclxuICAgICAgICBsZXQgdGhpejogYW55ID0gbnVsbDtcclxuICAgICAgICBpZiAoZXhwci5jYWxsZWUgaW5zdGFuY2VvZiBFeHByLkdldCkge1xyXG4gICAgICAgICAgICBpZiAoZXhwci5jYWxsZWUuZW50aXR5IGluc3RhbmNlb2YgRXhwci5CYXNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGl6ID0gdGhpcy5zY29wZS5nZXQoJ3RoaXMnLCBleHByLnBhcmVuKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXogPSB0aGlzLmV2YWx1YXRlKGV4cHIuY2FsbGVlLmVudGl0eSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGV4cHIudGhpeiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGl6ID0gZXhwci50aGl6O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZXZhbHVhdGUgZnVuY3Rpb24gYXJndW1lbnRzXHJcbiAgICAgICAgY29uc3QgYXJncyA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgYXJndW1lbnQgb2YgZXhwci5hcmdzKSB7XHJcbiAgICAgICAgICAgIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIEV4cHIuU3ByZWFkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZXZhbHVhdGUoYXJndW1lbnQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdmFsIG9mIHZhbHVlLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKHZhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzLnB1c2godGhpcy5ldmFsdWF0ZShhcmd1bWVudCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBwYXNzIGFyZ3VtZW50cyB0byBmdW5jdGlvblxyXG4gICAgICAgIGNvbnN0IGZ1bmMgPSBjYWxsZWUgYXMgJEZ1bmN0aW9uO1xyXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCAhPT0gZnVuYy5hcml0eSAmJiBmdW5jLmFyaXR5ICE9PSAtMSkge1xyXG4gICAgICAgICAgICBjb256b2xlLndhcm4oYFdhcm5pbmcgYXQgKCR7ZXhwci5wYXJlbi5saW5lfSk6ICR7Y2FsbGVlfSBtaXNtYXRjaGVkIGFyZ3VtZW50IGNvdW50OyBcXG4gRXhwZWN0ZWQgJHtmdW5jLmFyaXR5fSBidXQgZ290ICR7YXJncy5sZW5ndGh9IGApO1xyXG4gICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPCBmdW5jLmFyaXR5KSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gYXJncy5sZW5ndGg7IGkgPD0gZnVuYy5hcml0eTsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKG5ldyAkTnVsbCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBleGVjdXRlIGZ1bmN0aW9uXHJcbiAgICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGl6LCBhcmdzLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRCYXNlRXhwcihleHByOiBFeHByLkJhc2UpOiAkQW55IHtcclxuICAgICAgICBjb25zdCB0aGl6ID0gdGhpcy5zY29wZS5nZXQoZXhwci5wYXJlbi5sZXhlbWUsIGV4cHIucGFyZW4pO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXouaXNPYmplY3QoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yKFwiYmFzZSBleHByZXNzaW9uIGNhbiBiZSB1c2VkIG9ubHkgaW5zaWRlIG1ldGhvZHNcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjbGF6ejogJENsYXNzID0gKHRoaXogYXMgJE9iamVjdCkuY29uenRydWN0b3IgYXMgJENsYXNzO1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGNsYXp6LnBhcmVudDtcclxuICAgICAgICBpZiAocGFyZW50LmlzTnVsbCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJDbGFzcyBcIiArIGNsYXp6ICsgXCIgaGFzIG5vdCBiZWVuIGV4dGVuZGVkIGFuZCBoYXMgbm8gYmFzZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0TmV3RXhwcihleHByOiBFeHByLk5ldyk6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IG5ld0NhbGwgPSAoZXhwci5jbGF6eiBhcyBFeHByLkNhbGwpO1xyXG4gICAgICAgIC8vIGludGVybmFsIGNsYXNzIGRlZmluaXRpb24gaW5zdGFuY2VcclxuICAgICAgICBjb25zdCBjbGF6ejogJENsYXNzID0gdGhpcy5ldmFsdWF0ZShuZXdDYWxsLmNhbGxlZSkgYXMgJENsYXNzO1xyXG5cclxuICAgICAgICBpZiAoIWNsYXp6LmlzQ2xhc3MoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yKGAnJHtjbGF6en0nIGlzIG5vdCBhIGNsYXNzLiAnbmV3JyBzdGF0ZW1lbnQgbXVzdCBiZSB1c2VkIHdpdGggY2xhc3Nlcy5gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbmV3IG9iamVjdFxyXG4gICAgICAgIGNvbnN0IGVudGl0eSA9IG5ldyAkT2JqZWN0KG5ldyBNYXAoKSwgY2xhenopO1xyXG4gICAgICAgIC8vIGNvbnN0cnVjdG9yIG1ldGhvZCBvZiB0aGUgY2xhc3NcclxuICAgICAgICBjb25zdCBjb256dHJ1Y3RvciA9IGNsYXp6LmdldChuZXcgJFN0cmluZygnY29uc3RydWN0b3InKSkgYXMgJEZ1bmN0aW9uO1xyXG4gICAgICAgIGlmIChjb256dHJ1Y3Rvci5pc0Z1bmN0aW9uKCkpIHtcclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgY29uc3QgYXJnczogJEFueVtdID0gW107XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYXJnIG9mIG5ld0NhbGwuYXJncykge1xyXG4gICAgICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZXZhbHVhdGUoYXJnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uenRydWN0b3IuY2FsbCh0aGlzLCBlbnRpdHksIGFyZ3MpO1xyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgIHRoaXMuZXZhbHVhdGUoXHJcbiAgICAgICAgICAgICAgIG5ldyBFeHByLkNhbGwoXHJcbiAgICAgICAgICAgICAgICAgICBuZXcgRXhwci5HZXQobmV3IEV4cHIuTGl0ZXJhbChlbnRpdHksIGV4cHIubGluZSksIG5ldyBFeHByLktleShjb256dHJ1Y3Rvci5kZWNsYXJhdGlvbi5uYW1lLCBleHByLmxpbmUpLCBUb2tlblR5cGUuRG90LCBleHByLmxpbmUpLFxyXG4gICAgICAgICAgICAgICAgICAgY29uenRydWN0b3IuZGVjbGFyYXRpb24ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgIG5ld0NhbGwuYXJncyxcclxuICAgICAgICAgICAgICAgICAgIGVudGl0eSxcclxuICAgICAgICAgICAgICAgICAgIGV4cHIubGluZVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZW50aXR5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdERpY3Rpb25hcnlFeHByKGV4cHI6IEV4cHIuRGljdGlvbmFyeSk6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IGRpY3QgPSBuZXcgJERpY3Rpb25hcnkobmV3IE1hcCgpKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIGV4cHIucHJvcGVydGllcykge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgID0gdGhpcy5ldmFsdWF0ZSgocHJvcGVydHkgYXMgRXhwci5TZXQpLmtleSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5ldmFsdWF0ZSgocHJvcGVydHkgYXMgRXhwci5TZXQpLnZhbHVlKTtcclxuICAgICAgICAgICAgZGljdC5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkaWN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdEtleUV4cHIoZXhwcjogRXhwci5LZXkpOiAkQW55IHtcclxuICAgICAgICByZXR1cm4gbmV3ICRBbnkoZXhwci5uYW1lLmxpdGVyYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdEdldEV4cHIoZXhwcjogRXhwci5HZXQpOiAkQW55IHtcclxuICAgICAgICBjb25zdCBlbnRpdHkgPSB0aGlzLmV2YWx1YXRlKGV4cHIuZW50aXR5KTtcclxuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmV2YWx1YXRlKGV4cHIua2V5KTtcclxuICAgICAgICBpZiAoZW50aXR5LmlzTnVsbCgpICYmIGV4cHIudHlwZSA9PT0gVG9rZW5UeXBlLlF1ZXN0aW9uRG90KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgJE51bGwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVudGl0eS5nZXQoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRTZXRFeHByKGV4cHI6IEV4cHIuU2V0KTogJEFueSB7XHJcbiAgICAgICAgY29uc3QgZW50aXR5ID0gdGhpcy5ldmFsdWF0ZShleHByLmVudGl0eSk7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5ldmFsdWF0ZShleHByLmtleSk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmV2YWx1YXRlKGV4cHIudmFsdWUpO1xyXG4gICAgICAgIGVudGl0eS5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdEZ1bmNTdG10KHN0bXQ6IFN0bXQuRnVuYyk6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IGZ1bmMgPSBuZXcgJEZ1bmN0aW9uKHN0bXQsIHRoaXMuc2NvcGUpO1xyXG4gICAgICAgIHRoaXMuc2NvcGUuZGVmaW5lKHN0bXQubmFtZS5sZXhlbWUsIGZ1bmMpO1xyXG4gICAgICAgIHJldHVybiBmdW5jO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdENsYXNzU3RtdChzdG10OiBTdG10LkNsYXNzKTogJEFueSB7XHJcbiAgICAgICAgbGV0IHBhcmVudDogJEFueTtcclxuXHJcbiAgICAgICAgaWYgKHN0bXQucGFyZW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHBhcmVudCA9IG5ldyAkTnVsbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBhcmVudCA9IHRoaXMuc2NvcGUuZ2V0KHN0bXQucGFyZW50LmxleGVtZSwgc3RtdC5wYXJlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbWV0aG9kcyA9IG5ldyBNYXA8YW55LCAkQW55PigpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IG1ldGhvZCBvZiBzdG10Lm1ldGhvZHMpIHtcclxuICAgICAgICAgICAgbWV0aG9kcy5zZXQobWV0aG9kLm5hbWUubGV4ZW1lLCBuZXcgJEZ1bmN0aW9uKG1ldGhvZCwgdGhpcy5zY29wZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjbGF6eiA9IG5ldyAkQ2xhc3Moc3RtdC5uYW1lLmxleGVtZSwgbWV0aG9kcywgcGFyZW50KTtcclxuICAgICAgICB0aGlzLnNjb3BlLmRlZmluZShzdG10Lm5hbWUubGV4ZW1lLCBjbGF6eik7XHJcbiAgICAgICAgcmV0dXJuIGNsYXp6O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdExhbWJkYUV4cHIoZXhwcjogRXhwci5MYW1iZGEpOiAkQW55IHtcclxuICAgICAgICBjb25zdCBsYW1iZGE6IFN0bXQuRnVuYyA9IGV4cHIubGFtYmRhIGFzIFN0bXQuRnVuYztcclxuICAgICAgICBjb25zdCBmdW5jOiAkRnVuY3Rpb24gPSBuZXcgJEZ1bmN0aW9uKGxhbWJkYSwgdGhpcy5zY29wZSk7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0UmV0dXJuU3RtdChzdG10OiBTdG10LlJldHVybik6ICRBbnkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IG5ldyAkTnVsbCgpO1xyXG4gICAgICAgIGlmIChzdG10LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5ldmFsdWF0ZShzdG10LnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3ICRBbnkodmFsdWUsIERhdGFUeXBlLlJldHVybik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0QnJlYWtTdG10KHN0bXQ6IFN0bXQuQnJlYWspOiAkQW55IHtcclxuICAgICAgICB0aHJvdyBuZXcgJEFueShudWxsLCBEYXRhVHlwZS5CcmVhayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0Q29udGludWVTdG10KHN0bXQ6IFN0bXQuQ29udGludWUpOiAkQW55IHtcclxuICAgICAgICB0aHJvdyBuZXcgJEFueShudWxsLCBEYXRhVHlwZS5Db250aW51ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0UmFuZ2VFeHByKGV4cHI6IEV4cHIuUmFuZ2UpOiAkQW55IHtcclxuICAgICAgICByZXR1cm4gbmV3ICRSYW5nZShuZXcgUmFuZ2VWYWx1ZShcclxuICAgICAgICAgICAgZXhwci5zdGFydCA/IHRoaXMuZXZhbHVhdGUoZXhwci5zdGFydCkudmFsdWUgOiBudWxsLFxyXG4gICAgICAgICAgICBleHByLmVuZCA/IHRoaXMuZXZhbHVhdGUoZXhwci5lbmQpLnZhbHVlIDogbnVsbCxcclxuICAgICAgICAgICAgZXhwci5zdGVwID8gdGhpcy5ldmFsdWF0ZShleHByLnN0ZXApLnZhbHVlIDogbnVsbFxyXG4gICAgICAgICkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdFR5cGVvZkV4cHIoZXhwcjogRXhwci5UeXBlb2YpOiAkQW55IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZXZhbHVhdGUoZXhwci52YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkU3RyaW5nKERhdGFUeXBlW3ZhbHVlLnR5cGVdLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdElzRXhwcihleHByOiBFeHByLkluc3RhbmNlT2YpOiAkQW55IHtcclxuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5ldmFsdWF0ZShleHByLmxlZnQpO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gRGF0YVR5cGVbY2FwaXRhbGl6ZShleHByLnJpZ2h0LmxleGVtZSldO1xyXG4gICAgICAgIC8vIGlzIGRpcmVjdCBpbnN0YW5jZSBvZiBjbGFzc1xyXG4gICAgICAgIGlmIChsZWZ0LmlzT2JqZWN0KCkgJiYgKGxlZnQgYXMgJE9iamVjdCkubmFtZSA9PT0gZXhwci5yaWdodC5sZXhlbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbih0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaXMgbm90IGEgdHlwZVxyXG4gICAgICAgIGlmICh0eXBlb2YgcmlnaHQgPT09ICd1bmRlZmluZWQnIHx8IGlzTmFOKHJpZ2h0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaXMgYSB0eXBlXHJcbiAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbihsZWZ0LnR5cGUgPT09IHJpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRJbnN0YW5jZU9mRXhwcihleHByOiBFeHByLkluc3RhbmNlT2YpOiAkQW55IHtcclxuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5ldmFsdWF0ZShleHByLmxlZnQpO1xyXG4gICAgICAgIGlmICghbGVmdC5pc09iamVjdCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4oZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBleHByLnJpZ2h0LmxleGVtZTtcclxuXHJcbiAgICAgICAgLy8gQWxsIGluc3RhbmNlcyBkZXJpdmUgZnJvbSBPYmplY3RcclxuICAgICAgICBpZiAoY2xhc3NOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4odHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbGVmdCBhcyAkT2JqZWN0O1xyXG4gICAgICAgIGxldCBjb256dHJ1Y3RvciA9IGluc3RhbmNlLmNvbnp0cnVjdG9yIGFzICRDbGFzcztcclxuICAgICAgICBpZiAoY29uenRydWN0b3IubmFtZSA9PT0gY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4odHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlICghY29uenRydWN0b3IucGFyZW50LmlzTnVsbCgpKSB7XHJcbiAgICAgICAgICAgIGNvbnp0cnVjdG9yID0gY29uenRydWN0b3IucGFyZW50IGFzICRDbGFzcztcclxuICAgICAgICAgICAgaWYgKGNvbnp0cnVjdG9yLm5hbWUgPT09IGNsYXNzTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbih0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKGZhbHNlKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0Vm9pZEV4cHIoZXhwcjogRXhwci5Wb2lkKTogJEFueSB7XHJcbiAgICAgICAgdGhpcy5ldmFsdWF0ZShleHByLnZhbHVlKTtcclxuICAgICAgICByZXR1cm4gbmV3ICROdWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0SW5FeHByKGV4cHI6IEV4cHIuSW4pOiAkQW55IHtcclxuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmV2YWx1YXRlKGV4cHIua2V5KTtcclxuICAgICAgICBjb25zdCBlbnRpdHkgPSB0aGlzLmV2YWx1YXRlKGV4cHIuZW50aXR5KTtcclxuICAgICAgICBpZiAoZW50aXR5LmlzS2V5VmFsdWUoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKGVudGl0eS52YWx1ZS5oYXMoa2V5LnZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbnRpdHkuaXNMaXN0KCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbih0eXBlb2YgZW50aXR5LnZhbHVlW2tleS52YWx1ZV0gIT09ICd1bmRlZmluZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVudGl0eS5pc1N0cmluZygpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4oZW50aXR5LnZhbHVlLmluY2x1ZGVzKGtleS52YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVycm9yKGBPcGVyYXRvciBcImluXCIgY2FuJ3QgYmUgdXNlZCBvbiB0eXBlICR7RGF0YVR5cGVbZW50aXR5LnR5cGVdfSB3aXRoIHZhbHVlIFwiJHtlbnRpdHl9XCJgKTtcclxuICAgICAgICByZXR1cm4gbmV3ICROdWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0U3ByZWFkRXhwcihleHByOiBFeHByLlNwcmVhZCk6ICRBbnkge1xyXG4gICAgICAgIHRoaXMuZXJyb3IoYHVuZXhwZWN0ZWQgc3ByZWFkICcuLi4nIG9wZXJhdG9yIGF0IGxpbmUgJHtleHByLmxpbmV9YCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBFeHByIGZyb20gJy4vdHlwZXMvZXhwcmVzc2lvbic7XHJcbmltcG9ydCAqIGFzIFN0bXQgZnJvbSAnLi90eXBlcy9zdGF0ZW1lbnQnO1xyXG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnLi9jb25zb2xlJztcclxuaW1wb3J0IHsgVG9rZW4sIFRva2VuVHlwZSB9IGZyb20gJy4vdG9rZW4nO1xyXG5pbXBvcnQgeyAkQm9vbGVhbiB9IGZyb20gJy4vdHlwZXMvYm9vbGVhbic7XHJcbmltcG9ydCB7ICROdWxsIH0gZnJvbSAnLi90eXBlcy9udWxsJztcclxuaW1wb3J0IHsgJE51bWJlciB9IGZyb20gJy4vdHlwZXMvbnVtYmVyJztcclxuaW1wb3J0IHsgJEVycm9yIH0gZnJvbSAnLi90eXBlcy9lcnJvcic7XHJcbmRlY2xhcmUgdmFyIGNvbnpvbGU6IENvbnNvbGU7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFyc2VyIHtcclxuICAgIHByaXZhdGUgY3VycmVudDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB0b2tlbnM6IFRva2VuW107XHJcbiAgICBwdWJsaWMgZXJyb3JzOiBzdHJpbmdbXTtcclxuICAgIHB1YmxpYyBlcnJvckxldmVsID0gMTtcclxuXHJcbiAgICBwdWJsaWMgcGFyc2UodG9rZW5zOiBUb2tlbltdKTogU3RtdC5TdG10W10ge1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IDA7XHJcbiAgICAgICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XHJcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcclxuICAgICAgICBjb25zdCBzdGF0ZW1lbnRzOiBTdG10LlN0bXRbXSA9IFtdO1xyXG4gICAgICAgIHdoaWxlICghdGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGVtZW50cy5wdXNoKHRoaXMuZGVjbGFyYXRpb24oKSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgJEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaChgUGFyc2UgRXJyb3IgKCR7ZS5saW5lfToke2UuY29sfSkgPT4gJHtlLnZhbHVlfWApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVycm9ycy5sZW5ndGggPiAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCgnUGFyc2UgRXJyb3IgbGltaXQgZXhjZWVkZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlbWVudHM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zeW5jaHJvbml6ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWF0Y2goLi4udHlwZXM6IFRva2VuVHlwZVtdKTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChjb25zdCB0eXBlIG9mIHR5cGVzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrKHR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkdmFuY2UoKTogVG9rZW4ge1xyXG4gICAgICAgIGlmICghdGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJldmlvdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBlZWsoKTogVG9rZW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmN1cnJlbnRdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJldmlvdXMoKTogVG9rZW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmN1cnJlbnQgLSAxXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrKHR5cGU6IFRva2VuVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBlZWsoKS50eXBlID09PSB0eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZW9mKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrKFRva2VuVHlwZS5Fb2YpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29uc3VtZSh0eXBlOiBUb2tlblR5cGUsIG1lc3NhZ2U6IHN0cmluZyk6IFRva2VuIHtcclxuICAgICAgICBpZiAodGhpcy5jaGVjayh0eXBlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5lcnJvcih0aGlzLnByZXZpb3VzKCksIG1lc3NhZ2UgKyBgLCB1bmV4cGVjdGVkIHRva2VuIFwiJHt0aGlzLnBlZWsoKS5sZXhlbWV9XCJgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV4dHJhU2VtaWNvbG9uKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IG1hdGNoID0gdGhpcy5tYXRjaChUb2tlblR5cGUuU2VtaWNvbG9uKTtcclxuICAgICAgICBpZiAodGhpcy5jaGVjayhUb2tlblR5cGUuU2VtaWNvbG9uKSkge1xyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5jaGVjayhUb2tlblR5cGUuU2VtaWNvbG9uKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5TZW1pY29sb24sICcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWF0Y2g7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlcnJvcih0b2tlbjogVG9rZW4sIG1lc3NhZ2U6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgdGhyb3cgbmV3ICRFcnJvcihtZXNzYWdlLCB0b2tlbi5saW5lLCB0b2tlbi5jb2wpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgd2FybmluZyhtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5lcnJvckxldmVsID09PSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBjb256b2xlLndhcm4oYFtsaW5lICgke3Rva2VuLmxpbmV9KSBwYXJzZSB3YXJuaW5nIGF0IFwiJHt0b2tlbi5sZXhlbWV9XCJdID0+ICR7bWVzc2FnZX1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzeW5jaHJvbml6ZSgpOiB2b2lkIHtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5wZWVrKCkudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuQ2xhc3M6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5GdW5jdGlvbjpcclxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlZhcjpcclxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkZvcjpcclxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLklmOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuV2hpbGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5EbzpcclxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlByaW50OlxyXG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuUmV0dXJuOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLlNlbWljb2xvbiB8fCB0aGlzLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuUmlnaHRCcmFjZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfSB3aGlsZSAoIXRoaXMuZW9mKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGVjbGFyYXRpb24oKTogU3RtdC5TdG10IHtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuQ2xhc3MpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNsYXNzRGVjbGFyYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkZ1bmN0aW9uKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mdW5jRGVjbGFyYXRpb24oXCJmdW5jdGlvblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlZhcikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFyRGVjbGFyYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbGFzc0RlY2xhcmF0aW9uKCk6IFN0bXQuQ2xhc3Mge1xyXG4gICAgICAgIGNvbnN0IG5hbWU6IFRva2VuID0gdGhpcy5jb25zdW1lKFRva2VuVHlwZS5JZGVudGlmaWVyLCBgRXhwZWN0ZWQgYSBjbGFzcyBuYW1lYCk7XHJcbiAgICAgICAgbGV0IHBhcmVudDogVG9rZW4gPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5FeHRlbmRzKSkge1xyXG4gICAgICAgICAgICBwYXJlbnQgID0gdGhpcy5jb25zdW1lKFRva2VuVHlwZS5JZGVudGlmaWVyLCBgRXhwZWN0ZWQgYSBwYXJlbnQgbmFtZWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLkxlZnRCcmFjZSwgYEV4cGVjdGVkIG9wZW4gYnJhY2UgXCJ7XCIgYWZ0ZXIgY2xhc3MgbmFtZWApO1xyXG4gICAgICAgIGNvbnN0IG1ldGhvZHM6IFN0bXQuRnVuY1tdID0gW107XHJcblxyXG4gICAgICAgIHdoaWxlICghdGhpcy5jaGVjayhUb2tlblR5cGUuUmlnaHRCcmFjZSkgJiYgIXRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2soVG9rZW5UeXBlLkZ1bmN0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5GdW5jdGlvbiwgJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1ldGhvZHMucHVzaCh0aGlzLmZ1bmNEZWNsYXJhdGlvbihcIm1ldGhvZFwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlJpZ2h0QnJhY2UsIGBFeHBlY3RlZCBcIn1cIiBhZnRlciBjbGFzcyBcIiR7bmFtZS5saXRlcmFsfVwiIG1ldGhvZHNgKTtcclxuICAgICAgICBpZiAodGhpcy5leHRyYVNlbWljb2xvbigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2FybmluZyhgVW5uZWNlc3Nhcnkgc2VtaWNvbG9uIGFmdGVyIGNsYXNzICR7bmFtZS5sZXhlbWV9IGRlY2xhcmF0aW9uYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5DbGFzcyhuYW1lLCBwYXJlbnQsIG1ldGhvZHMsIG5hbWUubGluZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmdW5jRGVjbGFyYXRpb24oa2luZDogc3RyaW5nKTogU3RtdC5GdW5jIHtcclxuICAgICAgICBjb25zdCBuYW1lOiBUb2tlbiA9IHRoaXMuY29uc3VtZShUb2tlblR5cGUuSWRlbnRpZmllciwgYEV4cGVjdGVkIGEgJHtraW5kfSBuYW1lYCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZnVuY1BhcmFtc0JvZHkobmFtZSwga2luZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmdW5jUGFyYW1zKGtpbmQ6IHN0cmluZyk6IFRva2VuW10ge1xyXG4gICAgICAgIGNvbnN0IHBhcmFtczogVG9rZW5bXSA9IFtdO1xyXG4gICAgICAgIGlmICghdGhpcy5jaGVjayhUb2tlblR5cGUuUmlnaHRQYXJlbikpIHtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5sZW5ndGggPj0gMjU1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcih0aGlzLnBlZWsoKSwgYFBhcmFtZXRlciBjb3VudCBleGNlZWRzIDI1NWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnB1c2godGhpcy5jb25zdW1lKFRva2VuVHlwZS5JZGVudGlmaWVyLCBgRXhwZWN0ZWQgYSBwYXJhbWV0ZXIgbmFtZWApKTtcclxuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuQ29tbWEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5SaWdodFBhcmVuLCBgRXhwZWN0ZWQgY2xvc2UgcGFyZW50aGVzaXMgXCIpXCIgYWZ0ZXIgJHtraW5kfSBwYXJhbWV0ZXJzYCk7XHJcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZ1bmNQYXJhbXNCb2R5KG5hbWU6IFRva2VuLCBraW5kOiBzdHJpbmcpOiBTdG10LkZ1bmMge1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuTGVmdFBhcmVuLCBgRXhwZWN0ZWQgb3BlbiBwYXJlbnRoZXNpcyBcIihcIiBhZnRlciAke2tpbmR9YCk7XHJcbiAgICAgICAgY29uc3QgcGFyYW1zOiBUb2tlbltdID0gdGhpcy5mdW5jUGFyYW1zKGtpbmQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuTGVmdEJyYWNlKSkge1xyXG4gICAgICAgICAgICBjb25zdCBib2R5OiBTdG10LlN0bXRbXSA9IHRoaXMuYmxvY2soKTtcclxuICAgICAgICAgICAgaWYgKG5hbWUudHlwZSAhPT0gVG9rZW5UeXBlLkxhbWJkYSAmJiB0aGlzLmV4dHJhU2VtaWNvbG9uKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2FybmluZyhgVW5uZWNlc3Nhcnkgc2VtaWNvbG9uIGFmdGVyIGZ1bmN0aW9uICR7bmFtZS5sZXhlbWV9IGRlY2xhcmF0aW9uYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdG10LkZ1bmMobmFtZSwgcGFyYW1zLCBib2R5LCBuYW1lLmxpbmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkFycm93KSkge1xyXG4gICAgICAgICAgICBjb25zdCBib2R5OiBTdG10LlN0bXRbXSA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgYXJyb3c6IEV4cHIuRXhwcjtcclxuICAgICAgICAgICAgY29uc3Qga2V5d29yZDogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jaGVjayhUb2tlblR5cGUuU2VtaWNvbG9uKSkge1xyXG4gICAgICAgICAgICAgICAgYXJyb3cgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm1hdGNoKFRva2VuVHlwZS5TZW1pY29sb24pO1xyXG4gICAgICAgICAgICBib2R5LnB1c2gobmV3IFN0bXQuUmV0dXJuKGtleXdvcmQsIGFycm93LCBrZXl3b3JkLmxpbmUpKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdG10LkZ1bmMobmFtZSwgcGFyYW1zLCBib2R5LCBuYW1lLmxpbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLkxlZnRCcmFjZSwgYEV4cGVjdCBcIntcIiBiZWZvcmUgJHtraW5kfSBib2R5YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB2YXJEZWNsYXJhdGlvbigpOiBTdG10LlN0bXQge1xyXG4gICAgICAgIGNvbnN0IG5hbWU6IFRva2VuID0gdGhpcy5jb25zdW1lKFRva2VuVHlwZS5JZGVudGlmaWVyLCBgRXhwZWN0ZWQgYSB2YXJpYWJsZSBuYW1lIGFmdGVyIFwidmFyXCIga2V5d29yZGApO1xyXG4gICAgICAgIGxldCBpbml0aWFsaXplcjogRXhwci5FeHByICA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkVxdWFsKSkge1xyXG4gICAgICAgICAgICBpbml0aWFsaXplciA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlNlbWljb2xvbiwgYEV4cGVjdGVkIHNlbWljb2xvbiBcIjtcIiBhZnRlciBhIHZhcmlhYmxlIGRlY2xhcmF0aW9uYCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5WYXIobmFtZSwgbnVsbCwgaW5pdGlhbGl6ZXIsIG5hbWUubGluZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0ZW1lbnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLklmKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pZlN0YXRlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuUHJpbnQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByaW50U3RhdGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5EbykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZG9XaGlsZVN0YXRlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuV2hpbGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndoaWxlU3RhdGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5Gb3IpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvclN0YXRlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuRm9yZWFjaCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9yZWFjaFN0YXRlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuTGVmdEJyYWNlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFN0bXQuQmxvY2sodGhpcy5ibG9jaygpLCB0aGlzLnByZXZpb3VzKCkubGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5SZXR1cm4pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJldHVyblN0YXRlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuQnJlYWspKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJyZWFrU3RhdGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5Db250aW51ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGludWVTdGF0ZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvblN0YXRlbWVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaWZTdGF0ZW1lbnQoKTogU3RtdC5TdG10IHtcclxuICAgICAgICBjb25zdCBrZXl3b3JkID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuTGVmdFBhcmVuLCBgRXhwZWN0ZWQgb3BlbiBwYXJlbnRoZXNpcyBcIihcIiBhZnRlciBhbiBcImlmXCIga2V5d29yZGApO1xyXG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbjogRXhwci5FeHByID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5SaWdodFBhcmVuLCBgRXhwZWN0ZWQgY2xvc2UgcGFyZW50aGVzaXMgXCIpXCIgYWZ0ZXIgXCJpZlwiIHN0YXRlbWVudCBjb25kaXRpb25gKTtcclxuICAgICAgICBjb25zdCB0aGVuU3RtdDogU3RtdC5TdG10ID0gdGhpcy5zdGF0ZW1lbnQoKTtcclxuICAgICAgICBsZXQgZWxzZVN0bXQ6IFN0bXQuU3RtdCA9ICBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5FbHNlKSkge1xyXG4gICAgICAgICAgICBlbHNlU3RtdCA9IHRoaXMuc3RhdGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5JZihjb25kaXRpb24sIHRoZW5TdG10LCBlbHNlU3RtdCwga2V5d29yZC5saW5lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHdoaWxlU3RhdGVtZW50KCk6IFN0bXQuU3RtdCB7XHJcbiAgICAgICAgY29uc3Qga2V5d29yZCA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLkxlZnRQYXJlbiwgYEV4cGVjdGVkIG9wZW4gcGFyZW50aGVzaXMgXCIoXCIgYWZ0ZXIgYSBcIndoaWxlXCIgc3RhdGVtZW50YCk7XHJcbiAgICAgICAgY29uc3QgY29uZGl0aW9uOiBFeHByLkV4cHIgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlJpZ2h0UGFyZW4sIGBFeHBlY3RlZCBjbG9zZSBwYXJlbnRoZXNpcyBcIilcIiBhZnRlciBcIndoaWxlXCIgY29uZGl0aW9uYCk7XHJcbiAgICAgICAgY29uc3QgbG9vcDogU3RtdC5TdG10ID0gdGhpcy5zdGF0ZW1lbnQoKTtcclxuICAgICAgICByZXR1cm4gbmV3IFN0bXQuV2hpbGUoY29uZGl0aW9uLCBsb29wLCBrZXl3b3JkLmxpbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZm9yU3RhdGVtZW50KCk6IFN0bXQuU3RtdCB7XHJcbiAgICAgICAgY29uc3Qga2V5d29yZCA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLkxlZnRQYXJlbiwgYEV4cGVjdGVkIG9wZW4gcGFyZW50aGVzaXMgXCIoXCIgYWZ0ZXIgYSBcImZvclwiIHN0YXRlbWVudGApO1xyXG5cclxuICAgICAgICBsZXQgaW5pdGlhbGl6ZXI6IFN0bXQuU3RtdDtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuU2VtaWNvbG9uKSkge1xyXG4gICAgICAgICAgICBpbml0aWFsaXplciA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5WYXIpKSB7XHJcbiAgICAgICAgICAgIGluaXRpYWxpemVyID0gdGhpcy52YXJEZWNsYXJhdGlvbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGluaXRpYWxpemVyID0gdGhpcy5leHByZXNzaW9uU3RhdGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjb25kaXRpb246IEV4cHIuRXhwcjtcclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLlNlbWljb2xvbikpIHtcclxuICAgICAgICAgICAgY29uZGl0aW9uID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuU2VtaWNvbG9uLCBgRXhwZWN0ZWQgc2VtaWNvbG9uIFwiO1wiIGFmdGVyIGEgXCJmb3JcIiBzdGF0ZW1lbnQgbG9vcCBjb25kaXRpb25gKTtcclxuICAgICAgICBsZXQgaW5jcmVtZW50OiBFeHByLkV4cHI7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5SaWdodFBhcmVuKSkge1xyXG4gICAgICAgICAgICBpbmNyZW1lbnQgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5SaWdodFBhcmVuLCBgRXhwZWN0ZWQgc2VtaWNvbG9uIFwiO1wiIGFmdGVyIGEgXCJmb3JcIiBzdGVtZW50IGluY3JlbWVudCBleHByZXNzaW9uYCk7XHJcbiAgICAgICAgbGV0IGJvZHk6IFN0bXQuU3RtdCA9IHRoaXMuc3RhdGVtZW50KCk7XHJcbiAgICAgICAgaWYgKGluY3JlbWVudCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBib2R5ID0gbmV3IFN0bXQuQmxvY2soW1xyXG4gICAgICAgICAgICAgICAgYm9keSxcclxuICAgICAgICAgICAgICAgIG5ldyBTdG10LkV4cHJlc3Npb24oaW5jcmVtZW50LCBrZXl3b3JkLmxpbmUpXHJcbiAgICAgICAgICAgIF0sIGtleXdvcmQubGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25kaXRpb24gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uZGl0aW9uID0gbmV3IEV4cHIuTGl0ZXJhbChuZXcgJEJvb2xlYW4odHJ1ZSksIGtleXdvcmQubGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvZHkgPSBuZXcgU3RtdC5XaGlsZShjb25kaXRpb24sIGJvZHksIGtleXdvcmQubGluZSk7XHJcbiAgICAgICAgaWYgKGluaXRpYWxpemVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGJvZHkgPSBuZXcgU3RtdC5CbG9jayhbXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsaXplcixcclxuICAgICAgICAgICAgICAgIGJvZHlcclxuICAgICAgICAgICAgXSwga2V5d29yZC5saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJvZHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmb3JlYWNoU3RhdGVtZW50KCk6IFN0bXQuU3RtdCB7XHJcbiAgICAgICAgY29uc3Qga2V5d29yZCA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLkxlZnRQYXJlbiwgYEV4cGVjdGVkIG9wZW4gcGFyZW50aGVzaXMgXCIoXCIgYWZ0ZXIgYSBcImZvcmVhY2hcIiBzdGF0ZW1lbnRgKTtcclxuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5jb25zdW1lKFRva2VuVHlwZS5JZGVudGlmaWVyLCBgRXhwZWN0ZWQgYW4gaWRlbnRpZmllciBpbnNpZGUgXCJmb3JlYWNoXCIgc3RhdGVtZW50YCk7XHJcbiAgICAgICAgbGV0IGtleTogVG9rZW4gPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5XaXRoKSkge1xyXG4gICAgICAgICAgICBrZXkgPSB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLklkZW50aWZpZXIsIGBFeHBlY3RlZCBhIFwia2V5XCIgaWRlbnRpZmllciBhZnRlciBcIndpdGhcIiBrZXl3b3JkIGluIGZvcmVhY2ggc3RhdGVtZW50YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuSW4sIGBFeHBlY3RlZCBcImluXCIga2V5d29yZCBpbnNpZGUgZm9yZWFjaCBzdGF0ZW1lbnRgKTtcclxuICAgICAgICBjb25zdCBpdGVyYWJsZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuUmlnaHRQYXJlbiwgYEV4cGVjdGVkIGNsb3NlIHBhcmVudGhlc2lzIFwiKVwiIGFmdGVyIGEgXCJmb3JlYWNoXCIgaW5pdGlhbGl6YXRpb25gKTtcclxuXHJcbiAgICAgICAgY29uc3QgbG9vcDogU3RtdC5TdG10ID0gdGhpcy5zdGF0ZW1lbnQoKTtcclxuICAgICAgICByZXR1cm4gbmV3IFN0bXQuRm9yZWFjaChuYW1lLCBrZXksIGl0ZXJhYmxlLCBsb29wLCBrZXl3b3JkLmxpbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZG9XaGlsZVN0YXRlbWVudCgpOiBTdG10LlN0bXQge1xyXG4gICAgICAgIGNvbnN0IGtleXdvcmQgPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgY29uc3QgbG9vcDogU3RtdC5TdG10ID0gdGhpcy5zdGF0ZW1lbnQoKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLldoaWxlLCBgRXhwZWN0ZWQgYSBcIndoaWxlXCIgY29uZGl0aW9uIGFmdGVyIFwiZG9cIiBzdGF0ZW1lbnRgKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLkxlZnRQYXJlbiwgYEV4cGVjdGVkIG9wZW4gcGFyZW50aGVzaXMgXCIoXCIgYWZ0ZXIgYSBcIndoaWxlXCIga2V5d29yZGApO1xyXG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbjogRXhwci5FeHByID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5SaWdodFBhcmVuLCBgRXhwZWN0ZWQgY2xvc2UgcGFyZW50aGVzaXMgXCIpXCIgYWZ0ZXIgXCJ3aGlsZVwiIGNvbmRpdGlvbmApO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuU2VtaWNvbG9uLCBgRXhwZWN0ZWQgc2VtaWNvbG9uIFwiO1wiIGFmdGVyIGEgZG8gd2hpbGUgY29uZGl0aW9uYCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdG10LkRvV2hpbGUobG9vcCwgY29uZGl0aW9uLCBrZXl3b3JkLmxpbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJpbnRTdGF0ZW1lbnQoKTogU3RtdC5TdG10IHtcclxuICAgICAgICBjb25zdCBrZXl3b3JkID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlOiBFeHByLkV4cHIgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlNlbWljb2xvbiwgYEV4cGVjdGVkIHNlbWljb2xvbiBcIjtcIiBhZnRlciBleHByZXNzaW9uYCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdG10LlByaW50KHZhbHVlLCBrZXl3b3JkLmxpbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmV0dXJuU3RhdGVtZW50KCk6IFN0bXQuU3RtdCB7XHJcbiAgICAgICAgY29uc3Qga2V5d29yZDogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5TZW1pY29sb24pKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlNlbWljb2xvbiwgYEV4ZWN0ZWQgc2VtaWNvbG9uIFwiO1wiIGFmdGVyIHJldHVybiBzdGF0ZW1lbnRgKTtcclxuICAgICAgICByZXR1cm4gbmV3IFN0bXQuUmV0dXJuKGtleXdvcmQsIHZhbHVlLCBrZXl3b3JkLmxpbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYnJlYWtTdGF0ZW1lbnQoKTogU3RtdC5TdG10IHtcclxuICAgICAgICBjb25zdCBrZXl3b3JkOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlNlbWljb2xvbiwgYEV4ZWN0ZWQgc2VtaWNvbG9uIFwiO1wiIGFmdGVyIGJyZWFrIHN0YXRlbWVudGApO1xyXG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5CcmVhayhrZXl3b3JkLCBrZXl3b3JkLmxpbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29udGludWVTdGF0ZW1lbnQoKTogU3RtdC5TdG10IHtcclxuICAgICAgICBjb25zdCBrZXl3b3JkOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlNlbWljb2xvbiwgYEV4ZWN0ZWQgc2VtaWNvbG9uIFwiO1wiIGFmdGVyIGNvbnRpbnVlIHN0YXRlbWVudGApO1xyXG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5Db250aW51ZShrZXl3b3JkLCBrZXl3b3JkLmxpbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYmxvY2soKTogU3RtdC5TdG10W10ge1xyXG4gICAgICAgIGNvbnN0IHN0YXRlbWVudHM6IFN0bXQuU3RtdFtdID0gW107XHJcbiAgICAgICAgd2hpbGUgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5SaWdodEJyYWNlKSAmJiAhdGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICBzdGF0ZW1lbnRzLnB1c2godGhpcy5kZWNsYXJhdGlvbigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5SaWdodEJyYWNlLCBgRXhwZWN0ZWQgY2xvc2UgYnJhY2UgXCJ9XCIgYWZ0ZXIgYmxvY2sgc3RhdGVtZW50YCk7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlbWVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHByZXNzaW9uU3RhdGVtZW50KCk6IFN0bXQuU3RtdCB7XHJcbiAgICAgICAgY29uc3QgZXhwcmVzc2lvbjogRXhwci5FeHByID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5TZW1pY29sb24sIGBFeHBlY3RlZCBzZW1pY29sb24gXCI7XCIgYWZ0ZXIgJHtleHByZXNzaW9ufSBleHByZXNzaW9uYCk7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlNlbWljb2xvbikpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIHRoaXMud2FybmluZyhgW2xpbmUgKCR7dG9rZW4ubGluZX0pIHBhcnNlIHdhcm5pbmcgYXQgXCIke3Rva2VuLmxleGVtZX1cIl0gPT4gdW5uZWNlc3Nhcnkgc2VtaWNvbG9uIG9yIGVtcHR5IHN0YXRlbWVudGApO1xyXG4gICAgICAgICAgICAvLyBjb25zdW1lIGFsbCBzZW1pY29sb25zXHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuU2VtaWNvbG9uKSl7IH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5FeHByZXNzaW9uKGV4cHJlc3Npb24sIGV4cHJlc3Npb24ubGluZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHByZXNzaW9uKCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNzaWdubWVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXNzaWdubWVudCgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGNvbnN0IGV4cHI6IEV4cHIuRXhwciA9IHRoaXMudGVybmFyeSgpO1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5FcXVhbCwgVG9rZW5UeXBlLlBsdXNFcXVhbCxcclxuICAgICAgICAgICAgVG9rZW5UeXBlLk1pbnVzRXF1YWwsIFRva2VuVHlwZS5TdGFyRXF1YWwsIFRva2VuVHlwZS5TbGFzaEVxdWFsKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZTogRXhwci5FeHByID0gdGhpcy5hc3NpZ25tZW50KCk7XHJcbiAgICAgICAgICAgIGlmIChleHByIGluc3RhbmNlb2YgRXhwci5WYXJpYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZTogVG9rZW4gPSBleHByLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBpZiAob3BlcmF0b3IudHlwZSAhPT0gVG9rZW5UeXBlLkVxdWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRXhwci5CaW5hcnkobmV3IEV4cHIuVmFyaWFibGUobmFtZSwgbmFtZS5saW5lKSwgb3BlcmF0b3IsIHZhbHVlLCBvcGVyYXRvci5saW5lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5Bc3NpZ24obmFtZSwgdmFsdWUsIG5hbWUubGluZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXhwciBpbnN0YW5jZW9mIEV4cHIuR2V0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3BlcmF0b3IudHlwZSAhPT0gVG9rZW5UeXBlLkVxdWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRXhwci5CaW5hcnkobmV3IEV4cHIuR2V0KGV4cHIuZW50aXR5LCBleHByLmtleSwgZXhwci50eXBlLCBleHByLmxpbmUpLCBvcGVyYXRvciwgdmFsdWUsIG9wZXJhdG9yLmxpbmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlNldChleHByLmVudGl0eSwgZXhwci5rZXksIHZhbHVlLCBleHByLmxpbmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3Iob3BlcmF0b3IsIGBJbnZhbGlkIGwtdmFsdWUsIGlzIG5vdCBhbiBhc3NpZ25pbmcgdGFyZ2V0LmApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRlcm5hcnkoKTogRXhwci5FeHByIHtcclxuICAgICAgICBjb25zdCBleHByID0gdGhpcy5udWxsQ29hbGVzY2luZygpO1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5RdWVzdGlvbikpIHtcclxuICAgICAgICAgICAgY29uc3QgdGhlbkV4cHI6IEV4cHIuRXhwciA9IHRoaXMudGVybmFyeSgpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLkNvbG9uLCBgRXhwZWN0ZWQgXCI6XCIgYWZ0ZXIgdGVybmFyeSA/IGV4cHJlc3Npb25gKTtcclxuICAgICAgICAgICAgY29uc3QgZWxzZUV4cHI6IEV4cHIuRXhwciA9IHRoaXMudGVybmFyeSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuVGVybmFyeShleHByLCB0aGVuRXhwciwgZWxzZUV4cHIsIGV4cHIubGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBleHByO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbnVsbENvYWxlc2NpbmcoKTogRXhwci5FeHByIHtcclxuICAgICAgICBjb25zdCBleHByID0gdGhpcy5sb2dpY2FsT3IoKTtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuUXVlc3Rpb25RdWVzdGlvbikpIHtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHRFeHByOiBFeHByLkV4cHIgPSB0aGlzLm51bGxDb2FsZXNjaW5nKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5OdWxsQ29hbGVzY2luZyhleHByLCByaWdodEV4cHIsIGV4cHIubGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBleHByO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9naWNhbE9yKCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgbGV0IGV4cHIgPSB0aGlzLmxvZ2ljYWxBbmQoKTtcclxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuT3IpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMubG9naWNhbEFuZCgpO1xyXG4gICAgICAgICAgICBleHByID0gbmV3IEV4cHIuTG9naWNhbChleHByLCBvcGVyYXRvciwgcmlnaHQsIG9wZXJhdG9yLmxpbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvZ2ljYWxBbmQoKTogRXhwci5FeHByIHtcclxuICAgICAgICBsZXQgZXhwciA9IHRoaXMuZXF1YWxpdHkoKTtcclxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuQW5kKSkge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0OiBFeHByLkV4cHIgPSB0aGlzLmVxdWFsaXR5KCk7XHJcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5Mb2dpY2FsKGV4cHIsIG9wZXJhdG9yLCByaWdodCwgb3BlcmF0b3IubGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBleHByO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXF1YWxpdHkoKTogRXhwci5FeHByIHtcclxuICAgICAgICBsZXQgZXhwciAgPSB0aGlzLmluc3RhbmNlb2YoKTtcclxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChcclxuICAgICAgICAgICAgVG9rZW5UeXBlLkJhbmdFcXVhbCwgVG9rZW5UeXBlLkVxdWFsRXF1YWwpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMuaW5zdGFuY2VvZigpO1xyXG4gICAgICAgICAgICBleHByID0gbmV3IEV4cHIuQmluYXJ5KGV4cHIsIG9wZXJhdG9yLCByaWdodCwgb3BlcmF0b3IubGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBleHByO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5zdGFuY2VvZigpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGxldCBleHByID0gdGhpcy5pbigpO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5JcywgVG9rZW5UeXBlLkluc3RhbmNlb2YpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuSWRlbnRpZmllciwgVG9rZW5UeXBlLkNsYXNzLCBUb2tlblR5cGUuRnVuY3Rpb24sIFRva2VuVHlwZS5OdWxsKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAob3BlcmF0b3IudHlwZSA9PT0gVG9rZW5UeXBlLkluc3RhbmNlb2YpIHtcclxuICAgICAgICAgICAgICAgICAgICBleHByID0gbmV3IEV4cHIuSW5zdGFuY2VPZihleHByLCByaWdodCwgb3BlcmF0b3IubGluZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5JcyhleHByLCByaWdodCwgb3BlcmF0b3IubGluZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKHRoaXMucHJldmlvdXMoKSwgYEV4cGVjdGVkIGEgVHlwZSBvciBDbGFzc05hbWUgaWRlbnRpZmllciBhZnRlciBcImlzXCIgb3BlcmF0b3JgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluKCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgbGV0IGV4cHIgPSB0aGlzLmNvbXBhcmlzb24oKTtcclxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuSW4pKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBjb25zdCBlbnRpdHkgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkluKGV4cHIsIGVudGl0eSwgb3BlcmF0b3IubGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBleHByO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29tcGFyaXNvbigpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGxldCBleHByOiBFeHByLkV4cHIgPSB0aGlzLmFkZGl0aW9uKCk7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkdyZWF0ZXIsIFRva2VuVHlwZS5HcmVhdGVyRXF1YWwsIFRva2VuVHlwZS5MZXNzLCBUb2tlblR5cGUuTGVzc0VxdWFsKSkge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0OiBFeHByLkV4cHIgPSB0aGlzLmFkZGl0aW9uKCk7XHJcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5CaW5hcnkoZXhwciwgb3BlcmF0b3IsIHJpZ2h0LCBvcGVyYXRvci5saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRpdGlvbigpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGxldCBleHByOiBFeHByLkV4cHIgPSB0aGlzLm1vZHVsdXMoKTtcclxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuTWludXMsIFRva2VuVHlwZS5QbHVzKSkge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0OiBFeHByLkV4cHIgPSB0aGlzLm1vZHVsdXMoKTtcclxuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkJpbmFyeShleHByLCBvcGVyYXRvciwgcmlnaHQsIG9wZXJhdG9yLmxpbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vZHVsdXMoKTogRXhwci5FeHByIHtcclxuICAgICAgICBsZXQgZXhwcjogRXhwci5FeHByID0gdGhpcy5tdWx0aXBsaWNhdGlvbigpO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5QZXJjZW50KSkge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0OiBFeHByLkV4cHIgPSB0aGlzLm11bHRpcGxpY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5CaW5hcnkoZXhwciwgb3BlcmF0b3IsIHJpZ2h0LCBvcGVyYXRvci5saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtdWx0aXBsaWNhdGlvbigpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGxldCBleHByOiBFeHByLkV4cHIgPSB0aGlzLnR5cGVvZigpO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5TbGFzaCwgVG9rZW5UeXBlLlN0YXIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMudHlwZW9mKCk7XHJcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5CaW5hcnkoZXhwciwgb3BlcmF0b3IsIHJpZ2h0LCBvcGVyYXRvci5saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0eXBlb2YoKTogRXhwci5FeHByIHtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuVHlwZW9mKSkge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlOiBFeHByLkV4cHIgPSB0aGlzLnR5cGVvZigpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuVHlwZW9mKHZhbHVlLCBvcGVyYXRvci5saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudW5hcnkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVuYXJ5KCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLk1pbnVzLCBUb2tlblR5cGUuQmFuZywgVG9rZW5UeXBlLkRvbGxhciwgVG9rZW5UeXBlLlBsdXNQbHVzLCBUb2tlblR5cGUuTWludXNNaW51cykpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3I6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBjb25zdCByaWdodDogRXhwci5FeHByID0gdGhpcy51bmFyeSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuVW5hcnkob3BlcmF0b3IsIHJpZ2h0LCBvcGVyYXRvci5saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV3S2V5d29yZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbmV3S2V5d29yZCgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5OZXcpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleXdvcmQgPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdDogRXhwci5FeHByID0gdGhpcy5jYWxsKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5OZXcoY29uc3RydWN0LCBrZXl3b3JkLmxpbmUpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FsbCgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGxldCBleHByOiBFeHByLkV4cHIgPSB0aGlzLnByaW1hcnkoKTtcclxuICAgICAgICBsZXQgY29uc3VtZWQgPSB0cnVlO1xyXG4gICAgICAgIGRvICB7XHJcbiAgICAgICAgICAgIGNvbnN1bWVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5MZWZ0UGFyZW4pKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdW1lZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJnczogRXhwci5FeHByW10gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLlJpZ2h0UGFyZW4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkNvbW1hKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVuOiBUb2tlbiA9IHRoaXMuY29uc3VtZShUb2tlblR5cGUuUmlnaHRQYXJlbiwgYEV4cGVjdGVkIFwiKVwiIGFmdGVyIGFyZ3VtZW50c2ApO1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5DYWxsKGV4cHIsIHBhcmVuLCBhcmdzLCBudWxsLCBwYXJlbi5saW5lKTtcclxuICAgICAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkxlZnRQYXJlbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5Eb3QsIFRva2VuVHlwZS5RdWVzdGlvbkRvdCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN1bWVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGV4cHIgPSB0aGlzLmRvdEdldChleHByLCB0aGlzLnByZXZpb3VzKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5MZWZ0QnJhY2tldCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN1bWVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGV4cHIgPSB0aGlzLmJyYWNrZXRHZXQoZXhwciwgdGhpcy5wcmV2aW91cygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gd2hpbGUgKGNvbnN1bWVkKTtcclxuICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRvdEdldChleHByOiBFeHByLkV4cHIsIG9wZXJhdG9yOiBUb2tlbik6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgY29uc3QgbmFtZTogVG9rZW4gPSB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLklkZW50aWZpZXIsIGBFeHBlY3QgcHJvcGVydHkgbmFtZSBhZnRlciAnLidgKTtcclxuICAgICAgICBjb25zdCBrZXk6IEV4cHIuS2V5ID0gbmV3IEV4cHIuS2V5KG5hbWUsIG5hbWUubGluZSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFeHByLkdldChleHByLCBrZXksIG9wZXJhdG9yLnR5cGUsIG5hbWUubGluZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBicmFja2V0R2V0KGV4cHI6IEV4cHIuRXhwciwgb3BlcmF0b3I6IFRva2VuKTogRXhwci5FeHByIHtcclxuICAgICAgICBsZXQga2V5OiBFeHByLkV4cHIgPSBudWxsO1xyXG4gICAgICAgIGxldCBlbmQ6IEV4cHIuRXhwciA9IG51bGw7XHJcbiAgICAgICAgbGV0IHN0ZXA6IEV4cHIuRXhwciA9IG51bGw7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5Db2xvbikpIHtcclxuICAgICAgICAgICAga2V5ID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5Db2xvbikgJiYgIXRoaXMuY2hlY2soVG9rZW5UeXBlLkNvbG9uKSkge1xyXG4gICAgICAgICAgICBlbmQgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkNvbG9uKSAmJiAhdGhpcy5jaGVjayhUb2tlblR5cGUuUmlnaHRCcmFja2V0KSkge1xyXG4gICAgICAgICAgICBzdGVwID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuUmlnaHRCcmFja2V0LCBgRXhwZWN0ZWQgXCJdXCIgYWZ0ZXIgYW4gaW5kZXhgKTtcclxuICAgICAgICBpZiAoIWtleSB8fCBlbmQgfHwgc3RlcCkge1xyXG4gICAgICAgICAgICBjb25zdCByYW5nZSA9IG5ldyBFeHByLlJhbmdlKGtleSwgZW5kLCBzdGVwLCBvcGVyYXRvci5saW5lKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkdldChleHByLCByYW5nZSwgb3BlcmF0b3IudHlwZSwgb3BlcmF0b3IubGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgRXhwci5HZXQoZXhwciwga2V5LCBvcGVyYXRvci50eXBlLCBvcGVyYXRvci5saW5lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByaW1hcnkoKTogRXhwci5FeHByIHtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuRmFsc2UpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5MaXRlcmFsKG5ldyAkQm9vbGVhbihmYWxzZSksIHRoaXMucHJldmlvdXMoKS5saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlRydWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5MaXRlcmFsKG5ldyAkQm9vbGVhbih0cnVlKSwgdGhpcy5wcmV2aW91cygpLmxpbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuTnVsbCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkxpdGVyYWwobmV3ICROdWxsKCksIHRoaXMucHJldmlvdXMoKS5saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLk51bWJlcikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkxpdGVyYWwobmV3ICROdW1iZXIodGhpcy5wcmV2aW91cygpLmxpdGVyYWwpLCB0aGlzLnByZXZpb3VzKCkubGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5TdHJpbmcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5adHJpbmcodGhpcy5wcmV2aW91cygpLmxpdGVyYWwsIHRoaXMucHJldmlvdXMoKS5saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlRlbXBsYXRlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuVGVtcGxhdGUodGhpcy5wcmV2aW91cygpLmxpdGVyYWwsIHRoaXMucHJldmlvdXMoKS5saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlJlZ2V4KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuUmVnRXgodGhpcy5wcmV2aW91cygpLmxpdGVyYWwsIHRoaXMucHJldmlvdXMoKS5saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkJhc2UpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmVuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBwYXJlbi5sZXhlbWUgPSAndGhpcyc7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5CYXNlKHBhcmVuLCBwYXJlbi5saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLklkZW50aWZpZXIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSAgdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuUGx1c1BsdXMpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuUG9zdGZpeChpZGVudGlmaWVyLCAxLCBpZGVudGlmaWVyLmxpbmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5NaW51c01pbnVzKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlBvc3RmaXgoaWRlbnRpZmllciwgLTEsIGlkZW50aWZpZXIubGluZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlZhcmlhYmxlKGlkZW50aWZpZXIsIGlkZW50aWZpZXIubGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5MZWZ0UGFyZW4pKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4cHI6IEV4cHIuRXhwciA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlJpZ2h0UGFyZW4sIGBFeHBlY3RlZCBcIilcIiBhZnRlciBleHByZXNzaW9uYCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5Hcm91cGluZyhleHByLCBleHByLmxpbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuTGVmdEJyYWNlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaWN0aW9uYXJ5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5GdW5jdGlvbikpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW46IFRva2VuID0gbmV3IFRva2VuKFRva2VuVHlwZS5MYW1iZGEsICdAJywgJ0AnLCB0aGlzLnByZXZpb3VzKCkubGluZSwgdGhpcy5wcmV2aW91cygpLmNvbCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhbWJkYTogU3RtdC5GdW5jID0gdGhpcy5mdW5jUGFyYW1zQm9keSh0b2tlbiwgJ2xhbWJkYScpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGFtYmRhKGxhbWJkYSwgdG9rZW4ubGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5MZWZ0QnJhY2tldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlzdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuVm9pZCkpIHtcclxuICAgICAgICAgICAgY29uc3QgZXhwcjogRXhwci5FeHByID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5Wb2lkKGV4cHIsIHRoaXMucHJldmlvdXMoKS5saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkRvdERvdERvdCkpIHtcclxuICAgICAgICAgICAgY29uc3QgZXhwcjogRXhwci5FeHByID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5TcHJlYWQoZXhwciwgdGhpcy5wcmV2aW91cygpLmxpbmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhyb3cgdGhpcy5lcnJvcih0aGlzLnBlZWsoKSwgYEV4cGVjdGVkIGV4cHJlc3Npb24sIHVuZXhwZWN0ZWQgdG9rZW4gXCIke3RoaXMucGVlaygpLmxleGVtZX1cImApO1xyXG4gICAgICAgIC8vIHVucmVhY2hlYWJsZSBjb2RlXHJcbiAgICAgICAgcmV0dXJuIG5ldyBFeHByLkxpdGVyYWwobnVsbCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpY3Rpb25hcnkoKTogRXhwci5FeHByIHtcclxuICAgICAgICBjb25zdCBsZWZ0QnJhY2UgPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlJpZ2h0QnJhY2UpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5EaWN0aW9uYXJ5KFtdLCB0aGlzLnByZXZpb3VzKCkubGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXM6IEV4cHIuU2V0W10gPSBbXTtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5TdHJpbmcsIFRva2VuVHlwZS5JZGVudGlmaWVyLCBUb2tlblR5cGUuTnVtYmVyKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5OiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuQ29sb24sIGBFeHBlY3RlZCBcIjpcIiBjb2xvbiBhZnRlciBtZW1iZXJgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLnB1c2gobmV3IEV4cHIuU2V0KG51bGwsIG5ldyBFeHByLktleShrZXksIGtleS5saW5lKSwgdmFsdWUsIGtleS5saW5lKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKHRoaXMucGVlaygpLCBgU3RyaW5nLCBOdW1iZXIgb3IgSWRlbnRpZmllciBleHBlY3RlZCBhcyBhIEtleSBvZiBEaWN0aW9uYXJ5IHssIHVuZXhwZWN0ZWQgdG9rZW4gJHt0aGlzLnBlZWsoKS5sZXhlbWV9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5Db21tYSkpO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuUmlnaHRCcmFjZSwgYEV4cGVjdGVkIFwifVwiIGFmdGVyIG9iamVjdCBsaXRlcmFsYCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgRXhwci5EaWN0aW9uYXJ5KHByb3BlcnRpZXMsIGxlZnRCcmFjZS5saW5lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxpc3QoKTogRXhwci5FeHByIHtcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSBbXTtcclxuICAgICAgICBjb25zdCBsZWZ0QnJhY2tldCA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuUmlnaHRCcmFja2V0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGlzdChbXSwgdGhpcy5wcmV2aW91cygpLmxpbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKHRoaXMuZXhwcmVzc2lvbigpKTtcclxuICAgICAgICB9IHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5Db21tYSkpO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuUmlnaHRCcmFja2V0LCBgRXhwZWN0ZWQgXCJdXCIgYWZ0ZXIgYXJyYXkgZGVjbGFyYXRpb25gKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBFeHByLkxpc3QodmFsdWVzLCBsZWZ0QnJhY2tldC5saW5lKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGVzL3R5cGUuZW51bSc7XHJcbmltcG9ydCB7ICROdWxsIH0gZnJvbSAnLi90eXBlcy9udWxsJztcclxuaW1wb3J0IHsgJEFueSB9IGZyb20gJy4vdHlwZXMvYW55JztcclxuaW1wb3J0IHsgJENhbGxhYmxlIH0gZnJvbSAnLi90eXBlcy9mdW5jdGlvbic7XHJcbmltcG9ydCB7ICRCb29sZWFuIH0gZnJvbSAnLi90eXBlcy9ib29sZWFuJztcclxuaW1wb3J0IHsgJExpc3QgfSBmcm9tICcuL3R5cGVzL2xpc3QnO1xyXG5pbXBvcnQgeyAkTnVtYmVyIH0gZnJvbSAnLi90eXBlcy9udW1iZXInO1xyXG5pbXBvcnQgeyAkU3RyaW5nIH0gZnJvbSAnLi90eXBlcy9zdHJpbmcnO1xyXG5pbXBvcnQgeyAkVm9pZCB9IGZyb20gJy4vdHlwZXMvdm9pZCc7XHJcbmltcG9ydCB7ICRSZWdFeHAgfSBmcm9tICcuL3R5cGVzL3JlZ2V4JztcclxuaW1wb3J0IHsgJEl0ZXJhdG9yIH0gZnJvbSAnLi90eXBlcy9pdGVyYXRvcic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZnJvbUphdmFTY3JpcHRNZXRob2QoanNOYW1lOiBzdHJpbmcsIGFyaXR5OiBudW1iZXIsIHR5cGU6IERhdGFUeXBlKTogJENhbGxhYmxlIHtcclxuICAgIHJldHVybiBuZXcgJENhbGxhYmxlKGpzTmFtZSwgYXJpdHksICh0aGl6OiAkQW55LCBhcmdzOiAkQW55W10pOiAkQW55ID0+IHtcclxuICAgICAgICBjb25zdCBhcmdWYWx1ZXMgPSBhcmdzLm1hcCgoYXJnOiAkQW55KSA9PiBhcmcudmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXoudmFsdWVbanNOYW1lXSguLi5hcmdWYWx1ZXMpO1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIERhdGFUeXBlLkJvb2xlYW46XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGNhc2UgRGF0YVR5cGUuU3RyaW5nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkU3RyaW5nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGNhc2UgRGF0YVR5cGUuTnVtYmVyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVtYmVyKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGNhc2UgRGF0YVR5cGUuTGlzdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJExpc3QocmVzdWx0KTtcclxuICAgICAgICAgICAgY2FzZSBEYXRhVHlwZS5OdWxsOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkQW55KHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmcm9tSmF2YVNjcmlwdEZ1bmNOdW1iZXIoZnVuYzogKC4uLmFyZ3o6IGFueSkgPT4gYW55LCBuYW1lOiBzdHJpbmcsIGFyaXR5OiBudW1iZXIpOiAkQ2FsbGFibGUge1xyXG4gICAgcmV0dXJuIG5ldyAkQ2FsbGFibGUobmFtZSwgYXJpdHksICh0aGl6OiAkQW55LCBhcmdzOiAkQW55W10pOiAkQW55ID0+IHtcclxuICAgICAgICBjb25zdCBhcmdWYWx1ZXMgPSBhcmdzLm1hcCgoYXJnOiAkQW55KSA9PiBhcmcudmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGZ1bmMoLi4uYXJnVmFsdWVzKTtcclxuICAgICAgICByZXR1cm4gbmV3ICROdW1iZXIocmVzdWx0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZnJvbUphdmFTY3JpcHRGdW5jVm9pZChmdW5jOiAoLi4uYXJnejogYW55KSA9PiBhbnksIG5hbWU6IHN0cmluZywgYXJpdHk6IG51bWJlcik6ICRDYWxsYWJsZSB7XHJcbiAgICByZXR1cm4gbmV3ICRDYWxsYWJsZShuYW1lLCBhcml0eSwgKHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSk6ICRBbnkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFyZ1ZhbHVlcyA9IGFyZ3MubWFwKChhcmc6ICRBbnkpID0+IGFyZy52YWx1ZSk7XHJcbiAgICAgICAgZnVuYyguLi5hcmdWYWx1ZXMpO1xyXG4gICAgICAgIHJldHVybiBuZXcgJFZvaWQoJ3ZvaWQnKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUnVudGltZSA9IHtcclxuICAgIENvbnNvbGU6ICBuZXcgTWFwPHN0cmluZywgJEFueT4oW1xyXG4gICAgICAgIFsnbG9nJywgZnJvbUphdmFTY3JpcHRGdW5jVm9pZChjb25zb2xlLmxvZywgJ2NvbnNvbGUubG9nJywgLTEpXSxcclxuICAgICAgICBbJ3dhcm4nLCBmcm9tSmF2YVNjcmlwdEZ1bmNWb2lkKGNvbnNvbGUud2FybiwgJ2NvbnNvbGUud2FybicsIC0xKV0sXHJcbiAgICAgICAgWydpbmZvJywgZnJvbUphdmFTY3JpcHRGdW5jVm9pZChjb25zb2xlLmluZm8sICdjb25zb2xlLmluZm8nLCAtMSldLFxyXG4gICAgICAgIFsnZXJyb3InLCBmcm9tSmF2YVNjcmlwdEZ1bmNWb2lkKGNvbnNvbGUuZXJyb3IsICdjb25zb2xlLmVycm9yJywgLTEpXVxyXG4gICAgXSksXHJcbiAgICBNYXRoOiAgbmV3IE1hcDxzdHJpbmcsICRBbnk+KFtcclxuICAgICAgICBbJ2NlaWwnLCBmcm9tSmF2YVNjcmlwdEZ1bmNOdW1iZXIoTWF0aC5jZWlsLCAnY2VpbCcsIDEpXSxcclxuICAgICAgICBbJ2NvcycsIGZyb21KYXZhU2NyaXB0RnVuY051bWJlcihNYXRoLmNvcywgJ2NvcycsIDEpXSxcclxuICAgICAgICBbJ2Zsb29yJywgZnJvbUphdmFTY3JpcHRGdW5jTnVtYmVyKE1hdGguZmxvb3IsICdmbG9vcicsIDEpXSxcclxuICAgICAgICBbJ2xvZycsIGZyb21KYXZhU2NyaXB0RnVuY051bWJlcihNYXRoLmxvZywgJ2xvZycsIDEpXSxcclxuICAgICAgICBbJ21heCcsIGZyb21KYXZhU2NyaXB0RnVuY051bWJlcihNYXRoLm1heCwgJ21heCcsIC0xKV0sXHJcbiAgICAgICAgWydtaW4nLCBmcm9tSmF2YVNjcmlwdEZ1bmNOdW1iZXIoTWF0aC5taW4sICdtaW4nLCAtMSldLFxyXG4gICAgICAgIFsncGknLCBuZXcgJE51bWJlcihNYXRoLlBJKV0sXHJcbiAgICAgICAgWydwb3cnLCBmcm9tSmF2YVNjcmlwdEZ1bmNOdW1iZXIoTWF0aC5wb3csICdwb3cnLCAyKV0sXHJcbiAgICAgICAgWydyYW5kb20nLCBmcm9tSmF2YVNjcmlwdEZ1bmNOdW1iZXIoTWF0aC5yYW5kb20sICdyYW5kb20nLCAwKV0sXHJcbiAgICAgICAgWydyb3VuZCcsIGZyb21KYXZhU2NyaXB0RnVuY051bWJlcihNYXRoLnJvdW5kLCAncm91bmQnLCAxKV0sXHJcbiAgICAgICAgWydzaW4nLCBmcm9tSmF2YVNjcmlwdEZ1bmNOdW1iZXIoTWF0aC5zaW4sICdzaW4nLCAxKV0sXHJcbiAgICAgICAgWydzcXJ0JywgZnJvbUphdmFTY3JpcHRGdW5jTnVtYmVyKE1hdGguc3FydCwgJ3NxcnQnLCAxKV0sXHJcbiAgICAgICAgWyd0YW4nLCBmcm9tSmF2YVNjcmlwdEZ1bmNOdW1iZXIoTWF0aC50YW4sICd0YW4nLCAxKV0sXHJcbiAgICAgICAgWyd0cnVuYycsIGZyb21KYXZhU2NyaXB0RnVuY051bWJlcihNYXRoLnRydW5jLCAndHJ1bmMnLCAxKV1cclxuICAgIF0pLFxyXG4gICAgVXRpbHM6IG5ldyBNYXA8c3RyaW5nLCAkQW55PihbXHJcbiAgICAgICAgWydyZScsIG5ldyAkQ2FsbGFibGUoJ3JlZ2V4JywgLTEsICh0aGl6OiAkQW55LCBhcmdzOiAkQW55W10pOiAkQW55ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gYXJncy5tYXAoKGFyZykgPT4gYXJnLnZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJFJlZ0V4cChuZXcgUmVnRXhwKHZhbHVlc1swXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgJFJlZ0V4cChuZXcgUmVnRXhwKHZhbHVlc1swXSwgdmFsdWVzWzFdKSk7XHJcbiAgICAgICAgfSldLFxyXG4gICAgICAgIFsnaXRlcicsIG5ldyAkQ2FsbGFibGUoJ2l0ZXInLCAxLCAodGhpejogJEFueSwgYXJnczogJEFueVtdKTogJEFueSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgJEl0ZXJhdG9yKGFyZ3NbMF0pO1xyXG4gICAgICAgIH0pXVxyXG4gICAgXSlcclxufTtcclxuIiwiaW1wb3J0IHsgVG9rZW4sIFRva2VuVHlwZSB9IGZyb20gJy4vdG9rZW4nO1xyXG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnLi9jb25zb2xlJztcclxuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7ICRFcnJvciB9IGZyb20gJy4vdHlwZXMvZXJyb3InO1xyXG5kZWNsYXJlIHZhciBjb256b2xlOiBDb25zb2xlO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjYW5uZXIge1xyXG4gICAgLyoqIHNjcmlwdHMgc291cmNlIGNvZGUgKi9cclxuICAgIHB1YmxpYyBzb3VyY2U6IHN0cmluZztcclxuICAgIC8qKiBjb250YWluZXMgdGhlIHNvdXJjZSBjb2RlIHJlcHJlc2VudGVkIGFzIGxpc3Qgb2YgdG9rZW5zICovXHJcbiAgICBwdWJsaWMgdG9rZW5zOiBUb2tlbltdO1xyXG4gICAgLyoqIExpc3Qgb2YgZXJyb3JzIGZyb20gc2Nhbm5pbmcgKi9cclxuICAgIHB1YmxpYyBlcnJvcnM6IHN0cmluZ1tdO1xyXG4gICAgLyoqIHBvaW50cyB0byB0aGUgY3VycmVudCBjaGFyYWN0ZXIgYmVpbmcgdG9rZW5pemVkICovXHJcbiAgICBwcml2YXRlIGN1cnJlbnQ6IG51bWJlcjtcclxuICAgIC8qKiBwb2ludHMgdG8gdGhlIHN0YXJ0IG9mIHRoZSB0b2tlbiBmcmFzZSAqL1xyXG4gICAgcHJpdmF0ZSBzdGFydDogbnVtYmVyO1xyXG4gICAgLyoqIGN1cnJlbnQgbGluZSBvZiBzb3VyY2UgY29kZSBiaWVuZyB0b2tlbml6ZWQgKi9cclxuICAgIHByaXZhdGUgbGluZTogbnVtYmVyO1xyXG4gICAgLyoqIGN1cnJlbnQgY29sdW1uIG9mIHRoZSBjaGFyYWN0ZXIgYmVpbmcgdG9rZW5pemVkICovXHJcbiAgICBwcml2YXRlIGNvbDogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBzY2FuKHNvdXJjZTogc3RyaW5nKTogVG9rZW5bXSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy50b2tlbnMgPSBbXTtcclxuICAgICAgICB0aGlzLmVycm9ycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IDA7XHJcbiAgICAgICAgdGhpcy5zdGFydCA9IDA7XHJcbiAgICAgICAgdGhpcy5saW5lID0gMTtcclxuICAgICAgICB0aGlzLmNvbCA9IDE7XHJcblxyXG4gICAgICAgIHdoaWxlICghdGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0ID0gdGhpcy5jdXJyZW50O1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRUb2tlbigpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lcnJvcnMubGVuZ3RoID4gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCgnRXJyb3IgbGltaXQgZXhjZWVkZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b2tlbnM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50b2tlbnMucHVzaChuZXcgVG9rZW4oVG9rZW5UeXBlLkVvZiwgJycsIG51bGwsIHRoaXMubGluZSwgMCkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRva2VucztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVvZigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50ID49IHRoaXMuc291cmNlLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkdmFuY2UoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5wZWVrKCkgPT09ICdcXG4nKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGluZSsrO1xyXG4gICAgICAgICAgICB0aGlzLmNvbCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudCsrO1xyXG4gICAgICAgIHRoaXMuY29sKys7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLmNoYXJBdCh0aGlzLmN1cnJlbnQgLSAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFRva2VuKHRva2VuVHlwZTogVG9rZW5UeXBlLCBsaXRlcmFsOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5zb3VyY2Uuc3Vic3RyaW5nKHRoaXMuc3RhcnQsIHRoaXMuY3VycmVudCk7XHJcbiAgICAgICAgdGhpcy50b2tlbnMucHVzaChuZXcgVG9rZW4odG9rZW5UeXBlLCB0ZXh0LCBsaXRlcmFsLCB0aGlzLmxpbmUsIHRoaXMuY29sKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtYXRjaChleHBlY3RlZDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc291cmNlLmNoYXJBdCh0aGlzLmN1cnJlbnQpICE9PSBleHBlY3RlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnQrKztcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBlZWsoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ1xcMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5jaGFyQXQodGhpcy5jdXJyZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBlZWtOZXh0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudCArIDEgPj0gdGhpcy5zb3VyY2UubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnXFwwJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLmNoYXJBdCh0aGlzLmN1cnJlbnQgKyAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbW1lbnQoKTogdm9pZCB7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMucGVlaygpICE9PSAnXFxuJyAmJiAhdGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtdWx0aWxpbmVDb21tZW50KCk6IHZvaWQge1xyXG4gICAgICAgIHdoaWxlICghdGhpcy5lb2YoKSAmJiAhKHRoaXMucGVlaygpID09PSAnKicgJiYgdGhpcy5wZWVrTmV4dCgpID09PSAnLycpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yKCdVbnRlcm1pbmF0ZWQgY29tbWVudCwgZXhwZWN0aW5nIGNsb3NpbmcgXCIqL1wiJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gdGhlIGNsb3Npbmcgc2xhc2ggJyovJ1xyXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RyaW5nKHF1b3RlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB3aGlsZSAodGhpcy5wZWVrKCkgIT09IHF1b3RlICYmICF0aGlzLmVvZigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVW50ZXJtaW5hdGVkIHN0cmluZy5cclxuICAgICAgICBpZiAodGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yKGBVbnRlcm1pbmF0ZWQgc3RyaW5nLCBleHBlY3RpbmcgY2xvc2luZyAke3F1b3RlfWApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUaGUgY2xvc2luZyBcIi5cclxuICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuXHJcbiAgICAgICAgLy8gVHJpbSB0aGUgc3Vycm91bmRpbmcgcXVvdGVzLlxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zb3VyY2Uuc3Vic3RyaW5nKHRoaXMuc3RhcnQgKyAxLCB0aGlzLmN1cnJlbnQgLSAxKTtcclxuICAgICAgICB0aGlzLmFkZFRva2VuKHF1b3RlICE9PSAnYCcgPyBUb2tlblR5cGUuU3RyaW5nIDogVG9rZW5UeXBlLlRlbXBsYXRlLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBudW1iZXIoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gZ2V0cyBpbnRlZ2VyIHBhcnRcclxuICAgICAgICB3aGlsZSAoVXRpbHMuaXNEaWdpdCh0aGlzLnBlZWsoKSkpIHtcclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjaGVja3MgZm9yIGZyYWN0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMucGVlaygpID09PSAnLicgJiYgVXRpbHMuaXNEaWdpdCh0aGlzLnBlZWtOZXh0KCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZ2V0cyBmcmFjdGlvbiBwYXJ0XHJcbiAgICAgICAgd2hpbGUgKFV0aWxzLmlzRGlnaXQodGhpcy5wZWVrKCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2hlY2tzIGZvciBleHBvbmVudFxyXG4gICAgICAgIGlmICh0aGlzLnBlZWsoKS50b0xvd2VyQ2FzZSgpID09PSAnZScpIHtcclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoKSA9PT0gJy0nIHx8IHRoaXMucGVlaygpID09PSAnKycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aGlsZSAoVXRpbHMuaXNEaWdpdCh0aGlzLnBlZWsoKSkpIHtcclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc291cmNlLnN1YnN0cmluZyh0aGlzLnN0YXJ0ICwgdGhpcy5jdXJyZW50KTtcclxuICAgICAgICB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5OdW1iZXIsIE51bWJlcih2YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaWRlbnRpZmllcigpOiB2b2lkIHtcclxuICAgICAgICB3aGlsZSAoVXRpbHMuaXNBbHBoYU51bWVyaWModGhpcy5wZWVrKCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNvdXJjZS5zdWJzdHJpbmcodGhpcy5zdGFydCwgdGhpcy5jdXJyZW50KTtcclxuICAgICAgICBjb25zdCBjYXBpdGFsaXplZCA9IFV0aWxzLmNhcGl0YWxpemUodmFsdWUpO1xyXG4gICAgICAgIGlmIChVdGlscy5pc0tleXdvcmQoY2FwaXRhbGl6ZWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlW2NhcGl0YWxpemVkXSwgdmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLklkZW50aWZpZXIsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRUb2tlbigpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjaGFyID0gdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgc3dpdGNoIChjaGFyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJygnOiB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5MZWZ0UGFyZW4sIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnKSc6IHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLlJpZ2h0UGFyZW4sIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnWyc6IHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLkxlZnRCcmFja2V0LCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ10nOiB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5SaWdodEJyYWNrZXQsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAneyc6IHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLkxlZnRCcmFjZSwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd9JzogdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuUmlnaHRCcmFjZSwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcsJzogdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuQ29tbWEsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnOyc6IHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLlNlbWljb2xvbiwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdeJzogdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuQ2FyZXQsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnOic6IHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLkNvbG9uLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyQnOiB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5Eb2xsYXIsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnQCc6IHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLkZ1bmN0aW9uLCAnQCcpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnKic6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnPScpID8gVG9rZW5UeXBlLlN0YXJFcXVhbCA6IFRva2VuVHlwZS5TdGFyLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyUnOiB0aGlzLmFkZFRva2VuKHRoaXMubWF0Y2goJz0nKSA/IFRva2VuVHlwZS5QZXJjZW50RXF1YWwgOiBUb2tlblR5cGUuUGVyY2VudCwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd8JzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCd8JykgPyBUb2tlblR5cGUuT3IgOiBUb2tlblR5cGUuUGlwZSwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcmJzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCcmJykgPyBUb2tlblR5cGUuQW5kIDogVG9rZW5UeXBlLkFtcGVyc2FuZCwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc8JzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCc9JykgPyBUb2tlblR5cGUuTGVzc0VxdWFsIDogVG9rZW5UeXBlLkxlc3MsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnPic6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnPScpID8gVG9rZW5UeXBlLkdyZWF0ZXJFcXVhbCA6IFRva2VuVHlwZS5HcmVhdGVyLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyEnOiB0aGlzLmFkZFRva2VuKHRoaXMubWF0Y2goJz0nKSA/IFRva2VuVHlwZS5CYW5nRXF1YWwgOiBUb2tlblR5cGUuQmFuZywgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc/JzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCc/JykgPyBUb2tlblR5cGUuUXVlc3Rpb25RdWVzdGlvbiA6IHRoaXMubWF0Y2goJy4nKSA/IFRva2VuVHlwZS5RdWVzdGlvbkRvdCA6IFRva2VuVHlwZS5RdWVzdGlvbiwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc9JzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCc9JykgPyBUb2tlblR5cGUuRXF1YWxFcXVhbCA6IHRoaXMubWF0Y2goJz4nKSA/IFRva2VuVHlwZS5BcnJvdyA6IFRva2VuVHlwZS5FcXVhbCwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcrJzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCcrJykgPyBUb2tlblR5cGUuUGx1c1BsdXMgOiB0aGlzLm1hdGNoKCc9JykgPyBUb2tlblR5cGUuUGx1c0VxdWFsIDogVG9rZW5UeXBlLlBsdXMsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnLSc6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnLScpID8gVG9rZW5UeXBlLk1pbnVzTWludXMgOiB0aGlzLm1hdGNoKCc+JykgPyBUb2tlblR5cGUuUmV0dXJuIDogdGhpcy5tYXRjaCgnPScpID8gVG9rZW5UeXBlLk1pbnVzRXF1YWwgOiBUb2tlblR5cGUuTWludXMsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnLic6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXRjaCgnLicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goJy4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5Eb3REb3REb3QsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoYFVuZXhwZWN0ZWQgY2hhcmFjdGVyICcuLidgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLkRvdCwgbnVsbClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcvJzpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKCcvJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnQoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXRjaCgnKicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aWxpbmVDb21tZW50KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnPScpID8gVG9rZW5UeXBlLlNsYXNoRXF1YWwgOiBUb2tlblR5cGUuU2xhc2gsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgYCdgOlxyXG4gICAgICAgICAgICBjYXNlIGBcImA6XHJcbiAgICAgICAgICAgIGNhc2UgJ2AnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHJpbmcoY2hhcik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gaWdub3JlIGNhc2VzXHJcbiAgICAgICAgICAgIGNhc2UgJ1xcbic6XHJcbiAgICAgICAgICAgIGNhc2UgJyAnOlxyXG4gICAgICAgICAgICBjYXNlICdcXHInOlxyXG4gICAgICAgICAgICBjYXNlICdcXHQnOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vIGNvbXBleCBjYXNlc1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgaWYgKFV0aWxzLmlzRGlnaXQoY2hhcikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm51bWJlcigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChVdGlscy5pc0FscGhhKGNoYXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGVudGlmaWVyKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoYFVuZXhwZWN0ZWQgY2hhcmFjdGVyICcke2NoYXJ9J2ApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXJyb3IobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTY2FuIEVycm9yICgke3RoaXMubGluZX06JHt0aGlzLmNvbH0pID0+ICR7bWVzc2FnZX1gKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgVG9rZW4gfSBmcm9tICcuL3Rva2VuJztcclxuaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gJy4vY29uc29sZSc7XHJcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL3R5cGVzL2FueSc7XHJcbmltcG9ydCB7ICROdWxsIH0gZnJvbSAnLi90eXBlcy9udWxsJztcclxuZGVjbGFyZSB2YXIgY29uem9sZTogQ29uc29sZTtcclxuXHJcbmV4cG9ydCBjbGFzcyBTY29wZSB7XHJcblxyXG4gICAgcHJpdmF0ZSB2YWx1ZXM6IE1hcDxzdHJpbmcsIGFueT47XHJcbiAgICBwcml2YXRlIHBhcmVudDogU2NvcGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyZW50OiBTY29wZSA9IG51bGwpIHtcclxuICAgICAgICB0aGlzLnZhbHVlcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgUnVudGltZSBFcnJvciA9PiAke21lc3NhZ2V9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldChuYW1lOiBzdHJpbmcsIHZhbHVlOiAkQW55KSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXMuc2V0KG5hbWUsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVmaW5lKG5hbWU6IHN0cmluZywgdmFsdWU6ICRBbnkpIHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZXMuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoYElkZW50aWZpZXIgXCIke25hbWV9XCIgaGFzIGFscmVhZHkgYmVlbiBkZWZpbmVkYCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXQobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXNzaWduKG5hbWU6IHN0cmluZywgdmFsdWU6ICRBbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZXMuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0KG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5hc3NpZ24obmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoYElkZW50aWZpZXIgXCIke25hbWV9XCIgaGFzIG5vdCBiZWVuIGRlZmluZWRgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldChrZXk6IHN0cmluZywgdG9rZW46IFRva2VuID0gbnVsbCk6ICRBbnkge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlcy5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMuZ2V0KGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudCAhPT0gbnVsbCApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50LmdldChrZXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoYCBhdCAoJHt0b2tlbi5saW5lfToke3Rva2VuLmNvbH0pID0+IFwiJHt0b2tlbi5sZXhlbWV9XCIgaXMgbm90IGRlZmluZWRgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yKGBcIiR7a2V5fVwiIGlzIG5vdCBkZWZpbmVkYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgJE51bGwoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiZXhwb3J0IGVudW0gVG9rZW5UeXBlIHtcclxuICAgIC8vIFBhcnNlciBUb2tlbnNcclxuICAgIEVvZixcclxuICAgIFBhbmljLFxyXG4gICAgTGFtYmRhLFxyXG5cclxuICAgIC8vIFNpbmdsZSBDaGFyYWN0ZXIgVG9rZW5zXHJcbiAgICBBbXBlcnNhbmQsXHJcbiAgICBBdFNpZ24sXHJcbiAgICBDYXJldCxcclxuICAgIENvbW1hLFxyXG4gICAgRG9sbGFyLFxyXG4gICAgRG90LFxyXG4gICAgSGFzaCxcclxuICAgIExlZnRCcmFjZSxcclxuICAgIExlZnRCcmFja2V0LFxyXG4gICAgTGVmdFBhcmVuLFxyXG4gICAgUGVyY2VudCxcclxuICAgIFBpcGUsXHJcbiAgICBSaWdodEJyYWNlLFxyXG4gICAgUmlnaHRCcmFja2V0LFxyXG4gICAgUmlnaHRQYXJlbixcclxuICAgIFNlbWljb2xvbixcclxuICAgIFNsYXNoLFxyXG4gICAgU3RhcixcclxuXHJcbiAgICAvLyBPbmUgT3IgVHdvIENoYXJhY3RlciBUb2tlbnNcclxuICAgIEFycm93LFxyXG4gICAgQmFuZyxcclxuICAgIEJhbmdFcXVhbCxcclxuICAgIENvbG9uLFxyXG4gICAgRXF1YWwsXHJcbiAgICBFcXVhbEVxdWFsLFxyXG4gICAgR3JlYXRlcixcclxuICAgIEdyZWF0ZXJFcXVhbCxcclxuICAgIExlc3MsXHJcbiAgICBMZXNzRXF1YWwsXHJcbiAgICBNaW51cyxcclxuICAgIE1pbnVzRXF1YWwsXHJcbiAgICBNaW51c01pbnVzLFxyXG4gICAgUGVyY2VudEVxdWFsLFxyXG4gICAgUGx1cyxcclxuICAgIFBsdXNFcXVhbCxcclxuICAgIFBsdXNQbHVzLFxyXG4gICAgUXVlc3Rpb24sXHJcbiAgICBRdWVzdGlvbkRvdCxcclxuICAgIFF1ZXN0aW9uUXVlc3Rpb24sXHJcbiAgICBTbGFzaEVxdWFsLFxyXG4gICAgU3RhckVxdWFsLFxyXG4gICAgRG90RG90RG90LFxyXG5cclxuICAgIC8vIExpdGVyYWxzXHJcbiAgICBJZGVudGlmaWVyLFxyXG4gICAgVGVtcGxhdGUsXHJcbiAgICBTdHJpbmcsXHJcbiAgICBOdW1iZXIsXHJcbiAgICBSZWdleCxcclxuXHJcbiAgICAvLyBLZXl3b3Jkc1xyXG4gICAgQW5kLFxyXG4gICAgQnJlYWssXHJcbiAgICBCYXNlLFxyXG4gICAgQ2xhc3MsXHJcbiAgICBDb250aW51ZSxcclxuICAgIERvLFxyXG4gICAgRWxzZSxcclxuICAgIEV4dGVuZHMsXHJcbiAgICBGYWxzZSxcclxuICAgIEZvcixcclxuICAgIEZvcmVhY2gsXHJcbiAgICBGdW5jdGlvbixcclxuICAgIElmLFxyXG4gICAgSW4sXHJcbiAgICBJbnN0YW5jZW9mLFxyXG4gICAgSXMsXHJcbiAgICBOZXcsXHJcbiAgICBOdWxsLFxyXG4gICAgT3IsXHJcbiAgICBQcmludCxcclxuICAgIFJldHVybixcclxuICAgIFRydWUsXHJcbiAgICBUeXBlb2YsXHJcbiAgICBWYXIsXHJcbiAgICBWb2lkLFxyXG4gICAgV2hpbGUsXHJcbiAgICBXaXRoXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUb2tlbiB7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGxpbmU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBjb2w6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0eXBlOiBUb2tlblR5cGU7XHJcbiAgICBwdWJsaWMgbGl0ZXJhbDogYW55O1xyXG4gICAgcHVibGljIGxleGVtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHR5cGU6IFRva2VuVHlwZSwgbGV4ZW1lOiBzdHJpbmcsIGxpdGVyYWw6IGFueSwgbGluZTogbnVtYmVyLCBjb2w6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFRva2VuVHlwZVt0eXBlXTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMubGV4ZW1lID0gbGV4ZW1lO1xyXG4gICAgICAgIHRoaXMubGl0ZXJhbCA9IGxpdGVyYWw7XHJcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcclxuICAgICAgICB0aGlzLmNvbCA9IGNvbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBbKCR7dGhpcy5saW5lfSk6XCIke3RoaXMubGV4ZW1lfVwiXWA7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IENvbnNvbGUgfSBmcm9tICcuLi9jb25zb2xlJztcclxuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGUuZW51bSc7XHJcbmRlY2xhcmUgdmFyIGNvbnpvbGU6IENvbnNvbGU7XHJcblxyXG5leHBvcnQgY2xhc3MgJEFueSB7XHJcblxyXG4gICAgcHVibGljIHZhbHVlOiBhbnk7XHJcbiAgICBwdWJsaWMgdHlwZSA9IERhdGFUeXBlLkFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogYW55LCB0eXBlOiBEYXRhVHlwZSA9IERhdGFUeXBlLkFueSkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1N0cmluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBEYXRhVHlwZS5TdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzTnVsbCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBEYXRhVHlwZS5OdWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0Jvb2xlYW4oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gRGF0YVR5cGUuQm9vbGVhbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNOdW1iZXIoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gRGF0YVR5cGUuTnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1JhbmdlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IERhdGFUeXBlLlJhbmdlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0Z1bmN0aW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IERhdGFUeXBlLkZ1bmN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0NsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IERhdGFUeXBlLkNsYXNzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0xhbWJkYSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBEYXRhVHlwZS5GdW5jdGlvbiAmJiAodGhpcyBhcyBhbnkpLm5hbWUgPT09ICdAJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNMaXN0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IERhdGFUeXBlLkxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzRGljdGlvbmFyeSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBEYXRhVHlwZS5EaWN0aW9uYXJ5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc09iamVjdCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBEYXRhVHlwZS5PYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzVHJ1dGh5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTnVsbCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNCb29sZWFuKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzTnVtYmVyKCkgJiYgdGhpcy52YWx1ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzU3RyaW5nKCkgJiYgdGhpcy52YWx1ZS50b1N0cmluZygpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzTGlzdCgpICYmIHRoaXMudmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEaWN0aW9uYXJ5KCkgJiYgdGhpcy52YWx1ZS5zaXplID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBlcnJvciB2YWx1ZSBBbnkgaXMgbnVsbFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnZhbHVlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIGVycm9yIHZhbHVlIEFueSBpcyB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0VxdWFsKG90aGVyOiAkQW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IG90aGVyLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0tleVZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09IERhdGFUeXBlLkNsYXNzIHx8XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9PT0gRGF0YVR5cGUuRGljdGlvbmFyeSB8fFxyXG4gICAgICAgICAgICB0aGlzLnR5cGUgPT09IERhdGFUeXBlLk9iamVjdFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoa2V5OiAkQW55KTogJEFueSB7XHJcbiAgICAgICAgY29uem9sZS5lcnJvcihga2V5ICR7a2V5fSBkb2VzIG5vdCBleGlzdCBpbiAke3RoaXN9YCk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgaW4gQW55IGdldHRlclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0KGtleTogJEFueSwgdmFsdWU6ICRBbnkpOiAkQW55IHtcclxuICAgICAgICBjb256b2xlLmVycm9yKGBrZXkgJHtrZXl9IGRvZXMgbm90IGV4aXN0IGluICR7dGhpc31gKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvciBpbiBBbnkgc2V0dGVyXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGUuZW51bSc7XHJcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL2FueSc7XHJcblxyXG5leHBvcnQgY2xhc3MgJEJvb2xlYW4gZXh0ZW5kcyAkQW55IHtcclxuXHJcbiAgICBwdWJsaWMgdmFsdWU6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBzdXBlcih2YWx1ZSwgRGF0YVR5cGUuQm9vbGVhbik7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi90eXBlLmVudW0nO1xyXG5pbXBvcnQgeyAkQW55IH0gZnJvbSAnLi9hbnknO1xyXG5pbXBvcnQgeyAkTnVsbCB9IGZyb20gJy4vbnVsbCc7XHJcbmltcG9ydCB7ICRCb29sZWFuIH0gZnJvbSAnLi9ib29sZWFuJztcclxuXHJcbmV4cG9ydCBjbGFzcyAkQ2xhc3MgZXh0ZW5kcyAkQW55IHtcclxuICAgIHB1YmxpYyB2YWx1ZTogTWFwPHN0cmluZywgJEFueT47XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHBhcmVudDogJEFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHZhbHVlOiBNYXA8c3RyaW5nLCAkQW55PiwgcGFyZW50OiAkQW55KSB7XHJcbiAgICAgICAgc3VwZXIodmFsdWUsIERhdGFUeXBlLkNsYXNzKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoa2V5OiAkQW55KTogJEFueSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUuaGFzKGtleS52YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUuZ2V0KGtleS52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wYXJlbnQuaXNDbGFzcygpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5nZXQoa2V5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgJE51bGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0KGtleTogJEFueSwgdmFsdWU6ICRBbnkpOiAkQW55IHtcclxuICAgICAgICB0aGlzLnZhbHVlLnNldChrZXkudmFsdWUsIHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGA8JHt0aGlzLm5hbWV9IGNsYXNzPmA7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIlxyXG5pbXBvcnQgeyBmcm9tSmF2YVNjcmlwdE1ldGhvZCB9IGZyb20gJy4uL3J1bnRpbWUnO1xyXG5pbXBvcnQgeyBJbnRlcnByZXRlciB9IGZyb20gJy4uL2ludGVycHJldGVyJztcclxuaW1wb3J0IHsgJEFueSB9IGZyb20gJy4vYW55JztcclxuaW1wb3J0IHsgJEZ1bmN0aW9uLCAkQ2FsbGFibGUgfSBmcm9tICcuL2Z1bmN0aW9uJztcclxuaW1wb3J0IHsgJE51bGwgfSBmcm9tICcuL251bGwnO1xyXG5pbXBvcnQgeyAkTnVtYmVyIH0gZnJvbSAnLi9udW1iZXInO1xyXG5pbXBvcnQgeyAkU3RyaW5nIH0gZnJvbSAnLi9zdHJpbmcnO1xyXG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgJEl0ZXJhdG9yIH0gZnJvbSAnLi9pdGVyYXRvcic7XHJcblxyXG5leHBvcnQgY2xhc3MgJERpY3Rpb25hcnkgZXh0ZW5kcyAkQW55IHtcclxuICAgIHB1YmxpYyB2YWx1ZTogTWFwPGFueSwgJEFueT47XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IE1hcDxhbnksICRBbnk+KSB7XHJcbiAgICAgICAgc3VwZXIodmFsdWUsIERhdGFUeXBlLkRpY3Rpb25hcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoa2V5OiAkQW55KTogYW55IHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZS5oYXMoa2V5LnZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS5nZXQoa2V5LnZhbHVlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCREaWN0aW9uYXJ5LnJ1bnRpbWUuaGFzKGtleS52YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICREaWN0aW9uYXJ5LnJ1bnRpbWUuZ2V0KGtleS52YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0KGtleTogJEFueSwgdmFsdWU6ICRBbnkpOiAkQW55IHtcclxuICAgICAgICB0aGlzLnZhbHVlLnNldChrZXkudmFsdWUsIHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0OiBhbnlbXSA9IFtdO1xyXG4gICAgICAgIHRoaXMudmFsdWUuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChgJHtrZXkudG9TdHJpbmcoKX06ICR7dmFsdWV9YCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGB7JHtyZXN1bHQuam9pbignOyAnKX19YDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGVhY2godGhpejogJEFueSwgYXJnczogJEFueVtdLCBpbnRlcnByZXRlcjogSW50ZXJwcmV0ZXIpOiAkQW55IHtcclxuICAgICAgICB0aGl6LnZhbHVlLmZvckVhY2goKHZhbHVlOiAkQW55LCBrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAoYXJnc1swXSBhcyAkRnVuY3Rpb24pLmNhbGwodGhpeiwgW3ZhbHVlLCBuZXcgJFN0cmluZyhrZXkpLCB0aGl6XSwgaW50ZXJwcmV0ZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGl6O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbWFwKHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSwgaW50ZXJwcmV0ZXI6IEludGVycHJldGVyKTogJEFueSB7XHJcbiAgICAgICAgdGhpei52YWx1ZS5mb3JFYWNoKCh2YWx1ZTogJEFueSwga2V5OiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgdGhpei52YWx1ZS5zZXQoJ2tleScsIChhcmdzWzBdIGFzICRGdW5jdGlvbikuY2FsbCh0aGl6LCBbdmFsdWUsIG5ldyAkU3RyaW5nKGtleSksIHRoaXpdLCBpbnRlcnByZXRlcikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGl6O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5kZXhPZih0aGl6OiAkQW55LCBhcmdzOiAkQW55W10sIGludGVycHJldGVyOiBJbnRlcnByZXRlcik6ICRBbnkge1xyXG4gICAgICAgIGxldCBpbmRleDogc3RyaW5nID0gbnVsbDtcclxuICAgICAgICB0aGl6LnZhbHVlLmZvckVhY2goKHZhbHVlOiAkQW55LCBrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUudHlwZSA9PT0gYXJnc1swXS50eXBlICYmIHZhbHVlLnZhbHVlID09PSBhcmdzWzBdLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IGtleTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3ICRTdHJpbmcoaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3ICROdWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBuZXh0KHRoaXo6ICRBbnkpOiAkQW55IHtcclxuICAgICAgICBjb25zdCBpdCA9IHRoaXogYXMgJEl0ZXJhdG9yO1xyXG4gICAgICAgIGNvbnN0IGRpY3QgPSBpdC52YWx1ZSBhcyAkRGljdGlvbmFyeTtcclxuICAgICAgICAvLyBlbXB0eSBsaXN0XHJcbiAgICAgICAgaWYgKCFkaWN0LnZhbHVlLnNpemUpIHtcclxuICAgICAgICAgICAgaXQuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGl0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZmlyc3QgdmFsdWVcclxuICAgICAgICBpZiAoaXQuaXRlci5pbm5lciA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpdC5pdGVyLmlubmVyID0gZGljdC52YWx1ZS5rZXlzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50ID0gaXQuaXRlci5pbm5lci5uZXh0KCk7XHJcbiAgICAgICAgaXQuaXRlci52YWx1ZSA9IGN1cnJlbnQudmFsdWU7XHJcblxyXG4gICAgICAgIC8vIG5vIG1vcmUgdmFsdWVzIHRvIGl0ZXJhdGVcclxuICAgICAgICBpZiAoY3VycmVudC5kb25lKSB7XHJcbiAgICAgICAgICAgIGl0LmNvbXBsZXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJ1bnRpbWUgPSAgbmV3IE1hcChbXHJcbiAgICAgICAgWydjbGVhcicsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCdjbGVhcicsIDAsIERhdGFUeXBlLk51bGwpXSxcclxuICAgICAgICBbJ2RlbGV0ZScsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCdkZWxldGUnLCAxLCBEYXRhVHlwZS5Cb29sZWFuKV0sXHJcbiAgICAgICAgWydlYWNoJywgbmV3ICRDYWxsYWJsZSgnZWFjaCcsIDEsICREaWN0aW9uYXJ5LmVhY2gpXSxcclxuICAgICAgICBbJ2hhcycsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCdoYXMnLCAxLCBEYXRhVHlwZS5Cb29sZWFuKV0sXHJcbiAgICAgICAgWydpbmRleE9mJywgbmV3ICRDYWxsYWJsZSgnaW5kZXhPZicsIDEsICREaWN0aW9uYXJ5LmluZGV4T2YpXSxcclxuICAgICAgICBbJ21hcCcsIG5ldyAkQ2FsbGFibGUoJ21hcCcsIDEsICREaWN0aW9uYXJ5Lm1hcCldLFxyXG4gICAgICAgIFsnbWVyZ2UnLCBuZXcgJENhbGxhYmxlKCdtZXJnZScsIDEsICAodGhpejogJEFueSwgYXJnczogJEFueVtdKTogJEFueSA9PiBuZXcgJERpY3Rpb25hcnkobmV3IE1hcChbLi4uKHRoaXoudmFsdWUpLCAuLi4oYXJnc1swXS52YWx1ZSldKSkpXSxcclxuICAgICAgICBbJ3NpemUnLCBuZXcgJENhbGxhYmxlKCdzaXplJywgMCwgICh0aGl6OiAkQW55LCBhcmdzOiAkQW55W10pOiAkQW55ID0+IG5ldyAkTnVtYmVyKHRoaXoudmFsdWUuc2l6ZSkpXSxcclxuICAgICAgICBbJ25leHQnLCBuZXcgJENhbGxhYmxlKCduZXh0JywgMCwgJERpY3Rpb25hcnkubmV4dCldXHJcbiAgICBdKTtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGUuZW51bSc7XHJcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL2FueSc7XHJcblxyXG5leHBvcnQgY2xhc3MgJEVycm9yIGV4dGVuZHMgJEFueSB7XHJcblxyXG4gICAgcHVibGljIHZhbHVlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbGluZTogbnVtYmVyO1xyXG4gICAgcHVibGljIGNvbDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcsIGxpbmU6IG51bWJlciwgY29sOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcih2YWx1ZSwgRGF0YVR5cGUuRXJyb3IpO1xyXG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XHJcbiAgICAgICAgdGhpcy5jb2wgPSBjb2w7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgVG9rZW4sIFRva2VuVHlwZSB9IGZyb20gJ3Rva2VuJztcbmltcG9ydCB7IFN0bXQgfSBmcm9tICdzdGF0ZW1lbnQnO1xuaW1wb3J0IHsgJEFueSB9IGZyb20gJ2FueSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFeHByIHtcbiAgICBwdWJsaWMgcmVzdWx0OiBhbnk7XG4gICAgcHVibGljIGxpbmU6IG51bWJlcjtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuICAgIHB1YmxpYyBhYnN0cmFjdCBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSO1xufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmV4cG9ydCBpbnRlcmZhY2UgRXhwclZpc2l0b3I8Uj4ge1xuICAgIHZpc2l0QXNzaWduRXhwcihleHByOiBBc3NpZ24pOiBSO1xuICAgIHZpc2l0QmFzZUV4cHIoZXhwcjogQmFzZSk6IFI7XG4gICAgdmlzaXRCaW5hcnlFeHByKGV4cHI6IEJpbmFyeSk6IFI7XG4gICAgdmlzaXRDYWxsRXhwcihleHByOiBDYWxsKTogUjtcbiAgICB2aXNpdERpY3Rpb25hcnlFeHByKGV4cHI6IERpY3Rpb25hcnkpOiBSO1xuICAgIHZpc2l0R2V0RXhwcihleHByOiBHZXQpOiBSO1xuICAgIHZpc2l0R3JvdXBpbmdFeHByKGV4cHI6IEdyb3VwaW5nKTogUjtcbiAgICB2aXNpdEluRXhwcihleHByOiBJbik6IFI7XG4gICAgdmlzaXRJbnN0YW5jZU9mRXhwcihleHByOiBJbnN0YW5jZU9mKTogUjtcbiAgICB2aXNpdElzRXhwcihleHByOiBJcyk6IFI7XG4gICAgdmlzaXRLZXlFeHByKGV4cHI6IEtleSk6IFI7XG4gICAgdmlzaXRMYW1iZGFFeHByKGV4cHI6IExhbWJkYSk6IFI7XG4gICAgdmlzaXRMb2dpY2FsRXhwcihleHByOiBMb2dpY2FsKTogUjtcbiAgICB2aXNpdExpc3RFeHByKGV4cHI6IExpc3QpOiBSO1xuICAgIHZpc2l0TGl0ZXJhbEV4cHIoZXhwcjogTGl0ZXJhbCk6IFI7XG4gICAgdmlzaXROZXdFeHByKGV4cHI6IE5ldyk6IFI7XG4gICAgdmlzaXROdWxsQ29hbGVzY2luZ0V4cHIoZXhwcjogTnVsbENvYWxlc2NpbmcpOiBSO1xuICAgIHZpc2l0UG9zdGZpeEV4cHIoZXhwcjogUG9zdGZpeCk6IFI7XG4gICAgdmlzaXRSYW5nZUV4cHIoZXhwcjogUmFuZ2UpOiBSO1xuICAgIHZpc2l0UmVnRXhFeHByKGV4cHI6IFJlZ0V4KTogUjtcbiAgICB2aXNpdFNldEV4cHIoZXhwcjogU2V0KTogUjtcbiAgICB2aXNpdFNwcmVhZEV4cHIoZXhwcjogU3ByZWFkKTogUjtcbiAgICB2aXNpdFRlbXBsYXRlRXhwcihleHByOiBUZW1wbGF0ZSk6IFI7XG4gICAgdmlzaXRUZXJuYXJ5RXhwcihleHByOiBUZXJuYXJ5KTogUjtcbiAgICB2aXNpdFR5cGVvZkV4cHIoZXhwcjogVHlwZW9mKTogUjtcbiAgICB2aXNpdFVuYXJ5RXhwcihleHByOiBVbmFyeSk6IFI7XG4gICAgdmlzaXRWYXJpYWJsZUV4cHIoZXhwcjogVmFyaWFibGUpOiBSO1xuICAgIHZpc2l0Vm9pZEV4cHIoZXhwcjogVm9pZCk6IFI7XG4gICAgdmlzaXRadHJpbmdFeHByKGV4cHI6IFp0cmluZyk6IFI7XG59XG5cbmV4cG9ydCBjbGFzcyBBc3NpZ24gZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgbmFtZTogVG9rZW47XG4gICAgcHVibGljIHZhbHVlOiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogVG9rZW4sIHZhbHVlOiBFeHByLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRBc3NpZ25FeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuQXNzaWduJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCYXNlIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIHBhcmVuOiBUb2tlbjtcblxuICAgIGNvbnN0cnVjdG9yKHBhcmVuOiBUb2tlbiwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucGFyZW4gPSBwYXJlbjtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0QmFzZUV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5CYXNlJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCaW5hcnkgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgbGVmdDogRXhwcjtcbiAgICBwdWJsaWMgb3BlcmF0b3I6IFRva2VuO1xuICAgIHB1YmxpYyByaWdodDogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKGxlZnQ6IEV4cHIsIG9wZXJhdG9yOiBUb2tlbiwgcmlnaHQ6IEV4cHIsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0QmluYXJ5RXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkJpbmFyeSc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FsbCBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBjYWxsZWU6IEV4cHI7XG4gICAgcHVibGljIHBhcmVuOiBUb2tlbjtcbiAgICBwdWJsaWMgYXJnczogRXhwcltdO1xuICAgIHB1YmxpYyB0aGl6OiAkQW55O1xuXG4gICAgY29uc3RydWN0b3IoY2FsbGVlOiBFeHByLCBwYXJlbjogVG9rZW4sIGFyZ3M6IEV4cHJbXSwgdGhpejogJEFueSwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY2FsbGVlID0gY2FsbGVlO1xuICAgICAgICB0aGlzLnBhcmVuID0gcGFyZW47XG4gICAgICAgIHRoaXMuYXJncyA9IGFyZ3M7XG4gICAgICAgIHRoaXMudGhpeiA9IHRoaXo7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdENhbGxFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuQ2FsbCc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGljdGlvbmFyeSBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBwcm9wZXJ0aWVzOiBFeHByW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzOiBFeHByW10sIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXREaWN0aW9uYXJ5RXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkRpY3Rpb25hcnknO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdldCBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBlbnRpdHk6IEV4cHI7XG4gICAgcHVibGljIGtleTogRXhwcjtcbiAgICBwdWJsaWMgdHlwZTogVG9rZW5UeXBlO1xuXG4gICAgY29uc3RydWN0b3IoZW50aXR5OiBFeHByLCBrZXk6IEV4cHIsIHR5cGU6IFRva2VuVHlwZSwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZW50aXR5ID0gZW50aXR5O1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0R2V0RXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkdldCc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgR3JvdXBpbmcgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgZXhwcmVzc2lvbjogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKGV4cHJlc3Npb246IEV4cHIsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRHcm91cGluZ0V4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5Hcm91cGluZyc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW4gZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMga2V5OiBFeHByO1xuICAgIHB1YmxpYyBlbnRpdHk6IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihrZXk6IEV4cHIsIGVudGl0eTogRXhwciwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICB0aGlzLmVudGl0eSA9IGVudGl0eTtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0SW5FeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuSW4nO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEluc3RhbmNlT2YgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgbGVmdDogRXhwcjtcbiAgICBwdWJsaWMgcmlnaHQ6IFRva2VuO1xuXG4gICAgY29uc3RydWN0b3IobGVmdDogRXhwciwgcmlnaHQ6IFRva2VuLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRJbnN0YW5jZU9mRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkluc3RhbmNlT2YnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIElzIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIGxlZnQ6IEV4cHI7XG4gICAgcHVibGljIHJpZ2h0OiBUb2tlbjtcblxuICAgIGNvbnN0cnVjdG9yKGxlZnQ6IEV4cHIsIHJpZ2h0OiBUb2tlbiwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0SXNFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuSXMnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtleSBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBuYW1lOiBUb2tlbjtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IFRva2VuLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0S2V5RXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLktleSc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGFtYmRhIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIGxhbWJkYTogU3RtdDtcblxuICAgIGNvbnN0cnVjdG9yKGxhbWJkYTogU3RtdCwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubGFtYmRhID0gbGFtYmRhO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRMYW1iZGFFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuTGFtYmRhJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2dpY2FsIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIGxlZnQ6IEV4cHI7XG4gICAgcHVibGljIG9wZXJhdG9yOiBUb2tlbjtcbiAgICBwdWJsaWMgcmlnaHQ6IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihsZWZ0OiBFeHByLCBvcGVyYXRvcjogVG9rZW4sIHJpZ2h0OiBFeHByLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdExvZ2ljYWxFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuTG9naWNhbCc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGlzdCBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyB2YWx1ZTogRXhwcltdO1xuXG4gICAgY29uc3RydWN0b3IodmFsdWU6IEV4cHJbXSwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TGlzdEV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5MaXN0JztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXRlcmFsIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIHZhbHVlOiAkQW55O1xuXG4gICAgY29uc3RydWN0b3IodmFsdWU6ICRBbnksIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdExpdGVyYWxFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuTGl0ZXJhbCc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTmV3IGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIGNsYXp6OiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IoY2xheno6IEV4cHIsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNsYXp6ID0gY2xheno7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdE5ld0V4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5OZXcnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE51bGxDb2FsZXNjaW5nIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIGxlZnQ6IEV4cHI7XG4gICAgcHVibGljIHJpZ2h0OiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IobGVmdDogRXhwciwgcmlnaHQ6IEV4cHIsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdE51bGxDb2FsZXNjaW5nRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLk51bGxDb2FsZXNjaW5nJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQb3N0Zml4IGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIG5hbWU6IFRva2VuO1xuICAgIHB1YmxpYyBpbmNyZW1lbnQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IFRva2VuLCBpbmNyZW1lbnQ6IG51bWJlciwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaW5jcmVtZW50ID0gaW5jcmVtZW50O1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRQb3N0Zml4RXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLlBvc3RmaXgnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJhbmdlIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIHN0YXJ0OiBFeHByO1xuICAgIHB1YmxpYyBlbmQ6IEV4cHI7XG4gICAgcHVibGljIHN0ZXA6IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihzdGFydDogRXhwciwgZW5kOiBFeHByLCBzdGVwOiBFeHByLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xuICAgICAgICB0aGlzLmVuZCA9IGVuZDtcbiAgICAgICAgdGhpcy5zdGVwID0gc3RlcDtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UmFuZ2VFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuUmFuZ2UnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlZ0V4IGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIHZhbHVlOiBSZWdFeHA7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogUmVnRXhwLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRSZWdFeEV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5SZWdFeCc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0IGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIGVudGl0eTogRXhwcjtcbiAgICBwdWJsaWMga2V5OiBFeHByO1xuICAgIHB1YmxpYyB2YWx1ZTogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKGVudGl0eTogRXhwciwga2V5OiBFeHByLCB2YWx1ZTogRXhwciwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZW50aXR5ID0gZW50aXR5O1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRTZXRFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuU2V0JztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTcHJlYWQgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgdmFsdWU6IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogRXhwciwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0U3ByZWFkRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLlNwcmVhZCc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGUgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgdmFsdWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFRlbXBsYXRlRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLlRlbXBsYXRlJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZXJuYXJ5IGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIGNvbmRpdGlvbjogRXhwcjtcbiAgICBwdWJsaWMgdGhlbkV4cHI6IEV4cHI7XG4gICAgcHVibGljIGVsc2VFeHByOiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IoY29uZGl0aW9uOiBFeHByLCB0aGVuRXhwcjogRXhwciwgZWxzZUV4cHI6IEV4cHIsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAgICAgdGhpcy50aGVuRXhwciA9IHRoZW5FeHByO1xuICAgICAgICB0aGlzLmVsc2VFeHByID0gZWxzZUV4cHI7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFRlcm5hcnlFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuVGVybmFyeSc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHlwZW9mIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIHZhbHVlOiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IodmFsdWU6IEV4cHIsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFR5cGVvZkV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5UeXBlb2YnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVuYXJ5IGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIG9wZXJhdG9yOiBUb2tlbjtcbiAgICBwdWJsaWMgcmlnaHQ6IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihvcGVyYXRvcjogVG9rZW4sIHJpZ2h0OiBFeHByLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFVuYXJ5RXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLlVuYXJ5JztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYXJpYWJsZSBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBuYW1lOiBUb2tlbjtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IFRva2VuLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VmFyaWFibGVFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuVmFyaWFibGUnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZvaWQgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgdmFsdWU6IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogRXhwciwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Vm9pZEV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5Wb2lkJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBadHJpbmcgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgdmFsdWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFp0cmluZ0V4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5adHJpbmcnO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0ICogYXMgU3RtdCBmcm9tICcuL3N0YXRlbWVudCc7XHJcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL2FueSc7XHJcbmltcG9ydCB7IENvbnNvbGUgfSBmcm9tICcuLi9jb25zb2xlJztcclxuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGUuZW51bSc7XHJcbmltcG9ydCB7IEludGVycHJldGVyIH0gZnJvbSAnLi4vaW50ZXJwcmV0ZXInO1xyXG5pbXBvcnQgeyBTY29wZSB9IGZyb20gJy4uL3Njb3BlJztcclxuaW1wb3J0IHsgJE51bGwgfSBmcm9tICcuL251bGwnO1xyXG5kZWNsYXJlIHZhciBjb256b2xlOiBDb25zb2xlO1xyXG5cclxuZXhwb3J0IHR5cGUgRnVuY3Rpb25DYWxsID0gKHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSwgaW50ZXJwcmV0ZXI6IEludGVycHJldGVyKSA9PiAkQW55O1xyXG5cclxuZXhwb3J0IGNsYXNzICRDYWxsYWJsZSBleHRlbmRzICRBbnkge1xyXG5cclxuICAgIHB1YmxpYyB2YWx1ZTogRnVuY3Rpb25DYWxsO1xyXG4gICAgcHVibGljIGFyaXR5OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgIGFyaXR5OiBudW1iZXIsIHZhbHVlOiBGdW5jdGlvbkNhbGwpIHtcclxuICAgICAgICBzdXBlcih2YWx1ZSwgRGF0YVR5cGUuRnVuY3Rpb24pO1xyXG4gICAgICAgIHRoaXMuYXJpdHkgPSBhcml0eTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYWxsKHRoaXo6IGFueSwgYXJnczogYW55W10sIGludGVycHJldGVyOiBJbnRlcnByZXRlciwgKTogJEFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUodGhpeiwgYXJncywgaW50ZXJwcmV0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgPCR7dGhpcy5uYW1lfSAgZnVuY3Rpb24+YDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyAkRnVuY3Rpb24gZXh0ZW5kcyAkQ2FsbGFibGUge1xyXG4gICAgcHVibGljIGRlY2xhcmF0aW9uOiBTdG10LkZ1bmM7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBjbG9zdXJlOiBTY29wZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkZWNsYXJhdGlvbjogU3RtdC5GdW5jLCBjbG9zdXJlOiBTY29wZSkge1xyXG4gICAgICAgIHN1cGVyKGRlY2xhcmF0aW9uLm5hbWUubGV4ZW1lLCBkZWNsYXJhdGlvbi5wYXJhbXMubGVuZ3RoLCBudWxsKTtcclxuICAgICAgICB0aGlzLmRlY2xhcmF0aW9uID0gZGVjbGFyYXRpb247XHJcbiAgICAgICAgdGhpcy5jbG9zdXJlID0gY2xvc3VyZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FsbCh0aGl6OiBhbnksIGFyZ3M6IGFueVtdLCBpbnRlcnByZXRlcjogSW50ZXJwcmV0ZXIpOiAkQW55IHtcclxuICAgICAgICBjb25zdCBzY29wZSA9IG5ldyBTY29wZSh0aGlzLmNsb3N1cmUpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kZWNsYXJhdGlvbi5wYXJhbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc2NvcGUuZGVmaW5lKHRoaXMuZGVjbGFyYXRpb24ucGFyYW1zW2ldLmxleGVtZSwgYXJnc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNjb3BlLnNldCgndGhpcycsIHRoaXopO1xyXG4gICAgICAgIGxldCByZXN0b3JlU2NvcGU6IFNjb3BlID0gbnVsbDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXN0b3JlU2NvcGUgPSBpbnRlcnByZXRlci5zY29wZTtcclxuICAgICAgICAgICAgaW50ZXJwcmV0ZXIuZXhlY3V0ZUJsb2NrKHRoaXMuZGVjbGFyYXRpb24uYm9keSwgc2NvcGUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiAkQW55ICYmIGUudHlwZSA9PT0gRGF0YVR5cGUuUmV0dXJuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdG9yZVNjb3BlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJwcmV0ZXIuc2NvcGUgPSByZXN0b3JlU2NvcGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZS52YWx1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgJE51bGwoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGUuZW51bSc7XHJcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL2FueSc7XHJcbmltcG9ydCB7IEludGVycHJldGVyIH0gZnJvbSAnLi4vaW50ZXJwcmV0ZXInO1xyXG5pbXBvcnQgeyAkRGljdGlvbmFyeSB9IGZyb20gJy4vZGljdGlvbmFyeSc7XHJcbmltcG9ydCB7ICROdWxsIH0gZnJvbSAnLi9udWxsJztcclxuaW1wb3J0IHsgJENhbGxhYmxlIH0gZnJvbSAnLi9mdW5jdGlvbic7XHJcbmltcG9ydCB7ICRMaXN0IH0gZnJvbSAnLi9saXN0JztcclxuaW1wb3J0IHsgJEJvb2xlYW4gfSBmcm9tICcuL2Jvb2xlYW4nO1xyXG5cclxuZXhwb3J0IGNsYXNzIEl0ZXJhdG9yVmFsdWUge1xyXG4gICAgcHVibGljIHZhbHVlOiAkQW55O1xyXG4gICAgcHVibGljIGluZGV4OiAkQW55O1xyXG4gICAgcHVibGljIGRvbmU6ICRBbnk7XHJcbiAgICBwdWJsaWMgaW5uZXI6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogJEFueSwgaW5kZXg6ICRBbnksIGRvbmU6ICRBbnksIGlubmVyOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuZG9uZSA9IGRvbmU7XHJcbiAgICAgICAgdGhpcy5pbm5lciA9IGlubmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgJEl0ZXJhdG9yIGV4dGVuZHMgJEFueSB7XHJcbiAgICBwdWJsaWMgdmFsdWU6ICRBbnk7XHJcbiAgICBwdWJsaWMgaXRlcjogSXRlcmF0b3JWYWx1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogJEFueSkge1xyXG4gICAgICAgIHN1cGVyKHZhbHVlLCBEYXRhVHlwZS5SZWdFeHApO1xyXG4gICAgICAgIHRoaXMuaXRlciA9IG5ldyBJdGVyYXRvclZhbHVlKG5ldyAkTnVsbCgpLCBuZXcgJE51bGwoKSwgbmV3ICRCb29sZWFuKGZhbHNlKSwgbnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldChrZXk6ICRBbnkpOiAkQW55IHtcclxuICAgICAgICBpZiAoa2V5LnZhbHVlID09PSAna2V5JyB8fCBrZXkudmFsdWUgPT09ICdpbmRleCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlci5pbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleS52YWx1ZSA9PT0gJ2RvbmUnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZXIuZG9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleS52YWx1ZSA9PT0gJ3ZhbHVlJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVyLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJEl0ZXJhdG9yLnJ1bnRpbWUuaGFzKGtleS52YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICRJdGVyYXRvci5ydW50aW1lLmdldChrZXkudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3ICROdWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbXBsZXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXRlci5kb25lID0gbmV3ICRCb29sZWFuKHRydWUpO1xyXG4gICAgICAgIHRoaXMuaXRlci52YWx1ZSA9IG5ldyAkTnVsbCgpO1xyXG4gICAgICAgIHRoaXMuaXRlci5pbmRleCA9IG5ldyAkTnVsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQoa2V5OiAkQW55LCB2YWx1ZTogJEFueSk6ICRBbnkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5pdGVyW2tleS52YWx1ZV0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlcltrZXkudmFsdWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYDwke0RhdGFUeXBlW3RoaXMudmFsdWUudmFsdWUudHlwZV19IGl0ZXJhdG9yPmA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBuZXh0KHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSwgaW50ZXJwcmV0ZXI6IEludGVycHJldGVyKTogJEFueSB7XHJcbiAgICAgICAgY29uc3QgaXQgPSB0aGl6IGFzICRJdGVyYXRvcjtcclxuICAgICAgICBpZiAoaXQudmFsdWUuaXNMaXN0KCkpIHtcclxuICAgICAgICAgICAgJExpc3QubmV4dCh0aGl6KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGl0LnZhbHVlLmlzRGljdGlvbmFyeSgpKSB7XHJcbiAgICAgICAgICAgICREaWN0aW9uYXJ5Lm5leHQodGhpeik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpdC52YWx1ZS5pc09iamVjdCgpKSB7XHJcbiAgICAgICAgICAgICh0aGl6LnZhbHVlLmdldChpbnRlcnByZXRlci5zdHJpbmdzLm5leHQpIGFzICRDYWxsYWJsZSkuY2FsbCh0aGl6LnZhbHVlLCBbKHRoaXogYXMgJEl0ZXJhdG9yKV0sIGludGVycHJldGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGl0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZmlyc3QodGhpejogJEFueSwgYXJnczogJEFueVtdLCBpbnRlcnByZXRlcjogSW50ZXJwcmV0ZXIpOiAkQW55IHtcclxuICAgICAgICBpZiAoKHRoaXogYXMgJEl0ZXJhdG9yKS52YWx1ZS52YWx1ZS5pc0xpc3QoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3ICREaWN0aW9uYXJ5KG5ldyBNYXAoW1xyXG4gICAgICAgICAgICAgICAgWydrZXknLCAwXSxcclxuICAgICAgICAgICAgICAgIFsndmFsdWUnLCB0aGl6LnZhbHVlLnZhbHVlWzBdXVxyXG4gICAgICAgICAgICBdKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgJE51bGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJ1bnRpbWUgPSBuZXcgTWFwKFtcclxuICAgICAgICBbJ2ZpcnN0JywgbmV3ICRDYWxsYWJsZSgnZmlyc3QnLCAwLCAkSXRlcmF0b3IuZmlyc3QpXSxcclxuICAgICAgICBbJ25leHQnLCBuZXcgJENhbGxhYmxlKCduZXh0JywgMCwgJEl0ZXJhdG9yLm5leHQpXVxyXG4gICAgXSk7XHJcblxyXG59XHJcbiIsImltcG9ydCB7IGZyb21KYXZhU2NyaXB0TWV0aG9kIH0gZnJvbSAnLi4vcnVudGltZSc7XHJcbmltcG9ydCB7IEludGVycHJldGVyIH0gZnJvbSAnLi4vaW50ZXJwcmV0ZXInO1xyXG5pbXBvcnQgeyAkQW55IH0gZnJvbSAnLi9hbnknO1xyXG5pbXBvcnQgeyAkRnVuY3Rpb24sICRDYWxsYWJsZSB9IGZyb20gJy4vZnVuY3Rpb24nO1xyXG5pbXBvcnQgeyAkTnVsbCB9IGZyb20gJy4vbnVsbCc7XHJcbmltcG9ydCB7ICROdW1iZXIgfSBmcm9tICcuL251bWJlcic7XHJcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi90eXBlLmVudW0nO1xyXG5pbXBvcnQgeyAkUmFuZ2UgfSBmcm9tICcuL3JhbmdlJztcclxuaW1wb3J0IHsgJEl0ZXJhdG9yIH0gZnJvbSAnLi9pdGVyYXRvcic7XHJcbmltcG9ydCB7ICRCb29sZWFuIH0gZnJvbSAnLi9ib29sZWFuJztcclxuXHJcbmV4cG9ydCBjbGFzcyAkTGlzdCBleHRlbmRzICRBbnkge1xyXG4gICAgcHVibGljIHZhbHVlOiAkQW55W107XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU6ICRBbnlbXSkge1xyXG4gICAgICAgIHN1cGVyKHZhbHVlLCBEYXRhVHlwZS5MaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KGtleTogJEFueSk6ICRBbnkge1xyXG4gICAgICAgIGlmIChrZXkuaXNOdW1iZXIoKSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMudmFsdWVba2V5LnZhbHVlXSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlW2tleS52YWx1ZV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICROdWxsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGtleS5pc1JhbmdlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmFuZ2UoPCRSYW5nZT4ga2V5KTtcclxuICAgICAgICB9IGVsc2UgaWYgKCRMaXN0LnJ1bnRpbWUuaGFzKGtleS52YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICRMaXN0LnJ1bnRpbWUuZ2V0KGtleS52YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldChrZXk6ICRBbnksIHZhbHVlOiAkQW55KTogJEFueSB7XHJcbiAgICAgICAgaWYgKGtleS5pc051bWJlcigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVba2V5LnZhbHVlXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByYW5nZShyYW5nZTogJFJhbmdlKTogJExpc3Qge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdDogJEFueVtdID0gW107XHJcbiAgICAgICAgcmFuZ2UuaXRlcmF0ZSh0aGlzLnZhbHVlLmxlbmd0aCwgKGkpID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy52YWx1ZVtpXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkTGlzdChyZXN1bHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgWyR7dGhpcy52YWx1ZS5qb2luKCcsJyl9XWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzaXplKHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSk6ICRBbnkge1xyXG4gICAgICAgIHJldHVybiBuZXcgJE51bWJlcihhcmdzWzBdLnZhbHVlLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBlYWNoKHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSwgaW50ZXJwcmV0ZXI6IEludGVycHJldGVyKTogJEFueSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGl6LnZhbHVlLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIChhcmdzWzBdIGFzICRGdW5jdGlvbikuY2FsbCh0aGl6LCBbdGhpei52YWx1ZVtpXSwgbmV3ICROdW1iZXIoaSksIHRoaXpdLCBpbnRlcnByZXRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGl6O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbWFwKHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSwgaW50ZXJwcmV0ZXI6IEludGVycHJldGVyKTogJEFueSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGl6LnZhbHVlLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXoudmFsdWVbaV0gPSAoYXJnc1swXSBhcyAkRnVuY3Rpb24pLmNhbGwodGhpeiwgW25ldyAkQW55KHRoaXoudmFsdWVbaV0pLCBuZXcgJE51bWJlcihpKSwgdGhpel0sIGludGVycHJldGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXo7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBuZXh0KHRoaXo6ICRBbnkpIHtcclxuICAgICAgICBjb25zdCBpdCA9IHRoaXogYXMgJEl0ZXJhdG9yO1xyXG4gICAgICAgIGNvbnN0IGxpc3QgPSBpdC52YWx1ZSBhcyAkTGlzdDtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGl0Lml0ZXIuaW5kZXg7XHJcblxyXG4gICAgICAgIC8vIGVtdHB5IGxpc3RcclxuICAgICAgICBpZiAoIWxpc3QudmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGl0LmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBpdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGZpcnN0IHZhbHVlXHJcbiAgICAgICAgaWYgKGl0Lml0ZXIuaW5uZXIgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgaXQuaXRlci5pbm5lciA9IHRydWU7XHJcbiAgICAgICAgICAgIGl0Lml0ZXIuaW5kZXggPSBuZXcgJE51bWJlcigwKTtcclxuICAgICAgICAgICAgaXQuaXRlci52YWx1ZSA9IGxpc3QudmFsdWVbMF07XHJcbiAgICAgICAgICAgIHJldHVybiBpdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGFscmVhZHkgaXRlcmF0ZWRcclxuICAgICAgICBpZiAoaXQuaXRlci5kb25lLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIG5vIG1vcmUgdmFsdWVzIHRvIGl0ZXJhdGVcclxuICAgICAgICBpZiAoaW5kZXgudmFsdWUgPj0gbGlzdC52YWx1ZS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIGl0LmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBpdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld0luZGV4ID0gaW5kZXgudmFsdWUgKyAxO1xyXG4gICAgICAgIGl0Lml0ZXIuaW5kZXggPSBuZXcgJE51bWJlcihuZXdJbmRleCk7XHJcbiAgICAgICAgaXQuaXRlci52YWx1ZSA9IGxpc3QudmFsdWVbbmV3SW5kZXhdO1xyXG4gICAgICAgIHJldHVybiBpdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJ1bnRpbWUgPSAgbmV3IE1hcChbXHJcbiAgICAgICAgWydjb25jYXQnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgnY29uY2F0JywgLTEsIERhdGFUeXBlLkxpc3QpXSxcclxuICAgICAgICBbJ2VhY2gnLCBuZXcgJENhbGxhYmxlKCdlYWNoJywgMSwgJExpc3QuZWFjaCldLFxyXG4gICAgICAgIFsnaW5jbHVkZXMnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgnaW5jbHVkZXMnLCAxLCBEYXRhVHlwZS5Cb29sZWFuKV0sXHJcbiAgICAgICAgWydpbmRleE9mJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ2luZGV4T2YnLCAxLCBEYXRhVHlwZS5OdW1iZXIpXSxcclxuICAgICAgICBbJ2pvaW4nLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgnam9pbicsIDEsIERhdGFUeXBlLlN0cmluZyldLFxyXG4gICAgICAgIFsnbGFzdEluZGV4T2YnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgnbGFzdEluZGV4T2YnLCAxLCBEYXRhVHlwZS5OdW1iZXIpXSxcclxuICAgICAgICBbJ21hcCcsIG5ldyAkQ2FsbGFibGUoJ21hcCcsIDEsICRMaXN0Lm1hcCldLFxyXG4gICAgICAgIFsncG9wJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ3BvcCcsIDAsIERhdGFUeXBlLkxpc3QpXSxcclxuICAgICAgICBbJ3B1c2gnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgncHVzaCcsIC0xLCBEYXRhVHlwZS5MaXN0KV0sXHJcbiAgICAgICAgWydzaGlmdCcsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCdzaGlmdCcsIDAsIERhdGFUeXBlLkxpc3QpXSxcclxuICAgICAgICBbJ3NpemUnLCBuZXcgJENhbGxhYmxlKCdzaXplJywgMCwgICh0aGl6OiAkQW55LCBhcmdzOiAkQW55W10pOiAkQW55ID0+IG5ldyAkTnVtYmVyKHRoaXoudmFsdWUubGVuZ3RoKSldLFxyXG4gICAgICAgIFsnc2xpY2UnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgnc2xpY2UnLCAtMSwgRGF0YVR5cGUuTGlzdCldLFxyXG4gICAgICAgIFsnc3BsaWNlJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ3NwbGljZScsIC0xLCBEYXRhVHlwZS5MaXN0KV0sXHJcbiAgICAgICAgWyd1bnNoaWZ0JywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ3Vuc2hpZnQnLCAtMSwgRGF0YVR5cGUuTGlzdCldXHJcbiAgICBdKTtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGUuZW51bSc7XHJcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL2FueSc7XHJcblxyXG5leHBvcnQgY2xhc3MgJE51bGwgZXh0ZW5kcyAkQW55IHtcclxuXHJcbiAgICBwdWJsaWMgdmFsdWU6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIobnVsbCk7XHJcbiAgICAgICAgdGhpcy50eXBlID0gRGF0YVR5cGUuTnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuICdudWxsJztcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGUuZW51bSc7XHJcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL2FueSc7XHJcblxyXG5leHBvcnQgY2xhc3MgJE51bWJlciBleHRlbmRzICRBbnkge1xyXG5cclxuICAgIHB1YmxpYyB2YWx1ZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcih2YWx1ZSwgRGF0YVR5cGUuTnVtYmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgJEFueSB9IGZyb20gJy4vYW55JztcclxuaW1wb3J0IHsgJE51bGwgfSBmcm9tICcuL251bGwnO1xyXG5pbXBvcnQgeyAkQ2xhc3MgfSBmcm9tICcuL2NsYXNzJztcclxuaW1wb3J0IHsgJEJvb2xlYW4gfSBmcm9tICcuL2Jvb2xlYW4nO1xyXG5cclxuZXhwb3J0IGNsYXNzICRPYmplY3QgZXh0ZW5kcyAkQW55IHtcclxuICAgIHB1YmxpYyB2YWx1ZTogTWFwPHN0cmluZywgJEFueT47XHJcbiAgICBwdWJsaWMgY29uenRydWN0b3I6ICRBbnk7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBNYXA8c3RyaW5nLCAkQW55PiwgY29uenRydWN0b3I6ICRBbnkpIHtcclxuICAgICAgICBzdXBlcih2YWx1ZSwgRGF0YVR5cGUuT2JqZWN0KTtcclxuICAgICAgICB0aGlzLmNvbnp0cnVjdG9yID0gY29uenRydWN0b3I7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gKGNvbnp0cnVjdG9yIGFzICRDbGFzcykubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KGtleTogJEFueSk6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IHRoaXMuY29uenRydWN0b3IuZ2V0KGtleSk7XHJcblxyXG4gICAgICAgIGlmIChtZXRob2QuaXNGdW5jdGlvbigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZXRob2Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy52YWx1ZS5oYXMoa2V5LnZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS5nZXQoa2V5LnZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgJE51bGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0KGtleTogJEFueSwgdmFsdWU6ICRBbnkpOiAkQW55IHtcclxuICAgICAgICB0aGlzLnZhbHVlLnNldChrZXkudmFsdWUsIHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGA8JHt0aGlzLm5hbWV9IG9iamVjdD5gO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi90eXBlLmVudW0nO1xyXG5pbXBvcnQgeyAkQW55IH0gZnJvbSAnLi9hbnknO1xyXG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnLi4vY29uc29sZSc7XHJcbmRlY2xhcmUgdmFyIGNvbnpvbGU6IENvbnNvbGU7XHJcblxyXG5leHBvcnQgIGNsYXNzIFJhbmdlVmFsdWUge1xyXG4gICAgcHVibGljIHN0YXJ0OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZW5kOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgc3RlcDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyLCBzdGVwOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XHJcbiAgICAgICAgdGhpcy5lbmQgPSBlbmQ7XHJcbiAgICAgICAgdGhpcy5zdGVwID0gc3RlcDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbm9ybWFsaXplKGxlbmd0aDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RlcCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0ZXAgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5lbmQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmQgPSB0aGlzLnN0ZXAgPiAwID8gbGVuZ3RoIC0gMSA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXJ0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQgPSB0aGlzLnN0ZXAgPiAwID8gMCA6IGxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgJFJhbmdlIGV4dGVuZHMgJEFueSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IFJhbmdlVmFsdWUpIHtcclxuICAgICAgICBzdXBlcih2YWx1ZSwgRGF0YVR5cGUuUmFuZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpdGVyYXRlKGxlbmd0aDogbnVtYmVyLCBjYWxsYmFjazogKGluZGV4OiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnZhbHVlLm5vcm1hbGl6ZShsZW5ndGgpO1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlLnN0ZXAgPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnZhbHVlLnN0YXJ0OyBpIDw9IHRoaXMudmFsdWUuZW5kOyBpICs9IHRoaXMudmFsdWUuc3RlcCkge1xyXG4gICAgICAgICAgICAgICBjYWxsYmFjayhpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy52YWx1ZS5zdGVwIDwgMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy52YWx1ZS5zdGFydDsgaSA+PSB0aGlzLnZhbHVlLmVuZDsgaSArPSB0aGlzLnZhbHVlLnN0ZXApIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uem9sZS53YXJuKGBbcmFuZ2UgZXJyb3JdID0+IDAgaXMgbm90IGEgdmFsaWQgc3RlcGApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgJEFueSB9IGZyb20gJy4vYW55JztcclxuXHJcbmV4cG9ydCBjbGFzcyAkUmVnRXhwIGV4dGVuZHMgJEFueSB7XHJcblxyXG4gICAgcHVibGljIHZhbHVlOiBSZWdFeHA7XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IFJlZ0V4cCkge1xyXG4gICAgICAgIHN1cGVyKHZhbHVlLCBEYXRhVHlwZS5SZWdFeHApO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBUb2tlbiB9IGZyb20gJ3Rva2VuJztcblxuaW1wb3J0IHsgRXhwciB9IGZyb20gJ2V4cHJlc3Npb24nO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3RtdCB7XG4gICAgcHVibGljIHJlc3VsdDogYW55O1xuICAgIHB1YmxpYyBsaW5lOiBudW1iZXI7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgY29uc3RydWN0b3IoKSB7IH1cbiAgICBwdWJsaWMgYWJzdHJhY3QgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUjtcbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5leHBvcnQgaW50ZXJmYWNlIFN0bXRWaXNpdG9yPFI+IHtcbiAgICB2aXNpdEJsb2NrU3RtdChzdG10OiBCbG9jayk6IFI7XG4gICAgdmlzaXRCcmVha1N0bXQoc3RtdDogQnJlYWspOiBSO1xuICAgIHZpc2l0Q2xhc3NTdG10KHN0bXQ6IENsYXNzKTogUjtcbiAgICB2aXNpdENvbnRpbnVlU3RtdChzdG10OiBDb250aW51ZSk6IFI7XG4gICAgdmlzaXREb1doaWxlU3RtdChzdG10OiBEb1doaWxlKTogUjtcbiAgICB2aXNpdEV4cHJlc3Npb25TdG10KHN0bXQ6IEV4cHJlc3Npb24pOiBSO1xuICAgIHZpc2l0Rm9yZWFjaFN0bXQoc3RtdDogRm9yZWFjaCk6IFI7XG4gICAgdmlzaXRGdW5jU3RtdChzdG10OiBGdW5jKTogUjtcbiAgICB2aXNpdElmU3RtdChzdG10OiBJZik6IFI7XG4gICAgdmlzaXRQcmludFN0bXQoc3RtdDogUHJpbnQpOiBSO1xuICAgIHZpc2l0UmV0dXJuU3RtdChzdG10OiBSZXR1cm4pOiBSO1xuICAgIHZpc2l0VmFyU3RtdChzdG10OiBWYXIpOiBSO1xuICAgIHZpc2l0V2hpbGVTdG10KHN0bXQ6IFdoaWxlKTogUjtcbn1cblxuZXhwb3J0IGNsYXNzIEJsb2NrIGV4dGVuZHMgU3RtdCB7XG4gICAgcHVibGljIHN0YXRlbWVudHM6IFN0bXRbXTtcblxuICAgIGNvbnN0cnVjdG9yKHN0YXRlbWVudHM6IFN0bXRbXSwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGVtZW50cyA9IHN0YXRlbWVudHM7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEJsb2NrU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LkJsb2NrJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCcmVhayBleHRlbmRzIFN0bXQge1xuICAgIHB1YmxpYyBrZXl3b3JkOiBUb2tlbjtcblxuICAgIGNvbnN0cnVjdG9yKGtleXdvcmQ6IFRva2VuLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5rZXl3b3JkID0ga2V5d29yZDtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0QnJlYWtTdG10KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1N0bXQuQnJlYWsnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsYXNzIGV4dGVuZHMgU3RtdCB7XG4gICAgcHVibGljIG5hbWU6IFRva2VuO1xuICAgIHB1YmxpYyBwYXJlbnQ6IFRva2VuO1xuICAgIHB1YmxpYyBtZXRob2RzOiBGdW5jW107XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBUb2tlbiwgcGFyZW50OiBUb2tlbiwgbWV0aG9kczogRnVuY1tdLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMubWV0aG9kcyA9IG1ldGhvZHM7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdENsYXNzU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LkNsYXNzJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb250aW51ZSBleHRlbmRzIFN0bXQge1xuICAgIHB1YmxpYyBrZXl3b3JkOiBUb2tlbjtcblxuICAgIGNvbnN0cnVjdG9yKGtleXdvcmQ6IFRva2VuLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5rZXl3b3JkID0ga2V5d29yZDtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q29udGludWVTdG10KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1N0bXQuQ29udGludWUnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvV2hpbGUgZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMgbG9vcDogU3RtdDtcbiAgICBwdWJsaWMgY29uZGl0aW9uOiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IobG9vcDogU3RtdCwgY29uZGl0aW9uOiBFeHByLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5sb29wID0gbG9vcDtcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdERvV2hpbGVTdG10KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1N0bXQuRG9XaGlsZSc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRXhwcmVzc2lvbiBleHRlbmRzIFN0bXQge1xuICAgIHB1YmxpYyBleHByZXNzaW9uOiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IoZXhwcmVzc2lvbjogRXhwciwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEV4cHJlc3Npb25TdG10KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1N0bXQuRXhwcmVzc2lvbic7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm9yZWFjaCBleHRlbmRzIFN0bXQge1xuICAgIHB1YmxpYyBuYW1lOiBUb2tlbjtcbiAgICBwdWJsaWMga2V5OiBUb2tlbjtcbiAgICBwdWJsaWMgaXRlcmFibGU6IEV4cHI7XG4gICAgcHVibGljIGxvb3A6IFN0bXQ7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBUb2tlbiwga2V5OiBUb2tlbiwgaXRlcmFibGU6IEV4cHIsIGxvb3A6IFN0bXQsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy5pdGVyYWJsZSA9IGl0ZXJhYmxlO1xuICAgICAgICB0aGlzLmxvb3AgPSBsb29wO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRGb3JlYWNoU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LkZvcmVhY2gnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZ1bmMgZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMgbmFtZTogVG9rZW47XG4gICAgcHVibGljIHBhcmFtczogVG9rZW5bXTtcbiAgICBwdWJsaWMgYm9keTogU3RtdFtdO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogVG9rZW4sIHBhcmFtczogVG9rZW5bXSwgYm9keTogU3RtdFtdLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gICAgICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEZ1bmNTdG10KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1N0bXQuRnVuYyc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSWYgZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMgY29uZGl0aW9uOiBFeHByO1xuICAgIHB1YmxpYyB0aGVuU3RtdDogU3RtdDtcbiAgICBwdWJsaWMgZWxzZVN0bXQ6IFN0bXQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25kaXRpb246IEV4cHIsIHRoZW5TdG10OiBTdG10LCBlbHNlU3RtdDogU3RtdCwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgICAgICB0aGlzLnRoZW5TdG10ID0gdGhlblN0bXQ7XG4gICAgICAgIHRoaXMuZWxzZVN0bXQgPSBlbHNlU3RtdDtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0SWZTdG10KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1N0bXQuSWYnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFByaW50IGV4dGVuZHMgU3RtdCB7XG4gICAgcHVibGljIGV4cHJlc3Npb246IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihleHByZXNzaW9uOiBFeHByLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UHJpbnRTdG10KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1N0bXQuUHJpbnQnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJldHVybiBleHRlbmRzIFN0bXQge1xuICAgIHB1YmxpYyBrZXl3b3JkOiBUb2tlbjtcbiAgICBwdWJsaWMgdmFsdWU6IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihrZXl3b3JkOiBUb2tlbiwgdmFsdWU6IEV4cHIsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmtleXdvcmQgPSBrZXl3b3JkO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFJldHVyblN0bXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnU3RtdC5SZXR1cm4nO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZhciBleHRlbmRzIFN0bXQge1xuICAgIHB1YmxpYyBuYW1lOiBUb2tlbjtcbiAgICBwdWJsaWMgdHlwZTogVG9rZW47XG4gICAgcHVibGljIGluaXRpYWxpemVyOiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogVG9rZW4sIHR5cGU6IFRva2VuLCBpbml0aWFsaXplcjogRXhwciwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZXIgPSBpbml0aWFsaXplcjtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VmFyU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LlZhcic7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgV2hpbGUgZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMgY29uZGl0aW9uOiBFeHByO1xuICAgIHB1YmxpYyBsb29wOiBTdG10O1xuXG4gICAgY29uc3RydWN0b3IoY29uZGl0aW9uOiBFeHByLCBsb29wOiBTdG10LCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgICAgIHRoaXMubG9vcCA9IGxvb3A7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFdoaWxlU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LldoaWxlJztcbiAgICB9XG59XG5cbiIsImltcG9ydCB7IGZyb21KYXZhU2NyaXB0TWV0aG9kIH0gZnJvbSAnLi4vcnVudGltZSc7XHJcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL2FueSc7XHJcbmltcG9ydCB7ICRDYWxsYWJsZSwgJEZ1bmN0aW9uIH0gZnJvbSAnLi9mdW5jdGlvbic7XHJcbmltcG9ydCB7ICROdWxsIH0gZnJvbSAnLi9udWxsJztcclxuaW1wb3J0IHsgJE51bWJlciB9IGZyb20gJy4vbnVtYmVyJztcclxuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGUuZW51bSc7XHJcbmltcG9ydCB7IEludGVycHJldGVyIH0gZnJvbSAnLi4vaW50ZXJwcmV0ZXInO1xyXG5pbXBvcnQgeyAkUmFuZ2UgfSBmcm9tICcuL3JhbmdlJztcclxuXHJcbmV4cG9ydCBjbGFzcyAkU3RyaW5nIGV4dGVuZHMgJEFueSB7XHJcbiAgICBwdWJsaWMgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIodmFsdWUsIERhdGFUeXBlLlN0cmluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldChrZXk6ICRBbnkpOiAkQW55IHtcclxuICAgICAgICBpZiAoa2V5LmlzTnVtYmVyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyAkU3RyaW5nKHRoaXMudmFsdWVba2V5LnZhbHVlXSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChrZXkuaXNSYW5nZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJhbmdlKDwkUmFuZ2U+IGtleSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgkU3RyaW5nLnJ1bnRpbWUuaGFzKGtleS52YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICRTdHJpbmcucnVudGltZS5nZXQoa2V5LnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0KGtleTogJEFueSwgdmFsdWU6IGFueSk6ICRBbnkge1xyXG4gICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnByb3BlcnRpZXMuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3ICROdWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMudmFsdWV9YDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJhbmdlKHJhbmdlOiAkUmFuZ2UpOiAkU3RyaW5nIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgICAgICAgcmFuZ2UuaXRlcmF0ZSh0aGlzLnZhbHVlLmxlbmd0aCwgKGk6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gdGhpcy52YWx1ZVtpXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbmV3ICRTdHJpbmcocmVzdWx0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlcGxhY2UodGhpejogJEFueSwgYXJnczogJEFueVtdLCBpbnRlcnBldGVyOiBJbnRlcnByZXRlcik6ICRBbnkge1xyXG4gICAgICAgIGlmIChhcmdzWzFdLmlzRnVuY3Rpb24oKSkge1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gbmV3ICRTdHJpbmcodGhpei52YWx1ZS5yZXBsYWNlKGFyZ3NbMF0udmFsdWUsIGFyZ3NbMV0udmFsdWUpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXoudmFsdWUucmVwbGFjZShhcmdzWzBdLnZhbHVlLCAoKG1hdGNoOiBzdHJpbmcpID0+XHJcbiAgICAgICAgICAgICAgICAoKGFyZ3NbMV0gYXMgJEZ1bmN0aW9uKS5jYWxsKHRoaXosIFtuZXcgJFN0cmluZyhtYXRjaCldLCBpbnRlcnBldGVyKSkudmFsdWVcclxuICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgJFN0cmluZyh0aGl6LnZhbHVlLnJlcGxhY2UoYXJnc1swXS52YWx1ZSwgYXJnc1sxXS52YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgIHJ1bnRpbWUgPSAgbmV3IE1hcChbXHJcbiAgICAgICAgWyd0b1VwcGVyJywgIGZyb21KYXZhU2NyaXB0TWV0aG9kKCd0b1VwcGVyQ2FzZScsIDAsIERhdGFUeXBlLlN0cmluZyldLFxyXG4gICAgICAgIFsndG9Mb3dlcicsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCd0b0xvd2VyQ2FzZScsIDAsIERhdGFUeXBlLlN0cmluZyldLFxyXG4gICAgICAgIFsnc2l6ZScsIG5ldyAkQ2FsbGFibGUoJ3NpemUnLCAwLCAgKHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSk6ICRBbnkgPT4gbmV3ICROdW1iZXIodGhpei52YWx1ZS5sZW5ndGgpKV0sXHJcbiAgICAgICAgWydzcGxpdCcsICBmcm9tSmF2YVNjcmlwdE1ldGhvZCgnc3BsaXQnLCAxLCBEYXRhVHlwZS5MaXN0KV0sXHJcbiAgICAgICAgWydjb25jYXQnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgnY29uY2F0JywgMSwgRGF0YVR5cGUuU3RyaW5nKV0sXHJcbiAgICAgICAgWydpbmNsdWRlcycsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCdpbmNsdWRlcycsIDEsIERhdGFUeXBlLkJvb2xlYW4pXSxcclxuICAgICAgICBbJ2luZGV4T2YnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgnaW5kZXhPZicsIDEsIERhdGFUeXBlLk51bWJlcildLFxyXG4gICAgICAgIFsnbGFzdEluZGV4T2YnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgnbGFzdEluZGV4T2YnLCAxLCBEYXRhVHlwZS5OdW1iZXIpXSxcclxuICAgICAgICBbJ3JlcGVhdCcsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCdyZXBlYXQnLCAxLCBEYXRhVHlwZS5TdHJpbmcpXSxcclxuICAgICAgICBbJ3JlcGxhY2UnLCBuZXcgJENhbGxhYmxlKCdyZXBsYWNlJywgLTEsICRTdHJpbmcucmVwbGFjZSldLFxyXG4gICAgICAgIFsnc2VhcmNoJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ3NlYXJjaCcsIDEsIERhdGFUeXBlLk51bWJlcildLFxyXG4gICAgICAgIFsnc2xpY2UnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgnc2xpY2UnLCAtMSwgRGF0YVR5cGUuU3RyaW5nKV0sXHJcbiAgICAgICAgWydzdWJzdHJpbmcnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgnc3Vic3RyaW5nJywgLTEsIERhdGFUeXBlLlN0cmluZyldLFxyXG4gICAgICAgIFsndHJpbScsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCd0cmltJywgMCwgRGF0YVR5cGUuU3RyaW5nKV0sXHJcbiAgICBdKTtcclxuXHJcbn1cclxuIiwiZXhwb3J0IGVudW0gRGF0YVR5cGUge1xyXG4gICAgTnVsbCwgICAgLy8gMFxyXG4gICAgQW55LCAgICAgLy8gMVxyXG4gICAgQm9vbGVhbiwgLy8gMlxyXG4gICAgTnVtYmVyLCAgLy8gM1xyXG4gICAgU3RyaW5nLCAgLy8gNFxyXG4gICAgTGlzdCwgICAgLy8gNVxyXG4gICAgRGljdGlvbmFyeSwgLy8gNlxyXG4gICAgT2JqZWN0LCAgIC8vIDdcclxuICAgIENsYXNzLCAgICAvLyA4XHJcbiAgICBGdW5jdGlvbiwgLy8gOVxyXG4gICAgTGFtYmRhLCAgIC8vIDEwXHJcbiAgICBSYW5nZSwgICAgLy8gMTFcclxuICAgIFJlZ0V4cCwgICAvLyAxMlxyXG4gICAgRXJyb3IsICAgIC8vIDEzXHJcbiAgICBJdGVyYXRvciwgLy8gMTRcclxuICAgIC8vIGludGVybmFsIHR5cGVzXHJcbiAgICBWb2lkID0gMTAwLCAvLyAgMTAwXHJcbiAgICBSZXR1cm4sICAgLy8gMTAxXHJcbiAgICBCcmVhaywgICAgLy8gMTAyXHJcbiAgICBDb250aW51ZSAgLy8gMTAzXHJcbn1cclxuIiwiaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGUuZW51bSc7XHJcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL2FueSc7XHJcblxyXG5leHBvcnQgY2xhc3MgJFZvaWQgZXh0ZW5kcyAkQW55IHtcclxuXHJcbiAgICBwdWJsaWMgdmFsdWU6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKHZhbHVlLCBEYXRhVHlwZS5Wb2lkKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgVG9rZW5UeXBlIH0gZnJvbSAnLi90b2tlbic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNEaWdpdChjaGFyOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGFyID49ICcwJyAmJiBjaGFyIDw9ICc5JztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQWxwaGEoY2hhcjogc3RyaW5nICk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChjaGFyID49ICdhJyAmJiBjaGFyIDw9ICd6JykgfHwgKGNoYXIgPj0gJ0EnICYmIGNoYXIgPD0gJ1onKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQWxwaGFOdW1lcmljKGNoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGlzQWxwaGEoY2hhcikgfHwgaXNEaWdpdChjaGFyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzS2V5d29yZCh3b3JkOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBUb2tlblR5cGVbd29yZF0gPj0gVG9rZW5UeXBlLkFuZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemUod29yZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9