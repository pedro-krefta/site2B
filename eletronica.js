    let res = document.getElementById('res')
    
     function calcularTensao(){
     tensao = corrente * resistencia
     
     res.innerHTML += `a tensão é ${tensao}`
     }

     function calcularResistencia(){
      resistencia = tensao / corrente

      res.innerHTML += `a resistencia é ${resistencia}`
     }

     function calcularCorrente(){
      corrente = tensao / resistencia 

      res.innerHTML += `a corrente é ${corrente}`
     }



    function principal(){
        let tensao = Number(document.getElementById('tensao').value)
        let corrente = Number(document.getElementById('corrente').value)
        let resistencia = Number(document.getElementById('resistencia').value)

        
    }
    
    

