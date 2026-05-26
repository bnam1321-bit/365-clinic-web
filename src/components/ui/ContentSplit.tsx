import React from 'react';
import styles from './ContentSplit.module.css';
import FadeIn from './FadeIn';

interface ContentSplitProps {
  content: React.ReactNode;
  media: React.ReactNode;
  reversed?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function ContentSplit({ content, media, reversed = false, className = '', style }: ContentSplitProps) {
  return (
    <div className={`${styles.splitContainer} ${reversed ? styles.reversed : ''} ${className}`} style={style}>
      <div className={styles.splitContent}>
        <FadeIn direction={reversed ? 'right' : 'left'}>{content}</FadeIn>
      </div>
      <div className={styles.splitMedia}>
        <FadeIn direction={reversed ? 'left' : 'right'} delay={0.2} className={styles.mediaFade}>
          {media}
        </FadeIn>
      </div>
    </div>
  );
}
