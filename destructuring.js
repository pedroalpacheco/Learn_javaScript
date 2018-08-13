//Novo recurso ES2015
const pessoa = {

    nome:'João',
    idade:'26',
    enderco:{
        logradouro:'Avenida Veiga',
        numero:'2356',
    }
    
}

const{nome, idade} = pessoa 
console.log(nome,idade)

const{nome: n, idade: i } = pessoa

console.log(n, i)

const {sobrenome, bemhumorado = true} = pessoa
console.log(sobrenome,bemhumorado)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)