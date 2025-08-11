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

const dadoAtributo = dado.rolagemDadoAtributo;

const dadoPista = dado.rolagemDadoPista;

const listaPistas = Object.entries(pistas);

console.log(`🏁 Corrida entre ${jogador1.nome} e ${jogador2.nome} começando.`)

for(let rodada = 0; rodada <= 5; rodada++){
    const pista = listaPistas[dadoPista()];

    const pistaNome = pista[0];

    const pistaAtributo = pista[1].atributo;

    const valorRolagemAtributoJogador1 = dadoAtributo();

    const valorRolagemAtributoJogador2 = dadoAtributo();

    const valorTotalAtributoJogador1 = jogador1[pistaAtributo] + valorRolagemAtributoJogador1;

    const valorTotalAtributoJogador2 = jogador2[pistaAtributo] + valorRolagemAtributoJogador2;

    const resultadoConfronto = valorTotalAtributoJogador1 - valorTotalAtributoJogador2;

    switch(pistaNome){
        case "curva":
        case "pista":
            if(resultadoConfronto > 0){
                jogador1.ganhaPonto();
            } else if(resultadoConfronto < 0){
                jogador2.ganhaPonto();
            }
            break;
        case "confronto":
            if(resultadoConfronto > 0){
                jogador2.perdePonto();
            } else if(resultadoConfronto < 0){
                jogador1.perdePonto();
            }
            break;
    };

    console.log("===========================================");
    console.log(`🏁 Rodada ${rodada}:`);
    console.log(`Pista sortiada: ${pistaNome}`);
    console.log(`Atributo que será comparado: ${pistaAtributo}`);
    console.log(`Personagem do jogador 1: ${jogador1.nome}`);
    console.log(`Valor do ${pistaAtributo} do ${jogador1.nome}: ${jogador1[pistaAtributo]}`);
    console.log(`🎲 Rolagem do ${jogador1.nome} foi ${valorRolagemAtributoJogador1} logo seu resultado final foi de ${valorTotalAtributoJogador1}`);
    console.log(`Personagem do jogador 2: ${jogador2.nome}`);
    console.log(`Valor do ${pistaAtributo} do ${jogador2.nome}: ${jogador2[pistaAtributo]}`);
    console.log(`🎲 Rolagem do ${jogador2.nome} foi ${valorRolagemAtributoJogador2} logo seu resultado final foi de ${valorTotalAtributoJogador2}`);
    console.log("===========================================");
}

console.log(`O ${jogador1.pontos > jogador2.pontos ? jogador1.nome : jogador2.nome} venceu 🏆!`);