# Final Meeting Minutes
### Emma Nickel

*Hold a meeting with the product manager for MusoPlan to discuss the test progress report, be sure to discuss:*

## How your test plan fits into the SDLC

SDLC Phases:
1. Planning
    - Reading the project brief 
    - Obtaining clarity on the problem as a whole
    - Understanding overall project objectives
2. Analysis
    - Problem details analysed in detail
    - Breaking the problem down into subsystems
3. Design
    - Come up with solutions to each subsystem's requirements
    - Ensure subsystems will work cohesively to solve the problem
4. Implementation
    - Writing the code for the software
    - Committing all changes to VCS with descriptions
5. Testing
    - Find defects in behaviour - find every way that code doesn't work
    - Expected vs actual output
6. Deployment
    - Let software 'loose' into the world/public
7. Maintenance
    - Fixing any issues/bugs that emerge once project has been deployed

## How your test cases relate to the requirements identified in activity 1


**1.	User input through the command line:**
-	Taking user input through the command line is the most suitable and efficient option considering the project budget. A GUI may be developed later if budget and time frame allow.
-	All prompts displayed in the user interface are to be detailed and in full sentences. 
-	All 8 functions of the application are to be listed in a numbered menu for the user to select from by entering the number corresponding to their chosen function.

**2.	Confirmation of user input conditions:**
-	The input conditions outlined in the brief were clarified to be:
    -	Musician data requirements:
        -	Name between 3 and 30 characters (`name.length >= 3 && name.length <= 30`)
        -	Must play one (only one) of the four instruments: Guitar, Bass, Percussion or Flute (`inst == 'Guitar' | inst == ‘Bass’ | inst == ‘Percussion’ | inst == ‘Flute’`)  
        -	Years playing must be non-negative (`years_playing >= 0`)
        -	Hourly rate must be greater than or equal to $50 (`hrly_rate >= 50`)
    -	Troupe data requirements:
        -	Name between 3 and 30 characters (`name.length >= 3 && name.length <= 30`)
        -	No more than 5 musicians (`troupeName.members.length <= 5`) and can have multiple of the same instrument
        -	Valid genre from three choices: rock, jazz, pop (`genre == ‘rock’ | genre == ‘jazz’ | genre == ‘pop’`) 
        -	Minimum duration in hours between 0.5 and 3 (`minDur >= 0.5 && minDur <= 3`)
-	A detailed error message is to be displayed to the if they enter invalid input, and unlimited attempts are to be given.

**3.	Format of file input of troupe names:** 
-	The list of troupe names provided in the file will be separated line-by-line.

**4.	Outputs to user through the command line and to file:**
-	User outputs through the command line will be given line-by-line and in full sentences explaining the meaning of the output.
-	Only the 8 listed functionalities of the application are to be implemented. No extra functions are required.
-	The detailed description of all troupes is to be sent to a single file named troupeName.txt, and the text should be separated line-by-line, with a blank line separating each troupe.

**5.	Overall operational features of the application:**
-	Once the user finishes executing a functionality through the app the menu is to be displayed again (an infinite number of times) so they can choose to execute another functionality of the application.
-	A 9th option will be added to the menu list which allows the user to exit the program.

## Any defects identified and strategies for managing them

<br> 

*Add the minutes of the meeting to the test directory in your MusoPlan repository, and ensure all your testing related branches have been merged back into the main branch in compliance with organisational requirements.*

*Submit a zip of your MusoPlan repository via the Learning Management System.*