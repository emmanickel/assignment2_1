# Design Report
#### Emma Nickel

<br>

## Summary of MusoPlan project requirements:

The application will operate from the command line, and upon startup will bring the user to a main menu from which they can select one of the following eight functions to run:

<br>

**1. Create a musician**

| Input | Data Type | Condition |
|---|---|---|
| Instrument | String | Equal to: 'guitarist', 'bassist', 'percussionist' or 'flautist'|
| Musician name | String | Between 3 and 30 characters in length |
| Years playing | Number | Non-negative |
| Hourly rate | Number | greater than or equal to 50 |

<br>

**2. Create a troupe**

| Input | Data Type | Condition |
|---|---|---|
| Troupe name | String | Between 3 and 30 characters in length |
| Minimum duration | Number | Between 0.5 and 3 |
| Genre | String | Equal to: 'rock', 'jazz' or 'pop' |

<br>

**3. Add a musician to a troupe**

| Input | Data Type | Condition |
|---|---|---|
| Troupe name | String | Existing troupe name |
| Musician name | String | Existing musician name |

<br>

**4. Provide a summary description of a troupe**

| Input | Data Type | Condition |
|---|---|---|
| Troupe name | String | Existing troupe name |

<br>

| Output | Example |
|---|---|
| Troupe name | `Troupe name: The Strokes` | 
| How many of which instruments it contains | `Instruments: `<br>` Guitarists: 2 `<br>` Bassists: 1 `<br>` Percussionists: 1 `<br>` Flautists: 1` |
| Genre | `Genre: rock` |
| Minimum duration | `Minimum duration: 2.5 hours` |
| Hourly rate | `Hourly rate: $150/hr` |

<br>

**5. Provide a detailed description of a troupe**

| Output | Example |
|---|---|
| Troupe name | `Troupe name: The Strokes` | 
| How many of which instruments it contains | `Instruments: `<br>` Guitarists: 2 `<br>` Bassists: 1 `<br>` Percussionists: 1 `<br>` Flautists: 1` |
| Genre | `Genre: rock` |
| Minimum duration | `Minimum duration: 2.5 hours` |
| Hourly rate | `Hourly rate: $150/hr` |
| Introduction of each musician | `Name: Emma` <br> `Instrument: Guitarist` <br> `Years playing: 7` <br> `Hourly rate: $55/hr` <br> `Interesting fact: The more strings you have, the better you are`|
    
**Note:**
- Interesting fact must be one of the following:
    - Guitarist - "The more strings you have, the better you are"
    - Bassist - "Everyone loves a bassist"
    - Percussionist - "Me drum"
    - Flautist - "1989 heavy metal instrument of the year"

<br>

**6. Calculate the cost of deploying the troupe for a number of hours**

| Input | Data Type | Condition |
|---|---|---|
| Troupe name | String | Existing troupe name |
| Number of hours | Greater than troupe's minimum duration but less than 3 hours |

<br>

| Output | Example |
|---|---|
| Cost of deploying the given troupe for the given number of hours | `The cost of deploying The Strokes for 2.5 hours is $375.` |

<br>

**7. Read a list of troupe names to be populated from a file**

| Input | Data Type | Condition |
|---|---|---|
| List of troupe names | String | Separated line by line |

<br>

**8. Write a list of the detailed descriptions for all troupes to a given filename**

| Input | Data Type | Condition |
|---|---|---|
| File name | String | No file extension |

<br> 

| Output | Example |
|---|---|
| Detailed description of all troupes given in named .txt file | See function 5 |

<br>

## Class Descriptions:

**1. Troupe Class:**

Properties (Data):
- Troupe name (string) (3-30 chars)
- Minimum duration (number) (<=0.5, >=3)
- Genre (string) (rock/jazz/pop)
- Members (array of Musician objects) (length<=5)

Behaviours (Methods): 

    calHrlyRate(){
        // Returns sum of all troupe members' hourly rates
    }

<br>

**2. Musician Class:**

Properties (Data):
- Musician name (string) (3-30 chars)
- Instrument (string) (guitarist/bassist/percussionist/flautist) (string)
(<=5)
- Years playing (number) (>=0)
- Hourly rate (number) (>=50)

Behaviours (Methods): 
- None required

<br>

**3. Guitarist Class extends Musician Class:**

Properties (Data):
- Super(Name, instrument, years playing, hourly rate)

Behaviours (Methods): 

    interestingFact(){
        /* return interesting_fact = "The more strings you have, the better you are" */
    }

<br>

**4. Bassist Class extends Musician Class:**

Properties (Data):
- Super(Name, instrument, years playing, hourly rate)

Behaviours (Methods): 

    interestingFact(){
        /* return interesting_fact = "Everyone loves a bassist" */
    }

<br>

**5. Percussionist Class extends Musician Class:**

Properties (Data):
- Super(Name, instrument, years playing, hourly rate)

Behaviours (Methods): 

    interestingFact(){
        /* return interesting_fact = "Me drum" */
    }
    
<br>

**6. Flautist Class extends Musician Class:**

Properties (Data):
- Super(Name, instrument, years playing, hourly rate)

Behaviours (Methods): 

    interestingFact(){
        /* return interesting_fact = "1989 heavy metal instrument of the year" */
    }

<br>

**External functions required:**

- Display the main menu and take user selection
- Execute selected application function or exit the program
- Create a musician
- Create a troupe
- Add a musician to a troupe
- Give summary description of a troupe
- Get user selected troupe name
- Give a detailed description of a troupe
- Calculate the cost of deploying a troupe for a given number of hours
- Read troupe names from a file
- Write detailed troupe descriptions to a file with a given name

<br>

**Relationships between classes**

The principle of inheritance in OOP involves arranging data in a hierarchical structure so that the data and methods of parent class (superclass) are available to the child classes (subclasses). Of the 6 classes listed above, the following inheritance relationships will exist:
- Musician class is the parent class (superclass) of the following child classes (subclasses):
    - Guitarist class
    - Bassist class
    - Percussionist class
    - Flautist class
- Troupe class has no relationship with the other classes

<br>

**Aggregation**
Aggregation refers to arranging data (including objects) in collections such as arrays and maps so that relationships between the data can exist and be referenced. 

- All created Troupe objects will be stored in an array 'troupes'
- All created Musician objects will be stored in an array 'musicians'
- The Troupe class will contain a property that is an array containing all musician members of the troupe (where array length <= 5)

<br>

##  Organisational Requirements:
**Software Development Life Cycle (SDLC):**

- The SDLC of the MusoPlan project follows the iterative Waterfall model, where phases are repeated until the newly developed project feature is considered suitable. This enables more flexibility and adaptability in the otherwise rigid and sequential Waterfall structure.
- The design and implementation phases will involve sequentially designing each function of the application then sequentially implementing each function via an iterative process.
- Client feedback will not be gathered upon each phase iteration, however frequent testing during the will ensure each completed feature is error-free and fully-functioning before moving on to the next.
- The iterative SDLC process reduces the chances of a fundamental 'bug' being discovered or a catastrophic failure occurring during project deployment and maintenance phases. In turn, this will minimise project costs and time.

<br>

**Version Control System (VCS):**
- The selected VCS for the MusoPlan project is git, a widely-used distributed VCS which will be used in conjunction with the 'online ecosystem' GitHub. This will allow all stages of project development to be clearly tracked and explained.
- Each branch commit will be kept to a single change and messages will follow the industry standard of being in present tense and imperative mood.
- Project report documents will be committed to a separate feature branch to javascript files. These branches will be merged to the main branch and pushed to the remote repository upon project completion.
- The VCS will be configured to ensure each commit features the author's name and email address.
- A README.md file will be included in the repository that provides setup, operating and testing instructions.

<br>

**JavaScript Code:**
- All JavaScript code will follow MDN's General JavaScript guidelines, which can be found at https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/JavaScript#general_javascript_guidelines
- All coded functions and problem-solving strategies will be explained in clear and detailed code comments


