import HomeBanner from "@/components/HomeBanner/homeBanner";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
          <HomeBanner/>
      </main>
    </>
  );
}
