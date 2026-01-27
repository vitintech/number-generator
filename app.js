let qtde_numeros_sorteados = 0;

function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    alert(`Quantidade: ${quantidade}`);
    alert(`de: ${de}`);
    alert(`ate: ${ate}`);

    while (qtde_numeros_sorteados < quantidade) {
      let num_sorteados = parseInt(Math.random() * ate) + de;
      alert(`Número sorteado: ${num_sorteados}`);

      qtde_numeros_sorteados++;
    }
}