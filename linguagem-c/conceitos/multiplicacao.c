#include <stdio.h>

int main() {
    int x, y;
    int resultado = x*y;

    printf("Digite dois valores.\n");
    scanf("%d:%d", &x, &y);
    printf("O produto é: %d", resultado);
    
    return 0;
}