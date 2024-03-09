import { SiOverleaf } from "react-icons/si";
import styles from "./WhyChooseUs.module.css";
export default function WhyChooseUs() {
    return (
        <section className={styles.WhyChooseUsSection}>
            <h1 className={styles.WhyChooseUsH1}>Защо да изберете</h1>
            <h2 className={styles.WhyChooseUsH2}>Нашата клиника</h2>
            <div className={styles.ArticleContainer}>
                <div className={styles.WhyChooseUsArticle}>
                    <SiOverleaf className={styles.iconStyle} />
                    <h1>Incididunt qui aliquip culpa minim</h1>
                    <p>
                        Elit exercitation ipsum deserunt esse sit culpa sit
                        velit do consectetur irure ad. Labore exercitation amet
                        esse eiusmod minim velit.
                    </p>
                </div>
                <div className={styles.WhyChooseUsArticle}>
                    <SiOverleaf className={styles.iconStyle} />
                    <h1>Incididunt qui aliquip culpa minim</h1>
                    <p>
                        Elit exercitation ipsum deserunt esse sit culpa sit
                        velit do consectetur irure ad. Labore exercitation amet
                        esse eiusmod minim velit.
                    </p>
                </div>
            </div>
            <div className={styles.ArticleContainer}>
                <div className={styles.WhyChooseUsArticle}>
                    <SiOverleaf className={styles.iconStyle} />
                    <h1>Incididunt qui aliquip culpa minim</h1>
                    <p>
                        Elit exercitation ipsum deserunt esse sit culpa sit
                        velit do consectetur irure ad. Labore exercitation amet
                        esse eiusmod minim velit.Labore exercitation amet esse
                        eiusmod minim velit.
                    </p>
                </div>
                <div className={styles.WhyChooseUsArticle}>
                    <SiOverleaf className={styles.iconStyle} />
                    <h1>Incididunt qui aliquip culpa minim</h1>
                    <p>
                        Elit exercitation ipsum deserunt esse sit culpa sit
                        velit do consectetur irure ad. Labore exercitation amet
                        esse eiusmod minim velit.
                    </p>
                </div>
            </div>
        </section>
    );
}
