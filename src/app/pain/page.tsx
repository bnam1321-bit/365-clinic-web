import styles from "./page.module.css";
import { Activity, Zap, ShieldCheck, Microscope, HeartPulse, Stethoscope, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
    title: "통증클리닉 | 365내과연합의원",
    description: "근골격계 초음파 및 증식치료(프롤로테라피) 전문 클리닉입니다.",
};

export default function PainPage() {
    return (
        <main className={styles.container}>
            <section className={styles.header}>
                <FadeIn>
                    <span className={styles.badge}>PAIN CLINIC</span>
                    <h1 className={styles.title}>통증 클리닉</h1>
                    <p className={styles.subtitle}>
                        근골격계 초음파와 증식치료(프롤로테라피)를 통해<br />
                        통증의 근본적인 원인을 정확히 진단하고 안전하게 치료합니다.
                    </p>
                </FadeIn>
            </section>

            <section className={styles.content}>
                <div className="container">

                    {/* Section 1: Musculoskeletal Ultrasound */}
                    <FadeIn delay={0.1}>
                        <div className={styles.sectionHeader}>
                            <Microscope size={48} className={styles.sectionIcon} />
                            <h2>근골격계 초음파</h2>
                            <p>MUSCULOSKELETAL ULTRASOUND</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className={styles.ultrasoundIntro}>
                            <div className={styles.ultrasoundImageWrapper}>
                                <img src="/images/samsung-ultrasound.png" alt="삼성 초음파 기기" className={styles.ultrasoundImage} />
                            </div>
                            <div className={styles.mainInfoCard}>
                                <h3 className={styles.mainInfoTitle}>근골격계 초음파검사란?</h3>
                                <p className={styles.mainInfoDesc}>
                                    관절, 연골, 인대, 건(힘줄), 점액낭, 근육, 신경, 혈관 등 우리 몸을 움직이는 근골격에 시행하는 초음파 검사입니다.
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    <div className={styles.painGrid}>
                        <FadeIn delay={0.3}>
                            <div className={styles.painItem}>
                                <Activity size={36} color="#3B82F6" />
                                <h3 className={styles.painTitle}>연부초음파검사</h3>
                                <p className={styles.painDesc}>근육, 피부, 피하연부조직에 생긴 종괴, 염증, 근육의 파열 및 손상등을 진단하는 검사입니다.</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.4}>
                            <div className={styles.painItem}>
                                <HeartPulse size={36} color="#EF4444" />
                                <h3 className={styles.painTitle}>관절초음파검사</h3>
                                <p className={styles.painDesc}>어깨, 팔꿈치, 손목, 손, 고관절, 무릎, 발목, 발 등 인체의 다양한 관절의 염증과 관절 주위의 인대손상, 건(힘줄)의 염증 및 퇴행성 변화등을 정확히 진단하는 검사입니다.</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.5}>
                            <div className={styles.painItem}>
                                <Zap size={36} color="#F59E0B" />
                                <h3 className={styles.painTitle}>혈관초음파검사</h3>
                                <p className={styles.painDesc}>팔다리 동정맥의 혈류량을 검사하고 이를 통해 폐색 또는 협착 정도를 파악하는 검사입니다.</p>
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.6}>
                        <div className={styles.listSection}>
                            <h3 className={styles.listTitle}>이럴 때 검사 받으세요!</h3>
                            <ul className={styles.checkList}>
                                <li><CheckCircle2 size={20} className={styles.checkIcon}/> 관절부위를 다친 경우</li>
                                <li><CheckCircle2 size={20} className={styles.checkIcon}/> 이유없이 관절주위가 붓고 아픈 경우</li>
                                <li><CheckCircle2 size={20} className={styles.checkIcon}/> 관절이 잘 움직이지 않고 기능이 저하된 경우</li>
                                <li><CheckCircle2 size={20} className={styles.checkIcon}/> 종괴가 만져지는 경우</li>
                                <li><CheckCircle2 size={20} className={styles.checkIcon}/> 근육파열과 같은 손상을 입은 경우</li>
                                <li><CheckCircle2 size={20} className={styles.checkIcon}/> 봉와직염, 근육염등 염증이 생긴 경우</li>
                                <li><CheckCircle2 size={20} className={styles.checkIcon}/> 혈관이 꾸불꾸불 튀어 나와 있는 경우</li>
                                <li><CheckCircle2 size={20} className={styles.checkIcon}/> 다리가 자주 붓고 아픈경우</li>
                                <li><CheckCircle2 size={20} className={styles.checkIcon}/> 팔다리의 혈액순환장애가 의심되는 경우</li>
                            </ul>
                        </div>
                    </FadeIn>

                    <div className={styles.divider}></div>

                    {/* Section 2: Prolotherapy */}
                    <FadeIn delay={0.1}>
                        <div className={styles.sectionHeader}>
                            <Stethoscope size={48} className={styles.sectionIcon} />
                            <h2>증식치료</h2>
                            <p>PROLOTHERAPY</p>
                        </div>
                    </FadeIn>

                    <div className={styles.treatmentSection}>
                        <div className={styles.treatmentGrid}>
                            <FadeIn delay={0.2}>
                                <div className={styles.treatmentCard}>
                                    <div className={styles.treatmentHeader}>
                                        <ShieldCheck size={28} className={styles.blueIcon} />
                                        <h3 className={styles.treatmentTitle}>증식치료란?</h3>
                                    </div>
                                    <p className={styles.treatmentText}>
                                        자극성이 있는 주사제를 인대나 힘줄이 뼈에 부착되는 부위에 주사하여 국소부위의 성장 인자의 생성을 촉진하고 염증이 일어나게 하여 혈액순환을 증가시키고 영양분 공급을 증가시켜 <strong>조직이 재생되도록 하는 치료</strong>입니다.
                                    </p>
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.3}>
                                <div className={styles.treatmentCard}>
                                    <div className={styles.treatmentHeader}>
                                        <Activity size={28} className={styles.blueIcon} />
                                        <h3 className={styles.treatmentTitle}>치료방법은 어떻게 되나요?</h3>
                                    </div>
                                    <p className={styles.treatmentText}>
                                        힘줄 또는 인대가 약화 된 부위를 초음파로 관찰하면서 증식제를 직접 주사합니다. 부위에 따라 1주 또는 4주 간격으로 3회 ~ 6회 시행합니다.
                                    </p>
                                </div>
                            </FadeIn>
                        </div>

                        <FadeIn delay={0.4}>
                            <div className={styles.advantagesWrapper}>
                                <h3 className={styles.listTitle}>증식치료의 장점</h3>
                                <div className={styles.advantageGrid}>
                                    <div className={styles.advantageItem}>
                                        <span className={styles.numberBadge}>1</span>
                                        <p>원인에 대한 근본적인 치료 방법</p>
                                    </div>
                                    <div className={styles.advantageItem}>
                                        <span className={styles.numberBadge}>2</span>
                                        <p>비수술적 치료로 안전합니다</p>
                                    </div>
                                    <div className={styles.advantageItem}>
                                        <span className={styles.numberBadge}>3</span>
                                        <p>수술에 비하여 가격이 저렴합니다</p>
                                    </div>
                                    <div className={styles.advantageItem}>
                                        <span className={styles.numberBadge}>4</span>
                                        <p>입원이 필요하지 않습니다</p>
                                    </div>
                                    <div className={styles.advantageItem}>
                                        <span className={styles.numberBadge}>5</span>
                                        <p>합병증이나 부작용의 위험이 없다</p>
                                    </div>
                                    <div className={styles.advantageItem}>
                                        <span className={styles.numberBadge}>6</span>
                                        <p>치료하면서 평상시의 가벼운 운동이나 생활 유지 가능</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.5}>
                            <div className={styles.listSection} style={{ marginTop: '4rem', backgroundColor: 'white', border: '1px solid #E2E8F0' }}>
                                <h3 className={styles.listTitle}>어떨 때 치료를 받아야 하나요?</h3>
                                <ul className={styles.checkList}>
                                    <li><CheckCircle2 size={20} className={styles.checkIcon}/> 허리디스크, 경추디스크</li>
                                    <li><CheckCircle2 size={20} className={styles.checkIcon}/> 퇴행성관절염 및 만성 무릎 질환</li>
                                    <li><CheckCircle2 size={20} className={styles.checkIcon}/> 만성 허리통증 및 좌골신경통</li>
                                    <li><CheckCircle2 size={20} className={styles.checkIcon}/> 어깨통증 (오십견, 회전근개파열, 충돌증후군)</li>
                                    <li><CheckCircle2 size={20} className={styles.checkIcon}/> 인대손상 (발목염좌, 팔꿈치 손상)</li>
                                    <li><CheckCircle2 size={20} className={styles.checkIcon}/> 사고 후유증이나 스포츠 손상 후 발생한 합병증</li>
                                    <li><CheckCircle2 size={20} className={styles.checkIcon}/> 만성두통, 목뻐근함, 턱관절</li>
                                    <li><CheckCircle2 size={20} className={styles.checkIcon}/> 수술 후 통증 (통증의 조절 및 재발방지)</li>
                                    <li><CheckCircle2 size={20} className={styles.checkIcon}/> 골반 불균형, 만성미골통, 부정렬증후군</li>
                                </ul>
                            </div>
                        </FadeIn>
                        

                    </div>

                </div>
            </section>
        </main>
    );
}
