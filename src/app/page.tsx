import Link from "next/link";
import styles from "./page.module.css";
import { ArrowRight, Activity, Calendar, ShieldCheck, Microscope, Zap, HeartPulse, Stethoscope, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Wide Hero Section (Slider Style) */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>PRECISION & TRUST</span>
            <h1 className={styles.heroTitle}>
              정직한 진료, 건강한 내일<br />
              <span className={styles.highlight}>365내과연합의원</span>
            </h1>
            <p className={styles.heroSubtitle}>
              대학병원 출신 전문의 3인(이현석, 노영석, 지재연)의 협진으로<br />
              언제나 환자분의 건강을 최우선으로 지켜드립니다.
            </p>
            <div className={styles.heroActions}>
              <Link href="/checkup" className={styles.primaryButton}>
                맞춤 건강검진 프로그램 <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Column Service Cards (Menu Description) */}
      <section className={styles.services}>
        <div className={`container`}>
          <div className={styles.servicesGrid}>

            {/* 1. Checkup */}
            <Link href="/checkup" className={styles.serviceCardLink}>
              <div className={styles.serviceCard}>
                <div className={styles.cardIcon}><ShieldCheck size={48} /></div>
                <h3>종합건강검진</h3>
                <p>5대암 검진부터 정밀 혈액 검사까지, 개인별 맞춤형 종합 검진 센터입니다.</p>
                <div className={styles.cardPlus}>+</div>
              </div>
            </Link>

            {/* 2. Endoscopy */}
            <Link href="/endoscopy" className={styles.serviceCardLink}>
              <div className={styles.serviceCard}>
                <div className={styles.cardIcon}><Microscope size={48} /></div>
                <h3>내시경클리닉</h3>
                <p>위/대장 내시경 및 당일 용종절제술. 대학병원급 장비로 안전하게 검사합니다.</p>
                <div className={styles.cardPlus}>+</div>
              </div>
            </Link>

            {/* 3. Ultrasound */}
            <Link href="/ultrasound" className={styles.serviceCardLink}>
              <div className={styles.serviceCard}>
                <div className={styles.cardIcon}><Activity size={48} /></div>
                <h3>초음파클리닉</h3>
                <p>복부, 심장, 갑상선, 유방, 경동맥 5대 정밀 초음파와 수액 클리닉을 운영합니다.</p>
                <div className={styles.cardPlus}>+</div>
              </div>
            </Link>

            {/* 4. Internal Medicine */}
            <Link href="/clinic" className={styles.serviceCardLink}>
              <div className={styles.serviceCard}>
                <div className={styles.cardIcon}><Stethoscope size={48} /></div>
                <h3>내과클리닉</h3>
                <p>고혈압, 당뇨, 호흡기, 간 질환 등 5대 질환과 만성질환을 집중 관리합니다.</p>
                <div className={styles.cardPlus}>+</div>
              </div>
            </Link>

            {/* 5. Pain Clinic */}
            <Link href="/pain" className={styles.serviceCardLink}>
              <div className={styles.serviceCard}>
                <div className={styles.cardIcon}><HeartPulse size={48} /></div>
                <h3>통증클리닉</h3>
                <p>어깨, 허리, 관절 통증. TPI 주사 및 비수술적 치료로 통증을 완화합니다.</p>
                <div className={styles.cardPlus}>+</div>
              </div>
            </Link>

            {/* 6. Guide */}
            <Link href="/guide" className={styles.serviceCardLink}>
              <div className={styles.serviceCard}>
                <div className={styles.cardIcon}><Calendar size={48} /></div>
                <h3>진료안내</h3>
                <p>진료 시간 및 병원 찾아오시는 길을 안내해 드립니다.</p>
                <div className={styles.cardPlus}>+</div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Equipment Section (Kept as proof of quality) */}
      <section className={styles.equipment}>
        <div className={`container`}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>최첨단 의료 장비</h2>
            <p>대학병원급 고성능 장비로 진단의 정확도를 높입니다.</p>
          </div>
          <div className={styles.equipmentGrid}>
            <div className={styles.equipmentCard}>
              <div className={styles.equipmentImg} style={{ fontSize: '1rem', color: '#666' }}>Olympus CV-290</div>
              <h5>고화질 내시경 시스템</h5>
              <p>대학병원에서 사용하는 최상위 모델</p>
            </div>
            <div className={styles.equipmentCard}>
              <div className={styles.equipmentImg} style={{ fontSize: '1rem', color: '#666' }}>GE LOGIQ E10</div>
              <h5>프리미엄 초음파</h5>
              <p>영상의학과용 하이엔드 초음파 장비</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
