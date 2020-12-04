(function (){
    window.myLibrary = {
        min: function (arr){
            return Math.min(...arr);
        },
        max: function (arr){
            return Math.max(...arr);
        },
        avg: function (arr){
            return arr.reduce((a, b) => (a + b)) / arr.length;
        },
        copy: function (arr){
            return arr.slice(0);
        }
    }
}())