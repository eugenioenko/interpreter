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
var d = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4
};
var it = d.iterator();
print it.next();
print it.next();
print it.next();
print it.next();
print it.next();
print it.next();

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
/* harmony import */ var _iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./iterator */ "./src/types/iterator.ts");








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
    static iterator(thiz, args, interpreter) {
        return new _iterator__WEBPACK_IMPORTED_MODULE_7__["$Iterator"](thiz);
    }
    static next(thiz) {
        const it = thiz;
        const dict = it.value;
        // empty list
        if (!dict.value.size) {
            return new _null__WEBPACK_IMPORTED_MODULE_3__["$Null"]();
        }
        // first value
        if (it.iter === null) {
            it.iter = dict.value.keys();
        }
        const next = it.iter.next();
        // no more values to iterate
        if (next.done) {
            return new _null__WEBPACK_IMPORTED_MODULE_3__["$Null"]();
        }
        return new _string__WEBPACK_IMPORTED_MODULE_5__["$String"](next.value);
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
    ['iterator', new _function__WEBPACK_IMPORTED_MODULE_2__["$Callable"]('iterator', 0, $Dictionary.iterator)],
    ['next', new _function__WEBPACK_IMPORTED_MODULE_2__["$Callable"]('next', 0, $Dictionary.next)]
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

/***/ "./src/types/iterator.ts":
/*!*******************************!*\
  !*** ./src/types/iterator.ts ***!
  \*******************************/
/*! exports provided: $Iterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$Iterator", function() { return $Iterator; });
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");
/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dictionary */ "./src/types/dictionary.ts");
/* harmony import */ var _null__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./null */ "./src/types/null.ts");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function */ "./src/types/function.ts");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./string */ "./src/types/string.ts");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list */ "./src/types/list.ts");







class $Iterator extends _any__WEBPACK_IMPORTED_MODULE_1__["$Any"] {
    constructor(value) {
        super(value, _type_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].RegExp);
        this.index = new _null__WEBPACK_IMPORTED_MODULE_3__["$Null"]();
        this.iter = null;
    }
    get(key) {
        if (key.value === 'key' || key.value === 'index') {
            return this.index;
        }
        if (key.value === 'value') {
            return this.value.get(this.index);
        }
        if ($Iterator.runtime.has(key.value)) {
            return $Iterator.runtime.get(key.value);
        }
        return new _null__WEBPACK_IMPORTED_MODULE_3__["$Null"]();
    }
    set(key, value) {
        return new _null__WEBPACK_IMPORTED_MODULE_3__["$Null"]();
    }
    toString() {
        return `"${this.value}"`;
    }
    static next(thiz) {
        const it = thiz;
        if (it.value.isList()) {
            it.index = _list__WEBPACK_IMPORTED_MODULE_6__["$List"].next(thiz);
        }
        if (it.value.isDictionary()) {
            it.index = _dictionary__WEBPACK_IMPORTED_MODULE_2__["$Dictionary"].next(thiz);
        }
        // (thiz as $Iterator).index = (thiz.value.get(new $String('next')) as $Callable).call(thiz.value, [(thiz as $Iterator).index], interpreter);
        return it.index;
    }
    static complete(thiz, args, interpreter) {
        return thiz.value.get(new _string__WEBPACK_IMPORTED_MODULE_5__["$String"]('complete')).call(thiz.value, [thiz.index], interpreter);
    }
    static first(thiz, args, interpreter) {
        if (thiz.value.isList()) {
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
    ['next', new _function__WEBPACK_IMPORTED_MODULE_4__["$Callable"]('next', 0, $Iterator.next)],
    ['complete', new _function__WEBPACK_IMPORTED_MODULE_4__["$Callable"]('complete', 0, $Iterator.complete)]
]);


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
/* harmony import */ var _iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./iterator */ "./src/types/iterator.ts");







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
    static iterator(thiz, args, interpreter) {
        return new _iterator__WEBPACK_IMPORTED_MODULE_6__["$Iterator"](thiz);
    }
    static next(thiz) {
        const it = thiz;
        const list = it.value;
        // emtpy list or iteration over
        if (!list.value.length || it.index.isNull()) {
            return new _null__WEBPACK_IMPORTED_MODULE_3__["$Null"]();
        }
        // first value
        if (it.iter === null) {
            it.iter = true;
            return new _number__WEBPACK_IMPORTED_MODULE_4__["$Number"](0);
        }
        // no more values to iterate
        if (it.index.value >= list.value.length - 1) {
            return new _null__WEBPACK_IMPORTED_MODULE_3__["$Null"]();
        }
        return new _number__WEBPACK_IMPORTED_MODULE_4__["$Number"](it.index.value + 1);
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
    ['unshift', Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["fromJavaScriptMethod"])('unshift', -1, _type_enum__WEBPACK_IMPORTED_MODULE_5__["DataType"].List)],
    ['iterator', new _function__WEBPACK_IMPORTED_MODULE_2__["$Callable"]('iterator', 0, $List.iterator)]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0c2NyaXB0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9kZW1vcy9kZW1vLnRzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcnByZXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFyc2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9ydW50aW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2FubmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zY29wZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9rZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL2FueS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvYm9vbGVhbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvY2xhc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL2RpY3Rpb25hcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL2Vycm9yLnRzIiwid2VicGFjazovLy8uL3NyYy90eXBlcy9leHByZXNzaW9uLnRzIiwid2VicGFjazovLy8uL3NyYy90eXBlcy9mdW5jdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvaXRlcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL2xpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL251bGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL251bWJlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy90eXBlcy9yYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL3N0YXRlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvc3RyaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy90eXBlcy90eXBlLmVudW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL3ZvaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9DO0FBQ0Y7QUFDVTtBQUNSO0FBQ1U7QUFLOUMsTUFBTSxRQUFRLEdBQUc7SUFDYixPQUFPLEVBQUUsQ0FBQyxNQUFjLEVBQVUsRUFBRTtRQUNoQyxNQUFNLE9BQU8sR0FBRyxJQUFJLGdEQUFPLEVBQUUsQ0FBQztRQUM5QixNQUFNLE1BQU0sR0FBRyxJQUFJLDhDQUFNLEVBQUUsQ0FBQztRQUM1QixNQUFNLFdBQVcsR0FBRyxJQUFJLHdEQUFXLEVBQUUsQ0FBQztRQUN0QyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFD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Z0JBQUMsTUFBTTtZQUMxRCxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnREFBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ3RELEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGdEQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDdEQsS0FBSyxHQUFHO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsZ0RBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUN2RCxLQUFLLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnREFBUyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ3hELEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQzdGLEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ25HLEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ3RGLEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQzVGLEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQzdGLEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ25HLEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQzdGLEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdEQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxnREFBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ2xKLEtBQUssR0FBRztnQkFBRSxJQUFJLENBQUMsUUFB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SUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7QUFDeEUsQ0FBQztBQUVNLFNBQVMsY0FBYyxDQUFDLElBQVk7SUFDdkMsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFFTSxTQUFTLFNBQVMsQ0FBQyxJQUFZO0lBQ2xDLE9BQU8sZ0RBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxnREFBUyxDQUFDLEdBQUcsQ0FBQztBQUM1QyxDQUFDO0FBRU0sU0FBUyxVQUFVLENBQUMsSUFBWTtJQUNuQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUN2RSxDQUFDIiwiZmlsZSI6ImF0c2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXRzY3JpcHQudHNcIik7XG4iLCJpbXBvcnQgeyBTY2FubmVyIH0gZnJvbSAnLi9zY2FubmVyJztcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJy4vcGFyc2VyJztcbmltcG9ydCB7IEludGVycHJldGVyIH0gZnJvbSAnLi9pbnRlcnByZXRlcic7XG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnLi9jb25zb2xlJztcbmltcG9ydCB7IERlbW9Tb3VyY2VDb2RlIH0gZnJvbSAnLi9kZW1vcy9kZW1vJztcbmltcG9ydCB7IFN0bXQgfSBmcm9tICcuL3R5cGVzL3N0YXRlbWVudCc7XG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueTtcbmRlY2xhcmUgdmFyIGdsb2JhbDogYW55O1xuXG5jb25zdCBhdHNjcmlwdCA9IHtcbiAgICBleGVjdXRlOiAoc291cmNlOiBzdHJpbmcpOiBTdG10W10gPT4ge1xuICAgICAgICBjb25zdCBzY2FubmVyID0gbmV3IFNjYW5uZXIoKTtcbiAgICAgICAgY29uc3QgcGFyc2VyID0gbmV3IFBhcnNlcigpO1xuICAgICAgICBjb25zdCBpbnRlcnByZXRlciA9IG5ldyBJbnRlcnByZXRlcigpO1xuICAgICAgICBjb25zdCB0b2tlbnMgPSBzY2FubmVyLnNjYW4oc291cmNlKTtcbiAgICAgICAgaWYgKHNjYW5uZXIuZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgc2Nhbm5lci5lcnJvcnMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5jb256b2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhdGVtZW50cyA9IHBhcnNlci5wYXJzZSh0b2tlbnMpO1xuICAgICAgICBpZiAocGFyc2VyLmVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHBhcnNlci5lcnJvcnMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5jb256b2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGludGVycHJldGVyLmludGVycGV0KHN0YXRlbWVudHMpO1xuICAgIH0sXG4gICAgaW50ZXJwcmV0ZXI6IEludGVycHJldGVyLFxuICAgIHBhcnNlcjogUGFyc2VyLFxuICAgIHNjYW5uZXI6IFNjYW5uZXJcbn07XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvdy5jb256b2xlID0gbmV3IENvbnNvbGUoKTtcbiAgICB3aW5kb3cuZGVtb1NvdXJjZUNvZGUgPSBEZW1vU291cmNlQ29kZTtcbiAgICB3aW5kb3cuYXRzY3JpcHQgPSBhdHNjcmlwdDtcbn0gZWxzZSB7XG4gICAgZXhwb3J0cy5hdHNjcmlwdCA9IGF0c2NyaXB0O1xufVxuIiwiZXhwb3J0IGVudW0gQ29uc29sZU1lc3NhZ2VUeXBlIHtcbiAgICBVc2VyLFxuICAgIEVycm9yLFxuICAgIFdhcm5pbmcsXG4gICAgSW5mb1xufVxuXG5leHBvcnQgY2xhc3MgQ29uc29sZU1lc3NhZ2Uge1xuICAgIHB1YmxpYyB0aW1lOiBEYXRlO1xuICAgIHB1YmxpYyB0ZXh0OiBhbnk7XG4gICAgcHVibGljIHR5cGU6IENvbnNvbGVNZXNzYWdlVHlwZTtcbn1cblxuZXhwb3J0IGNsYXNzIENvbnNvbGUge1xuXG4gICAgcHVibGljIG1lc3NhZ2VzOiBDb25zb2xlTWVzc2FnZVtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZChtZXNzYWdlOiBhbnksIHR5cGU6IENvbnNvbGVNZXNzYWdlVHlwZSk6IHZvaWQge1xuICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goe1xuICAgICAgICAgICAgdGV4dDogbWVzc2FnZSxcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIHR5cGU6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gW107XG4gICAgfVxuXG4gICAgcHVibGljIGxvZyhtZXNzYWdlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5hZGQobWVzc2FnZSwgQ29uc29sZU1lc3NhZ2VUeXBlLlVzZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyB3YXJuKG1lc3NhZ2U6IGFueSkge1xuICAgICAgICB0aGlzLmFkZChtZXNzYWdlLCBDb25zb2xlTWVzc2FnZVR5cGUuV2FybmluZyk7XG4gICAgfVxuXG4gICAgcHVibGljIGVycm9yKG1lc3NhZ2U6IGFueSkge1xuICAgICAgICB0aGlzLmFkZChtZXNzYWdlLCBDb25zb2xlTWVzc2FnZVR5cGUuRXJyb3IpO1xuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJcIik7XG4gICAgfVxuXG4gICAgcHVibGljIGluZm8obWVzc2FnZTogYW55KSB7XG4gICAgICAgIHRoaXMuYWRkKG1lc3NhZ2UsIENvbnNvbGVNZXNzYWdlVHlwZS5JbmZvKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmlyc3QoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZXNbMF0udGV4dDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbGFzdCgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlc1t0aGlzLm1lc3NhZ2VzLmxlbmd0aCAtIDFdLnRleHQ7XG4gICAgfVxuXG4gICAgcHVibGljIHByaW50KCk6IGFueSB7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyh0aGlzLm1lc3NhZ2VzLm1hcCgoY20pID0+IGNtLnRleHQpKTtcbiAgICB9XG5cbn1cbiIsImV4cG9ydCBjb25zdCBEZW1vU291cmNlQ29kZSA9XG5gXG4vLyBzbGljaW5nIHN0cmluZ3NcbnByaW50IFwib25lIHR3byB0aHJlZSBmb3VyXCJbNDo3OjFdOyAvLyBwcmludHMgdHdvXG5wcmludCBcImhlbGxvIHdvcmxkXCJbNjo6MV0uc2l6ZSgpOyAvLyA1XG5wcmludCBcImhlbGxvIHdvcmxkXCJbOjotMV07IC8vcHJpbnRzIGRscm93IG9sbGVoXG5cbi8vIGZ1bmN0aW9uc1xuZnVuY3Rpb24gc2F5SGVsbG8odGV4dCkge1xuICAgIHByaW50IHRleHQ7XG59XG5zYXlIZWxsbygnaGVsbG8nKTtcblxuLy8gY2xhc3Nlc1xuY2xhc3MgUGVyc29uIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuICAgIGhlbGxvKCkge1xuICAgICAgICBwcmludCB0aGlzLm5hbWUgKyAnIHNheXMgaGknO1xuICAgIH1cbn1cblxuY2xhc3MgU3R1ZGVudCBleHRlbmRzIFBlcnNvbiB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZ3JhZGUpIHtcbiAgICAgICAgYmFzZS5jb25zdHJ1Y3RvcihuYW1lKTtcbiAgICAgICAgdGhpcy5ncmFkZSA9IGdyYWRlO1xuICAgIH1cbiAgICBoZWxsbygpIHtcbiAgICAgICAgYmFzZS5oZWxsbygpO1xuICAgICAgICBwcmludCAnZnJvbSAnICsgdGhpcy5ncmFkZSArICcgZ3JhZGUnO1xuICAgIH1cbn1cblxudmFyIHN0dWRlbnQgPSBuZXcgU3R1ZGVudCgnSm9obicsIDMpO1xuc3R1ZGVudC5oZWxsbygpO1xuXG4vLyBSZWN1cnNpdmUgZnVuY3Rpb25cbmZ1bmN0aW9uIGZhY3RvcmlhbGl6ZShuKSB7XG4gICAgaWYgKG4gPCAwKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKG4gPT0gMCkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgcmV0dXJuIChuICogZmFjdG9yaWFsaXplKG4gLSAxKSk7XG59XG5wcmludCAnZmFjdG9yIG9mIDExOiAnICsgZmFjdG9yaWFsaXplKDExKTtcblxuLy8gc2FtZSBhcyBmYWN0b3JpYWxpemUgYnV0IHdpdGggdGVybmFyeVxuLy8gYW5kIHNob3J0IGZvcm0gZnVuY3Rpb24gZGVmaW5pdGlvblxuQGZhY3RvcihuKSA9PlxuICAgIG4gPCAwID8gLTEgOiAobiA9PSAwID8gMSA6IChuICogZmFjdG9yaWFsaXplKG4gLSAxKSkpO1xuXG5wcmludCAnZmFjdG9yIG9mIDExOiAnICtmYWN0b3IoMTEpO1xuXG4vLyBuZXN0ZWQgZnVuY3Rpb24gcmV0dXJucyBmdW5jdGlvblxuQGFkZChhKSA9PiBAKGIpID0+IEAoYykgPT4gYSArIGIgKyBjO1xucHJpbnQgYWRkKDEwMCkoMjApKDMpO1xuXG5mdW5jdGlvbiBzdWIoYSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHJldHVybiBhIC0gYiAtIGM7XG4gICAgICAgIH07XG4gICAgfTtcbn1cbnByaW50IHN1YigxMDApKDEwKSgxKTtcblxuLy8gd2hpbGUgbG9vcCBhbmQgdGVybmFyeSBvcGVyYXRvclxudmFyIGkgPSAwO1xudmFyIGNvdW50cyA9ICcnO1xud2hpbGUgKGkgPD0gMTApIHtcbiAgICBjb3VudHMgKz0gaSAlIDIgPyAnb2RkICcgOiAnZXZlbiAnO1xuICAgIGkgPSBpICsgMTtcbn1cbnByaW50IGNvdW50cztcbi8vIGxpdGVyYWxzXG52YXIgbGl0ZXJhbCA9IHtcbiAgICBmaXJzdG5hbWU6IFwiSm9oblwiLFxuICAgIGxhc3RuYW1lOiBcIkRvZVwiLFxuICAgIHJlY29yZHM6IHtcbiAgICAgICAgcHJldjogXCJwcmV2aW91c1wiLFxuICAgICAgICBuZXh0OiBcIm5leHRcIlxuICAgIH1cbnZhciBkID0ge1xuICAgICdvbmUnOiAxLFxuICAgICd0d28nOiAyLFxuICAgICd0aHJlZSc6IDMsXG4gICAgJ2ZvdXInOiA0XG59O1xudmFyIGl0ID0gZC5pdGVyYXRvcigpO1xucHJpbnQgaXQubmV4dCgpO1xucHJpbnQgaXQubmV4dCgpO1xucHJpbnQgaXQubmV4dCgpO1xucHJpbnQgaXQubmV4dCgpO1xucHJpbnQgaXQubmV4dCgpO1xucHJpbnQgaXQubmV4dCgpO1xuXG4vLyB0eXBlb2YsIGlzLCBpbnN0YW5jZW9mIG9wZXJhdG9yXG5cbnByaW50IHR5cGVvZiBQZXJzb247XG5wcmludCB0eXBlb2Ygc3R1ZGVudDtcbnByaW50ICdTdHVkZW50IGlzIENsYXNzOiAnICsgKFN0dWRlbnQgaXMgQ2xhc3MpO1xucHJpbnQgJ3N0dWRlbnQgaXMgT2JqZWN0OiAnICsgKHN0dWRlbnQgaXMgT2JqZWN0KTtcbnByaW50ICdzdHVkZW50IGlzIFBlcnNvbjogJyArIChzdHVkZW50IGlzIFBlcnNvbik7XG5wcmludCAnc3R1ZGVudCBpcyBTdHVkZW50OiAnICsgKHN0dWRlbnQgaXMgU3R1ZGVudCk7XG5wcmludCAnc3R1ZGVudCBpbnN0YW5jZW9mIFBlcnNvbjogJyArIChzdHVkZW50IGluc3RhbmNlb2YgUGVyc29uKTtcblxucHJpbnQgdHlwZW9mICcnICsgJ3N0cmluZyc7XG5cbmA7XG4iLCJpbXBvcnQgKiBhcyBFeHByIGZyb20gJy4vdHlwZXMvZXhwcmVzc2lvbic7XG5pbXBvcnQgKiBhcyBTdG10IGZyb20gJy4vdHlwZXMvc3RhdGVtZW50JztcbmltcG9ydCB7IENvbnNvbGUgfSBmcm9tICcuL2NvbnNvbGUnO1xuaW1wb3J0IHsgU2NvcGUgfSBmcm9tICcuL3Njb3BlJztcbmltcG9ydCB7IFRva2VuVHlwZSwgVG9rZW4gfSBmcm9tICcuL3Rva2VuJztcbmltcG9ydCB7IFJ1bnRpbWUgfSBmcm9tICcuL3J1bnRpbWUnO1xuaW1wb3J0IHsgJEFueSB9IGZyb20gJy4vdHlwZXMvYW55JztcbmltcG9ydCB7ICRCb29sZWFuIH0gZnJvbSAnLi90eXBlcy9ib29sZWFuJztcbmltcG9ydCB7ICRDbGFzcyB9IGZyb20gJy4vdHlwZXMvY2xhc3MnO1xuaW1wb3J0IHsgJERpY3Rpb25hcnkgfSBmcm9tICcuL3R5cGVzL2RpY3Rpb25hcnknO1xuaW1wb3J0IHsgJEZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlcy9mdW5jdGlvbic7XG5pbXBvcnQgeyAkTGlzdCB9IGZyb20gJy4vdHlwZXMvbGlzdCc7XG5pbXBvcnQgeyAkTnVsbCB9IGZyb20gJy4vdHlwZXMvbnVsbCc7XG5pbXBvcnQgeyAkTnVtYmVyIH0gZnJvbSAnLi90eXBlcy9udW1iZXInO1xuaW1wb3J0IHsgJE9iamVjdCB9IGZyb20gJy4vdHlwZXMvb2JqZWN0JztcbmltcG9ydCB7ICRSYW5nZSwgUmFuZ2VWYWx1ZSB9IGZyb20gJy4vdHlwZXMvcmFuZ2UnO1xuaW1wb3J0IHsgJFN0cmluZyB9IGZyb20gJy4vdHlwZXMvc3RyaW5nJztcbmltcG9ydCB7ICRWb2lkIH0gZnJvbSAnLi90eXBlcy92b2lkJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi90eXBlcy90eXBlLmVudW0nO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgU2Nhbm5lciB9IGZyb20gJy4vc2Nhbm5lcic7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICcuL3BhcnNlcic7XG5kZWNsYXJlIHZhciBjb256b2xlOiBDb25zb2xlO1xuXG5leHBvcnQgY2xhc3MgSW50ZXJwcmV0ZXIgaW1wbGVtZW50c1xuICAgIEV4cHIuRXhwclZpc2l0b3I8JEFueT4sXG4gICAgU3RtdC5TdG10VmlzaXRvcjwkQW55PiB7XG4gICAgcHVibGljIGdsb2JhbCA9IG5ldyBTY29wZSgpO1xuICAgIHB1YmxpYyBzY29wZSA9IHRoaXMuZ2xvYmFsO1xuICAgIHB1YmxpYyBlcnJvcnM6IHN0cmluZ1tdID0gW107XG4gICAgcHJpdmF0ZSBzY2FubmVyID0gbmV3IFNjYW5uZXIoKTtcbiAgICBwcml2YXRlIHBhcnNlciA9IG5ldyBQYXJzZXIoKTtcblxuICAgIGNvbnN0cnVjdG9yKCApIHtcbiAgICAgICAgdGhpcy5nbG9iYWwuc2V0KCdtYXRoJywgbmV3ICREaWN0aW9uYXJ5KFJ1bnRpbWUuTWF0aCkpO1xuICAgICAgICB0aGlzLmdsb2JhbC5zZXQoJ2NvbnNvbGUnLCBuZXcgJERpY3Rpb25hcnkoUnVudGltZS5Db25zb2xlKSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsLnNldCgncmUnLCBSdW50aW1lLlV0aWxzLmdldCgncmUnKSk7XG4gICAgICAgIHRoaXMucGFyc2VyLmVycm9yTGV2ZWwgPSAwO1xuICAgIH1cblxuICAgIHByaXZhdGUgZXZhbHVhdGUoZXhwcjogRXhwci5FeHByKTogJEFueSB7XG4gICAgICAgIHJldHVybiBleHByLnJlc3VsdCA9IGV4cHIuYWNjZXB0KHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZXhlY3V0ZShzdG10OiBTdG10LlN0bXQpOiAkQW55IHtcbiAgICAgICAgcmV0dXJuIHN0bXQucmVzdWx0ID0gc3RtdC5hY2NlcHQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGV2YWwoc3RtdDogU3RtdC5TdG10KTogYW55IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiAge1xuICAgICAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogc3RtdC5hY2NlcHQodGhpcykudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGUubWVzc2FnZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBpbnRlcnBldChzdGF0ZW1lbnRzOiBTdG10LlN0bXRbXSk6IFN0bXQuU3RtdFtdIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBzdGF0ZW1lbnQgb2Ygc3RhdGVtZW50cykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGUoc3RhdGVtZW50KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb256b2xlLmVycm9yKGUubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaChlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVycm9ycy5sZW5ndGggPiAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCgnUnVudGltZSBFcnJvciBsaW1pdCBleGNlZWRlZCcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGVtZW50cztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0YXRlbWVudHM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlcnJvcihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSdW50aW1lIEVycm9yID0+ICR7bWVzc2FnZX1gKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRFeHByZXNzaW9uU3RtdChzdG10OiBTdG10LkV4cHJlc3Npb24pOiAkQW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGUoc3RtdC5leHByZXNzaW9uKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRQcmludFN0bXQoc3RtdDogU3RtdC5QcmludCk6ICRBbnkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5ldmFsdWF0ZShzdG10LmV4cHJlc3Npb24pO1xuICAgICAgICBjb256b2xlLmxvZyhkYXRhLnRvU3RyaW5nKCkpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRWYXJTdG10KHN0bXQ6IFN0bXQuVmFyKTogJEFueSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IG5ldyAkTnVsbCgpO1xuICAgICAgICBpZiAoc3RtdC5pbml0aWFsaXplciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmV2YWx1YXRlKHN0bXQuaW5pdGlhbGl6ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZS5pc0xhbWJkYSgpKSB7XG4gICAgICAgICAgICAodmFsdWUgYXMgYW55KS5uYW1lID0gc3RtdC5uYW1lLmxleGVtZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjb3BlLmRlZmluZShzdG10Lm5hbWUubGV4ZW1lLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRWYXJpYWJsZUV4cHIoZXhwcjogRXhwci5WYXJpYWJsZSk6ICRBbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5nZXQoZXhwci5uYW1lLmxleGVtZSwgZXhwci5uYW1lKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRQb3N0Zml4RXhwcihleHByOiBFeHByLlBvc3RmaXgpOiAkQW55IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNjb3BlLmdldChleHByLm5hbWUubGV4ZW1lLCBleHByLm5hbWUpO1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IG5ldyAkTnVtYmVyKHZhbHVlLnZhbHVlICsgZXhwci5pbmNyZW1lbnQpO1xuICAgICAgICB0aGlzLnNjb3BlLmFzc2lnbihleHByLm5hbWUubGV4ZW1lLCBuZXdWYWx1ZSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRMaXN0RXhwcihleHByOiBFeHByLkxpc3QpOiAkQW55IHtcbiAgICAgICAgY29uc3QgdmFsdWVzOiAkQW55W10gPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBleHByZXNzaW9uIG9mIGV4cHIudmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKHRoaXMuZXZhbHVhdGUoZXhwcmVzc2lvbikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgJExpc3QodmFsdWVzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRadHJpbmdFeHByKGV4cHI6IEV4cHIuWnRyaW5nKTogJEFueSB7XG4gICAgICAgIHJldHVybiBuZXcgJFN0cmluZyhleHByLnZhbHVlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRlbXBsYXRlUGFyc2Uoc291cmNlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCB0b2tlbnMgPSB0aGlzLnNjYW5uZXIuc2Nhbihzb3VyY2UpO1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnRzID0gdGhpcy5wYXJzZXIucGFyc2UodG9rZW5zKTtcbiAgICAgICAgaWYgKHRoaXMucGFyc2VyLmVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoYFRlbXBsYXRlIHN0cmluZyAgZXJyb3I6ICR7dGhpcy5wYXJzZXIuZXJyb3JzWzBdfWApO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgZm9yIChjb25zdCBzdGF0ZW1lbnQgb2Ygc3RhdGVtZW50cykge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHRoaXMuZXhlY3V0ZShzdGF0ZW1lbnQpLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRUZW1wbGF0ZUV4cHIoZXhwcjogRXhwci5UZW1wbGF0ZSk6ICRBbnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBleHByLnZhbHVlLnJlcGxhY2UoL1xcJFxce1xceyhbXFxzXFxTXSs/KVxcfVxcfS9nLCAobSwgcGxhY2Vob2xkZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChwbGFjZWhvbGRlcltwbGFjZWhvbGRlci5sZW5ndGhdICE9PSAnOycpIHtcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciArPSAnOyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZVBhcnNlKHBsYWNlaG9sZGVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXcgJFN0cmluZyhyZXN1bHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyB2aXNpdFJlZ0V4RXhwcihleHByOiBFeHByLlJlZ0V4KTogJEFueSB7XG4gICAgICAgIC8qXG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhFbnRpdHkoZXhwci52YWx1ZSk7XG4gICAgICAgICovIHJldHVybiBuZXcgJE51bGwoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRBc3NpZ25FeHByKGV4cHI6IEV4cHIuQXNzaWduKTogJEFueSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5ldmFsdWF0ZShleHByLnZhbHVlKTtcbiAgICAgICAgdGhpcy5zY29wZS5hc3NpZ24oZXhwci5uYW1lLmxleGVtZSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHZpc2l0QmluYXJ5RXhwcihleHByOiBFeHByLkJpbmFyeSk6ICRBbnkge1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5ldmFsdWF0ZShleHByLmxlZnQpO1xuICAgICAgICBjb25zdCByaWdodCA9IHRoaXMuZXZhbHVhdGUoZXhwci5yaWdodCk7XG4gICAgICAgIHN3aXRjaCAoZXhwci5vcGVyYXRvci50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5NaW51czpcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLk1pbnVzRXF1YWw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVtYmVyKGxlZnQudmFsdWUgLSByaWdodC52YWx1ZSk7XG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5TbGFzaDpcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlNsYXNoRXF1YWw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVtYmVyKGxlZnQudmFsdWUgLyByaWdodC52YWx1ZSk7XG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5TdGFyOlxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuU3RhckVxdWFsOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJE51bWJlcihsZWZ0LnZhbHVlICogcmlnaHQudmFsdWUpO1xuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuUGVyY2VudDpcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlBlcmNlbnRFcXVhbDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICROdW1iZXIobGVmdC52YWx1ZSAlIHJpZ2h0LnZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlBsdXM6XG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5QbHVzRXF1YWw6XG4gICAgICAgICAgICAgICAgaWYgKGxlZnQuaXNOdW1iZXIoKSAmJiByaWdodC5pc051bWJlcigpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJE51bWJlcihsZWZ0LnZhbHVlICsgcmlnaHQudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobGVmdC5pc1N0cmluZygpICYmIHJpZ2h0LmlzU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkU3RyaW5nKGxlZnQudmFsdWUgKyByaWdodC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsZWZ0LmlzTGlzdCgpICYmIHJpZ2h0LmlzTGlzdCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJExpc3QobGVmdC52YWx1ZS5jb25jYXQocmlnaHQudmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxlZnQuaXNEaWN0aW9uYXJ5KCkgJiYgcmlnaHQuaXNEaWN0aW9uYXJ5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkRGljdGlvbmFyeShuZXcgTWFwKFsuLi5sZWZ0LnZhbHVlLCAuLi5yaWdodC52YWx1ZV0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkU3RyaW5nKGxlZnQudG9TdHJpbmcoKSArIHJpZ2h0LnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuUGlwZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICROdW1iZXIobGVmdC52YWx1ZSB8IHJpZ2h0LnZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkNhcmV0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJE51bWJlcihsZWZ0LnZhbHVlIF4gcmlnaHQudmFsdWUpO1xuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuR3JlYXRlcjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKGxlZnQudmFsdWUgPiByaWdodC52YWx1ZSk7XG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5HcmVhdGVyRXF1YWw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbihsZWZ0LnZhbHVlID49IHJpZ2h0LnZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkxlc3M6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbihsZWZ0LnZhbHVlIDwgcmlnaHQudmFsdWUpO1xuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuTGVzc0VxdWFsOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4obGVmdC52YWx1ZSA8PSByaWdodC52YWx1ZSk7XG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5FcXVhbEVxdWFsOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4obGVmdC52YWx1ZSA9PT0gcmlnaHQudmFsdWUpO1xuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuQmFuZ0VxdWFsOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4obGVmdC52YWx1ZSAhPT0gcmlnaHQudmFsdWUpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKCdVbmtub3duIGJpbmFyeSBvcGVyYXRvciAnICsgZXhwci5vcGVyYXRvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpOyAvLyB1bnJlYWNoYWJsZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHZpc2l0TG9naWNhbEV4cHIoZXhwcjogRXhwci5Mb2dpY2FsKTogJEFueSB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLmV2YWx1YXRlKGV4cHIubGVmdCk7XG5cbiAgICAgICAgaWYgKGV4cHIub3BlcmF0b3IudHlwZSA9PT0gVG9rZW5UeXBlLk9yKSB7XG4gICAgICAgICAgICBpZiAobGVmdC5pc1RydXRoeSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWxlZnQuaXNUcnV0aHkoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGUoZXhwci5yaWdodCk7XG4gICAgfVxuXG4gICAgcHVibGljIHZpc2l0VGVybmFyeUV4cHIoZXhwcjogRXhwci5UZXJuYXJ5KTogJEFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlKGV4cHIuY29uZGl0aW9uKS5pc1RydXRoeSgpID8gdGhpcy5ldmFsdWF0ZShleHByLnRoZW5FeHByKSA6IHRoaXMuZXZhbHVhdGUoZXhwci5lbHNlRXhwcik7XG4gICAgfVxuXG4gICAgcHVibGljIHZpc2l0TnVsbENvYWxlc2NpbmdFeHByKGV4cHI6IEV4cHIuTnVsbENvYWxlc2NpbmcpOiAkQW55IHtcbiAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMuZXZhbHVhdGUoZXhwci5sZWZ0KTtcbiAgICAgICAgaWYgKGxlZnQuaXNOdWxsKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlKGV4cHIucmlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH1cblxuICAgIHB1YmxpYyB2aXNpdEdyb3VwaW5nRXhwcihleHByOiBFeHByLkdyb3VwaW5nKTogJEFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlKGV4cHIuZXhwcmVzc2lvbik7XG4gICAgfVxuXG4gICAgcHVibGljIHZpc2l0TGl0ZXJhbEV4cHIoZXhwcjogRXhwci5MaXRlcmFsKTogJEFueSB7XG4gICAgICAgIHJldHVybiBleHByLnZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyB2aXNpdFVuYXJ5RXhwcihleHByOiBFeHByLlVuYXJ5KTogJEFueSB7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5ldmFsdWF0ZShleHByLnJpZ2h0KTtcbiAgICAgICAgc3dpdGNoIChleHByLm9wZXJhdG9yLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLk1pbnVzOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJE51bWJlcigtTnVtYmVyKHJpZ2h0LnZhbHVlKSk7XG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5CYW5nOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4oIXJpZ2h0LmlzVHJ1dGh5KCkpO1xuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuUGx1c1BsdXM6XG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5NaW51c01pbnVzOlxuICAgICAgICAgICAgICAgIGlmICghcmlnaHQuaXNOdW1iZXIoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGBJbnZhbGlkIHJpZ2h0LWhhbmQgc2lkZSBleHByZXNzaW9uIGluIHByZWZpeCBvcGVyYXRpb246ICBcIiR7RGF0YVR5cGVbcmlnaHQudHlwZV19ICR7cmlnaHR9IGlzIG5vdCBhIG51bWJlcmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IE51bWJlcihyaWdodC52YWx1ZSkgKyAoZXhwci5vcGVyYXRvci50eXBlID09PSBUb2tlblR5cGUuUGx1c1BsdXMgPyAxIDogLTEpO1xuICAgICAgICAgICAgICAgIGlmIChleHByLnJpZ2h0IGluc3RhbmNlb2YgRXhwci5WYXJpYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3BlLmFzc2lnbihleHByLnJpZ2h0Lm5hbWUubGV4ZW1lLCBuZXcgJE51bWJlcihuZXdWYWx1ZSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXhwci5yaWdodCBpbnN0YW5jZW9mIEV4cHIuR2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzc2luZyA9IG5ldyBFeHByLlNldChleHByLnJpZ2h0LmVudGl0eSwgZXhwci5yaWdodC5rZXksIG5ldyBFeHByLkxpdGVyYWwobmV3ICROdW1iZXIobmV3VmFsdWUpLCBleHByLmxpbmUpLCBleHByLmxpbmUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2YWx1YXRlKGFzc2luZyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihgSW52YWxpZCByaWdodC1oYW5kIHNpZGUgZXhwcmVzc2lvbiBpbiBwcmVmaXggb3BlcmF0aW9uOiAgJHtleHByLnJpZ2h0fWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICROdW1iZXIobmV3VmFsdWUpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGBVbmtub3duIHVuYXJ5IG9wZXJhdG9yICcgKyBleHByLm9wZXJhdG9yYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpOyAvLyBzaG91bGQgYmUgdW5yZWFjaGFibGVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBleGVjdXRlQmxvY2soc3RhdGVtZW50czogU3RtdC5TdG10W10sIG5leHRTY29wZTogU2NvcGUpOiAkQW55IHtcbiAgICAgICAgY29uc3QgY3VycmVudFNjb3BlID0gdGhpcy5zY29wZTtcbiAgICAgICAgdGhpcy5zY29wZSA9IG5leHRTY29wZTtcbiAgICAgICAgZm9yIChjb25zdCBzdGF0ZW1lbnQgb2Ygc3RhdGVtZW50cykge1xuICAgICAgICAgICAgc3RhdGVtZW50LnJlc3VsdCA9IHRoaXMuZXhlY3V0ZShzdGF0ZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NvcGUgPSBjdXJyZW50U2NvcGU7XG4gICAgICAgIHJldHVybiBuZXcgJFZvaWQoJ2Jsb2NrJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHZpc2l0QmxvY2tTdG10KHN0bXQ6IFN0bXQuQmxvY2spOiAkQW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZUJsb2NrKHN0bXQuc3RhdGVtZW50cywgbmV3IFNjb3BlKHRoaXMuc2NvcGUpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRJZlN0bXQoc3RtdDogU3RtdC5JZik6ICRBbnkge1xuICAgICAgICBpZiAodGhpcy5ldmFsdWF0ZShzdG10LmNvbmRpdGlvbikuaXNUcnV0aHkoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShzdG10LnRoZW5TdG10KTtcbiAgICAgICAgfSBlbHNlIGlmIChzdG10LmVsc2VTdG10ICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlKHN0bXQuZWxzZVN0bXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHZpc2l0V2hpbGVTdG10KHN0bXQ6IFN0bXQuV2hpbGUpOiAkQW55IHtcbiAgICAgICAgd2hpbGUgKHRoaXMuZXZhbHVhdGUoc3RtdC5jb25kaXRpb24pLmlzVHJ1dGh5KCkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlKHN0bXQubG9vcCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiAkQW55ICYmIGUudHlwZSA9PT0gRGF0YVR5cGUuQnJlYWspIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlIGluc3RhbmNlb2YgJEFueSAmJiBlLnR5cGUgPT09IERhdGFUeXBlLkNvbnRpbnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgJFZvaWQoJ3doaWxlJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHZpc2l0RG9XaGlsZVN0bXQoc3RtdDogU3RtdC5Eb1doaWxlKTogJEFueSB7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlKHN0bXQubG9vcCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiAkQW55ICYmIGUudHlwZSA9PT0gRGF0YVR5cGUuQnJlYWspIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlIGluc3RhbmNlb2YgJEFueSAmJiBlLnR5cGUgPT09IERhdGFUeXBlLkNvbnRpbnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlICh0aGlzLmV2YWx1YXRlKHN0bXQuY29uZGl0aW9uKS5pc1RydXRoeSgpKTtcbiAgICAgICAgcmV0dXJuIG5ldyAkVm9pZCgnZG93aGlsZScpO1xuICAgIH1cblxuICAgIHB1YmxpYyB2aXNpdENhbGxFeHByKGV4cHI6IEV4cHIuQ2FsbCk6ICRBbnkge1xuICAgICAgICAvLyB2ZXJpZnkgY2FsbGVlIGlzIGEgZnVuY3Rpb25cbiAgICAgICAgY29uc3QgY2FsbGVlID0gdGhpcy5ldmFsdWF0ZShleHByLmNhbGxlZSk7XG4gICAgICAgIGlmICghY2FsbGVlLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihgJHtjYWxsZWV9IGlzIG5vdCBhIGZ1bmN0aW9uYCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZXQgdGhpcyBpbiBmdW5jdGlvbiBzY29wZVxuICAgICAgICBsZXQgdGhpejogYW55ID0gbnVsbDtcbiAgICAgICAgaWYgKGV4cHIuY2FsbGVlIGluc3RhbmNlb2YgRXhwci5HZXQpIHtcbiAgICAgICAgICAgIGlmIChleHByLmNhbGxlZS5lbnRpdHkgaW5zdGFuY2VvZiBFeHByLkJhc2UpIHtcbiAgICAgICAgICAgICAgICB0aGl6ID0gdGhpcy5zY29wZS5nZXQoJ3RoaXMnLCBleHByLnBhcmVuKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpeiA9IHRoaXMuZXZhbHVhdGUoZXhwci5jYWxsZWUuZW50aXR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChleHByLnRoaXogIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXogPSBleHByLnRoaXo7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBldmFsdWF0ZSBmdW5jdGlvbiBhcmd1bWVudHNcbiAgICAgICAgY29uc3QgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGFyZ3VtZW50IG9mIGV4cHIuYXJncykge1xuICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZXZhbHVhdGUoYXJndW1lbnQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhc3MgYXJndW1lbnRzIHRvIGZ1bmN0aW9uXG4gICAgICAgIGNvbnN0IGZ1bmMgPSBjYWxsZWUgYXMgJEZ1bmN0aW9uO1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggIT09IGZ1bmMuYXJpdHkgJiYgZnVuYy5hcml0eSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnpvbGUud2FybihgV2FybmluZyBhdCAoJHtleHByLnBhcmVuLmxpbmV9KTogJHtjYWxsZWV9IG1pc21hdGNoZWQgYXJndW1lbnQgY291bnQ7IFxcbiBFeHBlY3RlZCAke2Z1bmMuYXJpdHl9IGJ1dCBnb3QgJHthcmdzLmxlbmd0aH0gYCk7XG4gICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPCBmdW5jLmFyaXR5KSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGFyZ3MubGVuZ3RoOyBpIDw9IGZ1bmMuYXJpdHk7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBhcmdzLnB1c2gobmV3ICROdWxsKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBleGVjdXRlIGZ1bmN0aW9uXG4gICAgICAgIHJldHVybiBmdW5jLmNhbGwodGhpeiwgYXJncywgdGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHZpc2l0QmFzZUV4cHIoZXhwcjogRXhwci5CYXNlKTogJEFueSB7XG4gICAgICAgIGNvbnN0IHRoaXogPSB0aGlzLnNjb3BlLmdldChleHByLnBhcmVuLmxleGVtZSwgZXhwci5wYXJlbik7XG5cbiAgICAgICAgaWYgKCF0aGl6LmlzT2JqZWN0KCkpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJiYXNlIGV4cHJlc3Npb24gY2FuIGJlIHVzZWQgb25seSBpbnNpZGUgbWV0aG9kc1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNsYXp6OiAkQ2xhc3MgPSAodGhpeiBhcyAkT2JqZWN0KS5jb256dHJ1Y3RvciBhcyAkQ2xhc3M7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGNsYXp6LnBhcmVudDtcbiAgICAgICAgaWYgKHBhcmVudC5pc051bGwoKSkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihcIkNsYXNzIFwiICsgY2xhenogKyBcIiBoYXMgbm90IGJlZW4gZXh0ZW5kZWQgYW5kIGhhcyBubyBiYXNlXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXROZXdFeHByKGV4cHI6IEV4cHIuTmV3KTogJEFueSB7XG4gICAgICAgIGNvbnN0IG5ld0NhbGwgPSAoZXhwci5jbGF6eiBhcyBFeHByLkNhbGwpO1xuICAgICAgICAvLyBpbnRlcm5hbCBjbGFzcyBkZWZpbml0aW9uIGluc3RhbmNlXG4gICAgICAgIGNvbnN0IGNsYXp6OiAkQ2xhc3MgPSB0aGlzLmV2YWx1YXRlKG5ld0NhbGwuY2FsbGVlKSBhcyAkQ2xhc3M7XG5cbiAgICAgICAgaWYgKCFjbGF6ei5pc0NsYXNzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoYCcke2NsYXp6fScgaXMgbm90IGEgY2xhc3MuICduZXcnIHN0YXRlbWVudCBtdXN0IGJlIHVzZWQgd2l0aCBjbGFzc2VzLmApO1xuICAgICAgICB9XG4gICAgICAgIC8vIG5ldyBvYmplY3RcbiAgICAgICAgY29uc3QgZW50aXR5ID0gbmV3ICRPYmplY3QobmV3IE1hcCgpLCBjbGF6eik7XG4gICAgICAgIC8vIGNvbnN0cnVjdG9yIG1ldGhvZCBvZiB0aGUgY2xhc3NcbiAgICAgICAgY29uc3QgY29uenRydWN0b3IgPSBjbGF6ei5nZXQobmV3ICRTdHJpbmcoJ2NvbnN0cnVjdG9yJykpIGFzICRGdW5jdGlvbjtcbiAgICAgICAgaWYgKGNvbnp0cnVjdG9yLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgIGNvbnN0IGFyZ3M6ICRBbnlbXSA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBhcmcgb2YgbmV3Q2FsbC5hcmdzKSB7XG4gICAgICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZXZhbHVhdGUoYXJnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb256dHJ1Y3Rvci5jYWxsKHRoaXMsIGVudGl0eSwgYXJncyk7XG4gICAgICAgICAgICAqL1xuICAgICAgICAgICB0aGlzLmV2YWx1YXRlKFxuICAgICAgICAgICAgICAgbmV3IEV4cHIuQ2FsbChcbiAgICAgICAgICAgICAgICAgICBuZXcgRXhwci5HZXQobmV3IEV4cHIuTGl0ZXJhbChlbnRpdHksIGV4cHIubGluZSksIG5ldyBFeHByLktleShjb256dHJ1Y3Rvci5kZWNsYXJhdGlvbi5uYW1lLCBleHByLmxpbmUpLCBUb2tlblR5cGUuRG90LCBleHByLmxpbmUpLFxuICAgICAgICAgICAgICAgICAgIGNvbnp0cnVjdG9yLmRlY2xhcmF0aW9uLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgbmV3Q2FsbC5hcmdzLFxuICAgICAgICAgICAgICAgICAgIGVudGl0eSxcbiAgICAgICAgICAgICAgICAgICBleHByLmxpbmVcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnRpdHk7XG4gICAgfVxuXG4gICAgcHVibGljIHZpc2l0RGljdGlvbmFyeUV4cHIoZXhwcjogRXhwci5EaWN0aW9uYXJ5KTogJEFueSB7XG4gICAgICAgIGNvbnN0IGRpY3QgPSBuZXcgJERpY3Rpb25hcnkobmV3IE1hcCgpKTtcbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiBleHByLnByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSAgPSB0aGlzLmV2YWx1YXRlKChwcm9wZXJ0eSBhcyBFeHByLlNldCkua2V5KTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5ldmFsdWF0ZSgocHJvcGVydHkgYXMgRXhwci5TZXQpLnZhbHVlKTtcbiAgICAgICAgICAgIGRpY3Quc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaWN0O1xuICAgIH1cblxuICAgIHB1YmxpYyB2aXNpdEtleUV4cHIoZXhwcjogRXhwci5LZXkpOiAkQW55IHtcbiAgICAgICAgcmV0dXJuIG5ldyAkQW55KGV4cHIubmFtZS5saXRlcmFsKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRHZXRFeHByKGV4cHI6IEV4cHIuR2V0KTogJEFueSB7XG4gICAgICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuZXZhbHVhdGUoZXhwci5lbnRpdHkpO1xuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmV2YWx1YXRlKGV4cHIua2V5KTtcbiAgICAgICAgaWYgKGVudGl0eS5pc051bGwoKSAmJiBleHByLnR5cGUgPT09IFRva2VuVHlwZS5RdWVzdGlvbkRvdCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnRpdHkuZ2V0KGtleSk7XG4gICAgfVxuXG4gICAgcHVibGljIHZpc2l0U2V0RXhwcihleHByOiBFeHByLlNldCk6ICRBbnkge1xuICAgICAgICBjb25zdCBlbnRpdHkgPSB0aGlzLmV2YWx1YXRlKGV4cHIuZW50aXR5KTtcbiAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5ldmFsdWF0ZShleHByLmtleSk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5ldmFsdWF0ZShleHByLnZhbHVlKTtcbiAgICAgICAgZW50aXR5LnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyB2aXNpdEZ1bmNTdG10KHN0bXQ6IFN0bXQuRnVuYyk6ICRBbnkge1xuICAgICAgICBjb25zdCBmdW5jID0gbmV3ICRGdW5jdGlvbihzdG10LCB0aGlzLnNjb3BlKTtcbiAgICAgICAgdGhpcy5zY29wZS5kZWZpbmUoc3RtdC5uYW1lLmxleGVtZSwgZnVuYyk7XG4gICAgICAgIHJldHVybiBmdW5jO1xuICAgIH1cblxuICAgIHB1YmxpYyB2aXNpdENsYXNzU3RtdChzdG10OiBTdG10LkNsYXNzKTogJEFueSB7XG4gICAgICAgIGxldCBwYXJlbnQ6ICRBbnk7XG5cbiAgICAgICAgaWYgKHN0bXQucGFyZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICBwYXJlbnQgPSBuZXcgJE51bGwoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmVudCA9IHRoaXMuc2NvcGUuZ2V0KHN0bXQucGFyZW50LmxleGVtZSwgc3RtdC5wYXJlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWV0aG9kcyA9IG5ldyBNYXA8YW55LCAkQW55PigpO1xuXG4gICAgICAgIGZvciAoY29uc3QgbWV0aG9kIG9mIHN0bXQubWV0aG9kcykge1xuICAgICAgICAgICAgbWV0aG9kcy5zZXQobWV0aG9kLm5hbWUubGV4ZW1lLCBuZXcgJEZ1bmN0aW9uKG1ldGhvZCwgdGhpcy5zY29wZSkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXp6ID0gbmV3ICRDbGFzcyhzdG10Lm5hbWUubGV4ZW1lLCBtZXRob2RzLCBwYXJlbnQpO1xuICAgICAgICB0aGlzLnNjb3BlLmRlZmluZShzdG10Lm5hbWUubGV4ZW1lLCBjbGF6eik7XG4gICAgICAgIHJldHVybiBjbGF6ejtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRMYW1iZGFFeHByKGV4cHI6IEV4cHIuTGFtYmRhKTogJEFueSB7XG4gICAgICAgIGNvbnN0IGxhbWJkYTogU3RtdC5GdW5jID0gZXhwci5sYW1iZGEgYXMgU3RtdC5GdW5jO1xuICAgICAgICBjb25zdCBmdW5jOiAkRnVuY3Rpb24gPSBuZXcgJEZ1bmN0aW9uKGxhbWJkYSwgdGhpcy5zY29wZSk7XG4gICAgICAgIHJldHVybiBmdW5jO1xuICAgIH1cblxuICAgIHB1YmxpYyB2aXNpdFJldHVyblN0bXQoc3RtdDogU3RtdC5SZXR1cm4pOiAkQW55IHtcbiAgICAgICAgbGV0IHZhbHVlID0gbmV3ICROdWxsKCk7XG4gICAgICAgIGlmIChzdG10LnZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZXZhbHVhdGUoc3RtdC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3ICRBbnkodmFsdWUsIERhdGFUeXBlLlJldHVybik7XG4gICAgfVxuXG4gICAgcHVibGljIHZpc2l0QnJlYWtTdG10KHN0bXQ6IFN0bXQuQnJlYWspOiAkQW55IHtcbiAgICAgICAgdGhyb3cgbmV3ICRBbnkobnVsbCwgRGF0YVR5cGUuQnJlYWspO1xuICAgIH1cblxuICAgIHB1YmxpYyB2aXNpdENvbnRpbnVlU3RtdChzdG10OiBTdG10LkNvbnRpbnVlKTogJEFueSB7XG4gICAgICAgIHRocm93IG5ldyAkQW55KG51bGwsIERhdGFUeXBlLkNvbnRpbnVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRSYW5nZUV4cHIoZXhwcjogRXhwci5SYW5nZSk6ICRBbnkge1xuICAgICAgICByZXR1cm4gbmV3ICRSYW5nZShuZXcgUmFuZ2VWYWx1ZShcbiAgICAgICAgICAgIGV4cHIuc3RhcnQgPyB0aGlzLmV2YWx1YXRlKGV4cHIuc3RhcnQpLnZhbHVlIDogbnVsbCxcbiAgICAgICAgICAgIGV4cHIuZW5kID8gdGhpcy5ldmFsdWF0ZShleHByLmVuZCkudmFsdWUgOiBudWxsLFxuICAgICAgICAgICAgZXhwci5zdGVwID8gdGhpcy5ldmFsdWF0ZShleHByLnN0ZXApLnZhbHVlIDogbnVsbFxuICAgICAgICApKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRUeXBlb2ZFeHByKGV4cHI6IEV4cHIuVHlwZW9mKTogJEFueSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5ldmFsdWF0ZShleHByLnZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyAkU3RyaW5nKERhdGFUeXBlW3ZhbHVlLnR5cGVdLnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyB2aXNpdElzRXhwcihleHByOiBFeHByLkluc3RhbmNlT2YpOiAkQW55IHtcbiAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMuZXZhbHVhdGUoZXhwci5sZWZ0KTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSBEYXRhVHlwZVtjYXBpdGFsaXplKGV4cHIucmlnaHQubGV4ZW1lKV07XG4gICAgICAgIC8vIGlzIGRpcmVjdCBpbnN0YW5jZSBvZiBjbGFzc1xuICAgICAgICBpZiAobGVmdC5pc09iamVjdCgpICYmIChsZWZ0IGFzICRPYmplY3QpLm5hbWUgPT09IGV4cHIucmlnaHQubGV4ZW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlzIG5vdCBhIHR5cGVcbiAgICAgICAgaWYgKHR5cGVvZiByaWdodCA9PT0gJ3VuZGVmaW5lZCcgfHwgaXNOYU4ocmlnaHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpcyBhIHR5cGVcbiAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbihsZWZ0LnR5cGUgPT09IHJpZ2h0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRJbnN0YW5jZU9mRXhwcihleHByOiBFeHByLkluc3RhbmNlT2YpOiAkQW55IHtcbiAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMuZXZhbHVhdGUoZXhwci5sZWZ0KTtcbiAgICAgICAgaWYgKCFsZWZ0LmlzT2JqZWN0KCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4oZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGV4cHIucmlnaHQubGV4ZW1lO1xuXG4gICAgICAgIC8vIEFsbCBpbnN0YW5jZXMgZGVyaXZlIGZyb20gT2JqZWN0XG4gICAgICAgIGlmIChjbGFzc05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4odHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBsZWZ0IGFzICRPYmplY3Q7XG4gICAgICAgIGxldCBjb256dHJ1Y3RvciA9IGluc3RhbmNlLmNvbnp0cnVjdG9yIGFzICRDbGFzcztcbiAgICAgICAgaWYgKGNvbnp0cnVjdG9yLm5hbWUgPT09IGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbih0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoIWNvbnp0cnVjdG9yLnBhcmVudC5pc051bGwoKSkge1xuICAgICAgICAgICAgY29uenRydWN0b3IgPSBjb256dHJ1Y3Rvci5wYXJlbnQgYXMgJENsYXNzO1xuICAgICAgICAgICAgaWYgKGNvbnp0cnVjdG9yLm5hbWUgPT09IGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4odHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbihmYWxzZSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRWb2lkRXhwcihleHByOiBFeHByLlZvaWQpOiAkQW55IHtcbiAgICAgICAgdGhpcy5ldmFsdWF0ZShleHByLnZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB2aXNpdEluRXhwcihleHByOiBFeHByLkluKTogJEFueSB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuZXZhbHVhdGUoZXhwci5rZXkpO1xuICAgICAgICBjb25zdCBlbnRpdHkgPSB0aGlzLmV2YWx1YXRlKGV4cHIuZW50aXR5KTtcbiAgICAgICAgaWYgKGVudGl0eS5pc0tleVZhbHVlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4oZW50aXR5LnZhbHVlLmhhcyhrZXkudmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW50aXR5LmlzTGlzdCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKHR5cGVvZiBlbnRpdHkudmFsdWVba2V5LnZhbHVlXSAhPT0gJ3VuZGVmaW5lZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbnRpdHkuaXNTdHJpbmcoKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbihlbnRpdHkudmFsdWUuaW5jbHVkZXMoa2V5LnZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lcnJvcihgT3BlcmF0b3IgXCJpblwiIGNhbid0IGJlIHVzZWQgb24gdHlwZSAke0RhdGFUeXBlW2VudGl0eS50eXBlXX0gd2l0aCB2YWx1ZSBcIiR7ZW50aXR5fVwiYCk7XG4gICAgICAgIHJldHVybiBuZXcgJE51bGwoKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCAqIGFzIEV4cHIgZnJvbSAnLi90eXBlcy9leHByZXNzaW9uJztcbmltcG9ydCAqIGFzIFN0bXQgZnJvbSAnLi90eXBlcy9zdGF0ZW1lbnQnO1xuaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gJy4vY29uc29sZSc7XG5pbXBvcnQgeyBUb2tlbiwgVG9rZW5UeXBlIH0gZnJvbSAnLi90b2tlbic7XG5pbXBvcnQgeyAkQm9vbGVhbiB9IGZyb20gJy4vdHlwZXMvYm9vbGVhbic7XG5pbXBvcnQgeyAkTnVsbCB9IGZyb20gJy4vdHlwZXMvbnVsbCc7XG5pbXBvcnQgeyAkTnVtYmVyIH0gZnJvbSAnLi90eXBlcy9udW1iZXInO1xuaW1wb3J0IHsgJEVycm9yIH0gZnJvbSAnLi90eXBlcy9lcnJvcic7XG5kZWNsYXJlIHZhciBjb256b2xlOiBDb25zb2xlO1xuXG5leHBvcnQgY2xhc3MgUGFyc2VyIHtcbiAgICBwcml2YXRlIGN1cnJlbnQ6IG51bWJlcjtcbiAgICBwcml2YXRlIHRva2VuczogVG9rZW5bXTtcbiAgICBwdWJsaWMgZXJyb3JzOiBzdHJpbmdbXTtcbiAgICBwdWJsaWMgZXJyb3JMZXZlbCA9IDE7XG5cbiAgICBwdWJsaWMgcGFyc2UodG9rZW5zOiBUb2tlbltdKTogU3RtdC5TdG10W10ge1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSAwO1xuICAgICAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50czogU3RtdC5TdG10W10gPSBbXTtcbiAgICAgICAgd2hpbGUgKCF0aGlzLmVvZigpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHN0YXRlbWVudHMucHVzaCh0aGlzLmRlY2xhcmF0aW9uKCkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgJEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goYFBhcnNlIEVycm9yICgke2UubGluZX06JHtlLmNvbH0pID0+ICR7ZS52YWx1ZX1gKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lcnJvcnMubGVuZ3RoID4gMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKCdQYXJzZSBFcnJvciBsaW1pdCBleGNlZWRlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlbWVudHM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zeW5jaHJvbml6ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRzO1xuICAgIH1cblxuICAgIHByaXZhdGUgbWF0Y2goLi4udHlwZXM6IFRva2VuVHlwZVtdKTogYm9vbGVhbiB7XG4gICAgICAgIGZvciAoY29uc3QgdHlwZSBvZiB0eXBlcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2sodHlwZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZHZhbmNlKCk6IFRva2VuIHtcbiAgICAgICAgaWYgKCF0aGlzLmVvZigpKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wcmV2aW91cygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcGVlaygpOiBUb2tlbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmN1cnJlbnRdO1xuICAgIH1cblxuICAgIHByaXZhdGUgcHJldmlvdXMoKTogVG9rZW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5jdXJyZW50IC0gMV07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVjayh0eXBlOiBUb2tlblR5cGUpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGVlaygpLnR5cGUgPT09IHR5cGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlb2YoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrKFRva2VuVHlwZS5Fb2YpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY29uc3VtZSh0eXBlOiBUb2tlblR5cGUsIG1lc3NhZ2U6IHN0cmluZyk6IFRva2VuIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2sodHlwZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmVycm9yKHRoaXMucHJldmlvdXMoKSwgbWVzc2FnZSArIGAsIHVuZXhwZWN0ZWQgdG9rZW4gXCIke3RoaXMucGVlaygpLmxleGVtZX1cImApO1xuICAgIH1cblxuICAgIHByaXZhdGUgZXh0cmFTZW1pY29sb24oKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gdGhpcy5tYXRjaChUb2tlblR5cGUuU2VtaWNvbG9uKTtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2soVG9rZW5UeXBlLlNlbWljb2xvbikpIHtcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmNoZWNrKFRva2VuVHlwZS5TZW1pY29sb24pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5TZW1pY29sb24sICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlcnJvcih0b2tlbjogVG9rZW4sIG1lc3NhZ2U6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIHRocm93IG5ldyAkRXJyb3IobWVzc2FnZSwgdG9rZW4ubGluZSwgdG9rZW4uY29sKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHdhcm5pbmcobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmVycm9yTGV2ZWwgPT09IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5wcmV2aW91cygpO1xuICAgICAgICAgICAgY29uem9sZS53YXJuKGBbbGluZSAoJHt0b2tlbi5saW5lfSkgcGFyc2Ugd2FybmluZyBhdCBcIiR7dG9rZW4ubGV4ZW1lfVwiXSA9PiAke21lc3NhZ2V9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN5bmNocm9uaXplKCk6IHZvaWQge1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMucGVlaygpLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5DbGFzczpcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5GdW5jdGlvbjpcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5WYXI6XG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuRm9yOlxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLklmOlxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLldoaWxlOlxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkRvOlxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlByaW50OlxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlJldHVybjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuU2VtaWNvbG9uIHx8IHRoaXMucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5SaWdodEJyYWNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgIH0gd2hpbGUgKCF0aGlzLmVvZigpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlY2xhcmF0aW9uKCk6IFN0bXQuU3RtdCB7XG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5DbGFzcykpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNsYXNzRGVjbGFyYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuRnVuY3Rpb24pKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mdW5jRGVjbGFyYXRpb24oXCJmdW5jdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuVmFyKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFyRGVjbGFyYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNsYXNzRGVjbGFyYXRpb24oKTogU3RtdC5DbGFzcyB7XG4gICAgICAgIGNvbnN0IG5hbWU6IFRva2VuID0gdGhpcy5jb25zdW1lKFRva2VuVHlwZS5JZGVudGlmaWVyLCBgRXhwZWN0ZWQgYSBjbGFzcyBuYW1lYCk7XG4gICAgICAgIGxldCBwYXJlbnQ6IFRva2VuID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkV4dGVuZHMpKSB7XG4gICAgICAgICAgICBwYXJlbnQgID0gdGhpcy5jb25zdW1lKFRva2VuVHlwZS5JZGVudGlmaWVyLCBgRXhwZWN0ZWQgYSBwYXJlbnQgbmFtZWApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuTGVmdEJyYWNlLCBgRXhwZWN0ZWQgb3BlbiBicmFjZSBcIntcIiBhZnRlciBjbGFzcyBuYW1lYCk7XG4gICAgICAgIGNvbnN0IG1ldGhvZHM6IFN0bXQuRnVuY1tdID0gW107XG5cbiAgICAgICAgd2hpbGUgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5SaWdodEJyYWNlKSAmJiAhdGhpcy5lb2YoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2soVG9rZW5UeXBlLkZ1bmN0aW9uKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuRnVuY3Rpb24sICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1ldGhvZHMucHVzaCh0aGlzLmZ1bmNEZWNsYXJhdGlvbihcIm1ldGhvZFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlJpZ2h0QnJhY2UsIGBFeHBlY3RlZCBcIn1cIiBhZnRlciBjbGFzcyBcIiR7bmFtZS5saXRlcmFsfVwiIG1ldGhvZHNgKTtcbiAgICAgICAgaWYgKHRoaXMuZXh0cmFTZW1pY29sb24oKSkge1xuICAgICAgICAgICAgdGhpcy53YXJuaW5nKGBVbm5lY2Vzc2FyeSBzZW1pY29sb24gYWZ0ZXIgY2xhc3MgJHtuYW1lLmxleGVtZX0gZGVjbGFyYXRpb25gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFN0bXQuQ2xhc3MobmFtZSwgcGFyZW50LCBtZXRob2RzLCBuYW1lLmxpbmUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZnVuY0RlY2xhcmF0aW9uKGtpbmQ6IHN0cmluZyk6IFN0bXQuRnVuYyB7XG4gICAgICAgIGNvbnN0IG5hbWU6IFRva2VuID0gdGhpcy5jb25zdW1lKFRva2VuVHlwZS5JZGVudGlmaWVyLCBgRXhwZWN0ZWQgYSAke2tpbmR9IG5hbWVgKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZnVuY1BhcmFtc0JvZHkobmFtZSwga2luZCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmdW5jUGFyYW1zKGtpbmQ6IHN0cmluZyk6IFRva2VuW10ge1xuICAgICAgICBjb25zdCBwYXJhbXM6IFRva2VuW10gPSBbXTtcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5SaWdodFBhcmVuKSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMubGVuZ3RoID49IDI1NSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKHRoaXMucGVlaygpLCBgUGFyYW1ldGVyIGNvdW50IGV4Y2VlZHMgMjU1YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKHRoaXMuY29uc3VtZShUb2tlblR5cGUuSWRlbnRpZmllciwgYEV4cGVjdGVkIGEgcGFyYW1ldGVyIG5hbWVgKSk7XG4gICAgICAgICAgICB9IHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5Db21tYSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuUmlnaHRQYXJlbiwgYEV4cGVjdGVkIGNsb3NlIHBhcmVudGhlc2lzIFwiKVwiIGFmdGVyICR7a2luZH0gcGFyYW1ldGVyc2ApO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH1cblxuICAgIHByaXZhdGUgZnVuY1BhcmFtc0JvZHkobmFtZTogVG9rZW4sIGtpbmQ6IHN0cmluZyk6IFN0bXQuRnVuYyB7XG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuTGVmdFBhcmVuLCBgRXhwZWN0ZWQgb3BlbiBwYXJlbnRoZXNpcyBcIihcIiBhZnRlciAke2tpbmR9YCk7XG4gICAgICAgIGNvbnN0IHBhcmFtczogVG9rZW5bXSA9IHRoaXMuZnVuY1BhcmFtcyhraW5kKTtcblxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuTGVmdEJyYWNlKSkge1xuICAgICAgICAgICAgY29uc3QgYm9keTogU3RtdC5TdG10W10gPSB0aGlzLmJsb2NrKCk7XG4gICAgICAgICAgICBpZiAobmFtZS50eXBlICE9PSBUb2tlblR5cGUuTGFtYmRhICYmIHRoaXMuZXh0cmFTZW1pY29sb24oKSkge1xuICAgICAgICAgICAgICAgIHRoaXMud2FybmluZyhgVW5uZWNlc3Nhcnkgc2VtaWNvbG9uIGFmdGVyIGZ1bmN0aW9uICR7bmFtZS5sZXhlbWV9IGRlY2xhcmF0aW9uYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IFN0bXQuRnVuYyhuYW1lLCBwYXJhbXMsIGJvZHksIG5hbWUubGluZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuQXJyb3cpKSB7XG4gICAgICAgICAgICBjb25zdCBib2R5OiBTdG10LlN0bXRbXSA9IFtdO1xuICAgICAgICAgICAgbGV0IGFycm93OiBFeHByLkV4cHI7XG4gICAgICAgICAgICBjb25zdCBrZXl3b3JkOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5jaGVjayhUb2tlblR5cGUuU2VtaWNvbG9uKSkge1xuICAgICAgICAgICAgICAgIGFycm93ID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1hdGNoKFRva2VuVHlwZS5TZW1pY29sb24pO1xuICAgICAgICAgICAgYm9keS5wdXNoKG5ldyBTdG10LlJldHVybihrZXl3b3JkLCBhcnJvdywga2V5d29yZC5saW5lKSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFN0bXQuRnVuYyhuYW1lLCBwYXJhbXMsIGJvZHksIG5hbWUubGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5MZWZ0QnJhY2UsIGBFeHBlY3QgXCJ7XCIgYmVmb3JlICR7a2luZH0gYm9keWApO1xuICAgIH1cblxuICAgIHByaXZhdGUgdmFyRGVjbGFyYXRpb24oKTogU3RtdC5TdG10IHtcbiAgICAgICAgY29uc3QgbmFtZTogVG9rZW4gPSB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLklkZW50aWZpZXIsIGBFeHBlY3RlZCBhIHZhcmlhYmxlIG5hbWUgYWZ0ZXIgXCJ2YXJcIiBrZXl3b3JkYCk7XG4gICAgICAgIGxldCBpbml0aWFsaXplcjogRXhwci5FeHByICA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5FcXVhbCkpIHtcbiAgICAgICAgICAgIGluaXRpYWxpemVyID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5TZW1pY29sb24sIGBFeHBlY3RlZCBzZW1pY29sb24gXCI7XCIgYWZ0ZXIgYSB2YXJpYWJsZSBkZWNsYXJhdGlvbmApO1xuXG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5WYXIobmFtZSwgbnVsbCwgaW5pdGlhbGl6ZXIsIG5hbWUubGluZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0ZW1lbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5JZikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlmU3RhdGVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlByaW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJpbnRTdGF0ZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuRG8pKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kb1doaWxlU3RhdGVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLldoaWxlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hpbGVTdGF0ZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuRm9yKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9yU3RhdGVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkxlZnRCcmFjZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3RtdC5CbG9jayh0aGlzLmJsb2NrKCksIHRoaXMucHJldmlvdXMoKS5saW5lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuUmV0dXJuKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmV0dXJuU3RhdGVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkJyZWFrKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnJlYWtTdGF0ZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuQ29udGludWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250aW51ZVN0YXRlbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmV4cHJlc3Npb25TdGF0ZW1lbnQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlmU3RhdGVtZW50KCk6IFN0bXQuU3RtdCB7XG4gICAgICAgIGNvbnN0IGtleXdvcmQgPSB0aGlzLnByZXZpb3VzKCk7XG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuTGVmdFBhcmVuLCBgRXhwZWN0ZWQgb3BlbiBwYXJlbnRoZXNpcyBcIihcIiBhZnRlciBhbiBcImlmXCIga2V5d29yZGApO1xuICAgICAgICBjb25zdCBjb25kaXRpb246IEV4cHIuRXhwciA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlJpZ2h0UGFyZW4sIGBFeHBlY3RlZCBjbG9zZSBwYXJlbnRoZXNpcyBcIilcIiBhZnRlciBcImlmXCIgc3RhdGVtZW50IGNvbmRpdGlvbmApO1xuICAgICAgICBjb25zdCB0aGVuU3RtdDogU3RtdC5TdG10ID0gdGhpcy5zdGF0ZW1lbnQoKTtcbiAgICAgICAgbGV0IGVsc2VTdG10OiBTdG10LlN0bXQgPSAgbnVsbDtcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkVsc2UpKSB7XG4gICAgICAgICAgICBlbHNlU3RtdCA9IHRoaXMuc3RhdGVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBTdG10LklmKGNvbmRpdGlvbiwgdGhlblN0bXQsIGVsc2VTdG10LCBrZXl3b3JkLmxpbmUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgd2hpbGVTdGF0ZW1lbnQoKTogU3RtdC5TdG10IHtcbiAgICAgICAgY29uc3Qga2V5d29yZCA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5MZWZ0UGFyZW4sIGBFeHBlY3RlZCBvcGVuIHBhcmVudGhlc2lzIFwiKFwiIGFmdGVyIGEgXCJ3aGlsZVwiIHN0YXRlbWVudGApO1xuICAgICAgICBjb25zdCBjb25kaXRpb246IEV4cHIuRXhwciA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlJpZ2h0UGFyZW4sIGBFeHBlY3RlZCBjbG9zZSBwYXJlbnRoZXNpcyBcIilcIiBhZnRlciBcIndoaWxlXCIgY29uZGl0aW9uYCk7XG4gICAgICAgIGNvbnN0IGxvb3A6IFN0bXQuU3RtdCA9IHRoaXMuc3RhdGVtZW50KCk7XG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5XaGlsZShjb25kaXRpb24sIGxvb3AsIGtleXdvcmQubGluZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb3JTdGF0ZW1lbnQoKTogU3RtdC5TdG10IHtcbiAgICAgICAgY29uc3Qga2V5d29yZCA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5MZWZ0UGFyZW4sIGBFeHBlY3RlZCBvcGVuIHBhcmVudGhlc2lzIFwiKFwiIGFmdGVyIGEgXCJmb3JcIiBzdGF0ZW1lbnRgKTtcblxuICAgICAgICBsZXQgaW5pdGlhbGl6ZXI6IFN0bXQuU3RtdDtcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlNlbWljb2xvbikpIHtcbiAgICAgICAgICAgIGluaXRpYWxpemVyID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5WYXIpKSB7XG4gICAgICAgICAgICBpbml0aWFsaXplciA9IHRoaXMudmFyRGVjbGFyYXRpb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluaXRpYWxpemVyID0gdGhpcy5leHByZXNzaW9uU3RhdGVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvbmRpdGlvbjogRXhwci5FeHByO1xuICAgICAgICBpZiAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLlNlbWljb2xvbikpIHtcbiAgICAgICAgICAgIGNvbmRpdGlvbiA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuU2VtaWNvbG9uLCBgRXhwZWN0ZWQgc2VtaWNvbG9uIFwiO1wiIGFmdGVyIGEgXCJmb3JcIiBzdGF0ZW1lbnQgbG9vcCBjb25kaXRpb25gKTtcbiAgICAgICAgbGV0IGluY3JlbWVudDogRXhwci5FeHByO1xuICAgICAgICBpZiAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLlJpZ2h0UGFyZW4pKSB7XG4gICAgICAgICAgICBpbmNyZW1lbnQgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlJpZ2h0UGFyZW4sIGBFeHBlY3RlZCBzZW1pY29sb24gXCI7XCIgYWZ0ZXIgYSBcImZvclwiIHN0ZW1lbnQgaW5jcmVtZW50IGV4cHJlc3Npb25gKTtcbiAgICAgICAgbGV0IGJvZHk6IFN0bXQuU3RtdCA9IHRoaXMuc3RhdGVtZW50KCk7XG4gICAgICAgIGlmIChpbmNyZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGJvZHkgPSBuZXcgU3RtdC5CbG9jayhbXG4gICAgICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgICAgICBuZXcgU3RtdC5FeHByZXNzaW9uKGluY3JlbWVudCwga2V5d29yZC5saW5lKVxuICAgICAgICAgICAgXSwga2V5d29yZC5saW5lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZGl0aW9uID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25kaXRpb24gPSBuZXcgRXhwci5MaXRlcmFsKG5ldyAkQm9vbGVhbih0cnVlKSwga2V5d29yZC5saW5lKTtcbiAgICAgICAgfVxuICAgICAgICBib2R5ID0gbmV3IFN0bXQuV2hpbGUoY29uZGl0aW9uLCBib2R5LCBrZXl3b3JkLmxpbmUpO1xuICAgICAgICBpZiAoaW5pdGlhbGl6ZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGJvZHkgPSBuZXcgU3RtdC5CbG9jayhbXG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZXIsXG4gICAgICAgICAgICAgICAgYm9keVxuICAgICAgICAgICAgXSwga2V5d29yZC5saW5lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm9keTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRvV2hpbGVTdGF0ZW1lbnQoKTogU3RtdC5TdG10IHtcbiAgICAgICAgY29uc3Qga2V5d29yZCA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgY29uc3QgbG9vcDogU3RtdC5TdG10ID0gdGhpcy5zdGF0ZW1lbnQoKTtcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5XaGlsZSwgYEV4cGVjdGVkIGEgXCJ3aGlsZVwiIGNvbmRpdGlvbiBhZnRlciBcImRvXCIgc3RhdGVtZW50YCk7XG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuTGVmdFBhcmVuLCBgRXhwZWN0ZWQgb3BlbiBwYXJlbnRoZXNpcyBcIihcIiBhZnRlciBhIFwid2hpbGVcIiBrZXl3b3JkYCk7XG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbjogRXhwci5FeHByID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuUmlnaHRQYXJlbiwgYEV4cGVjdGVkIGNsb3NlIHBhcmVudGhlc2lzIFwiKVwiIGFmdGVyIFwid2hpbGVcIiBjb25kaXRpb25gKTtcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5TZW1pY29sb24sIGBFeHBlY3RlZCBzZW1pY29sb24gXCI7XCIgYWZ0ZXIgYSBkbyB3aGlsZSBjb25kaXRpb25gKTtcbiAgICAgICAgcmV0dXJuIG5ldyBTdG10LkRvV2hpbGUobG9vcCwgY29uZGl0aW9uLCBrZXl3b3JkLmxpbmUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcHJpbnRTdGF0ZW1lbnQoKTogU3RtdC5TdG10IHtcbiAgICAgICAgY29uc3Qga2V5d29yZCA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgY29uc3QgdmFsdWU6IEV4cHIuRXhwciA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlNlbWljb2xvbiwgYEV4cGVjdGVkIHNlbWljb2xvbiBcIjtcIiBhZnRlciBleHByZXNzaW9uYCk7XG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5QcmludCh2YWx1ZSwga2V5d29yZC5saW5lKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJldHVyblN0YXRlbWVudCgpOiBTdG10LlN0bXQge1xuICAgICAgICBjb25zdCBrZXl3b3JkOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgbGV0IHZhbHVlID0gbnVsbDtcblxuICAgICAgICBpZiAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLlNlbWljb2xvbikpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlNlbWljb2xvbiwgYEV4ZWN0ZWQgc2VtaWNvbG9uIFwiO1wiIGFmdGVyIHJldHVybiBzdGF0ZW1lbnRgKTtcbiAgICAgICAgcmV0dXJuIG5ldyBTdG10LlJldHVybihrZXl3b3JkLCB2YWx1ZSwga2V5d29yZC5saW5lKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJyZWFrU3RhdGVtZW50KCk6IFN0bXQuU3RtdCB7XG4gICAgICAgIGNvbnN0IGtleXdvcmQ6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlNlbWljb2xvbiwgYEV4ZWN0ZWQgc2VtaWNvbG9uIFwiO1wiIGFmdGVyIGJyZWFrIHN0YXRlbWVudGApO1xuICAgICAgICByZXR1cm4gbmV3IFN0bXQuQnJlYWsoa2V5d29yZCwga2V5d29yZC5saW5lKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbnRpbnVlU3RhdGVtZW50KCk6IFN0bXQuU3RtdCB7XG4gICAgICAgIGNvbnN0IGtleXdvcmQ6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlNlbWljb2xvbiwgYEV4ZWN0ZWQgc2VtaWNvbG9uIFwiO1wiIGFmdGVyIGNvbnRpbnVlIHN0YXRlbWVudGApO1xuICAgICAgICByZXR1cm4gbmV3IFN0bXQuQ29udGludWUoa2V5d29yZCwga2V5d29yZC5saW5lKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJsb2NrKCk6IFN0bXQuU3RtdFtdIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50czogU3RtdC5TdG10W10gPSBbXTtcbiAgICAgICAgd2hpbGUgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5SaWdodEJyYWNlKSAmJiAhdGhpcy5lb2YoKSkge1xuICAgICAgICAgICAgc3RhdGVtZW50cy5wdXNoKHRoaXMuZGVjbGFyYXRpb24oKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5SaWdodEJyYWNlLCBgRXhwZWN0ZWQgY2xvc2UgYnJhY2UgXCJ9XCIgYWZ0ZXIgYmxvY2sgc3RhdGVtZW50YCk7XG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRzO1xuICAgIH1cblxuICAgIHByaXZhdGUgZXhwcmVzc2lvblN0YXRlbWVudCgpOiBTdG10LlN0bXQge1xuICAgICAgICBjb25zdCBleHByZXNzaW9uOiBFeHByLkV4cHIgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5TZW1pY29sb24sIGBFeHBlY3RlZCBzZW1pY29sb24gXCI7XCIgYWZ0ZXIgJHtleHByZXNzaW9ufSBleHByZXNzaW9uYCk7XG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5TZW1pY29sb24pKSB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgICAgIHRoaXMud2FybmluZyhgW2xpbmUgKCR7dG9rZW4ubGluZX0pIHBhcnNlIHdhcm5pbmcgYXQgXCIke3Rva2VuLmxleGVtZX1cIl0gPT4gdW5uZWNlc3Nhcnkgc2VtaWNvbG9uIG9yIGVtcHR5IHN0YXRlbWVudGApO1xuICAgICAgICAgICAgLy8gY29uc3VtZSBhbGwgc2VtaWNvbG9uc1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuU2VtaWNvbG9uKSl7IH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBTdG10LkV4cHJlc3Npb24oZXhwcmVzc2lvbiwgZXhwcmVzc2lvbi5saW5lKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGV4cHJlc3Npb24oKTogRXhwci5FeHByIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNzaWdubWVudCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXNzaWdubWVudCgpOiBFeHByLkV4cHIge1xuICAgICAgICBjb25zdCBleHByOiBFeHByLkV4cHIgPSB0aGlzLnRlcm5hcnkoKTtcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkVxdWFsLCBUb2tlblR5cGUuUGx1c0VxdWFsLFxuICAgICAgICAgICAgVG9rZW5UeXBlLk1pbnVzRXF1YWwsIFRva2VuVHlwZS5TdGFyRXF1YWwsIFRva2VuVHlwZS5TbGFzaEVxdWFsKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgICAgIGxldCB2YWx1ZTogRXhwci5FeHByID0gdGhpcy5hc3NpZ25tZW50KCk7XG4gICAgICAgICAgICBpZiAoZXhwciBpbnN0YW5jZW9mIEV4cHIuVmFyaWFibGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lOiBUb2tlbiA9IGV4cHIubmFtZTtcbiAgICAgICAgICAgICAgICBpZiAob3BlcmF0b3IudHlwZSAhPT0gVG9rZW5UeXBlLkVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbmV3IEV4cHIuQmluYXJ5KG5ldyBFeHByLlZhcmlhYmxlKG5hbWUsIG5hbWUubGluZSksIG9wZXJhdG9yLCB2YWx1ZSwgb3BlcmF0b3IubGluZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5Bc3NpZ24obmFtZSwgdmFsdWUsIG5hbWUubGluZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV4cHIgaW5zdGFuY2VvZiBFeHByLkdldCkge1xuICAgICAgICAgICAgICAgIGlmIChvcGVyYXRvci50eXBlICE9PSBUb2tlblR5cGUuRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRXhwci5CaW5hcnkobmV3IEV4cHIuR2V0KGV4cHIuZW50aXR5LCBleHByLmtleSwgZXhwci50eXBlLCBleHByLmxpbmUpLCBvcGVyYXRvciwgdmFsdWUsIG9wZXJhdG9yLmxpbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuU2V0KGV4cHIuZW50aXR5LCBleHByLmtleSwgdmFsdWUsIGV4cHIubGluZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVycm9yKG9wZXJhdG9yLCBgSW52YWxpZCBsLXZhbHVlLCBpcyBub3QgYW4gYXNzaWduaW5nIHRhcmdldC5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhwcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRlcm5hcnkoKTogRXhwci5FeHByIHtcbiAgICAgICAgY29uc3QgZXhwciA9IHRoaXMubnVsbENvYWxlc2NpbmcoKTtcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlF1ZXN0aW9uKSkge1xuICAgICAgICAgICAgY29uc3QgdGhlbkV4cHI6IEV4cHIuRXhwciA9IHRoaXMudGVybmFyeSgpO1xuICAgICAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5Db2xvbiwgYEV4cGVjdGVkIFwiOlwiIGFmdGVyIHRlcm5hcnkgPyBleHByZXNzaW9uYCk7XG4gICAgICAgICAgICBjb25zdCBlbHNlRXhwcjogRXhwci5FeHByID0gdGhpcy50ZXJuYXJ5KCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuVGVybmFyeShleHByLCB0aGVuRXhwciwgZWxzZUV4cHIsIGV4cHIubGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4cHI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBudWxsQ29hbGVzY2luZygpOiBFeHByLkV4cHIge1xuICAgICAgICBjb25zdCBleHByID0gdGhpcy5sb2dpY2FsT3IoKTtcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlF1ZXN0aW9uUXVlc3Rpb24pKSB7XG4gICAgICAgICAgICBjb25zdCByaWdodEV4cHI6IEV4cHIuRXhwciA9IHRoaXMubnVsbENvYWxlc2NpbmcoKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5OdWxsQ29hbGVzY2luZyhleHByLCByaWdodEV4cHIsIGV4cHIubGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4cHI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2dpY2FsT3IoKTogRXhwci5FeHByIHtcbiAgICAgICAgbGV0IGV4cHIgPSB0aGlzLmxvZ2ljYWxBbmQoKTtcbiAgICAgICAgd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLk9yKSkge1xuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3I6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMubG9naWNhbEFuZCgpO1xuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkxvZ2ljYWwoZXhwciwgb3BlcmF0b3IsIHJpZ2h0LCBvcGVyYXRvci5saW5lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhwcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvZ2ljYWxBbmQoKTogRXhwci5FeHByIHtcbiAgICAgICAgbGV0IGV4cHIgPSB0aGlzLmVxdWFsaXR5KCk7XG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5BbmQpKSB7XG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XG4gICAgICAgICAgICBjb25zdCByaWdodDogRXhwci5FeHByID0gdGhpcy5lcXVhbGl0eSgpO1xuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkxvZ2ljYWwoZXhwciwgb3BlcmF0b3IsIHJpZ2h0LCBvcGVyYXRvci5saW5lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhwcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGVxdWFsaXR5KCk6IEV4cHIuRXhwciB7XG4gICAgICAgIGxldCBleHByICA9IHRoaXMuaW5zdGFuY2VvZigpO1xuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChcbiAgICAgICAgICAgIFRva2VuVHlwZS5CYW5nRXF1YWwsIFRva2VuVHlwZS5FcXVhbEVxdWFsKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0OiBFeHByLkV4cHIgPSB0aGlzLmluc3RhbmNlb2YoKTtcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5CaW5hcnkoZXhwciwgb3BlcmF0b3IsIHJpZ2h0LCBvcGVyYXRvci5saW5lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhwcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluc3RhbmNlb2YoKTogRXhwci5FeHByIHtcbiAgICAgICAgbGV0IGV4cHIgPSB0aGlzLmluKCk7XG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5JcywgVG9rZW5UeXBlLkluc3RhbmNlb2YpKSB7XG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvciA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5JZGVudGlmaWVyLCBUb2tlblR5cGUuQ2xhc3MsIFRva2VuVHlwZS5GdW5jdGlvbiwgVG9rZW5UeXBlLk51bGwpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnByZXZpb3VzKCk7XG4gICAgICAgICAgICAgICAgaWYgKG9wZXJhdG9yLnR5cGUgPT09IFRva2VuVHlwZS5JbnN0YW5jZW9mKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5JbnN0YW5jZU9mKGV4cHIsIHJpZ2h0LCBvcGVyYXRvci5saW5lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBleHByID0gbmV3IEV4cHIuSXMoZXhwciwgcmlnaHQsIG9wZXJhdG9yLmxpbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcih0aGlzLnByZXZpb3VzKCksIGBFeHBlY3RlZCBhIFR5cGUgb3IgQ2xhc3NOYW1lIGlkZW50aWZpZXIgYWZ0ZXIgXCJpc1wiIG9wZXJhdG9yYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4cHI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbigpOiBFeHByLkV4cHIge1xuICAgICAgICBsZXQgZXhwciA9IHRoaXMuY29tcGFyaXNvbigpO1xuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuSW4pKSB7XG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvciA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkluKGV4cHIsIGVudGl0eSwgb3BlcmF0b3IubGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4cHI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb21wYXJpc29uKCk6IEV4cHIuRXhwciB7XG4gICAgICAgIGxldCBleHByOiBFeHByLkV4cHIgPSB0aGlzLmFkZGl0aW9uKCk7XG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5HcmVhdGVyLCBUb2tlblR5cGUuR3JlYXRlckVxdWFsLCBUb2tlblR5cGUuTGVzcywgVG9rZW5UeXBlLkxlc3NFcXVhbCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0OiBFeHByLkV4cHIgPSB0aGlzLmFkZGl0aW9uKCk7XG4gICAgICAgICAgICBleHByID0gbmV3IEV4cHIuQmluYXJ5KGV4cHIsIG9wZXJhdG9yLCByaWdodCwgb3BlcmF0b3IubGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4cHI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRpdGlvbigpOiBFeHByLkV4cHIge1xuICAgICAgICBsZXQgZXhwcjogRXhwci5FeHByID0gdGhpcy5tb2R1bHVzKCk7XG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5NaW51cywgVG9rZW5UeXBlLlBsdXMpKSB7XG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XG4gICAgICAgICAgICBjb25zdCByaWdodDogRXhwci5FeHByID0gdGhpcy5tb2R1bHVzKCk7XG4gICAgICAgICAgICBleHByID0gbmV3IEV4cHIuQmluYXJ5KGV4cHIsIG9wZXJhdG9yLCByaWdodCwgb3BlcmF0b3IubGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4cHI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtb2R1bHVzKCk6IEV4cHIuRXhwciB7XG4gICAgICAgIGxldCBleHByOiBFeHByLkV4cHIgPSB0aGlzLm11bHRpcGxpY2F0aW9uKCk7XG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5QZXJjZW50KSkge1xuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3I6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMubXVsdGlwbGljYXRpb24oKTtcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5CaW5hcnkoZXhwciwgb3BlcmF0b3IsIHJpZ2h0LCBvcGVyYXRvci5saW5lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhwcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIG11bHRpcGxpY2F0aW9uKCk6IEV4cHIuRXhwciB7XG4gICAgICAgIGxldCBleHByOiBFeHByLkV4cHIgPSB0aGlzLnR5cGVvZigpO1xuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuU2xhc2gsIFRva2VuVHlwZS5TdGFyKSkge1xuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3I6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMudHlwZW9mKCk7XG4gICAgICAgICAgICBleHByID0gbmV3IEV4cHIuQmluYXJ5KGV4cHIsIG9wZXJhdG9yLCByaWdodCwgb3BlcmF0b3IubGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4cHI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0eXBlb2YoKTogRXhwci5FeHByIHtcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlR5cGVvZikpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlOiBFeHByLkV4cHIgPSB0aGlzLnR5cGVvZigpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlR5cGVvZih2YWx1ZSwgb3BlcmF0b3IubGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudW5hcnkoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVuYXJ5KCk6IEV4cHIuRXhwciB7XG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5NaW51cywgVG9rZW5UeXBlLkJhbmcsIFRva2VuVHlwZS5Eb2xsYXIsIFRva2VuVHlwZS5QbHVzUGx1cywgVG9rZW5UeXBlLk1pbnVzTWludXMpKSB7XG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XG4gICAgICAgICAgICBjb25zdCByaWdodDogRXhwci5FeHByID0gdGhpcy51bmFyeSgpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlVuYXJ5KG9wZXJhdG9yLCByaWdodCwgb3BlcmF0b3IubGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubmV3S2V5d29yZCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbmV3S2V5d29yZCgpOiBFeHByLkV4cHIge1xuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuTmV3KSkge1xuICAgICAgICAgICAgY29uc3Qga2V5d29yZCA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdDogRXhwci5FeHByID0gdGhpcy5jYWxsKCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTmV3KGNvbnN0cnVjdCwga2V5d29yZC5saW5lKTtcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNhbGwoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNhbGwoKTogRXhwci5FeHByIHtcbiAgICAgICAgbGV0IGV4cHI6IEV4cHIuRXhwciA9IHRoaXMucHJpbWFyeSgpO1xuICAgICAgICBsZXQgY29uc3VtZWQgPSB0cnVlO1xuICAgICAgICBkbyAge1xuICAgICAgICAgICAgY29uc3VtZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5MZWZ0UGFyZW4pKSB7XG4gICAgICAgICAgICAgICAgY29uc3VtZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJnczogRXhwci5FeHByW10gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5SaWdodFBhcmVuKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5Db21tYSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVuOiBUb2tlbiA9IHRoaXMuY29uc3VtZShUb2tlblR5cGUuUmlnaHRQYXJlbiwgYEV4cGVjdGVkIFwiKVwiIGFmdGVyIGFyZ3VtZW50c2ApO1xuICAgICAgICAgICAgICAgICAgICBleHByID0gbmV3IEV4cHIuQ2FsbChleHByLCBwYXJlbiwgYXJncywgbnVsbCwgcGFyZW4ubGluZSk7XG4gICAgICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuTGVmdFBhcmVuKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuRG90LCBUb2tlblR5cGUuUXVlc3Rpb25Eb3QpKSB7XG4gICAgICAgICAgICAgICAgY29uc3VtZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGV4cHIgPSB0aGlzLmRvdEdldChleHByLCB0aGlzLnByZXZpb3VzKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkxlZnRCcmFja2V0KSkge1xuICAgICAgICAgICAgICAgIGNvbnN1bWVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBleHByID0gdGhpcy5icmFja2V0R2V0KGV4cHIsIHRoaXMucHJldmlvdXMoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKGNvbnN1bWVkKTtcbiAgICAgICAgcmV0dXJuIGV4cHI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkb3RHZXQoZXhwcjogRXhwci5FeHByLCBvcGVyYXRvcjogVG9rZW4pOiBFeHByLkV4cHIge1xuICAgICAgICBjb25zdCBuYW1lOiBUb2tlbiA9IHRoaXMuY29uc3VtZShUb2tlblR5cGUuSWRlbnRpZmllciwgYEV4cGVjdCBwcm9wZXJ0eSBuYW1lIGFmdGVyICcuJ2ApO1xuICAgICAgICBjb25zdCBrZXk6IEV4cHIuS2V5ID0gbmV3IEV4cHIuS2V5KG5hbWUsIG5hbWUubGluZSk7XG4gICAgICAgIHJldHVybiBuZXcgRXhwci5HZXQoZXhwciwga2V5LCBvcGVyYXRvci50eXBlLCBuYW1lLmxpbmUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYnJhY2tldEdldChleHByOiBFeHByLkV4cHIsIG9wZXJhdG9yOiBUb2tlbik6IEV4cHIuRXhwciB7XG4gICAgICAgIGxldCBrZXk6IEV4cHIuRXhwciA9IG51bGw7XG4gICAgICAgIGxldCBlbmQ6IEV4cHIuRXhwciA9IG51bGw7XG4gICAgICAgIGxldCBzdGVwOiBFeHByLkV4cHIgPSBudWxsO1xuICAgICAgICBpZiAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLkNvbG9uKSkge1xuICAgICAgICAgICAga2V5ID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkNvbG9uKSAmJiAhdGhpcy5jaGVjayhUb2tlblR5cGUuQ29sb24pKSB7XG4gICAgICAgICAgICBlbmQgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuQ29sb24pICYmICF0aGlzLmNoZWNrKFRva2VuVHlwZS5SaWdodEJyYWNrZXQpKSB7XG4gICAgICAgICAgICBzdGVwID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5SaWdodEJyYWNrZXQsIGBFeHBlY3RlZCBcIl1cIiBhZnRlciBhbiBpbmRleGApO1xuICAgICAgICBpZiAoIWtleSB8fCBlbmQgfHwgc3RlcCkge1xuICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBuZXcgRXhwci5SYW5nZShrZXksIGVuZCwgc3RlcCwgb3BlcmF0b3IubGluZSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuR2V0KGV4cHIsIHJhbmdlLCBvcGVyYXRvci50eXBlLCBvcGVyYXRvci5saW5lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEV4cHIuR2V0KGV4cHIsIGtleSwgb3BlcmF0b3IudHlwZSwgb3BlcmF0b3IubGluZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwcmltYXJ5KCk6IEV4cHIuRXhwciB7XG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5GYWxzZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5MaXRlcmFsKG5ldyAkQm9vbGVhbihmYWxzZSksIHRoaXMucHJldmlvdXMoKS5saW5lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuVHJ1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5MaXRlcmFsKG5ldyAkQm9vbGVhbih0cnVlKSwgdGhpcy5wcmV2aW91cygpLmxpbmUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5OdWxsKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkxpdGVyYWwobmV3ICROdWxsKCksIHRoaXMucHJldmlvdXMoKS5saW5lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuTnVtYmVyKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkxpdGVyYWwobmV3ICROdW1iZXIodGhpcy5wcmV2aW91cygpLmxpdGVyYWwpLCB0aGlzLnByZXZpb3VzKCkubGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlN0cmluZykpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5adHJpbmcodGhpcy5wcmV2aW91cygpLmxpdGVyYWwsIHRoaXMucHJldmlvdXMoKS5saW5lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuVGVtcGxhdGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuVGVtcGxhdGUodGhpcy5wcmV2aW91cygpLmxpdGVyYWwsIHRoaXMucHJldmlvdXMoKS5saW5lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuUmVnZXgpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuUmVnRXgodGhpcy5wcmV2aW91cygpLmxpdGVyYWwsIHRoaXMucHJldmlvdXMoKS5saW5lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuQmFzZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVuID0gdGhpcy5wcmV2aW91cygpO1xuICAgICAgICAgICAgcGFyZW4ubGV4ZW1lID0gJ3RoaXMnO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkJhc2UocGFyZW4sIHBhcmVuLmxpbmUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5JZGVudGlmaWVyKSkge1xuICAgICAgICAgICAgY29uc3QgaWRlbnRpZmllciA9ICB0aGlzLnByZXZpb3VzKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuUGx1c1BsdXMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlBvc3RmaXgoaWRlbnRpZmllciwgMSwgaWRlbnRpZmllci5saW5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5NaW51c01pbnVzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5Qb3N0Zml4KGlkZW50aWZpZXIsIC0xLCBpZGVudGlmaWVyLmxpbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlZhcmlhYmxlKGlkZW50aWZpZXIsIGlkZW50aWZpZXIubGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkxlZnRQYXJlbikpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4cHI6IEV4cHIuRXhwciA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5SaWdodFBhcmVuLCBgRXhwZWN0ZWQgXCIpXCIgYWZ0ZXIgZXhwcmVzc2lvbmApO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkdyb3VwaW5nKGV4cHIsIGV4cHIubGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkxlZnRCcmFjZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRpY3Rpb25hcnkoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuRnVuY3Rpb24pKSB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbjogVG9rZW4gPSBuZXcgVG9rZW4oVG9rZW5UeXBlLkxhbWJkYSwgJ0AnLCAnQCcsIHRoaXMucHJldmlvdXMoKS5saW5lLCB0aGlzLnByZXZpb3VzKCkuY29sKTtcbiAgICAgICAgICAgIGNvbnN0IGxhbWJkYTogU3RtdC5GdW5jID0gdGhpcy5mdW5jUGFyYW1zQm9keSh0b2tlbiwgJ2xhbWJkYScpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkxhbWJkYShsYW1iZGEsIHRva2VuLmxpbmUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5MZWZ0QnJhY2tldCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3QoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuVm9pZCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4cHI6IEV4cHIuRXhwciA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlZvaWQoZXhwciwgdGhpcy5wcmV2aW91cygpLmxpbmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgdGhpcy5lcnJvcih0aGlzLnBlZWsoKSwgYEV4cGVjdGVkIGV4cHJlc3Npb24sIHVuZXhwZWN0ZWQgdG9rZW4gXCIke3RoaXMucGVlaygpLmxleGVtZX1cImApO1xuICAgICAgICAvLyB1bnJlYWNoZWFibGUgY29kZVxuICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGl0ZXJhbChudWxsLCAwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGljdGlvbmFyeSgpOiBFeHByLkV4cHIge1xuICAgICAgICBjb25zdCBsZWZ0QnJhY2UgPSB0aGlzLnByZXZpb3VzKCk7XG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5SaWdodEJyYWNlKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkRpY3Rpb25hcnkoW10sIHRoaXMucHJldmlvdXMoKS5saW5lKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzOiBFeHByLlNldFtdID0gW107XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5TdHJpbmcsIFRva2VuVHlwZS5JZGVudGlmaWVyLCBUb2tlblR5cGUuTnVtYmVyKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleTogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5Db2xvbiwgYEV4cGVjdGVkIFwiOlwiIGNvbG9uIGFmdGVyIG1lbWJlcmApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgcHJvcGVydGllcy5wdXNoKG5ldyBFeHByLlNldChudWxsLCBuZXcgRXhwci5LZXkoa2V5LCBrZXkubGluZSksIHZhbHVlLCBrZXkubGluZSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKHRoaXMucGVlaygpLCBgU3RyaW5nLCBOdW1iZXIgb3IgSWRlbnRpZmllciBleHBlY3RlZCBhcyBhIEtleSBvZiBEaWN0aW9uYXJ5IHssIHVuZXhwZWN0ZWQgdG9rZW4gJHt0aGlzLnBlZWsoKS5sZXhlbWV9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkNvbW1hKSk7XG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuUmlnaHRCcmFjZSwgYEV4cGVjdGVkIFwifVwiIGFmdGVyIG9iamVjdCBsaXRlcmFsYCk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBFeHByLkRpY3Rpb25hcnkocHJvcGVydGllcywgbGVmdEJyYWNlLmxpbmUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbGlzdCgpOiBFeHByLkV4cHIge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBbXTtcbiAgICAgICAgY29uc3QgbGVmdEJyYWNrZXQgPSB0aGlzLnByZXZpb3VzKCk7XG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5SaWdodEJyYWNrZXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGlzdChbXSwgdGhpcy5wcmV2aW91cygpLmxpbmUpO1xuICAgICAgICB9XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKHRoaXMuZXhwcmVzc2lvbigpKTtcbiAgICAgICAgfSB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuQ29tbWEpKTtcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5SaWdodEJyYWNrZXQsIGBFeHBlY3RlZCBcIl1cIiBhZnRlciBhcnJheSBkZWNsYXJhdGlvbmApO1xuXG4gICAgICAgIHJldHVybiBuZXcgRXhwci5MaXN0KHZhbHVlcywgbGVmdEJyYWNrZXQubGluZSk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vdHlwZXMvdHlwZS5lbnVtJztcbmltcG9ydCB7ICROdWxsIH0gZnJvbSAnLi90eXBlcy9udWxsJztcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL3R5cGVzL2FueSc7XG5pbXBvcnQgeyAkQ2FsbGFibGUgfSBmcm9tICcuL3R5cGVzL2Z1bmN0aW9uJztcbmltcG9ydCB7ICRCb29sZWFuIH0gZnJvbSAnLi90eXBlcy9ib29sZWFuJztcbmltcG9ydCB7ICRMaXN0IH0gZnJvbSAnLi90eXBlcy9saXN0JztcbmltcG9ydCB7ICROdW1iZXIgfSBmcm9tICcuL3R5cGVzL251bWJlcic7XG5pbXBvcnQgeyAkU3RyaW5nIH0gZnJvbSAnLi90eXBlcy9zdHJpbmcnO1xuaW1wb3J0IHsgJFZvaWQgfSBmcm9tICcuL3R5cGVzL3ZvaWQnO1xuaW1wb3J0IHsgJFJlZ0V4cCB9IGZyb20gJy4vdHlwZXMvcmVnZXgnO1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbUphdmFTY3JpcHRNZXRob2QoanNOYW1lOiBzdHJpbmcsIGFyaXR5OiBudW1iZXIsIHR5cGU6IERhdGFUeXBlKTogJENhbGxhYmxlIHtcbiAgICByZXR1cm4gbmV3ICRDYWxsYWJsZShqc05hbWUsIGFyaXR5LCAodGhpejogJEFueSwgYXJnczogJEFueVtdKTogJEFueSA9PiB7XG4gICAgICAgIGNvbnN0IGFyZ1ZhbHVlcyA9IGFyZ3MubWFwKChhcmc6ICRBbnkpID0+IGFyZy52YWx1ZSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXoudmFsdWVbanNOYW1lXSguLi5hcmdWYWx1ZXMpO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgRGF0YVR5cGUuQm9vbGVhbjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKHJlc3VsdCk7XG4gICAgICAgICAgICBjYXNlIERhdGFUeXBlLlN0cmluZzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICRTdHJpbmcocmVzdWx0KTtcbiAgICAgICAgICAgIGNhc2UgRGF0YVR5cGUuTnVtYmVyOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJE51bWJlcihyZXN1bHQpO1xuICAgICAgICAgICAgY2FzZSBEYXRhVHlwZS5MaXN0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJExpc3QocmVzdWx0KTtcbiAgICAgICAgICAgIGNhc2UgRGF0YVR5cGUuTnVsbDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICROdWxsKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJEFueShyZXN1bHQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tSmF2YVNjcmlwdEZ1bmNOdW1iZXIoZnVuYzogKC4uLmFyZ3o6IGFueSkgPT4gYW55LCBuYW1lOiBzdHJpbmcsIGFyaXR5OiBudW1iZXIpOiAkQ2FsbGFibGUge1xuICAgIHJldHVybiBuZXcgJENhbGxhYmxlKG5hbWUsIGFyaXR5LCAodGhpejogJEFueSwgYXJnczogJEFueVtdKTogJEFueSA9PiB7XG4gICAgICAgIGNvbnN0IGFyZ1ZhbHVlcyA9IGFyZ3MubWFwKChhcmc6ICRBbnkpID0+IGFyZy52YWx1ZSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGZ1bmMoLi4uYXJnVmFsdWVzKTtcbiAgICAgICAgcmV0dXJuIG5ldyAkTnVtYmVyKHJlc3VsdCk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tSmF2YVNjcmlwdEZ1bmNWb2lkKGZ1bmM6ICguLi5hcmd6OiBhbnkpID0+IGFueSwgbmFtZTogc3RyaW5nLCBhcml0eTogbnVtYmVyKTogJENhbGxhYmxlIHtcbiAgICByZXR1cm4gbmV3ICRDYWxsYWJsZShuYW1lLCBhcml0eSwgKHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSk6ICRBbnkgPT4ge1xuICAgICAgICBjb25zdCBhcmdWYWx1ZXMgPSBhcmdzLm1hcCgoYXJnOiAkQW55KSA9PiBhcmcudmFsdWUpO1xuICAgICAgICBmdW5jKC4uLmFyZ1ZhbHVlcyk7XG4gICAgICAgIHJldHVybiBuZXcgJFZvaWQoJ3ZvaWQnKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IFJ1bnRpbWUgPSB7XG4gICAgQ29uc29sZTogIG5ldyBNYXA8c3RyaW5nLCAkQW55PihbXG4gICAgICAgIFsnbG9nJywgZnJvbUphdmFTY3JpcHRGdW5jVm9pZChjb25zb2xlLmxvZywgJ2NvbnNvbGUubG9nJywgLTEpXSxcbiAgICAgICAgWyd3YXJuJywgZnJvbUphdmFTY3JpcHRGdW5jVm9pZChjb25zb2xlLndhcm4sICdjb25zb2xlLndhcm4nLCAtMSldLFxuICAgICAgICBbJ2luZm8nLCBmcm9tSmF2YVNjcmlwdEZ1bmNWb2lkKGNvbnNvbGUuaW5mbywgJ2NvbnNvbGUuaW5mbycsIC0xKV0sXG4gICAgICAgIFsnZXJyb3InLCBmcm9tSmF2YVNjcmlwdEZ1bmNWb2lkKGNvbnNvbGUuZXJyb3IsICdjb25zb2xlLmVycm9yJywgLTEpXVxuICAgIF0pLFxuICAgIE1hdGg6ICBuZXcgTWFwPHN0cmluZywgJEFueT4oW1xuICAgICAgICBbJ2NlaWwnLCBmcm9tSmF2YVNjcmlwdEZ1bmNOdW1iZXIoTWF0aC5jZWlsLCAnY2VpbCcsIDEpXSxcbiAgICAgICAgWydjb3MnLCBmcm9tSmF2YVNjcmlwdEZ1bmNOdW1iZXIoTWF0aC5jb3MsICdjb3MnLCAxKV0sXG4gICAgICAgIFsnZmxvb3InLCBmcm9tSmF2YVNjcmlwdEZ1bmNOdW1iZXIoTWF0aC5mbG9vciwgJ2Zsb29yJywgMSldLFxuICAgICAgICBbJ2xvZycsIGZyb21KYXZhU2NyaXB0RnVuY051bWJlcihNYXRoLmxvZywgJ2xvZycsIDEpXSxcbiAgICAgICAgWydtYXgnLCBmcm9tSmF2YVNjcmlwdEZ1bmNOdW1iZXIoTWF0aC5tYXgsICdtYXgnLCAtMSldLFxuICAgICAgICBbJ21pbicsIGZyb21KYXZhU2NyaXB0RnVuY051bWJlcihNYXRoLm1pbiwgJ21pbicsIC0xKV0sXG4gICAgICAgIFsncGknLCBuZXcgJE51bWJlcihNYXRoLlBJKV0sXG4gICAgICAgIFsncG93JywgZnJvbUphdmFTY3JpcHRGdW5jTnVtYmVyKE1hdGgucG93LCAncG93JywgMildLFxuICAgICAgICBbJ3JhbmRvbScsIGZyb21KYXZhU2NyaXB0RnVuY051bWJlcihNYXRoLnJhbmRvbSwgJ3JhbmRvbScsIDApXSxcbiAgICAgICAgWydyb3VuZCcsIGZyb21KYXZhU2NyaXB0RnVuY051bWJlcihNYXRoLnJvdW5kLCAncm91bmQnLCAxKV0sXG4gICAgICAgIFsnc2luJywgZnJvbUphdmFTY3JpcHRGdW5jTnVtYmVyKE1hdGguc2luLCAnc2luJywgMSldLFxuICAgICAgICBbJ3NxcnQnLCBmcm9tSmF2YVNjcmlwdEZ1bmNOdW1iZXIoTWF0aC5zcXJ0LCAnc3FydCcsIDEpXSxcbiAgICAgICAgWyd0YW4nLCBmcm9tSmF2YVNjcmlwdEZ1bmNOdW1iZXIoTWF0aC50YW4sICd0YW4nLCAxKV0sXG4gICAgICAgIFsndHJ1bmMnLCBmcm9tSmF2YVNjcmlwdEZ1bmNOdW1iZXIoTWF0aC50cnVuYywgJ3RydW5jJywgMSldXG4gICAgXSksXG4gICAgVXRpbHM6IG5ldyBNYXA8c3RyaW5nLCAkQW55PihbXG4gICAgICAgIFsncmUnLCBuZXcgJENhbGxhYmxlKCdyZWdleCcsIC0xLCAodGhpejogJEFueSwgYXJnczogJEFueVtdKTogJEFueSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBhcmdzLm1hcCgoYXJnKSA9PiBhcmcudmFsdWUpO1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICRSZWdFeHAobmV3IFJlZ0V4cCh2YWx1ZXNbMF0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgJFJlZ0V4cChuZXcgUmVnRXhwKHZhbHVlc1swXSwgdmFsdWVzWzFdKSk7XG4gICAgICAgIH0pXVxuICAgIF0pXG59O1xuIiwiaW1wb3J0IHsgVG9rZW4sIFRva2VuVHlwZSB9IGZyb20gJy4vdG9rZW4nO1xuaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gJy4vY29uc29sZSc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7ICRFcnJvciB9IGZyb20gJy4vdHlwZXMvZXJyb3InO1xuZGVjbGFyZSB2YXIgY29uem9sZTogQ29uc29sZTtcblxuZXhwb3J0IGNsYXNzIFNjYW5uZXIge1xuICAgIC8qKiBzY3JpcHRzIHNvdXJjZSBjb2RlICovXG4gICAgcHVibGljIHNvdXJjZTogc3RyaW5nO1xuICAgIC8qKiBjb250YWluZXMgdGhlIHNvdXJjZSBjb2RlIHJlcHJlc2VudGVkIGFzIGxpc3Qgb2YgdG9rZW5zICovXG4gICAgcHVibGljIHRva2VuczogVG9rZW5bXTtcbiAgICAvKiogTGlzdCBvZiBlcnJvcnMgZnJvbSBzY2FubmluZyAqL1xuICAgIHB1YmxpYyBlcnJvcnM6IHN0cmluZ1tdO1xuICAgIC8qKiBwb2ludHMgdG8gdGhlIGN1cnJlbnQgY2hhcmFjdGVyIGJlaW5nIHRva2VuaXplZCAqL1xuICAgIHByaXZhdGUgY3VycmVudDogbnVtYmVyO1xuICAgIC8qKiBwb2ludHMgdG8gdGhlIHN0YXJ0IG9mIHRoZSB0b2tlbiBmcmFzZSAqL1xuICAgIHByaXZhdGUgc3RhcnQ6IG51bWJlcjtcbiAgICAvKiogY3VycmVudCBsaW5lIG9mIHNvdXJjZSBjb2RlIGJpZW5nIHRva2VuaXplZCAqL1xuICAgIHByaXZhdGUgbGluZTogbnVtYmVyO1xuICAgIC8qKiBjdXJyZW50IGNvbHVtbiBvZiB0aGUgY2hhcmFjdGVyIGJlaW5nIHRva2VuaXplZCAqL1xuICAgIHByaXZhdGUgY29sOiBudW1iZXI7XG5cbiAgICBwdWJsaWMgc2Nhbihzb3VyY2U6IHN0cmluZyk6IFRva2VuW10ge1xuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgICAgdGhpcy50b2tlbnMgPSBbXTtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gMDtcbiAgICAgICAgdGhpcy5zdGFydCA9IDA7XG4gICAgICAgIHRoaXMubGluZSA9IDE7XG4gICAgICAgIHRoaXMuY29sID0gMTtcblxuICAgICAgICB3aGlsZSAoIXRoaXMuZW9mKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnQgPSB0aGlzLmN1cnJlbnQ7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VG9rZW4oKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKGUubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZXJyb3JzLmxlbmd0aCA+IDEwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKCdFcnJvciBsaW1pdCBleGNlZWRlZCcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2gobmV3IFRva2VuKFRva2VuVHlwZS5Fb2YsICcnLCBudWxsLCB0aGlzLmxpbmUsIDApKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICAgIH1cblxuICAgIHByaXZhdGUgZW9mKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50ID49IHRoaXMuc291cmNlLmxlbmd0aDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkdmFuY2UoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMucGVlaygpID09PSAnXFxuJykge1xuICAgICAgICAgICAgdGhpcy5saW5lKys7XG4gICAgICAgICAgICB0aGlzLmNvbCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50Kys7XG4gICAgICAgIHRoaXMuY29sKys7XG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5jaGFyQXQodGhpcy5jdXJyZW50IC0gMSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRUb2tlbih0b2tlblR5cGU6IFRva2VuVHlwZSwgbGl0ZXJhbDogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRleHQgPSB0aGlzLnNvdXJjZS5zdWJzdHJpbmcodGhpcy5zdGFydCwgdGhpcy5jdXJyZW50KTtcbiAgICAgICAgdGhpcy50b2tlbnMucHVzaChuZXcgVG9rZW4odG9rZW5UeXBlLCB0ZXh0LCBsaXRlcmFsLCB0aGlzLmxpbmUsIHRoaXMuY29sKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtYXRjaChleHBlY3RlZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmVvZigpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zb3VyY2UuY2hhckF0KHRoaXMuY3VycmVudCkgIT09IGV4cGVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN1cnJlbnQrKztcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwZWVrKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmVvZigpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1xcMCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLmNoYXJBdCh0aGlzLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcGVla05leHQoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudCArIDEgPj0gdGhpcy5zb3VyY2UubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1xcMCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLmNoYXJBdCh0aGlzLmN1cnJlbnQgKyAxKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbW1lbnQoKTogdm9pZCB7XG4gICAgICAgIHdoaWxlICh0aGlzLnBlZWsoKSAhPT0gJ1xcbicgJiYgIXRoaXMuZW9mKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtdWx0aWxpbmVDb21tZW50KCk6IHZvaWQge1xuICAgICAgICB3aGlsZSAoIXRoaXMuZW9mKCkgJiYgISh0aGlzLnBlZWsoKSA9PT0gJyonICYmIHRoaXMucGVla05leHQoKSA9PT0gJy8nKSkge1xuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZW9mKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoJ1VudGVybWluYXRlZCBjb21tZW50LCBleHBlY3RpbmcgY2xvc2luZyBcIiovXCInKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRoZSBjbG9zaW5nIHNsYXNoICcqLydcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0cmluZyhxdW90ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHdoaWxlICh0aGlzLnBlZWsoKSAhPT0gcXVvdGUgJiYgIXRoaXMuZW9mKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVW50ZXJtaW5hdGVkIHN0cmluZy5cbiAgICAgICAgaWYgKHRoaXMuZW9mKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoYFVudGVybWluYXRlZCBzdHJpbmcsIGV4cGVjdGluZyBjbG9zaW5nICR7cXVvdGV9YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgY2xvc2luZyBcIi5cbiAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG5cbiAgICAgICAgLy8gVHJpbSB0aGUgc3Vycm91bmRpbmcgcXVvdGVzLlxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc291cmNlLnN1YnN0cmluZyh0aGlzLnN0YXJ0ICsgMSwgdGhpcy5jdXJyZW50IC0gMSk7XG4gICAgICAgIHRoaXMuYWRkVG9rZW4ocXVvdGUgIT09ICdgJyA/IFRva2VuVHlwZS5TdHJpbmcgOiBUb2tlblR5cGUuVGVtcGxhdGUsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG51bWJlcigpOiB2b2lkIHtcbiAgICAgICAgLy8gZ2V0cyBpbnRlZ2VyIHBhcnRcbiAgICAgICAgd2hpbGUgKFV0aWxzLmlzRGlnaXQodGhpcy5wZWVrKCkpKSB7XG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrcyBmb3IgZnJhY3Rpb25cbiAgICAgICAgaWYgKHRoaXMucGVlaygpID09PSAnLicgJiYgVXRpbHMuaXNEaWdpdCh0aGlzLnBlZWtOZXh0KCkpKSB7XG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGdldHMgZnJhY3Rpb24gcGFydFxuICAgICAgICB3aGlsZSAoVXRpbHMuaXNEaWdpdCh0aGlzLnBlZWsoKSkpIHtcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2tzIGZvciBleHBvbmVudFxuICAgICAgICBpZiAodGhpcy5wZWVrKCkudG9Mb3dlckNhc2UoKSA9PT0gJ2UnKSB7XG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoKSA9PT0gJy0nIHx8IHRoaXMucGVlaygpID09PSAnKycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChVdGlscy5pc0RpZ2l0KHRoaXMucGVlaygpKSkge1xuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc291cmNlLnN1YnN0cmluZyh0aGlzLnN0YXJ0ICwgdGhpcy5jdXJyZW50KTtcbiAgICAgICAgdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuTnVtYmVyLCBOdW1iZXIodmFsdWUpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlkZW50aWZpZXIoKTogdm9pZCB7XG4gICAgICAgIHdoaWxlIChVdGlscy5pc0FscGhhTnVtZXJpYyh0aGlzLnBlZWsoKSkpIHtcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNvdXJjZS5zdWJzdHJpbmcodGhpcy5zdGFydCwgdGhpcy5jdXJyZW50KTtcbiAgICAgICAgY29uc3QgY2FwaXRhbGl6ZWQgPSBVdGlscy5jYXBpdGFsaXplKHZhbHVlKTtcbiAgICAgICAgaWYgKFV0aWxzLmlzS2V5d29yZChjYXBpdGFsaXplZCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlW2NhcGl0YWxpemVkXSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuSWRlbnRpZmllciwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRUb2tlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY2hhciA9IHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICBzd2l0Y2ggKGNoYXIpIHtcbiAgICAgICAgICAgIGNhc2UgJygnOiB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5MZWZ0UGFyZW4sIG51bGwpOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyknOiB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5SaWdodFBhcmVuLCBudWxsKTsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdbJzogdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuTGVmdEJyYWNrZXQsIG51bGwpOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ10nOiB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5SaWdodEJyYWNrZXQsIG51bGwpOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3snOiB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5MZWZ0QnJhY2UsIG51bGwpOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ30nOiB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5SaWdodEJyYWNlLCBudWxsKTsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcsJzogdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuQ29tbWEsIG51bGwpOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJy4nOiB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5Eb3QsIG51bGwpOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJzsnOiB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5TZW1pY29sb24sIG51bGwpOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ14nOiB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5DYXJldCwgbnVsbCk7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnOic6IHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLkNvbG9uLCBudWxsKTsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICckJzogdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuRG9sbGFyLCBudWxsKTsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdAJzogdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuRnVuY3Rpb24sICdAJyk7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnKic6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnPScpID8gVG9rZW5UeXBlLlN0YXJFcXVhbCA6IFRva2VuVHlwZS5TdGFyLCBudWxsKTsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICclJzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCc9JykgPyBUb2tlblR5cGUuUGVyY2VudEVxdWFsIDogVG9rZW5UeXBlLlBlcmNlbnQsIG51bGwpOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3wnOiB0aGlzLmFkZFRva2VuKHRoaXMubWF0Y2goJ3wnKSA/IFRva2VuVHlwZS5PciA6IFRva2VuVHlwZS5QaXBlLCBudWxsKTsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcmJzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCcmJykgPyBUb2tlblR5cGUuQW5kIDogVG9rZW5UeXBlLkFtcGVyc2FuZCwgbnVsbCk7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPCc6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnPScpID8gVG9rZW5UeXBlLkxlc3NFcXVhbCA6IFRva2VuVHlwZS5MZXNzLCBudWxsKTsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc+JzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCc9JykgPyBUb2tlblR5cGUuR3JlYXRlckVxdWFsIDogVG9rZW5UeXBlLkdyZWF0ZXIsIG51bGwpOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyEnOiB0aGlzLmFkZFRva2VuKHRoaXMubWF0Y2goJz0nKSA/IFRva2VuVHlwZS5CYW5nRXF1YWwgOiBUb2tlblR5cGUuQmFuZywgbnVsbCk7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPyc6IHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnPycpID8gVG9rZW5UeXBlLlF1ZXN0aW9uUXVlc3Rpb24gOiB0aGlzLm1hdGNoKCcuJykgPyBUb2tlblR5cGUuUXVlc3Rpb25Eb3QgOiBUb2tlblR5cGUuUXVlc3Rpb24sIG51bGwpOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz0nOiB0aGlzLmFkZFRva2VuKHRoaXMubWF0Y2goJz0nKSA/IFRva2VuVHlwZS5FcXVhbEVxdWFsIDogdGhpcy5tYXRjaCgnPicpID8gVG9rZW5UeXBlLkFycm93IDogVG9rZW5UeXBlLkVxdWFsLCBudWxsKTsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcrJzogdGhpcy5hZGRUb2tlbih0aGlzLm1hdGNoKCcrJykgPyBUb2tlblR5cGUuUGx1c1BsdXMgOiB0aGlzLm1hdGNoKCc9JykgPyBUb2tlblR5cGUuUGx1c0VxdWFsIDogVG9rZW5UeXBlLlBsdXMsIG51bGwpOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJy0nOiB0aGlzLmFkZFRva2VuKHRoaXMubWF0Y2goJy0nKSA/IFRva2VuVHlwZS5NaW51c01pbnVzIDogdGhpcy5tYXRjaCgnPicpID8gVG9rZW5UeXBlLlJldHVybiA6IHRoaXMubWF0Y2goJz0nKSA/IFRva2VuVHlwZS5NaW51c0VxdWFsIDogVG9rZW5UeXBlLk1pbnVzLCBudWxsKTsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXRjaCgnLycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXRjaCgnKicpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlsaW5lQ29tbWVudCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4odGhpcy5tYXRjaCgnPScpID8gVG9rZW5UeXBlLlNsYXNoRXF1YWwgOiBUb2tlblR5cGUuU2xhc2gsIG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYCdgOlxuICAgICAgICAgICAgY2FzZSBgXCJgOlxuICAgICAgICAgICAgY2FzZSAnYCc6XG4gICAgICAgICAgICAgICAgdGhpcy5zdHJpbmcoY2hhcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBpZ25vcmUgY2FzZXNcbiAgICAgICAgICAgIGNhc2UgJ1xcbic6XG4gICAgICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgICAgIGNhc2UgJ1xccic6XG4gICAgICAgICAgICBjYXNlICdcXHQnOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gY29tcGV4IGNhc2VzXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmIChVdGlscy5pc0RpZ2l0KGNoYXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChVdGlscy5pc0FscGhhKGNoYXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWRlbnRpZmllcigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoYFVuZXhwZWN0ZWQgY2hhcmFjdGVyICcke2NoYXJ9J2ApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZXJyb3IobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgU2NhbiBFcnJvciAoJHt0aGlzLmxpbmV9OiR7dGhpcy5jb2x9KSA9PiAke21lc3NhZ2V9YCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBUb2tlbiB9IGZyb20gJy4vdG9rZW4nO1xuaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gJy4vY29uc29sZSc7XG5pbXBvcnQgeyAkQW55IH0gZnJvbSAnLi90eXBlcy9hbnknO1xuaW1wb3J0IHsgJE51bGwgfSBmcm9tICcuL3R5cGVzL251bGwnO1xuZGVjbGFyZSB2YXIgY29uem9sZTogQ29uc29sZTtcblxuZXhwb3J0IGNsYXNzIFNjb3BlIHtcblxuICAgIHByaXZhdGUgdmFsdWVzOiBNYXA8c3RyaW5nLCBhbnk+O1xuICAgIHByaXZhdGUgcGFyZW50OiBTY29wZTtcblxuICAgIGNvbnN0cnVjdG9yKHBhcmVudDogU2NvcGUgPSBudWxsKSB7XG4gICAgICAgIHRoaXMudmFsdWVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJ1bnRpbWUgRXJyb3IgPT4gJHttZXNzYWdlfWApO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogJEFueSkge1xuICAgICAgICB0aGlzLnZhbHVlcy5zZXQobmFtZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWZpbmUobmFtZTogc3RyaW5nLCB2YWx1ZTogJEFueSkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZXMuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKGBJZGVudGlmaWVyIFwiJHtuYW1lfVwiIGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZGApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXQobmFtZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFzc2lnbihuYW1lOiBzdHJpbmcsIHZhbHVlOiAkQW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlcy5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5hc3NpZ24obmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lcnJvcihgSWRlbnRpZmllciBcIiR7bmFtZX1cIiBoYXMgbm90IGJlZW4gZGVmaW5lZGApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldChrZXk6IHN0cmluZywgdG9rZW46IFRva2VuID0gbnVsbCk6ICRBbnkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5nZXQoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wYXJlbnQgIT09IG51bGwgKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ2V0KGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoYCBhdCAoJHt0b2tlbi5saW5lfToke3Rva2VuLmNvbH0pID0+IFwiJHt0b2tlbi5sZXhlbWV9XCIgaXMgbm90IGRlZmluZWRgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoYFwiJHtrZXl9XCIgaXMgbm90IGRlZmluZWRgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3ICROdWxsKCk7XG4gICAgfVxuXG59XG4iLCJleHBvcnQgZW51bSBUb2tlblR5cGUge1xuICAgIC8vIFBhcnNlciBUb2tlbnNcbiAgICBFb2YsXG4gICAgUGFuaWMsXG4gICAgTGFtYmRhLFxuXG4gICAgLy8gU2luZ2xlIENoYXJhY3RlciBUb2tlbnNcbiAgICBBbXBlcnNhbmQsXG4gICAgQXRTaWduLFxuICAgIENhcmV0LFxuICAgIENvbW1hLFxuICAgIERvbGxhcixcbiAgICBEb3QsXG4gICAgSGFzaCxcbiAgICBMZWZ0QnJhY2UsXG4gICAgTGVmdEJyYWNrZXQsXG4gICAgTGVmdFBhcmVuLFxuICAgIFBlcmNlbnQsXG4gICAgUGlwZSxcbiAgICBSaWdodEJyYWNlLFxuICAgIFJpZ2h0QnJhY2tldCxcbiAgICBSaWdodFBhcmVuLFxuICAgIFNlbWljb2xvbixcbiAgICBTbGFzaCxcbiAgICBTdGFyLFxuXG4gICAgLy8gT25lIE9yIFR3byBDaGFyYWN0ZXIgVG9rZW5zXG4gICAgQXJyb3csXG4gICAgQmFuZyxcbiAgICBCYW5nRXF1YWwsXG4gICAgQ29sb24sXG4gICAgRXF1YWwsXG4gICAgRXF1YWxFcXVhbCxcbiAgICBHcmVhdGVyLFxuICAgIEdyZWF0ZXJFcXVhbCxcbiAgICBMZXNzLFxuICAgIExlc3NFcXVhbCxcbiAgICBNaW51cyxcbiAgICBNaW51c0VxdWFsLFxuICAgIE1pbnVzTWludXMsXG4gICAgUGVyY2VudEVxdWFsLFxuICAgIFBsdXMsXG4gICAgUGx1c0VxdWFsLFxuICAgIFBsdXNQbHVzLFxuICAgIFF1ZXN0aW9uLFxuICAgIFF1ZXN0aW9uRG90LFxuICAgIFF1ZXN0aW9uUXVlc3Rpb24sXG4gICAgU2xhc2hFcXVhbCxcbiAgICBTdGFyRXF1YWwsXG5cbiAgICAvLyBMaXRlcmFsc1xuICAgIElkZW50aWZpZXIsXG4gICAgVGVtcGxhdGUsXG4gICAgU3RyaW5nLFxuICAgIE51bWJlcixcbiAgICBSZWdleCxcblxuICAgIC8vIEtleXdvcmRzXG4gICAgQW5kLFxuICAgIEJyZWFrLFxuICAgIEJhc2UsXG4gICAgQ2xhc3MsXG4gICAgQ29udGludWUsXG4gICAgRG8sXG4gICAgRWxzZSxcbiAgICBFeHRlbmRzLFxuICAgIEZhbHNlLFxuICAgIEZvcixcbiAgICBGdW5jdGlvbixcbiAgICBJZixcbiAgICBJbixcbiAgICBJbnN0YW5jZW9mLFxuICAgIElzLFxuICAgIE5ldyxcbiAgICBOdWxsLFxuICAgIE9yLFxuICAgIFByaW50LFxuICAgIFJldHVybixcbiAgICBUcnVlLFxuICAgIFR5cGVvZixcbiAgICBWYXIsXG4gICAgVm9pZCxcbiAgICBXaGlsZVxufVxuXG5leHBvcnQgY2xhc3MgVG9rZW4ge1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIGxpbmU6IG51bWJlcjtcbiAgICBwdWJsaWMgY29sOiBudW1iZXI7XG4gICAgcHVibGljIHR5cGU6IFRva2VuVHlwZTtcbiAgICBwdWJsaWMgbGl0ZXJhbDogYW55O1xuICAgIHB1YmxpYyBsZXhlbWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHR5cGU6IFRva2VuVHlwZSwgbGV4ZW1lOiBzdHJpbmcsIGxpdGVyYWw6IGFueSwgbGluZTogbnVtYmVyLCBjb2w6IG51bWJlcikge1xuICAgICAgICB0aGlzLm5hbWUgPSBUb2tlblR5cGVbdHlwZV07XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMubGV4ZW1lID0gbGV4ZW1lO1xuICAgICAgICB0aGlzLmxpdGVyYWwgPSBsaXRlcmFsO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgICAgICB0aGlzLmNvbCA9IGNvbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgWygke3RoaXMubGluZX0pOlwiJHt0aGlzLmxleGVtZX1cIl1gO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gJy4uL2NvbnNvbGUnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGUuZW51bSc7XG5kZWNsYXJlIHZhciBjb256b2xlOiBDb25zb2xlO1xuXG5leHBvcnQgY2xhc3MgJEFueSB7XG5cbiAgICBwdWJsaWMgdmFsdWU6IGFueTtcbiAgICBwdWJsaWMgdHlwZSA9IERhdGFUeXBlLkFueTtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBhbnksIHR5cGU6IERhdGFUeXBlID0gRGF0YVR5cGUuQW55KSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNTdHJpbmcoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IERhdGFUeXBlLlN0cmluZztcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNOdWxsKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBEYXRhVHlwZS5OdWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0Jvb2xlYW4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IERhdGFUeXBlLkJvb2xlYW47XG4gICAgfVxuXG4gICAgcHVibGljIGlzTnVtYmVyKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBEYXRhVHlwZS5OdW1iZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGlzUmFuZ2UoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IERhdGFUeXBlLlJhbmdlO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0Z1bmN0aW9uKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBEYXRhVHlwZS5GdW5jdGlvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNDbGFzcygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gRGF0YVR5cGUuQ2xhc3M7XG4gICAgfVxuXG4gICAgcHVibGljIGlzTGFtYmRhKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBEYXRhVHlwZS5GdW5jdGlvbiAmJiAodGhpcyBhcyBhbnkpLm5hbWUgPT09ICdAJztcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNMaXN0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBEYXRhVHlwZS5MaXN0O1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0RpY3Rpb25hcnkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IERhdGFUeXBlLkRpY3Rpb25hcnk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzT2JqZWN0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBEYXRhVHlwZS5PYmplY3Q7XG4gICAgfVxuXG4gICAgcHVibGljIGlzVHJ1dGh5KCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5pc051bGwoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzQm9vbGVhbigpKSB7XG4gICAgICAgICAgICByZXR1cm4gQm9vbGVhbih0aGlzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc051bWJlcigpICYmIHRoaXMudmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc1N0cmluZygpICYmIHRoaXMudmFsdWUudG9TdHJpbmcoKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0xpc3QoKSAmJiB0aGlzLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzRGljdGlvbmFyeSgpICYmIHRoaXMudmFsdWUuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIGVycm9yIHZhbHVlIEFueSBpcyBudWxsXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy52YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gZXJyb3IgdmFsdWUgQW55IGlzIHVuZGVmaW5lZFwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNFcXVhbChvdGhlcjogJEFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA9PT0gb3RoZXIudmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGlzS2V5VmFsdWUoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09IERhdGFUeXBlLkNsYXNzIHx8XG4gICAgICAgICAgICB0aGlzLnR5cGUgPT09IERhdGFUeXBlLkRpY3Rpb25hcnkgfHxcbiAgICAgICAgICAgIHRoaXMudHlwZSA9PT0gRGF0YVR5cGUuT2JqZWN0XG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQoa2V5OiAkQW55KTogJEFueSB7XG4gICAgICAgIGNvbnpvbGUuZXJyb3IoYGtleSAke2tleX0gZG9lcyBub3QgZXhpc3QgaW4gJHt0aGlzfWApO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvciBpbiBBbnkgZ2V0dGVyXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQoa2V5OiAkQW55LCB2YWx1ZTogJEFueSk6ICRBbnkge1xuICAgICAgICBjb256b2xlLmVycm9yKGBrZXkgJHtrZXl9IGRvZXMgbm90IGV4aXN0IGluICR7dGhpc31gKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgaW4gQW55IHNldHRlclwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vdHlwZS5lbnVtJztcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL2FueSc7XG5cbmV4cG9ydCBjbGFzcyAkQm9vbGVhbiBleHRlbmRzICRBbnkge1xuXG4gICAgcHVibGljIHZhbHVlOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIodmFsdWUsIERhdGFUeXBlLkJvb2xlYW4pO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGUuZW51bSc7XG5pbXBvcnQgeyAkQW55IH0gZnJvbSAnLi9hbnknO1xuaW1wb3J0IHsgJE51bGwgfSBmcm9tICcuL251bGwnO1xuaW1wb3J0IHsgJEJvb2xlYW4gfSBmcm9tICcuL2Jvb2xlYW4nO1xuXG5leHBvcnQgY2xhc3MgJENsYXNzIGV4dGVuZHMgJEFueSB7XG4gICAgcHVibGljIHZhbHVlOiBNYXA8c3RyaW5nLCAkQW55PjtcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyBwYXJlbnQ6ICRBbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHZhbHVlOiBNYXA8c3RyaW5nLCAkQW55PiwgcGFyZW50OiAkQW55KSB7XG4gICAgICAgIHN1cGVyKHZhbHVlLCBEYXRhVHlwZS5DbGFzcyk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQoa2V5OiAkQW55KTogJEFueSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlLmhhcyhrZXkudmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS5nZXQoa2V5LnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnBhcmVudC5pc0NsYXNzKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5nZXQoa2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgJE51bGwoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0KGtleTogJEFueSwgdmFsdWU6ICRBbnkpOiAkQW55IHtcbiAgICAgICAgdGhpcy52YWx1ZS5zZXQoa2V5LnZhbHVlLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGA8JHt0aGlzLm5hbWV9IGNsYXNzPmA7XG4gICAgfVxuXG59XG4iLCJcbmltcG9ydCB7IGZyb21KYXZhU2NyaXB0TWV0aG9kIH0gZnJvbSAnLi4vcnVudGltZSc7XG5pbXBvcnQgeyBJbnRlcnByZXRlciB9IGZyb20gJy4uL2ludGVycHJldGVyJztcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL2FueSc7XG5pbXBvcnQgeyAkRnVuY3Rpb24sICRDYWxsYWJsZSB9IGZyb20gJy4vZnVuY3Rpb24nO1xuaW1wb3J0IHsgJE51bGwgfSBmcm9tICcuL251bGwnO1xuaW1wb3J0IHsgJE51bWJlciB9IGZyb20gJy4vbnVtYmVyJztcbmltcG9ydCB7ICRTdHJpbmcgfSBmcm9tICcuL3N0cmluZyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vdHlwZS5lbnVtJztcbmltcG9ydCB7ICRCb29sZWFuIH0gZnJvbSAnLi9ib29sZWFuJztcbmltcG9ydCB7ICRJdGVyYXRvciB9IGZyb20gJy4vaXRlcmF0b3InO1xuaW1wb3J0IHsgJE9iamVjdCB9IGZyb20gJy4vb2JqZWN0JztcblxuZXhwb3J0IGNsYXNzICREaWN0aW9uYXJ5IGV4dGVuZHMgJEFueSB7XG4gICAgcHVibGljIHZhbHVlOiBNYXA8YW55LCAkQW55PjtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBNYXA8YW55LCAkQW55Pikge1xuICAgICAgICBzdXBlcih2YWx1ZSwgRGF0YVR5cGUuRGljdGlvbmFyeSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldChrZXk6ICRBbnkpOiBhbnkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZS5oYXMoa2V5LnZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUuZ2V0KGtleS52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoJERpY3Rpb25hcnkucnVudGltZS5oYXMoa2V5LnZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuICREaWN0aW9uYXJ5LnJ1bnRpbWUuZ2V0KGtleS52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3ICROdWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0KGtleTogJEFueSwgdmFsdWU6ICRBbnkpOiAkQW55IHtcbiAgICAgICAgdGhpcy52YWx1ZS5zZXQoa2V5LnZhbHVlLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgcmVzdWx0OiBhbnlbXSA9IFtdO1xuICAgICAgICB0aGlzLnZhbHVlLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGAke2tleS50b1N0cmluZygpfTogJHt2YWx1ZX1gKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBgeyR7cmVzdWx0LmpvaW4oJzsgJyl9fWA7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBlYWNoKHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSwgaW50ZXJwcmV0ZXI6IEludGVycHJldGVyKTogJEFueSB7XG4gICAgICAgIHRoaXoudmFsdWUuZm9yRWFjaCgodmFsdWU6ICRBbnksIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAoYXJnc1swXSBhcyAkRnVuY3Rpb24pLmNhbGwodGhpeiwgW3ZhbHVlLCBuZXcgJFN0cmluZyhrZXkpLCB0aGl6XSwgaW50ZXJwcmV0ZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXo7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBtYXAodGhpejogJEFueSwgYXJnczogJEFueVtdLCBpbnRlcnByZXRlcjogSW50ZXJwcmV0ZXIpOiAkQW55IHtcbiAgICAgICAgdGhpei52YWx1ZS5mb3JFYWNoKCh2YWx1ZTogJEFueSwga2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIHRoaXoudmFsdWUuc2V0KCdrZXknLCAoYXJnc1swXSBhcyAkRnVuY3Rpb24pLmNhbGwodGhpeiwgW3ZhbHVlLCBuZXcgJFN0cmluZyhrZXkpLCB0aGl6XSwgaW50ZXJwcmV0ZXIpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGl6O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaW5kZXhPZih0aGl6OiAkQW55LCBhcmdzOiAkQW55W10sIGludGVycHJldGVyOiBJbnRlcnByZXRlcik6ICRBbnkge1xuICAgICAgICBsZXQgaW5kZXg6IHN0cmluZyA9IG51bGw7XG4gICAgICAgIHRoaXoudmFsdWUuZm9yRWFjaCgodmFsdWU6ICRBbnksIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsdWUudHlwZSA9PT0gYXJnc1swXS50eXBlICYmIHZhbHVlLnZhbHVlID09PSBhcmdzWzBdLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgJFN0cmluZyhpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaXRlcmF0b3IodGhpejogJEFueSwgYXJnczogJEFueVtdLCBpbnRlcnByZXRlcjogSW50ZXJwcmV0ZXIpOiAkQW55IHtcbiAgICAgICAgcmV0dXJuIG5ldyAkSXRlcmF0b3IodGhpeik7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBuZXh0KHRoaXo6ICRBbnkpOiAkQW55IHtcbiAgICAgICAgY29uc3QgaXQgPSB0aGl6IGFzICRJdGVyYXRvcjtcbiAgICAgICAgY29uc3QgZGljdCA9IGl0LnZhbHVlIGFzICREaWN0aW9uYXJ5O1xuICAgICAgICAvLyBlbXB0eSBsaXN0XG4gICAgICAgIGlmICghZGljdC52YWx1ZS5zaXplKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3ICROdWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZmlyc3QgdmFsdWVcbiAgICAgICAgaWYgKGl0Lml0ZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGl0Lml0ZXIgPSBkaWN0LnZhbHVlLmtleXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5leHQgPSBpdC5pdGVyLm5leHQoKTtcbiAgICAgICAgLy8gbm8gbW9yZSB2YWx1ZXMgdG8gaXRlcmF0ZVxuICAgICAgICBpZiAobmV4dC5kb25lKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3ICROdWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3ICRTdHJpbmcobmV4dC52YWx1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBydW50aW1lID0gIG5ldyBNYXAoW1xuICAgICAgICBbJ2NsZWFyJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ2NsZWFyJywgMCwgRGF0YVR5cGUuTnVsbCldLFxuICAgICAgICBbJ2RlbGV0ZScsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCdkZWxldGUnLCAxLCBEYXRhVHlwZS5Cb29sZWFuKV0sXG4gICAgICAgIFsnZWFjaCcsIG5ldyAkQ2FsbGFibGUoJ2VhY2gnLCAxLCAkRGljdGlvbmFyeS5lYWNoKV0sXG4gICAgICAgIFsnaGFzJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ2hhcycsIDEsIERhdGFUeXBlLkJvb2xlYW4pXSxcbiAgICAgICAgWydpbmRleE9mJywgbmV3ICRDYWxsYWJsZSgnaW5kZXhPZicsIDEsICREaWN0aW9uYXJ5LmluZGV4T2YpXSxcbiAgICAgICAgWydtYXAnLCBuZXcgJENhbGxhYmxlKCdtYXAnLCAxLCAkRGljdGlvbmFyeS5tYXApXSxcbiAgICAgICAgWydtZXJnZScsIG5ldyAkQ2FsbGFibGUoJ21lcmdlJywgMSwgICh0aGl6OiAkQW55LCBhcmdzOiAkQW55W10pOiAkQW55ID0+IG5ldyAkRGljdGlvbmFyeShuZXcgTWFwKFsuLi4odGhpei52YWx1ZSksIC4uLihhcmdzWzBdLnZhbHVlKV0pKSldLFxuICAgICAgICBbJ3NpemUnLCBuZXcgJENhbGxhYmxlKCdzaXplJywgMCwgICh0aGl6OiAkQW55LCBhcmdzOiAkQW55W10pOiAkQW55ID0+IG5ldyAkTnVtYmVyKHRoaXoudmFsdWUuc2l6ZSkpXSxcbiAgICAgICAgWydpdGVyYXRvcicsIG5ldyAkQ2FsbGFibGUoJ2l0ZXJhdG9yJywgMCwgJERpY3Rpb25hcnkuaXRlcmF0b3IpXSxcbiAgICAgICAgWyduZXh0JywgbmV3ICRDYWxsYWJsZSgnbmV4dCcsIDAsICREaWN0aW9uYXJ5Lm5leHQpXVxuICAgIF0pO1xuXG59XG4iLCJpbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vdHlwZS5lbnVtJztcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL2FueSc7XG5cbmV4cG9ydCBjbGFzcyAkRXJyb3IgZXh0ZW5kcyAkQW55IHtcblxuICAgIHB1YmxpYyB2YWx1ZTogc3RyaW5nO1xuICAgIHB1YmxpYyBsaW5lOiBudW1iZXI7XG4gICAgcHVibGljIGNvbDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZywgbGluZTogbnVtYmVyLCBjb2w6IG51bWJlcikge1xuICAgICAgICBzdXBlcih2YWx1ZSwgRGF0YVR5cGUuRXJyb3IpO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgICAgICB0aGlzLmNvbCA9IGNvbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IFRva2VuLCBUb2tlblR5cGUgfSBmcm9tICd0b2tlbic7XG5pbXBvcnQgeyBTdG10IH0gZnJvbSAnc3RhdGVtZW50JztcbmltcG9ydCB7ICRBbnkgfSBmcm9tICdhbnknO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRXhwciB7XG4gICAgcHVibGljIHJlc3VsdDogYW55O1xuICAgIHB1YmxpYyBsaW5lOiBudW1iZXI7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgY29uc3RydWN0b3IoKSB7IH1cbiAgICBwdWJsaWMgYWJzdHJhY3QgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUjtcbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5leHBvcnQgaW50ZXJmYWNlIEV4cHJWaXNpdG9yPFI+IHtcbiAgICB2aXNpdEFzc2lnbkV4cHIoZXhwcjogQXNzaWduKTogUjtcbiAgICB2aXNpdEJhc2VFeHByKGV4cHI6IEJhc2UpOiBSO1xuICAgIHZpc2l0QmluYXJ5RXhwcihleHByOiBCaW5hcnkpOiBSO1xuICAgIHZpc2l0Q2FsbEV4cHIoZXhwcjogQ2FsbCk6IFI7XG4gICAgdmlzaXREaWN0aW9uYXJ5RXhwcihleHByOiBEaWN0aW9uYXJ5KTogUjtcbiAgICB2aXNpdEdldEV4cHIoZXhwcjogR2V0KTogUjtcbiAgICB2aXNpdEdyb3VwaW5nRXhwcihleHByOiBHcm91cGluZyk6IFI7XG4gICAgdmlzaXRJbkV4cHIoZXhwcjogSW4pOiBSO1xuICAgIHZpc2l0SW5zdGFuY2VPZkV4cHIoZXhwcjogSW5zdGFuY2VPZik6IFI7XG4gICAgdmlzaXRJc0V4cHIoZXhwcjogSXMpOiBSO1xuICAgIHZpc2l0S2V5RXhwcihleHByOiBLZXkpOiBSO1xuICAgIHZpc2l0TGFtYmRhRXhwcihleHByOiBMYW1iZGEpOiBSO1xuICAgIHZpc2l0TG9naWNhbEV4cHIoZXhwcjogTG9naWNhbCk6IFI7XG4gICAgdmlzaXRMaXN0RXhwcihleHByOiBMaXN0KTogUjtcbiAgICB2aXNpdExpdGVyYWxFeHByKGV4cHI6IExpdGVyYWwpOiBSO1xuICAgIHZpc2l0TmV3RXhwcihleHByOiBOZXcpOiBSO1xuICAgIHZpc2l0TnVsbENvYWxlc2NpbmdFeHByKGV4cHI6IE51bGxDb2FsZXNjaW5nKTogUjtcbiAgICB2aXNpdFBvc3RmaXhFeHByKGV4cHI6IFBvc3RmaXgpOiBSO1xuICAgIHZpc2l0UmFuZ2VFeHByKGV4cHI6IFJhbmdlKTogUjtcbiAgICB2aXNpdFJlZ0V4RXhwcihleHByOiBSZWdFeCk6IFI7XG4gICAgdmlzaXRTZXRFeHByKGV4cHI6IFNldCk6IFI7XG4gICAgdmlzaXRUZW1wbGF0ZUV4cHIoZXhwcjogVGVtcGxhdGUpOiBSO1xuICAgIHZpc2l0VGVybmFyeUV4cHIoZXhwcjogVGVybmFyeSk6IFI7XG4gICAgdmlzaXRUeXBlb2ZFeHByKGV4cHI6IFR5cGVvZik6IFI7XG4gICAgdmlzaXRVbmFyeUV4cHIoZXhwcjogVW5hcnkpOiBSO1xuICAgIHZpc2l0VmFyaWFibGVFeHByKGV4cHI6IFZhcmlhYmxlKTogUjtcbiAgICB2aXNpdFZvaWRFeHByKGV4cHI6IFZvaWQpOiBSO1xuICAgIHZpc2l0WnRyaW5nRXhwcihleHByOiBadHJpbmcpOiBSO1xufVxuXG5leHBvcnQgY2xhc3MgQXNzaWduIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIG5hbWU6IFRva2VuO1xuICAgIHB1YmxpYyB2YWx1ZTogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IFRva2VuLCB2YWx1ZTogRXhwciwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0QXNzaWduRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkFzc2lnbic7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmFzZSBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBwYXJlbjogVG9rZW47XG5cbiAgICBjb25zdHJ1Y3RvcihwYXJlbjogVG9rZW4sIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnBhcmVuID0gcGFyZW47XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEJhc2VFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuQmFzZSc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmluYXJ5IGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIGxlZnQ6IEV4cHI7XG4gICAgcHVibGljIG9wZXJhdG9yOiBUb2tlbjtcbiAgICBwdWJsaWMgcmlnaHQ6IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihsZWZ0OiBFeHByLCBvcGVyYXRvcjogVG9rZW4sIHJpZ2h0OiBFeHByLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEJpbmFyeUV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5CaW5hcnknO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhbGwgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgY2FsbGVlOiBFeHByO1xuICAgIHB1YmxpYyBwYXJlbjogVG9rZW47XG4gICAgcHVibGljIGFyZ3M6IEV4cHJbXTtcbiAgICBwdWJsaWMgdGhpejogJEFueTtcblxuICAgIGNvbnN0cnVjdG9yKGNhbGxlZTogRXhwciwgcGFyZW46IFRva2VuLCBhcmdzOiBFeHByW10sIHRoaXo6ICRBbnksIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNhbGxlZSA9IGNhbGxlZTtcbiAgICAgICAgdGhpcy5wYXJlbiA9IHBhcmVuO1xuICAgICAgICB0aGlzLmFyZ3MgPSBhcmdzO1xuICAgICAgICB0aGlzLnRoaXogPSB0aGl6O1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRDYWxsRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkNhbGwnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERpY3Rpb25hcnkgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgcHJvcGVydGllczogRXhwcltdO1xuXG4gICAgY29uc3RydWN0b3IocHJvcGVydGllczogRXhwcltdLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RGljdGlvbmFyeUV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5EaWN0aW9uYXJ5JztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHZXQgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgZW50aXR5OiBFeHByO1xuICAgIHB1YmxpYyBrZXk6IEV4cHI7XG4gICAgcHVibGljIHR5cGU6IFRva2VuVHlwZTtcblxuICAgIGNvbnN0cnVjdG9yKGVudGl0eTogRXhwciwga2V5OiBFeHByLCB0eXBlOiBUb2tlblR5cGUsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmVudGl0eSA9IGVudGl0eTtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEdldEV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5HZXQnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdyb3VwaW5nIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIGV4cHJlc3Npb246IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihleHByZXNzaW9uOiBFeHByLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0R3JvdXBpbmdFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuR3JvdXBpbmcnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEluIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIGtleTogRXhwcjtcbiAgICBwdWJsaWMgZW50aXR5OiBFeHByO1xuXG4gICAgY29uc3RydWN0b3Ioa2V5OiBFeHByLCBlbnRpdHk6IEV4cHIsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy5lbnRpdHkgPSBlbnRpdHk7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEluRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkluJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnN0YW5jZU9mIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIGxlZnQ6IEV4cHI7XG4gICAgcHVibGljIHJpZ2h0OiBUb2tlbjtcblxuICAgIGNvbnN0cnVjdG9yKGxlZnQ6IEV4cHIsIHJpZ2h0OiBUb2tlbiwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0SW5zdGFuY2VPZkV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5JbnN0YW5jZU9mJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJcyBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBsZWZ0OiBFeHByO1xuICAgIHB1YmxpYyByaWdodDogVG9rZW47XG5cbiAgICBjb25zdHJ1Y3RvcihsZWZ0OiBFeHByLCByaWdodDogVG9rZW4sIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdElzRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLklzJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLZXkgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgbmFtZTogVG9rZW47XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBUb2tlbiwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEtleUV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5LZXknO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExhbWJkYSBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBsYW1iZGE6IFN0bXQ7XG5cbiAgICBjb25zdHJ1Y3RvcihsYW1iZGE6IFN0bXQsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmxhbWJkYSA9IGxhbWJkYTtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TGFtYmRhRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkxhbWJkYSc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9naWNhbCBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBsZWZ0OiBFeHByO1xuICAgIHB1YmxpYyBvcGVyYXRvcjogVG9rZW47XG4gICAgcHVibGljIHJpZ2h0OiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IobGVmdDogRXhwciwgb3BlcmF0b3I6IFRva2VuLCByaWdodDogRXhwciwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRMb2dpY2FsRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkxvZ2ljYWwnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpc3QgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgdmFsdWU6IEV4cHJbXTtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBFeHByW10sIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdExpc3RFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuTGlzdCc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbCBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyB2YWx1ZTogJEFueTtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiAkQW55LCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRMaXRlcmFsRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkxpdGVyYWwnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5ldyBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBjbGF6ejogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKGNsYXp6OiBFeHByLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jbGF6eiA9IGNsYXp6O1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXROZXdFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuTmV3JztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOdWxsQ29hbGVzY2luZyBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBsZWZ0OiBFeHByO1xuICAgIHB1YmxpYyByaWdodDogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKGxlZnQ6IEV4cHIsIHJpZ2h0OiBFeHByLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXROdWxsQ29hbGVzY2luZ0V4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5OdWxsQ29hbGVzY2luZyc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUG9zdGZpeCBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBuYW1lOiBUb2tlbjtcbiAgICBwdWJsaWMgaW5jcmVtZW50OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBUb2tlbiwgaW5jcmVtZW50OiBudW1iZXIsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmluY3JlbWVudCA9IGluY3JlbWVudDtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UG9zdGZpeEV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5Qb3N0Zml4JztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSYW5nZSBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBzdGFydDogRXhwcjtcbiAgICBwdWJsaWMgZW5kOiBFeHByO1xuICAgIHB1YmxpYyBzdGVwOiBFeHByO1xuXG4gICAgY29uc3RydWN0b3Ioc3RhcnQ6IEV4cHIsIGVuZDogRXhwciwgc3RlcDogRXhwciwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgICAgICAgdGhpcy5lbmQgPSBlbmQ7XG4gICAgICAgIHRoaXMuc3RlcCA9IHN0ZXA7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFJhbmdlRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLlJhbmdlJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWdFeCBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyB2YWx1ZTogUmVnRXhwO1xuXG4gICAgY29uc3RydWN0b3IodmFsdWU6IFJlZ0V4cCwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UmVnRXhFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuUmVnRXgnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldCBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBlbnRpdHk6IEV4cHI7XG4gICAgcHVibGljIGtleTogRXhwcjtcbiAgICBwdWJsaWMgdmFsdWU6IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihlbnRpdHk6IEV4cHIsIGtleTogRXhwciwgdmFsdWU6IEV4cHIsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmVudGl0eSA9IGVudGl0eTtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0U2V0RXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLlNldCc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGUgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgdmFsdWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFRlbXBsYXRlRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLlRlbXBsYXRlJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZXJuYXJ5IGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIGNvbmRpdGlvbjogRXhwcjtcbiAgICBwdWJsaWMgdGhlbkV4cHI6IEV4cHI7XG4gICAgcHVibGljIGVsc2VFeHByOiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IoY29uZGl0aW9uOiBFeHByLCB0aGVuRXhwcjogRXhwciwgZWxzZUV4cHI6IEV4cHIsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAgICAgdGhpcy50aGVuRXhwciA9IHRoZW5FeHByO1xuICAgICAgICB0aGlzLmVsc2VFeHByID0gZWxzZUV4cHI7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFRlcm5hcnlFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuVGVybmFyeSc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHlwZW9mIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIHZhbHVlOiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IodmFsdWU6IEV4cHIsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFR5cGVvZkV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5UeXBlb2YnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVuYXJ5IGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIG9wZXJhdG9yOiBUb2tlbjtcbiAgICBwdWJsaWMgcmlnaHQ6IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihvcGVyYXRvcjogVG9rZW4sIHJpZ2h0OiBFeHByLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFVuYXJ5RXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLlVuYXJ5JztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYXJpYWJsZSBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBuYW1lOiBUb2tlbjtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IFRva2VuLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VmFyaWFibGVFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuVmFyaWFibGUnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZvaWQgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgdmFsdWU6IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogRXhwciwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Vm9pZEV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5Wb2lkJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBadHJpbmcgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgdmFsdWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFp0cmluZ0V4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5adHJpbmcnO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0ICogYXMgU3RtdCBmcm9tICcuL3N0YXRlbWVudCc7XG5pbXBvcnQgeyAkQW55IH0gZnJvbSAnLi9hbnknO1xuaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gJy4uL2NvbnNvbGUnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGUuZW51bSc7XG5pbXBvcnQgeyBJbnRlcnByZXRlciB9IGZyb20gJy4uL2ludGVycHJldGVyJztcbmltcG9ydCB7IFNjb3BlIH0gZnJvbSAnLi4vc2NvcGUnO1xuaW1wb3J0IHsgJE51bGwgfSBmcm9tICcuL251bGwnO1xuZGVjbGFyZSB2YXIgY29uem9sZTogQ29uc29sZTtcblxuZXhwb3J0IHR5cGUgRnVuY3Rpb25DYWxsID0gKHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSwgaW50ZXJwcmV0ZXI6IEludGVycHJldGVyKSA9PiAkQW55O1xuXG5leHBvcnQgY2xhc3MgJENhbGxhYmxlIGV4dGVuZHMgJEFueSB7XG5cbiAgICBwdWJsaWMgdmFsdWU6IEZ1bmN0aW9uQ2FsbDtcbiAgICBwdWJsaWMgYXJpdHk6IG51bWJlcjtcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCAgYXJpdHk6IG51bWJlciwgdmFsdWU6IEZ1bmN0aW9uQ2FsbCkge1xuICAgICAgICBzdXBlcih2YWx1ZSwgRGF0YVR5cGUuRnVuY3Rpb24pO1xuICAgICAgICB0aGlzLmFyaXR5ID0gYXJpdHk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgcHVibGljIGNhbGwodGhpejogYW55LCBhcmdzOiBhbnlbXSwgaW50ZXJwcmV0ZXI6IEludGVycHJldGVyLCApOiAkQW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUodGhpeiwgYXJncywgaW50ZXJwcmV0ZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYDwke3RoaXMubmFtZX0gIGZ1bmN0aW9uPmA7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyAkRnVuY3Rpb24gZXh0ZW5kcyAkQ2FsbGFibGUge1xuICAgIHB1YmxpYyBkZWNsYXJhdGlvbjogU3RtdC5GdW5jO1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBjbG9zdXJlOiBTY29wZTtcblxuICAgIGNvbnN0cnVjdG9yKGRlY2xhcmF0aW9uOiBTdG10LkZ1bmMsIGNsb3N1cmU6IFNjb3BlKSB7XG4gICAgICAgIHN1cGVyKGRlY2xhcmF0aW9uLm5hbWUubGV4ZW1lLCBkZWNsYXJhdGlvbi5wYXJhbXMubGVuZ3RoLCBudWxsKTtcbiAgICAgICAgdGhpcy5kZWNsYXJhdGlvbiA9IGRlY2xhcmF0aW9uO1xuICAgICAgICB0aGlzLmNsb3N1cmUgPSBjbG9zdXJlO1xuICAgIH1cblxuICAgIHB1YmxpYyBjYWxsKHRoaXo6IGFueSwgYXJnczogYW55W10sIGludGVycHJldGVyOiBJbnRlcnByZXRlcik6ICRBbnkge1xuICAgICAgICBjb25zdCBzY29wZSA9IG5ldyBTY29wZSh0aGlzLmNsb3N1cmUpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGVjbGFyYXRpb24ucGFyYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzY29wZS5kZWZpbmUodGhpcy5kZWNsYXJhdGlvbi5wYXJhbXNbaV0ubGV4ZW1lLCBhcmdzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBzY29wZS5zZXQoJ3RoaXMnLCB0aGl6KTtcbiAgICAgICAgbGV0IHJlc3RvcmVTY29wZTogU2NvcGUgPSBudWxsO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdG9yZVNjb3BlID0gaW50ZXJwcmV0ZXIuc2NvcGU7XG4gICAgICAgICAgICBpbnRlcnByZXRlci5leGVjdXRlQmxvY2sodGhpcy5kZWNsYXJhdGlvbi5ib2R5LCBzY29wZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgJEFueSAmJiBlLnR5cGUgPT09IERhdGFUeXBlLlJldHVybikge1xuICAgICAgICAgICAgICAgIGlmIChyZXN0b3JlU2NvcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJwcmV0ZXIuc2NvcGUgPSByZXN0b3JlU2NvcGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBlLnZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGUuZW51bSc7XG5pbXBvcnQgeyAkQW55IH0gZnJvbSAnLi9hbnknO1xuaW1wb3J0IHsgSW50ZXJwcmV0ZXIgfSBmcm9tICcuLi9pbnRlcnByZXRlcic7XG5pbXBvcnQgeyAkRGljdGlvbmFyeSB9IGZyb20gJy4vZGljdGlvbmFyeSc7XG5pbXBvcnQgeyAkTnVsbCB9IGZyb20gJy4vbnVsbCc7XG5pbXBvcnQgeyAkQ2FsbGFibGUsICRGdW5jdGlvbiB9IGZyb20gJy4vZnVuY3Rpb24nO1xuaW1wb3J0IHsgJFN0cmluZyB9IGZyb20gJy4vc3RyaW5nJztcbmltcG9ydCB7ICROdW1iZXIgfSBmcm9tICcuL251bWJlcic7XG5pbXBvcnQgeyAkTGlzdCB9IGZyb20gJy4vbGlzdCc7XG5cbmV4cG9ydCBjbGFzcyAkSXRlcmF0b3IgZXh0ZW5kcyAkQW55IHtcblxuICAgIHB1YmxpYyB2YWx1ZTogJEFueTtcbiAgICBwdWJsaWMgaW5kZXg6ICRBbnk7XG4gICAgcHVibGljIGl0ZXI6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiAkQW55KSB7XG4gICAgICAgIHN1cGVyKHZhbHVlLCBEYXRhVHlwZS5SZWdFeHApO1xuICAgICAgICB0aGlzLmluZGV4ID0gbmV3ICROdWxsKCk7XG4gICAgICAgIHRoaXMuaXRlciA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldChrZXk6ICRBbnkpOiAkQW55IHtcbiAgICAgICAgaWYgKGtleS52YWx1ZSA9PT0gJ2tleScgfHwga2V5LnZhbHVlID09PSAnaW5kZXgnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5LnZhbHVlID09PSAndmFsdWUnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS5nZXQodGhpcy5pbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCRJdGVyYXRvci5ydW50aW1lLmhhcyhrZXkudmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gJEl0ZXJhdG9yLnJ1bnRpbWUuZ2V0KGtleS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHNldChrZXk6ICRBbnksIHZhbHVlOiBhbnkpOiAkQW55IHtcbiAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYFwiJHt0aGlzLnZhbHVlfVwiYDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIG5leHQodGhpejogJEFueSk6ICRBbnkge1xuICAgICAgICBjb25zdCBpdCA9IHRoaXogYXMgJEl0ZXJhdG9yO1xuICAgICAgICBpZiAoaXQudmFsdWUuaXNMaXN0KCkpIHtcbiAgICAgICAgICAgIGl0LmluZGV4ID0gJExpc3QubmV4dCh0aGl6KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXQudmFsdWUuaXNEaWN0aW9uYXJ5KCkpIHtcbiAgICAgICAgICAgIGl0LmluZGV4ID0gJERpY3Rpb25hcnkubmV4dCh0aGl6KTtcbiAgICAgICAgfVxuICAgICAgICAvLyAodGhpeiBhcyAkSXRlcmF0b3IpLmluZGV4ID0gKHRoaXoudmFsdWUuZ2V0KG5ldyAkU3RyaW5nKCduZXh0JykpIGFzICRDYWxsYWJsZSkuY2FsbCh0aGl6LnZhbHVlLCBbKHRoaXogYXMgJEl0ZXJhdG9yKS5pbmRleF0sIGludGVycHJldGVyKTtcbiAgICAgICAgcmV0dXJuIGl0LmluZGV4O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY29tcGxldGUodGhpejogJEFueSwgYXJnczogJEFueVtdLCBpbnRlcnByZXRlcjogSW50ZXJwcmV0ZXIpOiAkQW55IHtcbiAgICAgICAgcmV0dXJuICh0aGl6LnZhbHVlLmdldChuZXcgJFN0cmluZygnY29tcGxldGUnKSkgYXMgJENhbGxhYmxlKS5jYWxsKHRoaXoudmFsdWUsIFsodGhpeiBhcyAkSXRlcmF0b3IpLmluZGV4XSwgaW50ZXJwcmV0ZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZmlyc3QodGhpejogJEFueSwgYXJnczogJEFueVtdLCBpbnRlcnByZXRlcjogSW50ZXJwcmV0ZXIpOiAkQW55IHtcbiAgICAgICAgaWYgKCh0aGl6IGFzICRJdGVyYXRvcikudmFsdWUuaXNMaXN0KCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgJERpY3Rpb25hcnkobmV3IE1hcChbXG4gICAgICAgICAgICAgICAgWydrZXknLCAwXSxcbiAgICAgICAgICAgICAgICBbJ3ZhbHVlJywgdGhpei52YWx1ZS52YWx1ZVswXV1cbiAgICAgICAgICAgIF0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3ICROdWxsKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBydW50aW1lID0gbmV3IE1hcChbXG4gICAgICAgIFsnZmlyc3QnLCBuZXcgJENhbGxhYmxlKCdmaXJzdCcsIDAsICRJdGVyYXRvci5maXJzdCldLFxuICAgICAgICBbJ25leHQnLCBuZXcgJENhbGxhYmxlKCduZXh0JywgMCwgJEl0ZXJhdG9yLm5leHQpXSxcbiAgICAgICAgWydjb21wbGV0ZScsIG5ldyAkQ2FsbGFibGUoJ2NvbXBsZXRlJywgMCwgJEl0ZXJhdG9yLmNvbXBsZXRlKV1cbiAgICBdKTtcblxuXG4gICAgLypcbiAgICB2YXIgaXQgPSBkaWN0aW9uYXJ5Lml0ZXJhdG9yKClcbiAgICBkbyB7XG4gICAgICAgIGl0LmtleSgpO1xuICAgICAgICBpdC52YWx1ZVxuXG4gICAgfSB3aGlsZSAoIWl0LmNvbXBsZXRlKCkpIHtcbiAgICAgICAgcHJpbnQgbFtpdC5pbmRleF07XG4gICAgfVxuXG4gICAgICovXG5cblxufVxuIiwiaW1wb3J0IHsgZnJvbUphdmFTY3JpcHRNZXRob2QgfSBmcm9tICcuLi9ydW50aW1lJztcbmltcG9ydCB7IEludGVycHJldGVyIH0gZnJvbSAnLi4vaW50ZXJwcmV0ZXInO1xuaW1wb3J0IHsgJEFueSB9IGZyb20gJy4vYW55JztcbmltcG9ydCB7ICRGdW5jdGlvbiwgJENhbGxhYmxlIH0gZnJvbSAnLi9mdW5jdGlvbic7XG5pbXBvcnQgeyAkTnVsbCB9IGZyb20gJy4vbnVsbCc7XG5pbXBvcnQgeyAkTnVtYmVyIH0gZnJvbSAnLi9udW1iZXInO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGUuZW51bSc7XG5pbXBvcnQgeyAkUmFuZ2UgfSBmcm9tICcuL3JhbmdlJztcbmltcG9ydCB7ICRJdGVyYXRvciB9IGZyb20gJy4vaXRlcmF0b3InO1xuaW1wb3J0IHsgJEJvb2xlYW4gfSBmcm9tICcuL2Jvb2xlYW4nO1xuXG5leHBvcnQgY2xhc3MgJExpc3QgZXh0ZW5kcyAkQW55IHtcbiAgICBwdWJsaWMgdmFsdWU6ICRBbnlbXTtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiAkQW55W10pIHtcbiAgICAgICAgc3VwZXIodmFsdWUsIERhdGFUeXBlLkxpc3QpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQoa2V5OiAkQW55KTogJEFueSB7XG4gICAgICAgIGlmIChrZXkuaXNOdW1iZXIoKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnZhbHVlW2tleS52YWx1ZV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVba2V5LnZhbHVlXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGtleS5pc1JhbmdlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJhbmdlKDwkUmFuZ2U+IGtleSk7XG4gICAgICAgIH0gZWxzZSBpZiAoJExpc3QucnVudGltZS5oYXMoa2V5LnZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuICRMaXN0LnJ1bnRpbWUuZ2V0KGtleS52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3ICROdWxsKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHB1YmxpYyBzZXQoa2V5OiAkQW55LCB2YWx1ZTogJEFueSk6ICRBbnkge1xuICAgICAgICBpZiAoa2V5LmlzTnVtYmVyKCkpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVba2V5LnZhbHVlXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJhbmdlKHJhbmdlOiAkUmFuZ2UpOiAkTGlzdCB7XG4gICAgICAgIGNvbnN0IHJlc3VsdDogJEFueVtdID0gW107XG4gICAgICAgIHJhbmdlLml0ZXJhdGUodGhpcy52YWx1ZS5sZW5ndGgsIChpKSA9PiB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLnZhbHVlW2ldKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXcgJExpc3QocmVzdWx0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBbJHt0aGlzLnZhbHVlLmpvaW4oJywnKX1dYDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNpemUodGhpejogJEFueSwgYXJnczogJEFueVtdKTogJEFueSB7XG4gICAgICAgIHJldHVybiBuZXcgJE51bWJlcihhcmdzWzBdLnZhbHVlLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBlYWNoKHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSwgaW50ZXJwcmV0ZXI6IEludGVycHJldGVyKTogJEFueSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpei52YWx1ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgKGFyZ3NbMF0gYXMgJEZ1bmN0aW9uKS5jYWxsKHRoaXosIFt0aGl6LnZhbHVlW2ldLCBuZXcgJE51bWJlcihpKSwgdGhpel0sIGludGVycHJldGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpejtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIG1hcCh0aGl6OiAkQW55LCBhcmdzOiAkQW55W10sIGludGVycHJldGVyOiBJbnRlcnByZXRlcik6ICRBbnkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXoudmFsdWUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHRoaXoudmFsdWVbaV0gPSAoYXJnc1swXSBhcyAkRnVuY3Rpb24pLmNhbGwodGhpeiwgW25ldyAkQW55KHRoaXoudmFsdWVbaV0pLCBuZXcgJE51bWJlcihpKSwgdGhpel0sIGludGVycHJldGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpejtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGl0ZXJhdG9yKHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSwgaW50ZXJwcmV0ZXI6IEludGVycHJldGVyKTogJEFueSB7XG4gICAgICAgcmV0dXJuIG5ldyAkSXRlcmF0b3IodGhpeik7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBuZXh0KHRoaXo6ICRBbnkpIHtcbiAgICAgICAgY29uc3QgaXQgPSB0aGl6IGFzICRJdGVyYXRvcjtcbiAgICAgICAgY29uc3QgbGlzdCA9IGl0LnZhbHVlIGFzICRMaXN0O1xuXG4gICAgICAgIC8vIGVtdHB5IGxpc3Qgb3IgaXRlcmF0aW9uIG92ZXJcbiAgICAgICAgaWYgKCFsaXN0LnZhbHVlLmxlbmd0aCB8fCBpdC5pbmRleC5pc051bGwoKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGZpcnN0IHZhbHVlXG4gICAgICAgIGlmIChpdC5pdGVyID09PSBudWxsKSB7XG4gICAgICAgICAgICBpdC5pdGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgJE51bWJlcigwKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBubyBtb3JlIHZhbHVlcyB0byBpdGVyYXRlXG4gICAgICAgIGlmIChpdC5pbmRleC52YWx1ZSA+PSBsaXN0LnZhbHVlLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgJE51bGwoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3ICROdW1iZXIoaXQuaW5kZXgudmFsdWUgKyAxKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHJ1bnRpbWUgPSAgbmV3IE1hcChbXG4gICAgICAgIFsnY29uY2F0JywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ2NvbmNhdCcsIC0xLCBEYXRhVHlwZS5MaXN0KV0sXG4gICAgICAgIFsnZWFjaCcsIG5ldyAkQ2FsbGFibGUoJ2VhY2gnLCAxLCAkTGlzdC5lYWNoKV0sXG4gICAgICAgIFsnaW5jbHVkZXMnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgnaW5jbHVkZXMnLCAxLCBEYXRhVHlwZS5Cb29sZWFuKV0sXG4gICAgICAgIFsnaW5kZXhPZicsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCdpbmRleE9mJywgMSwgRGF0YVR5cGUuTnVtYmVyKV0sXG4gICAgICAgIFsnam9pbicsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCdqb2luJywgMSwgRGF0YVR5cGUuU3RyaW5nKV0sXG4gICAgICAgIFsnbGFzdEluZGV4T2YnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgnbGFzdEluZGV4T2YnLCAxLCBEYXRhVHlwZS5OdW1iZXIpXSxcbiAgICAgICAgWydtYXAnLCBuZXcgJENhbGxhYmxlKCdtYXAnLCAxLCAkTGlzdC5tYXApXSxcbiAgICAgICAgWydwb3AnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgncG9wJywgMCwgRGF0YVR5cGUuTGlzdCldLFxuICAgICAgICBbJ3B1c2gnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgncHVzaCcsIC0xLCBEYXRhVHlwZS5MaXN0KV0sXG4gICAgICAgIFsnc2hpZnQnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgnc2hpZnQnLCAwLCBEYXRhVHlwZS5MaXN0KV0sXG4gICAgICAgIFsnc2l6ZScsIG5ldyAkQ2FsbGFibGUoJ3NpemUnLCAwLCAgKHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSk6ICRBbnkgPT4gbmV3ICROdW1iZXIodGhpei52YWx1ZS5sZW5ndGgpKV0sXG4gICAgICAgIFsnc2xpY2UnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgnc2xpY2UnLCAtMSwgRGF0YVR5cGUuTGlzdCldLFxuICAgICAgICBbJ3NwbGljZScsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCdzcGxpY2UnLCAtMSwgRGF0YVR5cGUuTGlzdCldLFxuICAgICAgICBbJ3Vuc2hpZnQnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgndW5zaGlmdCcsIC0xLCBEYXRhVHlwZS5MaXN0KV0sXG4gICAgICAgIFsnaXRlcmF0b3InLCBuZXcgJENhbGxhYmxlKCdpdGVyYXRvcicsIDAsICRMaXN0Lml0ZXJhdG9yKV1cbiAgICBdKTtcblxufVxuIiwiaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGUuZW51bSc7XG5pbXBvcnQgeyAkQW55IH0gZnJvbSAnLi9hbnknO1xuXG5leHBvcnQgY2xhc3MgJE51bGwgZXh0ZW5kcyAkQW55IHtcblxuICAgIHB1YmxpYyB2YWx1ZTogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihudWxsKTtcbiAgICAgICAgdGhpcy50eXBlID0gRGF0YVR5cGUuTnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vdHlwZS5lbnVtJztcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL2FueSc7XG5cbmV4cG9ydCBjbGFzcyAkTnVtYmVyIGV4dGVuZHMgJEFueSB7XG5cbiAgICBwdWJsaWMgdmFsdWU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIodmFsdWUsIERhdGFUeXBlLk51bWJlcik7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlLnRvU3RyaW5nKCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vdHlwZS5lbnVtJztcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL2FueSc7XG5pbXBvcnQgeyAkTnVsbCB9IGZyb20gJy4vbnVsbCc7XG5pbXBvcnQgeyAkQ2xhc3MgfSBmcm9tICcuL2NsYXNzJztcbmltcG9ydCB7ICRCb29sZWFuIH0gZnJvbSAnLi9ib29sZWFuJztcblxuZXhwb3J0IGNsYXNzICRPYmplY3QgZXh0ZW5kcyAkQW55IHtcbiAgICBwdWJsaWMgdmFsdWU6IE1hcDxzdHJpbmcsICRBbnk+O1xuICAgIHB1YmxpYyBjb256dHJ1Y3RvcjogJEFueTtcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IodmFsdWU6IE1hcDxzdHJpbmcsICRBbnk+LCBjb256dHJ1Y3RvcjogJEFueSkge1xuICAgICAgICBzdXBlcih2YWx1ZSwgRGF0YVR5cGUuT2JqZWN0KTtcbiAgICAgICAgdGhpcy5jb256dHJ1Y3RvciA9IGNvbnp0cnVjdG9yO1xuICAgICAgICB0aGlzLm5hbWUgPSAoY29uenRydWN0b3IgYXMgJENsYXNzKS5uYW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQoa2V5OiAkQW55KTogJEFueSB7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IHRoaXMuY29uenRydWN0b3IuZ2V0KGtleSk7XG5cbiAgICAgICAgaWYgKG1ldGhvZC5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBtZXRob2Q7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy52YWx1ZS5oYXMoa2V5LnZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUuZ2V0KGtleS52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3ICROdWxsKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldChrZXk6ICRBbnksIHZhbHVlOiAkQW55KTogJEFueSB7XG4gICAgICAgIHRoaXMudmFsdWUuc2V0KGtleS52YWx1ZSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgPCR7dGhpcy5uYW1lfSBvYmplY3Q+YDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vdHlwZS5lbnVtJztcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL2FueSc7XG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnLi4vY29uc29sZSc7XG5kZWNsYXJlIHZhciBjb256b2xlOiBDb25zb2xlO1xuXG5leHBvcnQgIGNsYXNzIFJhbmdlVmFsdWUge1xuICAgIHB1YmxpYyBzdGFydDogbnVtYmVyO1xuICAgIHB1YmxpYyBlbmQ6IG51bWJlcjtcbiAgICBwdWJsaWMgc3RlcDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3Ioc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIsIHN0ZXA6IG51bWJlcikge1xuICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgIHRoaXMuZW5kID0gZW5kO1xuICAgICAgICB0aGlzLnN0ZXAgPSBzdGVwO1xuICAgIH1cblxuICAgIHB1YmxpYyBub3JtYWxpemUobGVuZ3RoOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc3RlcCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zdGVwID0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbmQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZW5kID0gdGhpcy5zdGVwID4gMCA/IGxlbmd0aCAtIDEgOiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0ID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdGVwID4gMCA/IDAgOiBsZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgJFJhbmdlIGV4dGVuZHMgJEFueSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogUmFuZ2VWYWx1ZSkge1xuICAgICAgICBzdXBlcih2YWx1ZSwgRGF0YVR5cGUuUmFuZ2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpdGVyYXRlKGxlbmd0aDogbnVtYmVyLCBjYWxsYmFjazogKGluZGV4OiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZS5ub3JtYWxpemUobGVuZ3RoKTtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUuc3RlcCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnZhbHVlLnN0YXJ0OyBpIDw9IHRoaXMudmFsdWUuZW5kOyBpICs9IHRoaXMudmFsdWUuc3RlcCkge1xuICAgICAgICAgICAgICAgY2FsbGJhY2soaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy52YWx1ZS5zdGVwIDwgMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMudmFsdWUuc3RhcnQ7IGkgPj0gdGhpcy52YWx1ZS5lbmQ7IGkgKz0gdGhpcy52YWx1ZS5zdGVwKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb256b2xlLndhcm4oYFtyYW5nZSBlcnJvcl0gPT4gMCBpcyBub3QgYSB2YWxpZCBzdGVwYCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vdHlwZS5lbnVtJztcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL2FueSc7XG5cbmV4cG9ydCBjbGFzcyAkUmVnRXhwIGV4dGVuZHMgJEFueSB7XG5cbiAgICBwdWJsaWMgdmFsdWU6IFJlZ0V4cDtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBSZWdFeHApIHtcbiAgICAgICAgc3VwZXIodmFsdWUsIERhdGFUeXBlLlJlZ0V4cCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBUb2tlbiB9IGZyb20gJ3Rva2VuJztcblxuaW1wb3J0IHsgRXhwciB9IGZyb20gJ2V4cHJlc3Npb24nO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3RtdCB7XG4gICAgcHVibGljIHJlc3VsdDogYW55O1xuICAgIHB1YmxpYyBsaW5lOiBudW1iZXI7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgY29uc3RydWN0b3IoKSB7IH1cbiAgICBwdWJsaWMgYWJzdHJhY3QgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUjtcbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5leHBvcnQgaW50ZXJmYWNlIFN0bXRWaXNpdG9yPFI+IHtcbiAgICB2aXNpdEJsb2NrU3RtdChzdG10OiBCbG9jayk6IFI7XG4gICAgdmlzaXRCcmVha1N0bXQoc3RtdDogQnJlYWspOiBSO1xuICAgIHZpc2l0Q2xhc3NTdG10KHN0bXQ6IENsYXNzKTogUjtcbiAgICB2aXNpdENvbnRpbnVlU3RtdChzdG10OiBDb250aW51ZSk6IFI7XG4gICAgdmlzaXREb1doaWxlU3RtdChzdG10OiBEb1doaWxlKTogUjtcbiAgICB2aXNpdEV4cHJlc3Npb25TdG10KHN0bXQ6IEV4cHJlc3Npb24pOiBSO1xuICAgIHZpc2l0RnVuY1N0bXQoc3RtdDogRnVuYyk6IFI7XG4gICAgdmlzaXRJZlN0bXQoc3RtdDogSWYpOiBSO1xuICAgIHZpc2l0UHJpbnRTdG10KHN0bXQ6IFByaW50KTogUjtcbiAgICB2aXNpdFJldHVyblN0bXQoc3RtdDogUmV0dXJuKTogUjtcbiAgICB2aXNpdFZhclN0bXQoc3RtdDogVmFyKTogUjtcbiAgICB2aXNpdFdoaWxlU3RtdChzdG10OiBXaGlsZSk6IFI7XG59XG5cbmV4cG9ydCBjbGFzcyBCbG9jayBleHRlbmRzIFN0bXQge1xuICAgIHB1YmxpYyBzdGF0ZW1lbnRzOiBTdG10W107XG5cbiAgICBjb25zdHJ1Y3RvcihzdGF0ZW1lbnRzOiBTdG10W10sIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRCbG9ja1N0bXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnU3RtdC5CbG9jayc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQnJlYWsgZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMga2V5d29yZDogVG9rZW47XG5cbiAgICBjb25zdHJ1Y3RvcihrZXl3b3JkOiBUb2tlbiwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMua2V5d29yZCA9IGtleXdvcmQ7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEJyZWFrU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LkJyZWFrJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGFzcyBleHRlbmRzIFN0bXQge1xuICAgIHB1YmxpYyBuYW1lOiBUb2tlbjtcbiAgICBwdWJsaWMgcGFyZW50OiBUb2tlbjtcbiAgICBwdWJsaWMgbWV0aG9kczogRnVuY1tdO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogVG9rZW4sIHBhcmVudDogVG9rZW4sIG1ldGhvZHM6IEZ1bmNbXSwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLm1ldGhvZHMgPSBtZXRob2RzO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRDbGFzc1N0bXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnU3RtdC5DbGFzcyc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29udGludWUgZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMga2V5d29yZDogVG9rZW47XG5cbiAgICBjb25zdHJ1Y3RvcihrZXl3b3JkOiBUb2tlbiwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMua2V5d29yZCA9IGtleXdvcmQ7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdENvbnRpbnVlU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LkNvbnRpbnVlJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb1doaWxlIGV4dGVuZHMgU3RtdCB7XG4gICAgcHVibGljIGxvb3A6IFN0bXQ7XG4gICAgcHVibGljIGNvbmRpdGlvbjogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKGxvb3A6IFN0bXQsIGNvbmRpdGlvbjogRXhwciwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubG9vcCA9IGxvb3A7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXREb1doaWxlU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LkRvV2hpbGUnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV4cHJlc3Npb24gZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMgZXhwcmVzc2lvbjogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKGV4cHJlc3Npb246IEV4cHIsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRFeHByZXNzaW9uU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LkV4cHJlc3Npb24nO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZ1bmMgZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMgbmFtZTogVG9rZW47XG4gICAgcHVibGljIHBhcmFtczogVG9rZW5bXTtcbiAgICBwdWJsaWMgYm9keTogU3RtdFtdO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogVG9rZW4sIHBhcmFtczogVG9rZW5bXSwgYm9keTogU3RtdFtdLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gICAgICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEZ1bmNTdG10KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1N0bXQuRnVuYyc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSWYgZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMgY29uZGl0aW9uOiBFeHByO1xuICAgIHB1YmxpYyB0aGVuU3RtdDogU3RtdDtcbiAgICBwdWJsaWMgZWxzZVN0bXQ6IFN0bXQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25kaXRpb246IEV4cHIsIHRoZW5TdG10OiBTdG10LCBlbHNlU3RtdDogU3RtdCwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgICAgICB0aGlzLnRoZW5TdG10ID0gdGhlblN0bXQ7XG4gICAgICAgIHRoaXMuZWxzZVN0bXQgPSBlbHNlU3RtdDtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0SWZTdG10KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1N0bXQuSWYnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFByaW50IGV4dGVuZHMgU3RtdCB7XG4gICAgcHVibGljIGV4cHJlc3Npb246IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihleHByZXNzaW9uOiBFeHByLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UHJpbnRTdG10KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1N0bXQuUHJpbnQnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJldHVybiBleHRlbmRzIFN0bXQge1xuICAgIHB1YmxpYyBrZXl3b3JkOiBUb2tlbjtcbiAgICBwdWJsaWMgdmFsdWU6IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihrZXl3b3JkOiBUb2tlbiwgdmFsdWU6IEV4cHIsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmtleXdvcmQgPSBrZXl3b3JkO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFJldHVyblN0bXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnU3RtdC5SZXR1cm4nO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZhciBleHRlbmRzIFN0bXQge1xuICAgIHB1YmxpYyBuYW1lOiBUb2tlbjtcbiAgICBwdWJsaWMgdHlwZTogVG9rZW47XG4gICAgcHVibGljIGluaXRpYWxpemVyOiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogVG9rZW4sIHR5cGU6IFRva2VuLCBpbml0aWFsaXplcjogRXhwciwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZXIgPSBpbml0aWFsaXplcjtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VmFyU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LlZhcic7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgV2hpbGUgZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMgY29uZGl0aW9uOiBFeHByO1xuICAgIHB1YmxpYyBsb29wOiBTdG10O1xuXG4gICAgY29uc3RydWN0b3IoY29uZGl0aW9uOiBFeHByLCBsb29wOiBTdG10LCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgICAgIHRoaXMubG9vcCA9IGxvb3A7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFdoaWxlU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LldoaWxlJztcbiAgICB9XG59XG5cbiIsImltcG9ydCB7IGZyb21KYXZhU2NyaXB0TWV0aG9kIH0gZnJvbSAnLi4vcnVudGltZSc7XG5pbXBvcnQgeyAkQW55IH0gZnJvbSAnLi9hbnknO1xuaW1wb3J0IHsgJENhbGxhYmxlLCAkRnVuY3Rpb24gfSBmcm9tICcuL2Z1bmN0aW9uJztcbmltcG9ydCB7ICROdWxsIH0gZnJvbSAnLi9udWxsJztcbmltcG9ydCB7ICROdW1iZXIgfSBmcm9tICcuL251bWJlcic7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vdHlwZS5lbnVtJztcbmltcG9ydCB7IEludGVycHJldGVyIH0gZnJvbSAnLi4vaW50ZXJwcmV0ZXInO1xuaW1wb3J0IHsgJFJhbmdlIH0gZnJvbSAnLi9yYW5nZSc7XG5cbmV4cG9ydCBjbGFzcyAkU3RyaW5nIGV4dGVuZHMgJEFueSB7XG4gICAgcHVibGljIHZhbHVlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKHZhbHVlLCBEYXRhVHlwZS5TdHJpbmcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQoa2V5OiAkQW55KTogJEFueSB7XG4gICAgICAgIGlmIChrZXkuaXNOdW1iZXIoKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyAkU3RyaW5nKHRoaXMudmFsdWVba2V5LnZhbHVlXSk7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5LmlzUmFuZ2UoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmFuZ2UoPCRSYW5nZT4ga2V5KTtcbiAgICAgICAgfSBlbHNlIGlmICgkU3RyaW5nLnJ1bnRpbWUuaGFzKGtleS52YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiAkU3RyaW5nLnJ1bnRpbWUuZ2V0KGtleS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHNldChrZXk6ICRBbnksIHZhbHVlOiBhbnkpOiAkQW55IHtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAvLyB0aGlzLnByb3BlcnRpZXMuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgJE51bGwoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMudmFsdWV9YDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJhbmdlKHJhbmdlOiAkUmFuZ2UpOiAkU3RyaW5nIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgICAgICByYW5nZS5pdGVyYXRlKHRoaXMudmFsdWUubGVuZ3RoLCAoaTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdGhpcy52YWx1ZVtpXTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXcgJFN0cmluZyhyZXN1bHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgcmVwbGFjZSh0aGl6OiAkQW55LCBhcmdzOiAkQW55W10sIGludGVycGV0ZXI6IEludGVycHJldGVyKTogJEFueSB7XG4gICAgICAgIGlmIChhcmdzWzFdLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgLy8gcmV0dXJuIG5ldyAkU3RyaW5nKHRoaXoudmFsdWUucmVwbGFjZShhcmdzWzBdLnZhbHVlLCBhcmdzWzFdLnZhbHVlKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpei52YWx1ZS5yZXBsYWNlKGFyZ3NbMF0udmFsdWUsICgobWF0Y2g6IHN0cmluZykgPT5cbiAgICAgICAgICAgICAgICAoKGFyZ3NbMV0gYXMgJEZ1bmN0aW9uKS5jYWxsKHRoaXosIFtuZXcgJFN0cmluZyhtYXRjaCldLCBpbnRlcnBldGVyKSkudmFsdWVcbiAgICAgICAgICAgICkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgJFN0cmluZyh0aGl6LnZhbHVlLnJlcGxhY2UoYXJnc1swXS52YWx1ZSwgYXJnc1sxXS52YWx1ZSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgIHJ1bnRpbWUgPSAgbmV3IE1hcChbXG4gICAgICAgIFsndG9VcHBlcicsICBmcm9tSmF2YVNjcmlwdE1ldGhvZCgndG9VcHBlckNhc2UnLCAwLCBEYXRhVHlwZS5TdHJpbmcpXSxcbiAgICAgICAgWyd0b0xvd2VyJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ3RvTG93ZXJDYXNlJywgMCwgRGF0YVR5cGUuU3RyaW5nKV0sXG4gICAgICAgIFsnc2l6ZScsIG5ldyAkQ2FsbGFibGUoJ3NpemUnLCAwLCAgKHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSk6ICRBbnkgPT4gbmV3ICROdW1iZXIodGhpei52YWx1ZS5sZW5ndGgpKV0sXG4gICAgICAgIFsnc3BsaXQnLCAgZnJvbUphdmFTY3JpcHRNZXRob2QoJ3NwbGl0JywgMSwgRGF0YVR5cGUuTGlzdCldLFxuICAgICAgICBbJ2NvbmNhdCcsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCdjb25jYXQnLCAxLCBEYXRhVHlwZS5TdHJpbmcpXSxcbiAgICAgICAgWydpbmNsdWRlcycsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCdpbmNsdWRlcycsIDEsIERhdGFUeXBlLkJvb2xlYW4pXSxcbiAgICAgICAgWydpbmRleE9mJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ2luZGV4T2YnLCAxLCBEYXRhVHlwZS5OdW1iZXIpXSxcbiAgICAgICAgWydsYXN0SW5kZXhPZicsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCdsYXN0SW5kZXhPZicsIDEsIERhdGFUeXBlLk51bWJlcildLFxuICAgICAgICBbJ3JlcGVhdCcsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCdyZXBlYXQnLCAxLCBEYXRhVHlwZS5TdHJpbmcpXSxcbiAgICAgICAgWydyZXBsYWNlJywgbmV3ICRDYWxsYWJsZSgncmVwbGFjZScsIC0xLCAkU3RyaW5nLnJlcGxhY2UpXSxcbiAgICAgICAgWydzZWFyY2gnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgnc2VhcmNoJywgMSwgRGF0YVR5cGUuTnVtYmVyKV0sXG4gICAgICAgIFsnc2xpY2UnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgnc2xpY2UnLCAtMSwgRGF0YVR5cGUuU3RyaW5nKV0sXG4gICAgICAgIFsnc3Vic3RyaW5nJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ3N1YnN0cmluZycsIC0xLCBEYXRhVHlwZS5TdHJpbmcpXSxcbiAgICAgICAgWyd0cmltJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ3RyaW0nLCAwLCBEYXRhVHlwZS5TdHJpbmcpXSxcbiAgICBdKTtcblxufVxuIiwiZXhwb3J0IGVudW0gRGF0YVR5cGUge1xuICAgIE51bGwsICAgIC8vIDBcbiAgICBBbnksICAgICAvLyAxXG4gICAgQm9vbGVhbiwgLy8gMlxuICAgIE51bWJlciwgIC8vIDNcbiAgICBTdHJpbmcsICAvLyA0XG4gICAgTGlzdCwgICAgLy8gNVxuICAgIERpY3Rpb25hcnksIC8vIDZcbiAgICBPYmplY3QsICAgLy8gN1xuICAgIENsYXNzLCAgICAvLyA4XG4gICAgRnVuY3Rpb24sIC8vIDlcbiAgICBMYW1iZGEsICAgLy8gMTBcbiAgICBSYW5nZSwgICAgLy8gMTFcbiAgICBSZWdFeHAsICAgLy8gMTJcbiAgICBFcnJvciwgICAgLy8gMTNcbiAgICBJdGVyYXRvciwgLy8gMTRcbiAgICAvLyBpbnRlcm5hbCB0eXBlc1xuICAgIFZvaWQgPSAxMDAsIC8vICAxMDBcbiAgICBSZXR1cm4sICAgLy8gMTAxXG4gICAgQnJlYWssICAgIC8vIDEwMlxuICAgIENvbnRpbnVlICAvLyAxMDNcbn1cbiIsImltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi90eXBlLmVudW0nO1xuaW1wb3J0IHsgJEFueSB9IGZyb20gJy4vYW55JztcblxuZXhwb3J0IGNsYXNzICRWb2lkIGV4dGVuZHMgJEFueSB7XG5cbiAgICBwdWJsaWMgdmFsdWU6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKHZhbHVlLCBEYXRhVHlwZS5Wb2lkKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IFRva2VuVHlwZSB9IGZyb20gJy4vdG9rZW4nO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEaWdpdChjaGFyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY2hhciA+PSAnMCcgJiYgY2hhciA8PSAnOSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FscGhhKGNoYXI6IHN0cmluZyApOiBib29sZWFuIHtcbiAgICByZXR1cm4gKGNoYXIgPj0gJ2EnICYmIGNoYXIgPD0gJ3onKSB8fCAoY2hhciA+PSAnQScgJiYgY2hhciA8PSAnWicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBbHBoYU51bWVyaWMoY2hhcjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzQWxwaGEoY2hhcikgfHwgaXNEaWdpdChjaGFyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzS2V5d29yZCh3b3JkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gVG9rZW5UeXBlW3dvcmRdID49IFRva2VuVHlwZS5BbmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplKHdvcmQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==