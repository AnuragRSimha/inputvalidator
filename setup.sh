#!/bin/bash

echo "--- Project Setup Wizard ---"

while ! command -v npm &> /dev/null; do
    echo "--------------------------------------------------------"
    echo "ERROR: npm (Node Package Manager) was not found."
    echo "1. Please download npm from https://nodejs.org/en"
    echo "OR"
    echo "2. Run apt install npm in another terminal window"
    echo "--------------------------------------------------------"
    
    read -p "Once you have finished installing, type 'Done': " user_input
    
    if [[ "$user_input" == "Done" || "$user_input" == "done" ]]; then
        echo "Re-checking for npm..."
        sleep 1 
    fi
done

echo "npm found! Version: $(npm -v)"

echo "Cloning into repository"
git clone git@gitlab.com:anurag.rsimha/cs530-assignment-3.git

echo "Switching directory"
cd cs530-assignment-3

echo "Running 'npm install'..."
npm install

echo "Launching development server..."
npm run dev