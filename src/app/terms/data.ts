export interface TermSection {
  title: string;
  content: Array<{
    type: 'paragraph' | 'list';
    text?: string;
    items?: string[];
  }>;
}

export interface TermData {
  title: string;
  sections: TermSection[];
}

export const termData: TermData = {
  title: '用户协议',
  sections: [
    {
      title: '1. 服务条款的确认和接纳',
      content: [
        {
          type: 'paragraph',
          text: '欢迎您使用梦寻小程序! 在使用前，请您仔细阅读本协议的全部内容。如果您不同意本协议的任何内容，请不要使用本服务。'
        }
      ]
    },
    {
      title: '2. 服务内容和使用规则',
      content: [
        {
          type: 'paragraph',
          text: '梦寻小程序为用户提供梦境记录、分析等服务。用户要遵守以下规则:'
        },
        {
          type: 'list',
          items: [
            '遵守相关法律法规',
            '不得发布违法违规内容',
            '尊重他人隐私和权益'
          ]
        }
      ]
    },
    {
      title: '3. 用户信息保护',
      content: [
        {
          type: 'paragraph',
          text: '我们重视用户的隐私保护，具体隐私保护政策请参见《隐私政策》。'
        }
      ]
    },
    {
      title: '4. 知识产权',
      content: [
        {
          type: 'paragraph',
          text: '梦寻小程序的所有内容，包括但不限于文字、图片、音频、视频、软件、程序、代码等，均受知识产权法律法规保护。'
        }
      ]
    }
  ]
}; 