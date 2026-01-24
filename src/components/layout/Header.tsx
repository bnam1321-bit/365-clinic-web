"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            {/* Top Bar: Logo and Utilities */}
            <div className={styles.topBar}>
                <div className={`container ${styles.topBarContainer}`}>
                    <div className={styles.topInfo}>
                        <Link href="tel:032-542-3659" className={styles.infoItem}>
                            <Phone size={18} />
                            <span>032.542.3659</span>
                        </Link>
                    </div>

                    <Link href="/" className={styles.logo}>
                        365<span>내과연합의원</span>
                    </Link>

                    <div className={styles.topActions}>
                        <Link href="/guide" className={styles.locationBtn}>
                            <MapPin size={18} />
                            <span>오시는 길</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className={styles.menuButton} onClick={toggleMenu} aria-label="메뉴 열기">
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Main Navigation Bar (Blue) */}
            <nav className={styles.navBar}>
                <div className={`container ${styles.navBarContainer}`}>
                    <ul className={styles.navList}>
                        <li><Link href="/about" className={styles.navLink}>365내과연합의원 소개</Link></li>
                        <li><Link href="/checkup" className={styles.navLink}>종합건강검진</Link></li>
                        <li><Link href="/endoscopy" className={styles.navLink}>내시경클리닉</Link></li>
                        <li><Link href="/ultrasound" className={styles.navLink}>초음파클리닉</Link></li>
                        <li><Link href="/clinic" className={styles.navLink}>내과클리닉</Link></li>
                        <li><Link href="/pain" className={styles.navLink}>통증클리닉</Link></li>
                    </ul>
                </div>
            </nav>

            {/* Mobile Navigation Overlay */}
            {isMenuOpen && (
                <div className={styles.mobileNav}>
                    <ul className={styles.mobileNavList}>
                        <li><Link href="/about" onClick={toggleMenu}>365내과연합의원 소개</Link></li>
                        <li><Link href="/checkup" onClick={toggleMenu}>종합건강검진</Link></li>
                        <li><Link href="/endoscopy" onClick={toggleMenu}>내시경클리닉</Link></li>
                        <li><Link href="/ultrasound" onClick={toggleMenu}>초음파클리닉</Link></li>
                        <li><Link href="/clinic" onClick={toggleMenu}>내과클리닉</Link></li>
                        <li><Link href="/pain" onClick={toggleMenu}>통증클리닉</Link></li>
                    </ul>
                </div>
            )}
        </header>
    );
}
