from django.urls import path
from .views import *
urlpatterns = (
    path('logs/create', create_log, name='create_log'),
    path('logs/get', get_logs, name='get_logs'),
    path('html/bolest/<str:slug>/', get_html, name='get_html'),
)