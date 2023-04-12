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
    path('companies/', views.company),
    path('companies/<int:id>/', views.company_id),
    path('companies/<int:id>/vacancies/', views.company_id_vac),
    path('vacancies/', views.vacancy),
    path('vacancies/<int:id>/', views.vacancy_id),
    path('vacancies/top_ten/',views.vacancy_top_10)
]
