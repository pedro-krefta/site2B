let res1 = document.getElementById('res1')
let res2 = document.getElementById('res2')
let res3 = document.getElementById('res3')




function calTensao(){
    
    let corrente2 = Number(document.getElementById('corrente2').value)
    let resistencia2 = Number(document.getElementById('resistencia2').value)
    
    let tensao = resistencia2 * corrente2
    
    res2.innerHTML = `o valor da tensão é: ${tensao}V`
}

function calCorrente(){
    let tensao3 = Number(document.getElementById('tensao3').value)
    let resistencia3 = Number(document.getElementById('resistencia3').value)

    let corrente = tensao3/resistencia3
    
    res3.innerHTML = `o valor da corrente é: ${corrente}A`
}

function calResis(){
    let corrente1 = Number(document.getElementById('corrente1').value)
    let tensao1 = Number(document.getElementById('tensao1').value)

    let resistencia = tensao1/corrente1

    res1.innerHTML = `o valor da resistencia é: ${resistencia}`
}