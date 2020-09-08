/*const input = require("readline-sync");

const acertou = (function () {

    const numOculto = Math.floor((Math.random() * 10) + 1);
 
    let numero

    do {
            numero = input.question('Digite um numero ')
               
    } while (numero != numOculto)
    console.log("Você acertou! O número é: " + numero)

})()
*/
/*
const cachorro = {
    nome: 'Carlos',
    raca: 'Labrador',
    pelagem: 'chocolate',
    morder: (nomeDaPessoa) => {
      console.log('Mordi voce, ' + cachorro.nome)
    },
    morder2(nomeDaPessoa){
        console.log('O cachorro ' + this.nome + ' mordeu ' + nomeDaPessoa)
    }
}
cachorro.morder('Fabiana')
cachorro.morder2('Fabiana')
*/

// Liste números de 0 a 10 no console
const novoArrayNumeros = []
const numerosZeroDez = (function (){
    for (let i = 0; i <= 10; i++){
        novoArrayNumeros.push(i)
    }
    console.log('Lista com for tradicional',novoArrayNumeros)
})()

const arrayNumeros = [0,1,2,3,4,5,6,7,8,9,10]

const listaNumeros = arrayNumeros.map(numero => numero)
console.log('lista numero com map', listaNumeros)