'use client';

import styles from './styles.module.scss';
import Image from 'next/image';

export default function Header() {
  const scrollToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image src="/images/logo.png" alt="DreamQuest" width={24} height={24} />
          <span className={styles.logoText}>梦寻DreamQuest</span>
        </div>
        <div className={styles.navLinks}>
          <a href="#" onClick={scrollToTop}>首页</a>
          <a href="#features">功能介绍</a>
          <a href="#about">关于我们</a>
        </div>
      </nav>
    </header>
  );
} 