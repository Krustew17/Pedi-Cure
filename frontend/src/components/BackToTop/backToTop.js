'use client'
import { useCallback, useState, useEffect } from "react";

import { IoIosArrowUp } from "react-icons/io";
import styles from "./backToTop.module.css";

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const checkScrollHeight = () => {
            if (!showButton && window.pageYOffset > 400) {
                setShowButton(true);
            } else if (showButton && window.pageYOffset <= 400) {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', checkScrollHeight);
        return () => {
            window.removeEventListener('scroll', checkScrollHeight);
        };
    }, [showButton]);

    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <button className={`${styles.backToTop} ${showButton ? styles.shown : ''}`} onClick={scrollToTop}>
            <IoIosArrowUp size={30}/>
        </button>
    )
};

export default BackToTop;