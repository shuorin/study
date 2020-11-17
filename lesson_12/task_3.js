let numbers = [12, 4, 3, 10, 1, 20];

function removeMinMax() {
    numbers.sort(function(a, b){
        return a - b
    });
    numbers.pop();
    numbers.shift();
    console.log(numbers);
}
removeMinMax();