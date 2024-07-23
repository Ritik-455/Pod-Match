import React, { useEffect, useState } from 'react';
import { BacktoTop } from '../common/icon';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 bg-blue-500 duration-300 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full shadow-md"
                >
                    <BacktoTop />
                </button>
            )}
        </>
    );
};

export default BackToTopButton;