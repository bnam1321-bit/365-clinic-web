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
                            <p className={styles.text}>
                                안녕하세요.<br />
                                365내과연합의원 원장 이현석 입니다.<br /><br />
                                저희 병원을 찾아주신 환자 여러분께 깊은 감사의 말씀을 드립니다.
                                아플 때 가장 먼저 생각나는 병원, 환자의 아픔을 내 가족의 일처럼 공감하는 병원이 되고자 합니다.<br /><br />
                                현장에서 쌓은 풍부한 임상 경험과 전문 지식을 바탕으로,
                                정확한 진단과 올바른 치료를 약속드립니다.
                                365일 언제나 환자분들을 생각하는 든든한 건강 주치의로서, 지역 주민 여러분의 평생 건강을 지키는 동반자가 되겠습니다.<br /><br />
                                작은 소리에도 귀 기울이며, 마음까지 치유하는 따뜻한 진료로 보답하겠습니다.
                                감사합니다.
                            </p>
                        </div>
                    </section>
                </FadeIn>
                <section className={styles.staff}>
                    <FadeIn delay={0.2}>
                        <h2 className={styles.title}>의료진 소개</h2>
                    </FadeIn>
                    <div className={styles.doctorsGrid}>
                        {/* Doctor 1 */}
                        <FadeIn delay={0.3}>
                            <div className={styles.doctorItem}>
                                <div className={styles.doctorImagePlaceholder}>이현석</div>
                                <div className={styles.doctorInfo}>
                                    <h3>이현석 대표원장</h3>
                                    <p className={styles.role}>내과 전문의 / 소화기내시경 세부전문의</p>
                                    <ul className={styles.doctorBio}>
                                        <li>순천향대학교 의과대학 졸업</li>
                                        <li>순천향대학교 부속 부천병원 내과 전공의</li>
                                        <li>순천향대학교 부속 부천병원 소화기내과 임상강사</li>
                                        <li>대한내과학회 정회원</li>
                                        <li>대한소화기학회 평생회원</li>
                                        <li>대한소화기내시경학회 평생회원</li>
                                    </ul>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Doctor 2 */}
                        <FadeIn delay={0.4}>
                            <div className={styles.doctorItem}>
                                <div className={styles.doctorImagePlaceholder}>노영석</div>
                                <div className={styles.doctorInfo}>
                                    <h3>노영석 대표원장</h3>
                                    <p className={styles.role}>내과 전문의</p>
                                    <ul className={styles.doctorBio}>
                                        <li>중앙대학교 의과대학 졸업</li>
                                        <li>가천대 길병원 내과 전공의</li>
                                        <li>가천대 길병원 소화기내과 임상강사</li>
                                        <li>대한내과학회 정회원</li>
                                        <li>대한소화기내시경학회 평생회원</li>
                                        <li>대한임상초음파학회 평생회원</li>
                                    </ul>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Doctor 3 */}
                        <FadeIn delay={0.5}>
                            <div className={styles.doctorItem}>
                                <div className={styles.doctorImagePlaceholder}>지재연</div>
                                <div className={styles.doctorInfo}>
                                    <h3>지재연 대표원장</h3>
                                    <p className={styles.role}>내과 전문의</p>
                                    <ul className={styles.doctorBio}>
                                        <li>전북대학교 의과대학 졸업</li>
                                        <li>가톨릭대학교 서울성모병원 내과 전공의</li>
                                        <li>가톨릭대학교 서울성모병원 신장내과 임상강사</li>
                                        <li>대한내과학회 정회원</li>
                                        <li>대한신장학회 정회원</li>
                                        <li>대한투석협회 정회원</li>
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
