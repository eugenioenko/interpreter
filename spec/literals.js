require('../dist/atscript.js');

describe("atscript boolean logic", () => {

    it("atscript should process correctly literals ", () => {

        expect(atscript('true;')[0].result.value).toEqual(true);
        expect(atscript('1;')[0].result.value).toEqual(1);
        expect(atscript('false;')[0].result.value).toEqual(false);
        expect(atscript('null;')[0].result.value).toEqual(null);
        expect(atscript('0;')[0].result.value).toEqual(0);
        expect(atscript('"string"')[0].result.value).toEqual("string");

    });

});
