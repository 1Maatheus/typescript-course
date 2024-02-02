"use strict";
//Types:
function preencherDados(dados) {
    document.body.innerHTML += `
  <div>
    <h2>Marca: ${dados.nome}</h2>
    <p>Preço: R$${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? "Sim" : "Não"}</p>
  </div>
  `;
}
preencherDados({
    nome: "Razer",
    preco: 1998.0,
    teclado: true,
});
preencherDados({
    nome: "HyperX",
    preco: 1998.0,
    teclado: false,
});
//Exercícios:
async function fetchProdutos() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    const data = await response.json();
    showProduct(data);
}
fetchProdutos();
function showProduct(data) {
    document.body.innerHTML = `
    <div>
      <h1>
       Produto: ${data.nome}
      </h1>
      <h2>
        Preço: R$${data.preco}
      </h2>
      <h5>
        Descrição: ${data.descricao}
      </h5>
    </div>
  `;
}
