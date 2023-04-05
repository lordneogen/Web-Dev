
from rest_framework import serializers
from django.http import HttpResponse
from django.shortcuts import render


from django.contrib.auth.models import User
from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpResponse
from django.template import loader
from rest_framework import generics
from django.core import serializers
from django.contrib.auth.models import User
from .models import *
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
def products(request):
    data=list(Product.objects.values())
    return JsonResponse(data, safe=False)
def categor(request):
    data=list(Category.objects.values())
    return JsonResponse(data, safe=False)
def categor_id(request,id):
    data=list(Category.objects.values())
    return JsonResponse(data[id-1], safe=False)
def products_id(request,id):
    data=list(Product.objects.values())
    return JsonResponse(data[id-1], safe=False)
def categor_pr_id(request,id):
    data=list(Product.objects.filter(category_id=id).values())
    return JsonResponse(data, safe=False)