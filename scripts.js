const convertButton = document.getElementById("botao-converter");

const currencySelect = document.getElementById("segundoseletor");

const firstCurrencySelect=document.getElementById("primeiroseletor");

function convertvalues() {

    const inputConvertValue = document.getElementById("valor").value

    const primeiroValo = document.getElementById("primeirovalor")

    const segundoValo = document.getElementById("segundovalor")

    const dolarToday = 5.04
    const euroToday = 5.87
    const bitcoinToday = 383060.54
    const libraToday = 6.76

    if (currencySelect.value == "libra") {
        segundoValo.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputConvertValue / libraToday)
    }

    if (currencySelect.value == "dolar") {
        segundoValo.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputConvertValue / dolarToday)
    }
    if (currencySelect.value == "euro") {
        segundoValo.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputConvertValue / euroToday)
    }

    if (currencySelect.value == "bitcoin") {
        segundoValo.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputConvertValue / bitcoinToday)
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
        firstCurrencyChange.innerHTML = "GBN"
        firstCurrencyimage.src = "./img/UK.png"
    }
    
    if (currencySelect.value == "libra") {
        currencyChange.innerHTML = "GBN"
        currencyimage.src = "./img/UK.png"
    }
}

currencySelect.addEventListener("change", changeCurrency)

firstCurrencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertvalues)