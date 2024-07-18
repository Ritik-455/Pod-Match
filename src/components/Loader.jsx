import React from 'react'
import logo from '../assets/images/svg/logo.svg'
const Loader = () => {
    return (
        <>
            <div className="h-screen w-full bg-white flex justify-center items-center flex-col">
               <div className=" animate-bounce"><img src={logo} alt="logo" /></div>
            </div>
        </>
    )
}

export default Loader