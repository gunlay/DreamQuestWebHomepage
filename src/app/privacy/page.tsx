import styles from './page.module.scss';
import { privacyData } from './data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "隐私政策 - 梦寻Dream Quest",
};

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{privacyData.title}</h1>
      <div className={styles.policyHeader}>
        <div className={styles.policyHeaderItem}>更新日期：<span className={styles.bold}>{privacyData.updateDate}</span></div>
        <div className={styles.policyHeaderItem}>生效日期：<span className={styles.bold}>{privacyData.effectiveDate}</span></div>
      </div>

      {privacyData.sections.map((section, index) => (
        <div key={index}>
          <h2 className={styles.subtitle}>{section.title}</h2>
          {section.content.map((content, contentIndex) => {
            if (content.type === 'paragraph') {
              return (
                <p key={contentIndex} className={styles.paragraph}>
                  {content.bold ? (
                    <span className={styles.bold} dangerouslySetInnerHTML={{__html: content.text || ''}}></span>
                  ) : content.italic ? (
                    <span className={styles.italic} dangerouslySetInnerHTML={{__html: content.text || ''}}></span>
                  ) : (
                    <span dangerouslySetInnerHTML={{__html: content.text || ''}}></span>
                  )}
                </p>
              );
            }
            if (content.type === 'list') {
              return (
                <ul key={contentIndex} className={styles.list}>
                  {content.items?.map((item, itemIndex) => (
                    <li key={itemIndex} className={styles.listItem}>{item}</li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
}
