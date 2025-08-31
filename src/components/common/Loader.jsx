function Loader() {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      <span className="ml-3 text-gray-600">Loading...</span>
    </div>
  );
}

export default Loader;
