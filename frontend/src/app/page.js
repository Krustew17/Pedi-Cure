import HomeBanner from "@/components/HomeBanner/homeBanner";
import styles from "./page.module.css";
import InfoBlock from "@/components/InfoBlock/infoBlock";
import WorkingTime from "@/components/WorkingTime/workingTime";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <HomeBanner />
        <div className={styles.welcomeContainer}>
          <InfoBlock />
          <WorkingTime />
        </div>
      </main>
    </>
  );
}
