let lista_nuSorteados = [];

function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    console.log(`Quantidade: ${quantidade}`);
    console.log(`de: ${de}`);
    console.log(`ate: ${ate}`);

    for (i = 0; i < quantidade; i++) {
    lista_nuSorteados = gerarNumeroAleatorio(de, ate);
    let numero = lista_nuSorteados;

    if (lista_nuSorteados.includes(numero)) {
        return gerarNumeroAleatorio(de, ate);
    } else {
        lista_nuSorteados.push(numero);
    }
    console.log(`${lista_nuSorteados}`);
  }
}

function gerarNumeroAleatorio(min, max) {
    return parseInt(Math.random() * max) + min;
}