const RightSideBar = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
      <div className="flex flex-col items-center space-y-3">
        <div className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-full" />
        <h2 className="font-semibold text-center">Manish Gond</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
          Full-Stack Dev • ML Enthusiast
        </p>
        <button className="mt-2 text-sm bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;
