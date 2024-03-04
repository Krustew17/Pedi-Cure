from django.db import models

# Create your models here.
class LogModel(models.Model):
    patient_name = models.CharField(
        null=False,
        blank=False,
        max_length=200,
        verbose_name='Patient Name'
    )
    price = models.PositiveIntegerField(
        null=False,
        blank=False,
        verbose_name='Price'
    )
    
    procedure_date_day = models.DateField()
    procedure_day_hours = models.TimeField()
    
    comment = models.TextField(
        null=True,
        blank=True,
        
    )
    