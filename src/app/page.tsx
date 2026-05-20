import Link from "next/link";
import styles from "./page.module.css";
import { ArrowRight, ShieldCheck, Microscope, Zap, Activity, HeartPulse, Stethoscope, Award, Users } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <main className={styles.home}>
      {/* 1. Cinematic Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container`}>
          <FadeIn direction="up">
            <div className={styles.heroContent}>
              <span className={styles.heroBadge}>PREMIUM HEALTHCARE</span>
              <h1 className={styles.heroTitle}>
                풍부한 임상 경험으로<br />
                <span className={styles.highlight}>정확하게 진단합니다</span>
              </h1>
              <p className={styles.heroSubtitle}>
                수많은 진료 현장에서 쌓아온 노하우를 바탕으로 환자 개개인에게 꼭 필요한 진료를 제공합니다.<br />
                전문의 3인의 유기적인 협진 시스템을 통해 진단의 정확도를 높였습니다.
              </p>
              <div className={styles.heroActions}>
                  <Link href="/guide" className={styles.btnPrimary}>진료 안내 및 오시는 길</Link>
                  <Link href="/checkup" className={styles.btnOutline}>종합건강검진 안내</Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Medical Team / Synergy Section */}
      <section className={styles.synergySection}>
        <div className={`container`}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionSubtitle}>OUR EXPERTISE</span>
                <h2 className={styles.sectionTitle}>대학병원 출신 전문의 3인 협진</h2>
                <p className={styles.sectionDesc}>내과, 소화기 내시경, 근골격계 통증 분야의 전문가들이 모여 유기적이고 심도 있는 진료 시스템을 구축했습니다.</p>
            </div>
            
            <div className={styles.doctorsGrid}>
                <FadeIn delay={0.1}>
                    <div className={styles.doctorCard}>
                        <div className={styles.doctorIcon}><Stethoscope size={36} /></div>
                        <h3>이현석 대표원장</h3>
                        <p>소화기 내시경 전문의 / 내과 전문의</p>
                    </div>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <div className={styles.doctorCard}>
                        <div className={styles.doctorIcon}><Users size={36} /></div>
                        <h3>지재연 원장</h3>
                        <p>대한 근골격 초음파 학회 / 통증 치료 전문</p>
                    </div>
                </FadeIn>
                <FadeIn delay={0.3}>
                    <div className={styles.doctorCard}>
                        <div className={styles.doctorIcon}><Award size={36} /></div>
                        <h3>노영석 원장</h3>
                        <p>대한 위장내시경학회 내시경 전문의</p>
                    </div>
                </FadeIn>
            </div>
        </div>
      </section>

      {/* 3. Services Grid (6-Card Menu) - High Visibility */}
      <section className={styles.services}>
        <div className={`container`}>
          <div className={styles.sectionHeader}>
              <span className={styles.sectionSubtitle}>CLINIC SERVICES</span>
              <h2 className={styles.sectionTitle}>맞춤형 전문 진료</h2>
          </div>
          <div className={styles.servicesGrid}>
            {/* 1. Checkup */}
            <FadeIn delay={0.1}>
              <Link href="/checkup" className={styles.serviceCardLink}>
                <div className={styles.serviceCard}>
                  <div>
                    <div className={styles.cardIcon}><ShieldCheck size={40} /></div>
                    <h3>종합건강검진</h3>
                    <p>5대암 검진부터 정밀 혈액 검사까지, 개인별 맞춤형 종합 검진 센터입니다.</p>
                  </div>
                  <div className={styles.cardArrow}><ArrowRight size={24} /></div>
                </div>
              </Link>
            </FadeIn>

            {/* 2. Endoscopy */}
            <FadeIn delay={0.2}>
              <Link href="/endoscopy" className={styles.serviceCardLink}>
                <div className={styles.serviceCard}>
                  <div>
                    <div className={styles.cardIcon}><Microscope size={40} /></div>
                    <h3>내시경 클리닉</h3>
                    <p>대학병원급 고화질 내시경 장비로 미세 용종까지 정확하게 발견하고 제거합니다.</p>
                  </div>
                  <div className={styles.cardArrow}><ArrowRight size={24} /></div>
                </div>
              </Link>
            </FadeIn>

            {/* 3. Ultrasound */}
            <FadeIn delay={0.3}>
              <Link href="/ultrasound" className={styles.serviceCardLink}>
                <div className={styles.serviceCard}>
                  <div>
                    <div className={styles.cardIcon}><Activity size={40} /></div>
                    <h3>초음파 클리닉</h3>
                    <p>복부, 경동맥, 갑상선 등 정밀 초음파를 통해 신체 내부 상태를 면밀히 살핍니다.</p>
                  </div>
                  <div className={styles.cardArrow}><ArrowRight size={24} /></div>
                </div>
              </Link>
            </FadeIn>

            {/* 4. Internal Medicine */}
            <FadeIn delay={0.4}>
              <Link href="/clinic" className={styles.serviceCardLink}>
                <div className={styles.serviceCard}>
                  <div>
                    <div className={styles.cardIcon}><Attributes size={40} /></div>
                    <h3>내과 클리닉</h3>
                    <p>당뇨, 고혈압, 만성질환 관리부터 일반 진료까지 체계적인 건강 관리를 제공합니다.</p>
                  </div>
                  <div className={styles.cardArrow}><ArrowRight size={24} /></div>
                </div>
              </Link>
            </FadeIn>

            {/* 5. Pain Clinic */}
            <FadeIn delay={0.5}>
              <Link href="/pain" className={styles.serviceCardLink}>
                <div className={styles.serviceCard}>
                  <div>
                    <div className={styles.cardIcon}><Zap size={40} /></div>
                    <h3>통증 클리닉</h3>
                    <p>근골격계 초음파 검사와 프롤로테라피(증식치료)를 통해 통증의 근본 원인을 정확하게 진단하고 치료합니다.</p>
                  </div>
                  <div className={styles.cardArrow}><ArrowRight size={24} /></div>
                </div>
              </Link>
            </FadeIn>

            {/* 6. Guide */}
            <FadeIn delay={0.6}>
              <Link href="/guide" className={styles.serviceCardLink}>
                <div className={`${styles.serviceCard} ${styles.guideCard}`}>
                  <div>
                    <div className={styles.cardIcon}><HeartPulse size={40} /></div>
                    <h3>진료 안내</h3>
                    <p>평일 19시, 토요일 14시까지 진료. 대학병원 출신 전문의 3인 협진.</p>
                  </div>
                  <div className={styles.cardArrow}><ArrowRight size={24} /></div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}

function Attributes({ size }: { size: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}
