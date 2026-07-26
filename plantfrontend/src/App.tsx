// App.tsx
import { useState } from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import UploadForm from "./components/UploadForm";
import ImagePreview from "./components/ImagePreview";
import ResultCard from "./components/ResultCard";
import TreatmentCard from "./components/TreatmentCard";
import Footer from "./components/Footer";

interface PredictionResult {
  disease: string;
  confidence: number;
  treatment: string;
}

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = async (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(imageUrl);
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch("http://127.0.0.1:8000/api/predict/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Prediction failed");
      }

      const data = await response.json();

      setResult({
        disease: data.disease,
        confidence: data.confidence,
        treatment: data.treatment,
      });
    } catch (err) {
      console.error(err);
      setError(
        "Unable to connect to backend. Make sure Django server is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 flex flex-col">
      <Navbar />

      <main className="flex-1 px-4 py-8 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Plant Disease Detection
              </h1>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                Upload a plant leaf image and get AI-based disease detection.
              </p>
            </div>

            <UploadForm onImageUpload={handleImageUpload} />

            {selectedImage && <ImagePreview image={selectedImage} />}
          </div>

          <div className="space-y-6">
            {loading && (
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-green-100 min-h-[250px] flex items-center justify-center">
                <Loader />
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-2xl p-4 shadow-sm">
                {error}
              </div>
            )}

            {!loading && result && (
              <>
                <ResultCard
                  disease={result.disease}
                  confidence={result.confidence}
                />

                <TreatmentCard treatment={result.treatment} />
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;