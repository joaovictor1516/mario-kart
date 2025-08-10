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
        const checaPontos = this.pontos - 1 
        if(checaPontos < 0){
            return false;
        } else{
            return true;
        }
    };

    perdePonto(){
        if(this.checaPotosMinimos()){
            this.pontos -= 1;
        }
    };

    ganhaPonto(){
        this.pontos += 1;
    };

    checaPontos(){
        console.log(this.pontos);
    };
}