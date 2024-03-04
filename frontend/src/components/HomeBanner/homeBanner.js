import styles from "./homeBanner.module.css";

export default function HomeBanner() {
    return (
        <div className={styles.banner}>
            <div className={styles.bannerText}>
                <h1 className={styles.bannerHeading}>Lorem ipsum is placeholder text</h1>
                <h2 className={styles.bannerSubheading}>commonly used in the graphic industries</h2>
            </div>
        </div>
    )
};
