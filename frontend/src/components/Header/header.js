'use client'

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState, useRef } from "react";
import { MdExpandMore } from "react-icons/md";
import { SlMenu } from "react-icons/sl";
import { usePathname } from "next/navigation";

import MobileNav from './MobileNav';
import { NAV_LINKS } from "@/utils/constants";

import { useOnClickOutside } from "@/hooks";

import styles from "./header.module.css";

export default function Header() {
    //TODO: Make responsive for mobile
    const isHomePage = usePathname() === '/';

    const mobileNavRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);


    const handleMobileMenu = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, [setIsOpen]);

    useOnClickOutside(mobileNavRef, handleMobileMenu);

    return (
        <header className={`${styles.header} ${isHomePage ? styles.headerHome : ''}`}>
            <button className={styles.mobileNavButton} onClick={handleMobileMenu}>
                <SlMenu size={25} />
            </button>
            <Link className={styles.logo} href="/">
                <Image src="/logo.png" width={40} height={55} alt="logo" />
                <span>Pedi-Cure</span>
            </Link>
            <nav className={styles.navigation}>
                <ul className={styles.navigationList}>
                    {NAV_LINKS?.map(({ content, href, subLinks = [] }) => {
                        return (
                            <li key={content} className={`${subLinks.length > 0 ? styles.itemDropdown : ""}`}>
                                {content}
                                {subLinks.length ? (
                                    <>
                                        <MdExpandMore />
                                        <ul className={styles.itemDropdownSubmenu}>
                                            {subLinks.map(({ content: subLinkContent, href: subLinkHref }) =>
                                                <li key={subLinkContent}>{subLinkContent}</li>
                                            )}
                                        </ul>
                                    </>
                                ) : ''}
                            </li>
                        )
                    })}
                </ul>
            </nav>
            {isOpen && (
                <MobileNav ref={mobileNavRef} links={NAV_LINKS}/>
            )}
        </header>
    )
};
