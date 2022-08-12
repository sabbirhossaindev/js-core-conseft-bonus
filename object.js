let student = {
    name: 'sabbir',
    roll: 477470,
    reg: 1502074506,
    collage: 'hpi',
    isBoy: true,
    friends: ['hridoy', 'badon', 'monir', 'anamul'],
    movies: [{ name: 'no: 1', year: 2016, }, { name: 'king khan', year: 2022 }],
    act: function () {
        console.log('hello my  name is sabbir')
    },
    car: {
        brand: 'bmw',
        price: 50000000,
        color: 'red',
    },
}
console.log(student.act);
student.act();