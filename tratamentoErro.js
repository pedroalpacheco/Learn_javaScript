function mostraTela(obj){
    try{
    console.logx('Saudação: ' + obj);
    } catch (erro){
        console.log('Ocorreu um erro!')
    }
    
    
}

mostraTela('ola')




/*function tratarErroELancar(erro){
    throw new Error('...')
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() +
    } catch (e) {
        //tratarErroELancar(e)
        console.log('Erro inesperado!')
    }
}

const obj = {nome: "Pedro"}
imprimirNomeGritado(obj)*/