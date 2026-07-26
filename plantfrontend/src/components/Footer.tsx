const Footer = () => {
  return (
    <footer className="bg-green-900 text-white mt-16 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Plant Disease Detector</h2>
          <p className="text-green-200 mt-1">
            AI based smart solution for healthy crops 🌱
          </p>
        </div>

        <div className="flex gap-6 text-sm md:text-base">
          <a href="#home" className="hover:text-green-300">Home</a>
          <a href="#upload" className="hover:text-green-300">Upload</a>
          <a href="#result" className="hover:text-green-300">Result</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;