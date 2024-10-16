import React from 'react'

export default function About() {
  return (
    <div className='h-full bg-slate-50  md:p-4 py-2 pb-8 mt-52 md:mt-0'>
       <div className="flex flex-col md:flex-row items-start justify-between max-w-7xl md:mx-auto gap-0 md:gap-20 px-4 md:px-2 lg:px-4 overflow-auto">
            <div className="flex-1 min-w-[200px] lg:min-w-[300px] px-1 lg:px-4  ">
                <h2 className="text-4xl underline-thick font-bold mb-4 ">About Us</h2>
                <p className="mb-2">
                    We are dedicated to providing fast and reliable loan services. Our mission is to empower individuals with the financial resources they need to achieve their goals.
                </p>
                <p>
                    Founded in 2020, we have helped thousands of customers secure the funding they need. Our commitment to customer satisfaction sets us apart, and we are proud to be a trusted partner in your financial journey.
                </p>
            </div>

            
            <div className="flex-1 min-w-[350px] md:min-w-[380px] lg:min-w-[600px] px-1 lg:px-4 mt-10 md:mt-0">
                <img
                    src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with your image URL
                    alt="About Us"
                    className="w-screen md:w-full h-full rounded-lg shadow-md"
                />
            </div>
        </div>
    </div>
  )
}
