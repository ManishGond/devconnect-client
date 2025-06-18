const SkeletonPostCard = () => {
  return (
    <div className="border rounded shadow p-4 mb-4 animate-pulse bg-white dark:bg-gray-800">
      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3"></div>
    </div>
  );
};

export default SkeletonPostCard;
