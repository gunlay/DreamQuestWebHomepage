import WechatQr from '@images/wechat-qr.jpg'
import Bili from '@images/bilibili.png'
import Red from '@images/xiaohongshu.png'
import Wechat from '@images/wechat.png'
import { StaticImageData } from 'next/image';

interface SocialLink {
  platform: string;
  icon: string | StaticImageData;
  link?: string;
  alt: string;
  hasQR?: boolean;
  qrCode?: string;
}

export interface AboutData {
  socialLinks: SocialLink[];
  footerLinks: Array<{
    text: string;
    link: string;
  }>;
  icp: {
    text: string;
    link: string;
  };
}

export const aboutData: AboutData = {
  socialLinks: [
    {
      platform: "小红书",
      icon: Red,
      link: "http://xhslink.com/a/6TwkYuo3sDJ5",
      alt: "小红书"
    },
    {
      platform: "哔哩哔哩",
      icon: Bili,
      link: "https://b23.tv/RFiA964",
      alt: "哔哩哔哩"
    },
    {
      platform: "联系我们",
      icon: Wechat,
      alt: "微信群",
      hasQR: true,
      qrCode: WechatQr as unknown as string
    }
  ],
  footerLinks: [
    {
      text: "隐私政策",
      link: "/privacy"
    },
    {
      text: "用户服务协议",
      link: "/terms"
    }
  ],
  icp: {
    text: "京ICP备2025112521号-1",
    link: "https://beian.miit.gov.cn/"
  }
}; 