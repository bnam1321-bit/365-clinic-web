import styles from "./page.module.css";
import { Stethoscope, Award, Heart, Users } from "lucide-react";
import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import SplitHero from "@/components/ui/SplitHero";
import { BentoGrid, BentoCard } from "@/components/ui/Bento";

export const metadata: Metadata = {
    title: "병원 소개 | 365내과연합의원",
    description: "365내과연합의원 의료진 소개 및 진료 철학.",
};

export default function About() {
    return (
        <main className={styles.aboutContainer}>
            <SplitHero 
                badge="ABOUT US"
                title="병원 소개"
                subtitle="환자의 아픔을 공감하며, 정확한 진단과 따뜻한 치료를 약속합니다."
            />
            <div className={`container`} style={{ marginTop: '4rem', marginBottom: '8rem' }}>
                    <section className={styles.philosophy} style={{ marginBottom: '6rem' }}>
                        <BentoGrid>
                            <BentoCard size="large" theme="dark">
                                <Heart size={40} style={{ color: 'var(--color-accent-gold)', marginBottom: '1.5rem' }} />
                                <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>"환자분의 건강을 내 가족처럼 생각합니다"</h3>
                                <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.85)' }}>
                                    <p style={{ marginBottom: '1rem' }}>
                                        안녕하세요. 365내과연합의원 원장 이현석 입니다.<br />
                                        저희 병원을 찾아주신 환자 여러분께 깊은 감사의 말씀을 드립니다.
                                    </p>
                                    <p style={{ marginBottom: '1rem' }}>
                                        아플 때 가장 먼저 생각나는 병원, 환자의 아픔을 내 가족의 일처럼 공감하는 병원이 되고자 합니다.
                                        풍부한 임상 경험과 전문 지식을 바탕으로 정확한 진단과 올바른 치료를 약속드립니다.
                                    </p>
                                    <p>
                                        작은 소리에도 귀 기울이며, 마음까지 치유하는 따뜻한 진료로 보답하겠습니다.<br />
                                        감사합니다.
                                    </p>
                                </div>
                            </BentoCard>

                            <BentoCard size="wide" theme="accent">
                                <Users size={40} style={{ color: 'white', marginBottom: '1.5rem' }} />
                                <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>대학병원 출신 전문의 3인</h3>
                                <p style={{ fontSize: '1.1rem' }}>내과, 소화기 내시경, 근골격계 초음파 등 각 분야의 전문가들이 유기적으로 협진하여 최상의 의료 서비스를 제공합니다.</p>
                            </BentoCard>
                        </BentoGrid>
                    </section>

                <section className={styles.staff}>
                    <FadeIn delay={0.2}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', color: 'var(--color-primary)' }}>의료진 소개</h2>
                    </FadeIn>
                    <BentoGrid className={styles.threeColGrid}>
                        {/* Doctor 1: 이현석 */}
                        <BentoCard theme="light" delay={0.3} className={styles.doctorBento}>
                            <div className={styles.doctorIconWrapper}><Stethoscope size={32} /></div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>이현석 원장</h3>
                            <ul className={styles.bentoList}>
                                <li>차의과대학 외래교수</li>
                                <li>을지의과대학 외래교수</li>
                                <li>내과 전문의</li>
                                <li>소화기 내시경 전문의</li>
                                <li>대한 소화기학회 평생회원</li>
                                <li>대한 간학회 정회원</li>
                            </ul>
                        </BentoCard>

                        {/* Doctor 2: 지재연 */}
                        <BentoCard theme="light" delay={0.4} className={styles.doctorBento}>
                            <div className={styles.doctorIconWrapper}><Stethoscope size={32} /></div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>지재연 원장</h3>
                            <ul className={styles.bentoList}>
                                <li>가천의과대학교 외래교수</li>
                                <li>고려대학교 의과대학 외래교수</li>
                                <li>대한 위장내시경학회 정회원</li>
                                <li>대한 IMS학회 이사</li>
                                <li>신경근 치료 공인 국제강사</li>
                                <li>대한 근골격 초음파 학회 정회원</li>
                            </ul>
                        </BentoCard>

                        {/* Doctor 3: 노영석 */}
                        <BentoCard theme="light" delay={0.5} className={styles.doctorBento}>
                            <div className={styles.doctorIconWrapper}><Stethoscope size={32} /></div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>노영석 원장</h3>
                            <ul className={styles.bentoList}>
                                <li>고려대학교 의과대학 외래교수</li>
                                <li>대한 위장내시경학회 내시경 전문의</li>
                                <li>대한 비만건강학회 비만전문가 과정 수료</li>
                                <li>신경근 치료 공인 국제강사</li>
                                <li>대한 척추통증 중재시술회 정회원</li>
                                <li>대한 비만의사회 정회원</li>
                            </ul>
                        </BentoCard>
                    </BentoGrid>
                </section>
            </div>
        </main>
    );
}
