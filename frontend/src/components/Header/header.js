'use client'

import Image from "next/image";
import Link from "next/link";
import { MdExpandMore } from "react-icons/md";

import { usePathname } from "next/navigation";

import styles from "./header.module.css";

export default function Header() {
    //TODO: Make responsive for mobile
    const isHomePage = usePathname() === '/';

    return (
        <header className={`${styles.header} ${isHomePage ? styles.headerHome : ''}`}>
            <Link className={styles.logo} href="/">
                <Image src="/logo.png" width={40} height={55} alt="logo" />
                Pedi-Cure
            </Link>
            <nav className={styles.navigation}>
                <ul className={styles.navigationList}>
                    <li>За нас</li>
                    <li>Контакти</li>
                    <li className={styles.itemDropdown}>
                        Профилактика на проблемни стъпала
                        <MdExpandMore />
                        <ul className={styles.itemDropdownSubmenu}>
                            <li>Гъбички</li>
                            <li>Впити нокти</li>
                            <li>Хиперкератоза</li>
                            <li>Кератодермия</li>
                            <li>Онихолиза</li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
};
