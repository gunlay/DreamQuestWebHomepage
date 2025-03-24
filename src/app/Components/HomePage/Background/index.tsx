'use client';

import { useEffect, useRef } from 'react';
import styles from './styles.module.scss';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  life: number;
  maxLife: number;
}

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      if (currentTime - lastTimeRef.current > 10) {
        for (let i = 0; i < 3; i++) {
          particlesRef.current.push({
            x: e.clientX + Math.random() * 10 - 5,
            y: e.clientY + Math.random() * 10 - 5,
            size: Math.random() * 1.5,
            speedX: Math.random() * 1 - 0.5,
            speedY: Math.random() * 1 - 0.5,
            life: 0,
            maxLife: 30
          });
        }
        lastTimeRef.current = currentTime;
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      while (particlesRef.current.length > 100) {
        particlesRef.current.shift();
      }

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const particle = particlesRef.current[i];
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.life++;
        particle.size = Math.max(0.1, particle.size - 0.02);

        ctx.fillStyle = `rgba(255, 255, 255, ${0.8 - particle.life / particle.maxLife})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        if (particle.life >= particle.maxLife) {
          particlesRef.current.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    // 背景切换效果
    const handleScroll = () => {
      const heroSection = document.querySelector('#home');
      if (!heroSection) return;

      const scrollPosition = window.scrollY;
      const heroHeight = heroSection.clientHeight;
      const contentBackground = document.querySelector(`.${styles.contentBackground}`);
      const starsContainer = document.querySelector(`.${styles.starsContainer}`);
      
      if (contentBackground && starsContainer) {
        if (scrollPosition > heroHeight * 0.5) {
          (contentBackground as HTMLElement).style.opacity = 
            Math.min((scrollPosition - heroHeight * 0.5) / (heroHeight * 0.5), 1).toString();
          (starsContainer as HTMLElement).style.opacity = 
            Math.max(1 - (scrollPosition - heroHeight * 0.5) / (heroHeight * 0.5), 0).toString();
        } else {
          (contentBackground as HTMLElement).style.opacity = '0';
          (starsContainer as HTMLElement).style.opacity = '1';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.heroBackground} />
      <div 
        className={styles.contentBackground}
        style={{
          backgroundImage: "url('/images/mask_group.png')"
        }}
      >
        <div className={styles.contentCircles}>
          <div className={`${styles.contentCircle} ${styles.circle1}`} />
          <div className={`${styles.contentCircle} ${styles.circle2}`} />
          <div className={`${styles.contentCircle} ${styles.circle3}`} />
        </div>
      </div>

      <div className={styles.floatingElements}>
        <div className={`${styles.circle} ${styles.circle1}`} />
        <div className={`${styles.circle} ${styles.circle2}`} />
        <div className={`${styles.circle} ${styles.circle3}`} />
      </div>

      <div className={styles.starsContainer}>
        <div 
          className={styles.stars} 
          style={{
            background: "#000 url('/images/stars.png') repeat top center"
          }}
        />
      </div>

      <canvas ref={canvasRef} className={styles.starEffect} />
    </>
  );
} 