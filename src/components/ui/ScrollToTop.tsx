"use client";
import { styles } from '@/styles/styles';
import { FaChevronUp } from 'react-icons/fa';

const ScrollToTop = () => {
    // Scroll to top with smooth behavior
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`${styles.sectionContainer} relative w-full flex justify-center items-center my-12`}>
            <div className="absolute w-full h-[2px] bg-[#0133ff]"></div>
            <button
                onClick={scrollToTop}
                className="relative z-10 p-3 rounded-full bg-[#0133ff] text-white 
                shadow-lg hover:bg-[#0028d9] transition-all duration-300"
                aria-label="Scroll to top"
            >
                <FaChevronUp size={18} />
            </button>
        </div>
    );
};

export default ScrollToTop;