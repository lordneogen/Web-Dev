a=int(input())
b=int(input())
for x in range(a,b):
    print(str(x)*(abs(x%2-1)),end=' '*(abs(x%2-1)))