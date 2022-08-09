class Troupe{
    // Constructor sets the property tMembers as an array (which will contain all members of a particular troupe object)
    constructor(){
        this.tMembers = [];
    }

    // Getters and setters for troupe name:
        set troupeName(name){
            // Validate troupe name is between 3 and 30 characters
            if(name.length >= 3 && name.length <= 30)
                this.tName = name;
            // Give error on invalid input
            else{
                throw new Error('Invalid input. Troupe name must be between 3 and 30 characters in length.');
            }
        }
        get troupeName(){
            return this.tName;
        }
    
    // Getters and setters for troupe genre:
        set troupeGenre(genre){
            // Validate troupe genre is either rock/jazz/pop
            if(genre == 'rock' | genre == 'jazz' | genre == 'pop'){
                this.tGenre = genre;
            }
            // Error on invalid input
            else {
                throw new Error('Invalid input. Genre must be either rock, jazz or pop.');
            }    
        }
        get troupeGenre(){
            return this.tGenre;
        }

        // Getters and setters for minimum duration:
        set minDuration(hours){
            // Validate minimum duration is between 0.5 and 3 hrs
            if(hours>=0.5 && hours <= 3 && isNaN(hours)==false){
                this.mDur = hours;
            }
            // Error on invalid input
            else {
                throw new Error('Invalid input. Minimum duration between 0.5 and 3 hours.');
            }
        }
        get minDuration(){
            return this.mDur;
        }

        // calHrlyRate function has no input parameters
        // It calculates the hourly rate of the Troupe object it is called with
        // by summing the hrly rates of the troupe members
        // It returns the hrly rate as a number rounded to 2 decimal places:
        calHrlyRate(){
            let sum = 0;
            for(let i = 0; i<this.tMembers.length; i++){
                sum += Number(this.tMembers[i].hrlyRate);
            }
            sum = Math.round((sum + Number.EPSILON) * 100) / 100;
            if(sum >0){
                return sum;
            }
            else{
                throw new Error('There are no musicians in the troupe');
            }
        }

        // addTroupe function pushes the new troupe object
        // To the troupes array
        // Takes input parameters:
            // troupes array (of Troupe objects)
            // Troupe object to push
        // No return value
        addTroupe(troupes, troupe){
            troupes.push(troupe);
            return;
        }

}

// Export Troupe class:
module.exports = {Troupe};