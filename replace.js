// // const texto = 'Eu amo andar de moto';

// // const parte = texto.replace('andar', 'falar');
// // console.log(parte);

// // Exercicio 01:
// const valor = '97.30';

// const ajuste = valor.replace('.', ',');

// console.log(`Valor sem alteração R$${valor}`);
// console.log(`Valor após a alteração R$${ajuste}`);


// Exercicio 02:

// let numero = '9,895,987,99';

// while (numero !== numero.replace(',', '.')) {
//     numero = numero.replace(',', '.');
// }
// console.log(numero);
    
// Exercicio 02:
const txt = '15,26,';

function replaceAll (textoBase, texto, novoTexto) {
    while (textoBase !== textoBase.replace(texto, novoTexto)) {
            textoBase = textoBase.replace(texto, novoTexto);
    }
    return textoBase;
}

console.log(replaceAll(txt, ',', '.'));