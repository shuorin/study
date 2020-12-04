function increment(){
    let count = 0;
    return function innerIncrement (){
        return count++;
    }
}

let runIncrement = increment();
let btn = document.getElementById('increment');
btn.onclick = function (){
    this.innerHTML = runIncrement();
}