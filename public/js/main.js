var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

// $(document).ready(function(){}) == $(function(){})
$(function(){
    atualizaTamnhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
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
                campo.toggleClass("campo-desativado");
            }
        },1000);
    });
}

function inicializaMarcadores(){
    var frase = $(".frase").text();
    campo.on("input", function(){
        var digitado = campo.val();
        var compativel = frase.substr(0,digitado.length);
        if(digitado == compativel){
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        }else{
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
    });
}

function reiniciaJogo(){
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
    campo.toggleClass("campo-desativado");    
    campo.removeClass("borda-vermelha");
    campo.removeClass("borda-verde");
}