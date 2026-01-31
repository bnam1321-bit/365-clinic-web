import styles from "./page.module.css";
import { Zap, Activity, HeartPulse, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
    title: "초음파클리닉 | 365내과연합의원",
    description: "복부, 심장, 갑상선, 유방, 경동맥 정밀 초음파 검사.",
};

export default function UltrasoundPage() {
    return (
        <main className={styles.container}>
            {/* Restore Premium Hero Section */}
            <section className={styles.header}>
                <FadeIn>
                    <span className={styles.badge}>ULTRASOUND CLINIC</span>
                    <h1 className={styles.title}>초음파 클리닉</h1>
                    <p className={styles.subtitle}>
                        대학병원급 하이엔드 장비로 정밀하게 진단합니다.<br />
                        방사선 피폭 걱정 없이 안전한 정밀 검사
                    </p>
                </FadeIn>
            </section>

            {/* Main Content */}
            <section className={styles.content}>
                <div className="container">
                    {/* Intro */}
                    <div className={styles.introSection}>
                        <h2 className={styles.introTitle}>초음파검사란?</h2>
                        <h3 style={{ fontSize: '1.2rem', color: '#2563EB', marginBottom: '1rem' }}>
                            방사선 노출이 없으며, 대부분의 환자들에게<br />안전하고 편리한 검사 방법입니다.
                        </h3>
                        <p className={styles.introDesc}>
                            인체에 무해한 초음파(음파의 일종)를 몸 안에 투과시킨 후 반사초음파를 이용하여 모니터에 영상을 나타내는 검사입니다.
                            간, 담낭, 췌장, 비장, 혈관계를 포함한 질병의 유무, 병소의 크기와 양상을 진단하며 인체에 해가 없습니다.
                        </p>
                    </div>

                    {/* Services Grid (Requested Polish) */}
                    <div className={styles.servicesGrid} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
                        <FadeIn delay={0.1}>
                            <div className={styles.card}>
                                <div className={styles.cardIcon}><Activity size={32} /></div>
                                <h3>복부 초음파</h3>
                                <p>간, 담낭, 췌장, 신장, 비장 등 주요 복부 장기의 상태를 정밀하게 관찰합니다.</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className={styles.card}>
                                <div className={styles.cardIcon}><HeartPulse size={32} /></div>
                                <h3>경동맥 초음파</h3>
                                <p>뇌졸중의 위험 인자인 경동맥의 협착 및 혈전 유무를 확인하여 뇌혈관 질환을 예방합니다.</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <div className={styles.card}>
                                <div className={styles.cardIcon}><ShieldCheck size={32} /></div>
                                <h3>갑상선 초음파</h3>
                                <p>갑상선 결절, 암, 염증 등을 진단하며, 필요 시 세포 흡인 검사(FNA) 연계도 가능합니다.</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.4}>
                            <div className={styles.card}>
                                <div className={styles.cardIcon}><Zap size={32} /></div>
                                <h3>기타 초음파</h3>
                                <p>유방, 심장 등 다양한 부위에 대한 정밀 검사를 시행합니다.</p>
                            </div>
                        </FadeIn>
                    </div>

                    {/* 5 Major Ultrasounds Detail */}
                    <div className={styles.detailList}>

                        {/* 01 Abdomen */}
                        <FadeIn delay={0.1}>
                            <div className={styles.detailItem}>
                                <div className={styles.itemHeader}>
                                    <span className={styles.itemNumber}>01</span>
                                    <h3 className={styles.itemTitle}>복부초음파</h3>
                                </div>
                                <div className={styles.itemContent}>
                                    <p>
                                        복부 초음파검사는 상복부 초음파검사와 충수 초음파검사 등이 흔하게 시행되고 있습니다.
                                        상복부 초음파검사가 가장 일반적인 초음파검사라고 할 수 있으며
                                        <strong>간, 담낭, 담관, 췌장</strong> 등이 주로 검사 대상이 되는 장기이나
                                        비장과 신장까지 포함한 상복부 장기들을 검사합니다.
                                        충수(맹장) 초음파검사는 오른쪽 아랫배 통증으로 충수염이 의심될 때 검사합니다.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* 02 Heart */}
                        <FadeIn delay={0.2}>
                            <div className={styles.detailItem}>
                                <div className={styles.itemHeader}>
                                    <span className={styles.itemNumber}>02</span>
                                    <h3 className={styles.itemTitle}>심장초음파 검사</h3>
                                </div>
                                <div className={styles.itemContent}>
                                    <p>
                                        심장 초음파검사는 크게 나누어 M-mode 심장 초음파검사, 이면성 심장 초음파검사, 도플러 심장 초음파검사, 부하 심장 초음파검사 등이 있으며
                                        이 외에 관혈적인 검사 방법으로 식도를 통해 영상을 얻는 경식도(transesophageal) 초음파검사, 혈관 내 초음파검사 등이 있습니다.
                                        일반적으로 시행하는 <strong>경흉부 심장 초음파(TTE)</strong>는 비침습적이고 안전하며,
                                        심장의 구조와 기능을 평가하는 가장 중요한 검사 중 하나입니다.
                                        소요 시간은 검사에 따라 다르지만 보통 20분에서 한 시간 내에 끝나게 됩니다.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* 03 Thyroid */}
                        <FadeIn delay={0.3}>
                            <div className={styles.detailItem}>
                                <div className={styles.itemHeader}>
                                    <span className={styles.itemNumber}>03</span>
                                    <h3 className={styles.itemTitle}>갑상선 초음파 검사</h3>
                                </div>
                                <div className={styles.itemContent}>
                                    <p>
                                        컴퓨터와 연결된 높은 주파수의 탐촉자는 초음파를 발생시키고 또 인체에 반사되는 음파를 받아들이게 되며 이를 재구성하여 영상을 실시간으로 확인합니다.
                                        갑상선 및 주변 기관의 형태적 이상, 특히 <strong>갑상선 결절</strong>에 대해서 다른 어떤 검사보다도 높은 해상도를 가지고 있는 필수 검사입니다.
                                    </p>
                                    <ul className={styles.checkList}>
                                        <li>갑상선 종괴가 촉지 되는 경우</li>
                                        <li>만져지지 않는 결절이 발견되었을 때</li>
                                        <li>미만성 갑상선 질환에서 악성이 의심되는 종괴가 발견되었을 때</li>
                                        <li>중재적 시술 후 병변의 추적 검사</li>
                                        <li>갑상선암 고위험군 환자의 선별 검사</li>
                                        <li>갑상선암 수술 후 재발이나 전이를 판단할 때</li>
                                    </ul>
                                </div>
                            </div>
                        </FadeIn>

                        {/* 04 Breast */}
                        <FadeIn delay={0.4}>
                            <div className={styles.detailItem}>
                                <div className={styles.itemHeader}>
                                    <span className={styles.itemNumber}>04</span>
                                    <h3 className={styles.itemTitle}>유방초음파검사</h3>
                                </div>
                                <div className={styles.itemContent}>
                                    <p>
                                        유방 질환을 진단하는 검사입니다. 유방에 멍울이 만져지거나, 혈성 유두 분비 증상이 있는 여성에서 1차 검사로 추천됩니다.
                                        방사선 노출이 없으며 양성 혹(섬유선종), 악성 혹(유방암), 염증성 병변(농양), 물혹(낭종) 등을 영상 소견으로 구분하는 데 그 정확도가 매우 높습니다.
                                        <strong>치밀 유방</strong> 구성을 보이는 한국 여성의 경우, 유방촬영술보다 초음파검사가 진단에 더 유리할 수 있습니다.
                                    </p>
                                    <ul className={styles.checkList}>
                                        <li>유방촬영술에서 종괴성 병변이 의심되어 종괴의 특성을 정확하게 평가하기 위해</li>
                                        <li>젊은 여성에서 만져지는 유방 종괴의 검사</li>
                                        <li>치밀 유방 구성을 보이는 경우의 추가 선별 검사</li>
                                        <li>임산부나 수유부에서 안전하고 정확한 유방 검사</li>
                                        <li>유방성형술을 받은 여성의 보형물 및 유방조직 검사</li>
                                    </ul>
                                </div>
                            </div>
                        </FadeIn>

                        {/* 05 Carotid */}
                        <FadeIn delay={0.5}>
                            <div className={styles.detailItem}>
                                <div className={styles.itemHeader}>
                                    <span className={styles.itemNumber}>05</span>
                                    <h3 className={styles.itemTitle}>경동맥초음파검사</h3>
                                </div>
                                <div className={styles.itemContent}>
                                    <p>
                                        경동맥은 뇌로 가는 혈관의 80%가 이어지는 중요한 혈관입니다.
                                        초음파를 이용하여 혈류의 양과 경동맥 협착 정도를 측정하며, 이는 <strong>뇌졸중 위험도</strong>와 깊은 연관성이 있습니다.
                                        당뇨, 고혈압, 고지혈증 등 위험인자를 가지고 있는 분들은 반드시 경동맥 초음파 검사를 통해 뇌혈관 상태를 파악하고,
                                        결과에 따라 추가 투약 여부나 생활 습관 교정을 상담받아야 합니다.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                    </div>

                    {/* IV Therapy Section (Kept as secondary service) */}
                    <FadeIn delay={0.6}>
                        <div className={styles.ivSection}>
                            <div className={styles.ivHeader}>
                                <Zap size={40} color="#2563EB" style={{ marginBottom: '1rem' }} />
                                <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#111827' }}>개인 맞춤 수액 클리닉</h2>
                                <p style={{ marginTop: '1rem', color: '#4B5563' }}>내과 전문의가 환자의 컨디션에 맞춰 1:1로 처방하는 프리미엄 수액 치료입니다.</p>
                            </div>
                        </div>
                    </FadeIn>

                </div>
            </section>
        </main>
    );
}
