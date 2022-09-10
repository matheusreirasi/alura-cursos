#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int segundos = time(0);
    srand(segundos);

    int a = rand();
    int b = rand();

    printf("%d \n%d \n",a ,b);
}


/*
* O computador não consegue realmente gerar números aleatórios para o usuário, são números pseudo-aleatórios. Ao utilizar a função rand() para tentar gerar um número aleatório, a função estará na mesma raiz (seed) sempre que executada, e somente assim não é capaz de gerar um número aleatório, pois a função matemática é sempre a mesma. A função rand() está em <stdlib.h>
* Então para realmente fazer a função retornar um valor aleatório é necessário alterar a raiz (seed). Para isso, um dos meios utilizados é utilizando a função time() e colocando esse time dentro da função srand().
* A função time(0) retorna o número de segundos passados desde 1 de janeiro de 1970 até o momento atual. Essa data também é conhecida na programação como EPOCH.
*/