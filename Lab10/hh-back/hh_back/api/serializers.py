from django.contrib.auth.models import User
from rest_framework import serializers
from .models import *


class SER_Company(serializers.ModelSerializer):

    class Meta:
        model = Company
        fields = '__all__'


class SER_Vacancy(serializers.Serializer):
    name = serializers.CharField(max_length=255, default='vacancy')
    description = serializers.CharField(default='text_vac')
    salary = serializers.FloatField(default=1000)
    company_id = serializers.PrimaryKeyRelatedField(queryset=Company.objects.all())
