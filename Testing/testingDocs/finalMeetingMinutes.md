# Final Meeting Minutes
### Emma Nickel

<br>

The following points were discussed during the final meeting with the MusoPlan product manager.

<br>

## Challenges faced during testing
Since the automated testing setup and process was only learned once the MusoPlan software was completed, modifications needed to be made to the code during testing. Now that the automated testing process is understood, code can be implemented with testing in mind (reducing the need for software modifications to be made during testing).

<br>

## How test plan fits the SDLC

- The Software Development Life Cycle (SDLC) of the MusoPlan project follows the iterative Waterfall model, where phases are repeated until the newly developed feature is considered suitable. Once the feature is successfully completed the project moves sequentially onto the next phase.
- This model enables more flexibility and adaptability compated to the otherwise rigid Waterfall structure.
- Ideally, in this model testing would be primariliy conducted in parallel to the software implementation. Frequent testing during the implementation phase would ensure each completed feature is error-free and fully-functioning before moving on to the next.
- While manual testing was conducted during implementation phases to minimise the accumulation of bugs, the automated testing aspect was not implemented until the software was completely developed.
- In future, automated testing will take place during the implementation phase to reduce the chances a catastrophic failure occurring during project deployment and maintenance phases. In turn, this will minimise project costs and time.

<br>

## How test cases relate to the requirements identified in activity 1
The testing requirements that were identified in activity 1 were complied with:

- All automated testing is to be done using Jest, and must have over 75% coverage of functions.
> This was achieved (100% coverage of functions)
- The test progress report must include an appendix with a JUnit xml document of the automated testing results
> JUnit xml document linked in appendix of progress report
- All manual test instructions must be clear enough for anyone to follow and verify the software
> Detailed instructions were provided (including setup instructions)
- The software test plan include:
    - Automatic unit testing
    - Manual unit testing 
    - Manual system testing of the program
    - Test cases with purposefully invalid, incorrect, or malformed inputs
> All of the above were included in the test plan

<br>

## Produce and save test progress reports
The test progress report can be accessed [here](./testProgressReport.md).

<br>

## Manage defects and review software, amending further defects
- Any defects identified during the manual and automated testing process were resolved immediately.
- The code is by no means 'bug-free', however it functions successfully according to client requirements and no catastrophic errors have been observed.
- There is always room to improve software, according to budget and time constraints. For example, by:
    - Adding GUI to improve UX
    - Modifying code to ensure maximum efficiency
    - Adding more functions to the application
