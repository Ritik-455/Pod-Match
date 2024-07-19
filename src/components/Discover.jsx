import React from 'react'
import { Arrow } from '../common/icon'
import Podcast from '../assets/images/webp/podcast.webp'
import Simple from '../assets/images/webp/simple.webp'
import Success from './Success'
import Action from './Action'
import Quiz from './Quiz'

const Discover = () => {
    return (
        /////////////////// poadcast 2nd section //////////////////////////////
        <>
            <div className="container max-w-[540px] md:max-w-[920px] lg:max-w-[992px] xl:max-w-[1200px] 2xl:max-w-[1164px]" id="education">
                <div className="row flex-col-reverse lg:flex-row py-7 lg:py-[35px] xl:py-[70px]">
                    <div className="col-12 lg:col-6 flex flex-col lg:justify-end items-center lg:items-start mt-3 lg:mt-0" data-aos="fade-up">
                        <div className="">
                            <div className="relative">
                                <p className='font-graph-normal text-lg md:text-xl lg:text-2xl lg:leading-[33.6px] text-black max-w-[558px]'>Discover the Shocking Reality of the Podcasting Industry</p>
                                <p className='font-graph-semi text-2xxl bg-[linear-gradient(180deg,#6F69F2_0%,#403d8c00_100%)] text-transparent bg-clip-text absolute top-[-100%] opacity-10 hidden lg:inline-block'>01</p>
                            </div>
                            <p className='font-graph-med text-sm md:text-base text-lightgrey mt-2 md:mt-4 max-w-[548px]'>Dive deep into the untold truths of the podcasting world. Uncover the hidden challenges, fierce competition, and the real struggles faced by creators. Learn about the industry’s rapid growth and what it takes to stand out in this crowded space. Discover the surprising realities that every podcaster must navigate to succeed.</p>
                            <div className="flex gap-[12px] items-end mt-3 md:mt-5 lg:mt-8 cursor-pointer">
                                <Arrow />
                                <p className='font-graph-semi text-sm md:text-base bg-[linear-gradient(90deg,#815CC8_0%,#1BABFE_100%)] inline-block text-transparent bg-clip-text'>View the Report</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 lg:col-6 flex justify-center" data-aos="fade-down">
                        <img src={Podcast} alt="Podcast" className=' max-w-[508px] w-full shadow-3xl' />
                    </div>
                </div>
                <Success />
                {/***************************** Simple 4th section ************************/}
                <div className="row flex-col-reverse lg:flex-row py-7 lg:py-[35px] xl:py-[70px]" id="community">
                    <div className="col-12 lg:col-6 flex flex-col lg:justify-end items-center lg:items-start mt-3 lg:mt-0" data-aos="zoom-in">
                        <div className="">
                            <div className="relative">
                                <p className='font-graph-normal text-lg md:text-xl lg:text-2xl lg:leading-[33.6px] text-black max-w-[558px]'>Avoid Falling Behind in the Ever-Changing World of Podcasting</p>
                                <p className='font-graph-semi text-2xxl bg-[linear-gradient(180deg,#6F69F2_0%,#403d8c00_100%)] text-transparent bg-clip-text absolute top-[-100%] opacity-10 hidden lg:inline-block'>03</p>
                            </div>
                            <p className='font-graph-med text-sm md:text-base text-lightgrey mt-2 md:mt-4 max-w-[548px]'>Dive deep into the untold truths of the podcasting world. Uncover the hidden challenges, fierce competition, and the real struggles faced by creators. Learn about the industry’s rapid growth and what it takes to stand out in this crowded space. Discover the surprising realities that every podcaster must navigate to succeed.</p>
                            <div className="flex gap-[12px] items-end mt-3 md:mt-5 lg:mt-8 cursor-pointer">
                                <Arrow />
                                <p className='font-graph-semi text-sm md:text-base bg-[linear-gradient(90deg,#815CC8_0%,#1BABFE_100%)] inline-block text-transparent bg-clip-text'>Stay In The Loop</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 lg:col-6 flex justify-center" data-aos="zoom-in">
                        <img src={Simple} alt="Podcast" className=' max-w-[508px] w-full shadow-3xl' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Discover