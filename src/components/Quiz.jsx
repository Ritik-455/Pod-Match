import React from 'react'
import Goals from '../assets/images/webp/quiz.webp'
import { Arrow } from '../common/icon'

const Quiz = () => {
    return (
        /////////////////// Quiz 6th section //////////////////////////////
        <>
            <div className=" container  max-w-[540px] md:max-w-[920px] lg:max-w-[992px] xl:max-w-[1200px] 2xl:max-w-[1164px]">
                <div className="row flex-col-reverse lg:flex-row py-7 lg:py-[35px] xl:py-[70px]" id="pricing">
                    <div className="col-12 lg:col-6 flex flex-col lg:justify-end items-center lg:items-start mt-3 lg:mt-0" data-aos="fade-down">
                        <div className="">
                            <div className="relative">
                                <p className='font-graph-normal text-lg md:text-xl lg:text-2xl lg:leading-[33.6px] text-black max-w-[558px]'>Take the Quiz to Achieve Your Podcasting Goals Faster and More Accurately</p>
                                <p className='font-graph-semi text-2xxl bg-[linear-gradient(180deg,#6F69F2_0%,#403d8c00_100%)] hidden lg:inline-block text-transparent bg-clip-text absolute top-[-100%] opacity-10'>05</p>
                            </div>
                            <p className='font-graph-med text-sm md:text-base text-lightgrey mt-2 md:mt-4 max-w-[548px]'>Discover your path to podcasting success with our tailored quiz. In just a few minutes, uncover insights to enhance your podcast's growth, efficiency, and impact. Whether you're a novice or a seasoned podcaster, our quiz offers personalized strategies to help you reach your goals faster and more accurately. Take the quiz today and elevate your podcasting journey!</p>
                            <div className="flex gap-[12px] items-end mt-3 md:mt-5 lg:mt-8 cursor-pointer">
                                <Arrow />
                                <p className='font-graph-semi text-sm md:text-base bg-[linear-gradient(90deg,#815CC8_0%,#1BABFE_100%)] inline-block text-transparent bg-clip-text'>Take The Quiz Now</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 lg:col-6 flex justify-center" data-aos="fade-up">
                        <img src={Goals} alt="Goals" className=' max-w-[508px] w-full shadow-3xl' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quiz