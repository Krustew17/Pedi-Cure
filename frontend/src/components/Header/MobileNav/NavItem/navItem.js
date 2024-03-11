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
                {subLinks.length > 0 && <button className={styles.expandButton}><MdExpandMore size={30}/></button>}
            </div>
            {subLinks.length > 0 && (
                <>
                    {isExpanded && (
                        <ul className={styles.navItemSubmenu}>
                            {subLinks.map(({ content, href }) =>
                                <li key={content}>{content}</li>
                            )}
                        </ul>
                    )}
                </>
            )}
        </li>
    )
};
