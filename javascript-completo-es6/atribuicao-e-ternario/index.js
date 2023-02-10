
let numero = 20

numero += 10 // numero = numero + 10

//

let numero2 = 10

numero += numero2 // numero = numero + numero2


//

const idade = 20

let podeBeber
const naoPossuiDiabetes = true

podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode beber' : 'Não pode beber'

console.log(podeBeber);


//

let possuiFaculdade = true;

if(possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');

// ou
if(possuiFaculdade)
  console.log('Possui faculdade');
else
  console.log('Não possui faculdade');


//


// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll

let scroll = 1000;

scroll += 500

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.

var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa)

console.log(darCredito);
