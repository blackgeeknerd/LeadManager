from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer

#Lead viewset
class LeadViewSet(viewsets.ModelViewSet):
    # queryset = Lead.objects.all()
    
    permission_classes = [
        #permission for users changed from 
        #permissions.AllowAny to permissions.isAuthenticated
        # permissions.AllowAny
        permissions.IsAuthenticated 
    ]

    serializer_class = LeadSerializer

    #function that returns only the leads of the logged in user
    def get_queryset(self):
        return self.request.user.leads.all()

    #function to allow saving of the lead owner once a user
    #creates/saves a lead
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
