require('../dist/bundle.js');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
describe("atscript expression calculator", () => {

    it("atscript should be defined ", () => {
        expect(atscript(`print 2+2*7+1-0*2-1/3+7-4+0-5/1+0+9/2/1/3/8/4*1*2+0-9;`)).toEqual(2+2*7+1-0*2-1/3+7-4+0-5/1+0+9/2/1/3/8/4*1*2+0-9);
    });

});
