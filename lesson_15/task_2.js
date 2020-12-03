function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function getNumber(){
    let array = [];


    return function inside(){
        if(array.length >= 100) return randomInteger(1, 100);
        let int = randomInteger(1, 100);
        if(array.indexOf(int) !== -1){
            while(array.indexOf(int) !== -1){
                int = randomInteger(1, 100);
            }
        }
        array.push(int)
        return int;
    }
}

let fn = getNumber();
console.log(fn());