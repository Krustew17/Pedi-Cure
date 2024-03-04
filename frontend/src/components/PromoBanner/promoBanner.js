import Link from 'next/link'
import styles from "./promoBanner.module.css";

import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { MdPlace } from "react-icons/md";

export default function PromoBanner() {
    return (
        <div className={styles.promoBanner}>
            <ul>
                <li>
                    <FaPhoneAlt />
                    <Link
                        href={"tel:0899609998"}
                    >
                        +359 89 960 9998
                    </Link>
                </li>
                <li>
                    <MdPlace size={20}/>
                    <Link
                        href={"https://www.google.com/maps/place/%D0%9C%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D0%BD%D1%81%D0%BA%D0%B8+%D0%BF%D0%B5%D0%B4%D0%B8%D0%BA%D1%8E%D1%80+-+%D0%B3%D1%80.%D0%AF%D0%BC%D0%B1%D0%BE%D0%BB+Pedi-Cure/@42.4844303,26.5120893,17z/data=!3m1!4b1!4m6!3m5!1s0x40a635008fb442d1:0xa3deb76af5d830f0!8m2!3d42.4844303!4d26.5120893!16s%2Fg%2F11khqjnzp4?hl=bg&entry=ttu"}
                        target='_blank'
                    >
                        ж.к. Генерал Владимир Заимов, ул. „Екзарх Йосиф“ 7, 8600 Ямбол
                    </Link>
                </li>
            </ul>
            <Link
                href={"https://www.facebook.com/profile.php?id=100090651132315"}
                target='_blank'
                className={styles.facebook}
            >
                <FaFacebookF />
            </Link>
        </div>
    )
};
