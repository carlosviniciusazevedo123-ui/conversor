const convertButton = document.getElementById("botao-converter");

const currencySelect = document.getElementById("segundoseletor");

const firstCurrencySelect = document.getElementById("primeiroseletor");

const taxas = {

    real: {
        real: 1
    },

    dolar: {
        real: 5.04
    },

    euro: {
        real: 5.87
    },

    libra: {
        real: 6.76
    },

    bitcoin: {
        real: 383060.54
    },

    peso: {
        real: 0.0057
    }

};

function convertvalues() {

    const inputConvertValue =
        parseFloat(document.getElementById("valor").value);

    const primeiroValo =
        document.getElementById("primeirovalor");

    const segundoValo =
        document.getElementById("segundovalor");

    if (isNaN(inputConvertValue) || inputConvertValue <= 0) {

        alert("Digite um valor válido");

        return;
    }

    const taxaOrigem =
        taxas[firstCurrencySelect.value];

    const taxaDestino =
        taxas[currencySelect.value];

    // converte para real
    const valorEmReal =
        inputConvertValue * taxaOrigem.real;

    // converte para moeda destino
    const valorConvertido =
        valorEmReal / taxaDestino.real;

    // FORMATAÇÃO DA MOEDA DESTINO

    if (currencySelect.value === "dolar") {

        segundoValo.innerHTML =
            new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(valorConvertido);

    }

    else if (currencySelect.value === "euro") {

        segundoValo.innerHTML =
            new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(valorConvertido);

    }

    else if (currencySelect.value === "libra") {

        segundoValo.innerHTML =
            new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(valorConvertido);

    }

    else if (currencySelect.value === "bitcoin") {

        segundoValo.innerHTML =
            valorConvertido.toFixed(8) + " BTC";

    }

    else if (currencySelect.value === "real") {

        segundoValo.innerHTML =
            new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(valorConvertido);

    }

    else if (currencySelect.value === "peso") {

        segundoValo.innerHTML =
            new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS"
            }).format(valorConvertido);

    }

    // FORMATAÇÃO DA MOEDA ORIGEM

    if (firstCurrencySelect.value === "dolar") {

        primeiroValo.innerHTML =
            new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputConvertValue);

    }

    else if (firstCurrencySelect.value === "euro") {

        primeiroValo.innerHTML =
            new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputConvertValue);

    }

    else if (firstCurrencySelect.value === "libra") {

        primeiroValo.innerHTML =
            new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputConvertValue);

    }

    else if (firstCurrencySelect.value === "bitcoin") {

        primeiroValo.innerHTML =
            inputConvertValue.toFixed(8) + " BTC";

    }

    else if (firstCurrencySelect.value === "real") {

        primeiroValo.innerHTML =
            new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputConvertValue);

    }

    else if (firstCurrencySelect.value === "peso") {

        primeiroValo.innerHTML =
            new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS"
            }).format(inputConvertValue);

    }

}

function changeCurrency() {

    const firstCurrencyChange =
        document.getElementById("primeiramoeda");

    const firstCurrencyimage =
        document.getElementById("primeiraimg");

    const currencyChange =
        document.getElementById("segundamoeda");

    const currencyimage =
        document.getElementById("segundaimg");

    // MOEDA ORIGEM

    if (firstCurrencySelect.value === "dolar") {

        firstCurrencyChange.innerHTML =
            "Dólar Americano";

        firstCurrencyimage.src =
            "./img/dolar.png";

    }

    else if (firstCurrencySelect.value === "euro") {

        firstCurrencyChange.innerHTML =
            "Euro";

        firstCurrencyimage.src =
            "./img/euro.png";

    }

    else if (firstCurrencySelect.value === "bitcoin") {

        firstCurrencyChange.innerHTML =
            "Bitcoin";

        firstCurrencyimage.src =
            "./img/bitcoin.png";

    }

    else if (firstCurrencySelect.value === "real") {

        firstCurrencyChange.innerHTML =
            "Real";

        firstCurrencyimage.src =
            "./img/brasil.png";

    }

    else if (firstCurrencySelect.value === "libra") {

        firstCurrencyChange.innerHTML =
            "Libra";

        firstCurrencyimage.src =
            "./img/UK.png";

    }

    else if (firstCurrencySelect.value === "peso") {

        firstCurrencyChange.innerHTML =
            "Peso Argentino";

        firstCurrencyimage.src =
            "./img/argentina.png";

    }

    // MOEDA DESTINO

    if (currencySelect.value === "dolar") {

        currencyChange.innerHTML =
            "Dólar Americano";

        currencyimage.src =
            "./img/dolar.png";

    }

    else if (currencySelect.value === "euro") {

        currencyChange.innerHTML =
            "Euro";

        currencyimage.src =
            "./img/euro.png";

    }

    else if (currencySelect.value === "bitcoin") {

        currencyChange.innerHTML =
            "Bitcoin";

        currencyimage.src =
            "./img/bitcoin.png";

    }

    else if (currencySelect.value === "real") {

        currencyChange.innerHTML =
            "Real";

        currencyimage.src =
            "./img/brasil.png";

    }

    else if (currencySelect.value === "libra") {

        currencyChange.innerHTML =
            "Libra";

        currencyimage.src =
            "./img/UK.png";

    }

    else if (currencySelect.value === "peso") {

        currencyChange.innerHTML =
            "Peso Argentino";

        currencyimage.src =
            "./img/argentina.png";

    }

    convertvalues();

}

currencySelect.addEventListener(
    "change",
    changeCurrency
);

firstCurrencySelect.addEventListener(
    "change",
    changeCurrency
);

convertButton.addEventListener(
    "click",
    convertvalues
);