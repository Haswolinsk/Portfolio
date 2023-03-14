function converterReal() {
    var real = document.getElementById("real").value

    var dolar
    dolar = real / 5.09
    var euro
    euro = real / 5.52

    document.getElementById('dolar').innerHTML = dolar.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
    document.getElementById('Euro').innerHTML = euro.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'})
}
