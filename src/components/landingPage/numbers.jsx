import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaUsers, FaMapMarkerAlt, FaAward, FaShieldAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

gsap.registerPlugin(ScrollTrigger);

const Card = ({ icon, title, subtitle, delay }) => {
  return (
    <motion.div
      className="relative p-6 text-neutral-900 rounded-xl bg-white hover:bg-neutral-50 transition-all duration-300 shadow-custom hover:shadow-premium h-full min-h-[280px] border border-neutral-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative z-10 flex flex-col items-center text-center h-full">
        <div className="flex justify-center mb-4 text-5xl text-primary" aria-hidden="true">{icon}</div>
        <h3 className="text-xl font-semibold mb-3 text-neutral-900">{title}</h3>
        <p className="text-base text-neutral-600 leading-relaxed">{subtitle}</p>
      </div>
    </motion.div>
  );
};

Card.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired
};

const WhyChooseUs = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      statsRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText.replace(/[^0-9]/g, '');
        const speed = 100;

        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };

      gsap.fromTo(counter,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: counter,
            start: 'top bottom-=100',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
            onEnter: updateCount
          }
        }
      );
    });

  }, []);

  return (
    <div className="w-full bg-neutral-50">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <h2 className="text-4xl font-bold text-neutral-900 mb-4 text-center">Why Kew Families Choose Us</h2>
        <p className="text-center text-lg text-neutral-600 mb-12 max-w-2xl mx-auto">
          We're not like other builders. Here's why.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              icon: <FaUsers />,
              title: 'In-House Trades',
              subtitle: 'Your home built by our permanent team of 12 licensed tradespeople. No subcontractors. No strangers.'
            },
            {
              icon: <FaMapMarkerAlt />,
              title: 'Local Experts',
              subtitle: 'We only build in Boroondara (Kew, Hawthorn, Camberwell). We know council regulations inside-out.'
            },
            {
              icon: <FaAward />,
              title: 'HIA Award Winner',
              subtitle: 'Best Custom Home $750k-$1M, 2023. Recognized for quality and innovation.'
            },
            {
              icon: <FaShieldAlt />,
              title: 'Triple Guarantee',
              subtitle: 'Fixed-price, 6-month completion, unlimited design revisions. Risk-free building.'
            },
          ].map((item, index) => (
            <Card
              key={index}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      </div>

      <div ref={statsRef} className="container mx-auto px-4 py-12 md:py-16" aria-label="Company Statistics">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { target: 38, label: "Completed Homes" },
            { target: 16, label: "Years Experience" },
            { target: 12, label: "In-House Tradespeople" },
            { target: 127, label: "5-Star Reviews" }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <span
                className="counter text-5xl font-bold text-primary mb-2 block"
                data-target={item.target}
                aria-live="polite"
              >
                0
              </span>
              <p className="text-lg text-neutral-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;