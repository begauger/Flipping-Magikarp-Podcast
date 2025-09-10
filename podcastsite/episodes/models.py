from django.db import models

class Episode(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    audio = models.FileField(upload_to='episodes/')
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title