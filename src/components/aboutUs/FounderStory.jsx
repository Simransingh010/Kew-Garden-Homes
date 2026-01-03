import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaCertificate, FaMapMarkerAlt, FaHardHat } from 'react-icons/fa';

const FounderStory = () => {
    return (
        <section className="py-lg md:py-xl bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="text-sm uppercase tracking-wider text-accent font-semibold">Our Story</span>
                        <h1 className="text-neutral-900 mt-2 mb-6">
                            Built on Trust.<br />
                            Proven by Results.
                        </h1>

                        <div className="space-y-4 text-neutral-700 leading-relaxed">
                            <p>
                                <strong>Garden Kew Homes</strong> was founded in 2008 with a simple mission: build custom homes the way they should be built—<strong>on time, on budget, with zero surprises</strong>.
                            </p>

                            <p>
                                After 16 years and 38 completed homes across Kew, Hawthorn, Camberwell, and Canterbury, we've perfected a process that most builders still struggle with: <strong>delivering exactly what we promise</strong>.
                            </p>

                            <p>
                                Unlike volume builders who juggle 50+ projects, we work with a <strong>permanent team of 12 licensed tradespeople</strong>. No subcontractors. No strangers on your site. Just skilled craftsmen who take pride in their work.
                            </p>

                            <p className="text-primary font-semibold">
                                Our reputation is built on one guarantee: <strong>If we say it, we do it.</strong>
                            </p>
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <FaAward className="text-primary text-2xl flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold text-neutral-900">HIA Award Winner</p>
                                    <p className="text-sm text-neutral-600">Best Custom Home 2023</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <FaCertificate className="text-primary text-2xl flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold text-neutral-900">CDB-U 49183</p>
                                    <p className="text-sm text-neutral-600">Licensed & Insured</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-primary text-2xl flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold text-neutral-900">Boroondara Only</p>
                                    <p className="text-sm text-neutral-600">Local expertise</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <FaHardHat className="text-primary text-2xl flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold text-neutral-900">12 In-House Trades</p>
                                    <p className="text-sm text-neutral-600">No subcontractors</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {/* Main Image */}
                            <div className="col-span-2 rounded-lg overflow-hidden shadow-custom">
                                <img
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
                                    alt="Modern custom home exterior"
                                    className="w-full h-64 object-cover"
                                    loading="lazy"
                                />
                            </div>

                            {/* Two smaller images */}
                            <div className="rounded-lg overflow-hidden shadow-custom">
                                <img
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop"
                                    alt="Custom home interior"
                                    className="w-full h-48 object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <div className="rounded-lg overflow-hidden shadow-custom">
                                <img
                                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop"
                                    alt="Construction quality details"
                                    className="w-full h-48 object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Floating Stats Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-premium">
                            <p className="text-4xl font-bold">16+</p>
                            <p className="text-sm">Years Building in Kew</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FounderStory;
