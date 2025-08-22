// importanto a biblioteca prompt-sync
let prompt = require('prompt-sync')();

//usar a lib do prompt-sync

let nome = prompt("Qual o seu nome? ")

console.log(`Olá ${nome}`)


//importar o modulo CalculadoradeNota

let {calcularNotaA1, calcularNotaA2, notaFinal} = require('./CalculadoradeNota')

//perguntar ao usuario a nota de exercicios, trabalho e prova
//usa-se parseFloat para transformar a string em numero


//nota A!
let exerciciosA1 = parseFloat(prompt("Qual a nota de exercicios A1? "))
let trabalhoA1 = parseFloat(prompt("Qual a nota do trabalho A1? "))
let provaA1 = parseFloat(prompt("Qual a nota da prova A1? "))
let notaA1 = calcularNotaA1(exerciciosA1, trabalhoA1, provaA1)

console.log("### calculo da nota A1 ###")
console.log("Nota exercicios A1:", exerciciosA1)
console.log("Nota trabalho A1:", trabalhoA1)
console.log("Nota da prova A1:", provaA1)
console.log("Nota calcula:", notaA1.toFixed(2))

//nota A2
let exerciciosA2 = parseFloat(prompt("Qual a nota de exercicios A2? "))
let trabalhoA2 = parseFloat(prompt("Qual a nota do trabalho A2? "))
let provaA2 = parseFloat(prompt("Qual a nota da prova A2? "))
let notaA2 = calcularNotaA1(exerciciosA2, trabalhoA2, provaA2)

console.log("### calculo da nota A2 ###")
console.log("Nota exercicios A2:", exerciciosA2)
console.log("Nota trabalho A2:", trabalhoA2)
console.log("Nota da prova A2:", provaA2)
console.log("Nota calcula:", notaA2.toFixed(2))


// nota media final

console.log("Agora vamos calcular sua média final!")
let mediafinal = notaFinal(notaA1, notaA2)

console.log("Sua média final é: ", mediafinal.toFixed(2))

if(mediafinal >= 5 ){
    console.log(`Parabéns ${nome}, você foi aprovado!`)
}else{
    console.log(`Estude mais ${nome}, infelizmente você foi reprovado!`)
}