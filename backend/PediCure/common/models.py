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
    
    creation_date = models.DateTimeField(
        auto_now_add=True,
    )
    
    comment = models.TextField(
        null=True,
        blank=True,
        
    )
    