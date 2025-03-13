'use client';

import Image from 'next/image';
// Import images
import logoImg from '../assets/images/logo.jpg';
import iconIosImg from '../assets/images/icon-ios.png';
import iconAndroidImg from '../assets/images/icon-android.png';
import iconWechatImg from '../assets/images/icon-wechat.png';
import iosQrImg from '../assets/images/ios-qr.png';
import androidQrImg from '../assets/images/android-qr.png';
import miniappQrImg from '../assets/images/miniapp-qr.png';
import xiaohongshuImg from '../assets/images/xiaohongshu.png';
import bilibiliImg from '../assets/images/bilibili.png';
import wechatImg from '../assets/images/wechat.png';
import wechatQrImg from '../assets/images/wechat-qr.jpg';
import maskGroupImg from '../assets/images/mask_group.png';
import starsImg from '../assets/images/stars.png';
import styles from './page.module.css';


export default function Home() {
  function scrollToTop(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  }
  return (
    <div>
      <div className={styles['hero-background']}></div>
      <div
        className={styles['content-background']}
        style={{ background: `#000 url(${maskGroupImg.src}) repeat top center` }}
      >
        <div className={styles['content-circles']}>
          <div className={`${styles['content-circle']} ${styles['content-circle-1']}`}></div>
          <div className={`${styles['content-circle']} ${styles['content-circle-2']}`}></div>
          <div className={`${styles['content-circle']} ${styles['content-circle-3']}`}></div>
        </div>
      </div>
      <div className={styles.container}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <div className={styles.logo}>
              <Image src={logoImg} alt="DreamQuest" width={120} height={40} className={styles['logo-image']} />
              <span className={styles['logo-text']}>梦寻DreamQuest</span>
            </div>
            <div className={styles['nav-links']}>
              <a
                href="#"
                onClick={scrollToTop}
                className={styles['nav-link']}
              >
                首页
              </a>
              <a href="#features" className={styles['nav-link']}>功能介绍</a>
              <a href="#about" className={styles['nav-link']}>关于我们</a>
            </div>
          </nav>
        </header>

        <main className={styles.main}>
          <section id="home" className={styles.hero}>
            <div className={styles['hero-content']}>
              <h1 className={styles['gradient-text']}>让梦里的秘密，成为醒时的指引</h1>
              <p className={styles['sliding-gradient']}>
                DreamQuest: Unlock the secrets hidden in your dreams
              </p>
              <p className={styles.subtitle}>AI驱动的梦境探索之旅</p>

              <div className={styles['download-options']}>
                <div className={`${styles['qr-code']} ${styles['ios']}`}>
                  <div className={styles['icon-wrapper']}>
                    <Image
                      src={iconIosImg}
                      alt="iOS"
                      width={24}
                      height={24}
                      className={styles['platform-icon']}
                    />
                    <span>iOS版本</span>
                  </div>
                  <div className={styles['qr-popup']}>
                    <Image src={iosQrImg} alt="iOS下载二维码" width={200} height={200} />
                  </div>
                </div>
                <div className={`${styles['qr-code']} ${styles.android}`}>
                  <div className={styles['icon-wrapper']}>
                    <Image
                      src={iconAndroidImg}
                      alt="Android"
                      width={24}
                      height={24}
                      className={styles['platform-icon']}
                    />
                    <span>Android版本</span>
                  </div>
                  <div className={styles['qr-popup']}>
                    <Image
                      src={androidQrImg}
                      alt="Android下载二维码"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
                <div className={`${styles['qr-code']} ${styles.miniapp}`}>
                  <div className={styles['icon-wrapper']}>
                    <Image
                      src={iconWechatImg}
                      alt="小程序"
                      width={24}
                      height={24}
                      className={styles['platform-icon']}
                    />
                    <span>小程序版本</span>
                  </div>
                  <div className={styles['qr-popup']}>
                    <Image
                      src={miniappQrImg}
                      alt="小程序二维码"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="features" className={`${styles.section} ${styles.features}`}>
            <div className={styles['section-content']}>
              <h2 className={styles['section-title']}>功能介绍</h2>
              <div className={styles['content-list']}>
                <div className={styles['feature-intro']}>
                  <h3>梦寻 - 解锁梦境的秘密</h3>
                  <p>
                    梦境一直是人类探索未知自我的途径，而&quot;梦寻&quot;旨在通过创新的技术，帮助您解读每一个梦境背后的深层含义。
                  </p>
                </div>

                <div className={`${styles['list-item']} ${styles.expandable}`}>
                  <h3>
                    核心功能
                    <span className={styles.arrow}>›</span>
                  </h3>
                  <div className={styles['item-content']}>
                    <div className={styles['feature-item']}>
                      <h4>1. 梦境可视化</h4>
                      <p>
                        通过先进的AI绘画技术，将您描述的梦境场景转化为视觉艺术作品。我们的系统能够精准捕捉梦境中的细节和氛围，为您呈现出独特的梦境画面，帮助您更直观地回顾和理解梦境。
                      </p>
                    </div>
                    <div className={styles['feature-item']}>
                      <h4>2. 梦境记录与分析</h4>
                      <p>
                        通过简洁的操作，记录您的梦境内容，&quot;梦寻&quot;将基于您的输入，结合心理学与梦境学的理论进行分析，帮助您理解梦境中的象征与含义。
                      </p>
                    </div>
                    <div className={styles['feature-item']}>
                      <h4>3. 个性化解梦建议</h4>
                      <p>
                        每个人的梦境都是独一无二的。&quot;梦寻&quot;根据您的历史梦境、个人偏好以及心理状态，为您提供精准的解梦建议和深刻的心理洞察。
                      </p>
                    </div>
                    <div className={styles['feature-item']}>
                      <h4>4. 梦境图谱</h4>
                      <p>
                        通过对多次梦境记录的统计与分析，生成专属的梦境图谱，揭示您潜在的心理活动、情感波动及内心世界的变化。
                      </p>
                    </div>
                    <div className={styles['feature-item']}>
                      <h4>5. 梦境预测与建议</h4>
                      <p>
                        根据您的梦境趋势，结合数据智能，&quot;梦寻&quot;可以为您提供未来可能的心理发展方向和生活建议，帮助您更好地规划未来。
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`${styles['list-item']} ${styles.expandable}`}>
                  <h3>
                    为什么选择梦寻
                    <span className={styles.arrow}>›</span>
                  </h3>
                  <div className={styles['item-content']}>
                    <div className={styles['feature-item']}>
                      <h4>智能化解梦</h4>
                      <p>结合现代心理学和AI技术，为您的每一个梦境提供科学、精准的解读。</p>
                    </div>
                    <div className={styles['feature-item']}>
                      <h4>深度个性化</h4>
                      <p>根据您的情感变化与生活背景，定制独属于您的解梦方案。</p>
                    </div>
                    <div className={styles['feature-item']}>
                      <h4>探索内心世界</h4>
                      <p>
                        通过定期的梦境记录与分析，帮助您更好地理解自己的内心世界，发现隐藏的情感需求。
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles['feature-conclusion']}>
                  <p>梦寻，不仅是解梦工具，更是您了解自己、探索未来的伙伴。</p>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className={`${styles.section}`}>
            <div className={styles['section-content']}>
              <h2 className={styles['section-title']}>关于我们</h2>
              <div className={styles['social-links']}>
                <a
                  href="http://xhslink.com/a/6TwkYuo3sDJ5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['social-item']}
                >
                  <div className={styles['social-icon']}>
                    <Image src={xiaohongshuImg} alt="小红书" width={24} height={24} />
                    <span>小红书</span>
                  </div>
                </a>
                <a
                  href="https://b23.tv/RFiA964"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['social-item']}
                >
                  <div className={styles['social-icon']}>
                    <Image src={bilibiliImg} alt="哔哩哔哩" width={24} height={24} />
                    <span>哔哩哔哩</span>
                  </div>
                </a>
                <div className={styles['social-item']}>
                  <div className={styles['social-icon']}>
                    <Image src={wechatImg} alt="微信群" width={24} height={24} />
                    <span>联系我们</span>
                  </div>
                  <div className={styles['qr-popup']}>
                    <Image
                      src={wechatQrImg}
                      alt="微信群二维码"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              </div>
              <div className={styles['footer-links']}>
                <a href="/privacy.html" target="_blank" className={styles['footer-link']}>
                  隐私政策
                </a>
                <a href="/terms.html" target="_blank" className={styles['footer-link']}>
                  用户服务协议
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>

      <div className={styles['floating-elements']}>
        <div className={styles['circle']}></div>
        <div className={styles['circle-2']}></div>
        <div className={styles['circle-3']}></div>
      </div>

      <div className={styles['stars-container']}>
        <div
          className={styles.stars}
          style={{ background: `#000 url(${starsImg.src}) repeat top center` }}
        ></div>
      </div>

      <canvas id="starCanvas" className={styles['star-effect']}></canvas>
    </div>
  );
}
