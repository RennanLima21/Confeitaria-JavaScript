/*
Biblioteca para capturar inpust de texto do usuário no console
*/
const prompt = require('prompt-sync')({sigint: true})


/*
RECEBER O PEDIDO
*/
function recebePedido (){
  let pedido = {
      sabor: null,
      confeitos: null

  }
  // Qualo sabor do Bolo?
  pedido.sabor = prompt('Qual o sabor que gostaria? ')
  // Quais confeitos deseja?
  pedido.confeitos = prompt('Quais são os confeitos? ')

    return pedido
}


/* 
PREPARAR O PEDIDO 
*/
function preparaPedido(pedido){
  // Separar Igredientes
    let ingredientes_base = separaIngredientes(pedido)
  // Misturar o bolo
   let tabuleiro = misturaBolo(pedido, ingredientes_base)
  // Colocar no forno
   let bolo = colocaForno(tabuleiro)
  // Confeitar
  bolo = confeitar(pedido, bolo)

return bolo
}
// FUNCTIONS DOS PROCESSOS
function separaIngredientes(pedido){
    let ingredientes_base = 'ovos, leite, farinaha, fermento,'
    return ingredientes_base
}
function misturaBolo(pedido, ingredientes_base){
    return (pedido.sabor + ', ' + ingredientes_base)
}
function colocaForno(tabuleiro){
    return 'Bolo de  ' + tabuleiro
}
function confeitar(pedido, bolo){
  return bolo + ' confeitado com ' + pedido.confeitos
}
/* 
CALCULAR O PREÇO 
*/
  // Valor dos ingredientes
  // Valor da confeiteira
  // Valor das despesas de produção
  // Valor dos gastos fixos
  // Valor do lucro
  // Retornar preço final
  
/* 
ENTREGAR O PEDIDO 
*/
  // Exibir / entregar bolo do cliente
  // Exibir preço para o cliente

/* 
RECEBER O DINHEIRO 
*/
  // Receber dinheiro do cliente
  // Fechar pedido e agradecer o cliente









let pedido = recebePedido()
let bolo = preparaPedido(pedido)

console.log(pedido)
console.log(bolo)