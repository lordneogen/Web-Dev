a=int(input())
b=list(map(int,input().split()))
for x in b:
    if x%2==0:
        print(x,end=' ')