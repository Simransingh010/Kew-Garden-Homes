import React from 'react';
import { motion } from 'framer-motion';

const TeamSection = () => {
    const teamMembers = [
        {
            name: 'Michael Patterson',
            role: 'Founder & Master Builder',
            credentials: 'CDB-U 49183 | 25+ Years Experience',
            description: 'Former project manager at Metricon, Michael started Garden Kew Homes to prove custom building could be predictable, transparent, and stress-free.',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
        },
        {
            name: 'Sarah Mitchell',
            role: 'Design Director',
            credentials: 'Registered Architect | ARBV',
            description: 'Sarah brings 12 years of high-end residential design experience. She ensures every home reflects the client\'s vision while maximizing functionality.',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop'
        },
        {
            name: 'David Chen',
            role: 'Construction Manager',
            credentials: 'Licensed Builder | HIA Member',
            description: 'David oversees all 12 in-house trades and manages site coordination. His obsessive attention to detail ensures on-time, on-budget delivery.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
        }
    ];

    return (
        <section className="py-lg md:py-xl bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <span className="text-sm uppercase tracking-wider text-accent font-semibold">Meet The Team</span>
                    <h2 className="text-neutral-900 mt-2 mb-4">
                        The People Behind Your Build
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        No faceless corporations. When you build with us, you work directly with these three people.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Info */}
                            <h3 className="text-xl font-semibold text-neutral-900 mb-1">
                                {member.name}
                            </h3>
                            <p className="text-primary font-medium mb-2">
                                {member.role}
                            </p>
                            <p className="text-sm text-neutral-600 mb-3 font-mono">
                                {member.credentials}
                            </p>
                            <p className="text-neutral-700 leading-relaxed text-sm">
                                {member.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-12 p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg max-w-4xl mx-auto"
                >
                    <p className="text-neutral-700 leading-relaxed">
                        <strong className="text-primary">Direct Access:</strong> Unlike volume builders where you're bounced between project managers, you get Michael's direct mobile number. When you call, he answers. When you have a question, you get an answer within 4 hours. That's our promise.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default TeamSection;
