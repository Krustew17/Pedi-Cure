'use client'

import { useCallback, useState } from "react";
import { MdExpandMore } from "react-icons/md";
import styles from "./navItem.module.css";

export default function NavItem({ children, href, subLinks }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = useCallback(() => {
        setIsExpanded(prev => !prev)
    }, [setIsExpanded]);

    return (
        <li className={styles.navItem} onClick={handleExpand}>
            <div>
                {children}
                {subLinks.length > 0 && <button className={`${styles.expandButton} ${isExpanded ? styles.open : ''}`}><MdExpandMore size={30} /></button>}
            </div>
            {subLinks.length > 0 && (
                <ul className={`${styles.navItemSubmenu} ${isExpanded ? styles.active : ''}`}>
                    {subLinks.map(({ content, href }, i) =>
                        <li key={content}>{i + 1}. {content}</li>
                    )}
                </ul>
            )}
        </li>
    )
};
