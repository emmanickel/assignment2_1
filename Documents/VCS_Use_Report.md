# VCS Use Report

### Emma Nickel

<br>

Document your use and management of VCS in a VCS use report (400-600 words).

## Difficulties or challenges during development

Some of the main challenges that were faced during the development process included:
- Ensuring setup was correct upon cloning the repository and beginning development on feature branches
- Ensuring I was on the correct feature branch when developing .js and .md files repectively
- Ensuring that git commits were made regularly with detailed messages, as this was the first project undertaken using the Git VCS.
 - It was easy to forget to commit immediately after making a change, which made it difficult to remember what changes were made upon writing the commit message

<br>

## How you complied with the organisational requirements

The organisational requirements for VCS were complied with by:
- Choosing a suitable distributed VCS (Git) for project development
- Undertaking all development on feature branches (leaving the main branch for initialisation and merges only)
- Ensuring all commit messages made followed the industry standard of being in the present tense and imperative mood, as well as containing both the author's name and email address
- Ensuring all commits were kept to a single change
- Including a README.md file at the start of the repository, and ensuring no source code was present

<br>

## How you verified the VCS was performing as expected, behaviours you should test and describe include

To verify the chosen VCS (Git) was performing as expected, the following command was run frequently:

        git status

This returns the current status of staged, tracked and untracked files, allowing the relevant commits to be made.

**- branches**

**- stages**

**- commits**

**- merges**

**- push/pull to share commits with remotes**

**- pull requests**

**- commit log**



Additionally, frequent checking of the commit history allowed for changes to be tracked in a logical way. This was done by running the command:

    git log

Immediately after initialising the repository, feature branches were created for development
- All development on JS files was conducted on a branch called `jsFiles` and all development on project reports was conducted on the branch `assignmentDocs`
- These feature branches could be merged to the main branch once development was complete
- Once all branches were merged to main, the changes could be pushed to the remote repository:

        git push origin

- Pull requests could be made if someone forked from the remote repository and wanted to integrated their changes
    
Commits were made frequently, after every single change with detailed messages explaining the change (in the industry format of present imperative tense). Frequent commits allowed the changes to be tracked effectively


<br>

## If your repository was forked from another repository, how would you go about having them integrate your changes to the central repository? 
- Pull Request (PR)
