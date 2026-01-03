import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PortfolioTeaser = () => {
    const projects = [
        {
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
            title: 'The Hawthorn Project',
            specs: '4 bed, 3 bath, 2 car',
            completed: 'December 2023',
            timeline: '5.5 months',
            suburb: 'Hawthorn'
        },
        {
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
            title: 'Kew Contemporary',
            specs: '5 bed, 4 bath, pool',
            completed: 'August 2023',
            timeline: '6 months',
            suburb: 'Kew'
        },
        {
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
            title: 'Camberwell Classic',
            specs: '3 bed renovation',
            completed: 'March 2024',
            timeline: '4 months',
            suburb: 'Camberwell'
        }
    ];

    return (
        <section className="py-lg md:py-xl bg-neutral-50">
            <div className="container mx-auto px-4 md:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-neutral-900 mb-4">
                        Recent Builds in Your Neighborhood
                    </h2>
                    <p className="text-lg text-neutral-600">
                        Real homes. Real families. Real timelines.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            className="bg-white rounded-lg overflow-hidden shadow-custom hover:shadow-premium transition-shadow duration-300"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2 text-neutral-900">
                                    {project.title}
                                </h3>
                                <p className="text-neutral-600 mb-3">{project.specs}</p>
                                <div className="space-y-1 mb-4 text-sm text-neutral-600">
                                    <p>
                                        <span className="font-medium">Completed:</span> {project.completed}
                                    </p>
                                    <p>
                                        <span className="font-medium">Timeline:</span> {project.timeline}
                                    </p>
                                    <p>
                                        <span className="font-medium">Location:</span> {project.suburb}
                                    </p>
                                </div>
                                <Link
                                    to="/homes"
                                    className="inline-block text-primary hover:text-primary-dark font-medium transition-colors"
                                >
                                    View Full Gallery →
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        to="/homes"
                        className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-custom"
                    >
                        See All 38 Completed Homes
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PortfolioTeaser;
