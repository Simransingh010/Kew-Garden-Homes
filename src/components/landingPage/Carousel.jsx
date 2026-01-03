import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import image1 from '../../assets/images/SiteImages/first.webp';
import image2 from '../../assets/images/SiteImages/2.webp';
import image3 from '../../assets/images/SiteImages/3.webp';
import image4 from '../../assets/images/SiteImages/4.webp';
import image5 from '../../assets/images/SiteImages/5.webp';
import image6 from '../../assets/images/SiteImages/6.webp';

const CarouselComponent = ({
  autoPlayInterval = 8000,
  transitionDuration = 0.8, // Increased for smoother transitions
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const timerRef = useRef(null);

  const images = [
    {
      url: image1,
      type: 'image',
      title: 'Build Your Dream Home in Melbourne',
      subtitle: 'for a Fixed Price. Guaranteed.',
      description: 'No Surprises. No Delays. No Excuses.'
    },
    {
      url: image2,
      type: 'image',
      title: '6-Month Build Guarantee',
      subtitle: 'or We Pay Your Rent',
      description: 'Legally binding. In writing. We deliver on time.'
    },
    {
      url: image3,
      type: 'image',
      title: 'In-House Trades',
      subtitle: 'No Subcontractors',
      description: 'Your home built by our permanent team of 12 licensed tradespeople.'
    },
    {
      url: image4,
      type: 'image',
      title: 'Kew\'s Most Trusted Builder',
      subtitle: 'Since 2008',
      description: 'HIA Award Winner 2023 • 4.9/5 from 127 Reviews'
    },
    {
      url: image5,
      type: 'image',
      title: 'Unlimited Design Revisions',
      subtitle: 'Until You Love It',
      description: 'No extra charge. Your vision, perfected.'
    },
    {
      url: image6,
      type: 'image',
      title: '38 Completed Homes',
      subtitle: 'All in Boroondara',
      description: 'Kew, Hawthorn, Camberwell, Canterbury. We know your area.'
    },
  ];

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(nextSlide, autoPlayInterval);
  }, [nextSlide, autoPlayInterval]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentIndex, resetTimer]);

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'ArrowLeft') {
      prevSlide();
    } else if (event.key === 'ArrowRight') {
      nextSlide();
    }
  }, [prevSlide, nextSlide]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleImageLoad = useCallback(() => {
    setIsLoading(false);
    setHasError(false);
  }, []);

  const handleImageError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
  }, []);

  // Preload next image
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    const img = new Image();
    img.src = images[nextIndex].url;
  }, [currentIndex, images]);

  // Touch event handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      nextSlide();
    }

    if (touchStart - touchEnd < -150) {
      prevSlide();
    }
  };

  return (
    <div
      className="relative w-full h-screen mx-auto"
      role="region"
      aria-roledescription="carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="overflow-hidden h-full">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              duration: transitionDuration,
              ease: [0.43, 0.13, 0.23, 0.96] // Custom easing for premium feel
            }}
            className="absolute inset-0"
          >
            {isLoading && <div className="absolute inset-0 flex items-center justify-center bg-gray-200">Loading...</div>}
            {hasError && <div className="absolute inset-0 flex items-center justify-center bg-red-200">Error loading image</div>}
            <img
              src={images[currentIndex].url}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover"
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
            <div className={`absolute inset-0 bg-gradient-to-b from-black/40 to-black/50`}></div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center text-white p-4"
            >
              <div className="max-w-4xl text-center">
                {/* Main Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight px-2 sm:px-4 mb-3 text-shadow-xl"
                >
                  {images[currentIndex].title}
                </motion.h1>

                {/* Subtitle */}
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                  className="text-2xl sm:text-3xl md:text-4xl font-semibold text-accent mb-4 text-shadow-lg"
                >
                  {images[currentIndex].subtitle}
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
                  className="text-lg sm:text-xl md:text-2xl mb-8 text-shadow-md max-w-2xl mx-auto"
                >
                  {images[currentIndex].description}
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.9, ease: [0.43, 0.13, 0.23, 0.96] }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <Link
                    to="/homes"
                    className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-premium text-base sm:text-lg w-full sm:w-auto"
                  >
                    See Our Completed Homes
                  </Link>
                  <a
                    href="#lead-magnet"
                    className="bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-primary text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-premium text-base sm:text-lg w-full sm:w-auto"
                  >
                    Download Free Cost Guide
                  </a>
                </motion.div>

                {/* Trust Bar */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 1.1 }}
                  className="mt-8 pt-6 border-t border-white/30 flex flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-base"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-accent">🏆</span>
                    <span>HIA Award Winner 2023</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent">⭐</span>
                    <span>4.9/5 (127 Reviews)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent">📍</span>
                    <span>Kew-Based Since 2008</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-primary' : 'bg-white'
              }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
          />
        ))}
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <FaArrowDown className="text-white text-2xl sm:text-3xl animate-bounce" />
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary/30 hover:bg-primary/50 text-white p-2 rounded-full transition-colors z-10"
        aria-label="Previous slide"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary/30 hover:bg-primary/50 text-white p-2 rounded-full transition-colors z-10"
        aria-label="Next slide"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default CarouselComponent;