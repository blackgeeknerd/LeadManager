from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer


#Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        #takes any request passed from the function parameter into the serializer variable
        serializer = self.get_serializer(data=request.data)
        #ensure data passed is valid
        serializer.is_valid(raise_exception=True)
        #save user in the database
        user = serializer.save()
        #return response 
        return Response({
            "user" : UserSerializer(user, 
            context=self.get_serializer_context()).data,
            #the Token.objects.create returns a tuple(instance, token)
            #so in order to get the token, use the index 1
            "token": AuthToken.objects.create(user)[1],
            "message": "Welcome " + user.username 
        })


#Login API
class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        #takes any request passed from the function parameter into the serializer variable
        serializer = self.get_serializer(data=request.data)
        #ensure data passed is valid
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        #return response 
        return Response({
            "user" : UserSerializer(user, 
            context=self.get_serializer_context()).data,
            #the Token.objects.create returns a tuple(instance, token)
            #so in order to get the token, use the index 1
            "token": AuthToken.objects.create(user)[1],
            "message": "Welcome back " + user.username 
        })


#Get User API
class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user