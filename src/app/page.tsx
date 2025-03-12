import Image from 'next/image';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div>
      <div className={styles['hero-background']}></div>
      <div
        className={styles['content-background']}
        style={{ background: "#000 url('/images/mask_group.png') repeat top center" }}
      >
        <div className={styles['content-circles']}>
          <div className={`${styles['content-circle']} ${styles['content-circle-1']}`}></div>
          <div className={`${styles['content-circle']} ${styles['content-circle-2']}`}></div>
          <div className={`${styles['content-circle']} ${styles['content-circle-3']}`}></div>
        </div>
      </div>
      <div className={styles.container}>
        <header>
          <nav>
            <div className={styles.logo}>
              <Image src="/images/logo.png" alt="DreamQuest" width={120} height={40} />
              <span className={styles['logo-text']}>梦寻DreamQuest</span>
            </div>
            <div className={styles['nav-links']}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                首页
              </a>
              <a href="#features">功能介绍</a>
              <a href="#about">关于我们</a>
            </div>
          </nav>
        </header>

        <main>
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
                      src="/images/icon-ios.png"
                      alt="iOS"
                      width={24}
                      height={24}
                      className={styles['platform-icon']}
                    />
                    <span>iOS版本</span>
                  </div>
                  <div className={styles['qr-popup']}>
                    <Image src="/images/ios-qr.png" alt="iOS下载二维码" width={200} height={200} />
                  </div>
                </div>
                <div className={`${styles['qr-code']} ${styles.android}`}>
                  <div className={styles['icon-wrapper']}>
                    <Image
                      src="/images/icon-android.png"
                      alt="Android"
                      width={24}
                      height={24}
                      className={styles['platform-icon']}
                    />
                    <span>Android版本</span>
                  </div>
                  <div className={styles['qr-popup']}>
                    <Image
                      src="/images/android-qr.png"
                      alt="Android下载二维码"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
                <div className={`${styles['qr-code']} ${styles.miniapp}`}>
                  <div className={styles['icon-wrapper']}>
                    <Image
                      src="/images/icon-wechat.png"
                      alt="小程序"
                      width={24}
                      height={24}
                      className={styles['platform-icon']}
                    />
                    <span>小程序版本</span>
                  </div>
                  <div className={styles['qr-popup']}>
                    <Image
                      src="/images/miniapp-qr.png"
                      alt="小程序二维码"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="features" className={styles.features}>
            <div className={styles['section-content']}>
              <h2 className={styles['section-title']}>功能介绍</h2>
              <div className={styles['content-list']}>
                <div className={styles['feature-intro']}>
                  <h3>梦寻 - 解锁梦境的秘密</h3>
                  <p>
                    梦境一直是人类探索未知自我的途径，而"梦寻"旨在通过创新的技术，帮助您解读每一个梦境背后的深层含义。
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
                        通过简洁的操作，记录您的梦境内容，"梦寻"将基于您的输入，结合心理学与梦境学的理论进行分析，帮助您理解梦境中的象征与含义。
                      </p>
                    </div>
                    <div className={styles['feature-item']}>
                      <h4>3. 个性化解梦建议</h4>
                      <p>
                        每个人的梦境都是独一无二的。"梦寻"根据您的历史梦境、个人偏好以及心理状态，为您提供精准的解梦建议和深刻的心理洞察。
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
                        根据您的梦境趋势，结合数据智能，"梦寻"可以为您提供未来可能的心理发展方向和生活建议，帮助您更好地规划未来。
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

          <section id="about" className="about">
            <div className="section-content">
              <h2 className="section-title">关于我们</h2>
              <div className="social-links">
                <a
                  href="http://xhslink.com/a/6TwkYuo3sDJ5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-item"
                >
                  <div className="social-icon">
                    <Image src="/images/xiaohongshu.png" alt="小红书" width={24} height={24} />
                    <span>小红书</span>
                  </div>
                </a>
                <a
                  href="https://b23.tv/RFiA964"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-item"
                >
                  <div className="social-icon">
                    <Image src="/images/bilibili.png" alt="哔哩哔哩" width={24} height={24} />
                    <span>哔哩哔哩</span>
                  </div>
                </a>
                <div className="social-item">
                  <div className="social-icon">
                    <Image src="/images/wechat.png" alt="微信群" width={24} height={24} />
                    <span>联系我们</span>
                  </div>
                  <div className="qr-popup">
                    <Image
                      src="/images/wechat-qr.jpg"
                      alt="微信群二维码"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              </div>
              <div className="footer-links">
                <a href="/privacy.html" target="_blank">
                  隐私政策
                </a>
                <a href="/terms.html" target="_blank">
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
          style={{ background: "#000 url('/images/stars.png') repeat top center" }}
        ></div>
      </div>

      <canvas id="starCanvas" className={styles['star-effect']}></canvas>
    </div>
  );
}
