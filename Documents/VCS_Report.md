# VCS Report
### Emma Nickel

<br>

Version Control Systems (VCS) are software tools used to track changes in files over time, allowing teams to work simultaneously on a project and integrate proposed changes smoothly.

<br>

## Different VCS Investigated

**Git**

Git is a free distributed VCS, meaning that versions can be saved in a server-side remote repository as well as in local repositories on the client's machine. Launched in 2005 by Linus Torvalds, Git is written in C, Shell, Perl, TCL (Tool Command Language), and Python. While it has a steep learning curve, it currently holds 80% of VCS market share. Hence, most developers are familiar with its operation.

<br>

**Concurrent Versioning System (CVS)**

CVS is a free client-server revision control system that was developed by Dick Grune in 1986 in the UNIX OS environment. It operates as a front end to Revision Control System, which is an older VCS that managed files individually rather than whole projects. CVS keeps a working master copy of the file up-to-date and requires manual intervention only when an edit conflict occurs. This enables multiple developers to work on a file (their own copy) simultaneously without losing data. The 'branches' can later be merged to a single copy.

<br>
	
**Mercurial**

Mercurial is a free distributed VCS that was launched in 2005 by developer Olivia Mackall. While Mercurial is used by Facebook, Mozilla and the World Wide Web Consortium (W3), it holds only has 2% of VCS market share.
Mercurial was written mainly in Python, and partly with C. Mercurial is similar in power to Git, however many developers find it easier to learn due to its great UX.

<br>

##	Benefits of Different VCS

|  Git | CVS | Mercurial |
|---|---|---|
| - Distributed model <br> - Many powerful commands available <br> - Fast and efficient performance allows use in large-scale projects <br> - Cross-platform (works on many operating systems)<br> - Supports atomic (all file) commits <br>- Powerful CL utility git bash can be used or user-friendly Git GUI |- Excellent cross-platform support <br> - Powerful, fully-featured command-line client <br> - Very old and well understood (considered to be a ‘mature technology’) <br> - Allows good web browsing of source code repository | - Distributed Model <br> - Safer for less experienced users <br> - Conceptually simple with great UX, making it easy to use and learn (in comparison to Git) <br> - Fast and powerful |

<br>

## How the chosen VCS fits organisational requirements
**Chosen VCS: Git**

While it has a steep learning curve, Git’s power as a distributed VCS and wide use in industry makes it a good choice for the MusoPlan project. Git will allow Globex’s software developers to work as a team in parallel, with all development to take place on feature branches (leaving the main branch exclusively for initialisation and merges). Git also fits the project's organisational requirements by allowing all commits to be made with industry standard messages that track all changes in detail and contain both the author’s name and email address.

<br>

## Installation process

To install Git for Windows, follow the steps below:
1. Download the latest Git for Windows from the website: https://git-scm.com/download/win
3. Click on the .exe file (in your Downloads folder) and follow the instructions in the installer.
4. Launch the Git Bash application.
5. Windows will prompt the following message: “Do you want to allow this app to make changes to your device?”. Click *Yes*.
6. Select *Next* in all of the following steps to install Git Bash using default settings.
7. Select *Finish* to complete the installation process.
8. Launch Git, either by running the Git Bash application or through your default editor.
9. Confirm Git has been installed correctly by running the following command:

        git --version

    If the terminal returns a version of Git (e.g. `git version 2.36.1.windows.1`), it has been successfully installed to your system.

<br>

**Git Pre-Installation Factors/Common Git Installation Issues**

Common Git installation issues include:
- Git is already installed to the system (confirm by running the version command above)
- The user did not select the default settings
- User did not select the recommended PATH environment (*use Git from the command line and also from 3rd-party software*)

<br>

**Configuration process** 

In order to configure Git so that all commits show the author's name and email, run the following commands:

    git config --global user.name "Emma"
    git config --global user.email emmajanenickel@gmail.com

To confirm the configuration details have been set correctly, you may run the command:

    git config --list

<br>

## References

Centralized vs Distributed Version Control Systems [CVCS vs DVCS]. (2022). Retrieved 1 August 2022, from https://devopsbuzz.com/centralized-vs-distributed-version-control-systems/#:~:text=The%20concept%20of%20a%20centralized,repo%20on%20the%20server%20side.

Essential CVS, 2nd Edition. (2022). Retrieved 1 August 2022, from https://www.oreilly.com/library/view/essential-cvs-2nd/0596527039/ch01.html

How to install Git Bash in Windows. (2022). Retrieved 1 August 2022, from https://www.educative.io/answers/how-to-install-git-bash-in-windows

How To Install Git Bash On Windows. (2022). Retrieved 1 August 2022, from https://www.stanleyulili.com/git/how-to-install-git-bash-on-windows/#step-1-downloading-git-bash

Version Control Software Comparison: Git, Mercurial,CVS, SVN. (2022). Retrieved 1 August 2022, from https://medium.com/@derya.cortuk/version-control-software-comparison-git-mercurial-cvs-svn-21b2a71226e4

What Is Version Control and How Does It Work? | Perforce Software. (2022). Retrieved 1 August 2022, from https://www.perforce.com/blog/vcs/what-is-version-control#:~:text=Version%20control%2C%20also%20known%20as,binary%20files%2C%20and%20digital%20assets.

2022 Version Control Software Comparison: SVN, Git, Mercurial. (2022). Retrieved 1 August 2022, from https://biz30.timedoctor.com/git-mecurial-and-cvs-comparison-of-svn-software/