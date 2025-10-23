let res = document.getElementById('res')
let select = document.getElementById('option')
let inputs = document.getElementById('inputs')

function mudarInput() {

    let tipo = select.value

    switch (tipo) {
        case "tensao":
            inputs.innerHTML = `
                <label for="resistencia" class="text-3xl">digite a resistencia</label><br>
                <input type="number" id="resistencia" class="mt-8 bg-white rounded-2xl text-black"><br>
    <label for="corrente" class="text-3xl">digite a corrente</label><br>
    <input type="number" id="corrente" class="mt-8 bg-white rounded-2xl text-black"><br>
    <button onclick="principal()" class="border-2 bg-white rounded-lg">Calcular</button>
                `
            break;
        case "corrente":
            inputs.innerHTML = `
              <label for="tensao" class="text-3xl">digite a tensão</label><br>
    <input type="number" id="tensao" class="mt-8 bg-white rounded-2xl text-black"><br>
    <label for="resistencia" class="text-3xl">digite a resistencia</label><br>
    <input type="number" id="resistencia" class="mt-8 bg-white rounded-2xl text-black"><br>
    <button onclick="principal()" class="border-2 bg-white rounded-lg">Calcular</button>
              `
            break;
        case "resist":
            inputs.innerHTML = `
                <label for="tensao" class="text-3xl">digite a tensão</label><br>
    <input type="number" id="tensao" class="mt-8 bg-white rounded-2xl text-black"><br>
                <label for="corrente" class="text-3xl">digite a corrente</label><br>
    <input type="number" id="corrente" class="mt-8 bg-white rounded-2xl text-black"><br>
    <button onclick="principal()" class="border-2 bg-white rounded-lg">Calcular</button>
                `
            break;

        default:
            inputs.innerHTML = `
            `
            break;
    }
}




function calcularTensao(corrente, resistencia) {
    tensao = corrente * resistencia

    res.innerHTML = `a tensão é ${tensao}`
    console.log("oi")
}

function calcularResistencia(tensao,corrente) {
    resistencia = tensao / corrente

    res.innerHTML = `a resistencia é ${resistencia}`
}

function calcularCorrente(tensao,resistencia) {
    corrente = tensao / resistencia


    res.innerHTML = `a corrente é ${corrente}`
    
}



function principal() {
  let tipo = select.value 

  let tensao = 0
  let corrente = 0
  let resistencia = 0

  // só pega o valor se o input existir
  let tensaoInput = document.getElementById('tensao')
  if (tensaoInput !== null) {
    tensao = Number(tensaoInput.value)
  }

  let correnteInput = document.getElementById('corrente')
  if (correnteInput !== null) {
    corrente = Number(correnteInput.value)
  }

  let resistenciaInput = document.getElementById('resistencia')
  if (resistenciaInput !== null) {
    resistencia = Number(resistenciaInput.value)
  }

  res.innerHTML = ''

  // escolhe qual cálculo fazer
  if (tipo === 'tensao') {
    calcularTensao(corrente, resistencia)
  } else if (tipo === 'corrente') {
    calcularCorrente(tensao, resistencia)
  } else if (tipo === 'resist') {
    calcularResistencia(tensao, corrente)
  }
}



mudarInput();
select.addEventListener('change', () =>{
    mudarInput();
})
