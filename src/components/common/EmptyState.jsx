function EmptyState({ message }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-gray-500">
      <img
        src="https://cdn-icons-png.flaticon.com/512/4076/4076500.png"
        alt="Empty"
        className="w-24 h-24 mb-4 opacity-70"
      />
      <p className="text-lg">{message}</p>
    </div>
  );
}

export default EmptyState;
