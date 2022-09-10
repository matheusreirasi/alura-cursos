#include <stdio.h>


int main () {
    int a = 3;
    int b = 2;
    double pontos = a / (float)b;
    printf("%f\n", pontos);

    double pi = 3.1415;
    int pi_convertido = (int)pi;
    printf("%f \n%d \n", pi, pi_convertido);
}

//Para transformar uma variável de um tipo para outro isso é chamado de casting