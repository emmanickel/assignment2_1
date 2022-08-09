const {Guitarist} = require('../Guitarist.js');

// Unit test 1: Give interesting fact
    // Case 1: Base Case
    test('Give interesting fact about guitarist', () => {
        guitarist = new Guitarist();
    expect(guitarist.giveInterestingFact()).toMatch(`"The more strings you have, the better you are"\n\n`);
    })
    // // Case 2: Edge Case
    // test('Give interesting fact about guitarist', () => {     
    //     expect(() => {
    //     guitarist = new Guitarist();
    //     guitarist.giveInterestingFact();
    //         }).toThrowError('Invalid input. Must be a guitarist.');
    // })