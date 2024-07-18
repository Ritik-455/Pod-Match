import React from 'react'
import Avatar from '../assets/images/webp/success.webp'
const Success = () => {
    return (
         /////////////////// Success 3rd section //////////////////////////////
        <>
            <div className="row lg:py-[35px] xl:py-[72px]" id="Features">
                <div className="col-12 lg:col-6 flex justify-center" data-aos="fade-up">
                    <img src={Avatar} alt="Avatar" className=' max-w-[508px] w-full shadow-3xl' />
                </div>
                <div className="col-12 lg:col-6 flex flex-col lg:justify-end items-center lg:items-start mt-3 lg:mt-0" data-aos="fade-down">
                    <div className="relative">
                        <p className='font-graph-normal text-lg md:text-xl lg:text-2xl lg:leading-[33.6px] text-black max-w-[558px]'>Implement the Secret to Surviving and Thriving as a Podcast Host.</p>
                        <p className='font-graph-semi text-2xxl bg-[linear-gradient(180deg,#6F69F2_0%,#403d8c00_100%)] inline-block text-transparent bg-clip-text absolute top-[-100%] opacity-10'>02</p>
                    </div>
                    <p className='font-graph-med text-sm md:text-base text-lightgrey mt-2 md:mt-4 max-w-[548px]'>Unlock the key to becoming a successful podcast host by mastering the art of engaging storytelling and consistent content delivery. Develop your unique voice, connect with your audience on a personal level, and stay ahead of trends with continuous learning. With the right strategies, you can not only survive but thrive in the competitive podcasting world.</p>
                </div>
            </div>
        </>
    )
}

export default Success