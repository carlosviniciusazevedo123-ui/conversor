const convertButton = document.getElementById("botao-converter");

const currencySelect = document.getElementById("segundoseletor");

const firstCurrencySelect = document.getElementById("primeiroseletor");

function convertvalues() {

    const inputConvertValue = Number(document.getElementById("valor").value)

    const primeiroValo = document.getElementById("primeirovalor")

    const segundoValo = document.getElementById("segundovalor")

    const moedas = {
        real: "BRL",
        dolar: "USD",
        euro: "EUR",
        libra: "GBP",
        bitcoin: "BTC",
        peso: "ARS"
    };

    const originCurrency = moedas[firstCurrencySelect.value]
    const destCurrency = moedas[currencySelect.value]

     const url = `https://api.exchangerate.host/convert?from=${originCurrency}&access_key=341ca2a46f-64c5cd7e5c-tfpy5k&to=${destCurrency}&amount=${inputConvertValue}`;
    
    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            if (!data.success) {
                throw new Error("Falha ao obter taxa");
            }
            

            const valorConvertido = data.result;

            primeiroValo.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputConvertValue);

            if (destCurrency === "GBP") {
                segundoValo.innerHTML = new Intl.NumberFormat("en-GB", {
                    style: "currency",
                    currency: "GBP"
                }).format(valorConvertido);
            } else if (destCurrency === "USD") {
                segundoValo.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                }).format(valorConvertido);
            } else if (destCurrency === "EUR") {
                segundoValo.innerHTML = new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "EUR"
                }).format(valorConvertido);
            } else if (destCurrency === "BTC") {
                segundoValo.innerHTML = valorConvertido.toFixed(8) + " BTC";
            } else {
                segundoValo.innerHTML = valorConvertido.toFixed(2);
            }
        })
        .catch(error => {
            console.error(error);
            segundoValo.innerHTML = "Erro ao converter";
        });
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

    if (firstCurrencySelect.value == "peso"){
        firstCurrencyChange.innerHTML = "ARS"
        firstCurrencyimage.src="./img/argentina.PNG"
    }

    if (currencySelect.value == "peso") {
        currencyChange.innerHTML = "ARS"
        currencyimage.src = "./img/argentina.png"
    }
}

currencySelect.addEventListener("change", changeCurrency)

firstCurrencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertvalues)