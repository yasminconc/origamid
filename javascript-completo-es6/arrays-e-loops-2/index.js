
const videoGames = ['Switch', 'PS4', 'XBox', '3DS'];

for (let i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}


// const videoGames = ['Switch', 'PS4', 'XBox', '3DS'];

for (let i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);

  if(videoGames[i] === 'PS4') {
    break
  }
}

//

// const frutas = ['Banana', 'melancia', 'abacaxi', 'limão']

frutas.forEach(function(item, index) {
  console.log(item, index);
})


//


// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

const copa = [1959, 1962, 1970, 1994, 2002]


// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (let i = 0; i < copa.length; i++ ) {
  console.log(` O Brasil ganhou a copa de ${copa[i]} `);
}
// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
let frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);

  if(frutas[i] === 'Pera'){
    break
  }
}


// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

const ultimaFruta = frutas[frutas.length - 1]

console.log(ultimaFruta);
