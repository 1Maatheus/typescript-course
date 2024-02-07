"use strict";
//Tuples: são arrays que possuem dados em posições fixas.
const produto1 = ["Notebook", 2500];
const produto2 = ["Notebook", 2500];
const nome1 = produto1[0]; // string | number
const nome2 = produto2[0]; // string
const [nome, preco] = produto2;
//--
function getText(selector) {
    const el = document.querySelector(selector);
    if (el) {
        return [el, el.innerText];
    }
    else {
        return null;
    }
}
const button = getText("button");
if (button) {
    const [buttonElement, buttonText] = button;
}
//Exercícios:
async function fetchVendas() {
    const response = await fetch("https://api.origamid.dev/json/vendas.json");
    const data = await response.json();
    somarVendas(data);
}
function somarVendas(vendas) {
    const total2 = vendas.reduce((total, venda) => {
        return total + venda[1];
    }, 0);
    document.body.innerHTML += `<p>Total: R$ ${total2}</p>`;
}
fetchVendas();
