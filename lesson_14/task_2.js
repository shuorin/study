let start = 1;
let end = 15;
let step = 2;

function range(start, end, step = 1){
    let result = [];
    for(let i = start; i <= end;  i += step){
        result.push(i);
    }
    return result;
}

console.log(range(start, end, step));