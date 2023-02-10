
const nome = 'Yasmin'

const nomeMinusculo = nome.toLocaleLowerCase()

//

const altura = 1.8

altura.toString(); // '1.8'
altura.toFixed(); // '2'

//

function areaQuadrado(lado) {
    return lado * lado;
  }
  
  areaQuadrado.toString();
  //"function areaQuadrado(lado) {
  //  return lado * lado;
  //}"
  
  areaQuadrado.length; // 1
  
//


const btn = document.querySelector('.btn')

btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // 'Clique'

btn.addEventListener('click', function() {
  console.log('Clicou')
})

//



// nomeie 3 propriedades ou métodos de strings

const name = 'yasmin'
fixed
length
slice

// nomeie 5 propriedades ou métodos de elementos do DOM

const btn = document.querySelector('.btn')
addEventListener
appendChild
id
innerHtml
outerHtml

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
