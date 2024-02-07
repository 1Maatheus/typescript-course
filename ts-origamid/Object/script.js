"use strict";
//DuckTyping: Um objeto quando passado em uma função, pode conter propriedades e métodos além dos declarados na interface.
// interface Produto {
//   nome: string;
//   quantidade: number;
// }
// const produto1 = {
//   nome: "Notebook",
//   quantidade: 10,
//   cor: "azul",
// };
// const produto2 = {
//   nome: "Geladeira",
//   quantidade: 4,
//   freezer: true,
// };
// const servico1 = {
//   nome: "Instalação",
// };
// Partial<Produto>
// interface Produto {
//   nome?: string;
//   quantidade?: number;
// }
const produto1 = {
    nome: "Notebook",
    quantidade: 10,
    cor: "azul",
};
const produto2 = {
    nome: "Geladeira",
    quantidade: 4,
    freezer: true,
};
const produto3 = {
    nome: "Instalação",
};
function mostrarQuantidade(produto) {
    // erro, quantidade pode ser undefined
    console.log(produto.quantidade + 20);
}
mostrarQuantidade(produto1);
mostrarQuantidade(produto2);
mostrarQuantidade(produto3);
const artigo = {
    titulo: "Como aprender HTML",
    visualizacoes: 3000,
    tags: ["Front End", "HTML"],
    autor: "André",
};
artigo.autor;
artigo.descricao;
function handlePost(post) {
    document.body.innerHTML += `${post.autor}`;
}
handlePost(artigo);
function mostrarTitulo(obj) {
    if ("titulo" in obj) {
        console.log(obj.titulo);
    }
}
// Erros:
// mostrarTitulo("string");
// mostrarTitulo(200);
// mostrarTitulo([1, 2]);
// mostrarTitulo(null);
// mostrarTitulo(undefined);
mostrarTitulo({
    titulo: "André",
});
