let pass = "JOjghh746#";
let regExp = /(?=.*[A-Z])(?=.*[a-z]).(?=.*\d{3,})(?=.[!$#%]).{10,}/;


console.log(regExp.test(password));