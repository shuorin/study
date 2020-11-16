let win = "winter", spr = "spring", sum = "summer", aut = "autumn";

for (let i = 1; i < 13; i++ ) {
    if ((i <= 2) || (i >= 12)) {
        console.log(i, win);
    } else if ((i > 2) && (i <= 5)) {
        console.log(i, spr);
    } else if ((i > 5) && (i <= 8)) {
        console.log(i, sum);
    } else {
        console.log(i, aut);
    }
}