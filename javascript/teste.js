const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const qt_modulos = document.getElementById('qt_modulos').value;
    const custo_modulo = document.getElementById('custo_modulo').value;
    const freq_anual = document.getElementById('freq_anual').value;
    const impostos = document.getElementById('impostos').value;
    const desp_extra = document.getElementById('desp_extra').value;
    const margem_lucro = document.getElementById('margem_lucro').value;
    const ganhoanual_limp = document.getElementById('ganhoanual_limp').value;

    // Certificando que os campos estao preenchidos corretamente
    if (qt_modulos && custo_modulo && freq_anual && impostos && desp_extra && margem_lucro && ganhoanual_limp) {
        const custoTotalLimpeza = (qt_modulos * custo_modulo * freq_anual).toFixed(2);
        const custoComImpostos = ((parseFloat(custoTotalLimpeza) + parseFloat(desp_extra)) * (1 + impostos / 100)).toFixed(2);
        const valorFinal = (custoComImpostos * (1 + margem_lucro / 100)).toFixed(2);
        const payback = ganhoanual_limp > 0 ? (valorFinal / ganhoanual_limp).toFixed(2) : null;

        document.getElementById('infos').classList.remove('hidden');

        // Resultados
        document.querySelector('.result1 #value').textContent = "R$ " + custoTotalLimpeza;
        document.querySelector('.result2 #value').textContent = "R$ " + custoComImpostos;
        document.querySelector('.result3 #value').textContent = "R$ " + valorFinal;
        document.querySelector('.result4 #value').textContent = payback ? payback + " anos" : "N/A";
    } else {
        alert("Preencha todos os campos corretamente!");
    }
});
