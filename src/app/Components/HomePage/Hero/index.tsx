'use client';

import styles from './styles.module.scss';
import Image, { StaticImageData } from 'next/image';
import miniappQr from '@images/miniapp-qr.png';
import { useEffect, useRef, useState } from 'react';

interface QRCodeProps {
  icon: string;
  alt: string;
  qrCode?: string | StaticImageData;
  text: string;
  comingSoon?: boolean;
}

function QRCode({ icon, alt, qrCode, text, comingSoon }: QRCodeProps) {
  const [showAbove, setShowAbove] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkPosition = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        setShowAbove(rect.bottom + 220 > windowHeight);
      }
    };

    checkPosition();
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);

    return () => {
      window.removeEventListener('scroll', checkPosition);
      window.removeEventListener('resize', checkPosition);
    };
  }, []);

  return (
    <div ref={containerRef} className={`${styles.qrCode} ${comingSoon ? styles.comingSoon : ''}`}>
      <div className={styles.iconWrapper}>
        <Image 
          src={`/images/${icon}`} 
          alt={alt} 
          width={50} 
          height={50} 
          className={styles.platformIcon}
        />
        <span>{text}</span>
        {comingSoon && <span className={styles.comingSoonText}>敬请期待</span>}
      </div>
      {!comingSoon && qrCode && (
        <div className={`${styles.qrPopup} ${showAbove ? styles.above : ''}`}>
          <Image 
            src={qrCode}
            alt={`${alt}下载二维码`} 
            width={160} 
            height={160}
          />
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.gradientText}>让梦里的秘密，成为醒时的指引</h1>
        <p className={styles.slidingGradient}>DreamQuest: Unlock the secrets hidden in your dreams</p>
        <p className={styles.subtitle}>AI驱动的梦境探索之旅</p>
        
        <div className={styles.downloadOptions}>
          <QRCode 
            icon="icon-ios.png"
            alt="iOS"
            text="iOS版本"
            comingSoon={true}
          />
          <QRCode 
            icon="icon-android.png"
            alt="Android"
            text="Android版本"
            comingSoon={true}
          />
          <QRCode 
            icon="icon-wechat.png"
            alt="小程序"
            qrCode={miniappQr}
            text="小程序版本"
          />
        </div>
      </div>
    </section>
  );
} 