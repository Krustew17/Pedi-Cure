import HomeBanner from "@/components/HomeBanner/homeBanner";
import styles from "./page.module.css";
import InfoBlock from "@/components/InfoBlock/infoBlock";
import WorkingTime from "@/components/WorkingTime/workingTime";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <HomeBanner />
                <div className={styles.welcomeContainer}>
                    <InfoBlock />
                    <WorkingTime />
                </div>
                <div className={styles.WhyChooseUsContainer}>
                    <WhyChooseUs />
                </div>
            </main>
        </>
    );
}
