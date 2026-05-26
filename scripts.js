const convertButton = document.getElementById("botao-converter");

const currencySelect = document.getElementById("segundoseletor");

function convertvalues() {

    const inputConvertValue = document.getElementById("valor").value

    const primeiroValo = document.getElementById("primeirovalor")

    const segundoValo = document.getElementById("segundovalor")

    const dolarToday = 5.04
    const euroToday = 5.87
    const bitcoinToday = 383060.54

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
    const currencyChange = document.getElementById("segundamoeda")
    const currencyimage = document.getElementById("segundaimg")

    
    if (currencySelect.value == "dolar") {
        currencyChange.innerHTML = "Dólar Americano"
        currencyimage.src = "./img/dolar.png"
    }
    if (currencySelect.value == "euro") {
        currencyChange.innerHTML = "Euro"
        currencyimage.src = "./img/euro.png"
    }
    if (currencySelect.value == "bitcoin") {
        currencyChange.innerHTML = "BTC"
        currencyimage.src = "./img/bitcoin.png"
    }
}

currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertvalues)