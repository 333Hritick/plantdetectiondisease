interface ResultCardProps {
  disease: string;
  confidence: number;
}

const ResultCard = ({ disease, confidence }: ResultCardProps) => {
  if (!disease) return null;

  return (
    <div
      id="result"
      className="max-w-xl mx-auto mt-10 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-3xl p-8 shadow-2xl"
    >
      <h2 className="text-3xl font-bold mb-6 text-center">
        Prediction Result
      </h2>

      <div className="space-y-4 text-center">
        <div>
          <p className="text-lg opacity-90">Detected Disease</p>
          <h3 className="text-3xl font-bold mt-1">{disease}</h3>
        </div>

        <div>
          <p className="text-lg opacity-90">Confidence</p>
          <p className="text-2xl font-semibold mt-1">{confidence}%</p>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;