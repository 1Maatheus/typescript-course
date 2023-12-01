import importGreet from "./greet";
importGreet();

//Variaveis
import { x } from "./variable";
console.log(x);

//Multiplas imports
import { a, b, myFunction } from "./multiple";
console.log(a);
console.log(b);
myFunction();

//Alias
import { someName as name } from "./changeName";
console.log(name);

//Import all
import * as myNumbers from "./numbers";
console.log(myNumbers);

//Import types or interfaces
import { Human } from "./myType";
class User implements Human {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const matheus = new User("Matheus", 25);
console.log(matheus);
