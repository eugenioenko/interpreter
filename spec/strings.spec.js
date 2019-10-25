require('../dist/atscript.min.js');

function randStringGenerator(length) {

    const dict = "abcdefghijklmnopqrstuvwxyz";

    function rand(max) {
        return Math.floor(Math.random() * max);
    }

    let str = '';
    for (let i = 0; i <= length; ++i) {
        str += dict[rand(dict.length)];
    }

    return str;
}

describe("atscript string and string methods", () => {

    xit("atscript should concatanate strings", () => {

        function randConcatanationGenerator(length) {
            let concatanation = '';
            for (let i = 0; i <= length; ++i) {
                concatanation += `"${randStringGenerator(100)}"+`;
            }
            concatanation += `""`;
            return concatanation;
        }

        for (let i = 0; i <= 10; ++i) {
            const concatanation = randConcatanationGenerator();
            expect(atscript(concatanation + ";").value).toEqual(eval(`${concatanation}`));
        }

    });

});
