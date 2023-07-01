/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/console.ts":
/*!************************!*\
  !*** ./src/console.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Console: () => (/* binding */ Console),
/* harmony export */   ConsoleMessage: () => (/* binding */ ConsoleMessage),
/* harmony export */   ConsoleMessageType: () => (/* binding */ ConsoleMessageType)
/* harmony export */ });
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemoSourceCode: () => (/* binding */ DemoSourceCode)
/* harmony export */ });
const DemoSourceCode = `
// slicing strings
print "one two three four"[4:7:1]; // prints two
print "hello world"[::-1]; //prints dlrow olleh

// range operator on list construction
print [0:10:3]; // prints a list [0,3,6,9]
print [1..5]; // prints [1,2,3,4,5]

// spread operator
print {...[1,2,3]}; // prints {0: 1; 1: 2; 2: 3}
print ...1..3 == ...1..3; // prints [true,true,true];
print ..."abz" <=> ..."ayc"; // prints [0,-1,1]


// functions
function BasicFunction(text) {
    print text;
}
BasicFunction('BasicFunctionArgument');

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

// delete operator
delete literal.firstname;

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

// foreach statement with none
foreach (item  in []) {
    print item;
} none {
    print "no items";
}

// spread operator
{
    var a1 = ['one', 'two', 'three'];
    var b2 = [...a1, ..."spreading"];
    var d3 = {
        ...a1,
        ..."spreding"
    };
    print b2;
    print d3;
}

// loggin into js console
echo ('execution finished');

// fetching data. Currently unparsed text
fetch ('https://jsonplaceholder.typicode.com/todos/1', @(res) {
    echo(res);
});


function testForStatementClosure() {
    var logs = [];
    for (var i = 0; i < 3; ++i) {
      logs[i] = @() {
         print i;
      };
    }
    for (var i = 0; i < 3; ++i) {
      logs[i]();
    }
}
// prints 0 1 2 and not 2 2 2
testForStatementClosure();
`;


/***/ }),

/***/ "./src/interpreter.ts":
/*!****************************!*\
  !*** ./src/interpreter.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Interpreter: () => (/* binding */ Interpreter)
/* harmony export */ });
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
        this.global = new _scope__WEBPACK_IMPORTED_MODULE_1__.Scope();
        this.scope = this.global;
        this.errors = [];
        this.scanner = new _scanner__WEBPACK_IMPORTED_MODULE_18__.Scanner();
        this.parser = new _parser__WEBPACK_IMPORTED_MODULE_19__.Parser();
        this.strings = {
            next: new _types_string__WEBPACK_IMPORTED_MODULE_14__.$String("next"),
        };
        this.global.set("math", new _types_dictionary__WEBPACK_IMPORTED_MODULE_7__.$Dictionary(_runtime__WEBPACK_IMPORTED_MODULE_3__.Runtime.Math));
        this.global.set("console", new _types_dictionary__WEBPACK_IMPORTED_MODULE_7__.$Dictionary(_runtime__WEBPACK_IMPORTED_MODULE_3__.Runtime.Console));
        this.global.set("echo", _runtime__WEBPACK_IMPORTED_MODULE_3__.Runtime.Console.get("log"));
        this.global.set("re", _runtime__WEBPACK_IMPORTED_MODULE_3__.Runtime.Utils.get("re"));
        this.global.set("iter", _runtime__WEBPACK_IMPORTED_MODULE_3__.Runtime.Utils.get("iter"));
        this.global.set("delay", _runtime__WEBPACK_IMPORTED_MODULE_3__.Runtime.Utils.get("delay"));
        this.global.set("fetch", _runtime__WEBPACK_IMPORTED_MODULE_3__.Runtime.Utils.get("fetch"));
        this.parser.errorLevel = 0;
    }
    evaluate(expr) {
        return (expr.result = expr.accept(this));
    }
    execute(stmt) {
        return (stmt.result = stmt.accept(this));
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
                value: e.message,
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
                    this.errors.push("Runtime Error limit exceeded");
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
        let value = new _types_null__WEBPACK_IMPORTED_MODULE_10__.$Null();
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
        const newValue = new _types_number__WEBPACK_IMPORTED_MODULE_11__.$Number(value.value + expr.increment);
        this.scope.assign(expr.name.lexeme, newValue);
        return value;
    }
    visitListExpr(expr) {
        const values = [];
        for (const expression of expr.value) {
            if (expression instanceof _types_expression__WEBPACK_IMPORTED_MODULE_0__.Spread) {
                const value = this.evaluate(expression.value);
                this.spreadAnyIntoList(value, values);
            }
            else if (expression instanceof _types_expression__WEBPACK_IMPORTED_MODULE_0__.Range) {
                const range = this.evaluate(expression)
                    .value;
                range.step = range.step ? range.step : 1;
                if (range.step > 0 && range.start <= range.end) {
                    for (let i = range.start; i <= range.end; i += range.step) {
                        values.push(new _types_number__WEBPACK_IMPORTED_MODULE_11__.$Number(i));
                    }
                }
                else if (range.step < 0 && range.start >= range.end) {
                    for (let i = range.start; i >= range.end; i += range.step) {
                        values.push(new _types_number__WEBPACK_IMPORTED_MODULE_11__.$Number(i));
                    }
                }
                else {
                    this.error(`Invalid range expression at line ${expression.line} with range value of [${range.start}:${range.end}:${range.step}]`);
                }
            }
            else {
                const value = this.evaluate(expression);
                values.push(value);
            }
        }
        return new _types_list__WEBPACK_IMPORTED_MODULE_9__.$List(values);
    }
    spreadAnyIntoList(value, values) {
        const it = new _types_iterator__WEBPACK_IMPORTED_MODULE_20__.$Iterator(value);
        while (!_types_iterator__WEBPACK_IMPORTED_MODULE_20__.$Iterator.next(it, [], this).iter.done.value) {
            values.push(it.iter.value);
        }
    }
    visitZtringExpr(expr) {
        return new _types_string__WEBPACK_IMPORTED_MODULE_14__.$String(expr.value);
    }
    templateParse(source) {
        const tokens = this.scanner.scan(source);
        const statements = this.parser.parse(tokens);
        if (this.parser.errors.length) {
            this.error(`Template string  error: ${this.parser.errors[0]}`);
        }
        let result = "";
        for (const statement of statements) {
            result += this.execute(statement).toString();
        }
        return result;
    }
    visitTemplateExpr(expr) {
        const result = expr.value.replace(/\$\{([\s\S]+?)\}/g, (m, placeholder) => {
            if (placeholder[placeholder.length] !== ";") {
                placeholder += ";";
            }
            return this.templateParse(placeholder);
        });
        return new _types_string__WEBPACK_IMPORTED_MODULE_14__.$String(result);
    }
    visitRegExExpr(expr) {
        /*
        return new RegExEntity(expr.value);
        */ return new _types_null__WEBPACK_IMPORTED_MODULE_10__.$Null();
    }
    visitAssignExpr(expr) {
        const value = this.evaluate(expr.value);
        this.scope.assign(expr.name.lexeme, value);
        return value;
    }
    visitBinaryExpr(expr) {
        if (expr.left instanceof _types_expression__WEBPACK_IMPORTED_MODULE_0__.Spread &&
            expr.right instanceof _types_expression__WEBPACK_IMPORTED_MODULE_0__.Spread) {
            return this.spreadBinaryExpr(expr.left.value, expr.right.value, expr.operator);
        }
        const left = this.evaluate(expr.left);
        const right = this.evaluate(expr.right);
        switch (expr.operator.type) {
            case _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Minus:
            case _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.MinusEqual:
                return new _types_number__WEBPACK_IMPORTED_MODULE_11__.$Number(left.value - right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Slash:
            case _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.SlashEqual:
                return new _types_number__WEBPACK_IMPORTED_MODULE_11__.$Number(left.value / right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Star:
            case _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.StarEqual:
                return new _types_number__WEBPACK_IMPORTED_MODULE_11__.$Number(left.value * right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Percent:
            case _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.PercentEqual:
                return new _types_number__WEBPACK_IMPORTED_MODULE_11__.$Number(left.value % right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Plus:
            case _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.PlusEqual:
                if (left.isNumber() && right.isNumber()) {
                    return new _types_number__WEBPACK_IMPORTED_MODULE_11__.$Number(left.value + right.value);
                }
                if (left.isString() && right.isString()) {
                    return new _types_string__WEBPACK_IMPORTED_MODULE_14__.$String(left.value + right.value);
                }
                if (left.isList() && right.isList()) {
                    return new _types_list__WEBPACK_IMPORTED_MODULE_9__.$List(left.value.concat(right.value));
                }
                if (left.isDictionary() && right.isDictionary()) {
                    return new _types_dictionary__WEBPACK_IMPORTED_MODULE_7__.$Dictionary(new Map([...left.value, ...right.value]));
                }
                return new _types_string__WEBPACK_IMPORTED_MODULE_14__.$String(left.toString() + right.toString());
            case _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Pipe:
                return new _types_number__WEBPACK_IMPORTED_MODULE_11__.$Number(left.value | right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Caret:
                return new _types_number__WEBPACK_IMPORTED_MODULE_11__.$Number(left.value ^ right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Greater:
                return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__.$Boolean(left.value > right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.GreaterEqual:
                return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__.$Boolean(left.value >= right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Less:
                return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__.$Boolean(left.value < right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.LessEqual:
                return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__.$Boolean(left.value <= right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.EqualEqual:
                return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__.$Boolean(left.value === right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.BangEqual:
                return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__.$Boolean(left.value !== right.value);
            case _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.LessEqualGreater:
                if (left.value < right.value) {
                    return new _types_number__WEBPACK_IMPORTED_MODULE_11__.$Number(-1);
                }
                else if (left.value > right.value) {
                    return new _types_number__WEBPACK_IMPORTED_MODULE_11__.$Number(1);
                }
                else {
                    return new _types_number__WEBPACK_IMPORTED_MODULE_11__.$Number(0);
                }
            default:
                this.error("Unknown binary operator " + expr.operator);
                return new _types_null__WEBPACK_IMPORTED_MODULE_10__.$Null(); // unreachable
        }
    }
    /*
    private spreadBinaryComparission(left: Expr.Expr, right: Expr.Expr): $Any {
        const lit = new $Iterator(this.evaluate(left));
        const rit = new $Iterator(this.evaluate(right));
        while (true) {
            ($Iterator.next(lit, [], this) as $Iterator);
            ($Iterator.next(rit, [], this) as $Iterator);
            if (lit.iter.done.value || rit.iter.done.value) {
                // one of the iterators completed
                break;
            }
            if (lit.iter.value.value !== rit.iter.value.value) {
               return new $Boolean(false);
            }
        }
        if (lit.iter.done.value && rit.iter.done.value) {
            return new $Boolean(true);
        }
        return new $Boolean(false);
    } */
    spreadBinaryExpr(left, right, operator) {
        const lit = new _types_iterator__WEBPACK_IMPORTED_MODULE_20__.$Iterator(this.evaluate(left));
        const rit = new _types_iterator__WEBPACK_IMPORTED_MODULE_20__.$Iterator(this.evaluate(right));
        const result = [];
        while (true) {
            _types_iterator__WEBPACK_IMPORTED_MODULE_20__.$Iterator.next(lit, [], this);
            _types_iterator__WEBPACK_IMPORTED_MODULE_20__.$Iterator.next(rit, [], this);
            if (lit.iter.done.value || rit.iter.done.value) {
                // one of the iterators completed
                break;
            }
            const binary = new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Binary(new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Literal(lit.iter.value, left.line), operator, new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Literal(rit.iter.value, right.line), operator.line);
            result.push(this.evaluate(binary));
        }
        return new _types_list__WEBPACK_IMPORTED_MODULE_9__.$List(result);
    }
    visitLogicalExpr(expr) {
        const left = this.evaluate(expr.left);
        if (expr.operator.type === _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Or) {
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
        return this.evaluate(expr.condition).isTruthy()
            ? this.evaluate(expr.thenExpr)
            : this.evaluate(expr.elseExpr);
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
            case _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Minus:
                return new _types_number__WEBPACK_IMPORTED_MODULE_11__.$Number(-Number(right.value));
            case _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Bang:
                return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__.$Boolean(!right.isTruthy());
            case _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.PlusPlus:
            case _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.MinusMinus:
                if (!right.isNumber()) {
                    this.error(`Invalid right-hand side expression in prefix operation:  "${_types_type_enum__WEBPACK_IMPORTED_MODULE_16__.DataType[right.type]} ${right} is not a number`);
                }
                const newValue = Number(right.value) +
                    (expr.operator.type === _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.PlusPlus ? 1 : -1);
                if (expr.right instanceof _types_expression__WEBPACK_IMPORTED_MODULE_0__.Variable) {
                    this.scope.assign(expr.right.name.lexeme, new _types_number__WEBPACK_IMPORTED_MODULE_11__.$Number(newValue));
                }
                else if (expr.right instanceof _types_expression__WEBPACK_IMPORTED_MODULE_0__.Get) {
                    const assing = new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Set(expr.right.entity, expr.right.key, new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Literal(new _types_number__WEBPACK_IMPORTED_MODULE_11__.$Number(newValue), expr.line), expr.line);
                    this.evaluate(assing);
                }
                else {
                    this.error(`Invalid right-hand side expression in prefix operation:  ${expr.right}`);
                }
                return new _types_number__WEBPACK_IMPORTED_MODULE_11__.$Number(newValue);
            default:
                this.error(`Unknown unary operator ' + expr.operator`);
                return new _types_null__WEBPACK_IMPORTED_MODULE_10__.$Null(); // should be unreachable
        }
    }
    executeBlock(statements, nextScope) {
        const currentScope = this.scope;
        this.scope = nextScope;
        for (const statement of statements) {
            statement.result = this.execute(statement);
        }
        this.scope = currentScope;
        return new _types_void__WEBPACK_IMPORTED_MODULE_15__.$Void("block");
    }
    visitBlockStmt(stmt) {
        return this.executeBlock(stmt.statements, new _scope__WEBPACK_IMPORTED_MODULE_1__.Scope(this.scope));
    }
    visitIfStmt(stmt) {
        if (this.evaluate(stmt.condition).isTruthy()) {
            return this.execute(stmt.thenStmt);
        }
        else if (stmt.elseStmt !== null) {
            return this.execute(stmt.elseStmt);
        }
        return new _types_null__WEBPACK_IMPORTED_MODULE_10__.$Null();
    }
    visitWhileStmt(stmt) {
        const restoreScope = this.scope;
        while (this.evaluate(stmt.condition).isTruthy()) {
            try {
                this.execute(stmt.loop);
            }
            catch (e) {
                this.scope = restoreScope;
                if (e instanceof _types_any__WEBPACK_IMPORTED_MODULE_4__.$Any && e.type === _types_type_enum__WEBPACK_IMPORTED_MODULE_16__.DataType.Break) {
                    break;
                }
                else if (e instanceof _types_any__WEBPACK_IMPORTED_MODULE_4__.$Any && e.type === _types_type_enum__WEBPACK_IMPORTED_MODULE_16__.DataType.Continue) {
                    continue;
                }
                else {
                    throw e;
                }
            }
        }
        this.scope = restoreScope;
        return new _types_void__WEBPACK_IMPORTED_MODULE_15__.$Void("while");
    }
    visitDoWhileStmt(stmt) {
        const restoreScope = this.scope;
        do {
            try {
                this.execute(stmt.loop);
            }
            catch (e) {
                this.scope = restoreScope;
                if (e instanceof _types_any__WEBPACK_IMPORTED_MODULE_4__.$Any && e.type === _types_type_enum__WEBPACK_IMPORTED_MODULE_16__.DataType.Break) {
                    break;
                }
                else if (e instanceof _types_any__WEBPACK_IMPORTED_MODULE_4__.$Any && e.type === _types_type_enum__WEBPACK_IMPORTED_MODULE_16__.DataType.Continue) {
                    continue;
                }
                else {
                    throw e;
                }
            }
        } while (this.evaluate(stmt.condition).isTruthy());
        this.scope = restoreScope;
        return new _types_void__WEBPACK_IMPORTED_MODULE_15__.$Void("dowhile");
    }
    visitForStmt(stmt) {
        const restoreScope = this.scope;
        const outerScope = new _scope__WEBPACK_IMPORTED_MODULE_1__.Scope(this.scope);
        this.scope = outerScope;
        this.execute(stmt.initializer);
        while (this.evaluate(stmt.condition).isTruthy()) {
            this.scope = this.scope.clone();
            try {
                this.execute(stmt.loop);
            }
            catch (e) {
                if (e instanceof _types_any__WEBPACK_IMPORTED_MODULE_4__.$Any && e.type === _types_type_enum__WEBPACK_IMPORTED_MODULE_16__.DataType.Break) {
                    break;
                }
                else if (e instanceof _types_any__WEBPACK_IMPORTED_MODULE_4__.$Any && e.type === _types_type_enum__WEBPACK_IMPORTED_MODULE_16__.DataType.Continue) {
                    continue;
                }
                else {
                    throw e;
                }
            }
            finally {
                this.scope = outerScope;
                this.evaluate(stmt.increment);
            }
        }
        this.scope = restoreScope;
        return new _types_void__WEBPACK_IMPORTED_MODULE_15__.$Void("for");
    }
    visitForeachStmt(stmt) {
        const it = new _types_iterator__WEBPACK_IMPORTED_MODULE_20__.$Iterator(this.evaluate(stmt.iterable));
        const restoreScope = this.scope;
        let hasItems = false;
        while (!_types_iterator__WEBPACK_IMPORTED_MODULE_20__.$Iterator.next(it, [], this).iter.done.value) {
            hasItems = true;
            const foreachScope = new _scope__WEBPACK_IMPORTED_MODULE_1__.Scope(this.scope);
            foreachScope.set(stmt.name.lexeme, it.iter.value);
            if (stmt.key) {
                foreachScope.set(stmt.key.lexeme, it.iter.index);
            }
            try {
                this.executeBlock([stmt.loop], foreachScope);
            }
            catch (e) {
                this.scope = restoreScope;
                if (e instanceof _types_any__WEBPACK_IMPORTED_MODULE_4__.$Any && e.type === _types_type_enum__WEBPACK_IMPORTED_MODULE_16__.DataType.Break) {
                    break;
                }
                else if (e instanceof _types_any__WEBPACK_IMPORTED_MODULE_4__.$Any && e.type === _types_type_enum__WEBPACK_IMPORTED_MODULE_16__.DataType.Continue) {
                    continue;
                }
                else {
                    throw e;
                }
            }
        }
        if (!hasItems && stmt.none) {
            this.execute(stmt.none);
        }
        this.scope = restoreScope;
        return new _types_void__WEBPACK_IMPORTED_MODULE_15__.$Void("foreach");
    }
    visitCallExpr(expr) {
        // verify callee is a function
        const callee = this.evaluate(expr.callee);
        if (!callee.isFunction()) {
            this.error(`${callee} is not a function`);
        }
        // set this in function scope
        let thiz = null;
        if (expr.callee instanceof _types_expression__WEBPACK_IMPORTED_MODULE_0__.Get) {
            if (expr.callee.entity instanceof _types_expression__WEBPACK_IMPORTED_MODULE_0__.Base) {
                thiz = this.scope.get("this", expr.paren);
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
            if (argument instanceof _types_expression__WEBPACK_IMPORTED_MODULE_0__.Spread) {
                const value = this.evaluate(argument.value);
                this.spreadAnyIntoList(value, args);
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
                    args.push(new _types_null__WEBPACK_IMPORTED_MODULE_10__.$Null());
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
        const entity = new _types_object__WEBPACK_IMPORTED_MODULE_12__.$Object(new Map(), clazz);
        // constructor method of the class
        const conztructor = clazz.get(new _types_string__WEBPACK_IMPORTED_MODULE_14__.$String("constructor"));
        if (conztructor.isFunction()) {
            /*
            const args: $Any[] = [];
            for (const arg of newCall.args) {
                args.push(this.evaluate(arg));
            }
            conztructor.call(this, entity, args);
            */
            this.evaluate(new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Call(new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Get(new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Literal(entity, expr.line), new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Key(conztructor.declaration.name, expr.line), _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Dot, expr.line), conztructor.declaration.name, newCall.args, entity, expr.line));
        }
        return entity;
    }
    visitDictionaryExpr(expr) {
        const dict = new _types_dictionary__WEBPACK_IMPORTED_MODULE_7__.$Dictionary(new Map());
        for (const property of expr.properties) {
            if (property instanceof _types_expression__WEBPACK_IMPORTED_MODULE_0__.Spread) {
                const value = this.evaluate(property.value);
                const it = new _types_iterator__WEBPACK_IMPORTED_MODULE_20__.$Iterator(value);
                while (!_types_iterator__WEBPACK_IMPORTED_MODULE_20__.$Iterator.next(it, [], this).iter.done.value) {
                    dict.set(it.iter.index, it.iter.value);
                }
            }
            else {
                const key = this.evaluate(property.key);
                const value = this.evaluate(property.value);
                dict.set(key, value);
            }
        }
        return dict;
    }
    visitKeyExpr(expr) {
        return new _types_any__WEBPACK_IMPORTED_MODULE_4__.$Any(expr.name.literal);
    }
    visitGetExpr(expr) {
        const entity = this.evaluate(expr.entity);
        const key = this.evaluate(expr.key);
        if (entity.isNull() && expr.type === _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.QuestionDot) {
            return new _types_null__WEBPACK_IMPORTED_MODULE_10__.$Null();
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
        const func = new _types_function__WEBPACK_IMPORTED_MODULE_8__.$Function(stmt, this.scope);
        this.scope.define(stmt.name.lexeme, func);
        return func;
    }
    visitClassStmt(stmt) {
        let parent;
        if (stmt.parent === null) {
            parent = new _types_null__WEBPACK_IMPORTED_MODULE_10__.$Null();
        }
        else {
            parent = this.scope.get(stmt.parent.lexeme, stmt.parent);
        }
        const methods = new Map();
        for (const method of stmt.methods) {
            methods.set(method.name.lexeme, new _types_function__WEBPACK_IMPORTED_MODULE_8__.$Function(method, this.scope));
        }
        const clazz = new _types_class__WEBPACK_IMPORTED_MODULE_6__.$Class(stmt.name.lexeme, methods, parent);
        this.scope.define(stmt.name.lexeme, clazz);
        return clazz;
    }
    visitLambdaExpr(expr) {
        const lambda = expr.lambda;
        const func = new _types_function__WEBPACK_IMPORTED_MODULE_8__.$Function(lambda, this.scope);
        return func;
    }
    visitReturnStmt(stmt) {
        let value = new _types_null__WEBPACK_IMPORTED_MODULE_10__.$Null();
        if (stmt.value) {
            value = this.evaluate(stmt.value);
        }
        throw new _types_any__WEBPACK_IMPORTED_MODULE_4__.$Any(value, _types_type_enum__WEBPACK_IMPORTED_MODULE_16__.DataType.Return);
    }
    visitBreakStmt(stmt) {
        throw new _types_any__WEBPACK_IMPORTED_MODULE_4__.$Any(null, _types_type_enum__WEBPACK_IMPORTED_MODULE_16__.DataType.Break);
    }
    visitContinueStmt(stmt) {
        throw new _types_any__WEBPACK_IMPORTED_MODULE_4__.$Any(null, _types_type_enum__WEBPACK_IMPORTED_MODULE_16__.DataType.Continue);
    }
    visitRangeExpr(expr) {
        const start = expr.start ? this.evaluate(expr.start).value : null;
        const end = expr.end ? this.evaluate(expr.end).value : null;
        const step = expr.step
            ? this.evaluate(expr.step).value
            : start <= end
                ? 1
                : -1;
        return new _types_range__WEBPACK_IMPORTED_MODULE_13__.$Range(new _types_range__WEBPACK_IMPORTED_MODULE_13__.RangeValue(start, end, step));
    }
    visitTypeofExpr(expr) {
        const value = this.evaluate(expr.value);
        return new _types_string__WEBPACK_IMPORTED_MODULE_14__.$String(_types_type_enum__WEBPACK_IMPORTED_MODULE_16__.DataType[value.type].toLowerCase());
    }
    visitIsExpr(expr) {
        const left = this.evaluate(expr.left);
        const right = _types_type_enum__WEBPACK_IMPORTED_MODULE_16__.DataType[(0,_utils__WEBPACK_IMPORTED_MODULE_17__.capitalize)(expr.right.lexeme)];
        // is direct instance of class
        if (left.isObject() && left.name === expr.right.lexeme) {
            return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__.$Boolean(true);
        }
        // is not a type
        if (typeof right === "undefined" || isNaN(right)) {
            return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__.$Boolean(false);
        }
        // is a type
        return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__.$Boolean(left.type === right);
    }
    visitInstanceOfExpr(expr) {
        const left = this.evaluate(expr.left);
        if (!left.isObject()) {
            return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__.$Boolean(false);
        }
        const className = expr.right.lexeme;
        // All instances derive from Object
        if (className.toLowerCase() === "object") {
            return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__.$Boolean(true);
        }
        const instance = left;
        let conztructor = instance.conztructor;
        if (conztructor.name === className) {
            return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__.$Boolean(true);
        }
        while (!conztructor.parent.isNull()) {
            conztructor = conztructor.parent;
            if (conztructor.name === className) {
                return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__.$Boolean(true);
            }
        }
        return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__.$Boolean(false);
    }
    visitVoidExpr(expr) {
        this.evaluate(expr.value);
        return new _types_null__WEBPACK_IMPORTED_MODULE_10__.$Null();
    }
    visitInExpr(expr) {
        const key = this.evaluate(expr.key);
        const entity = this.evaluate(expr.entity);
        if (entity.isKeyValue()) {
            return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__.$Boolean(entity.value.has(key.value));
        }
        if (entity.isList()) {
            return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__.$Boolean(typeof entity.value[key.value] !== "undefined");
        }
        if (entity.isString()) {
            return new _types_boolean__WEBPACK_IMPORTED_MODULE_5__.$Boolean(entity.value.includes(key.value));
        }
        this.error(`Operator "in" can't be used on type ${_types_type_enum__WEBPACK_IMPORTED_MODULE_16__.DataType[entity.type]} with value "${entity}"`);
        return new _types_null__WEBPACK_IMPORTED_MODULE_10__.$Null();
    }
    visitCharExpr(expr) {
        const value = this.evaluate(expr.value);
        return new _types_string__WEBPACK_IMPORTED_MODULE_14__.$String(String.fromCharCode(value.value));
    }
    visitSpreadExpr(expr) {
        // this.error(`unexpected spread '...' operator at line ${expr.line}`);
        return new _types_null__WEBPACK_IMPORTED_MODULE_10__.$Null();
    }
    visitDeleteExpr(expr) {
        if (!(expr.value instanceof _types_expression__WEBPACK_IMPORTED_MODULE_0__.Get)) {
            const value = this.evaluate(expr.value);
            const type = _types_type_enum__WEBPACK_IMPORTED_MODULE_16__.DataType[value.type].toLowerCase();
            this.error(`Can't delete on type ${type} with value '${value}'. Not a Dictionary, Class or Entity`);
            return new _types_null__WEBPACK_IMPORTED_MODULE_10__.$Null();
        }
        const getExpr = expr.value;
        const entity = this.evaluate(getExpr.entity);
        const key = this.evaluate(getExpr.key);
        return entity.delete(key);
    }
}


/***/ }),

/***/ "./src/parser.ts":
/*!***********************!*\
  !*** ./src/parser.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Parser: () => (/* binding */ Parser)
/* harmony export */ });
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
                if (e instanceof _types_error__WEBPACK_IMPORTED_MODULE_6__.$Error) {
                    this.errors.push(`Parse Error (${e.line}:${e.col}) => ${e.value}`);
                }
                else {
                    this.errors.push(e);
                    if (this.errors.length > 100) {
                        this.errors.push("Parse Error limit exceeded");
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
    peekNext() {
        if (!this.eof()) {
            return this.tokens[this.current + 1];
        }
        return this.peek();
    }
    check(type) {
        return this.peek().type === type;
    }
    eof() {
        return this.check(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Eof);
    }
    consume(type, message) {
        if (this.check(type)) {
            return this.advance();
        }
        return this.error(this.previous(), message + `, unexpected token "${this.peek().lexeme}"`);
    }
    extraSemicolon() {
        const match = this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Semicolon);
        if (this.check(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Semicolon)) {
            while (this.check(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Semicolon)) {
                this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Semicolon, "");
            }
        }
        return match;
    }
    error(token, message) {
        throw new _types_error__WEBPACK_IMPORTED_MODULE_6__.$Error(message, token.line, token.col);
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
                case _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Class:
                case _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Function:
                case _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Var:
                case _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.For:
                case _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.If:
                case _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.While:
                case _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Do:
                case _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Print:
                case _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Return:
                    this.advance();
                    return;
            }
            if (this.check(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Semicolon) ||
                this.check(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.RightBrace)) {
                this.advance();
                return;
            }
            this.advance();
        } while (!this.eof());
    }
    declaration() {
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Class)) {
            return this.classDeclaration();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Function)) {
            return this.funcDeclaration("function");
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Var)) {
            return this.varDeclaration();
        }
        return this.statement();
    }
    classDeclaration() {
        const name = this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Identifier, `Expected a class name`);
        let parent = null;
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Extends)) {
            parent = this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Identifier, `Expected a parent name`);
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.LeftBrace, `Expected open brace "{" after class name`);
        const methods = [];
        while (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.RightBrace) && !this.eof()) {
            if (this.check(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Function)) {
                this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Function, "");
            }
            methods.push(this.funcDeclaration("method"));
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.RightBrace, `Expected "}" after class "${name.literal}" methods`);
        if (this.extraSemicolon()) {
            this.warning(`Unnecessary semicolon after class ${name.lexeme} declaration`);
        }
        return new _types_statement__WEBPACK_IMPORTED_MODULE_1__.Class(name, parent, methods, name.line);
    }
    funcDeclaration(kind) {
        const name = this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Identifier, `Expected a ${kind} name`);
        return this.funcParamsBody(name, kind);
    }
    funcParams(kind) {
        const params = [];
        if (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.RightParen)) {
            do {
                if (params.length >= 255) {
                    this.error(this.peek(), `Parameter count exceeds 255`);
                }
                params.push(this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Identifier, `Expected a parameter name`));
            } while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Comma));
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.RightParen, `Expected close parenthesis ")" after ${kind} parameters`);
        return params;
    }
    funcParamsBody(name, kind) {
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.LeftParen, `Expected open parenthesis "(" after ${kind}`);
        const params = this.funcParams(kind);
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.LeftBrace)) {
            const body = this.block();
            if (name.type !== _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Lambda && this.extraSemicolon()) {
                this.warning(`Unnecessary semicolon after function ${name.lexeme} declaration`);
            }
            return new _types_statement__WEBPACK_IMPORTED_MODULE_1__.Func(name, params, body, name.line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Arrow)) {
            const body = [];
            let arrow;
            const keyword = this.previous();
            if (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Semicolon)) {
                arrow = this.expression();
            }
            this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Semicolon);
            body.push(new _types_statement__WEBPACK_IMPORTED_MODULE_1__.Return(keyword, arrow, keyword.line));
            return new _types_statement__WEBPACK_IMPORTED_MODULE_1__.Func(name, params, body, name.line);
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.LeftBrace, `Expect "{" before ${kind} body`);
    }
    varDeclaration() {
        const name = this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Identifier, `Expected a variable name after "var" keyword`);
        let initializer = null;
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Equal)) {
            initializer = this.expression();
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Semicolon, `Expected semicolon ";" after a variable declaration`);
        return new _types_statement__WEBPACK_IMPORTED_MODULE_1__.Var(name, null, initializer, name.line);
    }
    statement() {
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.If)) {
            return this.ifStatement();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Print)) {
            return this.printStatement();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Do)) {
            return this.doWhileStatement();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.While)) {
            return this.whileStatement();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.For)) {
            return this.forStatement();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Foreach)) {
            return this.foreachStatement();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.LeftBrace)) {
            return new _types_statement__WEBPACK_IMPORTED_MODULE_1__.Block(this.block(), this.previous().line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Return)) {
            return this.returnStatement();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Break)) {
            return this.breakStatement();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Continue)) {
            return this.continueStatement();
        }
        return this.expressionStatement();
    }
    ifStatement() {
        const keyword = this.previous();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.LeftParen, `Expected open parenthesis "(" after an "if" keyword`);
        const condition = this.expression();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.RightParen, `Expected close parenthesis ")" after "if" statement condition`);
        const thenStmt = this.statement();
        let elseStmt = null;
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Else)) {
            elseStmt = this.statement();
        }
        return new _types_statement__WEBPACK_IMPORTED_MODULE_1__.If(condition, thenStmt, elseStmt, keyword.line);
    }
    whileStatement() {
        const keyword = this.previous();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.LeftParen, `Expected open parenthesis "(" after a "while" statement`);
        const condition = this.expression();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.RightParen, `Expected close parenthesis ")" after "while" condition`);
        const loop = this.statement();
        return new _types_statement__WEBPACK_IMPORTED_MODULE_1__.While(condition, loop, keyword.line);
    }
    forStatement() {
        const keyword = this.previous();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.LeftParen, `Expected open parenthesis "(" after a "for" statement`);
        let initializer;
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Semicolon)) {
            initializer = null;
        }
        else if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Var)) {
            initializer = this.varDeclaration();
        }
        else {
            initializer = this.expressionStatement();
        }
        let condition;
        if (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Semicolon)) {
            condition = this.expression();
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Semicolon, `Expected semicolon ";" after a "for" statement loop condition`);
        let increment;
        if (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.RightParen)) {
            increment = this.expression();
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.RightParen, `Expected semicolon ";" after a "for" stement increment expression`);
        let body = this.statement();
        return new _types_statement__WEBPACK_IMPORTED_MODULE_1__.For(initializer, condition, increment, body, keyword.line);
    }
    foreachStatement() {
        const keyword = this.previous();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.LeftParen, `Expected open parenthesis "(" after a "foreach" statement`);
        const name = this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Identifier, `Expected an identifier inside "foreach" statement`);
        let key = null;
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.With)) {
            key = this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Identifier, `Expected a "key" identifier after "with" keyword in foreach statement`);
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.In, `Expected "in" keyword inside foreach statement`);
        const iterable = this.expression();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.RightParen, `Expected close parenthesis ")" after a "foreach" initialization`);
        const loop = this.statement();
        let none = null;
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.None)) {
            none = this.statement();
        }
        return new _types_statement__WEBPACK_IMPORTED_MODULE_1__.Foreach(name, key, iterable, loop, none, keyword.line);
    }
    doWhileStatement() {
        const keyword = this.previous();
        const loop = this.statement();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.While, `Expected a "while" condition after "do" statement`);
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.LeftParen, `Expected open parenthesis "(" after a "while" keyword`);
        const condition = this.expression();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.RightParen, `Expected close parenthesis ")" after "while" condition`);
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Semicolon, `Expected semicolon ";" after a do while condition`);
        return new _types_statement__WEBPACK_IMPORTED_MODULE_1__.DoWhile(loop, condition, keyword.line);
    }
    printStatement() {
        const keyword = this.previous();
        const value = this.expression();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Semicolon, `Expected semicolon ";" after expression`);
        return new _types_statement__WEBPACK_IMPORTED_MODULE_1__.Print(value, keyword.line);
    }
    returnStatement() {
        const keyword = this.previous();
        let value = null;
        if (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Semicolon)) {
            value = this.expression();
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Semicolon, `Exected semicolon ";" after return statement`);
        return new _types_statement__WEBPACK_IMPORTED_MODULE_1__.Return(keyword, value, keyword.line);
    }
    breakStatement() {
        const keyword = this.previous();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Semicolon, `Exected semicolon ";" after break statement`);
        return new _types_statement__WEBPACK_IMPORTED_MODULE_1__.Break(keyword, keyword.line);
    }
    continueStatement() {
        const keyword = this.previous();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Semicolon, `Exected semicolon ";" after continue statement`);
        return new _types_statement__WEBPACK_IMPORTED_MODULE_1__.Continue(keyword, keyword.line);
    }
    block() {
        const statements = [];
        while (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.RightBrace) && !this.eof()) {
            statements.push(this.declaration());
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.RightBrace, `Expected close brace "}" after block statement`);
        return statements;
    }
    expressionStatement() {
        const expression = this.expression();
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Semicolon, `Expected semicolon ";" after ${expression} expression`);
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Semicolon)) {
            const token = this.previous();
            this.warning(`[line (${token.line}) parse warning at "${token.lexeme}"] => unnecessary semicolon or empty statement`);
            // consume all semicolons
            // tslint:disable-next-line
            while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Semicolon)) { }
        }
        return new _types_statement__WEBPACK_IMPORTED_MODULE_1__.Expression(expression, expression.line);
    }
    expression() {
        return this.assignment();
    }
    assignment() {
        const expr = this.ternary();
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Equal, _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.PlusEqual, _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.MinusEqual, _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.StarEqual, _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.SlashEqual)) {
            const operator = this.previous();
            let value = this.assignment();
            if (expr instanceof _types_expression__WEBPACK_IMPORTED_MODULE_0__.Variable) {
                const name = expr.name;
                if (operator.type !== _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Equal) {
                    value = new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Binary(new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Variable(name, name.line), operator, value, operator.line);
                }
                return new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Assign(name, value, name.line);
            }
            else if (expr instanceof _types_expression__WEBPACK_IMPORTED_MODULE_0__.Get) {
                if (operator.type !== _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Equal) {
                    value = new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Binary(new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Get(expr.entity, expr.key, expr.type, expr.line), operator, value, operator.line);
                }
                return new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Set(expr.entity, expr.key, value, expr.line);
            }
            this.error(operator, `Invalid l-value, is not an assigning target.`);
        }
        return expr;
    }
    ternary() {
        const expr = this.nullCoalescing();
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Question)) {
            const thenExpr = this.ternary();
            this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Colon, `Expected ":" after ternary ? expression`);
            const elseExpr = this.ternary();
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Ternary(expr, thenExpr, elseExpr, expr.line);
        }
        return expr;
    }
    nullCoalescing() {
        const expr = this.logicalOr();
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.QuestionQuestion)) {
            const rightExpr = this.nullCoalescing();
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__.NullCoalescing(expr, rightExpr, expr.line);
        }
        return expr;
    }
    logicalOr() {
        let expr = this.logicalAnd();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Or)) {
            const operator = this.previous();
            const right = this.logicalAnd();
            expr = new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Logical(expr, operator, right, operator.line);
        }
        return expr;
    }
    logicalAnd() {
        let expr = this.equality();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.And)) {
            const operator = this.previous();
            const right = this.equality();
            expr = new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Logical(expr, operator, right, operator.line);
        }
        return expr;
    }
    equality() {
        let expr = this.instanceof();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.BangEqual, _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.EqualEqual, _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.LessEqualGreater)) {
            const operator = this.previous();
            const right = this.instanceof();
            expr = new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Binary(expr, operator, right, operator.line);
        }
        return expr;
    }
    instanceof() {
        let expr = this.in();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Is, _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Instanceof)) {
            const operator = this.previous();
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Identifier, _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Class, _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Function, _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Null)) {
                const right = this.previous();
                if (operator.type === _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Instanceof) {
                    expr = new _types_expression__WEBPACK_IMPORTED_MODULE_0__.InstanceOf(expr, right, operator.line);
                }
                else {
                    expr = new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Is(expr, right, operator.line);
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
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.In)) {
            const operator = this.previous();
            const entity = this.expression();
            expr = new _types_expression__WEBPACK_IMPORTED_MODULE_0__.In(expr, entity, operator.line);
        }
        return expr;
    }
    comparison() {
        let expr = this.addition();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Greater, _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.GreaterEqual, _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Less, _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.LessEqual)) {
            const operator = this.previous();
            const right = this.addition();
            expr = new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Binary(expr, operator, right, operator.line);
        }
        return expr;
    }
    addition() {
        let expr = this.modulus();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Minus, _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Plus)) {
            const operator = this.previous();
            const right = this.modulus();
            expr = new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Binary(expr, operator, right, operator.line);
        }
        return expr;
    }
    modulus() {
        let expr = this.multiplication();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Percent)) {
            const operator = this.previous();
            const right = this.multiplication();
            expr = new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Binary(expr, operator, right, operator.line);
        }
        return expr;
    }
    multiplication() {
        let expr = this.typeof();
        while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Slash, _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Star)) {
            const operator = this.previous();
            const right = this.typeof();
            expr = new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Binary(expr, operator, right, operator.line);
        }
        return expr;
    }
    typeof() {
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Typeof)) {
            const operator = this.previous();
            const value = this.typeof();
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Typeof(value, operator.line);
        }
        return this.delete();
    }
    delete() {
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Delete)) {
            const operator = this.previous();
            const value = this.delete();
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Delete(value, operator.line);
        }
        return this.range();
    }
    range() {
        let expr = this.unary();
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.DotDot)) {
            const end = this.unary();
            expr = new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Range(expr, end, null, expr.line);
        }
        return expr;
    }
    unary() {
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Minus, _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Bang, _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Dollar, _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.PlusPlus, _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.MinusMinus)) {
            const operator = this.previous();
            const right = this.unary();
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Unary(operator, right, operator.line);
        }
        return this.newKeyword();
    }
    newKeyword() {
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.New)) {
            const keyword = this.previous();
            const construct = this.call();
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__.New(construct, keyword.line);
        }
        return this.call();
    }
    call() {
        let expr = this.primary();
        let consumed = true;
        do {
            consumed = false;
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.LeftParen)) {
                consumed = true;
                do {
                    const args = [];
                    if (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.RightParen)) {
                        do {
                            args.push(this.expression());
                        } while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Comma));
                    }
                    const paren = this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.RightParen, `Expected ")" after arguments`);
                    expr = new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Call(expr, paren, args, null, paren.line);
                } while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.LeftParen));
            }
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Dot, _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.QuestionDot)) {
                consumed = true;
                expr = this.dotGet(expr, this.previous());
            }
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.LeftBracket)) {
                consumed = true;
                expr = this.bracketGet(expr, this.previous());
            }
        } while (consumed);
        return expr;
    }
    dotGet(expr, operator) {
        const name = this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Identifier, `Expect property name after '.'`);
        const key = new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Key(name, name.line);
        return new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Get(expr, key, operator.type, name.line);
    }
    bracketGet(expr, operator) {
        let key = null;
        let end = null;
        let step = new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Literal(new _types_number__WEBPACK_IMPORTED_MODULE_5__.$Number(1), operator.line);
        let isRange = false;
        if (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Colon)) {
            key = this.expression();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Colon) && !this.check(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Colon)) {
            isRange = true;
            end = this.expression();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Colon) &&
            !this.check(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.RightBracket)) {
            isRange = true;
            step = this.expression();
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.RightBracket, `Expected "]" after an index`);
        if (isRange) {
            const range = new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Range(key, end, step, operator.line);
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Get(expr, range, operator.type, operator.line);
        }
        return new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Get(expr, key, operator.type, operator.line);
    }
    primary() {
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.False)) {
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Literal(new _types_boolean__WEBPACK_IMPORTED_MODULE_3__.$Boolean(false), this.previous().line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.True)) {
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Literal(new _types_boolean__WEBPACK_IMPORTED_MODULE_3__.$Boolean(true), this.previous().line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Null)) {
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Literal(new _types_null__WEBPACK_IMPORTED_MODULE_4__.$Null(), this.previous().line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Number)) {
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Literal(new _types_number__WEBPACK_IMPORTED_MODULE_5__.$Number(this.previous().literal), this.previous().line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.String)) {
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Ztring(this.previous().literal, this.previous().line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Template)) {
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Template(this.previous().literal, this.previous().line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Regex)) {
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__.RegEx(this.previous().literal, this.previous().line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Base)) {
            const paren = this.previous();
            paren.lexeme = "this";
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Base(paren, paren.line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Identifier)) {
            const identifier = this.previous();
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.PlusPlus)) {
                return new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Postfix(identifier, 1, identifier.line);
            }
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.MinusMinus)) {
                return new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Postfix(identifier, -1, identifier.line);
            }
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Variable(identifier, identifier.line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.LeftParen)) {
            const expr = this.expression();
            this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.RightParen, `Expected ")" after expression`);
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Grouping(expr, expr.line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.LeftBrace)) {
            return this.dictionary();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Function)) {
            const token = new _token__WEBPACK_IMPORTED_MODULE_2__.Token(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Lambda, "@", "@", this.previous().line, this.previous().col);
            const lambda = this.funcParamsBody(token, "lambda");
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Lambda(lambda, token.line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.LeftBracket)) {
            return this.list();
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Void)) {
            const expr = this.expression();
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Void(expr, this.previous().line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.DotDotDot)) {
            const expr = this.range();
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Spread(expr, this.previous().line);
        }
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Hash)) {
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Char(this.call(), this.previous().line);
        }
        throw this.error(this.peek(), `Expected expression, unexpected token "${this.peek().lexeme}"`);
        // unreacheable code
        return new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Literal(null, 0);
    }
    dictionary() {
        const leftBrace = this.previous();
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.RightBrace)) {
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Dictionary([], this.previous().line);
        }
        const properties = [];
        do {
            if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.String, _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Identifier, _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Number)) {
                const key = this.previous();
                if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Colon)) {
                    const value = this.expression();
                    properties.push(new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Set(null, new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Key(key, key.line), value, key.line));
                }
                else {
                    const value = new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Variable(key, key.line);
                    properties.push(new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Set(null, new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Key(key, key.line), value, key.line));
                }
            }
            else if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.DotDotDot)) {
                const value = this.expression();
                properties.push(new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Spread(value, value.line));
            }
            else {
                this.error(this.peek(), `String, Number or Identifier expected as a Key of Dictionary {, unexpected token ${this.peek().lexeme}`);
            }
        } while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Comma));
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.RightBrace, `Expected "}" after object literal`);
        return new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Dictionary(properties, leftBrace.line);
    }
    list() {
        const values = [];
        const leftBracket = this.previous();
        if (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.RightBracket)) {
            return new _types_expression__WEBPACK_IMPORTED_MODULE_0__.List([], this.previous().line);
        }
        if (this.peekNext().type === _token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Colon) {
            let step = new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Literal(new _types_number__WEBPACK_IMPORTED_MODULE_5__.$Number(1), leftBracket.line);
            const start = this.expression();
            this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Colon, `Expected ":" color after start of range expression`);
            const end = this.expression();
            this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Colon, `Expected ":" color after end of range expression`);
            if (!this.check(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.RightBracket)) {
                step = this.expression();
            }
            values.push(new _types_expression__WEBPACK_IMPORTED_MODULE_0__.Range(start, end, step, start.line));
        }
        else {
            do {
                values.push(this.expression());
            } while (this.match(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.Comma));
        }
        this.consume(_token__WEBPACK_IMPORTED_MODULE_2__.TokenType.RightBracket, `Expected "]" after array declaration`);
        return new _types_expression__WEBPACK_IMPORTED_MODULE_0__.List(values, leftBracket.line);
    }
}


/***/ }),

/***/ "./src/runtime.ts":
/*!************************!*\
  !*** ./src/runtime.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Runtime: () => (/* binding */ Runtime),
/* harmony export */   fromJavaScriptFuncNumber: () => (/* binding */ fromJavaScriptFuncNumber),
/* harmony export */   fromJavaScriptFuncVoid: () => (/* binding */ fromJavaScriptFuncVoid),
/* harmony export */   fromJavaScriptMethod: () => (/* binding */ fromJavaScriptMethod)
/* harmony export */ });
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
    return new _types_function__WEBPACK_IMPORTED_MODULE_3__.$Callable(jsName, arity, (thiz, args) => {
        const argValues = args.map((arg) => arg.value);
        const result = thiz.value[jsName](...argValues);
        switch (type) {
            case _types_type_enum__WEBPACK_IMPORTED_MODULE_0__.DataType.Boolean:
                return new _types_boolean__WEBPACK_IMPORTED_MODULE_4__.$Boolean(result);
            case _types_type_enum__WEBPACK_IMPORTED_MODULE_0__.DataType.String:
                return new _types_string__WEBPACK_IMPORTED_MODULE_7__.$String(result);
            case _types_type_enum__WEBPACK_IMPORTED_MODULE_0__.DataType.Number:
                return new _types_number__WEBPACK_IMPORTED_MODULE_6__.$Number(result);
            case _types_type_enum__WEBPACK_IMPORTED_MODULE_0__.DataType.List:
                return new _types_list__WEBPACK_IMPORTED_MODULE_5__.$List(result);
            case _types_type_enum__WEBPACK_IMPORTED_MODULE_0__.DataType.Null:
                return new _types_null__WEBPACK_IMPORTED_MODULE_1__.$Null();
            default:
                return new _types_any__WEBPACK_IMPORTED_MODULE_2__.$Any(result);
        }
    });
}
function fromJavaScriptFuncNumber(func, name, arity) {
    return new _types_function__WEBPACK_IMPORTED_MODULE_3__.$Callable(name, arity, (thiz, args) => {
        const argValues = args.map((arg) => arg.value);
        const result = func(...argValues);
        return new _types_number__WEBPACK_IMPORTED_MODULE_6__.$Number(result);
    });
}
function fromJavaScriptFuncVoid(func, name, arity) {
    return new _types_function__WEBPACK_IMPORTED_MODULE_3__.$Callable(name, arity, (thiz, args) => {
        const argValues = args.map((arg) => arg.value);
        func(...argValues);
        return new _types_void__WEBPACK_IMPORTED_MODULE_8__.$Void('void');
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
        ['pi', new _types_number__WEBPACK_IMPORTED_MODULE_6__.$Number(Math.PI)],
        ['pow', fromJavaScriptFuncNumber(Math.pow, 'pow', 2)],
        ['random', fromJavaScriptFuncNumber(Math.random, 'random', 0)],
        ['round', fromJavaScriptFuncNumber(Math.round, 'round', 1)],
        ['sin', fromJavaScriptFuncNumber(Math.sin, 'sin', 1)],
        ['sqrt', fromJavaScriptFuncNumber(Math.sqrt, 'sqrt', 1)],
        ['tan', fromJavaScriptFuncNumber(Math.tan, 'tan', 1)],
        ['trunc', fromJavaScriptFuncNumber(Math.trunc, 'trunc', 1)]
    ]),
    Utils: new Map([
        ['re', new _types_function__WEBPACK_IMPORTED_MODULE_3__.$Callable('regex', -1, (thiz, args) => {
                const values = args.map((arg) => arg.value);
                if (values.length === 1) {
                    return new _types_regex__WEBPACK_IMPORTED_MODULE_9__.$RegExp(new RegExp(values[0]));
                }
                return new _types_regex__WEBPACK_IMPORTED_MODULE_9__.$RegExp(new RegExp(values[0], values[1]));
            })],
        ['iter', new _types_function__WEBPACK_IMPORTED_MODULE_3__.$Callable('iter', 1, (thiz, args) => {
                return new _types_iterator__WEBPACK_IMPORTED_MODULE_10__.$Iterator(args[0]);
            })],
        ['delay', new _types_function__WEBPACK_IMPORTED_MODULE_3__.$Callable('delay', 2, (thiz, args, interpreter) => {
                setTimeout(() => {
                    args[0].call(thiz, [], interpreter);
                }, args[1].value);
                return new _types_null__WEBPACK_IMPORTED_MODULE_1__.$Null();
            })],
        ['fetch', new _types_function__WEBPACK_IMPORTED_MODULE_3__.$Callable('fetch', 2, (thiz, args, interpreter) => {
                fetch(args[0].value)
                    .then((response) => response.text())
                    .then((json) => {
                    args[1].call(thiz, [new _types_string__WEBPACK_IMPORTED_MODULE_7__.$String(json)], interpreter);
                });
                return new _types_null__WEBPACK_IMPORTED_MODULE_1__.$Null();
            })],
    ])
};


/***/ }),

/***/ "./src/scanner.ts":
/*!************************!*\
  !*** ./src/scanner.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Scanner: () => (/* binding */ Scanner)
/* harmony export */ });
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
                    this.errors.push("Error limit exceeded");
                    return this.tokens;
                }
            }
        }
        this.tokens.push(new _token__WEBPACK_IMPORTED_MODULE_0__.Token(_token__WEBPACK_IMPORTED_MODULE_0__.TokenType.Eof, "", null, this.line, 0));
        return this.tokens;
    }
    eof() {
        return this.current >= this.source.length;
    }
    advance() {
        if (this.peek() === "\n") {
            this.line++;
            this.col = 0;
        }
        this.current++;
        this.col++;
        return this.source.charAt(this.current - 1);
    }
    addToken(tokenType, literal) {
        const text = this.source.substring(this.start, this.current);
        this.tokens.push(new _token__WEBPACK_IMPORTED_MODULE_0__.Token(tokenType, text, literal, this.line, this.col));
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
            return "\0";
        }
        return this.source.charAt(this.current);
    }
    peekNext() {
        if (this.current + 1 >= this.source.length) {
            return "\0";
        }
        return this.source.charAt(this.current + 1);
    }
    comment() {
        while (this.peek() !== "\n" && !this.eof()) {
            this.advance();
        }
    }
    multilineComment() {
        while (!this.eof() &&
            !(this.peek() === "*" && this.peekNext() === "/")) {
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
        this.addToken(quote !== "`" ? _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.String : _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.Template, value);
    }
    number() {
        // gets integer part
        while (_utils__WEBPACK_IMPORTED_MODULE_1__.isDigit(this.peek())) {
            this.advance();
        }
        // checks for fraction
        if (this.peek() === "." && _utils__WEBPACK_IMPORTED_MODULE_1__.isDigit(this.peekNext())) {
            this.advance();
        }
        // gets fraction part
        while (_utils__WEBPACK_IMPORTED_MODULE_1__.isDigit(this.peek())) {
            this.advance();
        }
        // checks for exponent
        if (this.peek().toLowerCase() === "e") {
            this.advance();
            if (this.peek() === "-" || this.peek() === "+") {
                this.advance();
            }
        }
        while (_utils__WEBPACK_IMPORTED_MODULE_1__.isDigit(this.peek())) {
            this.advance();
        }
        const value = this.source.substring(this.start, this.current);
        this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__.TokenType.Number, Number(value));
    }
    identifier() {
        while (_utils__WEBPACK_IMPORTED_MODULE_1__.isAlphaNumeric(this.peek())) {
            this.advance();
        }
        const value = this.source.substring(this.start, this.current);
        const capitalized = _utils__WEBPACK_IMPORTED_MODULE_1__.capitalize(value);
        if (_utils__WEBPACK_IMPORTED_MODULE_1__.isKeyword(capitalized)) {
            this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__.TokenType[capitalized], value);
        }
        else {
            this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__.TokenType.Identifier, value);
        }
    }
    getToken() {
        const char = this.advance();
        switch (char) {
            case "(":
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__.TokenType.LeftParen, null);
                break;
            case ")":
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__.TokenType.RightParen, null);
                break;
            case "[":
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__.TokenType.LeftBracket, null);
                break;
            case "]":
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__.TokenType.RightBracket, null);
                break;
            case "{":
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__.TokenType.LeftBrace, null);
                break;
            case "}":
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__.TokenType.RightBrace, null);
                break;
            case ",":
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__.TokenType.Comma, null);
                break;
            case ";":
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__.TokenType.Semicolon, null);
                break;
            case "^":
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__.TokenType.Caret, null);
                break;
            case "$":
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__.TokenType.Dollar, null);
                break;
            case "#":
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__.TokenType.Hash, null);
                break;
            case "@":
                this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__.TokenType.Function, "@");
                break;
            case ":":
                this.addToken(this.match("=") ? _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.Arrow : _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.Colon, null);
                break;
            case "*":
                this.addToken(this.match("=") ? _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.StarEqual : _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.Star, null);
                break;
            case "%":
                this.addToken(this.match("=")
                    ? _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.PercentEqual
                    : _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.Percent, null);
                break;
            case "|":
                this.addToken(this.match("|") ? _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.Or : _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.Pipe, null);
                break;
            case "&":
                this.addToken(this.match("&") ? _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.And : _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.Ampersand, null);
                break;
            case ">":
                this.addToken(this.match("=")
                    ? _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.GreaterEqual
                    : _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.Greater, null);
                break;
            case "!":
                this.addToken(this.match("=") ? _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.BangEqual : _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.Bang, null);
                break;
            case "?":
                this.addToken(this.match("?")
                    ? _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.QuestionQuestion
                    : this.match(".")
                        ? _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.QuestionDot
                        : _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.Question, null);
                break;
            case "=":
                this.addToken(this.match("=")
                    ? _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.EqualEqual
                    : this.match(">")
                        ? _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.Arrow
                        : _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.Equal, null);
                break;
            case "+":
                this.addToken(this.match("+")
                    ? _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.PlusPlus
                    : this.match("=")
                        ? _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.PlusEqual
                        : _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.Plus, null);
                break;
            case "-":
                this.addToken(this.match("-")
                    ? _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.MinusMinus
                    : this.match(">")
                        ? _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.Return
                        : this.match("=")
                            ? _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.MinusEqual
                            : _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.Minus, null);
                break;
            case "<":
                this.addToken(this.match("=")
                    ? this.match(">")
                        ? _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.LessEqualGreater
                        : _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.LessEqual
                    : _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.Less, null);
                break;
            case ".":
                if (this.match(".")) {
                    if (this.match(".")) {
                        this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__.TokenType.DotDotDot, null);
                    }
                    else {
                        this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__.TokenType.DotDot, null);
                    }
                }
                else {
                    this.addToken(_token__WEBPACK_IMPORTED_MODULE_0__.TokenType.Dot, null);
                }
                break;
            case "/":
                if (this.match("/")) {
                    this.comment();
                }
                else if (this.match("*")) {
                    this.multilineComment();
                }
                else {
                    this.addToken(this.match("=")
                        ? _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.SlashEqual
                        : _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.Slash, null);
                }
                break;
            case `'`:
            case `"`:
            case "`":
                this.string(char);
                break;
            // ignore cases
            case "\n":
            case " ":
            case "\r":
            case "\t":
                break;
            // compex cases
            default:
                if (_utils__WEBPACK_IMPORTED_MODULE_1__.isDigit(char)) {
                    this.number();
                }
                else if (_utils__WEBPACK_IMPORTED_MODULE_1__.isAlpha(char)) {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Scope: () => (/* binding */ Scope)
/* harmony export */ });
/* harmony import */ var _types_null__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/null */ "./src/types/null.ts");

class Scope {
    constructor(parent = null) {
        this.values = new Map();
        this.parent = parent;
    }
    error(message) {
        throw new Error(`Runtime Error => ${message}`);
    }
    clone() {
        const clone = new Scope(this.parent);
        clone.values = new Map(this.values);
        return clone;
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
        return new _types_null__WEBPACK_IMPORTED_MODULE_0__.$Null();
    }
}


/***/ }),

/***/ "./src/token.ts":
/*!**********************!*\
  !*** ./src/token.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Token: () => (/* binding */ Token),
/* harmony export */   TokenType: () => (/* binding */ TokenType)
/* harmony export */ });
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
    TokenType[TokenType["DotDot"] = 43] = "DotDot";
    TokenType[TokenType["DotDotDot"] = 44] = "DotDotDot";
    TokenType[TokenType["LessEqualGreater"] = 45] = "LessEqualGreater";
    // Literals
    TokenType[TokenType["Identifier"] = 46] = "Identifier";
    TokenType[TokenType["Template"] = 47] = "Template";
    TokenType[TokenType["String"] = 48] = "String";
    TokenType[TokenType["Number"] = 49] = "Number";
    TokenType[TokenType["Regex"] = 50] = "Regex";
    // Keywords
    TokenType[TokenType["And"] = 51] = "And";
    TokenType[TokenType["Break"] = 52] = "Break";
    TokenType[TokenType["Base"] = 53] = "Base";
    TokenType[TokenType["Class"] = 54] = "Class";
    TokenType[TokenType["Continue"] = 55] = "Continue";
    TokenType[TokenType["Delete"] = 56] = "Delete";
    TokenType[TokenType["Do"] = 57] = "Do";
    TokenType[TokenType["Else"] = 58] = "Else";
    TokenType[TokenType["Extends"] = 59] = "Extends";
    TokenType[TokenType["False"] = 60] = "False";
    TokenType[TokenType["For"] = 61] = "For";
    TokenType[TokenType["Foreach"] = 62] = "Foreach";
    TokenType[TokenType["Function"] = 63] = "Function";
    TokenType[TokenType["If"] = 64] = "If";
    TokenType[TokenType["In"] = 65] = "In";
    TokenType[TokenType["Instanceof"] = 66] = "Instanceof";
    TokenType[TokenType["Is"] = 67] = "Is";
    TokenType[TokenType["New"] = 68] = "New";
    TokenType[TokenType["None"] = 69] = "None";
    TokenType[TokenType["Null"] = 70] = "Null";
    TokenType[TokenType["Or"] = 71] = "Or";
    TokenType[TokenType["Print"] = 72] = "Print";
    TokenType[TokenType["Return"] = 73] = "Return";
    TokenType[TokenType["True"] = 74] = "True";
    TokenType[TokenType["Typeof"] = 75] = "Typeof";
    TokenType[TokenType["Var"] = 76] = "Var";
    TokenType[TokenType["Void"] = 77] = "Void";
    TokenType[TokenType["While"] = 78] = "While";
    TokenType[TokenType["With"] = 79] = "With";
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Any: () => (/* binding */ $Any)
/* harmony export */ });
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");

class $Any {
    constructor(value, type = _type_enum__WEBPACK_IMPORTED_MODULE_0__.DataType.Any) {
        this.type = _type_enum__WEBPACK_IMPORTED_MODULE_0__.DataType.Any;
        this.value = value;
        this.type = type;
    }
    isString() {
        return this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__.DataType.String;
    }
    isNull() {
        return this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__.DataType.Null;
    }
    isBoolean() {
        return this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__.DataType.Boolean;
    }
    isNumber() {
        return this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__.DataType.Number;
    }
    isRange() {
        return this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__.DataType.Range;
    }
    isFunction() {
        return this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__.DataType.Function;
    }
    isClass() {
        return this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__.DataType.Class;
    }
    isLambda() {
        return this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__.DataType.Function && this.name === '@';
    }
    isList() {
        return this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__.DataType.List;
    }
    isDictionary() {
        return this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__.DataType.Dictionary;
    }
    isObject() {
        return this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__.DataType.Object;
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
        if (this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__.DataType.Class ||
            this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__.DataType.Dictionary ||
            this.type === _type_enum__WEBPACK_IMPORTED_MODULE_0__.DataType.Object) {
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
    delete(key) {
        conzole.error(`${this} does not support operator`);
        throw new Error("Error in Any delete");
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Boolean: () => (/* binding */ $Boolean)
/* harmony export */ });
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");


class $Boolean extends _any__WEBPACK_IMPORTED_MODULE_1__.$Any {
    constructor(value) {
        super(value, _type_enum__WEBPACK_IMPORTED_MODULE_0__.DataType.Boolean);
    }
}


/***/ }),

/***/ "./src/types/class.ts":
/*!****************************!*\
  !*** ./src/types/class.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Class: () => (/* binding */ $Class)
/* harmony export */ });
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");
/* harmony import */ var _null__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./null */ "./src/types/null.ts");
/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boolean */ "./src/types/boolean.ts");




class $Class extends _any__WEBPACK_IMPORTED_MODULE_1__.$Any {
    constructor(name, value, parent) {
        super(value, _type_enum__WEBPACK_IMPORTED_MODULE_0__.DataType.Class);
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
        return new _null__WEBPACK_IMPORTED_MODULE_2__.$Null();
    }
    set(key, value) {
        this.value.set(key.value, value);
        return value;
    }
    delete(key) {
        const result = this.value.delete(key.value);
        return new _boolean__WEBPACK_IMPORTED_MODULE_3__.$Boolean(result);
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Dictionary: () => (/* binding */ $Dictionary)
/* harmony export */ });
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../runtime */ "./src/runtime.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function */ "./src/types/function.ts");
/* harmony import */ var _null__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./null */ "./src/types/null.ts");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number */ "./src/types/number.ts");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./string */ "./src/types/string.ts");
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./boolean */ "./src/types/boolean.ts");








class $Dictionary extends _any__WEBPACK_IMPORTED_MODULE_1__.$Any {
    constructor(value) {
        super(value, _type_enum__WEBPACK_IMPORTED_MODULE_6__.DataType.Dictionary);
    }
    get(key) {
        if (this.value.has(key.value)) {
            return this.value.get(key.value);
        }
        else if ($Dictionary.runtime.has(key.value)) {
            return $Dictionary.runtime.get(key.value);
        }
        else {
            return new _null__WEBPACK_IMPORTED_MODULE_3__.$Null();
        }
    }
    set(key, value) {
        this.value.set(key.value, value);
        return value;
    }
    delete(key) {
        const result = this.value.delete(key.value);
        return new _boolean__WEBPACK_IMPORTED_MODULE_7__.$Boolean(result);
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
            args[0].call(thiz, [value, new _string__WEBPACK_IMPORTED_MODULE_5__.$String(key), thiz], interpreter);
        });
        return thiz;
    }
    static map(thiz, args, interpreter) {
        thiz.value.forEach((value, key) => {
            thiz.value.set('key', args[0].call(thiz, [value, new _string__WEBPACK_IMPORTED_MODULE_5__.$String(key), thiz], interpreter));
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
            return new _string__WEBPACK_IMPORTED_MODULE_5__.$String(index);
        }
        return new _null__WEBPACK_IMPORTED_MODULE_3__.$Null();
    }
}
$Dictionary.runtime = new Map([
    ['clear', (0,_runtime__WEBPACK_IMPORTED_MODULE_0__.fromJavaScriptMethod)('clear', 0, _type_enum__WEBPACK_IMPORTED_MODULE_6__.DataType.Null)],
    ['delete', (0,_runtime__WEBPACK_IMPORTED_MODULE_0__.fromJavaScriptMethod)('delete', 1, _type_enum__WEBPACK_IMPORTED_MODULE_6__.DataType.Boolean)],
    ['each', new _function__WEBPACK_IMPORTED_MODULE_2__.$Callable('each', 1, $Dictionary.each)],
    ['has', (0,_runtime__WEBPACK_IMPORTED_MODULE_0__.fromJavaScriptMethod)('has', 1, _type_enum__WEBPACK_IMPORTED_MODULE_6__.DataType.Boolean)],
    ['indexOf', new _function__WEBPACK_IMPORTED_MODULE_2__.$Callable('indexOf', 1, $Dictionary.indexOf)],
    ['map', new _function__WEBPACK_IMPORTED_MODULE_2__.$Callable('map', 1, $Dictionary.map)],
    ['merge', new _function__WEBPACK_IMPORTED_MODULE_2__.$Callable('merge', 1, (thiz, args) => new $Dictionary(new Map([...(thiz.value), ...(args[0].value)])))],
    ['size', new _function__WEBPACK_IMPORTED_MODULE_2__.$Callable('size', 0, (thiz, args) => new _number__WEBPACK_IMPORTED_MODULE_4__.$Number(thiz.value.size))]
]);


/***/ }),

/***/ "./src/types/error.ts":
/*!****************************!*\
  !*** ./src/types/error.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Error: () => (/* binding */ $Error)
/* harmony export */ });
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");


class $Error extends _any__WEBPACK_IMPORTED_MODULE_1__.$Any {
    constructor(value, line, col) {
        super(value, _type_enum__WEBPACK_IMPORTED_MODULE_0__.DataType.Error);
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Assign: () => (/* binding */ Assign),
/* harmony export */   Base: () => (/* binding */ Base),
/* harmony export */   Binary: () => (/* binding */ Binary),
/* harmony export */   Call: () => (/* binding */ Call),
/* harmony export */   Char: () => (/* binding */ Char),
/* harmony export */   Delete: () => (/* binding */ Delete),
/* harmony export */   Dictionary: () => (/* binding */ Dictionary),
/* harmony export */   Expr: () => (/* binding */ Expr),
/* harmony export */   Get: () => (/* binding */ Get),
/* harmony export */   Grouping: () => (/* binding */ Grouping),
/* harmony export */   In: () => (/* binding */ In),
/* harmony export */   InstanceOf: () => (/* binding */ InstanceOf),
/* harmony export */   Is: () => (/* binding */ Is),
/* harmony export */   Key: () => (/* binding */ Key),
/* harmony export */   Lambda: () => (/* binding */ Lambda),
/* harmony export */   List: () => (/* binding */ List),
/* harmony export */   Literal: () => (/* binding */ Literal),
/* harmony export */   Logical: () => (/* binding */ Logical),
/* harmony export */   New: () => (/* binding */ New),
/* harmony export */   NullCoalescing: () => (/* binding */ NullCoalescing),
/* harmony export */   Postfix: () => (/* binding */ Postfix),
/* harmony export */   Range: () => (/* binding */ Range),
/* harmony export */   RegEx: () => (/* binding */ RegEx),
/* harmony export */   Set: () => (/* binding */ Set),
/* harmony export */   Spread: () => (/* binding */ Spread),
/* harmony export */   Template: () => (/* binding */ Template),
/* harmony export */   Ternary: () => (/* binding */ Ternary),
/* harmony export */   Typeof: () => (/* binding */ Typeof),
/* harmony export */   Unary: () => (/* binding */ Unary),
/* harmony export */   Variable: () => (/* binding */ Variable),
/* harmony export */   Void: () => (/* binding */ Void),
/* harmony export */   Ztring: () => (/* binding */ Ztring)
/* harmony export */ });
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
class Char extends Expr {
    constructor(value, line) {
        super();
        this.value = value;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitCharExpr(this);
    }
    toString() {
        return 'Expr.Char';
    }
}
class Delete extends Expr {
    constructor(value, line) {
        super();
        this.value = value;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitDeleteExpr(this);
    }
    toString() {
        return 'Expr.Delete';
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Callable: () => (/* binding */ $Callable),
/* harmony export */   $Function: () => (/* binding */ $Function)
/* harmony export */ });
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scope */ "./src/scope.ts");
/* harmony import */ var _null__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./null */ "./src/types/null.ts");




class $Callable extends _any__WEBPACK_IMPORTED_MODULE_0__.$Any {
    constructor(name, arity, value) {
        super(value, _type_enum__WEBPACK_IMPORTED_MODULE_1__.DataType.Function);
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
        const scope = new _scope__WEBPACK_IMPORTED_MODULE_2__.Scope(this.closure);
        for (let i = 0; i < this.declaration.params.length; i++) {
            scope.define(this.declaration.params[i].lexeme, args[i]);
        }
        scope.set("this", thiz);
        let restoreScope = null;
        try {
            restoreScope = interpreter.scope;
            interpreter.executeBlock(this.declaration.body, scope);
        }
        catch (e) {
            if (e instanceof _any__WEBPACK_IMPORTED_MODULE_0__.$Any && e.type === _type_enum__WEBPACK_IMPORTED_MODULE_1__.DataType.Return) {
                if (restoreScope) {
                    interpreter.scope = restoreScope;
                }
                return e.value;
            }
            else {
                throw e;
            }
        }
        return new _null__WEBPACK_IMPORTED_MODULE_3__.$Null();
    }
}


/***/ }),

/***/ "./src/types/iterator.ts":
/*!*******************************!*\
  !*** ./src/types/iterator.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Iterator: () => (/* binding */ $Iterator),
/* harmony export */   IteratorValue: () => (/* binding */ IteratorValue)
/* harmony export */ });
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");
/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dictionary */ "./src/types/dictionary.ts");
/* harmony import */ var _null__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./null */ "./src/types/null.ts");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function */ "./src/types/function.ts");
/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./boolean */ "./src/types/boolean.ts");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./number */ "./src/types/number.ts");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./string */ "./src/types/string.ts");








class IteratorValue {
    constructor(value, index, done, inner) {
        this.value = value;
        this.index = index;
        this.done = done;
        this.inner = inner;
    }
}
class $Iterator extends _any__WEBPACK_IMPORTED_MODULE_1__.$Any {
    constructor(value) {
        super(value, _type_enum__WEBPACK_IMPORTED_MODULE_0__.DataType.RegExp);
        this.iter = new IteratorValue(new _null__WEBPACK_IMPORTED_MODULE_3__.$Null(), new _null__WEBPACK_IMPORTED_MODULE_3__.$Null(), new _boolean__WEBPACK_IMPORTED_MODULE_5__.$Boolean(false), null);
    }
    get(key) {
        if (key.value === "key" || key.value === "index") {
            return this.iter.index;
        }
        if (key.value === "done") {
            return this.iter.done;
        }
        if (key.value === "value") {
            return this.iter.value;
        }
        if ($Iterator.runtime.has(key.value)) {
            return $Iterator.runtime.get(key.value);
        }
        return new _null__WEBPACK_IMPORTED_MODULE_3__.$Null();
    }
    complete() {
        this.iter.done = new _boolean__WEBPACK_IMPORTED_MODULE_5__.$Boolean(true);
        this.iter.value = new _null__WEBPACK_IMPORTED_MODULE_3__.$Null();
        this.iter.index = new _null__WEBPACK_IMPORTED_MODULE_3__.$Null();
    }
    set(key, value) {
        if (typeof this.iter[key.value] !== "undefined") {
            this.iter[key.value] = value;
        }
        return value;
    }
    toString() {
        return `<${_type_enum__WEBPACK_IMPORTED_MODULE_0__.DataType[this.value.type]} iterator>`;
    }
    static next(thiz, args, interpreter) {
        const it = thiz;
        // already iterated, return completed iterator
        if (it.iter.done.value) {
            return it;
        }
        if (it.value.isList()) {
            $Iterator.listNext(thiz);
            return it;
        }
        if (it.value.isDictionary()) {
            $Iterator.dictionaryNext(thiz);
            return it;
        }
        if (it.value.isString()) {
            $Iterator.stringNext(thiz);
            return it;
        }
        if (it.value.isNumber()) {
            $Iterator.numberNext(thiz);
            return it;
        }
        if (it.value.isRange()) {
            $Iterator.rangeNext(thiz);
            return it;
        }
        if (it.value.isObject()) {
            thiz.value.get(interpreter.strings.next).call(thiz.value, [thiz], interpreter);
            return it;
        }
        // default
        interpreter.error(`${_type_enum__WEBPACK_IMPORTED_MODULE_0__.DataType[it.value.type].toLowerCase()} with value ${it.value} is not an iterable`);
        it.complete();
        return it;
    }
    static listNext(thiz) {
        const it = thiz;
        const list = it.value;
        const index = it.iter.index;
        // list is empty, no iteration required
        if (!list.value.length) {
            it.complete();
            return it;
        }
        // first value
        if (it.iter.inner === null) {
            it.iter.inner = true;
            it.iter.index = new _number__WEBPACK_IMPORTED_MODULE_6__.$Number(0);
            it.iter.value = list.value[0];
            return it;
        }
        // no more values to iterate
        if (index.value >= list.value.length - 1) {
            it.complete();
            return it;
        }
        // normal iteration
        const newIndex = index.value + 1;
        it.iter.index = new _number__WEBPACK_IMPORTED_MODULE_6__.$Number(newIndex);
        it.iter.value = list.value[newIndex];
        return it;
    }
    static stringNext(thiz) {
        const it = thiz;
        const str = it.value;
        const index = it.iter.index;
        // string is empty
        if (!str.value.length) {
            it.complete();
            return it;
        }
        // first value
        if (it.iter.inner === null) {
            it.iter.inner = true;
            it.iter.index = new _number__WEBPACK_IMPORTED_MODULE_6__.$Number(0);
            it.iter.value = new _string__WEBPACK_IMPORTED_MODULE_7__.$String(str.value.charAt(0));
            return it;
        }
        // no more values to iterate
        if (index.value >= str.value.length - 1) {
            it.complete();
            return it;
        }
        // normal iteration
        const newIndex = index.value + 1;
        it.iter.index = new _number__WEBPACK_IMPORTED_MODULE_6__.$Number(newIndex);
        it.iter.value = new _string__WEBPACK_IMPORTED_MODULE_7__.$String(str.value.charAt(newIndex));
        return it;
    }
    static numberNext(thiz) {
        const it = thiz;
        const number = it.value;
        const index = it.iter.index;
        // number is 0 or negative
        if (number.value <= 0) {
            it.complete();
            return it;
        }
        // first value
        if (it.iter.inner === null) {
            it.iter.inner = number.value - 1; //inner holds last value
            it.iter.index = new _number__WEBPACK_IMPORTED_MODULE_6__.$Number(0);
            it.iter.value = it.iter.index;
            return it;
        }
        // no more values to iterate
        if (index.value >= it.iter.inner) {
            it.complete();
            return it;
        }
        // normal iteration
        const newIndex = index.value + 1;
        it.iter.index = new _number__WEBPACK_IMPORTED_MODULE_6__.$Number(newIndex);
        it.iter.value = it.iter.index;
        return it;
    }
    static rangeNext(thiz) {
        const it = thiz;
        const range = it.value;
        const value = range.value;
        // imposible range
        if (value.step === 0 ||
            (value.start > value.end && value.step > 0) ||
            (value.start < value.end && value.step < 0)) {
            it.complete();
            return it;
        }
        // first value
        if (it.iter.inner === null) {
            it.iter.inner = true;
            it.iter.index = new _number__WEBPACK_IMPORTED_MODULE_6__.$Number(0);
            it.iter.value = new _number__WEBPACK_IMPORTED_MODULE_6__.$Number(value.start);
            return it;
        }
        if (value.step > 0) {
            if (it.iter.value.value >= value.end) {
                it.complete();
                return it;
            }
        }
        else {
            if (it.iter.value.value <= value.end) {
                it.complete();
                return it;
            }
        }
        // normal iteration
        const newIndex = it.iter.index.value + 1;
        const newValue = it.iter.value.value + value.step;
        it.iter.index = new _number__WEBPACK_IMPORTED_MODULE_6__.$Number(newIndex);
        it.iter.value = new _number__WEBPACK_IMPORTED_MODULE_6__.$Number(newValue);
        return it;
    }
    static dictionaryNext(thiz) {
        const it = thiz;
        const dict = it.value;
        // empty dictionary
        if (!dict.value.size) {
            it.complete();
            return it;
        }
        // first value
        if (it.iter.inner === null) {
            it.iter.inner = dict.value.keys();
        }
        // normal iteration
        const current = it.iter.inner.next();
        it.iter.value = it.value.get(new _any__WEBPACK_IMPORTED_MODULE_1__.$Any(current.value));
        it.iter.index = new _string__WEBPACK_IMPORTED_MODULE_7__.$String(current.value);
        // no more values to iterate
        if (current.done) {
            it.complete();
        }
        return it;
    }
    static first(thiz, args, interpreter) {
        if (thiz.value.value.isList()) {
            return new _dictionary__WEBPACK_IMPORTED_MODULE_2__.$Dictionary(new Map([
                ["key", 0],
                ["value", thiz.value.value[0]],
            ]));
        }
        return new _null__WEBPACK_IMPORTED_MODULE_3__.$Null();
    }
}
$Iterator.runtime = new Map([
    ["first", new _function__WEBPACK_IMPORTED_MODULE_4__.$Callable("first", 0, $Iterator.first)],
    ["next", new _function__WEBPACK_IMPORTED_MODULE_4__.$Callable("next", 0, $Iterator.next)],
]);


/***/ }),

/***/ "./src/types/list.ts":
/*!***************************!*\
  !*** ./src/types/list.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $List: () => (/* binding */ $List)
/* harmony export */ });
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../runtime */ "./src/runtime.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function */ "./src/types/function.ts");
/* harmony import */ var _null__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./null */ "./src/types/null.ts");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number */ "./src/types/number.ts");
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");






class $List extends _any__WEBPACK_IMPORTED_MODULE_1__.$Any {
    constructor(value) {
        super(value, _type_enum__WEBPACK_IMPORTED_MODULE_5__.DataType.List);
    }
    get(key) {
        if (key.isNumber()) {
            if (typeof this.value[key.value] !== 'undefined') {
                return this.value[key.value];
            }
            else {
                return new _null__WEBPACK_IMPORTED_MODULE_3__.$Null();
            }
        }
        else if (key.isRange()) {
            return this.range(key);
        }
        else if ($List.runtime.has(key.value)) {
            return $List.runtime.get(key.value);
        }
        else {
            return new _null__WEBPACK_IMPORTED_MODULE_3__.$Null();
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
        return new _number__WEBPACK_IMPORTED_MODULE_4__.$Number(args[0].value.length);
    }
    static each(thiz, args, interpreter) {
        for (let i = 0; i < thiz.value.length; ++i) {
            args[0].call(thiz, [thiz.value[i], new _number__WEBPACK_IMPORTED_MODULE_4__.$Number(i), thiz], interpreter);
        }
        return thiz;
    }
    static sort(thiz, args, interpreter) {
        const list = thiz.value;
        if (args.length) {
            list.sort((a, b) => args[0].call(thiz, [a, b], interpreter).value);
        }
        else {
            list.sort((a, b) => a.value - b.value);
        }
        return thiz;
    }
    static map(thiz, args, interpreter) {
        for (let i = 0; i < thiz.value.length; ++i) {
            thiz.value[i] = args[0].call(thiz, [new _any__WEBPACK_IMPORTED_MODULE_1__.$Any(thiz.value[i]), new _number__WEBPACK_IMPORTED_MODULE_4__.$Number(i), thiz], interpreter);
        }
        return thiz;
    }
}
$List.runtime = new Map([
    ['concat', (0,_runtime__WEBPACK_IMPORTED_MODULE_0__.fromJavaScriptMethod)('concat', -1, _type_enum__WEBPACK_IMPORTED_MODULE_5__.DataType.List)],
    ['each', new _function__WEBPACK_IMPORTED_MODULE_2__.$Callable('each', 1, $List.each)],
    ['sort', new _function__WEBPACK_IMPORTED_MODULE_2__.$Callable('sort', -1, $List.sort)],
    ['includes', (0,_runtime__WEBPACK_IMPORTED_MODULE_0__.fromJavaScriptMethod)('includes', 1, _type_enum__WEBPACK_IMPORTED_MODULE_5__.DataType.Boolean)],
    ['indexOf', (0,_runtime__WEBPACK_IMPORTED_MODULE_0__.fromJavaScriptMethod)('indexOf', 1, _type_enum__WEBPACK_IMPORTED_MODULE_5__.DataType.Number)],
    ['join', (0,_runtime__WEBPACK_IMPORTED_MODULE_0__.fromJavaScriptMethod)('join', 1, _type_enum__WEBPACK_IMPORTED_MODULE_5__.DataType.String)],
    ['lastIndexOf', (0,_runtime__WEBPACK_IMPORTED_MODULE_0__.fromJavaScriptMethod)('lastIndexOf', 1, _type_enum__WEBPACK_IMPORTED_MODULE_5__.DataType.Number)],
    ['map', new _function__WEBPACK_IMPORTED_MODULE_2__.$Callable('map', 1, $List.map)],
    ['pop', (0,_runtime__WEBPACK_IMPORTED_MODULE_0__.fromJavaScriptMethod)('pop', 0, _type_enum__WEBPACK_IMPORTED_MODULE_5__.DataType.List)],
    ['push', (0,_runtime__WEBPACK_IMPORTED_MODULE_0__.fromJavaScriptMethod)('push', -1, _type_enum__WEBPACK_IMPORTED_MODULE_5__.DataType.List)],
    ['shift', (0,_runtime__WEBPACK_IMPORTED_MODULE_0__.fromJavaScriptMethod)('shift', 0, _type_enum__WEBPACK_IMPORTED_MODULE_5__.DataType.List)],
    ['size', new _function__WEBPACK_IMPORTED_MODULE_2__.$Callable('size', 0, (thiz, args) => new _number__WEBPACK_IMPORTED_MODULE_4__.$Number(thiz.value.length))],
    ['slice', (0,_runtime__WEBPACK_IMPORTED_MODULE_0__.fromJavaScriptMethod)('slice', -1, _type_enum__WEBPACK_IMPORTED_MODULE_5__.DataType.List)],
    ['splice', (0,_runtime__WEBPACK_IMPORTED_MODULE_0__.fromJavaScriptMethod)('splice', -1, _type_enum__WEBPACK_IMPORTED_MODULE_5__.DataType.List)],
    ['unshift', (0,_runtime__WEBPACK_IMPORTED_MODULE_0__.fromJavaScriptMethod)('unshift', -1, _type_enum__WEBPACK_IMPORTED_MODULE_5__.DataType.List)]
]);


/***/ }),

/***/ "./src/types/null.ts":
/*!***************************!*\
  !*** ./src/types/null.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Null: () => (/* binding */ $Null)
/* harmony export */ });
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");


class $Null extends _any__WEBPACK_IMPORTED_MODULE_1__.$Any {
    constructor() {
        super(null);
        this.type = _type_enum__WEBPACK_IMPORTED_MODULE_0__.DataType.Null;
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Number: () => (/* binding */ $Number)
/* harmony export */ });
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");


class $Number extends _any__WEBPACK_IMPORTED_MODULE_1__.$Any {
    constructor(value) {
        super(value, _type_enum__WEBPACK_IMPORTED_MODULE_0__.DataType.Number);
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Object: () => (/* binding */ $Object)
/* harmony export */ });
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");
/* harmony import */ var _null__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./null */ "./src/types/null.ts");
/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boolean */ "./src/types/boolean.ts");




class $Object extends _any__WEBPACK_IMPORTED_MODULE_1__.$Any {
    constructor(value, conztructor) {
        super(value, _type_enum__WEBPACK_IMPORTED_MODULE_0__.DataType.Object);
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
        return new _null__WEBPACK_IMPORTED_MODULE_2__.$Null();
    }
    set(key, value) {
        this.value.set(key.value, value);
        return value;
    }
    delete(key) {
        const result = this.value.delete(key.value);
        return new _boolean__WEBPACK_IMPORTED_MODULE_3__.$Boolean(result);
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Range: () => (/* binding */ $Range),
/* harmony export */   RangeValue: () => (/* binding */ RangeValue)
/* harmony export */ });
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
class $Range extends _any__WEBPACK_IMPORTED_MODULE_1__.$Any {
    constructor(value) {
        super(value, _type_enum__WEBPACK_IMPORTED_MODULE_0__.DataType.Range);
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
    toString() {
        return `[${this.value.start}:${this.value.end}:${this.value.step}]`;
    }
}


/***/ }),

/***/ "./src/types/regex.ts":
/*!****************************!*\
  !*** ./src/types/regex.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $RegExp: () => (/* binding */ $RegExp)
/* harmony export */ });
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");


class $RegExp extends _any__WEBPACK_IMPORTED_MODULE_1__.$Any {
    constructor(value) {
        super(value, _type_enum__WEBPACK_IMPORTED_MODULE_0__.DataType.RegExp);
    }
}


/***/ }),

/***/ "./src/types/statement.ts":
/*!********************************!*\
  !*** ./src/types/statement.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Block: () => (/* binding */ Block),
/* harmony export */   Break: () => (/* binding */ Break),
/* harmony export */   Class: () => (/* binding */ Class),
/* harmony export */   Continue: () => (/* binding */ Continue),
/* harmony export */   DoWhile: () => (/* binding */ DoWhile),
/* harmony export */   Expression: () => (/* binding */ Expression),
/* harmony export */   For: () => (/* binding */ For),
/* harmony export */   Foreach: () => (/* binding */ Foreach),
/* harmony export */   Func: () => (/* binding */ Func),
/* harmony export */   If: () => (/* binding */ If),
/* harmony export */   Print: () => (/* binding */ Print),
/* harmony export */   Return: () => (/* binding */ Return),
/* harmony export */   Stmt: () => (/* binding */ Stmt),
/* harmony export */   Var: () => (/* binding */ Var),
/* harmony export */   While: () => (/* binding */ While)
/* harmony export */ });
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
class For extends Stmt {
    constructor(initializer, condition, increment, loop, line) {
        super();
        this.initializer = initializer;
        this.condition = condition;
        this.increment = increment;
        this.loop = loop;
        this.line = line;
    }
    accept(visitor) {
        return visitor.visitForStmt(this);
    }
    toString() {
        return 'Stmt.For';
    }
}
class Foreach extends Stmt {
    constructor(name, key, iterable, loop, none, line) {
        super();
        this.name = name;
        this.key = key;
        this.iterable = iterable;
        this.loop = loop;
        this.none = none;
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $String: () => (/* binding */ $String)
/* harmony export */ });
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../runtime */ "./src/runtime.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function */ "./src/types/function.ts");
/* harmony import */ var _null__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./null */ "./src/types/null.ts");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number */ "./src/types/number.ts");
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list */ "./src/types/list.ts");







class $String extends _any__WEBPACK_IMPORTED_MODULE_1__.$Any {
    constructor(value) {
        super(value, _type_enum__WEBPACK_IMPORTED_MODULE_5__.DataType.String);
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
        return new _null__WEBPACK_IMPORTED_MODULE_3__.$Null();
    }
    set(key, value) {
        if (typeof key !== 'number') {
            // this.properties.set(key, value);
        }
        return new _null__WEBPACK_IMPORTED_MODULE_3__.$Null();
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
    static split(thiz, args, interpeter) {
        const splits = thiz.value.split(args[0].value).map((str) => new $String(str));
        return new _list__WEBPACK_IMPORTED_MODULE_6__.$List(splits);
    }
}
$String.runtime = new Map([
    ['toUpper', (0,_runtime__WEBPACK_IMPORTED_MODULE_0__.fromJavaScriptMethod)('toUpperCase', 0, _type_enum__WEBPACK_IMPORTED_MODULE_5__.DataType.String)],
    ['toLower', (0,_runtime__WEBPACK_IMPORTED_MODULE_0__.fromJavaScriptMethod)('toLowerCase', 0, _type_enum__WEBPACK_IMPORTED_MODULE_5__.DataType.String)],
    ['size', new _function__WEBPACK_IMPORTED_MODULE_2__.$Callable('size', 0, (thiz, args) => new _number__WEBPACK_IMPORTED_MODULE_4__.$Number(thiz.value.length))],
    ['split', new _function__WEBPACK_IMPORTED_MODULE_2__.$Callable('split', 1, $String.split)],
    ['concat', (0,_runtime__WEBPACK_IMPORTED_MODULE_0__.fromJavaScriptMethod)('concat', 1, _type_enum__WEBPACK_IMPORTED_MODULE_5__.DataType.String)],
    ['includes', (0,_runtime__WEBPACK_IMPORTED_MODULE_0__.fromJavaScriptMethod)('includes', 1, _type_enum__WEBPACK_IMPORTED_MODULE_5__.DataType.Boolean)],
    ['indexOf', (0,_runtime__WEBPACK_IMPORTED_MODULE_0__.fromJavaScriptMethod)('indexOf', 1, _type_enum__WEBPACK_IMPORTED_MODULE_5__.DataType.Number)],
    ['lastIndexOf', (0,_runtime__WEBPACK_IMPORTED_MODULE_0__.fromJavaScriptMethod)('lastIndexOf', 1, _type_enum__WEBPACK_IMPORTED_MODULE_5__.DataType.Number)],
    ['repeat', (0,_runtime__WEBPACK_IMPORTED_MODULE_0__.fromJavaScriptMethod)('repeat', 1, _type_enum__WEBPACK_IMPORTED_MODULE_5__.DataType.String)],
    ['replace', new _function__WEBPACK_IMPORTED_MODULE_2__.$Callable('replace', -1, $String.replace)],
    ['search', (0,_runtime__WEBPACK_IMPORTED_MODULE_0__.fromJavaScriptMethod)('search', 1, _type_enum__WEBPACK_IMPORTED_MODULE_5__.DataType.Number)],
    ['slice', (0,_runtime__WEBPACK_IMPORTED_MODULE_0__.fromJavaScriptMethod)('slice', -1, _type_enum__WEBPACK_IMPORTED_MODULE_5__.DataType.String)],
    ['substring', (0,_runtime__WEBPACK_IMPORTED_MODULE_0__.fromJavaScriptMethod)('substring', -1, _type_enum__WEBPACK_IMPORTED_MODULE_5__.DataType.String)],
    ['trim', (0,_runtime__WEBPACK_IMPORTED_MODULE_0__.fromJavaScriptMethod)('trim', 0, _type_enum__WEBPACK_IMPORTED_MODULE_5__.DataType.String)],
]);


/***/ }),

/***/ "./src/types/type.enum.ts":
/*!********************************!*\
  !*** ./src/types/type.enum.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataType: () => (/* binding */ DataType)
/* harmony export */ });
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Void: () => (/* binding */ $Void)
/* harmony export */ });
/* harmony import */ var _type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.enum */ "./src/types/type.enum.ts");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./any */ "./src/types/any.ts");


class $Void extends _any__WEBPACK_IMPORTED_MODULE_1__.$Any {
    constructor(value) {
        super(value, _type_enum__WEBPACK_IMPORTED_MODULE_0__.DataType.Void);
    }
}


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   capitalize: () => (/* binding */ capitalize),
/* harmony export */   isAlpha: () => (/* binding */ isAlpha),
/* harmony export */   isAlphaNumeric: () => (/* binding */ isAlphaNumeric),
/* harmony export */   isDigit: () => (/* binding */ isDigit),
/* harmony export */   isKeyword: () => (/* binding */ isKeyword)
/* harmony export */ });
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token */ "./src/token.ts");

function isDigit(char) {
    return char >= "0" && char <= "9";
}
function isAlpha(char) {
    return (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");
}
function isAlphaNumeric(char) {
    return isAlpha(char) || isDigit(char);
}
function isKeyword(word) {
    return _token__WEBPACK_IMPORTED_MODULE_0__.TokenType[word] >= _token__WEBPACK_IMPORTED_MODULE_0__.TokenType.And;
}
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/atscript.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scanner */ "./src/scanner.ts");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser */ "./src/parser.ts");
/* harmony import */ var _interpreter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interpreter */ "./src/interpreter.ts");
/* harmony import */ var _console__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./console */ "./src/console.ts");
/* harmony import */ var _demos_demo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demos/demo */ "./src/demos/demo.ts");





const conzole = new _console__WEBPACK_IMPORTED_MODULE_3__.Console();
const atscript = {
    execute: (source) => {
        const scanner = new _scanner__WEBPACK_IMPORTED_MODULE_0__.Scanner();
        const parser = new _parser__WEBPACK_IMPORTED_MODULE_1__.Parser();
        const interpreter = new _interpreter__WEBPACK_IMPORTED_MODULE_2__.Interpreter();
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
    interpreter: _interpreter__WEBPACK_IMPORTED_MODULE_2__.Interpreter,
    parser: _parser__WEBPACK_IMPORTED_MODULE_1__.Parser,
    scanner: _scanner__WEBPACK_IMPORTED_MODULE_0__.Scanner
};
if (typeof window !== 'undefined') {
    window.demoSourceCode = _demos_demo__WEBPACK_IMPORTED_MODULE_4__.DemoSourceCode;
    window.atscript = atscript;
    window.conzole = conzole;
}
else {
    __webpack_require__.g.conzole = conzole;
    exports.atscript = atscript;
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDdEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDeEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFDRCxPQUFPLFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELFdBQVcsRUFBRSxxREFBVztJQUN4QixNQUFNLEVBQUUsMkNBQU07SUFDZCxPQUFPLEVBQUUsNkNBQU87Q0FDbkIsQ0FBQztBQUVGLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO0lBQy9CLE1BQU0sQ0FBQyxjQUFjLEdBQUcsdURBQWMsQ0FBQztJQUN2QyxNQUFNLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztDQUM1QjtLQUFNO0lBQ0gscUJBQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLE9BQU8sQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0NBQy9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW50ZXJwcmV0ZXIvLi9zcmMvY29uc29sZS50cyIsIndlYnBhY2s6Ly9pbnRlcnByZXRlci8uL3NyYy9kZW1vcy9kZW1vLnRzIiwid2VicGFjazovL2ludGVycHJldGVyLy4vc3JjL2ludGVycHJldGVyLnRzIiwid2VicGFjazovL2ludGVycHJldGVyLy4vc3JjL3BhcnNlci50cyIsIndlYnBhY2s6Ly9pbnRlcnByZXRlci8uL3NyYy9ydW50aW1lLnRzIiwid2VicGFjazovL2ludGVycHJldGVyLy4vc3JjL3NjYW5uZXIudHMiLCJ3ZWJwYWNrOi8vaW50ZXJwcmV0ZXIvLi9zcmMvc2NvcGUudHMiLCJ3ZWJwYWNrOi8vaW50ZXJwcmV0ZXIvLi9zcmMvdG9rZW4udHMiLCJ3ZWJwYWNrOi8vaW50ZXJwcmV0ZXIvLi9zcmMvdHlwZXMvYW55LnRzIiwid2VicGFjazovL2ludGVycHJldGVyLy4vc3JjL3R5cGVzL2Jvb2xlYW4udHMiLCJ3ZWJwYWNrOi8vaW50ZXJwcmV0ZXIvLi9zcmMvdHlwZXMvY2xhc3MudHMiLCJ3ZWJwYWNrOi8vaW50ZXJwcmV0ZXIvLi9zcmMvdHlwZXMvZGljdGlvbmFyeS50cyIsIndlYnBhY2s6Ly9pbnRlcnByZXRlci8uL3NyYy90eXBlcy9lcnJvci50cyIsIndlYnBhY2s6Ly9pbnRlcnByZXRlci8uL3NyYy90eXBlcy9leHByZXNzaW9uLnRzIiwid2VicGFjazovL2ludGVycHJldGVyLy4vc3JjL3R5cGVzL2Z1bmN0aW9uLnRzIiwid2VicGFjazovL2ludGVycHJldGVyLy4vc3JjL3R5cGVzL2l0ZXJhdG9yLnRzIiwid2VicGFjazovL2ludGVycHJldGVyLy4vc3JjL3R5cGVzL2xpc3QudHMiLCJ3ZWJwYWNrOi8vaW50ZXJwcmV0ZXIvLi9zcmMvdHlwZXMvbnVsbC50cyIsIndlYnBhY2s6Ly9pbnRlcnByZXRlci8uL3NyYy90eXBlcy9udW1iZXIudHMiLCJ3ZWJwYWNrOi8vaW50ZXJwcmV0ZXIvLi9zcmMvdHlwZXMvb2JqZWN0LnRzIiwid2VicGFjazovL2ludGVycHJldGVyLy4vc3JjL3R5cGVzL3JhbmdlLnRzIiwid2VicGFjazovL2ludGVycHJldGVyLy4vc3JjL3R5cGVzL3JlZ2V4LnRzIiwid2VicGFjazovL2ludGVycHJldGVyLy4vc3JjL3R5cGVzL3N0YXRlbWVudC50cyIsIndlYnBhY2s6Ly9pbnRlcnByZXRlci8uL3NyYy90eXBlcy9zdHJpbmcudHMiLCJ3ZWJwYWNrOi8vaW50ZXJwcmV0ZXIvLi9zcmMvdHlwZXMvdHlwZS5lbnVtLnRzIiwid2VicGFjazovL2ludGVycHJldGVyLy4vc3JjL3R5cGVzL3ZvaWQudHMiLCJ3ZWJwYWNrOi8vaW50ZXJwcmV0ZXIvLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vaW50ZXJwcmV0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW50ZXJwcmV0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ludGVycHJldGVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vaW50ZXJwcmV0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9pbnRlcnByZXRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ludGVycHJldGVyLy4vc3JjL2F0c2NyaXB0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIENvbnNvbGVNZXNzYWdlVHlwZSB7XG4gICAgVXNlcixcbiAgICBFcnJvcixcbiAgICBXYXJuaW5nLFxuICAgIEluZm9cbn1cblxuZXhwb3J0IGNsYXNzIENvbnNvbGVNZXNzYWdlIHtcbiAgICBwdWJsaWMgdGltZTogRGF0ZTtcbiAgICBwdWJsaWMgdGV4dDogYW55O1xuICAgIHB1YmxpYyB0eXBlOiBDb25zb2xlTWVzc2FnZVR5cGU7XG59XG5cbmV4cG9ydCBjbGFzcyBDb25zb2xlIHtcblxuICAgIHB1YmxpYyBtZXNzYWdlczogQ29uc29sZU1lc3NhZ2VbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gW107XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGQobWVzc2FnZTogYW55LCB0eXBlOiBDb25zb2xlTWVzc2FnZVR5cGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKHtcbiAgICAgICAgICAgIHRleHQ6IG1lc3NhZ2UsXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICB0eXBlOiB0eXBlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2cobWVzc2FnZTogYW55KSB7XG4gICAgICAgIHRoaXMuYWRkKG1lc3NhZ2UsIENvbnNvbGVNZXNzYWdlVHlwZS5Vc2VyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgd2FybihtZXNzYWdlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5hZGQobWVzc2FnZSwgQ29uc29sZU1lc3NhZ2VUeXBlLldhcm5pbmcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBlcnJvcihtZXNzYWdlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5hZGQobWVzc2FnZSwgQ29uc29sZU1lc3NhZ2VUeXBlLkVycm9yKTtcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmZvKG1lc3NhZ2U6IGFueSkge1xuICAgICAgICB0aGlzLmFkZChtZXNzYWdlLCBDb25zb2xlTWVzc2FnZVR5cGUuSW5mbyk7XG4gICAgfVxuXG4gICAgcHVibGljIGZpcnN0KCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VzWzBdLnRleHQ7XG4gICAgfVxuXG4gICAgcHVibGljIGxhc3QoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZXNbdGhpcy5tZXNzYWdlcy5sZW5ndGggLSAxXS50ZXh0O1xuICAgIH1cblxuICAgIHB1YmxpYyBwcmludCgpOiBhbnkge1xuICAgICAgICByZXR1cm4gY29uc29sZS5sb2codGhpcy5tZXNzYWdlcy5tYXAoKGNtKSA9PiBjbS50ZXh0KSk7XG4gICAgfVxuXG59XG4iLCJleHBvcnQgY29uc3QgRGVtb1NvdXJjZUNvZGUgPSBgXG4vLyBzbGljaW5nIHN0cmluZ3NcbnByaW50IFwib25lIHR3byB0aHJlZSBmb3VyXCJbNDo3OjFdOyAvLyBwcmludHMgdHdvXG5wcmludCBcImhlbGxvIHdvcmxkXCJbOjotMV07IC8vcHJpbnRzIGRscm93IG9sbGVoXG5cbi8vIHJhbmdlIG9wZXJhdG9yIG9uIGxpc3QgY29uc3RydWN0aW9uXG5wcmludCBbMDoxMDozXTsgLy8gcHJpbnRzIGEgbGlzdCBbMCwzLDYsOV1cbnByaW50IFsxLi41XTsgLy8gcHJpbnRzIFsxLDIsMyw0LDVdXG5cbi8vIHNwcmVhZCBvcGVyYXRvclxucHJpbnQgey4uLlsxLDIsM119OyAvLyBwcmludHMgezA6IDE7IDE6IDI7IDI6IDN9XG5wcmludCAuLi4xLi4zID09IC4uLjEuLjM7IC8vIHByaW50cyBbdHJ1ZSx0cnVlLHRydWVdO1xucHJpbnQgLi4uXCJhYnpcIiA8PT4gLi4uXCJheWNcIjsgLy8gcHJpbnRzIFswLC0xLDFdXG5cblxuLy8gZnVuY3Rpb25zXG5mdW5jdGlvbiBCYXNpY0Z1bmN0aW9uKHRleHQpIHtcbiAgICBwcmludCB0ZXh0O1xufVxuQmFzaWNGdW5jdGlvbignQmFzaWNGdW5jdGlvbkFyZ3VtZW50Jyk7XG5cbi8vIGNsYXNzZXNcbmNsYXNzIFBlcnNvbiB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cbiAgICBoZWxsbygpIHtcbiAgICAgICAgcHJpbnQgdGhpcy5uYW1lICsgJyBzYXlzIGhpJztcbiAgICB9XG59XG5jbGFzcyBTdHVkZW50IGV4dGVuZHMgUGVyc29uIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBncmFkZSkge1xuICAgICAgICBiYXNlLmNvbnN0cnVjdG9yKG5hbWUpO1xuICAgICAgICB0aGlzLmdyYWRlID0gZ3JhZGU7XG4gICAgfVxuICAgIGhlbGxvKCkge1xuICAgICAgICBiYXNlLmhlbGxvKCk7XG4gICAgICAgIHByaW50ICdmcm9tICcgKyB0aGlzLmdyYWRlICsgJyBncmFkZSc7XG4gICAgfVxufVxudmFyIHN0dWRlbnQgPSBuZXcgU3R1ZGVudCgnSm9obicsIDMpO1xuc3R1ZGVudC5oZWxsbygpO1xuXG4vLyBSZWN1cnNpdmUgZnVuY3Rpb25cbmZ1bmN0aW9uIGZhY3RvcmlhbGl6ZShuKSB7XG4gICAgaWYgKG4gPCAwKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKG4gPT0gMCkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgcmV0dXJuIChuICogZmFjdG9yaWFsaXplKG4gLSAxKSk7XG59XG5wcmludCAnZmFjdG9yIG9mIDExOiAnICsgZmFjdG9yaWFsaXplKDExKTtcbi8vIHNhbWUgYXMgZmFjdG9yaWFsaXplIGJ1dCB3aXRoIHRlcm5hcnlcbi8vIGFuZCBzaG9ydCBmb3JtIGZ1bmN0aW9uIGRlZmluaXRpb25cbkBmYWN0b3IobikgPT5cbiAgICBuIDwgMCA/IC0xIDogKG4gPT0gMCA/IDEgOiAobiAqIGZhY3RvcmlhbGl6ZShuIC0gMSkpKTtcbnByaW50ICdmYWN0b3Igb2YgMTE6ICcgK2ZhY3RvcigxMSk7XG5cbi8vIG5lc3RlZCBmdW5jdGlvbiByZXR1cm5zIGZ1bmN0aW9uXG5AYWRkKGEpID0+IEAoYikgPT4gQChjKSA9PiBhICsgYiArIGM7XG5wcmludCBhZGQoMTAwKSgyMCkoMyk7XG5cbi8vIGxpdGVyYWxzXG52YXIgbGl0ZXJhbCA9IHtcbiAgICBmaXJzdG5hbWU6IFwiSm9oblwiLFxuICAgIGxhc3RuYW1lOiBcIkRvZVwiLFxuICAgIHJlY29yZHM6IHtcbiAgICAgICAgcHJldjogXCJwcmV2aW91c1wiLFxuICAgICAgICBuZXh0OiBcIm5leHRcIlxuICAgIH1cbn07XG5wcmludCBsaXRlcmFsLnJlY29yZHMucHJldjtcblxuLy8gc2FmZSBuYXZpZ2F0b3Igb3BlcmF0b3IgPy5cbnByaW50IGxpdGVyYWwuc2FmZU5hdmlnYXRvcj8ucHJvcGVydHlEb2VzTm90RXhpc3Q7XG5cbi8vIGRlbGV0ZSBvcGVyYXRvclxuZGVsZXRlIGxpdGVyYWwuZmlyc3RuYW1lO1xuXG4vLyBuZXcgc2NvcGUgdGVzdFxue1xuICAgIHZhciBhID0ge2E6ICdvbmUnfTtcbiAgICB2YXIgYiA9IHtiOiAndHdvJ307XG4gICAgdmFyIGMgPSBhICsgYjtcbiAgICBwcmludCBjOyAvLyBwcmludHMge2E6ICdvbmUnLCBiOiAndHdvJ31cbn1cbi8vIG5ldyBzY29wZSB0ZXN0XG57XG4gICAgdmFyIGEgPSB7ZDogJ3RocmVlJ307XG4gICAgdmFyIGIgPSB7ZTogJ2ZvdXInfTtcbiAgICB2YXIgYyA9IGEgKyBiO1xuICAgIHByaW50IGM7IC8vIHByaW50cyB7ZDogJ3RocmVlJywgZTogJ2ZvdXInfVxufVxuXG4vLyB0eXBlb2YsIGlzLCBpbnN0YW5jZW9mIG9wZXJhdG9yXG5wcmludCB0eXBlb2YgUGVyc29uO1xucHJpbnQgdHlwZW9mIHN0dWRlbnQ7XG5wcmludCAnU3R1ZGVudCBpcyBDbGFzczogJyArIChTdHVkZW50IGlzIENsYXNzKTtcbnByaW50ICdzdHVkZW50IGlzIE9iamVjdDogJyArIChzdHVkZW50IGlzIE9iamVjdCk7XG5wcmludCAnc3R1ZGVudCBpcyBQZXJzb246ICcgKyAoc3R1ZGVudCBpcyBQZXJzb24pO1xucHJpbnQgJ3N0dWRlbnQgaXMgU3R1ZGVudDogJyArIChzdHVkZW50IGlzIFN0dWRlbnQpO1xucHJpbnQgJ3N0dWRlbnQgaW5zdGFuY2VvZiBQZXJzb246ICcgKyAoc3R1ZGVudCBpbnN0YW5jZW9mIFBlcnNvbik7XG5wcmludCB0eXBlb2YgJycgKyAnc3RyaW5nJztcblxuLy8gaXRlcmF0b3JzXG52YXIgaXQgPSBpdGVyKFsnb25lJywgJ3R3bycsICd0aHJlZSddKTtcbndoaWxlICghaXQubmV4dCgpLmRvbmUpIHtcbiAgICBwcmludCBpdC52YWx1ZTtcbn1cblxuLy8gZm9yZWFjaCBzdGF0ZW1lbnRcbmZvcmVhY2ggKGl0ZW0gd2l0aCBrZXkgaW4gWydvbmUnLCAndHdvJywgJ3RocmVlJ10pIHtcbiAgICBwcmludCBpdGVtO1xufVxuXG4vLyBmb3JlYWNoIHN0YXRlbWVudCB3aXRoIG5vbmVcbmZvcmVhY2ggKGl0ZW0gIGluIFtdKSB7XG4gICAgcHJpbnQgaXRlbTtcbn0gbm9uZSB7XG4gICAgcHJpbnQgXCJubyBpdGVtc1wiO1xufVxuXG4vLyBzcHJlYWQgb3BlcmF0b3JcbntcbiAgICB2YXIgYTEgPSBbJ29uZScsICd0d28nLCAndGhyZWUnXTtcbiAgICB2YXIgYjIgPSBbLi4uYTEsIC4uLlwic3ByZWFkaW5nXCJdO1xuICAgIHZhciBkMyA9IHtcbiAgICAgICAgLi4uYTEsXG4gICAgICAgIC4uLlwic3ByZWRpbmdcIlxuICAgIH07XG4gICAgcHJpbnQgYjI7XG4gICAgcHJpbnQgZDM7XG59XG5cbi8vIGxvZ2dpbiBpbnRvIGpzIGNvbnNvbGVcbmVjaG8gKCdleGVjdXRpb24gZmluaXNoZWQnKTtcblxuLy8gZmV0Y2hpbmcgZGF0YS4gQ3VycmVudGx5IHVucGFyc2VkIHRleHRcbmZldGNoICgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3RvZG9zLzEnLCBAKHJlcykge1xuICAgIGVjaG8ocmVzKTtcbn0pO1xuXG5cbmZ1bmN0aW9uIHRlc3RGb3JTdGF0ZW1lbnRDbG9zdXJlKCkge1xuICAgIHZhciBsb2dzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyArK2kpIHtcbiAgICAgIGxvZ3NbaV0gPSBAKCkge1xuICAgICAgICAgcHJpbnQgaTtcbiAgICAgIH07XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgKytpKSB7XG4gICAgICBsb2dzW2ldKCk7XG4gICAgfVxufVxuLy8gcHJpbnRzIDAgMSAyIGFuZCBub3QgMiAyIDJcbnRlc3RGb3JTdGF0ZW1lbnRDbG9zdXJlKCk7XG5gO1xuIiwiaW1wb3J0ICogYXMgRXhwciBmcm9tIFwiLi90eXBlcy9leHByZXNzaW9uXCI7XG5pbXBvcnQgKiBhcyBTdG10IGZyb20gXCIuL3R5cGVzL3N0YXRlbWVudFwiO1xuaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gXCIuL2NvbnNvbGVcIjtcbmltcG9ydCB7IFNjb3BlIH0gZnJvbSBcIi4vc2NvcGVcIjtcbmltcG9ydCB7IFRva2VuVHlwZSwgVG9rZW4gfSBmcm9tIFwiLi90b2tlblwiO1xuaW1wb3J0IHsgUnVudGltZSB9IGZyb20gXCIuL3J1bnRpbWVcIjtcbmltcG9ydCB7ICRBbnkgfSBmcm9tIFwiLi90eXBlcy9hbnlcIjtcbmltcG9ydCB7ICRCb29sZWFuIH0gZnJvbSBcIi4vdHlwZXMvYm9vbGVhblwiO1xuaW1wb3J0IHsgJENsYXNzIH0gZnJvbSBcIi4vdHlwZXMvY2xhc3NcIjtcbmltcG9ydCB7ICREaWN0aW9uYXJ5IH0gZnJvbSBcIi4vdHlwZXMvZGljdGlvbmFyeVwiO1xuaW1wb3J0IHsgJEZ1bmN0aW9uIH0gZnJvbSBcIi4vdHlwZXMvZnVuY3Rpb25cIjtcbmltcG9ydCB7ICRMaXN0IH0gZnJvbSBcIi4vdHlwZXMvbGlzdFwiO1xuaW1wb3J0IHsgJE51bGwgfSBmcm9tIFwiLi90eXBlcy9udWxsXCI7XG5pbXBvcnQgeyAkTnVtYmVyIH0gZnJvbSBcIi4vdHlwZXMvbnVtYmVyXCI7XG5pbXBvcnQgeyAkT2JqZWN0IH0gZnJvbSBcIi4vdHlwZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyAkUmFuZ2UsIFJhbmdlVmFsdWUgfSBmcm9tIFwiLi90eXBlcy9yYW5nZVwiO1xuaW1wb3J0IHsgJFN0cmluZyB9IGZyb20gXCIuL3R5cGVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgJFZvaWQgfSBmcm9tIFwiLi90eXBlcy92b2lkXCI7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gXCIuL3R5cGVzL3R5cGUuZW51bVwiO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBTY2FubmVyIH0gZnJvbSBcIi4vc2Nhbm5lclwiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4vcGFyc2VyXCI7XG5pbXBvcnQgeyAkSXRlcmF0b3IgfSBmcm9tIFwiLi90eXBlcy9pdGVyYXRvclwiO1xuZGVjbGFyZSB2YXIgY29uem9sZTogQ29uc29sZTtcblxuZXhwb3J0IGNsYXNzIEludGVycHJldGVyXG4gICAgaW1wbGVtZW50cyBFeHByLkV4cHJWaXNpdG9yPCRBbnk+LCBTdG10LlN0bXRWaXNpdG9yPCRBbnk+XG57XG4gICAgcHVibGljIGdsb2JhbCA9IG5ldyBTY29wZSgpO1xuICAgIHB1YmxpYyBzY29wZSA9IHRoaXMuZ2xvYmFsO1xuICAgIHB1YmxpYyBlcnJvcnM6IHN0cmluZ1tdID0gW107XG4gICAgcHJpdmF0ZSBzY2FubmVyID0gbmV3IFNjYW5uZXIoKTtcbiAgICBwcml2YXRlIHBhcnNlciA9IG5ldyBQYXJzZXIoKTtcbiAgICBwdWJsaWMgc3RyaW5ncyA9IHtcbiAgICAgICAgbmV4dDogbmV3ICRTdHJpbmcoXCJuZXh0XCIpLFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5nbG9iYWwuc2V0KFwibWF0aFwiLCBuZXcgJERpY3Rpb25hcnkoUnVudGltZS5NYXRoKSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsLnNldChcImNvbnNvbGVcIiwgbmV3ICREaWN0aW9uYXJ5KFJ1bnRpbWUuQ29uc29sZSkpO1xuICAgICAgICB0aGlzLmdsb2JhbC5zZXQoXCJlY2hvXCIsIFJ1bnRpbWUuQ29uc29sZS5nZXQoXCJsb2dcIikpO1xuICAgICAgICB0aGlzLmdsb2JhbC5zZXQoXCJyZVwiLCBSdW50aW1lLlV0aWxzLmdldChcInJlXCIpKTtcbiAgICAgICAgdGhpcy5nbG9iYWwuc2V0KFwiaXRlclwiLCBSdW50aW1lLlV0aWxzLmdldChcIml0ZXJcIikpO1xuICAgICAgICB0aGlzLmdsb2JhbC5zZXQoXCJkZWxheVwiLCBSdW50aW1lLlV0aWxzLmdldChcImRlbGF5XCIpKTtcbiAgICAgICAgdGhpcy5nbG9iYWwuc2V0KFwiZmV0Y2hcIiwgUnVudGltZS5VdGlscy5nZXQoXCJmZXRjaFwiKSk7XG4gICAgICAgIHRoaXMucGFyc2VyLmVycm9yTGV2ZWwgPSAwO1xuICAgIH1cblxuICAgIHByaXZhdGUgZXZhbHVhdGUoZXhwcjogRXhwci5FeHByKTogJEFueSB7XG4gICAgICAgIHJldHVybiAoZXhwci5yZXN1bHQgPSBleHByLmFjY2VwdCh0aGlzKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBleGVjdXRlKHN0bXQ6IFN0bXQuU3RtdCk6ICRBbnkge1xuICAgICAgICByZXR1cm4gKHN0bXQucmVzdWx0ID0gc3RtdC5hY2NlcHQodGhpcykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBldmFsKHN0bXQ6IFN0bXQuU3RtdCk6IGFueSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogc3RtdC5hY2NlcHQodGhpcykudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogZS5tZXNzYWdlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBpbnRlcnBldChzdGF0ZW1lbnRzOiBTdG10LlN0bXRbXSk6IFN0bXQuU3RtdFtdIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBzdGF0ZW1lbnQgb2Ygc3RhdGVtZW50cykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGUoc3RhdGVtZW50KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgICAgICAgICAgIGNvbnpvbGUuZXJyb3IoZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKGUubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZXJyb3JzLmxlbmd0aCA+IDEwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKFwiUnVudGltZSBFcnJvciBsaW1pdCBleGNlZWRlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlbWVudHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRzO1xuICAgIH1cblxuICAgIHB1YmxpYyBlcnJvcihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSdW50aW1lIEVycm9yID0+ICR7bWVzc2FnZX1gKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRFeHByZXNzaW9uU3RtdChzdG10OiBTdG10LkV4cHJlc3Npb24pOiAkQW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGUoc3RtdC5leHByZXNzaW9uKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRQcmludFN0bXQoc3RtdDogU3RtdC5QcmludCk6ICRBbnkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5ldmFsdWF0ZShzdG10LmV4cHJlc3Npb24pO1xuICAgICAgICBjb256b2xlLmxvZyhkYXRhLnRvU3RyaW5nKCkpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRWYXJTdG10KHN0bXQ6IFN0bXQuVmFyKTogJEFueSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IG5ldyAkTnVsbCgpO1xuICAgICAgICBpZiAoc3RtdC5pbml0aWFsaXplciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmV2YWx1YXRlKHN0bXQuaW5pdGlhbGl6ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZS5pc0xhbWJkYSgpKSB7XG4gICAgICAgICAgICAodmFsdWUgYXMgYW55KS5uYW1lID0gc3RtdC5uYW1lLmxleGVtZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjb3BlLmRlZmluZShzdG10Lm5hbWUubGV4ZW1lLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRWYXJpYWJsZUV4cHIoZXhwcjogRXhwci5WYXJpYWJsZSk6ICRBbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5nZXQoZXhwci5uYW1lLmxleGVtZSwgZXhwci5uYW1lKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRQb3N0Zml4RXhwcihleHByOiBFeHByLlBvc3RmaXgpOiAkQW55IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNjb3BlLmdldChleHByLm5hbWUubGV4ZW1lLCBleHByLm5hbWUpO1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IG5ldyAkTnVtYmVyKHZhbHVlLnZhbHVlICsgZXhwci5pbmNyZW1lbnQpO1xuICAgICAgICB0aGlzLnNjb3BlLmFzc2lnbihleHByLm5hbWUubGV4ZW1lLCBuZXdWYWx1ZSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRMaXN0RXhwcihleHByOiBFeHByLkxpc3QpOiAkQW55IHtcbiAgICAgICAgY29uc3QgdmFsdWVzOiAkQW55W10gPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBleHByZXNzaW9uIG9mIGV4cHIudmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChleHByZXNzaW9uIGluc3RhbmNlb2YgRXhwci5TcHJlYWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZXZhbHVhdGUoZXhwcmVzc2lvbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJlYWRBbnlJbnRvTGlzdCh2YWx1ZSwgdmFsdWVzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXhwcmVzc2lvbiBpbnN0YW5jZW9mIEV4cHIuUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByYW5nZTogUmFuZ2VWYWx1ZSA9ICh0aGlzLmV2YWx1YXRlKGV4cHJlc3Npb24pIGFzICRSYW5nZSlcbiAgICAgICAgICAgICAgICAgICAgLnZhbHVlO1xuICAgICAgICAgICAgICAgIHJhbmdlLnN0ZXAgPSByYW5nZS5zdGVwID8gcmFuZ2Uuc3RlcCA6IDE7XG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlLnN0ZXAgPiAwICYmIHJhbmdlLnN0YXJ0IDw9IHJhbmdlLmVuZCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gcmFuZ2Uuc3RhcnQ7IGkgPD0gcmFuZ2UuZW5kOyBpICs9IHJhbmdlLnN0ZXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKG5ldyAkTnVtYmVyKGkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmFuZ2Uuc3RlcCA8IDAgJiYgcmFuZ2Uuc3RhcnQgPj0gcmFuZ2UuZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSByYW5nZS5zdGFydDsgaSA+PSByYW5nZS5lbmQ7IGkgKz0gcmFuZ2Uuc3RlcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnB1c2gobmV3ICROdW1iZXIoaSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGBJbnZhbGlkIHJhbmdlIGV4cHJlc3Npb24gYXQgbGluZSAke2V4cHJlc3Npb24ubGluZX0gd2l0aCByYW5nZSB2YWx1ZSBvZiBbJHtyYW5nZS5zdGFydH06JHtyYW5nZS5lbmR9OiR7cmFuZ2Uuc3RlcH1dYFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmV2YWx1YXRlKGV4cHJlc3Npb24pO1xuICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3ICRMaXN0KHZhbHVlcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzcHJlYWRBbnlJbnRvTGlzdCh2YWx1ZTogJEFueSwgdmFsdWVzOiAkQW55W10pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaXQgPSBuZXcgJEl0ZXJhdG9yKHZhbHVlKTtcbiAgICAgICAgd2hpbGUgKCEoJEl0ZXJhdG9yLm5leHQoaXQsIFtdLCB0aGlzKSBhcyAkSXRlcmF0b3IpLml0ZXIuZG9uZS52YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWVzLnB1c2goaXQuaXRlci52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRadHJpbmdFeHByKGV4cHI6IEV4cHIuWnRyaW5nKTogJEFueSB7XG4gICAgICAgIHJldHVybiBuZXcgJFN0cmluZyhleHByLnZhbHVlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRlbXBsYXRlUGFyc2Uoc291cmNlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCB0b2tlbnMgPSB0aGlzLnNjYW5uZXIuc2Nhbihzb3VyY2UpO1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnRzID0gdGhpcy5wYXJzZXIucGFyc2UodG9rZW5zKTtcbiAgICAgICAgaWYgKHRoaXMucGFyc2VyLmVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoYFRlbXBsYXRlIHN0cmluZyAgZXJyb3I6ICR7dGhpcy5wYXJzZXIuZXJyb3JzWzBdfWApO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHQgPSBcIlwiO1xuICAgICAgICBmb3IgKGNvbnN0IHN0YXRlbWVudCBvZiBzdGF0ZW1lbnRzKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdGhpcy5leGVjdXRlKHN0YXRlbWVudCkudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHB1YmxpYyB2aXNpdFRlbXBsYXRlRXhwcihleHByOiBFeHByLlRlbXBsYXRlKTogJEFueSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGV4cHIudmFsdWUucmVwbGFjZShcbiAgICAgICAgICAgIC9cXCRcXHsoW1xcc1xcU10rPylcXH0vZyxcbiAgICAgICAgICAgIChtLCBwbGFjZWhvbGRlcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwbGFjZWhvbGRlcltwbGFjZWhvbGRlci5sZW5ndGhdICE9PSBcIjtcIikge1xuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciArPSBcIjtcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGVtcGxhdGVQYXJzZShwbGFjZWhvbGRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBuZXcgJFN0cmluZyhyZXN1bHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyB2aXNpdFJlZ0V4RXhwcihleHByOiBFeHByLlJlZ0V4KTogJEFueSB7XG4gICAgICAgIC8qXG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhFbnRpdHkoZXhwci52YWx1ZSk7XG4gICAgICAgICovIHJldHVybiBuZXcgJE51bGwoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRBc3NpZ25FeHByKGV4cHI6IEV4cHIuQXNzaWduKTogJEFueSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5ldmFsdWF0ZShleHByLnZhbHVlKTtcbiAgICAgICAgdGhpcy5zY29wZS5hc3NpZ24oZXhwci5uYW1lLmxleGVtZSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHZpc2l0QmluYXJ5RXhwcihleHByOiBFeHByLkJpbmFyeSk6ICRBbnkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBleHByLmxlZnQgaW5zdGFuY2VvZiBFeHByLlNwcmVhZCAmJlxuICAgICAgICAgICAgZXhwci5yaWdodCBpbnN0YW5jZW9mIEV4cHIuU3ByZWFkXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ByZWFkQmluYXJ5RXhwcihcbiAgICAgICAgICAgICAgICBleHByLmxlZnQudmFsdWUsXG4gICAgICAgICAgICAgICAgZXhwci5yaWdodC52YWx1ZSxcbiAgICAgICAgICAgICAgICBleHByLm9wZXJhdG9yXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMuZXZhbHVhdGUoZXhwci5sZWZ0KTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLmV2YWx1YXRlKGV4cHIucmlnaHQpO1xuXG4gICAgICAgIHN3aXRjaCAoZXhwci5vcGVyYXRvci50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5NaW51czpcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLk1pbnVzRXF1YWw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVtYmVyKGxlZnQudmFsdWUgLSByaWdodC52YWx1ZSk7XG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5TbGFzaDpcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlNsYXNoRXF1YWw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVtYmVyKGxlZnQudmFsdWUgLyByaWdodC52YWx1ZSk7XG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5TdGFyOlxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuU3RhckVxdWFsOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJE51bWJlcihsZWZ0LnZhbHVlICogcmlnaHQudmFsdWUpO1xuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuUGVyY2VudDpcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlBlcmNlbnRFcXVhbDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICROdW1iZXIobGVmdC52YWx1ZSAlIHJpZ2h0LnZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlBsdXM6XG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5QbHVzRXF1YWw6XG4gICAgICAgICAgICAgICAgaWYgKGxlZnQuaXNOdW1iZXIoKSAmJiByaWdodC5pc051bWJlcigpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJE51bWJlcihsZWZ0LnZhbHVlICsgcmlnaHQudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobGVmdC5pc1N0cmluZygpICYmIHJpZ2h0LmlzU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkU3RyaW5nKGxlZnQudmFsdWUgKyByaWdodC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsZWZ0LmlzTGlzdCgpICYmIHJpZ2h0LmlzTGlzdCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJExpc3QobGVmdC52YWx1ZS5jb25jYXQocmlnaHQudmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxlZnQuaXNEaWN0aW9uYXJ5KCkgJiYgcmlnaHQuaXNEaWN0aW9uYXJ5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkRGljdGlvbmFyeShcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBNYXAoWy4uLmxlZnQudmFsdWUsIC4uLnJpZ2h0LnZhbHVlXSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkU3RyaW5nKGxlZnQudG9TdHJpbmcoKSArIHJpZ2h0LnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuUGlwZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICROdW1iZXIobGVmdC52YWx1ZSB8IHJpZ2h0LnZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkNhcmV0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJE51bWJlcihsZWZ0LnZhbHVlIF4gcmlnaHQudmFsdWUpO1xuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuR3JlYXRlcjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKGxlZnQudmFsdWUgPiByaWdodC52YWx1ZSk7XG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5HcmVhdGVyRXF1YWw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbihsZWZ0LnZhbHVlID49IHJpZ2h0LnZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkxlc3M6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbihsZWZ0LnZhbHVlIDwgcmlnaHQudmFsdWUpO1xuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuTGVzc0VxdWFsOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4obGVmdC52YWx1ZSA8PSByaWdodC52YWx1ZSk7XG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5FcXVhbEVxdWFsOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4obGVmdC52YWx1ZSA9PT0gcmlnaHQudmFsdWUpO1xuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuQmFuZ0VxdWFsOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4obGVmdC52YWx1ZSAhPT0gcmlnaHQudmFsdWUpO1xuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuTGVzc0VxdWFsR3JlYXRlcjpcbiAgICAgICAgICAgICAgICBpZiAobGVmdC52YWx1ZSA8IHJpZ2h0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJE51bWJlcigtMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsZWZ0LnZhbHVlID4gcmlnaHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVtYmVyKDEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJE51bWJlcigwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJVbmtub3duIGJpbmFyeSBvcGVyYXRvciBcIiArIGV4cHIub3BlcmF0b3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJE51bGwoKTsgLy8gdW5yZWFjaGFibGVcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKlxuICAgIHByaXZhdGUgc3ByZWFkQmluYXJ5Q29tcGFyaXNzaW9uKGxlZnQ6IEV4cHIuRXhwciwgcmlnaHQ6IEV4cHIuRXhwcik6ICRBbnkge1xuICAgICAgICBjb25zdCBsaXQgPSBuZXcgJEl0ZXJhdG9yKHRoaXMuZXZhbHVhdGUobGVmdCkpO1xuICAgICAgICBjb25zdCByaXQgPSBuZXcgJEl0ZXJhdG9yKHRoaXMuZXZhbHVhdGUocmlnaHQpKTtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICgkSXRlcmF0b3IubmV4dChsaXQsIFtdLCB0aGlzKSBhcyAkSXRlcmF0b3IpO1xuICAgICAgICAgICAgKCRJdGVyYXRvci5uZXh0KHJpdCwgW10sIHRoaXMpIGFzICRJdGVyYXRvcik7XG4gICAgICAgICAgICBpZiAobGl0Lml0ZXIuZG9uZS52YWx1ZSB8fCByaXQuaXRlci5kb25lLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgLy8gb25lIG9mIHRoZSBpdGVyYXRvcnMgY29tcGxldGVkXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobGl0Lml0ZXIudmFsdWUudmFsdWUgIT09IHJpdC5pdGVyLnZhbHVlLnZhbHVlKSB7XG4gICAgICAgICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobGl0Lml0ZXIuZG9uZS52YWx1ZSAmJiByaXQuaXRlci5kb25lLnZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4oZmFsc2UpO1xuICAgIH0gKi9cblxuICAgIHByaXZhdGUgc3ByZWFkQmluYXJ5RXhwcihcbiAgICAgICAgbGVmdDogRXhwci5FeHByLFxuICAgICAgICByaWdodDogRXhwci5FeHByLFxuICAgICAgICBvcGVyYXRvcjogVG9rZW5cbiAgICApOiAkQW55IHtcbiAgICAgICAgY29uc3QgbGl0ID0gbmV3ICRJdGVyYXRvcih0aGlzLmV2YWx1YXRlKGxlZnQpKTtcbiAgICAgICAgY29uc3Qgcml0ID0gbmV3ICRJdGVyYXRvcih0aGlzLmV2YWx1YXRlKHJpZ2h0KSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdDogJEFueVtdID0gW107XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAkSXRlcmF0b3IubmV4dChsaXQsIFtdLCB0aGlzKTtcbiAgICAgICAgICAgICRJdGVyYXRvci5uZXh0KHJpdCwgW10sIHRoaXMpO1xuICAgICAgICAgICAgaWYgKGxpdC5pdGVyLmRvbmUudmFsdWUgfHwgcml0Lml0ZXIuZG9uZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIG9uZSBvZiB0aGUgaXRlcmF0b3JzIGNvbXBsZXRlZFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYmluYXJ5ID0gbmV3IEV4cHIuQmluYXJ5KFxuICAgICAgICAgICAgICAgIG5ldyBFeHByLkxpdGVyYWwobGl0Lml0ZXIudmFsdWUsIGxlZnQubGluZSksXG4gICAgICAgICAgICAgICAgb3BlcmF0b3IsXG4gICAgICAgICAgICAgICAgbmV3IEV4cHIuTGl0ZXJhbChyaXQuaXRlci52YWx1ZSwgcmlnaHQubGluZSksXG4gICAgICAgICAgICAgICAgb3BlcmF0b3IubGluZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuZXZhbHVhdGUoYmluYXJ5KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyAkTGlzdChyZXN1bHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyB2aXNpdExvZ2ljYWxFeHByKGV4cHI6IEV4cHIuTG9naWNhbCk6ICRBbnkge1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5ldmFsdWF0ZShleHByLmxlZnQpO1xuXG4gICAgICAgIGlmIChleHByLm9wZXJhdG9yLnR5cGUgPT09IFRva2VuVHlwZS5Pcikge1xuICAgICAgICAgICAgaWYgKGxlZnQuaXNUcnV0aHkoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFsZWZ0LmlzVHJ1dGh5KCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlKGV4cHIucmlnaHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyB2aXNpdFRlcm5hcnlFeHByKGV4cHI6IEV4cHIuVGVybmFyeSk6ICRBbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZShleHByLmNvbmRpdGlvbikuaXNUcnV0aHkoKVxuICAgICAgICAgICAgPyB0aGlzLmV2YWx1YXRlKGV4cHIudGhlbkV4cHIpXG4gICAgICAgICAgICA6IHRoaXMuZXZhbHVhdGUoZXhwci5lbHNlRXhwcik7XG4gICAgfVxuXG4gICAgcHVibGljIHZpc2l0TnVsbENvYWxlc2NpbmdFeHByKGV4cHI6IEV4cHIuTnVsbENvYWxlc2NpbmcpOiAkQW55IHtcbiAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMuZXZhbHVhdGUoZXhwci5sZWZ0KTtcbiAgICAgICAgaWYgKGxlZnQuaXNOdWxsKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlKGV4cHIucmlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH1cblxuICAgIHB1YmxpYyB2aXNpdEdyb3VwaW5nRXhwcihleHByOiBFeHByLkdyb3VwaW5nKTogJEFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlKGV4cHIuZXhwcmVzc2lvbik7XG4gICAgfVxuXG4gICAgcHVibGljIHZpc2l0TGl0ZXJhbEV4cHIoZXhwcjogRXhwci5MaXRlcmFsKTogJEFueSB7XG4gICAgICAgIHJldHVybiBleHByLnZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyB2aXNpdFVuYXJ5RXhwcihleHByOiBFeHByLlVuYXJ5KTogJEFueSB7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5ldmFsdWF0ZShleHByLnJpZ2h0KTtcbiAgICAgICAgc3dpdGNoIChleHByLm9wZXJhdG9yLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLk1pbnVzOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJE51bWJlcigtTnVtYmVyKHJpZ2h0LnZhbHVlKSk7XG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5CYW5nOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4oIXJpZ2h0LmlzVHJ1dGh5KCkpO1xuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuUGx1c1BsdXM6XG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5NaW51c01pbnVzOlxuICAgICAgICAgICAgICAgIGlmICghcmlnaHQuaXNOdW1iZXIoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgYEludmFsaWQgcmlnaHQtaGFuZCBzaWRlIGV4cHJlc3Npb24gaW4gcHJlZml4IG9wZXJhdGlvbjogIFwiJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRhVHlwZVtyaWdodC50eXBlXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSAke3JpZ2h0fSBpcyBub3QgYSBudW1iZXJgXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID1cbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHJpZ2h0LnZhbHVlKSArXG4gICAgICAgICAgICAgICAgICAgIChleHByLm9wZXJhdG9yLnR5cGUgPT09IFRva2VuVHlwZS5QbHVzUGx1cyA/IDEgOiAtMSk7XG4gICAgICAgICAgICAgICAgaWYgKGV4cHIucmlnaHQgaW5zdGFuY2VvZiBFeHByLlZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NvcGUuYXNzaWduKFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwci5yaWdodC5uYW1lLmxleGVtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyAkTnVtYmVyKG5ld1ZhbHVlKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXhwci5yaWdodCBpbnN0YW5jZW9mIEV4cHIuR2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzc2luZyA9IG5ldyBFeHByLlNldChcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHIucmlnaHQuZW50aXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwci5yaWdodC5rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRXhwci5MaXRlcmFsKG5ldyAkTnVtYmVyKG5ld1ZhbHVlKSwgZXhwci5saW5lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHIubGluZVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2YWx1YXRlKGFzc2luZyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGBJbnZhbGlkIHJpZ2h0LWhhbmQgc2lkZSBleHByZXNzaW9uIGluIHByZWZpeCBvcGVyYXRpb246ICAke2V4cHIucmlnaHR9YFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICROdW1iZXIobmV3VmFsdWUpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGBVbmtub3duIHVuYXJ5IG9wZXJhdG9yICcgKyBleHByLm9wZXJhdG9yYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpOyAvLyBzaG91bGQgYmUgdW5yZWFjaGFibGVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBleGVjdXRlQmxvY2soc3RhdGVtZW50czogU3RtdC5TdG10W10sIG5leHRTY29wZTogU2NvcGUpOiAkQW55IHtcbiAgICAgICAgY29uc3QgY3VycmVudFNjb3BlID0gdGhpcy5zY29wZTtcbiAgICAgICAgdGhpcy5zY29wZSA9IG5leHRTY29wZTtcbiAgICAgICAgZm9yIChjb25zdCBzdGF0ZW1lbnQgb2Ygc3RhdGVtZW50cykge1xuICAgICAgICAgICAgc3RhdGVtZW50LnJlc3VsdCA9IHRoaXMuZXhlY3V0ZShzdGF0ZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NvcGUgPSBjdXJyZW50U2NvcGU7XG4gICAgICAgIHJldHVybiBuZXcgJFZvaWQoXCJibG9ja1wiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRCbG9ja1N0bXQoc3RtdDogU3RtdC5CbG9jayk6ICRBbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlQmxvY2soc3RtdC5zdGF0ZW1lbnRzLCBuZXcgU2NvcGUodGhpcy5zY29wZSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyB2aXNpdElmU3RtdChzdG10OiBTdG10LklmKTogJEFueSB7XG4gICAgICAgIGlmICh0aGlzLmV2YWx1YXRlKHN0bXQuY29uZGl0aW9uKS5pc1RydXRoeSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlKHN0bXQudGhlblN0bXQpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0bXQuZWxzZVN0bXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoc3RtdC5lbHNlU3RtdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB2aXNpdFdoaWxlU3RtdChzdG10OiBTdG10LldoaWxlKTogJEFueSB7XG4gICAgICAgIGNvbnN0IHJlc3RvcmVTY29wZSA9IHRoaXMuc2NvcGU7XG4gICAgICAgIHdoaWxlICh0aGlzLmV2YWx1YXRlKHN0bXQuY29uZGl0aW9uKS5pc1RydXRoeSgpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhlY3V0ZShzdG10Lmxvb3ApO1xuICAgICAgICAgICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY29wZSA9IHJlc3RvcmVTY29wZTtcbiAgICAgICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mICRBbnkgJiYgZS50eXBlID09PSBEYXRhVHlwZS5CcmVhaykge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUgaW5zdGFuY2VvZiAkQW55ICYmIGUudHlwZSA9PT0gRGF0YVR5cGUuQ29udGludWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY29wZSA9IHJlc3RvcmVTY29wZTtcbiAgICAgICAgcmV0dXJuIG5ldyAkVm9pZChcIndoaWxlXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyB2aXNpdERvV2hpbGVTdG10KHN0bXQ6IFN0bXQuRG9XaGlsZSk6ICRBbnkge1xuICAgICAgICBjb25zdCByZXN0b3JlU2NvcGUgPSB0aGlzLnNjb3BlO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhlY3V0ZShzdG10Lmxvb3ApO1xuICAgICAgICAgICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY29wZSA9IHJlc3RvcmVTY29wZTtcbiAgICAgICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mICRBbnkgJiYgZS50eXBlID09PSBEYXRhVHlwZS5CcmVhaykge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUgaW5zdGFuY2VvZiAkQW55ICYmIGUudHlwZSA9PT0gRGF0YVR5cGUuQ29udGludWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKHRoaXMuZXZhbHVhdGUoc3RtdC5jb25kaXRpb24pLmlzVHJ1dGh5KCkpO1xuICAgICAgICB0aGlzLnNjb3BlID0gcmVzdG9yZVNjb3BlO1xuICAgICAgICByZXR1cm4gbmV3ICRWb2lkKFwiZG93aGlsZVwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRGb3JTdG10KHN0bXQ6IFN0bXQuRm9yKTogJEFueSB7XG4gICAgICAgIGNvbnN0IHJlc3RvcmVTY29wZSA9IHRoaXMuc2NvcGU7XG4gICAgICAgIGNvbnN0IG91dGVyU2NvcGUgPSBuZXcgU2NvcGUodGhpcy5zY29wZSk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBvdXRlclNjb3BlO1xuICAgICAgICB0aGlzLmV4ZWN1dGUoc3RtdC5pbml0aWFsaXplcik7XG4gICAgICAgIHdoaWxlICh0aGlzLmV2YWx1YXRlKHN0bXQuY29uZGl0aW9uKS5pc1RydXRoeSgpKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3BlID0gdGhpcy5zY29wZS5jbG9uZSgpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGUoc3RtdC5sb29wKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgJEFueSAmJiBlLnR5cGUgPT09IERhdGFUeXBlLkJyZWFrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZSBpbnN0YW5jZW9mICRBbnkgJiYgZS50eXBlID09PSBEYXRhVHlwZS5Db250aW51ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY29wZSA9IG91dGVyU2NvcGU7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmFsdWF0ZShzdG10LmluY3JlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY29wZSA9IHJlc3RvcmVTY29wZTtcbiAgICAgICAgcmV0dXJuIG5ldyAkVm9pZChcImZvclwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRGb3JlYWNoU3RtdChzdG10OiBTdG10LkZvcmVhY2gpOiAkQW55IHtcbiAgICAgICAgY29uc3QgaXQgPSBuZXcgJEl0ZXJhdG9yKHRoaXMuZXZhbHVhdGUoc3RtdC5pdGVyYWJsZSkpO1xuICAgICAgICBjb25zdCByZXN0b3JlU2NvcGUgPSB0aGlzLnNjb3BlO1xuICAgICAgICBsZXQgaGFzSXRlbXMgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKCEoJEl0ZXJhdG9yLm5leHQoaXQsIFtdLCB0aGlzKSBhcyAkSXRlcmF0b3IpLml0ZXIuZG9uZS52YWx1ZSkge1xuICAgICAgICAgICAgaGFzSXRlbXMgPSB0cnVlO1xuICAgICAgICAgICAgY29uc3QgZm9yZWFjaFNjb3BlID0gbmV3IFNjb3BlKHRoaXMuc2NvcGUpO1xuICAgICAgICAgICAgZm9yZWFjaFNjb3BlLnNldChzdG10Lm5hbWUubGV4ZW1lLCBpdC5pdGVyLnZhbHVlKTtcbiAgICAgICAgICAgIGlmIChzdG10LmtleSkge1xuICAgICAgICAgICAgICAgIGZvcmVhY2hTY29wZS5zZXQoc3RtdC5rZXkubGV4ZW1lLCBpdC5pdGVyLmluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlQmxvY2soW3N0bXQubG9vcF0sIGZvcmVhY2hTY29wZSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3BlID0gcmVzdG9yZVNjb3BlO1xuICAgICAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgJEFueSAmJiBlLnR5cGUgPT09IERhdGFUeXBlLkJyZWFrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZSBpbnN0YW5jZW9mICRBbnkgJiYgZS50eXBlID09PSBEYXRhVHlwZS5Db250aW51ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWhhc0l0ZW1zICYmIHN0bXQubm9uZSkge1xuICAgICAgICAgICAgdGhpcy5leGVjdXRlKHN0bXQubm9uZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY29wZSA9IHJlc3RvcmVTY29wZTtcbiAgICAgICAgcmV0dXJuIG5ldyAkVm9pZChcImZvcmVhY2hcIik7XG4gICAgfVxuXG4gICAgcHVibGljIHZpc2l0Q2FsbEV4cHIoZXhwcjogRXhwci5DYWxsKTogJEFueSB7XG4gICAgICAgIC8vIHZlcmlmeSBjYWxsZWUgaXMgYSBmdW5jdGlvblxuICAgICAgICBjb25zdCBjYWxsZWUgPSB0aGlzLmV2YWx1YXRlKGV4cHIuY2FsbGVlKTtcbiAgICAgICAgaWYgKCFjYWxsZWUuaXNGdW5jdGlvbigpKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKGAke2NhbGxlZX0gaXMgbm90IGEgZnVuY3Rpb25gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCB0aGlzIGluIGZ1bmN0aW9uIHNjb3BlXG4gICAgICAgIGxldCB0aGl6OiBhbnkgPSBudWxsO1xuICAgICAgICBpZiAoZXhwci5jYWxsZWUgaW5zdGFuY2VvZiBFeHByLkdldCkge1xuICAgICAgICAgICAgaWYgKGV4cHIuY2FsbGVlLmVudGl0eSBpbnN0YW5jZW9mIEV4cHIuQmFzZSkge1xuICAgICAgICAgICAgICAgIHRoaXogPSB0aGlzLnNjb3BlLmdldChcInRoaXNcIiwgZXhwci5wYXJlbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXogPSB0aGlzLmV2YWx1YXRlKGV4cHIuY2FsbGVlLmVudGl0eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZXhwci50aGl6ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGl6ID0gZXhwci50aGl6O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZXZhbHVhdGUgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICAgIGNvbnN0IGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBhcmd1bWVudCBvZiBleHByLmFyZ3MpIHtcbiAgICAgICAgICAgIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIEV4cHIuU3ByZWFkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmV2YWx1YXRlKGFyZ3VtZW50LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwcmVhZEFueUludG9MaXN0KHZhbHVlLCBhcmdzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZXZhbHVhdGUoYXJndW1lbnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhc3MgYXJndW1lbnRzIHRvIGZ1bmN0aW9uXG4gICAgICAgIGNvbnN0IGZ1bmMgPSBjYWxsZWUgYXMgJEZ1bmN0aW9uO1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggIT09IGZ1bmMuYXJpdHkgJiYgZnVuYy5hcml0eSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnpvbGUud2FybihcbiAgICAgICAgICAgICAgICBgV2FybmluZyBhdCAoJHtleHByLnBhcmVuLmxpbmV9KTogJHtjYWxsZWV9IG1pc21hdGNoZWQgYXJndW1lbnQgY291bnQ7IFxcbiBFeHBlY3RlZCAke2Z1bmMuYXJpdHl9IGJ1dCBnb3QgJHthcmdzLmxlbmd0aH0gYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IGZ1bmMuYXJpdHkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gYXJncy5sZW5ndGg7IGkgPD0gZnVuYy5hcml0eTsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MucHVzaChuZXcgJE51bGwoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGV4ZWN1dGUgZnVuY3Rpb25cbiAgICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGl6LCBhcmdzLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRCYXNlRXhwcihleHByOiBFeHByLkJhc2UpOiAkQW55IHtcbiAgICAgICAgY29uc3QgdGhpeiA9IHRoaXMuc2NvcGUuZ2V0KGV4cHIucGFyZW4ubGV4ZW1lLCBleHByLnBhcmVuKTtcblxuICAgICAgICBpZiAoIXRoaXouaXNPYmplY3QoKSkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihcImJhc2UgZXhwcmVzc2lvbiBjYW4gYmUgdXNlZCBvbmx5IGluc2lkZSBtZXRob2RzXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2xheno6ICRDbGFzcyA9ICh0aGl6IGFzICRPYmplY3QpLmNvbnp0cnVjdG9yIGFzICRDbGFzcztcbiAgICAgICAgY29uc3QgcGFyZW50ID0gY2xhenoucGFyZW50O1xuICAgICAgICBpZiAocGFyZW50LmlzTnVsbCgpKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgICAgICAgIFwiQ2xhc3MgXCIgKyBjbGF6eiArIFwiIGhhcyBub3QgYmVlbiBleHRlbmRlZCBhbmQgaGFzIG5vIGJhc2VcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIHZpc2l0TmV3RXhwcihleHByOiBFeHByLk5ldyk6ICRBbnkge1xuICAgICAgICBjb25zdCBuZXdDYWxsID0gZXhwci5jbGF6eiBhcyBFeHByLkNhbGw7XG4gICAgICAgIC8vIGludGVybmFsIGNsYXNzIGRlZmluaXRpb24gaW5zdGFuY2VcbiAgICAgICAgY29uc3QgY2xheno6ICRDbGFzcyA9IHRoaXMuZXZhbHVhdGUobmV3Q2FsbC5jYWxsZWUpIGFzICRDbGFzcztcblxuICAgICAgICBpZiAoIWNsYXp6LmlzQ2xhc3MoKSkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgICAgICAgICBgJyR7Y2xhenp9JyBpcyBub3QgYSBjbGFzcy4gJ25ldycgc3RhdGVtZW50IG11c3QgYmUgdXNlZCB3aXRoIGNsYXNzZXMuYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBuZXcgb2JqZWN0XG4gICAgICAgIGNvbnN0IGVudGl0eSA9IG5ldyAkT2JqZWN0KG5ldyBNYXAoKSwgY2xhenopO1xuICAgICAgICAvLyBjb25zdHJ1Y3RvciBtZXRob2Qgb2YgdGhlIGNsYXNzXG4gICAgICAgIGNvbnN0IGNvbnp0cnVjdG9yID0gY2xhenouZ2V0KG5ldyAkU3RyaW5nKFwiY29uc3RydWN0b3JcIikpIGFzICRGdW5jdGlvbjtcbiAgICAgICAgaWYgKGNvbnp0cnVjdG9yLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgIGNvbnN0IGFyZ3M6ICRBbnlbXSA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBhcmcgb2YgbmV3Q2FsbC5hcmdzKSB7XG4gICAgICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZXZhbHVhdGUoYXJnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb256dHJ1Y3Rvci5jYWxsKHRoaXMsIGVudGl0eSwgYXJncyk7XG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5ldmFsdWF0ZShcbiAgICAgICAgICAgICAgICBuZXcgRXhwci5DYWxsKFxuICAgICAgICAgICAgICAgICAgICBuZXcgRXhwci5HZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRXhwci5MaXRlcmFsKGVudGl0eSwgZXhwci5saW5lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFeHByLktleShjb256dHJ1Y3Rvci5kZWNsYXJhdGlvbi5uYW1lLCBleHByLmxpbmUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgVG9rZW5UeXBlLkRvdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHIubGluZVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBjb256dHJ1Y3Rvci5kZWNsYXJhdGlvbi5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBuZXdDYWxsLmFyZ3MsXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eSxcbiAgICAgICAgICAgICAgICAgICAgZXhwci5saW5lXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW50aXR5O1xuICAgIH1cblxuICAgIHB1YmxpYyB2aXNpdERpY3Rpb25hcnlFeHByKGV4cHI6IEV4cHIuRGljdGlvbmFyeSk6ICRBbnkge1xuICAgICAgICBjb25zdCBkaWN0ID0gbmV3ICREaWN0aW9uYXJ5KG5ldyBNYXAoKSk7XG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgZXhwci5wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICBpZiAocHJvcGVydHkgaW5zdGFuY2VvZiBFeHByLlNwcmVhZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5ldmFsdWF0ZShwcm9wZXJ0eS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaXQgPSBuZXcgJEl0ZXJhdG9yKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICAgICAgICAgICEoJEl0ZXJhdG9yLm5leHQoaXQsIFtdLCB0aGlzKSBhcyAkSXRlcmF0b3IpLml0ZXIuZG9uZS52YWx1ZVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBkaWN0LnNldChpdC5pdGVyLmluZGV4LCBpdC5pdGVyLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IHRoaXMuZXZhbHVhdGUoKHByb3BlcnR5IGFzIEV4cHIuU2V0KS5rZXkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5ldmFsdWF0ZSgocHJvcGVydHkgYXMgRXhwci5TZXQpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBkaWN0LnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGljdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRLZXlFeHByKGV4cHI6IEV4cHIuS2V5KTogJEFueSB7XG4gICAgICAgIHJldHVybiBuZXcgJEFueShleHByLm5hbWUubGl0ZXJhbCk7XG4gICAgfVxuXG4gICAgcHVibGljIHZpc2l0R2V0RXhwcihleHByOiBFeHByLkdldCk6ICRBbnkge1xuICAgICAgICBjb25zdCBlbnRpdHkgPSB0aGlzLmV2YWx1YXRlKGV4cHIuZW50aXR5KTtcbiAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5ldmFsdWF0ZShleHByLmtleSk7XG4gICAgICAgIGlmIChlbnRpdHkuaXNOdWxsKCkgJiYgZXhwci50eXBlID09PSBUb2tlblR5cGUuUXVlc3Rpb25Eb3QpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgJE51bGwoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW50aXR5LmdldChrZXkpO1xuICAgIH1cblxuICAgIHB1YmxpYyB2aXNpdFNldEV4cHIoZXhwcjogRXhwci5TZXQpOiAkQW55IHtcbiAgICAgICAgY29uc3QgZW50aXR5ID0gdGhpcy5ldmFsdWF0ZShleHByLmVudGl0eSk7XG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuZXZhbHVhdGUoZXhwci5rZXkpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZXZhbHVhdGUoZXhwci52YWx1ZSk7XG4gICAgICAgIGVudGl0eS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB2YWx1ZS52YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRGdW5jU3RtdChzdG10OiBTdG10LkZ1bmMpOiAkQW55IHtcbiAgICAgICAgY29uc3QgZnVuYyA9IG5ldyAkRnVuY3Rpb24oc3RtdCwgdGhpcy5zY29wZSk7XG4gICAgICAgIHRoaXMuc2NvcGUuZGVmaW5lKHN0bXQubmFtZS5sZXhlbWUsIGZ1bmMpO1xuICAgICAgICByZXR1cm4gZnVuYztcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRDbGFzc1N0bXQoc3RtdDogU3RtdC5DbGFzcyk6ICRBbnkge1xuICAgICAgICBsZXQgcGFyZW50OiAkQW55O1xuXG4gICAgICAgIGlmIChzdG10LnBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcGFyZW50ID0gbmV3ICROdWxsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnQgPSB0aGlzLnNjb3BlLmdldChzdG10LnBhcmVudC5sZXhlbWUsIHN0bXQucGFyZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1ldGhvZHMgPSBuZXcgTWFwPGFueSwgJEFueT4oKTtcblxuICAgICAgICBmb3IgKGNvbnN0IG1ldGhvZCBvZiBzdG10Lm1ldGhvZHMpIHtcbiAgICAgICAgICAgIG1ldGhvZHMuc2V0KG1ldGhvZC5uYW1lLmxleGVtZSwgbmV3ICRGdW5jdGlvbihtZXRob2QsIHRoaXMuc2NvcGUpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGF6eiA9IG5ldyAkQ2xhc3Moc3RtdC5uYW1lLmxleGVtZSwgbWV0aG9kcywgcGFyZW50KTtcbiAgICAgICAgdGhpcy5zY29wZS5kZWZpbmUoc3RtdC5uYW1lLmxleGVtZSwgY2xhenopO1xuICAgICAgICByZXR1cm4gY2xheno7XG4gICAgfVxuXG4gICAgcHVibGljIHZpc2l0TGFtYmRhRXhwcihleHByOiBFeHByLkxhbWJkYSk6ICRBbnkge1xuICAgICAgICBjb25zdCBsYW1iZGE6IFN0bXQuRnVuYyA9IGV4cHIubGFtYmRhIGFzIFN0bXQuRnVuYztcbiAgICAgICAgY29uc3QgZnVuYzogJEZ1bmN0aW9uID0gbmV3ICRGdW5jdGlvbihsYW1iZGEsIHRoaXMuc2NvcGUpO1xuICAgICAgICByZXR1cm4gZnVuYztcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRSZXR1cm5TdG10KHN0bXQ6IFN0bXQuUmV0dXJuKTogJEFueSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IG5ldyAkTnVsbCgpO1xuICAgICAgICBpZiAoc3RtdC52YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmV2YWx1YXRlKHN0bXQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyAkQW55KHZhbHVlLCBEYXRhVHlwZS5SZXR1cm4pO1xuICAgIH1cblxuICAgIHB1YmxpYyB2aXNpdEJyZWFrU3RtdChzdG10OiBTdG10LkJyZWFrKTogJEFueSB7XG4gICAgICAgIHRocm93IG5ldyAkQW55KG51bGwsIERhdGFUeXBlLkJyZWFrKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRDb250aW51ZVN0bXQoc3RtdDogU3RtdC5Db250aW51ZSk6ICRBbnkge1xuICAgICAgICB0aHJvdyBuZXcgJEFueShudWxsLCBEYXRhVHlwZS5Db250aW51ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHZpc2l0UmFuZ2VFeHByKGV4cHI6IEV4cHIuUmFuZ2UpOiAkQW55IHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBleHByLnN0YXJ0ID8gdGhpcy5ldmFsdWF0ZShleHByLnN0YXJ0KS52YWx1ZSA6IG51bGw7XG4gICAgICAgIGNvbnN0IGVuZCA9IGV4cHIuZW5kID8gdGhpcy5ldmFsdWF0ZShleHByLmVuZCkudmFsdWUgOiBudWxsO1xuICAgICAgICBjb25zdCBzdGVwID0gZXhwci5zdGVwXG4gICAgICAgICAgICA/IHRoaXMuZXZhbHVhdGUoZXhwci5zdGVwKS52YWx1ZVxuICAgICAgICAgICAgOiBzdGFydCA8PSBlbmRcbiAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgOiAtMTtcbiAgICAgICAgcmV0dXJuIG5ldyAkUmFuZ2UobmV3IFJhbmdlVmFsdWUoc3RhcnQsIGVuZCwgc3RlcCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyB2aXNpdFR5cGVvZkV4cHIoZXhwcjogRXhwci5UeXBlb2YpOiAkQW55IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmV2YWx1YXRlKGV4cHIudmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3ICRTdHJpbmcoRGF0YVR5cGVbdmFsdWUudHlwZV0udG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHZpc2l0SXNFeHByKGV4cHI6IEV4cHIuSW5zdGFuY2VPZik6ICRBbnkge1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5ldmFsdWF0ZShleHByLmxlZnQpO1xuICAgICAgICBjb25zdCByaWdodCA9IERhdGFUeXBlW2NhcGl0YWxpemUoZXhwci5yaWdodC5sZXhlbWUpIGFzIG5ldmVyXTtcbiAgICAgICAgLy8gaXMgZGlyZWN0IGluc3RhbmNlIG9mIGNsYXNzXG4gICAgICAgIGlmIChsZWZ0LmlzT2JqZWN0KCkgJiYgKGxlZnQgYXMgJE9iamVjdCkubmFtZSA9PT0gZXhwci5yaWdodC5sZXhlbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4odHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaXMgbm90IGEgdHlwZVxuICAgICAgICBpZiAodHlwZW9mIHJpZ2h0ID09PSBcInVuZGVmaW5lZFwiIHx8IGlzTmFOKHJpZ2h0IGFzIG5ldmVyKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbihmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaXMgYSB0eXBlXG4gICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4oKGxlZnQudHlwZSBhcyB1bmtub3duKSA9PT0gKHJpZ2h0IGFzIHVua25vd24pKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRJbnN0YW5jZU9mRXhwcihleHByOiBFeHByLkluc3RhbmNlT2YpOiAkQW55IHtcbiAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMuZXZhbHVhdGUoZXhwci5sZWZ0KTtcbiAgICAgICAgaWYgKCFsZWZ0LmlzT2JqZWN0KCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4oZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGV4cHIucmlnaHQubGV4ZW1lO1xuXG4gICAgICAgIC8vIEFsbCBpbnN0YW5jZXMgZGVyaXZlIGZyb20gT2JqZWN0XG4gICAgICAgIGlmIChjbGFzc05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbih0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IGxlZnQgYXMgJE9iamVjdDtcbiAgICAgICAgbGV0IGNvbnp0cnVjdG9yID0gaW5zdGFuY2UuY29uenRydWN0b3IgYXMgJENsYXNzO1xuICAgICAgICBpZiAoY29uenRydWN0b3IubmFtZSA9PT0gY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlICghY29uenRydWN0b3IucGFyZW50LmlzTnVsbCgpKSB7XG4gICAgICAgICAgICBjb256dHJ1Y3RvciA9IGNvbnp0cnVjdG9yLnBhcmVudCBhcyAkQ2xhc3M7XG4gICAgICAgICAgICBpZiAoY29uenRydWN0b3IubmFtZSA9PT0gY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbih0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKGZhbHNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRWb2lkRXhwcihleHByOiBFeHByLlZvaWQpOiAkQW55IHtcbiAgICAgICAgdGhpcy5ldmFsdWF0ZShleHByLnZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB2aXNpdEluRXhwcihleHByOiBFeHByLkluKTogJEFueSB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuZXZhbHVhdGUoZXhwci5rZXkpO1xuICAgICAgICBjb25zdCBlbnRpdHkgPSB0aGlzLmV2YWx1YXRlKGV4cHIuZW50aXR5KTtcbiAgICAgICAgaWYgKGVudGl0eS5pc0tleVZhbHVlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4oZW50aXR5LnZhbHVlLmhhcyhrZXkudmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW50aXR5LmlzTGlzdCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKHR5cGVvZiBlbnRpdHkudmFsdWVba2V5LnZhbHVlXSAhPT0gXCJ1bmRlZmluZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVudGl0eS5pc1N0cmluZygpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3ICRCb29sZWFuKGVudGl0eS52YWx1ZS5pbmNsdWRlcyhrZXkudmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgICAgYE9wZXJhdG9yIFwiaW5cIiBjYW4ndCBiZSB1c2VkIG9uIHR5cGUgJHtcbiAgICAgICAgICAgICAgICBEYXRhVHlwZVtlbnRpdHkudHlwZV1cbiAgICAgICAgICAgIH0gd2l0aCB2YWx1ZSBcIiR7ZW50aXR5fVwiYFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gbmV3ICROdWxsKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHZpc2l0Q2hhckV4cHIoZXhwcjogRXhwci5DaGFyKTogJEFueSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5ldmFsdWF0ZShleHByLnZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyAkU3RyaW5nKFN0cmluZy5mcm9tQ2hhckNvZGUodmFsdWUudmFsdWUpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRTcHJlYWRFeHByKGV4cHI6IEV4cHIuU3ByZWFkKTogJEFueSB7XG4gICAgICAgIC8vIHRoaXMuZXJyb3IoYHVuZXhwZWN0ZWQgc3ByZWFkICcuLi4nIG9wZXJhdG9yIGF0IGxpbmUgJHtleHByLmxpbmV9YCk7XG4gICAgICAgIHJldHVybiBuZXcgJE51bGwoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXREZWxldGVFeHByKGV4cHI6IEV4cHIuRGVsZXRlKTogJEFueSB7XG4gICAgICAgIGlmICghKGV4cHIudmFsdWUgaW5zdGFuY2VvZiBFeHByLkdldCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5ldmFsdWF0ZShleHByLnZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBEYXRhVHlwZVt2YWx1ZS50eXBlXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgICAgICAgICBgQ2FuJ3QgZGVsZXRlIG9uIHR5cGUgJHt0eXBlfSB3aXRoIHZhbHVlICcke3ZhbHVlfScuIE5vdCBhIERpY3Rpb25hcnksIENsYXNzIG9yIEVudGl0eWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gbmV3ICROdWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBnZXRFeHByID0gZXhwci52YWx1ZSBhcyBFeHByLkdldDtcbiAgICAgICAgY29uc3QgZW50aXR5ID0gdGhpcy5ldmFsdWF0ZShnZXRFeHByLmVudGl0eSk7XG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuZXZhbHVhdGUoZ2V0RXhwci5rZXkpO1xuICAgICAgICByZXR1cm4gZW50aXR5LmRlbGV0ZShrZXkpO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIEV4cHIgZnJvbSBcIi4vdHlwZXMvZXhwcmVzc2lvblwiO1xuaW1wb3J0ICogYXMgU3RtdCBmcm9tIFwiLi90eXBlcy9zdGF0ZW1lbnRcIjtcbmltcG9ydCB7IENvbnNvbGUgfSBmcm9tIFwiLi9jb25zb2xlXCI7XG5pbXBvcnQgeyBUb2tlbiwgVG9rZW5UeXBlIH0gZnJvbSBcIi4vdG9rZW5cIjtcbmltcG9ydCB7ICRCb29sZWFuIH0gZnJvbSBcIi4vdHlwZXMvYm9vbGVhblwiO1xuaW1wb3J0IHsgJE51bGwgfSBmcm9tIFwiLi90eXBlcy9udWxsXCI7XG5pbXBvcnQgeyAkTnVtYmVyIH0gZnJvbSBcIi4vdHlwZXMvbnVtYmVyXCI7XG5pbXBvcnQgeyAkRXJyb3IgfSBmcm9tIFwiLi90eXBlcy9lcnJvclwiO1xuZGVjbGFyZSB2YXIgY29uem9sZTogQ29uc29sZTtcblxuZXhwb3J0IGNsYXNzIFBhcnNlciB7XG4gICAgcHJpdmF0ZSBjdXJyZW50OiBudW1iZXI7XG4gICAgcHJpdmF0ZSB0b2tlbnM6IFRva2VuW107XG4gICAgcHVibGljIGVycm9yczogc3RyaW5nW107XG4gICAgcHVibGljIGVycm9yTGV2ZWwgPSAxO1xuXG4gICAgcHVibGljIHBhcnNlKHRva2VuczogVG9rZW5bXSk6IFN0bXQuU3RtdFtdIHtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gMDtcbiAgICAgICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudHM6IFN0bXQuU3RtdFtdID0gW107XG4gICAgICAgIHdoaWxlICghdGhpcy5lb2YoKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzdGF0ZW1lbnRzLnB1c2godGhpcy5kZWNsYXJhdGlvbigpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgJEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICBgUGFyc2UgRXJyb3IgKCR7ZS5saW5lfToke2UuY29sfSkgPT4gJHtlLnZhbHVlfWBcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lcnJvcnMubGVuZ3RoID4gMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKFwiUGFyc2UgRXJyb3IgbGltaXQgZXhjZWVkZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGVtZW50cztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnN5bmNocm9uaXplKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0YXRlbWVudHM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtYXRjaCguLi50eXBlczogVG9rZW5UeXBlW10pOiBib29sZWFuIHtcbiAgICAgICAgZm9yIChjb25zdCB0eXBlIG9mIHR5cGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVjayh0eXBlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkdmFuY2UoKTogVG9rZW4ge1xuICAgICAgICBpZiAoIXRoaXMuZW9mKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnByZXZpb3VzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwZWVrKCk6IFRva2VuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zW3RoaXMuY3VycmVudF07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwcmV2aW91cygpOiBUb2tlbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmN1cnJlbnQgLSAxXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBlZWtOZXh0KCk6IFRva2VuIHtcbiAgICAgICAgaWYgKCF0aGlzLmVvZigpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5jdXJyZW50ICsgMV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGVlaygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2sodHlwZTogVG9rZW5UeXBlKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBlZWsoKS50eXBlID09PSB0eXBlO1xuICAgIH1cblxuICAgIHByaXZhdGUgZW9mKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVjayhUb2tlblR5cGUuRW9mKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbnN1bWUodHlwZTogVG9rZW5UeXBlLCBtZXNzYWdlOiBzdHJpbmcpOiBUb2tlbiB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrKHR5cGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5lcnJvcihcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXMoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgKyBgLCB1bmV4cGVjdGVkIHRva2VuIFwiJHt0aGlzLnBlZWsoKS5sZXhlbWV9XCJgXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBleHRyYVNlbWljb2xvbigpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSB0aGlzLm1hdGNoKFRva2VuVHlwZS5TZW1pY29sb24pO1xuICAgICAgICBpZiAodGhpcy5jaGVjayhUb2tlblR5cGUuU2VtaWNvbG9uKSkge1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMuY2hlY2soVG9rZW5UeXBlLlNlbWljb2xvbikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlNlbWljb2xvbiwgXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH1cblxuICAgIHByaXZhdGUgZXJyb3IodG9rZW46IFRva2VuLCBtZXNzYWdlOiBzdHJpbmcpOiBhbnkge1xuICAgICAgICB0aHJvdyBuZXcgJEVycm9yKG1lc3NhZ2UsIHRva2VuLmxpbmUsIHRva2VuLmNvbCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB3YXJuaW5nKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5lcnJvckxldmVsID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgICAgIGNvbnpvbGUud2FybihcbiAgICAgICAgICAgICAgICBgW2xpbmUgKCR7dG9rZW4ubGluZX0pIHBhcnNlIHdhcm5pbmcgYXQgXCIke3Rva2VuLmxleGVtZX1cIl0gPT4gJHttZXNzYWdlfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN5bmNocm9uaXplKCk6IHZvaWQge1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMucGVlaygpLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5DbGFzczpcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5GdW5jdGlvbjpcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5WYXI6XG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuRm9yOlxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLklmOlxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLldoaWxlOlxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkRvOlxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlByaW50OlxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlJldHVybjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrKFRva2VuVHlwZS5TZW1pY29sb24pIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVjayhUb2tlblR5cGUuUmlnaHRCcmFjZSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICB9IHdoaWxlICghdGhpcy5lb2YoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZWNsYXJhdGlvbigpOiBTdG10LlN0bXQge1xuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuQ2xhc3MpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbGFzc0RlY2xhcmF0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkZ1bmN0aW9uKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnVuY0RlY2xhcmF0aW9uKFwiZnVuY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlZhcikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhckRlY2xhcmF0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjbGFzc0RlY2xhcmF0aW9uKCk6IFN0bXQuQ2xhc3Mge1xuICAgICAgICBjb25zdCBuYW1lOiBUb2tlbiA9IHRoaXMuY29uc3VtZShcbiAgICAgICAgICAgIFRva2VuVHlwZS5JZGVudGlmaWVyLFxuICAgICAgICAgICAgYEV4cGVjdGVkIGEgY2xhc3MgbmFtZWBcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IHBhcmVudDogVG9rZW4gPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuRXh0ZW5kcykpIHtcbiAgICAgICAgICAgIHBhcmVudCA9IHRoaXMuY29uc3VtZShcbiAgICAgICAgICAgICAgICBUb2tlblR5cGUuSWRlbnRpZmllcixcbiAgICAgICAgICAgICAgICBgRXhwZWN0ZWQgYSBwYXJlbnQgbmFtZWBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25zdW1lKFxuICAgICAgICAgICAgVG9rZW5UeXBlLkxlZnRCcmFjZSxcbiAgICAgICAgICAgIGBFeHBlY3RlZCBvcGVuIGJyYWNlIFwie1wiIGFmdGVyIGNsYXNzIG5hbWVgXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG1ldGhvZHM6IFN0bXQuRnVuY1tdID0gW107XG5cbiAgICAgICAgd2hpbGUgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5SaWdodEJyYWNlKSAmJiAhdGhpcy5lb2YoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2soVG9rZW5UeXBlLkZ1bmN0aW9uKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuRnVuY3Rpb24sIFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWV0aG9kcy5wdXNoKHRoaXMuZnVuY0RlY2xhcmF0aW9uKFwibWV0aG9kXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uc3VtZShcbiAgICAgICAgICAgIFRva2VuVHlwZS5SaWdodEJyYWNlLFxuICAgICAgICAgICAgYEV4cGVjdGVkIFwifVwiIGFmdGVyIGNsYXNzIFwiJHtuYW1lLmxpdGVyYWx9XCIgbWV0aG9kc2BcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHRoaXMuZXh0cmFTZW1pY29sb24oKSkge1xuICAgICAgICAgICAgdGhpcy53YXJuaW5nKFxuICAgICAgICAgICAgICAgIGBVbm5lY2Vzc2FyeSBzZW1pY29sb24gYWZ0ZXIgY2xhc3MgJHtuYW1lLmxleGVtZX0gZGVjbGFyYXRpb25gXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5DbGFzcyhuYW1lLCBwYXJlbnQsIG1ldGhvZHMsIG5hbWUubGluZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmdW5jRGVjbGFyYXRpb24oa2luZDogc3RyaW5nKTogU3RtdC5GdW5jIHtcbiAgICAgICAgY29uc3QgbmFtZTogVG9rZW4gPSB0aGlzLmNvbnN1bWUoXG4gICAgICAgICAgICBUb2tlblR5cGUuSWRlbnRpZmllcixcbiAgICAgICAgICAgIGBFeHBlY3RlZCBhICR7a2luZH0gbmFtZWBcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZnVuY1BhcmFtc0JvZHkobmFtZSwga2luZCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmdW5jUGFyYW1zKGtpbmQ6IHN0cmluZyk6IFRva2VuW10ge1xuICAgICAgICBjb25zdCBwYXJhbXM6IFRva2VuW10gPSBbXTtcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5SaWdodFBhcmVuKSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMubGVuZ3RoID49IDI1NSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKHRoaXMucGVlaygpLCBgUGFyYW1ldGVyIGNvdW50IGV4Y2VlZHMgMjU1YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoXG4gICAgICAgICAgICAgICAgICAgICAgICBUb2tlblR5cGUuSWRlbnRpZmllcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGBFeHBlY3RlZCBhIHBhcmFtZXRlciBuYW1lYFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkNvbW1hKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25zdW1lKFxuICAgICAgICAgICAgVG9rZW5UeXBlLlJpZ2h0UGFyZW4sXG4gICAgICAgICAgICBgRXhwZWN0ZWQgY2xvc2UgcGFyZW50aGVzaXMgXCIpXCIgYWZ0ZXIgJHtraW5kfSBwYXJhbWV0ZXJzYFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH1cblxuICAgIHByaXZhdGUgZnVuY1BhcmFtc0JvZHkobmFtZTogVG9rZW4sIGtpbmQ6IHN0cmluZyk6IFN0bXQuRnVuYyB7XG4gICAgICAgIHRoaXMuY29uc3VtZShcbiAgICAgICAgICAgIFRva2VuVHlwZS5MZWZ0UGFyZW4sXG4gICAgICAgICAgICBgRXhwZWN0ZWQgb3BlbiBwYXJlbnRoZXNpcyBcIihcIiBhZnRlciAke2tpbmR9YFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBwYXJhbXM6IFRva2VuW10gPSB0aGlzLmZ1bmNQYXJhbXMoa2luZCk7XG5cbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkxlZnRCcmFjZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGJvZHk6IFN0bXQuU3RtdFtdID0gdGhpcy5ibG9jaygpO1xuICAgICAgICAgICAgaWYgKG5hbWUudHlwZSAhPT0gVG9rZW5UeXBlLkxhbWJkYSAmJiB0aGlzLmV4dHJhU2VtaWNvbG9uKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndhcm5pbmcoXG4gICAgICAgICAgICAgICAgICAgIGBVbm5lY2Vzc2FyeSBzZW1pY29sb24gYWZ0ZXIgZnVuY3Rpb24gJHtuYW1lLmxleGVtZX0gZGVjbGFyYXRpb25gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgU3RtdC5GdW5jKG5hbWUsIHBhcmFtcywgYm9keSwgbmFtZS5saW5lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5BcnJvdykpIHtcbiAgICAgICAgICAgIGNvbnN0IGJvZHk6IFN0bXQuU3RtdFtdID0gW107XG4gICAgICAgICAgICBsZXQgYXJyb3c6IEV4cHIuRXhwcjtcbiAgICAgICAgICAgIGNvbnN0IGtleXdvcmQ6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5TZW1pY29sb24pKSB7XG4gICAgICAgICAgICAgICAgYXJyb3cgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubWF0Y2goVG9rZW5UeXBlLlNlbWljb2xvbik7XG4gICAgICAgICAgICBib2R5LnB1c2gobmV3IFN0bXQuUmV0dXJuKGtleXdvcmQsIGFycm93LCBrZXl3b3JkLmxpbmUpKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3RtdC5GdW5jKG5hbWUsIHBhcmFtcywgYm9keSwgbmFtZS5saW5lKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLkxlZnRCcmFjZSwgYEV4cGVjdCBcIntcIiBiZWZvcmUgJHtraW5kfSBib2R5YCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB2YXJEZWNsYXJhdGlvbigpOiBTdG10LlN0bXQge1xuICAgICAgICBjb25zdCBuYW1lOiBUb2tlbiA9IHRoaXMuY29uc3VtZShcbiAgICAgICAgICAgIFRva2VuVHlwZS5JZGVudGlmaWVyLFxuICAgICAgICAgICAgYEV4cGVjdGVkIGEgdmFyaWFibGUgbmFtZSBhZnRlciBcInZhclwiIGtleXdvcmRgXG4gICAgICAgICk7XG4gICAgICAgIGxldCBpbml0aWFsaXplcjogRXhwci5FeHByID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkVxdWFsKSkge1xuICAgICAgICAgICAgaW5pdGlhbGl6ZXIgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnN1bWUoXG4gICAgICAgICAgICBUb2tlblR5cGUuU2VtaWNvbG9uLFxuICAgICAgICAgICAgYEV4cGVjdGVkIHNlbWljb2xvbiBcIjtcIiBhZnRlciBhIHZhcmlhYmxlIGRlY2xhcmF0aW9uYFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5WYXIobmFtZSwgbnVsbCwgaW5pdGlhbGl6ZXIsIG5hbWUubGluZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0ZW1lbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5JZikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlmU3RhdGVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlByaW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJpbnRTdGF0ZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuRG8pKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kb1doaWxlU3RhdGVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLldoaWxlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hpbGVTdGF0ZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuRm9yKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9yU3RhdGVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkZvcmVhY2gpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JlYWNoU3RhdGVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkxlZnRCcmFjZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3RtdC5CbG9jayh0aGlzLmJsb2NrKCksIHRoaXMucHJldmlvdXMoKS5saW5lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuUmV0dXJuKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmV0dXJuU3RhdGVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkJyZWFrKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnJlYWtTdGF0ZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuQ29udGludWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250aW51ZVN0YXRlbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmV4cHJlc3Npb25TdGF0ZW1lbnQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlmU3RhdGVtZW50KCk6IFN0bXQuU3RtdCB7XG4gICAgICAgIGNvbnN0IGtleXdvcmQgPSB0aGlzLnByZXZpb3VzKCk7XG4gICAgICAgIHRoaXMuY29uc3VtZShcbiAgICAgICAgICAgIFRva2VuVHlwZS5MZWZ0UGFyZW4sXG4gICAgICAgICAgICBgRXhwZWN0ZWQgb3BlbiBwYXJlbnRoZXNpcyBcIihcIiBhZnRlciBhbiBcImlmXCIga2V5d29yZGBcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgY29uZGl0aW9uOiBFeHByLkV4cHIgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgdGhpcy5jb25zdW1lKFxuICAgICAgICAgICAgVG9rZW5UeXBlLlJpZ2h0UGFyZW4sXG4gICAgICAgICAgICBgRXhwZWN0ZWQgY2xvc2UgcGFyZW50aGVzaXMgXCIpXCIgYWZ0ZXIgXCJpZlwiIHN0YXRlbWVudCBjb25kaXRpb25gXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHRoZW5TdG10OiBTdG10LlN0bXQgPSB0aGlzLnN0YXRlbWVudCgpO1xuICAgICAgICBsZXQgZWxzZVN0bXQ6IFN0bXQuU3RtdCA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5FbHNlKSkge1xuICAgICAgICAgICAgZWxzZVN0bXQgPSB0aGlzLnN0YXRlbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5JZihjb25kaXRpb24sIHRoZW5TdG10LCBlbHNlU3RtdCwga2V5d29yZC5saW5lKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHdoaWxlU3RhdGVtZW50KCk6IFN0bXQuU3RtdCB7XG4gICAgICAgIGNvbnN0IGtleXdvcmQgPSB0aGlzLnByZXZpb3VzKCk7XG4gICAgICAgIHRoaXMuY29uc3VtZShcbiAgICAgICAgICAgIFRva2VuVHlwZS5MZWZ0UGFyZW4sXG4gICAgICAgICAgICBgRXhwZWN0ZWQgb3BlbiBwYXJlbnRoZXNpcyBcIihcIiBhZnRlciBhIFwid2hpbGVcIiBzdGF0ZW1lbnRgXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbjogRXhwci5FeHByID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgIHRoaXMuY29uc3VtZShcbiAgICAgICAgICAgIFRva2VuVHlwZS5SaWdodFBhcmVuLFxuICAgICAgICAgICAgYEV4cGVjdGVkIGNsb3NlIHBhcmVudGhlc2lzIFwiKVwiIGFmdGVyIFwid2hpbGVcIiBjb25kaXRpb25gXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGxvb3A6IFN0bXQuU3RtdCA9IHRoaXMuc3RhdGVtZW50KCk7XG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5XaGlsZShjb25kaXRpb24sIGxvb3AsIGtleXdvcmQubGluZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb3JTdGF0ZW1lbnQoKTogU3RtdC5TdG10IHtcbiAgICAgICAgY29uc3Qga2V5d29yZCA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgdGhpcy5jb25zdW1lKFxuICAgICAgICAgICAgVG9rZW5UeXBlLkxlZnRQYXJlbixcbiAgICAgICAgICAgIGBFeHBlY3RlZCBvcGVuIHBhcmVudGhlc2lzIFwiKFwiIGFmdGVyIGEgXCJmb3JcIiBzdGF0ZW1lbnRgXG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IGluaXRpYWxpemVyOiBTdG10LlN0bXQ7XG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5TZW1pY29sb24pKSB7XG4gICAgICAgICAgICBpbml0aWFsaXplciA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuVmFyKSkge1xuICAgICAgICAgICAgaW5pdGlhbGl6ZXIgPSB0aGlzLnZhckRlY2xhcmF0aW9uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbml0aWFsaXplciA9IHRoaXMuZXhwcmVzc2lvblN0YXRlbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb25kaXRpb246IEV4cHIuRXhwcjtcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5TZW1pY29sb24pKSB7XG4gICAgICAgICAgICBjb25kaXRpb24gPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnN1bWUoXG4gICAgICAgICAgICBUb2tlblR5cGUuU2VtaWNvbG9uLFxuICAgICAgICAgICAgYEV4cGVjdGVkIHNlbWljb2xvbiBcIjtcIiBhZnRlciBhIFwiZm9yXCIgc3RhdGVtZW50IGxvb3AgY29uZGl0aW9uYFxuICAgICAgICApO1xuICAgICAgICBsZXQgaW5jcmVtZW50OiBFeHByLkV4cHI7XG4gICAgICAgIGlmICghdGhpcy5jaGVjayhUb2tlblR5cGUuUmlnaHRQYXJlbikpIHtcbiAgICAgICAgICAgIGluY3JlbWVudCA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uc3VtZShcbiAgICAgICAgICAgIFRva2VuVHlwZS5SaWdodFBhcmVuLFxuICAgICAgICAgICAgYEV4cGVjdGVkIHNlbWljb2xvbiBcIjtcIiBhZnRlciBhIFwiZm9yXCIgc3RlbWVudCBpbmNyZW1lbnQgZXhwcmVzc2lvbmBcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGJvZHk6IFN0bXQuU3RtdCA9IHRoaXMuc3RhdGVtZW50KCk7XG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5Gb3IoXG4gICAgICAgICAgICBpbml0aWFsaXplcixcbiAgICAgICAgICAgIGNvbmRpdGlvbixcbiAgICAgICAgICAgIGluY3JlbWVudCxcbiAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICBrZXl3b3JkLmxpbmVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZvcmVhY2hTdGF0ZW1lbnQoKTogU3RtdC5TdG10IHtcbiAgICAgICAgY29uc3Qga2V5d29yZCA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgdGhpcy5jb25zdW1lKFxuICAgICAgICAgICAgVG9rZW5UeXBlLkxlZnRQYXJlbixcbiAgICAgICAgICAgIGBFeHBlY3RlZCBvcGVuIHBhcmVudGhlc2lzIFwiKFwiIGFmdGVyIGEgXCJmb3JlYWNoXCIgc3RhdGVtZW50YFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5jb25zdW1lKFxuICAgICAgICAgICAgVG9rZW5UeXBlLklkZW50aWZpZXIsXG4gICAgICAgICAgICBgRXhwZWN0ZWQgYW4gaWRlbnRpZmllciBpbnNpZGUgXCJmb3JlYWNoXCIgc3RhdGVtZW50YFxuICAgICAgICApO1xuICAgICAgICBsZXQga2V5OiBUb2tlbiA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5XaXRoKSkge1xuICAgICAgICAgICAga2V5ID0gdGhpcy5jb25zdW1lKFxuICAgICAgICAgICAgICAgIFRva2VuVHlwZS5JZGVudGlmaWVyLFxuICAgICAgICAgICAgICAgIGBFeHBlY3RlZCBhIFwia2V5XCIgaWRlbnRpZmllciBhZnRlciBcIndpdGhcIiBrZXl3b3JkIGluIGZvcmVhY2ggc3RhdGVtZW50YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnN1bWUoXG4gICAgICAgICAgICBUb2tlblR5cGUuSW4sXG4gICAgICAgICAgICBgRXhwZWN0ZWQgXCJpblwiIGtleXdvcmQgaW5zaWRlIGZvcmVhY2ggc3RhdGVtZW50YFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBpdGVyYWJsZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICB0aGlzLmNvbnN1bWUoXG4gICAgICAgICAgICBUb2tlblR5cGUuUmlnaHRQYXJlbixcbiAgICAgICAgICAgIGBFeHBlY3RlZCBjbG9zZSBwYXJlbnRoZXNpcyBcIilcIiBhZnRlciBhIFwiZm9yZWFjaFwiIGluaXRpYWxpemF0aW9uYFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGxvb3A6IFN0bXQuU3RtdCA9IHRoaXMuc3RhdGVtZW50KCk7XG4gICAgICAgIGxldCBub25lOiBTdG10LlN0bXQgfCBudWxsID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLk5vbmUpKSB7XG4gICAgICAgICAgICBub25lID0gdGhpcy5zdGF0ZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFN0bXQuRm9yZWFjaChuYW1lLCBrZXksIGl0ZXJhYmxlLCBsb29wLCBub25lLCBrZXl3b3JkLmxpbmUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZG9XaGlsZVN0YXRlbWVudCgpOiBTdG10LlN0bXQge1xuICAgICAgICBjb25zdCBrZXl3b3JkID0gdGhpcy5wcmV2aW91cygpO1xuICAgICAgICBjb25zdCBsb29wOiBTdG10LlN0bXQgPSB0aGlzLnN0YXRlbWVudCgpO1xuICAgICAgICB0aGlzLmNvbnN1bWUoXG4gICAgICAgICAgICBUb2tlblR5cGUuV2hpbGUsXG4gICAgICAgICAgICBgRXhwZWN0ZWQgYSBcIndoaWxlXCIgY29uZGl0aW9uIGFmdGVyIFwiZG9cIiBzdGF0ZW1lbnRgXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY29uc3VtZShcbiAgICAgICAgICAgIFRva2VuVHlwZS5MZWZ0UGFyZW4sXG4gICAgICAgICAgICBgRXhwZWN0ZWQgb3BlbiBwYXJlbnRoZXNpcyBcIihcIiBhZnRlciBhIFwid2hpbGVcIiBrZXl3b3JkYFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBjb25kaXRpb246IEV4cHIuRXhwciA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICB0aGlzLmNvbnN1bWUoXG4gICAgICAgICAgICBUb2tlblR5cGUuUmlnaHRQYXJlbixcbiAgICAgICAgICAgIGBFeHBlY3RlZCBjbG9zZSBwYXJlbnRoZXNpcyBcIilcIiBhZnRlciBcIndoaWxlXCIgY29uZGl0aW9uYFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNvbnN1bWUoXG4gICAgICAgICAgICBUb2tlblR5cGUuU2VtaWNvbG9uLFxuICAgICAgICAgICAgYEV4cGVjdGVkIHNlbWljb2xvbiBcIjtcIiBhZnRlciBhIGRvIHdoaWxlIGNvbmRpdGlvbmBcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIG5ldyBTdG10LkRvV2hpbGUobG9vcCwgY29uZGl0aW9uLCBrZXl3b3JkLmxpbmUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcHJpbnRTdGF0ZW1lbnQoKTogU3RtdC5TdG10IHtcbiAgICAgICAgY29uc3Qga2V5d29yZCA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgY29uc3QgdmFsdWU6IEV4cHIuRXhwciA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICB0aGlzLmNvbnN1bWUoXG4gICAgICAgICAgICBUb2tlblR5cGUuU2VtaWNvbG9uLFxuICAgICAgICAgICAgYEV4cGVjdGVkIHNlbWljb2xvbiBcIjtcIiBhZnRlciBleHByZXNzaW9uYFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gbmV3IFN0bXQuUHJpbnQodmFsdWUsIGtleXdvcmQubGluZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXR1cm5TdGF0ZW1lbnQoKTogU3RtdC5TdG10IHtcbiAgICAgICAgY29uc3Qga2V5d29yZDogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XG4gICAgICAgIGxldCB2YWx1ZSA9IG51bGw7XG5cbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5TZW1pY29sb24pKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb25zdW1lKFxuICAgICAgICAgICAgVG9rZW5UeXBlLlNlbWljb2xvbixcbiAgICAgICAgICAgIGBFeGVjdGVkIHNlbWljb2xvbiBcIjtcIiBhZnRlciByZXR1cm4gc3RhdGVtZW50YFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gbmV3IFN0bXQuUmV0dXJuKGtleXdvcmQsIHZhbHVlLCBrZXl3b3JkLmxpbmUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYnJlYWtTdGF0ZW1lbnQoKTogU3RtdC5TdG10IHtcbiAgICAgICAgY29uc3Qga2V5d29yZDogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XG4gICAgICAgIHRoaXMuY29uc3VtZShcbiAgICAgICAgICAgIFRva2VuVHlwZS5TZW1pY29sb24sXG4gICAgICAgICAgICBgRXhlY3RlZCBzZW1pY29sb24gXCI7XCIgYWZ0ZXIgYnJlYWsgc3RhdGVtZW50YFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gbmV3IFN0bXQuQnJlYWsoa2V5d29yZCwga2V5d29yZC5saW5lKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbnRpbnVlU3RhdGVtZW50KCk6IFN0bXQuU3RtdCB7XG4gICAgICAgIGNvbnN0IGtleXdvcmQ6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xuICAgICAgICB0aGlzLmNvbnN1bWUoXG4gICAgICAgICAgICBUb2tlblR5cGUuU2VtaWNvbG9uLFxuICAgICAgICAgICAgYEV4ZWN0ZWQgc2VtaWNvbG9uIFwiO1wiIGFmdGVyIGNvbnRpbnVlIHN0YXRlbWVudGBcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIG5ldyBTdG10LkNvbnRpbnVlKGtleXdvcmQsIGtleXdvcmQubGluZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBibG9jaygpOiBTdG10LlN0bXRbXSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudHM6IFN0bXQuU3RtdFtdID0gW107XG4gICAgICAgIHdoaWxlICghdGhpcy5jaGVjayhUb2tlblR5cGUuUmlnaHRCcmFjZSkgJiYgIXRoaXMuZW9mKCkpIHtcbiAgICAgICAgICAgIHN0YXRlbWVudHMucHVzaCh0aGlzLmRlY2xhcmF0aW9uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uc3VtZShcbiAgICAgICAgICAgIFRva2VuVHlwZS5SaWdodEJyYWNlLFxuICAgICAgICAgICAgYEV4cGVjdGVkIGNsb3NlIGJyYWNlIFwifVwiIGFmdGVyIGJsb2NrIHN0YXRlbWVudGBcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHN0YXRlbWVudHM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBleHByZXNzaW9uU3RhdGVtZW50KCk6IFN0bXQuU3RtdCB7XG4gICAgICAgIGNvbnN0IGV4cHJlc3Npb246IEV4cHIuRXhwciA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICB0aGlzLmNvbnN1bWUoXG4gICAgICAgICAgICBUb2tlblR5cGUuU2VtaWNvbG9uLFxuICAgICAgICAgICAgYEV4cGVjdGVkIHNlbWljb2xvbiBcIjtcIiBhZnRlciAke2V4cHJlc3Npb259IGV4cHJlc3Npb25gXG4gICAgICAgICk7XG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5TZW1pY29sb24pKSB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgICAgIHRoaXMud2FybmluZyhcbiAgICAgICAgICAgICAgICBgW2xpbmUgKCR7dG9rZW4ubGluZX0pIHBhcnNlIHdhcm5pbmcgYXQgXCIke3Rva2VuLmxleGVtZX1cIl0gPT4gdW5uZWNlc3Nhcnkgc2VtaWNvbG9uIG9yIGVtcHR5IHN0YXRlbWVudGBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAvLyBjb25zdW1lIGFsbCBzZW1pY29sb25zXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5TZW1pY29sb24pKSB7fVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5FeHByZXNzaW9uKGV4cHJlc3Npb24sIGV4cHJlc3Npb24ubGluZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBleHByZXNzaW9uKCk6IEV4cHIuRXhwciB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzc2lnbm1lbnQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzc2lnbm1lbnQoKTogRXhwci5FeHByIHtcbiAgICAgICAgY29uc3QgZXhwcjogRXhwci5FeHByID0gdGhpcy50ZXJuYXJ5KCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMubWF0Y2goXG4gICAgICAgICAgICAgICAgVG9rZW5UeXBlLkVxdWFsLFxuICAgICAgICAgICAgICAgIFRva2VuVHlwZS5QbHVzRXF1YWwsXG4gICAgICAgICAgICAgICAgVG9rZW5UeXBlLk1pbnVzRXF1YWwsXG4gICAgICAgICAgICAgICAgVG9rZW5UeXBlLlN0YXJFcXVhbCxcbiAgICAgICAgICAgICAgICBUb2tlblR5cGUuU2xhc2hFcXVhbFxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgICAgIGxldCB2YWx1ZTogRXhwci5FeHByID0gdGhpcy5hc3NpZ25tZW50KCk7XG4gICAgICAgICAgICBpZiAoZXhwciBpbnN0YW5jZW9mIEV4cHIuVmFyaWFibGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lOiBUb2tlbiA9IGV4cHIubmFtZTtcbiAgICAgICAgICAgICAgICBpZiAob3BlcmF0b3IudHlwZSAhPT0gVG9rZW5UeXBlLkVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbmV3IEV4cHIuQmluYXJ5KFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEV4cHIuVmFyaWFibGUobmFtZSwgbmFtZS5saW5lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvci5saW5lXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5Bc3NpZ24obmFtZSwgdmFsdWUsIG5hbWUubGluZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV4cHIgaW5zdGFuY2VvZiBFeHByLkdldCkge1xuICAgICAgICAgICAgICAgIGlmIChvcGVyYXRvci50eXBlICE9PSBUb2tlblR5cGUuRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRXhwci5CaW5hcnkoXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRXhwci5HZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwci5lbnRpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwci5rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwci50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHIubGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvci5saW5lXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5TZXQoZXhwci5lbnRpdHksIGV4cHIua2V5LCB2YWx1ZSwgZXhwci5saW5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgICAgICAgICAgb3BlcmF0b3IsXG4gICAgICAgICAgICAgICAgYEludmFsaWQgbC12YWx1ZSwgaXMgbm90IGFuIGFzc2lnbmluZyB0YXJnZXQuYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhwcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRlcm5hcnkoKTogRXhwci5FeHByIHtcbiAgICAgICAgY29uc3QgZXhwciA9IHRoaXMubnVsbENvYWxlc2NpbmcoKTtcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlF1ZXN0aW9uKSkge1xuICAgICAgICAgICAgY29uc3QgdGhlbkV4cHI6IEV4cHIuRXhwciA9IHRoaXMudGVybmFyeSgpO1xuICAgICAgICAgICAgdGhpcy5jb25zdW1lKFxuICAgICAgICAgICAgICAgIFRva2VuVHlwZS5Db2xvbixcbiAgICAgICAgICAgICAgICBgRXhwZWN0ZWQgXCI6XCIgYWZ0ZXIgdGVybmFyeSA/IGV4cHJlc3Npb25gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgZWxzZUV4cHI6IEV4cHIuRXhwciA9IHRoaXMudGVybmFyeSgpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlRlcm5hcnkoZXhwciwgdGhlbkV4cHIsIGVsc2VFeHByLCBleHByLmxpbmUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleHByO1xuICAgIH1cblxuICAgIHByaXZhdGUgbnVsbENvYWxlc2NpbmcoKTogRXhwci5FeHByIHtcbiAgICAgICAgY29uc3QgZXhwciA9IHRoaXMubG9naWNhbE9yKCk7XG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5RdWVzdGlvblF1ZXN0aW9uKSkge1xuICAgICAgICAgICAgY29uc3QgcmlnaHRFeHByOiBFeHByLkV4cHIgPSB0aGlzLm51bGxDb2FsZXNjaW5nKCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTnVsbENvYWxlc2NpbmcoZXhwciwgcmlnaHRFeHByLCBleHByLmxpbmUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleHByO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9naWNhbE9yKCk6IEV4cHIuRXhwciB7XG4gICAgICAgIGxldCBleHByID0gdGhpcy5sb2dpY2FsQW5kKCk7XG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5PcikpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0OiBFeHByLkV4cHIgPSB0aGlzLmxvZ2ljYWxBbmQoKTtcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5Mb2dpY2FsKGV4cHIsIG9wZXJhdG9yLCByaWdodCwgb3BlcmF0b3IubGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4cHI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2dpY2FsQW5kKCk6IEV4cHIuRXhwciB7XG4gICAgICAgIGxldCBleHByID0gdGhpcy5lcXVhbGl0eSgpO1xuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuQW5kKSkge1xuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3I6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMuZXF1YWxpdHkoKTtcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5Mb2dpY2FsKGV4cHIsIG9wZXJhdG9yLCByaWdodCwgb3BlcmF0b3IubGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4cHI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlcXVhbGl0eSgpOiBFeHByLkV4cHIge1xuICAgICAgICBsZXQgZXhwciA9IHRoaXMuaW5zdGFuY2VvZigpO1xuICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICB0aGlzLm1hdGNoKFxuICAgICAgICAgICAgICAgIFRva2VuVHlwZS5CYW5nRXF1YWwsXG4gICAgICAgICAgICAgICAgVG9rZW5UeXBlLkVxdWFsRXF1YWwsXG4gICAgICAgICAgICAgICAgVG9rZW5UeXBlLkxlc3NFcXVhbEdyZWF0ZXJcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XG4gICAgICAgICAgICBjb25zdCByaWdodDogRXhwci5FeHByID0gdGhpcy5pbnN0YW5jZW9mKCk7XG4gICAgICAgICAgICBleHByID0gbmV3IEV4cHIuQmluYXJ5KGV4cHIsIG9wZXJhdG9yLCByaWdodCwgb3BlcmF0b3IubGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4cHI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbnN0YW5jZW9mKCk6IEV4cHIuRXhwciB7XG4gICAgICAgIGxldCBleHByID0gdGhpcy5pbigpO1xuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuSXMsIFRva2VuVHlwZS5JbnN0YW5jZW9mKSkge1xuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3IgPSB0aGlzLnByZXZpb3VzKCk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy5tYXRjaChcbiAgICAgICAgICAgICAgICAgICAgVG9rZW5UeXBlLklkZW50aWZpZXIsXG4gICAgICAgICAgICAgICAgICAgIFRva2VuVHlwZS5DbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgVG9rZW5UeXBlLkZ1bmN0aW9uLFxuICAgICAgICAgICAgICAgICAgICBUb2tlblR5cGUuTnVsbFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5wcmV2aW91cygpO1xuICAgICAgICAgICAgICAgIGlmIChvcGVyYXRvci50eXBlID09PSBUb2tlblR5cGUuSW5zdGFuY2VvZikge1xuICAgICAgICAgICAgICAgICAgICBleHByID0gbmV3IEV4cHIuSW5zdGFuY2VPZihleHByLCByaWdodCwgb3BlcmF0b3IubGluZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLklzKGV4cHIsIHJpZ2h0LCBvcGVyYXRvci5saW5lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXMoKSxcbiAgICAgICAgICAgICAgICAgICAgYEV4cGVjdGVkIGEgVHlwZSBvciBDbGFzc05hbWUgaWRlbnRpZmllciBhZnRlciBcImlzXCIgb3BlcmF0b3JgXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhwcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluKCk6IEV4cHIuRXhwciB7XG4gICAgICAgIGxldCBleHByID0gdGhpcy5jb21wYXJpc29uKCk7XG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5JbikpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5wcmV2aW91cygpO1xuICAgICAgICAgICAgY29uc3QgZW50aXR5ID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICBleHByID0gbmV3IEV4cHIuSW4oZXhwciwgZW50aXR5LCBvcGVyYXRvci5saW5lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhwcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbXBhcmlzb24oKTogRXhwci5FeHByIHtcbiAgICAgICAgbGV0IGV4cHI6IEV4cHIuRXhwciA9IHRoaXMuYWRkaXRpb24oKTtcbiAgICAgICAgd2hpbGUgKFxuICAgICAgICAgICAgdGhpcy5tYXRjaChcbiAgICAgICAgICAgICAgICBUb2tlblR5cGUuR3JlYXRlcixcbiAgICAgICAgICAgICAgICBUb2tlblR5cGUuR3JlYXRlckVxdWFsLFxuICAgICAgICAgICAgICAgIFRva2VuVHlwZS5MZXNzLFxuICAgICAgICAgICAgICAgIFRva2VuVHlwZS5MZXNzRXF1YWxcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XG4gICAgICAgICAgICBjb25zdCByaWdodDogRXhwci5FeHByID0gdGhpcy5hZGRpdGlvbigpO1xuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkJpbmFyeShleHByLCBvcGVyYXRvciwgcmlnaHQsIG9wZXJhdG9yLmxpbmUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleHByO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkaXRpb24oKTogRXhwci5FeHByIHtcbiAgICAgICAgbGV0IGV4cHI6IEV4cHIuRXhwciA9IHRoaXMubW9kdWx1cygpO1xuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuTWludXMsIFRva2VuVHlwZS5QbHVzKSkge1xuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3I6IFRva2VuID0gdGhpcy5wcmV2aW91cygpO1xuICAgICAgICAgICAgY29uc3QgcmlnaHQ6IEV4cHIuRXhwciA9IHRoaXMubW9kdWx1cygpO1xuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkJpbmFyeShleHByLCBvcGVyYXRvciwgcmlnaHQsIG9wZXJhdG9yLmxpbmUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleHByO1xuICAgIH1cblxuICAgIHByaXZhdGUgbW9kdWx1cygpOiBFeHByLkV4cHIge1xuICAgICAgICBsZXQgZXhwcjogRXhwci5FeHByID0gdGhpcy5tdWx0aXBsaWNhdGlvbigpO1xuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuUGVyY2VudCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0OiBFeHByLkV4cHIgPSB0aGlzLm11bHRpcGxpY2F0aW9uKCk7XG4gICAgICAgICAgICBleHByID0gbmV3IEV4cHIuQmluYXJ5KGV4cHIsIG9wZXJhdG9yLCByaWdodCwgb3BlcmF0b3IubGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4cHI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtdWx0aXBsaWNhdGlvbigpOiBFeHByLkV4cHIge1xuICAgICAgICBsZXQgZXhwcjogRXhwci5FeHByID0gdGhpcy50eXBlb2YoKTtcbiAgICAgICAgd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlNsYXNoLCBUb2tlblR5cGUuU3RhcikpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yOiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0OiBFeHByLkV4cHIgPSB0aGlzLnR5cGVvZigpO1xuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkJpbmFyeShleHByLCBvcGVyYXRvciwgcmlnaHQsIG9wZXJhdG9yLmxpbmUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleHByO1xuICAgIH1cblxuICAgIHByaXZhdGUgdHlwZW9mKCk6IEV4cHIuRXhwciB7XG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5UeXBlb2YpKSB7XG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZTogRXhwci5FeHByID0gdGhpcy50eXBlb2YoKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5UeXBlb2YodmFsdWUsIG9wZXJhdG9yLmxpbmUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGV0ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGVsZXRlKCk6IEV4cHIuRXhwciB7XG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5EZWxldGUpKSB7XG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZTogRXhwci5FeHByID0gdGhpcy5kZWxldGUoKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5EZWxldGUodmFsdWUsIG9wZXJhdG9yLmxpbmUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJhbmdlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByYW5nZSgpOiBFeHByLkV4cHIge1xuICAgICAgICBsZXQgZXhwcjogRXhwci5FeHByID0gdGhpcy51bmFyeSgpO1xuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuRG90RG90KSkge1xuICAgICAgICAgICAgY29uc3QgZW5kOiBFeHByLkV4cHIgPSB0aGlzLnVuYXJ5KCk7XG4gICAgICAgICAgICBleHByID0gbmV3IEV4cHIuUmFuZ2UoZXhwciwgZW5kLCBudWxsLCBleHByLmxpbmUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleHByO1xuICAgIH1cblxuICAgIHByaXZhdGUgdW5hcnkoKTogRXhwci5FeHByIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5tYXRjaChcbiAgICAgICAgICAgICAgICBUb2tlblR5cGUuTWludXMsXG4gICAgICAgICAgICAgICAgVG9rZW5UeXBlLkJhbmcsXG4gICAgICAgICAgICAgICAgVG9rZW5UeXBlLkRvbGxhcixcbiAgICAgICAgICAgICAgICBUb2tlblR5cGUuUGx1c1BsdXMsXG4gICAgICAgICAgICAgICAgVG9rZW5UeXBlLk1pbnVzTWludXNcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcjogVG9rZW4gPSB0aGlzLnByZXZpb3VzKCk7XG4gICAgICAgICAgICBjb25zdCByaWdodDogRXhwci5FeHByID0gdGhpcy51bmFyeSgpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlVuYXJ5KG9wZXJhdG9yLCByaWdodCwgb3BlcmF0b3IubGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubmV3S2V5d29yZCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbmV3S2V5d29yZCgpOiBFeHByLkV4cHIge1xuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuTmV3KSkge1xuICAgICAgICAgICAgY29uc3Qga2V5d29yZCA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdDogRXhwci5FeHByID0gdGhpcy5jYWxsKCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTmV3KGNvbnN0cnVjdCwga2V5d29yZC5saW5lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jYWxsKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWxsKCk6IEV4cHIuRXhwciB7XG4gICAgICAgIGxldCBleHByOiBFeHByLkV4cHIgPSB0aGlzLnByaW1hcnkoKTtcbiAgICAgICAgbGV0IGNvbnN1bWVkID0gdHJ1ZTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgY29uc3VtZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5MZWZ0UGFyZW4pKSB7XG4gICAgICAgICAgICAgICAgY29uc3VtZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJnczogRXhwci5FeHByW10gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5SaWdodFBhcmVuKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5Db21tYSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVuOiBUb2tlbiA9IHRoaXMuY29uc3VtZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFRva2VuVHlwZS5SaWdodFBhcmVuLFxuICAgICAgICAgICAgICAgICAgICAgICAgYEV4cGVjdGVkIFwiKVwiIGFmdGVyIGFyZ3VtZW50c2BcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkNhbGwoZXhwciwgcGFyZW4sIGFyZ3MsIG51bGwsIHBhcmVuLmxpbmUpO1xuICAgICAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkxlZnRQYXJlbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkRvdCwgVG9rZW5UeXBlLlF1ZXN0aW9uRG90KSkge1xuICAgICAgICAgICAgICAgIGNvbnN1bWVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBleHByID0gdGhpcy5kb3RHZXQoZXhwciwgdGhpcy5wcmV2aW91cygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5MZWZ0QnJhY2tldCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdW1lZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZXhwciA9IHRoaXMuYnJhY2tldEdldChleHByLCB0aGlzLnByZXZpb3VzKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlIChjb25zdW1lZCk7XG4gICAgICAgIHJldHVybiBleHByO1xuICAgIH1cblxuICAgIHByaXZhdGUgZG90R2V0KGV4cHI6IEV4cHIuRXhwciwgb3BlcmF0b3I6IFRva2VuKTogRXhwci5FeHByIHtcbiAgICAgICAgY29uc3QgbmFtZTogVG9rZW4gPSB0aGlzLmNvbnN1bWUoXG4gICAgICAgICAgICBUb2tlblR5cGUuSWRlbnRpZmllcixcbiAgICAgICAgICAgIGBFeHBlY3QgcHJvcGVydHkgbmFtZSBhZnRlciAnLidgXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGtleTogRXhwci5LZXkgPSBuZXcgRXhwci5LZXkobmFtZSwgbmFtZS5saW5lKTtcbiAgICAgICAgcmV0dXJuIG5ldyBFeHByLkdldChleHByLCBrZXksIG9wZXJhdG9yLnR5cGUsIG5hbWUubGluZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBicmFja2V0R2V0KGV4cHI6IEV4cHIuRXhwciwgb3BlcmF0b3I6IFRva2VuKTogRXhwci5FeHByIHtcbiAgICAgICAgbGV0IGtleTogRXhwci5FeHByID0gbnVsbDtcbiAgICAgICAgbGV0IGVuZDogRXhwci5FeHByID0gbnVsbDtcbiAgICAgICAgbGV0IHN0ZXA6IEV4cHIuRXhwciA9IG5ldyBFeHByLkxpdGVyYWwobmV3ICROdW1iZXIoMSksIG9wZXJhdG9yLmxpbmUpO1xuICAgICAgICBsZXQgaXNSYW5nZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICghdGhpcy5jaGVjayhUb2tlblR5cGUuQ29sb24pKSB7XG4gICAgICAgICAgICBrZXkgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuQ29sb24pICYmICF0aGlzLmNoZWNrKFRva2VuVHlwZS5Db2xvbikpIHtcbiAgICAgICAgICAgIGlzUmFuZ2UgPSB0cnVlO1xuICAgICAgICAgICAgZW5kID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5tYXRjaChUb2tlblR5cGUuQ29sb24pICYmXG4gICAgICAgICAgICAhdGhpcy5jaGVjayhUb2tlblR5cGUuUmlnaHRCcmFja2V0KVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlzUmFuZ2UgPSB0cnVlO1xuICAgICAgICAgICAgc3RlcCA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuUmlnaHRCcmFja2V0LCBgRXhwZWN0ZWQgXCJdXCIgYWZ0ZXIgYW4gaW5kZXhgKTtcbiAgICAgICAgaWYgKGlzUmFuZ2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gbmV3IEV4cHIuUmFuZ2Uoa2V5LCBlbmQsIHN0ZXAsIG9wZXJhdG9yLmxpbmUpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkdldChleHByLCByYW5nZSwgb3BlcmF0b3IudHlwZSwgb3BlcmF0b3IubGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBFeHByLkdldChleHByLCBrZXksIG9wZXJhdG9yLnR5cGUsIG9wZXJhdG9yLmxpbmUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcHJpbWFyeSgpOiBFeHByLkV4cHIge1xuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuRmFsc2UpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGl0ZXJhbChuZXcgJEJvb2xlYW4oZmFsc2UpLCB0aGlzLnByZXZpb3VzKCkubGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlRydWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGl0ZXJhbChuZXcgJEJvb2xlYW4odHJ1ZSksIHRoaXMucHJldmlvdXMoKS5saW5lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuTnVsbCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5MaXRlcmFsKG5ldyAkTnVsbCgpLCB0aGlzLnByZXZpb3VzKCkubGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLk51bWJlcikpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5MaXRlcmFsKFxuICAgICAgICAgICAgICAgIG5ldyAkTnVtYmVyKHRoaXMucHJldmlvdXMoKS5saXRlcmFsKSxcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzKCkubGluZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuU3RyaW5nKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlp0cmluZyhcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzKCkubGl0ZXJhbCxcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzKCkubGluZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuVGVtcGxhdGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuVGVtcGxhdGUoXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91cygpLmxpdGVyYWwsXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91cygpLmxpbmVcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlJlZ2V4KSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlJlZ0V4KFxuICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXMoKS5saXRlcmFsLFxuICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXMoKS5saW5lXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5CYXNlKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW4gPSB0aGlzLnByZXZpb3VzKCk7XG4gICAgICAgICAgICBwYXJlbi5sZXhlbWUgPSBcInRoaXNcIjtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5CYXNlKHBhcmVuLCBwYXJlbi5saW5lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuSWRlbnRpZmllcikpIHtcbiAgICAgICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSB0aGlzLnByZXZpb3VzKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuUGx1c1BsdXMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlBvc3RmaXgoaWRlbnRpZmllciwgMSwgaWRlbnRpZmllci5saW5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5NaW51c01pbnVzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5Qb3N0Zml4KGlkZW50aWZpZXIsIC0xLCBpZGVudGlmaWVyLmxpbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlZhcmlhYmxlKGlkZW50aWZpZXIsIGlkZW50aWZpZXIubGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkxlZnRQYXJlbikpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4cHI6IEV4cHIuRXhwciA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5SaWdodFBhcmVuLCBgRXhwZWN0ZWQgXCIpXCIgYWZ0ZXIgZXhwcmVzc2lvbmApO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkdyb3VwaW5nKGV4cHIsIGV4cHIubGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkxlZnRCcmFjZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRpY3Rpb25hcnkoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuRnVuY3Rpb24pKSB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbjogVG9rZW4gPSBuZXcgVG9rZW4oXG4gICAgICAgICAgICAgICAgVG9rZW5UeXBlLkxhbWJkYSxcbiAgICAgICAgICAgICAgICBcIkBcIixcbiAgICAgICAgICAgICAgICBcIkBcIixcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzKCkubGluZSxcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzKCkuY29sXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgbGFtYmRhOiBTdG10LkZ1bmMgPSB0aGlzLmZ1bmNQYXJhbXNCb2R5KHRva2VuLCBcImxhbWJkYVwiKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5MYW1iZGEobGFtYmRhLCB0b2tlbi5saW5lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuTGVmdEJyYWNrZXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saXN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlZvaWQpKSB7XG4gICAgICAgICAgICBjb25zdCBleHByOiBFeHByLkV4cHIgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5Wb2lkKGV4cHIsIHRoaXMucHJldmlvdXMoKS5saW5lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuRG90RG90RG90KSkge1xuICAgICAgICAgICAgY29uc3QgZXhwcjogRXhwci5FeHByID0gdGhpcy5yYW5nZSgpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlNwcmVhZChleHByLCB0aGlzLnByZXZpb3VzKCkubGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkhhc2gpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuQ2hhcih0aGlzLmNhbGwoKSwgdGhpcy5wcmV2aW91cygpLmxpbmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgdGhpcy5lcnJvcihcbiAgICAgICAgICAgIHRoaXMucGVlaygpLFxuICAgICAgICAgICAgYEV4cGVjdGVkIGV4cHJlc3Npb24sIHVuZXhwZWN0ZWQgdG9rZW4gXCIke3RoaXMucGVlaygpLmxleGVtZX1cImBcbiAgICAgICAgKTtcbiAgICAgICAgLy8gdW5yZWFjaGVhYmxlIGNvZGVcbiAgICAgICAgcmV0dXJuIG5ldyBFeHByLkxpdGVyYWwobnVsbCwgMCk7XG4gICAgfVxuXG4gICAgcHVibGljIGRpY3Rpb25hcnkoKTogRXhwci5FeHByIHtcbiAgICAgICAgY29uc3QgbGVmdEJyYWNlID0gdGhpcy5wcmV2aW91cygpO1xuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuUmlnaHRCcmFjZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5EaWN0aW9uYXJ5KFtdLCB0aGlzLnByZXZpb3VzKCkubGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvcGVydGllczogRXhwci5FeHByW10gPSBbXTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMubWF0Y2goXG4gICAgICAgICAgICAgICAgICAgIFRva2VuVHlwZS5TdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgIFRva2VuVHlwZS5JZGVudGlmaWVyLFxuICAgICAgICAgICAgICAgICAgICBUb2tlblR5cGUuTnVtYmVyXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5OiBUb2tlbiA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuQ29sb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFeHByLlNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFeHByLktleShrZXksIGtleS5saW5lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkubGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbmV3IEV4cHIuVmFyaWFibGUoa2V5LCBrZXkubGluZSk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFeHByLlNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFeHByLktleShrZXksIGtleS5saW5lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkubGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuRG90RG90RG90KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgcHJvcGVydGllcy5wdXNoKG5ldyBFeHByLlNwcmVhZCh2YWx1ZSwgdmFsdWUubGluZSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBlZWsoKSxcbiAgICAgICAgICAgICAgICAgICAgYFN0cmluZywgTnVtYmVyIG9yIElkZW50aWZpZXIgZXhwZWN0ZWQgYXMgYSBLZXkgb2YgRGljdGlvbmFyeSB7LCB1bmV4cGVjdGVkIHRva2VuICR7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlZWsoKS5sZXhlbWVcbiAgICAgICAgICAgICAgICAgICAgfWBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5Db21tYSkpO1xuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlJpZ2h0QnJhY2UsIGBFeHBlY3RlZCBcIn1cIiBhZnRlciBvYmplY3QgbGl0ZXJhbGApO1xuXG4gICAgICAgIHJldHVybiBuZXcgRXhwci5EaWN0aW9uYXJ5KHByb3BlcnRpZXMsIGxlZnRCcmFjZS5saW5lKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxpc3QoKTogRXhwci5FeHByIHtcbiAgICAgICAgY29uc3QgdmFsdWVzOiBFeHByLkV4cHJbXSA9IFtdO1xuICAgICAgICBjb25zdCBsZWZ0QnJhY2tldCA9IHRoaXMucHJldmlvdXMoKTtcblxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuUmlnaHRCcmFja2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkxpc3QoW10sIHRoaXMucHJldmlvdXMoKS5saW5lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnBlZWtOZXh0KCkudHlwZSA9PT0gVG9rZW5UeXBlLkNvbG9uKSB7XG4gICAgICAgICAgICBsZXQgc3RlcDogRXhwci5FeHByID0gbmV3IEV4cHIuTGl0ZXJhbChcbiAgICAgICAgICAgICAgICBuZXcgJE51bWJlcigxKSxcbiAgICAgICAgICAgICAgICBsZWZ0QnJhY2tldC5saW5lXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQ6IEV4cHIuRXhwciA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgdGhpcy5jb25zdW1lKFxuICAgICAgICAgICAgICAgIFRva2VuVHlwZS5Db2xvbixcbiAgICAgICAgICAgICAgICBgRXhwZWN0ZWQgXCI6XCIgY29sb3IgYWZ0ZXIgc3RhcnQgb2YgcmFuZ2UgZXhwcmVzc2lvbmBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBlbmQgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgIHRoaXMuY29uc3VtZShcbiAgICAgICAgICAgICAgICBUb2tlblR5cGUuQ29sb24sXG4gICAgICAgICAgICAgICAgYEV4cGVjdGVkIFwiOlwiIGNvbG9yIGFmdGVyIGVuZCBvZiByYW5nZSBleHByZXNzaW9uYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5jaGVjayhUb2tlblR5cGUuUmlnaHRCcmFja2V0KSkge1xuICAgICAgICAgICAgICAgIHN0ZXAgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKG5ldyBFeHByLlJhbmdlKHN0YXJ0LCBlbmQsIHN0ZXAsIHN0YXJ0LmxpbmUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7XG4gICAgICAgICAgICB9IHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5Db21tYSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb25zdW1lKFxuICAgICAgICAgICAgVG9rZW5UeXBlLlJpZ2h0QnJhY2tldCxcbiAgICAgICAgICAgIGBFeHBlY3RlZCBcIl1cIiBhZnRlciBhcnJheSBkZWNsYXJhdGlvbmBcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIG5ldyBFeHByLkxpc3QodmFsdWVzLCBsZWZ0QnJhY2tldC5saW5lKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vdHlwZXMvdHlwZS5lbnVtJztcbmltcG9ydCB7ICROdWxsIH0gZnJvbSAnLi90eXBlcy9udWxsJztcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL3R5cGVzL2FueSc7XG5pbXBvcnQgeyAkQ2FsbGFibGUsICRGdW5jdGlvbiB9IGZyb20gJy4vdHlwZXMvZnVuY3Rpb24nO1xuaW1wb3J0IHsgJEJvb2xlYW4gfSBmcm9tICcuL3R5cGVzL2Jvb2xlYW4nO1xuaW1wb3J0IHsgJExpc3QgfSBmcm9tICcuL3R5cGVzL2xpc3QnO1xuaW1wb3J0IHsgJE51bWJlciB9IGZyb20gJy4vdHlwZXMvbnVtYmVyJztcbmltcG9ydCB7ICRTdHJpbmcgfSBmcm9tICcuL3R5cGVzL3N0cmluZyc7XG5pbXBvcnQgeyAkVm9pZCB9IGZyb20gJy4vdHlwZXMvdm9pZCc7XG5pbXBvcnQgeyAkUmVnRXhwIH0gZnJvbSAnLi90eXBlcy9yZWdleCc7XG5pbXBvcnQgeyAkSXRlcmF0b3IgfSBmcm9tICcuL3R5cGVzL2l0ZXJhdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21KYXZhU2NyaXB0TWV0aG9kKGpzTmFtZTogc3RyaW5nLCBhcml0eTogbnVtYmVyLCB0eXBlOiBEYXRhVHlwZSk6ICRDYWxsYWJsZSB7XG4gICAgcmV0dXJuIG5ldyAkQ2FsbGFibGUoanNOYW1lLCBhcml0eSwgKHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSk6ICRBbnkgPT4ge1xuICAgICAgICBjb25zdCBhcmdWYWx1ZXMgPSBhcmdzLm1hcCgoYXJnOiAkQW55KSA9PiBhcmcudmFsdWUpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGl6LnZhbHVlW2pzTmFtZV0oLi4uYXJnVmFsdWVzKTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIERhdGFUeXBlLkJvb2xlYW46XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbihyZXN1bHQpO1xuICAgICAgICAgICAgY2FzZSBEYXRhVHlwZS5TdHJpbmc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkU3RyaW5nKHJlc3VsdCk7XG4gICAgICAgICAgICBjYXNlIERhdGFUeXBlLk51bWJlcjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICROdW1iZXIocmVzdWx0KTtcbiAgICAgICAgICAgIGNhc2UgRGF0YVR5cGUuTGlzdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICRMaXN0KHJlc3VsdCk7XG4gICAgICAgICAgICBjYXNlIERhdGFUeXBlLk51bGw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3ICRBbnkocmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJvbUphdmFTY3JpcHRGdW5jTnVtYmVyKGZ1bmM6ICguLi5hcmd6OiBhbnkpID0+IGFueSwgbmFtZTogc3RyaW5nLCBhcml0eTogbnVtYmVyKTogJENhbGxhYmxlIHtcbiAgICByZXR1cm4gbmV3ICRDYWxsYWJsZShuYW1lLCBhcml0eSwgKHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSk6ICRBbnkgPT4ge1xuICAgICAgICBjb25zdCBhcmdWYWx1ZXMgPSBhcmdzLm1hcCgoYXJnOiAkQW55KSA9PiBhcmcudmFsdWUpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBmdW5jKC4uLmFyZ1ZhbHVlcyk7XG4gICAgICAgIHJldHVybiBuZXcgJE51bWJlcihyZXN1bHQpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJvbUphdmFTY3JpcHRGdW5jVm9pZChmdW5jOiAoLi4uYXJnejogYW55KSA9PiBhbnksIG5hbWU6IHN0cmluZywgYXJpdHk6IG51bWJlcik6ICRDYWxsYWJsZSB7XG4gICAgcmV0dXJuIG5ldyAkQ2FsbGFibGUobmFtZSwgYXJpdHksICh0aGl6OiAkQW55LCBhcmdzOiAkQW55W10pOiAkQW55ID0+IHtcbiAgICAgICAgY29uc3QgYXJnVmFsdWVzID0gYXJncy5tYXAoKGFyZzogJEFueSkgPT4gYXJnLnZhbHVlKTtcbiAgICAgICAgZnVuYyguLi5hcmdWYWx1ZXMpO1xuICAgICAgICByZXR1cm4gbmV3ICRWb2lkKCd2b2lkJyk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBSdW50aW1lID0ge1xuICAgIENvbnNvbGU6ICBuZXcgTWFwPHN0cmluZywgJEFueT4oW1xuICAgICAgICBbJ2xvZycsIGZyb21KYXZhU2NyaXB0RnVuY1ZvaWQoY29uc29sZS5sb2csICdjb25zb2xlLmxvZycsIC0xKV0sXG4gICAgICAgIFsnd2FybicsIGZyb21KYXZhU2NyaXB0RnVuY1ZvaWQoY29uc29sZS53YXJuLCAnY29uc29sZS53YXJuJywgLTEpXSxcbiAgICAgICAgWydpbmZvJywgZnJvbUphdmFTY3JpcHRGdW5jVm9pZChjb25zb2xlLmluZm8sICdjb25zb2xlLmluZm8nLCAtMSldLFxuICAgICAgICBbJ2Vycm9yJywgZnJvbUphdmFTY3JpcHRGdW5jVm9pZChjb25zb2xlLmVycm9yLCAnY29uc29sZS5lcnJvcicsIC0xKV1cbiAgICBdKSxcbiAgICBNYXRoOiAgbmV3IE1hcDxzdHJpbmcsICRBbnk+KFtcbiAgICAgICAgWydjZWlsJywgZnJvbUphdmFTY3JpcHRGdW5jTnVtYmVyKE1hdGguY2VpbCwgJ2NlaWwnLCAxKV0sXG4gICAgICAgIFsnY29zJywgZnJvbUphdmFTY3JpcHRGdW5jTnVtYmVyKE1hdGguY29zLCAnY29zJywgMSldLFxuICAgICAgICBbJ2Zsb29yJywgZnJvbUphdmFTY3JpcHRGdW5jTnVtYmVyKE1hdGguZmxvb3IsICdmbG9vcicsIDEpXSxcbiAgICAgICAgWydsb2cnLCBmcm9tSmF2YVNjcmlwdEZ1bmNOdW1iZXIoTWF0aC5sb2csICdsb2cnLCAxKV0sXG4gICAgICAgIFsnbWF4JywgZnJvbUphdmFTY3JpcHRGdW5jTnVtYmVyKE1hdGgubWF4LCAnbWF4JywgLTEpXSxcbiAgICAgICAgWydtaW4nLCBmcm9tSmF2YVNjcmlwdEZ1bmNOdW1iZXIoTWF0aC5taW4sICdtaW4nLCAtMSldLFxuICAgICAgICBbJ3BpJywgbmV3ICROdW1iZXIoTWF0aC5QSSldLFxuICAgICAgICBbJ3BvdycsIGZyb21KYXZhU2NyaXB0RnVuY051bWJlcihNYXRoLnBvdywgJ3BvdycsIDIpXSxcbiAgICAgICAgWydyYW5kb20nLCBmcm9tSmF2YVNjcmlwdEZ1bmNOdW1iZXIoTWF0aC5yYW5kb20sICdyYW5kb20nLCAwKV0sXG4gICAgICAgIFsncm91bmQnLCBmcm9tSmF2YVNjcmlwdEZ1bmNOdW1iZXIoTWF0aC5yb3VuZCwgJ3JvdW5kJywgMSldLFxuICAgICAgICBbJ3NpbicsIGZyb21KYXZhU2NyaXB0RnVuY051bWJlcihNYXRoLnNpbiwgJ3NpbicsIDEpXSxcbiAgICAgICAgWydzcXJ0JywgZnJvbUphdmFTY3JpcHRGdW5jTnVtYmVyKE1hdGguc3FydCwgJ3NxcnQnLCAxKV0sXG4gICAgICAgIFsndGFuJywgZnJvbUphdmFTY3JpcHRGdW5jTnVtYmVyKE1hdGgudGFuLCAndGFuJywgMSldLFxuICAgICAgICBbJ3RydW5jJywgZnJvbUphdmFTY3JpcHRGdW5jTnVtYmVyKE1hdGgudHJ1bmMsICd0cnVuYycsIDEpXVxuICAgIF0pLFxuICAgIFV0aWxzOiBuZXcgTWFwPHN0cmluZywgJEFueT4oW1xuICAgICAgICBbJ3JlJywgbmV3ICRDYWxsYWJsZSgncmVnZXgnLCAtMSwgKHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSk6ICRBbnkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gYXJncy5tYXAoKGFyZykgPT4gYXJnLnZhbHVlKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkUmVnRXhwKG5ldyBSZWdFeHAodmFsdWVzWzBdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3ICRSZWdFeHAobmV3IFJlZ0V4cCh2YWx1ZXNbMF0sIHZhbHVlc1sxXSkpO1xuICAgICAgICB9KV0sXG4gICAgICAgIFsnaXRlcicsIG5ldyAkQ2FsbGFibGUoJ2l0ZXInLCAxLCAodGhpejogJEFueSwgYXJnczogJEFueVtdKTogJEFueSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3ICRJdGVyYXRvcihhcmdzWzBdKTtcbiAgICAgICAgfSldLFxuICAgICAgICBbJ2RlbGF5JywgbmV3ICRDYWxsYWJsZSgnZGVsYXknLCAyLCAodGhpejogJEFueSwgYXJnczogJEFueVtdLCBpbnRlcnByZXRlcik6ICRBbnkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgKGFyZ3NbMF0gYXMgJEZ1bmN0aW9uKS5jYWxsKHRoaXosIFtdLCBpbnRlcnByZXRlcik7XG4gICAgICAgICAgICB9LCBhcmdzWzFdLnZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgJE51bGwoKTtcbiAgICAgICAgfSldLFxuXG4gICAgICAgIFsnZmV0Y2gnLCBuZXcgJENhbGxhYmxlKCdmZXRjaCcsIDIsICh0aGl6OiAkQW55LCBhcmdzOiAkQW55W10sIGludGVycHJldGVyKTogJEFueSA9PiB7XG4gICAgICAgICAgICBmZXRjaChhcmdzWzBdLnZhbHVlKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAgICAgICAgICAgICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIChhcmdzWzFdIGFzICRGdW5jdGlvbikuY2FsbCh0aGl6LCBbbmV3ICRTdHJpbmcoanNvbildLCBpbnRlcnByZXRlcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3ICROdWxsKCk7XG4gICAgICAgIH0pXSxcbiAgICBdKVxufTtcbiIsImltcG9ydCB7IFRva2VuLCBUb2tlblR5cGUgfSBmcm9tIFwiLi90b2tlblwiO1xuaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gXCIuL2NvbnNvbGVcIjtcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyAkRXJyb3IgfSBmcm9tIFwiLi90eXBlcy9lcnJvclwiO1xuZGVjbGFyZSB2YXIgY29uem9sZTogQ29uc29sZTtcblxuZXhwb3J0IGNsYXNzIFNjYW5uZXIge1xuICAgIC8qKiBzY3JpcHRzIHNvdXJjZSBjb2RlICovXG4gICAgcHVibGljIHNvdXJjZTogc3RyaW5nO1xuICAgIC8qKiBjb250YWluZXMgdGhlIHNvdXJjZSBjb2RlIHJlcHJlc2VudGVkIGFzIGxpc3Qgb2YgdG9rZW5zICovXG4gICAgcHVibGljIHRva2VuczogVG9rZW5bXTtcbiAgICAvKiogTGlzdCBvZiBlcnJvcnMgZnJvbSBzY2FubmluZyAqL1xuICAgIHB1YmxpYyBlcnJvcnM6IHN0cmluZ1tdO1xuICAgIC8qKiBwb2ludHMgdG8gdGhlIGN1cnJlbnQgY2hhcmFjdGVyIGJlaW5nIHRva2VuaXplZCAqL1xuICAgIHByaXZhdGUgY3VycmVudDogbnVtYmVyO1xuICAgIC8qKiBwb2ludHMgdG8gdGhlIHN0YXJ0IG9mIHRoZSB0b2tlbiBmcmFzZSAqL1xuICAgIHByaXZhdGUgc3RhcnQ6IG51bWJlcjtcbiAgICAvKiogY3VycmVudCBsaW5lIG9mIHNvdXJjZSBjb2RlIGJpZW5nIHRva2VuaXplZCAqL1xuICAgIHByaXZhdGUgbGluZTogbnVtYmVyO1xuICAgIC8qKiBjdXJyZW50IGNvbHVtbiBvZiB0aGUgY2hhcmFjdGVyIGJlaW5nIHRva2VuaXplZCAqL1xuICAgIHByaXZhdGUgY29sOiBudW1iZXI7XG5cbiAgICBwdWJsaWMgc2Nhbihzb3VyY2U6IHN0cmluZyk6IFRva2VuW10ge1xuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgICAgdGhpcy50b2tlbnMgPSBbXTtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gMDtcbiAgICAgICAgdGhpcy5zdGFydCA9IDA7XG4gICAgICAgIHRoaXMubGluZSA9IDE7XG4gICAgICAgIHRoaXMuY29sID0gMTtcblxuICAgICAgICB3aGlsZSAoIXRoaXMuZW9mKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnQgPSB0aGlzLmN1cnJlbnQ7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VG9rZW4oKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lcnJvcnMubGVuZ3RoID4gMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goXCJFcnJvciBsaW1pdCBleGNlZWRlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKG5ldyBUb2tlbihUb2tlblR5cGUuRW9mLCBcIlwiLCBudWxsLCB0aGlzLmxpbmUsIDApKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICAgIH1cblxuICAgIHByaXZhdGUgZW9mKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50ID49IHRoaXMuc291cmNlLmxlbmd0aDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkdmFuY2UoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMucGVlaygpID09PSBcIlxcblwiKSB7XG4gICAgICAgICAgICB0aGlzLmxpbmUrKztcbiAgICAgICAgICAgIHRoaXMuY29sID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnQrKztcbiAgICAgICAgdGhpcy5jb2wrKztcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLmNoYXJBdCh0aGlzLmN1cnJlbnQgLSAxKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZFRva2VuKHRva2VuVHlwZTogVG9rZW5UeXBlLCBsaXRlcmFsOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IHRoaXMuc291cmNlLnN1YnN0cmluZyh0aGlzLnN0YXJ0LCB0aGlzLmN1cnJlbnQpO1xuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKFxuICAgICAgICAgICAgbmV3IFRva2VuKHRva2VuVHlwZSwgdGV4dCwgbGl0ZXJhbCwgdGhpcy5saW5lLCB0aGlzLmNvbClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG1hdGNoKGV4cGVjdGVkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuZW9mKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNvdXJjZS5jaGFyQXQodGhpcy5jdXJyZW50KSAhPT0gZXhwZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VycmVudCsrO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBlZWsoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuZW9mKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlxcMFwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5jaGFyQXQodGhpcy5jdXJyZW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBlZWtOZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnQgKyAxID49IHRoaXMuc291cmNlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXFwwXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLmNoYXJBdCh0aGlzLmN1cnJlbnQgKyAxKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbW1lbnQoKTogdm9pZCB7XG4gICAgICAgIHdoaWxlICh0aGlzLnBlZWsoKSAhPT0gXCJcXG5cIiAmJiAhdGhpcy5lb2YoKSkge1xuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG11bHRpbGluZUNvbW1lbnQoKTogdm9pZCB7XG4gICAgICAgIHdoaWxlIChcbiAgICAgICAgICAgICF0aGlzLmVvZigpICYmXG4gICAgICAgICAgICAhKHRoaXMucGVlaygpID09PSBcIipcIiAmJiB0aGlzLnBlZWtOZXh0KCkgPT09IFwiL1wiKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVvZigpKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKCdVbnRlcm1pbmF0ZWQgY29tbWVudCwgZXhwZWN0aW5nIGNsb3NpbmcgXCIqL1wiJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB0aGUgY2xvc2luZyBzbGFzaCAnKi8nXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdHJpbmcocXVvdGU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB3aGlsZSAodGhpcy5wZWVrKCkgIT09IHF1b3RlICYmICF0aGlzLmVvZigpKSB7XG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVudGVybWluYXRlZCBzdHJpbmcuXG4gICAgICAgIGlmICh0aGlzLmVvZigpKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKGBVbnRlcm1pbmF0ZWQgc3RyaW5nLCBleHBlY3RpbmcgY2xvc2luZyAke3F1b3RlfWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlIGNsb3NpbmcgXCIuXG4gICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuXG4gICAgICAgIC8vIFRyaW0gdGhlIHN1cnJvdW5kaW5nIHF1b3Rlcy5cbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNvdXJjZS5zdWJzdHJpbmcodGhpcy5zdGFydCArIDEsIHRoaXMuY3VycmVudCAtIDEpO1xuICAgICAgICB0aGlzLmFkZFRva2VuKFxuICAgICAgICAgICAgcXVvdGUgIT09IFwiYFwiID8gVG9rZW5UeXBlLlN0cmluZyA6IFRva2VuVHlwZS5UZW1wbGF0ZSxcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBudW1iZXIoKTogdm9pZCB7XG4gICAgICAgIC8vIGdldHMgaW50ZWdlciBwYXJ0XG4gICAgICAgIHdoaWxlIChVdGlscy5pc0RpZ2l0KHRoaXMucGVlaygpKSkge1xuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVja3MgZm9yIGZyYWN0aW9uXG4gICAgICAgIGlmICh0aGlzLnBlZWsoKSA9PT0gXCIuXCIgJiYgVXRpbHMuaXNEaWdpdCh0aGlzLnBlZWtOZXh0KCkpKSB7XG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGdldHMgZnJhY3Rpb24gcGFydFxuICAgICAgICB3aGlsZSAoVXRpbHMuaXNEaWdpdCh0aGlzLnBlZWsoKSkpIHtcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2tzIGZvciBleHBvbmVudFxuICAgICAgICBpZiAodGhpcy5wZWVrKCkudG9Mb3dlckNhc2UoKSA9PT0gXCJlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMucGVlaygpID09PSBcIi1cIiB8fCB0aGlzLnBlZWsoKSA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChVdGlscy5pc0RpZ2l0KHRoaXMucGVlaygpKSkge1xuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc291cmNlLnN1YnN0cmluZyh0aGlzLnN0YXJ0LCB0aGlzLmN1cnJlbnQpO1xuICAgICAgICB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5OdW1iZXIsIE51bWJlcih2YWx1ZSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaWRlbnRpZmllcigpOiB2b2lkIHtcbiAgICAgICAgd2hpbGUgKFV0aWxzLmlzQWxwaGFOdW1lcmljKHRoaXMucGVlaygpKSkge1xuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc291cmNlLnN1YnN0cmluZyh0aGlzLnN0YXJ0LCB0aGlzLmN1cnJlbnQpO1xuICAgICAgICBjb25zdCBjYXBpdGFsaXplZCA9IFV0aWxzLmNhcGl0YWxpemUodmFsdWUpO1xuICAgICAgICBpZiAoVXRpbHMuaXNLZXl3b3JkKGNhcGl0YWxpemVkKSkge1xuICAgICAgICAgICAgdGhpcy5hZGRUb2tlbihUb2tlblR5cGVbY2FwaXRhbGl6ZWQgYXMgbmV2ZXJdIGFzIGFueSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuSWRlbnRpZmllciwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRUb2tlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY2hhciA9IHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICBzd2l0Y2ggKGNoYXIpIHtcbiAgICAgICAgICAgIGNhc2UgXCIoXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuTGVmdFBhcmVuLCBudWxsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIpXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuUmlnaHRQYXJlbiwgbnVsbCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiW1wiOlxuICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLkxlZnRCcmFja2V0LCBudWxsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJdXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuUmlnaHRCcmFja2V0LCBudWxsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ7XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuTGVmdEJyYWNlLCBudWxsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ9XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuUmlnaHRCcmFjZSwgbnVsbCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiLFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLkNvbW1hLCBudWxsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCI7XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuU2VtaWNvbG9uLCBudWxsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJeXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuQ2FyZXQsIG51bGwpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIiRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5Eb2xsYXIsIG51bGwpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIiNcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5IYXNoLCBudWxsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJAXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuRnVuY3Rpb24sIFwiQFwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCI6XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbihcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaChcIj1cIikgPyBUb2tlblR5cGUuQXJyb3cgOiBUb2tlblR5cGUuQ29sb24sXG4gICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIipcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGNoKFwiPVwiKSA/IFRva2VuVHlwZS5TdGFyRXF1YWwgOiBUb2tlblR5cGUuU3RhcixcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiJVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4oXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2goXCI9XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFRva2VuVHlwZS5QZXJjZW50RXF1YWxcbiAgICAgICAgICAgICAgICAgICAgICAgIDogVG9rZW5UeXBlLlBlcmNlbnQsXG4gICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInxcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGNoKFwifFwiKSA/IFRva2VuVHlwZS5PciA6IFRva2VuVHlwZS5QaXBlLFxuICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCImXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbihcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaChcIiZcIikgPyBUb2tlblR5cGUuQW5kIDogVG9rZW5UeXBlLkFtcGVyc2FuZCxcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiPlwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4oXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2goXCI9XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFRva2VuVHlwZS5HcmVhdGVyRXF1YWxcbiAgICAgICAgICAgICAgICAgICAgICAgIDogVG9rZW5UeXBlLkdyZWF0ZXIsXG4gICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIiFcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGNoKFwiPVwiKSA/IFRva2VuVHlwZS5CYW5nRXF1YWwgOiBUb2tlblR5cGUuQmFuZyxcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiP1wiOlxuICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4oXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2goXCI/XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFRva2VuVHlwZS5RdWVzdGlvblF1ZXN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMubWF0Y2goXCIuXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFRva2VuVHlwZS5RdWVzdGlvbkRvdFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBUb2tlblR5cGUuUXVlc3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIj1cIjpcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGNoKFwiPVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBUb2tlblR5cGUuRXF1YWxFcXVhbFxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLm1hdGNoKFwiPlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBUb2tlblR5cGUuQXJyb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIDogVG9rZW5UeXBlLkVxdWFsLFxuICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIrXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbihcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaChcIitcIilcbiAgICAgICAgICAgICAgICAgICAgICAgID8gVG9rZW5UeXBlLlBsdXNQbHVzXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMubWF0Y2goXCI9XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFRva2VuVHlwZS5QbHVzRXF1YWxcbiAgICAgICAgICAgICAgICAgICAgICAgIDogVG9rZW5UeXBlLlBsdXMsXG4gICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIi1cIjpcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGNoKFwiLVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBUb2tlblR5cGUuTWludXNNaW51c1xuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLm1hdGNoKFwiPlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBUb2tlblR5cGUuUmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMubWF0Y2goXCI9XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFRva2VuVHlwZS5NaW51c0VxdWFsXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFRva2VuVHlwZS5NaW51cyxcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiPFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4oXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2goXCI9XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMubWF0Y2goXCI+XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBUb2tlblR5cGUuTGVzc0VxdWFsR3JlYXRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogVG9rZW5UeXBlLkxlc3NFcXVhbFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBUb2tlblR5cGUuTGVzcyxcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiLlwiOlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFwiLlwiKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXRjaChcIi5cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLkRvdERvdERvdCwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5Eb3REb3QsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuRG90LCBudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiL1wiOlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoKFwiL1wiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWF0Y2goXCIqXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlsaW5lQ29tbWVudCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGNoKFwiPVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gVG9rZW5UeXBlLlNsYXNoRXF1YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFRva2VuVHlwZS5TbGFzaCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGAnYDpcbiAgICAgICAgICAgIGNhc2UgYFwiYDpcbiAgICAgICAgICAgIGNhc2UgXCJgXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5zdHJpbmcoY2hhcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBpZ25vcmUgY2FzZXNcbiAgICAgICAgICAgIGNhc2UgXCJcXG5cIjpcbiAgICAgICAgICAgIGNhc2UgXCIgXCI6XG4gICAgICAgICAgICBjYXNlIFwiXFxyXCI6XG4gICAgICAgICAgICBjYXNlIFwiXFx0XCI6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBjb21wZXggY2FzZXNcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaWYgKFV0aWxzLmlzRGlnaXQoY2hhcikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5udW1iZXIoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFV0aWxzLmlzQWxwaGEoY2hhcikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGVudGlmaWVyKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihgVW5leHBlY3RlZCBjaGFyYWN0ZXIgJyR7Y2hhcn0nYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlcnJvcihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTY2FuIEVycm9yICgke3RoaXMubGluZX06JHt0aGlzLmNvbH0pID0+ICR7bWVzc2FnZX1gKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBUb2tlbiB9IGZyb20gXCIuL3Rva2VuXCI7XG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSBcIi4vY29uc29sZVwiO1xuaW1wb3J0IHsgJEFueSB9IGZyb20gXCIuL3R5cGVzL2FueVwiO1xuaW1wb3J0IHsgJE51bGwgfSBmcm9tIFwiLi90eXBlcy9udWxsXCI7XG5cbmV4cG9ydCBjbGFzcyBTY29wZSB7XG4gICAgcHJpdmF0ZSB2YWx1ZXM6IE1hcDxzdHJpbmcsIGFueT47XG4gICAgcHJpdmF0ZSBwYXJlbnQ6IFNjb3BlO1xuXG4gICAgY29uc3RydWN0b3IocGFyZW50OiBTY29wZSA9IG51bGwpIHtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgZXJyb3IobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgUnVudGltZSBFcnJvciA9PiAke21lc3NhZ2V9YCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsb25lKCk6IFNjb3BlIHtcbiAgICAgICAgY29uc3QgY2xvbmUgPSBuZXcgU2NvcGUodGhpcy5wYXJlbnQpO1xuICAgICAgICBjbG9uZS52YWx1ZXMgPSBuZXcgTWFwKHRoaXMudmFsdWVzKTtcbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogJEFueSkge1xuICAgICAgICB0aGlzLnZhbHVlcy5zZXQobmFtZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWZpbmUobmFtZTogc3RyaW5nLCB2YWx1ZTogJEFueSkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZXMuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKGBJZGVudGlmaWVyIFwiJHtuYW1lfVwiIGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZGApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXQobmFtZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFzc2lnbihuYW1lOiBzdHJpbmcsIHZhbHVlOiAkQW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlcy5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5hc3NpZ24obmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lcnJvcihgSWRlbnRpZmllciBcIiR7bmFtZX1cIiBoYXMgbm90IGJlZW4gZGVmaW5lZGApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldChrZXk6IHN0cmluZywgdG9rZW46IFRva2VuID0gbnVsbCk6ICRBbnkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5nZXQoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wYXJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5nZXQoa2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgICAgICAgICBgIGF0ICgke3Rva2VuLmxpbmV9OiR7dG9rZW4uY29sfSkgPT4gXCIke3Rva2VuLmxleGVtZX1cIiBpcyBub3QgZGVmaW5lZGBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKGBcIiR7a2V5fVwiIGlzIG5vdCBkZWZpbmVkYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBlbnVtIFRva2VuVHlwZSB7XG4gICAgLy8gUGFyc2VyIFRva2Vuc1xuICAgIEVvZixcbiAgICBQYW5pYyxcbiAgICBMYW1iZGEsXG5cbiAgICAvLyBTaW5nbGUgQ2hhcmFjdGVyIFRva2Vuc1xuICAgIEFtcGVyc2FuZCxcbiAgICBBdFNpZ24sXG4gICAgQ2FyZXQsXG4gICAgQ29tbWEsXG4gICAgRG9sbGFyLFxuICAgIERvdCxcbiAgICBIYXNoLFxuICAgIExlZnRCcmFjZSxcbiAgICBMZWZ0QnJhY2tldCxcbiAgICBMZWZ0UGFyZW4sXG4gICAgUGVyY2VudCxcbiAgICBQaXBlLFxuICAgIFJpZ2h0QnJhY2UsXG4gICAgUmlnaHRCcmFja2V0LFxuICAgIFJpZ2h0UGFyZW4sXG4gICAgU2VtaWNvbG9uLFxuICAgIFNsYXNoLFxuICAgIFN0YXIsXG5cbiAgICAvLyBPbmUgT3IgVHdvIENoYXJhY3RlciBUb2tlbnNcbiAgICBBcnJvdyxcbiAgICBCYW5nLFxuICAgIEJhbmdFcXVhbCxcbiAgICBDb2xvbixcbiAgICBFcXVhbCxcbiAgICBFcXVhbEVxdWFsLFxuICAgIEdyZWF0ZXIsXG4gICAgR3JlYXRlckVxdWFsLFxuICAgIExlc3MsXG4gICAgTGVzc0VxdWFsLFxuICAgIE1pbnVzLFxuICAgIE1pbnVzRXF1YWwsXG4gICAgTWludXNNaW51cyxcbiAgICBQZXJjZW50RXF1YWwsXG4gICAgUGx1cyxcbiAgICBQbHVzRXF1YWwsXG4gICAgUGx1c1BsdXMsXG4gICAgUXVlc3Rpb24sXG4gICAgUXVlc3Rpb25Eb3QsXG4gICAgUXVlc3Rpb25RdWVzdGlvbixcbiAgICBTbGFzaEVxdWFsLFxuICAgIFN0YXJFcXVhbCxcbiAgICBEb3REb3QsXG4gICAgRG90RG90RG90LFxuICAgIExlc3NFcXVhbEdyZWF0ZXIsXG5cbiAgICAvLyBMaXRlcmFsc1xuICAgIElkZW50aWZpZXIsXG4gICAgVGVtcGxhdGUsXG4gICAgU3RyaW5nLFxuICAgIE51bWJlcixcbiAgICBSZWdleCxcblxuICAgIC8vIEtleXdvcmRzXG4gICAgQW5kLFxuICAgIEJyZWFrLFxuICAgIEJhc2UsXG4gICAgQ2xhc3MsXG4gICAgQ29udGludWUsXG4gICAgRGVsZXRlLFxuICAgIERvLFxuICAgIEVsc2UsXG4gICAgRXh0ZW5kcyxcbiAgICBGYWxzZSxcbiAgICBGb3IsXG4gICAgRm9yZWFjaCxcbiAgICBGdW5jdGlvbixcbiAgICBJZixcbiAgICBJbixcbiAgICBJbnN0YW5jZW9mLFxuICAgIElzLFxuICAgIE5ldyxcbiAgICBOb25lLFxuICAgIE51bGwsXG4gICAgT3IsXG4gICAgUHJpbnQsXG4gICAgUmV0dXJuLFxuICAgIFRydWUsXG4gICAgVHlwZW9mLFxuICAgIFZhcixcbiAgICBWb2lkLFxuICAgIFdoaWxlLFxuICAgIFdpdGgsXG59XG5cbmV4cG9ydCBjbGFzcyBUb2tlbiB7XG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgbGluZTogbnVtYmVyO1xuICAgIHB1YmxpYyBjb2w6IG51bWJlcjtcbiAgICBwdWJsaWMgdHlwZTogVG9rZW5UeXBlO1xuICAgIHB1YmxpYyBsaXRlcmFsOiBhbnk7XG4gICAgcHVibGljIGxleGVtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHR5cGU6IFRva2VuVHlwZSxcbiAgICAgICAgbGV4ZW1lOiBzdHJpbmcsXG4gICAgICAgIGxpdGVyYWw6IGFueSxcbiAgICAgICAgbGluZTogbnVtYmVyLFxuICAgICAgICBjb2w6IG51bWJlclxuICAgICkge1xuICAgICAgICB0aGlzLm5hbWUgPSBUb2tlblR5cGVbdHlwZV07XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMubGV4ZW1lID0gbGV4ZW1lO1xuICAgICAgICB0aGlzLmxpdGVyYWwgPSBsaXRlcmFsO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgICAgICB0aGlzLmNvbCA9IGNvbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgWygke3RoaXMubGluZX0pOlwiJHt0aGlzLmxleGVtZX1cIl1gO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnNvbGUgfSBmcm9tICcuLi9jb25zb2xlJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi90eXBlLmVudW0nO1xuZGVjbGFyZSB2YXIgY29uem9sZTogQ29uc29sZTtcblxuZXhwb3J0IGNsYXNzICRBbnkge1xuXG4gICAgcHVibGljIHZhbHVlOiBhbnk7XG4gICAgcHVibGljIHR5cGUgPSBEYXRhVHlwZS5Bbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogYW55LCB0eXBlOiBEYXRhVHlwZSA9IERhdGFUeXBlLkFueSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgfVxuXG4gICAgcHVibGljIGlzU3RyaW5nKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBEYXRhVHlwZS5TdHJpbmc7XG4gICAgfVxuXG4gICAgcHVibGljIGlzTnVsbCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gRGF0YVR5cGUuTnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNCb29sZWFuKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBEYXRhVHlwZS5Cb29sZWFuO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc051bWJlcigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gRGF0YVR5cGUuTnVtYmVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc1JhbmdlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBEYXRhVHlwZS5SYW5nZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNGdW5jdGlvbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gRGF0YVR5cGUuRnVuY3Rpb247XG4gICAgfVxuXG4gICAgcHVibGljIGlzQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IERhdGFUeXBlLkNsYXNzO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0xhbWJkYSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gRGF0YVR5cGUuRnVuY3Rpb24gJiYgKHRoaXMgYXMgYW55KS5uYW1lID09PSAnQCc7XG4gICAgfVxuXG4gICAgcHVibGljIGlzTGlzdCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gRGF0YVR5cGUuTGlzdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNEaWN0aW9uYXJ5KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBEYXRhVHlwZS5EaWN0aW9uYXJ5O1xuICAgIH1cblxuICAgIHB1YmxpYyBpc09iamVjdCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gRGF0YVR5cGUuT2JqZWN0O1xuICAgIH1cblxuICAgIHB1YmxpYyBpc1RydXRoeSgpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOdWxsKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0Jvb2xlYW4oKSkge1xuICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNOdW1iZXIoKSAmJiB0aGlzLnZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNTdHJpbmcoKSAmJiB0aGlzLnZhbHVlLnRvU3RyaW5nKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNMaXN0KCkgJiYgdGhpcy52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0RpY3Rpb25hcnkoKSAmJiB0aGlzLnZhbHVlLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBlcnJvciB2YWx1ZSBBbnkgaXMgbnVsbFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRoaXMudmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIGVycm9yIHZhbHVlIEFueSBpcyB1bmRlZmluZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIGlzRXF1YWwob3RoZXI6ICRBbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IG90aGVyLnZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0tleVZhbHVlKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy50eXBlID09PSBEYXRhVHlwZS5DbGFzcyB8fFxuICAgICAgICAgICAgdGhpcy50eXBlID09PSBEYXRhVHlwZS5EaWN0aW9uYXJ5IHx8XG4gICAgICAgICAgICB0aGlzLnR5cGUgPT09IERhdGFUeXBlLk9iamVjdFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0KGtleTogJEFueSk6ICRBbnkge1xuICAgICAgICBjb256b2xlLmVycm9yKGBrZXkgJHtrZXl9IGRvZXMgbm90IGV4aXN0IGluICR7dGhpc31gKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgaW4gQW55IGdldHRlclwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0KGtleTogJEFueSwgdmFsdWU6ICRBbnkpOiAkQW55IHtcbiAgICAgICAgY29uem9sZS5lcnJvcihga2V5ICR7a2V5fSBkb2VzIG5vdCBleGlzdCBpbiAke3RoaXN9YCk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIGluIEFueSBzZXR0ZXJcIik7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZShrZXk6ICRBbnkpOiAkQW55IHtcbiAgICAgICAgY29uem9sZS5lcnJvcihgJHt0aGlzfSBkb2VzIG5vdCBzdXBwb3J0IG9wZXJhdG9yYCk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIGluIEFueSBkZWxldGVcIik7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlLnRvU3RyaW5nKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGUuZW51bSc7XG5pbXBvcnQgeyAkQW55IH0gZnJvbSAnLi9hbnknO1xuXG5leHBvcnQgY2xhc3MgJEJvb2xlYW4gZXh0ZW5kcyAkQW55IHtcblxuICAgIHB1YmxpYyB2YWx1ZTogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHZhbHVlLCBEYXRhVHlwZS5Cb29sZWFuKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi90eXBlLmVudW0nO1xuaW1wb3J0IHsgJEFueSB9IGZyb20gJy4vYW55JztcbmltcG9ydCB7ICROdWxsIH0gZnJvbSAnLi9udWxsJztcbmltcG9ydCB7ICRCb29sZWFuIH0gZnJvbSAnLi9ib29sZWFuJztcblxuZXhwb3J0IGNsYXNzICRDbGFzcyBleHRlbmRzICRBbnkge1xuICAgIHB1YmxpYyB2YWx1ZTogTWFwPHN0cmluZywgJEFueT47XG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgcGFyZW50OiAkQW55O1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB2YWx1ZTogTWFwPHN0cmluZywgJEFueT4sIHBhcmVudDogJEFueSkge1xuICAgICAgICBzdXBlcih2YWx1ZSwgRGF0YVR5cGUuQ2xhc3MpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0KGtleTogJEFueSk6ICRBbnkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZS5oYXMoa2V5LnZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUuZ2V0KGtleS52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wYXJlbnQuaXNDbGFzcygpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ2V0KGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3ICROdWxsKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldChrZXk6ICRBbnksIHZhbHVlOiAkQW55KTogJEFueSB7XG4gICAgICAgIHRoaXMudmFsdWUuc2V0KGtleS52YWx1ZSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZShrZXk6ICRBbnkpOiAkQW55IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy52YWx1ZS5kZWxldGUoa2V5LnZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbihyZXN1bHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYDwke3RoaXMubmFtZX0gY2xhc3M+YDtcbiAgICB9XG5cbn1cbiIsIlxuaW1wb3J0IHsgZnJvbUphdmFTY3JpcHRNZXRob2QgfSBmcm9tICcuLi9ydW50aW1lJztcbmltcG9ydCB7IEludGVycHJldGVyIH0gZnJvbSAnLi4vaW50ZXJwcmV0ZXInO1xuaW1wb3J0IHsgJEFueSB9IGZyb20gJy4vYW55JztcbmltcG9ydCB7ICRGdW5jdGlvbiwgJENhbGxhYmxlIH0gZnJvbSAnLi9mdW5jdGlvbic7XG5pbXBvcnQgeyAkTnVsbCB9IGZyb20gJy4vbnVsbCc7XG5pbXBvcnQgeyAkTnVtYmVyIH0gZnJvbSAnLi9udW1iZXInO1xuaW1wb3J0IHsgJFN0cmluZyB9IGZyb20gJy4vc3RyaW5nJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi90eXBlLmVudW0nO1xuaW1wb3J0IHsgJEl0ZXJhdG9yIH0gZnJvbSAnLi9pdGVyYXRvcic7XG5pbXBvcnQgeyAkQm9vbGVhbiB9IGZyb20gJy4vYm9vbGVhbic7XG5cbmV4cG9ydCBjbGFzcyAkRGljdGlvbmFyeSBleHRlbmRzICRBbnkge1xuICAgIHB1YmxpYyB2YWx1ZTogTWFwPGFueSwgJEFueT47XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogTWFwPGFueSwgJEFueT4pIHtcbiAgICAgICAgc3VwZXIodmFsdWUsIERhdGFUeXBlLkRpY3Rpb25hcnkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQoa2V5OiAkQW55KTogYW55IHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUuaGFzKGtleS52YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlLmdldChrZXkudmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKCREaWN0aW9uYXJ5LnJ1bnRpbWUuaGFzKGtleS52YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiAkRGljdGlvbmFyeS5ydW50aW1lLmdldChrZXkudmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNldChrZXk6ICRBbnksIHZhbHVlOiAkQW55KTogJEFueSB7XG4gICAgICAgIHRoaXMudmFsdWUuc2V0KGtleS52YWx1ZSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZShrZXk6ICRBbnkpOiAkQW55IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy52YWx1ZS5kZWxldGUoa2V5LnZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyAkQm9vbGVhbihyZXN1bHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XG4gICAgICAgIHRoaXMudmFsdWUuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goYCR7a2V5LnRvU3RyaW5nKCl9OiAke3ZhbHVlfWApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGB7JHtyZXN1bHQuam9pbignOyAnKX19YDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGVhY2godGhpejogJEFueSwgYXJnczogJEFueVtdLCBpbnRlcnByZXRlcjogSW50ZXJwcmV0ZXIpOiAkQW55IHtcbiAgICAgICAgdGhpei52YWx1ZS5mb3JFYWNoKCh2YWx1ZTogJEFueSwga2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIChhcmdzWzBdIGFzICRGdW5jdGlvbikuY2FsbCh0aGl6LCBbdmFsdWUsIG5ldyAkU3RyaW5nKGtleSksIHRoaXpdLCBpbnRlcnByZXRlcik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpejtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIG1hcCh0aGl6OiAkQW55LCBhcmdzOiAkQW55W10sIGludGVycHJldGVyOiBJbnRlcnByZXRlcik6ICRBbnkge1xuICAgICAgICB0aGl6LnZhbHVlLmZvckVhY2goKHZhbHVlOiAkQW55LCBrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgdGhpei52YWx1ZS5zZXQoJ2tleScsIChhcmdzWzBdIGFzICRGdW5jdGlvbikuY2FsbCh0aGl6LCBbdmFsdWUsIG5ldyAkU3RyaW5nKGtleSksIHRoaXpdLCBpbnRlcnByZXRlcikpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXo7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBpbmRleE9mKHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSwgaW50ZXJwcmV0ZXI6IEludGVycHJldGVyKTogJEFueSB7XG4gICAgICAgIGxldCBpbmRleDogc3RyaW5nID0gbnVsbDtcbiAgICAgICAgdGhpei52YWx1ZS5mb3JFYWNoKCh2YWx1ZTogJEFueSwga2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZS50eXBlID09PSBhcmdzWzBdLnR5cGUgJiYgdmFsdWUudmFsdWUgPT09IGFyZ3NbMF0udmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyAkU3RyaW5nKGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3ICROdWxsKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBydW50aW1lID0gIG5ldyBNYXAoW1xuICAgICAgICBbJ2NsZWFyJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ2NsZWFyJywgMCwgRGF0YVR5cGUuTnVsbCldLFxuICAgICAgICBbJ2RlbGV0ZScsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCdkZWxldGUnLCAxLCBEYXRhVHlwZS5Cb29sZWFuKV0sXG4gICAgICAgIFsnZWFjaCcsIG5ldyAkQ2FsbGFibGUoJ2VhY2gnLCAxLCAkRGljdGlvbmFyeS5lYWNoKV0sXG4gICAgICAgIFsnaGFzJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ2hhcycsIDEsIERhdGFUeXBlLkJvb2xlYW4pXSxcbiAgICAgICAgWydpbmRleE9mJywgbmV3ICRDYWxsYWJsZSgnaW5kZXhPZicsIDEsICREaWN0aW9uYXJ5LmluZGV4T2YpXSxcbiAgICAgICAgWydtYXAnLCBuZXcgJENhbGxhYmxlKCdtYXAnLCAxLCAkRGljdGlvbmFyeS5tYXApXSxcbiAgICAgICAgWydtZXJnZScsIG5ldyAkQ2FsbGFibGUoJ21lcmdlJywgMSwgICh0aGl6OiAkQW55LCBhcmdzOiAkQW55W10pOiAkQW55ID0+IG5ldyAkRGljdGlvbmFyeShuZXcgTWFwKFsuLi4odGhpei52YWx1ZSksIC4uLihhcmdzWzBdLnZhbHVlKV0pKSldLFxuICAgICAgICBbJ3NpemUnLCBuZXcgJENhbGxhYmxlKCdzaXplJywgMCwgICh0aGl6OiAkQW55LCBhcmdzOiAkQW55W10pOiAkQW55ID0+IG5ldyAkTnVtYmVyKHRoaXoudmFsdWUuc2l6ZSkpXVxuICAgIF0pO1xuXG59XG4iLCJpbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vdHlwZS5lbnVtJztcbmltcG9ydCB7ICRBbnkgfSBmcm9tICcuL2FueSc7XG5cbmV4cG9ydCBjbGFzcyAkRXJyb3IgZXh0ZW5kcyAkQW55IHtcblxuICAgIHB1YmxpYyB2YWx1ZTogc3RyaW5nO1xuICAgIHB1YmxpYyBsaW5lOiBudW1iZXI7XG4gICAgcHVibGljIGNvbDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZywgbGluZTogbnVtYmVyLCBjb2w6IG51bWJlcikge1xuICAgICAgICBzdXBlcih2YWx1ZSwgRGF0YVR5cGUuRXJyb3IpO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgICAgICB0aGlzLmNvbCA9IGNvbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IFRva2VuLCBUb2tlblR5cGUgfSBmcm9tICd0b2tlbic7XG5pbXBvcnQgeyBTdG10IH0gZnJvbSAnc3RhdGVtZW50JztcbmltcG9ydCB7ICRBbnkgfSBmcm9tICdhbnknO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRXhwciB7XG4gICAgcHVibGljIHJlc3VsdDogYW55O1xuICAgIHB1YmxpYyBsaW5lOiBudW1iZXI7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgY29uc3RydWN0b3IoKSB7IH1cbiAgICBwdWJsaWMgYWJzdHJhY3QgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUjtcbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5leHBvcnQgaW50ZXJmYWNlIEV4cHJWaXNpdG9yPFI+IHtcbiAgICB2aXNpdEFzc2lnbkV4cHIoZXhwcjogQXNzaWduKTogUjtcbiAgICB2aXNpdEJhc2VFeHByKGV4cHI6IEJhc2UpOiBSO1xuICAgIHZpc2l0QmluYXJ5RXhwcihleHByOiBCaW5hcnkpOiBSO1xuICAgIHZpc2l0Q2FsbEV4cHIoZXhwcjogQ2FsbCk6IFI7XG4gICAgdmlzaXRDaGFyRXhwcihleHByOiBDaGFyKTogUjtcbiAgICB2aXNpdERlbGV0ZUV4cHIoZXhwcjogRGVsZXRlKTogUjtcbiAgICB2aXNpdERpY3Rpb25hcnlFeHByKGV4cHI6IERpY3Rpb25hcnkpOiBSO1xuICAgIHZpc2l0R2V0RXhwcihleHByOiBHZXQpOiBSO1xuICAgIHZpc2l0R3JvdXBpbmdFeHByKGV4cHI6IEdyb3VwaW5nKTogUjtcbiAgICB2aXNpdEluRXhwcihleHByOiBJbik6IFI7XG4gICAgdmlzaXRJbnN0YW5jZU9mRXhwcihleHByOiBJbnN0YW5jZU9mKTogUjtcbiAgICB2aXNpdElzRXhwcihleHByOiBJcyk6IFI7XG4gICAgdmlzaXRLZXlFeHByKGV4cHI6IEtleSk6IFI7XG4gICAgdmlzaXRMYW1iZGFFeHByKGV4cHI6IExhbWJkYSk6IFI7XG4gICAgdmlzaXRMb2dpY2FsRXhwcihleHByOiBMb2dpY2FsKTogUjtcbiAgICB2aXNpdExpc3RFeHByKGV4cHI6IExpc3QpOiBSO1xuICAgIHZpc2l0TGl0ZXJhbEV4cHIoZXhwcjogTGl0ZXJhbCk6IFI7XG4gICAgdmlzaXROZXdFeHByKGV4cHI6IE5ldyk6IFI7XG4gICAgdmlzaXROdWxsQ29hbGVzY2luZ0V4cHIoZXhwcjogTnVsbENvYWxlc2NpbmcpOiBSO1xuICAgIHZpc2l0UG9zdGZpeEV4cHIoZXhwcjogUG9zdGZpeCk6IFI7XG4gICAgdmlzaXRSYW5nZUV4cHIoZXhwcjogUmFuZ2UpOiBSO1xuICAgIHZpc2l0UmVnRXhFeHByKGV4cHI6IFJlZ0V4KTogUjtcbiAgICB2aXNpdFNldEV4cHIoZXhwcjogU2V0KTogUjtcbiAgICB2aXNpdFNwcmVhZEV4cHIoZXhwcjogU3ByZWFkKTogUjtcbiAgICB2aXNpdFRlbXBsYXRlRXhwcihleHByOiBUZW1wbGF0ZSk6IFI7XG4gICAgdmlzaXRUZXJuYXJ5RXhwcihleHByOiBUZXJuYXJ5KTogUjtcbiAgICB2aXNpdFR5cGVvZkV4cHIoZXhwcjogVHlwZW9mKTogUjtcbiAgICB2aXNpdFVuYXJ5RXhwcihleHByOiBVbmFyeSk6IFI7XG4gICAgdmlzaXRWYXJpYWJsZUV4cHIoZXhwcjogVmFyaWFibGUpOiBSO1xuICAgIHZpc2l0Vm9pZEV4cHIoZXhwcjogVm9pZCk6IFI7XG4gICAgdmlzaXRadHJpbmdFeHByKGV4cHI6IFp0cmluZyk6IFI7XG59XG5cbmV4cG9ydCBjbGFzcyBBc3NpZ24gZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgbmFtZTogVG9rZW47XG4gICAgcHVibGljIHZhbHVlOiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogVG9rZW4sIHZhbHVlOiBFeHByLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRBc3NpZ25FeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuQXNzaWduJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCYXNlIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIHBhcmVuOiBUb2tlbjtcblxuICAgIGNvbnN0cnVjdG9yKHBhcmVuOiBUb2tlbiwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucGFyZW4gPSBwYXJlbjtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0QmFzZUV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5CYXNlJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCaW5hcnkgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgbGVmdDogRXhwcjtcbiAgICBwdWJsaWMgb3BlcmF0b3I6IFRva2VuO1xuICAgIHB1YmxpYyByaWdodDogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKGxlZnQ6IEV4cHIsIG9wZXJhdG9yOiBUb2tlbiwgcmlnaHQ6IEV4cHIsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0QmluYXJ5RXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkJpbmFyeSc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FsbCBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBjYWxsZWU6IEV4cHI7XG4gICAgcHVibGljIHBhcmVuOiBUb2tlbjtcbiAgICBwdWJsaWMgYXJnczogRXhwcltdO1xuICAgIHB1YmxpYyB0aGl6OiAkQW55O1xuXG4gICAgY29uc3RydWN0b3IoY2FsbGVlOiBFeHByLCBwYXJlbjogVG9rZW4sIGFyZ3M6IEV4cHJbXSwgdGhpejogJEFueSwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY2FsbGVlID0gY2FsbGVlO1xuICAgICAgICB0aGlzLnBhcmVuID0gcGFyZW47XG4gICAgICAgIHRoaXMuYXJncyA9IGFyZ3M7XG4gICAgICAgIHRoaXMudGhpeiA9IHRoaXo7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdENhbGxFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuQ2FsbCc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2hhciBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyB2YWx1ZTogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBFeHByLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGFyRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkNoYXInO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZSBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyB2YWx1ZTogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBFeHByLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXREZWxldGVFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuRGVsZXRlJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEaWN0aW9uYXJ5IGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIHByb3BlcnRpZXM6IEV4cHJbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM6IEV4cHJbXSwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdERpY3Rpb25hcnlFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuRGljdGlvbmFyeSc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2V0IGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIGVudGl0eTogRXhwcjtcbiAgICBwdWJsaWMga2V5OiBFeHByO1xuICAgIHB1YmxpYyB0eXBlOiBUb2tlblR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihlbnRpdHk6IEV4cHIsIGtleTogRXhwciwgdHlwZTogVG9rZW5UeXBlLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbnRpdHkgPSBlbnRpdHk7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRHZXRFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuR2V0JztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHcm91cGluZyBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBleHByZXNzaW9uOiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IoZXhwcmVzc2lvbjogRXhwciwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEdyb3VwaW5nRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkdyb3VwaW5nJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbiBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBrZXk6IEV4cHI7XG4gICAgcHVibGljIGVudGl0eTogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKGtleTogRXhwciwgZW50aXR5OiBFeHByLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgICAgIHRoaXMuZW50aXR5ID0gZW50aXR5O1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRJbkV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5Jbic7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW5zdGFuY2VPZiBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyBsZWZ0OiBFeHByO1xuICAgIHB1YmxpYyByaWdodDogVG9rZW47XG5cbiAgICBjb25zdHJ1Y3RvcihsZWZ0OiBFeHByLCByaWdodDogVG9rZW4sIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEluc3RhbmNlT2ZFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuSW5zdGFuY2VPZic7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSXMgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgbGVmdDogRXhwcjtcbiAgICBwdWJsaWMgcmlnaHQ6IFRva2VuO1xuXG4gICAgY29uc3RydWN0b3IobGVmdDogRXhwciwgcmlnaHQ6IFRva2VuLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRJc0V4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5Jcyc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2V5IGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIG5hbWU6IFRva2VuO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogVG9rZW4sIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRLZXlFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuS2V5JztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMYW1iZGEgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgbGFtYmRhOiBTdG10O1xuXG4gICAgY29uc3RydWN0b3IobGFtYmRhOiBTdG10LCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5sYW1iZGEgPSBsYW1iZGE7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdExhbWJkYUV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5MYW1iZGEnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvZ2ljYWwgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgbGVmdDogRXhwcjtcbiAgICBwdWJsaWMgb3BlcmF0b3I6IFRva2VuO1xuICAgIHB1YmxpYyByaWdodDogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKGxlZnQ6IEV4cHIsIG9wZXJhdG9yOiBUb2tlbiwgcmlnaHQ6IEV4cHIsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TG9naWNhbEV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5Mb2dpY2FsJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXN0IGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIHZhbHVlOiBFeHByW107XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogRXhwcltdLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRMaXN0RXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLkxpc3QnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdGVyYWwgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgdmFsdWU6ICRBbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogJEFueSwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TGl0ZXJhbEV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5MaXRlcmFsJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOZXcgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgY2xheno6IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihjbGF6ejogRXhwciwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY2xhenogPSBjbGF6ejtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TmV3RXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLk5ldyc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTnVsbENvYWxlc2NpbmcgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgbGVmdDogRXhwcjtcbiAgICBwdWJsaWMgcmlnaHQ6IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihsZWZ0OiBFeHByLCByaWdodDogRXhwciwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TnVsbENvYWxlc2NpbmdFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuTnVsbENvYWxlc2NpbmcnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBvc3RmaXggZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgbmFtZTogVG9rZW47XG4gICAgcHVibGljIGluY3JlbWVudDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogVG9rZW4sIGluY3JlbWVudDogbnVtYmVyLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pbmNyZW1lbnQgPSBpbmNyZW1lbnQ7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFBvc3RmaXhFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuUG9zdGZpeCc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmFuZ2UgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgc3RhcnQ6IEV4cHI7XG4gICAgcHVibGljIGVuZDogRXhwcjtcbiAgICBwdWJsaWMgc3RlcDogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKHN0YXJ0OiBFeHByLCBlbmQ6IEV4cHIsIHN0ZXA6IEV4cHIsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgIHRoaXMuZW5kID0gZW5kO1xuICAgICAgICB0aGlzLnN0ZXAgPSBzdGVwO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRSYW5nZUV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5SYW5nZSc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVnRXggZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgdmFsdWU6IFJlZ0V4cDtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBSZWdFeHAsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFJlZ0V4RXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLlJlZ0V4JztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXQgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgZW50aXR5OiBFeHByO1xuICAgIHB1YmxpYyBrZXk6IEV4cHI7XG4gICAgcHVibGljIHZhbHVlOiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IoZW50aXR5OiBFeHByLCBrZXk6IEV4cHIsIHZhbHVlOiBFeHByLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbnRpdHkgPSBlbnRpdHk7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBFeHByVmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFNldEV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5TZXQnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNwcmVhZCBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyB2YWx1ZTogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBFeHByLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRTcHJlYWRFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuU3ByZWFkJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZSBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyB2YWx1ZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZywgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VGVtcGxhdGVFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuVGVtcGxhdGUnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRlcm5hcnkgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgY29uZGl0aW9uOiBFeHByO1xuICAgIHB1YmxpYyB0aGVuRXhwcjogRXhwcjtcbiAgICBwdWJsaWMgZWxzZUV4cHI6IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25kaXRpb246IEV4cHIsIHRoZW5FeHByOiBFeHByLCBlbHNlRXhwcjogRXhwciwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgICAgICB0aGlzLnRoZW5FeHByID0gdGhlbkV4cHI7XG4gICAgICAgIHRoaXMuZWxzZUV4cHIgPSBlbHNlRXhwcjtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VGVybmFyeUV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5UZXJuYXJ5JztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlb2YgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgdmFsdWU6IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogRXhwciwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VHlwZW9mRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLlR5cGVvZic7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVW5hcnkgZXh0ZW5kcyBFeHByIHtcbiAgICBwdWJsaWMgb3BlcmF0b3I6IFRva2VuO1xuICAgIHB1YmxpYyByaWdodDogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKG9wZXJhdG9yOiBUb2tlbiwgcmlnaHQ6IEV4cHIsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VW5hcnlFeHByKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0V4cHIuVW5hcnknO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZhcmlhYmxlIGV4dGVuZHMgRXhwciB7XG4gICAgcHVibGljIG5hbWU6IFRva2VuO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogVG9rZW4sIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRWYXJpYWJsZUV4cHIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnRXhwci5WYXJpYWJsZSc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVm9pZCBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyB2YWx1ZTogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBFeHByLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogRXhwclZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRWb2lkRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLlZvaWQnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFp0cmluZyBleHRlbmRzIEV4cHIge1xuICAgIHB1YmxpYyB2YWx1ZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZywgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0WnRyaW5nRXhwcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdFeHByLlp0cmluZyc7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgKiBhcyBTdG10IGZyb20gXCIuL3N0YXRlbWVudFwiO1xuaW1wb3J0IHsgJEFueSB9IGZyb20gXCIuL2FueVwiO1xuaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gXCIuLi9jb25zb2xlXCI7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gXCIuL3R5cGUuZW51bVwiO1xuaW1wb3J0IHsgSW50ZXJwcmV0ZXIgfSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXJcIjtcbmltcG9ydCB7IFNjb3BlIH0gZnJvbSBcIi4uL3Njb3BlXCI7XG5pbXBvcnQgeyAkTnVsbCB9IGZyb20gXCIuL251bGxcIjtcbmRlY2xhcmUgdmFyIGNvbnpvbGU6IENvbnNvbGU7XG5cbmV4cG9ydCB0eXBlIEZ1bmN0aW9uQ2FsbCA9IChcbiAgICB0aGl6OiAkQW55LFxuICAgIGFyZ3M6ICRBbnlbXSxcbiAgICBpbnRlcnByZXRlcjogSW50ZXJwcmV0ZXJcbikgPT4gJEFueTtcblxuZXhwb3J0IGNsYXNzICRDYWxsYWJsZSBleHRlbmRzICRBbnkge1xuICAgIHB1YmxpYyB2YWx1ZTogRnVuY3Rpb25DYWxsO1xuICAgIHB1YmxpYyBhcml0eTogbnVtYmVyO1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGFyaXR5OiBudW1iZXIsIHZhbHVlOiBGdW5jdGlvbkNhbGwpIHtcbiAgICAgICAgc3VwZXIodmFsdWUsIERhdGFUeXBlLkZ1bmN0aW9uKTtcbiAgICAgICAgdGhpcy5hcml0eSA9IGFyaXR5O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBjYWxsKHRoaXo6IGFueSwgYXJnczogYW55W10sIGludGVycHJldGVyOiBJbnRlcnByZXRlcik6ICRBbnkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSh0aGl6LCBhcmdzLCBpbnRlcnByZXRlcik7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgPCR7dGhpcy5uYW1lfSAgZnVuY3Rpb24+YDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyAkRnVuY3Rpb24gZXh0ZW5kcyAkQ2FsbGFibGUge1xuICAgIHB1YmxpYyBkZWNsYXJhdGlvbjogU3RtdC5GdW5jO1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBjbG9zdXJlOiBTY29wZTtcblxuICAgIGNvbnN0cnVjdG9yKGRlY2xhcmF0aW9uOiBTdG10LkZ1bmMsIGNsb3N1cmU6IFNjb3BlKSB7XG4gICAgICAgIHN1cGVyKGRlY2xhcmF0aW9uLm5hbWUubGV4ZW1lLCBkZWNsYXJhdGlvbi5wYXJhbXMubGVuZ3RoLCBudWxsKTtcbiAgICAgICAgdGhpcy5kZWNsYXJhdGlvbiA9IGRlY2xhcmF0aW9uO1xuICAgICAgICB0aGlzLmNsb3N1cmUgPSBjbG9zdXJlO1xuICAgIH1cblxuICAgIHB1YmxpYyBjYWxsKHRoaXo6IGFueSwgYXJnczogYW55W10sIGludGVycHJldGVyOiBJbnRlcnByZXRlcik6ICRBbnkge1xuICAgICAgICBjb25zdCBzY29wZSA9IG5ldyBTY29wZSh0aGlzLmNsb3N1cmUpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGVjbGFyYXRpb24ucGFyYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzY29wZS5kZWZpbmUodGhpcy5kZWNsYXJhdGlvbi5wYXJhbXNbaV0ubGV4ZW1lLCBhcmdzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBzY29wZS5zZXQoXCJ0aGlzXCIsIHRoaXopO1xuICAgICAgICBsZXQgcmVzdG9yZVNjb3BlOiBTY29wZSA9IG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN0b3JlU2NvcGUgPSBpbnRlcnByZXRlci5zY29wZTtcbiAgICAgICAgICAgIGludGVycHJldGVyLmV4ZWN1dGVCbG9jayh0aGlzLmRlY2xhcmF0aW9uLmJvZHksIHNjb3BlKTtcbiAgICAgICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mICRBbnkgJiYgZS50eXBlID09PSBEYXRhVHlwZS5SZXR1cm4pIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdG9yZVNjb3BlKSB7XG4gICAgICAgICAgICAgICAgICAgIGludGVycHJldGVyLnNjb3BlID0gcmVzdG9yZVNjb3BlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZS52YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3ICROdWxsKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tIFwiLi90eXBlLmVudW1cIjtcbmltcG9ydCB7ICRBbnkgfSBmcm9tIFwiLi9hbnlcIjtcbmltcG9ydCB7IEludGVycHJldGVyIH0gZnJvbSBcIi4uL2ludGVycHJldGVyXCI7XG5pbXBvcnQgeyAkRGljdGlvbmFyeSB9IGZyb20gXCIuL2RpY3Rpb25hcnlcIjtcbmltcG9ydCB7ICROdWxsIH0gZnJvbSBcIi4vbnVsbFwiO1xuaW1wb3J0IHsgJENhbGxhYmxlIH0gZnJvbSBcIi4vZnVuY3Rpb25cIjtcbmltcG9ydCB7ICRMaXN0IH0gZnJvbSBcIi4vbGlzdFwiO1xuaW1wb3J0IHsgJEJvb2xlYW4gfSBmcm9tIFwiLi9ib29sZWFuXCI7XG5pbXBvcnQgeyAkTnVtYmVyIH0gZnJvbSBcIi4vbnVtYmVyXCI7XG5pbXBvcnQgeyAkU3RyaW5nIH0gZnJvbSBcIi4vc3RyaW5nXCI7XG5pbXBvcnQgeyAkUmFuZ2UsIFJhbmdlVmFsdWUgfSBmcm9tIFwiLi9yYW5nZVwiO1xuXG5leHBvcnQgY2xhc3MgSXRlcmF0b3JWYWx1ZSB7XG4gICAgcHVibGljIHZhbHVlOiAkQW55O1xuICAgIHB1YmxpYyBpbmRleDogJEFueTtcbiAgICBwdWJsaWMgZG9uZTogJEFueTtcbiAgICBwdWJsaWMgaW5uZXI6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiAkQW55LCBpbmRleDogJEFueSwgZG9uZTogJEFueSwgaW5uZXI6IGFueSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5kb25lID0gZG9uZTtcbiAgICAgICAgdGhpcy5pbm5lciA9IGlubmVyO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzICRJdGVyYXRvciBleHRlbmRzICRBbnkge1xuICAgIHB1YmxpYyB2YWx1ZTogJEFueTtcbiAgICBwdWJsaWMgaXRlcjogSXRlcmF0b3JWYWx1ZTtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiAkQW55KSB7XG4gICAgICAgIHN1cGVyKHZhbHVlLCBEYXRhVHlwZS5SZWdFeHApO1xuICAgICAgICB0aGlzLml0ZXIgPSBuZXcgSXRlcmF0b3JWYWx1ZShcbiAgICAgICAgICAgIG5ldyAkTnVsbCgpLFxuICAgICAgICAgICAgbmV3ICROdWxsKCksXG4gICAgICAgICAgICBuZXcgJEJvb2xlYW4oZmFsc2UpLFxuICAgICAgICAgICAgbnVsbFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQoa2V5OiAkQW55KTogJEFueSB7XG4gICAgICAgIGlmIChrZXkudmFsdWUgPT09IFwia2V5XCIgfHwga2V5LnZhbHVlID09PSBcImluZGV4XCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZXIuaW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleS52YWx1ZSA9PT0gXCJkb25lXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZXIuZG9uZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5LnZhbHVlID09PSBcInZhbHVlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZXIudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCRJdGVyYXRvci5ydW50aW1lLmhhcyhrZXkudmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gJEl0ZXJhdG9yLnJ1bnRpbWUuZ2V0KGtleS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21wbGV0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVyLmRvbmUgPSBuZXcgJEJvb2xlYW4odHJ1ZSk7XG4gICAgICAgIHRoaXMuaXRlci52YWx1ZSA9IG5ldyAkTnVsbCgpO1xuICAgICAgICB0aGlzLml0ZXIuaW5kZXggPSBuZXcgJE51bGwoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0KGtleTogJEFueSwgdmFsdWU6ICRBbnkpOiAkQW55IHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLml0ZXJba2V5LnZhbHVlIGFzIG5ldmVyXSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgKHRoaXMuaXRlcltrZXkudmFsdWUgYXMgbmV2ZXJdIGFzICRBbnkpID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYDwke0RhdGFUeXBlW3RoaXMudmFsdWUudHlwZV19IGl0ZXJhdG9yPmA7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBuZXh0KFxuICAgICAgICB0aGl6OiAkQW55LFxuICAgICAgICBhcmdzOiAkQW55W10sXG4gICAgICAgIGludGVycHJldGVyOiBJbnRlcnByZXRlclxuICAgICk6ICRBbnkge1xuICAgICAgICBjb25zdCBpdCA9IHRoaXogYXMgJEl0ZXJhdG9yO1xuXG4gICAgICAgIC8vIGFscmVhZHkgaXRlcmF0ZWQsIHJldHVybiBjb21wbGV0ZWQgaXRlcmF0b3JcbiAgICAgICAgaWYgKGl0Lml0ZXIuZG9uZS52YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGl0LnZhbHVlLmlzTGlzdCgpKSB7XG4gICAgICAgICAgICAkSXRlcmF0b3IubGlzdE5leHQodGhpeik7XG4gICAgICAgICAgICByZXR1cm4gaXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXQudmFsdWUuaXNEaWN0aW9uYXJ5KCkpIHtcbiAgICAgICAgICAgICRJdGVyYXRvci5kaWN0aW9uYXJ5TmV4dCh0aGl6KTtcbiAgICAgICAgICAgIHJldHVybiBpdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdC52YWx1ZS5pc1N0cmluZygpKSB7XG4gICAgICAgICAgICAkSXRlcmF0b3Iuc3RyaW5nTmV4dCh0aGl6KTtcbiAgICAgICAgICAgIHJldHVybiBpdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdC52YWx1ZS5pc051bWJlcigpKSB7XG4gICAgICAgICAgICAkSXRlcmF0b3IubnVtYmVyTmV4dCh0aGl6KTtcbiAgICAgICAgICAgIHJldHVybiBpdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdC52YWx1ZS5pc1JhbmdlKCkpIHtcbiAgICAgICAgICAgICRJdGVyYXRvci5yYW5nZU5leHQodGhpeik7XG4gICAgICAgICAgICByZXR1cm4gaXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXQudmFsdWUuaXNPYmplY3QoKSkge1xuICAgICAgICAgICAgKHRoaXoudmFsdWUuZ2V0KGludGVycHJldGVyLnN0cmluZ3MubmV4dCkgYXMgJENhbGxhYmxlKS5jYWxsKFxuICAgICAgICAgICAgICAgIHRoaXoudmFsdWUsXG4gICAgICAgICAgICAgICAgW3RoaXogYXMgJEl0ZXJhdG9yXSxcbiAgICAgICAgICAgICAgICBpbnRlcnByZXRlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBpdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRlZmF1bHRcbiAgICAgICAgaW50ZXJwcmV0ZXIuZXJyb3IoXG4gICAgICAgICAgICBgJHtEYXRhVHlwZVtpdC52YWx1ZS50eXBlXS50b0xvd2VyQ2FzZSgpfSB3aXRoIHZhbHVlICR7XG4gICAgICAgICAgICAgICAgaXQudmFsdWVcbiAgICAgICAgICAgIH0gaXMgbm90IGFuIGl0ZXJhYmxlYFxuICAgICAgICApO1xuICAgICAgICBpdC5jb21wbGV0ZSgpO1xuICAgICAgICByZXR1cm4gaXQ7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBsaXN0TmV4dCh0aGl6OiAkQW55KSB7XG4gICAgICAgIGNvbnN0IGl0ID0gdGhpeiBhcyAkSXRlcmF0b3I7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBpdC52YWx1ZSBhcyAkTGlzdDtcbiAgICAgICAgY29uc3QgaW5kZXggPSBpdC5pdGVyLmluZGV4O1xuXG4gICAgICAgIC8vIGxpc3QgaXMgZW1wdHksIG5vIGl0ZXJhdGlvbiByZXF1aXJlZFxuICAgICAgICBpZiAoIWxpc3QudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpdC5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGl0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmlyc3QgdmFsdWVcbiAgICAgICAgaWYgKGl0Lml0ZXIuaW5uZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGl0Lml0ZXIuaW5uZXIgPSB0cnVlO1xuICAgICAgICAgICAgaXQuaXRlci5pbmRleCA9IG5ldyAkTnVtYmVyKDApO1xuICAgICAgICAgICAgaXQuaXRlci52YWx1ZSA9IGxpc3QudmFsdWVbMF07XG4gICAgICAgICAgICByZXR1cm4gaXQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBubyBtb3JlIHZhbHVlcyB0byBpdGVyYXRlXG4gICAgICAgIGlmIChpbmRleC52YWx1ZSA+PSBsaXN0LnZhbHVlLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGl0LmNvbXBsZXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gaXQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBub3JtYWwgaXRlcmF0aW9uXG4gICAgICAgIGNvbnN0IG5ld0luZGV4ID0gaW5kZXgudmFsdWUgKyAxO1xuICAgICAgICBpdC5pdGVyLmluZGV4ID0gbmV3ICROdW1iZXIobmV3SW5kZXgpO1xuICAgICAgICBpdC5pdGVyLnZhbHVlID0gbGlzdC52YWx1ZVtuZXdJbmRleF07XG4gICAgICAgIHJldHVybiBpdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHN0cmluZ05leHQodGhpejogJEFueSkge1xuICAgICAgICBjb25zdCBpdCA9IHRoaXogYXMgJEl0ZXJhdG9yO1xuICAgICAgICBjb25zdCBzdHIgPSBpdC52YWx1ZSBhcyAkU3RyaW5nO1xuICAgICAgICBjb25zdCBpbmRleCA9IGl0Lml0ZXIuaW5kZXg7XG5cbiAgICAgICAgLy8gc3RyaW5nIGlzIGVtcHR5XG4gICAgICAgIGlmICghc3RyLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgaXQuY29tcGxldGUoKTtcbiAgICAgICAgICAgIHJldHVybiBpdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZpcnN0IHZhbHVlXG4gICAgICAgIGlmIChpdC5pdGVyLmlubmVyID09PSBudWxsKSB7XG4gICAgICAgICAgICBpdC5pdGVyLmlubmVyID0gdHJ1ZTtcbiAgICAgICAgICAgIGl0Lml0ZXIuaW5kZXggPSBuZXcgJE51bWJlcigwKTtcbiAgICAgICAgICAgIGl0Lml0ZXIudmFsdWUgPSBuZXcgJFN0cmluZyhzdHIudmFsdWUuY2hhckF0KDApKTtcbiAgICAgICAgICAgIHJldHVybiBpdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG5vIG1vcmUgdmFsdWVzIHRvIGl0ZXJhdGVcbiAgICAgICAgaWYgKGluZGV4LnZhbHVlID49IHN0ci52YWx1ZS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBpdC5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGl0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbm9ybWFsIGl0ZXJhdGlvblxuICAgICAgICBjb25zdCBuZXdJbmRleCA9IGluZGV4LnZhbHVlICsgMTtcbiAgICAgICAgaXQuaXRlci5pbmRleCA9IG5ldyAkTnVtYmVyKG5ld0luZGV4KTtcbiAgICAgICAgaXQuaXRlci52YWx1ZSA9IG5ldyAkU3RyaW5nKHN0ci52YWx1ZS5jaGFyQXQobmV3SW5kZXgpKTtcbiAgICAgICAgcmV0dXJuIGl0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgbnVtYmVyTmV4dCh0aGl6OiAkQW55KSB7XG4gICAgICAgIGNvbnN0IGl0ID0gdGhpeiBhcyAkSXRlcmF0b3I7XG4gICAgICAgIGNvbnN0IG51bWJlciA9IGl0LnZhbHVlIGFzICROdW1iZXI7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaXQuaXRlci5pbmRleDtcblxuICAgICAgICAvLyBudW1iZXIgaXMgMCBvciBuZWdhdGl2ZVxuICAgICAgICBpZiAobnVtYmVyLnZhbHVlIDw9IDApIHtcbiAgICAgICAgICAgIGl0LmNvbXBsZXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gaXQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmaXJzdCB2YWx1ZVxuICAgICAgICBpZiAoaXQuaXRlci5pbm5lciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgaXQuaXRlci5pbm5lciA9IG51bWJlci52YWx1ZSAtIDE7IC8vaW5uZXIgaG9sZHMgbGFzdCB2YWx1ZVxuICAgICAgICAgICAgaXQuaXRlci5pbmRleCA9IG5ldyAkTnVtYmVyKDApO1xuICAgICAgICAgICAgaXQuaXRlci52YWx1ZSA9IGl0Lml0ZXIuaW5kZXg7XG4gICAgICAgICAgICByZXR1cm4gaXQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBubyBtb3JlIHZhbHVlcyB0byBpdGVyYXRlXG4gICAgICAgIGlmIChpbmRleC52YWx1ZSA+PSBpdC5pdGVyLmlubmVyKSB7XG4gICAgICAgICAgICBpdC5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGl0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbm9ybWFsIGl0ZXJhdGlvblxuICAgICAgICBjb25zdCBuZXdJbmRleCA9IGluZGV4LnZhbHVlICsgMTtcbiAgICAgICAgaXQuaXRlci5pbmRleCA9IG5ldyAkTnVtYmVyKG5ld0luZGV4KTtcbiAgICAgICAgaXQuaXRlci52YWx1ZSA9IGl0Lml0ZXIuaW5kZXg7XG4gICAgICAgIHJldHVybiBpdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHJhbmdlTmV4dCh0aGl6OiAkQW55KSB7XG4gICAgICAgIGNvbnN0IGl0ID0gdGhpeiBhcyAkSXRlcmF0b3I7XG4gICAgICAgIGNvbnN0IHJhbmdlID0gaXQudmFsdWUgYXMgJFJhbmdlO1xuICAgICAgICBjb25zdCB2YWx1ZTogUmFuZ2VWYWx1ZSA9IHJhbmdlLnZhbHVlO1xuXG4gICAgICAgIC8vIGltcG9zaWJsZSByYW5nZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB2YWx1ZS5zdGVwID09PSAwIHx8XG4gICAgICAgICAgICAodmFsdWUuc3RhcnQgPiB2YWx1ZS5lbmQgJiYgdmFsdWUuc3RlcCA+IDApIHx8XG4gICAgICAgICAgICAodmFsdWUuc3RhcnQgPCB2YWx1ZS5lbmQgJiYgdmFsdWUuc3RlcCA8IDApXG4gICAgICAgICkge1xuICAgICAgICAgICAgaXQuY29tcGxldGUoKTtcbiAgICAgICAgICAgIHJldHVybiBpdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZpcnN0IHZhbHVlXG4gICAgICAgIGlmIChpdC5pdGVyLmlubmVyID09PSBudWxsKSB7XG4gICAgICAgICAgICBpdC5pdGVyLmlubmVyID0gdHJ1ZTtcbiAgICAgICAgICAgIGl0Lml0ZXIuaW5kZXggPSBuZXcgJE51bWJlcigwKTtcbiAgICAgICAgICAgIGl0Lml0ZXIudmFsdWUgPSBuZXcgJE51bWJlcih2YWx1ZS5zdGFydCk7XG4gICAgICAgICAgICByZXR1cm4gaXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUuc3RlcCA+IDApIHtcbiAgICAgICAgICAgIGlmIChpdC5pdGVyLnZhbHVlLnZhbHVlID49IHZhbHVlLmVuZCkge1xuICAgICAgICAgICAgICAgIGl0LmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGl0Lml0ZXIudmFsdWUudmFsdWUgPD0gdmFsdWUuZW5kKSB7XG4gICAgICAgICAgICAgICAgaXQuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBub3JtYWwgaXRlcmF0aW9uXG4gICAgICAgIGNvbnN0IG5ld0luZGV4ID0gaXQuaXRlci5pbmRleC52YWx1ZSArIDE7XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gaXQuaXRlci52YWx1ZS52YWx1ZSArIHZhbHVlLnN0ZXA7XG4gICAgICAgIGl0Lml0ZXIuaW5kZXggPSBuZXcgJE51bWJlcihuZXdJbmRleCk7XG4gICAgICAgIGl0Lml0ZXIudmFsdWUgPSBuZXcgJE51bWJlcihuZXdWYWx1ZSk7XG4gICAgICAgIHJldHVybiBpdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGRpY3Rpb25hcnlOZXh0KHRoaXo6ICRBbnkpOiAkQW55IHtcbiAgICAgICAgY29uc3QgaXQgPSB0aGl6IGFzICRJdGVyYXRvcjtcbiAgICAgICAgY29uc3QgZGljdCA9IGl0LnZhbHVlIGFzICREaWN0aW9uYXJ5O1xuXG4gICAgICAgIC8vIGVtcHR5IGRpY3Rpb25hcnlcbiAgICAgICAgaWYgKCFkaWN0LnZhbHVlLnNpemUpIHtcbiAgICAgICAgICAgIGl0LmNvbXBsZXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gaXQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmaXJzdCB2YWx1ZVxuICAgICAgICBpZiAoaXQuaXRlci5pbm5lciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgaXQuaXRlci5pbm5lciA9IGRpY3QudmFsdWUua2V5cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbm9ybWFsIGl0ZXJhdGlvblxuICAgICAgICBjb25zdCBjdXJyZW50ID0gaXQuaXRlci5pbm5lci5uZXh0KCk7XG4gICAgICAgIGl0Lml0ZXIudmFsdWUgPSBpdC52YWx1ZS5nZXQobmV3ICRBbnkoY3VycmVudC52YWx1ZSkpO1xuICAgICAgICBpdC5pdGVyLmluZGV4ID0gbmV3ICRTdHJpbmcoY3VycmVudC52YWx1ZSk7XG5cbiAgICAgICAgLy8gbm8gbW9yZSB2YWx1ZXMgdG8gaXRlcmF0ZVxuICAgICAgICBpZiAoY3VycmVudC5kb25lKSB7XG4gICAgICAgICAgICBpdC5jb21wbGV0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZmlyc3QoXG4gICAgICAgIHRoaXo6ICRBbnksXG4gICAgICAgIGFyZ3M6ICRBbnlbXSxcbiAgICAgICAgaW50ZXJwcmV0ZXI6IEludGVycHJldGVyXG4gICAgKTogJEFueSB7XG4gICAgICAgIGlmICgodGhpeiBhcyAkSXRlcmF0b3IpLnZhbHVlLnZhbHVlLmlzTGlzdCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3ICREaWN0aW9uYXJ5KFxuICAgICAgICAgICAgICAgIG5ldyBNYXAoW1xuICAgICAgICAgICAgICAgICAgICBbXCJrZXlcIiwgMF0sXG4gICAgICAgICAgICAgICAgICAgIFtcInZhbHVlXCIsIHRoaXoudmFsdWUudmFsdWVbMF1dLFxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgJE51bGwoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHJ1bnRpbWUgPSBuZXcgTWFwKFtcbiAgICAgICAgW1wiZmlyc3RcIiwgbmV3ICRDYWxsYWJsZShcImZpcnN0XCIsIDAsICRJdGVyYXRvci5maXJzdCldLFxuICAgICAgICBbXCJuZXh0XCIsIG5ldyAkQ2FsbGFibGUoXCJuZXh0XCIsIDAsICRJdGVyYXRvci5uZXh0KV0sXG4gICAgXSk7XG59XG4iLCJpbXBvcnQgeyBmcm9tSmF2YVNjcmlwdE1ldGhvZCB9IGZyb20gJy4uL3J1bnRpbWUnO1xuaW1wb3J0IHsgSW50ZXJwcmV0ZXIgfSBmcm9tICcuLi9pbnRlcnByZXRlcic7XG5pbXBvcnQgeyAkQW55IH0gZnJvbSAnLi9hbnknO1xuaW1wb3J0IHsgJEZ1bmN0aW9uLCAkQ2FsbGFibGUgfSBmcm9tICcuL2Z1bmN0aW9uJztcbmltcG9ydCB7ICROdWxsIH0gZnJvbSAnLi9udWxsJztcbmltcG9ydCB7ICROdW1iZXIgfSBmcm9tICcuL251bWJlcic7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vdHlwZS5lbnVtJztcbmltcG9ydCB7ICRSYW5nZSB9IGZyb20gJy4vcmFuZ2UnO1xuXG5leHBvcnQgY2xhc3MgJExpc3QgZXh0ZW5kcyAkQW55IHtcbiAgICBwdWJsaWMgdmFsdWU6ICRBbnlbXTtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiAkQW55W10pIHtcbiAgICAgICAgc3VwZXIodmFsdWUsIERhdGFUeXBlLkxpc3QpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQoa2V5OiAkQW55KTogJEFueSB7XG4gICAgICAgIGlmIChrZXkuaXNOdW1iZXIoKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnZhbHVlW2tleS52YWx1ZV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVba2V5LnZhbHVlXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGtleS5pc1JhbmdlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJhbmdlKDwkUmFuZ2U+IGtleSk7XG4gICAgICAgIH0gZWxzZSBpZiAoJExpc3QucnVudGltZS5oYXMoa2V5LnZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuICRMaXN0LnJ1bnRpbWUuZ2V0KGtleS52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3ICROdWxsKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHB1YmxpYyBzZXQoa2V5OiAkQW55LCB2YWx1ZTogJEFueSk6ICRBbnkge1xuICAgICAgICBpZiAoa2V5LmlzTnVtYmVyKCkpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVba2V5LnZhbHVlXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJhbmdlKHJhbmdlOiAkUmFuZ2UpOiAkTGlzdCB7XG4gICAgICAgIGNvbnN0IHJlc3VsdDogJEFueVtdID0gW107XG4gICAgICAgIHJhbmdlLml0ZXJhdGUodGhpcy52YWx1ZS5sZW5ndGgsIChpKSA9PiB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLnZhbHVlW2ldKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXcgJExpc3QocmVzdWx0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBbJHt0aGlzLnZhbHVlLmpvaW4oJywnKX1dYDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNpemUodGhpejogJEFueSwgYXJnczogJEFueVtdKTogJEFueSB7XG4gICAgICAgIHJldHVybiBuZXcgJE51bWJlcihhcmdzWzBdLnZhbHVlLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBlYWNoKHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSwgaW50ZXJwcmV0ZXI6IEludGVycHJldGVyKTogJEFueSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpei52YWx1ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgKGFyZ3NbMF0gYXMgJEZ1bmN0aW9uKS5jYWxsKHRoaXosIFt0aGl6LnZhbHVlW2ldLCBuZXcgJE51bWJlcihpKSwgdGhpel0sIGludGVycHJldGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpejtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNvcnQodGhpejogJEFueSwgYXJnczogJEFueVtdLCBpbnRlcnByZXRlcjogSW50ZXJwcmV0ZXIpOiAkQW55IHtcbiAgICAgICAgY29uc3QgbGlzdCA9IHRoaXoudmFsdWUgYXMgJEFueVtdO1xuICAgICAgICBpZiAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxpc3Quc29ydCgoYSwgYikgPT5cbiAgICAgICAgICAgICAgICAoYXJnc1swXSBhcyAkRnVuY3Rpb24pLmNhbGwodGhpeiwgW2EsIGJdLCBpbnRlcnByZXRlcikudmFsdWVcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0LnNvcnQoKGEsIGIpID0+XG4gICAgICAgICAgICAgICBhLnZhbHVlIC0gYi52YWx1ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpejtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIG1hcCh0aGl6OiAkQW55LCBhcmdzOiAkQW55W10sIGludGVycHJldGVyOiBJbnRlcnByZXRlcik6ICRBbnkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXoudmFsdWUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHRoaXoudmFsdWVbaV0gPSAoYXJnc1swXSBhcyAkRnVuY3Rpb24pLmNhbGwodGhpeiwgW25ldyAkQW55KHRoaXoudmFsdWVbaV0pLCBuZXcgJE51bWJlcihpKSwgdGhpel0sIGludGVycHJldGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpejtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHJ1bnRpbWUgPSAgbmV3IE1hcChbXG4gICAgICAgIFsnY29uY2F0JywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ2NvbmNhdCcsIC0xLCBEYXRhVHlwZS5MaXN0KV0sXG4gICAgICAgIFsnZWFjaCcsIG5ldyAkQ2FsbGFibGUoJ2VhY2gnLCAxLCAkTGlzdC5lYWNoKV0sXG4gICAgICAgIFsnc29ydCcsIG5ldyAkQ2FsbGFibGUoJ3NvcnQnLCAtMSwgJExpc3Quc29ydCldLFxuICAgICAgICBbJ2luY2x1ZGVzJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ2luY2x1ZGVzJywgMSwgRGF0YVR5cGUuQm9vbGVhbildLFxuICAgICAgICBbJ2luZGV4T2YnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgnaW5kZXhPZicsIDEsIERhdGFUeXBlLk51bWJlcildLFxuICAgICAgICBbJ2pvaW4nLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgnam9pbicsIDEsIERhdGFUeXBlLlN0cmluZyldLFxuICAgICAgICBbJ2xhc3RJbmRleE9mJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ2xhc3RJbmRleE9mJywgMSwgRGF0YVR5cGUuTnVtYmVyKV0sXG4gICAgICAgIFsnbWFwJywgbmV3ICRDYWxsYWJsZSgnbWFwJywgMSwgJExpc3QubWFwKV0sXG4gICAgICAgIFsncG9wJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ3BvcCcsIDAsIERhdGFUeXBlLkxpc3QpXSxcbiAgICAgICAgWydwdXNoJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ3B1c2gnLCAtMSwgRGF0YVR5cGUuTGlzdCldLFxuICAgICAgICBbJ3NoaWZ0JywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ3NoaWZ0JywgMCwgRGF0YVR5cGUuTGlzdCldLFxuICAgICAgICBbJ3NpemUnLCBuZXcgJENhbGxhYmxlKCdzaXplJywgMCwgICh0aGl6OiAkQW55LCBhcmdzOiAkQW55W10pOiAkQW55ID0+IG5ldyAkTnVtYmVyKHRoaXoudmFsdWUubGVuZ3RoKSldLFxuICAgICAgICBbJ3NsaWNlJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ3NsaWNlJywgLTEsIERhdGFUeXBlLkxpc3QpXSxcbiAgICAgICAgWydzcGxpY2UnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgnc3BsaWNlJywgLTEsIERhdGFUeXBlLkxpc3QpXSxcbiAgICAgICAgWyd1bnNoaWZ0JywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ3Vuc2hpZnQnLCAtMSwgRGF0YVR5cGUuTGlzdCldXG4gICAgXSk7XG5cbn1cbiIsImltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi90eXBlLmVudW0nO1xuaW1wb3J0IHsgJEFueSB9IGZyb20gJy4vYW55JztcblxuZXhwb3J0IGNsYXNzICROdWxsIGV4dGVuZHMgJEFueSB7XG5cbiAgICBwdWJsaWMgdmFsdWU6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIobnVsbCk7XG4gICAgICAgIHRoaXMudHlwZSA9IERhdGFUeXBlLk51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gJ251bGwnO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGUuZW51bSc7XG5pbXBvcnQgeyAkQW55IH0gZnJvbSAnLi9hbnknO1xuXG5leHBvcnQgY2xhc3MgJE51bWJlciBleHRlbmRzICRBbnkge1xuXG4gICAgcHVibGljIHZhbHVlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKHZhbHVlLCBEYXRhVHlwZS5OdW1iZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS50b1N0cmluZygpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGUuZW51bSc7XG5pbXBvcnQgeyAkQW55IH0gZnJvbSAnLi9hbnknO1xuaW1wb3J0IHsgJE51bGwgfSBmcm9tICcuL251bGwnO1xuaW1wb3J0IHsgJENsYXNzIH0gZnJvbSAnLi9jbGFzcyc7XG5pbXBvcnQgeyAkQm9vbGVhbiB9IGZyb20gJy4vYm9vbGVhbic7XG5cbmV4cG9ydCBjbGFzcyAkT2JqZWN0IGV4dGVuZHMgJEFueSB7XG4gICAgcHVibGljIHZhbHVlOiBNYXA8c3RyaW5nLCAkQW55PjtcbiAgICBwdWJsaWMgY29uenRydWN0b3I6ICRBbnk7XG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBNYXA8c3RyaW5nLCAkQW55PiwgY29uenRydWN0b3I6ICRBbnkpIHtcbiAgICAgICAgc3VwZXIodmFsdWUsIERhdGFUeXBlLk9iamVjdCk7XG4gICAgICAgIHRoaXMuY29uenRydWN0b3IgPSBjb256dHJ1Y3RvcjtcbiAgICAgICAgdGhpcy5uYW1lID0gKGNvbnp0cnVjdG9yIGFzICRDbGFzcykubmFtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0KGtleTogJEFueSk6ICRBbnkge1xuICAgICAgICBjb25zdCBtZXRob2QgPSB0aGlzLmNvbnp0cnVjdG9yLmdldChrZXkpO1xuXG4gICAgICAgIGlmIChtZXRob2QuaXNGdW5jdGlvbigpKSB7XG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudmFsdWUuaGFzKGtleS52YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlLmdldChrZXkudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyAkTnVsbCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQoa2V5OiAkQW55LCB2YWx1ZTogJEFueSk6ICRBbnkge1xuICAgICAgICB0aGlzLnZhbHVlLnNldChrZXkudmFsdWUsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGUoa2V5OiAkQW55KTogJEFueSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMudmFsdWUuZGVsZXRlKGtleS52YWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgJEJvb2xlYW4ocmVzdWx0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGA8JHt0aGlzLm5hbWV9IG9iamVjdD5gO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi90eXBlLmVudW0nO1xuaW1wb3J0IHsgJEFueSB9IGZyb20gJy4vYW55JztcbmltcG9ydCB7IENvbnNvbGUgfSBmcm9tICcuLi9jb25zb2xlJztcbmRlY2xhcmUgdmFyIGNvbnpvbGU6IENvbnNvbGU7XG5cbmV4cG9ydCAgY2xhc3MgUmFuZ2VWYWx1ZSB7XG4gICAgcHVibGljIHN0YXJ0OiBudW1iZXI7XG4gICAgcHVibGljIGVuZDogbnVtYmVyO1xuICAgIHB1YmxpYyBzdGVwOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlciwgc3RlcDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgICAgICAgdGhpcy5lbmQgPSBlbmQ7XG4gICAgICAgIHRoaXMuc3RlcCA9IHN0ZXA7XG4gICAgfVxuXG4gICAgcHVibGljIG5vcm1hbGl6ZShsZW5ndGg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5zdGVwID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnN0ZXAgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVuZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5lbmQgPSB0aGlzLnN0ZXAgPiAwID8gbGVuZ3RoIC0gMSA6IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhcnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnQgPSB0aGlzLnN0ZXAgPiAwID8gMCA6IGxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyAkUmFuZ2UgZXh0ZW5kcyAkQW55IHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBSYW5nZVZhbHVlKSB7XG4gICAgICAgIHN1cGVyKHZhbHVlLCBEYXRhVHlwZS5SYW5nZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGl0ZXJhdGUobGVuZ3RoOiBudW1iZXIsIGNhbGxiYWNrOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZhbHVlLm5vcm1hbGl6ZShsZW5ndGgpO1xuICAgICAgICBpZiAodGhpcy52YWx1ZS5zdGVwID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMudmFsdWUuc3RhcnQ7IGkgPD0gdGhpcy52YWx1ZS5lbmQ7IGkgKz0gdGhpcy52YWx1ZS5zdGVwKSB7XG4gICAgICAgICAgICAgICBjYWxsYmFjayhpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnZhbHVlLnN0ZXAgPCAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy52YWx1ZS5zdGFydDsgaSA+PSB0aGlzLnZhbHVlLmVuZDsgaSArPSB0aGlzLnZhbHVlLnN0ZXApIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnpvbGUud2FybihgW3JhbmdlIGVycm9yXSA9PiAwIGlzIG5vdCBhIHZhbGlkIHN0ZXBgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYFske3RoaXMudmFsdWUuc3RhcnR9OiR7dGhpcy52YWx1ZS5lbmR9OiR7dGhpcy52YWx1ZS5zdGVwfV1gO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi90eXBlLmVudW0nO1xuaW1wb3J0IHsgJEFueSB9IGZyb20gJy4vYW55JztcblxuZXhwb3J0IGNsYXNzICRSZWdFeHAgZXh0ZW5kcyAkQW55IHtcblxuICAgIHB1YmxpYyB2YWx1ZTogUmVnRXhwO1xuXG4gICAgY29uc3RydWN0b3IodmFsdWU6IFJlZ0V4cCkge1xuICAgICAgICBzdXBlcih2YWx1ZSwgRGF0YVR5cGUuUmVnRXhwKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IFRva2VuIH0gZnJvbSAndG9rZW4nO1xuXG5pbXBvcnQgeyBFeHByIH0gZnJvbSAnZXhwcmVzc2lvbic7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdG10IHtcbiAgICBwdWJsaWMgcmVzdWx0OiBhbnk7XG4gICAgcHVibGljIGxpbmU6IG51bWJlcjtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuICAgIHB1YmxpYyBhYnN0cmFjdCBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSO1xufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmV4cG9ydCBpbnRlcmZhY2UgU3RtdFZpc2l0b3I8Uj4ge1xuICAgIHZpc2l0QmxvY2tTdG10KHN0bXQ6IEJsb2NrKTogUjtcbiAgICB2aXNpdEJyZWFrU3RtdChzdG10OiBCcmVhayk6IFI7XG4gICAgdmlzaXRDbGFzc1N0bXQoc3RtdDogQ2xhc3MpOiBSO1xuICAgIHZpc2l0Q29udGludWVTdG10KHN0bXQ6IENvbnRpbnVlKTogUjtcbiAgICB2aXNpdERvV2hpbGVTdG10KHN0bXQ6IERvV2hpbGUpOiBSO1xuICAgIHZpc2l0RXhwcmVzc2lvblN0bXQoc3RtdDogRXhwcmVzc2lvbik6IFI7XG4gICAgdmlzaXRGb3JTdG10KHN0bXQ6IEZvcik6IFI7XG4gICAgdmlzaXRGb3JlYWNoU3RtdChzdG10OiBGb3JlYWNoKTogUjtcbiAgICB2aXNpdEZ1bmNTdG10KHN0bXQ6IEZ1bmMpOiBSO1xuICAgIHZpc2l0SWZTdG10KHN0bXQ6IElmKTogUjtcbiAgICB2aXNpdFByaW50U3RtdChzdG10OiBQcmludCk6IFI7XG4gICAgdmlzaXRSZXR1cm5TdG10KHN0bXQ6IFJldHVybik6IFI7XG4gICAgdmlzaXRWYXJTdG10KHN0bXQ6IFZhcik6IFI7XG4gICAgdmlzaXRXaGlsZVN0bXQoc3RtdDogV2hpbGUpOiBSO1xufVxuXG5leHBvcnQgY2xhc3MgQmxvY2sgZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMgc3RhdGVtZW50czogU3RtdFtdO1xuXG4gICAgY29uc3RydWN0b3Ioc3RhdGVtZW50czogU3RtdFtdLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZW1lbnRzID0gc3RhdGVtZW50cztcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0QmxvY2tTdG10KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1N0bXQuQmxvY2snO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJyZWFrIGV4dGVuZHMgU3RtdCB7XG4gICAgcHVibGljIGtleXdvcmQ6IFRva2VuO1xuXG4gICAgY29uc3RydWN0b3Ioa2V5d29yZDogVG9rZW4sIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmtleXdvcmQgPSBrZXl3b3JkO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRCcmVha1N0bXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnU3RtdC5CcmVhayc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xhc3MgZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMgbmFtZTogVG9rZW47XG4gICAgcHVibGljIHBhcmVudDogVG9rZW47XG4gICAgcHVibGljIG1ldGhvZHM6IEZ1bmNbXTtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IFRva2VuLCBwYXJlbnQ6IFRva2VuLCBtZXRob2RzOiBGdW5jW10sIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5tZXRob2RzID0gbWV0aG9kcztcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q2xhc3NTdG10KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1N0bXQuQ2xhc3MnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbnRpbnVlIGV4dGVuZHMgU3RtdCB7XG4gICAgcHVibGljIGtleXdvcmQ6IFRva2VuO1xuXG4gICAgY29uc3RydWN0b3Ioa2V5d29yZDogVG9rZW4sIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmtleXdvcmQgPSBrZXl3b3JkO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRDb250aW51ZVN0bXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnU3RtdC5Db250aW51ZSc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9XaGlsZSBleHRlbmRzIFN0bXQge1xuICAgIHB1YmxpYyBsb29wOiBTdG10O1xuICAgIHB1YmxpYyBjb25kaXRpb246IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3Rvcihsb29wOiBTdG10LCBjb25kaXRpb246IEV4cHIsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmxvb3AgPSBsb29wO1xuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RG9XaGlsZVN0bXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnU3RtdC5Eb1doaWxlJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFeHByZXNzaW9uIGV4dGVuZHMgU3RtdCB7XG4gICAgcHVibGljIGV4cHJlc3Npb246IEV4cHI7XG5cbiAgICBjb25zdHJ1Y3RvcihleHByZXNzaW9uOiBFeHByLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RXhwcmVzc2lvblN0bXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnU3RtdC5FeHByZXNzaW9uJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGb3IgZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZXI6IFN0bXQ7XG4gICAgcHVibGljIGNvbmRpdGlvbjogRXhwcjtcbiAgICBwdWJsaWMgaW5jcmVtZW50OiBFeHByO1xuICAgIHB1YmxpYyBsb29wOiBTdG10O1xuXG4gICAgY29uc3RydWN0b3IoaW5pdGlhbGl6ZXI6IFN0bXQsIGNvbmRpdGlvbjogRXhwciwgaW5jcmVtZW50OiBFeHByLCBsb29wOiBTdG10LCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplciA9IGluaXRpYWxpemVyO1xuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAgICAgdGhpcy5pbmNyZW1lbnQgPSBpbmNyZW1lbnQ7XG4gICAgICAgIHRoaXMubG9vcCA9IGxvb3A7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEZvclN0bXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnU3RtdC5Gb3InO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvcmVhY2ggZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMgbmFtZTogVG9rZW47XG4gICAgcHVibGljIGtleTogVG9rZW47XG4gICAgcHVibGljIGl0ZXJhYmxlOiBFeHByO1xuICAgIHB1YmxpYyBsb29wOiBTdG10O1xuICAgIHB1YmxpYyBub25lOiBTdG10O1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogVG9rZW4sIGtleTogVG9rZW4sIGl0ZXJhYmxlOiBFeHByLCBsb29wOiBTdG10LCBub25lOiBTdG10LCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgICAgIHRoaXMuaXRlcmFibGUgPSBpdGVyYWJsZTtcbiAgICAgICAgdGhpcy5sb29wID0gbG9vcDtcbiAgICAgICAgdGhpcy5ub25lID0gbm9uZTtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0PFI+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFI+KTogUiB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Rm9yZWFjaFN0bXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnU3RtdC5Gb3JlYWNoJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGdW5jIGV4dGVuZHMgU3RtdCB7XG4gICAgcHVibGljIG5hbWU6IFRva2VuO1xuICAgIHB1YmxpYyBwYXJhbXM6IFRva2VuW107XG4gICAgcHVibGljIGJvZHk6IFN0bXRbXTtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IFRva2VuLCBwYXJhbXM6IFRva2VuW10sIGJvZHk6IFN0bXRbXSwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgICAgICB0aGlzLmJvZHkgPSBib2R5O1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRGdW5jU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LkZ1bmMnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIElmIGV4dGVuZHMgU3RtdCB7XG4gICAgcHVibGljIGNvbmRpdGlvbjogRXhwcjtcbiAgICBwdWJsaWMgdGhlblN0bXQ6IFN0bXQ7XG4gICAgcHVibGljIGVsc2VTdG10OiBTdG10O1xuXG4gICAgY29uc3RydWN0b3IoY29uZGl0aW9uOiBFeHByLCB0aGVuU3RtdDogU3RtdCwgZWxzZVN0bXQ6IFN0bXQsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAgICAgdGhpcy50aGVuU3RtdCA9IHRoZW5TdG10O1xuICAgICAgICB0aGlzLmVsc2VTdG10ID0gZWxzZVN0bXQ7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdElmU3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LklmJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcmludCBleHRlbmRzIFN0bXQge1xuICAgIHB1YmxpYyBleHByZXNzaW9uOiBFeHByO1xuXG4gICAgY29uc3RydWN0b3IoZXhwcmVzc2lvbjogRXhwciwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFByaW50U3RtdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdTdG10LlByaW50JztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXR1cm4gZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMga2V5d29yZDogVG9rZW47XG4gICAgcHVibGljIHZhbHVlOiBFeHByO1xuXG4gICAgY29uc3RydWN0b3Ioa2V5d29yZDogVG9rZW4sIHZhbHVlOiBFeHByLCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5rZXl3b3JkID0ga2V5d29yZDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRSZXR1cm5TdG10KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1N0bXQuUmV0dXJuJztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYXIgZXh0ZW5kcyBTdG10IHtcbiAgICBwdWJsaWMgbmFtZTogVG9rZW47XG4gICAgcHVibGljIHR5cGU6IFRva2VuO1xuICAgIHB1YmxpYyBpbml0aWFsaXplcjogRXhwcjtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IFRva2VuLCB0eXBlOiBUb2tlbiwgaW5pdGlhbGl6ZXI6IEV4cHIsIGxpbmU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVyID0gaW5pdGlhbGl6ZXI7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdDxSPih2aXNpdG9yOiBTdG10VmlzaXRvcjxSPik6IFIge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFZhclN0bXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnU3RtdC5WYXInO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdoaWxlIGV4dGVuZHMgU3RtdCB7XG4gICAgcHVibGljIGNvbmRpdGlvbjogRXhwcjtcbiAgICBwdWJsaWMgbG9vcDogU3RtdDtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmRpdGlvbjogRXhwciwgbG9vcDogU3RtdCwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgICAgICB0aGlzLmxvb3AgPSBsb29wO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQ8Uj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Uj4pOiBSIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRXaGlsZVN0bXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnU3RtdC5XaGlsZSc7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyBmcm9tSmF2YVNjcmlwdE1ldGhvZCB9IGZyb20gJy4uL3J1bnRpbWUnO1xuaW1wb3J0IHsgJEFueSB9IGZyb20gJy4vYW55JztcbmltcG9ydCB7ICRDYWxsYWJsZSwgJEZ1bmN0aW9uIH0gZnJvbSAnLi9mdW5jdGlvbic7XG5pbXBvcnQgeyAkTnVsbCB9IGZyb20gJy4vbnVsbCc7XG5pbXBvcnQgeyAkTnVtYmVyIH0gZnJvbSAnLi9udW1iZXInO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL3R5cGUuZW51bSc7XG5pbXBvcnQgeyBJbnRlcnByZXRlciB9IGZyb20gJy4uL2ludGVycHJldGVyJztcbmltcG9ydCB7ICRSYW5nZSB9IGZyb20gJy4vcmFuZ2UnO1xuaW1wb3J0IHsgJExpc3QgfSBmcm9tICcuL2xpc3QnO1xuXG5leHBvcnQgY2xhc3MgJFN0cmluZyBleHRlbmRzICRBbnkge1xuICAgIHB1YmxpYyB2YWx1ZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZykge1xuICAgICAgICBzdXBlcih2YWx1ZSwgRGF0YVR5cGUuU3RyaW5nKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0KGtleTogJEFueSk6ICRBbnkge1xuICAgICAgICBpZiAoa2V5LmlzTnVtYmVyKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgJFN0cmluZyh0aGlzLnZhbHVlW2tleS52YWx1ZV0pO1xuICAgICAgICB9IGVsc2UgaWYgKGtleS5pc1JhbmdlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJhbmdlKDwkUmFuZ2U+IGtleSk7XG4gICAgICAgIH0gZWxzZSBpZiAoJFN0cmluZy5ydW50aW1lLmhhcyhrZXkudmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gJFN0cmluZy5ydW50aW1lLmdldChrZXkudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgJE51bGwoKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzZXQoa2V5OiAkQW55LCB2YWx1ZTogYW55KTogJEFueSB7XG4gICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgLy8gdGhpcy5wcm9wZXJ0aWVzLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3ICROdWxsKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLnZhbHVlfWA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByYW5nZShyYW5nZTogJFJhbmdlKTogJFN0cmluZyB7XG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgcmFuZ2UuaXRlcmF0ZSh0aGlzLnZhbHVlLmxlbmd0aCwgKGk6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHRoaXMudmFsdWVbaV07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3ICRTdHJpbmcocmVzdWx0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlcGxhY2UodGhpejogJEFueSwgYXJnczogJEFueVtdLCBpbnRlcnBldGVyOiBJbnRlcnByZXRlcik6ICRBbnkge1xuICAgICAgICBpZiAoYXJnc1sxXS5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgIC8vIHJldHVybiBuZXcgJFN0cmluZyh0aGl6LnZhbHVlLnJlcGxhY2UoYXJnc1swXS52YWx1ZSwgYXJnc1sxXS52YWx1ZSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXoudmFsdWUucmVwbGFjZShhcmdzWzBdLnZhbHVlLCAoKG1hdGNoOiBzdHJpbmcpID0+XG4gICAgICAgICAgICAgICAgKChhcmdzWzFdIGFzICRGdW5jdGlvbikuY2FsbCh0aGl6LCBbbmV3ICRTdHJpbmcobWF0Y2gpXSwgaW50ZXJwZXRlcikpLnZhbHVlXG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3ICRTdHJpbmcodGhpei52YWx1ZS5yZXBsYWNlKGFyZ3NbMF0udmFsdWUsIGFyZ3NbMV0udmFsdWUpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNwbGl0KHRoaXo6ICRBbnksIGFyZ3M6ICRBbnlbXSwgaW50ZXJwZXRlcjogSW50ZXJwcmV0ZXIpOiAkQW55IHtcbiAgICAgICAgY29uc3Qgc3BsaXRzID0gdGhpei52YWx1ZS5zcGxpdChhcmdzWzBdLnZhbHVlKS5tYXAoKHN0cjpzdHJpbmcpID0+IG5ldyAkU3RyaW5nKHN0cikpO1xuICAgICAgICByZXR1cm4gbmV3ICRMaXN0KHNwbGl0cyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyAgcnVudGltZSA9ICBuZXcgTWFwKFtcbiAgICAgICAgWyd0b1VwcGVyJywgIGZyb21KYXZhU2NyaXB0TWV0aG9kKCd0b1VwcGVyQ2FzZScsIDAsIERhdGFUeXBlLlN0cmluZyldLFxuICAgICAgICBbJ3RvTG93ZXInLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgndG9Mb3dlckNhc2UnLCAwLCBEYXRhVHlwZS5TdHJpbmcpXSxcbiAgICAgICAgWydzaXplJywgbmV3ICRDYWxsYWJsZSgnc2l6ZScsIDAsICAodGhpejogJEFueSwgYXJnczogJEFueVtdKTogJEFueSA9PiBuZXcgJE51bWJlcih0aGl6LnZhbHVlLmxlbmd0aCkpXSxcbiAgICAgICAgWydzcGxpdCcsIG5ldyAkQ2FsbGFibGUoJ3NwbGl0JywgMSwgJFN0cmluZy5zcGxpdCldLFxuICAgICAgICBbJ2NvbmNhdCcsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCdjb25jYXQnLCAxLCBEYXRhVHlwZS5TdHJpbmcpXSxcbiAgICAgICAgWydpbmNsdWRlcycsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCdpbmNsdWRlcycsIDEsIERhdGFUeXBlLkJvb2xlYW4pXSxcbiAgICAgICAgWydpbmRleE9mJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ2luZGV4T2YnLCAxLCBEYXRhVHlwZS5OdW1iZXIpXSxcbiAgICAgICAgWydsYXN0SW5kZXhPZicsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCdsYXN0SW5kZXhPZicsIDEsIERhdGFUeXBlLk51bWJlcildLFxuICAgICAgICBbJ3JlcGVhdCcsIGZyb21KYXZhU2NyaXB0TWV0aG9kKCdyZXBlYXQnLCAxLCBEYXRhVHlwZS5TdHJpbmcpXSxcbiAgICAgICAgWydyZXBsYWNlJywgbmV3ICRDYWxsYWJsZSgncmVwbGFjZScsIC0xLCAkU3RyaW5nLnJlcGxhY2UpXSxcbiAgICAgICAgWydzZWFyY2gnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgnc2VhcmNoJywgMSwgRGF0YVR5cGUuTnVtYmVyKV0sXG4gICAgICAgIFsnc2xpY2UnLCBmcm9tSmF2YVNjcmlwdE1ldGhvZCgnc2xpY2UnLCAtMSwgRGF0YVR5cGUuU3RyaW5nKV0sXG4gICAgICAgIFsnc3Vic3RyaW5nJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ3N1YnN0cmluZycsIC0xLCBEYXRhVHlwZS5TdHJpbmcpXSxcbiAgICAgICAgWyd0cmltJywgZnJvbUphdmFTY3JpcHRNZXRob2QoJ3RyaW0nLCAwLCBEYXRhVHlwZS5TdHJpbmcpXSxcbiAgICBdKTtcblxufVxuIiwiZXhwb3J0IGVudW0gRGF0YVR5cGUge1xuICAgIE51bGwsICAgIC8vIDBcbiAgICBBbnksICAgICAvLyAxXG4gICAgQm9vbGVhbiwgLy8gMlxuICAgIE51bWJlciwgIC8vIDNcbiAgICBTdHJpbmcsICAvLyA0XG4gICAgTGlzdCwgICAgLy8gNVxuICAgIERpY3Rpb25hcnksIC8vIDZcbiAgICBPYmplY3QsICAgLy8gN1xuICAgIENsYXNzLCAgICAvLyA4XG4gICAgRnVuY3Rpb24sIC8vIDlcbiAgICBMYW1iZGEsICAgLy8gMTBcbiAgICBSYW5nZSwgICAgLy8gMTFcbiAgICBSZWdFeHAsICAgLy8gMTJcbiAgICBFcnJvciwgICAgLy8gMTNcbiAgICBJdGVyYXRvciwgLy8gMTRcbiAgICAvLyBpbnRlcm5hbCB0eXBlc1xuICAgIFZvaWQgPSAxMDAsIC8vICAxMDBcbiAgICBSZXR1cm4sICAgLy8gMTAxXG4gICAgQnJlYWssICAgIC8vIDEwMlxuICAgIENvbnRpbnVlICAvLyAxMDNcbn1cbiIsImltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi90eXBlLmVudW0nO1xuaW1wb3J0IHsgJEFueSB9IGZyb20gJy4vYW55JztcblxuZXhwb3J0IGNsYXNzICRWb2lkIGV4dGVuZHMgJEFueSB7XG5cbiAgICBwdWJsaWMgdmFsdWU6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKHZhbHVlLCBEYXRhVHlwZS5Wb2lkKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IFRva2VuVHlwZSB9IGZyb20gXCIuL3Rva2VuXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RpZ2l0KGNoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjaGFyID49IFwiMFwiICYmIGNoYXIgPD0gXCI5XCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FscGhhKGNoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoY2hhciA+PSBcImFcIiAmJiBjaGFyIDw9IFwielwiKSB8fCAoY2hhciA+PSBcIkFcIiAmJiBjaGFyIDw9IFwiWlwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQWxwaGFOdW1lcmljKGNoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0FscGhhKGNoYXIpIHx8IGlzRGlnaXQoY2hhcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0tleXdvcmQod29yZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChUb2tlblR5cGVbd29yZCBhcyBuZXZlcl0gYXMgbmV2ZXIpID49IFRva2VuVHlwZS5BbmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplKHdvcmQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFNjYW5uZXIgfSBmcm9tICcuL3NjYW5uZXInO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnLi9wYXJzZXInO1xuaW1wb3J0IHsgSW50ZXJwcmV0ZXIgfSBmcm9tICcuL2ludGVycHJldGVyJztcbmltcG9ydCB7IENvbnNvbGUgfSBmcm9tICcuL2NvbnNvbGUnO1xuaW1wb3J0IHsgRGVtb1NvdXJjZUNvZGUgfSBmcm9tICcuL2RlbW9zL2RlbW8nO1xuaW1wb3J0IHsgU3RtdCB9IGZyb20gJy4vdHlwZXMvc3RhdGVtZW50JztcbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55O1xuZGVjbGFyZSB2YXIgZ2xvYmFsOiBhbnk7XG5cbmNvbnN0IGNvbnpvbGUgPSBuZXcgQ29uc29sZSgpO1xuXG5jb25zdCBhdHNjcmlwdCA9IHtcbiAgICBleGVjdXRlOiAoc291cmNlOiBzdHJpbmcpOiBTdG10W10gPT4ge1xuICAgICAgICBjb25zdCBzY2FubmVyID0gbmV3IFNjYW5uZXIoKTtcbiAgICAgICAgY29uc3QgcGFyc2VyID0gbmV3IFBhcnNlcigpO1xuICAgICAgICBjb25zdCBpbnRlcnByZXRlciA9IG5ldyBJbnRlcnByZXRlcigpO1xuICAgICAgICBjb25zdCB0b2tlbnMgPSBzY2FubmVyLnNjYW4oc291cmNlKTtcbiAgICAgICAgaWYgKHNjYW5uZXIuZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgc2Nhbm5lci5lcnJvcnMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnpvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGF0ZW1lbnRzID0gcGFyc2VyLnBhcnNlKHRva2Vucyk7XG4gICAgICAgIGlmIChwYXJzZXIuZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgcGFyc2VyLmVycm9ycy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uem9sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnRlcnByZXRlci5pbnRlcnBldChzdGF0ZW1lbnRzKTtcbiAgICB9LFxuICAgIGludGVycHJldGVyOiBJbnRlcnByZXRlcixcbiAgICBwYXJzZXI6IFBhcnNlcixcbiAgICBzY2FubmVyOiBTY2FubmVyXG59O1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuZGVtb1NvdXJjZUNvZGUgPSBEZW1vU291cmNlQ29kZTtcbiAgICB3aW5kb3cuYXRzY3JpcHQgPSBhdHNjcmlwdDtcbiAgICB3aW5kb3cuY29uem9sZSA9IGNvbnpvbGU7XG59IGVsc2Uge1xuICAgIGdsb2JhbC5jb256b2xlID0gY29uem9sZTtcbiAgICBleHBvcnRzLmF0c2NyaXB0ID0gYXRzY3JpcHQ7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=