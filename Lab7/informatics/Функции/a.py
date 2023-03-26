def min_4(a,b,c,d):
    return min(min(a,b),min(c,d))
a=list(map(int,input().split()))
print(min_4(a[0],a[1],a[2],a[3]))