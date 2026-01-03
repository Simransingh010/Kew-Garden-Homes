import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaUsers, FaClock, FaThumbsUp } from 'react-icons/fa';

const OurPillars = () => {
    const pillars = [
        {
            icon: <FaShieldAlt />,
            title: 'Fixed-Price Integrity',
            description: 'Your quote is legally binding. No hidden extras, no surprise costs, no budget blowouts. Ever.',
            stat: '100%',
            statLabel: 'Price Accuracy'
        },
        {
            icon: <FaClock />,
            title: 'On-Time Delivery',
            description: '6-month completion guarantee or we pay your rent. In writing. Because your timeline matters.',
            stat: '38/38',
            statLabel: 'On-Time Builds'
        },
        {
            icon: <FaUsers />,
            title: 'In-House Excellence',
            description: 'Our permanent team of 12 licensed tradespeople. No subcontractors, no strangers, consistent quality.',
            stat: '12',
            statLabel: 'Licensed Trades'
        },
        {
            icon: <FaThumbsUp />,
            title: 'Design Freedom',
            description: 'Unlimited revisions until you love it. No extra charge. Your home should be exactly what you envisioned.',
            stat: '4.9/5',
            statLabel: 'Client Satisfaction'
        }
    ];

    return (
        <section className="py-lg md:py-xl bg-neutral-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <span className="text-sm uppercase tracking-wider text-accent font-semibold">What Makes Us Different</span>
                    <h2 className="text-neutral-900 mt-2 mb-4">
                        Our Four Pillars
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        These aren't marketing claims. They're legally binding commitments in every contract we sign.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white rounded-lg p-6 shadow-custom hover:shadow-premium transition-shadow"
                        >
                            {/* Icon */}
                            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 text-primary text-3xl">
                                {pillar.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                                {pillar.title}
                            </h3>

                            {/* Description */}
                            <p className="text-neutral-700 leading-relaxed mb-4 text-sm">
                                {pillar.description}
                            </p>

                            {/* Stat */}
                            <div className="pt-4 border-t border-neutral-200">
                                <p className="text-3xl font-bold text-primary mb-1">{pillar.stat}</p>
                                <p className="text-xs text-neutral-600 uppercase tracking-wide">{pillar.statLabel}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <p className="text-lg text-neutral-700 mb-4">
                        Want to see these guarantees in writing?
                    </p>
                    <a
                        href="/process"
                        className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105"
                    >
                        View Our Process
                    </a>
                </div>
            </div>
        </section>
    );
};

export default OurPillars;
