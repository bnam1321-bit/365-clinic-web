import styles from "./page.module.css";
import { Activity, ClipboardCheck, ShieldAlert, HeartPulse } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "종합건강검진 | 365내과연합의원",
    description: "5대암 검진, 공단검진, 정밀 초음파, 개인 맞춤형 종합검진 프로그램 안내.",
};

export default function Checkup() {
    return (
        <div className={styles.container}>
            {/* Page Header */}
            <section className={styles.header}>
                <div className="container">
                    <span className={styles.badge}>HEALTH CHECKUP CENTER</span>
                    <h1 className={styles.title}>종합건강검진 센터</h1>
                    <p className={styles.subtitle}>
                        대학병원급 정밀 검진 장비와 전문의의 세심한 판독으로<br />
                        질병의 조기 발견과 예방에 앞장섭니다.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className={styles.content}>
                <div className="container">

                    {/* Intro Grid */}
                    <div className={styles.introGrid}>
                        <div className={styles.introCard}>
                            <Activity size={40} className={styles.icon} />
                            <h3>공단 건강검진</h3>
                            <p>국민건강보험공단 지정 검진기관으로 일반검진 및 생애전환기 검진을 실시합니다.</p>
                        </div>
                        <div className={styles.introCard}>
                            <ShieldAlert size={40} className={styles.icon} />
                            <h3>5대암 검진</h3>
                            <p>위암, 대장암, 간암, 유방암, 자궁경부암 등 주요 암을 조기에 발견합니다.</p>
                        </div>
                        <div className={styles.introCard}>
                            <HeartPulse size={40} className={styles.icon} />
                            <h3>정밀 종합검진</h3>
                            <p>개인의 연령, 성별, 가족력 등을 고려한 1:1 맞춤형 정밀 검진 프로그램입니다.</p>
                        </div>
                    </div>

                    {/* Detailed Sections - 5 Major Cancers */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>5대암 검진 프로그램</h2>
                        <div className={styles.cancerGrid}>
                            <div className={styles.cancerItem}>
                                <div className={styles.cancerHeader}>
                                    <span className={styles.num}>01</span>
                                    <h4>위암 검진</h4>
                                </div>
                                <p>만 40세 이상 남녀 (2년 주기)</p>
                                <ul className={styles.list}>
                                    <li>위내시경 검사 (수면/비수면)</li>
                                    <li>위장조영촬영</li>
                                </ul>
                            </div>
                            <div className={styles.cancerItem}>
                                <div className={styles.cancerHeader}>
                                    <span className={styles.num}>02</span>
                                    <h4>대장암 검진</h4>
                                </div>
                                <p>만 50세 이상 남녀 (1년 주기)</p>
                                <ul className={styles.list}>
                                    <li>분변잠혈검사 (대변검사)</li>
                                    <li>대장내시경 (양성 시 진행)</li>
                                </ul>
                            </div>
                            <div className={styles.cancerItem}>
                                <div className={styles.cancerHeader}>
                                    <span className={styles.num}>03</span>
                                    <h4>간암 검진</h4>
                                </div>
                                <p>만 40세 이상 고위험군 (6개월 주기)</p>
                                <ul className={styles.list}>
                                    <li>간 초음파 검사</li>
                                    <li>혈청알파태아단백검사(혈액)</li>
                                </ul>
                            </div>
                            <div className={styles.cancerItem}>
                                <div className={styles.cancerHeader}>
                                    <span className={styles.num}>04</span>
                                    <h4>유방암 검진</h4>
                                </div>
                                <p>만 40세 이상 여성 (2년 주기)</p>
                                <ul className={styles.list}>
                                    <li>유방촬영술 (Mammography)</li>
                                    <li>유방 초음파 (선택 정밀)</li>
                                </ul>
                            </div>
                            <div className={styles.cancerItem}>
                                <div className={styles.cancerHeader}>
                                    <span className={styles.num}>05</span>
                                    <h4>자궁경부암</h4>
                                </div>
                                <p>만 20세 이상 여성 (2년 주기)</p>
                                <ul className={styles.list}>
                                    <li>자궁경부세포검사</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Process Info */}
                    <div className={styles.processBox}>
                        <div className={styles.processHeader}>
                            <ClipboardCheck size={32} />
                            <h3>검진 유의사항</h3>
                        </div>
                        <ul className={styles.processList}>
                            <li>검진 전날 저녁 9시 이후부터는 금식하셔야 합니다. (물, 껌, 담배 포함)</li>
                            <li>복용 중인 약물이 있는 경우, 반드시 의료진과 상의 후 중단 여부를 결정하세요.</li>
                            <li>귀중품 및 액세서리는 분실 위험이 있으므로 소지를 자제해 주세요.</li>
                            <li>수면 내시경 시 당일 운전이 불가능하므로 대중교통을 이용해 주세요.</li>
                        </ul>
                    </div>

                </div>
            </section>
        </div>
    );
}
