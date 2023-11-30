"use strict";
//Narrowing é um recurso de TS para identificar tipos de dados, dando assim uma direção diferente a execução do programa, baseada no tipo que foi identificado.
//Há situações em que os tipos podem ser imprevisíveis, e queremos executal algo para cada uma das possibilidades. Isso é fundamental também para evitar erros do compulador, identificando e resolvendo os possíveis erros na hora do desenvolvimento.
//Type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Impossível realizar a soma.");
    }
}
sum("44", "91");
sum(223, 11);
sum(90, "19");
//Checando se o valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log("Por favor, defina uma operação.");
    }
}
operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([1, 4, 55], "multiply");
//Operador instaceof
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User("Jhon");
const paul = new SuperUser("Paul");
console.log(jhon.name);
console.log(paul.name);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá, ${user.name}!`);
    }
    else if (user instanceof User) {
        console.log(`Olá, ${user.name}!`);
    }
}
userGreeting(jhon);
userGreeting(paul);
//Operador in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const turca = new Dog("Turca");
const bob = new Dog("Bob", "Pastor Alemão");
function showDogDetails(dog) {
    if ("breed" in dog) {
        console.log(`O cachorro é da raça: ${dog.breed}`);
    }
    else {
        console.log("O cachorro é SRD;");
    }
}
showDogDetails(turca);
showDogDetails(bob);
