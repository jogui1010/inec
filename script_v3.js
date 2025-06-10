function calcularDivisaoV3() {
    const totalBaloes = parseFloat(document.getElementById("totalBaloes").value);
    const numAmigos = parseFloat(document.getElementById("numAmigos").value);
    const resultadoDivisao = document.getElementById("resultadoDivisaoV3");

    if (numAmigos === 0) {
        resultadoDivisao.textContent = "Não dá pra dividir com zero amigos, amiguinho!";
    } else if (totalBaloes < 0 || numAmigos < 0) {
        resultadoDivisao.textContent = "Use números positivos para os balões e amigos!";
    } else {
        resultadoDivisao.textContent = totalBaloes / numAmigos;
    }
}

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function calcularFracaoV3() {
    let partesPintadas = parseFloat(document.getElementById("partesPintadas").value);
    let totalPartes = parseFloat(document.getElementById("totalPartes").value);
    const fracaoSimplificada = document.getElementById("fracaoSimplificadaV3");
    const valorDecimal = document.getElementById("valorDecimalV3");

    if (totalPartes === 0) {
        fracaoSimplificada.textContent = "Não dá pra ter zero partes no total da folha!";
        valorDecimal.textContent = "Não dá pra ter zero partes no total da folha!";
        return;
    } else if (partesPintadas < 0 || totalPartes < 0) {
        fracaoSimplificada.textContent = "Use números positivos para as partes, por favor!";
        valorDecimal.textContent = "Use números positivos para as partes, por favor!";
        return;
    }

    const commonDivisor = gcd(Math.abs(partesPintadas), Math.abs(totalPartes));
    partesPintadas /= commonDivisor;
    totalPartes /= commonDivisor;

    fracaoSimplificada.textContent = `${partesPintadas}/${totalPartes}`;
    valorDecimal.textContent = (partesPintadas / totalPartes).toFixed(2); // Arredonda para 2 casas decimais
}

function calcularAreaRetanguloV3() {
    const comprimentoQuintal = parseFloat(document.getElementById("comprimentoQuintal").value);
    const larguraQuintal = parseFloat(document.getElementById("larguraQuintal").value);
    const resultadoArea = document.getElementById("resultadoAreaV3");

    if (comprimentoQuintal < 0 || larguraQuintal < 0) {
        resultadoArea.textContent = "O comprimento e a largura não podem ser negativos, amiguinho!";
    } else {
        resultadoArea.textContent = comprimentoQuintal * larguraQuintal;
    }
}


