const nome = 'bruno cesar barbosa lemos';
const arrayDoNome = nome.split(' ');

let nomeFormatado = '';
for(let i of arrayDoNome) {
    let primeiraLetra = i.slice(0,1)
    let restoDoNome = i.slice(1);
    
    nomeFormatado += primeiraLetra.toUpperCase() + restoDoNome + ' ';
}
console.log(nomeFormatado.trim());