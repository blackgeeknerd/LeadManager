from rest_framework import serializers
from rest_framework.reverse import reverse
from leads.models import Lead


#Lead serilizer
class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'
