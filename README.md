# Assignment 3
## Details
<b>Framework: React</b> \
Author: Anurag R Simha \
University ID: 14763701

## Installation Guidelines
You can do any one of these:
1. <b>Super quick and easy:</b> Run setup.sh for convenience.\
This script is **completely safe** to run. It only runs a set of git and npm commands. \
It takes care of the **entire setup process for you including running the application**. All you've got to do is execute the following commands: 
```
chmod +x setup.sh
``` 
```
./setup.sh
```
If you are on a windows machine, either use WSL (Windows Sybsystem for Linux) or Gitbash to run setup.sh.

2. <b>Manual process:</b> Running the commands executed by setup.sh:
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
│   └── validation.js --> JavaScript file that validates user input
├── App.css --> Contains CSS for the entire project
├── App.jsx --> Parent for setting up everything
├── index.css --> Default file created during setup
└── main.jsx --> The root file
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
            ┌─3── ABC, 24 ──> DetailsDisplay.jsx
            ↑                            
          App.jsx ───1───> Form.jsx      
            ↑                  ↓         
            └── ABC, 24 ────2──┘     
```

### Input Validation
Several ways of data entry were considered to perform validation.\
Name:
1. No name can contain a single character. There should be a minimum of two characters.
2. No name can contain numbers in digital format like Alfred 3, Leonard 2, etc. But, can contain numbers in Roman numeral. For example, names like Alfred III, Leonard II, etc. are allowed.

Age:
1. Zero is not a valid age.
2. The age should be a positive number.
3. Age cannot contain decimal numbers like 23.5, 23.6, etc.