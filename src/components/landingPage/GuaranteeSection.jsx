import React from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaClock, FaHeart } from 'react-icons/fa';

const GuaranteeSection = () => {
    const guarantees = [
        {
            icon: <FaLock className="text-5xl" />,
            title: "Fixed-Price Guarantee",
            description: "Your quote is your final cost. No hidden extras. Ever.",
            detail: "Why we can promise this: 16 years experience, fixed supplier contracts, in-house trades."
        },
        {
            icon: <FaClock className="text-5xl" />,
            title: "6-Month Completion",
            description: "Or we pay your rent.",
            detail: "In writing. Legally binding. We've hit this deadline on 92% of our builds."
        },
        {
            icon: <FaHeart className="text-5xl" />,
            title: "Design Happiness",
            description: "Unlimited revisions until you love it. No charge.",
            detail: "Your home, your way. We don't move forward until you're 100% satisfied."
        }
    ];

    return (
        <section className="py-lg md:py-xl bg-white">
            <div className="container mx-auto px-4 md:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-neutral-900 mb-4">
                        Our Triple-Lock Guarantee
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
                        The Only Builder in Melbourne Who Dares
                    </p>
                </div>

                {/* Guarantees Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
                    {guarantees.map((guarantee, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="text-center"
                        >
                            <div className="flex justify-center mb-6 text-primary">
                                {guarantee.icon}
                            </div>
                            <h3 className="text-2xl font-semibold mb-3 text-neutral-900">
                                {guarantee.title}
                            </h3>
                            <p className="text-xl mb-4 text-neutral-700 font-medium">
                                {guarantee.description}
                            </p>
                            <p className="text-sm text-neutral-600 leading-relaxed">
                                {guarantee.detail}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <a
                        href="#"
                        className="inline-block text-primary hover:text-primary-dark font-medium underline transition-colors"
                    >
                        Read the Full Guarantee Terms →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default GuaranteeSection;
