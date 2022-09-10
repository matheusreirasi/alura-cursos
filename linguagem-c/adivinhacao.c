#include <stdio.h>
#include <stdlib.h>
#include <time.h>


#define TENTATIVAS_TOTAIS 10 //define é utilizado quando uma variável é utilizada somente uma vez, sendo assim chamada de constantes.

int main() {
    printf("************************************\n");
    printf("* Bem Vindo ao jogo de adivinhação *\n");
    printf("************************************\n");

    int segundos = time(0);
    srand(segundos);

    int numeroDaRaizDaFuncaoRand = rand();

    int numeroSecreto = (numeroDaRaizDaFuncaoRand % 100) + 1; //uso o resto da divisão por 100 para pegar os dois últimos valores desse resto e depois acrescento 1 pois quero que seja um número entre 1 e 100.

    int chute;
    int tentativas = 1;
    int jogando = 0;
    float pontos = 1000;

    while(jogando == 0){

        printf("Tentativa %d de %d\n", tentativas, TENTATIVAS_TOTAIS);
        printf("Qual é o seu chute?\n");
        scanf("%d", &chute);
        printf("Seu chute foi %d \n", chute);

        if(chute < 1 || chute > 100){
            printf("Você deve digitar um número entre 1 e 100\n");

            continue;
        }

        if ( chute == numeroSecreto) {
            printf("Parabéns! Você acertou.\n");

            break;
            //jogando = 1 (Outro método de finalizar o while)
        }
        else{
            if (chute > numeroSecreto) {
                printf("Você errou. Diminua o valor!\n");
            }
            else {
                printf("Você errou. Aumente o valor!\n");
            }
        }
        tentativas += 1;

        float pontosPerdidos = abs(chute - numeroSecreto) / 2.0;
        pontos -= pontosPerdidos;
    }
    printf("Fim de jogo\n");
    printf("Você acertou em %d tentativas.\n", tentativas);
    printf("Total de pontos: %.2f \n", pontos);

    return 0;
}


/*
* Para usar a função abs() é necessário incluir a biblioteca stdlib.h
*/