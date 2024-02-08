/**
 * Recebe string '1.2000,50', retorna number 1.2000.50
 */

export default function moedaParaNumero(moeda: string): number | null {
  const numero = Number(moeda.replaceAll(".", "").replace(",", "."));
  return isNaN(numero) ? null : numero;
}
