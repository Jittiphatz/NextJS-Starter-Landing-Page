"use client";
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "motion/react"
import Link from 'next/link';


const CallToActionSection: React.FC = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <section data-aos="fade-up" className="bg-black py-16 md:py-24 text-white">
            <div className="container mx-auto px-6 md:px-12 text-center">
                <h2 className="text-3xl font-bold mb-6">
                Ready to take your business to the next level?
                </h2>
                <p className="text-lg opacity-80 mb-8">
                Don't delay! Start for free today and experience something new that will make your business grow exponentially.
                </p>
                <Link href="#">
                    <motion.button
                        className="bg-white hover:bg-gray-100 text-indigo-600 font-bold py-3 px-8 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onHoverStart={() => console.log('hover started!')}
                    >
                        Get Free trial
                    </motion.button>
                </Link>


            </div>
        </section>
    );
};

export default CallToActionSection;