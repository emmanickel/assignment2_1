// Import Musician Class
const {Musician} = require('./Musician.js');

class Guitarist extends Musician{
    constructor(mInst, mName, yrsPlaying, hrlyRate){
        super(mInst, mName, yrsPlaying, hrlyRate);
    }

    // The giveInsterestingFact() method logs to the console the interesting fact specific
    // to the instrumentalist
    // It has no input parameters
    giveInterestingFact(){
        console.log("The more strings you have, the better you are");
        return;
    }
}

module.exports = {Guitarist}
