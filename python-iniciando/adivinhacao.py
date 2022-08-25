import random

## Agora que eu estou importando a função daqui para o arquivo jogos.py, eu não consigo mais rodar o jogo por aqui, somente indo até o arquivo jogos.py e escolhendo qual jogo quero jogar, mas isso somente por lá.

def jogar(): ## em javascript, isso seria function
    print("************************")
    print("Bem Vindo ao jogo de adivinhação")
    print("************************")

    numero_secreto = random.randrange(1,101)
    rodada = 1
    pontos = 1000

    print("Escolha a dificuldade!\n (1)Fácil (2) Médio (3) Difícil")
    nivel = int(input("Defina o nível:"))


    if (nivel == 1):
        total_tentativas = 20
    elif (nivel == 2):
        total_tentativas = 10
    else:
        total_tentativas = 5


    while (rodada <= total_tentativas):
        chute= int(input("Digite um número entre 1 e 100: "))

        print("Você digitou", chute)

        if (chute < 1 or chute > 100):
            print("Você deve digitar um número entre 1 e 100 \n")
            continue
        ##continue serve para fazer o código ir para a próxima iteração

        acertou = chute == numero_secreto
        maior = chute > numero_secreto
        menor = chute < numero_secreto
        pontos_perdidos = abs(chute-numero_secreto) ## abs() é utilizada para pegar o valor absoluto da operação

        print("Tentativa {} de {}".format(rodada, total_tentativas))
        if (acertou):
            print("Você acertou e fez {} pontos! \n".format(pontos))
            break
        elif (maior):
            print("Diminua o valor \n")
            pontos -= pontos_perdidos
        else:
            print("Aumente o valor \n")
            pontos -= pontos_perdidos

        rodada += 1

    print("Jogo finalizado")


if (__name__ == "__main__"):
    jogar()

## Isso quer dizer que quando o arquivo adivinhacao.py (__name__) for executado como o programa padrão/principal ("__main__"), então a função jogar deverá ser executada.
## No arquivo jogos.py, eu não criei essa comparação entre o nome do arquivo e sua "prioridade", sendo assim, ele funciona normalmente.