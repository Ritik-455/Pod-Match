import React from 'react'
import Header from './Header'

const Herosection = () => {
    return (
        <>
            <Header />
            <div className="container py-10 xl:py-[70px] max-w-[540px] md:max-w-[920px] lg:max-w-[992px] xl:max-w-[1164px]">
                <div className=" flex flex-col items-center">
                    <h2 className=' text-2xl sm:text-3xl lg:text-4xl xl:text-xxl font-graph-semi xl:leading-[56.33px] text-black max-w-[665px] text-center'>5 Things You Can Do to Become a Better <span className='font-graph-black bg-[linear-gradient(90deg,#815CC8_0%,#1BABFE_100%)] inline-block text-transparent bg-clip-text'>Podcaster</span></h2>
                    <p className='font-graph-med text-xs sm:text-sm lg:text-base text-grey max-w-[593px] text-center mt-2 sm:mt-3 md:mt-[16px]'>Do you want to improve your podcast for your listeners? Here are 5 things you should do before releasing your next episode that will help you a lot.</p>
                </div>
            </div>
        </>
    )
}

export default Herosection