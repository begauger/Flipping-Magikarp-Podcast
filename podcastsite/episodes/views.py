from django.shortcuts import render

from rest_framework import viewsets, permissions
from .models import Episode
from .serializers import EpisodeSerializer

class EpisodeViewSet(viewsets.ModelViewSet):
    queryset = Episode.objects.all().order_by('-date')
    serializer_class = EpisodeSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
