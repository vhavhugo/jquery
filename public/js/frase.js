$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria(){
    $.get("http://localhost:3000/frases", trocaFraseAleatoria);
}

function trocaFraseAleatoria(data){
    var frase = $(".frase");
    //Math.floor = arredonda pra baixo.
    var numeroAleario = Math.floor(Math.random() * data.length);
    frase.text(data[numeroAleario].texto);
}