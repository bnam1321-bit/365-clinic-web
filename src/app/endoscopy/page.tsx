import styles from "./page.module.css";
import { Microscope, AlertCircle, Scissors, Activity, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "내시경클리닉 | 365내과연합의원",
    description: "위내시경, 대장내시경, 용종절제술 및 주의사항 안내.",
};

import FadeIn from "@/components/ui/FadeIn";
import SplitHero from "@/components/ui/SplitHero";
import { BentoGrid, BentoCard } from "@/components/ui/Bento";
import { ContentSplit } from "@/components/ui/ContentSplit";
export default function EndoscopyPage() {
    return (
        <main className={styles.container}>

            <SplitHero 
                badge="DIGESTIVE ENDOSCOPY"
                title="내시경 클리닉"
                subtitle={<>소화기내과 전문의가 직접 시행하는 정밀하고 안전한 내시경.<br />대학병원급 최고사양 장비로 미세 병변까지 찾아냅니다.</>}
            />

            {/* Main Content */}
            <section className={styles.content}>
                <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>

                    {/* 01. Equipment - ContentSplit */}
                    <ContentSplit 
                        content={
                            <div>
                                <span style={{ color: 'var(--color-secondary)', fontWeight: 700, letterSpacing: '0.1em' }}>OLYMPUS CV-290</span>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '1rem 0', color: 'var(--color-primary)' }}>대학병원급 최고사양 내시경 기기</h2>
                                <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
                                    365내과연합의원은 대학병원에서 사용하는 것과 동일한 <strong>최상위 등급의 고해상도 장비</strong>를 도입하여 운영하고 있습니다. 초고화질 영상과 특수 정밀 관찰 기술을 통해 눈에 잘 띄지 않는 아주 미세한 조기 암 병변까지도 놓치지 않고 정확하게 진단합니다.
                                </p>
                            </div>
                        }
                        media={<img src="/images/olympus-endoscopy.jpg" alt="Olympus CV-290" />}
                    />

                    {/* 02. Endoscopy Types - BentoGrid */}
                    <div>
                        <FadeIn>
                            <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '3rem' }}>주요 내시경 클리닉</h2>
                        </FadeIn>
                        <BentoGrid>
                            <BentoCard size="wide" theme="primary">
                                <Microscope size={36} style={{ marginBottom: '1rem', color: '#93C5FD' }} />
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>위내시경 (Gastroscopy)</h3>
                                <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>식도, 위, 십이지장의 질환을 정밀하게 관찰합니다.</p>
                                <ul style={{ listStyle: 'circle', paddingLeft: '1.5rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8 }}>
                                    <li>수면 / 비수면 선택 가능 (안전 모니터링)</li>
                                    <li>역류성 식도염, 위염, 위궤양, 위암 진단</li>
                                    <li>헬리코박터균 검사 및 제균 치료 상담</li>
                                </ul>
                            </BentoCard>
                            <BentoCard size="wide" theme="light">
                                <Activity size={36} style={{ marginBottom: '1rem', color: 'var(--color-secondary)' }} />
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>대장내시경 (Colonoscopy)</h3>
                                <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>항문을 통해 대장 전체와 소장 말단 부위를 관찰합니다.</p>
                                <ul style={{ listStyle: 'circle', paddingLeft: '1.5rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
                                    <li>가스 통증 없는 CO2 가스 주입 시스템</li>
                                    <li>용종 발견 시 당일 즉시 절제술 시행 (One-stop)</li>
                                    <li>철저한 소독 관리 (1:1 기구 사용 원칙)</li>
                                </ul>
                            </BentoCard>
                        </BentoGrid>
                    </div>

                    {/* 03. Polypectomy - ContentSplit Reversed */}
                    <ContentSplit 
                        reversed={true}
                        content={
                            <div>
                                <span style={{ color: 'var(--color-accent-gold)', fontWeight: 700, letterSpacing: '0.1em' }}>ONE-STOP CARE</span>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '1rem 0', color: 'var(--color-primary)' }}>당일 용종 절제술</h2>
                                <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                                    대장내시경 중 발견된 용종을 <strong>당일 즉시 절제</strong>합니다. 대학병원 출신 전문의가 직접 시술하여 더욱 안전하고 정확합니다.
                                </p>
                                <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                                    <div style={{ padding: '1.5rem', background: '#F8FAFC', borderRadius: '1rem', borderLeft: '4px solid var(--color-secondary)' }}>
                                        <h4 style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-primary-dark)' }}>대장 용종이란?</h4>
                                        <p style={{ color: 'var(--color-text-secondary)' }}>장 점막이 돌출된 상태로, 제거하면 대장암 예방이 가능합니다.</p>
                                    </div>
                                    <div style={{ padding: '1.5rem', background: '#F8FAFC', borderRadius: '1rem', borderLeft: '4px solid var(--color-accent-gold)' }}>
                                        <h4 style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-primary-dark)' }}>선종성 용종</h4>
                                        <p style={{ color: 'var(--color-text-secondary)' }}>암으로 발전할 가능성이 매우 높아 반드시 제거해야 합니다.</p>
                                    </div>
                                </div>
                            </div>
                        }
                        media={
                            <div style={{ width: '100%', height: '100%', minHeight: '400px', background: 'linear-gradient(135deg, #1E3A8A, #0A192F)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexDirection: 'column' }}>
                                <Scissors size={64} style={{ color: '#93C5FD', marginBottom: '1.5rem' }} />
                                <h3 style={{ fontSize: '2rem', fontWeight: 800 }}>Polypectomy</h3>
                                <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '1rem' }}>대장암 예방의 핵심</p>
                            </div>
                        }
                    />

                    {/* 04. Precautions */}
                    <div style={{ marginTop: '2rem' }}>
                        <FadeIn>
                            <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '3rem' }}>내시경 검사 주의사항</h2>
                        </FadeIn>
                        <BentoGrid>
                            <BentoCard size="wide" theme="glass" style={{ background: '#EFF6FF', border: '1px solid #DBEAFE' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <AlertCircle size={28} style={{ color: 'var(--color-secondary)' }} />
                                    <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>시술 전 주의사항</h3>
                                </div>
                                <ul style={{ listStyle: 'circle', paddingLeft: '1.5rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
                                    <li><strong>검사 전 날 식사</strong>: 아침, 점심은 밥, 저녁(5시경)은 미음 또는 죽</li>
                                    <li><strong>검사 시간 오전</strong>: 1차 복용(전날 7시) → 2차 복용(당일 아침 6시)</li>
                                    <li>약 복용 후에는 제한 없이 물을 많이 섭취하세요.</li>
                                    <li>복용 중인 약물(항응고제, 당뇨약 등)은 미리 말씀해 주세요.</li>
                                </ul>
                            </BentoCard>

                            <BentoCard size="wide" theme="glass" style={{ background: '#FDF4FF', border: '1px solid #FBCFE8' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <AlertCircle size={28} style={{ color: '#BE185D' }} />
                                    <h3 style={{ fontSize: '1.5rem', color: '#831843' }}>시술 후 주의사항</h3>
                                </div>
                                <ul style={{ listStyle: 'circle', paddingLeft: '1.5rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
                                    <li>시술 후 복부 팽만감이 있을 수 있습니다. (가스 배출 노력 필요)</li>
                                    <li>시술 후 <strong>한 달 동안 음주, 자극적인 음식</strong> 등은 삼갑니다.</li>
                                    <li>검사 후 출혈이 있을 수 있으며, 양이 많을 경우 병원 연락 바랍니다.</li>
                                    <li>시술 후 일주일 정도는 과격한 운동이나 사우나를 피하세요.</li>
                                </ul>
                            </BentoCard>
                        </BentoGrid>
                    </div>



                </div>
            </section>
        </main>
    );
}
