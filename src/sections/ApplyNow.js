import React from 'react';

const ApplyNow = ({ setShowPage }) => {
    return (
        <div className='h-full lg:h-screen'>

            <div className="max-w-4xl mx-auto p-6 mt-4 mb-5">
                <h2 className="text-4xl font-bold mb-6 text-center underline-thick">Apply Now</h2>
                <p className="mb-4 text-gray-700 text-center">
                    We'd love to hear from you! Whether you have a question about our services, need assistance, or just want to share your feedback,
                    feel free to reach out to us using the form below.
                </p>
                <p className="mb-8 text-gray-700 text-center">
                    Our team is here to help you, and we aim to respond within 24 hours. Your thoughts and inquiries are important to us!
                </p>
                <form className="bg-white shadow-lg rounded-lg p-6">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            required
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#FB7A41]"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#FB7A41]"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            required
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#FB7A41]"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded-md p-2 bg-[#FB7A41] text-white  hover:outline hover:outline-[#FB7A41] hover:text-black hover:bg-transparent  font-bold transition duration-300"
                    >
                        Send Message
                    </button>
                </form>

                <button
                    type="submit"
                    className="bg-[#FB7A41] text-white hover:outline hover:outline-[#FB7A41] hover:text-black hover:bg-transparent  font-bold py-3 px-6 rounded transition duration-300 mt-4"
                    onClick={() => setShowPage(false)}
                >
                    go Back
                </button>
            </div>
        </div>
    );
};

export default ApplyNow;
