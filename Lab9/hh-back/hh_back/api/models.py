from django.db import models

# Create your models here.
class Company(models.Model):
    name=models.CharField(max_length=255,default='company')
    description=models.TextField(default='text_company')
    city=models.CharField(max_length=255,default='city')
    address=models.TextField(default='addres')

    def __str__(self):
        return str(self.name)+" "+str(self.pk)

    def to_json(self):
        return {
            "id":self.pk,
            "name":self.name,
            "desk":self.description,
            "city":self.city,
            "address":self.address,
        }


class Vacancy(models.Model):
    name = models.CharField(max_length=255,default='vacancy')
    description = models.TextField(default='text_vac')
    salary=models.FloatField(default=1000)
    company=models.ForeignKey(Company,on_delete=models.CASCADE)

    def __str__(self):
        return str(self.name)+" "+str(self.pk)
    def to_json(self):
        return {
            "id":self.pk,
            "name":self.name,
            "description":self.description,
            "salary":self.salary,
            "company":self.company.name,
        }
