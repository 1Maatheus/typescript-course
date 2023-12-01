//interface
interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}

function showProduct(product: Product) {
  console.log(
    `O nome do produto é: ${product.name} e o seu preço é: ${product.price}`
  );
  if (product.isAvailable) {
    console.log("O produto está disponível");
  }
}

const shirt: Product = {
  name: "Camiseta",
  price: 19.99,
  isAvailable: true,
};

showProduct(shirt);

//Propriedade opcional interface

interface User {
  email: string;
  role?: string;
}

function showUser(user: User) {
  console.log(`O usuário tem o e-mail: ${user.email}`);

  if (user.role) {
    console.log(`A função do usuário é ${user.role}`);
  }
}

const u1: User = {
  email: "matheus@email.com",
  role: "Admin",
};

const u2: User = {
  email: "matheus2@email.com",
};

showUser(u1);
showUser(u2);

//Readonly
interface Car {
  brand: string;
  readonly wheels: number;
}

const fusca: Car = {
  brand: "VW",
  wheels: 4,
};

console.log(fusca);

//index signature
interface CoordObject {
  [index: string]: number;
}

let coords: CoordObject = {
  x: 10,
};

coords.y = 15;
coords.z = 19;

console.log(coords);

//Extending Types
interface Human {
  name: string;
  age: number;
}

interface SuperHuman extends Human {
  superpowers: string[];
}

const matheus: Human = {
  name: "Matheus",
  age: 30,
};

console.log(matheus);

const spiderMan: SuperHuman = {
  name: "Peter Parkes",
  age: 20,
  superpowers: ["Superstrength", "Fly", "Power"],
};

console.log(spiderMan);
console.log(spiderMan.superpowers[2]);

//Intersection types
interface Character {
  name: string;
}

interface Gun {
  type: string;
  caliber: number;
}

type HumanWithGun = Character & Gun;
const arnold: HumanWithGun = {
  name: "Arnold",
  type: "Shotgun",
  caliber: 12,
};

console.log(arnold);

//Readonly array
let myArray: ReadonlyArray<string> = ["Maça", "Laranja", "Morango"];
myArray.forEach((item) => {
  console.log("Fruta: " + item);
});

myArray = myArray.map((item) => {
  return `Fruta: ${item}`;
});

console.log(myArray);

//Tuplas
type fiveNumbers = [number, number, number, number, number];
const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5];
const myArrayNumber2: fiveNumbers = [2, 4, 5, 6, 7];

console.log(myNumberArray);
console.log(myArrayNumber2);

type nameAndAge = [string, number];
const anotherUser: nameAndAge = ["Matheus", 24];
console.log(anotherUser);

//Tuplas com readonly
function showNumbers(numbers: readonly [number, number]) {
  console.log(numbers[0]);
  console.log(numbers[1]);
}

showNumbers([1, 3]);
