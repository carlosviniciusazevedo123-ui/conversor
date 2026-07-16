const convertButton = document.getElementById("botao-converter");
const currencySelect = document.getElementById("segundoseletor");
const firstCurrencySelect = document.getElementById("primeiroseletor");

let exchangeRates = null;

async function getExchangeRates() {
    if (exchangeRates) {
        return exchangeRates;
    }

    try {
        const response = await fetch(
            "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"
        );
        const data = await response.json();

        exchangeRates = {
            USD: Number(data.USDBRL.high),
            EUR: Number(data.EURBRL.high),
            BTC: Number(data.BTCBRL.high)
        };

        return exchangeRates;
    } catch (error) {
        console.error("Erro ao buscar as cotações:", error);
        alert("Não foi possível carregar as cotações no momento.");
        return null;
    }
}

function formatCurrency(value, currency) {
    if (currency === "bitcoin") {
        return value.toFixed(8) + " BTC";
    }

    const locale = currency === "dolar" ? "en-US" : currency === "euro" ? "de-DE" : "pt-BR";
    const currencyCode = currency === "dolar" ? "USD" : currency === "euro" ? "EUR" : "BRL";

    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currencyCode
    }).format(value);
}

function convertValue(amount, fromCurrency, toCurrency, rates) {
    let amountInBrl = amount;

    if (fromCurrency === "dolar") {
        amountInBrl = amount * rates.USD;
    } else if (fromCurrency === "euro") {
        amountInBrl = amount * rates.EUR;
    } else if (fromCurrency === "bitcoin") {
        amountInBrl = amount * rates.BTC;
    }

    if (toCurrency === "dolar") {
        return amountInBrl / rates.USD;
    } else if (toCurrency === "euro") {
        return amountInBrl / rates.EUR;
    } else if (toCurrency === "bitcoin") {
        return amountInBrl / rates.BTC;
    }

    return amountInBrl;
}

async function convertvalues() {
    const inputConvertValue = parseFloat(document.getElementById("valor").value);
    const primeiroValo = document.getElementById("primeirovalor");
    const segundoValo = document.getElementById("segundovalor");

    if (isNaN(inputConvertValue) || inputConvertValue <= 0) {
        alert("Digite um valor válido");
        return;
    }

    const rates = await getExchangeRates();

    if (!rates) {
        return;
    }

    const valorConvertido = convertValue(
        inputConvertValue,
        firstCurrencySelect.value,
        currencySelect.value,
        rates
    );

    primeiroValo.textContent = formatCurrency(inputConvertValue, firstCurrencySelect.value);
    segundoValo.textContent = formatCurrency(valorConvertido, currencySelect.value);
}

function changeCurrency() {
    const firstCurrencyChange = document.getElementById("primeiramoeda");
    const firstCurrencyimage = document.getElementById("primeiraimg");
    const currencyChange = document.getElementById("segundamoeda");
    const currencyimage = document.getElementById("segundaimg");

    if (firstCurrencySelect.value === "dolar") {
        firstCurrencyChange.textContent = "Dólar Americano";
        firstCurrencyimage.src = "./img/dolar.png";
    } else if (firstCurrencySelect.value === "euro") {
        firstCurrencyChange.textContent = "Euro";
        firstCurrencyimage.src = "./img/euro.png";
    } else if (firstCurrencySelect.value === "bitcoin") {
        firstCurrencyChange.textContent = "Bitcoin";
        firstCurrencyimage.src = "./img/bitcoin.png";
    } else if (firstCurrencySelect.value === "real") {
        firstCurrencyChange.textContent = "Real";
        firstCurrencyimage.src = "./img/brasil.png";
    }

    if (currencySelect.value === "dolar") {
        currencyChange.textContent = "Dólar Americano";
        currencyimage.src = "./img/dolar.png";
    } else if (currencySelect.value === "euro") {
        currencyChange.textContent = "Euro";
        currencyimage.src = "./img/euro.png";
    } else if (currencySelect.value === "bitcoin") {
        currencyChange.textContent = "Bitcoin";
        currencyimage.src = "./img/bitcoin.png";
    } else if (currencySelect.value === "real") {
        currencyChange.textContent = "Real";
        currencyimage.src = "./img/brasil.png";
    }

    convertvalues();
}

currencySelect.addEventListener("change", changeCurrency);
firstCurrencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertvalues);