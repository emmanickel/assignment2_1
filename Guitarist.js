// Import Musician Class
const {Musician} = require('./Musician.js');

class Guitarist extends Musician{
    constructor(mInst, mName, yrsPlaying, hrlyRate){
        super(mInst, mName, yrsPlaying, hrlyRate);
    }

    giveInterestingFact(){
        console.log("The more strings you have, the better you are");
        return;
    }
}

module.exports = {Guitarist}
