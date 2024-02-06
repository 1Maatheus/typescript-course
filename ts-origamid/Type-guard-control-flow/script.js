"use strict";
// function typeGuard(value: any) {
//   if (typeof value === "string") {
//     return value.toLocaleLowerCase();
//   }
//   if (typeof value === "number") {
//     return value.toFixed();
//   }
//   if (value instanceof HTMLElement) {
//     return value.innerText;
//   }
// }
//Exemplo com fetch
async function fetchProduto() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    const json = await response.json();
    handleProduto(json);
}
function handleProduto(data) {
    if ("preco" in data) {
        document.body.innerHTML += `
    <p>Nome: ${data.nome}</p>
    <p>Preço: ${data.preco}</p>
    `;
    }
}
// fetchProduto();
//Unknown: indica que não sabemos o tipo de dado que pode ser passado. Diferente do any, o unknown só irá permitir o uso de métodos quando a Type Safety estiver garantida.
function typeGuard(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    if (typeof value === "number") {
        return value.toFixed();
    }
    if (value instanceof HTMLElement) {
        return value.innerText;
    }
}
