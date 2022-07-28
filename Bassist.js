// Import Musician Class
const {Musician} = require('./Musician.js');

class Bassist extends Musician{
    constructor(mInst, mName, yrsPlaying, hrlyRate){
        super(mInst, mName, yrsPlaying, hrlyRate);
    }

    giveInterestingFact(){
        console.log("Everyone loves a bassist");
        return;
    }
}

module.exports = {Bassist}
