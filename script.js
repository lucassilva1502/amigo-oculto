// Lista inicial de nomes disponíveis
const nomes = ["LUCAS", "CAMILA", "JACKSON", "ITALO", "EDU", "FELIPE", "JOSE", "ALEX", "FERNANDA", "DIEGO", "GLAUBER"];
const sorteados = []; // Para controlar os nomes já sorteados

function sorteio() {
    const userName = document.getElementById("userName").value.trim().toUpperCase();
    const resultDiv = document.getElementById("result");

    // Verifica se o nome inserido é válido
    if (!nomes.includes(userName)) {
        resultDiv.textContent = "Nome inválido ou não está na lista!";
        resultDiv.style.color = "red";
        return;
    }

    // Verifica se todos os nomes já foram sorteados
    if (sorteados.length === nomes.length) {
        resultDiv.textContent = "Todos os nomes já foram sorteados!";
        resultDiv.style.color = "blue";
        return;
    }

    // Remove o nome da pessoa que está sorteando
    const nomesDisponiveis = nomes.filter(nome => nome !== userName && !sorteados.includes(nome));

    // Caso não haja mais opções disponíveis para o sorteio
    if (nomesDisponiveis.length === 0) {
        resultDiv.textContent = "Não há mais opções disponíveis para sorteio!";
        resultDiv.style.color = "red";
        return;
    }

    // Sorteia um nome aleatório
    const sorteado = nomesDisponiveis[Math.floor(Math.random() * nomesDisponiveis.length)];
    sorteados.push(sorteado);

    // Exibe o resultado
    resultDiv.textContent = `Você sorteou: ${sorteado}`;
    resultDiv.style.color = "green";
}
