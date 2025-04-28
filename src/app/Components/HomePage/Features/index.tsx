'use client';

import { useState } from 'react';
import styles from './styles.module.scss';
import { featureData } from './data';
import type { Feature } from './data';

interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => {
  return (
    <div className={styles.featureItem}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

interface FeatureSectionProps {
  title: string;
  content: Feature[];
  isActive: boolean;
  onClick: () => void;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  content,
  isActive,
  onClick,
}) => {
  return (
    <div className={`${styles.listItem} ${isActive ? styles.active : ''}`}>
      <h3 onClick={onClick}>
        {title}
        <span className={styles.arrow}>›</span>
      </h3>
      <div className={styles.itemContent}>
        {content.map((feature, index) => (
          <FeatureItem
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default function Features() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="features" className={styles.features}>
      <div className={styles.sectionContent}>
        <h2 className={styles.sectionTitle}>功能介绍</h2>
        <div className={styles.contentList}>
          <div className={styles.featureIntro}>
            <h3>{featureData.intro.title}</h3>
            <p>{featureData.intro.description}</p>
          </div>

          {featureData.sections.map((section, index) => (
            <FeatureSection
              key={index}
              title={section.title}
              content={section.content}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            />
          ))}

          <div className={styles.featureConclusion}>
            <p>{featureData.conclusion}</p>
          </div>
        </div>
      </div>
    </section>
  );
} 