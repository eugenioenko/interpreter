const atscript = require('../dist/atscript.js').atscript;

describe("atscript interpreter", () => {

    it("atscript should be defined ", () => {
        expect(atscript.execute).toBeDefined();
    });

    it("atscript console should be defined", () => {
        expect(conzole).toBeDefined();
    });
});
