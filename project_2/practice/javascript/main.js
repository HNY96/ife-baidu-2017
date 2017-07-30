// var name = "The Window";　　
// var object = {　　　　
//     name: "My Object",
//     getNameFunc: function () {
//         console.log("I'm in");
//         　　　　　　
//         return function () {　　　　　　　　
//             return this.name;　　　　　　
//         };　　　　
//     }　　
// };　　
// // alert(object.getNameFunc()());
// var temp = object.getNameFunc();
// console.log(temp.)

// var name = "The Window";　　
// var object = {　　　　
//     name: "My Object",
//     　　　　getNameFunc: function () {　　　　　　
//         var that = this;　　　　　　
//         return function () {　　　　　　　　
//             return that.name;　　　　　　
//         };　　　　
//     }　　
// };　　
// alert(object.getNameFunc()());


'use strict';

function get_primes(arr) {

var prime = function(x) {
    if (x === 1) {
        return false;
    } else {
        var stand = Math.floor(Math.sqrt(x));
        for (var i = 2; i <= stand; i++) {
            if (x % i === 0) {
                return false;
            } else {
                continue;
            }
        }
        return true;
    }};

var result = arr.filter(prime);

return result;
}

var
    x,
    r,
    arr = [];
for (x = 1; x < 100; x++) {
    arr.push(x);
}
r = get_primes(arr);
if (r.toString() === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97].toString()) {
    alert('测试通过!');
} else {
    alert('测试失败: ' + r.toString());
}