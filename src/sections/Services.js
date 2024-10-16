import React from 'react';
import { FaDollarSign, FaHome, FaCar, FaBriefcase } from 'react-icons/fa';

const servicesData = [
  {
    id: 1,
    title: 'Personal Loans',
    description: 'Get quick personal loans to fulfill your immediate financial needs.',
    icon: <FaDollarSign className="text-4xl mb-4" />,
  },
  {
    id: 2,
    title: 'Home Loans',
    description: 'Affordable home loans with competitive interest rates.',
    icon: <FaHome className="text-4xl mb-4" />,
  },
  {
    id: 3,
    title: 'Auto Loans',
    description: 'Finance your dream car with our flexible auto loan options.',
    icon: <FaCar className="text-4xl mb-4" />,
  },
  {
    id: 4,
    title: 'Business Loans',
    description: 'Support your business growth with tailored loan solutions.',
    icon: <FaBriefcase className="text-4xl mb-4" />,
  },
];

const Services = () => {
  return (
    <div className='h-screen '>

      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-center underline-thick  ">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <div key={service.id} className="bg-white shadow-xl rounded-lg p-6 text-center hover:scale-110">
              <div className='flex justify-center items-center text-[#FB7A41]'>{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
