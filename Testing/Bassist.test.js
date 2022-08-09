const {Bassist} = require('../Bassist.js');

// Unit test 1: Give interesting fact
    // Case 1: Base Case
    test('Give interesting fact about bassist', () => {
        bassist = new Bassist();
    expect(bassist.giveInterestingFact()).toMatch(`"Everyone loves a bassist"\n\n`);
    })