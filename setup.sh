#!/bin/bash

echo "--- Project Setup Wizard ---"

while ! command -v npm &> /dev/null; do
    echo "--------------------------------------------------------"
    echo "ERROR: npm (Node Package Manager) was not found."
    echo "1. Please go to https://nodejs.org/en"
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

echo "Running 'npm install'..."
npm install

echo "Launching development server..."
npm run dev