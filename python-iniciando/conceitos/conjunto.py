# Diferente do que ocorre com listas e tuplas, em conjuntos não é possível ter 2 valores iguais dentro dele. Um exemplo onde não é possível ter um conjunto com dois valores iguais é um conjunto contendo CPFs de usuários de um banco de dados. 
# Para utilizar Set em python basta declarar os valores da variável utilizando chaves{}.
# Outra característica de conjunto é que ele não é uma sequência, sendo assim, ele não possui índice. Não posso inserir colecao[0] pois não existe index 0 ou index de qualquer outro valor.
# Se for utilizado um laço de repetição tipo o for, não será possível saber qual será a ordem dos valores exibidos em tela. Se eu usar o for para percorrer o conjunto colecao, poderá ocorrer de o CPF da "posição" 2 aparecer antes do CPF da "posição" 0.
# Resumindo, um set é uma coleção não ordenada de elementos. Cada elemento é único, isso significa que não existem elementos duplicados dentro do set.

colecao = {11122233344, 22233344455, 33344455566}
colecao.add(44455566677) # Semelhante a função append()