import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-100">
      <div className="flex max-w-7xl mx-auto px-4 py-6 gap-6">

        {/* Left Sidebar */ }
        <aside className="hidden lg:block w-1/4">
          <LeftSideBar />
        </aside>

        {/* Main Content */ }
        <main className="flex-1">
          { children }
        </main>

        {/* Right Sidebar */ }
        <aside className="hidden lg:block w-1/4">
          <RightSideBar />
        </aside>

      </div>
    </div>
  );
};

export default AppLayout;
