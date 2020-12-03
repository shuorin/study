let a = {
    name: 'static',
    count: 0
}
function foo(a, countName, countValue) {
    let result = [];
    for(let i = 0; i < countValue; i++) {
        a[countName] = i;
        result.push(Object.assign({}, a));
        console.log(a, countName, countValue);
    }
    return result;
    
}


foo(a, 'count', 10);

