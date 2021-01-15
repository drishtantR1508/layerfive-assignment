from django.urls import path, include
from . import views
urlpatterns = [
    path('', views.home, name='api-home'),
    path('user/', include('api.user.urls'))
]
