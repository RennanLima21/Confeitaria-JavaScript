/*
Biblioteca para capturar inpust de texto do usuário no console
*/
const prompt = require("prompt-sync")({ sigint: true });

/*
RECEBER O PEDIDO
*/
function recebePedido() {
  let pedido = {
    sabor: null,
    confeitos: null,
  };
  // Qualo sabor do Bolo?
  pedido.sabor = prompt("Qual o sabor que gostaria? ");
  // Quais confeitos deseja?
  pedido.confeitos = prompt("Quais são os confeitos? ");

  return pedido;
}

/* 
PREPARAR O PEDIDO 
*/
function preparaPedido(pedido) {
  // Separar Igredientes
  let ingredientes_base = separaIngredientes(pedido);
  // Misturar o bolo
  let tabuleiro = misturaBolo(pedido, ingredientes_base);
  // Colocar no forno
  let bolo = colocaForno(tabuleiro);
  // Confeitar
  bolo = confeitar(pedido, bolo);

  return bolo;
}
// FUNCTIONS DOS PROCESSOS
function separaIngredientes(pedido) {
  let ingredientes_base = "ovos, leite, farinaha, fermento.";
  return ingredientes_base;
}
function misturaBolo(pedido, ingredientes_base) {
  return pedido.sabor + ", " + ingredientes_base;
}
function colocaForno(tabuleiro) {
  return "Bolo de  " + tabuleiro;
}
function confeitar(pedido, bolo) {
  return bolo + " confeitado com " + pedido.confeitos;
}
/* 
CALCULAR O PREÇO 
*/
function calculaPreco() {
  // Valor dos ingredientes
  let preco_final = calculaIngredientes();
  // Valor da confeiteira
  preco_final = calculaConfeiteira(preco_final);
  // Valor das despesas de produção
  preco_final = calculaDespesas(preco_final);
  // Valor dos gastos fixos
  preco_final = calculaGastos(preco_final);
  // Valor do lucro
  preco_final = calculaLucro(preco_final);
  // Retornar preço final

  return preco_final;
}

// FUNCTION PRA CALCULO DO PREÇO
function calculaIngredientes() {
  return 10.0;
}
function calculaConfeiteira(preco_calc) {
  return (preco_calc += preco_calc * 0.3);
}
function calculaDespesas(preco_calc) {
  return (preco_calc += 5.0);
}
function calculaGastos(preco_calc) {
  return (preco_calc += 15.0);
}
function calculaLucro(preco_calc) {
  return (preco_calc += preco_calc * 0.25);
}
/* 
ENTREGAR O PEDIDO 
*/
function entregaPedido(bolo, preco) {
  // Exibir / entregar bolo do cliente
  console.log("Pedido pronto !!!");
  console.log("Aproveite o seu " + bolo);

  // Exibir preço para o cliente
  prompt(
    "Seu pedido ficou em R$" +
      preco +
      ". Quando terminar de comer clique ENTER para pagar...!"
  );
}

/* 
RECEBER O DINHEIRO 
*/
function receberDinheiro(preco) {
  // Receber dinheiro do cliente
  let valor_pago = prompt("Digite o valor para pagar: ");
  for (; valor_pago != preco; ) {
    valor_pago = prompt("Valor incorreto, digite o valor correto para pagar: ");
  }
  // Fechar pedido e agradecer o cliente
  prompt("Muito obrigado e volte sempre!!!");
}

let pedido = recebePedido();
let bolo = preparaPedido(pedido);
let preco = calculaPreco();
entregaPedido(bolo, preco);
receberDinheiro(preco);
