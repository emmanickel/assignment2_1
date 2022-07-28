
class Musician{

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
            this.hrlyRate = hrlyRate;  
        }
        // Error on invalid input
        else {
            console.log('Invalid input. Please enter an hourly rate as a number greater than 50.');
        }
    }
    get studentMarks(){
        return this.stuMarks;
    }
}

// Export Student class:
module.exports = {Student};