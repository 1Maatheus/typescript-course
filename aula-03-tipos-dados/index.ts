//Arrays
let numbers: number[] = [34, 5, 3, 1, 45];
console.log(numbers);
numbers.push(43);
console.log(numbers);

//Sintaxe antiga array
const nums: Array<number> = [1, 2, 3];
nums.push(233);
console.log(nums);

//Any
const arr1: any = [1, 2, "Matheus", [], { nome: "Matheus" }];
console.log(arr1);

//Parâmetros de função
function soma(a: number, b: number) {
  console.log(a + b);
}
soma(34, 54);

//Retorno de função
function hello(name: string): string {
  return `Olá, ${name}!`;
}
console.log(hello("Matheus"));

//Funções anônimas
setTimeout(() => {
  const salary: number = 1000;
}, 2000);

//Objetos
function passCoordinates(coord: { x: number; y: number }) {
  console.log("X coordinates: " + coord.x);
  console.log("Y coordinates: " + coord.y);
}
const objCoord = { x: 223, y: 998.09 };
passCoordinates(objCoord);

//Propriedades opcionais
function showNumbers(a: number, b: number, c?: number) {
  console.log("A " + a);
  console.log("B " + b);
  if (c) {
    console.log("C " + c);
  }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);

//Validando argumento opcional
function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    return `Olá, ${firstName} ${lastName}!`;
  }

  return `Olá, ${firstName}!`;
}
console.log(advancedGreeting("Matheus", "Oliveira"));
console.log(advancedGreeting("Matheus"));

//Union type
function showBalance(balance: string | number) {
  console.log(`Saldo R$: ${balance}`);
}
showBalance(100);
showBalance("902");

//Union types II
function showUserRole(role: boolean | string) {
  if (typeof role === "boolean") {
    return "Usuário não aprovado!";
  }
  return `A função do usuário é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));

//Type alias
type ID = string | number;
function showId(id: ID) {
  console.log(`O id é: ${id}`);
}
showId(1);
showId("90");

//Interfaces
interface Point {
  x: number;
  y: number;
  z: number;
}

function showCoords(obj: Point) {
  console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}

const coordObj: Point = {
  x: 10,
  y: 29,
  z: 90,
};

showCoords(coordObj);

//Interface x Type alias
//A diferença entre os dois, basicamente é que: Com interface, nós conseguimos futuramente personalizar as propriedades, já no type alis não, ele é fixo e não conseguimos mudá-lo.

//Literal types
function showDirection(direction: "left" | "right" | "center") {
  console.log(`A direção escolhida é: ${direction}`);
}
showDirection("left");

//Non-null assertion operator
const p = document.getElementById("some-p");
console.log(p!.innerText);

//BigInt
let n: bigint;
n = 1000n;
console.log(n);

//Symbol
let symbolA: symbol = Symbol("a");
let symbolB: symbol = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
