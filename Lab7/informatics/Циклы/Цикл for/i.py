a=int(input())
res=0
for x in range(1,a+1):
    if a%x==0:
        res+=1
print(res)