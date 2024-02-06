"use strict";
const { body } = document;
function handleData({ nome, preco }) {
    nome.includes("book");
    preco?.toFixed();
}
handleData({
    nome: "Notebook",
    preco: 2000,
});
// Mais exemplos:
function handleClick({ currentTarget, pageX, }) {
    if (currentTarget instanceof HTMLElement) {
        currentTarget.innerHTML = `<h1>Mouse Click em x: ${pageX}</h1>`;
    }
}
document.documentElement.addEventListener("click", handleClick);
//Rest operator:
function comparar(tipo, ...numeros) {
    if (tipo === "maior") {
        return Math.max(...numeros);
    }
    if (tipo === "menor") {
        return Math.min(...numeros);
    }
}
console.log(comparar("maior", 3, 2, 4, 30, 5, 6, 20));
console.log(comparar("menor", 3, 2, 4, 1, 5, 6, 20, 89));
