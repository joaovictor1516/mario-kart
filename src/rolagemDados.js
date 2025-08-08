exports.rolagemDadoAtributo = () => {
    const rolagem = 1 + Math.floor(Math.random() * 10);

    if(rolagem <= 6){
        return rolagem;
    } else{
        return rolagem - 6;
    }
}

exports.rolagemDadoPista = () => {
    const rolagem = 1 + Math.floor(Math.random() * 10);

    if(rolagem <= 3){
        return rolagem;
    } else{
        return Math.floor(rolagem / 3);
    }
}