import React from 'react'
import Call from '../assets/images/webp/action.webp'

const Action = () => {
    return (
            /////////////////// Action 5th section //////////////////////////////
        <>
            <div className="container  max-w-[540px] md:max-w-[920px] lg:max-w-[992px] xl:max-w-[1200px] 2xl:max-w-[1164px]">
                <div className="row lg:py-[35px] xl:py-[70px]">
                    <div className="col-12 lg:col-6 flex justify-center" data-aos="fade-up">
                        <img src={Call} alt="Call" className=' max-w-[508px] w-full shadow-3xl' />
                    </div>
                    <div className="col-12 lg:col-6 flex flex-col lg:justify-end items-center lg:items-start mt-3 lg:mt-0" data-aos="fade-down">
                        <div className="relative">
                            <p className='font-graph-normal text-lg md:text-xl lg:text-2xl lg:leading-[33.6px] text-black max-w-[558px]'>Be Intentional with Listeners to Yield Better Results for Your Podcast</p>
                            <p className='font-graph-semi text-2xxl bg-[linear-gradient(180deg,#6F69F2_0%,#403d8c00_100%)] hidden lg:inline-block text-transparent bg-clip-text absolute top-[-100%] opacity-10'>04</p>
                        </div>
                        <p className='font-graph-med text-sm md:text-base text-lightgrey mt-2 md:mt-4 max-w-[548px]'>Being intentional with your listeners can significantly enhance your podcast's impact. Start by understanding your audience's preferences and tailoring your content to meet their needs. Engage with them through interactive elements like Q&A sessions or social media, and seek feedback to continually improve. By prioritizing listener engagement and delivering valuable content, you'll foster a loyal and growing audience for your podcast.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Action