function validar(){

    var valor = document.getElementById("numero").value;

    if(valor.length > 2){
        alert("ERRO : Você digitou número com mais de 2 algarismos!");
        return false;
    } else {
        return true;
    }

}