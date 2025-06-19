import { useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import { FaSpinner } from 'react-icons/fa';

type SplashScreenProps = {
  onFinish: () => void;
};

const SplashScreen = ({ onFinish }: SplashScreenProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#a668ff] via-[#9bc6fc] to-[#97e1fb]
">

      {/* LOGO + TEXT Row */ }
      <div className="flex items-center space-x-4">

        {/* Logo - stays fixed in center */ }
        <motion.img
          src={ logo }
          alt="DevConnect Logo"
          className="w-32 h-32"
          initial={ { scale: 0 } }
          animate={ { scale: 1 } }
          transition={ { type: 'spring', stiffness: 120 } }
        />

        {/* Text slides in from LEFT OF LOGO to its right */ }
        <motion.h1
          className="text-5xl font-extrabold text-white"
          style={ {
            WebkitTextStroke: '0.5px black',
            ['textStroke' as any]: '0.5px black',
          } }
          initial={ { x: -80, opacity: 0 } }
          animate={ { x: 0, opacity: 1 } }
          transition={ { type: 'spring', stiffness: 80, delay: 0.5 } }
        >
          DevConnect
        </motion.h1>

      </div>

      {/* Spinner with breathing effect */ }
      <motion.div
        className="mt-6"
        animate={ { scale: [1, 1.1, 1] } }
        transition={ { repeat: Infinity, duration: 1.5 } }
      >
        <FaSpinner className="text-white text-3xl animate-spin" />
      </motion.div>
    </div>
  );
};

export default SplashScreen;
