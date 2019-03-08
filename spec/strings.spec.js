require('../dist/atscript.min.js');

describe("atscript string and string methods", () => {

    it("atscript should concatanate strings", () => {
        function randStringGenerator() {

            const dict = "abcdefghijklmnopqrstuvwxyz";

            function rand(max) {
                return Math.floor(Math.random() * max);
            }

            let str = '';
            for (let i = 0; i <= 100; ++i) {
                str += dict[rand(dict.length)];
            }

            return str;
        }

        function randConcatanationGenerator() {
            let concatanation = '';
            for (let i = 0; i <= 100; ++i) {
                concatanation += `"${randStringGenerator()}"+`;
            }
            concatanation += `""`;
            return concatanation;
        }


        for (let i = 0; i <= 100; ++i) {
            const concatanation = randConcatanationGenerator();
            expect(atscript(concatanation + ";").value).toEqual(eval(`${concatanation}`));
        }

    });

});
