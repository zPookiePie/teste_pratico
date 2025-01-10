// 3) Análise de faturamento diário utilizando JSON para os dados
const fs = require('fs');

const dados = JSON.parse(fs.readFileSync('faturamento.json', 'utf-8'));
const faturamento = dados.faturamento;

// filtrando dias com faturamento
const diasComFaturamento = faturamento.filter(valor => valor > 0);

// cálculos
const menorValor = Math.min(...diasComFaturamento);
const maiorValor = Math.max(...diasComFaturamento);
const mediaMensal = diasComFaturamento.reduce((a, b) => a + b, 0) / diasComFaturamento.length;
const diasAcimaDaMedia = diasComFaturamento.filter(valor => valor > mediaMensal).length;

console.log("Menor valor de faturamento:", menorValor);
console.log("Maior valor de faturamento:", maiorValor);
console.log("Dias com faturamento acima da média:", diasAcimaDaMedia);