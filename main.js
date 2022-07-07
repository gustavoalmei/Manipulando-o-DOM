let controles = document.querySelectorAll("[data-controle]");
let estatisticas = document.querySelectorAll("[data-estatistica]");
const pecas = {
  "bracos": {
      "forca": 29,
      "poder": 35,
      "energia": -21,
      "velocidade": -5
  },

  "blindagem": {
      "forca": 41,
      "poder": 20,
      "energia": 0,
      "velocidade": -20
  },
  "nucleos":{
      "forca": 0,
      "poder": 7,
      "energia": 48,
      "velocidade": -24
  },
  "pernas":{
      "forca": 27,
      "poder": 21,
      "energia": -32,
      "velocidade": 42
  },
  "foguetes":{
      "forca": 0,
      "poder": 28,
      "energia": 0,
      "velocidade": -2
  }
}

  controles.forEach(controle => {
    controle.addEventListener('click', (evento)=>{
      calculo(evento.target.dataset.controle, evento.target.parentNode)
      atualizaInfo(evento.target.dataset.controle, evento.target.dataset.peca)
    })
  })

function calculo(operacao, controle){
  let valor = controle.querySelector("[data-contador]")
  if(operacao === '+'){
    valor.value = parseInt(valor.value) + 1;
  }else{
    valor.value = parseInt(valor.value) - 1;
  }
}

function atualizaInfo(operacao, peca){
  estatisticas.forEach(estat =>{
    if(operacao === "+"){
      estat.textContent = parseInt(estat.textContent) + pecas[peca][estat.dataset.estatistica]
    }else{      
      estat.textContent = parseInt(estat.textContent) - pecas[peca][estat.dataset.estatistica]
    }
  })
}