'use client'
import React from "react";

import NavItem from "./NavItem";
import styles from "./mobileNav.module.css";
import Logo from "@/components/Logo/logo";

import { RxCross1 } from "react-icons/rx";

const MobileNav = React.forwardRef(({ links = [], handleClose }, ref) => {
    return (
        <div className={styles.mobileMenuContainer}>
            <aside className={styles.mobileMenu} ref={ref}>
                <div className={styles.mobileMenuHeader}>
                    <Logo size={{ width: 30, height: 40 }} />
                    <button onClick={handleClose} className={styles.closeButton}><RxCross1 size={20}/></button>
                </div>
                <nav className={styles.mobileMenuNav}>
                    <ul className={styles.mobileMenuList}>
                        {links?.map(({ content, href, subLinks = [] }) => {
                            return (
                                <NavItem subLinks={subLinks} key={content}>
                                    {content}
                                </NavItem>
                            )
                        })}
                    </ul>
                </nav>
            </aside>
        </div>
    )
});

export default MobileNav;