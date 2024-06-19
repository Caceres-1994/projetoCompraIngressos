function comprar() {
    //receber as variaveis tipoIngresso e quantidade
    var tipoIngresso = document.getElementById(`tipo-ingresso`).value;
    var quantidade = document.getElementById(`qtd`).value;

    //receber as variaveis totalPista, totalCadeiraSuperior, totalCadeiraIferior e referenciaTipo
    var totalPista = document.getElementById(`qtd-pista`);
    var totalCadeiraSuperior = document.getElementById(`qtd-superior`);
    var totalCadeiraInferior = document.getElementById(`qtd-inferior`);

    //inserir uma protecao para o programa nao realizar uma compra caso o campo quantidade esteja vazio.
    if(quantidade < 1 || quantidade != parseInt(quantidade)){
        alert(`Por favor, insira uma quantidade válida para compra.`);
        return;
    }

    //inserir uma protecao para que nao seja possivel comprar mais ingressos do que a quantidade total disponivel.
    if (tipoIngresso == `inferior` && quantidade > totalCadeiraInferior.textContent){
        alert(`Não há ingressos disponíveis suficientes para esta compra.`);
        return;
    } else if(tipoIngresso == `superior` && quantidade > totalCadeiraSuperior.textContent){
        alert(`Não há ingressos disponíveis suficientes para esta compra.`);
        return;
    } else if(tipoIngresso == `pista` && quantidade > totalPista.textContent){
        alert(`Não há ingressos disponíveis suficientes para esta compra.`);
        return;
    }

    //ao clicar em comprar, disparar a funcao: o tipoIngresso e a quantidade deve ser descontada da variavel correspondente total[tipIngresso].
    if (tipoIngresso == `inferior`){
        totalCadeiraInferior.textContent = totalCadeiraInferior.textContent - quantidade;
        totalCadeiraInferior.innerHTML = `<span id="qtd-pista">${totalCadeiraInferior.textContent}</span>`;
        alert(`Compra realizada com sucesso!`);

    } else if(tipoIngresso == `superior`){
        totalCadeiraSuperior.textContent = totalCadeiraSuperior.textContent - quantidade;
        totalCadeiraSuperior.innerHTML = `<span id="qtd-superior">${totalCadeiraSuperior.textContent}</span>`;
        alert(`Compra realizada com sucesso!`);
    } else{
        totalPista.textContent = totalPista.textContent - quantidade;
        totalPista.innerHTML = `<span id="qtd-inferior">${totalPista.textContent}</span>`;
        alert(`Compra realizada com sucesso!`);
    }

    if(Number(totalPista.textContent) + Number(totalCadeiraInferior.textContent) + Number(totalCadeiraSuperior.textContent) == 0){
        document.querySelector(`h2`).innerHTML = `<h2>Infelizmente, não há<br> mais ingressos disponíveis.</h2>`
    }

}

