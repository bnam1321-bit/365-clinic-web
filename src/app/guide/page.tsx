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
            {/* Restore Page Header with Background */}
            <section className={styles.pageHeader}>
                <FadeIn>
                    <h1 className={styles.pageTitle}>진료 안내</h1>
                    <p className={styles.pageSubtitle}>365내과연합의원 오시는 길 및 진료 시간 안내입니다.</p>
                </FadeIn>
            </section>

            <main className={styles.content}>
                <div className={`container`}>

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
                                    {/* Kakao Map Embed */}
                                    <div style={{ font: 'normal normal 400 12px/normal dotum, sans-serif', width: '100%', height: '100%', position: 'relative' }}>
                                        <iframe width="100%" height="100%" src="https://map.kakao.com/link/map/365내과연합의원,37.5458,126.7366" frameBorder="0" style={{ border: 0 }} allowFullScreen={true} loading="lazy"></iframe>
                                    </div>

                                    {/* Kakao Map Direct Link Overlay */}
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
                                        <div style={{ width: '20px', height: '20px', backgroundColor: '#FEE500', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#000', fontSize: '12px' }}>K</div>
                                        <a href="https://map.kakao.com/link/to/365내과연합의원,37.5458,126.7366" target="_blank" rel="noopener noreferrer" style={{
                                            fontSize: '1rem',
                                            fontWeight: '700',
                                            color: '#3B1E1E',
                                            textDecoration: 'none',
                                            letterSpacing: '-0.5px'
                                        }}>
                                            카카오맵 길찾기
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
                                <p>
                                    인천 1호선<br />
                                    <strong>임학역 3번 출구</strong> (도보 3분)
                                </p>
                            </div>
                            <div className={styles.transportItem}>
                                <h3><span className={styles.busIcon}>버스</span></h3>
                                <p>
                                    임학역 또는<br />
                                    임학사거리 정거장 하차
                                </p>
                            </div>
                            <div className={styles.transportItem}>
                                <h3><span className={styles.parkingIcon}>주차</span></h3>
                                <p>건물 내 주차장 이용 가능</p>
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
