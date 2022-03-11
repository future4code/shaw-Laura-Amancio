/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
function comprarCarta() {
  // Cria array de cartas
  const cartas = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  // Cria array de naipes
  const naipes = ["♦️", "♥️", "♣️", "♠️"];

  // Sorteia uma carta
  const numero = cartas[Math.floor(Math.random() * 13)];

  // Sorteia um naipe
  const naipe = naipes[Math.floor(Math.random() * 4)];

  let valor;

  // Verifica se é uma das letras e coloca o valor correspondente na variável valor
  if (numero === "A") {
    valor = 11;
  } else if (numero === "J" || numero === "Q" || numero === "K") {
    valor = 10;
  } else {
    // Se nao for uma das letras, só converte a string para número
    valor = Number(numero);
  }

  // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
  const carta = {
    texto: numero + naipe,
    valor: valor,
  };

  return carta;
}

console.log("Boas vindas ao jogo de Blackjack!");
const querJogar = confirm("Quer iniciar uma nova rodada?");

if (querJogar === true) {
  let carta1Usuario = comprarCarta();
  let carta2Usuario = comprarCarta();
  let carta1Computador = comprarCarta();
  let carta2Computador = comprarCarta();

  let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor;
  let pontuacaoComputador = carta1Computador.valor + carta2Computador.valor;

  console.log(
    `Usuário - cartas:${carta1Usuario.texto} ${carta2Usuario.texto} - ${pontuacaoUsuario}`
  );
  console.log(
    `Computador - cartas:${carta1Computador.texto} ${carta2Computador.texto} - ${pontuacaoComputador}`
  );

  if (pontuacaoComputador > pontuacaoUsuario) {
    console.log("O computador ganhou!");
  } else if (pontuacaoComputador < pontuacaoUsuario) {
    console.log("O usuario ganhou!");
  } else {
    console.log("Empate");
  }
} else {
  console.log("O jogo acabou");
}
