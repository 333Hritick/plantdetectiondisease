from django.db import models

class DiseasePrediction(models.Model):
    image = models.ImageField(upload_to='predictions/')
    predicted_class = models.CharField(max_length=255)
    confidence = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.predicted_class} - {self.confidence}%"
