import { Metadata } from 'next';
import About from './Components/HomePage/About';
import Background from './Components/HomePage/Background';
import Features from './Components/HomePage/Features';
import Header from './Components/HomePage/Header';
import Hero from './Components/HomePage/Hero';

import styles from './page.module.scss'

export const metadata: Metadata = {
  title: '梦寻DreamQuest - AI驱动的梦境探索之旅',
  description: '梦寻DreamQuest是一款创新的梦境探索应用，运用AI技术帮助用户记录、理解和探索他们的梦境世界。',
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Background />
      <div className={styles.content}>
        <Header />
        <Hero />
        <Features />
        <About />
      </div>
    </main>
  );
}
