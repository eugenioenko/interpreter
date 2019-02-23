require('../dist/bundle.js');

describe("atscript interpreter", () => {

    it("atscript should be defined ", () => {
        expect(atscript).toBeDefined();
    });

    it("atscript should have the console ", () => {
        expect(conzole).toBeDefined();
    });

});
