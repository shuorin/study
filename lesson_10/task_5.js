let x1 = 21;
let x2 = 30;
let y1 = 20;
let y2 = 35;
let z1 = 27;
let z2 = 35;

let a = Math.sqrt((x2-x1)*(x2-x1));
let b = Math.sqrt((y2-y1)*(y2-y1));
let c = Math.sqrt((z2-z1)*(z2-z1));

if (Math.pow(c, 2) == Math.pow(a, 2) + Math.pow(b, 2)) {
    console.log("Треугольник является прямоугольным");
} else if (Math.pow(c, 2) < Math.pow(a, 2) + Math.pow(b, 2)) {
    console.log("Треугольник является остроугольным");
} else {
    console.log("Прямоугольник является тупоугольным");
}