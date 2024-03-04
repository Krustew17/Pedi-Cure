from rest_framework import serializers as s
from PediCure.common.models import LogModel

class logSerializer(s.ModelSerializer):
    procedure_date_day = s.DateField(input_formats=['%d-%m-%Y'])
    class Meta:
        model = LogModel
        fields = ('patient_name', 'price', 'procedure_date_day', 'procedure_day_hours', 'comment')