import Link from "next/link";
import styles from "./Footer.module.css";
import { Phone, MapPin, Printer } from "lucide-react";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.topSection}>
                    <div className={styles.brand}>
                        <h2 className={styles.logo}>365<span>내과연합의원</span></h2>
                        <p className={styles.slogan}>대학병원 출신 전문의 3인, 우리 가족 평생 주치의</p>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.linkGroup}>
                            <h3>진료 안내</h3>
                            <ul>
                                <li>평일: 09:00 - 19:00</li>
                                <li>토요일/공휴일: 09:00 - 14:00 (점심시간 없음)</li>
                                <li>점심시간: 13:00 - 14:00</li>
                                <li className={styles.highlight}>일요일: 휴진</li>
                            </ul>
                        </div>
                        <div className={styles.linkGroup}>
                            <h3>전화 번호</h3>
                            <ul>
                                <li className={styles.contactItem}><Phone size={16} /> 032-542-3659</li>
                                <li className={styles.contactItem}><Printer size={16} /> 032-542-3660 (FAX)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomSection}>
                    <div className={styles.address}>
                        <MapPin size={18} className={styles.addressIcon} />
                        <p>인천 계양구 장제로 867 상우메디칼빌딩 3층 365내과연합의원</p>
                    </div>
                    <p className={styles.copyright}>&copy; {new Date().getFullYear()} 365 Internal Medicine Clinic. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
