import styles from "./page.module.css";
import { MapPin, Clock, Phone } from "lucide-react";
import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
    title: "이용 안내 | 365내과연합의원",
    description: "진료 시간, 오시는 길, 온라인 예약 안내.",
};

export default function Guide() {
    return (
        <div className={styles.guide}>
            <main className={styles.guideContainer}>
                <div className={`container`}>
                    <FadeIn>
                        <h1 className={styles.pageTitle}>진료 안내</h1>
                    </FadeIn>

                    <div className={styles.grid}>
                        {/* Left Column: Hours */}
                        <FadeIn delay={0.1} className={styles.infoCard}>
                            <div className={styles.section}>
                                <h2 className={styles.sectionTitle}><Clock size={28} /> 진료 시간 안내</h2>
                                <p className={styles.sectionDesc}>대학병원 출신 전문의가 꼼꼼하고 세심하게 진료합니다.</p>
                                <table className={styles.hoursTable}>
                                    <tbody>
                                        <tr>
                                            <th>평일</th>
                                            <td>09:00 - 19:00</td>
                                        </tr>
                                        <tr>
                                            <th>토요일</th>
                                            <td>09:00 - 14:00 (점심시간 없음)</td>
                                        </tr>
                                        <tr>
                                            <th>일요일 / 공휴일</th>
                                            <td className={styles.highlight}>휴진</td>
                                        </tr>
                                        <tr>
                                            <th>점심시간</th>
                                            <td>13:00 - 14:00</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p className={styles.note}>* 일요일 및 공휴일은 휴진입니다.</p>
                            </div>
                        </FadeIn>

                        {/* Right Column: Location */}
                        <FadeIn delay={0.2} className={styles.infoCard}>
                            <div className={styles.section}>
                                <h2 className={styles.sectionTitle}><MapPin size={28} /> 오시는 길</h2>
                                <div className={styles.locationDetails}>
                                    <p className={styles.addressDisplay}>인천 계양구 장제로 867 상우메디칼빌딩 3층</p>
                                    <p className={styles.stationDisplay}>임학역 인근</p>
                                </div>

                                <div className={styles.mapPlaceholder}>
                                    {/* Map Embed - Google Map provides coordinate visualization */}
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.8!2d126.738!3d37.545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sIncheon+Gyeyang-gu+Jangje-ro+867!5e0!3m2!1sen!2skr!4v1620000000000!5m2!1sen!2skr"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen={true}
                                        loading="lazy">
                                    </iframe>

                                    {/* Naver Map Direct Link Overlay */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '20px',
                                        right: '20px',
                                        background: 'rgba(255, 255, 255, 0.95)',
                                        padding: '12px 20px',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        zIndex: 10
                                    }}>
                                        <img src="https://map.naver.com/v5/assets/icon/favicon-32x32.png" alt="Naver" width="20" height="20" />
                                        <a href="https://map.naver.com/p/search/365내과연합의원" target="_blank" rel="noopener noreferrer" style={{
                                            fontSize: '1rem',
                                            fontWeight: '700',
                                            color: '#03C75A',
                                            textDecoration: 'none',
                                            letterSpacing: '-0.5px'
                                        }}>
                                            네이버 지도로 보기
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Transport Info */}
                    <FadeIn delay={0.3} className={styles.transportSection}>
                        <h2 className={styles.transportTitle}>대중교통 이용 안내</h2>
                        <div className={styles.transportGrid}>
                            <div className={styles.transportItem}>
                                <h3><span className={styles.subwayIcon}>지하철</span></h3>
                                <p>인천 1호선 <strong>임학역 2번 출구</strong> 도보 3분</p>
                            </div>
                            <div className={styles.transportItem}>
                                <h3><span className={styles.busIcon}>버스</span></h3>
                                <p>임학역 또는 롯데마트 계양점 정류장 하차</p>
                            </div>
                            <div className={styles.transportItem}>
                                <h3><span className={styles.parkingIcon}>주차</span></h3>
                                <p>건물 내 지하 주차장 이용 가능 (진료 시 무료 주차)</p>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Contact Banner */}
                    <FadeIn delay={0.4} className={styles.contactBanner}>
                        <h2>전화 문의 : 032-542-3659</h2>
                        <p>궁금하신 점이 있으시면 언제든지 문의해 주세요. 친절하게 안내해 드리겠습니다.</p>
                    </FadeIn>
                </div>
            </main>
        </div >
    );
}
