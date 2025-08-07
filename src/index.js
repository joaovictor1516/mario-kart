const personagens = require("./personagens.json");
const readline = require("readline-sync");
const dado = require("./rolagemDados");

const personagemJogador1 = {...personagens[readline.question("Jogador1, digite o nome do personagem: ")]};

const personagemJogador2 = {...personagens[readline.question("Jogador2, digite o nome do personagem: ")]};

const rolagemDado = dado.rolagemDado();

const jogador1 = {
    personagemNome: personagemJogador1.nome,
    personagemPoder: personagemJogador1.poder,
    pontos: 0,
    pista: ""
};

const jogador2 = {
    personagemNome: personagemJogador2.nome,
    personagemPoder: personagemJogador2.poder,
    pontos: 0,
    pista: ""
};