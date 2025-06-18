import Footer from './Footer';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-y-auto pt-16 pb-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
