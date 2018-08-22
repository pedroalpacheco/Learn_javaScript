//Factory simples

function criaPessoa(){
    return{
        nome:"Fe",
        sobrenome:"Pacheco"
    }
}

console.log(criaPessoa())


function criarProduto(nome, preco){
    
    return{
        nome,
        preco,
        desconto:0.1

    }
}
console.log(criarProduto('carne',12.5))
console.log(criarProduto('Chocolate',3.5))
//console.log(typeof criarProduto())