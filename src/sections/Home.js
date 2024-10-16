import React from 'react';
import { FaTwitter, FaFacebook,FaLinkedin } from "react-icons/fa";


export default function Home() {
    return (
        <>
            <div className="h-screen pt-16 md:pt-36 ">
                <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-7xl lg:gap-x-16 lg:grid-cols-2 ">

                        <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                            <img src="https://c8.alamy.com/comp/E6PKKB/successful-business-deal-with-handshake-E6PKKB.jpg" alt="deal" className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full hover:scale-125 transition-transform duration-300" loading="lazy" />
                            <img src="https://media.istockphoto.com/id/1008861200/photo/stack-of-one-hundred-dollars-notes.jpg?s=612x612&w=0&k=20&c=Q5Dl6Giw7iWOSWgjy5fnkEyRCTgxT8cJyFIAbOMo7TA=" alt="offer" className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-36 hover:scale-125 transition-transform duration-300" loading="lazy" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThJAgw8aDXEZwxqCtT7szQvNOc3h38iEkR7g&s" alt="dollar" className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-36 hover:scale-125 transition-transform duration-300" loading="lazy" />
                        </div>

                        <div className='text-2xl mt-2 col-start-1 sm:col-span-2 lg:mt-[-50px] lg:row-start-1 lg:col-span-1  w-full md:w-[600px] h-full p-0 md:p-10 '>
                            <h1 className='text-6xl text-[#FB7A41] font-bold mb-2'>Get Your Loan Approved Fast!</h1>
                            <p className="mt-8 text-2xl leading-[1.5] ">
                                At <span className='italic font-semibold font-serif'>this APP Name </span>,Our vision is to be your partner in realizing your business dreams, whether that means expanding your beauty salon, strengthening your attorney firm, or growing your convenience store
                            </p>
                            <div className='flex gap-4 mt-10 '>
                                <button class="bg-[#FB7A41] text-white hover:outline hover:outline-[#FB7A41] hover:text-black hover:bg-transparent  font-bold py-2 px-4 rounded transition duration-300">
                                    Apply Now</button>
                                <button class="outline outline-[#FB7A41] hover:text-white hover:bg-[#FB7A41] font-bold py-2 px-4 rounded transition duration-300">
                                    Services</button>
                            </div>
                            <div className='flex items-center gap-3 mt-5 text-[#FB7A41]'>
                                <p className='text-black font-semibold'>Follow us</p>
                                <span className='hover:text-black'>
                                    <FaFacebook />
                                </span>
                                <span className='hover:text-black'>
                                    <FaTwitter />
                                </span>
                                <span className='hover:text-black'>
                                    <FaLinkedin />
                                </span>
                            </div>

                        </div>
                    </div>
                </main>
            </div>

        </>
    )
}