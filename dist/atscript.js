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

/***/ "./src/atscript.ts":
/*!*************************!*\
  !*** ./src/atscript.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scanner */ "./src/scanner.ts");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser */ "./src/parser.ts");
/* harmony import */ var _interpreter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interpreter */ "./src/interpreter.ts");
/* harmony import */ var _console__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./console */ "./src/console.ts");
/* harmony import */ var _demos_demo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demos/demo */ "./src/demos/demo.ts");





const atscript = {
    execute: (source) => {
        const scanner = new _scanner__WEBPACK_IMPORTED_MODULE_0__["Scanner"]();
        const parser = new _parser__WEBPACK_IMPORTED_MODULE_1__["Parser"]();
        const interpreter = new _interpreter__WEBPACK_IMPORTED_MODULE_2__["Interpreter"]();
        const tokens = scanner.scan(source);
        if (scanner.errors.length) {
            scanner.errors.forEach((e) => {
                window.conzole.error(e);
            });
            return [];
        }
        const statements = parser.parse(tokens);
        if (parser.errors.length) {
            parser.errors.forEach((e) => {
                window.conzole.error(e);
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
    window.conzole = new _console__WEBPACK_IMPORTED_MODULE_3__["Console"]();
    window.demoSourceCode = _demos_demo__WEBPACK_IMPORTED_MODULE_4__["DemoSourceCode"];
    window.atscript = atscript;
}
else {
    exports.atscript = atscript;
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




















class Interpreter {
    constructor() {
        this.global = new _scope__WEBPACK_IMPORTED_MODULE_1__["Scope"]();
        this.scope = this.global;
        this.errors = [];
        this.scanner = new _scanner__WEBPACK_IMPORTED_MODULE_18__["Scanner"]();
        this.parser = new _parser__WEBPACK_IMPORTED_MODULE_19__["Parser"]();
        this.global.set('math', new _types_dictionary__WEBPACK_IMPORTED_MODULE_7__["$Dictionary"](_runtime__WEBPACK_IMPORTED_MODULE_3__["Runtime"].Math));
        this.global.set('console', new _types_dictionary__WEBPACK_IMPORTED_MODULE_7__["$Dictionary"](_runtime__WEBPACK_IMPORTED_MODULE_3__["Runtime"].Console));
        this.global.set('re', _runtime__WEBPACK_IMPORTED_MODULE_3__["Runtime"].Utils.get('re'));
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
            values.push(this.evaluate(expression));
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
        const result = expr.value.replace(/\$\{\{([\s\S]+?)\}\}/g, (m, placeholder) => {
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
                return new _types_string__WEBPACK_IMPORTED_MODULE_14__["$String"](left.value.toString() + right.value.toString());
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
            args.push(this.evaluate(argument));
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
            case '.':
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__["TokenType"].Dot, null);
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
    // Literals
    TokenType[TokenType["Identifier"] = 43] = "Identifier";
    TokenType[TokenType["Template"] = 44] = "Template";
    TokenType[TokenType["String"] = 45] = "String";
    TokenType[TokenType["Number"] = 46] = "Number";
    TokenType[TokenType["Regex"] = 47] = "Regex";
    // Keywords
    TokenType[TokenType["And"] = 48] = "And";
    TokenType[TokenType["Break"] = 49] = "Break";
    TokenType[TokenType["Base"] = 50] = "Base";
    TokenType[TokenType["Class"] = 51] = "Class";
    TokenType[TokenType["Continue"] = 52] = "Continue";
    TokenType[TokenType["Do"] = 53] = "Do";
    TokenType[TokenType["Else"] = 54] = "Else";
    TokenType[TokenType["Extends"] = 55] = "Extends";
    TokenType[TokenType["False"] = 56] = "False";
    TokenType[TokenType["For"] = 57] = "For";
    TokenType[TokenType["Function"] = 58] = "Function";
    TokenType[TokenType["If"] = 59] = "If";
    TokenType[TokenType["In"] = 60] = "In";
    TokenType[TokenType["Instanceof"] = 61] = "Instanceof";
    TokenType[TokenType["Is"] = 62] = "Is";
    TokenType[TokenType["New"] = 63] = "New";
    TokenType[TokenType["Null"] = 64] = "Null";
    TokenType[TokenType["Or"] = 65] = "Or";
    TokenType[TokenType["Print"] = 66] = "Print";
    TokenType[TokenType["Return"] = 67] = "Return";
    TokenType[TokenType["True"] = 68] = "True";
    TokenType[TokenType["Typeof"] = 69] = "Typeof";
    TokenType[TokenType["Var"] = 70] = "Var";
    TokenType[TokenType["Void"] = 71] = "Void";
    TokenType[TokenType["While"] = 72] = "While";
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
        return new _null__WEBPACK_IMPORTED_MODULE_3__["$Null"]();
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
}
$Dictionary.runtime = new Map([
    ['clear', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('clear', 0, _type_enum__WEBPACK_IMPORTED_MODULE_6__["DataType"].Null)],
    ['delete', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('delete', 1, _type_enum__WEBPACK_IMPORTED_MODULE_6__["DataType"].Boolean)],
    ['each', new _function__WEBPACK_IMPORTED_MODULE_2__["$Callable"]('each', 1, $Dictionary.each)],
    ['has', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('has', 1, _type_enum__WEBPACK_IMPORTED_MODULE_6__["DataType"].Boolean)],
    ['indexOf', new _function__WEBPACK_IMPORTED_MODULE_2__["$Callable"]('indexOf', 1, $Dictionary.indexOf)],
    ['map', new _function__WEBPACK_IMPORTED_MODULE_2__["$Callable"]('map', 1, $Dictionary.map)],
    ['merge', new _function__WEBPACK_IMPORTED_MODULE_2__["$Callable"]('merge', 1, (thiz, args) => new $Dictionary(new Map([...(thiz.value), ...(args[0].value)])))],
    ['size', new _function__WEBPACK_IMPORTED_MODULE_2__["$Callable"]('size', 0, (thiz, args) => new _number__WEBPACK_IMPORTED_MODULE_4__["$Number"](thiz.value.size))]
]);


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
/*! exports provided: Expr, Assign, Base, Binary, Call, Dictionary, Get, Grouping, In, InstanceOf, Is, Key, Lambda, Logical, List, Literal, New, NullCoalescing, Postfix, Range, RegEx, Set, Template, Ternary, Typeof, Unary, Variable, Void, Ztring */
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
/*! exports provided: Stmt, Block, Break, Class, Continue, DoWhile, Expression, Func, If, Print, Return, Var, While */
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
        return `"${this.value}"`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0c2NyaXB0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9kZW1vcy9kZW1vLnRzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcnByZXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFyc2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2FubmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zY29wZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9rZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL2FueS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvYm9vbGVhbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvY2xhc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL2RpY3Rpb25hcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL2Vycm9yLnRzIiwid2VicGFjazovLy8uL3NyYy90eXBlcy9leHByZXNzaW9uLnRzIiwid2VicGFjazovLy8uL3NyYy90eXBlcy9mdW5jdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvbGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvbnVsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvbnVtYmVyLnRzIiwid2VicGFjazovLy8uL3NyYy90eXBlcy9vYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL3JhbmdlLnRzIiwid2VicGFjazovLy8uL3NyYy90eXBlcy9yZWdleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvc3RhdGVtZW50LnRzIiwid2VicGFjazovLy8uL3NyYy90eXBlcy9zdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL3R5cGUuZW51bS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvdm9pZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0M7QUFDRjtBQUNVO0FBQ1I7QUFDVTtBQUs5QyxNQUFNLFFBQVEsR0FBRztJQUNiLE9BQU8sRUFBRSxDQUFDLE1BQWMsRUFBVSxFQUFFO1FBQ2hDLE1BQU0sT0FBTyxHQUFHLElBQUksZ0RBQU8sRUFBRSxDQUFDO1FBQzlCLE1BQU0sTUFBTSxHQUFHLElBQUksOENBQU0sRUFBRSxDQUFDO1FBQzVCLE1BQU0sV0FBVyxHQUFHLElBQUksd0RBQVcsRUFBRSxDQUFDO1FBQ3RDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUN2QixPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUN6QixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFDRCxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDdEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDeEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPLEVBQUUsQ0FBQztTQUNiO1FBQ0QsT0FBTyxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCxXQUFXLEVBQUUsd0RBQVc7SUFDeEIsTUFBTSxFQUFFLDhDQUFNO0lBQ2QsT0FBTyxFQUFFLGdEQUFPO0NBQ25CLENBQUM7QUFFRixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtJQUMvQixNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksZ0RBQU8sRUFBRSxDQUFDO0lBQy9CLE1BQU0sQ0FBQyxjQUFjLEdBQUcsMERBQWMsQ0FBQztJQUN2QyxNQUFNLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztDQUM5QjtLQUFNO0lBQ0gsT0FBTyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Q0FDL0I7Ozs7Ozs7Ozs7Ozs7QUN6Q0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFZLGtCQUtYO0FBTEQsV0FBWSxrQkFBa0I7SUFDMUIsMkRBQUk7SUFDSiw2REFBSztJQUNMLGlFQUFPO0lBQ1AsMkRBQUk7QUFDUixDQUFDLEVBTFcsa0JBQWtCLEtBQWxCLGtCQUFrQixRQUs3QjtBQUVNLE1BQU0sY0FBYztDQUkxQjtBQUVNLE1BQU0sT0FBTztJQUloQjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxHQUFHLENBQUMsT0FBWSxFQUFFLElBQXdCO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2YsSUFBSSxFQUFFLE9BQU87WUFDYixJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDaEIsMkJBQTJCO1lBQzNCLElBQUksRUFBRSxJQUFJO1NBQ2IsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLEtBQUs7UUFDUixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU0sR0FBRyxDQUFDLE9BQVk7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVNLElBQUksQ0FBQyxPQUFZO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTSxLQUFLLENBQUMsT0FBWTtRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1Qyx1QkFBdUI7SUFDM0IsQ0FBQztJQUVNLElBQUksQ0FBQyxPQUFZO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTSxLQUFLO1FBQ1IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNqQyxDQUFDO0lBRU0sSUFBSTtRQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDeEQsQ0FBQztJQUVNLEtBQUs7UUFDUixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Q0FFSjs7Ozs7Ozs7Ozs7OztBQy9ERDtBQUFBO0FBQU8sTUFBTSxjQUFjLEdBQzNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBNEhDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUM3SEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkM7QUFHWDtBQUNXO0FBQ1A7QUFDRDtBQUNRO0FBQ0o7QUFDVTtBQUNKO0FBQ1I7QUFDQTtBQUNJO0FBQ0E7QUFDVTtBQUNWO0FBQ0o7QUFDUTtBQUNSO0FBQ0Q7QUFDRjtBQUczQixNQUFNLFdBQVc7SUFTcEI7UUFOTyxXQUFNLEdBQUcsSUFBSSw0Q0FBSyxFQUFFLENBQUM7UUFDckIsVUFBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDcEIsV0FBTSxHQUFhLEVBQUUsQ0FBQztRQUNyQixZQUFPLEdBQUcsSUFBSSxpREFBTyxFQUFFLENBQUM7UUFDeEIsV0FBTSxHQUFHLElBQUksK0NBQU0sRUFBRSxDQUFDO1FBRzFCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLDZEQUFXLENBQUMsZ0RBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLDZEQUFXLENBQUMsZ0RBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxnREFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVPLFFBQVEsQ0FBQyxJQUFlO1FBQzVCLE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTyxPQUFPLENBQUMsSUFBZTtRQUMzQixPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU0sSUFBSSxDQUFDLElBQWU7UUFDdkIsSUFBSTtZQUNBLE9BQVE7Z0JBQ0osS0FBSyxFQUFFLEtBQUs7Z0JBQ1osS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFO2FBQ3RDLENBQUM7U0FDTDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1IsT0FBTztnQkFDSCxLQUFLLEVBQUUsSUFBSTtnQkFDWCxLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU87YUFDbkIsQ0FBQztTQUNMO0lBQ0wsQ0FBQztJQUVNLFFBQVEsQ0FBQyxVQUF1QjtRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixLQUFLLE1BQU0sU0FBUyxJQUFJLFVBQVUsRUFBRTtZQUNoQyxJQUFJO2dCQUNBLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDM0I7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDUixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM1QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtvQkFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQztvQkFDakQsT0FBTyxVQUFVLENBQUM7aUJBQ3JCO2FBQ0o7U0FDSjtRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7SUFFTyxLQUFLLENBQUMsT0FBZTtRQUN6QixNQUFNLElBQUksS0FBSyxDQUFDLG9CQUFvQixPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTSxtQkFBbUIsQ0FBQyxJQUFxQjtRQUM1QyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSxjQUFjLENBQUMsSUFBZ0I7UUFDbEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM3QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sWUFBWSxDQUFDLElBQWM7UUFDOUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxrREFBSyxFQUFFLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksRUFBRTtZQUMzQixLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDM0M7UUFDRCxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNqQixLQUFhLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQzFDO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDM0MsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVNLGlCQUFpQixDQUFDLElBQW1CO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTSxnQkFBZ0IsQ0FBQyxJQUFrQjtRQUN0QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxzREFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzlDLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTSxhQUFhLENBQUMsSUFBZTtRQUNoQyxNQUFNLE1BQU0sR0FBVyxFQUFFLENBQUM7UUFDMUIsS0FBSyxNQUFNLFVBQVUsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsT0FBTyxJQUFJLGlEQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVNLGVBQWUsQ0FBQyxJQUFpQjtRQUNwQyxPQUFPLElBQUksc0RBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVPLGFBQWEsQ0FBQyxNQUFjO1FBQ2hDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsMkJBQTJCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNsRTtRQUNELElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixLQUFLLE1BQU0sU0FBUyxJQUFJLFVBQVUsRUFBRTtZQUNoQyxNQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNoRDtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFTSxpQkFBaUIsQ0FBQyxJQUFtQjtRQUN4QyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsRUFBRTtZQUMxRSxJQUFJLFdBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFO2dCQUN6QyxXQUFXLElBQUksR0FBRyxDQUFDO2FBQ3RCO1lBQ0QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLHNEQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVNLGNBQWMsQ0FBQyxJQUFnQjtRQUNsQzs7VUFFRSxDQUFDLE9BQU8sSUFBSSxrREFBSyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVNLGVBQWUsQ0FBQyxJQUFpQjtRQUNwQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzQyxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRU0sZUFBZSxDQUFDLElBQWlCO1FBQ3BDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDeEIsS0FBSyxnREFBUyxDQUFDLEtBQUssQ0FBQztZQUNyQixLQUFLLGdEQUFTLENBQUMsVUFBVTtnQkFDckIsT0FBTyxJQUFJLHNEQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakQsS0FBSyxnREFBUyxDQUFDLEtBQUssQ0FBQztZQUNyQixLQUFLLGdEQUFTLENBQUMsVUFBVTtnQkFDckIsT0FBTyxJQUFJLHNEQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakQsS0FBSyxnREFBUyxDQUFDLElBQUksQ0FBQztZQUNwQixLQUFLLGdEQUFTLENBQUMsU0FBUztnQkFDcEIsT0FBTyxJQUFJLHNEQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakQsS0FBSyxnREFBUyxDQUFDLE9BQU8sQ0FBQztZQUN2QixLQUFLLGdEQUFTLENBQUMsWUFBWTtnQkFDdkIsT0FBTyxJQUFJLHNEQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakQsS0FBSyxnREFBUyxDQUFDLElBQUksQ0FBQztZQUNwQixLQUFLLGdEQUFTLENBQUMsU0FBUztnQkFDcEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFO29CQUNyQyxPQUFPLElBQUksc0RBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDaEQ7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFO29CQUNyQyxPQUFPLElBQUksc0RBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDaEQ7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFO29CQUNqQyxPQUFPLElBQUksaURBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDcEQ7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksS0FBSyxDQUFDLFlBQVksRUFBRSxFQUFFO29CQUM3QyxPQUFPLElBQUksNkRBQVcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3BFO2dCQUNELE9BQU8sSUFBSSxzREFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZFLEtBQUssZ0RBQVMsQ0FBQyxJQUFJO2dCQUNmLE9BQU8sSUFBSSxzREFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pELEtBQUssZ0RBQVMsQ0FBQyxLQUFLO2dCQUNoQixPQUFPLElBQUksc0RBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqRCxLQUFLLGdEQUFTLENBQUMsT0FBTztnQkFDbEIsT0FBTyxJQUFJLHVEQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEQsS0FBSyxnREFBUyxDQUFDLFlBQVk7Z0JBQ3ZCLE9BQU8sSUFBSSx1REFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25ELEtBQUssZ0RBQVMsQ0FBQyxJQUFJO2dCQUNmLE9BQU8sSUFBSSx1REFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xELEtBQUssZ0RBQVMsQ0FBQyxTQUFTO2dCQUNwQixPQUFPLElBQUksdURBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuRCxLQUFLLGdEQUFTLENBQUMsVUFBVTtnQkFDckIsT0FBTyxJQUFJLHVEQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEQsS0FBSyxnREFBUyxDQUFDLFNBQVM7Z0JBQ3BCLE9BQU8sSUFBSSx1REFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BEO2dCQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN2RCxPQUFPLElBQUksa0RBQUssRUFBRSxDQUFDLENBQUMsY0FBYztTQUN6QztJQUNMLENBQUM7SUFFTSxnQkFBZ0IsQ0FBQyxJQUFrQjtRQUN0QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0QyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLGdEQUFTLENBQUMsRUFBRSxFQUFFO1lBQ3JDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUNqQixPQUFPLElBQUksQ0FBQzthQUNmO1NBQ0o7YUFBTTtZQUNILElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUU7Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVNLGdCQUFnQixDQUFDLElBQWtCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsSCxDQUFDO0lBRU0sdUJBQXVCLENBQUMsSUFBeUI7UUFDcEQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLGlCQUFpQixDQUFDLElBQW1CO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVNLGdCQUFnQixDQUFDLElBQWtCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRU0sY0FBYyxDQUFDLElBQWdCO1FBQ2xDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDeEIsS0FBSyxnREFBUyxDQUFDLEtBQUs7Z0JBQ2hCLE9BQU8sSUFBSSxzREFBTyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzdDLEtBQUssZ0RBQVMsQ0FBQyxJQUFJO2dCQUNmLE9BQU8sSUFBSSx1REFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDM0MsS0FBSyxnREFBUyxDQUFDLFFBQVEsQ0FBQztZQUN4QixLQUFLLGdEQUFTLENBQUMsVUFBVTtnQkFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRTtvQkFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyw2REFBNkQsMERBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxrQkFBa0IsQ0FBQyxDQUFDO2lCQUM1SDtnQkFDRCxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssZ0RBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUYsSUFBSSxJQUFJLENBQUMsS0FBSyxZQUFZLDBEQUFhLEVBQUU7b0JBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLHNEQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDcEU7cUJBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxZQUFZLHFEQUFRLEVBQUU7b0JBQ3ZDLE1BQU0sTUFBTSxHQUFHLElBQUkscURBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLHlEQUFZLENBQUMsSUFBSSxzREFBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzlILElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3pCO3FCQUFNO29CQUNILElBQUksQ0FBQyxLQUFLLENBQUMsNERBQTRELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2lCQUN4RjtnQkFDRCxPQUFPLElBQUksc0RBQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqQztnQkFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7Z0JBQ3ZELE9BQU8sSUFBSSxrREFBSyxFQUFFLENBQUMsQ0FBQyx3QkFBd0I7U0FDbkQ7SUFDTCxDQUFDO0lBRU0sWUFBWSxDQUFDLFVBQXVCLEVBQUUsU0FBZ0I7UUFDekQsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUN2QixLQUFLLE1BQU0sU0FBUyxJQUFJLFVBQVUsRUFBRTtZQUNoQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztRQUMxQixPQUFPLElBQUksa0RBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU0sY0FBYyxDQUFDLElBQWdCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksNENBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRU0sV0FBVyxDQUFDLElBQWE7UUFDNUIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUMxQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3RDO2FBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUMvQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztJQUVNLGNBQWMsQ0FBQyxJQUFnQjtRQUNsQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQzdDLElBQUk7Z0JBQ0EsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0I7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDUixJQUFJLENBQUMsWUFBWSwrQ0FBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssMERBQVEsQ0FBQyxLQUFLLEVBQUU7b0JBQ2hELE1BQU07aUJBQ1Q7cUJBQU0sSUFBSSxDQUFDLFlBQVksK0NBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLDBEQUFRLENBQUMsUUFBUSxFQUFFO29CQUMxRCxTQUFTO2lCQUNaO3FCQUFNO29CQUNILE1BQU0sQ0FBQyxDQUFDO2lCQUNYO2FBQ0o7U0FDSjtRQUNELE9BQU8sSUFBSSxrREFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTSxnQkFBZ0IsQ0FBQyxJQUFrQjtRQUN0QyxHQUFHO1lBQ0MsSUFBSTtnQkFDQSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMzQjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNSLElBQUksQ0FBQyxZQUFZLCtDQUFJLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSywwREFBUSxDQUFDLEtBQUssRUFBRTtvQkFDaEQsTUFBTTtpQkFDVDtxQkFBTSxJQUFJLENBQUMsWUFBWSwrQ0FBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssMERBQVEsQ0FBQyxRQUFRLEVBQUU7b0JBQzFELFNBQVM7aUJBQ1o7cUJBQU07b0JBQ0gsTUFBTSxDQUFDLENBQUM7aUJBQ1g7YUFDSjtTQUNKLFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7UUFDbkQsT0FBTyxJQUFJLGtEQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLGFBQWEsQ0FBQyxJQUFlO1FBQ2hDLDhCQUE4QjtRQUM5QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLG9CQUFvQixDQUFDLENBQUM7U0FDN0M7UUFFRCw2QkFBNkI7UUFDN0IsSUFBSSxJQUFJLEdBQVEsSUFBSSxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sWUFBWSxxREFBUSxFQUFFO1lBQ2pDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLFlBQVksc0RBQVMsRUFBRTtnQkFDekMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDN0M7aUJBQU07Z0JBQ0gsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM1QztTQUNKO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUMzQixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUNwQjtRQUVELDhCQUE4QjtRQUM5QixNQUFNLElBQUksR0FBRyxFQUFFLENBQUM7UUFDaEIsS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQ3RDO1FBRUQsNkJBQTZCO1FBQzdCLE1BQU0sSUFBSSxHQUFHLE1BQW1CLENBQUM7UUFDakMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNqRCxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sTUFBTSwyQ0FBMkMsSUFBSSxDQUFDLEtBQUssWUFBWSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUN4SSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFO29CQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksa0RBQUssRUFBRSxDQUFDLENBQUM7aUJBQzFCO2FBQ0o7U0FDSjtRQUNELG1CQUFtQjtRQUNuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sYUFBYSxDQUFDLElBQWU7UUFDaEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO1NBQ2pFO1FBRUQsTUFBTSxLQUFLLEdBQVksSUFBZ0IsQ0FBQyxXQUFxQixDQUFDO1FBQzlELE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDNUIsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxHQUFHLHdDQUF3QyxDQUFDLENBQUM7U0FDM0U7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRU0sWUFBWSxDQUFDLElBQWM7UUFDOUIsTUFBTSxPQUFPLEdBQUksSUFBSSxDQUFDLEtBQW1CLENBQUM7UUFDMUMscUNBQXFDO1FBQ3JDLE1BQU0sS0FBSyxHQUFXLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBVyxDQUFDO1FBRTlELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssOERBQThELENBQUMsQ0FBQztTQUN2RjtRQUNELGFBQWE7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLHNEQUFPLENBQUMsSUFBSSxHQUFHLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3QyxrQ0FBa0M7UUFDbEMsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLHNEQUFPLENBQUMsYUFBYSxDQUFDLENBQWMsQ0FBQztRQUN2RSxJQUFJLFdBQVcsQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUMxQjs7Ozs7O2NBTUU7WUFDSCxJQUFJLENBQUMsUUFBUSxDQUNULElBQUksc0RBQVMsQ0FDVCxJQUFJLHFEQUFRLENBQUMsSUFBSSx5REFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxxREFBUSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxnREFBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQ2xJLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUM1QixPQUFPLENBQUMsSUFBSSxFQUNaLE1BQU0sRUFDTixJQUFJLENBQUMsSUFBSSxDQUNYLENBQ0osQ0FBQztTQUNMO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVNLG1CQUFtQixDQUFDLElBQXFCO1FBQzVDLE1BQU0sSUFBSSxHQUFHLElBQUksNkRBQVcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDeEMsS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BDLE1BQU0sR0FBRyxHQUFJLElBQUksQ0FBQyxRQUFRLENBQUUsUUFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2RCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFFLFFBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDeEI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sWUFBWSxDQUFDLElBQWM7UUFDOUIsT0FBTyxJQUFJLCtDQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sWUFBWSxDQUFDLElBQWM7UUFDOUIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxnREFBUyxDQUFDLFdBQVcsRUFBRTtZQUN4RCxPQUFPLElBQUksa0RBQUssRUFBRSxDQUFDO1NBQ3RCO1FBQ0QsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFTSxZQUFZLENBQUMsSUFBYztRQUM5QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2QixPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVNLGFBQWEsQ0FBQyxJQUFlO1FBQ2hDLE1BQU0sSUFBSSxHQUFHLElBQUkseURBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxjQUFjLENBQUMsSUFBZ0I7UUFDbEMsSUFBSSxNQUFZLENBQUM7UUFFakIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtZQUN0QixNQUFNLEdBQUcsSUFBSSxrREFBSyxFQUFFLENBQUM7U0FDeEI7YUFBTTtZQUNILE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUQ7UUFFRCxNQUFNLE9BQU8sR0FBRyxJQUFJLEdBQUcsRUFBYSxDQUFDO1FBRXJDLEtBQUssTUFBTSxNQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUkseURBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDdEU7UUFDRCxNQUFNLEtBQUssR0FBRyxJQUFJLG1EQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNDLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTSxlQUFlLENBQUMsSUFBaUI7UUFDcEMsTUFBTSxNQUFNLEdBQWMsSUFBSSxDQUFDLE1BQW1CLENBQUM7UUFDbkQsTUFBTSxJQUFJLEdBQWMsSUFBSSx5REFBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLGVBQWUsQ0FBQyxJQUFpQjtRQUNwQyxJQUFJLEtBQUssR0FBRyxJQUFJLGtEQUFLLEVBQUUsQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWixLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7UUFDRCxNQUFNLElBQUksK0NBQUksQ0FBQyxLQUFLLEVBQUUsMERBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU0sY0FBYyxDQUFDLElBQWdCO1FBQ2xDLE1BQU0sSUFBSSwrQ0FBSSxDQUFDLElBQUksRUFBRSwwREFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTSxpQkFBaUIsQ0FBQyxJQUFtQjtRQUN4QyxNQUFNLElBQUksK0NBQUksQ0FBQyxJQUFJLEVBQUUsMERBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU0sY0FBYyxDQUFDLElBQWdCO1FBQ2xDLE9BQU8sSUFBSSxvREFBTSxDQUFDLElBQUksd0RBQVUsQ0FDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQ25ELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDcEQsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGVBQWUsQ0FBQyxJQUFpQjtRQUNwQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxPQUFPLElBQUksc0RBQU8sQ0FBQywwREFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFTSxXQUFXLENBQUMsSUFBcUI7UUFDcEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsTUFBTSxLQUFLLEdBQUcsMERBQVEsQ0FBQywwREFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN0RCw4QkFBOEI7UUFDOUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUssSUFBZ0IsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDakUsT0FBTyxJQUFJLHVEQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDN0I7UUFDRCxnQkFBZ0I7UUFDaEIsSUFBSSxPQUFPLEtBQUssS0FBSyxXQUFXLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzlDLE9BQU8sSUFBSSx1REFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsWUFBWTtRQUNaLE9BQU8sSUFBSSx1REFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLG1CQUFtQixDQUFDLElBQXFCO1FBQzVDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDbEIsT0FBTyxJQUFJLHVEQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUI7UUFDRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUVwQyxtQ0FBbUM7UUFDbkMsSUFBSSxTQUFTLENBQUMsV0FBVyxFQUFFLEtBQUssUUFBUSxFQUFFO1lBQ3RDLE9BQU8sSUFBSSx1REFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdCO1FBQ0QsTUFBTSxRQUFRLEdBQUcsSUFBZSxDQUFDO1FBQ2pDLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxXQUFxQixDQUFDO1FBQ2pELElBQUksV0FBVyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDaEMsT0FBTyxJQUFJLHVEQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDN0I7UUFDRCxPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNqQyxXQUFXLEdBQUcsV0FBVyxDQUFDLE1BQWdCLENBQUM7WUFDM0MsSUFBSSxXQUFXLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtnQkFDaEMsT0FBTyxJQUFJLHVEQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDN0I7U0FDSjtRQUNELE9BQU8sSUFBSSx1REFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRS9CLENBQUM7SUFFTSxhQUFhLENBQUMsSUFBZTtRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixPQUFPLElBQUksa0RBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxXQUFXLENBQUMsSUFBYTtRQUM1QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUNyQixPQUFPLElBQUksdURBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNwRDtRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ2pCLE9BQU8sSUFBSSx1REFBUSxDQUFDLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssV0FBVyxDQUFDLENBQUM7U0FDdkU7UUFDRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNuQixPQUFPLElBQUksdURBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN6RDtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsdUNBQXVDLDBEQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNsRyxPQUFPLElBQUksa0RBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Q0FFSjs7Ozs7Ozs7Ozs7OztBQ2prQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ0Q7QUFFQztBQUNBO0FBQ047QUFDSTtBQUNGO0FBR2hDLE1BQU0sTUFBTTtJQUFuQjtRQUlXLGVBQVUsR0FBRyxDQUFDLENBQUM7SUFxckIxQixDQUFDO0lBbnJCVSxLQUFLLENBQUMsTUFBZTtRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixNQUFNLFVBQVUsR0FBZ0IsRUFBRSxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDaEIsSUFBSTtnQkFDQSxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO2FBQ3ZDO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLFlBQVksbURBQU0sRUFBRTtvQkFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztpQkFDdEU7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO3dCQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO3dCQUMvQyxPQUFPLFVBQVUsQ0FBQztxQkFDckI7aUJBQ0o7Z0JBQ0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3RCO1NBQ0o7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDO0lBRU8sS0FBSyxDQUFDLEdBQUcsS0FBa0I7UUFDL0IsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUU7WUFDdEIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNsQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2YsT0FBTyxJQUFJLENBQUM7YUFDZjtTQUNKO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVPLE9BQU87UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2xCO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVPLElBQUk7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTyxRQUFRO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVPLEtBQUssQ0FBQyxJQUFlO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVPLEdBQUc7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsZ0RBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU8sT0FBTyxDQUFDLElBQWUsRUFBRSxPQUFlO1FBQzVDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNsQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN6QjtRQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsT0FBTyxHQUFHLHVCQUF1QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBRU8sY0FBYztRQUNsQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGdEQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdEQUFTLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDakMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGdEQUFTLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0RBQVMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDekM7U0FDSjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTyxLQUFLLENBQUMsS0FBWSxFQUFFLE9BQWU7UUFDdkMsTUFBTSxJQUFJLG1EQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTyxPQUFPLENBQUMsT0FBZTtRQUMzQixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM5QixPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLElBQUksdUJBQXVCLEtBQUssQ0FBQyxNQUFNLFNBQVMsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUMzRjtJQUNMLENBQUM7SUFFTyxXQUFXO1FBQ2YsR0FBRztZQUNDLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBRTtnQkFDdEIsS0FBSyxnREFBUyxDQUFDLEtBQUssQ0FBQztnQkFDckIsS0FBSyxnREFBUyxDQUFDLFFBQVEsQ0FBQztnQkFDeEIsS0FBSyxnREFBUyxDQUFDLEdBQUcsQ0FBQztnQkFDbkIsS0FBSyxnREFBUyxDQUFDLEdBQUcsQ0FBQztnQkFDbkIsS0FBSyxnREFBUyxDQUFDLEVBQUUsQ0FBQztnQkFDbEIsS0FBSyxnREFBUyxDQUFDLEtBQUssQ0FBQztnQkFDckIsS0FBSyxnREFBUyxDQUFDLEVBQUUsQ0FBQztnQkFDbEIsS0FBSyxnREFBUyxDQUFDLEtBQUssQ0FBQztnQkFDckIsS0FBSyxnREFBUyxDQUFDLE1BQU07b0JBQ2pCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDZixPQUFPO2FBQ2Q7WUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEtBQUssZ0RBQVMsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksS0FBSyxnREFBUyxDQUFDLFVBQVUsRUFBRTtnQkFDdkYsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNmLE9BQU87YUFDVjtZQUNELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNsQixRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFO0lBQzFCLENBQUM7SUFFTyxXQUFXO1FBQ2YsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdEQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUNsQztRQUNELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2hDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMzQztRQUNELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ2hDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVPLGdCQUFnQjtRQUNwQixNQUFNLElBQUksR0FBVSxJQUFJLENBQUMsT0FBTyxDQUFDLGdEQUFTLENBQUMsVUFBVSxFQUFFLHVCQUF1QixDQUFDLENBQUM7UUFDaEYsSUFBSSxNQUFNLEdBQVUsSUFBSSxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQy9CLE1BQU0sR0FBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGdEQUFTLENBQUMsVUFBVSxFQUFFLHdCQUF3QixDQUFDLENBQUM7U0FDMUU7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLGdEQUFTLENBQUMsU0FBUyxFQUFFLDBDQUEwQyxDQUFDLENBQUM7UUFDOUUsTUFBTSxPQUFPLEdBQWdCLEVBQUUsQ0FBQztRQUVoQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3JELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdEQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ3hDO1lBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDaEQ7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLGdEQUFTLENBQUMsVUFBVSxFQUFFLDZCQUE2QixJQUFJLENBQUMsT0FBTyxXQUFXLENBQUMsQ0FBQztRQUN6RixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLHFDQUFxQyxJQUFJLENBQUMsTUFBTSxjQUFjLENBQUMsQ0FBQztTQUNoRjtRQUNELE9BQU8sSUFBSSxzREFBVSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRU8sZUFBZSxDQUFDLElBQVk7UUFDaEMsTUFBTSxJQUFJLEdBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnREFBUyxDQUFDLFVBQVUsRUFBRSxjQUFjLElBQUksT0FBTyxDQUFDLENBQUM7UUFDbEYsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU8sVUFBVSxDQUFDLElBQVk7UUFDM0IsTUFBTSxNQUFNLEdBQVksRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGdEQUFTLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDbkMsR0FBRztnQkFDQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksR0FBRyxFQUFFO29CQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO2lCQUMxRDtnQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0RBQVMsQ0FBQyxVQUFVLEVBQUUsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO2FBQ2hGLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1NBQ3pDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnREFBUyxDQUFDLFVBQVUsRUFBRSx3Q0FBd0MsSUFBSSxhQUFhLENBQUMsQ0FBQztRQUM5RixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRU8sY0FBYyxDQUFDLElBQVcsRUFBRSxJQUFZO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0RBQVMsQ0FBQyxTQUFTLEVBQUUsdUNBQXVDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDakYsTUFBTSxNQUFNLEdBQVksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU5QyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0RBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNqQyxNQUFNLElBQUksR0FBZ0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3ZDLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxnREFBUyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ3pELElBQUksQ0FBQyxPQUFPLENBQUMsd0NBQXdDLElBQUksQ0FBQyxNQUFNLGNBQWMsQ0FBQyxDQUFDO2FBQ25GO1lBQ0QsT0FBTyxJQUFJLHFEQUFTLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZEO1FBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdEQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0IsTUFBTSxJQUFJLEdBQWdCLEVBQUUsQ0FBQztZQUM3QixJQUFJLEtBQWdCLENBQUM7WUFDckIsTUFBTSxPQUFPLEdBQVUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGdEQUFTLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ2xDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDN0I7WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLGdEQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLHVEQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN6RCxPQUFPLElBQUkscURBQVMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkQ7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLGdEQUFTLENBQUMsU0FBUyxFQUFFLHFCQUFxQixJQUFJLE9BQU8sQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFTyxjQUFjO1FBQ2xCLE1BQU0sSUFBSSxHQUFVLElBQUksQ0FBQyxPQUFPLENBQUMsZ0RBQVMsQ0FBQyxVQUFVLEVBQUUsOENBQThDLENBQUMsQ0FBQztRQUN2RyxJQUFJLFdBQVcsR0FBZSxJQUFJLENBQUM7UUFDbkMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdEQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0IsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsZ0RBQVMsQ0FBQyxTQUFTLEVBQUUscURBQXFELENBQUMsQ0FBQztRQUV6RixPQUFPLElBQUksb0RBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVPLFNBQVM7UUFDYixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0RBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM3QjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzdCLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdEQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDMUIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUNsQztRQUNELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzdCLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdEQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDM0IsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDOUI7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0RBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNqQyxPQUFPLElBQUksc0RBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdEO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdEQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDOUIsT0FBTyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDakM7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0RBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM3QixPQUFPLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUNoQztRQUNELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2hDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDbkM7UUFDRCxPQUFPLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFTyxXQUFXO1FBQ2YsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0RBQVMsQ0FBQyxTQUFTLEVBQUUscURBQXFELENBQUMsQ0FBQztRQUN6RixNQUFNLFNBQVMsR0FBYyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnREFBUyxDQUFDLFVBQVUsRUFBRSwrREFBK0QsQ0FBQyxDQUFDO1FBQ3BHLE1BQU0sUUFBUSxHQUFjLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM3QyxJQUFJLFFBQVEsR0FBZSxJQUFJLENBQUM7UUFDaEMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdEQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDNUIsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUMvQjtRQUNELE9BQU8sSUFBSSxtREFBTyxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRU8sY0FBYztRQUNsQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnREFBUyxDQUFDLFNBQVMsRUFBRSx5REFBeUQsQ0FBQyxDQUFDO1FBQzdGLE1BQU0sU0FBUyxHQUFjLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdEQUFTLENBQUMsVUFBVSxFQUFFLHdEQUF3RCxDQUFDLENBQUM7UUFDN0YsTUFBTSxJQUFJLEdBQWMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxzREFBVSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTyxZQUFZO1FBQ2hCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdEQUFTLENBQUMsU0FBUyxFQUFFLHVEQUF1RCxDQUFDLENBQUM7UUFFM0YsSUFBSSxXQUFzQixDQUFDO1FBQzNCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2pDLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDdEI7YUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0RBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNsQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZDO2FBQU07WUFDSCxXQUFXLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDNUM7UUFDRCxJQUFJLFNBQW9CLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0RBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNsQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnREFBUyxDQUFDLFNBQVMsRUFBRSwrREFBK0QsQ0FBQyxDQUFDO1FBQ25HLElBQUksU0FBb0IsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ25DLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDakM7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLGdEQUFTLENBQUMsVUFBVSxFQUFFLG1FQUFtRSxDQUFDLENBQUM7UUFDeEcsSUFBSSxJQUFJLEdBQWMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3ZDLElBQUksU0FBUyxLQUFLLElBQUksRUFBRTtZQUNwQixJQUFJLEdBQUcsSUFBSSxzREFBVSxDQUFDO2dCQUNsQixJQUFJO2dCQUNKLElBQUksMkRBQWUsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQzthQUMvQyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQjtRQUNELElBQUksU0FBUyxLQUFLLElBQUksRUFBRTtZQUNwQixTQUFTLEdBQUcsSUFBSSx5REFBWSxDQUFDLElBQUksdURBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEU7UUFDRCxJQUFJLEdBQUcsSUFBSSxzREFBVSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JELElBQUksV0FBVyxLQUFLLElBQUksRUFBRTtZQUN0QixJQUFJLEdBQUcsSUFBSSxzREFBVSxDQUFDO2dCQUNsQixXQUFXO2dCQUNYLElBQUk7YUFDUCxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxnQkFBZ0I7UUFDcEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hDLE1BQU0sSUFBSSxHQUFjLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLGdEQUFTLENBQUMsS0FBSyxFQUFFLG1EQUFtRCxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnREFBUyxDQUFDLFNBQVMsRUFBRSx1REFBdUQsQ0FBQyxDQUFDO1FBQzNGLE1BQU0sU0FBUyxHQUFjLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdEQUFTLENBQUMsVUFBVSxFQUFFLHdEQUF3RCxDQUFDLENBQUM7UUFDN0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnREFBUyxDQUFDLFNBQVMsRUFBRSxtREFBbUQsQ0FBQyxDQUFDO1FBQ3ZGLE9BQU8sSUFBSSx3REFBWSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFTyxjQUFjO1FBQ2xCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQyxNQUFNLEtBQUssR0FBYyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnREFBUyxDQUFDLFNBQVMsRUFBRSx5Q0FBeUMsQ0FBQyxDQUFDO1FBQzdFLE9BQU8sSUFBSSxzREFBVSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVPLGVBQWU7UUFDbkIsTUFBTSxPQUFPLEdBQVUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUVqQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2xDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDN0I7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLGdEQUFTLENBQUMsU0FBUyxFQUFFLDhDQUE4QyxDQUFDLENBQUM7UUFDbEYsT0FBTyxJQUFJLHVEQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVPLGNBQWM7UUFDbEIsTUFBTSxPQUFPLEdBQVUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0RBQVMsQ0FBQyxTQUFTLEVBQUUsNkNBQTZDLENBQUMsQ0FBQztRQUNqRixPQUFPLElBQUksc0RBQVUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFTyxpQkFBaUI7UUFDckIsTUFBTSxPQUFPLEdBQVUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0RBQVMsQ0FBQyxTQUFTLEVBQUUsZ0RBQWdELENBQUMsQ0FBQztRQUNwRixPQUFPLElBQUkseURBQWEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFTyxLQUFLO1FBQ1QsTUFBTSxVQUFVLEdBQWdCLEVBQUUsQ0FBQztRQUNuQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3JELFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDdkM7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLGdEQUFTLENBQUMsVUFBVSxFQUFFLGdEQUFnRCxDQUFDLENBQUM7UUFDckYsT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQztJQUVPLG1CQUFtQjtRQUN2QixNQUFNLFVBQVUsR0FBYyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnREFBUyxDQUFDLFNBQVMsRUFBRSxnQ0FBZ0MsVUFBVSxhQUFhLENBQUMsQ0FBQztRQUMzRixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0RBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNqQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEtBQUssQ0FBQyxJQUFJLHVCQUF1QixLQUFLLENBQUMsTUFBTSxnREFBZ0QsQ0FBQyxDQUFDO1lBQ3RILHlCQUF5QjtZQUN6QiwyQkFBMkI7WUFDM0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGdEQUFTLENBQUMsU0FBUyxDQUFDLEVBQUMsR0FBRztZQUFBLENBQUM7U0FDOUM7UUFDRCxPQUFPLElBQUksMkRBQWUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFTyxVQUFVO1FBQ2QsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVPLFVBQVU7UUFDZCxNQUFNLElBQUksR0FBYyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdkMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdEQUFTLENBQUMsS0FBSyxFQUFFLGdEQUFTLENBQUMsU0FBUyxFQUMvQyxnREFBUyxDQUFDLFVBQVUsRUFBRSxnREFBUyxDQUFDLFNBQVMsRUFBRSxnREFBUyxDQUFDLFVBQVUsQ0FBQyxFQUNsRTtZQUNFLE1BQU0sUUFBUSxHQUFVLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN4QyxJQUFJLEtBQUssR0FBYyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDekMsSUFBSSxJQUFJLFlBQVksMERBQWEsRUFBRTtnQkFDL0IsTUFBTSxJQUFJLEdBQVUsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDOUIsSUFBSSxRQUFRLENBQUMsSUFBSSxLQUFLLGdEQUFTLENBQUMsS0FBSyxFQUFFO29CQUNuQyxLQUFLLEdBQUcsSUFBSSx3REFBVyxDQUFDLElBQUksMERBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUMvRjtnQkFDRCxPQUFPLElBQUksd0RBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNsRDtpQkFBTSxJQUFJLElBQUksWUFBWSxxREFBUSxFQUFFO2dCQUNqQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEtBQUssZ0RBQVMsQ0FBQyxLQUFLLEVBQUU7b0JBQ25DLEtBQUssR0FBRyxJQUFJLHdEQUFXLENBQUMsSUFBSSxxREFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDdEg7Z0JBQ0QsT0FBTyxJQUFJLHFEQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEU7WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSw4Q0FBOEMsQ0FBQyxDQUFDO1NBQ3hFO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVPLE9BQU87UUFDWCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdEQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDaEMsTUFBTSxRQUFRLEdBQWMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0RBQVMsQ0FBQyxLQUFLLEVBQUUseUNBQXlDLENBQUMsQ0FBQztZQUN6RSxNQUFNLFFBQVEsR0FBYyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDM0MsT0FBTyxJQUFJLHlEQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hFO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVPLGNBQWM7UUFDbEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzlCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDeEMsTUFBTSxTQUFTLEdBQWMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25ELE9BQU8sSUFBSSxnRUFBbUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5RDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxTQUFTO1FBQ2IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQzdCLE1BQU0sUUFBUSxHQUFVLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN4QyxNQUFNLEtBQUssR0FBYyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDM0MsSUFBSSxHQUFHLElBQUkseURBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakU7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU8sVUFBVTtRQUNkLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsZ0RBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM5QixNQUFNLFFBQVEsR0FBVSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDeEMsTUFBTSxLQUFLLEdBQWMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3pDLElBQUksR0FBRyxJQUFJLHlEQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pFO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVPLFFBQVE7UUFDWixJQUFJLElBQUksR0FBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDOUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUNiLGdEQUFTLENBQUMsU0FBUyxFQUFFLGdEQUFTLENBQUMsVUFBVSxDQUFDLEVBQzVDO1lBQ0UsTUFBTSxRQUFRLEdBQVUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3hDLE1BQU0sS0FBSyxHQUFjLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUMzQyxJQUFJLEdBQUcsSUFBSSx3REFBVyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoRTtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxVQUFVO1FBQ2QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLEVBQUUsRUFBRSxnREFBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ25ELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNqQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0RBQVMsQ0FBQyxVQUFVLEVBQUUsZ0RBQVMsQ0FBQyxLQUFLLEVBQUUsZ0RBQVMsQ0FBQyxRQUFRLEVBQUUsZ0RBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdkYsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUM5QixJQUFJLFFBQVEsQ0FBQyxJQUFJLEtBQUssZ0RBQVMsQ0FBQyxVQUFVLEVBQUU7b0JBQ3hDLElBQUksR0FBRyxJQUFJLDREQUFlLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzFEO3FCQUFNO29CQUNILElBQUksR0FBRyxJQUFJLG9EQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2xEO2FBQ0o7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsNkRBQTZELENBQUMsQ0FBQzthQUM5RjtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVPLEVBQUU7UUFDTixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGdEQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDN0IsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2pDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNqQyxJQUFJLEdBQUcsSUFBSSxvREFBTyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVPLFVBQVU7UUFDZCxJQUFJLElBQUksR0FBYyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGdEQUFTLENBQUMsT0FBTyxFQUFFLGdEQUFTLENBQUMsWUFBWSxFQUFFLGdEQUFTLENBQUMsSUFBSSxFQUFFLGdEQUFTLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDL0YsTUFBTSxRQUFRLEdBQVUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3hDLE1BQU0sS0FBSyxHQUFjLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN6QyxJQUFJLEdBQUcsSUFBSSx3REFBVyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoRTtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxRQUFRO1FBQ1osSUFBSSxJQUFJLEdBQWMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLEtBQUssRUFBRSxnREFBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hELE1BQU0sUUFBUSxHQUFVLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN4QyxNQUFNLEtBQUssR0FBYyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDeEMsSUFBSSxHQUFHLElBQUksd0RBQVcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEU7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU8sT0FBTztRQUNYLElBQUksSUFBSSxHQUFjLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM1QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsZ0RBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNsQyxNQUFNLFFBQVEsR0FBVSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDeEMsTUFBTSxLQUFLLEdBQWMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQy9DLElBQUksR0FBRyxJQUFJLHdEQUFXLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hFO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVPLGNBQWM7UUFDbEIsSUFBSSxJQUFJLEdBQWMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLEtBQUssRUFBRSxnREFBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hELE1BQU0sUUFBUSxHQUFVLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN4QyxNQUFNLEtBQUssR0FBYyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDdkMsSUFBSSxHQUFHLElBQUksd0RBQVcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEU7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU8sTUFBTTtRQUNWLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzlCLE1BQU0sUUFBUSxHQUFVLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN4QyxNQUFNLEtBQUssR0FBYyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDdkMsT0FBTyxJQUFJLHdEQUFXLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoRDtRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTyxLQUFLO1FBQ1QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdEQUFTLENBQUMsS0FBSyxFQUFFLGdEQUFTLENBQUMsSUFBSSxFQUFFLGdEQUFTLENBQUMsTUFBTSxFQUFFLGdEQUFTLENBQUMsUUFBUSxFQUFFLGdEQUFTLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDekcsTUFBTSxRQUFRLEdBQVUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3hDLE1BQU0sS0FBSyxHQUFjLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN0QyxPQUFPLElBQUksdURBQVUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6RDtRQUNELE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTyxVQUFVO1FBQ2QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdEQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDM0IsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hDLE1BQU0sU0FBUyxHQUFjLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN6QyxPQUFPLElBQUkscURBQVEsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBRWhEO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVPLElBQUk7UUFDUixJQUFJLElBQUksR0FBYyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDckMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLEdBQUk7WUFDQSxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ2pCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUNqQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNoQixHQUFHO29CQUNDLE1BQU0sSUFBSSxHQUFnQixFQUFFLENBQUM7b0JBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGdEQUFTLENBQUMsVUFBVSxDQUFDLEVBQUU7d0JBQ25DLEdBQUc7NEJBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQzt5QkFDaEMsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLGdEQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7cUJBQ3pDO29CQUNELE1BQU0sS0FBSyxHQUFVLElBQUksQ0FBQyxPQUFPLENBQUMsZ0RBQVMsQ0FBQyxVQUFVLEVBQUUsOEJBQThCLENBQUMsQ0FBQztvQkFDeEYsSUFBSSxHQUFHLElBQUksc0RBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM3RCxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsZ0RBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRTthQUM3QztZQUNELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLEdBQUcsRUFBRSxnREFBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUNsRCxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNoQixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDN0M7WUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0RBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDbkMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDaEIsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQ2pEO1NBQ0osUUFBUSxRQUFRLEVBQUU7UUFDbkIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVPLE1BQU0sQ0FBQyxJQUFlLEVBQUUsUUFBZTtRQUMzQyxNQUFNLElBQUksR0FBVSxJQUFJLENBQUMsT0FBTyxDQUFDLGdEQUFTLENBQUMsVUFBVSxFQUFFLGdDQUFnQyxDQUFDLENBQUM7UUFDekYsTUFBTSxHQUFHLEdBQWEsSUFBSSxxREFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEQsT0FBTyxJQUFJLHFEQUFRLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRU8sVUFBVSxDQUFDLElBQWUsRUFBRSxRQUFlO1FBQy9DLElBQUksR0FBRyxHQUFjLElBQUksQ0FBQztRQUMxQixJQUFJLEdBQUcsR0FBYyxJQUFJLENBQUM7UUFDMUIsSUFBSSxJQUFJLEdBQWMsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGdEQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDOUIsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUMzQjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzdELEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDM0I7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0RBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0RBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUNwRSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnREFBUyxDQUFDLFlBQVksRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtZQUNyQixNQUFNLEtBQUssR0FBRyxJQUFJLHVEQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVELE9BQU8sSUFBSSxxREFBUSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEU7UUFDRCxPQUFPLElBQUkscURBQVEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFTyxPQUFPO1FBQ1gsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdEQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0IsT0FBTyxJQUFJLHlEQUFZLENBQUMsSUFBSSx1REFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0RTtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzVCLE9BQU8sSUFBSSx5REFBWSxDQUFDLElBQUksdURBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckU7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0RBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1QixPQUFPLElBQUkseURBQVksQ0FBQyxJQUFJLGlEQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUQ7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0RBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM5QixPQUFPLElBQUkseURBQVksQ0FBQyxJQUFJLHFEQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2RjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzlCLE9BQU8sSUFBSSx3REFBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pFO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdEQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDaEMsT0FBTyxJQUFJLDBEQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDM0U7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0RBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM3QixPQUFPLElBQUksdURBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4RTtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzVCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM5QixLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUN0QixPQUFPLElBQUksc0RBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdEQUFTLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDbEMsTUFBTSxVQUFVLEdBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3BDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNoQyxPQUFPLElBQUkseURBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMzRDtZQUNELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUNsQyxPQUFPLElBQUkseURBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVEO1lBQ0QsT0FBTyxJQUFJLDBEQUFhLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6RDtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2pDLE1BQU0sSUFBSSxHQUFjLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdEQUFTLENBQUMsVUFBVSxFQUFFLCtCQUErQixDQUFDLENBQUM7WUFDcEUsT0FBTyxJQUFJLDBEQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM3QztRQUNELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2pDLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdEQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDaEMsTUFBTSxLQUFLLEdBQVUsSUFBSSw0Q0FBSyxDQUFDLGdEQUFTLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEcsTUFBTSxNQUFNLEdBQWMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDL0QsT0FBTyxJQUFJLHdEQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5QztRQUNELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ25DLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdEQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDNUIsTUFBTSxJQUFJLEdBQWMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQzFDLE9BQU8sSUFBSSxzREFBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEQ7UUFFRCxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLDBDQUEwQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUMvRixvQkFBb0I7UUFDcEIsT0FBTyxJQUFJLHlEQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSxVQUFVO1FBQ2IsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2xDLE9BQU8sSUFBSSw0REFBZSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEQ7UUFDRCxNQUFNLFVBQVUsR0FBZSxFQUFFLENBQUM7UUFDbEMsR0FBRztZQUNDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLE1BQU0sRUFBRSxnREFBUyxDQUFDLFVBQVUsRUFBRSxnREFBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUN0RSxNQUFNLEdBQUcsR0FBVSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsZ0RBQVMsQ0FBQyxLQUFLLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztnQkFDakUsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNoQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUkscURBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxxREFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3JGO2lCQUFNO2dCQUNILElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLG9GQUFvRixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQzthQUNySTtTQUNKLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxnREFBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0RBQVMsQ0FBQyxVQUFVLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztRQUV4RSxPQUFPLElBQUksNERBQWUsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFTyxJQUFJO1FBQ1IsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0RBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUNwQyxPQUFPLElBQUksc0RBQVMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsR0FBRztZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7U0FDbEMsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLGdEQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnREFBUyxDQUFDLFlBQVksRUFBRSxzQ0FBc0MsQ0FBQyxDQUFDO1FBRTdFLE9BQU8sSUFBSSxzREFBUyxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUVKOzs7Ozs7Ozs7Ozs7O0FDbnNCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkM7QUFDUjtBQUNGO0FBQ1U7QUFDRjtBQUNOO0FBQ0k7QUFDQTtBQUNKO0FBQ0c7QUFFakMsU0FBUyxvQkFBb0IsQ0FBQyxNQUFjLEVBQUUsS0FBYSxFQUFFLElBQWM7SUFDOUUsT0FBTyxJQUFJLHlEQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLElBQVUsRUFBRSxJQUFZLEVBQVEsRUFBRTtRQUNuRSxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBUyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ2hELFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSyx5REFBUSxDQUFDLE9BQU87Z0JBQ2pCLE9BQU8sSUFBSSx1REFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hDLEtBQUsseURBQVEsQ0FBQyxNQUFNO2dCQUNoQixPQUFPLElBQUkscURBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQixLQUFLLHlEQUFRLENBQUMsTUFBTTtnQkFDaEIsT0FBTyxJQUFJLHFEQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0IsS0FBSyx5REFBUSxDQUFDLElBQUk7Z0JBQ2QsT0FBTyxJQUFJLGlEQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0IsS0FBSyx5REFBUSxDQUFDLElBQUk7Z0JBQ2QsT0FBTyxJQUFJLGlEQUFLLEVBQUUsQ0FBQztZQUN2QjtnQkFDSSxPQUFPLElBQUksK0NBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMvQjtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVNLFNBQVMsd0JBQXdCLENBQUMsSUFBMkIsRUFBRSxJQUFZLEVBQUUsS0FBYTtJQUM3RixPQUFPLElBQUkseURBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsSUFBVSxFQUFFLElBQVksRUFBUSxFQUFFO1FBQ2pFLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFTLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQztRQUNsQyxPQUFPLElBQUkscURBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFTSxTQUFTLHNCQUFzQixDQUFDLElBQTJCLEVBQUUsSUFBWSxFQUFFLEtBQWE7SUFDM0YsT0FBTyxJQUFJLHlEQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLElBQVUsRUFBRSxJQUFZLEVBQVEsRUFBRTtRQUNqRSxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBUyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDbkIsT0FBTyxJQUFJLGlEQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0IsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRU0sTUFBTSxPQUFPLEdBQUc7SUFDbkIsT0FBTyxFQUFHLElBQUksR0FBRyxDQUFlO1FBQzVCLENBQUMsS0FBSyxFQUFFLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0QsQ0FBQyxNQUFNLEVBQUUsc0JBQXNCLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRSxDQUFDLE1BQU0sRUFBRSxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLENBQUMsT0FBTyxFQUFFLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDeEUsQ0FBQztJQUNGLElBQUksRUFBRyxJQUFJLEdBQUcsQ0FBZTtRQUN6QixDQUFDLE1BQU0sRUFBRSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4RCxDQUFDLEtBQUssRUFBRSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzRCxDQUFDLEtBQUssRUFBRSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDLEtBQUssRUFBRSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELENBQUMsS0FBSyxFQUFFLHdCQUF3QixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsQ0FBQyxJQUFJLEVBQUUsSUFBSSxxREFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1QixDQUFDLEtBQUssRUFBRSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDLFFBQVEsRUFBRSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5RCxDQUFDLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzRCxDQUFDLEtBQUssRUFBRSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDLE1BQU0sRUFBRSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4RCxDQUFDLEtBQUssRUFBRSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztLQUM5RCxDQUFDO0lBQ0YsS0FBSyxFQUFFLElBQUksR0FBRyxDQUFlO1FBQ3pCLENBQUMsSUFBSSxFQUFFLElBQUkseURBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFVLEVBQUUsSUFBWSxFQUFRLEVBQUU7Z0JBQ2pFLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFDckIsT0FBTyxJQUFJLG9EQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDN0M7Z0JBQ0QsT0FBTyxJQUFJLG9EQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekQsQ0FBQyxDQUFDLENBQUM7S0FDTixDQUFDO0NBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2hGRjtBQUFBO0FBQUE7QUFBQTtBQUEyQztBQUVWO0FBSTFCLE1BQU0sT0FBTztJQWdCVCxJQUFJLENBQUMsTUFBYztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFFYixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUMxQixJQUFJO2dCQUNBLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNuQjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7b0JBQ3pDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztpQkFDdEI7YUFDSjtTQUNKO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSw0Q0FBSyxDQUFDLGdEQUFTLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25FLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRU8sR0FBRztRQUNQLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUM5QyxDQUFDO0lBRU8sT0FBTztRQUNYLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLElBQUksRUFBRTtZQUN0QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNoQjtRQUNELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNYLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU8sUUFBUSxDQUFDLFNBQW9CLEVBQUUsT0FBWTtRQUMvQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLDRDQUFLLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRU8sS0FBSyxDQUFDLFFBQWdCO1FBQzFCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ1osT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDL0MsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU8sSUFBSTtRQUNSLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ1osT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTyxRQUFRO1FBQ1osSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUN4QyxPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTyxPQUFPO1FBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNsQjtJQUNMLENBQUM7SUFFTyxnQkFBZ0I7UUFDcEIsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDckUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDWixJQUFJLENBQUMsS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7U0FDOUQ7YUFBTTtZQUNILHlCQUF5QjtZQUN6QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDZixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDbEI7SUFDTCxDQUFDO0lBRU8sTUFBTSxDQUFDLEtBQWE7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNsQjtRQUVELHVCQUF1QjtRQUN2QixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsMENBQTBDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDOUQsT0FBTztTQUNWO1FBRUQsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVmLCtCQUErQjtRQUMvQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsZ0RBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFTyxNQUFNO1FBQ1Ysb0JBQW9CO1FBQ3BCLE9BQU8sOENBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDbEI7UUFFRCxzQkFBc0I7UUFDdEIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssR0FBRyxJQUFJLDhDQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUU7WUFDdkQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2xCO1FBRUQscUJBQXFCO1FBQ3JCLE9BQU8sOENBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDbEI7UUFFRCxzQkFBc0I7UUFDdEIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLEtBQUssR0FBRyxFQUFFO1lBQ25DLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssR0FBRyxFQUFFO2dCQUM1QyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDbEI7U0FDSjtRQUVELE9BQU8sOENBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDbEI7UUFFRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsUUFBUSxDQUFDLGdEQUFTLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTyxVQUFVO1FBQ2QsT0FBTyxxREFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDbEI7UUFFRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5RCxNQUFNLFdBQVcsR0FBRyxpREFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QyxJQUFJLGdEQUFlLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnREFBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2hEO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLGdEQUFTLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzlDO0lBQ0wsQ0FBQztJQUVPLFFBQVE7UUFDWixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUIsUUFBUSxJQUFJLEVBQUU7WUFDVixLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnREFBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQzFELEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGdEQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDM0QsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsZ0RBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUM1RCxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnREFBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQzdELEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGdEQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDMUQsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsZ0RBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUMzRCxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnREFBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ3RELEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGdEQUFTLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDcEQsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsZ0RBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUMxRCxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnREFBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ3RELEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGdEQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDdEQsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsZ0RBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUN2RCxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnREFBUyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ3hELEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQzdGLEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ25HLEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ3RGLEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQzVGLEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQzdGLEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ25HLEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQzdGLEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ2xKLEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxD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R0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQ3hFLENBQUM7QUFFTSxTQUFTLGNBQWMsQ0FBQyxJQUFZO0lBQ3ZDLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMxQyxDQUFDO0FBRU0sU0FBUyxTQUFTLENBQUMsSUFBWTtJQUNsQyxPQUFPLGdEQUFTLENBQUMsSUFBSSxDQUFDLElBQUksZ0RBQVMsQ0FBQyxHQUFHLENBQUM7QUFDNUMsQ0FBQztBQUVNLFNBQVMsVUFBVSxDQUFDLElBQVk7SUFDbkMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDdkUsQ0FBQyIsImZpbGUiOiJhdHNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2F0c2NyaXB0LnRzXCIpO1xuIiwiaW1wb3J0IHsgU2Nhbm5lciB9IGZyb20gJy4vc2Nhbm5lcic7XHJcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJy4vcGFyc2VyJztcclxuaW1wb3J0IHsgSW50ZXJwcmV0ZXIgfSBmcm9tICcuL2ludGVycHJldGVyJztcclxuaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gJy4vY29uc29sZSc7XHJcbmltcG9ydCB7IERlbW9Tb3VyY2VDb2RlIH0gZnJvbSAnLi9kZW1vcy9kZW1vJztcclxuaW1wb3J0IHsgU3RtdCB9IGZyb20gJy4vdHlwZXMvc3RhdGVtZW50JztcclxuZGVjbGFyZSB2YXIgd2luZG93OiBhbnk7XHJcbmRlY2xhcmUgdmFyIGdsb2JhbDogYW55O1xyXG5cclxuY29uc3QgYXRzY3JpcHQgPSB7XHJcbiAgICBleGVjdXRlOiAoc291cmNlOiBzdHJpbmcpOiBTdG10W10gPT4ge1xyXG4gICAgICAgIGNvbnN0IHNjYW5uZXIgPSBuZXcgU2Nhbm5lcigpO1xyXG4gICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBQYXJzZXIoKTtcclxuICAgICAgICBjb25zdCBpbnRlcnByZXRlciA9IG5ldyBJbnRlcnByZXRlcigpO1xyXG4gICAgICAgIGNvbnN0IHRva2VucyA9IHNjYW5uZXIuc2Nhbihzb3VyY2UpO1xyXG4gICAgICAgIGlmIChzY2FubmVyLmVycm9ycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc2Nhbm5lci5lcnJvcnMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmNvbnpvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN0YXRlbWVudHMgPSBwYXJzZXIucGFyc2UodG9rZW5zKTtcclxuICAgICAgICBpZiAocGFyc2VyLmVycm9ycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcGFyc2VyLmVycm9ycy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuY29uem9sZS5lcnJvcihlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGludGVycHJldGVyLmludGVycGV0KHN0YXRlbWVudHMpO1xyXG4gICAgfSxcclxuICAgIGludGVycHJldGVyOiBJbnRlcnByZXRlcixcclxuICAgIHBhcnNlcjogUGFyc2VyLFxyXG4gICAgc2Nhbm5lcjogU2Nhbm5lclxyXG59O1xyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICB3aW5kb3cuY29uem9sZSA9IG5ldyBDb25zb2xlKCk7XHJcbiAgICB3aW5kb3cuZGVtb1NvdXJjZUNvZGUgPSBEZW1vU291cmNlQ29kZTtcclxuICAgIHdpbmRvdy5hdHNjcmlwdCA9IGF0c2NyaXB0O1xyXG59IGVsc2Uge1xyXG4gICAgZXhwb3J0cy5hdHNjcmlwdCA9IGF0c2NyaXB0O1xyXG59XHJcbiIsImV4cG9ydCBlbnVtIENvbnNvbGVNZXNzYWdlVHlwZSB7XHJcbiAgICBVc2VyLFxyXG4gICAgRXJyb3IsXHJcbiAgICBXYXJuaW5nLFxyXG4gICAgSW5mb1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uc29sZU1lc3NhZ2Uge1xyXG4gICAgcHVibGljIHRpbWU6IERhdGU7XHJcbiAgICBwdWJsaWMgdGV4dDogYW55O1xyXG4gICAgcHVibGljIHR5cGU6IENvbnNvbGVNZXNzYWdlVHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnNvbGUge1xyXG5cclxuICAgIHB1YmxpYyBtZXNzYWdlczogQ29uc29sZU1lc3NhZ2VbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGQobWVzc2FnZTogYW55LCB0eXBlOiBDb25zb2xlTWVzc2FnZVR5cGUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goe1xyXG4gICAgICAgICAgICB0ZXh0OiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICAgICAgdHlwZTogdHlwZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZyhtZXNzYWdlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmFkZChtZXNzYWdlLCBDb25zb2xlTWVzc2FnZVR5cGUuVXNlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdhcm4obWVzc2FnZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5hZGQobWVzc2FnZSwgQ29uc29sZU1lc3NhZ2VUeXBlLldhcm5pbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlcnJvcihtZXNzYWdlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmFkZChtZXNzYWdlLCBDb25zb2xlTWVzc2FnZVR5cGUuRXJyb3IpO1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5mbyhtZXNzYWdlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmFkZChtZXNzYWdlLCBDb25zb2xlTWVzc2FnZVR5cGUuSW5mbyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpcnN0KCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZXNbMF0udGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbGFzdCgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VzW3RoaXMubWVzc2FnZXMubGVuZ3RoIC0gMV0udGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHJpbnQoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2codGhpcy5tZXNzYWdlcy5tYXAoKGNtKSA9PiBjbS50ZXh0KSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBEZW1vU291cmNlQ29kZSA9XHJcbmBcclxuLy8gc2xpY2luZyBzdHJpbmdzXHJcbnByaW50IFwib25lIHR3byB0aHJlZSBmb3VyXCJbNDo3OjFdOyAvLyBwcmludHMgdHdvXHJcbnByaW50IFwiaGVsbG8gd29ybGRcIls2OjoxXS5zaXplKCk7IC8vIDVcclxucHJpbnQgXCJoZWxsbyB3b3JsZFwiWzo6LTFdOyAvL3ByaW50cyBkbHJvdyBvbGxlaFxyXG5cclxuLy8gZnVuY3Rpb25zXHJcbmZ1bmN0aW9uIHNheUhlbGxvKHRleHQpIHtcclxuICAgIHByaW50IHRleHQ7XHJcbn1cclxuc2F5SGVsbG8oJ2hlbGxvJyk7XHJcblxyXG4vLyBjbGFzc2VzXHJcbmNsYXNzIFBlcnNvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuICAgIGhlbGxvKCkge1xyXG4gICAgICAgIHByaW50IHRoaXMubmFtZSArICcgc2F5cyBoaSc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFN0dWRlbnQgZXh0ZW5kcyBQZXJzb24ge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgZ3JhZGUpIHtcclxuICAgICAgICBiYXNlLmNvbnN0cnVjdG9yKG5hbWUpO1xyXG4gICAgICAgIHRoaXMuZ3JhZGUgPSBncmFkZTtcclxuICAgIH1cclxuICAgIGhlbGxvKCkge1xyXG4gICAgICAgIGJhc2UuaGVsbG8oKTtcclxuICAgICAgICBwcmludCAnZnJvbSAnICsgdGhpcy5ncmFkZSArICcgZ3JhZGUnO1xyXG4gICAgfVxyXG59XHJcblxyXG52YXIgc3R1ZGVudCA9IG5ldyBTdHVkZW50KCdKb2huJywgMyk7XHJcbnN0dWRlbnQuaGVsbG8oKTtcclxuXHJcbi8vIFJlY3Vyc2l2ZSBmdW5jdGlvblxyXG5mdW5jdGlvbiBmYWN0b3JpYWxpemUobikge1xyXG4gICAgaWYgKG4gPCAwKSB7XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gICAgaWYgKG4gPT0gMCkge1xyXG4gICAgICAgIHJldHVybiAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChuICogZmFjdG9yaWFsaXplKG4gLSAxKSk7XHJcbn1cclxucHJpbnQgJ2ZhY3RvciBvZiAxMTogJyArIGZhY3RvcmlhbGl6ZSgxMSk7XHJcblxyXG4vLyBzYW1lIGFzIGZhY3RvcmlhbGl6ZSBidXQgd2l0aCB0ZXJuYXJ5XHJcbi8vIGFuZCBzaG9ydCBmb3JtIGZ1bmN0aW9uIGRlZmluaXRpb25cclxuQGZhY3RvcihuKSA9PlxyXG4gICAgbiA8IDAgPyAtMSA6IChuID09IDAgPyAxIDogKG4gKiBmYWN0b3JpYWxpemUobiAtIDEpKSk7XHJcblxyXG5wcmludCAnZmFjdG9yIG9mIDExOiAnICtmYWN0b3IoMTEpO1xyXG5cclxuLy8gbmVzdGVkIGZ1bmN0aW9uIHJldHVybnMgZnVuY3Rpb25cclxuQGFkZChhKSA9PiBAKGIpID0+IEAoYykgPT4gYSArIGIgKyBjO1xyXG5wcmludCBhZGQoMTAwKSgyMCkoMyk7XHJcblxyXG5mdW5jdGlvbiBzdWIoYSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhIC0gYiAtIGM7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbn1cclxucHJpbnQgc3ViKDEwMCkoMTApKDEpO1xyXG5cclxuLy8gd2hpbGUgbG9vcCBhbmQgdGVybmFyeSBvcGVyYXRvclxyXG52YXIgaSA9IDA7XHJcbnZhciBjb3VudHMgPSAnJztcclxud2hpbGUgKGkgPD0gMTApIHtcclxuICAgIGNvdW50cyArPSBpICUgMiA/ICdvZGQgJyA6ICdldmVuICc7XHJcbiAgICBpID0gaSArIDE7XHJcbn1cclxucHJpbnQgY291bnRzO1xyXG4vLyBsaXRlcmFsc1xyXG52YXIgbGl0ZXJhbCA9IHtcclxuICAgIGZpcnN0bmFtZTogXCJKb2huXCIsXHJcbiAgICBsYXN0bmFtZTogXCJEb2VcIixcclxuICAgIHJlY29yZHM6IHtcclxuICAgICAgICBwcmV2OiBcInByZXZpb3VzXCIsXHJcbiAgICAgICAgbmV4dDogXCJuZXh0XCJcclxuICAgIH1cclxufTtcclxucHJpbnQgbGl0ZXJhbC5yZWNvcmRzLnByZXY7XHJcbi8vIHNhZmUgbmF2aWdhdG9yIG9wZXJhdG9yID8uXHJcbnByaW50IGxpdGVyYWwuc2FmZU5hdmlnYXRvcj8ucHJvcGVydHlEb2VzTm90RXhpc3Q7XHJcblxyXG52YXIgeCA9IFsxLCAyMCwgMzAwXTtcclxudmFyIHkgPSBbMTAwLCB4WzFdXTtcclxucHJpbnQgeVswXTtcclxueS5wdXNoKHgpO1xyXG55Lm5ld1Byb3BlcnR5ID0gXCJhbnl0aGluZ1wiO1xyXG5wcmludCB5LmpvaW4oJywnKTtcclxudmFyIHogPSB5LmpvaW4oJy0nKTtcclxuXHJcbi8vIG5ldyBzY29wZSB0ZXN0XHJcbntcclxuICAgIHZhciBhID0ge2E6ICdvbmUnfTtcclxuICAgIHZhciBiID0ge2I6ICd0d28nfTtcclxuICAgIHZhciBjID0gYSArIGI7XHJcbiAgICBwcmludCBjOyAvLyBwcmludHMge2E6ICdvbmUnLCBiOiAndHdvJ31cclxufVxyXG4vLyBuZXcgc2NvcGUgdGVzdFxyXG57XHJcbiAgICB2YXIgYSA9IHtkOiAndGhyZWUnfTtcclxuICAgIHZhciBiID0ge2U6ICdmb3VyJ307XHJcbiAgICB2YXIgYyA9IGEgKyBiO1xyXG4gICAgcHJpbnQgYzsgLy8gcHJpbnRzIHtkOiAndGhyZWUnLCBlOiAnZm91cid9XHJcbn1cclxuXHJcbi8vIHR5cGVvZiwgaXMsIGluc3RhbmNlb2Ygb3BlcmF0b3JcclxuXHJcbnByaW50IHR5cGVvZiBQZXJzb247XHJcbnByaW50IHR5cGVvZiBzdHVkZW50O1xyXG5wcmludCAnU3R1ZGVudCBpcyBDbGFzczogJyArIChTdHVkZW50IGlzIENsYXNzKTtcclxucHJpbnQgJ3N0dWRlbnQgaXMgT2JqZWN0OiAnICsgKHN0dWRlbnQgaXMgT2JqZWN0KTtcclxucHJpbnQgJ3N0dWRlbnQgaXMgUGVyc29uOiAnICsgKHN0dWRlbnQgaXMgUGVyc29uKTtcclxucHJpbnQgJ3N0dWRlbnQgaXMgU3R1ZGVudDogJyArIChzdHVkZW50IGlzIFN0dWRlbnQpO1xyXG5wcmludCAnc3R1ZGVudCBpbnN0YW5jZW9mIFBlcnNvbjogJyArIChzdHVkZW50IGluc3RhbmNlb2YgUGVyc29uKTtcclxuXHJcbnByaW50IHR5cGVvZiAnJyArICdzdHJpbmcnO1xyXG5cclxuYDtcclxuIiwiaW1wb3J0ICogYXMgRXhwciBmcm9tICcuL3R5cGVzL2V4cHJlc3Npb24nO1xyXG5pbXBvcnQgKiBhcyBTdG10IGZyb20gJy4vdHlwZXMvc3RhdGVtZW50JztcclxuaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gJy4vY29uc29sZSc7XHJcbmltcG9ydCB7IFNjb3BlIH0gZnJvbSAnLi9zY29wZSc7XHJcbmltcG9ydCB7IFRva2VuVHlwZSwgVG9rZW4gfSBmcm9tICcuL3Rva2VuJztcclxuaW1wb3J0IHsgUnVudGltZSB9IGZyb20gJy4vcnVudGltZSc7XHJcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL3R5cGVzL2FueSc7XHJcbmltcG9ydCB7ICRCb29sZWFuIH0gZnJvbSAnLi90eXBlcy9ib29sZWFuJztcclxuaW1wb3J0IHsgJENsYXNzIH0gZnJvbSAnLi90eXBlcy9jbGFzcyc7XHJcbmltcG9ydCB7ICREaWN0aW9uYXJ5IH0gZnJvbSAnLi90eXBlcy9kaWN0aW9uYXJ5JztcclxuaW1wb3J0IHsgJEZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlcy9mdW5jdGlvbic7XHJcbmltcG9ydCB7ICRMaXN0IH0gZnJvbSAnLi90eXBlcy9saXN0JztcclxuaW1wb3J0IHsgJE51bGwgfSBmcm9tICcuL3R5cGVzL251bGwnO1xyXG5pbXBvcnQgeyAkTnVtYmVyIH0gZnJvbSAnLi90eXBlcy9udW1iZXInO1xyXG5pbXBvcnQgeyAkT2JqZWN0IH0gZnJvbSAnLi90eXBlcy9vYmplY3QnO1xyXG5pbXBvcnQgeyAkUmFuZ2UsIFJhbmdlVmFsdWUgfSBmcm9tICcuL3R5cGVzL3JhbmdlJztcclxuaW1wb3J0IHsgJFN0cmluZyB9IGZyb20gJy4vdHlwZXMvc3RyaW5nJztcclxuaW1wb3J0IHsgJFZvaWQgfSBmcm9tICcuL3R5cGVzL3ZvaWQnO1xyXG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vdHlwZXMvdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgeyBTY2FubmVyIH0gZnJvbSAnLi9zY2FubmVyJztcclxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnLi9wYXJzZXInO1xyXG5kZWNsYXJlIHZhciBjb256b2xlOiBDb25zb2xlO1xyXG5cclxuZXhwb3J0IGNsYXNzIEludGVycHJldGVyIGltcGxlbWVudHNcclxuICAgIEV4cHIuRXhwclZpc2l0b3I8JEFueT4sXHJcbiAgICBTdG10LlN0bXRWaXNpdG9yPCRBbnk+IHtcclxuICAgIHB1YmxpYyBnbG9iYWwgPSBuZXcgU2NvcGUoKTtcclxuICAgIHB1YmxpYyBzY29wZSA9IHRoaXMuZ2xvYmFsO1xyXG4gICAgcHVibGljIGVycm9yczogc3RyaW5nW10gPSBbXTtcclxuICAgIHByaXZhdGUgc2Nhbm5lciA9IG5ldyBTY2FubmVyKCk7XHJcbiAgICBwcml2YXRlIHBhcnNlciA9IG5ldyBQYXJzZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggKSB7XHJcbiAgICAgICAgdGhpcy5nbG9iYWwuc2V0KCdtYXRoJywgbmV3ICREaWN0aW9uYXJ5KFJ1bnRpbWUuTWF0aCkpO1xyXG4gICAgICAgIHRoaXMuZ2xvYmFsLnNldCgnY29uc29sZScsIG5ldyAkRGljdGlvbmFyeShSdW50aW1lLkNvbnNvbGUpKTtcclxuICAgICAgICB0aGlzLmdsb2JhbC5zZXQoJ3JlJywgUnVudGltZS5VdGlscy5nZXQoJ3JlJykpO1xyXG4gICAgICAgIHRoaXMucGFyc2VyLmVycm9yTGV2ZWwgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXZhbHVhdGUoZXhwcjogRXhwci5FeHByKTogJEFueSB7XHJcbiAgICAgICAgcmV0dXJuIGV4cHIucmVzdWx0ID0gZXhwci5hY2NlcHQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleGVjdXRlKHN0bXQ6IFN0bXQuU3RtdCk6ICRBbnkge1xyXG4gICAgICAgIHJldHVybiBzdG10LnJlc3VsdCA9IHN0bXQuYWNjZXB0KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBldmFsKHN0bXQ6IFN0bXQuU3RtdCk6IGFueSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuICB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogc3RtdC5hY2NlcHQodGhpcykudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBlLm1lc3NhZ2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludGVycGV0KHN0YXRlbWVudHM6IFN0bXQuU3RtdFtdKTogU3RtdC5TdG10W10ge1xyXG4gICAgICAgIHRoaXMuZXJyb3JzID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBzdGF0ZW1lbnQgb2Ygc3RhdGVtZW50cykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlKHN0YXRlbWVudCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnpvbGUuZXJyb3IoZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVycm9ycy5sZW5ndGggPiAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKCdSdW50aW1lIEVycm9yIGxpbWl0IGV4Y2VlZGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlbWVudHM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlbWVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlcnJvcihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJ1bnRpbWUgRXJyb3IgPT4gJHttZXNzYWdlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdEV4cHJlc3Npb25TdG10KHN0bXQ6IFN0bXQuRXhwcmVzc2lvbik6ICRBbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlKHN0bXQuZXhwcmVzc2lvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0UHJpbnRTdG10KHN0bXQ6IFN0bXQuUHJpbnQpOiAkQW55IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5ldmFsdWF0ZShzdG10LmV4cHJlc3Npb24pO1xyXG4gICAgICAgIGNvbnpvbGUubG9nKGRhdGEudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0VmFyU3RtdChzdG10OiBTdG10LlZhcik6ICRBbnkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IG5ldyAkTnVsbCgpO1xyXG4gICAgICAgIGlmIChzdG10LmluaXRpYWxpemVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5ldmFsdWF0ZShzdG10LmluaXRpYWxpemVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZhbHVlLmlzTGFtYmRhKCkpIHtcclxuICAgICAgICAgICAgKHZhbHVlIGFzIGFueSkubmFtZSA9IHN0bXQubmFtZS5sZXhlbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NvcGUuZGVmaW5lKHN0bXQubmFtZS5sZXhlbWUsIHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0VmFyaWFibGVFeHByKGV4cHI6IEV4cHIuVmFyaWFibGUpOiAkQW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5nZXQoZXhwci5uYW1lLmxleGVtZSwgZXhwci5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRQb3N0Zml4RXhwcihleHByOiBFeHByLlBvc3RmaXgpOiAkQW55IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2NvcGUuZ2V0KGV4cHIubmFtZS5sZXhlbWUsIGV4cHIubmFtZSk7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBuZXcgJE51bWJlcih2YWx1ZS52YWx1ZSArIGV4cHIuaW5jcmVtZW50KTtcclxuICAgICAgICB0aGlzLnNjb3BlLmFzc2lnbihleHByLm5hbWUubGV4ZW1lLCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdExpc3RFeHByKGV4cHI6IEV4cHIuTGlzdCk6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlczogJEFueVtdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBleHByZXNzaW9uIG9mIGV4cHIudmFsdWUpIHtcclxuICAgICAgICAgICAgdmFsdWVzLnB1c2godGhpcy5ldmFsdWF0ZShleHByZXNzaW9uKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgJExpc3QodmFsdWVzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRadHJpbmdFeHByKGV4cHI6IEV4cHIuWnRyaW5nKTogJEFueSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkU3RyaW5nKGV4cHIudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdGVtcGxhdGVQYXJzZShzb3VyY2U6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgdG9rZW5zID0gdGhpcy5zY2FubmVyLnNjYW4oc291cmNlKTtcclxuICAgICAgICBjb25zdCBzdGF0ZW1lbnRzID0gdGhpcy5wYXJzZXIucGFyc2UodG9rZW5zKTtcclxuICAgICAgICBpZiAodGhpcy5wYXJzZXIuZXJyb3JzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yKGBUZW1wbGF0ZSBzdHJpbmcgIGVycm9yOiAke3RoaXMucGFyc2VyLmVycm9yc1swXX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc3RhdGVtZW50IG9mIHN0YXRlbWVudHMpIHtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IHRoaXMuZXhlY3V0ZShzdGF0ZW1lbnQpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0VGVtcGxhdGVFeHByKGV4cHI6IEV4cHIuVGVtcGxhdGUpOiAkQW55IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBleHByLnZhbHVlLnJlcGxhY2UoL1xcJFxce1xceyhbXFxzXFxTXSs/KVxcfVxcfS9nLCAobSwgcGxhY2Vob2xkZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKHBsYWNlaG9sZGVyW3BsYWNlaG9sZGVyLmxlbmd0aF0gIT09ICc7Jykge1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgKz0gJzsnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlUGFyc2UocGxhY2Vob2xkZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBuZXcgJFN0cmluZyhyZXN1bHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdFJlZ0V4RXhwcihleHByOiBFeHByLlJlZ0V4KTogJEFueSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4RW50aXR5KGV4cHIudmFsdWUpO1xyXG4gICAgICAgICovIHJldHVybiBuZXcgJE51bGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRBc3NpZ25FeHByKGV4cHI6IEV4cHIuQXNzaWduKTogJEFueSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmV2YWx1YXRlKGV4cHIudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2NvcGUuYXNzaWduKGV4cHIubmFtZS5sZXhlbWUsIHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0QmluYXJ5RXhwcihleHByOiBFeHByLkJpbmFyeSk6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLmV2YWx1YXRlKGV4cHIubGVmdCk7XHJcbiAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLmV2YWx1YXRlKGV4cHIucmlnaHQpO1xyXG4gICAgICAgIHN3aXRjaCAoZXhwci5vcGVyYXRvci50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLk1pbnVzOlxyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5NaW51c0VxdWFsOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVtYmVyKGxlZnQudmFsdWUgLSByaWdodC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlNsYXNoOlxyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5TbGFzaEVxdWFsOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVtYmVyKGxlZnQudmFsdWUgLyByaWdodC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlN0YXI6XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlN0YXJFcXVhbDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJE51bWJlcihsZWZ0LnZhbHVlICogcmlnaHQudmFsdWUpO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5QZXJjZW50OlxyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5QZXJjZW50RXF1YWw6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICROdW1iZXIobGVmdC52YWx1ZSAlIHJpZ2h0LnZhbHVlKTtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuUGx1czpcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuUGx1c0VxdWFsOlxyXG4gICAgICAgICAgICAgICAgaWYgKGxlZnQuaXNOdW1iZXIoKSAmJiByaWdodC5pc051bWJlcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVtYmVyKGxlZnQudmFsdWUgKyByaWdodC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobGVmdC5pc1N0cmluZygpICYmIHJpZ2h0LmlzU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICRTdHJpbmcobGVmdC52YWx1ZSArIHJpZ2h0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChsZWZ0LmlzTGlzdCgpICYmIHJpZ2h0LmlzTGlzdCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTGlzdChsZWZ0LnZhbHVlLmNvbmNhdChyaWdodC52YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGxlZnQuaXNEaWN0aW9uYXJ5KCkgJiYgcmlnaHQuaXNEaWN0aW9uYXJ5KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICREaWN0aW9uYXJ5KG5ldyBNYXAoWy4uLmxlZnQudmFsdWUsIC4uLnJpZ2h0LnZhbHVlXSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkU3RyaW5nKGxlZnQudmFsdWUudG9TdHJpbmcoKSArIHJpZ2h0LnZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5QaXBlOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVtYmVyKGxlZnQudmFsdWUgfCByaWdodC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkNhcmV0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVtYmVyKGxlZnQudmFsdWUgXiByaWdodC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkdyZWF0ZXI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKGxlZnQudmFsdWUgPiByaWdodC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkdyZWF0ZXJFcXVhbDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4obGVmdC52YWx1ZSA+PSByaWdodC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkxlc3M6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKGxlZnQudmFsdWUgPCByaWdodC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkxlc3NFcXVhbDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4obGVmdC52YWx1ZSA8PSByaWdodC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkVxdWFsRXF1YWw6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKGxlZnQudmFsdWUgPT09IHJpZ2h0LnZhbHVlKTtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuQmFuZ0VxdWFsOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbihsZWZ0LnZhbHVlICE9PSByaWdodC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKCdVbmtub3duIGJpbmFyeSBvcGVyYXRvciAnICsgZXhwci5vcGVyYXRvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICROdWxsKCk7IC8vIHVucmVhY2hhYmxlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdExvZ2ljYWxFeHByKGV4cHI6IEV4cHIuTG9naWNhbCk6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLmV2YWx1YXRlKGV4cHIubGVmdCk7XHJcblxyXG4gICAgICAgIGlmIChleHByLm9wZXJhdG9yLnR5cGUgPT09IFRva2VuVHlwZS5Pcikge1xyXG4gICAgICAgICAgICBpZiAobGVmdC5pc1RydXRoeSgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghbGVmdC5pc1RydXRoeSgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGUoZXhwci5yaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0VGVybmFyeUV4cHIoZXhwcjogRXhwci5UZXJuYXJ5KTogJEFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGUoZXhwci5jb25kaXRpb24pLmlzVHJ1dGh5KCkgPyB0aGlzLmV2YWx1YXRlKGV4cHIudGhlbkV4cHIpIDogdGhpcy5ldmFsdWF0ZShleHByLmVsc2VFeHByKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXROdWxsQ29hbGVzY2luZ0V4cHIoZXhwcjogRXhwci5OdWxsQ29hbGVzY2luZyk6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLmV2YWx1YXRlKGV4cHIubGVmdCk7XHJcbiAgICAgICAgaWYgKGxlZnQuaXNOdWxsKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGUoZXhwci5yaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdEdyb3VwaW5nRXhwcihleHByOiBFeHByLkdyb3VwaW5nKTogJEFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGUoZXhwci5leHByZXNzaW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRMaXRlcmFsRXhwcihleHByOiBFeHByLkxpdGVyYWwpOiAkQW55IHtcclxuICAgICAgICByZXR1cm4gZXhwci52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRVbmFyeUV4cHIoZXhwcjogRXhwci5VbmFyeSk6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5ldmFsdWF0ZShleHByLnJpZ2h0KTtcclxuICAgICAgICBzd2l0Y2ggKGV4cHIub3BlcmF0b3IudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5NaW51czpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJE51bWJlcigtTnVtYmVyKHJpZ2h0LnZhbHVlKSk7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkJhbmc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKCFyaWdodC5pc1RydXRoeSgpKTtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuUGx1c1BsdXM6XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLk1pbnVzTWludXM6XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJpZ2h0LmlzTnVtYmVyKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGBJbnZhbGlkIHJpZ2h0LWhhbmQgc2lkZSBleHByZXNzaW9uIGluIHByZWZpeCBvcGVyYXRpb246ICBcIiR7RGF0YVR5cGVbcmlnaHQudHlwZV19ICR7cmlnaHR9IGlzIG5vdCBhIG51bWJlcmApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBOdW1iZXIocmlnaHQudmFsdWUpICsgKGV4cHIub3BlcmF0b3IudHlwZSA9PT0gVG9rZW5UeXBlLlBsdXNQbHVzID8gMSA6IC0xKTtcclxuICAgICAgICAgICAgICAgIGlmIChleHByLnJpZ2h0IGluc3RhbmNlb2YgRXhwci5WYXJpYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NvcGUuYXNzaWduKGV4cHIucmlnaHQubmFtZS5sZXhlbWUsIG5ldyAkTnVtYmVyKG5ld1ZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV4cHIucmlnaHQgaW5zdGFuY2VvZiBFeHByLkdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzc2luZyA9IG5ldyBFeHByLlNldChleHByLnJpZ2h0LmVudGl0eSwgZXhwci5yaWdodC5rZXksIG5ldyBFeHByLkxpdGVyYWwobmV3ICROdW1iZXIobmV3VmFsdWUpLCBleHByLmxpbmUpLCBleHByLmxpbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZhbHVhdGUoYXNzaW5nKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihgSW52YWxpZCByaWdodC1oYW5kIHNpZGUgZXhwcmVzc2lvbiBpbiBwcmVmaXggb3BlcmF0aW9uOiAgJHtleHByLnJpZ2h0fWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVtYmVyKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoYFVua25vd24gdW5hcnkgb3BlcmF0b3IgJyArIGV4cHIub3BlcmF0b3JgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJE51bGwoKTsgLy8gc2hvdWxkIGJlIHVucmVhY2hhYmxlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBleGVjdXRlQmxvY2soc3RhdGVtZW50czogU3RtdC5TdG10W10sIG5leHRTY29wZTogU2NvcGUpOiAkQW55IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50U2NvcGUgPSB0aGlzLnNjb3BlO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBuZXh0U2NvcGU7XHJcbiAgICAgICAgZm9yIChjb25zdCBzdGF0ZW1lbnQgb2Ygc3RhdGVtZW50cykge1xyXG4gICAgICAgICAgICBzdGF0ZW1lbnQucmVzdWx0ID0gdGhpcy5leGVjdXRlKHN0YXRlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBjdXJyZW50U2NvcGU7XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkVm9pZCgnYmxvY2snKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRCbG9ja1N0bXQoc3RtdDogU3RtdC5CbG9jayk6ICRBbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVCbG9jayhzdG10LnN0YXRlbWVudHMsIG5ldyBTY29wZSh0aGlzLnNjb3BlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0SWZTdG10KHN0bXQ6IFN0bXQuSWYpOiAkQW55IHtcclxuICAgICAgICBpZiAodGhpcy5ldmFsdWF0ZShzdG10LmNvbmRpdGlvbikuaXNUcnV0aHkoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlKHN0bXQudGhlblN0bXQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc3RtdC5lbHNlU3RtdCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlKHN0bXQuZWxzZVN0bXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRXaGlsZVN0bXQoc3RtdDogU3RtdC5XaGlsZSk6ICRBbnkge1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmV2YWx1YXRlKHN0bXQuY29uZGl0aW9uKS5pc1RydXRoeSgpKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGUoc3RtdC5sb29wKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiAkQW55ICYmIGUudHlwZSA9PT0gRGF0YVR5cGUuQnJlYWspIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZSBpbnN0YW5jZW9mICRBbnkgJiYgZS50eXBlID09PSBEYXRhVHlwZS5Db250aW51ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgJFZvaWQoJ3doaWxlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0RG9XaGlsZVN0bXQoc3RtdDogU3RtdC5Eb1doaWxlKTogJEFueSB7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlKHN0bXQubG9vcCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgJEFueSAmJiBlLnR5cGUgPT09IERhdGFUeXBlLkJyZWFrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUgaW5zdGFuY2VvZiAkQW55ICYmIGUudHlwZSA9PT0gRGF0YVR5cGUuQ29udGludWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gd2hpbGUgKHRoaXMuZXZhbHVhdGUoc3RtdC5jb25kaXRpb24pLmlzVHJ1dGh5KCkpO1xyXG4gICAgICAgIHJldHVybiBuZXcgJFZvaWQoJ2Rvd2hpbGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRDYWxsRXhwcihleHByOiBFeHByLkNhbGwpOiAkQW55IHtcclxuICAgICAgICAvLyB2ZXJpZnkgY2FsbGVlIGlzIGEgZnVuY3Rpb25cclxuICAgICAgICBjb25zdCBjYWxsZWUgPSB0aGlzLmV2YWx1YXRlKGV4cHIuY2FsbGVlKTtcclxuICAgICAgICBpZiAoIWNhbGxlZS5pc0Z1bmN0aW9uKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvcihgJHtjYWxsZWV9IGlzIG5vdCBhIGZ1bmN0aW9uYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzZXQgdGhpcyBpbiBmdW5jdGlvbiBzY29wZVxyXG4gICAgICAgIGxldCB0aGl6OiBhbnkgPSBudWxsO1xyXG4gICAgICAgIGlmIChleHByLmNhbGxlZSBpbnN0YW5jZW9mIEV4cHIuR2V0KSB7XHJcbiAgICAgICAgICAgIGlmIChleHByLmNhbGxlZS5lbnRpdHkgaW5zdGFuY2VvZiBFeHByLkJhc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXogPSB0aGlzLnNjb3BlLmdldCgndGhpcycsIGV4cHIucGFyZW4pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpeiA9IHRoaXMuZXZhbHVhdGUoZXhwci5jYWxsZWUuZW50aXR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZXhwci50aGl6ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXogPSBleHByLnRoaXo7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBldmFsdWF0ZSBmdW5jdGlvbiBhcmd1bWVudHNcclxuICAgICAgICBjb25zdCBhcmdzID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBhcmd1bWVudCBvZiBleHByLmFyZ3MpIHtcclxuICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZXZhbHVhdGUoYXJndW1lbnQpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHBhc3MgYXJndW1lbnRzIHRvIGZ1bmN0aW9uXHJcbiAgICAgICAgY29uc3QgZnVuYyA9IGNhbGxlZSBhcyAkRnVuY3Rpb247XHJcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoICE9PSBmdW5jLmFyaXR5ICYmIGZ1bmMuYXJpdHkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnpvbGUud2FybihgV2FybmluZyBhdCAoJHtleHByLnBhcmVuLmxpbmV9KTogJHtjYWxsZWV9IG1pc21hdGNoZWQgYXJndW1lbnQgY291bnQ7IFxcbiBFeHBlY3RlZCAke2Z1bmMuYXJpdHl9IGJ1dCBnb3QgJHthcmdzLmxlbmd0aH0gYCk7XHJcbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IGZ1bmMuYXJpdHkpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBhcmdzLmxlbmd0aDsgaSA8PSBmdW5jLmFyaXR5OyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcmdzLnB1c2gobmV3ICROdWxsKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGV4ZWN1dGUgZnVuY3Rpb25cclxuICAgICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXosIGFyZ3MsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdEJhc2VFeHByKGV4cHI6IEV4cHIuQmFzZSk6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IHRoaXogPSB0aGlzLnNjb3BlLmdldChleHByLnBhcmVuLmxleGVtZSwgZXhwci5wYXJlbik7XHJcblxyXG4gICAgICAgIGlmICghdGhpei5pc09iamVjdCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJiYXNlIGV4cHJlc3Npb24gY2FuIGJlIHVzZWQgb25seSBpbnNpZGUgbWV0aG9kc1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNsYXp6OiAkQ2xhc3MgPSAodGhpeiBhcyAkT2JqZWN0KS5jb256dHJ1Y3RvciBhcyAkQ2xhc3M7XHJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gY2xhenoucGFyZW50O1xyXG4gICAgICAgIGlmIChwYXJlbnQuaXNOdWxsKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvcihcIkNsYXNzIFwiICsgY2xhenogKyBcIiBoYXMgbm90IGJlZW4gZXh0ZW5kZWQgYW5kIGhhcyBubyBiYXNlXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXROZXdFeHByKGV4cHI6IEV4cHIuTmV3KTogJEFueSB7XHJcbiAgICAgICAgY29uc3QgbmV3Q2FsbCA9IChleHByLmNsYXp6IGFzIEV4cHIuQ2FsbCk7XHJcbiAgICAgICAgLy8gaW50ZXJuYWwgY2xhc3MgZGVmaW5pdGlvbiBpbnN0YW5jZVxyXG4gICAgICAgIGNvbnN0IGNsYXp6OiAkQ2xhc3MgPSB0aGlzLmV2YWx1YXRlKG5ld0NhbGwuY2FsbGVlKSBhcyAkQ2xhc3M7XHJcblxyXG4gICAgICAgIGlmICghY2xhenouaXNDbGFzcygpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoYCcke2NsYXp6fScgaXMgbm90IGEgY2xhc3MuICduZXcnIHN0YXRlbWVudCBtdXN0IGJlIHVzZWQgd2l0aCBjbGFzc2VzLmApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBuZXcgb2JqZWN0XHJcbiAgICAgICAgY29uc3QgZW50aXR5ID0gbmV3ICRPYmplY3QobmV3IE1hcCgpLCBjbGF6eik7XHJcbiAgICAgICAgLy8gY29uc3RydWN0b3IgbWV0aG9kIG9mIHRoZSBjbGFzc1xyXG4gICAgICAgIGNvbnN0IGNvbnp0cnVjdG9yID0gY2xhenouZ2V0KG5ldyAkU3RyaW5nKCdjb25zdHJ1Y3RvcicpKSBhcyAkRnVuY3Rpb247XHJcbiAgICAgICAgaWYgKGNvbnp0cnVjdG9yLmlzRnVuY3Rpb24oKSkge1xyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICBjb25zdCBhcmdzOiAkQW55W10gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBhcmcgb2YgbmV3Q2FsbC5hcmdzKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzLnB1c2godGhpcy5ldmFsdWF0ZShhcmcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb256dHJ1Y3Rvci5jYWxsKHRoaXMsIGVudGl0eSwgYXJncyk7XHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgdGhpcy5ldmFsdWF0ZShcclxuICAgICAgICAgICAgICAgbmV3IEV4cHIuQ2FsbChcclxuICAgICAgICAgICAgICAgICAgIG5ldyBFeHByLkdldChuZXcgRXhwci5MaXRlcmFsKGVudGl0eSwgZXhwci5saW5lKSwgbmV3IEV4cHIuS2V5KGNvbnp0cnVjdG9yLmRlY2xhcmF0aW9uLm5hbWUsIGV4cHIubGluZSksIFRva2VuVHlwZS5Eb3QsIGV4cHIubGluZSksXHJcbiAgICAgICAgICAgICAgICAgICBjb256dHJ1Y3Rvci5kZWNsYXJhdGlvbi5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgbmV3Q2FsbC5hcmdzLFxyXG4gICAgICAgICAgICAgICAgICAgZW50aXR5LFxyXG4gICAgICAgICAgICAgICAgICAgZXhwci5saW5lXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbnRpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0RGljdGlvbmFyeUV4cHIoZXhwcjogRXhwci5EaWN0aW9uYXJ5KTogJEFueSB7XHJcbiAgICAgICAgY29uc3QgZGljdCA9IG5ldyAkRGljdGlvbmFyeShuZXcgTWFwKCkpO1xyXG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgZXhwci5wcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSAgPSB0aGlzLmV2YWx1YXRlKChwcm9wZXJ0eSBhcyBFeHByLlNldCkua2V5KTtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmV2YWx1YXRlKChwcm9wZXJ0eSBhcyBFeHByLlNldCkudmFsdWUpO1xyXG4gICAgICAgICAgICBkaWN0LnNldChrZXksIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0S2V5RXhwcihleHByOiBFeHByLktleSk6ICRBbnkge1xyXG4gICAgICAgIHJldHVybiBuZXcgJEFueShleHByLm5hbWUubGl0ZXJhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0R2V0RXhwcihleHByOiBFeHByLkdldCk6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuZXZhbHVhdGUoZXhwci5lbnRpdHkpO1xyXG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuZXZhbHVhdGUoZXhwci5rZXkpO1xyXG4gICAgICAgIGlmIChlbnRpdHkuaXNOdWxsKCkgJiYgZXhwci50eXBlID09PSBUb2tlblR5cGUuUXVlc3Rpb25Eb3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZW50aXR5LmdldChrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdFNldEV4cHIoZXhwcjogRXhwci5TZXQpOiAkQW55IHtcclxuICAgICAgICBjb25zdCBlbnRpdHkgPSB0aGlzLmV2YWx1YXRlKGV4cHIuZW50aXR5KTtcclxuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmV2YWx1YXRlKGV4cHIua2V5KTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZXZhbHVhdGUoZXhwci52YWx1ZSk7XHJcbiAgICAgICAgZW50aXR5LnNldChrZXksIHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdmFsdWUudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0RnVuY1N0bXQoc3RtdDogU3RtdC5GdW5jKTogJEFueSB7XHJcbiAgICAgICAgY29uc3QgZnVuYyA9IG5ldyAkRnVuY3Rpb24oc3RtdCwgdGhpcy5zY29wZSk7XHJcbiAgICAgICAgdGhpcy5zY29wZS5kZWZpbmUoc3RtdC5uYW1lLmxleGVtZSwgZnVuYyk7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0Q2xhc3NTdG10KHN0bXQ6IFN0bXQuQ2xhc3MpOiAkQW55IHtcclxuICAgICAgICBsZXQgcGFyZW50OiAkQW55O1xyXG5cclxuICAgICAgICBpZiAoc3RtdC5wYXJlbnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcGFyZW50ID0gbmV3ICROdWxsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGFyZW50ID0gdGhpcy5zY29wZS5nZXQoc3RtdC5wYXJlbnQubGV4ZW1lLCBzdG10LnBhcmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtZXRob2RzID0gbmV3IE1hcDxhbnksICRBbnk+KCk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgbWV0aG9kIG9mIHN0bXQubWV0aG9kcykge1xyXG4gICAgICAgICAgICBtZXRob2RzLnNldChtZXRob2QubmFtZS5sZXhlbWUsIG5ldyAkRnVuY3Rpb24obWV0aG9kLCB0aGlzLnNjb3BlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNsYXp6ID0gbmV3ICRDbGFzcyhzdG10Lm5hbWUubGV4ZW1lLCBtZXRob2RzLCBwYXJlbnQpO1xyXG4gICAgICAgIHRoaXMuc2NvcGUuZGVmaW5lKHN0bXQubmFtZS5sZXhlbWUsIGNsYXp6KTtcclxuICAgICAgICByZXR1cm4gY2xheno7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0TGFtYmRhRXhwcihleHByOiBFeHByLkxhbWJkYSk6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IGxhbWJkYTogU3RtdC5GdW5jID0gZXhwci5sYW1iZGEgYXMgU3RtdC5GdW5jO1xyXG4gICAgICAgIGNvbnN0IGZ1bmM6ICRGdW5jdGlvbiA9IG5ldyAkRnVuY3Rpb24obGFtYmRhLCB0aGlzLnNjb3BlKTtcclxuICAgICAgICByZXR1cm4gZnVuYztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRSZXR1cm5TdG10KHN0bXQ6IFN0bXQuUmV0dXJuKTogJEFueSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gbmV3ICROdWxsKCk7XHJcbiAgICAgICAgaWYgKHN0bXQudmFsdWUpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmV2YWx1YXRlKHN0bXQudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgJEFueSh2YWx1ZSwgRGF0YVR5cGUuUmV0dXJuKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRCcmVha1N0bXQoc3RtdDogU3RtdC5CcmVhayk6ICRBbnkge1xyXG4gICAgICAgIHRocm93IG5ldyAkQW55KG51bGwsIERhdGFUeXBlLkJyZWFrKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRDb250aW51ZVN0bXQoc3RtdDogU3RtdC5Db250aW51ZSk6ICRBbnkge1xyXG4gICAgICAgIHRocm93IG5ldyAkQW55KG51bGwsIERhdGFUeXBlLkNvbnRpbnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRSYW5nZUV4cHIoZXhwcjogRXhwci5SYW5nZSk6ICRBbnkge1xyXG4gICAgICAgIHJldHVybiBuZXcgJFJhbmdlKG5ldyBSYW5nZVZhbHVlKFxyXG4gICAgICAgICAgICBleHByLnN0YXJ0ID8gdGhpcy5ldmFsdWF0ZShleHByLnN0YXJ0KS52YWx1ZSA6IG51bGwsXHJcbiAgICAgICAgICAgIGV4cHIuZW5kID8gdGhpcy5ldmFsdWF0ZShleHByLmVuZCkudmFsdWUgOiBudWxsLFxyXG4gICAgICAgICAgICBleHByLnN0ZXAgPyB0aGlzLmV2YWx1YXRlKGV4cHIuc3RlcCkudmFsdWUgOiBudWxsXHJcbiAgICAgICAgKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0VHlwZW9mRXhwcihleHByOiBFeHByLlR5cGVvZik6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5ldmFsdWF0ZShleHByLnZhbHVlKTtcclxuICAgICAgICByZXR1cm4gbmV3ICRTdHJpbmcoRGF0YVR5cGVbdmFsdWUudHlwZV0udG9Mb3dlckNhc2UoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpc2l0SXNFeHByKGV4cHI6IEV4cHIuSW5zdGFuY2VPZik6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLmV2YWx1YXRlKGV4cHIubGVmdCk7XHJcbiAgICAgICAgY29uc3QgcmlnaHQgPSBEYXRhVHlwZVtjYXBpdGFsaXplKGV4cHIucmlnaHQubGV4ZW1lKV07XHJcbiAgICAgICAgLy8gaXMgZGlyZWN0IGluc3RhbmNlIG9mIGNsYXNzXHJcbiAgICAgICAgaWYgKGxlZnQuaXNPYmplY3QoKSAmJiAobGVmdCBhcyAkT2JqZWN0KS5uYW1lID09PSBleHByLnJpZ2h0LmxleGVtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpcyBub3QgYSB0eXBlXHJcbiAgICAgICAgaWYgKHR5cGVvZiByaWdodCA9PT0gJ3VuZGVmaW5lZCcgfHwgaXNOYU4ocmlnaHQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4oZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpcyBhIHR5cGVcclxuICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKGxlZnQudHlwZSA9PT0gcmlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aXNpdEluc3RhbmNlT2ZFeHByKGV4cHI6IEV4cHIuSW5zdGFuY2VPZik6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLmV2YWx1YXRlKGV4cHIubGVmdCk7XHJcbiAgICAgICAgaWYgKCFsZWZ0LmlzT2JqZWN0KCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbihmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGV4cHIucmlnaHQubGV4ZW1lO1xyXG5cclxuICAgICAgICAvLyBBbGwgaW5zdGFuY2VzIGRlcml2ZSBmcm9tIE9iamVjdFxyXG4gICAgICAgIGlmIChjbGFzc05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbih0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBsZWZ0IGFzICRPYmplY3Q7XHJcbiAgICAgICAgbGV0IGNvbnp0cnVjdG9yID0gaW5zdGFuY2UuY29uenRydWN0b3IgYXMgJENsYXNzO1xyXG4gICAgICAgIGlmIChjb256dHJ1Y3Rvci5uYW1lID09PSBjbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbih0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKCFjb256dHJ1Y3Rvci5wYXJlbnQuaXNOdWxsKCkpIHtcclxuICAgICAgICAgICAgY29uenRydWN0b3IgPSBjb256dHJ1Y3Rvci5wYXJlbnQgYXMgJENsYXNzO1xyXG4gICAgICAgICAgICBpZiAoY29uenRydWN0b3IubmFtZSA9PT0gY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4oZmFsc2UpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRWb2lkRXhwcihleHByOiBFeHByLlZvaWQpOiAkQW55IHtcclxuICAgICAgICB0aGlzLmV2YWx1YXRlKGV4cHIudmFsdWUpO1xyXG4gICAgICAgIHJldHVybiBuZXcgJE51bGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmlzaXRJbkV4cHIoZXhwcjogRXhwci5Jbik6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuZXZhbHVhdGUoZXhwci5rZXkpO1xyXG4gICAgICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuZXZhbHVhdGUoZXhwci5lbnRpdHkpO1xyXG4gICAgICAgIGlmIChlbnRpdHkuaXNLZXlWYWx1ZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4oZW50aXR5LnZhbHVlLmhhcyhrZXkudmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVudGl0eS5pc0xpc3QoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKHR5cGVvZiBlbnRpdHkudmFsdWVba2V5LnZhbHVlXSAhPT0gJ3VuZGVmaW5lZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZW50aXR5LmlzU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbihlbnRpdHkudmFsdWUuaW5jbHVkZXMoa2V5LnZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZXJyb3IoYE9wZXJhdG9yIFwiaW5cIiBjYW4ndCBiZSB1c2VkIG9uIHR5cGUgJHtEYXRhVHlwZVtlbnRpdHkudHlwZV19IHdpdGggdmFsdWUgXCIke2VudGl0eX1cImApO1xyXG4gICAgICAgIHJldHVybiBuZXcgJE51bGwoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0ICogYXMgRXhwciBmcm9tICcuL3R5cGVzL2V4cHJlc3Npb24nO1xyXG5pbXBvcnQgKiBhcyBTdG10IGZyb20gJy4vdHlwZXMvc3RhdGVtZW50JztcclxuaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gJy4vY29uc29sZSc7XHJcbmltcG9ydCB7IFRva2VuLCBUb2tlblR5cGUgfSBmcm9tICcuL3Rva2VuJztcclxuaW1wb3J0IHsgJEJvb2xlYW4gfSBmcm9tICcuL3R5cGVzL2Jvb2xlYW4nO1xyXG5pbXBvcnQgeyAkTnVsbCB9IGZyb20gJy4vdHlwZXMvbnVsbCc7XHJcbmltcG9ydCB7ICROdW1iZXIgfSBmcm9tICcuL3R5cGVzL251bWJlcic7XHJcbmltcG9ydCB7ICRFcnJvciB9IGZyb20gJy4vdHlwZXMvZXJyb3InO1xyXG5kZWNsYXJlIHZhciBjb256b2xlOiBDb25zb2xlO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnNlciB7XHJcbiAgICBwcml2YXRlIGN1cnJlbnQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgdG9rZW5zOiBUb2tlbltdO1xyXG4gICAgcHVibGljIGVycm9yczogc3RyaW5nW107XHJcbiAgICBwdWJsaWMgZXJyb3JMZXZlbCA9IDE7XHJcblxyXG4gICAgcHVibGljIHBhcnNlKHRva2VuczogVG9rZW5bXSk6IFN0bXQuU3RtdFtdIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSAwO1xyXG4gICAgICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xyXG4gICAgICAgIHRoaXMuZXJyb3JzID0gW107XHJcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50czogU3RtdC5TdG10W10gPSBbXTtcclxuICAgICAgICB3aGlsZSAoIXRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHN0YXRlbWVudHMucHVzaCh0aGlzLmRlY2xhcmF0aW9uKCkpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mICRFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goYFBhcnNlIEVycm9yICgke2UubGluZX06JHtlLmNvbH0pID0+ICR7ZS52YWx1ZX1gKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaChlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lcnJvcnMubGVuZ3RoID4gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ1BhcnNlIEVycm9yIGxpbWl0IGV4Y2VlZGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZW1lbnRzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc3luY2hyb25pemUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RhdGVtZW50cztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1hdGNoKC4uLnR5cGVzOiBUb2tlblR5cGVbXSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgdHlwZSBvZiB0eXBlcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGVjayh0eXBlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZHZhbmNlKCk6IFRva2VuIHtcclxuICAgICAgICBpZiAoIXRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwZWVrKCk6IFRva2VuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5jdXJyZW50XTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByZXZpb3VzKCk6IFRva2VuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5jdXJyZW50IC0gMV07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVjayh0eXBlOiBUb2tlblR5cGUpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wZWVrKCkudHlwZSA9PT0gdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVvZigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGVjayhUb2tlblR5cGUuRW9mKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbnN1bWUodHlwZTogVG9rZW5UeXBlLCBtZXNzYWdlOiBzdHJpbmcpOiBUb2tlbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2sodHlwZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IodGhpcy5wcmV2aW91cygpLCBtZXNzYWdlICsgYCwgdW5leHBlY3RlZCB0b2tlbiBcIiR7dGhpcy5wZWVrKCkubGV4ZW1lfVwiYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHRyYVNlbWljb2xvbigpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBtYXRjaCA9IHRoaXMubWF0Y2goVG9rZW5UeXBlLlNlbWljb2xvbik7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2soVG9rZW5UeXBlLlNlbWljb2xvbikpIHtcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuY2hlY2soVG9rZW5UeXBlLlNlbWljb2xvbikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuU2VtaWNvbG9uLCAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXJyb3IodG9rZW46IFRva2VuLCBtZXNzYWdlOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIHRocm93IG5ldyAkRXJyb3IobWVzc2FnZSwgdG9rZW4ubGluZSwgdG9rZW4uY29sKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHdhcm5pbmcobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXJyb3JMZXZlbCA9PT0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uem9sZS53YXJuKGBbbGluZSAoJHt0b2tlbi5saW5lfSkgcGFyc2Ugd2FybmluZyBhdCBcIiR7dG9rZW4ubGV4ZW1lfVwiXSA9PiAke21lc3NhZ2V9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3luY2hyb25pemUoKTogdm9pZCB7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMucGVlaygpLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkNsYXNzOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuRnVuY3Rpb246XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5WYXI6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5Gb3I6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5JZjpcclxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLldoaWxlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuRG86XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5QcmludDpcclxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlJldHVybjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5TZW1pY29sb24gfHwgdGhpcy5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLlJpZ2h0QnJhY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIH0gd2hpbGUgKCF0aGlzLmVvZigpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlY2xhcmF0aW9uKCk6IFN0bXQuU3RtdCB7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkNsYXNzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbGFzc0RlY2xhcmF0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5GdW5jdGlvbikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnVuY0RlY2xhcmF0aW9uKFwiZnVuY3Rpb25cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5WYXIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhckRlY2xhcmF0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlbWVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xhc3NEZWNsYXJhdGlvbigpOiBTdG10LkNsYXNzIHtcclxuICAgICAgICBjb25zdCBuYW1lOiBUb2tlbiA9IHRoaXMuY29uc3VtZShUb2tlblR5cGUuSWRlbnRpZmllciwgYEV4cGVjdGVkIGEgY2xhc3MgbmFtZWApO1xyXG4gICAgICAgIGxldCBwYXJlbnQ6IFRva2VuID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuRXh0ZW5kcykpIHtcclxuICAgICAgICAgICAgcGFyZW50ICA9IHRoaXMuY29uc3VtZShUb2tlblR5cGUuSWRlbnRpZmllciwgYEV4cGVjdGVkIGEgcGFyZW50IG5hbWVgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5MZWZ0QnJhY2UsIGBFeHBlY3RlZCBvcGVuIGJyYWNlIFwie1wiIGFmdGVyIGNsYXNzIG5hbWVgKTtcclxuICAgICAgICBjb25zdCBtZXRob2RzOiBTdG10LkZ1bmNbXSA9IFtdO1xyXG5cclxuICAgICAgICB3aGlsZSAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLlJpZ2h0QnJhY2UpICYmICF0aGlzLmVvZigpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrKFRva2VuVHlwZS5GdW5jdGlvbikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuRnVuY3Rpb24sICcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtZXRob2RzLnB1c2godGhpcy5mdW5jRGVjbGFyYXRpb24oXCJtZXRob2RcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5SaWdodEJyYWNlLCBgRXhwZWN0ZWQgXCJ9XCIgYWZ0ZXIgY2xhc3MgXCIke25hbWUubGl0ZXJhbH1cIiBtZXRob2RzYCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZXh0cmFTZW1pY29sb24oKSkge1xyXG4gICAgICAgICAgICB0aGlzLndhcm5pbmcoYFVubmVjZXNzYXJ5IHNlbWljb2xvbiBhZnRlciBjbGFzcyAke25hbWUubGV4ZW1lfSBkZWNsYXJhdGlvbmApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFN0bXQuQ2xhc3MobmFtZSwgcGFyZW50LCBtZXRob2RzLCBuYW1lLmxpbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZnVuY0RlY2xhcmF0aW9uKGtpbmQ6IHN0cmluZyk6IFN0bXQuRnVuYyB7XHJcbiAgICAgICAgY29uc3QgbmFtZTogVG9rZW4gPSB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLklkZW50aWZpZXIsIGBFeHBlY3RlZCBhICR7a2luZH0gbmFtZWApO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZ1bmNQYXJhbXNCb2R5KG5hbWUsIGtpbmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZnVuY1BhcmFtcyhraW5kOiBzdHJpbmcpOiBUb2tlbltdIHtcclxuICAgICAgICBjb25zdCBwYXJhbXM6IFRva2VuW10gPSBbXTtcclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLlJpZ2h0UGFyZW4pKSB7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMubGVuZ3RoID49IDI1NSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IodGhpcy5wZWVrKCksIGBQYXJhbWV0ZXIgY291bnQgZXhjZWVkcyAyNTVgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKHRoaXMuY29uc3VtZShUb2tlblR5cGUuSWRlbnRpZmllciwgYEV4cGVjdGVkIGEgcGFyYW1ldGVyIG5hbWVgKSk7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkNvbW1hKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuUmlnaHRQYXJlbiwgYEV4cGVjdGVkIGNsb3NlIHBhcmVudGhlc2lzIFwiKVwiIGFmdGVyICR7a2luZH0gcGFyYW1ldGVyc2ApO1xyXG4gICAgICAgIHJldHVybiBwYXJhbXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmdW5jUGFyYW1zQm9keShuYW1lOiBUb2tlbiwga2luZDogc3RyaW5nKTogU3RtdC5GdW5jIHtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLkxlZnRQYXJlbiwgYEV4cGVjdGVkIG9wZW4gcGFyZW50aGVzaXMgXCIoXCIgYWZ0ZXIgJHtraW5kfWApO1xyXG4gICAgICAgIGNvbnN0IHBhcmFtczogVG9rZW5bXSA9IHRoaXMuZnVuY1BhcmFtcyhraW5kKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkxlZnRCcmFjZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgYm9keTogU3RtdC5TdG10W10gPSB0aGlzLmJsb2NrKCk7XHJcbiAgICAgICAgICAgIGlmIChuYW1lLnR5cGUgIT09IFRva2VuVHlwZS5MYW1iZGEgJiYgdGhpcy5leHRyYVNlbWljb2xvbigpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndhcm5pbmcoYFVubmVjZXNzYXJ5IHNlbWljb2xvbiBhZnRlciBmdW5jdGlvbiAke25hbWUubGV4ZW1lfSBkZWNsYXJhdGlvbmApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3RtdC5GdW5jKG5hbWUsIHBhcmFtcywgYm9keSwgbmFtZS5saW5lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5BcnJvdykpIHtcclxuICAgICAgICAgICAgY29uc3QgYm9keTogU3RtdC5TdG10W10gPSBbXTtcclxuICAgICAgICAgICAgbGV0IGFycm93OiBFeHByLkV4cHI7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleXdvcmQ6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLlNlbWljb2xvbikpIHtcclxuICAgICAgICAgICAgICAgIGFycm93ID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tYXRjaChUb2tlblR5cGUuU2VtaWNvbG9uKTtcclxuICAgICAgICAgICAgYm9keS5wdXNoKG5ldyBTdG10LlJldHVybihrZXl3b3JkLCBhcnJvdywga2V5d29yZC5saW5lKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3RtdC5GdW5jKG5hbWUsIHBhcmFtcywgYm9keSwgbmFtZS5saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5MZWZ0QnJhY2UsIGBFeHBlY3QgXCJ7XCIgYmVmb3JlICR7a2luZH0gYm9keWApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdmFyRGVjbGFyYXRpb24oKTogU3RtdC5TdG10IHtcclxuICAgICAgICBjb25zdCBuYW1lOiBUb2tlbiA9IHRoaXMuY29uc3VtZShUb2tlblR5cGUuSWRlbnRpZmllciwgYEV4cGVjdGVkIGEgdmFyaWFibGUgbmFtZSBhZnRlciBcInZhclwiIGtleXdvcmRgKTtcclxuICAgICAgICBsZXQgaW5pdGlhbGl6ZXI6IEV4cHIuRXhwciAgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5FcXVhbCkpIHtcclxuICAgICAgICAgICAgaW5pdGlhbGl6ZXIgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5TZW1pY29sb24sIGBFeHBlY3RlZCBzZW1pY29sb24gXCI7XCIgYWZ0ZXIgYSB2YXJpYWJsZSBkZWNsYXJhdGlvbmApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFN0bXQuVmFyKG5hbWUsIG51bGwsIGluaXRpYWxpemVyLCBuYW1lLmxpbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGVtZW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5JZikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWZTdGF0ZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlByaW50KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmludFN0YXRlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuRG8pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRvV2hpbGVTdGF0ZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLldoaWxlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy53aGlsZVN0YXRlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuRm9yKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JTdGF0ZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkxlZnRCcmFjZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdG10LkJsb2NrKHRoaXMuYmxvY2soKSwgdGhpcy5wcmV2aW91cygpLmxpbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuUmV0dXJuKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXR1cm5TdGF0ZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkJyZWFrKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5icmVha1N0YXRlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuQ29udGludWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRpbnVlU3RhdGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmV4cHJlc3Npb25TdGF0ZW1lbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlmU3RhdGVtZW50KCk6IFN0bXQuU3RtdCB7XHJcbiAgICAgICAgY29uc3Qga2V5d29yZCA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLkxlZnRQYXJlbiwgYEV4cGVjdGVkIG9wZW4gcGFyZW50aGVzaXMgXCIoXCIgYWZ0ZXIgYW4gXCJpZlwiIGtleXdvcmRgKTtcclxuICAgICAgICBjb25zdCBjb25kaXRpb246IEV4cHIuRXhwciA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuUmlnaHRQYXJlbiwgYEV4cGVjdGVkIGNsb3NlIHBhcmVudGhlc2lzIFwiKVwiIGFmdGVyIFwiaWZcIiBzdGF0ZW1lbnQgY29uZGl0aW9uYCk7XHJcbiAgICAgICAgY29uc3QgdGhlblN0bXQ6IFN0bXQuU3RtdCA9IHRoaXMuc3RhdGVtZW50KCk7XHJcbiAgICAgICAgbGV0IGVsc2VTdG10OiBTdG10LlN0bXQgPSAgbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuRWxzZSkpIHtcclxuICAgICAgICAgICAgZWxzZVN0bXQgPSB0aGlzLnN0YXRlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFN0bXQuSWYoY29uZGl0aW9uLCB0aGVuU3RtdCwgZWxzZVN0bXQsIGtleXdvcmQubGluZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB3aGlsZVN0YXRlbWVudCgpOiBTdG10LlN0bXQge1xyXG4gICAgICAgIGNvbnN0IGtleXdvcmQgPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5MZWZ0UGFyZW4sIGBFeHBlY3RlZCBvcGVuIHBhcmVudGhlc2lzIFwiKFwiIGFmdGVyIGEgXCJ3aGlsZVwiIHN0YXRlbWVudGApO1xyXG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbjogRXhwci5FeHByID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5SaWdodFBhcmVuLCBgRXhwZWN0ZWQgY2xvc2UgcGFyZW50aGVzaXMgXCIpXCIgYWZ0ZXIgXCJ3aGlsZVwiIGNvbmRpdGlvbmApO1xyXG4gICAgICAgIGNvbnN0IGxvb3A6IFN0bXQuU3RtdCA9IHRoaXMuc3RhdGVtZW50KCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdG10LldoaWxlKGNvbmRpdGlvbiwgbG9vcCwga2V5d29yZC5saW5lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZvclN0YXRlbWVudCgpOiBTdG10LlN0bXQge1xyXG4gICAgICAgIGNvbnN0IGtleXdvcmQgPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5MZWZ0UGFyZW4sIGBFeHBlY3RlZCBvcGVuIHBhcmVudGhlc2lzIFwiKFwiIGFmdGVyIGEgXCJmb3JcIiBzdGF0ZW1lbnRgKTtcclxuXHJcbiAgICAgICAgbGV0IGluaXRpYWxpemVyOiBTdG10LlN0bXQ7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlNlbWljb2xvbikpIHtcclxuICAgICAgICAgICAgaW5pdGlhbGl6ZXIgPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuVmFyKSkge1xyXG4gICAgICAgICAgICBpbml0aWFsaXplciA9IHRoaXMudmFyRGVjbGFyYXRpb24oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbml0aWFsaXplciA9IHRoaXMuZXhwcmVzc2lvblN0YXRlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY29uZGl0aW9uOiBFeHByLkV4cHI7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5TZW1pY29sb24pKSB7XHJcbiAgICAgICAgICAgIGNvbmRpdGlvbiA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlNlbWljb2xvbiwgYEV4cGVjdGVkIHNlbWljb2xvbiBcIjtcIiBhZnRlciBhIFwiZm9yXCIgc3RhdGVtZW50IGxvb3AgY29uZGl0aW9uYCk7XHJcbiAgICAgICAgbGV0IGluY3JlbWVudDogRXhwci5FeHByO1xyXG4gICAgICAgIGlmICghdGhpcy5jaGVjayhUb2tlblR5cGUuUmlnaHRQYXJlbikpIHtcclxuICAgICAgICAgICAgaW5jcmVtZW50ID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuUmlnaHRQYXJlbiwgYEV4cGVjdGVkIHNlbWljb2xvbiBcIjtcIiBhZnRlciBhIFwiZm9yXCIgc3RlbWVudCBpbmNyZW1lbnQgZXhwcmVzc2lvbmApO1xyXG4gICAgICAgIGxldCBib2R5OiBTdG10LlN0bXQgPSB0aGlzLnN0YXRlbWVudCgpO1xyXG4gICAgICAgIGlmIChpbmNyZW1lbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgYm9keSA9IG5ldyBTdG10LkJsb2NrKFtcclxuICAgICAgICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICAgICAgICBuZXcgU3RtdC5FeHByZXNzaW9uKGluY3JlbWVudCwga2V5d29yZC5saW5lKVxyXG4gICAgICAgICAgICBdLCBrZXl3b3JkLmxpbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZGl0aW9uID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbmRpdGlvbiA9IG5ldyBFeHByLkxpdGVyYWwobmV3ICRCb29sZWFuKHRydWUpLCBrZXl3b3JkLmxpbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib2R5ID0gbmV3IFN0bXQuV2hpbGUoY29uZGl0aW9uLCBib2R5LCBrZXl3b3JkLmxpbmUpO1xyXG4gICAgICAgIGlmIChpbml0aWFsaXplciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBib2R5ID0gbmV3IFN0bXQuQmxvY2soW1xyXG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZXIsXHJcbiAgICAgICAgICAgICAgICBib2R5XHJcbiAgICAgICAgICAgIF0sIGtleXdvcmQubGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBib2R5O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZG9XaGlsZVN0YXRlbWVudCgpOiBTdG10LlN0bXQge1xyXG4gICAgICAgIGNvbnN0IGtleXdvcmQgPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgY29uc3QgbG9vcDogU3RtdC5TdG10ID0gdGhpcy5zdGF0ZW1lbnQoKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLldoaWxlLCBgRXhwZWN0ZWQgYSBcIndoaWxlXCIgY29uZGl0aW9uIGFmdGVyIFwiZG9cIiBzdGF0ZW1lbnRgKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLkxlZnRQYXJlbiwgYEV4cGVjdGVkIG9wZW4gcGFyZW50aGVzaXMgXCIoXCIgYWZ0ZXIgYSBcIndoaWxlXCIga2V5d29yZGApO1xyXG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbjogRXhwci5FeHByID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5SaWdodFBhcmVuLCBgRXhwZWN0ZWQgY2xvc2UgcGFyZW50aGVzaXMgXCIpXCIgYWZ0ZXIgXCJ3aGlsZVwiIGNvbmRpdGlvbmApO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuU2VtaWNvbG9uLCBgRXhwZWN0ZWQgc2VtaWNvbG9uIFwiO1wiIGFmdGVyIGEgZG8gd2hpbGUgY29uZGl0aW9uYCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdG10LkRvV2hpbGUobG9vcCwgY29uZGl0aW9uLCBrZXl3b3JkLmxpbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJpbnRTdGF0ZW1lbnQoKTogU3RtdC5TdG10IHtcclxuICAgICAgICBjb25zdCBrZXl3b3JkID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlOiBFeHByLkV4cHIgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlNlbWljb2xvbiwgYEV4cGVjdGVkIHNlbWljb2xvbiBcIjtcIiBhZnRlciBleHByZXNzaW9uYCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdG10LlByaW50KHZhbHVlLCBrZXl3b3JkLmxpbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmV0dXJuU3RhdGVtZW50KCk6IFN0bXQuU3RtdCB7XHJcbiAgICAgICAgY29uc3Qga2V5d29yZDogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5TZW1pY29sb24pKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlNlbWljb2xvbiwgYEV4ZWN0ZWQgc2VtaWNvbG9uIFwiO1wiIGFmdGVyIHJldHVybiBzdGF0ZW1lbnRgKTtcclxuICAgICAgICByZXR1cm4gbmV3IFN0bXQuUmV0dXJuKGtleXdvcmQsIHZhbHVlLCBrZXl3b3JkLmxpbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYnJlYWtTdGF0ZW1lbnQoKTogU3RtdC5TdG10IHtcclxuICAgICAgICBjb25zdCBrZXl3b3JkOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlNlbWljb2xvbiwgYEV4ZWN0ZWQgc2VtaWNvbG9uIFwiO1wiIGFmdGVyIGJyZWFrIHN0YXRlbWVudGApO1xyXG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5CcmVhayhrZXl3b3JkLCBrZXl3b3JkLmxpbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29udGludWVTdGF0ZW1lbnQoKTogU3RtdC5TdG10IHtcclxuICAgICAgICBjb25zdCBrZXl3b3JkOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlNlbWljb2xvbiwgYEV4ZWN0ZWQgc2VtaWNvbG9uIFwiO1wiIGFmdGVyIGNvbnRpbnVlIHN0YXRlbWVudGApO1xyXG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5Db250aW51ZShrZXl3b3JkLCBrZXl3b3JkLmxpbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYmxvY2soKTogU3RtdC5TdG10W10ge1xyXG4gICAgICAgIGNvbnN0IHN0YXRlbWVudHM6IFN0bXQuU3RtdFtdID0gW107XHJcbiAgICAgICAgd2hpbGUgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5SaWdodEJyYWNlKSAmJiAhdGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICBzdGF0ZW1lbnRzLnB1c2godGhpcy5kZWNsYXJhdGlvbigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5SaWdodEJyYWNlLCBgRXhwZWN0ZWQgY2xvc2UgYnJhY2UgXCJ9XCIgYWZ0ZXIgYmxvY2sgc3RhdGVtZW50YCk7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlbWVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHByZXNzaW9uU3RhdGVtZW50KCk6IFN0bXQuU3RtdCB7XHJcbiAgICAgICAgY29uc3QgZXhwcmVzc2lvbjogRXhwci5FeHByID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5TZW1pY29sb24sIGBFeHBlY3RlZCBzZW1pY29sb24gXCI7XCIgYWZ0ZXIgJHtleHByZXNzaW9ufSBleHByZXNzaW9uYCk7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlNlbWljb2xvbikpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIHRoaXMud2FybmluZyhgW2xpbmUgKCR7dG9rZW4ubGluZX0pIHBhcnNlIHdhcm5pbmcgYXQgXCIke3Rva2VuLmxleGVtZX1cIl0gPT4gdW5uZWNlc3Nhcnkgc2VtaWNvbG9uIG9yIGVtcHR5IHN0YXRlbWVudGApO1xyXG4gICAgICAgICAgICAvLyBjb25zdW1lIGFsbCBzZW1pY29sb25zXHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuU2VtaWNvbG9uKSl7IH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5FeHByZXNzaW9uKGV4cHJlc3Npb24sIGV4cHJlc3Npb24ubGluZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHByZXNzaW9uKCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNzaWdubWVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXNzaWdubWVudCgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGNvbnN0IGV4cHI6IEV4cHIuRXhwciA9IHRoaXMudGVybmFyeSgpO1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5FcXVhbCwgVG9rZW5UeXBlLlBsdXNFcXVhbCxcclxuICAgICAgICAgICAgVG9rZW5UeXBlLk1pbnVzRXF1YWwsIFRva2VuVHlwZS5TdGFyRXF1YWwsIFRva2VuVHlwZS5TbGFzaEVxdWFsKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZTogRXhwci5FeHByID0gdGhpcy5hc3NpZ25tZW50KCk7XHJcbiAgICAgICAgICAgIGlmIChleHByIGluc3RhbmNlb2YgRXhwci5WYXJpYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZTogVG9rZW4gPSBleHByLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBpZiAob3BlcmF0b3IudHlwZSAhPT0gVG9rZW5UeXBlLkVxdWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRXhwci5CaW5hcnkobmV3IEV4cHIuVmFyaWFibGUobmFtZSwgbmFtZS5saW5lKSwgb3BlcmF0b3IsIHZhbHVlLCBvcGVyYXRvci5saW5lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5Bc3NpZ24obmFtZSwgdmFsdWUsIG5hbWUubGluZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXhwciBpbnN0YW5jZW9mIEV4cHIuR2V0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3BlcmF0b3IudHlwZSAhPT0gVG9rZW5UeXBlLkVxdWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRXhwci5CaW5hcnkobmV3IEV4cHIuR2V0KGV4cHIuZW50aXR5LCBleHByLmtleSwgZXhwci50eXBlLCBleHByLmxpbmUpLCBvcGVyYXRvciwgdmFsdWUsIG9wZXJhdG9yLmxpbmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlNldChleHByLmVudGl0eSwgZXhwci5rZXksIHZhbHVlLCBleHByLmxpbmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3Iob3BlcmF0b3IsIGBJbnZhbGlkIGwtdmFsdWUsIGlzIG5vdCBhbiBhc3NpZ25pbmcgdGFyZ2V0LmApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRlcm5hcnkoKTogRXhwci5FeHByIHtcclxuICAgICAgICBjb25zdCBleHByID0gdGhpcy5udWxsQ29hbGVzY2luZygpO1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5RdWVzdGlvbikpIHtcclxuICAgICAgICAgICAgY29uc3QgdGhlbkV4cHI6IEV4cHIuRXhwciA9IHRoaXMudGVybmFyeSgpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLkNvbG9uLCBgRXhwZWN0ZWQgXCI6XCIgYWZ0ZXIgdGVybmFyeSA/IGV4cHJlc3Npb25gKTtcclxuICAgICAgICAgICAgY29uc3QgZWxzZUV4cHI6IEV4cHIuRXhwciA9IHRoaXMudGVybmFyeSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuVGVybmFyeShleHByLCB0aGVuRXhwciwgZWxzZUV4cHIsIGV4cHIubGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBleHByO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbnVsbENvYWxlc2NpbmcoKTogRXhwci5FeHByIHtcclxuICAgICAgICBjb25zdCBleHByID0gdGhpcy5sb2dpY2FsT3IoKTtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuUXVlc3Rpb25RdWVzdGlvbikpIHtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHRFeHByOiBFeHByLkV4cHIgPSB0aGlzLm51bGxDb2FsZXNjaW5nKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5OdWxsQ29hbGVzY2luZyhleHByLCByaWdodEV4cHIsIGV4cHIubGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBleHByO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9naWNhbE9yKCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgbGV0IGV4cHIgPSB0aGlzLmxvZ2ljYWxBbmQoKTtcclxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuT3IpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMubG9naWNhbEFuZCgpO1xyXG4gICAgICAgICAgICBleHByID0gbmV3IEV4cHIuTG9naWNhbChleHByLCBvcGVyYXRvciwgcmlnaHQsIG9wZXJhdG9yLmxpbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvZ2ljYWxBbmQoKTogRXhwci5FeHByIHtcclxuICAgICAgICBsZXQgZXhwciA9IHRoaXMuZXF1YWxpdHkoKTtcclxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuQW5kKSkge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0OiBFeHByLkV4cHIgPSB0aGlzLmVxdWFsaXR5KCk7XHJcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5Mb2dpY2FsKGV4cHIsIG9wZXJhdG9yLCByaWdodCwgb3BlcmF0b3IubGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBleHByO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXF1YWxpdHkoKTogRXhwci5FeHByIHtcclxuICAgICAgICBsZXQgZXhwciAgPSB0aGlzLmluc3RhbmNlb2YoKTtcclxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChcclxuICAgICAgICAgICAgVG9rZW5UeXBlLkJhbmdFcXVhbCwgVG9rZW5UeXBlLkVxdWFsRXF1YWwpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMuaW5zdGFuY2VvZigpO1xyXG4gICAgICAgICAgICBleHByID0gbmV3IEV4cHIuQmluYXJ5KGV4cHIsIG9wZXJhdG9yLCByaWdodCwgb3BlcmF0b3IubGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBleHByO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5zdGFuY2VvZigpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGxldCBleHByID0gdGhpcy5pbigpO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5JcywgVG9rZW5UeXBlLkluc3RhbmNlb2YpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuSWRlbnRpZmllciwgVG9rZW5UeXBlLkNsYXNzLCBUb2tlblR5cGUuRnVuY3Rpb24sIFRva2VuVHlwZS5OdWxsKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAob3BlcmF0b3IudHlwZSA9PT0gVG9rZW5UeXBlLkluc3RhbmNlb2YpIHtcclxuICAgICAgICAgICAgICAgICAgICBleHByID0gbmV3IEV4cHIuSW5zdGFuY2VPZihleHByLCByaWdodCwgb3BlcmF0b3IubGluZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5JcyhleHByLCByaWdodCwgb3BlcmF0b3IubGluZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKHRoaXMucHJldmlvdXMoKSwgYEV4cGVjdGVkIGEgVHlwZSBvciBDbGFzc05hbWUgaWRlbnRpZmllciBhZnRlciBcImlzXCIgb3BlcmF0b3JgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluKCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgbGV0IGV4cHIgPSB0aGlzLmNvbXBhcmlzb24oKTtcclxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuSW4pKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBjb25zdCBlbnRpdHkgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkluKGV4cHIsIGVudGl0eSwgb3BlcmF0b3IubGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBleHByO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29tcGFyaXNvbigpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGxldCBleHByOiBFeHByLkV4cHIgPSB0aGlzLmFkZGl0aW9uKCk7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkdyZWF0ZXIsIFRva2VuVHlwZS5HcmVhdGVyRXF1YWwsIFRva2VuVHlwZS5MZXNzLCBUb2tlblR5cGUuTGVzc0VxdWFsKSkge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0OiBFeHByLkV4cHIgPSB0aGlzLmFkZGl0aW9uKCk7XHJcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5CaW5hcnkoZXhwciwgb3BlcmF0b3IsIHJpZ2h0LCBvcGVyYXRvci5saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRpdGlvbigpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGxldCBleHByOiBFeHByLkV4cHIgPSB0aGlzLm1vZHVsdXMoKTtcclxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuTWludXMsIFRva2VuVHlwZS5QbHVzKSkge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0OiBFeHByLkV4cHIgPSB0aGlzLm1vZHVsdXMoKTtcclxuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkJpbmFyeShleHByLCBvcGVyYXRvciwgcmlnaHQsIG9wZXJhdG9yLmxpbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vZHVsdXMoKTogRXhwci5FeHByIHtcclxuICAgICAgICBsZXQgZXhwcjogRXhwci5FeHByID0gdGhpcy5tdWx0aXBsaWNhdGlvbigpO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5QZXJjZW50KSkge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0OiBFeHByLkV4cHIgPSB0aGlzLm11bHRpcGxpY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5CaW5hcnkoZXhwciwgb3BlcmF0b3IsIHJpZ2h0LCBvcGVyYXRvci5saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtdWx0aXBsaWNhdGlvbigpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGxldCBleHByOiBFeHByLkV4cHIgPSB0aGlzLnR5cGVvZigpO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5TbGFzaCwgVG9rZW5UeXBlLlN0YXIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMudHlwZW9mKCk7XHJcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5CaW5hcnkoZXhwciwgb3BlcmF0b3IsIHJpZ2h0LCBvcGVyYXRvci5saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0eXBlb2YoKTogRXhwci5FeHByIHtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuVHlwZW9mKSkge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlOiBFeHByLkV4cHIgPSB0aGlzLnR5cGVvZigpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuVHlwZW9mKHZhbHVlLCBvcGVyYXRvci5saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudW5hcnkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVuYXJ5KCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLk1pbnVzLCBUb2tlblR5cGUuQmFuZywgVG9rZW5UeXBlLkRvbGxhciwgVG9rZW5UeXBlLlBsdXNQbHVzLCBUb2tlblR5cGUuTWludXNNaW51cykpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3I6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBjb25zdCByaWdodDogRXhwci5FeHByID0gdGhpcy51bmFyeSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuVW5hcnkob3BlcmF0b3IsIHJpZ2h0LCBvcGVyYXRvci5saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV3S2V5d29yZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbmV3S2V5d29yZCgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5OZXcpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleXdvcmQgPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdDogRXhwci5FeHByID0gdGhpcy5jYWxsKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5OZXcoY29uc3RydWN0LCBrZXl3b3JkLmxpbmUpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FsbCgpOiBFeHByLkV4cHIge1xyXG4gICAgICAgIGxldCBleHByOiBFeHByLkV4cHIgPSB0aGlzLnByaW1hcnkoKTtcclxuICAgICAgICBsZXQgY29uc3VtZWQgPSB0cnVlO1xyXG4gICAgICAgIGRvICB7XHJcbiAgICAgICAgICAgIGNvbnN1bWVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5MZWZ0UGFyZW4pKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdW1lZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJnczogRXhwci5FeHByW10gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLlJpZ2h0UGFyZW4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkNvbW1hKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVuOiBUb2tlbiA9IHRoaXMuY29uc3VtZShUb2tlblR5cGUuUmlnaHRQYXJlbiwgYEV4cGVjdGVkIFwiKVwiIGFmdGVyIGFyZ3VtZW50c2ApO1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5DYWxsKGV4cHIsIHBhcmVuLCBhcmdzLCBudWxsLCBwYXJlbi5saW5lKTtcclxuICAgICAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkxlZnRQYXJlbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5Eb3QsIFRva2VuVHlwZS5RdWVzdGlvbkRvdCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN1bWVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGV4cHIgPSB0aGlzLmRvdEdldChleHByLCB0aGlzLnByZXZpb3VzKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5MZWZ0QnJhY2tldCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN1bWVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGV4cHIgPSB0aGlzLmJyYWNrZXRHZXQoZXhwciwgdGhpcy5wcmV2aW91cygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gd2hpbGUgKGNvbnN1bWVkKTtcclxuICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRvdEdldChleHByOiBFeHByLkV4cHIsIG9wZXJhdG9yOiBUb2tlbik6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgY29uc3QgbmFtZTogVG9rZW4gPSB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLklkZW50aWZpZXIsIGBFeHBlY3QgcHJvcGVydHkgbmFtZSBhZnRlciAnLidgKTtcclxuICAgICAgICBjb25zdCBrZXk6IEV4cHIuS2V5ID0gbmV3IEV4cHIuS2V5KG5hbWUsIG5hbWUubGluZSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFeHByLkdldChleHByLCBrZXksIG9wZXJhdG9yLnR5cGUsIG5hbWUubGluZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBicmFja2V0R2V0KGV4cHI6IEV4cHIuRXhwciwgb3BlcmF0b3I6IFRva2VuKTogRXhwci5FeHByIHtcclxuICAgICAgICBsZXQga2V5OiBFeHByLkV4cHIgPSBudWxsO1xyXG4gICAgICAgIGxldCBlbmQ6IEV4cHIuRXhwciA9IG51bGw7XHJcbiAgICAgICAgbGV0IHN0ZXA6IEV4cHIuRXhwciA9IG51bGw7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5Db2xvbikpIHtcclxuICAgICAgICAgICAga2V5ID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5Db2xvbikgJiYgIXRoaXMuY2hlY2soVG9rZW5UeXBlLkNvbG9uKSkge1xyXG4gICAgICAgICAgICBlbmQgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkNvbG9uKSAmJiAhdGhpcy5jaGVjayhUb2tlblR5cGUuUmlnaHRCcmFja2V0KSkge1xyXG4gICAgICAgICAgICBzdGVwID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuUmlnaHRCcmFja2V0LCBgRXhwZWN0ZWQgXCJdXCIgYWZ0ZXIgYW4gaW5kZXhgKTtcclxuICAgICAgICBpZiAoIWtleSB8fCBlbmQgfHwgc3RlcCkge1xyXG4gICAgICAgICAgICBjb25zdCByYW5nZSA9IG5ldyBFeHByLlJhbmdlKGtleSwgZW5kLCBzdGVwLCBvcGVyYXRvci5saW5lKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkdldChleHByLCByYW5nZSwgb3BlcmF0b3IudHlwZSwgb3BlcmF0b3IubGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgRXhwci5HZXQoZXhwciwga2V5LCBvcGVyYXRvci50eXBlLCBvcGVyYXRvci5saW5lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByaW1hcnkoKTogRXhwci5FeHByIHtcclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuRmFsc2UpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5MaXRlcmFsKG5ldyAkQm9vbGVhbihmYWxzZSksIHRoaXMucHJldmlvdXMoKS5saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlRydWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5MaXRlcmFsKG5ldyAkQm9vbGVhbih0cnVlKSwgdGhpcy5wcmV2aW91cygpLmxpbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuTnVsbCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkxpdGVyYWwobmV3ICROdWxsKCksIHRoaXMucHJldmlvdXMoKS5saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLk51bWJlcikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkxpdGVyYWwobmV3ICROdW1iZXIodGhpcy5wcmV2aW91cygpLmxpdGVyYWwpLCB0aGlzLnByZXZpb3VzKCkubGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5TdHJpbmcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5adHJpbmcodGhpcy5wcmV2aW91cygpLmxpdGVyYWwsIHRoaXMucHJldmlvdXMoKS5saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlRlbXBsYXRlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuVGVtcGxhdGUodGhpcy5wcmV2aW91cygpLmxpdGVyYWwsIHRoaXMucHJldmlvdXMoKS5saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlJlZ2V4KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuUmVnRXgodGhpcy5wcmV2aW91cygpLmxpdGVyYWwsIHRoaXMucHJldmlvdXMoKS5saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkJhc2UpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmVuID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBwYXJlbi5sZXhlbWUgPSAndGhpcyc7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5CYXNlKHBhcmVuLCBwYXJlbi5saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLklkZW50aWZpZXIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSAgdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuUGx1c1BsdXMpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuUG9zdGZpeChpZGVudGlmaWVyLCAxLCBpZGVudGlmaWVyLmxpbmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5NaW51c01pbnVzKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlBvc3RmaXgoaWRlbnRpZmllciwgLTEsIGlkZW50aWZpZXIubGluZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlZhcmlhYmxlKGlkZW50aWZpZXIsIGlkZW50aWZpZXIubGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5MZWZ0UGFyZW4pKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4cHI6IEV4cHIuRXhwciA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlJpZ2h0UGFyZW4sIGBFeHBlY3RlZCBcIilcIiBhZnRlciBleHByZXNzaW9uYCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5Hcm91cGluZyhleHByLCBleHByLmxpbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuTGVmdEJyYWNlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaWN0aW9uYXJ5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5GdW5jdGlvbikpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW46IFRva2VuID0gbmV3IFRva2VuKFRva2VuVHlwZS5MYW1iZGEsICdAJywgJ0AnLCB0aGlzLnByZXZpb3VzKCkubGluZSwgdGhpcy5wcmV2aW91cygpLmNvbCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhbWJkYTogU3RtdC5GdW5jID0gdGhpcy5mdW5jUGFyYW1zQm9keSh0b2tlbiwgJ2xhbWJkYScpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGFtYmRhKGxhbWJkYSwgdG9rZW4ubGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5MZWZ0QnJhY2tldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlzdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuVm9pZCkpIHtcclxuICAgICAgICAgICAgY29uc3QgZXhwcjogRXhwci5FeHByID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5Wb2lkKGV4cHIsIHRoaXMucHJldmlvdXMoKS5saW5lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRocm93IHRoaXMuZXJyb3IodGhpcy5wZWVrKCksIGBFeHBlY3RlZCBleHByZXNzaW9uLCB1bmV4cGVjdGVkIHRva2VuIFwiJHt0aGlzLnBlZWsoKS5sZXhlbWV9XCJgKTtcclxuICAgICAgICAvLyB1bnJlYWNoZWFibGUgY29kZVxyXG4gICAgICAgIHJldHVybiBuZXcgRXhwci5MaXRlcmFsKG51bGwsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaWN0aW9uYXJ5KCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgY29uc3QgbGVmdEJyYWNlID0gdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5SaWdodEJyYWNlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuRGljdGlvbmFyeShbXSwgdGhpcy5wcmV2aW91cygpLmxpbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzOiBFeHByLlNldFtdID0gW107XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuU3RyaW5nLCBUb2tlblR5cGUuSWRlbnRpZmllciwgVG9rZW5UeXBlLk51bWJlcikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleTogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLkNvbG9uLCBgRXhwZWN0ZWQgXCI6XCIgY29sb24gYWZ0ZXIgbWVtYmVyYCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydGllcy5wdXNoKG5ldyBFeHByLlNldChudWxsLCBuZXcgRXhwci5LZXkoa2V5LCBrZXkubGluZSksIHZhbHVlLCBrZXkubGluZSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcih0aGlzLnBlZWsoKSwgYFN0cmluZywgTnVtYmVyIG9yIElkZW50aWZpZXIgZXhwZWN0ZWQgYXMgYSBLZXkgb2YgRGljdGlvbmFyeSB7LCB1bmV4cGVjdGVkIHRva2VuICR7dGhpcy5wZWVrKCkubGV4ZW1lfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuQ29tbWEpKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlJpZ2h0QnJhY2UsIGBFeHBlY3RlZCBcIn1cIiBhZnRlciBvYmplY3QgbGl0ZXJhbGApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IEV4cHIuRGljdGlvbmFyeShwcm9wZXJ0aWVzLCBsZWZ0QnJhY2UubGluZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsaXN0KCk6IEV4cHIuRXhwciB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0gW107XHJcbiAgICAgICAgY29uc3QgbGVmdEJyYWNrZXQgPSB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlJpZ2h0QnJhY2tldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkxpc3QoW10sIHRoaXMucHJldmlvdXMoKS5saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICB2YWx1ZXMucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7XHJcbiAgICAgICAgfSB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuQ29tbWEpKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlJpZ2h0QnJhY2tldCwgYEV4cGVjdGVkIFwiXVwiIGFmdGVyIGFycmF5IGRlY2xhcmF0aW9uYCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgRXhwci5MaXN0KHZhbHVlcywgbGVmdEJyYWNrZXQubGluZSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi90eXBlcy90eXBlLmVudW0nO1xyXG5pbXBvcnQgeyAkTnVsbCB9IGZyb20gJy4vdHlwZXMvbnVsbCc7XHJcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL3R5cGVzL2FueSc7XHJcbmltcG9ydCB7ICRDYWxsYWJsZSB9IGZyb20gJy4vdHlwZXMvZnVuY3Rpb24nO1xyXG5pbXBvcnQgeyAkQm9vbGVhbiB9IGZyb20gJy4vdHlwZXMvYm9vbGVhbic7XHJcbmltcG9ydCB7ICRMaXN0IH0gZnJvbSAnLi90eXBlcy9saXN0JztcclxuaW1wb3J0IHsgJE51bWJlciB9IGZyb20gJy4vdHlwZXMvbnVtYmVyJztcclxuaW1wb3J0IHsgJFN0cmluZyB9IGZyb20gJy4vdHlwZXMvc3RyaW5nJztcclxuaW1wb3J0IHsgJFZvaWQgfSBmcm9tICcuL3R5cGVzL3ZvaWQnO1xyXG5pbXBvcnQgeyAkUmVnRXhwIH0gZnJvbSAnLi90eXBlcy9yZWdleCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZnJvbUphdmFTY3JpcHRNZXRob2QoanNOYW1lOiBzdHJpbmcsIGFyaXR5OiBudW1iZXIsIHR5cGU6IERhdGFUeXBlKTogJENhbGxhYmxlIHtcclxuICAgIHJldHVybiBuZXcgJENhbGxhYmxlKGpzTmFtZSwgYXJpdHksICh0aGl6OiAkQW55LCBhcmdzOiAkQW55W10pOiAkQW55ID0+IHtcclxuICAgICAgICBjb25zdCBhcmdWYWx1ZXMgPSBhcmdzLm1hcCgoYXJnOiAkQW55KSA9PiBhcmcudmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXoudmFsdWVbanNOYW1lXSguLi5hcmdWYWx1ZXMpO1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIERhdGFUeXBlLkJvb2xlYW46XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGNhc2UgRGF0YVR5cGUuU3RyaW5nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkU3RyaW5nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGNhc2UgRGF0YVR5cGUuTnVtYmVyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVtYmVyKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGNhc2UgRGF0YVR5cGUuTGlzdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJExpc3QocmVzdWx0KTtcclxuICAgICAgICAgICAgY2FzZSBEYXRhVHlwZS5OdWxsOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkQW55KHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmcm9tSmF2YVNjcmlwdEZ1bmNOdW1iZXIoZnVuYzogKC4uLmFyZ3o6IGFueSkgPT4gYW55LCBuYW1lOiBzdHJpbmcsIGFyaXR5OiBudW1iZXIpOiAkQ2FsbGFibGUge1xyXG4gICAgcmV0dXJuIG5ldyAkQ2FsbGFibGUobmFtZSwgYXJpdHksICh0aGl6OiAkQW55LCBhcmdzOiAkQW55W10pOiAkQW55ID0+IHtcclxuICAgICAgICBjb25zdCBhcmdWYWx1ZXMgPSBhcmdzLm1hcCgoYXJnOiAkQW55KSA9PiBhcmcudmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGZ1bmMoLi4uYXJnVmFsdWVzKTtcclxuICAgICAgICByZXR1cm4gbmV3ICROdW1iZXIocmVzdWx0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZnJvbUphdmFTY3JpcHRGdW5jVm9pZChmdW5jOiAoLi4uYXJnejogYW55KSA9PiBhbnksIG5hbWU6IHN0cmluZywgYXJpdHk6IG51bWJlcik6ICRDYWxsYWJsZSB7XHJcbiAgICByZXR1cm4gbmV3ICRDYWxsYWJsZShuYW1lLCBhcml0eSwgKHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSk6ICRBbnkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFyZ1ZhbHVlcyA9IGFyZ3MubWFwKChhcmc6ICRBbnkpID0+IGFyZy52YWx1ZSk7XHJcbiAgICAgICAgZnVuYyguLi5hcmdWYWx1ZXMpO1xyXG4gICAgICAgIHJldHVybiBuZXcgJFZvaWQoJ3ZvaWQnKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUnVudGltZSA9IHtcclxuICAgIENvbnNvbGU6ICBuZXcgTWFwPHN0cmluZywgJEFueT4oW1xyXG4gICAgICAgIFsnbG9nJywgZnJvbUphdmFTY3JpcHRGdW5jVm9pZChjb25zb2xlLmxvZywgJ2NvbnNvbGUubG9nJywgLTEpXSxcclxuICAgICAgICBbJ3dhcm4nLCBmcm9tSmF2YVNjcmlwdEZ1bmNWb2lkKGNvbnNvbGUud2FybiwgJ2NvbnNvbGUud2FybicsIC0xKV0sXHJcbiAgICAgICAgWydpbmZvJywgZnJvbUphdmFTY3JpcHRGdW5jVm9pZChjb25zb2xlLmluZm8sICdjb25zb2xlLmluZm8nLCAtMSldLFxyXG4gICAgICAgIFsnZXJyb3InLCBmcm9tSmF2YVNjcmlwdEZ1bmNWb2lkKGNvbnNvbGUuZXJyb3IsICdjb25zb2xlLmVycm9yJywgLTEpXVxyXG4gICAgXSksXHJcbiAgICBNYXRoOiAgbmV3IE1hcDxzdHJpbmcsICRBbnk+KFtcclxuICAgICAgICBbJ2NlaWwnLCBmcm9tSmF2YVNjcmlwdEZ1bmNOdW1iZXIoTWF0aC5jZWlsLCAnY2VpbCcsIDEpXSxcclxuICAgICAgICBbJ2NvcycsIGZyb21KYXZhU2NyaXB0RnVuY051bWJlcihNYXRoLmNvcywgJ2NvcycsIDEpXSxcclxuICAgICAgICBbJ2Zsb29yJywgZnJvbUphdmFTY3JpcHRGdW5jTnVtYmVyKE1hdGguZmxvb3IsICdmbG9vcicsIDEpXSxcclxuICAgICAgICBbJ2xvZycsIGZyb21KYXZhU2NyaXB0RnVuY051bWJlcihNYXRoLmxvZywgJ2xvZycsIDEpXSxcclxuICAgICAgICBbJ21heCcsIGZyb21KYXZhU2NyaXB0RnVuY051bWJlcihNYXRoLm1heCwgJ21heCcsIC0xKV0sXHJcbiAgICAgICAgWydtaW4nLCBmcm9tSmF2YVNjcmlwdEZ1bmNOdW1iZXIoTWF0aC5taW4sICdtaW4nLCAtMSldLFxyXG4gICAgICAgIFsncGknLCBuZXcgJE51bWJlcihNYXRoLlBJKV0sXHJcbiAgICAgICAgWydwb3cnLCBmcm9tSmF2YVNjcmlwdEZ1bmNOdW1iZXIoTWF0aC5wb3csICdwb3cnLCAyKV0sXHJcbiAgICAgICAgWydyYW5kb20nLCBmcm9tSmF2YVNjcmlwdEZ1bmNOdW1iZXIoTWF0aC5yYW5kb20sICdyYW5kb20nLCAwKV0sXHJcbiAgICAgICAgWydyb3VuZCcsIGZyb21KYXZhU2NyaXB0RnVuY051bWJlcihNYXRoLnJvdW5kLCAncm91bmQnLCAxKV0sXHJcbiAgICAgICAgWydzaW4nLCBmcm9tSmF2YVNjcmlwdEZ1bmNOdW1iZXIoTWF0aC5zaW4sICdzaW4nLCAxKV0sXHJcbiAgICAgICAgWydzcXJ0JywgZnJvbUphdmFTY3JpcHRGdW5jTnVtYmVyKE1hdGguc3FydCwgJ3NxcnQnLCAxKV0sXHJcbiAgICAgICAgWyd0YW4nLCBmcm9tSmF2YVNjcmlwdEZ1bmNOdW1iZXIoTWF0aC50YW4sICd0YW4nLCAxKV0sXHJcbiAgICAgICAgWyd0cnVuYycsIGZyb21KYXZhU2NyaXB0RnVuY051bWJlcihNYXRoLnRydW5jLCAndHJ1bmMnLCAxKV1cclxuICAgIF0pLFxyXG4gICAgVXRpbHM6IG5ldyBNYXA8c3RyaW5nLCAkQW55PihbXHJcbiAgICAgICAgWydyZScsIG5ldyAkQ2FsbGFibGUoJ3JlZ2V4JywgLTEsICh0aGl6OiAkQW55LCBhcmdzOiAkQW55W10pOiAkQW55ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gYXJncy5tYXAoKGFyZykgPT4gYXJnLnZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJFJlZ0V4cChuZXcgUmVnRXhwKHZhbHVlc1swXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgJFJlZ0V4cChuZXcgUmVnRXhwKHZhbHVlc1swXSwgdmFsdWVzWzFdKSk7XHJcbiAgICAgICAgfSldXHJcbiAgICBdKVxyXG59O1xyXG4iLCJpbXBvcnQgeyBUb2tlbiwgVG9rZW5UeXBlIH0gZnJvbSAnLi90b2tlbic7XHJcbmltcG9ydCB7IENvbnNvbGUgfSBmcm9tICcuL2NvbnNvbGUnO1xyXG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHsgJEVycm9yIH0gZnJvbSAnLi90eXBlcy9lcnJvcic7XHJcbmRlY2xhcmUgdmFyIGNvbnpvbGU6IENvbnNvbGU7XHJcblxyXG5leHBvcnQgY2xhc3MgU2Nhbm5lciB7XHJcbiAgICAvKiogc2NyaXB0cyBzb3VyY2UgY29kZSAqL1xyXG4gICAgcHVibGljIHNvdXJjZTogc3RyaW5nO1xyXG4gICAgLyoqIGNvbnRhaW5lcyB0aGUgc291cmNlIGNvZGUgcmVwcmVzZW50ZWQgYXMgbGlzdCBvZiB0b2tlbnMgKi9cclxuICAgIHB1YmxpYyB0b2tlbnM6IFRva2VuW107XHJcbiAgICAvKiogTGlzdCBvZiBlcnJvcnMgZnJvbSBzY2FubmluZyAqL1xyXG4gICAgcHVibGljIGVycm9yczogc3RyaW5nW107XHJcbiAgICAvKiogcG9pbnRzIHRvIHRoZSBjdXJyZW50IGNoYXJhY3RlciBiZWluZyB0b2tlbml6ZWQgKi9cclxuICAgIHByaXZhdGUgY3VycmVudDogbnVtYmVyO1xyXG4gICAgLyoqIHBvaW50cyB0byB0aGUgc3RhcnQgb2YgdGhlIHRva2VuIGZyYXNlICovXHJcbiAgICBwcml2YXRlIHN0YXJ0OiBudW1iZXI7XHJcbiAgICAvKiogY3VycmVudCBsaW5lIG9mIHNvdXJjZSBjb2RlIGJpZW5nIHRva2VuaXplZCAqL1xyXG4gICAgcHJpdmF0ZSBsaW5lOiBudW1iZXI7XHJcbiAgICAvKiogY3VycmVudCBjb2x1bW4gb2YgdGhlIGNoYXJhY3RlciBiZWluZyB0b2tlbml6ZWQgKi9cclxuICAgIHByaXZhdGUgY29sOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIHNjYW4oc291cmNlOiBzdHJpbmcpOiBUb2tlbltdIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLnRva2VucyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZXJyb3JzID0gW107XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gMDtcclxuICAgICAgICB0aGlzLnN0YXJ0ID0gMDtcclxuICAgICAgICB0aGlzLmxpbmUgPSAxO1xyXG4gICAgICAgIHRoaXMuY29sID0gMTtcclxuXHJcbiAgICAgICAgd2hpbGUgKCF0aGlzLmVvZigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQgPSB0aGlzLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFRva2VuKCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVycm9ycy5sZW5ndGggPiAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKCdFcnJvciBsaW1pdCBleGNlZWRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRva2VucztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKG5ldyBUb2tlbihUb2tlblR5cGUuRW9mLCAnJywgbnVsbCwgdGhpcy5saW5lLCAwKSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZW9mKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnQgPj0gdGhpcy5zb3VyY2UubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWR2YW5jZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLnBlZWsoKSA9PT0gJ1xcbicpIHtcclxuICAgICAgICAgICAgdGhpcy5saW5lKys7XHJcbiAgICAgICAgICAgIHRoaXMuY29sID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Kys7XHJcbiAgICAgICAgdGhpcy5jb2wrKztcclxuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2UuY2hhckF0KHRoaXMuY3VycmVudCAtIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkVG9rZW4odG9rZW5UeXBlOiBUb2tlblR5cGUsIGxpdGVyYWw6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHRleHQgPSB0aGlzLnNvdXJjZS5zdWJzdHJpbmcodGhpcy5zdGFydCwgdGhpcy5jdXJyZW50KTtcclxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKG5ldyBUb2tlbih0b2tlblR5cGUsIHRleHQsIGxpdGVyYWwsIHRoaXMubGluZSwgdGhpcy5jb2wpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1hdGNoKGV4cGVjdGVkOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5lb2YoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zb3VyY2UuY2hhckF0KHRoaXMuY3VycmVudCkgIT09IGV4cGVjdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudCsrO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGVlaygpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLmVvZigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnXFwwJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLmNoYXJBdCh0aGlzLmN1cnJlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGVla05leHQoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50ICsgMSA+PSB0aGlzLnNvdXJjZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdcXDAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2UuY2hhckF0KHRoaXMuY3VycmVudCArIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29tbWVudCgpOiB2b2lkIHtcclxuICAgICAgICB3aGlsZSAodGhpcy5wZWVrKCkgIT09ICdcXG4nICYmICF0aGlzLmVvZigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG11bHRpbGluZUNvbW1lbnQoKTogdm9pZCB7XHJcbiAgICAgICAgd2hpbGUgKCF0aGlzLmVvZigpICYmICEodGhpcy5wZWVrKCkgPT09ICcqJyAmJiB0aGlzLnBlZWtOZXh0KCkgPT09ICcvJykpIHtcclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmVvZigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoJ1VudGVybWluYXRlZCBjb21tZW50LCBleHBlY3RpbmcgY2xvc2luZyBcIiovXCInKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyB0aGUgY2xvc2luZyBzbGFzaCAnKi8nXHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdHJpbmcocXVvdGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHdoaWxlICh0aGlzLnBlZWsoKSAhPT0gcXVvdGUgJiYgIXRoaXMuZW9mKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVbnRlcm1pbmF0ZWQgc3RyaW5nLlxyXG4gICAgICAgIGlmICh0aGlzLmVvZigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoYFVudGVybWluYXRlZCBzdHJpbmcsIGV4cGVjdGluZyBjbG9zaW5nICR7cXVvdGV9YCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRoZSBjbG9zaW5nIFwiLlxyXG4gICAgICAgIHRoaXMuYWR2YW5jZSgpO1xyXG5cclxuICAgICAgICAvLyBUcmltIHRoZSBzdXJyb3VuZGluZyBxdW90ZXMuXHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNvdXJjZS5zdWJzdHJpbmcodGhpcy5zdGFydCArIDEsIHRoaXMuY3VycmVudCAtIDEpO1xyXG4gICAgICAgIHRoaXMuYWRkVG9rZW4ocXVvdGUgIT09ICdgJyA/IFRva2VuVHlwZS5TdHJpbmcgOiBUb2tlblR5cGUuVGVtcGxhdGUsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG51bWJlcigpOiB2b2lkIHtcclxuICAgICAgICAvLyBnZXRzIGludGVnZXIgcGFydFxyXG4gICAgICAgIHdoaWxlIChVdGlscy5pc0RpZ2l0KHRoaXMucGVlaygpKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNoZWNrcyBmb3IgZnJhY3Rpb25cclxuICAgICAgICBpZiAodGhpcy5wZWVrKCkgPT09ICcuJyAmJiBVdGlscy5pc0RpZ2l0KHRoaXMucGVla05leHQoKSkpIHtcclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBnZXRzIGZyYWN0aW9uIHBhcnRcclxuICAgICAgICB3aGlsZSAoVXRpbHMuaXNEaWdpdCh0aGlzLnBlZWsoKSkpIHtcclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjaGVja3MgZm9yIGV4cG9uZW50XHJcbiAgICAgICAgaWYgKHRoaXMucGVlaygpLnRvTG93ZXJDYXNlKCkgPT09ICdlJykge1xyXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGVlaygpID09PSAnLScgfHwgdGhpcy5wZWVrKCkgPT09ICcrJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdoaWxlIChVdGlscy5pc0RpZ2l0KHRoaXMucGVlaygpKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zb3VyY2Uuc3Vic3RyaW5nKHRoaXMuc3RhcnQgLCB0aGlzLmN1cnJlbnQpO1xyXG4gICAgICAgIHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLk51bWJlciwgTnVtYmVyKHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpZGVudGlmaWVyKCk6IHZvaWQge1xyXG4gICAgICAgIHdoaWxlIChVdGlscy5pc0FscGhhTnVtZXJpYyh0aGlzLnBlZWsoKSkpIHtcclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc291cmNlLnN1YnN0cmluZyh0aGlzLnN0YXJ0LCB0aGlzLmN1cnJlbnQpO1xyXG4gICAgICAgIGNvbnN0IGNhcGl0YWxpemVkID0gVXRpbHMuY2FwaXRhbGl6ZSh2YWx1ZSk7XHJcbiAgICAgICAgaWYgKFV0aWxzLmlzS2V5d29yZChjYXBpdGFsaXplZCkpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRUb2tlbihUb2tlblR5cGVbY2FwaXRhbGl6ZWRdLCB2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuSWRlbnRpZmllciwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRva2VuKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGNoYXIgPSB0aGlzLmFkdmFuY2UoKTtcclxuICAgICAgICBzd2l0Y2ggKGNoYXIpIHtcclxuICAgICAgICAgICAgY2FzZSAnKCc6IHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLkxlZnRQYXJlbiwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcpJzogdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuUmlnaHRQYXJlbiwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdbJzogdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuTGVmdEJyYWNrZXQsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnXSc6IHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLlJpZ2h0QnJhY2tldCwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd7JzogdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuTGVmdEJyYWNlLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ30nOiB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5SaWdodEJyYWNlLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJywnOiB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5Db21tYSwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcuJzogdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuRG90LCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzsnOiB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5TZW1pY29sb24sIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnXic6IHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLkNhcmV0LCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzonOiB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5Db2xvbiwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICckJzogdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuRG9sbGFyLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0AnOiB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5GdW5jdGlvbiwgJ0AnKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyonOiB0aGlzLmFkZFRva2VuKHRoaXMubWF0Y2goJz0nKSA/IFRva2VuVHlwZS5TdGFyRXF1YWwgOiBUb2tlblR5cGUuU3RhciwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICclJzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCc9JykgPyBUb2tlblR5cGUuUGVyY2VudEVxdWFsIDogVG9rZW5UeXBlLlBlcmNlbnQsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnfCc6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnfCcpID8gVG9rZW5UeXBlLk9yIDogVG9rZW5UeXBlLlBpcGUsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnJic6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnJicpID8gVG9rZW5UeXBlLkFuZCA6IFRva2VuVHlwZS5BbXBlcnNhbmQsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnPCc6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnPScpID8gVG9rZW5UeXBlLkxlc3NFcXVhbCA6IFRva2VuVHlwZS5MZXNzLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJz4nOiB0aGlzLmFkZFRva2VuKHRoaXMubWF0Y2goJz0nKSA/IFRva2VuVHlwZS5HcmVhdGVyRXF1YWwgOiBUb2tlblR5cGUuR3JlYXRlciwgbnVsbCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICchJzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCc9JykgPyBUb2tlblR5cGUuQmFuZ0VxdWFsIDogVG9rZW5UeXBlLkJhbmcsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnPyc6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnPycpID8gVG9rZW5UeXBlLlF1ZXN0aW9uUXVlc3Rpb24gOiB0aGlzLm1hdGNoKCcuJykgPyBUb2tlblR5cGUuUXVlc3Rpb25Eb3QgOiBUb2tlblR5cGUuUXVlc3Rpb24sIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnPSc6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnPScpID8gVG9rZW5UeXBlLkVxdWFsRXF1YWwgOiB0aGlzLm1hdGNoKCc+JykgPyBUb2tlblR5cGUuQXJyb3cgOiBUb2tlblR5cGUuRXF1YWwsIG51bGwpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnKyc6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnKycpID8gVG9rZW5UeXBlLlBsdXNQbHVzIDogdGhpcy5tYXRjaCgnPScpID8gVG9rZW5UeXBlLlBsdXNFcXVhbCA6IFRva2VuVHlwZS5QbHVzLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJy0nOiB0aGlzLmFkZFRva2VuKHRoaXMubWF0Y2goJy0nKSA/IFRva2VuVHlwZS5NaW51c01pbnVzIDogdGhpcy5tYXRjaCgnPicpID8gVG9rZW5UeXBlLlJldHVybiA6IHRoaXMubWF0Y2goJz0nKSA/IFRva2VuVHlwZS5NaW51c0VxdWFsIDogVG9rZW5UeXBlLk1pbnVzLCBudWxsKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJy8nOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goJy8nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1hdGNoKCcqJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpbGluZUNvbW1lbnQoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCc9JykgPyBUb2tlblR5cGUuU2xhc2hFcXVhbCA6IFRva2VuVHlwZS5TbGFzaCwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBgJ2A6XHJcbiAgICAgICAgICAgIGNhc2UgYFwiYDpcclxuICAgICAgICAgICAgY2FzZSAnYCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0cmluZyhjaGFyKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvLyBpZ25vcmUgY2FzZXNcclxuICAgICAgICAgICAgY2FzZSAnXFxuJzpcclxuICAgICAgICAgICAgY2FzZSAnICc6XHJcbiAgICAgICAgICAgIGNhc2UgJ1xccic6XHJcbiAgICAgICAgICAgIGNhc2UgJ1xcdCc6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gY29tcGV4IGNhc2VzXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBpZiAoVXRpbHMuaXNEaWdpdChjaGFyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFV0aWxzLmlzQWxwaGEoY2hhcikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlkZW50aWZpZXIoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihgVW5leHBlY3RlZCBjaGFyYWN0ZXIgJyR7Y2hhcn0nYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlcnJvcihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFNjYW4gRXJyb3IgKCR7dGhpcy5saW5lfToke3RoaXMuY29sfSkgPT4gJHttZXNzYWdlfWApO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBUb2tlbiB9IGZyb20gJy4vdG9rZW4nO1xyXG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnLi9jb25zb2xlJztcclxuaW1wb3J0IHsgJEFueSB9IGZyb20gJy4vdHlwZXMvYW55JztcclxuaW1wb3J0IHsgJE51bGwgfSBmcm9tICcuL3R5cGVzL251bGwnO1xyXG5kZWNsYXJlIHZhciBjb256b2xlOiBDb25zb2xlO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjb3BlIHtcclxuXHJcbiAgICBwcml2YXRlIHZhbHVlczogTWFwPHN0cmluZywgYW55PjtcclxuICAgIHByaXZhdGUgcGFyZW50OiBTY29wZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQ6IFNjb3BlID0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMudmFsdWVzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXJyb3IobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSdW50aW1lIEVycm9yID0+ICR7bWVzc2FnZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0KG5hbWU6IHN0cmluZywgdmFsdWU6ICRBbnkpIHtcclxuICAgICAgICB0aGlzLnZhbHVlcy5zZXQobmFtZSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWZpbmUobmFtZTogc3RyaW5nLCB2YWx1ZTogJEFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlcy5oYXMobmFtZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvcihgSWRlbnRpZmllciBcIiR7bmFtZX1cIiBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWRgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldChuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3NpZ24obmFtZTogc3RyaW5nLCB2YWx1ZTogJEFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlcy5oYXMobmFtZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXQobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50LmFzc2lnbihuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5lcnJvcihgSWRlbnRpZmllciBcIiR7bmFtZX1cIiBoYXMgbm90IGJlZW4gZGVmaW5lZGApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nLCB0b2tlbjogVG9rZW4gPSBudWxsKTogJEFueSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWVzLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5nZXQoa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50ICE9PSBudWxsICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ2V0KGtleSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvcihgIGF0ICgke3Rva2VuLmxpbmV9OiR7dG9rZW4uY29sfSkgPT4gXCIke3Rva2VuLmxleGVtZX1cIiBpcyBub3QgZGVmaW5lZGApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoYFwiJHtrZXl9XCIgaXMgbm90IGRlZmluZWRgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJleHBvcnQgZW51bSBUb2tlblR5cGUge1xyXG4gICAgLy8gUGFyc2VyIFRva2Vuc1xyXG4gICAgRW9mLFxyXG4gICAgUGFuaWMsXHJcbiAgICBMYW1iZGEsXHJcblxyXG4gICAgLy8gU2luZ2xlIENoYXJhY3RlciBUb2tlbnNcclxuICAgIEFtcGVyc2FuZCxcclxuICAgIEF0U2lnbixcclxuICAgIENhcmV0LFxyXG4gICAgQ29tbWEsXHJcbiAgICBEb2xsYXIsXHJcbiAgICBEb3QsXHJcbiAgICBIYXNoLFxyXG4gICAgTGVmdEJyYWNlLFxyXG4gICAgTGVmdEJyYWNrZXQsXHJcbiAgICBMZWZ0UGFyZW4sXHJcbiAgICBQZXJjZW50LFxyXG4gICAgUGlwZSxcclxuICAgIFJpZ2h0QnJhY2UsXHJcbiAgICBSaWdodEJyYWNrZXQsXHJcbiAgICBSaWdodFBhcmVuLFxyXG4gICAgU2VtaWNvbG9uLFxyXG4gICAgU2xhc2gsXHJcbiAgICBTdGFyLFxyXG5cclxuICAgIC8vIE9uZSBPciBUd28gQ2hhcmFjdGVyIFRva2Vuc1xyXG4gICAgQXJyb3csXHJcbiAgICBCYW5nLFxyXG4gICAgQmFuZ0VxdWFsLFxyXG4gICAgQ29sb24sXHJcbiAgICBFcXVhbCxcclxuICAgIEVxdWFsRXF1YWwsXHJcbiAgICBHcmVhdGVyLFxyXG4gICAgR3JlYXRlckVxdWFsLFxyXG4gICAgTGVzcyxcclxuICAgIExlc3NFcXVhbCxcclxuICAgIE1pbnVzLFxyXG4gICAgTWludXNFcXVhbCxcclxuICAgIE1pbnVzTWludXMsXHJcbiAgICBQZXJjZW50RXF1YWwsXHJcbiAgICBQbHVzLFxyXG4gICAgUGx1c0VxdWFsLFxyXG4gICAgUGx1c1BsdXMsXHJcbiAgICBRdWVzdGlvbixcclxuICAgIFF1ZXN0aW9uRG90LFxyXG4gICAgUXVlc3Rpb25RdWVzdGlvbixcclxuICAgIFNsYXNoRXF1YWwsXHJcbiAgICBTdGFyRXF1YWwsXHJcblxyXG4gICAgLy8gTGl0ZXJhbHNcclxuICAgIElkZW50aWZpZXIsXHJcbiAgICBUZW1wbGF0ZSxcclxuICAgIFN0cmluZyxcclxuICAgIE51bWJlcixcclxuICAgIFJlZ2V4LFxyXG5cclxuICAgIC8vIEtleXdvcmRzXHJcbiAgICBBbmQsXHJcbiAgICBCcmVhayxcclxuICAgIEJhc2UsXHJcbiAgICBDbGFzcyxcclxuICAgIENvbnRpbnVlLFxyXG4gICAgRG8sXHJcbiAgICBFbHNlLFxyXG4gICAgRXh0ZW5kcyxcclxuICAgIEZhbHNlLFxyXG4gICAgRm9yLFxyXG4gICAgRnVuY3Rpb24sXHJcbiAgICBJZixcclxuICAgIEluLFxyXG4gICAgSW5zdGFuY2VvZixcclxuICAgIElzLFxyXG4gICAgTmV3LFxyXG4gICAgTnVsbCxcclxuICAgIE9yLFxyXG4gICAgUHJpbnQsXHJcbiAgICBSZXR1cm4sXHJcbiAgICBUcnVlLFxyXG4gICAgVHlwZW9mLFxyXG4gICAgVmFyLFxyXG4gICAgVm9pZCxcclxuICAgIFdoaWxlXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUb2tlbiB7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGxpbmU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBjb2w6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0eXBlOiBUb2tlblR5cGU7XHJcbiAgICBwdWJsaWMgbGl0ZXJhbDogYW55O1xyXG4gICAgcHVibGljIGxleGVtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHR5cGU6IFRva2VuVHlwZSwgbGV4ZW1lOiBzdHJpbmcsIGxpdGVyYWw6IGFueSwgbGluZTogbnVtYmVyLCBjb2w6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFRva2VuVHlwZVt0eXBlXTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMubGV4ZW1lID0gbGV4ZW1lO1xyXG4gICAgICAgIHRoaXMubGl0ZXJhbCA9IGxpdGVyYWw7XHJcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcclxuICAgICAgICB0aGlzLmNvbCA9IGNvbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBbKCR7dGhpcy5saW5lfSk6XCIke3RoaXMubGV4ZW1lfVwiXWA7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IENvbnNvbGUgfSBmcm9tICcuLi9jb25zb2xlJztcclxuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGUuZW51bSc7XHJcbmRlY2xhcmUgdmFyIGNvbnpvbGU6IENvbnNvbGU7XHJcblxyXG5leHBvcnQgY2xhc3MgJEFueSB7XHJcblxyXG4gICAgcHVibGljIHZhbHVlOiBhbnk7XHJcbiAgICBwdWJsaWMgdHlwZSA9IERhdGFUeXBlLkFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogYW55LCB0eXBlOiBEYXRhVHlwZSA9IERhdGFUeXBlLkFueSkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1N0cmluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBEYXRhVHlwZS5TdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzTnVsbCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBEYXRhVHlwZS5OdWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0Jvb2xlYW4oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gRGF0YVR5cGUuQm9vbGVhbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNOdW1iZXIoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gRGF0YVR5cGUuTnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1JhbmdlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IERhdGFUeXBlLlJhbmdlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0Z1bmN0aW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IERhdGFUeXBlLkZ1bmN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0NsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IERhdGFUeXBlLkNsYXNzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0xhbWJkYSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBEYXRhVHlwZS5GdW5jdGlvbiAmJiAodGhpcyBhcyBhbnkpLm5hbWUgPT09ICdAJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNMaXN0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IERhdGFUeXBlLkxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzRGljdGlvbmFyeSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBEYXRhVHlwZS5EaWN0aW9uYXJ5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc09iamVjdCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBEYXRhVHlwZS5PYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzVHJ1dGh5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTnVsbCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNCb29sZWFuKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzTnVtYmVyKCkgJiYgdGhpcy52YWx1ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzU3RyaW5nKCkgJiYgdGhpcy52YWx1ZS50b1N0cmluZygpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzTGlzdCgpICYmIHRoaXMudmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEaWN0aW9uYXJ5KCkgJiYgdGhpcy52YWx1ZS5zaXplID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBlcnJvciB2YWx1ZSBBbnkgaXMgbnVsbFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnZhbHVlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIGVycm9yIHZhbHVlIEFueSBpcyB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0VxdWFsKG90aGVyOiAkQW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IG90aGVyLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0tleVZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09IERhdGFUeXBlLkNsYXNzIHx8XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9PT0gRGF0YVR5cGUuRGljdGlvbmFyeSB8fFxyXG4gICAgICAgICAgICB0aGlzLnR5cGUgPT09IERhdGFUeXBlLk9iamVjdFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoa2V5OiAkQW55KTogJEFueSB7XHJcbiAgICAgICAgY29uem9sZS5lcnJvcihga2V5ICR7a2V5fSBkb2VzIG5vdCBleGlzdCBpbiAke3RoaXN9YCk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgaW4gQW55IGdldHRlclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0KGtleTogJEFueSwgdmFsdWU6ICRBbnkpOiAkQW55IHtcclxuICAgICAgICBjb256b2xlLmVycm9yKGBrZXkgJHtrZXl9IGRvZXMgbm90IGV4aXN0IGluICR7dGhpc31gKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvciBpbiBBbnkgc2V0dGVyXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGUuZW51bSc7XHJcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL2FueSc7XHJcblxyXG5leHBvcnQgY2xhc3MgJEJvb2xlYW4gZXh0ZW5kcyAkQW55IHtcclxuXHJcbiAgICBwdWJsaWMgdmFsdWU6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBzdXBlcih2YWx1ZSwgRGF0YVR5cGUuQm9vbGVhbik7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi90eXBlLmVudW0nO1xyXG5pbXBvcnQgeyAkQW55IH0gZnJvbSAnLi9hbnknO1xyXG5pbXBvcnQgeyAkTnVsbCB9IGZyb20gJy4vbnVsbCc7XHJcbmltcG9ydCB7ICRCb29sZWFuIH0gZnJvbSAnLi9ib29sZWFuJztcclxuXHJcbmV4cG9ydCBjbGFzcyAkQ2xhc3MgZXh0ZW5kcyAkQW55IHtcclxuICAgIHB1YmxpYyB2YWx1ZTogTWFwPHN0cmluZywgJEFueT47XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHBhcmVudDogJEFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHZhbHVlOiBNYXA8c3RyaW5nLCAkQW55PiwgcGFyZW50OiAkQW55KSB7XHJcbiAgICAgICAgc3VwZXIodmFsdWUsIERhdGFUeXBlLkNsYXNzKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoa2V5OiAkQW55KTogJEFueSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUuaGFzKGtleS52YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUuZ2V0KGtleS52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wYXJlbnQuaXNDbGFzcygpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5nZXQoa2V5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgJE51bGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0KGtleTogJEFueSwgdmFsdWU6ICRBbnkpOiAkQW55IHtcclxuICAgICAgICB0aGlzLnZhbHVlLnNldChrZXkudmFsdWUsIHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGA8JHt0aGlzLm5hbWV9IGNsYXNzPmA7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIlxyXG5pbXBvcnQgeyBmcm9tSmF2YVNjcmlwdE1ldGhvZCB9IGZyb20gJy4uL3J1bnRpbWUnO1xyXG5pbXBvcnQgeyBJbnRlcnByZXRlciB9IGZyb20gJy4uL2ludGVycHJldGVyJztcclxuaW1wb3J0IHsgJEFueSB9IGZyb20gJy4vYW55JztcclxuaW1wb3J0IHsgJEZ1bmN0aW9uLCAkQ2FsbGFibGUgfSBmcm9tICcuL2Z1bmN0aW9uJztcclxuaW1wb3J0IHsgJE51bGwgfSBmcm9tICcuL251bGwnO1xyXG5pbXBvcnQgeyAkTnVtYmVyIH0gZnJvbSAnLi9udW1iZXInO1xyXG5pbXBvcnQgeyAkU3RyaW5nIH0gZnJvbSAnLi9zdHJpbmcnO1xyXG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgJEJvb2xlYW4gfSBmcm9tICcuL2Jvb2xlYW4nO1xyXG5cclxuZXhwb3J0IGNsYXNzICREaWN0aW9uYXJ5IGV4dGVuZHMgJEFueSB7XHJcbiAgICBwdWJsaWMgdmFsdWU6IE1hcDxhbnksICRBbnk+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBNYXA8YW55LCAkQW55Pikge1xyXG4gICAgICAgIHN1cGVyKHZhbHVlLCBEYXRhVHlwZS5EaWN0aW9uYXJ5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KGtleTogJEFueSk6IGFueSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUuaGFzKGtleS52YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUuZ2V0KGtleS52YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgkRGljdGlvbmFyeS5ydW50aW1lLmhhcyhrZXkudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAkRGljdGlvbmFyeS5ydW50aW1lLmdldChrZXkudmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgJE51bGwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQoa2V5OiAkQW55LCB2YWx1ZTogJEFueSk6ICRBbnkge1xyXG4gICAgICAgIHRoaXMudmFsdWUuc2V0KGtleS52YWx1ZSwgdmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XHJcbiAgICAgICAgdGhpcy52YWx1ZS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGAke2tleS50b1N0cmluZygpfTogJHt2YWx1ZX1gKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gYHske3Jlc3VsdC5qb2luKCc7ICcpfX1gO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZWFjaCh0aGl6OiAkQW55LCBhcmdzOiAkQW55W10sIGludGVycHJldGVyOiBJbnRlcnByZXRlcik6ICRBbnkge1xyXG4gICAgICAgIHRoaXoudmFsdWUuZm9yRWFjaCgodmFsdWU6ICRBbnksIGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIChhcmdzWzBdIGFzICRGdW5jdGlvbikuY2FsbCh0aGl6LCBbdmFsdWUsIG5ldyAkU3RyaW5nKGtleSksIHRoaXpdLCBpbnRlcnByZXRlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXo7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtYXAodGhpejogJEFueSwgYXJnczogJEFueVtdLCBpbnRlcnByZXRlcjogSW50ZXJwcmV0ZXIpOiAkQW55IHtcclxuICAgICAgICB0aGl6LnZhbHVlLmZvckVhY2goKHZhbHVlOiAkQW55LCBrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICB0aGl6LnZhbHVlLnNldCgna2V5JywgKGFyZ3NbMF0gYXMgJEZ1bmN0aW9uKS5jYWxsKHRoaXosIFt2YWx1ZSwgbmV3ICRTdHJpbmcoa2V5KSwgdGhpel0sIGludGVycHJldGVyKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXo7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpbmRleE9mKHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSwgaW50ZXJwcmV0ZXI6IEludGVycHJldGVyKTogJEFueSB7XHJcbiAgICAgICAgbGV0IGluZGV4OiBzdHJpbmcgPSBudWxsO1xyXG4gICAgICAgIHRoaXoudmFsdWUuZm9yRWFjaCgodmFsdWU6ICRBbnksIGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS50eXBlID09PSBhcmdzWzBdLnR5cGUgJiYgdmFsdWUudmFsdWUgPT09IGFyZ3NbMF0udmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGluZGV4ID0ga2V5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgJFN0cmluZyhpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgJE51bGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJ1bnRpbWUgPSAgbmV3IE1hcChbXHJcbiAgICAgICAgWydjbGVhcicsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCdjbGVhcicsIDAsIERhdGFUeXBlLk51bGwpXSxcclxuICAgICAgICBbJ2RlbGV0ZScsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCdkZWxldGUnLCAxLCBEYXRhVHlwZS5Cb29sZWFuKV0sXHJcbiAgICAgICAgWydlYWNoJywgbmV3ICRDYWxsYWJsZSgnZWFjaCcsIDEsICREaWN0aW9uYXJ5LmVhY2gpXSxcclxuICAgICAgICBbJ2hhcycsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCdoYXMnLCAxLCBEYXRhVHlwZS5Cb29sZWFuKV0sXHJcbiAgICAgICAgWydpbmRleE9mJywgbmV3ICRDYWxsYWJsZSgnaW5kZXhPZicsIDEsICREaWN0aW9uYXJ5LmluZGV4T2YpXSxcclxuICAgICAgICBbJ21hcCcsIG5ldyAkQ2FsbGFibGUoJ21hcCcsIDEsICREaWN0aW9uYXJ5Lm1hcCldLFxyXG4gICAgICAgIFsnbWVyZ2UnLCBuZXcgJENhbGxhYmxlKCdtZXJnZScsIDEsICAodGhpejogJEFueSwgYXJnczogJEFueVtdKTogJEFueSA9PiBuZXcgJERpY3Rpb25hcnkobmV3IE1hcChbLi4uKHRoaXoudmFsdWUpLCAuLi4oYXJnc1swXS52YWx1ZSldKSkpXSxcclxuICAgICAgICBbJ3NpemUnLCBuZXcgJENhbGxhYmxlKCdzaXplJywgMCwgICh0aGl6OiAkQW55LCBhcmdzOiAkQW55W10pOiAkQW55ID0+IG5ldyAkTnVtYmVyKHRoaXoudmFsdWUuc2l6ZSkpXVxyXG4gICAgXSk7XHJcblxyXG59XHJcbiIsImltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi90eXBlLmVudW0nO1xyXG5pbXBvcnQgeyAkQW55IH0gZnJvbSAnLi9hbnknO1xyXG5cclxuZXhwb3J0IGNsYXNzICRFcnJvciBleHRlbmRzICRBbnkge1xyXG5cclxuICAgIHB1YmxpYyB2YWx1ZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGxpbmU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBjb2w6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nLCBsaW5lOiBudW1iZXIsIGNvbDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIodmFsdWUsIERhdGFUeXBlLkVycm9yKTtcclxuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xyXG4gICAgICAgIHRoaXMuY29sID0gY29sO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFRva2VuLCBUb2tlblR5cGUgfSBmcm9tICd0b2tlbic7XHJcbmltcG9ydCB7IFN0bXQgfSBmcm9tICdzdGF0ZW1lbnQnO1xyXG5pbXBvcnQgeyAkQW55IH0gZnJvbSAnYW55JztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFeHByIHtcclxuICAgIHB1YmxpYyByZXN1bHQ6IGFueTtcclxuICAgIHB1YmxpYyBsaW5lOiBudW1iZXI7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUjtcclxufVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXhwclZpc2l0b3I8Uj4ge1xyXG4gICAgdmlzaXRBc3NpZ25FeHByKGV4cHI6IEFzc2lnbik6IFI7XHJcbiAgICB2aXNpdEJhc2VFeHByKGV4cHI6IEJhc2UpOiBSO1xyXG4gICAgdmlzaXRCaW5hcnlFeHByKGV4cHI6IEJpbmFyeSk6IFI7XHJcbiAgICB2aXNpdENhbGxFeHByKGV4cHI6IENhbGwpOiBSO1xyXG4gICAgdmlzaXREaWN0aW9uYXJ5RXhwcihleHByOiBEaWN0aW9uYXJ5KTogUjtcclxuICAgIHZpc2l0R2V0RXhwcihleHByOiBHZXQpOiBSO1xyXG4gICAgdmlzaXRHcm91cGluZ0V4cHIoZXhwcjogR3JvdXBpbmcpOiBSO1xyXG4gICAgdmlzaXRJbkV4cHIoZXhwcjogSW4pOiBSO1xyXG4gICAgdmlzaXRJbnN0YW5jZU9mRXhwcihleHByOiBJbnN0YW5jZU9mKTogUjtcclxuICAgIHZpc2l0SXNFeHByKGV4cHI6IElzKTogUjtcclxuICAgIHZpc2l0S2V5RXhwcihleHByOiBLZXkpOiBSO1xyXG4gICAgdmlzaXRMYW1iZGFFeHByKGV4cHI6IExhbWJkYSk6IFI7XHJcbiAgICB2aXNpdExvZ2ljYWxFeHByKGV4cHI6IExvZ2ljYWwpOiBSO1xyXG4gICAgdmlzaXRMaXN0RXhwcihleHByOiBMaXN0KTogUjtcclxuICAgIHZpc2l0TGl0ZXJhbEV4cHIoZXhwcjogTGl0ZXJhbCk6IFI7XHJcbiAgICB2aXNpdE5ld0V4cHIoZXhwcjogTmV3KTogUjtcclxuICAgIHZpc2l0TnVsbENvYWxlc2NpbmdFeHByKGV4cHI6IE51bGxDb2FsZXNjaW5nKTogUjtcclxuICAgIHZpc2l0UG9zdGZpeEV4cHIoZXhwcjogUG9zdGZpeCk6IFI7XHJcbiAgICB2aXNpdFJhbmdlRXhwcihleHByOiBSYW5nZSk6IFI7XHJcbiAgICB2aXNpdFJlZ0V4RXhwcihleHByOiBSZWdFeCk6IFI7XHJcbiAgICB2aXNpdFNldEV4cHIoZXhwcjogU2V0KTogUjtcclxuICAgIHZpc2l0VGVtcGxhdGVFeHByKGV4cHI6IFRlbXBsYXRlKTogUjtcclxuICAgIHZpc2l0VGVybmFyeUV4cHIoZXhwcjogVGVybmFyeSk6IFI7XHJcbiAgICB2aXNpdFR5cGVvZkV4cHIoZXhwcjogVHlwZW9mKTogUjtcclxuICAgIHZpc2l0VW5hcnlFeHByKGV4cHI6IFVuYXJ5KTogUjtcclxuICAgIHZpc2l0VmFyaWFibGVFeHByKGV4cHI6IFZhcmlhYmxlKTogUjtcclxuICAgIHZpc2l0Vm9pZEV4cHIoZXhwcjogVm9pZCk6IFI7XHJcbiAgICB2aXNpdFp0cmluZ0V4cHIoZXhwcjogWnRyaW5nKTogUjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFzc2lnbiBleHRlbmRzIEV4cHIge1xyXG4gICAgcHVibGljIG5hbWU6IFRva2VuO1xyXG4gICAgcHVibGljIHZhbHVlOiBFeHByO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IFRva2VuLCB2YWx1ZTogRXhwciwgbGluZTogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcclxuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEFzc2lnbkV4cHIodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdFeHByLkFzc2lnbic7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlIGV4dGVuZHMgRXhwciB7XHJcbiAgICBwdWJsaWMgcGFyZW46IFRva2VuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmVuOiBUb2tlbiwgbGluZTogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnBhcmVuID0gcGFyZW47XHJcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XHJcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRCYXNlRXhwcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ0V4cHIuQmFzZSc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCaW5hcnkgZXh0ZW5kcyBFeHByIHtcclxuICAgIHB1YmxpYyBsZWZ0OiBFeHByO1xyXG4gICAgcHVibGljIG9wZXJhdG9yOiBUb2tlbjtcclxuICAgIHB1YmxpYyByaWdodDogRXhwcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZWZ0OiBFeHByLCBvcGVyYXRvcjogVG9rZW4sIHJpZ2h0OiBFeHByLCBsaW5lOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XHJcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcclxuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcclxuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEJpbmFyeUV4cHIodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdFeHByLkJpbmFyeSc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDYWxsIGV4dGVuZHMgRXhwciB7XHJcbiAgICBwdWJsaWMgY2FsbGVlOiBFeHByO1xyXG4gICAgcHVibGljIHBhcmVuOiBUb2tlbjtcclxuICAgIHB1YmxpYyBhcmdzOiBFeHByW107XHJcbiAgICBwdWJsaWMgdGhpejogJEFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYWxsZWU6IEV4cHIsIHBhcmVuOiBUb2tlbiwgYXJnczogRXhwcltdLCB0aGl6OiAkQW55LCBsaW5lOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY2FsbGVlID0gY2FsbGVlO1xyXG4gICAgICAgIHRoaXMucGFyZW4gPSBwYXJlbjtcclxuICAgICAgICB0aGlzLmFyZ3MgPSBhcmdzO1xyXG4gICAgICAgIHRoaXMudGhpeiA9IHRoaXo7XHJcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XHJcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRDYWxsRXhwcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ0V4cHIuQ2FsbCc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEaWN0aW9uYXJ5IGV4dGVuZHMgRXhwciB7XHJcbiAgICBwdWJsaWMgcHJvcGVydGllczogRXhwcltdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM6IEV4cHJbXSwgbGluZTogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xyXG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xyXG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RGljdGlvbmFyeUV4cHIodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdFeHByLkRpY3Rpb25hcnknO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0IGV4dGVuZHMgRXhwciB7XHJcbiAgICBwdWJsaWMgZW50aXR5OiBFeHByO1xyXG4gICAgcHVibGljIGtleTogRXhwcjtcclxuICAgIHB1YmxpYyB0eXBlOiBUb2tlblR5cGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW50aXR5OiBFeHByLCBrZXk6IEV4cHIsIHR5cGU6IFRva2VuVHlwZSwgbGluZTogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmVudGl0eSA9IGVudGl0eTtcclxuICAgICAgICB0aGlzLmtleSA9IGtleTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xyXG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0R2V0RXhwcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ0V4cHIuR2V0JztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdyb3VwaW5nIGV4dGVuZHMgRXhwciB7XHJcbiAgICBwdWJsaWMgZXhwcmVzc2lvbjogRXhwcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihleHByZXNzaW9uOiBFeHByLCBsaW5lOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XHJcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XHJcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRHcm91cGluZ0V4cHIodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdFeHByLkdyb3VwaW5nJztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEluIGV4dGVuZHMgRXhwciB7XHJcbiAgICBwdWJsaWMga2V5OiBFeHByO1xyXG4gICAgcHVibGljIGVudGl0eTogRXhwcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IEV4cHIsIGVudGl0eTogRXhwciwgbGluZTogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmtleSA9IGtleTtcclxuICAgICAgICB0aGlzLmVudGl0eSA9IGVudGl0eTtcclxuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcclxuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEluRXhwcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ0V4cHIuSW4nO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW5zdGFuY2VPZiBleHRlbmRzIEV4cHIge1xyXG4gICAgcHVibGljIGxlZnQ6IEV4cHI7XHJcbiAgICBwdWJsaWMgcmlnaHQ6IFRva2VuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxlZnQ6IEV4cHIsIHJpZ2h0OiBUb2tlbiwgbGluZTogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcclxuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcclxuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEluc3RhbmNlT2ZFeHByKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnRXhwci5JbnN0YW5jZU9mJztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIElzIGV4dGVuZHMgRXhwciB7XHJcbiAgICBwdWJsaWMgbGVmdDogRXhwcjtcclxuICAgIHB1YmxpYyByaWdodDogVG9rZW47XHJcblxyXG4gICAgY29uc3RydWN0b3IobGVmdDogRXhwciwgcmlnaHQ6IFRva2VuLCBsaW5lOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XHJcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xyXG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0SXNFeHByKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnRXhwci5Jcyc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBLZXkgZXh0ZW5kcyBFeHByIHtcclxuICAgIHB1YmxpYyBuYW1lOiBUb2tlbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBUb2tlbiwgbGluZTogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xyXG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0S2V5RXhwcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ0V4cHIuS2V5JztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExhbWJkYSBleHRlbmRzIEV4cHIge1xyXG4gICAgcHVibGljIGxhbWJkYTogU3RtdDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsYW1iZGE6IFN0bXQsIGxpbmU6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5sYW1iZGEgPSBsYW1iZGE7XHJcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XHJcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRMYW1iZGFFeHByKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnRXhwci5MYW1iZGEnO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTG9naWNhbCBleHRlbmRzIEV4cHIge1xyXG4gICAgcHVibGljIGxlZnQ6IEV4cHI7XHJcbiAgICBwdWJsaWMgb3BlcmF0b3I6IFRva2VuO1xyXG4gICAgcHVibGljIHJpZ2h0OiBFeHByO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxlZnQ6IEV4cHIsIG9wZXJhdG9yOiBUb2tlbiwgcmlnaHQ6IEV4cHIsIGxpbmU6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcclxuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XHJcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xyXG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TG9naWNhbEV4cHIodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdFeHByLkxvZ2ljYWwnO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGlzdCBleHRlbmRzIEV4cHIge1xyXG4gICAgcHVibGljIHZhbHVlOiBFeHByW107XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IEV4cHJbXSwgbGluZTogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XHJcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRMaXN0RXhwcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ0V4cHIuTGlzdCc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMaXRlcmFsIGV4dGVuZHMgRXhwciB7XHJcbiAgICBwdWJsaWMgdmFsdWU6ICRBbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU6ICRBbnksIGxpbmU6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xyXG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TGl0ZXJhbEV4cHIodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdFeHByLkxpdGVyYWwnO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTmV3IGV4dGVuZHMgRXhwciB7XHJcbiAgICBwdWJsaWMgY2xheno6IEV4cHI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2xheno6IEV4cHIsIGxpbmU6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jbGF6eiA9IGNsYXp6O1xyXG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xyXG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TmV3RXhwcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ0V4cHIuTmV3JztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE51bGxDb2FsZXNjaW5nIGV4dGVuZHMgRXhwciB7XHJcbiAgICBwdWJsaWMgbGVmdDogRXhwcjtcclxuICAgIHB1YmxpYyByaWdodDogRXhwcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZWZ0OiBFeHByLCByaWdodDogRXhwciwgbGluZTogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcclxuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcclxuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdE51bGxDb2FsZXNjaW5nRXhwcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ0V4cHIuTnVsbENvYWxlc2NpbmcnO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUG9zdGZpeCBleHRlbmRzIEV4cHIge1xyXG4gICAgcHVibGljIG5hbWU6IFRva2VuO1xyXG4gICAgcHVibGljIGluY3JlbWVudDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IFRva2VuLCBpbmNyZW1lbnQ6IG51bWJlciwgbGluZTogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuaW5jcmVtZW50ID0gaW5jcmVtZW50O1xyXG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xyXG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UG9zdGZpeEV4cHIodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdFeHByLlBvc3RmaXgnO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmFuZ2UgZXh0ZW5kcyBFeHByIHtcclxuICAgIHB1YmxpYyBzdGFydDogRXhwcjtcclxuICAgIHB1YmxpYyBlbmQ6IEV4cHI7XHJcbiAgICBwdWJsaWMgc3RlcDogRXhwcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzdGFydDogRXhwciwgZW5kOiBFeHByLCBzdGVwOiBFeHByLCBsaW5lOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcclxuICAgICAgICB0aGlzLmVuZCA9IGVuZDtcclxuICAgICAgICB0aGlzLnN0ZXAgPSBzdGVwO1xyXG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xyXG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UmFuZ2VFeHByKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnRXhwci5SYW5nZSc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZWdFeCBleHRlbmRzIEV4cHIge1xyXG4gICAgcHVibGljIHZhbHVlOiBSZWdFeHA7XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IFJlZ0V4cCwgbGluZTogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XHJcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRSZWdFeEV4cHIodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdFeHByLlJlZ0V4JztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNldCBleHRlbmRzIEV4cHIge1xyXG4gICAgcHVibGljIGVudGl0eTogRXhwcjtcclxuICAgIHB1YmxpYyBrZXk6IEV4cHI7XHJcbiAgICBwdWJsaWMgdmFsdWU6IEV4cHI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW50aXR5OiBFeHByLCBrZXk6IEV4cHIsIHZhbHVlOiBFeHByLCBsaW5lOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuZW50aXR5ID0gZW50aXR5O1xyXG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcclxuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFNldEV4cHIodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdFeHByLlNldCc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZSBleHRlbmRzIEV4cHIge1xyXG4gICAgcHVibGljIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZywgbGluZTogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XHJcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRUZW1wbGF0ZUV4cHIodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdFeHByLlRlbXBsYXRlJztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRlcm5hcnkgZXh0ZW5kcyBFeHByIHtcclxuICAgIHB1YmxpYyBjb25kaXRpb246IEV4cHI7XHJcbiAgICBwdWJsaWMgdGhlbkV4cHI6IEV4cHI7XHJcbiAgICBwdWJsaWMgZWxzZUV4cHI6IEV4cHI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZGl0aW9uOiBFeHByLCB0aGVuRXhwcjogRXhwciwgZWxzZUV4cHI6IEV4cHIsIGxpbmU6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XHJcbiAgICAgICAgdGhpcy50aGVuRXhwciA9IHRoZW5FeHByO1xyXG4gICAgICAgIHRoaXMuZWxzZUV4cHIgPSBlbHNlRXhwcjtcclxuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcclxuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFRlcm5hcnlFeHByKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnRXhwci5UZXJuYXJ5JztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFR5cGVvZiBleHRlbmRzIEV4cHIge1xyXG4gICAgcHVibGljIHZhbHVlOiBFeHByO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBFeHByLCBsaW5lOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcclxuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFR5cGVvZkV4cHIodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdFeHByLlR5cGVvZic7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVbmFyeSBleHRlbmRzIEV4cHIge1xyXG4gICAgcHVibGljIG9wZXJhdG9yOiBUb2tlbjtcclxuICAgIHB1YmxpYyByaWdodDogRXhwcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvcGVyYXRvcjogVG9rZW4sIHJpZ2h0OiBFeHByLCBsaW5lOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcclxuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XHJcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XHJcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRVbmFyeUV4cHIodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdFeHByLlVuYXJ5JztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFZhcmlhYmxlIGV4dGVuZHMgRXhwciB7XHJcbiAgICBwdWJsaWMgbmFtZTogVG9rZW47XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogVG9rZW4sIGxpbmU6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcclxuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFZhcmlhYmxlRXhwcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ0V4cHIuVmFyaWFibGUnO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVm9pZCBleHRlbmRzIEV4cHIge1xyXG4gICAgcHVibGljIHZhbHVlOiBFeHByO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBFeHByLCBsaW5lOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcclxuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFZvaWRFeHByKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnRXhwci5Wb2lkJztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFp0cmluZyBleHRlbmRzIEV4cHIge1xyXG4gICAgcHVibGljIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZywgbGluZTogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XHJcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRadHJpbmdFeHByKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnRXhwci5adHJpbmcnO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgKiBhcyBTdG10IGZyb20gJy4vc3RhdGVtZW50JztcclxuaW1wb3J0IHsgJEFueSB9IGZyb20gJy4vYW55JztcclxuaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gJy4uL2NvbnNvbGUnO1xyXG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgSW50ZXJwcmV0ZXIgfSBmcm9tICcuLi9pbnRlcnByZXRlcic7XHJcbmltcG9ydCB7IFNjb3BlIH0gZnJvbSAnLi4vc2NvcGUnO1xyXG5pbXBvcnQgeyAkTnVsbCB9IGZyb20gJy4vbnVsbCc7XHJcbmRlY2xhcmUgdmFyIGNvbnpvbGU6IENvbnNvbGU7XHJcblxyXG5leHBvcnQgdHlwZSBGdW5jdGlvbkNhbGwgPSAodGhpejogJEFueSwgYXJnczogJEFueVtdLCBpbnRlcnByZXRlcjogSW50ZXJwcmV0ZXIpID0+ICRBbnk7XHJcblxyXG5leHBvcnQgY2xhc3MgJENhbGxhYmxlIGV4dGVuZHMgJEFueSB7XHJcblxyXG4gICAgcHVibGljIHZhbHVlOiBGdW5jdGlvbkNhbGw7XHJcbiAgICBwdWJsaWMgYXJpdHk6IG51bWJlcjtcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCAgYXJpdHk6IG51bWJlciwgdmFsdWU6IEZ1bmN0aW9uQ2FsbCkge1xyXG4gICAgICAgIHN1cGVyKHZhbHVlLCBEYXRhVHlwZS5GdW5jdGlvbik7XHJcbiAgICAgICAgdGhpcy5hcml0eSA9IGFyaXR5O1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhbGwodGhpejogYW55LCBhcmdzOiBhbnlbXSwgaW50ZXJwcmV0ZXI6IEludGVycHJldGVyLCApOiAkQW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSh0aGl6LCBhcmdzLCBpbnRlcnByZXRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGA8JHt0aGlzLm5hbWV9ICBmdW5jdGlvbj5gO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzICRGdW5jdGlvbiBleHRlbmRzICRDYWxsYWJsZSB7XHJcbiAgICBwdWJsaWMgZGVjbGFyYXRpb246IFN0bXQuRnVuYztcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGNsb3N1cmU6IFNjb3BlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRlY2xhcmF0aW9uOiBTdG10LkZ1bmMsIGNsb3N1cmU6IFNjb3BlKSB7XHJcbiAgICAgICAgc3VwZXIoZGVjbGFyYXRpb24ubmFtZS5sZXhlbWUsIGRlY2xhcmF0aW9uLnBhcmFtcy5sZW5ndGgsIG51bGwpO1xyXG4gICAgICAgIHRoaXMuZGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbjtcclxuICAgICAgICB0aGlzLmNsb3N1cmUgPSBjbG9zdXJlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYWxsKHRoaXo6IGFueSwgYXJnczogYW55W10sIGludGVycHJldGVyOiBJbnRlcnByZXRlcik6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IHNjb3BlID0gbmV3IFNjb3BlKHRoaXMuY2xvc3VyZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRlY2xhcmF0aW9uLnBhcmFtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBzY29wZS5kZWZpbmUodGhpcy5kZWNsYXJhdGlvbi5wYXJhbXNbaV0ubGV4ZW1lLCBhcmdzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2NvcGUuc2V0KCd0aGlzJywgdGhpeik7XHJcbiAgICAgICAgbGV0IHJlc3RvcmVTY29wZTogU2NvcGUgPSBudWxsO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJlc3RvcmVTY29wZSA9IGludGVycHJldGVyLnNjb3BlO1xyXG4gICAgICAgICAgICBpbnRlcnByZXRlci5leGVjdXRlQmxvY2sodGhpcy5kZWNsYXJhdGlvbi5ib2R5LCBzY29wZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mICRBbnkgJiYgZS50eXBlID09PSBEYXRhVHlwZS5SZXR1cm4pIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN0b3JlU2NvcGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcnByZXRlci5zY29wZSA9IHJlc3RvcmVTY29wZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBlLnZhbHVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBmcm9tSmF2YVNjcmlwdE1ldGhvZCB9IGZyb20gJy4uL3J1bnRpbWUnO1xyXG5pbXBvcnQgeyBJbnRlcnByZXRlciB9IGZyb20gJy4uL2ludGVycHJldGVyJztcclxuaW1wb3J0IHsgJEFueSB9IGZyb20gJy4vYW55JztcclxuaW1wb3J0IHsgJEZ1bmN0aW9uLCAkQ2FsbGFibGUgfSBmcm9tICcuL2Z1bmN0aW9uJztcclxuaW1wb3J0IHsgJE51bGwgfSBmcm9tICcuL251bGwnO1xyXG5pbXBvcnQgeyAkTnVtYmVyIH0gZnJvbSAnLi9udW1iZXInO1xyXG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgJFJhbmdlIH0gZnJvbSAnLi9yYW5nZSc7XHJcbmltcG9ydCB7ICRCb29sZWFuIH0gZnJvbSAnLi9ib29sZWFuJztcclxuXHJcbmV4cG9ydCBjbGFzcyAkTGlzdCBleHRlbmRzICRBbnkge1xyXG4gICAgcHVibGljIHZhbHVlOiAkQW55W107XHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogJEFueVtdKSB7XHJcbiAgICAgICAgc3VwZXIodmFsdWUsIERhdGFUeXBlLkxpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoa2V5OiAkQW55KTogJEFueSB7XHJcbiAgICAgICAgaWYgKGtleS5pc051bWJlcigpKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy52YWx1ZVtrZXkudmFsdWVdICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVba2V5LnZhbHVlXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJE51bGwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5LmlzUmFuZ2UoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yYW5nZSg8JFJhbmdlPiBrZXkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoJExpc3QucnVudGltZS5oYXMoa2V5LnZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJExpc3QucnVudGltZS5nZXQoa2V5LnZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3ICROdWxsKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0KGtleTogJEFueSwgdmFsdWU6ICRBbnkpOiAkQW55IHtcclxuICAgICAgICBpZiAoa2V5LmlzTnVtYmVyKCkpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZVtrZXkudmFsdWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJhbmdlKHJhbmdlOiAkUmFuZ2UpOiAkTGlzdCB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0OiAkQW55W10gPSBbXTtcclxuICAgICAgICByYW5nZS5pdGVyYXRlKHRoaXMudmFsdWUubGVuZ3RoLCAoaSkgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLnZhbHVlW2ldKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbmV3ICRMaXN0KHJlc3VsdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGBbJHt0aGlzLnZhbHVlLmpvaW4oJywnKX1dYDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNpemUodGhpejogJEFueSwgYXJnczogJEFueVtdKTogJEFueSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkTnVtYmVyKGFyZ3NbMF0udmFsdWUubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGVhY2godGhpejogJEFueSwgYXJnczogJEFueVtdLCBpbnRlcnByZXRlcjogSW50ZXJwcmV0ZXIpOiAkQW55IHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXoudmFsdWUubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgKGFyZ3NbMF0gYXMgJEZ1bmN0aW9uKS5jYWxsKHRoaXosIFt0aGl6LnZhbHVlW2ldLCBuZXcgJE51bWJlcihpKSwgdGhpel0sIGludGVycHJldGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXo7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtYXAodGhpejogJEFueSwgYXJnczogJEFueVtdLCBpbnRlcnByZXRlcjogSW50ZXJwcmV0ZXIpOiAkQW55IHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXoudmFsdWUubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpei52YWx1ZVtpXSA9IChhcmdzWzBdIGFzICRGdW5jdGlvbikuY2FsbCh0aGl6LCBbbmV3ICRBbnkodGhpei52YWx1ZVtpXSksIG5ldyAkTnVtYmVyKGkpLCB0aGl6XSwgaW50ZXJwcmV0ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpejtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJ1bnRpbWUgPSAgbmV3IE1hcChbXHJcbiAgICAgICAgWydjb25jYXQnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgnY29uY2F0JywgLTEsIERhdGFUeXBlLkxpc3QpXSxcclxuICAgICAgICBbJ2VhY2gnLCBuZXcgJENhbGxhYmxlKCdlYWNoJywgMSwgJExpc3QuZWFjaCldLFxyXG4gICAgICAgIFsnaW5jbHVkZXMnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgnaW5jbHVkZXMnLCAxLCBEYXRhVHlwZS5Cb29sZWFuKV0sXHJcbiAgICAgICAgWydpbmRleE9mJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ2luZGV4T2YnLCAxLCBEYXRhVHlwZS5OdW1iZXIpXSxcclxuICAgICAgICBbJ2pvaW4nLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgnam9pbicsIDEsIERhdGFUeXBlLlN0cmluZyldLFxyXG4gICAgICAgIFsnbGFzdEluZGV4T2YnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgnbGFzdEluZGV4T2YnLCAxLCBEYXRhVHlwZS5OdW1iZXIpXSxcclxuICAgICAgICBbJ21hcCcsIG5ldyAkQ2FsbGFibGUoJ21hcCcsIDEsICRMaXN0Lm1hcCldLFxyXG4gICAgICAgIFsncG9wJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ3BvcCcsIDAsIERhdGFUeXBlLkxpc3QpXSxcclxuICAgICAgICBbJ3B1c2gnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgncHVzaCcsIC0xLCBEYXRhVHlwZS5MaXN0KV0sXHJcbiAgICAgICAgWydzaGlmdCcsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCdzaGlmdCcsIDAsIERhdGFUeXBlLkxpc3QpXSxcclxuICAgICAgICBbJ3NpemUnLCBuZXcgJENhbGxhYmxlKCdzaXplJywgMCwgICh0aGl6OiAkQW55LCBhcmdzOiAkQW55W10pOiAkQW55ID0+IG5ldyAkTnVtYmVyKHRoaXoudmFsdWUubGVuZ3RoKSldLFxyXG4gICAgICAgIFsnc2xpY2UnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgnc2xpY2UnLCAtMSwgRGF0YVR5cGUuTGlzdCldLFxyXG4gICAgICAgIFsnc3BsaWNlJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ3NwbGljZScsIC0xLCBEYXRhVHlwZS5MaXN0KV0sXHJcbiAgICAgICAgWyd1bnNoaWZ0JywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ3Vuc2hpZnQnLCAtMSwgRGF0YVR5cGUuTGlzdCldXHJcbiAgICBdKTtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGUuZW51bSc7XHJcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL2FueSc7XHJcblxyXG5leHBvcnQgY2xhc3MgJE51bGwgZXh0ZW5kcyAkQW55IHtcclxuXHJcbiAgICBwdWJsaWMgdmFsdWU6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIobnVsbCk7XHJcbiAgICAgICAgdGhpcy50eXBlID0gRGF0YVR5cGUuTnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuICdudWxsJztcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGUuZW51bSc7XHJcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL2FueSc7XHJcblxyXG5leHBvcnQgY2xhc3MgJE51bWJlciBleHRlbmRzICRBbnkge1xyXG5cclxuICAgIHB1YmxpYyB2YWx1ZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcih2YWx1ZSwgRGF0YVR5cGUuTnVtYmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgJEFueSB9IGZyb20gJy4vYW55JztcclxuaW1wb3J0IHsgJE51bGwgfSBmcm9tICcuL251bGwnO1xyXG5pbXBvcnQgeyAkQ2xhc3MgfSBmcm9tICcuL2NsYXNzJztcclxuaW1wb3J0IHsgJEJvb2xlYW4gfSBmcm9tICcuL2Jvb2xlYW4nO1xyXG5cclxuZXhwb3J0IGNsYXNzICRPYmplY3QgZXh0ZW5kcyAkQW55IHtcclxuICAgIHB1YmxpYyB2YWx1ZTogTWFwPHN0cmluZywgJEFueT47XHJcbiAgICBwdWJsaWMgY29uenRydWN0b3I6ICRBbnk7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBNYXA8c3RyaW5nLCAkQW55PiwgY29uenRydWN0b3I6ICRBbnkpIHtcclxuICAgICAgICBzdXBlcih2YWx1ZSwgRGF0YVR5cGUuT2JqZWN0KTtcclxuICAgICAgICB0aGlzLmNvbnp0cnVjdG9yID0gY29uenRydWN0b3I7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gKGNvbnp0cnVjdG9yIGFzICRDbGFzcykubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KGtleTogJEFueSk6ICRBbnkge1xyXG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IHRoaXMuY29uenRydWN0b3IuZ2V0KGtleSk7XHJcblxyXG4gICAgICAgIGlmIChtZXRob2QuaXNGdW5jdGlvbigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZXRob2Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy52YWx1ZS5oYXMoa2V5LnZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS5nZXQoa2V5LnZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgJE51bGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0KGtleTogJEFueSwgdmFsdWU6ICRBbnkpOiAkQW55IHtcclxuICAgICAgICB0aGlzLnZhbHVlLnNldChrZXkudmFsdWUsIHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGA8JHt0aGlzLm5hbWV9IG9iamVjdD5gO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi90eXBlLmVudW0nO1xyXG5pbXBvcnQgeyAkQW55IH0gZnJvbSAnLi9hbnknO1xyXG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnLi4vY29uc29sZSc7XHJcbmRlY2xhcmUgdmFyIGNvbnpvbGU6IENvbnNvbGU7XHJcblxyXG5leHBvcnQgIGNsYXNzIFJhbmdlVmFsdWUge1xyXG4gICAgcHVibGljIHN0YXJ0OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZW5kOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgc3RlcDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyLCBzdGVwOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XHJcbiAgICAgICAgdGhpcy5lbmQgPSBlbmQ7XHJcbiAgICAgICAgdGhpcy5zdGVwID0gc3RlcDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbm9ybWFsaXplKGxlbmd0aDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RlcCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0ZXAgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5lbmQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmQgPSB0aGlzLnN0ZXAgPiAwID8gbGVuZ3RoIC0gMSA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXJ0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQgPSB0aGlzLnN0ZXAgPiAwID8gMCA6IGxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgJFJhbmdlIGV4dGVuZHMgJEFueSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IFJhbmdlVmFsdWUpIHtcclxuICAgICAgICBzdXBlcih2YWx1ZSwgRGF0YVR5cGUuUmFuZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpdGVyYXRlKGxlbmd0aDogbnVtYmVyLCBjYWxsYmFjazogKGluZGV4OiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnZhbHVlLm5vcm1hbGl6ZShsZW5ndGgpO1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlLnN0ZXAgPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnZhbHVlLnN0YXJ0OyBpIDw9IHRoaXMudmFsdWUuZW5kOyBpICs9IHRoaXMudmFsdWUuc3RlcCkge1xyXG4gICAgICAgICAgICAgICBjYWxsYmFjayhpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy52YWx1ZS5zdGVwIDwgMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy52YWx1ZS5zdGFydDsgaSA+PSB0aGlzLnZhbHVlLmVuZDsgaSArPSB0aGlzLnZhbHVlLnN0ZXApIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uem9sZS53YXJuKGBbcmFuZ2UgZXJyb3JdID0+IDAgaXMgbm90IGEgdmFsaWQgc3RlcGApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgJEFueSB9IGZyb20gJy4vYW55JztcclxuXHJcbmV4cG9ydCBjbGFzcyAkUmVnRXhwIGV4dGVuZHMgJEFueSB7XHJcblxyXG4gICAgcHVibGljIHZhbHVlOiBSZWdFeHA7XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IFJlZ0V4cCkge1xyXG4gICAgICAgIHN1cGVyKHZhbHVlLCBEYXRhVHlwZS5SZWdFeHApO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBUb2tlbiB9IGZyb20gJ3Rva2VuJztcblxuaW1wb3J0IHsgRXhwciB9IGZyb20gJ2V4cHJlc3Npb24nO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3RtdCB7XG4gICAgcHVibGljIHJlc3VsdDogYW55O1xuICAgIHB1YmxpYyBsaW5lOiBudW1iZXI7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgY29uc3RydWN0b3IoKSB7IH1cbiAgICBwdWJsaWMgYWJzdHJhY3QgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUjtcbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5leHBvcnQgaW50ZXJmYWNlIFN0bXRWaXNpdG9yPFI+IHtcbiAgICB2aXNpdEJsb2NrU3RtdChzdG10OiBCbG9jayk6IFI7XG4gICAgdmlzaXRCcmVha1N0bXQoc3RtdDogQnJlYWspOiBSO1xuICAgIHZpc2l0Q2xhc3NTdG10KHN0bXQ6IENsYXNzKTogUjtcbiAgICB2aXNpdENvbnRpbnVlU3RtdChzdG10OiBDb250aW51ZSk6IFI7XG4gICAgdmlzaXREb1doaWxlU3RtdChzdG10OiBEb1doaWxlKTogUjtcbiAgICB2aXNpdEV4cHJlc3Npb25TdG10KHN0bXQ6IEV4cHJlc3Npb24pOiBSO1xuICAgIHZpc2l0RnVuY1N0bXQoc3RtdDogRnVuYyk6IFI7XG4gICAgdmlzaXRJZlN0bXQoc3RtdDogSWYpOiBSO1xuICAgIHZpc2l0UHJpbnRTdG10KHN0bXQ6IFByaW50KTogUjtcbiAgICB2aXNpdFJldHVyblN0bXQoc3RtdDogUmV0dXJuKTogUjtcbiAgICB2aXNpdFZhclN0bXQoc3RtdDogVmFyKTogUjtcbiAgICB2aXNpdFdoaWxlU3RtdChzdG10OiBXaGlsZSk6IFI7XG59XG5cbmV4cG9ydCBjbGFzcyBCbG9jayBleHRlbmRzIFN0bXQge1xuICAgIHB1YmxpYyBzdGF0ZW1lbnRzOiBTdG10W107XG5cbiAgICBjb25zdHJ1Y3RvcihzdGF0ZW1lbnRzOiBTdG10W10sIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRCbG9ja1N0bXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnU3RtdC5CbG9jayc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQnJlYWsgZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMga2V5d29yZDogVG9rZW47XG5cbiAgICBjb25zdHJ1Y3RvcihrZXl3b3JkOiBUb2tlbiwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMua2V5d29yZCA9IGtleXdvcmQ7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEJyZWFrU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LkJyZWFrJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGFzcyBleHRlbmRzIFN0bXQge1xuICAgIHB1YmxpYyBuYW1lOiBUb2tlbjtcbiAgICBwdWJsaWMgcGFyZW50OiBUb2tlbjtcbiAgICBwdWJsaWMgbWV0aG9kczogRnVuY1tdO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogVG9rZW4sIHBhcmVudDogVG9rZW4sIG1ldGhvZHM6IEZ1bmNbXSwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLm1ldGhvZHMgPSBtZXRob2RzO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRDbGFzc1N0bXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnU3RtdC5DbGFzcyc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29udGludWUgZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMga2V5d29yZDogVG9rZW47XG5cbiAgICBjb25zdHJ1Y3RvcihrZXl3b3JkOiBUb2tlbiwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMua2V5d29yZCA9IGtleXdvcmQ7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdENvbnRpbnVlU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LkNvbnRpbnVlJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb1doaWxlIGV4dGVuZHMgU3RtdCB7XG4gICAgcHVibGljIGxvb3A6IFN0bXQ7XG4gICAgcHVibGljIGNvbmRpdGlvbjogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKGxvb3A6IFN0bXQsIGNvbmRpdGlvbjogRXhwciwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubG9vcCA9IGxvb3A7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXREb1doaWxlU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LkRvV2hpbGUnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV4cHJlc3Npb24gZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMgZXhwcmVzc2lvbjogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKGV4cHJlc3Npb246IEV4cHIsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRFeHByZXNzaW9uU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LkV4cHJlc3Npb24nO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZ1bmMgZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMgbmFtZTogVG9rZW47XG4gICAgcHVibGljIHBhcmFtczogVG9rZW5bXTtcbiAgICBwdWJsaWMgYm9keTogU3RtdFtdO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogVG9rZW4sIHBhcmFtczogVG9rZW5bXSwgYm9keTogU3RtdFtdLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gICAgICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEZ1bmNTdG10KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1N0bXQuRnVuYyc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSWYgZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMgY29uZGl0aW9uOiBFeHByO1xuICAgIHB1YmxpYyB0aGVuU3RtdDogU3RtdDtcbiAgICBwdWJsaWMgZWxzZVN0bXQ6IFN0bXQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25kaXRpb246IEV4cHIsIHRoZW5TdG10OiBTdG10LCBlbHNlU3RtdDogU3RtdCwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgICAgICB0aGlzLnRoZW5TdG10ID0gdGhlblN0bXQ7XG4gICAgICAgIHRoaXMuZWxzZVN0bXQgPSBlbHNlU3RtdDtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0SWZTdG10KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1N0bXQuSWYnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFByaW50IGV4dGVuZHMgU3RtdCB7XG4gICAgcHVibGljIGV4cHJlc3Npb246IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihleHByZXNzaW9uOiBFeHByLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UHJpbnRTdG10KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1N0bXQuUHJpbnQnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJldHVybiBleHRlbmRzIFN0bXQge1xuICAgIHB1YmxpYyBrZXl3b3JkOiBUb2tlbjtcbiAgICBwdWJsaWMgdmFsdWU6IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihrZXl3b3JkOiBUb2tlbiwgdmFsdWU6IEV4cHIsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmtleXdvcmQgPSBrZXl3b3JkO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFJldHVyblN0bXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnU3RtdC5SZXR1cm4nO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZhciBleHRlbmRzIFN0bXQge1xuICAgIHB1YmxpYyBuYW1lOiBUb2tlbjtcbiAgICBwdWJsaWMgdHlwZTogVG9rZW47XG4gICAgcHVibGljIGluaXRpYWxpemVyOiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogVG9rZW4sIHR5cGU6IFRva2VuLCBpbml0aWFsaXplcjogRXhwciwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZXIgPSBpbml0aWFsaXplcjtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VmFyU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LlZhcic7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgV2hpbGUgZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMgY29uZGl0aW9uOiBFeHByO1xuICAgIHB1YmxpYyBsb29wOiBTdG10O1xuXG4gICAgY29uc3RydWN0b3IoY29uZGl0aW9uOiBFeHByLCBsb29wOiBTdG10LCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgICAgIHRoaXMubG9vcCA9IGxvb3A7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFdoaWxlU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LldoaWxlJztcbiAgICB9XG59XG5cbiIsImltcG9ydCB7IGZyb21KYXZhU2NyaXB0TWV0aG9kIH0gZnJvbSAnLi4vcnVudGltZSc7XHJcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL2FueSc7XHJcbmltcG9ydCB7ICRDYWxsYWJsZSwgJEZ1bmN0aW9uIH0gZnJvbSAnLi9mdW5jdGlvbic7XHJcbmltcG9ydCB7ICROdWxsIH0gZnJvbSAnLi9udWxsJztcclxuaW1wb3J0IHsgJE51bWJlciB9IGZyb20gJy4vbnVtYmVyJztcclxuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGUuZW51bSc7XHJcbmltcG9ydCB7IEludGVycHJldGVyIH0gZnJvbSAnLi4vaW50ZXJwcmV0ZXInO1xyXG5pbXBvcnQgeyAkUmFuZ2UgfSBmcm9tICcuL3JhbmdlJztcclxuXHJcbmV4cG9ydCBjbGFzcyAkU3RyaW5nIGV4dGVuZHMgJEFueSB7XHJcbiAgICBwdWJsaWMgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIodmFsdWUsIERhdGFUeXBlLlN0cmluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldChrZXk6ICRBbnkpOiAkQW55IHtcclxuICAgICAgICBpZiAoa2V5LmlzTnVtYmVyKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyAkU3RyaW5nKHRoaXMudmFsdWVba2V5LnZhbHVlXSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChrZXkuaXNSYW5nZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJhbmdlKDwkUmFuZ2U+IGtleSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgkU3RyaW5nLnJ1bnRpbWUuaGFzKGtleS52YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICRTdHJpbmcucnVudGltZS5nZXQoa2V5LnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0KGtleTogJEFueSwgdmFsdWU6IGFueSk6ICRBbnkge1xyXG4gICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnByb3BlcnRpZXMuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3ICROdWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGBcIiR7dGhpcy52YWx1ZX1cImA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByYW5nZShyYW5nZTogJFJhbmdlKTogJFN0cmluZyB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gICAgICAgIHJhbmdlLml0ZXJhdGUodGhpcy52YWx1ZS5sZW5ndGgsIChpOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IHRoaXMudmFsdWVbaV07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyAkU3RyaW5nKHJlc3VsdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZXBsYWNlKHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSwgaW50ZXJwZXRlcjogSW50ZXJwcmV0ZXIpOiAkQW55IHtcclxuICAgICAgICBpZiAoYXJnc1sxXS5pc0Z1bmN0aW9uKCkpIHtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIG5ldyAkU3RyaW5nKHRoaXoudmFsdWUucmVwbGFjZShhcmdzWzBdLnZhbHVlLCBhcmdzWzFdLnZhbHVlKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGl6LnZhbHVlLnJlcGxhY2UoYXJnc1swXS52YWx1ZSwgKChtYXRjaDogc3RyaW5nKSA9PlxyXG4gICAgICAgICAgICAgICAgKChhcmdzWzFdIGFzICRGdW5jdGlvbikuY2FsbCh0aGl6LCBbbmV3ICRTdHJpbmcobWF0Y2gpXSwgaW50ZXJwZXRlcikpLnZhbHVlXHJcbiAgICAgICAgICAgICkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3ICRTdHJpbmcodGhpei52YWx1ZS5yZXBsYWNlKGFyZ3NbMF0udmFsdWUsIGFyZ3NbMV0udmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljICBydW50aW1lID0gIG5ldyBNYXAoW1xyXG4gICAgICAgIFsndG9VcHBlcicsICBmcm9tSmF2YVNjcmlwdE1ldGhvZCgndG9VcHBlckNhc2UnLCAwLCBEYXRhVHlwZS5TdHJpbmcpXSxcclxuICAgICAgICBbJ3RvTG93ZXInLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgndG9Mb3dlckNhc2UnLCAwLCBEYXRhVHlwZS5TdHJpbmcpXSxcclxuICAgICAgICBbJ3NpemUnLCBuZXcgJENhbGxhYmxlKCdzaXplJywgMCwgICh0aGl6OiAkQW55LCBhcmdzOiAkQW55W10pOiAkQW55ID0+IG5ldyAkTnVtYmVyKHRoaXoudmFsdWUubGVuZ3RoKSldLFxyXG4gICAgICAgIFsnc3BsaXQnLCAgZnJvbUphdmFTY3JpcHRNZXRob2QoJ3NwbGl0JywgMSwgRGF0YVR5cGUuTGlzdCldLFxyXG4gICAgICAgIFsnY29uY2F0JywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ2NvbmNhdCcsIDEsIERhdGFUeXBlLlN0cmluZyldLFxyXG4gICAgICAgIFsnaW5jbHVkZXMnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgnaW5jbHVkZXMnLCAxLCBEYXRhVHlwZS5Cb29sZWFuKV0sXHJcbiAgICAgICAgWydpbmRleE9mJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ2luZGV4T2YnLCAxLCBEYXRhVHlwZS5OdW1iZXIpXSxcclxuICAgICAgICBbJ2xhc3RJbmRleE9mJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ2xhc3RJbmRleE9mJywgMSwgRGF0YVR5cGUuTnVtYmVyKV0sXHJcbiAgICAgICAgWydyZXBlYXQnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgncmVwZWF0JywgMSwgRGF0YVR5cGUuU3RyaW5nKV0sXHJcbiAgICAgICAgWydyZXBsYWNlJywgbmV3ICRDYWxsYWJsZSgncmVwbGFjZScsIC0xLCAkU3RyaW5nLnJlcGxhY2UpXSxcclxuICAgICAgICBbJ3NlYXJjaCcsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCdzZWFyY2gnLCAxLCBEYXRhVHlwZS5OdW1iZXIpXSxcclxuICAgICAgICBbJ3NsaWNlJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ3NsaWNlJywgLTEsIERhdGFUeXBlLlN0cmluZyldLFxyXG4gICAgICAgIFsnc3Vic3RyaW5nJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ3N1YnN0cmluZycsIC0xLCBEYXRhVHlwZS5TdHJpbmcpXSxcclxuICAgICAgICBbJ3RyaW0nLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgndHJpbScsIDAsIERhdGFUeXBlLlN0cmluZyldLFxyXG4gICAgXSk7XHJcblxyXG59XHJcbiIsImV4cG9ydCBlbnVtIERhdGFUeXBlIHtcclxuICAgIE51bGwsICAgIC8vIDBcclxuICAgIEFueSwgICAgIC8vIDFcclxuICAgIEJvb2xlYW4sIC8vIDJcclxuICAgIE51bWJlciwgIC8vIDNcclxuICAgIFN0cmluZywgIC8vIDRcclxuICAgIExpc3QsICAgIC8vIDVcclxuICAgIERpY3Rpb25hcnksIC8vIDZcclxuICAgIE9iamVjdCwgICAvLyA3XHJcbiAgICBDbGFzcywgICAgLy8gOFxyXG4gICAgRnVuY3Rpb24sIC8vIDlcclxuICAgIExhbWJkYSwgICAvLyAxMFxyXG4gICAgUmFuZ2UsICAgIC8vIDExXHJcbiAgICBSZWdFeHAsICAgLy8gMTJcclxuICAgIEVycm9yLCAgICAvLyAxM1xyXG4gICAgLy8gaW50ZXJuYWwgdHlwZXNcclxuICAgIFZvaWQgPSAxMDAsIC8vICAxMDBcclxuICAgIFJldHVybiwgICAvLyAxMDFcclxuICAgIEJyZWFrLCAgICAvLyAxMDJcclxuICAgIENvbnRpbnVlICAvLyAxMDNcclxufVxyXG4iLCJpbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgJEFueSB9IGZyb20gJy4vYW55JztcclxuXHJcbmV4cG9ydCBjbGFzcyAkVm9pZCBleHRlbmRzICRBbnkge1xyXG5cclxuICAgIHB1YmxpYyB2YWx1ZTogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIodmFsdWUsIERhdGFUeXBlLlZvaWQpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBUb2tlblR5cGUgfSBmcm9tICcuL3Rva2VuJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0RpZ2l0KGNoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoYXIgPj0gJzAnICYmIGNoYXIgPD0gJzknO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNBbHBoYShjaGFyOiBzdHJpbmcgKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKGNoYXIgPj0gJ2EnICYmIGNoYXIgPD0gJ3onKSB8fCAoY2hhciA+PSAnQScgJiYgY2hhciA8PSAnWicpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNBbHBoYU51bWVyaWMoY2hhcjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXNBbHBoYShjaGFyKSB8fCBpc0RpZ2l0KGNoYXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNLZXl3b3JkKHdvcmQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIFRva2VuVHlwZVt3b3JkXSA+PSBUb2tlblR5cGUuQW5kO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZSh3b3JkOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=