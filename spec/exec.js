const execute = require('../dist/atscript.js').atscript.execute;

global.exec = function (input) {
    return execute(input)[0].result.value;
}
