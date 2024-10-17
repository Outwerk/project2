import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="bg-gray-800 p-4 fixed w-full  top-0 z-50">
                <div className="flex items-center justify-between md:justify-center">
                    <div className="text-white text-lg font-bold me-4">My Logo</div>
                    <div className="hidden md:flex space-x-4 outline outline-white rounded-full py-3 px-8">
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            className="text-gray-300 hover:text-white cursor-pointer"
                            activeClass="font-bold text-white border-b-2 border-[#FB7A41]"
                            spy={true}
                            exact="true"
                        >Home</Link>
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className="text-gray-300 hover:text-white cursor-pointer"
                            activeClass="font-bold text-white border-b-2 border-[#FB7A41]"
                            spy={true}
                            exact="true"
                        >About</Link>
                        <Link
                            to="services"
                            smooth={true}
                            duration={500}
                            className="text-gray-300 hover:text-white cursor-pointer"
                            activeClass="font-bold text-white border-b-2 border-[#FB7A41]"
                            spy={true}
                            exact="true"
                        >Services</Link>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="text-gray-300 hover:text-white cursor-pointer"
                            activeClass="font-bold text-white border-b-2 border-[#FB7A41]"
                            spy={true}
                            exact="true"
                        >Contact</Link>
                    </div>
                    <div className="absolute right-0 flex items-center md:hidden">
                        <button
                            onClick={toggleSidebar}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Sidebar for Mobile */}
            <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className={`fixed right-0 top-0 h-full bg-gray-900 w-64 p-4 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex justify-between items-center">
                        <div className="text-white text-lg font-bold border-b-2 border-green-300">Menu</div>
                        <button onClick={toggleSidebar} className="text-white">
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-4 flex flex-col gap-2">
                    <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            className="text-gray-300 hover:text-white cursor-pointer"
                            activeClass="font-bold text-gray-300 text-2xl underline decoration-green-300"
                            spy={true}
                            exact="true"
                            onClick={toggleSidebar}
                        >Home</Link>
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className="text-gray-300 hover:text-white cursor-pointer"
                            activeClass="font-bold text-gray-300 text-2xl underline decoration-green-300"
                            spy={true}
                            exact="true"
                            onClick={toggleSidebar}
                        >About</Link>
                        <Link
                            to="services"
                            smooth={true}
                            duration={500}
                            className="text-gray-300 hover:text-white cursor-pointer"
                            activeClass="font-bold text-gray-300 text-2xl underline decoration-green-300"
                            spy={true}
                            exact="true"
                            onClick={toggleSidebar}
                        >Services</Link>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="text-gray-300 hover:text-white cursor-pointer"
                            activeClass="font-bold text-gray-300 text-2xl underline decoration-green-300"
                            spy={true}
                            exact="true"
                            onClick={toggleSidebar}
                        >Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;