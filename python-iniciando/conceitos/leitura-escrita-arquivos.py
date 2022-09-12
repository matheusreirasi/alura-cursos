arquivo = open("C:/Users/Matheus/Codigos/alura-aulas/python-iniciando/palavras.txt","w")

arquivo.write("morango")
arquivo.write("laranja\n")
arquivo.write("abacaxi\n")

print(arquivo)

arquivo.close()


# A ideia aqui era fazer abrir a foto, não está dando certo
data = open("C:/Users/Matheus/Pictures/Wallpaper/batman.jpg", "rb")
imagem = data.read()
data.close()

## Sempre dever fechar o arquivo pois o python está comando está utilizando um canal de comunicação com o sistema operacional
## Por padrão os dados escritos para o arquivo são colocados um ao lado do outro.