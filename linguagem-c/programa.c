#include <stdio.h>

int main() {
    printf("************************************\n");
    printf("* Bem Vindo ao jogo de adivinhação *\n");
    printf("************************************\n");

    int numeroSecreto = 55;

    printf("O número %d é o número secreto. Não conta para ninguém.\n", numeroSecreto);

    int chute;

    printf("Qual é o seu chute?\n");
    scanf("%d", &chute);
    printf("Seu chute foi %d \n", chute);

    if ( chute == numeroSecreto) {
        printf("Parabéns! Você acertou.");
    }
    else{
        if (chute > numeroSecreto) {
            printf("Você errou. Diminua o valor!");
        }
        if (chute < numeroSecreto) {
            printf("Você errou. Aumente o valor!");
        }
    }

    return 0;
}