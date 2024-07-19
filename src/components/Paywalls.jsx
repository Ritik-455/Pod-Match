import React from 'react'
import { Warning } from '../common/icon'

const Paywalls = () => {
    return (
        //////////////// box-section
        <>
            <div className="bg-box-pattern pt-5 xl:pt-[90px]" id="about">
                <div className="container">
                    <div className="flex justify-center">
                        <div className="max-w-[1140px] w-full p-5 lg:px-0 lg:py-[54.5px] rounded-[32px] border-[4px] border-white bg-[linear-gradient(133.83deg,#00B9FF_3.77%,#6F69F2_81.07%)]" data-aos="zoom-in">
                            <p className=' font-graph-semi text-sm md:text-base lg:text-2xl text-white text-center'>Ready to Unleash Your Full Potential as a Podcast Host?</p>
                            <p className=' font-graph-semi text-xl md:text-2xl lg:text-2lg lg:leading-[52px] text-white text-center mt-3'>Take the Quiz to Discover Your Next Move!</p>
                            <div className=" flex justify-center mt-5"><button className='group relative overflow-hidden transition-all duration-300 ease-out font-graph-semi text-sm sm:text-base text-lightwhite p-[10px_15px] lg:p-[18px_24px] bg-[linear-gradient(102.79deg,#00C2CB_2.64%,#01BAFF_98.35%)] border border-white rounded-[57px]'>
                                <span className="ease absolute right-0 -mt-16 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-700 group-hover:-translate-x-[12rem]"></span>
                                Start The Quiz Now</button></div>
                            <div className="flex gap-3 justify-center  mt-5">
                                <Warning />
                                <p className='font-graph-med text-sm md:text-base text-white text-center'>100% Free (No Upsells or Paywalls)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Paywalls