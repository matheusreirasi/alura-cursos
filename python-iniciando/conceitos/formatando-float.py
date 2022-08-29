macarrao = 5.5
carro = 22350
lapis = 2.75
moto = 15000

print("R$ {:8.2f}".format(macarrao))
print("R$ {:8.2f}".format(carro))
print("R$ {:08.2f}".format(lapis))
print("R$ {:08}".format(moto))

## A partir da versão 3.6 de python, surgiu a opção de realizar interpolação utilizando f-strings ou formatted string literals

nome = "Matheus"
print(f"Meu nome é {nome}")

outro_nome = "JULIA"
print(f"O outro nome é {outro_nome.lower()}")