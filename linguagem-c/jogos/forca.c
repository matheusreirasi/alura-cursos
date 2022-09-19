#include <stdio.h>
#include <string.h>

int main() {
    char palavraSecreta[20];

    sprintf(palavraSecreta, "melancia");

    printf("%s\n", palavraSecreta);

    int acertou = 0;
    int enforcou = 0;
    //esses dois valores servem para declarar que o loop começa como "False"

    char letrasInseridas[26];//salva aqui todas as letras que o usuário inseriu
    int tentativas = 0;

    
    do{

        for (int i=0; i < strlen(palavraSecreta); i++){

            int encontrouPalavra = 0;
            
            for (int j=0; j < tentativas; j++){
                if (letrasInseridas[j] == palavraSecreta[i]){
                    encontrouPalavra = 1;
                    break;
                }
            }

            if (encontrouPalavra){
                printf("%c", palavraSecreta[i]);
            } else{
                printf("_ ");
            }
        }
        printf("\n");

        char chute;
        scanf(" %c", &chute);//é necessário colocar um espaço na frente da representação pq após digitar a palavra pela primeira vez e digitar o enter, esse enter ficará salvo no buffer, e na próxima iteração do for() esse enter será contabilizado e aparecerá a linhazinha duas vezes(a primeira linhazinha é devido ao enter para confirmar o input do usuário e a segunda linhazinha é devido a próxima iteração do for())
        //char chute=scanf("%c", &chute) não funciona

        letrasInseridas[tentativas] = chute;
        tentativas ++;
        
    } while (!acertou && !enforcou) ;
    

}

/*sprintf serve para pegar uma cadeia de caractere (string) e colocar dentro de uma variável. Somente a função sprintf() não retorna nada ao usuário, é necessário colocar depois a função printf().
A sintaxe é sprintf(variável, "cadeia de caractere")
*/

/* do...while é o contrário do while.
No do...while é executada uma linha de código independente do loop que se encontra no while(). Logo após que esse código contido no do() é executado, ele é comparado com os parâmetros no while().
Já na função que contém somente o while(), é necessário declarar os parâmetros fora desse loop e depois compará-los dentro do while(), se as condições dentro desse while() forem atendidas, então o bloco de código dentro desse while() é executado.
Por isso que no do...while não é passado nenhum bloco de código dentro do while(), pois o bloco de código que deveria estar dentro dele está dentro do do()
*/