#include <stdio.h>


int main () {

    int pontos = 1000;
    int numero = 50;
    int chute;
    printf("Digite um número \n");
    scanf("%d", chute);
    int pontosPerdidos = (chute - numero)/2 ;
    pontos -= pontosPerdidos;
    printf("%d", pontos);

    return 0;
}

//Não está funcionando e não sei o porque.


//Para realizar uma operação matemática, a "observação"  do código feita pela IDE começa da direita para a esquerda, por isso que quando é colocado uma divisão em uma variável do tipo int, o resultado retornado é um inteiro. Porém se nessa divisão o divisor for um float, o resultado será um float contendo casas decimais, por exemplo "90.0000".

//No arquivo adivinhacao.c pode ocorrer de resultar uma variável do tipo float, por isso é necessário declarar algumas variáveis(nesse caso pontos e pontosPerdidos) para o tipo float, pois sem isso a divisão para a contagem dos pontos não será exata devido ao fato de, quando a divisão não for exata, ou seja, for um número com casas decimais, somente seu valor inteiro será utilizado para a subtração dos pontos pelos pontosPerdidos. Por exemplo, se eu diminuir pontos=1000 (tipo int) por pontosPerdidos=2.5 (tipo float) o resultado será 997.5. Porém se eu não declarar pontosPerdidos como tipo float, mas como do tipo int, somente será considerado seu valor inteiro (que nesse caso é 2) e o resultado de pontos -= pontosPerdidos é 998 e não 997.5 como esperado.

//Outra observação: se eu declarar todas as variáveis como int e na divisão da variável pontosPerdidos dividir tudo por 2.0, o resultado ainda será do tipo int.

//Outra observação: mesmo que eu declare todas as variáveis como float e realize uma divisão por um número int, a tipagem utilizada nas variáveis não é o suficiente para transformar a divisão como float. Para realmente retornar uma divisão como float é necessário dividir todos os valores das variáveis (nesse caso as variáveis são chute e numeroSecreto do arquivo adivinhacao.c) por um número do tipo float também.