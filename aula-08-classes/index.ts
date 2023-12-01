//Campos em classe
class User {
  name!: string;
  age!: number;
}
const matheus = new User();
matheus.name = "Matheus";

//Constructor
class NewUser {
  name;
  age;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const joao = new NewUser("João", 22);
console.log(joao);

//Campos readonly em classes
class Car {
  name;
  readonly wheels = 4;

  constructor(name: string) {
    this.name = name;
  }
}

const fusca = new Car("Fusca");
console.log(fusca);

//Herança e Super
class Machine {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const trator = new Machine("Trator");

class KillerMachine extends Machine {
  guns;

  constructor(name: string, guns: number) {
    super(name);
    this.guns = guns;
  }
}

const destroyer = new KillerMachine("Destroyer", 4);
console.log(trator);
console.log(destroyer);

//Métodos
class Dwarf {
  name;

  constructor(name: string) {
    this.name = name;
  }

  greeting() {
    console.log("Hey, stranger!");
  }
}

const jimmy = new Dwarf("Jimmy");
console.log(jimmy.name);
jimmy.greeting();

//This
class Truck {
  model;
  hp;

  constructor(model: string, hp: number) {
    this.model = model;
    this.hp = hp;
  }

  showDetails() {
    console.log(
      `Caminhão do modelo: ${this.model} e que tem ${this.hp} cavalos de potência`
    );
  }
}

const volvo = new Truck("Volvo", 500);
volvo.showDetails();

//Getters
class Person {
  name;
  surname;

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  get fullName() {
    return this.name + " " + this.surname;
  }
}

const matheus1 = new Person("Matheus", "Oliveira");
console.log(matheus1.name);
console.log(matheus1.fullName);

//Setters
class Coords {
  x!: number;
  y!: number;

  set fillX(x: number) {
    if (x === 0) {
      return;
    }
    this.x = x;
    console.log("X inserido com sucesso");
  }

  set fillY(y: number) {
    if (y === 0) {
      return;
    }
    this.y = y;
    console.log("Y inserido com sucesso");
  }

  get getCoords() {
    return `X: ${this.x} e Y: ${this.y}`;
  }
}

const myCoords = new Coords();

myCoords.fillX = 15;
myCoords.fillY = 90;

console.log(myCoords.getCoords);

//Herança de interfaces
interface showTitle {
  itemTitle(): string;
}

class blogPost implements showTitle {
  title;

  constructor(title: string) {
    this.title = title;
  }

  itemTitle() {
    return `O título do post é: ${this.title}`;
  }
}

const myPost = new blogPost("Hello, world");
console.log(myPost.itemTitle());

class TestingInterface implements showTitle {
  title;

  constructor(title: string) {
    this.title = title;
  }

  itemTitle() {
    return `O tútlo é: ${this.title}`;
  }
}

//Override de métodos
class Base {
  someMethod() {
    console.log("Alguma coisa");
  }
}

class Nova extends Base {
  someMethod() {
    console.log("Testando outra coisa");
  }
}

const myObject = new Nova();
myObject.someMethod();

//Visibilidade: Public
class C {
  x = 10;
}

const cInstance = new C();
console.log(cInstance.x);

//Visibilidade: Protected
class E {
  protected x = 10;
}

class F extends E {
  showX() {
    console.log("X: " + this.x);
  }
}

const fInstance = new F();
fInstance.showX();

//Visibilidade: Private
class PrivateClass {
  private name = "Private";

  showName() {
    return this.name;
  }

  private privateMethod() {
    console.log("Método privado");
  }

  showPrivateMethod() {
    this.privateMethod();
  }
}

const pObj = new PrivateClass();
console.log(pObj.showName());
pObj.showPrivateMethod();

//Static members
class StaticMembers {
  static prop = "Teste static";

  static statcMethod() {
    console.log("Este é um método estático");
  }
}

console.log(StaticMembers.prop);
StaticMembers.statcMethod();

//Generic class
class Item<T, U> {
  first;
  second;

  constructor(first: T, second: U) {
    this.first = first;
    this.second = second;
  }
  get showFirst() {
    return `O first é: ${this.first}`;
  }
}

const newItem = new Item("Caixa", "Surpresa");
console.log(newItem);
console.log(newItem.showFirst);

//Parameters properties
class ParameterProperties {
  constructor(public name: string, private qty: number, private price: number) {
    this.name = name;
    this.qty = qty;
    this.price = price;
  }

  get showQty() {
    return `Qtd toatl: ${this.qty}`;
  }

  get showPrice() {
    return `Price: ${this.price}`;
  }
}

const newShirt = new ParameterProperties("camisa", 5, 19.99);
console.log(newShirt.name);
console.log(newShirt.showPrice);
console.log(newShirt.showQty);

//Class Expressions
const myClass = class<T> {
  name;
  constructor(name: T) {
    this.name = name;
  }
};

const pessoa = new myClass("Matheus");
console.log(pessoa);

//Abstract class
abstract class AbstractClass {
  abstract showName(): void;
}

class AbstractExample extends AbstractClass {
  name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  showName(): void {
    console.log(`O nome é: ${this.name}`);
  }
}

const newAbstractObject = new AbstractExample("Matheus");
newAbstractObject.showName();

//Relações entre classes
class Dog {
  name!: string;
}

class Cat {
  name!: string;
}

const doguinho: Dog = new Cat();
console.log(doguinho);
