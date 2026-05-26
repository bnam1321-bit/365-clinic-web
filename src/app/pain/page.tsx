import styles from "./page.module.css";
import { Activity, ShieldCheck, Microscope, HeartPulse, Stethoscope, CheckCircle2, Zap } from "lucide-react";
import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import SplitHero from "@/components/ui/SplitHero";
import { BentoGrid, BentoCard } from "@/components/ui/Bento";
import { ContentSplit } from "@/components/ui/ContentSplit";
export const metadata: Metadata = {
    title: "통증클리닉 | 365내과연합의원",
    description: "근골격계 초음파 및 증식치료(프롤로테라피) 전문 클리닉입니다.",
};

export default function PainPage() {
    return (
        <main className={styles.container}>
            <SplitHero 
                badge="PAIN CLINIC"
                title="통증 클리닉"
                subtitle={<>근골격계 초음파와 증식치료(프롤로테라피)를 통해<br />통증의 근본적인 원인을 정확히 진단하고 안전하게 치료합니다.</>}
            />

            <section className={styles.content}>
                <div className="container">

                    {/* Section 1: Musculoskeletal Ultrasound - ContentSplit */}
                    <div style={{ marginBottom: '6rem' }}>
                        <FadeIn>
                            <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '3rem' }}>근골격계 초음파</h2>
                        </FadeIn>
                        <ContentSplit 
                            content={
                                <div>
                                    <span style={{ color: 'var(--color-secondary)', fontWeight: 700, letterSpacing: '0.1em' }}>ULTRASOUND DIAGNOSIS</span>
                                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '1rem 0', color: 'var(--color-primary)' }}>통증의 원인을<br />눈으로 확인합니다</h2>
                                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                                        관절, 연골, 인대, 건(힘줄), 근육, 신경 등 우리 몸을 움직이는 근골격계 질환을 방사선 노출 없이 대학병원급 초음파로 정밀하게 진단합니다.
                                    </p>
                                    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                                        <div style={{ padding: '1.5rem', background: '#F8FAFC', borderRadius: '1rem', borderLeft: '4px solid var(--color-secondary)' }}>
                                            <h4 style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-primary-dark)', fontSize: '1.2rem' }}>연부 초음파 검사</h4>
                                            <p style={{ color: 'var(--color-text-secondary)' }}>근육, 피부, 피하연부조직의 염증 및 근육 파열 손상 진단</p>
                                        </div>
                                        <div style={{ padding: '1.5rem', background: '#F8FAFC', borderRadius: '1rem', borderLeft: '4px solid var(--color-accent-gold)' }}>
                                            <h4 style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-primary-dark)', fontSize: '1.2rem' }}>관절 초음파 검사</h4>
                                            <p style={{ color: 'var(--color-text-secondary)' }}>어깨, 무릎, 손목 등 관절 주위의 인대 손상 및 염증, 퇴행성 변화 진단</p>
                                        </div>
                                    </div>
                                </div>
                            }
                            media={<img src="/images/samsung-ultrasound.png" alt="근골격계 초음파" style={{ objectFit: 'contain', width: '100%', height: '100%', backgroundColor: '#F0F4F8' }} />}
                        />
                    </div>

                    <div style={{ marginBottom: '8rem' }}>
                        <BentoGrid>
                            <BentoCard size="wide" theme="glass" style={{ background: '#EFF6FF', border: '1px solid #DBEAFE' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <Microscope size={28} style={{ color: 'var(--color-secondary)' }} />
                                    <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>이럴 때 초음파 검사를 받으세요!</h3>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', color: 'var(--color-text-secondary)' }}>
                                    <li><CheckCircle2 size={16} style={{ color: 'var(--color-secondary)', display: 'inline', marginRight: '0.5rem' }}/> 관절 부위를 다친 경우</li>
                                    <li><CheckCircle2 size={16} style={{ color: 'var(--color-secondary)', display: 'inline', marginRight: '0.5rem' }}/> 이유 없이 관절 주위가 붓고 아플 때</li>
                                    <li><CheckCircle2 size={16} style={{ color: 'var(--color-secondary)', display: 'inline', marginRight: '0.5rem' }}/> 관절이 잘 움직이지 않을 때</li>
                                    <li><CheckCircle2 size={16} style={{ color: 'var(--color-secondary)', display: 'inline', marginRight: '0.5rem' }}/> 피부 밑에 종괴가 만져지는 경우</li>
                                    <li><CheckCircle2 size={16} style={{ color: 'var(--color-secondary)', display: 'inline', marginRight: '0.5rem' }}/> 근육 파열과 같은 손상을 입은 경우</li>
                                    <li><CheckCircle2 size={16} style={{ color: 'var(--color-secondary)', display: 'inline', marginRight: '0.5rem' }}/> 봉와직염 등 염증이 생긴 경우</li>
                                </ul>
                            </BentoCard>
                        </BentoGrid>
                    </div>

                    {/* Section 2: Prolotherapy - ContentSplit Reversed */}
                    <div style={{ marginBottom: '6rem' }}>
                        <FadeIn>
                            <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '3rem' }}>증식치료 (프롤로테라피)</h2>
                        </FadeIn>
                        <ContentSplit 
                            reversed={true}
                            content={
                                <div>
                                    <span style={{ color: 'var(--color-accent-gold)', fontWeight: 700, letterSpacing: '0.1em' }}>PROLOTHERAPY</span>
                                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '1rem 0', color: 'var(--color-primary)' }}>손상된 인대와 힘줄을<br />근본적으로 재생합니다</h2>
                                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                                        인대나 힘줄이 뼈에 부착되는 부위에 자극성 주사제를 투여하여, 국소 부위의 성장 인자 생성을 촉진하고 <strong>조직이 스스로 재생되도록 유도하는 비수술적 근본 치료법</strong>입니다.
                                    </p>
                                    <div style={{ padding: '1.5rem', background: '#FDF4FF', borderRadius: '1rem', borderLeft: '4px solid #D946EF' }}>
                                        <h4 style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#86198F', fontSize: '1.2rem' }}>치료 방법</h4>
                                        <p style={{ color: '#A21CAF' }}>초음파로 손상 부위를 직접 확인하며 증식제를 정밀하게 주사합니다. 부위에 따라 1~4주 간격으로 3~6회 시행합니다.</p>
                                    </div>
                                </div>
                            }
                            media={
                                <div style={{ width: '100%', height: '100%', minHeight: '350px', background: 'linear-gradient(135deg, #1E3A8A, #0A192F)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexDirection: 'column', borderRadius: '1.5rem' }}>
                                    <Zap size={64} style={{ color: 'var(--color-accent-gold)', marginBottom: '1.5rem' }} />
                                    <h3 style={{ fontSize: '1.8rem', fontWeight: 800, textAlign: 'center' }}>수술 없이 안전하게<br />통증의 근본 원인 해결</h3>
                                </div>
                            }
                        />
                    </div>

                    <div style={{ marginBottom: '4rem' }}>
                        <BentoGrid>
                            <BentoCard size="large" theme="dark">
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#93C5FD' }}>어떨 때 치료를 받아야 하나요?</h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', color: 'rgba(255,255,255,0.9)' }}>
                                    <li><CheckCircle2 size={16} style={{ color: '#93C5FD', display: 'inline', marginRight: '0.5rem' }}/> 허리디스크, 경추디스크, 만성 좌골신경통</li>
                                    <li><CheckCircle2 size={16} style={{ color: '#93C5FD', display: 'inline', marginRight: '0.5rem' }}/> 퇴행성관절염 및 만성 무릎 질환</li>
                                    <li><CheckCircle2 size={16} style={{ color: '#93C5FD', display: 'inline', marginRight: '0.5rem' }}/> 어깨통증 (오십견, 회전근개파열, 충돌증후군)</li>
                                    <li><CheckCircle2 size={16} style={{ color: '#93C5FD', display: 'inline', marginRight: '0.5rem' }}/> 인대손상 (발목염좌, 팔꿈치 테니스엘보 손상)</li>
                                    <li><CheckCircle2 size={16} style={{ color: '#93C5FD', display: 'inline', marginRight: '0.5rem' }}/> 만성두통, 목뻐근함, 턱관절 증후군</li>
                                    <li><CheckCircle2 size={16} style={{ color: '#93C5FD', display: 'inline', marginRight: '0.5rem' }}/> 수술 후 통증 조절 및 재발 방지</li>
                                </ul>
                            </BentoCard>

                            <BentoCard size="wide" theme="accent">
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>프롤로테라피의 장점</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem' }}>
                                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '0.5rem' }}>원인에 대한 근본적인 재생 치료</div>
                                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '0.5rem' }}>절개나 마취가 없는 비수술적 치료</div>
                                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '0.5rem' }}>입원 없이 일상생활 바로 가능</div>
                                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '0.5rem' }}>합병증이나 부작용 위험 최소화</div>
                                </div>
                            </BentoCard>
                        </BentoGrid>
                    </div>

                </div>
            </section>
        </main>
    );
}
