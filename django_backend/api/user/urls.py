from . import views
from rest_framework import routers
from django.urls import include, path


router = routers.DefaultRouter()
router.register(r'', views.UserViewSet)

urlpatterns = [
    path('login/', views.signin, name='signin'),
    path('signup/', views.signup, name='signup'),
    path('logout/<int:id>/', views.signout, name='logout'),
    path('', include(router.urls))
]
