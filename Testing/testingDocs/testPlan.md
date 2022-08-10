# Test Plan

### Emma Nickel

<br>

## Introduction

Automated and manual testing will be conducted on the MusoPlan Software. The automated testing will be done using the npm framework Jest, with JUnit for reporting test results. Manual testing will be conducted through the command line and clearly documented. It is expected that the testing process will reveal any (although not all) defects in the software, allowing modifications to be made accordingly. During testing, data structures such as arrays of objects will be handled corresponding to the required input parameters of the methods being tested. The scope for test cases will include boundary values (case on edge of equivalence partitioning), base cases (expected input), edge cases (unexpected input), and corner cases (multiple unexpected inputs) where applicable.

<br>

## Test Plan: Manual Testing

The following manual test aims to demonstrate the successful operation of 4 of the MusoPlan application's 8 functions by describing the expected outputs of the program in response to valid user inputs.

<br>

**Identifier:** Test 1

**Test Case:** Create Musician Module

User must be able to create a musician using prompts given in the command-line.

**Input Values:**
| Prompt | Input |
|---|---|
| Please enter your selection [1, 2, 3, 4, 5, 6, 7, 8, 9]: | "1" |
| Please choose a type of instrumentalist (guitarist/bassist/percussionist/flautist): | "guitarist" |
| Enter the musician's name: | "Emma Nickel" |
| Enter the number of years the musician has been playing: | "7" |
| Enter the musician's hourly rate: | "65" |

**Execution Steps:**
1. Run the software using command prompt (entry point file is run using the command: `node index.js` and main menu is returned to indefinitely until user exits the application).
2. Enter the input values (press the *enter* key after each input).

**Output values:**
| Prompt | Input | Output |
|---|---|---|
| Please enter your selection [1, 2, 3, 4, 5, 6, 7, 8, 9]: | "1" | You have selected to register a musician. |
| Please choose a type of instrumentalist (guitarist/bassist/percussionist/flautist): | "guitarist" | Success (no error) |
| Enter the musician's name: | "Emma Nickel" | Success (no error) |
| Enter the number of years the musician has been playing: | "7" | Success (no error) |
| Enter the musician's hourly rate: | "65" | Success (no error) |

After entering the above input values, the following output will display in the command line, indicating success.

> You have successfully created a musician. <br> <br> Press the enter key to continue.

<br>

**Identifier:** Test 2

**Test Case:** Create Troupe Module

User must be able to create a Troupe using prompts given in the command-line.

**Input Values:**
| Prompt | Input |
|---|---|
| Please enter your selection [1, 2, 3, 4, 5, 6, 7, 8, 9]: | "2" |
| Enter the troupe's name: | "The Strokes" |
| Enter the troupe's minimum duration (between 0.5 and 3 hrs): | "2.25" |
| Enter the troupe's genre (rock/jazz/pop): | "rock" |

**Execution Steps:**
1. Run the software using command prompt (entry point file is run using the command: `node index.js` and main menu is returned to indefinitely until user exits the application).
2. Enter the input values (press the *enter* key after each input).

**Output values:**
| Prompt | Input | Output |
|---|---|---|
| Please enter your selection [1, 2, 3, 4, 5, 6, 7, 8, 9]: | "2" | You have selected to register a troupe. |
| Enter the troupe's name: | "The Strokes" | Success (no error) |
| Enter the troupe's minimum duration (between 0.5 and 3 hrs): | "2.25" | Success (no error) |
| Enter the troupe's genre (rock/jazz/pop): | "rock" | Success (no error) |


After entering the above input values, the following output will display in the command line, indicating success.

> You have successfully created a troupe. <br> <br> Press the enter key to continue. 

<br>

**Identifier:** Test 3

**Test Case:** Add a musician to a Troupe

User must be able to add a musician to a troupe using prompts given in the command-line.

**Input Values:**
| Prompt | Input |
|---|---|
| Please enter your selection [1, 2, 3, 4, 5, 6, 7, 8, 9]: | "3" |
| The current available musicians are: <br> - Emma Nickel <br> Please select a musician from the list above: | "Emma Nickel" |
| The current available troupes are: <br> - The Strokes <br> Please select a troupe from the list above: | "The Strokes" |

**Execution Steps:**
1. Run the software using command prompt (entry point file is run using the command: `node index.js` and main menu is returned to indefinitely until user exits the application).
2. Enter the input values (press the *enter* key after each input).

**Output values:**
| Prompt | Input | Output |
|---|---|---|
| Please enter your selection [1, 2, 3, 4, 5, 6, 7, 8, 9]: | "3" | You have selected to add a musician to a troupe. |
| The current available musicians are: <br> - Emma Nickel <br> Please select a musician from the list above: | "Emma Nickel" | Success (no error) |
| The current available troupes are: <br> - The Strokes <br> Please select a troupe from the list above: | "The Strokes" | You have selected the troupe: The Strokes. |


After entering the above input values, the following output will display in the command line, indicating success.

> Successfully added Emma Nickel to The Strokes. <br> The current members of The Strokes are: <br> - Emma Nickel <br> <br> Press the enter key to continue.

<br>

**Identifier:** Test 4

**Test Case:** Provide a summary description of a Troupe

User must be able to obtain a summary description of their selected troupe using prompts given in the command-line.

**Input Values:**
| Prompt | Input |
|---|---|
| Please enter your selection [1, 2, 3, 4, 5, 6, 7, 8, 9]: | "4" |
| Enter the troupe's name: | "The Strokes" |
| Enter the troupe's minimum duration (between 0.5 and 3 hrs): | "2.25" |
| Enter the troupe's genre (rock/jazz/pop): | "rock" |

**Execution Steps:**
1. Run the software using command prompt (entry point file is run using the command: `node index.js` and main menu is returned to indefinitely until user exits the application).
2. Enter the input values (press the *enter* key after each input).

**Output values:**

| Prompt | Input | Output |
|---|---|---|
| Please enter your selection [1, 2, 3, 4, 5, 6, 7, 8, 9]: | "4" | You have selected to provide a summary description of a troupe. |
| The current available troupes are: <br> - The Strokes <br> Please select a troupe from the list above: | "The Strokes" | Success (no error) |

After entering the above input values, the following output will display in the command line, indicating success.

> Summary Description <br> ============================== <br> Troupe name: The Strokes <br> ============================== <br> Members: <br> - Emma Nickel <br> Instruments: <br> - Guitarists: 1 <br> - Bassists: 0 <br> - Percussionists: 0 <br> - Flautists: 0 <br> Genre: rock <br> Minimum duration: 2.25 hours <br> Hourly rate: $65/hr <br> <br> Press the enter key to continue.

<br>

## Test Plan: Automated Testing Using Jest Framework

All automated testing will be conducted using the npm package Jest, which is an open-source testing framework used widely for testing JavaScript code. For reporting purposes, the Jest reporter jest-junit will be used to create junit xml files.

Automated testing will be conducted on the following classes within the MusoPlan software:

- Troupe Class
- Musician Class
- Child Classes of the Musician Class:
    - Guitarist Class
    - Bassist Class
    - Percussionist Class
    - Flautist Class

**Setup instructions for automated testing:**
1. After installing the npm packages 'Jest' and 'jest-junit', a JS test file corresponding to each class will be created (6 files total) using the naming convention *className.test.js*.
2. One unit test will be conducted for each of the 'setter/getter' functions of the class, within which 4 test cases will be documented.
3. One unit test will be conducted for each of the methods defined in the class, within which 4 test cases will be documented.

*Note: Test cases will include boundary values (case on edge of equivalence partitioning), a base case (expected input), edge case (unexpected input), and corner case (multiple unexpected inputs) ver possible.*

<br>

**Execution steps for automated testing:** 

*Note: The execution steps required are identical for all automated tests. Screenshots of CLI output as well as JUnit xml report will be included in Test Progress Report.*

1. To run Jest automated testing, run the following command in the terminal:

        npm run test-coverage
 
2. Observe the results and coverage of testing returned in the command line.
3. Access the Junit xml document (*junit.xml*) produced as a result of the testing from the current working directory.

<br>

## Musician class

<br>

**Unit test 1: Set musician instrument** (either guitarist/bassist/percussionist/flautist)
| Case | Input Values | Expected Output |
|---|---|---|
| 1 | "guitarist" | set | 
| 2 | "gitarust" | throw error |
| 3 | "guitarist and bassist" | throw error |
| 4 | "saxophonist" | throw error |

<br>

**Unit test 2: Set musician name** (between 3 and 30 characters
| Case | Input | Expected Output |
|---|---|---|
| 1 | "Emma Nickel" | set |
| 2 | "Eli" | set | 
| 3 | "Em" | throw error |
| 4 | "Salvador Felipe Jacinto Dali y Domenech" | throw error |

<br>

**Unit test 3: Set musician years playing** (non-negative)
| Case | Input | Expected Output | 
|---|---|---|
| 1 | "5" | set | 
| 2 | "0" | set |
| 3 | "-1" | throw error | 
| 4 | "Four" | throw error | 

<br>

**Unit test 4: Set musician hourly rate** (greater than 50)
| Case | Input | Expected Output | 
|---|---|---|
| 1 | "70" | set |
| 2 | "50" | set |
| 3 | "49" | throw error | 
| 4 | "Fifty-five" | throw error |

<br>

**Unit test 5: Add musician**
| Case | Input | Expected Output | 
|---|---|---|
| 1 | "musi = new Musician()" | musicians array length increases by one | 
| 2 | "musi1 = new Musician() <br> musi2 = new Musician()" | musicians array length increases by two | 
| 3 | "musi1 = new Musician() <br> musi2 = new Musician() <br> musi3 = new Musician()<br> musi4 = new Musician() <br> ......... <br> musi10 = new Musician() " | musicians array length increases by 10 | 
| 4 | No new musician added | musicians array length does not increase | 

<br>

## Troupe class

<br>

**Unit test 1: Set troupe name** (between 3 and 30 characters
| Case | Input | Expected Output |
|---|---|---|
| 1 | "The Strokes" | set |
| 2 | "The" | set |
| 3 | "St" | throw error |
| 4 | "Extremely tremendously very very long troupe name" | throw error |

<br>

**Unit test 2: Set troupe minimum duration** (between 0.5 and 3 hours)
| Case | Input | Expected Output | 
|---|---|---|
| 1 | "2" | set |
| 2 | "0.5" | set | 
| 3 | "3" | set |
| 4 | "0" | throw error |
| 5 | "5" | throw error | 
| 6 | "Three" | throw error | 

<br>

**Unit test 3: Set troupe genre** (either rock/jazz/pop)
| Case | Input | Expected Output | 
|---|---|---|
| 1 | "rock" | set | 
| 2 | "rok" | throw error | 
| 3 | "Blues" | throw error |
| 4 | "" | throw error | 

<br>

**Unit test 4: Calculate hourly rate**
| Case | Input | Expected Output | 
|---|---|---|
| 1 | Troupe containing two members | hourly rate of troupe returned |
| 2 | Troupe containing five members | hourly rate of troupe returned |
| 3 | Troupe contains no members | throw error | 

<br>

**Unit test 5: Add troupe**
| Case | Input | Expected Output |
|---|---|---|
| 1 | "troupe = new Troupe()" | troupes array length increases by 1 | 
| 2 | "troupe1 = new Troupe() <br> troupe2 = new Troupe()" | troupes array length increases by 2 | 
| 3 | "troupe1 = new Troupe() <br> troupe2 = new Troupe() <br> troupe3 = new Troupe() <br> troupe4 = new Troupe() <br> ......... <br> troupe10 = new Troupe() " | troupes array length increases by 10 | 
| 4 | No new troupe added | troupes array length does not increase | 

<br> 

## Guitarist Class

*Note: Tests conducted on the child classes of the Musician class (Guitarist, Bassist, Percussionist and Flautist classes) were virtually identical as each of these classes only contained the method `giveInterestingFact()`. Since the method takes no input parameters and simply returns a string, only one test case could be conducted for each.*

**Unit test 1: Give interesting fact**
| Case | Input | Expected Output | 
|---|---|---|
| 1 | "guitarist = new Guitarist()" | String returned matches | 

<br> 

## Bassist Class
**Unit test 1: Give interesting fact**
| Case | Input | Expected Output | 
|---|---|---|
| 1 | "bassist = new Bassist()" | String returned matches | 
<br> 

## Percussionist Class
**Unit test 1: Give interesting fact**
| Case | Input | Expected Output | 
|---|---|---|
| 1 | "percussionist = new Percussionist()" | String returned matches |
<br> 

## Flautist Class
**Unit test 1: Give interesting fact**
| Case | Input | Expected Output | 
|---|---|---|
| 1 | "flautist = new Flautist()" | String returned matches | 

