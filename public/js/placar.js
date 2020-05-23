
function inserePlacar(){
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Hugo";
    var numPalavaras = $("#contador-palavras").text();
    // var botaoRemover = "<a href='#'><i class='small material-icons'>delete</i></a>";
    // var linha = "<tr>"+
    //                 "<td>"+ usuario +"</td>"+
    //                 "<td>"+ numPalavaras +"</td>"+
    //                 "<td>"+ botaoRemover +"</td>"+
    //             "</tr>";

    var linha = novaLinha(usuario, numPalavaras);
    linha.find(".bota-remover").click(removeLinha);

    corpoTabela.prepend(linha);
}

function novaLinha(usuario, palavaras){
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavaras);
    var colunaRemover = $("<td>");
    
    var link = $("<a>").addClass("botao-remover").attr("href", "#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);

    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha(){
    event.preventDefault();
    $(this).parent().parent().remove();
}