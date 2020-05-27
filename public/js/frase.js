$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria(){
    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        }, 2000);
    });
}

function trocaFraseAleatoria(data){
    var frase = $(".frase");
    //Math.floor = arredonda pra baixo.
    var numeroAleario = Math.floor(Math.random() * data.length);
    frase.text(data[numeroAleario].texto);
    atualizaTamnhoFrase();
    atualizaTempoInicial(data[numeroAleario].tempo);
}