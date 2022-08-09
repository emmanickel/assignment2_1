const {Flautist} = require('../Flautist.js');

// Unit test 1: Give interesting fact
    // Case 1: Base Case
    test('Give interesting fact about flautist', () => {
        flautist = new Flautist();
    expect(flautist.giveInterestingFact()).toMatch(`"1989 heavy metal instrument of the year"\n\n`);
    })