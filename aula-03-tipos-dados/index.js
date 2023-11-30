"use strict";
//Arrays
let numbers = [34, 5, 3, 1, 45];
console.log(numbers);
numbers.push(43);
console.log(numbers);
//Sintaxe antiga array
const nums = [1, 2, 3];
nums.push(233);
console.log(nums);
//Any
const arr1 = [1, 2, "Matheus", [], { nome: "Matheus" }];
console.log(arr1);
//Parâmetros de função
function soma(a, b) {
    console.log(a + b);
}
soma(34, 54);
//Retorno de função
function hello(name) {
    return `Olá, ${name}!`;
}
console.log(hello("Matheus"));
//Funções anônimas
setTimeout(() => {
    const salary = 1000;
}, 2000);
//Objetos
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const objCoord = { x: 223, y: 998.09 };
passCoordinates(objCoord);
//Propriedades opcionais
function showNumbers(a, b, c) {
    console.log("A " + a);
    console.log("B " + b);
    if (c) {
        console.log("C " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
//Validando argumento opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}!`;
    }
    return `Olá, ${firstName}!`;
}
console.log(advancedGreeting("Matheus", "Oliveira"));
console.log(advancedGreeting("Matheus"));
//Union type
function showBalance(balance) {
    console.log(`Saldo R$: ${balance}`);
}
showBalance(100);
showBalance("902");
//Union types II
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado!";
    }
    return `A função do usuário é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`O id é: ${id}`);
}
showId(1);
showId("90");
function showCoords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 29,
    z: 90,
};
showCoords(coordObj);
//Interface x Type alias
//A diferença entre os dois, basicamente é que: Com interface, nós conseguimos futuramente personalizar as propriedades, já no type alis não, ele é fixo e não conseguimos mudá-lo.
//Literal types
function showDirection(direction) {
    console.log(`A direção escolhida é: ${direction}`);
}
showDirection("left");
//Non-null assertion operator
const p = document.getElementById("some-p");
console.log(p.innerText);
//BigInt
let n;
n = 1000n;
console.log(n);
//Symbol
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
