

def jogar(): ## em javascript, isso seria uma function
    print("************************")
    print("Bem Vindo ao jogo da forca")
    print("************************")

    palavra_secreta = "banana"
    palavra = ["_"]*len(palavra_secreta)
    enforcou = False
    acertou = False
    soma_de_palavras = 0

    print(palavra)

    while (not enforcou and not acertou):

        chute = input("Tente uma letra: ")
        chute = chute.strip() #Como nenhum parâmetro foi passado, removerá tudo que contenha um espaço, como por exemplo, "  arroz "
        index = 0

        for letra in palavra_secreta:
            if (chute.lower() == letra.lower()):
                palavra[index] = chute
                soma_de_palavras += 1
            index += 1

        if soma_de_palavras == len(palavra_secreta):
            print("\nVoce acertou!")
            acertou = True
            
        print(palavra)

if (__name__ == "__main__"):
    jogar()