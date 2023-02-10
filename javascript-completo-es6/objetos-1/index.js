
const pessoa = {
    nome: 'yasmin',
    idade: 20,

}

console.log(pessoa.idade)

const quadrado = {
    lados: 4,

    area: function(lado) {
        return lado * lado
    },

    perimetro: function(lado) {
        return this.lados * lado
    }

}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

//

Math.PI; // 3.14
Math.random(); // número aleatório

const pi = Math.PI;
console.log(pi); // 3.14
