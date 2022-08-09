class Musician{

// Getters and setters for musician instrument:
    set instrument(inst){
        // Validate instrument is one of the given options
        if(inst == 'guitarist' | inst == 'bassist' | inst == 'percussionist' | inst == 'flautist'){
            this.mInst = inst;
        }
        // Give error on invalid input
        else{
            throw new Error ('Invalid input. Instrument must be either guitarist, bassist, percussionist or flautist.');
        }
    }
    get instrument(){
        return this.mInst;
    }

// Getters and setters for musician name:
    set musicianName(name){
        // Validate musician name is between 3
        // and 30 characters in length
        if(name.length >= 3 && name.length <= 30){
            this.mName = name;
        }
        // Error on invalid input
        else {
            throw new Error('Invalid input. Musician name must be between 3 and 30 characters.');
        }    
    }
    get musicianName(){
        return this.mName;
    }

    set yearsPlaying(years){
        // Validate years playing is greater than or equal to 0
        if(years>=0){
            this.yrsPlaying = years;
        }
        // Error on invalid input
        else {
            throw new Error('Invalid input. Years playing must be a non-negative integer.');
        }
    }
    get yearsPlaying(){
        return this.yrsPlaying;
    }

    // Getters and setters for hourly rate:
    set hourlyRate(rate){
        // Validate student mark is greater than or equal to 50
        if(rate >= 50){
            this.hrlyRate = rate;  
        }
        // Error on invalid input
        else {
            throw new Error('Invalid input. Hourly rate must be a number greater than 50.');
        }
    }
    get hourlyRate(){
        return this.hrlyRate;
    }

    // addMusician method pushes new Musician object
    // to the musicians array:
    // Takes input parameters:
        // musicians array (of Musician objects)
        // Musician object to push
    // No return value
    addMusician(musicians, musi){
        musicians.push(musi);
        return;
    }
}

// Export Student class:
module.exports = {Musician};