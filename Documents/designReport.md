# Design Report
### Emma Nickel

## Summary of project requirements:

The MusoPlan software requirements are understood to be as follows:

The application will operate from the command line, and upon startup will bring the user to a main menu from which they can select one of the following eight functions to run:

**1. Create a musician**

- Inputs: 
    - Instrument (string, either guitarist/bassist/percussionist/flautist)
    - Name (string between 3 and 30 characters in length)
    - Years playing (number greater than or equal to 0)
    - Hourly rate (number greater than or equal to 50)	

**2. Create a troupe**

-	Inputs:
    - Troupe name (string between 3 and 30 characters in length)
    - Minimum duration (number between 0.5 and 3)
    - Genre (string, either rock/jazz/pop)

**3. Add a musician to a troupe**

- Inputs:
    - Troupe name to be added to (string)
    - Musician name to add (string)

**4. Provide a summary description of a troupe**

- Input: Troupe name (string)
- Outputs:
    - Troupe name
    - How many of which instruments it contains (array/map)
    - Genre (either rock/genre/pop)
    - Minimum duration of a booking
    - Hourly rate for whole troupe (hourly rate = sum of all troupe members' hourly rates)

**5. Provide a detailed description of a troupe**

- Input: Troupe name (string)
- Outputs:
    - Troupe summary:
        - Troupe name
        - How many of which instruments it contains (array/map)
        - Genre (either rock/genre/pop)
        - Minimum duration of a booking
        - Hourly rate for whole troupe (hourly rate = sum of all troupe members' hourly rates)
    - Introduction of each musician:
        - Name
        - Instrument (guitarist/bassist/percussionist/flautist)
        - Years playing
        - Hourly rate
        - Interesting fact:
            - Guitarist - "The more strings you have, the better you are"
            - Bassist - "Everyone loves a bassist"
            - Percussionist - "Me drum"
            - Flautist - "1989 heavy metal instrument of the year"

**6. Calculate the cost of deploying the troupe for a number of hours**

- Inputs:
    - Troupe name (string, must be one that already exists)
    - Number of hours (number, must be greater than or equal to the troupe's minimum duration and between 0.5 and 3 hrs)
- Outputs:
    - Cost of deploying given troupe for the given number of hours

**7. Read a list of troupe names to be populated from a file**

- Input: List of troupe names (separated line-by-line) given in .txt file

**8. Write a list of the detailed descriptions for all troupes to a given filename**

- Input: Name for output file? (string)
- Output: Detailed description (see function 5) given for all troupes (one blank line left between each troupe) in a .txt file named using the given name.

## Class Descriptions:

1. Troupe Class:

- Properties (Data):
    - Name (`string.length >= 3 && string.length <=30`)
    - Minimum duration (`number >= 0.5 && number <= 3`)
    - Genre (`string == 'rock' | string == 'jazz' | string == 'pop'`)
    - Instruments – how many of each type (e.g `{guitar: 1, bass: 2, percussion: 1, flute: 1}`) (`total <= 5`)

- Behaviours (Methods): 

        calHrlyRate(troupeName){
            // Calculate hourly rate of troupe:
                // Sum all musician hrly rates in troupe
                // Return hourly rate
        }

        summaryDesc(troupeName){ 
            // Log to console: 
                // Troupe name
                // How many of which instruments
                // Genre
                // Minimum duration
                // Hourly rate for the whole troupe
                    // Call calHrlyRate()
        }

        detailDesc(troupeName){
            // Log to console:
                // summaryDesc()
                // Musician introductions:
                    // Name
                    // Instrument
                    // Hourly rate
                    // Interesting fact
        }

        calCost(troupeName, nHours){
            // nHours must be between 30 mins to 3 hours
            // nHours must be greater than minimum hourly rate
            // Cost = nHours*(calHrlyRate())
            // Return Cost
        }

2. Musician Class:
- Properties (Data):
    - Name (string) (3-30 chars)
    - Instrument (guitar, bass, percussion, flute) (string) (<=5)
    - Yrs_playing (number) (>=0)
    - Hourly_rate (number) (>$50/hr)
- Behaviours (Methods): 
    regMusician(){
        // Check conditions and add musician to map()
    }

3. Guitarist Class extends Musician Class:
- Properties (Data):
    - Super(Name, Instrument, Yrs_playing, Hourly_rate)
- Behaviours (Methods): 

        interestingFact(){
            /* interesting_fact = "The more strings you have, the better you are" */
        }

4. Bassist Class extends Musician Class:
- Properties (Data):
    - Super(Name, Instrument, Yrs_playing, Hourly_rate)
- Behaviours (Methods): 

        interestingFact(){
            /* interesting_fact = "The more strings you have, the better you are" */
        }

5. Percussionist Class extends Musician Class:
- Properties (Data):
    - Super(Name, Instrument, Yrs_playing, Hourly_rate)
- Behaviours (Methods): 

        interestingFact(){
            /* interesting_fact = "Me drum" */
        }

6. Flautist Class extends Musician Class:
- Properties (Data):
    - Super(Name, Instrument, Yrs_playing, Hourly_rate)
- Behaviours (Methods): 

        interestingFact(){
            /* interesting_fact = "1989 heavy metal instrument of the year" */
        }

-	Relationships between classes like inheritance, and an aggregation if exists
    - Class Relationships/Inheritance:
        - There will be 6 classes with the following relationships:
            - Troupe Class
            - Musician Class
                - Guitarist Class
                - Bassist Class
                - Percussionist Class
                - Flautist Class
    - Aggregation:
        - Each troupe contains an array of musician objects (number of musicians in troupe is less than or equal to 5)
        - All created troupe objects stored in an array
        - All created musicians stored in an array

##  Organisational Requirements:
- The Software Development Life Cycle (SDLC) of the MusoPlan project will likely follow the iterative Waterfall model, where phases are repeated until the newly developed project feature/element is considered suitable. This brings more flexibility and adaptability to the otherwise rigid and sequential Waterfall structure.
    - While client feedback would likely not be gathered upon each iteration, frequent testing during the implemenetation phase will mean an element is not committed to the VCS until it is error-free and fully-functioning.
    - This reduces the chances of a fundamental 'bug' being discovered or a catastrophic failure occurring during project deployment and maintenance phases. In turn, this will reduce costs in terms of project budget and time.

- The selected Version Control System (VCS) for this project is git, a widely-used distributed VCS which will be used in conjunction with the 'online ecosystem' GitHub. This will allow all stages of project development to be clearly tracked and explained.
    - Each branch commit will be kept to a single change and messages will follow the industry standard of being in present tense and imperative mood.
    - Project report documents will be committed to a separate feature branch to javascript files. These branches will be merged to the main branch and pushed to the remote repository upon project completion.
    - The VCS will be configured to ensure each commit features the author's name and email address.
    - A README.md file will be included in the repository that provides setup, operating and testing instructions.
- All JavaScript code will follow MDN's General JavaScript guidelines, which can be found at https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/JavaScript#general_javascript_guidelines
    - All coded functions and problem-solving strategies will be explained through comments


