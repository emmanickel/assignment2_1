# Testing Requirements Report
### Emma Nickel

<br>

## Introduction

This testing requirements report will be used to outline the confirmed requirements for the MusoPlan software. It will also explain how the testing conducted will maintain compliance with the organisational requirements of Globex Corporation.

<br>

## Test Requirements
After meeting with the product manager, the following testing requirements were confirmed:

- All automated testing is to be done using Jest, and must have over 75% coverage of functions.
- The test progress report must include an appendix with a JUnit xml document of the automated testing results
- All manual test instructions must be clear enough for anyone to follow and verify the software
- The software test plan must include:
    - Automatic unit testing
    - Manual unit testing 
    - Manual system testing of the program
    - Test cases with purposefully invalid, incorrect, or malformed inputs

<br>

## How testing fits the SDLC of the project

The Software Development Life Cycle (SDLC) of the MusoPlan project follows the iterative Waterfall model, where phases are repeated until the newly developed feature is considered suitable. Once the feature is successfully completed the project moves sequentially onto the next phase. This model enables more flexibility and adaptability compated to the otherwise rigid Waterfall structure. Ideally, in this model testing would be primariliy conducted in parallel to the software implementation. Frequent testing during the implementation phase would ensure each completed feature is error-free and fully-functioning before moving on to the next.

While manual testing was conducted during implementation phases to minimise the accumulation of bugs, the automated testing aspect was not implemented until the software was completely developed. In future, automated testing will take place during the implementation phase to reduce the chances a catastrophic failure occurring during project deployment and maintenance phases. In turn, this will minimise project costs and time.

<br>

## Manual Testing Process
The manual testing process will involve conducting at least 4 unit tests on software requirements (E.g. Create a musician) using command-line input. For each unit test, multiple test cases will be documented including at least one base case, edge case and a boundary value. The expected output of the given input will be compared with the actual output of the test case.

The following 4 unit tests will be conducted manually:

1. Create a Musician
2. Create a Troupe
3. Add a musician to a Troupe
4. Provide a summary description of a Troupe

The integration of the above functions within the program system will be tested as part of this manual testing process.

<br>

## Automated Testing Process
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

*Note: Test cases will include boundary values (case on edge of equivalence partitioning), a base case (expected input), edge case (unexpected input), and corner case (multiple unexpected inputs) whereever possible.*

<br>

**Execution steps for automated testing:** 

*Note: The execution steps required are identical for all automated tests. Screenshots of CLI output as well as JUnit xml report will be included in Test Progress Report.*

1. To run Jest automated testing, run the following command in the terminal:

        npm run test-coverage
 
2. Observe the results and coverage of testing returned in the command line.
3. Access the Junit xml document (*junit.xml*) produced as a result of the testing from the current working directory.

