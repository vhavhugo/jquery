$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

function fraseAleatoria(){
    $("#spinner").show();

    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        }, 2000);
    })
    .always(function(){
        $("#spinner").toggle();
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

function buscaFrase(){
    $("#spinner").toggle();
    var fraseId = $("#frase-id").val();
    console.log(fraseId);
    var dados = { id: fraseId };
    $.get("http://localhost:3000/frases", dados, trocaFrase)
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        }, 2000);
    })
    .always(function(){
        $("#spinner").toggle();
    }); 
}

function trocaFrase(data){
    var frase = $(".frase");
    frase.tex(data.texto);
    atualizaTamnhoFrase();
    atualizaTempoInicial(data.tempo);
}