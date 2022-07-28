// Access prompt-sync package for user input:
const prompt = require('prompt-sync')();

function regMusician()
{
    while(true){
        // Take user input to select an instrument:
        let instrument = prompt("Please select an instrument (guitarist/bassist/percussionist/bassist): ");
        // Switch statement to add instrumentalist (guitarist/bassist/percussionist/bassist) based on selection
        switch(instrument){
            case 'guitarist':
                break;
            case 'bassist':
                break;
            case 'percussionist':
                break;
            case 'flautist':
                break;
            default:
                // Give error on invalid input
                break;
        }
    }
}

module.exports = {regMusician}
