function somar(a: number, b: number, c?: number): number {
  return a + b + (c || 0);
}
somar(3, 4, 6);

const subtrair = (a: number, b: number) => a - b;
subtrair(4, 3);

type Callback = (event: MouseEvent) => void;

//Void: No javascript, uma função sem return irá retonar undefined. No Typescript, o retorno é definido como void. Isso evita usos errados como checagens booleanas de métodos que não possuem retorno.

function pintarTela(cor: string): void {
  document.body.style.backgroundColor = cor;
}
// pintarTela("aliceblue");

//Never: o never é utilizado em casos onde a função gera um erro ou termina a aplicação.

function abort(mensagem: string): never {
  throw new Error(mensagem);
}
// abort("Um erro ocorreu!");

//Overload:
function normalizar(valor: string[]): string[];
function normalizar(valor: string): string;
function normalizar(valor: string | string[]): string | string[] {
  if (typeof valor === "string") {
    return valor.trim().toLowerCase();
  } else {
    return valor.map((item) => item.trim().toLowerCase());
  }
}
// console.log(normalizar(" MathEUs ").toUpperCase());
// console.log(normalizar(["  MAtheus  ", "Oliveira    "]));

//Exercío:
function arredondaPraCima(valor: string): string;
function arredondaPraCima(valor: number): number;
function arredondaPraCima(valor: string | number): string | number {
  if (typeof valor === "string") {
    return Math.ceil(Number(valor)).toString();
  } else {
    return Math.ceil(valor);
  }
}
// console.log(arredondaPraCima(10));
