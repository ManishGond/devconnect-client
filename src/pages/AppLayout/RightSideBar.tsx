const RightSideBar = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md space-y-4">
      {/* Profile Info */ }
      <div className="flex flex-col items-center space-y-3">
        <img
          src="https://avatars.githubusercontent.com/u/91088463?v=4"
          alt="Manish Gond"
          className="w-16 h-16 rounded-full"
        />
        <h2 className="font-semibold text-center text-gray-800 dark:text-white">
          Manish Gond
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
          Full-Stack Developer (MERN) • ML Enthusiast
        </p>
        <a
          href="https://www.linkedin.com/in/manishgond/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-sm bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded text-center inline-block"
        >
          View LinkedIn Profile
        </a>

      </div>

      {/* GitHub Stats */ }
      <div className="space-y-3">
        <a
          href="https://github.com/manishgond"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src="https://camo.githubusercontent.com/3269f365149d0a7020decc768e93c3a6c579aabe0b111012183c7d6ae3d09267/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d6d616e697368676f6e64266c61796f75743d636f6d70616374267468656d653d746f6b796f6e69676874"
            alt="GitHub Top Languages"
            className="w-full rounded-lg"
          />
        </a>
        <a
          href="https://github.com/manishgond"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src="https://camo.githubusercontent.com/cc5994b82baf0f108a554cd9e1e670a3480fc6e17f903315f2bcb6aaf629fb04/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d6d616e697368676f6e642673686f775f69636f6e733d74727565267468656d653d746f6b796f6e69676874"
            alt="GitHub Stats Card"
            className="w-full rounded-lg"
          />
        </a>
      </div>

      {/* Additional Options */ }
      <div className="border-t pt-3 space-y-2">
        <button className="w-full text-left text-sm text-gray-600 dark:text-gray-300 hover:underline">
          Saved Items
        </button>
        <button className="w-full text-left text-sm text-gray-600 dark:text-gray-300 hover:underline">
          Groups
        </button>
        <button className="w-full text-left text-sm text-gray-600 dark:text-gray-300 hover:underline">
          Newsletters
        </button>
        <button className="w-full text-left text-sm text-gray-600 dark:text-gray-300 hover:underline">
          Events
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;
