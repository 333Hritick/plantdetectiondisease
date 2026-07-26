// Navbar.jsx
const Navbar = () => {
  return (
    <nav className="bg-green-700 text-white shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <img
          src="/leaf.png"
          alt="logo"
          className="w-10 h-10 rounded-full bg-white p-1"
        />
        <h1 className="text-2xl font-bold tracking-wide">
          Plant Disease Detector
        </h1>
      </div>

      <ul className="hidden md:flex gap-8 font-medium">
        <li><a href="#home" className="hover:text-green-200">Home</a></li>
        <li><a href="#upload" className="hover:text-green-200">Upload</a></li>
        <li><a href="#result" className="hover:text-green-200">Result</a></li>
        <li><a href="#about" className="hover:text-green-200">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;