import React from 'react';

const Contact = () => {
    return (
      <div className='h-full lg:h-screen'>
        
        <div className="max-w-4xl mx-auto p-6 ">
            <h2 className="text-4xl font-bold mb-6 text-center underline-thick">Contact Us</h2>
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
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full bg-[#FB7A41] text-white font-semibold rounded-md p-2 hover:bg-[#e36f3d] transition duration-200"
                >
                    Send Message
                </button>
            </form>
        </div>
        </div>
    );
};

export default Contact;
