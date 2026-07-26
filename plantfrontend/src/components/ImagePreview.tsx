interface ImagePreviewProps {
  image: string | null;
}

function ImagePreview({ image }: ImagePreviewProps) {
  if (!image) return null;

  return (
    <div className="bg-white rounded-3xl shadow-lg p-4 border border-green-100">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Image Preview
      </h2>

      <img
        src={image}
        alt="Uploaded Plant"
        className="w-full h-80 object-cover rounded-2xl"
      />
    </div>
  );
}

export default ImagePreview;