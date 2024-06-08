function pegarValores() {
    const nomeProduto = document.getElementById('nomeProd');
    const valorOriginal = document.getElementById('valOg');
    const percentualDesconto = document.getElementById('perDesc');
    calcular(nomeProduto.value, valorOriginal.value, percentualDesconto.value);
}

function calcular(prod, val, perc){
    valDesc = (val*perc) / 100;
    valFin = val- valDesc;
    produtoResposta = document.getElementById('nomeProdRes'); 
    produtoResposta.value = prod;
    valorResposta = document.getElementById('valOgRes');
    valorResposta.value = val;
    percentualResposta = document.getElementById('valFinal');
    percentualResposta.value = valFin.toFixed(2);
}

function reiniciar(){

    document.getElementById("nomeProd").value = null;
    document.getElementById("valOg").value = null;
    document.getElementById("perDesc").value = null;
    document.getElementById("nomeProdRes").value = null;
    document.getElementById("valOgRes").value = null;
    document.getElementById("valFinal").value = null;

}
