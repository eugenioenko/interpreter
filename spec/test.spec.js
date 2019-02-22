require('../dist/bundle.js');

describe("atscript", function () {
    it("Should be defined ", function () {
        expect(atscript).toBeDefined();
        atscript('print 10;')
    });
});

describe("print", function () {
    it("it should print ", function () {
        atscript('print 10;');
        expect(conzole.messages[0].text).toEqual(10);
    });
});
