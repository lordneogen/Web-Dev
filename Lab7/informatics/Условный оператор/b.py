a=int(input())
b=a%4==0
c=a%100==0
d=a%400==0
if d:
    print("YES")
elif c:
    print("NO")
elif b:
    print("YES")
else:
    print("NO")