"use strict";
async function fetchProduto() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    return response.json();
}
// Podemos usar o as em diferentes locais.
async function handleProduto1() {
    const produto = await fetchProduto();
    produto.nome;
}
async function handleProduto2() {
    const produto = (await fetchProduto());
    produto.nome;
}
async function handleProduto3() {
    const produto = await fetchProduto();
    produto.nome;
}
//Outras sintaxes
const video1 = document.querySelector(".player");
const video2 = document.querySelector(".player");
const video3 = document.querySelector(".player");
const video4 = document.querySelector(".player");
video1.volume;
video2.volume;
video3?.volume;
video4.volume;
