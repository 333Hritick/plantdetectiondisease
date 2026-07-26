const TreatmentCard = ({ treatment }: { treatment: string }) => {
  if (!treatment) return null;

  return (
    <div className="max-w-3xl mx-auto mt-8 bg-white rounded-3xl shadow-xl p-8 border-l-8 border-green-600">
      <h2 className="text-3xl font-bold text-green-700 mb-4">
        Treatment Recommendation
      </h2>

      <div className="space-y-3 text-gray-700 text-lg leading-8">
        <p>{treatment}</p>
      </div>
    </div>
  );
};

export default TreatmentCard;