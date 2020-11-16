let win = "winter", spr = "spring", sum = "summer", aut = "autumn";

for (let i = 1; i < 13; i++ ) {
    if ((i <= 2) || (i >= 12)) {
        console.log(i, win);
    }
    if ((i > 2) && (i <= 5)) {
        console.log(i, spr);
    }
    if ((i > 5) && (i <= 8)) {
        console.log(i, sum);
    }
    if ((i > 8) && (i <= 11)) {
        console.log(i, aut);
    }
}