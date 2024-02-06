//Generics: Um tipo genérico, é uma forma de declararmos um parâmetro para a nossa função, classe ou interface. Esse tipo poderá ser indicado no momento do uso da função, através de <Tipo>.
function retorno<variavel>(a: variavel): variavel {
  return a;
}
// console.log(retorno("Matheus"));
// console.log(retorno(10));
// console.log(retorno(true));

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const frutas = ["Banana", "Pêra", "Uva", "Laranja", "Limão", "Maçã"];

function firstFive<TipoLista>(lista: TipoLista[]): TipoLista[] {
  return lista.slice(0, 5);
}
// console.log(firstFive(numeros));
// console.log(firstFive(frutas));

function notNull<T>(arg: T) {
  if (arg !== null) return arg;
  else return null;
}
// console.log(notNull("Matheus"));

function tipoDado<T>(a: T) {
  const resultado = {};
  console.log(resultado);
  return resultado;
}
// tipoDado("Teste");

function extractText<T extends HTMLElement>(el: T) {
  return {
    texto: el.innerText,
    el,
  };
}
// const link = document.querySelector("a");
// if (link) {
// console.log(extractText(link).el.href);
// }

// function $<Tipo extends Element>(selector: string): Tipo | null {
//   return document.querySelector(selector);
// }
// const link = $<HTMLAnchorElement>("a")?.href;

async function getData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

interface Notebook {
  nome: string;
  preco: number;
}

async function handleData() {
  const notebook = await getData<Notebook>(
    "https://api.origamid.dev/json/notebook.json"
  );
  console.log(notebook.preco);
}

handleData();
