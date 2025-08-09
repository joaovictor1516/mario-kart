exports.rolagemDadoAtributo = () => {
    const rolagem = 1 + Math.floor(Math.random() * 10);

    if(rolagem <= 6){
        return rolagem;
    } else{
        return rolagem - 6;
    }
}

exports.rolagemDadoPista = () => {
    const rolagem = Math.floor(Math.random() * 10);

    if(rolagem <= 2){
        return rolagem;
    } else{
        const novaRolagem = Math.floor(rolagem / 2);
        if(novaRolagem > 2){
            return Math.floor(novaRolagem/2);
        } else{
            return novaRolagem;
        }
    }
}