res=0
a=int(input())
b=list(map(int,input().split()))
for x in range(1,a):
    if b[x-1]==b[x]:
        res+=1
if res>0:
    print("YES")
else:
    print("NO")