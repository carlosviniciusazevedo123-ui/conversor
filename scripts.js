const convertButton = document.getElementById("botao-converter");

const currencySelect = document.getElementById("segundoseletor");

const firstCurrencySelect = document.getElementById("primeiroseletor");

function convertvalues() {

    const inputConvertValue = document.getElementById("valor").value

    const primeiroValo = document.getElementById("primeirovalor")

    const segundoValo = document.getElementById("segundovalor")

    const taxas = {
    real: {
        dolar: 5.04,
        euro: 5.87,
        bitcoin: 383060.54,
        libra: 6.76,
        real:1
    },
    dolar: {
        real: 1/5.04,
        euro: 1/0.87,
        bitcoin: 1/0.000166,
        libra: 1/0.134,
        dolar:1
    },
    euro: {
        real:1/5.87,
        dolar: 1/0.87,
        bitcoin: 1/0.000191,
        libra: 1/0.154,
        euro:1
    },
    libra: {
        real: 1/6.76,
        dolar: 1/0.134,
        euro: 1/0.154,
        bitcoin: 1/0.00121,
        libra:1

    },
    bitcoin: {
        real: 1/383060.54,
        dolar: 1/0.000166,
        euro: 1/0.000191,
        libra: 1/0.00121,
        bitcoin:1
    }
};

    const originCurrency = firstCurrencySelect.value
    const destinationcurrency = currencySelect.value
    const valorEmReal = inputConvertValue * taxas [originCurrency].real
    const valorConvertido = valorEmReal / taxas[destinationcurrency].real

    if (destinationcurrency.value === "libra") {
        segundoValo.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valorConvertido)
    }

    if (currencySelect.value === "dolar") {
        segundoValo.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorConvertido)
    }
    if (currencySelect.value === "euro") {
        segundoValo.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorConvertido)
    }

    if (currencySelect.value === "bitcoin") {
        segundoValo.innerHTML =
            (valorConvertido).toFixed(8) + " BTC"
    }
    primeiroValo.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputConvertValue)


}
function changeCurrency() {

    const firstCurrencyChange = document.getElementById("primeiramoeda")
    const firstCurrencyimage = document.getElementById("primeiraimg")
    const currencyChange = document.getElementById("segundamoeda")
    const currencyimage = document.getElementById("segundaimg")


    if (firstCurrencySelect.value == "dolar") {
        firstCurrencyChange.innerHTML = "Dólar Americano"
        firstCurrencyimage.src = "./img/dolar.png"
    }

    if (currencySelect.value == "dolar") {
        currencyChange.innerHTML = "Dólar Americano"
        currencyimage.src = "./img/dolar.png"
    }

    if (firstCurrencySelect.value == "euro") {
        firstCurrencyChange.innerHTML = "Euro"
        firstCurrencyimage.src = "./img/euro.png"
    }

    if (currencySelect.value == "euro") {
        currencyChange.innerHTML = "Euro"
        currencyimage.src = "./img/euro.png"
    }

    if (firstCurrencySelect.value == "bitcoin") {
        firstCurrencyChange.innerHTML = "BTC"
        firstCurrencyimage.src = "./img/bitcoin.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyChange.innerHTML = "BTC"
        currencyimage.src = "./img/bitcoin.png"
    }

    if (firstCurrencySelect.value == "real") {
        firstCurrencyChange.innerHTML = "BRL"
        firstCurrencyimage.src = "./img/brasil.png"
    }

    if (currencySelect.value == "real") {
        currencyChange.innerHTML = "BRL"
        currencyimage.src = "./img/brasil.png"
    }

    if (firstCurrencySelect.value == "libra") {
        firstCurrencyChange.innerHTML = "GBP"
        firstCurrencyimage.src = "./img/UK.png"
    }

    if (currencySelect.value == "libra") {
        currencyChange.innerHTML = "GBP"
        currencyimage.src = "./img/UK.png"
    }
}

currencySelect.addEventListener("change", changeCurrency)

firstCurrencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertvalues)