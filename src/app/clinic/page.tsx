import styles from "./page.module.css";
import type { Metadata } from "next";
import { Activity, Stethoscope, HeartPulse, ShieldCheck, Thermometer, Droplet, Flame, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import SplitHero from "@/components/ui/SplitHero";
import { BentoGrid, BentoCard } from "@/components/ui/Bento";
import { ContentSplit } from "@/components/ui/ContentSplit";

export const metadata: Metadata = {
    title: "내과클리닉 | 365내과연합의원",
    description: "만성질환, 호흡기, 간질환, 갑상선 및 대상포진 클리닉.",
};

export default function ClinicPage() {
    return (
        <main className={styles.container}>
            <SplitHero 
                badge="INTERNAL MEDICINE"
                title="내과 클리닉"
                subtitle={<>만성질환부터 급성질환까지, 대학병원 출신<br />의료진의 전문적인 진료와 케어</>}
            />

            {/* Main Content */}
            <section className={styles.content}>
                <div className="container">

                    {/* 01. ContentSplit - Chronic Disease */}
                    <ContentSplit 
                        content={
                            <div>
                                <span style={{ color: 'var(--color-secondary)', fontWeight: 700, letterSpacing: '0.1em' }}>CHRONIC DISEASE</span>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '1rem 0', color: 'var(--color-primary)' }}>만성질환 클리닉</h2>
                                <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                                    '침묵의 살인자'라 불리는 만성질환. 체계적인 검사와 개인별 맞춤 약물 처방, 생활 습관 교정으로 합병증을 철저하게 예방합니다.
                                </p>
                                <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                                    <div style={{ padding: '1.5rem', background: '#F8FAFC', borderRadius: '1rem', borderLeft: '4px solid var(--color-secondary)' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                            <HeartPulse size={20} style={{ color: 'var(--color-secondary)' }} />
                                            <h4 style={{ fontWeight: 700, color: 'var(--color-primary-dark)', fontSize: '1.2rem', margin: 0 }}>고혈압 / 고지혈증</h4>
                                        </div>
                                        <p style={{ color: 'var(--color-text-secondary)' }}>정기적인 수치 모니터링 및 심뇌혈관 질환 예방 프로그램</p>
                                    </div>
                                    <div style={{ padding: '1.5rem', background: '#F8FAFC', borderRadius: '1rem', borderLeft: '4px solid var(--color-accent-gold)' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                            <Activity size={20} style={{ color: 'var(--color-accent-gold)' }} />
                                            <h4 style={{ fontWeight: 700, color: 'var(--color-primary-dark)', fontSize: '1.2rem', margin: 0 }}>당뇨병</h4>
                                        </div>
                                        <p style={{ color: 'var(--color-text-secondary)' }}>혈당 조절부터 당뇨망막병증, 신장질환 등 합병증 정밀 추적 검사까지 체계적인 관리</p>
                                    </div>
                                </div>
                            </div>
                        }
                        media={<img src="/images/clinic_room.jpg" alt="내과 진료실" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />}
                    />

                    <div style={{ height: '2rem' }}></div>

                    {/* 02. BentoGrid - Other Clinics */}
                    <div>
                        <FadeIn>
                            <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '3rem' }}>특화 진료 클리닉</h2>
                        </FadeIn>
                        <BentoGrid>
                            <BentoCard size="large" theme="dark">
                                <Stethoscope size={40} style={{ marginBottom: '1.5rem', color: '#93C5FD' }} />
                                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>호흡기 클리닉</h3>
                                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                                    감기, 독감, 천식, 폐렴, 만성폐쇄성폐질환(COPD) 등 호흡기 질환에 대한 정확한 진단과 치료를 시행합니다.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'rgba(255,255,255,0.8)' }}>
                                    <li style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>기침, 가래, 호흡곤란 정밀 원인 분석</li>
                                    <li style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>천식 및 알레르기 비염 치료</li>
                                    <li style={{ padding: '0.5rem 0' }}>흉부 X-ray 및 폐기능 검사 연계</li>
                                </ul>
                            </BentoCard>

                            <BentoCard size="wide" theme="light">
                                <ShieldCheck size={32} style={{ marginBottom: '1rem', color: 'var(--color-secondary)' }} />
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>갑상선 / 내분비</h3>
                                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                                    갑상선 기능 항진 및 저하증, 갑상선 결절, 골다공증 등 내분비 계통의 복합적인 질환을 초음파 및 혈액검사로 정밀 진단합니다.
                                </p>
                            </BentoCard>

                            <BentoCard theme="accent">
                                <Droplet size={32} style={{ marginBottom: '1rem', color: 'white' }} />
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>간 클리닉</h3>
                                <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, fontSize: '0.95rem' }}>A/B/C형 간염 및 지방간 항바이러스 치료 및 초음파 추적 관찰</p>
                            </BentoCard>

                            <BentoCard theme="light" style={{ background: '#FEF2F2', border: '1px solid #FECACA' }}>
                                <Flame size={32} style={{ marginBottom: '1rem', color: '#EF4444' }} />
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#B91C1C' }}>대상포진</h3>
                                <p style={{ color: '#7F1D1D', lineHeight: 1.6, fontSize: '0.95rem' }}>골든타임(72시간) 내 항바이러스제 투여 및 극심한 통증 차단</p>
                            </BentoCard>
                        </BentoGrid>
                    </div>

                    <div style={{ height: '6rem' }}></div>

                    {/* 03. BentoGrid - Advantages */}
                    <div>
                        <FadeIn>
                            <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '3rem' }}>365내과연합의원의 4대 원칙</h2>
                        </FadeIn>
                        <BentoGrid>
                            <BentoCard theme="glass" style={{ background: '#F8FAFC', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#DBEAFE', marginBottom: '1rem' }}>01</span>
                                <h3 style={{ fontSize: '1.3rem', color: 'var(--color-primary-dark)' }}>대학병원급 협진</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>각 분야 전문의 3인이 유기적으로 협력하여 다각도 진단</p>
                            </BentoCard>
                            <BentoCard theme="glass" style={{ background: '#F8FAFC', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#DBEAFE', marginBottom: '1rem' }}>02</span>
                                <h3 style={{ fontSize: '1.3rem', color: 'var(--color-primary-dark)' }}>1:1 맞춤 클리닉</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>과잉 진료 없는 개개인에 꼭 맞춘 정확하고 정직한 처방</p>
                            </BentoCard>
                            <BentoCard theme="glass" style={{ background: '#F8FAFC', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#DBEAFE', marginBottom: '1rem' }}>03</span>
                                <h3 style={{ fontSize: '1.3rem', color: 'var(--color-primary-dark)' }}>ONE-STOP 검진</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>진료, 검사, 결과 상담까지 하루 안에 끝나는 효율적인 동선</p>
                            </BentoCard>
                            <BentoCard theme="glass" style={{ background: '#F8FAFC', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#DBEAFE', marginBottom: '1rem' }}>04</span>
                                <h3 style={{ fontSize: '1.3rem', color: 'var(--color-primary-dark)' }}>철저한 감염예방</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>1:1 멸균 기구 사용 원칙, 내시경 및 기구 철저한 소독 관리</p>
                            </BentoCard>
                        </BentoGrid>
                    </div>

                </div>
            </section>
        </main>
    );
}
