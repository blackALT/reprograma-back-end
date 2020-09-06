// **Você pode dar os nomes que quiser para as funções e variáveis, apenas lembre que eles devem ser semânticos :)

// 1) crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão), cada uma delas recebendo 2 números como parâmetros e retornando o resultado

function soma(num1, num2){
    return num1+num2
}

function subtracao(num1, num2){
    return num1-num2
}

function multiplicacao(num1, num2){
    return num1*num2
}

function divisao(num1, num2){
    return num1/num2
}

/*
console.log("Soma: " + soma(4,1))
console.log("Subtração: " + subtracao(4,1))
console.log("Multiplicação: " + multiplicacao(4,1))
console.log("Divisao: " + divisao(4,1))
*/

// 2) para esse exercício, as funções de multiplicação e divisão não devem aceitar valores iguais a 0 (zero). Adicione esta lógica nas funções.


function multiplicacao(num1, num2){
    if (num1 === 0 || num2 === 0){
       return `Não pode multiplicar por zero`
    } 
    return num1*num2
}
//console.log(multiplicacao(2,2))


function divisao(num1, num2){
    if (num2 === 0){
        return `Não pode dividir por zero`
     } 
     return num1/num2
}

//console.log(divisao(2,2))

// 3) crie uma função que chame qualquer uma das funções acima e imprima o resultado no formato de String. Exemplo: "O resultado da operação é X" (sendo X o valor do resultado).

function imprimir(){
        return `O resultado da operação é: ${divisao(2,0)}`
} 
//console.log(imprimir())


// 4) utilizando as funções de soma e multiplicação dos exercícios anteriores, crie uma função que resolva a conta 36325 * (9824 + 777).

function operacao(){
    return `${multiplicacao(36325,soma(9824, 777))}`
}
//console.log("O reseultado da operação é: " + operacao())

// 5) crie uma função que receba dois números e gere outros dois números aleatórios com valores entre eles. Exemplo: uma função que receba (1, 100) deve gerar dois números aleatórios 
// entre 1 e 100. Em seguida, some estes números e devolva uma string com o resultado no formato: "a soma de [número aleatório] e [número aleatório] é XXX". 
// Você vai ter que pesquisar o método do JS para gerar números aleatórios, `Math.random()` e como utilizá-lo.

function aleatorios(min, max) {
    num1 = Math.floor(Math.random() * max) + min;
    num2 = Math.floor(Math.random() * max) + min;
    
    return `A soma de ${num1} e ${num2} é ${soma(num1,num2)}`
}
//console.log(aleatorios(1,100))

// 6) Crie uma função com as seguintes características:
// 1. A função deve receber 3 parâmetros
// 2. Se qualquer um dos três parâmetros não estiverem preenchidos, a função deve retornar a string: "Preencha todos os valores corretamente!"
// 3. O retorno da função deve ser a multiplicação dos 3 parâmetros, somando `2` ao resultado da multiplicação.

function novaMultiplicacao(num1, num2, num3){
    if (num1 == null || num2 == null || num3 == null){
       return `Preencha todos os valores corretamente!`
    } 
    return (num1*num2*num3)+2
}
//console.log(novaMultiplicacao(2,2,1))

// 7) Crie uma função com as seguintes características:
// 1. A função deve receber 3 parâmetros.
// 2. Se somente um argumento for passado, retorne o valor do argumento.
// 3. Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
// 4. Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
// 5. Se nenhum argumento for passado, retorne "não recebeu parâmetro"

function chacaParam(num1, num2, num3){
    if (num1 == null && num2 == null && num3 == null){
       return `não recebeu parâmetro`
    } else if (num2 == null && num3 == null){
        return num1
    } else if (num3 == null){
        return num1
    }
    return (num1+num2)/num3
}
//console.log(chacaParam())


// 8) crie uma função que receba uma string como parâmetro, e retorne essa mesma string invertida. Por exemplo, recebendo "reprograma", vai retornar "amargorper". Para isso, você vai ter que pesquisar como usar JavaScript para inverter uma string.

function inverter(palavra){
    result = palavra.toString();
    return result.reverse()
}
//console.log(inverter("reprograma"))

// 9) agora que você já sabe reverter strings, crie uma função que receba uma string, verifique se é um palíndromo e retorne true ou false. Exemplo de palíndromo: "arara".

function isPalindromo(palavra){
    let ladoDireito = []
    let ladoEsquerdo = []
    
    for(let i = 0; i <= palavra.length / 2; i++){
        
        if(palavra[i] != palavra[palavra.length - i - 1]){
            //console.log(palavra[i])
            //console.log(palavra[palavra.length - i - 1])
            return "Não é palíndromo"          
        } else {
            ladoDireito[i] = palavra[palavra.length - i - 1]
            ladoEsquerdo[i] = palavra[i]
        }     
    }
    if (ladoDireito.length == ladoEsquerdo.length){
        return "É palíndromo"
    }
}

//console.log(isPalindromo("arara"))
//console.log(isPalindromo("abcdba"))

// 10) crie uma função que receba duas strings como parâmetros e retorne a string com a maior quantidade de caracteres. Por exemplo, se passarmos como parâmetro "banana" e "chocolate" a função deve retornar "chocolate"

function maiorString(str1, str2){
    
    if(str1.length > str2.length){
        return str1
    } else {
        return str2
    }
}
//console.log(maiorString("banana","chocolate"))

