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
        document.body.classList.add('overflow_hidden')
    }
    else {
        document.body.classList.remove('overflow_hidden')
    }
    return (
        /////////////////// Nav-bar//////////////////////////////
        <>
            <div className="w-full border-b border-b-[#0000001F]">
                <div className="container py-[13px] max-w-[540px] md:max-w-[920px] lg:max-w-[992px] xl:max-w-[1164px]">
                    <nav className=' flex justify-between items-center'>
                        <img className='w-[186px] md:w-auto cursor-pointer' src={logo} alt="logo" />
                        <ul className={`${show ? "inset-0" : "inset-full"} flex items-center gap-[40px] xl:gap-[20px] 2xl:gap-[40px]  max-lg:fixed max-lg:top-0 max-lg:right-full max-lg:w-full max-lg:h-full max-lg:bg-white max-lg:flex max-lg:items-center max-lg:justify-center max-lg:flex-col max-lg:z-10 max-lg:transition-all max-lg:duration-300 max-lg:ease-linear `}>
                            <li className=' flex gap-1 items-center' onClick={toggleMenu} >
                                <a href="#Features" className=' font-graph-med  text-[16px] leading-[22px] text-grey   transition-all duration-300 ease-linear hover:text-violet-600' onClick={() => {
                                    setfirst(!show);
                                }}>Features </a><span className=' cursor-pointer'><Drop /></span>
                            </li>
                            <li className=' flex gap-1 items-center' onClick={toggleMenu}><a href="#Pricing" className=' font-graph-med text-base leading-[22px] text-grey  transition-all duration-300 ease-linear hover:text-violet-600' onClick={() => {
                                setfirst(!show);
                            }}>Pricing</a><span className=' cursor-pointer'><Drop /></span></li>
                            <li className=' flex gap-1 items-center'><a href="#About" className=' font-graph-med text-base leading-[22px] text-grey  transition-all duration-300 ease-linear hover:text-violet-600' onClick={() => {
                                setfirst(!show);
                            }}>About us</a><span className=' cursor-pointer'><Drop /></span></li>
                            <li className=' flex gap-1 items-center'><a href="#Community" className=' font-graph-med text-base leading-[22px] text-grey  transition-all duration-300 ease-linear hover:text-violet-600' onClick={() => {
                                setfirst(!show);
                            }}>Community</a><span className=' cursor-pointer'><Drop /></span></li>
                            <li className=' flex gap-1 items-center'><a href="#Education" className=' font-graph-med text-base leading-[22px] text-grey  transition-all duration-300 ease-linear hover:text-violet-600' onClick={() => {
                                setfirst(!show);
                            }}>Education</a><span className=' cursor-pointer'><Drop /></span></li>
                            <li className=' md:hidden'>
                                <a href="#login" className='ffont-graph-med text-base  text-black'>Log In</a>
                            </li>
                            <li className=' md:hidden'><button className='font-graph-med text-base text-lightwhite p-[10px_28px_12px_28px] rounded-[57px] bg-[#6F69F2]'>Sign Up</button></li>
                        </ul>
                        <div className="hidden gap-[18px] items-center md:flex">
                            <a href='#login' className='font-graph-semi text-base  text-black'>Log In</a>
                            <button className='font-graph-semi text-base text-lightwhite p-[10px_28px_12px_28px] border border-transparent rounded-[57px] bg-[#6F69F2] hover:bg-white hover:text-[#6F69F2] hover:border-[#6F69F2] transition-all duration-300 ease-linear'>
                                Sign Up</button>
                        </div>
                        <div className="z-10 lg:hidden " onClick={() => {
                            setfirst(!show);
                        }}>
                            <span>{show === false ? <Navline /> : <Navcross />}</span>
                        </div>
                    </nav>
                </div>
            </div>

        </>
    )
}


export default Header