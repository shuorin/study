let ax1 = 21;
let ax2 = 30;
let ay1 = 20;
let ay2 = 35;
let az1 = 27;
let az2 = 35;
let bx1 = 27;
let bx2 = 35;
let by1 = 23;
let by2 = 35;
let bz1 = 26;
let bz2 = 32;
let cx1 = 25;
let cx2 = 36;
let cy1 = 26;
let cy2 = 37;
let cz1 = 24;
let cz2 = 37;

let a = Math.sqrt((ax2-ax1)*(ax2-ax1) + (ay2-ay1)*(ay2-ay1) + (az2-az1)*(az2-az1));
let b = Math.sqrt((bx2-bx1)*(bx2-bx1) + (by2-by1)*(by2-by1) + (bz2-bz1)*(bz2-bz1));
let c = Math.sqrt((cx2-cx1)*(cx2-cx1) + (cy2-cy1)*(cy2-cy1) + (cz2-cz1)*(cz2-cz1));

if (Math.pow(c, 2) == Math.pow(a, 2) + Math.pow(b, 2)) {
    console.log("Треугольник является прямоугольным");
} else if (Math.pow(c, 2) < Math.pow(a, 2) + Math.pow(b, 2)) {
    console.log("Треугольник является остроугольным");
} else {
    console.log("Прямоугольник является тупоугольным");
}