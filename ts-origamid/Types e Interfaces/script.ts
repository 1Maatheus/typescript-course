//Types:

type Dados = {
  nome: string;
  preco: number;
  teclado: boolean;
};

function preencherDados(dados: Dados) {
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

//Interface funciona na maioria dos casos como um Type, mas com sintaxe diferentes.
interface Produtos {
  nome: string;
  preco: number;
  teclado: boolean;
}

//Exercícios:
async function fetchProdutos() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();
  showProduct(data);
}
fetchProdutos();

interface Product {
  nome: string;
  descricao: string;
  preco: number;
}

function showProduct(data: Product) {
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
