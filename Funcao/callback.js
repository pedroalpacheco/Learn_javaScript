const fabricantes = ['mercedes', 'ford','wolkswagen','honda']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)