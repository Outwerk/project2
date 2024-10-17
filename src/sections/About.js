import { motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  // Observer for component
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when in view
          observer.unobserve(ref.current); // Stop observing after it becomes visible
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current); // Start observing the component
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // Cleanup observer on unmount
      }
    };
  }, []);

  return (
    <div className='h-full bg-slate-100 md:p-4 py-2 pb-8 mt-5 md:mt-0 z-0'>
      <div className="flex flex-col md:flex-row items-start justify-between max-w-7xl md:mx-auto gap-0 md:gap-20 px-4 md:px-2 lg:px-4 overflow-auto z-0">
        
        {/* Content  */}
        <motion.div
          ref={ref}
          style={{ zIndex: 0 }}
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: isVisible ? 0 : -500, opacity: isVisible ? 1 : 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="flex-1 min-w-[200px] lg:min-w-[300px] px-1 lg:px-4"
        >
          <h2 className="text-4xl underline-thick font-bold mb-4">About Us</h2>
          <p className="mb-2">
            We are dedicated to providing fast and reliable loan services. Our mission is to empower individuals with the financial resources they need to achieve their goals.
          </p>
          <p>
            Founded in 2020, we have helped thousands of customers secure the funding they need. Our commitment to customer satisfaction sets us apart, and we are proud to be a trusted partner in your financial journey.
          </p>

          <h2 className="text-xl font-bold mt-7 mb-2">Our Vision</h2>
          <p>
            We envision a world where everyone has the financial resources to achieve their goals, whether it's buying a home, funding education, or expanding a business. Our dedicated team is committed to breaking down barriers to financial access and making the loan application process as simple and straightforward as possible.
          </p>

          <h2 className="text-xl font-bold mb-2 mt-7">Our Commitment</h2>
          <p>
            At This App Name, we are committed to your success. We strive to provide exceptional service, competitive rates, and a hassle-free experience. Your financial well-being is our priority, and we take pride in helping you navigate your financial journey.
          </p>

          <h2 className="text-xl font-bold mt-7 mb-2">Why Choose Us?</h2>
          <ul className='flex flex-col gap-3'>
            <li>Fast and Easy Applications: Our online application process is designed for speed and simplicity, ensuring you can access the funds you need without unnecessary delays.</li>
            <li>Dedicated Support: Our team of financial experts is here to guide you through every step of the application process, answering any questions you may have.</li>
            <li>Transparent Terms: We believe in honesty and clarity. You'll always know what to expect, with no hidden fees or surprises.</li>
          </ul>
        </motion.div>


        {/* Image  */}
        <motion.div
          style={{ zIndex: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0, duration: isVisible ? 2 : 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="flex-1 min-w-[350px] md:min-w-[380px] lg:min-w-[600px] px-1 lg:px-4 mt-10 md:mt-0">
          <img
            src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="About Us"
            className="w-screen md:w-full h-full rounded-lg shadow-md"
          />
        </motion.div>
      </div>
    </div>
  );
}
