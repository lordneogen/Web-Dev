
from django.core import serializers
from rest_framework import generics
from . import serializers
from .models import *
from rest_framework.decorators import api_view
from rest_framework.response import Response

'''
    if request.method == 'POST':
        data = json.loads(request.body)
        category_name = data.get('name', '')
        category = Category.objects.create(name=category_name)
        return JsonResponse(category.to_json())
'''
class LIST_Company(generics.ListAPIView, generics.RetrieveAPIView):
    queryset =  Company.objects.all()
    serializer_class = serializers.SER_Company

    def list(self, request, *args, **kwargs):
        pk=kwargs.get('id')
        if pk:
            queryset = Company.objects.filter(pk=pk)
        else:
            queryset = self.get_queryset()
        serializer = serializers.SER_Company(data=queryset, many=True)
        if serializer.is_valid():
            return {'error':'not have users'}
        return Response(serializer.data)
    def post(self, request, *args, **kwargs):
        ser = serializers.SER_Company(data=request.data)
        if ser.is_valid():
            ser.save()
        return Response(ser.data)
    def delete(self, request, *args, **kwargs):
        pk = kwargs.get('id')
        if pk==None:
            return Response("Обьекта не сущетсвует в списке")
        obj = Company.objects.get(pk=pk)
        obj.delete()
        return Response("Item succsesfully delete!")
    def put(self, request, *args, **kwargs):
        pk = kwargs.get('id')
        obj = Company.objects.get(id=pk)
        ser = serializers.SER_Company(instance=obj, data=request.data)
        if ser.is_valid():
            ser.save()
        return Response(ser.data)
class LIST_Vacancy(generics.ListAPIView, generics.RetrieveAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = serializers.SER_Vacancy

    def list(self, request, *args, **kwargs):
        pk=kwargs.get('id')
        if pk:
            queryset = Vacancy.objects.filter(pk=pk)
        else:
            queryset = self.get_queryset()
        serializer = serializers.SER_Vacancy(data=queryset, many=True)
        if serializer.is_valid():
            return {'error':'not have users'}
        return Response(serializer.data)
    def post(self, request, *args, **kwargs):
        ser = serializers.SER_Vacancy(data=request.data)
        if ser.is_valid():
            ser.save()
        return Response(ser.data)
    def delete(self, request, *args, **kwargs):
        pk = kwargs.get('id')
        if pk==None:
            return Response("Обьекта не сущетсвует в списке")
        obj = Vacancy.objects.get(pk=pk)
        obj.delete()
        return Response("Item succsesfully delete!")
    def put(self, request, *args, **kwargs):
        pk = kwargs.get('id')
        obj =Vacancy.objects.get(id=pk)
        ser = serializers.SER_Vacancy(instance=obj, data=request.data)
        if ser.is_valid():
            ser.save()
        return Response(ser.data)

@api_view(['GET'])
def TOP_TEN(request):
    queryset = Vacancy.objects.all().order_by('-salary')[:10]
    data=[]
    for x in queryset:
        data.append(serializers.SER_Vacancy(x).data)
    return Response(data)

@api_view(['GET'])
def GET_COMM_VAC(request,id):
    cm=Company.objects.get(pk=id)
    queryset=Vacancy.objects.filter(company=cm)
    data=[]
    for x in queryset:
        data.append(serializers.SER_Vacancy(x).data)
    return Response(data)