"use strict";
//Definição de classes com Typescript
class Produto {
    nome;
    preco;
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    precoReal() {
        return `R$ ${this.preco}`;
    }
}
const livro = new Produto("O senhor dos anéis.", 198);
console.log(livro.precoReal());
//Instanceof - verifica se o objeto e uma instância de determinado tipo.
class Livro {
    autor;
    constructor(autor) {
        this.autor = autor;
    }
}
class Jogo {
    jogadores;
    constructor(jogadores) {
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
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
