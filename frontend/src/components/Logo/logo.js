'use client'

import Image from "next/image";
import Link from "next/link";

import styles from "./logo.module.css";

export default function Logo({ size = { width: 40, height: 55 }}) {
    return (
        <Link className={styles.logo} href="/">
            <Image src="/logo.png" width={size.width} height={size.height} alt="logo" />
            <span>Pedi-Cure</span>
        </Link>
    )
};
