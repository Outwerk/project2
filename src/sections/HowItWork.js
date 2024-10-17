import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaClipboardCheck, FaDollarSign, FaUserCheck, FaHandshake, FaPaperPlane } from 'react-icons/fa';

const HowItWorks = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    const steps = [
        {
            title: "Step 1: Application",
            description: "Fill out our easy online application form to get started.",
            icon: <FaClipboardCheck className="text-4xl text-blue-500 mb-2" />
        },
        {
            title: "Step 2: Submit",
            description: "Provide us with your last three months bank and credit card statements.",
            icon: <FaUserCheck className="text-4xl text-green-500 mb-2" />
        },
        {
            title: "Step 3: Approval",
            description: "Receive a quick decision on your application.",
            icon: <FaDollarSign className="text-4xl text-orange-500 mb-2" />
        },
        {
            title: "Step 4: Agreement",
            description: "We offer tailored solutions designed to meet your needs and foster business growth effectively",
            icon: <FaHandshake className="text-4xl text-purple-500 mb-2" />
        },
        {
            title: "Step 5: Assigned",
            description: "Every client receives a dedicated financial advisor to guide them throughout the application process.",
            icon: <FaPaperPlane className="text-4xl text-red-500 mb-2" />
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once the component is visible
                }
            },
            {
                threshold: 0.1 // Trigger when 10% of the component is visible
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div id='steps' className="h-screen p-4 mt-5 relative" ref={ref}>
            <h2 className="text-4xl font-bold mb-8 text-center text-white underline-thick">How It Works</h2>

            <div className="flex flex-col md:flex-row items-start justify-center max-w-7xl mx-auto gap-x-3 ">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: (steps.length - index) * 63 - (index * index - index * 7.5) } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 h-[220px] w-64 me-[5px]"
                    >
                        {step.icon}
                        <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
                        <p className="text-gray-600 text-center">{step.description}</p>
                    </motion.div>
                ))}
            </div>
            <div className='absolute bottom-5 left-[32%] text-white'> 
                <h1 className='max-w-5xl font-semibold text-2xl tracking-wide'>BEEN TURNED DOWN FOR A SMALL BUSINESS LOAN? CONSIDER A MERCHANT CASH ADVANCE. THESE ARE SMALLER BUT EASIER TO OBTAIN. THEY ARE ALSO PERFECT FOR THOSE LOOKING TO GET THEIR RESPECTIVE BUSINESS OFF THE GROUND, BUT LAST THE ESSENTIAL START-UP CAPITAL REQUIRED TO DO IT PROPERLY.</h1>
            </div>
        </div>
    );
};

export default HowItWorks;
