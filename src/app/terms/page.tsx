import styles from './page.module.scss';
import { termData } from './data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "用户协议 - 梦寻Dream Quest",
};

export default function TermPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{termData.title}</h1>

      {termData.sections.map((section, index) => (
        <div key={index}>
          <h4 className={styles.subtitle}>{section.title}</h4>
          {section.content.map((content, contentIndex) => {
            if (content.type === 'paragraph') {
              return (
                <p key={contentIndex} className={styles.paragraph}>
                  <span dangerouslySetInnerHTML={{__html: content.text || ''}}></span>
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
