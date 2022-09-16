#include <stdio.h>
#include <stdlib.h>
#include <time.h>



int main() {
    printf("\n\n");
    printf("          P  /_\\  P                              \n");
    printf("         /_\\_|_|_/_\\                            \n");
    printf("     n_n | ||. .|| | n_n         Bem vindo ao     \n");
    printf("     |_|_|nnnn nnnn|_|_|     Jogo de Adivinhação! \n");
    printf("    |\" \"  |  |_|  |\"  \" |                     \n");
    printf("    |_____| ' _ ' |_____|                         \n");
    printf("          \\__|_|__/                              \n");
    printf("\n\n");

    int segundos = time(0);
    srand(segundos);
    int numeroDaRaizDaFuncaoRand = rand();

    int numeroSecreto = (numeroDaRaizDaFuncaoRand % 100) + 1; //uso o resto da divisão por 100 para pegar os dois últimos valores desse resto e depois acrescento 1 pois quero que seja um número entre 1 e 100.

    unsigned int chute;
    int tentativas = 1;
    int jogando = 0;
    float pontos = 1000;

    int tentativasTotais;
    int nivel;
    printf("Qual o nível de dificuldade?\n");
    printf("(1)Fácil (2)Médio (3)Difícil\n");
    scanf("%d", &nivel);

    switch (nivel) {
        case 1:
            tentativasTotais = 20;
            break;
        
        case 2:
            tentativasTotais = 12;
            break;

        default:
            tentativasTotais = 6;
            break;
    }


    for (int i = 1; i <= tentativasTotais; i++){

        printf("Tentativa %d de %d\n", tentativas, tentativasTotais);
        printf("Qual é o seu chute?\n");
        scanf("%u", &chute);

        if(chute < 1 || chute > 100){
            printf("Você deve digitar um número entre 1 e 100\n");

            continue;
        }

        if ( chute == numeroSecreto) {
            printf("\n");
            printf("             OOOOOOOOOOO               \n");
            printf("         OOOOOOOOOOOOOOOOOOO           \n");
            printf("      OOOOOO  OOOOOOOOO  OOOOOO        \n");
            printf("    OOOOOO      OOOOO      OOOOOO      \n");
            printf("  OOOOOOOO  #   OOOOO  #   OOOOOOOO    \n");
            printf(" OOOOOOOOOO    OOOOOOO    OOOOOOOOOO   \n");
            printf("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO  \n");
            printf("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO  \n");
            printf("OOOO  OOOOOOOOOOOOOOOOOOOOOOOOO  OOOO  \n");
            printf(" OOOO  OOOOOOOOOOOOOOOOOOOOOOO  OOOO   \n");
            printf("  OOOO   OOOOOOOOOOOOOOOOOOOO  OOOO    \n");
            printf("    OOOOO   OOOOOOOOOOOOOOO   OOOO     \n");
            printf("      OOOOOO   OOOOOOOOO   OOOOOO      \n");
            printf("         OOOOOO         OOOOOO         \n");
            printf("             OOOOOOOOOOOO              \n");
            printf("\nParabéns! Você acertou!\n");
            printf("Você fez %.2f pontos. Até a próxima!\n\n", pontos);
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
    

    return 0;
}


/*
* Para usar a função abs() é necessário incluir a biblioteca stdlib.h
* O nome dessas figuras que são impressas no terminal são ascii art
*/