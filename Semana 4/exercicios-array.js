// Exercícios práticos com for e arrays!

// 1) Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
// Exemplo: recebendo ["banana", "gatinho", "brócolis"] deve imprimir no console:
// índice 0, elemento "banana"
// índice 1, elemento "gatinho"
// índice 2, elemento "brócolis"


//const arrayEntrada = ["banana", "gatinho", "brócolis"]

function arrayUm(entrada){
    
    for(let i = 0; i < entrada.length; i++){
        console.log("Indice " + i + ", elemento " + entrada[i] )        
    }
}

// console.log(arrayUm(arrayEntrada))

// 2) Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
// Exemplo: recebendo [10,11,12] deve retornar 33

//const arrayEntrada = [10,11,12]

function arrayInteiros(entrada){
    let soma = 0;
    
    for(let i=0; i < entrada.length; i++){
        soma += entrada[i]
    }
    return soma
}
//console.log(arrayInteiros(arrayEntrada))


// 3) Crie uma função que receba uma array de números inteiros e retorne outra array somente com os elementos maiores que 5.
// Exemplo, recebendo [88,55,0,2,85,81,24,12] deve retornar [ 88, 55, 85, 81, 24, 12 ]

// const arrayEntrada = [88,55,0,2,85,81,24,12]

function arrayCinco(entrada){
    
    let arrayResult = []
       
    for(let i = 0; i <= entrada.length; i++){
      if (entrada[i] > 5){
          arrayResult.push(entrada[i])
      } 
    }
    return arrayResult;
}
// console.log(arrayCinco(arrayEntrada))

// 4) Modifique a função anterior para que receba, além da array, o número para comparação (não deixar mais fixo como número 5).
// Exemplo, recebendo ([88,55,0,2,85,81,24,12], 20) deve retornar [ 88, 55, 85, 81, 24 ]

//const arrayEntrada = [88,55,0,2,85,81,24,12]
//const param = 20

function arrayQuatro(entrada, param){
    let arrayResult = []
       
    for(let i = 0; i <= entrada.length; i++){
      if (entrada[i] > param){
          arrayResult.push(entrada[i])
      }
    }
    return arrayResult
}
//console.log(arrayQuatro(arrayEntrada, param))

// 5) Crie uma função que receba uma array de números inteiros e retorne o maior número encontrado.
// Exemplo: recebendo [56, 12, 168, 66] deve retornar 168
// EXTRA: Pesquisar uma maneira iniciar com o menor número possível (dica: não é zero)

//const arrayEntrada = [56, 12, 66, 168]

function arrayMaior(param){
    param.sort()
    console.log(param)
    let result = param.pop()
    return result
}
//console.log(arrayMaior(arrayEntrada))


// 6) Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: "o menor número é X e o maior número é Y".
// Exemplo, recebendo [5, 37, 18, 59, 12, -5] a função deve retornar "o maior número é 59 e o menor número é -5"

const arrayEntrada = [5, 37, 18, 59, 12,-5] 

function arrayMaiorMenor(arrayNum){
    arrayNum.sort()
    let maior = arrayNum.pop()
    let menor = arrayNum.reverse().pop()

    let result = console.log("o maior número é " + maior + " e o menor número é " + menor)

    return result
}
//console.log(arrayMaiorMenor(arrayEntrada))

// Forma feita na aula
function arrayMaior(array){
    
    let maior = 0
    let menor = 0

    for (let i = 0; i < array.length; i++){
        if(array[i] > maior){
            maior = array[i]
        }
        if(array[i] < menor){
            menor = array[i]
        }
    }
    return "o maior número é " + maior + " e o menor número é " + menor
}

//console.log(arrayMaior(arrayEntrada))