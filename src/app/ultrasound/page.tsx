import styles from "./page.module.css";
import { Zap, Activity, HeartPulse, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
    title: "초음?�클리닉 | 365?�과?�합?�원",
    description: "복�?, ?�장, 갑상?? ?�방, 경동�??��? 초음??검??",
};

export default function UltrasoundPage() {
    return (
        <main className={styles.container}>
            {/* Restore Premium Hero Section */}
            <section className={styles.header}>
                <FadeIn>
                    <span className={styles.badge}>ULTRASOUND CLINIC</span>
                    <h1 className={styles.title}>초음???�리??/h1>
                    <p className={styles.subtitle}>
                        ?�?�병?�급 ?�이?�드 ?�비�??��??�게 진단?�니??<br />
                        방사???�폭 걱정 ?�이 ?�전???��? 검??
                    </p>
                </FadeIn>
            </section>

            {/* Main Content */}
            <section className={styles.content}>
                <div className="container">
                    {/* Intro */}
                    <div className={styles.introSection}>
                        <h2 className={styles.introTitle}>초음?��??��??</h2>
                        <h3 style={{ fontSize: '1.2rem', color: 'var(--color-secondary)', marginBottom: '1rem' }}>
                            방사???�출???�으�? ?�부분의 ?�자?�에�?br />?�전?�고 ?�리??검??방법?�니??
                        </h3>
                        <p className={styles.introDesc}>
                            ?�체??무해??초음???�파???�종)�?�??�에 ?�과?�킨 ??반사초음?��? ?�용?�여 모니?�에 ?�상???��??�는 검?�입?�다.
                            �? ?�낭, 췌장, 비장, ?��?계�? ?�함??질병???�무, 병소???�기?� ?�상??진단?�며 ?�체???��? ?�습?�다.
                        </p>
                    </div>

                    {/* Services Grid (Requested Polish) */}
                    <div className={styles.servicesGrid} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
                        <FadeIn delay={0.1}>
                            <div className={styles.card}>
                                <div className={styles.cardIcon}><Activity size={32} /></div>
                                <h3>복�? 초음??/h3>
                                <p>�? ?�낭, 췌장, ?�장, 비장 ??주요 복�? ?�기???�태�??��??�게 관찰합?�다.</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className={styles.card}>
                                <div className={styles.cardIcon}><HeartPulse size={32} /></div>
                                <h3>경동�?초음??/h3>
                                <p>?�졸중의 ?�험 ?�자??경동맥의 ?�착 �??�전 ?�무�??�인?�여 ?�혈관 질환???�방?�니??</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <div className={styles.card}>
                                <div className={styles.cardIcon}><ShieldCheck size={32} /></div>
                                <h3>갑상??초음??/h3>
                                <p>갑상??결절, ?? ?�증 ?�을 진단?�며, ?�요 ???�포 ?�인 검??FNA) ?�계??가?�합?�다.</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.4}>
                            <div className={styles.card}>
                                <div className={styles.cardIcon}><Zap size={32} /></div>
                                <h3>기�? 초음??/h3>
                                <p>?�방, ?�장 ???�양??부?�에 ?�???��? 검?��? ?�행?�니??</p>
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
                                    <h3 className={styles.itemTitle}>복�?초음??/h3>
                                </div>
                                <div className={styles.itemContent}>
                                    <p>
                                        복�? 초음?��??�는 ?�복부 초음?��??��? 충수 초음?��????�이 ?�하�??�행?�고 ?�습?�다.
                                        ?�복부 초음?��??��? 가???�반?�인 초음?��??�라�??????�으�?
                                        <strong>�? ?�낭, ?��?, 췌장</strong> ?�이 주로 검???�?�이 ?�는 ?�기?�나
                                        비장�??�장까�? ?�함???�복부 ?�기?�을 검?�합?�다.
                                        충수(맹장) 초음?��??�는 ?�른�??�랫�??�증?�로 충수?�이 ?�심????검?�합?�다.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* 02 Heart */}
                        <FadeIn delay={0.2}>
                            <div className={styles.detailItem}>
                                <div className={styles.itemHeader}>
                                    <span className={styles.itemNumber}>02</span>
                                    <h3 className={styles.itemTitle}>?�장초음??검??/h3>
                                </div>
                                <div className={styles.itemContent}>
                                    <p>
                                        ?�장 초음?��??�는 ?�게 ?�누??M-mode ?�장 초음?��??? ?�면???�장 초음?��??? ?�플???�장 초음?��??? 부???�장 초음?��????�이 ?�으�?
                                        ???�에 관?�적??검??방법?�로 ?�도�??�해 ?�상???�는 경식??transesophageal) 초음?��??? ?��? ??초음?��????�이 ?�습?�다.
                                        ?�반?�으�??�행?�는 <strong>경흉부 ?�장 초음??TTE)</strong>??비침?�적?�고 ?�전?�며,
                                        ?�장??구조?� 기능???��??�는 가??중요??검??�??�나?�니??
                                        ?�요 ?�간?� 검?�에 ?�라 ?�르지�?보통 20분에?????�간 ?�에 ?�나�??�니??
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* 03 Thyroid */}
                        <FadeIn delay={0.3}>
                            <div className={styles.detailItem}>
                                <div className={styles.itemHeader}>
                                    <span className={styles.itemNumber}>03</span>
                                    <h3 className={styles.itemTitle}>갑상??초음??검??/h3>
                                </div>
                                <div className={styles.itemContent}>
                                    <p>
                                        컴퓨?��? ?�결???��? 주파?�의 ?�촉?�는 초음?��? 발생?�키�????�체??반사?�는 ?�파�?받아?�이�??�며 ?��? ?�구?�하???�상???�시간으�??�인?�니??
                                        갑상??�?주�? 기�????�태???�상, ?�히 <strong>갑상??결절</strong>???�?�서 ?�른 ?�떤 검?�보?�도 ?��? ?�상?��? 가지�??�는 ?�수 검?�입?�다.
                                    </p>
                                    <ul className={styles.checkList}>
                                        <li>갑상??종괴가 촉�? ?�는 경우</li>
                                        <li>만져지지 ?�는 결절??발견?�었????/li>
                                        <li>미만??갑상??질환?�서 ?�성???�심?�는 종괴가 발견?�었????/li>
                                        <li>중재???�술 ??병�???추적 검??/li>
                                        <li>갑상?�암 고위?�군 ?�자???�별 검??/li>
                                        <li>갑상?�암 ?�술 ???�발?�나 ?�이�??�단????/li>
                                    </ul>
                                </div>
                            </div>
                        </FadeIn>

                        {/* 04 Breast */}
                        <FadeIn delay={0.4}>
                            <div className={styles.detailItem}>
                                <div className={styles.itemHeader}>
                                    <span className={styles.itemNumber}>04</span>
                                    <h3 className={styles.itemTitle}>?�방초음?��???/h3>
                                </div>
                                <div className={styles.itemContent}>
                                    <p>
                                        ?�방 질환??진단?�는 검?�입?�다. ?�방??멍울??만져지거나, ?�성 ?�두 분비 증상???�는 ?�성?�서 1�?검?�로 추천?�니??
                                        방사???�출???�으�??�성 ???�유?�종), ?�성 ???�방??, ?�증??병�?(?�양), 물혹(??��) ?�을 ?�상 ?�견?�로 구분?�는 ??�??�확?��? 매우 ?�습?�다.
                                        <strong>치�? ?�방</strong> 구성??보이???�국 ?�성??경우, ?�방촬영?�보??초음?��??��? 진단?????�리?????�습?�다.
                                    </p>
                                    <ul className={styles.checkList}>
                                        <li>?�방촬영?�에??종괴??병�????�심?�어 종괴???�성???�확?�게 ?��??�기 ?�해</li>
                                        <li>?��? ?�성?�서 만져지???�방 종괴??검??/li>
                                        <li>치�? ?�방 구성??보이??경우??추�? ?�별 검??/li>
                                        <li>?�산부???�유부?�서 ?�전?�고 ?�확???�방 검??/li>
                                        <li>?�방?�형?�을 받�? ?�성??보형�?�??�방조직 검??/li>
                                    </ul>
                                </div>
                            </div>
                        </FadeIn>

                        {/* 05 Carotid */}
                        <FadeIn delay={0.5}>
                            <div className={styles.detailItem}>
                                <div className={styles.itemHeader}>
                                    <span className={styles.itemNumber}>05</span>
                                    <h3 className={styles.itemTitle}>경동맥초?�파검??/h3>
                                </div>
                                <div className={styles.itemContent}>
                                    <p>
                                        경동맥�? ?�로 가???��???80%가 ?�어지??중요???��??�니??
                                        초음?��? ?�용?�여 ?�류???�과 경동�??�착 ?�도�?측정?�며, ?�는 <strong>?�졸�??�험??/strong>?� 깊�? ?��??�이 ?�습?�다.
                                        ?�뇨, 고혈?? 고�??�증 ???�험?�자�?가지�??�는 분들?� 반드??경동�?초음??검?��? ?�해 ?�혈관 ?�태�??�악?�고,
                                        결과???�라 추�? ?�약 ?��????�활 ?��? 교정???�담받아???�니??
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                    </div>

                    {/* Clinic Photos */}
                    <FadeIn delay={0.6}>
                        <div className={styles.sectionHeader} style={{ marginTop: '5rem', marginBottom: '2rem', textAlign: 'center' }}>
                            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)' }}>?��? 초음???�상?�터 ?�경</h2>
                        </div>
                    </FadeIn>
                    <div className={styles.photoGrid}>
                        <FadeIn delay={0.7} direction="up">
                            <div className={styles.photoCard}>
                                <img src="/images/ultrasound_clinic_1.jpg" alt="초음???�전?�실" className={styles.clinicImage} />
                                <div className={styles.photoCaption}>초음???�전?�실</div>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.8} direction="up">
                            <div className={styles.photoCard}>
                                <img src="/images/ultrasound_clinic_2.jpg" alt="?�방촬영?? className={styles.clinicImage} />
                                <div className={styles.photoCaption}>?�방촬영??/div>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </section>
        </main>
    );
}
