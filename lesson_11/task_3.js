let x = -574;
let otr = "Отрицательное", pol = "Положительное", nul = "Нулевое", od = "Однозначное", dv = "Двухзначное", tr = "Трехзначное", ch = "Число";

    if ((x >= -999) && (x <= -100)) {
        console.log(otr, tr, ch);
    }
    if ((x >= -99) && (x <= -10)) {
        console.log(otr, dv, ch);
    }
    if ((x >= -9) && (x <= -1)) {
        console.log(otr, od, ch);
    }
    if ((x == 0) && (x == 0)) {
        console.log(nul, ch);
    }
    if ((x >= 1) && (x <= 9)) {
        console.log(od, pol, ch);
    }
    if ((x >= 10) && (x <= 99)) {
        console.log(dv, pol, ch);
    }
    if ((x >= 100) && (x <= 999)) {
        console.log(tr, pol, ch);
    }

