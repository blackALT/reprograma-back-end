// 1) Calcule a potência de 2 elevado a um número específico. Deve usar um loop (não usar `Math.pow()`).
// Exemplo:
// potenciaDeDois(10) // 1024

function potenciaDeDois(num){
    let resultado=1;
    
    for (let i=1;i<=num;i++){
        resultado *= 2
    }
    return resultado
}
console.log("Potência: " + potenciaDeDois(10))

// 2) Crie uma função que receba três números e determine se um número é maior que outro.
// Exemplo:
// retornaNumMaior(10, 20, 30) // 30

function retornaNumMaior(num1, num2, num3){
    if (num1 > num2){
        if (num1 > num3){
            return num1
        } else{
            return num3
        }
    } else if (num2 > num1){
        if (num2 > num3){
            return num2
        } else{
            return num3
        }
    }
    
// Outra maneira de fazer seria usando um array e ordenar os valores para pegar sempre o maior valor

   // const arrayNum = [num1,num2,num3];
   // arrayNum.sort()
   // let result = arrayNum[2]
   // return result
}
console.log("O maior número é: " + retornaNumMaior(20, 30, 10))


// ***************

// DESAFIOS!

// Crie uma função que determina se um número é primo e retorne true ou false conforme o caso. Em matemática, um número primo é um número natural maior que 1 que é divisível somente por ele mesmo e 1. Utilize o operador módulo (`%`) para determinar se um número é divisível por outro.

function isPrimo(num){
    var div = 0;
    for (let i=1; i<=num;i++){
        if(num % i == 0) {
            div++;
        }
    }
    if (div==2){
        console.log(num + " é primo")
    } else {
        console.log(num + " não é primo")
    }
}
isPrimo(7)

// Crie uma função que conte o número de vogais em uma `string` e retorne o número de vogais. 
// Exemplo:
// function contaVogais("carro") // 2 

function contaVogais(entrada){
    let numVogal = 0;
    const vogais = ['a','e','i','o','u']
    const palavra = entrada

    for (let i=0; i<=palavra.length;i++){
       
        for(let j=0; j<=vogais.length;j++){
       
            if (palavra.substr(i,1) === vogais[j]){
                numVogal++;
            }
         }
    }
    return numVogal
}
console.log("Número de vogais na palavra: " + contaVogais("carro"))

// Use estruturas de controle para inverter uma array de inteiros. A função deverá receber uma array de números e retornar uma array com a ordem dos elementos invertida. Não é válido utilizar `arr.reverse()`.
// Exemplo:
// function inverteArray([1, 2, 3, 4]) // [4, 3, 2, 1]

function inverteArray(num1,num2,num3,num4){
    
    const arrayNum = [num1,num2,num3,num4]
    let arrayInvertido = []

    for (let i=1; i<=arrayNum.length;i++){
        arrayInvertido[arrayNum.length-i] = arrayNum[i-1]
    }
    return arrayInvertido
}
console.log("Array Invertido: " + inverteArray(1,2,3,4))
semana 3
