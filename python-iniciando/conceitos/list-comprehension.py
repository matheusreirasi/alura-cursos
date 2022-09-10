inteiros = [1,3,4,5,7,8,9,11,12]
pares = []
quadrados = [n*n for n in inteiros]

pares = [numero if numero%2==0 else "" for numero in inteiros]
outroPares = [numero for numero in inteiros if numero%2 == 0]
print(quadrados)
print(pares)
print(outroPares)