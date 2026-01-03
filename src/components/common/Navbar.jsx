import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone } from 'react-icons/fa';
import { navItems } from "../../constants";

const FadeVariants = {
  hide: { opacity: 0, y: -20 },
  fade: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const isActive = (href) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm">
      <div className={`relative ${isSticky ? 'py-2' : 'py-4'} px-4 flex justify-between items-center`}>
        <Link to='/' className={`text-xl sm:text-2xl md:text-3xl font-bold text-primary truncate ${isSticky ? 'text-lg sm:text-xl md:text-2xl' : ''}`} style={{ fontFamily: 'Playfair Display, serif' }}>
          KEW GARDEN HOMES
        </Link>

        <div className="flex items-center gap-2 md:gap-4">
          {/* Phone Number - Desktop */}
          <a
            href="tel:+61398102800"
            className="hidden md:flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors"
          >
            <FaPhone className="text-sm" />
            <span>(03) 9810 2800</span>
          </a>

          {/* Phone Icon - Mobile */}
          <a
            href="tel:+61398102800"
            className="md:hidden bg-primary text-white p-2 rounded-full hover:bg-primary-dark transition-colors"
            aria-label="Call us"
          >
            <FaPhone className="text-sm" />
          </a>

          <Link
            className={`bg-primary text-white hover:bg-primary-dark px-3 md:px-4 py-2 text-sm md:text-base rounded-lg transition-colors ${isSticky ? 'text-xs md:text-sm py-1.5' : ''}`}
            to='/booking'
          >
            Free Consultation
          </Link>
          <button
            className={`bg-primary text-white hover:bg-primary-dark px-3 md:px-4 py-2 text-sm md:text-base rounded-lg transition-colors ${isSticky ? 'text-xs md:text-sm py-1.5' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-br from-black/95 to-neutral-900/95 backdrop-blur-md z-40 flex flex-col items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <button
              className="absolute top-2 right-2 md:top-4 md:right-4 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm md:text-base transition-colors"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              CLOSE
            </button>
            <nav className="flex flex-col items-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.25 } }}
                whileTap={{ scale: 0.95 }}
                variants={FadeVariants}
                initial="hide"
                animate="fade"
                transition={{ delay: 0 }}
              >
                <Link
                  to="/"
                  className={`relative text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl py-1 px-2 sm:px-3 md:px-4 lg:px-5 transition-all text-customWhite duration-400 ${isActive('/') ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-800' : 'hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-green-500 to-green-800 text-customWhite'
                    }`}
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                  {isActive('/') && (
                    <motion.span
                      layoutId="underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-green-800"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.25 }}
                    ></motion.span>
                  )}
                  {!isActive('/') && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5 transition-width duration-500 w-0 group-hover:w-full bg-gradient-to-r from-green-500 to-green-800"
                    ></span>
                  )}
                </Link>
              </motion.div>
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, transition: { duration: 0.25 } }}
                  whileTap={{ scale: 0.95 }}
                  variants={FadeVariants}
                  initial="hide"
                  animate="fade"
                  transition={{ delay: (index + 1) * 0.1 }}
                >
                  <Link
                    to={item.href}
                    className={`relative text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl py-1 px-2 sm:px-3 md:px-4 lg:px-5 transition-all text-customWhite duration-400 ${isActive(item.href) ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-800' : 'hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-green-500 to-green-800 text-customWhite'
                      }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <motion.span
                        layoutId="underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-green-800"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.25 }}
                      ></motion.span>
                    )}
                    {!isActive(item.href) && (
                      <span
                        className="absolute bottom-0 left-0 right-0 h-0.5 transition-width duration-500 w-0 group-hover:w-full bg-gradient-to-r from-green-500 to-green-800"
                      ></span>
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;