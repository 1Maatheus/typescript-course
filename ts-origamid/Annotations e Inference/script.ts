// // Annotations e Inference.
// const produto: string = "Livro";
// const preco: number = 200;

// const carros: {
//   marca: string;
//   portas: number;
// } = {
//   marca: "Volkswagen",
//   portas: 4,
// };

// //Inferência: O Typescript vai atribuir automaticamente o tipo de variável a cada um dos valores.
// const livro = "Harry Potter";
// const number = 20;

// const moto = {
//   marca: "Honda",
//   rodas: 2,
// };

// //As anotações serão necessárias quando lidamos com funções.
// function somar(a: number, b: number) {
//   return a + b;
// }
// somar(4, 20);

// const nintendo = {
//   nome: "Nintendo",
//   preco: "3000",
// };

// function transformarPreco(produto: { nome: string; preco: string }) {
//   produto.preco = "R$ " + produto.preco;
//   return produto;
// }
// const produtoNovo = transformarPreco(nintendo);
// // console.log(produtoNovo);

// //Exercícios:
// function normalizarTexto(texto: string) {
//   return texto.trim().toLowerCase();
// }

const input = document.querySelector("input");
const total = localStorage.getItem("total");
if (input && total) {
  calcularGanho(Number(input.value));
  input.value = total;
}

function calcularGanho(value: number): void {
  const p = document.querySelector("p");
  p ? (p.innerText = `Ganho total: ${value + 100 - value * 0.2}`) : "";
}
function totalMudou() {
  if (input) {
    localStorage.setItem("total", input.value);
    calcularGanho(Number(input.value));
  }
}

input ? input.addEventListener("keyup", totalMudou) : "";
