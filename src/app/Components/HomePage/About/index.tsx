'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';
import { aboutData } from './data';

interface SocialItemProps {
  platform: string;
  icon: string | StaticImageData;
  link?: string;
  alt: string;
  hasQR?: boolean;
  qrCode?: string;
}

const SocialItem: React.FC<SocialItemProps> = ({
  platform,
  icon,
  link,
  alt,
  hasQR,
  qrCode
}) => {
  const content = (
    <div className={styles.socialIcon}>
      <Image src={icon} alt={alt} width={40} height={40} />
      <span>{platform}</span>
      {hasQR && qrCode && (
        <div className={styles.qrPopup}>
          <Image src={qrCode} alt={`${platform}二维码`} width={120} height={120} />
        </div>
      )}
    </div>
  );

  if (link) {
    return (
      <Link href={link} target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
        {content}
      </Link>
    );
  }

  return <div className={styles.socialItem}>{content}</div>;
};

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.sectionContent}>
        <h2 className={styles.sectionTitle}>关于我们</h2>
        
        <div className={styles.socialLinks}>
          {aboutData.socialLinks.map((item, index) => (
            <SocialItem key={index} {...item} />
          ))}
        </div>

        <div className={styles.footerLinks}>
          {aboutData.footerLinks.map((item, index) => (
            <Link key={index} target="_blank" href={item.link}>
              {item.text}
            </Link>
          ))}
        </div>

        <div className={styles.dashWrapper}>
          <div className={styles.dash}></div>
        </div>

        <div className={styles.footerInfo}>
          <Link href={aboutData.icp.link} target="_blank">
            {aboutData.icp.text}
          </Link>
        </div>
      </div>
    </section>
  );
} 