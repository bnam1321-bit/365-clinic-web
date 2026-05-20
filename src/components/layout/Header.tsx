"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
            <div className={`container ${styles.headerContainer}`}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    365<span>내과연합의원</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className={styles.desktopNav}>
                    <ul className={styles.navList}>
                        <li><Link href="/about" className={styles.navLink}>병원 소개</Link></li>
                        <li><Link href="/checkup" className={styles.navLink}>종합건강검진</Link></li>
                        <li><Link href="/endoscopy" className={styles.navLink}>내시경센터</Link></li>
                        <li><Link href="/ultrasound" className={styles.navLink}>초음파센터</Link></li>
                        <li><Link href="/clinic" className={styles.navLink}>내과진료</Link></li>
                        <li><Link href="/pain" className={styles.navLink}>통증치료</Link></li>
                    </ul>
                </nav>

                {/* Desktop Actions */}
                <div className={styles.desktopActions}>
                    <Link href="tel:032-542-3659" className={styles.phoneBtn}>
                        <Phone size={16} />
                        <span>032.542.3659</span>
                    </Link>
                    <Link href="/guide" className={styles.locationBtn}>
                        <MapPin size={16} />
                        <span>오시는 길</span>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button className={styles.menuButton} onClick={toggleMenu} aria-label="메뉴 열기">
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            {isMenuOpen && (
                <div className={styles.mobileNav}>
                    <ul className={styles.mobileNavList}>
                        <li><Link href="/about" onClick={toggleMenu}>병원 소개</Link></li>
                        <li><Link href="/checkup" onClick={toggleMenu}>종합건강검진</Link></li>
                        <li><Link href="/endoscopy" onClick={toggleMenu}>내시경센터</Link></li>
                        <li><Link href="/ultrasound" onClick={toggleMenu}>초음파센터</Link></li>
                        <li><Link href="/clinic" onClick={toggleMenu}>내과진료</Link></li>
                        <li><Link href="/pain" onClick={toggleMenu}>통증치료</Link></li>
                        <li className={styles.mobileAction}>
                            <Link href="/guide" onClick={toggleMenu} className={styles.locationBtn}>
                                <MapPin size={18} /> 오시는 길 안내
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
