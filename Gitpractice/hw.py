x = 1
contador = 0
while x <= 1000:
    if x % 2 == 0 or x % 3 == 0:
        contador = contador + 1
        x = x+1
    else:
        x =x+1
 
print (contador)