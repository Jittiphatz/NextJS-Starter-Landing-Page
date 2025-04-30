"use client";
import Image from 'next/image';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { motion } from "motion/react"

const HeroSection: React.FC = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <section data-aos="fade-up" data-aos-delay="100" className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white py-24 md:py-32 backdrop-blur-md">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
                <div className="mb-8 md:mb-0 md:mr-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Modern Website for Your Business
                    </h1>
                    <p className="text-lg md:text-xl opacity-80 mb-6">
                        Consequat occaecat eu nisi et voluptate mollit consectetur reprehenderit.
                    </p>

                    <div className="flex space-x-4">
                        <Link href="#">
                            <motion.button
                                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg "
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onHoverStart={() => console.log('hover started!')}
                            >
                                Get Started Free
                            </motion.button>
                        </Link>
                        <Link href="#">
                            <motion.button
                                className="bg-white hover:bg-gray-100 text-indigo-600 font-bold py-3 px-6 rounded-full"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onHoverStart={() => console.log('hover started!')}
                            >
                                Free trial
                            </motion.button>
                        </Link>
                    </div>
                </div>
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl">
                    <Image
                        src="https://c4.wallpaperflare.com/wallpaper/388/898/571/hd-images-nature-pc-1920x1080-wallpaper-preview.jpg"
                        alt="Product Image"
                        fill
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;