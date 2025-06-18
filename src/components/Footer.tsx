const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 text-center p-4 bg-white dark:bg-gray-900 text-black dark:text-white shadow">
      <p>© { new Date().getFullYear() } DevConnect. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
