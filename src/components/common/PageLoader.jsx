import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate initial load (or wait for critical resources)
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1200); // 1.2 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
                >
                    <div className="text-center">
                        {/* Logo/Brand */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            className="mb-8"
                        >
                            <h1 className="text-3xl md:text-4xl font-bold text-primary" style={{ fontFamily: 'Playfair Display, serif' }}>
                                KEW GARDEN PROJECTS
                            </h1>
                            <p className="text-sm text-neutral-600 mt-2">Building Your Dream Home</p>
                        </motion.div>

                        {/* Animated Loading Bar */}
                        <div className="w-64 h-1 bg-neutral-200 rounded-full overflow-hidden mx-auto">
                            <motion.div
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 1, ease: 'easeInOut' }}
                                className="h-full bg-gradient-to-r from-primary to-accent"
                            />
                        </div>

                        {/* Subtle Dots Animation */}
                        <div className="flex items-center justify-center gap-2 mt-6">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0.3 }}
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                        ease: 'easeInOut'
                                    }}
                                    className="w-2 h-2 rounded-full bg-primary"
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PageLoader;
