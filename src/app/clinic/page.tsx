import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "내과클리닉 | 365내과연합의원",
    description: "만성질환, 호흡기, 간질환, 갑상선 및 대상포진 클리닉.",
};

export default function Clinic() {
    return (
        <div className={styles.container}>
            {/* Page Header */}
            <section className={styles.header}>
                <div className="container">
                    <span className={styles.badge}>INTERNAL MEDICINE</span>
                    <h1 className={styles.title}>내과클리닉</h1>
                    <p className={styles.subtitle}>
                        평생 건강의 기초가 되는 만성질환 관리.<br />
                        대학병원 출신 내과 전문의가 체계적으로 케어합니다.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className={styles.content}>
                <div className="container">

                    {/* 01 Chronic Diseases */}
                    <div className={styles.diseaseSection}>
                        <div className={styles.sectionTitle}>
                            <span className={styles.number}>01</span>
                            <h2 className={styles.name}>만성질환</h2>
                        </div>
                        <p className={styles.introText}>
                            만성질환은 3개월 이상의 발생경과와 회복이 어려운 병리적 상태를 가지며, 후유장애와 장기간의 치료/관찰이 요구됩니다.
                            유전, 환경, 생활습관 등이 복합적으로 작용하며 현대인의 주요 사망 원인이기도 합니다.
                        </p>
                        <div className={styles.subItemGroup}>
                            <div className={styles.subItem}>
                                <h4>당뇨 (Diabetes)</h4>
                                <p>
                                    인슐린 분비량이 부족하거나 정상적인 기능이 이루어지지 않는 대사질환의 일종으로,
                                    혈중 포도당 농도가 높아지는 고혈당을 특징으로 합니다.
                                    방치 시 여러 합병증(망막병증, 신부전, 신경병증 등)을 유발합니다.
                                </p>
                            </div>
                            <div className={styles.subItem}>
                                <h4>고혈압 (Hypertension)</h4>
                                <p>
                                    혈관 벽에 가하는 힘이 높은 상태입니다.
                                    18세 이상 성인에서 수축기 혈압 140mmHg 이상이거나 확장기 혈압 90mmHg 이상인 경우를 말합니다.
                                    침묵의 살인자라고 불리며 뇌졸중, 심근경색의 주원인이 됩니다.
                                </p>
                            </div>
                            <div className={styles.subItem}>
                                <h4>고지혈증 (Hyperlipidemia)</h4>
                                <p>
                                    혈액 속에 콜레스테롤이나 중성지방 등 지방 성분이 비정상적으로 많아지는 질환입니다.
                                    혈관 벽에 지질이 쌓여 동맥경화를 유발하며, 뚜렷한 증상이 없으므로 정기적인 혈액 검사가 필요합니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div style={{ height: '3rem' }}></div>

                    {/* 02 Thyroid */}
                    <div className={styles.diseaseSection}>
                        <div className={styles.sectionTitle}>
                            <span className={styles.number}>02</span>
                            <h2 className={styles.name}>갑상선 질환</h2>
                        </div>
                        <p className={styles.introText}>
                            갑상선은 갑상선 호르몬을 생산 및 저장했다가 필요한 기관에 내보내 인체 기관의 에너지 대사를 조절하는 역할을 합니다.
                            갑상선 호르몬은 신체 거의 모든 조직에서 작용하여 영양소를 태워 에너지를 생산하며 뇌 발달에도 결정적입니다.
                        </p>
                        <div className={styles.subItemGroup}>
                            <div className={styles.subItem}>
                                <h4>주요 질환</h4>
                                <p>갑상선 기능 항진증, 갑상선 기능 저하증, 갑상선 결절, 갑상선암</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ height: '3rem' }}></div>

                    {/* 03 Respiratory */}
                    <div className={styles.diseaseSection}>
                        <div className={styles.sectionTitle}>
                            <span className={styles.number}>03</span>
                            <h2 className={styles.name}>호흡기 질환</h2>
                        </div>
                        <p className={styles.introText}>
                            인체 내 호흡기는 기관지, 폐 등으로 구성되어 있습니다.
                            주로 결핵, 폐렴, 기관지염, 기침, 감기, 기관지 천식 등의 질환이 발생합니다.
                        </p>
                        <div className={styles.subItemGroup}>
                            <div className={styles.subItem}>
                                <h4>천식 (Asthma)</h4>
                                <p>폐 속 기관지가 예민해져 좁아지면서 숨이 차고 쩩쩩거리는 숨소리가 들리며 기침을 심하게 하는 증상입니다.</p>
                            </div>
                            <div className={styles.subItem}>
                                <h4>만성 폐쇄성 폐질환 (COPD)</h4>
                                <p>기도가 좁아져 숨을 제대로 못 쉬는 병으로 가장 주된 발병 원인은 흡연입니다.</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ height: '3rem' }}></div>

                    {/* 04 Liver */}
                    <div className={styles.diseaseSection}>
                        <div className={styles.sectionTitle}>
                            <span className={styles.number}>04</span>
                            <h2 className={styles.name}>간 질환</h2>
                        </div>
                        <p className={styles.introText}>
                            우리나라는 간질환 사망률이 높은 나라입니다.
                            간암의 경우 별다른 증상이 없다가 심각한 상태가 되어서야 병원을 찾는 경우가 많으므로 정기 검진이 필수입니다.
                        </p>
                        <div className={styles.subItemGroup}>
                            <div className={styles.subItem}>
                                <h4>A형 / B형 간염</h4>
                                <p>바이러스 감염에 의한 간의 염증 질환입니다. B형 간염은 만성 간염의 50~70%를 차지합니다.</p>
                            </div>
                            <div className={styles.subItem}>
                                <h4>지방간</h4>
                                <p>간 내 과도한 지방이 쌓이는 상태로, 알코올성 지방간과 비만/당뇨로 인한 비알코올성 지방간이 있습니다.</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ height: '3rem' }}></div>

                    {/* 05 Shingles */}
                    <div className={styles.diseaseSection}>
                        <div className={styles.sectionTitle}>
                            <span className={styles.number}>05</span>
                            <h2 className={styles.name}>대상포진</h2>
                        </div>
                        <p className={styles.introText}>
                            신경이 있는 부위면 어디든 발생할 수 있으나, 주로 몸통이나 엉덩이 부위에 잘 발생합니다.
                            심한 통증과 감각 이상이 1~3일간 나타나고, 그 후 붉은 발진과 물집이 나타납니다.
                            피부 병변이 호전되어도 통증이 1개월 이상 지속되면 '대상포진 후 신경통'으로 이어질 수 있어 조기 치료가 중요합니다.
                        </p>
                    </div>

                    {/* Advantages Section */}
                    <div className={styles.advantages}>
                        <h2 className={styles.advantagesHeader}>365내과연합의원의 장점</h2>
                        <div className={styles.advantagesGrid}>
                            <div className={styles.advCard}>
                                <span className={styles.advNumber}>01</span>
                                <h3 className={styles.advTitle}>실력을 갖춘 전문인력</h3>
                                <p className={styles.advDesc}>소화기 내과 분과전문의 및 내시경 세부전문의 3인이 직접 진료합니다.</p>
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

                </div>
            </section>
        </div>
    );
}
