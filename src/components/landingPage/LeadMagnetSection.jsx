import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const LeadMagnetSection = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Integrate with email service (e.g., EmailJS, Mailchimp)
        console.log('Lead captured:', { email, phone });
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <section className="py-lg md:py-xl bg-primary text-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-white mb-4">
                            Thinking About Building in the Next 12 Months?
                        </h2>
                        <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-accent">
                            Download Our Free Melbourne Custom Home Cost Guide (2024)
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        {/* Left: Benefits */}
                        <div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
                                <h4 className="text-xl font-semibold mb-4">What's Inside:</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="text-accent text-xl">✓</span>
                                        <span>Itemized cost breakdown (foundation to fittings)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-accent text-xl">✓</span>
                                        <span>Hidden costs 90% of builders don't mention</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-accent text-xl">✓</span>
                                        <span>Kew/Hawthorn land + build scenarios</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-accent text-xl">✓</span>
                                        <span>Finance options checklist</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-accent text-xl">✓</span>
                                        <span>Questions to ask every builder</span>
                                    </li>
                                </ul>
                            </div>

                            {/* PDF Preview Mockup */}
                            <div className="hidden md:block bg-white/5 border-2 border-white/20 rounded-lg p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-10 bg-accent rounded flex items-center justify-center text-xs font-bold text-primary">
                                        PDF
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm">Cost_Guide_2024.pdf</p>
                                        <p className="text-xs text-white/70">28 pages • 2.4 MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div>
                            {!submitted ? (
                                <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 md:p-8">
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-neutral-700 font-medium mb-2">
                                            Email Address *
                                        </label>
                                        <div className="relative">
                                            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full pl-12 pr-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors text-neutral-900"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="phone" className="block text-neutral-700 font-medium mb-2">
                                            Phone (Optional)
                                        </label>
                                        <div className="relative">
                                            <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
                                            <input
                                                type="tel"
                                                id="phone"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                className="w-full pl-12 pr-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors text-neutral-900"
                                                placeholder="0412 XXX XXX"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-custom"
                                    >
                                        Download Now →
                                    </button>

                                    <p className="text-xs text-neutral-500 text-center mt-4">
                                        No spam. No sales calls. Just the guide.
                                    </p>
                                </form>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-white rounded-lg p-8 text-center"
                                >
                                    <div className="text-6xl mb-4">✓</div>
                                    <h4 className="text-2xl font-semibold mb-2 text-neutral-900">
                                        Check Your Email!
                                    </h4>
                                    <p className="text-neutral-600">
                                        Your cost guide is on its way to <strong>{email}</strong>
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadMagnetSection;
