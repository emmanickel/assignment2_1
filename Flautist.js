// Import Musician Class
const {Musician} = require('./Musician.js');

class Flautist extends Musician{
    // Inherit properties from parent Musician class:
    constructor(mInst, mName, yrsPlaying, hrlyRate){
        super(mInst, mName, yrsPlaying, hrlyRate);
    }

    // The giveInsterestingFact() method logs to the console the interesting fact specific
    // to the instrumentalist
    // It has no input parameters
    giveInterestingFact(){
        return `"1989 heavy metal instrument of the year"\n\n`;
    }
}

// Export class:
module.exports = {Flautist}
