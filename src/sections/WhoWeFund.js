import { FaBriefcase, FaCar, FaUtensils, FaTooth, FaStore, FaHeart } from 'react-icons/fa';
import { FaScissors } from "react-icons/fa6";

const WhoWeFund = () => {
    const fundingGroups = [
        {
            title: "Small to Moderate Businesses",
            description: "We provide funding to small and moderate businesses, helping them thrive in a competitive market.",
            icon: <FaBriefcase className="text-4xl mb-2" />
        },
        {
            title: "Automotive Repair Shops",
            description: "Our loans assist automotive repair shops in acquiring tools, equipment, and working capital.",
            icon: <FaCar className="text-4xl mb-2" />
        },
        {
            title: "Bars and Restaurants",
            description: "We support bars and restaurants in expanding their operations or renovating their spaces.",
            icon: <FaUtensils className="text-4xl mb-2" />
        },
        {
            title: "Salons",
            description: "Funding for salons helps enhance their services and improve customer experience.",
            icon: <FaScissors className="text-4xl  mb-2" />
        },
        {
            title: "Dental Offices",
            description: "We provide financial assistance to dental offices for new equipment and office expansions.",
            icon: <FaTooth className="text-4xl mb-2" />
        },
        {
            title: "Numerous Retail Locations",
            description: "We fund a variety of retail businesses to enhance their inventory and customer experience.",
            icon: <FaStore className="text-4xl  mb-2" />
        },
        {
            title: "Used Car Dealerships",
            description: "Our loans support used car dealerships in purchasing inventory and expanding their lot.",
            icon: <FaCar className="text-4xl mb-2" />
        },
        {
            title: "Health Companies",
            description: "We assist health companies in acquiring necessary resources and expanding their services.",
            icon: <FaHeart className="text-4xl  mb-2" />
        },
        {
            title: "Many More!",
            description: "We are open to funding a diverse range of businesses beyond those listed here.",
            icon: <FaBriefcase className="text-4xl mb-2" />
        }
    ];

    return (
          <div className='pt-[80px]'>
            <div className="h-full lg:h-screen p-4 mt-1 bg-slate-100 overflow-hidden">
                <h2 className="text-4xl font-bold mb-6 text-center underline-thick">Who We Fund</h2>
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center max-w-7xl mx-auto gap-x-16 gap-y-4 flex-wrap">
                    {fundingGroups.map((group, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-xl flex flex-col items-center transition-transform transform hover:scale-105 h-full w-80 text-[#FB7A41]  hover:bg-[#FB7A41] hover:text-white  ">
                            {group.icon}
                            <h3 className="text-xl font-semibold mb-2 text-center text-black">{group.title}</h3>
                            <p className="text-gray-600 text-center">{group.description}</p>
                        </div>
                    ))} 
                </div>
            </div>
        </div>
    );
};

export default WhoWeFund;
