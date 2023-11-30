"use strict";
//Void
function noReturn() {
    console.log("Esta função não tem retorno");
}
noReturn();
//Callback  como argumento
function greeting(name) {
    return `Olá, ${name}!`;
}
function preGreeting(f, userName) {
    console.log("Preparando a função!");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Matheus");
preGreeting(greeting, "Me");
//Generic functions
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3, 4]));
console.log(firstElement(["A", "B", "C", "D"]));
function mergeObject(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const newObject = mergeObject({ name: "Matheus" }, { age: 30, job: "Developer" });
console.log(newObject);
//Constraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 4));
console.log(biggestNumber("12", "23"));
//Tipo de argumento especificado
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays([1, 2, 3], ["Teste", "testando"]));
//Parametros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    return `Olá ${name}, tudo bem?`;
}
console.log(modernGreeting("Matheus"));
console.log(modernGreeting("Matheus", "Dr."));
//Parâmetro default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(15, 12));
//Tipo unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("X é um número");
    }
}
doSomething([1, 2, 3, 4]);
doSomething(5);
//Tipo never
function showError(msg) {
    throw new Error(msg);
}
//showError("Algum erro!");
//Rest operator
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4, 5, 6));
console.log(sumAll(2, 5, 5, 66, 77, 8));
//Destructuring
function showProduct({ name, price }) {
    return `Produto: ${name}. Preço: ${price}`;
}
const shirt = { name: "Camisa", price: 49.99 };
console.log(showProduct(shirt));
