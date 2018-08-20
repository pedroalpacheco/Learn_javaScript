function Carro(velocidadeMaxima=200, delta=5){
    //atributo privado
    let velocaidadeAtual = 0

    //Metodo público
    this.acelerar = function(){
        if (velocaidadeAtual + delta <= velocidadeMaxima ){
            velocaidadeAtual += delta
        }else{
            velocaidadeAtual = velocidadeMaxima
        }
    }
    //Metodo publico
    this.getVelocidadeAtual = function (){
        return velocaidadeAtual
    }
}

const uno = new Carro

//uno.acelerar()
//uno.acelerar()

//console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350,30)

ferrari.acelerar()
ferrari.acelerar()

console.log(ferrari.getVelocidadeAtual())
