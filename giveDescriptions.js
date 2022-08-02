const { Guitarist } = require('./Guitarist');
const { Bassist } = require('./Bassist');
const { Percussionist } = require('./Percussionist');
const { Flautist } = require('./Flautist');
const {Troupe} = require('./Troupe');
const {Musician} = require('./Musician');

// Access prompt-sync package for user input:
const prompt = require('prompt-sync')();

// Function getTroupeName gets user to select which troupe to give a description
// for. 
// Accepted parameter: array of Troupe objects
// Return value: Index of selected troupe name in given troupes array
function getTroupeName(troupes){
    // Declare index variable i so that it holds its value outside for loop scope:
    let i;
    // While loop allows user unlimited attempts to enter a valid troupe name:
    while(true){
        // Use for loop to show list of available troupe names to user:
        if(troupes.length == 0){
            console.log("Please create a troupe to continue");
                return;
        }
        console.log("The current available troupes are: ");            
        for(let x=0; x<troupes.length; x++){
            console.log(`\t- ${troupes[x].tName}`);
        }
        // Get user input (removing white space):
        let tName = prompt("Please select a troupe from the list above: ").trim();
        
        // Use for loop to find selected troupe name within array troupes:
        for(i = 0; i < troupes.length; i++){
            if(tName.toLowerCase() == troupes[i].tName.toLowerCase()){
                // Return index of selected troupe:
                return i;
            }
        }
        console.log ("\nInvalid selection. Please try again.\n");
    }
}


// Function giveSummaryDesc returns a summary description of the selected troupe
// Input parameters are:
    // array of Troupe objects
    // boolean (true/false) tells whether summary or a detailed description is
    // required
        //(i.e. false => summary description, true => detailed description)
    // index of selected troupe to give description for
// Return value: result variable, which holds the string containing the description
function giveSummaryDesc(troupes, detailed, i){

    // Access troupe name from troupes array and store in result variable:
    result = (`==============================\nTroupe name: ${troupes[i].tName}\n`);
    result = result.concat("==============================\n");
    // Declare count variable to keep track of the number of each instrument in the troupe:
    let count = [0,0,0,0];
    // For loop to append result with a list of troupe members name and instrument:
    result = result.concat(`Members: `);
        if(troupes[i].tMembers.length == 0){
            result = result.concat(`None\n`);
        }
        else{
            for(let x = 0; x < troupes[i].tMembers.length; x++){
                result = result.concat(`\n\t- ${troupes[i].tMembers[x].mName}`);
                // Switch statement increments count array value according to the instrument the member plays:
                switch(troupes[i].tMembers[x].mInst){
                    case 'guitarist':
                        count[0]++;
                        break;
                    case 'bassist':
                        count[1]++;
                        break;
                    case 'percussionist':
                        count[2]++;
                        break;
                    case 'flautist':
                        count[3]++;
                        break;
                    default:
                        break;
                }
            }
            // Give number of each instrument in troupe:
            result = result.concat(`\nInstruments:\n\t- Guitarists: ${count[0]}\n\t- Bassists: ${count[1]}\n\t- Percussionists: ${count[2]}\n\t- Flautists: ${count[3]}\n`);
        }
    // Append result with troupe genre from troupes array:
    result = result.concat(`Genre: ${troupes[i].tGenre}\n`);
    // Append result with troupe minimum duration from troupes array:
    result = result.concat(`Minimum duration: ${troupes[i].mDur} hours\n`);
    // Append result with troupe hourly rate by calling calHrlyRate function from Troupe class:
    result = result.concat(`Hourly rate: $${parseInt(Troupe.prototype.calHrlyRate.call(troupes[i]))}/hr\n\n`);
    
    // Add detailed description to result variable (if detailed == true) by
    // calling the function giveDetailedDesc():
    if(detailed == true){
        result = result.concat(giveDetailedDesc(troupes, i));
        return result;
    }
    else return result;
}


function giveDetailedDesc(troupes, i){
    // Check the troupe contains musicians:
    if(troupes[i].tMembers.length == 0){
        result = `${troupes[i].tName} currently contains no members.\n\n`;
        return result;
    }
    // Introduce each musician:
    result = "Troupe members:\n----------------------------\n";
    for(let x=0; x<troupes[i].tMembers.length; x++){
        result = result.concat(`Hello, my name is ${troupes[i].tMembers[x].mName} and I am a ${troupes[i].tMembers[x].mInst}.\nI have been playing for ${troupes[i].tMembers[x].yrsPlaying} years and my hourly rate is $${troupes[i].tMembers[x].hrlyRate}/hr.\nHere's an interesting fact about ${troupes[i].tMembers[x].mInst}s:\n`);
     
        // Get interesting fact depending on instrument:
        switch(troupes[i].tMembers[x].mInst){
            case 'guitarist':
                result = result.concat(Guitarist.prototype.giveInterestingFact.call(troupes[i].tMembers[x]));
                break;
            case 'bassist':
                result = result.concat(Bassist.prototype.giveInterestingFact.call(troupes[i].tMembers[x]));
                break;
            case 'percussionist':
                result = result.concat(Percussionist.prototype.giveInterestingFact.call(troupes[i].tMembers[x]));
                break;
            case 'flautist':
                result = result.concat(Flautist.prototype.giveInterestingFact.call(troupes[i].tMembers[x]));
                break;
            default:
                console.log("Instrument unknown");
                break;
        }
    }
    return result;
}

module.exports = {giveSummaryDesc, giveDetailedDesc, getTroupeName}
