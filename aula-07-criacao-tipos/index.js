"use strict";
//generics
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData("Testando generic"));
//Constraint em Generic
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: "Porta", cor: "Branca" };
const otherProduct = { name: "Carro", wheels: 4, engine: 1.0 };
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
const myCar = {
    name: "Fusca",
    wheels: 4,
    engine: 1.0,
    color: "Branco",
};
const myPen = {
    name: "Caneta",
    wheels: false,
    engine: false,
    color: "Azul",
};
console.log(myCar);
console.log(myPen);
//Type parameters
function getSomeKey(obj, key) {
    return `A chave ${key}, está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: "2Tb",
    ram: "32Gb",
};
console.log(getSomeKey(server, "ram"));
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: "Matheus",
    age: 25,
    hasDriveLicense: true,
};
console.log(showCharName(myChar, "name"));
//Typeof type operator
const userName = "Matheus";
const userName2 = "João";
const userName3 = "Lucas";
const userName4 = "Maria";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga",
};
function showKm(km) {
    console.log(`O veículo tem a km de: ${km}`);
}
showKm(newTruck.km);
const newCar = {
    km: 5000,
    kg: 1000,
};
showKm(newCar.km);
const someVar = 5;
const testing = "some text";
