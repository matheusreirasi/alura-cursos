# Esse código utilizando mostra como funcionam tuplas e como pode ser armazenado dentro de uma lista.
# Tuplas são coleções ordenadas de elementos onde não é possível alterar seus valores, uma vez adicionado e criado uma variável dentro dessa coleção, não é possível alterá-las. Nesse sentido, seu funcionamento é o oposto de listas.

pessoa1 = ("Nico", 39)
pessoa2 = ("Flavio", 37)
pessoa3 = ("Marcos", 30)

instrutores_lista = [pessoa1, pessoa2, pessoa3]

print(instrutores_lista[1][1])

####### DICIONÁRIO ########
instrutores_dicionario = {"Nico": 39, "Flavio":37, "Marcos":30}

print(instrutores_dicionario["Marcos"])

# Já esse código mostra como funciona uma estrutura de dicionário, de modo bem similar a estrutura de Conjuntos. Porém, os elementos da estrutura são constituídos de elementos chave-valor, sendo esses elementos chave-valor separados por dois-pontos. No elemento chave, contém o nome da pessoa, e no elemento valor contém sua idade.
# Para poder buscar um usuário e descobrir sua idade basta procurar pela "posição" do nome desse usuário.
