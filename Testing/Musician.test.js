const {Musician} = require('../Musician.js');

// Unit test 1: Set Musician Instrument
    // Case 1: Base Case
    test('Set Musician instrument as "guitarist"', () => {
            musi = new Musician();
            musi.instrument = 'guitarist';
        expect(musi.instrument).toMatch('guitarist');
    })
    // Case 2: Edge Case
    test('Set Musician instrument as "saxophonist"', () => {     
        expect(() => {
        musi = new Musician();
        musi.instrument = 'saxophonist';
            }).toThrowError('Invalid input. Instrument must be either guitarist, bassist, percussionist or flautist.');
        })

// Unit test 2: Set Musician Name
    // Case 1: Base Case
    test('Set Musician name as "Emma Nickel"', () => {
        musi = new Musician();
        musi.musicianName = 'Emma Nickel';
    expect(musi.musicianName).toMatch('Emma');
    })
    // Case 2: Boundary Value
    test('Set Musician name as "Eli"', () => {
        musi = new Musician();
        musi.musicianName = 'Eli';
    expect(musi.musicianName).toMatch('Eli');
    })
    // Case 3: Edge Case
    test('Set Musician Name as "Em"', () => {     
        expect(() => {
        musi = new Musician();
        musi.musicianName = 'Em';
            }).toThrowError('Invalid input. Musician name must be between 3 and 30 characters.');
        })

// Unit test 3: Set musician years playing
    // Case 1: Base Case
    test('Set Musician years playing as "5"', () => {
        musi = new Musician();
        musi.yearsPlaying = '5';
    expect(musi.yearsPlaying).toMatch('5');
    })
    // Case 2: Boundary Value
    test('Set Musician years playing as "0"', () => {
        musi = new Musician();
        musi.yearsPlaying = '0';
    expect(musi.yearsPlaying).toMatch('0');
    })
    // Case 3: Edge Case
    test('Set Musician years playing as "-1"', () => {
        expect(() => {
            musi = new Musician();
            musi.yearsPlaying = '-1';
                }).toThrowError('Invalid input. Years playing must be a non-negative integer.');
    })
    // Case 4: Edge Case
    test('Set Musician years playing as "Four"', () => {
        expect(() => {
            musi = new Musician();
            musi.yearsPlaying = 'Four';
                }).toThrowError('Invalid input. Years playing must be a non-negative integer.');
    })

// Unit test 4: Set musician hourly rate
    // Case 1: Base Case
    test('Set Musician hourly rate as "70"', () => {
        musi = new Musician();
        musi.hourlyRate = '70';
    expect(musi.hourlyRate).toMatch('70');
    })
    // Case 2: Boundary Value
    test('Set Musician hourly rate as "50"', () => {
        musi = new Musician();
        musi.hourlyRate = '50';
    expect(musi.hourlyRate).toMatch('50');
    })
    // Case 4: Edge Case
    test('Set Musician years playing as "49"', () => {
        expect(() => {
            musi = new Musician();
            musi.hourlyRate = '49';
                }).toThrowError('Invalid input. Hourly rate must be a number greater than 50.');
    })

// Unit test 5: Add musician
    // Case 1: Base Case
    test('Create one new musician', () => {
        const musicians = new Array();
        musi = new Musician();
        musi.addMusician(musicians, musi);
    expect(musicians.length).toEqual(1);
    })
    // Case 2: Base Case
    test('Create two new musicians', () => {
        const musicians = new Array();
        musi1 = new Musician();
        musi2 = new Musician();
        musi1.addMusician(musicians, musi1);
        musi2.addMusician(musicians, musi2);
    expect(musicians.length).toEqual(2);
    })