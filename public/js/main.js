var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

// $(document).ready(function(){}) == $(function(){})
$(function(){
    atualizaTamnhoFrase();
    inicializaContadores();
    inicializaCronometro();
    $("#botao-reiniciar").click(reiniciaJogo);
});

function atualizaTamnhoFrase(){
    var frase = $(".frase").text();
    var numPalavaras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavaras);
}

    function inicializaContadores(){
        campo.on("input", function(){
            var conteudo = campo.val();
            
            var qtdPalavras = conteudo.split(/\S+/).length - 1;
            $("#contador-palavras").text(qtdPalavras);
        
            var qtdCaracteres = conteudo.length;
            $("#contador-caracteres").text(qtdCaracteres);
            
        });
    }


function inicializaCronometro(){
    var tempoRestantante = $("#tempo-digitacao").text();
    campo.one("focus", function(){
        var cronometroID = setInterval(function(){
            tempoRestantante--;
            $("#tempo-digitacao").text(tempoRestantante);
            if(tempoRestantante < 1){
                campo.attr("disabled", true);
                clearInterval(cronometroID);
                campo.addClass("campo-desativado");
            }
        },1000);
    });
}


function reiniciaJogo(){
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();    
}