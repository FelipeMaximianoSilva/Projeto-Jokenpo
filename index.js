//console.log("Hello World!")
var prompt = require('prompt-sync')();

const escolhas = ["Tesoura", "Pedra", "Papel"];
console.log("\n O jogo será Jokenpô, Para tomar suas decisões, utilize 1 para Tesoura, 2 para Pedra ou 3 para Papel \n");
let inicio = prompt("Deseja iniciar o jogo? ");
while(inicio == 's' || inicio == 'sim' || inicio == 'SIM' || inicio == 'S')
{
let vitjog = 0;
let vitCOM = 0;
let rodadas = prompt("Defina o número de rodadas que deseja jogar: ");
for(i = 0; i < rodadas; i++)
{
    console.log(`\nInicio da rodada ${i + 1}`);
    let jogador1 = prompt("Jogador, selecione o que irá jogar: ");
    if(jogador1 > 1 && jogador1 < 3 )
    {
        console.log(`\nJogador selecionou ${escolhas[jogador1 - 1]} \n`);
        let COM = Math.floor(Math.random() * 3) + 1;
        console.log(`Computador selecionou ${escolhas[COM - 1]} \n`);
        if (jogador1 == COM)
        {
            console.log("\nEmpate");
        }
        else if (jogador1 == 1)
        {
            if(COM == 2)
            {
                console.log("\nComputador venceu a rodada!\n");
                vitCOM++;
            }
            else
            {
                console.log("\nJogador venceu a rodada!\n");
                vitjog++;
            }
        }
        else if (jogador1 == 2)
        {
            if(COM == 3)
            {
                console.log("\nComputador venceu a rodada!\n");
                vitCOM++;''
            }
            else
            {
                console.log("\nJogador venceu a rodada!\n");
                vitjog++;
            }
        }
        else
        {
            if(COM == 1)
            {
                console.log("\nComputador venceu a rodada!\n");
                vitCOM++;
            }
            else
            {
                console.log("\nJogador venceu a rodada!\n");
                vitjog++;
            }
        }
    }
    else
    {
        console.log("\nOpção inválida jogador, escolha novamente\n");
        i--;
    }
}
console.log("\n");
console.log(`\nA partida ficou JOGADOR ${vitjog} x ${vitCOM} COMPUTADOR\n`)
if(vitjog > vitCOM)
    {
        console.log("\nO JOGADOR FOI O GRANDE VENCEDOR!\n");
    }
else if(vitCOM > vitjog)
    {
        console.log("\nO COMPUTADOR FOI O GRANDE VENCEDOR!\n");
    }
else
    {
        console.log("\nHOUVE UM EMPATE NA PARTIDA\n");
    }
    inicio = prompt("Deseja jogar novamente? ");
}
console.log("\nO Jogo acabou!")