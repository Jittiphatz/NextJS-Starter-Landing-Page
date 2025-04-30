"use client"
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
    { name: 'Easy to Use', description: 'The interface is simple and user-friendly. Even beginners can get started right away.' },
    { name: 'Time-Saving', description: 'Reduces repetitive steps, helping you focus on more important tasks.' },
    { name: 'Boosts Efficiency', description: 'Tools are designed to increase productivity and minimize errors.' },
    { name: 'Device Compatibility', description: 'Accessible anytime, anywhere — no matter what device you use.' },
];

const FeaturesSection: React.FC = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section data-aos="fade-up" className="overflow-hidden py-16 md:py-24 bg-gradient-to-br from-blue-500 to-indigo-600 backdrop-blur-md">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Outstanding features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <div key={feature.name} className="bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
                            <div className="flex items-center mb-4">
                                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
                                <h3 className="text-xl font-semibold text-gray-700">{feature.name}</h3>
                            </div>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;