import Logo from '../Logo/logo';
import styles from './footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <Logo/>
            </div>
            <div className={styles.row}>
                <ul>
                    <li><a href="#">Контакти</a></li>
                    <li><a href="#">За нас</a></li>
                    <li><a href="#">Общи условия</a></li>
                </ul>
            </div>
            <div className={styles.row}>
                PediCure Copyright &copy; || All rights reserved
            </div>
        </footer>
    )
};
