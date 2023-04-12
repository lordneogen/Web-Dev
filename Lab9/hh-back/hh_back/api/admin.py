from django.contrib import admin
from .models import *
class MyModelAdmin(admin.ModelAdmin):
    list_display = ('name', 'pk', 'salary','company')

admin.site.register(Company)
admin.site.register(Vacancy,MyModelAdmin)
# Register your models here.
