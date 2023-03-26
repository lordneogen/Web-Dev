res=0
a=int(input())
b=list(map(int,input().split()))
for x in range(1,a-1):
    if b[x-1]>b[x] and b[x+1]>b[x]:
        res+=1
print(res)