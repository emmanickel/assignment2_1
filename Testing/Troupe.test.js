const { Musician } = require('../Musician.js');
const {Troupe} = require('../Troupe.js');

// Unit test 1: Set Troupe Name
    // Case 1: Base Case
    test('Set Troupe name as "The Strokes"', () => {
        troupe = new Troupe();
        troupe.troupeName = 'Emma Nickel';
    expect(troupe.troupeName).toMatch('Emma');
    })
    // Case 2: Boundary Value
    test('Set Troupe name as "The"', () => {
        troupe = new Troupe();
        troupe.troupeName = 'The';
    expect(troupe.troupeName).toMatch('The');
    })
    // Case 3: Edge Case
    test('Set Troupe Name as "St"', () => {     
        expect(() => {
        troupe = new Troupe();
        troupe.troupeName = 'St';
            }).toThrowError('Invalid input. Troupe name must be between 3 and 30 characters in length.');
    })

// Unit test 2: Set troupe minimum duration
    // Case 1: Base Case
    test('Set Troupe minimum duration as "2"', () => {
        troupe = new Troupe();
        troupe.minDuration = '2';
    expect(troupe.minDuration).toMatch('2');
    })
    // Case 2: Boundary Value
    test('Set Troupe minimum duration as "0.5"', () => {
        troupe = new Troupe();
        troupe.minDuration = '0.5';
    expect(troupe.minDuration).toMatch('0.5');
    })
    // Case 3: Boundary Value
    test('Set Troupe minimum duration as "3"', () => {
        troupe = new Troupe();
        troupe.minDuration = '3';
    expect(troupe.minDuration).toMatch('3');
    })
    // Case 4: Edge Case
    test('Set Troupe minimum duration as "0"', () => {
        expect(() => {
            troupe = new Troupe();
            troupe.minDuration = '0';
                }).toThrowError('Invalid input. Minimum duration between 0.5 and 3 hours.');
    })
    // Case 5: Edge Case
    test('Set Troupe minimum duration as "5"', () => {
        expect(() => {
            troupe = new Troupe();
            troupe.minDuration = '5';
                }).toThrowError('Invalid input. Minimum duration between 0.5 and 3 hours.');
    })
    // Case 6: Edge Case
    test('Set Troupe minimum duration as "Three"', () => {
        expect(() => {
            troupe = new Troupe();
            troupe.minDuration = 'Three';
                }).toThrowError('Invalid input. Minimum duration between 0.5 and 3 hours.');
    })

// Unit test 3: Set Troupe Genre
    // Case 1: Base Case
    test('Set Troupe genre as "rock"', () => {
        troupe = new Troupe();
        troupe.troupeGenre = 'rock';
    expect(troupe.troupeGenre).toMatch('rock');
    })
    // Case 2: Edge Case
    test('Set Troupe genre as "Blues"', () => {     
        expect(() => {
        troupe = new Troupe();
        troupe.troupeGenre = 'Blues';
            }).toThrowError('Invalid input. Genre must be either rock, jazz or pop.');
    })
    // Case 3: Edge Case
    test('Set Troupe genre as ""', () => {     
        expect(() => {
        troupe = new Troupe();
        troupe.troupeGenre = '';
            }).toThrowError('Invalid input. Genre must be either rock, jazz or pop.');
    })
    

// Unit test 4: Calculate hourly rate
    // Case 1: Base Case
    test('Calculate hourly rate of troupe containing two musicians', () => {
        musi1 = new Musician();
        musi2 = new Musician();
        musi1.hourlyRate = 55;
        musi2.hourlyRate = 65;
        troupe = new Troupe();
        troupe.tMembers.push(musi1);
        troupe.tMembers.push(musi2);
    expect(troupe.calHrlyRate()).toEqual(120);
    })
    // Case 2: Edge Case
    test('Calculate hourly rate of troupe containing no members', () => {
        expect(() => {
            troupe = new Troupe();
            troupe.calHrlyRate();
                }).toThrowError('There are no musicians in the troupe');
    })

// Unit test 5: Add Troupe
    // Case 1: Base Case
    test('Create one new troupe', () => {
        const troupes = new Array();
        troupe = new Troupe();
        troupe.addTroupe(troupes, troupe);
    expect(troupes.length).toEqual(1);
    })
    // Case 2: Base Case
    test('Create two new troupes', () => {
        const troupes = new Array();
        troupe1 = new Troupe();
        troupe2 = new Troupe();
        troupe1.addTroupe(troupes, troupe1);
        troupe2.addTroupe(troupes, troupe2);
    expect(troupes.length).toEqual(2);
    })