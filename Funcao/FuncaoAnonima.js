const soma = function(x, y){
    return x+y
}

const imprimeResultado = function (a,b, operacao = soma){
    console.log(operacao(a,b))
}

imprimeResultado(3,4)

//Função explicita
function somando(x,y){
    console.log(x+y)
}

somando(2,2)