import styles from "./page.module.css";
import { Activity, ClipboardCheck, ShieldCheck, HeartPulse, Microscope, AlertCircle } from "lucide-react";
import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import SplitHero from "@/components/ui/SplitHero";
import { BentoGrid, BentoCard } from "@/components/ui/Bento";
import { ContentSplit } from "@/components/ui/ContentSplit";

export const metadata: Metadata = {
    title: "종합건강검진 | 365내과연합의원",
    description: "5대암 검진, 공단검진, 정밀 초음파, 개인 맞춤형 종합검진 프로그램 안내.",
};

export default function CheckupPage() {
    return (
        <main className={styles.container}>
            <SplitHero 
                badge="COMPREHENSIVE CHECKUP"
                title="종합건강검진"
                subtitle={<>5대암 검진부터 초음파 정밀 검진까지,<br />정확한 진단으로 건강한 미래를 지킵니다.</>}
            />

            {/* Main Content */}
            <section className={styles.content}>
                <div className="container">



                    <BentoGrid style={{ marginBottom: '6rem' }}>
                        <BentoCard theme="primary">
                            <ShieldCheck size={36} style={{ marginBottom: '1rem', color: '#93C5FD' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>5대암 검진</h3>
                            <p>한국인의 주요 사망 원인인 위/대장/간/유방/자궁경부암 정밀 검진</p>
                        </BentoCard>
                        <BentoCard theme="light">
                            <HeartPulse size={36} style={{ marginBottom: '1rem', color: 'var(--color-secondary)' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>혈액 종합 검진</h3>
                            <p>70여 종의 정밀 혈액 검사로 신체 기능 및 질환 위험도 파악</p>
                        </BentoCard>
                        <BentoCard theme="light">
                            <Microscope size={36} style={{ marginBottom: '1rem', color: 'var(--color-secondary)' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>초음파 정밀 검진</h3>
                            <p>대학병원급 고해상도 초음파로 복부/심장/갑상선 미세 병변 진단</p>
                        </BentoCard>
                        <BentoCard theme="accent">
                            <Activity size={36} style={{ marginBottom: '1rem', color: 'white' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>만성질환 관리</h3>
                            <p>고혈압, 당뇨 등 만성질환의 체계적인 추적 관찰 및 관리</p>
                        </BentoCard>
                    </BentoGrid>

                    <ContentSplit 
                        content={
                            <div>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--color-primary)' }}>5대암 검진 프로그램</h2>
                                <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', marginBottom: '3rem' }}>
                                    국가건강검진 지정기관으로서 위암, 대장암, 간암, 유방암, 자궁경부암에 대한 정밀 검진을 실시합니다.
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div style={{ padding: '1.5rem', background: '#F8FAFC', borderRadius: '1rem', borderLeft: '4px solid var(--color-secondary)' }}>
                                        <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>01. 위암/대장암 검진</h4>
                                        <p style={{ color: 'var(--color-text-secondary)' }}>위내시경(만 40세 이상 2년 주기), 대장내시경 및 분변잠혈검사(만 50세 이상 1년 주기)</p>
                                    </div>
                                    <div style={{ padding: '1.5rem', background: '#F8FAFC', borderRadius: '1rem', borderLeft: '4px solid var(--color-accent-gold)' }}>
                                        <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>02. 간암/유방암/자궁경부암</h4>
                                        <p style={{ color: 'var(--color-text-secondary)' }}>간 초음파, 유방촬영술, 자궁경부세포검사 등을 통해 여성암 및 고위험군 관리</p>
                                    </div>
                                </div>
                            </div>
                        }
                        media={<img src="/images/checkup_clinic_2.jpg" alt="5대암 검진" />}
                    />

                    <div style={{ marginTop: '6rem' }}>
                        <BentoGrid>
                            <BentoCard size="wide" theme="glass" style={{ background: '#EFF6FF', border: '1px solid #DBEAFE' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <AlertCircle size={32} style={{ color: 'var(--color-secondary)' }} />
                                    <h3 style={{ fontSize: '1.8rem', color: 'var(--color-primary)' }}>검진 유의사항</h3>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                                    <li style={{ marginBottom: '0.5rem' }}>• 검진 전날 저녁 9시 이후부터는 금식하셔야 합니다. (물, 껌, 담배 포함)</li>
                                    <li style={{ marginBottom: '0.5rem' }}>• 복용 중인 약물이 있는 경우, 반드시 의료진과 상의 후 중단 여부를 결정하세요.</li>
                                    <li style={{ marginBottom: '0.5rem' }}>• 귀중품 및 액세서리는 분실 위험이 있으므로 소지를 자제해 주세요.</li>
                                    <li>• 수면 내시경 시 당일 운전이 불가능하므로 대중교통을 이용해 주세요.</li>
                                </ul>
                            </BentoCard>
                        </BentoGrid>
                    </div>



                </div>
            </section>
        </main>
    );
}
