import countBy from "./countBy.js";

type TransacaoValor = Transacao & {
  valor: number;
};

function filtrarValor(transacao: Transacao): transacao is TransacaoValor {
  return transacao.valor !== null;
}

export default class Estatisticas {
  private transacoes;
  total;
  pagamento;
  status;
  semana;
  melhorDia;
  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes;
    this.total = this.setTotal();
    this.pagamento = this.setPagamento();
    this.status = this.setStatus();
    this.semana = this.setSemana();
    this.melhorDia = this.setMelhorDia();
  }
  private setTotal() {
    return this.transacoes.filter(filtrarValor).reduce((acc, item) => {
      return acc + item.valor;
    }, 0);
  }

  private setPagamento() {
    return countBy(this.transacoes.map(({ pagamento }) => pagamento));
  }
  private setStatus() {
    return countBy(this.transacoes.map(({ status }) => status));
  }

  private setSemana() {
    const semana = {
      ["Domingo"]: 0,
      ["Segunda-Feira"]: 1,
      ["Terça-Feira"]: 2,
      ["Quarta-Feira"]: 3,
      ["Quinta-Feira"]: 4,
      ["Sexta-Feira"]: 5,
      ["Sábado"]: 6,
    };
    for (let i = 0; i < this.transacoes.length; i++) {
      const day = this.transacoes[i].data.getDay();
      switch (day) {
        case 0:
          semana["Domingo"] += 1;
          break;
        case 1:
          semana["Segunda-Feira"] += 1;
          break;
        case 2:
          semana["Terça-Feira"] += 1;
          break;
        case 3:
          semana["Quarta-Feira"] += 1;
          break;
        case 4:
          semana["Quinta-Feira"] += 1;
          break;
        case 5:
          semana["Sexta-Feira"] += 1;
          break;
        case 6:
          semana["Sábado"] += 1;
          break;
        default:
          console.log("erro");
          break;
      }

      return semana;
    }
  }

  private setMelhorDia() {
    return Object.entries(this.semana).sort((a, b) => {
      return b[1] - a[1];
    })[0];
  }
}
