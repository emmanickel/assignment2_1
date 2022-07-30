const { Guitarist } = require('./Guitarist');
const { Bassist } = require('./Bassist');
const { Percussionist } = require('./Percussionist');
const { Flautist } = require('./Flautist');
const { Musician } = require('./Musician');
const {Troupe} = require('./Troupe');

// Access prompt-sync package for user input:
const prompt = require('prompt-sync')();

function addMusicianTroupe(musicians, troupes)
{
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
    else{
        // Give list of musician names:
        console.log("The current available musicians are: ");
        for(let i=0; i<musicians.length; i++){
            console.log(`\t- ${musicians[i].mName}`);
        }
    // Get musician name from user:
    let mName = prompt("Please select a musician from the list above: ");

    // Check given musician name is valid:
        for(let i = 0; i < musicians.length; i++){
            if(mName == musicians[i].mName){
                console.log(`You have selected the musician: ${musicians[i].mName}.`);
                while(true){
                    // Show list of troupe names:
                    console.log("The current available troupes are: ");            
                    for(let i=0; i<troupes.length; i++){
                        console.log(`\t- ${troupes[i].tName}`);
                    }
                // Get user input:
                let tName = prompt("Please select a troupe from the list above: ");

                // Check a valid name is entered:
                for(let z = 0; z < troupes.length; z++){
                    if(tName == troupes[z].tName){
                        // Check musician isn't already in the troupe:
                            for(let x = 0; x < troupes[z].tMembers.length; x++){
                                if(musicians[i].mName == troupes[z].tMembers[x].mName){
                                    console.log(`${musicians[i].mName} is already a member of ${troupes[z].tName}. Please try again.`);
                                    return addMusicianTroupe(musicians, troupes);    
                                }
                            }

                        console.log(`You have selected the troupe: ${troupes[z].tName}.`);
                        if(troupes[z].tMembers.length <5 ){
                            troupes[z].tMembers.push(musicians[i]);
                            return [i, z];
                        }
                        else{
                            console.log("This troupe is full. Please select another troupe.");
                            break;
                        }
                    }
                }
                console.log("Invalid selection. Please enter an existing troupe name.");

            }
            }
        }
        console.log("Invalid selection. Please enter an existing musician name.");

    }

}
}

function dispTroupeMembers(musicians, troupes){
    let index = addMusicianTroupe(musicians, troupes);
    // console.log(index);
    console.log(`Successfully added ${musicians[index[0]].mName} to ${troupes[index[1]].tName}.`);
    console.log(`The current members of ${troupes[index[1]].tName} are:`);
    for(let i = 0; i<troupes[index[1]].tMembers.length; i++){
        console.log(`\t- ${troupes[index[1]].tMembers[i].mName}`);
    }
}

module.exports = {addMusicianTroupe, dispTroupeMembers}
