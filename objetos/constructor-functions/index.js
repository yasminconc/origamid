
function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida
  this.preco = precoAtribuido
}

const honda = new Carro('honda', 3000)

const fiat = new Carro('fiat', 4000)


function Carro2(marca, precoInicial) {
  this.taxa = 1.2
  const precoFinal = precoInicial * this.taxa

  this.marca = marca
  this.preco = precoFinal
}

const mazda = new Carro2('mazda', 5000)