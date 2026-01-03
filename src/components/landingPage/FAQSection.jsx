import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How much does a custom home cost in Kew?",
            answer: "Our custom homes in Kew typically range from $650,000 to $1.2M depending on size, finishes, and site complexity. This includes everything: design, permits, construction, landscaping, and driveway. We provide a detailed fixed-price quote before you commit—no hidden costs."
        },
        {
            question: "Do I need to own land first?",
            answer: "No. While many clients come to us with land already purchased, we can help you find and evaluate suitable blocks in Kew, Hawthorn, Camberwell, and Canterbury. We'll assess slopes, access, council restrictions, and build feasibility before you buy."
        },
        {
            question: "What if I don't like the initial design?",
            answer: "We offer unlimited design revisions at no extra charge. Your architect works with you until you're 100% satisfied. Most clients finalize their design within 2-3 revision rounds, but we never rush you. Your home, your way."
        },
        {
            question: "Can you build on a sloping block?",
            answer: "Absolutely. 60% of our projects are on sloping or challenging sites. We specialize in maximizing views, managing drainage, and designing split-level homes that work with the land (not against it). Sloping sites often create the most stunning homes."
        },
        {
            question: "How is fixed-price different from an estimate?",
            answer: "An estimate can change. A fixed-price contract is legally binding—your quote is your final cost. If material prices increase or unexpected site conditions arise, we absorb the difference. You're protected from cost blowouts."
        },
        {
            question: "What happens if materials costs increase during construction?",
            answer: "We absorb it. Your price is locked in from the day you sign the contract. This is possible because we pre-purchase materials and have long-term fixed contracts with our suppliers. You pay the agreed amount—nothing more."
        },
        {
            question: "Do you offer finance assistance?",
            answer: "Yes. We partner with three Melbourne-based mortgage brokers who specialize in construction loans. They'll help you navigate finance, maximize your borrowing capacity, and structure progress payments. We can introduce you at your consultation."
        },
        {
            question: "What's your current wait time?",
            answer: "Consultations: We can typically see you within 1 week. Builds: Our Q2 2024 schedule is full. We're currently booking builds for Q3 2024 (July-September start dates). Early booking ensures you secure your preferred timeline."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-lg md:py-xl bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-neutral-900 mb-4">
                            Your Questions, Answered
                        </h2>
                        <p className="text-lg text-neutral-600">
                            Everything you need to know before you build
                        </p>
                    </div>

                    {/* FAQ Accordion */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border-2 border-neutral-200 rounded-lg overflow-hidden hover:border-primary transition-colors"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
                                >
                                    <span className="text-lg font-semibold text-neutral-900 pr-4">
                                        {faq.question}
                                    </span>
                                    <span className="flex-shrink-0 text-primary text-xl">
                                        {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeOut' }}
                                        >
                                            <div className="px-6 pb-6 text-neutral-700 leading-relaxed border-t border-neutral-200 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-12 text-center">
                        <p className="text-lg text-neutral-700 mb-4">
                            Still have questions?
                        </p>
                        <a
                            href="tel:+61398102800"
                            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-xl transition-colors"
                        >
                            <span>Call us: (03) 9810 2800</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
