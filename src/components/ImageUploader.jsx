export default function ImageUploader({ onImage }) {
  function handleFile(file) {
    if (file && file.type.startsWith('image/')) onImage(file);
  }
  return (
    <div className="flex flex-col items-center gap-4 p-6 border-2 border-dashed border-blue-300 rounded-2xl bg-blue-50">
      <p className="text-gray-500 text-sm">Upload a wound photo or use your camera</p>
      <label className="cursor-pointer bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700">
        Choose Image
        <input type="file" accept="image/*" className="hidden"
          onChange={e => handleFile(e.target.files[0])} />
      </label>
      <label className="cursor-pointer bg-green-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-green-700">
        Open Camera
        <input type="file" accept="image/*" capture="environment" className="hidden"
          onChange={e => handleFile(e.target.files[0])} />
      </label>
    </div>
  );
}