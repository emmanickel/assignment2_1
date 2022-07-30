const { Guitarist } = require('./Guitarist');
const { Bassist } = require('./Bassist');
const { Percussionist } = require('./Percussionist');
const { Flautist } = require('./Flautist');
const { Musician } = require('./Musician');
const {Troupe} = require('./Troupe');

// Access prompt-sync package for user input:
const prompt = require('prompt-sync')();

function getTroupeName(troupes){
    let i;
    while(true){
        // Show list of troupe names:
        console.log("The current available troupes are: ");            
        for(let x=0; x<troupes.length; x++){
            console.log(`\t- ${troupes[x].tName}`);
        }
        // Get user input:
        let tName = prompt("Please select a troupe from the list above: ");
        
        // Find troupe in array troupes:
        for(i = 0; i < troupes.length; i++){
            if(tName == troupes[i].tName){
                return i;
            }
        }
        // If troupe name doesn't exist, give error:
        console.log ("\nInvalid selection. Please try again.\n");
            break;;
    }
}

function giveSummaryDesc(troupes, detailed, i){
    
    // // Get troupe name (index of troupes array):
    // let i = getTroupeName(troupes);

    // Store summary description in result variable:
    
    // Access troupe name from troupes array:
     result = (`Troupe name: ${troupes[i].tName}\n`);
     // For loop to display troupe members:
     result = result.concat(`Members: \n`);
         for(let x = 0; x < troupes[i].tMembers.length; x++){
             result = result.concat(`\t- ${troupes[i].tMembers[x].mName}\n`);
         }
     // Access troupe genre from troupes array:
     result = result.concat(`Genre: ${troupes[i].tGenre}\n`);
     // Access troupe minimum duration from troupes array:
     result = result.concat(`Minimum duration: ${troupes[i].mDur} hours\n`);
     // Access troupe hourly rate by calling calHrlyRate function from Troupe class:
     result = result.concat(`Hourly rate: $${parseInt(Troupe.prototype.calHrlyRate.call(troupes[i]))}/hr\n\n`);
     
     // Add detailed description to result variable by calling the function 
     // giveDetailedDesc():
     
    if(detailed == true){
        result = result.concat(giveDetailedDesc(troupes, i, result));
        return result;
    }
     else return result;
    }

function giveDetailedDesc(troupes, i, result){
    // Introduce each musician:
    for(let x=0; x<troupes[i].tMembers.length; x++){
        result = result.concat(`Name: ${troupes[i].tMembers[x].mName}\nInstrument: ${troupes[i].tMembers[x].mInst}\nYears playing: ${troupes[i].tMembers[x].yrsPlaying}\nHourly rate: ${troupes[i].tMembers[x].hrlyRate}\n`);
        // console.log(`Interesting fact: ${troupes[i].tMembers[x].toUpperCase().prototype.giveInterestingFact.call(troupes[i].tMembers[x])}`);

        // Get interesting fact depending on instrument
        switch(troupes[i].tMembers[x].mInst){
            case 'guitarist':
                result = result.concat(Guitarist.prototype.giveInterestingFact.call(troupes[i].tMembers[x]));
                return result;
            case 'bassist':
                result = result.concat(Bassist.prototype.giveInterestingFact.call(troupes[i].tMembers[x]));
                return result;
            case 'percussionist':
                result = result.concat(Percussionist.prototype.giveInterestingFact.call(troupes[i].tMembers[x]));
                return result;
            case 'flautist':
                result = result.concat(Flautist.prototype.giveInterestingFact.call(troupes[i].tMembers[x]));
                return result;
            default:
                console.log("Instrument unknown");
                return;
        }
        // console.log(`Interesting fact: ${Musician.prototype.giveInterestingFact.call(troupes[i].tMembers[x])}`);
    }
}


module.exports = {giveSummaryDesc, giveDetailedDesc, getTroupeName}
