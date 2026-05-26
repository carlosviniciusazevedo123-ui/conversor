const convertButton = document.getElementById("botao-converter");
const currencySelect = document.getElementById("segundoseletor");

function convertvalues() {

    const inputConvertValue = document.getElementById("valor").value

    const primeiroValo = document.getElementById("primeirovalor")

    const segundoValo = document.getElementById("segundovalor")

    const dolarToday = 5.04
    const euroToday = 5.87

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

    primeiroValo.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputConvertValue)






}

convertButton.addEventListener("click", convertvalues)