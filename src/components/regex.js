// Author: Anurag R Simha
// This is the regex properties file that can be used to update the regex if any requirements for the name change.
export const allwedCharsRegex = /[^\p{L}\s'-]/u;
export const romanCharsRegex = /^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/i;