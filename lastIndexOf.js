const usuario = {
    ativo: true,
    nome: 'Bob Burnquist',
    email: 'bruno.cesar902@gmail.com'
}

function verificaCaracter () {
    console.log(usuario.nome.lastIndexOf('u')); //retorna 9
    console.log(usuario.nome.lastIndexOf('B')); //retorna 4
    console.log(usuario.email.lastIndexOf('@')); //retorna 14
    console.log(usuario.email.lastIndexOf('')); //retorna 25
    console.log(usuario.nome.lastIndexOf('')); //retorna 13
}

if (usuario.ativo === false) {
    console.log('Usuário não pode ser verificado.')
} else {
    verificaCaracter(usuario);
}