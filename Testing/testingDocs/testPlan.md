# Test Plan

### Emma Nickel

<br>

## Introduction

Automated and manual testing will be conducted on the MusoPlan Software. The automated testing will be done using the npm framework Jest, with JUnit for reporting test results. Manual testing will be conducted through the command line and documented clearly according to the following test plan.

- It is expected that the testing conducted will reveal any (although not all) defects in the software, allowing modifications to be made accordingly.

- The data structures required during testing include

- The scope for test cases include base cases, edge cases, boundary values and corner cases where applicable.

<br>

## Test Plan: Manual Testing

The proposed test plan steps are as follows:

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

*Test conducted at 12pm on 10/08/22*

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

*Test conducted at 12pm on 10/08/22*

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

*Test conducted at 12pm on 10/08/22*

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

*Test conducted at 12pm on 10/08/22*

<br>

## Test Plan: Automated Testing Using Jest Framework

All automated testing will be conducted using the npm package Jest, which is an open-source testing framework used widely for testing JavaScript code. For reporting purposes, the Jest reporter jest-junit will be used to create junit xml files.

Automated testing will be conducted on the following classes within the MusoPlan software:

- Troupe Class
- Musician Class
- Guitarist Class
- Bassist Class
- Percussionist Class
- Flautist Class

**Process for automated testing:**
1. After installing the npm packages 'Jest' and 'jest-junit', a JS test file corresponding to each Class will be created.
2. For each of the 'setter/getter' functions of the class, one unit test will be conducted, within which 3-4 test cases (including a base case, edge case and boundary values) will be documented.
3. For each of the class methods, one unit test will be conducted, within which 2-4 test cases (including a base case, edge case and boundary values) will be documented.
4. The success of these tests will be demonstrated by running the Jest framework through the command line. 
5. The Junit xml document produced as a result of the testing will be included in the test progress report.

<br>

## Musician class

<br>

**Unit test 1: Set musician instrument** (either guitarist/bassist/percussionist/flautist)
| Case | Input | Expected Output | Actual Ouput | Pass/Fail |
|---|---|---|---|---|
| 1 (base) | "guitarist" | set | set | Pass  |
| 2 (edge) | "saxophonist" | throw error | throw error | Pass |

<br>

**Unit test 2: Set musician name** (between 3 and 30 characters
| Case | Input | Expected Output | Actual Ouput | Pass/Fail |
|---|---|---|---|---|
| 1 (base) | "Emma Nickel" | set | set | Pass  |
| 2 (boundary value) | "Eli" | set | set | Pass  |
| 3 (edge) | "Em" | throw error | throw error | Pass |

<br>

**Unit test 3: Set musician years playing** (non-negative)
| Case | Input | Expected Output | Actual Ouput | Pass/Fail |
|---|---|---|---|---|
| 1 (base) | "5" | set | set | Pass  |
| 2 (boundary value) | "0" | set | set | Pass  |
| 3 (edge) | "-1" | throw error | throw error | Pass |
| 4 (edge) | "Four" | throw error | throw error | Pass |

<br>

**Unit test 4: Set musician hourly rate** (greater than 50)
| Case | Input | Expected Output | Actual Ouput | Pass/Fail |
|---|---|---|---|---|
| 1 (base) | "70" | set | set | Pass  |
| 2 (boundary value) | "50" | set | set | Pass  |
| 3 (edge) | "49" | throw error | throw error | Pass |
| 4 (edge) | "Fifty-five" | throw error | throw error | Pass |

<br>

**Unit test 5: Add musician**
| Case | Input | Expected Output | Actual Ouput | Pass/Fail |
|---|---|---|---|---|
| 1 (base) | "musi = new Musician()" | musicians array length increases by one | musicians array length increases by one | Pass  |
| 2 (base) | "musi1 = new Musician() <br> musi2 = new Musician()" | musicians array length increases by two | musicians array length increases by two | Pass  |
| 3 (edge) | NULL | throw error | throw error | Pass  |
| 4 (edge) | "musi = Emma" | throw error | throw error | Pass  |

<br>

## Troupe class

<br>

**Unit test 1: Set troupe name** (between 3 and 30 characters
| Case | Input | Expected Output | Actual Ouput | Pass/Fail |
|---|---|---|---|---|
| 1 (base) | "The Strokes" | set | set | Pass  |
| 2 (boundary value) | "The" | set | set | Pass  |
| 3 (edge) | "St" | throw error | throw error | Pass |

<br>

**Unit test 2: Set troupe minimum duration** (between 0.5 and 3 hours)
| Case | Input | Expected Output | Actual Ouput | Pass/Fail |
|---|---|---|---|---|
| 1 (base) | "2" | set | set | Pass  |
| 2 (boundary value) | "0.5" | set | set | Pass  |
| 3 (boundary value) | "3" | set | set | Pass  |
| 4 (edge) | "0" | throw error | throw error | Pass |
| 5 (edge) | "5" | throw error | throw error | Pass |
| 6 (edge) | "Three" | throw error | throw error | Pass |

<br>

**Unit test 3: Set troupe genre** (either rock/jazz/pop)
| Case | Input | Expected Output | Actual Ouput | Pass/Fail |
|---|---|---|---|---|
| 1 (base) | "rock" | set | set | Pass  |
| 2 (edge) | "Blues" | throw error | throw error | Pass |
| 3 (edge) | "" | throw error | throw error | Pass |

<br>

**Unit test 4: Calculate hourly rate**
| Case | Input | Expected Output | Actual Ouput | Pass/Fail |
|---|---|---|---|---|
| 1 (base) | "troupe = new Troupe()" (contains two musicians) | hourly rate of troupe returned | hourly rate of troupe returned | Pass  |
| 2 (edge) | Troupe contains no members | throw error | throw error | Pass  |

<br>

**Unit test 5: Add troupe**
| Case | Input | Expected Output | Actual Ouput | Pass/Fail |
|---|---|---|---|---|
| 1 (base) | "troupe = new Troupe()" | troupes array length increases by one | troupes array length increases by one | Pass  |
| 2 (base) | "troupe1 = new Troupe() <br> troupe2 = new Troupe()" | troupes array length increases by two | troupes array length increases by two | Pass  |

<br> 

## Guitarist Class
**Unit test 1: Give interesting fact**
| Case | Input | Expected Output | Actual Ouput | Pass/Fail |
|---|---|---|---|---|
| 1 (base) | "guitarist = new Guitarist()" | String returned matches | String returned matches | Pass  |

<br> 

## Bassist Class
**Unit test 1: Give interesting fact**
| Case | Input | Expected Output | Actual Ouput | Pass/Fail |
|---|---|---|---|---|
| 1 (base) | "bassist = new Bassist()" | String returned matches | String returned matches | Pass  |
<br> 

## Percussionist Class
**Unit test 1: Give interesting fact**
| Case | Input | Expected Output | Actual Ouput | Pass/Fail |
|---|---|---|---|---|
| 1 (base) | "percussionist = new Percussionist()" | String returned matches | String returned matches | Pass  |
<br> 

## Flautist Class
**Unit test 1: Give interesting fact**
| Case | Input | Expected Output | Actual Ouput | Pass/Fail |
|---|---|---|---|---|
| 1 (base) | "flautist = new Flautist()" | String returned matches | String returned matches | Pass  |

