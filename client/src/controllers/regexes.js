const hasUpperCase = /(?=.*[A-Z])/;
const hasLowerCase = /(?=.*[a-z])/;
const hasDigit = /(?=.*\d)/;
const hasSymbol = /(?=.*[-_~!@#$%^&+])/;

//TODO add forbidden symbols


export const isNotValidPassword = function (str){
    if(str === "") return "Password cannot be empty";
    if(!hasUpperCase.test(str)) return "Password must contain atleast one uppercase letter";
    if(!hasLowerCase.test(str)) return "Password must contain atleast one lowercase letter";
    if(!hasDigit.test(str)) return "Password must contain atleast one number";
    if(!hasSymbol.test(str)) return "Password must contain atleast one symbol";

    return null;
};


//TODO get the rest of possible suffixes: country prefixes, organization prefixes ...etc
export const isNotValidEmail = function(str){
    if(!/\w+@\w+.(com|org)/.test(str)) return "Must be a valid email";

    return null;
}