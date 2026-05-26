import React from 'react';
import styles from './Bento.module.css';
import FadeIn from './FadeIn';

export function BentoGrid({ children, className = '', style }: { children: React.ReactNode, className?: string, style?: React.CSSProperties }) {
  return <div className={`${styles.bentoGrid} ${className}`} style={style}>{children}</div>;
}

interface BentoCardProps {
  children: React.ReactNode;
  size?: 'standard' | 'wide' | 'large';
  theme?: 'light' | 'dark' | 'accent' | 'primary' | 'glass';
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}

export function BentoCard({ 
  children, 
  size = 'standard', 
  theme = 'light', 
  className = '',
  delay = 0,
  style
}: BentoCardProps) {
  const sizeClass = size === 'large' ? styles.itemLarge : size === 'wide' ? styles.itemWide : styles.itemStandard;
  const themeClass = styles[`theme${theme.charAt(0).toUpperCase() + theme.slice(1)}`];

  return (
    <div className={`${styles.bentoWrapper} ${sizeClass} ${className}`} style={style}>
      <FadeIn delay={delay} className={styles.fadeWrapper}>
        <div className={`${styles.bentoCard} ${themeClass}`}>
          {children}
        </div>
      </FadeIn>
    </div>
  );
}
