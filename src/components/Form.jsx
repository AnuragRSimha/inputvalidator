// Author: Anurag R Simha
// This is the form component. Here, the validation form is created. Input is validated as the user enters data.
// If all the details are correct, the button enables.
// Conditions for the name and age can be found in the README file.
import { useState } from "react";
import '../App.css'
import { romanCharsRegex, allwedCharsRegex } from "./regex";
const Form = ({onSubmittingForm}) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const [nameError, setNameError] = useState('');
    const [ageError, setAgeError] = useState('');

    const validateName = (name) => {
        const theName = name.trim();
        if (!theName) {
            return "The name is required";
        }
        if (theName.length < 2) {
            return "The name must be at least 2 characters long";
        }
        if (allwedCharsRegex.test(theName)) {
            return "No numbers or special characters";
        }
        
        return "";
    };

    const validateAge = (age) => {
        if (age === "" || age === null) {
            return "The age is required";
        }

        const theAge = Number(age);
        if(theAge == 0){
            return "The age cannot be 0"
        }
        if (theAge < 0) {
            return "The age should be a positive number";
        }
        if (!Number.isInteger(theAge)) {
            return "The age cannot contain a decimal point";
        }
        if(theAge > 123) {
            return "Maximum allowed age is 123 years"
        }
        else{
            return ""
        }
    };

    const handleNameChange = (e) => {
        const theName = e.target.value;
        setName(theName);
        const error = validateName(theName);
        setNameError(error);
    }

    const handleAgeChange = (e) => {
        const theAge = e.target.value;
        setAge(theAge);
        const error = validateAge(theAge);
        setAgeError(error);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!nameError && !ageError && name && age){
            const formattedName = name
                .trim()
                .split(/\s+/)
                .map(word => {
                    if (romanCharsRegex.test(word)) {
                        return word.toUpperCase();
                    }
                    let processed = word.toLowerCase();
                    processed = processed.charAt(0).toUpperCase() + processed.slice(1);
                    return processed.replace(/([-'])([a-z])/g, (match, separator, char) => 
                        separator + char.toUpperCase()
                    );
                })
                .join(' ');
            onSubmittingForm({
                name: formattedName, 
                age: Number(age)
            })
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="inputgroup">
                <label>Full name:</label> 
                <input type = 'text' className={`form-control ${nameError ? 'is-invalid' : name ? 'is-valid' : ''}`} 
                placeholder="Enter name" maxLength={150} value={name} onChange={handleNameChange}/>
                {!name && !nameError && (
                    <small style={{ color: '#888', display: 'block', marginTop: '2px' }}>
                        Maximum 150 characters for the name
                    </small>
                )}
                {nameError && <span style={{ color: 'red', display: 'block' }}>{nameError}</span>}
            </div>
            <div className="inputgroup">
                <label>Age:</label> 
                <input type = 'number' className={`form-control ${ageError ? 'is-invalid' : age ? 'is-valid' : ''}`} 
                placeholder="Enter age" value={age} onChange={handleAgeChange}/>
                {ageError && <span style={{ color: 'red', display: 'block' }}>{ageError}</span>}
            </div>
            <button className="btn btn-primary" type = "submit" disabled={!!nameError || !!ageError || !name || !age}><b>Submit</b></button>
        </form>
    );
};

export default Form