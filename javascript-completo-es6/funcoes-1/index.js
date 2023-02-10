function pi () {
    return 3.14
}

const total = 5 * pi()

console.log(pi());


//

function imc (peso, altura) {
    const imc = peso / (altura * altura)

    return imc
}

console.log(imc(50, 1.64));

//


function corFavorita (cor) {
    if (cor === 'azul') {
        return 'Eu gosto do céu'

    } else if ( cor === 'verde'){
        return 'Eu gosto de mato'

    }else {
        return 'Eu não gosto de cores'
    }
}

console.log(corFavorita('azul'))


//

addEventListener('click', function() {
    console.log('oi');
})