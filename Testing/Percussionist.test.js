const {Percussionist} = require('../Percussionist.js');

// Unit test 1: Give interesting fact
    // Case 1: Base Case
    test('Give interesting fact about percussionist', () => {
        percussionist = new Percussionist();
    expect(percussionist.giveInterestingFact()).toMatch(`"Me drum"\n\n`);
    })