const nome = "Maria Luíza";
const idade = 22;
const bebidaMaior = "Whisky Blue Label";
const bebidaMenor = "suco natural de laranja";

console.log('Garçom: "Seja bem-vinda ao nosso bar. Em que posso ajudar?"');
const pedido = `${nome}: "Por favor, eu gostaria de beber ${idade >= 18 ? bebidaMaior : bebidaMenor}."`;
console.log(pedido)