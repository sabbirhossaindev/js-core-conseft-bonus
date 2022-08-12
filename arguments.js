function add(num1, num2) {
    console.log(num1, num2)
    console.log(arguments); // Arguments holi array like object aita kintu object na....
}
add(12, 13, 44, 76, 73, 64, 98, 99);


// quiz explore;

function compare(a, b) {
    if (a == b) {
        return true;
    }
    else {
        return false;
    }
}
const result = compare(15, "15");
console.log(result);

/* 
function compare(a, b) {
    if (a.toString() == b) {
        return true;
    }
    else {
        return false;
    }
}
const result = compare(15, 15);
console.log(result);

*/
console.log('123' + 123);

let a = 'hi'
let b = 'there'
console.log(a + b);