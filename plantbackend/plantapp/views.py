from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import DiseasePrediction
from .services.predictor import predict_disease


@api_view(['GET'])
def home(request):
    return Response({
        'message': 'Plant Disease Detection API Running'
    })


@api_view(['POST'])
def predict(request):
    if 'image' not in request.FILES:
        return Response(
            {'error': 'No image uploaded'},
            status=status.HTTP_400_BAD_REQUEST
        )

    image = request.FILES['image']

    prediction_obj = DiseasePrediction.objects.create(
        image=image,
        predicted_class='Processing',
        confidence=0
    )

    result = predict_disease(prediction_obj.image.path)

    prediction_obj.predicted_class = result['disease']
    prediction_obj.confidence = result['confidence']
    prediction_obj.save()

    return Response({
        'disease': result['disease'],
        'confidence': result['confidence'],
        'image_url': request.build_absolute_uri(prediction_obj.image.url)
    })