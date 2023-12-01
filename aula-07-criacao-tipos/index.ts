//generics
function showData<T>(arg: T): string {
  return `O dado é: ${arg}`;
}

console.log(showData(5));
console.log(showData("Testando generic"));

//Constraint em Generic
function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do produto é: ${obj.name}`;
}

const myObj = { name: "Porta", cor: "Branca" };
const otherProduct = { name: "Carro", wheels: 4, engine: 1.0 };
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));

//Interfaces com generics
interface MyObject<T, U, Q> {
  name: string;
  wheels: T;
  engine: U;
  color: Q;
}

type Car = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;

const myCar: Car = {
  name: "Fusca",
  wheels: 4,
  engine: 1.0,
  color: "Branco",
};

const myPen: Pen = {
  name: "Caneta",
  wheels: false,
  engine: false,
  color: "Azul",
};

console.log(myCar);
console.log(myPen);

//Type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${key}, está presente no objeto e tem o valor de ${obj[key]}`;
}

const server = {
  hd: "2Tb",
  ram: "32Gb",
};

console.log(getSomeKey(server, "ram"));

//keyof type operator
type Character = { name: string; age: number; hasDriveLicense: boolean };

type C = keyof Character;

function showCharName(obj: Character, name: C): string {
  return `${obj[name]}`;
}

const myChar: Character = {
  name: "Matheus",
  age: 25,
  hasDriveLicense: true,
};

console.log(showCharName(myChar, "name"));

//Typeof type operator
const userName: string = "Matheus";
const userName2: typeof userName = "João";
const userName3: typeof userName = "Lucas";

type x = typeof userName;
const userName4: x = "Maria";

//Indexed Access types
type Truck = {
  km: number;
  kg: number;
  description: string;
};

type Km = Truck["km"];
const newTruck: Truck = {
  km: 10000,
  kg: 5000,
  description: "Caminhão para pouca carga",
};

function showKm(km: Km) {
  console.log(`O veículo tem a km de: ${km}`);
}

showKm(newTruck.km);
const newCar = {
  km: 5000,
  kg: 1000,
};

showKm(newCar.km);

//Conditional types
interface A {}
interface B extends A {}

interface Teste {
  showName(): string;
}

type myType = B extends A ? number : string;
const someVar: myType = 5;
type myTypeB = Teste extends { showNumber(): number } ? string : boolean;

//Template literals type
type testA = "text";
type CustomType = `some ${testA}`;
const testing: CustomType = "some text";
type a1 = "Testando";
type a2 = "Union";
type a3 = `${a1}` | `${a2}`;
