

const menu = {
    with: 800,
    height: 50,
    backgroundColor: '#84e',

    metadeHeight() {
        return this.height / 2
    }
}

menu.backgroundColor = '#000'
menu.color = 'blue'

menu.esconder = function() {
    console.log('Escondi')
}

const bg = menu.backgroundColor




// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

const dados = {
    nome: 'yasmin',
    sobrenome: 'silva',

}

dados.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`
}

console.log(dados.nomeCompleto());


// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }

  carro.preco = 3000

  console.log(carro);
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem

  const cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,

    latir(pessoa) {
        if (pessoa === 'homem') {
            return 'latir'
        } else {
            return 'nada'
        }
    }
  }

  console.log(cachorro.latir('homem'));
  
  