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
            // Validate troupe genre is either rock/jazz/pop
            if(genre == 'rock' | genre == 'jazz' | genre == 'pop'){
                this.tGenre = genre;
            }
            // Error on invalid input
            else {
                console.log('Invalid input. Please enter one of the following genres (rock/jazz/pop): ');
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
                console.log('Invalid input. Please enter minimum duration between 0.5 and 3 hours: ');
            }
        }
        get minDuration(){
            return this.mDur;
        }

        // Set
        set troupeMembers(newMember){
            if(this.troupeMembers.length < 5){
                this.tMembers.push(newMember);
            }
            else{
                console.log('This troupe is full.')
            }
        }
        get troupeMembers(){
            return this.tMembers;
        }

    }
    
    // Export Troupe class:
    module.exports = {Troupe};