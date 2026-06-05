import Link from "next/link";
import styles from "./SplitHero.module.css";
import FadeIn from "@/components/ui/FadeIn";

interface SplitHeroProps {
    badge: string;
    title: React.ReactNode;
    subtitle: React.ReactNode;
    imagePath?: string;
    actions?: React.ReactNode;
}

export default function SplitHero({ badge, title, subtitle, imagePath, actions }: SplitHeroProps) {
    return (
        <section className={`${styles.splitHero} ${!imagePath ? styles.textOnlyHero : ''}`}>
            {/* Decorative Background Elements */}
            <div className={styles.glow1}></div>
            <div className={styles.glow2}></div>
            <div className={styles.circle1}></div>
            <div className={styles.circle2}></div>

            <div className={`container ${styles.heroContainer} ${!imagePath ? styles.textOnlyContainer : ''}`}>
                <div className={styles.heroLeft}>
                    <FadeIn direction="up">
                        <span className={`${styles.heroBadge} ${!imagePath ? styles.centerBadge : ''}`}>{badge}</span>
                        <h1 className={styles.heroTitle}>{title}</h1>
                        <p className={styles.heroSubtitle}>{subtitle}</p>
                        {!imagePath && <div className={styles.goldLine}></div>}
                        {actions && <div className={styles.heroActions}>{actions}</div>}
                    </FadeIn>
                </div>
                {imagePath && (
                    <div className={styles.heroRight}>
                        <FadeIn direction="left" delay={0.2} className={styles.imageFade} fullWidth={true}>
                            <div 
                                className={styles.imageMask} 
                                style={{ backgroundImage: `url(${imagePath})` }}
                            ></div>
                        </FadeIn>
                    </div>
                )}
            </div>
        </section>
    );
}
