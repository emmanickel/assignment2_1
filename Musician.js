class Musician{

// Getters and setters for musician instrument:
    set instument(inst){
        // Validate instrument is one of the given options
        if(inst != 'guitarist' | inst != 'bassist' | inst != 'percussionist' | inst != 'flautist')
            this.mInst = inst;
        // Give error on invalid input
        else{
            console.log('Invalid input. Please enter one of the following (guitarist, bassist, percussionist, flautist): ');
        }
    }
    get instument(){
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
            console.log('Invalid input. Please musician name between 3 and 30 characters.');
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
            console.log('Invalid input. Please years playing as a non-negative integer.');
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
            console.log('Invalid input. Please enter an hourly rate as a number greater than 50.');
        }
    }
    get hourlyRate(){
        return this.hrlyRate;
    }

    giveInterestingFact(){
        // return this.mInst;
        console.log("Need to be an instrumentalist");
        console.log(this.mInst);
        switch(this.mInst){
            case 'guitarist':
                return "The more strings you have, the better you are";
            case 'bassist':
                return "Everyone loves a bassist";
            case 'percussionist':
                return "Me drum";
            case 'flautist':
                return "1989 heavy metal instrument of the year";
            default:
                console.log("Instrument unknown");
                return;
        }
    }
}

// Export Student class:
module.exports = {Musician};