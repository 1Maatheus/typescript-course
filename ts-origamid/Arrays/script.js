"use strict";
//Arrays
// const numeros = [10, 20, 30, 40, 50];
// const valores = [10, "Taxas", 30, "Produto", 50, 3];
// function maiorQue10(data: number[]) {
//   const arr2 = data.filter((number) => number > 10);
//   console.log(arr2);
// }
// maiorQue10(numeros);
// function retornaNumeros(data: (number | string)[]) {
//   return data.filter((item) => typeof item === "number");
// }
// console.log(retornaNumeros(valores));
// const dados = [
//   ["senhor dos aneis", 80],
//   ["harry potter", 90],
// ];
// Exercícios:
// async function fetchCursos() {
//     const response = await fetch("https://api.origamid.dev/json/cursos.json");
//     const data = await response.json();
//     mostrarCursos(data);
// }
// fetchCursos();
// function mostrarCursos(cursos) {
//     cursos.map((curso) => {
//         document.body.innerHTML += `
//       <div>
//         <h2>
//           ${curso.nome}
//         </h2>
//         <p>Horas: ${curso.horas}</p>
//         <p>Aulas: ${curso.aulas}</p>
//         <p>Gratuito: ${curso.gratuito ? "Sim" : "Não"}</p>
//         <p>Nível: ${curso.nivel === "iniciante"
//             ? "<span style='color: blue'>Iniciante</span>"
//             : "<span style='color: red'>Avançado</span>"}</p>
//       </div>
//     `;
//     });
// }
