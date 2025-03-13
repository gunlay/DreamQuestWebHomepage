import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';

export const metadata: Metadata = {
  title: '梦寻DreamQuest - AI驱动的梦境探索之旅',
  description: '让梦里的秘密，成为醒时的指引',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" className={GeistSans.className}>
      <body>
        {children}
      </body>
    </html>
  );
} 