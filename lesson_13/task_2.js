let str = "Строка";
let sym = "A";

let doubleStr = str.split(sym).join(sym.repeat(2));

console.log(doubleStr);