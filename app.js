let qtde_numeros_sorteados = 0;

function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    console.log(`Quantidade: ${quantidade}`);
    console.log(`de: ${de}`);
    console.log(`ate: ${ate}`);

    while (qtde_numeros_sorteados != quantidade) {
      let num_sorteados = parseInt(Math.random() * ate) + de;
      console.log(`Número sorteado: ${num_sorteados}`);

      qtde_numeros_sorteados++;
    }
}

function reiniciar() {
    document.getElementById("reiniciar").removeAttribute("disabled");
}