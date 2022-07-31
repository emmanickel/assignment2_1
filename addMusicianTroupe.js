const { Guitarist } = require('./Guitarist');
const { Bassist } = require('./Bassist');
const { Percussionist } = require('./Percussionist');
const { Flautist } = require('./Flautist');
const { Musician } = require('./Musician');
const {Troupe} = require('./Troupe');

// Access prompt-sync package for user input:
const prompt = require('prompt-sync')();

// Function addMusicianTroupe adds a user-selected musician to a user-selected
// existing troupe by adding to the troupe's tMembers property (which is an array)
// Accepted parameters: array of existing Musician objects and array of existing
// Troupe objects
// Returns index of the musician being added (from the musicians array) and the
// index of the troupe being added to (in the troupes array)
function addMusicianTroupe(musicians, troupes)
{
    // While loop allows user unlimited attempts to input data correctly
    while(true){
        // If-else statement to check there are musicians and troupes available:
        if(musicians.length == 0){
            console.log("There are no available musicians. Please create a musician to continue.");
            return;
        }
        else if(troupes.length == 0){
            console.log("There are no available troupes. Please create a troupe to continue.");
            return;
        }
        // If there are musicians and troupes available, continue:
        else{
            console.log("The current available musicians are: ");
            // console.log(musicians); 
            // For loop gives list of current musician names:
            for(let i=0; i<musicians.length; i++){
                console.log(`\t- ${musicians[i].mName}`);
            }
        // Get musician name from user (removing white space):
        let mName = prompt("Please select a musician from the list above: ").trim();

        // Check given musician name is valid:
            for(let i = 0; i < musicians.length; i++){
                if(mName == musicians[i].mName){
                    // Let the user know the musician has been selected successfully
                    console.log(`You have selected the musician: ${musicians[i].mName}.`);
                    // While loop gives user unlimited attempts to select troupe:
                    while(true){
                        console.log("The current available troupes are: ");    
                        // Show list of current troupe names:       
                        for(let i=0; i<troupes.length; i++){
                            console.log(`\t- ${troupes[i].tName}`);
                        }
                    // Prompt the user to input troupe name:
                    let tName = prompt("Please select a troupe from the list above: ");

                    // For loop cycles through troupe names to check a valid name has
                    // been entered:
                    for(let z = 0; z < troupes.length; z++){
                        if(tName == troupes[z].tName){
                            // For loop to check musician isn't already in the troupe:
                            for(let x = 0; x < troupes[z].tMembers.length; x++){
                                if(musicians[i].mName == troupes[z].tMembers[x].mName){
                                    // Give error message if musician is already in troupe
                                    console.log(`${musicians[i].mName} is already a member of ${troupes[z].tName}. Please try again.`);
                                    return addMusicianTroupe(musicians, troupes);    
                                }
                            }
                            // Let user know troupe name has been successfully selected:
                            console.log(`You have selected the troupe: ${troupes[z].tName}.`);
                            // Add musician to troupe (by pushing to the troupes[z].tMembers array),
                            // ensuring that the total number of troupe members is less than or
                            // equal to 5:
                            if(troupes[z].tMembers.length < 5){
                                troupes[z].tMembers.push(musicians[i]);
                                // Return the index of the musician and the troupe in question:
                                return [i, z];
                            }
                            else{
                                // Give error message if there are already 5 members in the troupe:
                                console.log("This troupe is full. Please select another troupe.");
                                break;
                            }
                        }
                    }
                    // Give error message if user inputs an invalid troupe name:
                    console.log("Invalid selection. Please enter an existing troupe name.");
                    }
                }
            }
            // Give error message if user inputs an invalid musician name:
            console.log("Invalid selection. Please enter an existing musician name.");
        }
    }
}

// Function dispTroupeMembers uses console.log statements to let the user know which
// musician was added to which troupe, and what the current members of that
// troupe are:
// Accepted parameters: array indexes of Musician object and Troupe object in question
// No return value
function dispTroupeMembers(musicians, troupes){
    // Assign the parameters to the index array:
    let index = addMusicianTroupe(musicians, troupes);
    // Let user know which musician was added to which troupe:
    console.log(`Successfully added ${musicians[index[0]].mName} to ${troupes[index[1]].tName}.`);
    // Use a for loop to print the current troupe members to the console:
    console.log(`The current members of ${troupes[index[1]].tName} are:`);
    for(let i = 0; i<troupes[index[1]].tMembers.length; i++){
        console.log(`\t- ${troupes[index[1]].tMembers[i].mName}`);
    }
    // No return value:
    return;
}

// Export the function dispTroupeMembers:
module.exports = {dispTroupeMembers}
