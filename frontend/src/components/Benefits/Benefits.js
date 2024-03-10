import { MdHealthAndSafety } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";
import styles from "./Benefits.module.css";
export default function Benefits() {
    return (
        <section className={styles.BenefitsContainer}>
            <h1>The benefits</h1>
            <h2>Sint qui ea tempor </h2>
            <div className={styles.BenefitArticlesContainer}>
                <article>
                    <GiHealthNormal className={styles.benefitsIconStyle} />
                    <h1>Sint qui ea tempor</h1>
                    <p>
                        Elit exercitation ipsum deserunt esse sit culpa sit
                        velit do consectetur irure ad.
                    </p>
                </article>
                <article>
                    <GiHealthNormal className={styles.benefitsIconStyle} />
                    <h1>Sint qui ea tempor</h1>
                    <p>
                        Elit exercitation ipsum deserunt esse sit culpa sit
                        velit do consectetur irure ad.
                    </p>
                </article>
                <article>
                    <GiHealthNormal className={styles.benefitsIconStyle} />
                    <h1>Sint qui ea tempor</h1>
                    <p>
                        Elit exercitation ipsum deserunt esse sit culpa sit
                        velit do consectetur irure ad.
                    </p>
                </article>
                <article>
                    <GiHealthNormal className={styles.benefitsIconStyle} />
                    <h1>Sint qui ea tempor</h1>
                    <p>
                        Elit exercitation ipsum deserunt esse sit culpa sit
                        velit do consectetur irure ad.
                    </p>
                </article>
            </div>
            <button className={styles.BenefitsHireUs}>Hire us</button>
        </section>
    );
}
