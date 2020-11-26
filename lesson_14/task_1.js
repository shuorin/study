let arrFirst = [56, 35, 46, 86];
let arrSecond = [56, 35, 46, 86];

let compare = function diff(arrFirst, arrSecond) {
    return arrFirst.join(",") === arrSecond.join(",");
}
console.log(compare(arrFirst, arrSecond));