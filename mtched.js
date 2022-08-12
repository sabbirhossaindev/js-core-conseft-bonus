const numbers = [56, 65, 23, 98, 52, 56, 22, 90];
// just for loop explore......

/*
for (let i = 0; i < numbers.length; i++){
    const result = numbers[i];
    console.log(result);
}
*/

// for of explore.....
/*
for (const result of numbers) {
    console.log(result);
}
*/

// for of explore.....in apply array.
/*
let products = [
    { id: 1, name: 'walton phone', price: 19000 },
    { id: 2, name: 'iphone', price: 190000 },
    { id: 3, name: 'ximie phone', price: 19000 },
    { id: 4, name: 'redmie phone', price: 19000 },
    { id: 5, name: 'realme phone', price: 19000 },
    { id: 6, name: 'nocka phone', price: 19000 },
    { id: 7, name: 'walton phone', price: 19000 },
];

// for of use....

for (const product of products) {
    console.log(product);
}
*/
let products = [
    { id: 1, name: 'walton phone', price: 19000 },
    { id: 2, name: 'iphone', price: 190000 },
    { id: 3, name: 'ximie phone', price: 19000 },
    { id: 4, name: 'redmie phone', price: 19000 },
    { id: 5, name: 'realme phone', price: 19000 },
    { id: 6, name: 'nocka Phone', price: 19000 },
    { id: 7, name: 'walton phone', price: 19000 },
];

function mathchProducts(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}

const result = mathchProducts(products, 'phone');
console.log(result);