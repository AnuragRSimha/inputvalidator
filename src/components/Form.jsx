// Author: Anurag R Simha
// This is the form component. Here, the validation form is created. Input is validated as the user enters data.
// If all details are correct, the button enables.
import { useState } from "react";
import '../App.css'
import { validateName, validateAge } from './validation';
const Form = ({onSubmittingForm}) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const [nameError, setNameError] = useState('');
    const [ageError, setAgeError] = useState('');

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
            onSubmittingForm({
                name: name, 
                age: Number(age)
            })
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="inputgroup">
                <label>Full name:</label> 
                <input type = 'text' placeholder="Enter name" value={name} onChange={handleNameChange}/>
                {nameError && <span style={{ color: 'red', display: 'block' }}>{nameError}</span>}
            </div>
            <div className="inputgroup">
                <label>Age:</label> 
                <input type = 'number' placeholder="Enter age" value={age} onChange={handleAgeChange}/>
                {ageError && <span style={{ color: 'red', display: 'block' }}>{ageError}</span>}
            </div>
            <button type = "submit" disabled={!!nameError || !!ageError || !name || !age}><b>Submit</b></button>
        </form>
    );
};

export default Form