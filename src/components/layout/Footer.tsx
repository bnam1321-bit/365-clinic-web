import Link from "next/link";
import styles from "./Footer.module.css";

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
                                <li>토요일: 09:00 - 14:00</li>
                                <li>점심시간: 13:00 - 14:00</li>
                                <li className={styles.highlight}>일요일/공휴일 휴진</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomSection}>
                    <div className={styles.contactInfo}>
                        <p>인천 계양구 장제로 867 상우메디칼빌딩 3층</p>
                        <p>TEL: 032-542-3659 | FAX: 032-542-3660</p>
                        <p>대표자: 김기원 | 사업자등록번호: 123-45-67890</p>
                    </div>
                    <p className={styles.copyright}>&copy; {new Date().getFullYear()} 365 Internal Medicine Clinic. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
