const {Musician} = require('../Musician.js');

// Unit test 1:
    // Case 1: Base Case
    test('Musician instrument', () => {
            musi = new Musician();
            musi.instrument = 'guitarist';
        expect(musi.employeeNo).toMatch('guitarist');
    })

// Unit test 2:
    // Case 1: Base Case
    test('Musician name', () => {
        musi = new Musician();
        musi.musicianName = 'Emma';
    expect(musi.musicianName).toMatch('Emma');
    })

// Unit test 3:
    // Case 1: Base Case
    test('Musician years playing', () => {
        musi = new Musician();
        musi.yearsPlaying = '10';
    expect(musi.yearsPlaying).toMatch('10');
    })

// Unit test 4:
    // Case 1: Base Case
    test('Musician hourly rate', () => {
        musi = new Musician();
        musi.hourlyRate = '55';
    expect(musi.hourlyRate).toMatch('55');
    })
