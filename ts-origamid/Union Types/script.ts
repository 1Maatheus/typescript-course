//Union types, permite que um valor seja atribuído a mais de uma variável no mesmo contexto.
let total: string | number = 200;
total = "300";

function isNumber(value: string | number) {
  if (typeof value === "number") {
    return true;
  }

  return false;
}

//Exercício:

function toNumber(value: number | string) {
  if (typeof value === "number") {
    return value;
  } else if (typeof value === "string") {
    return Number(value);
  } else {
    throw new Error("Value deve ser number | string");
  }
}

console.log(toNumber("Ola"));
