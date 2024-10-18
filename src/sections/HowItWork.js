import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaClipboardCheck, FaDollarSign, FaUserCheck, FaHandshake, FaPaperPlane } from 'react-icons/fa';

const HowItWorks = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);


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
        <>
            <div id="howItWork" className='h-full md:h-screen md:pt-28 '>
                <h2 className="text-3xl font-bold mb-6 text-center underline-thick uppercase">How It Works</h2>

                <div className='md:ms-52 p-3 flex flex-col items-center md:items-start justify-center gap-8'>



                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 100 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 1 * 0.5 }}
                        className='text-2xl flex items-start gap-8 '>
                        <div className='text-7xl'>1 </div>
                        <div className='mt-5'>
                            <div className='flex md:flex-row flex-col-reverse gap-2 '>
                                <p className='text-3xl'>Application</p>
                                <FaClipboardCheck className="text-3xl md:text-4xl text-[#FB7A41] mb-2" />
                            </div>

                            <p className='text-xl'>Fill out our easy online application form to get started.</p>
                        </div>
                    </motion.div>

                    <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 2 * 0.5 }}
                        className='text-2xl flex items-start gap-8 '>
                        <div className='text-7xl'>2 </div>
                        <div className='mt-5'>
                            <div className='flex md:flex-row flex-col-reverse gap-2 '>
                                <p className='text-3xl' >Statement</p>
                                <FaPaperPlane className="text-3xl md:text-4xl text-[#FB7A41] mb-2" />
                            </div>
                            <p className='text-xl'>Provide us with your last three months bank and credit card statements.</p>
                        </div>
                    </motion.div>





                    <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 3 * 0.5 }}
                        className='text-2xl flex items-start gap-8 '>
                        <div className='text-7xl'>3 </div>
                        <div className='mt-5'>
                            <div className='flex md:flex-row flex-col-reverse gap-2 '>
                                <p className='text-3xl'>Agreement</p>
                                <FaHandshake className="text-3xl md:text-4xl text-[#FB7A41] mb-2" />
                            </div>
                            <p className='text-xl'>We offer tailored solutions designed to meet your needs and foster business growth effectively.</p>
                        </div>
                    </motion.div>






                    <motion.div
                         initial={{ opacity: 0, y: 100 }}
                         animate={isVisible ? { opacity: 1, y: 0 } : {}}
                         transition={{ duration: 0.5, delay: 4 * 0.5 }}
                        className='text-2xl flex items-start gap-8 '>
                        <div className='text-7xl'>4 </div>
                        <div className='mt-5'>
                            <div className='flex md:flex-row flex-col-reverse gap-2 '>
                                <p className='text-3xl'> Assigned</p>
                                <FaUserCheck className="text-3xl md:text-4xl text-[#FB7A41] mb-2" />
                            </div>
                            <p className='text-xl'>Every client receives a dedicated financial advisor to guide them throughout the application process.</p>
                        </div>
                    </motion.div>








                </div>



            </div>




        </>
    );
};

export default HowItWorks;
