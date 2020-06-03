const exec = require('../dist/atscript.js').atscript.execute;

describe("atscript expression calculator", () => {

    it("atscript should perform correct math calculations ", () => {
        function mathOperationGenerator() {

            function rand(max) {
                return Math.floor(Math.random() * max);
            }

            const operations = "+-/*";
            let calc = Math.random().toString();
            for (let i = 0; i <= 100; ++i) {
                calc += operations[rand(operations.length)] + Math.random().toString();
            }
            calc += ';';
            return calc;
        }

        for (let i = 0; i <= 100; ++i) {
            const calc = mathOperationGenerator();
            expect(exec(calc)[0].result.value).toEqual(eval(calc));
        }

    });

});
