

const h1Selecionado = document.querySelector('h1')

const h1Classes = h1Selecionado.classList

console.log(h1Classes);


//


const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

titulo.addEventListener('click', callback);
// ativa a função callback ao click no titulo


//

h1Selecionado.addEventListener('click', function() {
  console.log('clicou em ' , h1Selecionado.innerText);
})

// ou

function callBackh1 () {
  console.log('clicou em ' , h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', callBackh1)



// Retorne o url da página atual utilizando o objeto window

  const href = window.location.href

  console.log(href);


// Seleciona o primeiro elemento da página que
// possua a classe ativo

  const elementoAtivo = document.querySelector('.ativo')

  console.log(elementoAtivo);

// Retorne a linguagem do navegador

 const linguagem = window.navigator.language

 console.log(linguagem);


// Retorne a largura da janela 

 const windowWidth = window.innerWidth

 console.log(windowWidth);
