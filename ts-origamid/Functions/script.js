"use strict";
function somar(a, b, c) {
    return a + b + (c || 0);
}
somar(3, 4, 6);
const subtrair = (a, b) => a - b;
subtrair(4, 3);
//Void: No javascript, uma função sem return irá retonar undefined. No Typescript, o retorno é definido como void. Isso evita usos errados como checagens booleanas de métodos que não possuem retorno.
function pintarTela(cor) {
    document.body.style.backgroundColor = cor;
}
// pintarTela("aliceblue");
//Never: o never é utilizado em casos onde a função gera um erro ou termina a aplicação.
function abort(mensagem) {
    throw new Error(mensagem);
}
function normalizar(valor) {
    if (typeof valor === "string") {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map((item) => item.trim().toLowerCase());
    }
}
function arredondaPraCima(valor) {
    if (typeof valor === "string") {
        return Math.ceil(Number(valor)).toString();
    }
    else {
        return Math.ceil(valor);
    }
}
// console.log(arredondaPraCima(10));
