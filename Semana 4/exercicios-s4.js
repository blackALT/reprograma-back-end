// DESAFIO - validador de cartão de crédito

// Todos os números de cartão de crédito têm uma sequência que pode ser validada através de um algoritmo 
// chamado Algoritmo de Luhn. Para validar qualquer número de cartão de crédito (o padrão de 16 dígitos), 
// siga os seguintes passos:

// 1. Retire o último dígito do número. Ele é o verificador;
// 2. Escreva os números na ordem inversa;
// 3. Multiplique os dígitos das casas ímpares por 2 e subtraia 9 de todos os resultados maiores que 9;
// 4. Some todos os números;
// 5. O dígito verificador (aquele do passo 1) é o número que você precisa somar a todos os outros números somados para fazer a validação;
// 6. O número de cartão de crédito será válido caso o total (do passo 5) seja múltiplo de 10 (ou seja, numero % 10 === 0)

// Números de cartões válidos para teste:

// 5555666677778884
// 5485755481460022
// 5141331902596939
// 5381579886310193
// 5261400319746371

const cartao = "5381579886310193"

// 8*2 (16-9=7) 8 8*2 (16-9=7) 7 7*2 (14-9=5) 7 7*2 (14-9=5) 6 6*2 (12-9=3) 6 6*2 (12-9=3) 5 5*2 (10-9=1) 5 5*2 (10-9=1)
// (7+7+5+5+3+3+1+1)+(8+7+7+6+6+5+5)+4 = 80/10 = 0

function checaCartao(card){
  const arrayCartao = []
  
  for (let i=0; i < card.length; i++){

    arrayCartao[i] = card.substr(i,1)

  }
  
  const digVerificador = Number(arrayCartao[arrayCartao.length-1]);
  const cartaoReverso = arrayCartao.reverse()
  let somaDigitos = 0;
 
  for (let i=1; i < cartaoReverso.length; i++){

    let multiDigitos = Number(cartaoReverso[i]);
    
    if(i % 2 != 0){

      multiDigitos *= 2;
      
      if (multiDigitos > 9){
      
        multiDigitos -= 9;      
      }
    }
    somaDigitos += multiDigitos;
 }
 
 const validaCartao = (somaDigitos + digVerificador)
 
 if (validaCartao % 10 === 0){
    return "Cartão válido: " + card
 }
  return "Cartão inválido: " + card
}
console.log(checaCartao(cartao))

///////////////////////

// DESAFIO - saudar clientes

// Escreva uma função chamada saudarCliente.
// Essa função deve receber um nome, verificar se ele existe na base de clientes e retornar uma 
// saudação com base em quantas vezes a cliente visitou um estabelecimento. 
// Consulte o objeto baseClientes abaixo. A saudação deve ser diferente, dependendo do nome da 
// reserva.

// Caso 1 - Cliente desconhecida (o nome não está presente no objeto baseClientes)
// console.log(saudarCliente('Chiquinha')) // --> 'Olá, é a primeira vez por aqui?'

// Caso 2 - Cliente que visitou apenas uma vez (o valor de 'visitas' é 1)
// console.log(saudarCliente('Clotilde')) // --> 'Bem-vinda, Clotilde! Que bom que voltou!'

// Caso 3 - Cliente repetida: (o valor de 'visitas' é maior que 1)
// console.log(saudarCliente('Florinda')) // --> 'Bem-vinda mais uma vez, Florinda!'

// Notas:
// Sua função não deve alterar o objeto baseClientes para atualizar o número de visitas.
// Não codifique os dados exatos da amostra. Esta é uma má ideia:
// if (nomeCliente === 'Maria') {
//   // etc
// }

const baseClientes = {
  Clotilde: {
    visitas: 1,
  },
  Florinda: {
    visitas: 2,
  },
  Paty: {
    visitas: 3,
  },
}

// Variáveis de teste

const cliente1 = 'Paty'
const cliente2 = 'Florinda'
const cliente3 = 'Clotilde'
const cliente4 = 'Wanessa'


function saudarCliente(cliente){
  let saudacao = 'Olá, ' + cliente + ' é a primeira vez por aqui?'

    for (nome in baseClientes) {

      for (visitas in baseClientes[nome]){

        if (nome === cliente){

          if (baseClientes[nome][visitas] === 1){

            saudacao = 'Bem-vinda, ' + cliente + ' Que bom que voltou!'

        } else if (baseClientes[nome][visitas] > 1){

          saudacao = 'Bem-vinda mais uma vez, ' + cliente + ' !'    

       }    
      }
    }
  }
  return saudacao
}
//console.log(saudarCliente(cliente1))
//console.log(saudarCliente(cliente2))
//console.log(saudarCliente(cliente4))
//console.log(saudarCliente(cliente4))