//TypeAssertion: É possível "indicar" ao Typescript, qual o tipo de dado esperado com a palavra-chave "as". Só é possível indicar tipos que possueam relação com o tipo original. Evitar ao máximo o uso de Type Assertion, pois a segurança(Type Safety) é perdida quando indicamos algo que nem sempre será verdade.
interface Produto {
  nome: string;
  preco: number;
}

async function fetchProduto() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  return response.json() as Promise<Produto>;
}

// Podemos usar o as em diferentes locais.
async function handleProduto1() {
  const produto = await fetchProduto();
  produto.nome;
}

async function handleProduto2() {
  const produto = (await fetchProduto()) as Produto;
  produto.nome;
}

async function handleProduto3() {
  const produto = await fetchProduto();
  (produto as Produto).nome;
}

//Outras sintaxes
const video1 = document.querySelector(".player") as HTMLVideoElement;
const video2 = <HTMLVideoElement>document.querySelector(".player");
const video3 = document.querySelector<HTMLVideoElement>(".player");
const video4 = document.querySelector(".player");

video1.volume;
video2.volume;
video3?.volume;
(video4 as HTMLVideoElement).volume;
