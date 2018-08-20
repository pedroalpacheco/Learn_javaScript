//Sem call-back
const notas = [7.7,8.5,5.3,2.6,7.4,9.7,4.5]


let notasBaixas = []

for(let i in notas){
    if (notas[i]<7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//Com callback
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixas2)

//Aero function
const notasBaixas3 = notas.filter(nota => nota < 7)

console.log(notasBaixas3)

//Elegante
const notasMenosrQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenosrQue7)

console.log(notasBaixas4)