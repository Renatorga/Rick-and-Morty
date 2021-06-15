
gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}
pegarPersonagemUm = () => {

    let numeroAleatorio = gerarValorAleatorio();
    fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`)
    .then((resp) => resp.json())
    .then(function(data){
        document.getElementById('imagemUm').innerHTML = '<img src = "' + data.image +'">' +
        '<p id= paragrafo1>' + data.name +'</p>';

    });
}

pegarPersonagemDois = () => {

    let numeroAleatorio = gerarValorAleatorio();
    fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`)
    .then((resp) => resp.json())
    .then(function(data){
        document.getElementById('imagemDois').innerHTML = '<img src = "' + data.image +'">' +
        '<p id= paragrafo1>' + data.name +'</p>';

    });
}

pegarPersonagemTres = () => {

    let numeroAleatorio = gerarValorAleatorio();
    fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`)
    .then((resp) => resp.json())
    .then(function(data){
        document.getElementById('imagemTres').innerHTML = '<img src = "' + data.image +'">' +
        '<p id= paragrafo1>' + data.name +'</p>';

    });
}

pegarPersonagemQuatro = () => {

    let numeroAleatorio = gerarValorAleatorio();
    fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`)
    .then((resp) => resp.json())
    .then(function(data){
        document.getElementById('imagemQuatro').innerHTML = '<img src = "' + data.image +'">' +
        '<p id= paragrafo1>' + data.name +'</p>';

    });
}
    pegarPersonagemUm();
    pegarPersonagemDois();
    pegarPersonagemTres();
    pegarPersonagemQuatro();

