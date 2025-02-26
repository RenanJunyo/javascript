function contar() {
    var inicio = document.getElementById('Inicio');
    var fim = document.getElementById('Fim');
    var passo = document.getElementById('Passo');
    var msg = document.getElementById('mostrar');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        msg.innerHTML = '[ERRO]. Os dados não foram inseridos corretamente';
    } else {
        msg.innerHTML = 'Preparando a contagem... <br>';
        var i = Number(inicio.value);
        var f = Number(fim.value);
        var p = Number(passo.value);

        if (p <= 0) {
            window.alert ('Passo inválido! Considerando passo 1.');
            p = 1;
        }

        if (i < f) {
            // Contagem crescente
            for (var c = i; c <= f; c += p) {
                msg.innerHTML += `${c} `;
            }
        } else {
            // Contagem regressiva
            for (var c = i; c >= f; c -= p) {
                msg.innerHTML += `${c} `;
            }
        }
    }
}