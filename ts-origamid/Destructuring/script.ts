const { body }: { body: HTMLElement } = document;
interface Produto {
  nome: string;
  preco?: number;
}

function handleData({ nome, preco }: Produto) {
  nome.includes("book");
  preco?.toFixed();
}

handleData({
  nome: "Notebook",
  preco: 2000,
});

// Mais exemplos:
function handleClick({
  currentTarget,
  pageX,
}: {
  currentTarget: EventTarget | null;
  pageX: number;
}) {
  if (currentTarget instanceof HTMLElement) {
    currentTarget.innerHTML = `<h1>Mouse Click em x: ${pageX}</h1>`;
  }
}

document.documentElement.addEventListener("click", handleClick);

//Rest operator:
function comparar(tipo: "maior" | "menor", ...numeros: number[]) {
  if (tipo === "maior") {
    return Math.max(...numeros);
  }
  if (tipo === "menor") {
    return Math.min(...numeros);
  }
}

console.log(comparar("maior", 3, 2, 4, 30, 5, 6, 20));
console.log(comparar("menor", 3, 2, 4, 1, 5, 6, 20, 89));
