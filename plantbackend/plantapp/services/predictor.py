import os
import numpy as np
import tensorflow as tf
from PIL import Image
from django.conf import settings
from plantapp.disease_mapping import CLASS_NAMES


model = tf.keras.models.load_model(settings.MODEL_PATH)


def predict_disease(image_path):
    image = Image.open(image_path).convert('RGB')
    image = image.resize((128, 128))

    image_array = np.array(image) / 255.0
    image_array = np.expand_dims(image_array, axis=0)

    prediction = model.predict(image_array)

    predicted_index = np.argmax(prediction)
    confidence = float(np.max(prediction) * 100)

    predicted_class = CLASS_NAMES[predicted_index]

    return {
        'disease': predicted_class,
        'confidence': round(confidence, 2)
    }