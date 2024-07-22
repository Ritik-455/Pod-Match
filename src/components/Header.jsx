import React, { useState } from 'react'
import logo from '../assets/images/svg/logo.svg'
import { Drop, Navcross, Navline } from '../common/icon';

const Header = () => {
    const [show, setfirst] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    if (show === true) {
        document.body.classList.add('max-lg:overflow-hidden')
    }
    else {
        document.body.classList.remove('max-lg:overflow-hidden')
    }
    return (
        /////////////////// Nav-bar//////////////////////////////
        <div className="w-full border-b border-b-[#0000001F]">
            <div className="container py-[13px] max-w-[540px] md:max-w-[920px] lg:max-w-[992px] xl:max-w-[1164px]">
                <nav className=' flex justify-between items-center'>
                    <img className='w-[186px] md:w-auto cursor-pointer' src={logo} alt="logo" />
                    <ul className={`${show ? "inset-0" : "inset-full"} flex items-center gap-[40px] xl:gap-[20px] 2xl:gap-[40px]  max-lg:fixed max-lg:top-0 max-lg:right-full max-lg:w-full max-lg:h-full max-lg:bg-white max-lg:flex max-lg:items-center max-lg:justify-center max-lg:flex-col max-lg:z-10 max-lg:transition-all max-lg:duration-300 max-lg:ease-linear `}>
                        <li className="relative group" onClick={() => {
                            setfirst(!show);
                        }}>
                            <a href="#features" className="font-graph-med text-[16px] leading-[22px] text-grey transition-all duration-300 ease-linear hover:text-violet-600">
                                Features
                            </a>
                            <span className="cursor-pointer absolute -right-3 top-0 h-full flex items-center">
                                <Drop />
                            </span>
                            <div className="hidden group-hover:block absolute top-full left-0 bg-white shadow-lg  w-[201px] z-20 border border-light-black rounded-2xl">
                                <a href="#feature1" className="block text-lg text-gray-700 p-2 hover:bg-blue-100 text-nowrap rounded-t-2xl">Host </a>
                                <a href="#feature1" className="block text-lg text-gray-700 p-2 hover:bg-blue-100 text-nowrap py-2">Guest</a>
                                <a href="#feature1" className="block text-lg text-gray-700 p-2 hover:bg-blue-100 text-nowrap py-2">Both</a>
                                <a href="#feature1" className="block text-lg text-gray-700 p-2 hover:bg-blue-100 text-nowrap pb-2 rounded-b-2xl">Agency</a>
                            </div>
                        </li>
                        <li className=' flex gap-1 items-center relative group' onClick={toggleMenu}><a href="#pricing" className=' font-graph-med text-base leading-[22px] text-grey  transition-all duration-300 ease-linear hover:text-violet-600' onClick={() => {
                            setfirst(!show);
                        }}>Pricing</a><span className=' cursor-pointer absolute -right-3 top-0 h-full flex items-center'><Drop /></span>
                            <div className="hidden group-hover:block absolute top-full left-0 bg-white shadow-lg  w-[201px] z-20 border border-light-black rounded-2xl">
                                <a href="#feature1" className="block text-lg text-gray-700 p-2 hover:bg-blue-100 text-nowrap rounded-t-2xl">Host </a>
                                <a href="#feature1" className="block text-lg text-gray-700 p-2 hover:bg-blue-100 text-nowrap py-2">Guest</a>
                                <a href="#feature1" className="block text-lg text-gray-700 p-2 hover:bg-blue-100 text-nowrap py-2">Both</a>
                                <a href="#feature1" className="block text-lg text-gray-700 p-2 hover:bg-blue-100 text-nowrap pb-2 rounded-b-2xl">Agency</a>
                            </div>
                        </li>
                        <li className=' relative group'><a href="#about" className=' font-graph-med text-base leading-[22px] text-grey  transition-all duration-300 ease-linear hover:text-violet-600' onClick={() => {
                            setfirst(!show);
                        }}>About us</a><span className=' cursor-pointer absolute -right-3 top-0 h-full flex items-center'><Drop /></span>
                            <div className="hidden group-hover:block absolute top-full left-0 bg-white shadow-lg  w-[201px] z-20 border border-light-black rounded-2xl">
                                <a href="#feature1" className="block text-lg text-gray-700 p-2 hover:bg-blue-100 text-nowrap rounded-t-2xl">Meet the team</a>
                                <a href="#feature1" className="block text-lg text-gray-700 p-2 hover:bg-blue-100 text-nowrap py-2">News and update</a>
                                <a href="#feature1" className="block text-lg text-gray-700 p-2 hover:bg-blue-100 text-nowrap py-2">Contant</a>
                                <a href="#feature1" className="block text-lg text-gray-700 p-2 hover:bg-blue-100 text-nowrap pb-2 rounded-b-2xl">Agency</a>
                            </div>
                        </li>
                        <li className=' relative group'><a href="#community" className=' font-graph-med text-base leading-[22px] text-grey  transition-all duration-300 ease-linear hover:text-violet-600' onClick={() => {
                            setfirst(!show);
                        }}>Community</a><span className=' cursor-pointer absolute -right-3 top-0 h-full flex items-center'><Drop /></span>
                            <div className="hidden group-hover:block absolute top-full left-0 bg-white shadow-lg  w-[201px] z-20 border border-light-black rounded-2xl">
                                <a href="#feature1" className="block text-lg text-gray-700 p-2 hover:bg-blue-100 text-nowrap rounded-t-2xl">Help</a>
                                <a href="#feature1" className="block text-lg text-gray-700 p-2 hover:bg-blue-100 text-nowrap py-2">Awards</a>
                                <a href="#feature1" className="block text-lg text-gray-700 p-2 hover:bg-blue-100 text-nowrap py-2">Vist</a>
                                <a href="#feature1" className="block text-lg text-gray-700 p-2 hover:bg-blue-100 text-nowrap pb-2 rounded-b-2xl">Best of Product</a>
                            </div></li>
                        <li className=' relative group'><a href="#education" className=' font-graph-med text-base leading-[22px] text-grey  transition-all duration-300 ease-linear hover:text-violet-600' onClick={() => {
                            setfirst(!show);
                        }}>Education</a><span className=' cursor-pointer absolute -right-3 top-0 h-full flex items-center'><Drop /></span>
                            <div className="hidden group-hover:block absolute top-full left-0 bg-white shadow-lg  w-[201px] z-20 border border-light-black rounded-2xl">
                                <a href="#feature1" className="block text-lg text-gray-700 p-2 hover:bg-blue-100 text-nowrap rounded-t-2xl">Poadcast</a>
                                <a href="#feature1" className="block text-lg text-gray-700 p-2 hover:bg-blue-100 text-nowrap py-2">Blog</a>
                                <a href="#feature1" className="block text-lg text-gray-700 p-2 hover:bg-blue-100 text-nowrap py-2">Live Event</a>
                                <a href="#feature1" className="block text-lg text-gray-700 p-2 hover:bg-blue-100 text-nowrap pb-2 rounded-b-2xl">Report</a>
                            </div></li>
                        <li className=' md:hidden'>
                            <a href="#login" className='ffont-graph-med text-base  text-black'>Log In</a>
                        </li>
                        <li className=' md:hidden'><button className='font-graph-med text-base text-lightwhite p-[10px_28px_12px_28px] rounded-[57px] bg-[#6F69F2]'>Sign Up</button>
                        </li>
                    </ul>
                    <div className="hidden gap-[18px] items-center md:flex">
                        <a href='#login' className='font-graph-semi text-base  text-black hover:text-violet-600 duration-300 ease-linear'>Log In</a>
                        <button className='font-graph-semi text-base text-lightwhite p-[10px_28px_12px_28px] border border-transparent rounded-[57px] bg-[#6F69F2] hover:bg-white hover:text-[#6F69F2] hover:border-[#6F69F2] transition-all duration-300 ease-linear'>
                            Sign Up</button>
                    </div>
                    <div className="z-10 lg:hidden cursor-pointer " onClick={() => {
                        setfirst(!show);
                    }}>
                        <span>{show === false ? <Navline /> : <Navcross />}</span>
                    </div>
                </nav>
            </div>
        </div>

    )
}


export default Header