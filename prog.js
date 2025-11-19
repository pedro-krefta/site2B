
let res = document.getElementById('res')
function ordenarD(){
   let numerosDecrescente = []

for (let i = 20; i >= 1; i--) {
  numerosDecrescente.push(i)
}

res.innerHTML = `decrescente:${numerosDecrescente}`
}


//----------------------------------------------------------------------------------
function ordenarC(){
  let numerocrescente = []
  
  for (let i = 1; i <= 20; i++) {
    numerocrescente.push(i)
  }
  
  res.innerHTML = `crescente:${numerocrescente}`
}


function gerarAleatorio(min,max){
  return  Math.floor(Math.random() * (max - min) + min)
}

function gerarArr(min,max,qtde){
  for(let i = 0; i < qtde; i++){
    arr.push(gerarAleatorio(min,max))
  }
  
}

let res2 = document.getElementById('res2')
let arr = []

function gerarAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function gerarArr(min, max, qtde) {
  arr = []
  
  for (let i = 0; i < qtde; i++) {
    arr.push(gerarAleatorio(min, max))
  }
}

function principal() {
  
  res2.innerHTML = ""
  
  let min = 1;
  let max = 20;
  let qtde = 10;
  
  gerarArr(min, max, qtde)
  
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  
  
  res2.innerHTML = `array ordenado: ${arr.join(", ")}`
}
//-------------------------------------------------------------------

let res3 = document.getElementById('res3')
function gerarEsomar() {
  let numArr = []
  let soma = 0
  
  let min2 = 1
  let max2 = 220
  
  for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * (max2 - min2 + 1)) + min2
    numArr.push(num)
    soma += num
  }
  
  
  res3.innerHTML = `array: ${numArr} <br> soma: ${soma}`
}

//----------------------------------------------------------------------------

let mat = []


let res4 = document.getElementById('res4')
function gerarAleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function principal(){
    let n = 3
    let min = 1 , max = 50

    for(let i = 0; i < n; i++){
        mat[i] = []
    for(let j = 0; j < n; j++){
        mat[i][j] = gerarAleatorio(min,max)
      
   }
  }

  res4.innerHTML = mat.map(linha => linha.join(" | ")).join("<br>")
 }

 //----------------------------------------------------------------------------------

 let res5 = document.getElementById('res5')
 function calcularIMC() {
  let peso = Number(document.getElementById('peso').value)
  let altura = Number(document.getElementById('altura').value)

  let imc = peso / (altura * altura)

  res5.innerHTML = `Seu IMC é: ${imc}`
}
//------------------------------------------------------------------------------------

let res6 = document.getElementById('res6')

function converter() {
  let temp = Number(document.getElementById('temp').value)
  let tipo = document.getElementById('tipo').value

  let resultado = 0

  switch (tipo) {
    case "fc": 
      resultado = (temp - 32) * 5 / 9
      res6.innerHTML = `${temp}°F = ${resultado.toFixed(2)}°C`
      break
    case "FC": 
      resultado = (temp - 32) * 5 / 9
      res6.innerHTML = `${temp}°F = ${resultado.toFixed(2)}°C`
      break

    case "cf": 
      resultado = (temp * 9 / 5) + 32
      res6.innerHTML = `${temp}°C = ${resultado.toFixed(2)}°F`
      break
    case "CF": 
      resultado = (temp * 9 / 5) + 32
      res6.innerHTML = `${temp}°C = ${resultado.toFixed(2)}°F`
      break

    default:
      res6.innerHTML = "Selecione uma opção válida."
  }
}
//------------------------------------------------------------------
let arr2 = []
let res7 = document.getElementById('res7')


function gerarAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function buscar() {

  let valor = Number(document.getElementById('valor').value)
  let min = 1, max = 20
  arr2 = [] 

 
  for (let i = 0; i < 20; i++) {
    arr2.push(gerarAleatorio(min, max))
  }

 
  let posicao = 0
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === valor) {
      posicao = i
      break
    }
  }

  res7.innerHTML = `  Array gerado: ${arr2}<br> Número escolhido: ${valor}<br> Posição encontrada: ${posicao}`
}