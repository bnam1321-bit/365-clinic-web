import styles from "./page.module.css";
import { Activity, Zap, HeartPulse, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "통증클리닉 | 365내과연합의원",
    description: "어깨, 허리, 관절 통증 비수술적 치료 및 통증유발점 주사(TPI).",
};

export default function PainClinic() {
    return (
        <div className={styles.container}>
            {/* Page Header */}
            <section className={styles.header}>
                <div className="container">
                    <span className={styles.badge}>PAIN MANAGEMENT</span>
                    <h1 className={styles.title}>통증클리닉</h1>
                    <p className={styles.subtitle}>
                        지긋지긋한 만성 통증부터 급성 근육통까지.<br />
                        비수술적 치료로 삶의 질을 높여드립니다.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className={styles.content}>
                <div className="container">

                    {/* Intro */}
                    <div className={styles.sectionHeader}>
                        <Activity size={48} className={styles.sectionIcon} />
                        <h2>통증 없는 편안한 일상</h2>
                        <p>정확한 원인 분석을 통해 안전하고 효과적인 맞춤 치료를 제공합니다.</p>
                    </div>

                    {/* Target Diseases */}
                    <div className={styles.painGrid}>
                        <div className={styles.painItem}>
                            <HeartPulse size={40} color="#EF4444" />
                            <h3 className={styles.painTitle}>어깨 / 목 통증</h3>
                            <p className={styles.painDesc}>거북목, 일자목, 오십견, 회전근개질환 등 현대인의 고질적인 어깨와 목 통증을 완화합니다.</p>
                        </div>
                        <div className={styles.painItem}>
                            <Zap size={40} color="#F59E0B" />
                            <h3 className={styles.painTitle}>허리 / 골반 통증</h3>
                            <p className={styles.painDesc}>급성 요추염좌, 디스크 초기 증상, 골반 불균형으로 인한 허리 통증을 비수술적으로 치료합니다.</p>
                        </div>
                        <div className={styles.painItem}>
                            <ShieldCheck size={40} color="#10B981" />
                            <h3 className={styles.painTitle}>관절 / 근육통</h3>
                            <p className={styles.painDesc}>퇴행성 관절염, 테니스 엘보, 족저근막염 등 무릎, 팔꿈치, 발목의 염증과 통증을 관리합니다.</p>
                        </div>
                    </div>

                    {/* Treatment Methods */}
                    <div className={styles.treatmentSection}>
                        <div className={styles.sectionHeader} style={{ marginBottom: '3rem' }}>
                            <h2>주요 치료 방법</h2>
                            <p style={{ marginTop: '0.5rem' }}>환자의 상태에 따라 가장 적합한 치료법을 병행합니다.</p>
                        </div>

                        <div className={styles.treatmentGrid}>
                            <div className={styles.treatmentCard}>
                                <div className={styles.treatmentHeader}>
                                    <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#2563EB' }}>01</span>
                                    <h3 className={styles.treatmentTitle}>통증유발점 주사 (TPI)</h3>
                                </div>
                                <p className={styles.treatmentText}>
                                    근육이 뭉쳐 통증을 유발하는 부위(Trigger Point)에 직접 약물을 주입하여
                                    경직된 근육을 풀어주고 혈액 순환을 개선하는 치료법입니다.
                                    목, 어깨, 허리 근육통에 탁월한 효과가 있습니다.
                                </p>
                            </div>
                            <div className={styles.treatmentCard}>
                                <div className={styles.treatmentHeader}>
                                    <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#2563EB' }}>02</span>
                                    <h3 className={styles.treatmentTitle}>수액 / 영양 치료</h3>
                                </div>
                                <p className={styles.treatmentText}>
                                    만성 통증은 단순한 근육 문제가 아닌 신경계 피로 및 영양 불균형이 원인일 수 있습니다.
                                    항산화 수액, 신경 비타민 등을 통해 통증 완화와 컨디션 회복을 돕습니다.
                                </p>
                            </div>
                            <div className={styles.treatmentCard}>
                                <div className={styles.treatmentHeader}>
                                    <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#2563EB' }}>03</span>
                                    <h3 className={styles.treatmentTitle}>약물 치료</h3>
                                </div>
                                <p className={styles.treatmentText}>
                                    소염진통제, 근육이완제 등 증상에 맞는 약물을 처방하여 급성기 염증을 가라앉히고 통증을 조절합니다.
                                </p>
                            </div>
                            <div className={styles.treatmentCard}>
                                <div className={styles.treatmentHeader}>
                                    <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#2563EB' }}>04</span>
                                    <h3 className={styles.treatmentTitle}>물리 치료</h3>
                                </div>
                                <p className={styles.treatmentText}>
                                    온열 치료, 전기 자극 치료(ICT/TENS) 등을 통해 근육의 긴장을 이완시키고 통증 전달 경로를 차단합니다.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
