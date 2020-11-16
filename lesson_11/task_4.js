let three = "Three", five = "Five";

for (let i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log(three + five);
    } else if (i % 3 === 0) {
        console.log(three);
    } else if (i % 5 === 0) {
        console.log(five);
    } else {
        console.log(i);
    }
}