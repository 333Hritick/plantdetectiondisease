import React from "react";

interface UploadFormProps {
  onImageUpload: (file: File) => void | Promise<void>;
}

function UploadForm({ onImageUpload }: UploadFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onImageUpload(e.target.files[0]);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 border border-green-100">
      <label className="block text-lg font-semibold text-gray-700 mb-4">
        Upload Plant Leaf Image
      </label>

      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="block w-full text-sm text-gray-700
        file:mr-4 file:py-3 file:px-5
        file:rounded-xl file:border-0
        file:bg-green-600 file:text-white
        file:font-medium hover:file:bg-green-700
        cursor-pointer"
      />
    </div>
  );
}

export default UploadForm;