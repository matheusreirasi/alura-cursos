import forca
import adivinhacao
## Em python, ao usar o comando de import, será automaticamente mostrado no terminal todo o conteúdo do arquivo, mesmo não tendo realmente chamado esse import dentro do código, como ocorre com javascript.
## Porém, se esse import conter alguma função, então deverá ser passado sua função desse import, como feito nesse arquivo.
## Também tenho a opção de definir uma função de escolher o jogo e depois chamá-la utilizando aquela comparação feita nos outros arquivos de jogo (forca.py e adivinhacao.py). Porém isso seria desnecessário pois o esse arquivo jogos.py funcionaria do mesmo jeito.

print("************************")
print("Escolha o seu jogo!")
print("************************\n")

print("(1) Forca (2) Adivinhação")

jogo = int(input("Qual jogo?"))

if (jogo ==1):
    print("Jogando Forca")
    forca.jogar()
else:
    print("Jogando Adivinhação")
    adivinhacao.jogar()