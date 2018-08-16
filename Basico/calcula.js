function soma(a=0,b=0){
    let tipoa = typeof a
    let tipob = typeof b
    if(tipoa === 'number' && tipob === 'number'){
        return a + b
    }else{
        console.log("OPERAÇÃO NÃO REALIZADA:Deve ser digitado números!")
    }
}

console.log(soma(4.32,2))
