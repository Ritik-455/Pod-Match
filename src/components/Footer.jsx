import React from 'react'
import Logo from '../assets/images/svg/footer-logo.svg'
import { Facebook, Help, Indeed, Insta, Location, Message, Pixel, Tiktok, Twitter, Youtube } from '../common/icon'
import { Data } from '../common/Helper'

const Footer = () => {
    const slicedata = Data.slice(0, 4)
    const slicedata2 = Data.slice(4, 12)
    const slicedata3 = Data.slice(12, 16)
    return (
        /////////////////// Footer//////////////////////////////
        <div className="bg-darkgrey">
            <div className="container max-w-[540px] md:max-w-[920px] lg:max-w-[992px] xl:max-w-[1164px]">
                <div className="row pt-[35px] xl:pt-[113px]">
                    <div className="col-12 sm:col-6 lg:col-4 order-1">
                        <img src={Logo} alt="Logo" className=' cursor-pointer' />
                        <p className=' max-w-[351px] font-graph-med text-base text-grey mt-[22.24px]'>PodMatch is the future standard for finding and booking podcast interviews. This is the quickest way to find guests for your podcast, and vice versa!</p>
                    </div>
                    <div className="col-6 sm:col-6 lg:col-4 xl:col-1 flex lg:justify-center md:justify-start mt-4 sm:mt-0 order-2">
                        <ul className=' flex gap-3.5 flex-col'>
                            <li className=' font-graph-semi text-base text-black'>Product </li>
                            {slicedata.map((data, index) => (
                                <li className=' relative w-fit'><a href="" className='after:absolute after:bg-violet-600 after:w-0 after:left-[50%] after:h-[2px] after:bottom-[-3px] hover:after:left-0 hover:after:w-full hover:after:duration-300 font-graph-med text-base text-grey'>{data.list}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-12 sm:col-6 md:col-4 xl:col-2 flex xl:justify-end mt-4 lg:mt-0 xl:mt-0 order-4 sm:order-3">
                        <ul className=' flex gap-3.5 flex-col'>
                            <li className=' font-graph-semi text-base text-black'>Resources </li>
                            {slicedata2.map((data, index) => (
                                <li className=' relative w-fit'><a href="" className='after:absolute after:bg-violet-600 after:w-0 after:left-[50%] after:h-[2px] after:bottom-[-3px] hover:after:left-0 hover:after:w-full hover:after:duration-300 font-graph-med text-base text-grey'>{data.list}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-6 sm:col-6 md:col-4 xl:col-2 flex xl:justify-end mt-4 xl:mt-0 md:justify-start order-3 sm:order-4">
                        <ul className=' flex gap-3.5 flex-col'>
                            <li className=' font-graph-semi text-base text-black'>Company </li>
                            {slicedata3.map((data, index) => (
                                <li className=' relative w-fit'><a href="" className='after:absolute after:bg-violet-600 after:w-0 after:left-[50%] after:h-[2px] after:bottom-[-3px] hover:after:left-0 hover:after:w-full hover:after:duration-300 font-graph-med text-base text-grey'>{data.list}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-12 md:col-4 xl:col-3 flex xl:justify-end mt-4 xl:mt-0 order-5">
                        <div className=" flex flex-col gap-3.5">
                            <p className='font-graph-semi text-base text-black'>Contact</p>
                            <a href="mailto:Team@PodMatch.com">
                                <div className=" flex gap-[10px]">
                                    <div className="w-[24px] h-[24px] bg-lightvoilet rounded-full flex justify-center items-center">
                                        <Message />
                                    </div>
                                    <p className=' font-graph-med text-sm text-grey'>Team@PodMatch.com</p>
                                </div>
                            </a>
                            <div className="flex gap-[10px] cursor-pointer">
                                <div className="w-[24px] h-[24px] bg-lightvoilet rounded-full flex justify-center items-center">
                                    <Help />
                                </div>
                                <p className=' font-graph-med text-sm text-grey'>Help</p>
                            </div>
                            <a href="https://maps.app.goo.gl/HFT8mxynt8pD6z1JA" target='blank'>
                                <div className="flex gap-[10px]">
                                    <div className="w-[24px] h-[24px] bg-lightvoilet rounded-full flex justify-center items-center">
                                        <Location />
                                    </div>
                                    <div className="">
                                        <p className=' font-graph-med text-sm text-grey'>Jacksonville, Florida 32256 USA</p>
                                        <p className=' font-graph-med text-sm text-grey'>7643 Gate Pkwy STE 104-30</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full border-2 border-[#6F69F21A] mt-[30px]"></div>
                <div className="flex justify-between items-center pt-[20px] pb-[16px] flex-wrap flex-col-reverse lg:flex-row">
                    <p className='font-graph-med text-base leading-[21px] text-grey mt-3 md:mt-0'>© PodMatch. All Rights reserved</p>
                    <div className=" flex gap-3 sm:gap-5 flex-wrap mt-0">
                        <div className="w-[32px] h-[32px] bg-lightvoilet rounded-full flex justify-center items-center cursor-pointer hover:-translate-y-2 duration-300 ease-linear">
                            <a href="https://www.facebook.com/" target='blank'>
                                <Facebook />
                            </a>
                        </div>
                        <div className="w-[32px] h-[32px] bg-lightvoilet rounded-full flex justify-center items-center cursor-pointer hover:-translate-y-2 duration-300 ease-linear">
                            <a href="https://x.com/?lang=en" target='blank'>
                                <Twitter />
                            </a>
                        </div>
                        <div className="w-[32px] h-[32px] bg-lightvoilet rounded-full flex justify-center items-center cursor-pointer hover:-translate-y-2 duration-300 ease-linear">
                            <a href="https://www.pexels.com/" target='blank'>
                                <Pixel />
                            </a>
                        </div>
                        <div className="w-[32px] h-[32px] bg-lightvoilet rounded-full flex justify-center items-center cursor-pointer hover:-translate-y-2 duration-300 ease-linear">
                            <a href="https://www.youtube.com/" target='blank'>
                                <Youtube />
                            </a>
                        </div>
                        <div className="w-[32px] h-[32px] bg-lightvoilet rounded-full flex justify-center items-center cursor-pointer hover:-translate-y-2 duration-300 ease-linear">
                            <a href="https://www.instagram.com/" target='blank'>
                                <Insta />
                            </a>
                        </div>
                        <div className="w-[32px] h-[32px] bg-lightvoilet rounded-full flex justify-center items-center cursor-pointer hover:-translate-y-2 duration-300 ease-linear">
                            <a href="https://www.linkedin.com/feed/" target='blank'>
                                <Indeed />
                            </a>
                        </div>
                        <div className="w-[32px] h-[32px] bg-lightvoilet rounded-full flex justify-center items-center cursor-pointer hover:-translate-y-2 duration-300 ease-linear">
                            <a href="https://www.tiktok.com/about" target='blank'>
                                <Tiktok />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer