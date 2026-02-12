// Author: Anurag R Simha
// This file is the validation script where there are multiple checks to validate the data input by the user.
// Conditions for the name:
// 1. Should contain at least two characters:
//    Reason: To allow names like Ed, Oz, Ty, Yi, etc.
// 2. Cannot contain numbers in digital format:
//    Reason: Some names contain numbers like III, IV, etc. No names contain these numbers as digits.
// 
// Conditions for the age:
// 1. Age cannot be 0.
// 2. Age cannot be a negative number.
// 3. Age cannot be a decimal number.
export const validateName = (name) => {
    const theName = name.trim();
    const specialCharRegex = /[^\p{L}\s'-]/u;
    if (!theName) {
        return "The name is required";
    }
    if (theName.length < 2) {
        return "The name must be at least 2 characters long";
    }
    if (specialCharRegex.test(theName)) {
        return "No numbers or special characters";
    }
    
    return "";
};

export const validateAge = (age) => {
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
    else{
        return ""
    }
};