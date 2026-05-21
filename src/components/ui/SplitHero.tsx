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
            <div className={`container ${styles.heroContainer} ${!imagePath ? styles.textOnlyContainer : ''}`}>
                <div className={styles.heroLeft}>
                    <FadeIn direction="up">
                        <span className={`${styles.heroBadge} ${!imagePath ? styles.centerBadge : ''}`}>{badge}</span>
                        <h1 className={styles.heroTitle}>{title}</h1>
                        <p className={styles.heroSubtitle}>{subtitle}</p>
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
