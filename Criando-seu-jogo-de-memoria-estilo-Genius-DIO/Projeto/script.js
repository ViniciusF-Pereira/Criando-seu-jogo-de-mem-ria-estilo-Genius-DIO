let Ordem = []; //ordem do jogo
let Clique_Ordem = []; // ordem dos clicks no jogo
let Pontuacao = 0; // score do jogo, começa com 0 e mostra depois
//              PONTUAÇÃO
//0 = verde, 1 = vermelho , 2 = amarelo , 3 = azul

const verde = document.querySelector('.green');

const vermelho = document.querySelector('.red');

const amarela = document.querySelector('.yellow');

const azul = document.querySelector('.blue');

// cria ordem aleatoria
let sorteiaOrdem = () => { // sorteia ordem das cores
    let Cor_Ordem = Math.floor(Math.random() * 4); // faz a ordem ser sortiada a partir de 1 numero * 4 ( cores) 
    Ordem[Ordem.length] = Cor_Ordem;
    Clique_Ordem = [];

    for (let i in Ordem) {
        let Elemento_Cor = Criar_Elemento_Cor(Ordem[i]); // cada vez que ele rodar, o indice vai rodar na variavel
        Cor_Clara(Elemento_Cor, Number(i) + 1); // (Number(i) + 1)  -> FAZ EXISTIR A LISTA DE CORES

    }
}

//acende a proxima cor
let Cor_Clara = (element, Number) => {
    Number = Number * 500;
    setTimeout(() => {

            element.classList.add('selected');
            if (element.classList.item = 'selected') {
                setTimeout(() => {
                    element.classList.remove('selected');
                }, Number - 80)
                setTimeout(() => {
                    element.classList.add('selected');
                }, Number - 250)


            }


        }, Number - 350) //executa um codigo dentro deste tempo, adicionando a classe 'selected'

    setTimeout(() => {
            element.classList.remove('selected');

        }, ) //executa um codigo dentro deste tempo para remover a classe que muda a cor
}

// checa os botões clicados, se são os mesmos da ordem gerada no jogo.
let Checar_Ordem = () => {

    for (let i in Clique_Ordem) {
        if (Clique_Ordem[i] != Ordem[i]) { // se for diferente o jogador perde
            PERDEU();
            break; // interrompe o jogo
        }
    }
    if (Clique_Ordem.length == Ordem.length) { // compara o valor da length se é igual, e da a pontuação
        alert(`Pontuação: ${Pontuacao}\nVoce Acertou a ordem!\nIniciando próximo nivel!`);
        Proximo_Nivel(); // da inicio o proximo nivel.

    }
}

//função para o clique do jogador.

let Click = (COR) => {

    Clique_Ordem[Clique_Ordem.length] = COR;
    Criar_Elemento_Cor(COR).classList.add('selected');


    setTimeout(() => {
        Criar_Elemento_Cor(COR).classList.remove('selected');
        Checar_Ordem();
    }, 250)

}


//função que retorna a cor

let Criar_Elemento_Cor = (COR) => {
    // baseado nas variaveis que foram declaradas no inicio do script

    if (COR == 0) {
        return verde;
    } else if (COR == 1) {
        return vermelho;
    } else if (COR == 2) {
        return amarela;
    } else if (COR == 3) {
        return azul;
    }

}

//função para o proximo jogo.

let Proximo_Nivel = () => {
    Pontuacao++;
    sorteiaOrdem();

}

//função para GAME OVER;

let PERDEU = () => {
    alert(`Pontuação:${Pontuacao}\nVOCÊ PERDEU\NCLique em OK para iniciar um novo jogo.`)
    Ordem = [];
    Clique_Ordem = [];
    Iniciar_Jogo();
}


// função para novo jogo
let Iniciar_Jogo = () => {

    alert('Bem vindo ao Genesis! Iniciando novo jogo!');

    Pontuacao = 0;

    Proximo_Nivel(); // inicia o jogo 
}

//0 = verde, 1 = vermelho , 2 = amarelo , 3 = azul

verde.onclick = () => Click(0);
vermelho.onclick = () => Click(1);
amarela.onclick = () => Click(2);
azul.onclick = () => Click(3);



Iniciar_Jogo();