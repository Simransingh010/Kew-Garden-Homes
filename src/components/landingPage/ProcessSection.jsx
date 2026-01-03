import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaFileContract, FaHammer, FaKey } from 'react-icons/fa';

const ProcessSection = () => {
    const steps = [
        {
            number: '01',
            icon: <FaCalendar className="text-4xl" />,
            title: 'Free Design Consult',
            description: 'Meet at our Kew office or your land. 60 minutes.',
            timeline: 'Book your session →',
            details: 'We discuss your vision, budget, and timeline. No obligation.'
        },
        {
            number: '02',
            icon: <FaFileContract className="text-4xl" />,
            title: 'Fixed-Price Quote',
            description: 'Detailed breakdown, no hidden costs.',
            timeline: 'Approved in 48 hours',
            details: 'Transparent pricing. Lock in your cost before we start.'
        },
        {
            number: '03',
            icon: <FaHammer className="text-4xl" />,
            title: 'Build (6 Months)',
            description: 'Weekly photo updates, direct builder contact.',
            timeline: 'You\'re never in the dark',
            details: 'In-house trades. No surprises. On schedule.'
        },
        {
            number: '04',
            icon: <FaKey className="text-4xl" />,
            title: 'Handover & Warranty',
            description: '12-month workmanship guarantee included.',
            timeline: 'Move in with confidence',
            details: 'Final walkthrough. Keys in hand. Support ongoing.'
        }
    ];

    return (
        <section className="py-lg md:py-xl bg-white">
            <div className="container mx-auto px-4 md:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-neutral-900 mb-4">
                        Your Home, Built in 4 Simple Steps
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
                        Transparent process. Clear timelines. No complexity.
                    </p>
                </div>

                {/* Desktop: Horizontal Timeline */}
                <div className="hidden md:block mb-12">
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-neutral-200 -translate-y-1/2" />

                        <div className="grid grid-cols-4 gap-8 relative">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.5 }}
                                    className="relative"
                                >
                                    {/* Step Number Circle */}
                                    <div className="flex justify-center mb-6">
                                        <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-custom">
                                            {step.number}
                                        </div>
                                    </div>

                                    {/* Icon */}
                                    <div className="flex justify-center mb-4 text-accent">
                                        {step.icon}
                                    </div>

                                    {/* Content */}
                                    <div className="text-center">
                                        <h3 className="text-xl font-semibold mb-2 text-neutral-900">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-neutral-600 mb-2">
                                            {step.description}
                                        </p>
                                        <p className="text-xs text-primary font-medium mb-2">
                                            {step.timeline}
                                        </p>
                                        <p className="text-xs text-neutral-500">
                                            {step.details}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile: Vertical Timeline */}
                <div className="md:hidden space-y-8 mb-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            className="flex gap-4"
                        >
                            {/* Step Number */}
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold shadow-custom">
                                    {step.number}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2 text-accent">
                                    {step.icon}
                                    <h3 className="text-xl font-semibold text-neutral-900">
                                        {step.title}
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 mb-1">
                                    {step.description}
                                </p>
                                <p className="text-xs text-primary font-medium mb-1">
                                    {step.timeline}
                                </p>
                                <p className="text-xs text-neutral-500">
                                    {step.details}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <a
                        href="#contact"
                        className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-custom"
                    >
                        Start Your Free Consultation
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
