// função para informações, testes, e exibir os numeros sorteados
function sortear() {
    lista_nuSorteados = [];
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    if (de > ate) {
        alert("O valor (do) nao pode ser maior que o valor (ate).");
        return;
    }

    if (quantidade > (ate - de + 1)) {
        alert("A quantidade de numeros a serem sorteados é maior que o intervalo disponível.");
        return;
    }

    console.log(`Quantidade: ${quantidade}`);
    console.log(`de: ${de}`);
    console.log(`ate: ${ate}`);

    for (let i = 1; i <= quantidade; i++) {
    let numero = gerarNumeroAleatorio(de, ate);

    while (lista_nuSorteados.includes(numero)) {
        numero = gerarNumeroAleatorio(de, ate);
    }
    lista_nuSorteados.push(numero);
  }
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${lista_nuSorteados}</label>`;

  statusBotao();
}

// Função para chamar e gerar o numero
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para mudar o status do botão reiniciar
function statusBotao() {
    let botao = document.getElementById("btn-reiniciar");

    if (botao.classList.contains("container__botao-desabilitado")) {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    } else {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

// Função que da ação ao botão reiniciar
function reiniciar() {
    lista_nuSorteados = [];
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = "<label class=\"texto__paragrafo\">Números sorteados:  </label>";
    statusBotao();
}