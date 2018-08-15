function adicionarIngrediente() {
    var ing = document.getElementById("ingrediente").value;
    var listahtml = document.getElementById("lista").innerHTML;

    listahtml = listaHTML + "<li>"+ing+"</li>";

    document.getElementById("lista").innerHTML = listahtml;

}