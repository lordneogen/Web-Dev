from django.contrib import admin
from django.urls import path,include
from . import views
'''
/api/companies - List of all Companies
/api/companies/<int:id>/ - Get one Company
/api/companies/<int:id>/vacancies/ - List of Vacancies by Company
/api/vacancies/ - List of all Vacancies
/api/vacancies/<int:id>/ - Get one Vacancy
/api/vacancies/top_ten/ - List of top 10 vacancies sorted by 
'''
urlpatterns = [
    path('companies/', views.LIST_Company.as_view()),
    path('companies/<int:id>/', views.LIST_Company.as_view()),
    path('companies/<int:id>/vacancies/', views.GET_COMM_VAC),
    path('vacancies/', views.LIST_Vacancy.as_view()),
    path('vacancies/<int:id>/', views.LIST_Vacancy.as_view()),
    path('vacancies/top_ten/',views.TOP_TEN)
]
