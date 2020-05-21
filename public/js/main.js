var frase = $(".frase").text();
var numPalavaras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavaras);

var campo = $(".campo-digitacao");
campo.on("input", function(){
    var conteudo = campo.val();
    
    var qtdPalavras = conteudo.split(/\S+/).length - 1;
    $("#contador-palavras").text(qtdPalavras);

    var qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres);
    
});