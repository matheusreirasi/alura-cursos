

def jogar(): ## em javascript, isso seria uma function
    print("************************")
    print("Bem Vindo ao jogo da forca")
    print("************************")

    palavra_secreta = "arroz".lower()
    palavra = ["_"]*len(palavra_secreta)
    #palavra = ["_" for letra in palavra_secreta] isso é list comprehensions
    enforcou = False
    acertou = False
    soma_de_palavras = 0
    tentativas = 0

    print(palavra)

    while (not enforcou and not acertou): #enquanto enforcou e acertou continua falso

        chute = input("Tente uma letra: ")
        chute = chute.strip().lower() #Como nenhum parâmetro foi passado, removerá tudo que contenha um espaço, como por exemplo, "  arroz "


        if (chute in palavra_secreta):
            index = 0
            for letra in palavra_secreta:
                if (chute == letra):
                    palavra[index] = chute
                    soma_de_palavras += 1
                index += 1
        else: ## caso de tentativas erradas
            tentativas += 1


        print(palavra)

        if (soma_de_palavras == len(palavra_secreta)):
            print("Você acertou")
            acertou = True

        if (tentativas == 6):
            enforcou = True
            print("Você foi enforcado.")

#        enforcou = tentativas == 6 é igual ao código de cima, porém sem a mensagem

        
if (__name__ == "__main__"):
    jogar()