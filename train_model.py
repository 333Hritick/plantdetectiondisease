import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras import layers, models
import os

train_dir = r"D:\project\plant-disease-detection\dataset\train"

train_data = ImageDataGenerator(
    rescale=1./255,
    validation_split=0.2
)

train_generator = train_data.flow_from_directory(
    train_dir,
    target_size=(128, 128),
    batch_size=32,
    class_mode='categorical',
    subset='training'
)

val_generator = train_data.flow_from_directory(
    train_dir,
    target_size=(128, 128),
    batch_size=32,
    class_mode='categorical',
    subset='validation'
)

model = models.Sequential([
    layers.Conv2D(32, (3, 3), activation='relu', input_shape=(128, 128, 3)),
    layers.MaxPooling2D(2, 2),

    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.MaxPooling2D(2, 2),

    layers.Conv2D(128, (3, 3), activation='relu'),
    layers.MaxPooling2D(2, 2),

    layers.Flatten(),
    layers.Dense(128, activation='relu'),
    layers.Dense(10, activation='softmax')
])

model.compile(
    optimizer='adam',
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

model.fit(
    train_generator,
    validation_data=val_generator,
    epochs=5
)

os.makedirs(
    r"D:\project\plant-disease-detection\plantbackend\saved_models",
    exist_ok=True
)

model.save(r"D:\project\plant-disease-detection\plantbackend\saved_models\plant_disease_model.keras")

print("Model saved successfully!")