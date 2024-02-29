import styles from "./page.module.css";
import PromoBanner from "@/components/PromoBanner/promoBanner";

export default function Home() {
  return (
    <>
      <header>
        <PromoBanner />
      </header>
      <main className={styles.main}>

      </main>
    </>
  );
}
