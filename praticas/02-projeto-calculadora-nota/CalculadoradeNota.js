// A1 = 40% da nota    
function calcularNotaA1(exercicios, trabalho, prova){
    return exercicios + trabalho + prova
}

//A2= 60% da nota
function calcularNotaA2(exercicios, trabalho, prova){
    return exercicios + trabalho + prova
}

//Nota final   (A1 * 0.4) + (A2 * 0.6)
function notaFinal(notaA1, notaA2){
    return (notaA1 * 0.4) + (notaA2 * 0.6)
}

//exportar as funções para utilizar no index 

module.exports = {
    calcularNotaA1,
    calcularNotaA2,
    notaFinal
}