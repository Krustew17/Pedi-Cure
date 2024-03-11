'use client'
import React from "react";

import NavItem from "./NavItem";
import styles from "./mobileNav.module.css";

const MobileNav = React.forwardRef(({ links = [] }, ref) => {
    return (
        <div className={styles.mobileMenuContainer}>
            <aside className={styles.mobileMenu} ref={ref}>
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