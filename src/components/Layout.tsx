import Footer from './Footer';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-100">
      <Navbar />
      <main className="flex-1 overflow-y-auto pt-16 pb-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
