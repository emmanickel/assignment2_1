class Troupe{

    // Getters and setters for troupe name:
        set troupeName(name){
            // Validate instrument is one of the given options
            if(name.length >= 3 && name.length <= 30)
                this.tName = name;
            // Give error on invalid input
            else{
                console.log('Invalid input. Please enter a troupe name between 3 and 30 characters in length: ');
            }
        }
        get troupeName(){
            return this.tName;
        }
    
    // Getters and setters for troupe genre:
        set troupeGenre(genre){
            // Validate musician name is between 3
            // and 30 characters in length
            if(genre == 'rock' | genre == 'jazz' | genre == 'pop'){
                this.tGenre = genre;
            }
            // Error on invalid input
            else {
                console.log('Invalid input. Please enter one of the following genres (rock/jazz/pop): ');
            }    
        }
        get troupeGenre(){
            return this.mName;
        }
    
        set minDuration(hours){
            // Validate years playing is greater than or equal to 0
            if(hours>=0.5 && hours <= 3){
                this.mDur = hours;
            }
            // Error on invalid input
            else {
                console.log('Invalid input. Please a minimum duration between 0.5 and 3 hours: ');
            }
        }
        get minDuration(){
            return this.mDur;
        }
    }
    
    // Export Troupe class:
    module.exports = {Troupe};