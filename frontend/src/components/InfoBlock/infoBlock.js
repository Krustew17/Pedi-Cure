import styles from "./infoBlock.module.css";

export default function InfoBlock() {
    return (
        <div className={styles.container}>
            <h5 className={styles.heading}>Какво е медицинският педикюр?</h5>
            <p>
                Медицинският педикюр се занимават с лечение и корекция на заболявания, свързани с болести по нокти и стъпала.
                Това могат да бъдат : мазоли, пукнатини(рагади), враснал нокът, проблеми по стъпалата като кератоза и хиперкератоза,
                наличие на гъбични инфекции, както по кожа, така и по нокти, диабетно стъпало, хиперхидроза( прекомерно изпотяване) ,
                лечение на папиломи, брадавици , кокоши тръни и др.
            </p>
            <p>
                Ако някои от тези проблеми са на лице, терапевтът ще помогне да се избегнат сериозни последствия, да премахне дискомфорта и съществено да подобри състоянието на стъпалата и ноктите.
                Редовното посещение при такъв вид специалисти е задължително при наличието на проблеми по стъпала и нокти.
            </p>
        </div>
    )
};
