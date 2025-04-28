import type { Metadata } from "next";
import "./globals.css";
import '../../public/font/font.scss'


export const metadata: Metadata = {
  title: "梦寻Dream Quest - AI梦境探索",
  description: "梦寻Dream Quest - AI梦境探索,梦寻,解梦,Dream Quest,周公解梦,代表什么,梦见",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body>
        {children}
      </body>
    </html>
  );
}
