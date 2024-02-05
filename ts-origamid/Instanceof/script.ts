//Definição de classes com Typescript

class Produto {
  nome: string;
  preco: number;
  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }
  precoReal() {
    return `R$ ${this.preco}`;
  }
}
const livro = new Produto("O senhor dos anéis.", 198);
// console.log(livro.precoReal());

//Instanceof - verifica se o objeto e uma instância de determinado tipo.
class Livro {
  autor: string;
  constructor(autor: string) {
    this.autor = autor;
  }
}

class Jogo {
  jogadores: number;
  constructor(jogadores: number) {
    this.jogadores = jogadores;
  }
}

function buscarProduto(busca: string) {
  if (busca === "O Hobbit") {
    return new Livro("J. R. R. Tolkien");
  }
  if (busca === "Dark Souls") {
    return new Jogo(1);
  }
  return null;
}

const produto = buscarProduto("O Hobbit");

if (produto instanceof Livro) {
  produto.autor;
}

//Exercício:
const link = document.getElementById("origamid");

if (link instanceof HTMLAnchorElement) {
  link.href = link.href.replace("http://", "https://");
}

//Exercício:
const links = document.querySelectorAll(".link");

function ativarElemento(elemento: HTMLElement) {
  elemento.style.color = "blue";
  elemento.style.border = "1px solid red";
}

links.forEach((link) => {
  if (link instanceof HTMLElement) {
    ativarElemento(link);
  }
});
