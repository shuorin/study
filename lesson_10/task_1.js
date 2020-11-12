let s = 1000;
let kolichestvoGryadok = Math.floor(s / (15 * 25));


let osatokGryadok = function (sGryadki) {
    return sGryadki - (kolichestvoGryadok * 15 * 25);
}

console.log("Всего грядок: ", kolichestvoGryadok);
console.log("Остаток участка: ", osatokGryadok(s));

