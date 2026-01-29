let lista_nuSorteados = [];
let i;

// função para informações, testes, e exibir os numeros sorteados
function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    console.log(`Quantidade: ${quantidade}`);
    console.log(`de: ${de}`);
    console.log(`ate: ${ate}`);

    for (i = 1; i <= quantidade; i++) {
    let numero = gerarNumeroAleatorio(de, ate);

    while (lista_nuSorteados.includes(numero)) {
        numero = gerarNumeroAleatorio(de, ate);
    }
    lista_nuSorteados.push(numero);
  }
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${lista_nuSorteados}</label>`;
}

// Função para chamar e gerar o numero
function gerarNumeroAleatorio(min, max) {
    return parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
}

// Função para mudar o status do botão reiniciar
function statusBotao() {
    let botao = document.getElementById("btn-reiniciar");
    
    if (botao.classList.contains("container_botao--desativado")) {
        botao.classList.remove("container_botao--desativado");
        botao.classList.add("container_botao--ativado");
    } else {
        botao.classList.remove("container_botao--ativado");
        botao.classList.add("container_botao--desativado");
    }
}

// Função que da ação ao botão reiniciar
function reiniciar() {
    lista_nuSorteados = [];
    document.getElementById("resultado").innerHTML = "<label class=\"texto__paragrafo\">Números sorteados:  </label>";
}