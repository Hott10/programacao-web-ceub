
let valoresConversao = {
    real: {
        dolar: 0.27,
        euro: 0.18
    },
    dolar: {
        real: 5.03,
        euro: 1.09
    },
    euro: {
        real: 5.47,
        dolar: 0.92
    }
}



function converter () {
    let valorUsuario = document.getElementById("valor-usuario").value;

    let moedaOrigem = document.getElementById("moeda1").value;
    let moedaDestino = document.getElementById("moeda2").value;

    let conversao = valorUsuario * valoresConversao [moedaOrigem][moedaDestino];

    let paragrafoResultado = document.getElementById("resultado")
    paragrafoResultado.textContent = conversao;

}

    function inverter() {
        let moeda1 = document.getElementById("moeda1").value;
        let moeda2 = document.getElementById("moeda2").value;

        document.getElementById("moeda1").value = moeda2;
        document.getElementById("moeda2").value = moeda1;


    }
