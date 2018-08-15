//Função sem retorno

function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(2,3)

//Função com retorno = 0 colocar valor padrão na string

function soma(a=0,b=0){
    return a + b
}

console.log(soma(2,3))
console.log(soma(3))
console.log(soma())