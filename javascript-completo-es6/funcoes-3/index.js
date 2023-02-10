// Crie uma função para verificar se um valor é Truthy

function isTruthy(dado) {
    return !!dado
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado) {
    return lado * 4
}

console.log(perimetroQuadrado(5));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto (nome, sobrenome) {
    return `${nome} ${sobrenome}`
}

console.log(nomeCompleto('yasmin', 'Silva'));


// Crie uma função que verifica se um número é par

function isEven (numero) {
    const modulo = numero % 2

    if (modulo === 0) {
        return true

    }else {
        return false
    }
}

console.log(isEven(2));


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado (dado) {
    return typeof dado
}

console.log(tipoDeDado(true));



// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.


addEventListener('scroll', function() {
    console.log('yasmin conc');
})


// Corrija o erro abaixo

const totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

console.log(precisoVisitar(20))


function jaVisitei(paisesVisitados) {

  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(jaVisitei(20))
