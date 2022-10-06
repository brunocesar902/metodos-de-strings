const email = 'bruno.cesar902@gmail.com';

const indexArroba = email.indexOf('@');
console.log(indexArroba);

const indexPonto = email.indexOf('.');
console.log(indexPonto);

if (indexPonto > indexArroba) {
    console.log('Email é válido.')
} else {
    console.log('Email inválido.')
}