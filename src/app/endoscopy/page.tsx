import styles from "./page.module.css";
import { Microscope, AlertCircle, Scissors, Activity, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "내시경클리닉 | 365내과연합의원",
    description: "위내시경, 대장내시경, 용종절제술 및 주의사항 안내.",
};

import FadeIn from "@/components/ui/FadeIn";

export default function EndoscopyPage() {
    return (
        <main className={styles.container}>

            {/* Page Header */}
            <section className={styles.header}>
                <div className="container">
                    <span className={styles.badge}>DIGESTIVE ENDOSCOPY</span>
                    <h1 className={styles.title}>내시경클리닉</h1>
                    <p className={styles.subtitle}>
                        소화기내과 전문의가 직접 시행하는 정밀하고 안전한 내시경.<br />
                        대학병원급 Olympus CV-290 장비로 미세 병변까지 찾아냅니다.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className={styles.content}>
                <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>

                    {/* 01. General Endoscopy Info */}
                    <div>
                        <div className={styles.sectionHeader}>
                            <Microscope size={48} className={styles.sectionIcon} />
                            <h2>소화기 내시경 센터</h2>
                            <p>위암, 대장암 예방의 시작은 정기적인 내시경 검사입니다.</p>
                        </div>

                        <section className={styles.content}>
                            <FadeIn delay={0.1}>
                                <div className={styles.card}>
                                    <div className={styles.cardIcon}><Microscope size={36} /></div>
                                    <h3>위 내시경</h3>
                                    <p>식도, 위, 십이지장의 염증, 궤양, 암 등을 조기 진단합니다. 수면 내시경으로 편안하게 검사받으실 수 있습니다.</p>
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.2}>
                                <div className={styles.card}>
                                    <div className={styles.cardIcon}><Activity size={36} /></div>
                                    <h3>대장 내시경</h3>
                                    <p>대장암의 씨앗인 대장 용종을 발견하고 즉시 절제합니다. 최신 세척 소독기로 감염 걱정 없이 안전합니다.</p>
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.3}>
                                <div className={styles.card}>
                                    <div className={styles.cardIcon}><ShieldCheck size={36} /></div>
                                    <h3>용종 절제술</h3>
                                    <p>발견된 용종은 현장에서 즉시 제거(Polypectomy)하여 대장암을 효과적으로 예방합니다. 대학병원 수준의 시술이 가능합니다.</p>
                                </div>
                            </FadeIn>
                        </section>

                        <div className={styles.grid2}>
                            <div className={styles.card}>
                                <h3>위내시경 (Gastroscopy)</h3>
                                <p className={styles.cardDesc}>식도, 위, 십이지장의 질환을 정밀하게 관찰합니다.</p>
                                <ul className={styles.featureList}>
                                    <li>수면 / 비수면 선택 가능 (안전 모니터링)</li>
                                    <li>역류성 식도염, 위염, 위궤양, 위암 진단</li>
                                    <li>헬리코박터균 검사 및 제균 치료 상담</li>
                                </ul>
                            </div>
                            <div className={styles.card}>
                                <h3>대장내시경 (Colonoscopy)</h3>
                                <p className={styles.cardDesc}>항문을 통해 대장 전체와 소장 말단 부위를 관찰합니다.</p>
                                <ul className={styles.featureList}>
                                    <li>가스 통증 없는 CO2 가스 주입 시스템</li>
                                    <li>용종 발견 시 당일 즉시 절제술 시행 (One-stop)</li>
                                    <li>철저한 소독 관리 (1:1 기구 사용 원칙)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 02. Polypectomy Info */}
                    <div>
                        <div className={styles.sectionHeader}>
                            <Scissors size={48} className={styles.sectionIcon} />
                            <h2>용종절제술</h2>
                            <p>대장암은 95% 이상이 용종이 자라면서 발병합니다.</p>
                        </div>

                        {/* 용종 절제술 설명 추가 영역 */}
                        <FadeIn delay={0.4}>
                            <section className={styles.polypSection}>
                                <h3>당일 용종 절제술 (One-Stop)</h3>
                                <p>
                                    본원에서는 대장내시경 중 발견된 용종을 <strong>당일 즉시 절제</strong>합니다.<br />
                                    대학병원 출신 전문의가 직접 시술하여 더욱 안전하고 정확합니다.
                                </p>
                                <div className={styles.polypTypes}>
                                    <div className={styles.typeCard}>
                                        <h4>선종성 용종</h4>
                                        <p>대장암으로 진행될 가능성이 높아 반드시 제거해야 합니다.</p>
                                    </div>
                                    <div className={styles.typeCard}>
                                        <h4>과형성 용종</h4>
                                        <p>일반적으로 암으로 발전하지 않으나 추적 관찰이 필요합니다.</p>
                                    </div>
                                </div>
                            </section>
                        </FadeIn>

                        <div className={styles.infoBox}>
                            <h3>대장 용종이란?</h3>
                            <p className={styles.infoDesc}>
                                용종(폴립)은 장 점막이 비정상적으로 자라나 흑처럼 돌출된 상태를 말합니다.
                                대장내시경을 통해 용종을 미리 제거하면 대장암의 공포에서 벗어날 수 있습니다.
                                일반적으로 5mm 이상의 큰 용종은 출혈 위험이 있어 용종절제술이 필요합니다.
                            </p>

                            <h4 style={{ marginTop: '3rem', marginBottom: '1.5rem', fontSize: '1.4rem', color: '#111827', fontWeight: 700 }}>용종의 종류</h4>
                            <div className={styles.polypGrid}>
                                <div className={styles.polypCard}>
                                    <div><span className={styles.polypNumber}>01</span><span className={styles.polypTitle}>선종</span></div>
                                    <p className={styles.polypDesc}>
                                        시간이 지나면 암으로 발전할 가능성이 높아 발견 즉시 제거합니다.
                                        크기가 1cm 이상이거나 융모 형태일 경우 진행성 선종이라 부릅니다.
                                    </p>
                                </div>
                                <div className={styles.polypCard}>
                                    <div><span className={styles.polypNumber}>02</span><span className={styles.polypTitle}>과형성 용종</span></div>
                                    <p className={styles.polypDesc}>
                                        과형성 용종과 선종이 혼합된 경우 크기가 커지고 세포 변이가 나타납니다.
                                        톱니 형태의 선종으로 변하면서 암으로 진행될 수 있습니다.
                                    </p>
                                </div>
                                <div className={styles.polypCard}>
                                    <div><span className={styles.polypNumber}>03</span><span className={styles.polypTitle}>염증성 용종</span></div>
                                    <p className={styles.polypDesc}>
                                        장에 염증이 생기고 치유되는 과정에서 점막이 돌출된 것으로,
                                        일반적으로 암으로 발전하지는 않습니다.
                                    </p>
                                </div>
                                <div className={styles.polypCard}>
                                    <div><span className={styles.polypNumber}>04</span><span className={styles.polypTitle}>유임종</span></div>
                                    <p className={styles.polypDesc}>
                                        주로 직장에서 발견되며 크기가 커지면서 다른 장기로 전이될 수 있습니다.
                                        1cm 이하로 크기가 작은 경우 내시경으로 제거 가능합니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 03. Precautions */}
                    <div>
                        <div className={styles.sectionHeader}>
                            <AlertCircle size={48} className={styles.sectionIcon} />
                            <h2>내시경 검사 주의사항</h2>
                            <p>안전하고 정확한 검사를 위해 주의사항을 꼭 준수해 주세요.</p>
                        </div>

                        <div className={styles.precautionContainer}>
                            <div className={styles.precautionBox}>
                                <h3 className={styles.precautionHeader}>시술 전 주의사항</h3>
                                <ul className={styles.precautionList}>
                                    <li><strong>검사 전 날 식사</strong>: 아침, 점심은 밥, 저녁(5시경)은 미음 또는 죽을 드세요.</li>
                                    <li><strong>검사 시간이 오전일 경우</strong>: 1차 복용(전날 저녁 7시) → 2차 복용(당일 아침 6시)</li>
                                    <li><strong>검사 시간이 오후일 경우</strong>: 1차 복용(전날 저녁 11시) → 2차 복용(당일 아침 10시)</li>
                                    <li>물은 많이 마실수록 좋으며, 약을 복용한 후에는 제한 없이 물을 많이 섭취하시는 게 좋습니다.</li>
                                    <li>복용 중인 약물이 있다면 반드시 의료진에게 미리 알려주세요 (항응고제, 당뇨약 등).</li>
                                </ul>
                            </div>

                            <div className={styles.precautionBox}>
                                <h3 className={styles.precautionHeader}>시술 후 주의사항</h3>
                                <ul className={styles.precautionList}>
                                    <li>대변에 피가 섞여 나올 수 있으나, 일시적인 현상이므로 걱정하지 않으셔도 됩니다.</li>
                                    <li>시술 후 복부 팽만감, 발열 등의 증상이 나타날 수 있습니다. (가스 배출 노력 필요)</li>
                                    <li>시술 후 <strong>한 달 동안 음주, 자극적인 음식</strong> 등은 삼갑니다.</li>
                                    <li>검사 후 휴지에 묻을 정도로 출혈이 있을 수 있으며, 양이 많은 경우 병원으로 연락 바랍니다.</li>
                                    <li>시술 후 일주일 정도는 과격한 운동이나 사우나를 피하고 안정을 취합니다.</li>
                                    <li>시술 후 2주 이내 출혈이 발생할 경우 즉시 내원해 주시기 바랍니다.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
