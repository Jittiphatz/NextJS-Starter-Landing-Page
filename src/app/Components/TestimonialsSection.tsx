"use client";

import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TestimonialsSection: React.FC = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const testimonialVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
    };

    return (
        <section data-aos="fade-up" className="overflow-hidden py-16 md:py-24 bg-gradient-to-br from-blue-500 to-indigo-600">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    Review from our customers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <motion.div
                        ref={ref}
                        variants={testimonialVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.5 }}
                        className="bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300"
                    >
                        <p className="text-gray-600">“This site has grown my business by 200%!”</p>
                        <span className="block mt-10 font-semibold text-pink-500">- Lisa</span>
                    </motion.div>
                    <motion.div
                        ref={ref}
                        variants={testimonialVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.5 }}
                        className="bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300"
                    >
                        <p className="text-gray-600">“Easy to use and looks great on mobile!”</p>
                        <span className="block mt-10 font-semibold text-red-600">- John Wick</span>
                    </motion.div>
                    <motion.div
                        ref={ref}
                        variants={testimonialVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.5 }}
                        className="bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300"
                    >
                        <p className="text-gray-600">“This company made the website very convenient for me.”</p>
                        <span className="block mt-4 font-semibold text-yellow-600">- Luke Holland</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;