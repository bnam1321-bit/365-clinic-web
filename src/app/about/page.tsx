import styles from "./page.module.css";
import { Stethoscope, Award, Heart } from "lucide-react";
import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
    title: "병원 소개 | 365내과연합의원",
    description: "365내과연합의원 의료진 소개 및 진료 철학.",
};

export default function About() {
    return (
        <main className={styles.aboutContainer}>
            <div className={`container`}>
                <FadeIn>
                    <section className={styles.philosophy}>
                        <h2 className={styles.title}>인사말</h2>
                        <div className={styles.messageCard}>
                            <h3 className={styles.subtitle}>"환자분의 건강을 내 가족처럼 생각합니다"</h3>
                            <div className={styles.greetingContent}>
                                <p>
                                    안녕하세요.<br />
                                    365내과연합의원 원장 이현석 입니다.
                                </p>
                                <p>
                                    저희 병원을 찾아주신 환자 여러분께 깊은 감사의 말씀을 드립니다.<br />
                                    아플 때 가장 먼저 생각나는 병원, 환자의 아픔을 내 가족의 일처럼 공감하는 병원이 되고자 합니다.
                                </p>
                                <p>
                                    현장에서 쌓은 풍부한 임상 경험과 전문 지식을 바탕으로,<br />
                                    정확한 진단과 올바른 치료를 약속드립니다.<br />
                                    언제나 환자분들을 생각하는 든든한 건강 주치의로서, 지역 주민 여러분의 평생 건강을 지키는 동반자가 되겠습니다.
                                </p>
                                <p>
                                    작은 소리에도 귀 기울이며, 마음까지 치유하는 따뜻한 진료로 보답하겠습니다.<br />
                                    감사합니다.
                                </p>
                            </div>
                        </div>
                    </section>
                </FadeIn>
                <section className={styles.staff}>
                    <FadeIn delay={0.2}>
                        <h2 className={styles.title}>의료진 소개</h2>
                    </FadeIn>
                    <div className={styles.doctorsGrid}>
                        {/* Doctor 1: 이현석 */}
                        <FadeIn delay={0.3}>
                            <div className={styles.doctorItem}>
                                <div className={styles.doctorInfo}>
                                    <h3>이현석 원장</h3>
                                    <ul className={styles.doctorBio}>
                                        <li>차의과대학 외래교수</li>
                                        <li>을지의과대학 외래교수</li>
                                        <li>내과 전문의</li>
                                        <li>소화기 내시경 전문의</li>
                                        <li>대한 소화기학회 평생회원</li>
                                        <li>대한 소화기 내시경학회 평생회원</li>
                                        <li>대한 소화관 운동학회 정회원</li>
                                        <li>대한 간학회 정회원</li>
                                        <li>대한 당뇨병학회 정회원</li>
                                        <li>대한 노인병학회 정회원</li>
                                        <li>대한 내분비학회 정회원</li>
                                        <li>대한 순환기학회 정회원</li>
                                        <li>한국 심초음파학회 정회원</li>
                                    </ul>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Doctor 2: 지재연 */}
                        <FadeIn delay={0.4}>
                            <div className={styles.doctorItem}>
                                <div className={styles.doctorInfo}>
                                    <h3>지재연 원장</h3>
                                    <ul className={styles.doctorBio}>
                                        <li>가천의과대학교 외래교수</li>
                                        <li>고려대학교 의과대학 외래교수</li>
                                        <li>대한 위장내시경학회 정회원</li>
                                        <li>대한 IMS학회 이사</li>
                                        <li>신경근 치료 공인 국제강사</li>
                                        <li>포천중문의대 대체의학 대학원 IMS 고위자 과정 수료</li>
                                        <li>시리아스 정형의학회 정회원</li>
                                        <li>대한 근골격 초음파 학회 정회원</li>
                                        <li>대한 척추통증 중재 시술회 정회원</li>
                                        <li>대한 골프의학회 정회원</li>
                                        <li>대한 노인병학회 전문의 인정의</li>
                                    </ul>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Doctor 3: 노영석 */}
                        <FadeIn delay={0.5}>
                            <div className={styles.doctorItem}>
                                <div className={styles.doctorInfo}>
                                    <h3>노영석 원장</h3>
                                    <ul className={styles.doctorBio}>
                                        <li>고려대학교 의과대학 외래교수</li>
                                        <li>대한 위장내시경학회 내시경 전문의</li>
                                        <li>대한 비만건강학회 비만전문가 과정 수료</li>
                                        <li>포천중문의대 대체의학 대학원 IMS 고위자 과정 수료</li>
                                        <li>신경근 치료 공인 국제강사</li>
                                        <li>시리아스 정형의학회 정회원</li>
                                        <li>대한 근골격 초음파 학회 정회원</li>
                                        <li>대한 척추통증 중재시술회 정회원</li>
                                        <li>대한 비만의사회 정회원</li>
                                    </ul>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>
            </div>
        </main>
    );
}
