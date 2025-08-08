const personagens = require("./personagens.json");
const readline = require("readline-sync");
const pistas = require("./pistas.json");
const dado = require("./rolagemDados");
const Jogador = require("./jogador");

const personagemJogador1 = {...personagens[readline.question("Jogador1, digite o nome do personagem: ")]};

const personagemJogador2 = {...personagens[readline.question("Jogador2, digite o nome do personagem: ")]};

if(personagemJogador1.nome === personagemJogador2.nome){
    personagemJogador2.nome += " do universo paralelo.";
}

const jogador1 = new Jogador.jogador(personagemJogador1.nome, personagemJogador1.poder, personagemJogador1.velocidade, personagemJogador1.manobrabilidade);

const jogador2 = new Jogador.jogador(personagemJogador2.nome, personagemJogador2.poder, personagemJogador2.velocidade, personagemJogador2.manobrabilidade);

const dadoAtributo = dado.rolagemDadoAtributo();

const dadoPista = dado.rolagemDadoPista();

console.log(Object.entries(pistas)[dadoPista - 1][1].atributo, dadoPista);