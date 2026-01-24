import styles from "./page.module.css";
import { Stethoscope, Award, Heart } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "병원 소개 | 365내과연합의원",
    description: "365내과연합의원 의료진 소개 및 진료 철학.",
};

export default function About() {
    return (
        <div className={styles.about}>
            {/* Page Header */}
            <section className={styles.pageHeader}>
                <div className="container">
                    <h1 className={styles.pageTitle}>병원 소개</h1>
                    <p className={styles.pageSubtitle}>365내과연합의원이 추구하는 가치와 의료진을 소개합니다.</p>
                </div>
            </section>

            {/* Philosophy */}
            <section className={styles.philosophy}>
                <div className={`container ${styles.philosophyContainer}`}>
                    <div className={styles.philosophyText}>
                        <span className={styles.label}>MEDICAL PHILOSOPHY</span>
                        <h2>환자의 마음까지 치유하는<br /><span className={styles.highlight}>따뜻한 주치의</span>가 되겠습니다.</h2>
                        <p>
                            365내과연합의원 원장 이현석 입니다.<br /><br />
                            저희 병원을 찾아주신 환자 여러분께 깊은 감사의 말씀을 드립니다.
                            아플 때 가장 먼저 생각나는 병원, 환자의 아픔을 내 가족의 일처럼 공감하는 병원이 되고자 합니다.<br /><br />
                            대학병원에서 쌓은 풍부한 임상 경험과 전문 지식을 바탕으로,
                            정확한 진단과 올바른 치료를 약속드립니다.
                            365일 언제나 열려있는 든든한 건강 주치의로서, 지역 주민 여러분의 평생 건강을 지키는 동반자가 되겠습니다.<br /><br />
                            작은 소리에도 귀 기울이며, 마음까지 치유하는 따뜻한 진료로 보답하겠습니다.
                            감사합니다.
                        </p>
                        <ul className={styles.valuesList}>
                            <li><Heart className={styles.icon} size={20} /> 환자 중심의 맞춤형 진료</li>
                            <li><Award className={styles.icon} size={20} /> 검증된 최신 의학 지식 기반</li>
                            <li><Stethoscope className={styles.icon} size={20} /> 과잉 진료 없는 정직한 병원</li>
                        </ul>
                    </div>
                    <div className={styles.philosophyImage}>
                        {/* Placeholder for Doctor Image */}
                        <div className={styles.doctorImagePlaceholder}>
                            (원장님 사진)
                        </div>
                    </div>
                </div>
            </section>

            {/* Medical Staff Profile */}
            <section className={styles.profile}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>의료진 소개</h2>
                        <p>풍부한 임상 경험과 실력을 갖춘 대학병원 출신 전문의 3인이 함께합니다.</p>
                    </div>

                    <div className={styles.doctorsGrid}>
                        {/* Doctor 1 */}
                        <div className={styles.doctorItem}>
                            <div className={styles.doctorImagePlaceholder}>이현석</div>
                            <div className={styles.doctorInfo}>
                                <h3>이현석 대표원장</h3>

                                <ul className={styles.doctorBio}>
                                    <li>한양대학교 의과대학 졸업</li>
                                    <li>한양대학교병원 내과 전공의</li>
                                    <li>대한소화기내시경학회 평생회원</li>
                                </ul>
                            </div>
                        </div>

                        {/* Doctor 2 */}
                        <div className={styles.doctorItem}>
                            <div className={styles.doctorImagePlaceholder}>노영석</div>
                            <div className={styles.doctorInfo}>
                                <h3>노영석 대표원장</h3>

                                <ul className={styles.doctorBio}>
                                    <li>한양대학교 의과대학 졸업</li>
                                    <li>한양대학교병원 소화기내과 전임의</li>
                                    <li>대한내과학회 정회원</li>
                                </ul>
                            </div>
                        </div>

                        {/* Doctor 3 */}
                        <div className={styles.doctorItem}>
                            <div className={styles.doctorImagePlaceholder}>지재연</div>
                            <div className={styles.doctorInfo}>
                                <h3>지재연 대표원장</h3>

                                <ul className={styles.doctorBio}>
                                    <li>이화여자대학교 의과대학 졸업</li>
                                    <li>이대목동병원 내과 전공의</li>
                                    <li>대한임상초음파학회 평생회원</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
