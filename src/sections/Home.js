import React from 'react'

export default function Home() {
    return (
        <>
            <div className="h-screen pt-16 md:pt-36 bg-slate-300">
                <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-7xl lg:gap-x-16 lg:grid-cols-2 ">

                        <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                            <img src="https://c8.alamy.com/comp/E6PKKB/successful-business-deal-with-handshake-E6PKKB.jpg" alt="deal" className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full hover:scale-125 transition-transform duration-300" loading="lazy" />
                            <img src="https://media.istockphoto.com/id/1008861200/photo/stack-of-one-hundred-dollars-notes.jpg?s=612x612&w=0&k=20&c=Q5Dl6Giw7iWOSWgjy5fnkEyRCTgxT8cJyFIAbOMo7TA=" alt="offer" className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-36 hover:scale-125 transition-transform duration-300" loading="lazy" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThJAgw8aDXEZwxqCtT7szQvNOc3h38iEkR7g&s" alt="dollar" className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-36 hover:scale-125 transition-transform duration-300" loading="lazy" />
                        </div>

                        <div className='text-2xl mt-2 col-start-1 sm:col-span-2 lg:mt-[-50px] lg:row-start-1 lg:col-span-1  w-full md:w-[600px] h-full p-0 md:p-10 '>
                            <h1 className='text-6xl text-teal-200 font-bold mb-2'>Cloud Funding Solution</h1>
                            <p className="mt-4 text-2xl leading-[1.2] ">
                            At "this APP",Our vision is to be your partner in realizing your business dreams, whether that means expanding your beauty salon, strengthening your attorney firm, or growing your convenience store
                            </p>
                            <div className='flex gap-4 mt-10 '>
                            <button class="bg-teal-300 text-white hover:outline hover:outline-teal-300 hover:text-black hover:bg-transparent  font-bold py-2 px-4 rounded transition duration-300">
                                Contact</button>
                            <button class="outline outline-teal-300 hover:text-white hover:bg-teal-300 font-bold py-2 px-4 rounded transition duration-300">
                                Service</button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        </>
    )
}