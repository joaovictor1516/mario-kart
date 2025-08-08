exports.jogador = class Jogador {
	nome;
    poder;
    velocidade;
    manobrabilidade;
    
    constructor(nome, poder, velocidade, manobrabilidade){
        this.pontos = 0;
        this.nome = nome;
        this.poder = poder;
        this.velocidade = velocidade;
        this.manobrabilidade = manobrabilidade;
    }

    checaPotosMinimos(){
        if(this.pontos < 0){
            this.pontos = 0;
        }
    };
}