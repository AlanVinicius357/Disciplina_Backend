// importanto a biblioteca prompt-sync
let prompt = require('prompt-sync')();

//importar o modulo CalculadoradeNota


const calc = require('./calculadora');


console.log('3 + 4 =', calc.somar(3, 4));
console.log('10 - 7 =', calc.subtrair(10, 7));
console.log('6 * 5 =', calc.multiplicar(6, 5));
console.log('8 / 2 =', calc.dividir(8, 2));
console.log('5 ao quadrado =', calc.aoQuadrado(5));
console.log('raiz quadrada de 25 =', calc.raizQuadrada(25));

let a = parseFloat(prompt("Digite um número: "))
let b = parseFloat(prompt("Digite outro número: "))

let resultadoSoma = calc.somar(a, b)
let resultadoSubtracao = calc.subtrair(a, b)
let resultadoMultiplicacao = calc.multiplicar(a, b)
let resultadoDivisao = calc.dividir(a, b)
let resultadoAoquadrado = calc.aoQuadrado(a)
let resultadoRaizquadrada = calc.raizQuadrada(a)

console.log(`O resultado da soma é ${resultadoSoma}`)
console.log(`O resultado da subtração é ${resultadoSubtracao}`)
console.log(`O resultado da multiplicação é ${resultadoMultiplicacao}`)
console.log(`O resultado da divisão é ${resultadoDivisao}`)
console.log(`O resultado ao quadrado é ${resultadoAoquadrado}`)
console.log(`O resultado da raiz é ${resultadoRaizquadrada}`)