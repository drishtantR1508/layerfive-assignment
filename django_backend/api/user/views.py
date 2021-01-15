from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer
from .models import CustomUser
from django.http import JsonResponse
from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import login, logout

# Create your views here.


@csrf_exempt
def signin(request):
    if not request.method == 'POST':
        return JsonResponse({'error': 'Send a post with valid Parameters.'})

    username = request.POST['email']
    password = request.POST['password']

    UserModel = get_user_model()

    try:
        user = UserModel.objects.get(email=username)
        if user.check_password(password):
            usr_dict = UserModel.objects.filter(
                email=username).values().first()
            usr_dict.pop('password')

            login(request, user)
            return JsonResponse({'user': usr_dict})

        else:
            return JsonResponse({'error': "Password didn't match"})

    except UserModel.DoesNotExist:
        return JsonResponse({'error': 'Invalid Email'})


def signout(request, id):
    logout(request)

    UserModel = get_user_model()

    try:
        user = UserModel.objects.get(pk=id)
        user.session_token = "0"
        user.save()
    except UserModel.DoesNotExist:
        return JsonResponse({'error': 'Invalid User ID'})

    return JsonResponse({'error': 'Logout Success!'})


@csrf_exempt
def signup(request):
    registered = False
    if request.method == 'POST':
        first_name = request.POST['first_name']
        last_name= request.POST['last_name']
        email = request.POST['email']
        password = request.POST['password']
        phone = request.POST['phone']
        gender = request.POST['gender']
        address1 = request.POST['address1']
        address2 = request.POST['address2']
        city = request.POST['city']
        zipcode = request.POST['zipcode']
        state = request.POST['state']

        user = CustomUser(first_name=first_name, last_name=last_name, email=email, phone=phone, gender=gender,
                          city=city, address1=address1, address2=address2, zipcode=zipcode, state=state)
        user.set_password(password)
        user.save()
        registered = True
        return JsonResponse({'success': 'Signed Up Succesfully'})
    else:
        return JsonResponse({'error': 'Please fill form fields carefully.'})


class UserViewSet(viewsets.ModelViewSet):
    permission_classes_by_action = {'create': [AllowAny]}

    queryset = CustomUser.objects.all().order_by('id')
    serializer_class = UserSerializer

    def get_permissions(self):
        try:
            return [permission() for permission in self.permission_classes_by_action[self.action]]
        except KeyError:
            return [permission() for permission in self.permission_classes]
