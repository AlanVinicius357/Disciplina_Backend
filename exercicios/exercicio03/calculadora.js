//função para somar

function somar(a, b){
    return a + b
}

//função para subtrair

function subtrair(a, b){
    return a - b
}

//função para multiplicar

function multiplicar(a, b){
    return a * b
}

//função para dividir

function dividir(a, b){
    return a / b
}

//função aoQuadrado 

function aoQuadrado(a){
    return Math.pow(a, 2)
}

// função raizQuadrada

function raizQuadrada(a){
    return Math.sqrt(a)
}


//importando as funções

module.exports = {
        somar,
        subtrair,
        multiplicar,
        dividir,
        aoQuadrado,
        raizQuadrada
}