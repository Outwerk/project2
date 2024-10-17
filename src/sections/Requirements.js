import React from 'react';
import { motion } from 'framer-motion';
import { FaMoneyCheck, } from 'react-icons/fa';  
import { TbLicense } from "react-icons/tb";
import { FaSheetPlastic } from "react-icons/fa6";

const Requirements = () => {
    const requirements = [
        {
            title: "Business Statement",
            description: "4 Months Business Bank Statement",
            icon: <FaSheetPlastic className="text-4xl mb-2" />
        },
        {
            title: "Check",
            description: "A Void Check",
            icon: <FaMoneyCheck className="text-4xl mb-2" />
        },
        {
            title: "Driving License",
            description: "A Driving License",
            icon: <TbLicense className="text-4xl  mb-2" />
        },

    ];

    return (
        <div className="h-screen w-full bg-slate-100 p-6 mt-5 overflow-auto">
            <h2 className="text-4xl font-bold mb-8 text-center underline-thick">A FASTER WAY TO
                FUND YOUR DREAMS</h2>


            <div className='ms-1 md:ms-52 mt-10 text-xl'>
                <h1 className='text-2xl mb-8  uppercase'>Requirement</h1>
                <p>Please send us a signed "Skylight Funding Loan Application"</p>
                <p>with the following documents to e-mail: apps@skylightfunding.com</p>
            </div>

            <div className="max-w-2xl ms-1 md:ms-52 mt-10">
                {requirements.map((req, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center mb-6"
                    >
                        <div className="mr-4 text-[#FB7A41]">{req.icon}</div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-1">{req.title}</h3>
                            <p className="text-gray-600">{req.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div> 
          
        </div>
    );
};

export default Requirements;
