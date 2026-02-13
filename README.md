# Assignment 3
## Details
<b>Framework: React</b> \
Author: Anurag R Simha \
University ID: 14763701 \
Drexel Email: ars589@drexel.edu

## Installation Guidelines
You can do **any one** of these:

<b>A. Super quick and easy:</b> \
i. If you are on a Linux/MacOS machine: \
Simply download and run setup.sh either from this repository by clicking the download button, or click on this link to directly download the script: [setup.sh](https://gitlab.com/anurag.rsimha/cs530-assignment-3/-/raw/main/setup.sh?ref_type=heads&inline=false)

This script is **completely safe** to run. It only runs a set of git and npm commands.

It takes care of the **entire setup process for you including running the application**. All you've got to do is execute the following commands: 
```
chmod +x setup.sh
``` 
```
./setup.sh
```
ii. If you are on a windows machine: \
Simply download and run setup.bat either from this repository by clicking the download button, or click on this link to directly download the script: [setup.bat](https://gitlab.com/anurag.rsimha/cs530-assignment-3/-/raw/main/setup.bat?ref_type=heads&inline=false)

**OR**

<b>B. Manual process:</b> \
Running the commands executed by setup.sh:
```
git clone git@gitlab.com:anurag.rsimha/cs530-assignment-3.git
```
```
cd cs530-assignment-3
```
```
npm install
```
```
npm run dev
```

Copy and paste/Ctrl+Click the link shown on the terminal window.

If you don't have npm installed, please download it from https://nodejs.org/en or run `apt install npm` if you are on a Linux machine.

## Implementation Details
### Directory Structure Followed
```
├── assets/
│   ├── background.jpg --> Application background         
│   └── react.svg --> Created by default during setup
├── components/
│   ├── DetailsDisplay.jsx --> Displays name and age
│   ├── Form.jsx --> Main form with required elements
│   ├── Layout.jsx --> Wrapper for Form and DetailsDisplay
│   ├── regex.js --> Regex properties file with validation regex values
│   └── validation.js --> JavaScript file that validates user input
├── App.css --> Contains CSS for the entire project
├── App.jsx --> Parent for setting up everything
├── index.css --> Default file created during setup
└── main.jsx --> The root file (also created during setup)
```
### File Interaction
- The file, main.jsx acts as the root, which sets up the parent, App.jsx.
- In App.jsx, which is the parent, everything is rendered. It sets up the layout, the form, and the display component.
- App.jsx uses "useState" to handle data during input. It captures and sends them to the form and display components.
- Form.jsx is where the entire form is rendered. It utilizes a JavaScript file called validation.js where the user's input is validated as they type in data. The submission button enables only when all of the entered data is correct.
- With the details captured in Form, DetailsDisplay.jsx displays them once the "Submit" button is clicked.
- Both, App.jsx and Form.jsx use the "useState" library provided by react to handle states during input.
- Below is a textual representation of only the flow of data:
```
            ┌─3── Abc, 24 ──> DetailsDisplay.jsx
            ↑                            
          App.jsx ───1───> Form.jsx      
            ↑                  ↓         
            └── Abc, 24 ────2──┘     
```

### Input Validation
Several ways of data entry were considered to perform validation.\
Name:
1. No name can contain a single character. There should be a minimum of two characters.
2. No name can contain numbers in digital format like Alfred 3, Leonard 2, etc. But, can contain numbers in Roman numeral. For example, names like Alfred III, Leonard II, etc. are allowed.
3. Names with special characters like Alfred*, Leonard! are not allowed. Exceptions exist for names with apostrophes and hyphens. For example, names like Eric O'Connor, Ella-rose, Sean D'Bordeaux, etc. are allowed.
4. No matter the case you use to enter your name, the program formats it properly and sends the data. For example, if you enter gEOrgE O'rEillY iIi, the output will present George O'Reilly III as the name.

The regex, "/[^\p{L}\s'-]/u" performs checks (2) and (3). The \p{L} is there to support names in multiple languages like Bård, Jørgen, Weiß, Özdemir, Núñez, Ibáñez, etc. The apostrophe and hyphen allow names like O'Reilly, Ella-rose, etc.

There is a regex properties file called "regex.js" that contains the regex values used while performing a validation or conversion. This has been made in order to adapt to any change in the requirements of the format of a name.

A good string to test for the name is: 
```
BårdJørgen-o'weißÖzdemir d'NúñezIbáñez mXcIv
```
The output will be: `Bårdjørgen-O'Weißözdemir D'Núñezibáñez MXCIV`

Age:
1. Zero is not a valid age.
2. The age should be a positive number.
3. Age cannot contain decimal numbers like 23.5, 23.6, etc.
4. The maximum allowed age is 123 years.
---