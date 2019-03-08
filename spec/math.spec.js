require('../dist/atscript.min.js');

describe("atscript expression calculator", () => {

    it("atscript should perform correct math calculations ", () => {
        function mathOperationGenerator() {

            function rand(max) {
                return Math.floor(Math.random() * max);
            }

            const operations = "+-/*";
            let calc = Math.random().toString();
            for (let i = 0; i <= 100; ++i) {
                calc += operations[rand(4)] + Math.random().toString();
            }
            calc += ';';
            return calc;

        }

        for (let i = 0; i <= 100; ++i) {
            const calc = mathOperationGenerator();
            expect(atscript(calc)).toEqual(eval(calc));
        }

    });

});
