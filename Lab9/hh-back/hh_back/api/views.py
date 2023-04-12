import json

from django.http import HttpResponse
from django.shortcuts import render


from django.contrib.auth.models import User
from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpResponse
from django.template import loader
from django.core import serializers
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt

from .models import *
from django.http import JsonResponse
from django.shortcuts import get_object_or_404

'''
    if request.method == 'POST':
        data = json.loads(request.body)
        category_name = data.get('name', '')
        category = Category.objects.create(name=category_name)
        return JsonResponse(category.to_json())
'''

@csrf_exempt
def company(request):
    if request.method == 'GET':
        data=list(Company.objects.values())
        return JsonResponse(data, json_dumps_params={'indent': 4}, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        category = Company.objects.create(name=data["name"],description=data["description"],city=data["city"],address=data["address"])
        return JsonResponse(category.to_json())

@csrf_exempt
def vacancy(request):
    if request.method == 'GET':
        data = list(Vacancy.objects.values())
        return JsonResponse(data, json_dumps_params={'indent': 4}, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        category = Vacancy.objects.create(name=data["name"],company=Company.objects.get(pk=data["company"]),description=data["description"],salary=data["salary"])
        return JsonResponse(category.to_json())

@csrf_exempt
def company_id(request,id):
    try:
        obj = Company.objects.get(pk=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)
    if request.method=='GET':
        return JsonResponse(obj.to_json(), json_dumps_params={'indent': 4}, safe=False)
    if request.method == 'PUT':
        data = json.loads(request.body)
        new_category_name = data.get('name', obj.name)
        # desc = data.get('desc', category.desc)
        obj.name = new_category_name
        obj.save()
        return JsonResponse({'update': True})
    if request.method == 'DELETE':
        obj.delete()
        return JsonResponse({'deleted': True})

@csrf_exempt
def vacancy_id(request,id):
    try:
        obj = Vacancy.objects.get(pk=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)
    if request.method == 'GET':
        return JsonResponse(obj.to_json(), json_dumps_params={'indent': 4}, safe=False)
    if request.method == 'PUT':
        data = json.loads(request.body)
        new_category_name = data.get('name', obj.name)
        # desc = data.get('desc', category.desc)
        obj.name = new_category_name
        obj.save()
        return JsonResponse({'update': True})
    if request.method == 'DELETE':
        obj.delete()
        return JsonResponse({'deleted': True})
@csrf_exempt
def company_id_vac(request,id):
    com=Company.objects.get(pk=id)
    data=list(Vacancy.objects.filter(company=com).values())
    return JsonResponse(data, json_dumps_params={'indent': 4}, safe=False)
@csrf_exempt
def vacancy_top_10(request):
    data=list(Vacancy.objects.all().order_by('-salary').values()[:10])
    return JsonResponse(data, json_dumps_params={'indent': 4}, safe=False)