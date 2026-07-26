const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="w-16 h-16 border-4 border-green-200 border-t-green-700 rounded-full animate-spin"></div>
      <p className="mt-4 text-green-700 font-semibold text-lg">
        Detecting disease...
      </p>
    </div>
  );
};

export default Loader;