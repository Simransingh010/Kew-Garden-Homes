import React from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

const StickyCallButton = () => {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:hidden">
            {/* Phone Button */}
            <a
                href="tel:+61398102800"
                className="flex items-center justify-center w-14 h-14 bg-primary hover:bg-primary-dark text-white rounded-full shadow-premium transition-all duration-300 hover:scale-110"
                aria-label="Call us now"
            >
                <FaPhone className="text-xl" />
            </a>

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/61398102800?text=Hi%20Garden%20Kew%20Homes%2C%20I%27d%20like%20to%20discuss%20building%20a%20custom%20home"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-premium transition-all duration-300 hover:scale-110"
                aria-label="Message us on WhatsApp"
            >
                <FaWhatsapp className="text-2xl" />
            </a>
        </div>
    );
};

export default StickyCallButton;
