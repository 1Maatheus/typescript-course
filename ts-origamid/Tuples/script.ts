//Tuples: são arrays que possuem dados em posições fixas.
const produto1: (string | number)[] = ["Notebook", 2500];
const produto2: [string, number] = ["Notebook", 2500];
const nome1 = produto1[0]; // string | number
const nome2 = produto2[0]; // string
const [nome, preco] = produto2;

//--
function getText(selector: string) {
  const el = document.querySelector<HTMLElement>(selector);
  if (el) {
    return [el, el.innerText] as const;
  } else {
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

interface ProdutoDetalhes {
  marca: string;
  cor: string;
}

type Venda = [string, number, string, ProdutoDetalhes];

function somarVendas(vendas: Venda[]) {
  const total2 = vendas.reduce((total, venda) => {
    return total + venda[1];
  }, 0);

  document.body.innerHTML += `<p>Total: R$ ${total2}</p>`;
}

fetchVendas();
