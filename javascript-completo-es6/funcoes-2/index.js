//Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não.

function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
  }
  
  imc(80, 1.80); // retorna o imc
  console.log(imc(80, 1.80)); // retorna o imc e undefined

  
function terceiraIdade (idade) {
    if (idade >= 60) {
        return true
    } else {
        return false
    }
}  

console.log(terceiraIdade(60));


//

const totalPaises = 193

function faltaVisitar (paisesVisitados) {
    
    return `Falta visitar ${totalPaises - paisesVisitados} países`
}