import styles from "./page.module.css";
import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import SplitHero from "@/components/ui/SplitHero";
import { Activity, Stethoscope, HeartPulse, ShieldCheck, Thermometer } from "lucide-react";

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

                    {/* Chronic Diseases Grid */}
                    <div className="editorial-header">
                        <h2 className="editorial-title">만성 및 호흡기 질환</h2>
                        <p className="editorial-desc">꾸준한 관리가 필수인 만성질환부터 호흡기 질환까지 체계적으로 관리합니다.</p>
                    </div>
                    <div className="editorial-grid">
                        <FadeIn delay={0.1}>
                            <div className="editorial-card">
                                <div className="bg-number">01</div>
                                <div className="card-content">
                                    <h3 className="card-title">고혈압 / 고지혈증</h3>
                                    <p className="card-text">
                                        침묵의 살인자라 불리는 고혈압과 고지혈증은 꾸준한 관리가 필수입니다.<br />
                                        개인별 맞춤 약물 처방과 생활 습관 교정을 통해 합병증을 예방합니다.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="editorial-card offset-card">
                                <div className="bg-number">02</div>
                                <div className="card-content">
                                    <h3 className="card-title">당뇨병</h3>
                                    <p className="card-text">
                                        혈당 조절뿐만 아니라 당뇨망막병증, 신장질환 등 합병증 검사까지<br />
                                        체계적인 관리 시스템을 제공합니다.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <div className="editorial-card">
                                <div className="bg-number">03</div>
                                <div className="card-content">
                                    <h3 className="card-title">호흡기 질환</h3>
                                    <p className="card-text">
                                        감기, 독감, 천식, 폐렴, 만성폐쇄성폐질환(COPD) 등<br />
                                        호흡기 질환에 대한 정확한 진단과 치료를 시행합니다.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.4}>
                            <div className="editorial-card offset-card">
                                <div className="bg-number">04</div>
                                <div className="card-content">
                                    <h3 className="card-title">갑상선 / 내분비</h3>
                                    <p className="card-text">
                                        갑상선 기능 항진/저하증, 갑상선 결절, 골다공증 등<br />
                                        내분비 계통의 질환을 정밀하게 진단하고 관리합니다.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <div style={{ height: '4rem' }}></div>

                    {/* Liver Disease & Shingles - Using Editorial Layout */}
                    <div className="editorial-header">
                        <h2 className="editorial-title">특수 진료 클리닉</h2>
                        <p className="editorial-desc">간 질환 및 대상포진 등 특화된 진료를 제공합니다.</p>
                    </div>
                    <div className="editorial-grid">
                        <FadeIn delay={0.5}>
                            <div className="editorial-card">
                                <div className="bg-number">L</div>
                                <div className="card-content">
                                    <h3 className="card-title">간 클리닉</h3>
                                    <p className="card-subtitle">A형 / B형 / C형 간염</p>
                                    <p className="card-text">
                                        바이러스 감염에 의한 간의 염증 질환을 진단하고 항바이러스제 치료 및 예방접종을 시행합니다.
                                    </p>
                                    <p className="card-subtitle">지방간</p>
                                    <p className="card-text">
                                        간 내 과도한 지방이 쌓이는 상태로, 알코올성 및 비알코올성 지방간의 원인을 파악하여 관리합니다.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.6}>
                            <div className="editorial-card offset-card">
                                <div className="bg-number">S</div>
                                <div className="card-content">
                                    <h3 className="card-title">대상포진 클리닉</h3>
                                    <p className="card-text">
                                        신경이 있는 부위면 어디든 발생할 수 있으나, 주로 몸통이나 엉덩이 부위에 잘 발생합니다.
                                        심한 통증과 감각 이상이 1~3일간 나타나고, 그 후 붉은 발진과 물집이 나타납니다.
                                    </p>
                                    <p className="card-subtitle">치료 골든타임</p>
                                    <p className="card-text">
                                        피부 발진 발생 후 72시간 내에 항바이러스제를 투여해야 효과가 좋습니다.
                                        통증이 심할 경우 신경차단술 등의 적극적인 통증 치료가 필요합니다.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Advantages Section */}
                    <FadeIn delay={0.7} fullWidth={true}>
                        <div className={styles.advantages}>
                            <h2 className={styles.advantagesHeader}>365내과연합의원의 장점</h2>
                            <div className={styles.advantagesGrid}>
                                <div className={styles.advCard}>
                                    <span className={styles.advNumber}>01</span>
                                    <h3 className={styles.advTitle}>대학병원급 협진</h3>
                                    <p className={styles.advDesc}>각 분야 전문의 3인이 협진하여 최상의 진료를 제공합니다.</p>
                                </div>
                                <div className={styles.advCard}>
                                    <span className={styles.advNumber}>02</span>
                                    <h3 className={styles.advTitle}>1:1 맞춤 클리닉</h3>
                                    <p className={styles.advDesc}>개인에게 맞는 정밀 진료와 처방으로 빠른 회복을 돕습니다.</p>
                                </div>
                                <div className={styles.advCard}>
                                    <span className={styles.advNumber}>03</span>
                                    <h3 className={styles.advTitle}>ONE-DAY 검진</h3>
                                    <p className={styles.advDesc}>바쁜 현대인을 위해 진료, 검사, 결과 상담 시간을 최소화하였습니다.</p>
                                </div>
                                <div className={styles.advCard}>
                                    <span className={styles.advNumber}>04</span>
                                    <h3 className={styles.advTitle}>철저한 감염예방</h3>
                                    <p className={styles.advDesc}>1:1 기구 사용 및 철저한 소독 시스템으로 안전을 최우선으로 합니다.</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                </div>
            </section>
        </main>
    );
}
