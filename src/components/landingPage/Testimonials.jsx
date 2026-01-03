import React, { useState, useEffect } from 'react';
import { testimonials } from '../../constants';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    ScrollTrigger.batch('.testimonial-card', {
      onEnter: batch => gsap.to(batch, { opacity: 1, stagger: 0.15, duration: 1 }),
      onLeave: batch => gsap.to(batch, { opacity: 0.1, stagger: 0.15, duration: 1 }),
      onEnterBack: batch => gsap.to(batch, { opacity: 1, stagger: 0.15, duration: 1 }),
      onLeaveBack: batch => gsap.to(batch, { opacity: 0.1, stagger: 0.15, duration: 1 }),
      start: 'top 80%',
      end: 'bottom 20%',
    });
  }, []);

  const showMoreTestimonials = () => {
    gsap.to('.testimonial-card', {
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
    });
    setVisibleCount(prevCount => Math.min(prevCount + 6, testimonials.length));
  };

  // Placeholder testimonial text (to be replaced with real testimonials)
  const getTestimonialText = (index) => {
    const placeholders = [
      "Working with Garden Kew Homes was the best decision we made. Their fixed-price guarantee meant no surprises, and they delivered our home exactly on time. The attention to detail was incredible.",
      "From our first consultation to getting the keys, the entire process was transparent and professional. The team kept us updated every week with photos and progress reports. Highly recommend!",
      "We were nervous about building, but Garden Kew Homes made it stress-free. The unlimited design revisions meant we got exactly the home we wanted, and the quality is outstanding.",
      "The team at Garden Kew Homes knows Kew inside-out. They helped us navigate council approvals and built our dream home on a challenging sloping block. Couldn't be happier!",
      "After comparing five different builders, Garden Kew Homes stood out with their genuine guarantees and in-house trades. No subcontractors meant consistent quality throughout.",
      "Our home was completed in just under 6 months, exactly as promised. The workmanship is exceptional, and we've had zero issues since moving in. Worth every dollar.",
    ];
    return placeholders[index % placeholders.length];
  };

  return (
    <section className="py-lg md:py-xl bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-neutral-900 mb-4 text-center">
          Trusted by Kew Families
        </h2>
        <p className="text-center text-lg text-neutral-600 mb-12 max-w-2xl mx-auto">
          Real clients, real experiences, real results
        </p>

        <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
          {testimonials.slice(0, visibleCount).map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card w-full px-4 py-6 flex flex-col md:flex-row items-start gap-4 md:gap-6 bg-neutral-50 rounded-lg shadow-custom hover:shadow-premium transition-shadow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                className="w-16 h-16 rounded-full border-2 border-primary flex-shrink-0 object-cover"
                src={testimonial.image}
                alt={testimonial.user}
                loading="lazy"
              />
              <div className="flex-1">
                <p className="italic text-neutral-700 mb-4 leading-relaxed">
                  "{getTestimonialText(index)}"
                </p>
                <div>
                  <h4 className="font-bold text-primary text-lg">{testimonial.user}</h4>
                  <span className="text-sm text-neutral-600">{testimonial.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleCount < testimonials.length && (
          <div className="text-center mt-12">
            <button
              onClick={showMoreTestimonials}
              className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Show More Reviews
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;