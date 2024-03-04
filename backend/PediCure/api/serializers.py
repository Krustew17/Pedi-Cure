from rest_framework import serializers as s
from PediCure.common.models import LogModel

class logSerializer(s.ModelSerializer):
    class Meta:
        model = LogModel
        fields = ('patient_name', 'price', 'creation_date', 'comment')