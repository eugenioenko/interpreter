require('./exec');

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

    it("atscript should concatanate strings", () => {

        function randConcatanationGenerator(length) {
            let concatanation = '';
            for (let i = 0; i <= length; ++i) {
                concatanation += `"${randStringGenerator(100)}"+`;
            }
            concatanation += `""`;
            return concatanation;
        }

        for (let i = 0; i <= 100; ++i) {
            const concatanation = randConcatanationGenerator();
            expect(exec(concatanation + ";")).toEqual(eval(`${concatanation}`));
        }
    });

});
