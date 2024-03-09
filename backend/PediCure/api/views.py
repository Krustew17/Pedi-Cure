from django.shortcuts import render
from rest_framework.decorators import api_view
from .serializers import logSerializer
from rest_framework.response import Response
from rest_framework import status
from PediCure.common.models import LogModel
import json
# Create your views here.


# 127.0.0.1:8000/api/logs/create
@api_view(['POST'])
def create_log(request):
    if request.method == 'POST':
        data = request.data
        serializer = logSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(stautss=status.HTTP_400_BAD_REQUEST)
    


#127.0.0.1:8000/api/logs/get
@api_view(['GET'])
def get_logs(request):
    if request.method == 'GET':
        logs = LogModel.objects.all()
        serializer = logSerializer(logs, many=True)
        return Response(serializer.data)
    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_html(request, slug):
    to_return = ""
    if request.method == 'GET':
        with open('./html.json', 'r') as file:
            data = json.load(file)
            json_data = json.dumps(data)
            json_data = json.loads(json_data)
            to_return = json_data[str(slug)]
        file.close()
        return Response({'data': to_return})