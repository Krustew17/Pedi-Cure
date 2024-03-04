import styles from "./workingTime.module.css";

import { FaRegClock } from "react-icons/fa6";

export default function WorkingTime() {
    return (
        <div className={styles.container}>
            <h5 className={styles.heading}>Работно време</h5>
            <ul className={styles.workingTimeList}>
                <li className={styles.workingTimeItem}>
                    <FaRegClock size={25}/>
                    <div>
                        <span>Понеделник</span>
                        <p>10:30ч.–19:00ч.</p>
                    </div>
                </li>
                <li className={styles.workingTimeItem}>
                    <FaRegClock size={25}/>
                    <div>
                        <span>Вторник - Събота</span>
                        <p>10:00ч.–19:00ч.</p>
                    </div>
                </li>
            </ul>
        </div>
    )
};