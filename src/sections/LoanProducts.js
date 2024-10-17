import React from 'react';
import {
  FaUserGraduate, FaBriefcase, FaDollarSign,
  FaHandHoldingUsd, FaStethoscope, FaHome, FaBuilding, FaHammer, FaCar, FaLeaf
        } from 'react-icons/fa';

const LoanProductsData = [
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
  {
    id: 5,
    title: 'Student Loans',
    description: 'Financial assistance for students to cover education costs.',
    icon: <FaUserGraduate className="text-4xl mb-4" />,
  }, {
    id: 6,
    title: 'Medical Loans',
    description: 'Loans specifically for covering medical expenses not covered by insurance.',
    icon: <FaStethoscope className="text-4xl mb-4" />,
  },
  {
    id: 7,
    title: 'Home Equity Loans',
    description: 'Borrow against your home’s equity for various financial needs.',
    icon: <FaHome className="text-4xl mb-4" />,
  },
  {
    id: 8,
    title: 'SBA Loans',
    description: 'Government-backed loans designed to help small businesses grow.',
    icon: <FaBuilding className="text-4xl mb-4" />,
  },
  {
    id: 9,
    title: 'Construction Loans',
    description: 'Short-term financing for building homes or other projects.',
    icon: <FaHammer className="text-4xl mb-4" />,
  },
  {
    id: 10,
    title: 'Bad Credit Loans',
    description: 'Loans available for individuals with poor credit histories.',
    icon: <FaUserGraduate className="text-4xl mb-4" />,
  },
  {
    id: 11,
    title: 'Inventory Financing',
    description: 'Loans to help businesses purchase inventory, using inventory as collateral.',
    icon: <FaHandHoldingUsd className="text-4xl mb-4" />,
  },
  {
    id: 12,
    title: 'Cosmetic Surgery Loans',
    description: 'Loans specifically for covering costs of elective procedures.',
    icon: <FaLeaf className="text-4xl mb-4" />,
  }
];

const LoanProducts = () => {
  return (
    <div className='h-full md:h-screen'>
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-center underline-thick  ">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LoanProductsData.map((service) => (
            <div key={service.id} className="bg-white shadow-xl rounded-lg p-6 text-center text-[#FB7A41] hover:scale-105 hover:bg-[#FB7A41] hover:text-white   ">
              <div className='flex justify-center items-center '>{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-black">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoanProducts;
