res=0
a=int(input())
b=list(map(int,input().split()))
for x in b:
    if x>=0:
        res+=1
print(res)