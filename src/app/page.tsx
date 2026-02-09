import Link from "next/link";
import styles from "./page.module.css";
import { ArrowRight, ShieldCheck, Microscope, Zap, Activity, HeartPulse } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn"; // Import Animation Component

export default function Home() {
  return (
    <main className={styles.home}>
      {/* 1. Hero Section (Wide & Atmospheric) */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container`}>
          <FadeIn direction="up">
            <div className={styles.heroContent}>
              <span className={styles.heroBadge}>PREMIUM HEALTHCARE</span>
              <h1 className={styles.heroTitle}>
                현장에서의 경험,<br />
                <span className={styles.highlight}>정확한 진단으로 증명합니다</span>
              </h1>
              <p className={styles.heroSubtitle}>
                대학병원 출신 전문의 3인(이현석, 노영석, 지재연)의 협진으로<br />
                더 깊이 있고 세심한 진료를 약속드립니다.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Services Grid (6-Card Menu) - High Visibility */}
      <section className={styles.services}>
        <div className={`container`}>
          <div className={styles.servicesGrid}>
            {/* 1. Checkup */}
            <FadeIn delay={0.1}>
              <Link href="/checkup" className={styles.serviceCardLink}>
                <div className={styles.serviceCard}>
                  <div>
                    <div className={styles.cardIcon}><ShieldCheck size={48} /></div>
                    <h3>종합건강검진</h3>
                    <p>5대암 검진부터 정밀 혈액 검사까지, 개인별 맞춤형 종합 검진 센터입니다.</p>
                  </div>
                  <div className={styles.cardPlus}>+</div>
                </div>
              </Link>
            </FadeIn>

            {/* 2. Endoscopy */}
            <FadeIn delay={0.2}>
              <Link href="/endoscopy" className={styles.serviceCardLink}>
                <div className={styles.serviceCard}>
                  <div>
                    <div className={styles.cardIcon}><Microscope size={48} /></div>
                    <h3>내시경 클리닉</h3>
                    <p>대학병원급 고화질 내시경 장비로 미세 용종까지 정확하게 발견하고 제거합니다.</p>
                  </div>
                  <div className={styles.cardPlus}>+</div>
                </div>
              </Link>
            </FadeIn>

            {/* 3. Ultrasound */}
            <FadeIn delay={0.3}>
              <Link href="/ultrasound" className={styles.serviceCardLink}>
                <div className={styles.serviceCard}>
                  <div>
                    <div className={styles.cardIcon}><Activity size={48} /></div>
                    <h3>초음파 클리닉</h3>
                    <p>복부, 경동맥, 갑상선 등 정밀 초음파를 통해 신체 내부 상태를 면밀히 살핍니다.</p>
                  </div>
                  <div className={styles.cardPlus}>+</div>
                </div>
              </Link>
            </FadeIn>

            {/* 4. Internal Medicine */}
            <FadeIn delay={0.4}>
              <Link href="/clinic" className={styles.serviceCardLink}>
                <div className={styles.serviceCard}>
                  <div>
                    <div className={styles.cardIcon}><Attributes size={48} /></div> {/* Icon placeholder fixed below */}
                    <h3>내과 클리닉</h3>
                    <p>당뇨, 고혈압, 만성질환 관리부터 일반 진료까지 체계적인 건강 관리를 제공합니다.</p>
                  </div>
                  <div className={styles.cardPlus}>+</div>
                </div>
              </Link>
            </FadeIn>

            {/* 5. Pain Clinic */}
            <FadeIn delay={0.5}>
              <Link href="/pain" className={styles.serviceCardLink}>
                <div className={styles.serviceCard}>
                  <div>
                    <div className={styles.cardIcon}><Zap size={48} /></div>
                    <h3>통증 클리닉</h3>
                    <p>비수술적 통증 치료, TPI 주사, 영양 수액 요법으로 만성 통증과 피로를 개선합니다.</p>
                  </div>
                  <div className={styles.cardPlus}>+</div>
                </div>
              </Link>
            </FadeIn>

            {/* 6. Guide / Map */}
            <FadeIn delay={0.6}>
              <Link href="/guide" className={styles.serviceCardLink}>
                <div className={styles.serviceCard} style={{ backgroundColor: '#F8FAFC' }}>
                  <div>
                    <div className={styles.cardIcon}><HeartPulse size={48} /></div>
                    <h3>진료 안내</h3>
                    <p>평일 19시, 토요일 14시까지 진료. 대학병원 출신 전문의 3인 협진.</p>
                  </div>
                  <div className={styles.cardPlus}><ArrowRight /></div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. Medical Equipment */}
      <section className={styles.equipment}>
        <div className={`container`}>
          <FadeIn direction="up">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>최첨단 의료 장비</h2>
              <p>더 정확한 진단을 위해 대학병원급 장비를 도입했습니다.</p>
            </div>
          </FadeIn>
          <div className={styles.equipmentGrid}>
            <FadeIn delay={0.2} direction="left">
              <div className={styles.equipmentCard}>
                <div className={styles.equipmentImg} style={{ fontSize: '1rem', color: '#666' }}>Olympus CV-290</div>
                <h5>고화질 내시경 시스템</h5>
                <p>현장에서 사용하는 최상위 모델</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="right">
              <div className={styles.equipmentCard}>
                <div className={styles.equipmentImg} style={{ fontSize: '1rem', color: '#666' }}>GE LOGIQ E10</div>
                <h5>대학병원급 초음파</h5>
                <p>미세 병변까지 놓치지 않는 정밀함</p>
              </div>
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
