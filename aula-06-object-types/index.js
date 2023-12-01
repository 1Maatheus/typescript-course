"use strict";
function showProduct(product) {
    console.log(`O nome do produto é: ${product.name} e o seu preço é: ${product.price}`);
    if (product.isAvailable) {
        console.log("O produto está disponível");
    }
}
const shirt = {
    name: "Camiseta",
    price: 19.99,
    isAvailable: true,
};
showProduct(shirt);
function showUser(user) {
    console.log(`O usuário tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é ${user.role}`);
    }
}
const u1 = {
    email: "matheus@email.com",
    role: "Admin",
};
const u2 = {
    email: "matheus2@email.com",
};
showUser(u1);
showUser(u2);
const fusca = {
    brand: "VW",
    wheels: 4,
};
console.log(fusca);
let coords = {
    x: 10,
};
coords.y = 15;
coords.z = 19;
console.log(coords);
const matheus = {
    name: "Matheus",
    age: 30,
};
console.log(matheus);
const spiderMan = {
    name: "Peter Parkes",
    age: 20,
    superpowers: ["Superstrength", "Fly", "Power"],
};
console.log(spiderMan);
console.log(spiderMan.superpowers[2]);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12,
};
console.log(arnold);
//Readonly array
let myArray = ["Maça", "Laranja", "Morango"];
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
const myArrayNumber2 = [2, 4, 5, 6, 7];
console.log(myNumberArray);
console.log(myArrayNumber2);
const anotherUser = ["Matheus", 24];
console.log(anotherUser);
//Tuplas com readonly
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 3]);
