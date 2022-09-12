#include <stdio.h>

int main() {
    int numero;

    printf("Escolha um número entre 1 e 10\n");
    scanf("%d", &numero);

    if (numero < 1 || numero > 10) {
        printf("Número deve ser entre 1 e 10\n");
    }

    for (int i=1; i<=10; i++){
        int multiplicacao = numero * i;
        printf("%d x %d = %d \n", numero, i, multiplicacao);
    }
}