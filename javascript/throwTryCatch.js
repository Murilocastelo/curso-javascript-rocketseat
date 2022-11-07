function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório'
    }

    console.log(name)
}

/*
Nesse caso, se o nome vier vazio, será disparada uma mensagem.
Precisamos agora usar o try/catch para capturarmos esse erro, caso contrário,
ele irá encerrar nossa aplicação, e nós o faremos da seguinte maneira:
*/

try {
    sayMyName()
} catch(e) {
    console.log(e)
}

console.log('após ao try/catch')