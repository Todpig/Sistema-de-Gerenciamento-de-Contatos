from .models import Contact
from rest_framework import generics
from .serializers import ContactSerializer
from django.views.generic import TemplateView


class IndexView(TemplateView):
    template_name = 'contact.html'


class ContactViewSet(generics.ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


class ContactRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
