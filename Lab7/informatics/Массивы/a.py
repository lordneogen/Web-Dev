'''
A. A[0], A[2], A[4], ...
B. Вывести четные элементы
C. Количество положительных элементов
D. Количество элементов, больших предыдущего
E. Есть ли два элемента с одинаковыми знаками
F. Количество элементов больших обоих соседей
G. Переставить элементы в обратном порядке
'''
a=int(input())
b=list(map(int,input().split()))
for x in range(0,len(b)):
    if x%2==0:
        print(b[x],end=' ')