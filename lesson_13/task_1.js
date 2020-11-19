let str = "47586";
let integ = null;

for (let i = 0; i < str.length; i++) {
    integ = parseInt(str[i]) + integ;
}
console.log(integ);