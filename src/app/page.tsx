import Link from "next/link";
import styles from "./page.module.css";
import { ArrowRight, ShieldCheck, Microscope, Zap, Activity, HeartPulse } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <main className={styles.home}>
      {/* 1. Full Screen Hero Section (Reverted) */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <FadeIn direction="up">
            <span className={styles.highlight}>진심을 다해 최선으로 진료합니다</span>
            <h1 className={styles.heroTitle}>
              분야별 전문의 3인 협진 진료<br />
              <strong>365내과연합의원</strong>
            </h1>
            <p className={styles.heroSubtitle}>
              전문의 3인이 유기적으로 협진하며, 환자분들을 위해 언제나 진심으로 최선을 다해 안전하고 정확하게 진료합니다.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. Bento-Box Services Grid */}
      <section className={styles.bentoSection}>
        <div className={`container`}>
          <div className={styles.sectionHeader}>
              <span className={styles.sectionSubtitle}>CLINIC SERVICES</span>
              <h2 className={styles.sectionTitle}>맞춤형 전문 진료</h2>
          </div>
          <div className={styles.bentoGrid}>
            
            {/* 1. Checkup (Large Featured - 2 cols, 2 rows) */}
            <FadeIn delay={0.1} className={styles.bentoItemLarge}>
              <Link href="/checkup" className={styles.bentoLink}>
                <div className={`${styles.bentoCard} ${styles.cardCheckup}`}>
                  <div className={styles.bentoContent}>
                    <div className={styles.cardIcon}><ShieldCheck size={48} /></div>
                    <h3>종합건강검진</h3>
                    <p>5대암 검진부터 정밀 혈액 검사까지, 개인별 맞춤형 종합 검진 센터입니다.</p>
                  </div>
                  <div className={styles.cardArrow}><ArrowRight size={24} /></div>
                </div>
              </Link>
            </FadeIn>

            {/* 2. Endoscopy (Wide - 2 cols, 1 row) */}
            <FadeIn delay={0.2} className={styles.bentoItemWide}>
              <Link href="/endoscopy" className={styles.bentoLink}>
                <div className={`${styles.bentoCard} ${styles.cardEndoscopy}`}>
                  <div className={styles.bentoContent}>
                    <div className={styles.cardIcon}><Microscope size={36} /></div>
                    <h3>내시경 클리닉</h3>
                    <p>대학병원급 고화질 내시경 장비로 미세 용종까지 정확하게 발견하고 제거합니다.</p>
                  </div>
                  <div className={styles.cardArrow}><ArrowRight size={24} /></div>
                </div>
              </Link>
            </FadeIn>

            {/* 3. Ultrasound (Standard - 1 col, 1 row) */}
            <FadeIn delay={0.3} className={styles.bentoItemStandard}>
              <Link href="/ultrasound" className={styles.bentoLink}>
                <div className={`${styles.bentoCard} ${styles.cardLight}`}>
                  <div className={styles.bentoContent}>
                    <div className={styles.cardIcon}><Activity size={32} /></div>
                    <h3>초음파 클리닉</h3>
                    <p>정밀 초음파를 통한 내부 장기 면밀 진단.</p>
                  </div>
                  <div className={styles.cardArrow}><ArrowRight size={24} /></div>
                </div>
              </Link>
            </FadeIn>

            {/* 4. Internal Medicine (Standard - 1 col, 1 row) */}
            <FadeIn delay={0.4} className={styles.bentoItemStandard}>
              <Link href="/clinic" className={styles.bentoLink}>
                <div className={`${styles.bentoCard} ${styles.cardLight}`}>
                  <div className={styles.bentoContent}>
                    <div className={styles.cardIcon}><Attributes size={32} /></div>
                    <h3>내과 진료</h3>
                    <p>당뇨, 고혈압 등 만성질환의 체계적 관리.</p>
                  </div>
                  <div className={styles.cardArrow}><ArrowRight size={24} /></div>
                </div>
              </Link>
            </FadeIn>

            {/* 5. Pain Clinic (Wide - 2 cols, 1 row) */}
            <FadeIn delay={0.5} className={styles.bentoItemWide}>
              <Link href="/pain" className={styles.bentoLink}>
                <div className={`${styles.bentoCard} ${styles.cardDark}`}>
                  <div className={styles.bentoContent}>
                    <div className={styles.cardIcon}><Zap size={36} /></div>
                    <h3>통증 클리닉</h3>
                    <p>근골격계 초음파와 프롤로테라피(증식치료)를 통한 근본적 통증 치료.</p>
                  </div>
                  <div className={styles.cardArrow}><ArrowRight size={24} /></div>
                </div>
              </Link>
            </FadeIn>

            {/* 6. Guide (Wide - 2 cols, 1 row) */}
            <FadeIn delay={0.6} className={styles.bentoItemWide}>
              <Link href="/guide" className={styles.bentoLink}>
                <div className={`${styles.bentoCard} ${styles.cardAccent}`}>
                  <div className={styles.bentoContent}>
                    <div className={styles.cardIcon}><HeartPulse size={36} /></div>
                    <h3>진료 안내</h3>
                    <p>평일 19시, 토요일 14시까지 진료. 대학병원 출신 전문의 3인 협진 시스템.</p>
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
