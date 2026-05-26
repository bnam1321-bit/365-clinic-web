import styles from "./page.module.css";
import { Zap, Activity, HeartPulse, ShieldCheck, Search } from "lucide-react";
import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import SplitHero from "@/components/ui/SplitHero";
import { BentoGrid, BentoCard } from "@/components/ui/Bento";
import { ContentSplit } from "@/components/ui/ContentSplit";
export const metadata: Metadata = {
    title: "초음파클리닉 | 365내과연합의원",
    description: "복부, 심장, 갑상선, 유방, 경동맥 정밀 초음파 검사.",
};

export default function UltrasoundPage() {
    return (
        <main className={styles.container}>
            <SplitHero 
                badge="ULTRASOUND CLINIC"
                title="초음파 클리닉"
                subtitle={<>대학병원급 하이엔드 장비로 정밀하게 진단합니다.<br />방사선 피폭 걱정 없이 안전한 정밀 검사</>}
            />

            {/* Main Content */}
            <section className={styles.content}>
                <div className="container">
                    {/* Intro */}
                    <div className={styles.introSection}>
                        <h2 className={styles.introTitle}>초음파검사란?</h2>
                        <h3 style={{ fontSize: '1.2rem', color: 'var(--color-secondary)', marginBottom: '1rem' }}>
                            방사선 노출이 없으며, 대부분의 환자들에게<br />안전하고 편리한 검사 방법입니다.
                        </h3>
                        <p className={styles.introDesc}>
                            인체에 무해한 초음파(음파의 일종)를 몸 안에 투과시킨 후 반사초음파를 이용하여 모니터에 영상을 나타내는 검사입니다.
                            간, 담낭, 췌장, 비장, 혈관계를 포함한 질병의 유무, 병소의 크기와 양상을 진단하며 인체에 해가 없습니다.
                        </p>
                    </div>

                    {/* Services Summary - BentoGrid */}
                    <BentoGrid style={{ marginBottom: '8rem' }}>
                        <BentoCard theme="primary">
                            <Activity size={36} style={{ marginBottom: '1rem', color: '#93C5FD' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>복부 초음파</h3>
                            <p>간, 담낭, 췌장, 신장, 비장 등 주요 복부 장기의 상태 정밀 관찰</p>
                        </BentoCard>
                        <BentoCard theme="light">
                            <HeartPulse size={36} style={{ marginBottom: '1rem', color: 'var(--color-secondary)' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>심장 초음파</h3>
                            <p>심장의 구조와 기능을 평가하여 심혈관 질환 조기 진단</p>
                        </BentoCard>
                        <BentoCard theme="light">
                            <ShieldCheck size={36} style={{ marginBottom: '1rem', color: 'var(--color-secondary)' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>갑상선/경동맥</h3>
                            <p>결절, 암, 뇌졸중 위험 인자 등 혈관 및 내분비 정밀 검사</p>
                        </BentoCard>
                        <BentoCard theme="accent">
                            <Zap size={36} style={{ marginBottom: '1rem', color: 'white' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>유방 초음파</h3>
                            <p>방사선 노출 없이 치밀 유방 등 유방 질환의 높은 진단 정확도</p>
                        </BentoCard>
                    </BentoGrid>

                    {/* 01 Abdomen & Heart - ContentSplit */}
                    <div style={{ marginBottom: '6rem' }}>
                        <FadeIn>
                            <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '3rem' }}>주요 초음파 검사 안내</h2>
                        </FadeIn>

                        <ContentSplit 
                            content={
                                <div>
                                    <span style={{ color: 'var(--color-secondary)', fontWeight: 700, letterSpacing: '0.1em' }}>ABDOMEN & HEART</span>
                                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '1rem 0', color: 'var(--color-primary)' }}>복부 및 심장 초음파</h2>
                                    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column', marginTop: '2rem' }}>
                                        <div style={{ padding: '1.5rem', background: '#F8FAFC', borderRadius: '1rem', borderLeft: '4px solid var(--color-secondary)' }}>
                                            <h4 style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-primary-dark)', fontSize: '1.2rem' }}>복부 초음파</h4>
                                            <p style={{ color: 'var(--color-text-secondary)' }}>가장 일반적인 초음파 검사로 간, 담낭, 담관, 췌장, 비장, 신장 등 상복부 장기들의 상태를 확인합니다. 맹장염 의심 시 충수 초음파도 시행합니다.</p>
                                        </div>
                                        <div style={{ padding: '1.5rem', background: '#F8FAFC', borderRadius: '1rem', borderLeft: '4px solid var(--color-accent-gold)' }}>
                                            <h4 style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-primary-dark)', fontSize: '1.2rem' }}>심장 초음파 (TTE)</h4>
                                            <p style={{ color: 'var(--color-text-secondary)' }}>비침습적이고 안전하게 심장의 구조와 기능을 평가하는 가장 중요한 검사 중 하나입니다. 약 20분~1시간 내에 통증 없이 검사가 진행됩니다.</p>
                                        </div>
                                    </div>
                                </div>
                            }
                            media={
                                <div style={{ width: '100%', height: '100%', minHeight: '350px', background: 'linear-gradient(135deg, #F0F4F8, #DBEAFE)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', flexDirection: 'column', borderRadius: '1.5rem' }}>
                                    <Activity size={64} style={{ color: 'var(--color-secondary)', marginBottom: '1.5rem' }} />
                                    <h3 style={{ fontSize: '1.8rem', fontWeight: 800 }}>대학병원급 고해상도 장비</h3>
                                </div>
                            }
                        />
                    </div>

                    {/* 02 Other Ultrasounds - BentoGrid Large */}
                    <div style={{ marginTop: '2rem' }}>
                        <BentoGrid>
                            <BentoCard size="large" theme="light">
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>갑상선 초음파 검사</h3>
                                <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                                    갑상선 및 주변 기관의 형태적 이상, 특히 <strong>갑상선 결절</strong> 진단에 있어 해상도가 가장 뛰어난 필수 검사입니다.
                                </p>
                                <ul style={{ listStyle: 'none', paddingLeft: '0', color: 'var(--color-text-secondary)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <li style={{ position: 'relative', paddingLeft: '1.2rem' }}><span style={{ position: 'absolute', left: 0, color: 'var(--color-secondary)' }}>•</span> 갑상선 종괴가 촉지 되거나 미만성 질환 의심 시</li>
                                    <li style={{ position: 'relative', paddingLeft: '1.2rem' }}><span style={{ position: 'absolute', left: 0, color: 'var(--color-secondary)' }}>•</span> 중재적 시술 후 추적 검사 및 암 수술 후 전이 판단</li>
                                    <li style={{ position: 'relative', paddingLeft: '1.2rem' }}><span style={{ position: 'absolute', left: 0, color: 'var(--color-secondary)' }}>•</span> 고위험군 선별 검사</li>
                                </ul>
                            </BentoCard>

                            <BentoCard size="wide" theme="light">
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>유방 초음파 검사</h3>
                                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                                    치밀 유방 구성이 많은 한국 여성에게 특히 유용하며 방사선 노출이 없습니다. 양성 혹(섬유선종), 유방암, 낭종 등을 높은 정확도로 구분합니다. 젊은 여성, 임산부에게도 안전합니다.
                                </p>
                            </BentoCard>

                            <BentoCard size="wide" theme="dark">
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>경동맥 초음파 검사</h3>
                                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                                    경동맥은 뇌로 가는 혈관의 80%가 이어집니다. 혈류량과 경동맥 협착 정도를 측정해 <strong>뇌졸중 위험도</strong>를 진단합니다. 당뇨, 고혈압 환자 필수 검사입니다.
                                </p>
                            </BentoCard>
                        </BentoGrid>
                    </div>



                </div>
            </section>
        </main>
    );
}
