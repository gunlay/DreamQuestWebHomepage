export interface PolicyContent {
  type: 'paragraph' | 'list';
  text?: string;
  items?: string[];
  bold?: boolean;
  italic?: boolean;
}

export interface PolicySection {
  title: string;
  content: PolicyContent[];
}

export interface PrivacyData {
  title: string;
  updateDate: string;
  effectiveDate: string;
  sections: PolicySection[];
}

export const privacyData: PrivacyData = {
  title: '隐私政策',
  updateDate: '2025/2/12',
  effectiveDate: '2025/2/12',
  sections: [
    {
      title: '导言',
      content: [
        {
          type: 'paragraph',
          text: '<i>梦寻DreamQuest</i> 是一款由 <i>北京鑫淼霖霖科技有限公司</i> （以下简称"我们"）提供的产品。您在使用我们的服务时，我们可能会收集和使用您的相关信息。我们希望通过本《隐私政策》向您说明，在使用我们的服务时，我们如何收集、使用、储存和分享这些信息，以及我们为您提供的访问、更新、控制和保护这些信息的方式。',
          // italic: true
        },
        {
          type: 'paragraph',
          text: '本《隐私政策》与您所使用的 <i>梦寻DreamQuest</i> 服务息息相关，希望您仔细阅读，在需要时，按照本《隐私政策》的指引，作出您认为适当的选择。本《隐私政策》中涉及的相关技术词汇，我们尽量以简明扼要的表述，并提供进一步说明的链接，以便您的理解。',
          // italic: true
        },
        {
          type: 'paragraph',
          text: '您使用或继续使用我们的服务，即意味着同意我们按照本《隐私政策》收集、使用、储存和分享您的相关信息。',
          bold: true
        },
        {
          type: 'paragraph',
          text: '如对本《隐私政策》或相关事宜有任何问题，请通过 <strong>dreamquest_kefu@163.com</strong> 与我们联系。',
          // bold: true
        }
      ]
    },
    {
      title: '1. 信息收集',
      content: [
        {
          type: 'paragraph',
          text: '我们收集的信息包括:'
        },
        {
          type: 'list',
          items: [
            '您提供的个人信息(如微信头像、昵称等)',
            '您记录的梦境内容',
            '使用小程序时的操作日志'
          ]
        }
      ]
    },
    {
      title: '2. 信息使用',
      content: [
        {
          type: 'paragraph',
          text: '我们使用收集的信息用于:'
        },
        {
          type: 'list',
          items: [
            '提供梦境分析服务',
            '改进产品体验',
            '向您推送相关服务信息'
          ]
        }
      ]
    },
    {
      title: '3. 信息保护',
      content: [
        {
          type: 'paragraph',
          text: '我们采取严格的数据保护措施，包括但不限于加密存储、访问控制等，保护您的个人信息安全。'
        }
      ]
    },
    {
      title: '4. 信息共享',
      content: [
        {
          type: 'paragraph',
          text: '除非获得您的明确同意，我们不会与任何第三方分享您的个人信息。'
        }
      ]
    },
    {
      title: '5. 信息的存储',
      content: [
        {
          type: 'paragraph',
          text: '5.1 信息存储的方式和期限',
          bold: true
        },
        {
          type: 'list',
          items: [
            '我们会通过安全的方式存储您的信息，包括本地存储（例如利用APP进行数据缓存）、数据库和服务器日志。',
            '一般情况下，我们只会在为实现服务目的所必需的时间内或法律法规规定的条件下存储您的个人信息。'
          ]
        },
        {
          type: 'paragraph',
          text: '5.2 信息存储的地域',
          bold: true
        },
        {
          type: 'list',
          items: [
            '我们会按照法律法规规定，将境内收集的用户个人信息存储于中国境内。',
            '目前我们不会跨境传输或存储您的个人信息。将来如需跨境传输或存储的，我们会向您告知信息出境的目的、接收方、安全保证措施和安全风险，并征得您的同意。'
          ]
        },
        {
          type: 'paragraph',
          text: '5.3 产品或服务停止运营时的通知',
          bold: true
        },
        {
          type: 'list',
          items: [
            '当我们的产品或服务发生停止运营的情况时，我们将以推送通知、公告等形式通知您，并在合理期限内删除您的个人信息或进行匿名化处理，法律法规另有规定的除外。'
          ]
        }
      ]
    },
    {
      title: '6. 信息安全',
      content: [
        {
          type: 'paragraph',
          text: '我们使用各种安全技术和程序，以防信息的丢失、不当使用、未经授权阅览或披露。例如，在某些服务中，我们将利用加密技术（例如SSL）来保护您提供的个人信息。但请您理解，由于技术的限制以及可能存在的各种恶意手段，在互联网行业，即便竭尽所能加强安全措施，也不可能始终保证信息百分之百的安全。您需要了解，您接入我们的服务所用的系统和通讯网络，有可能因我们可控范围外的因素而出现问题。'
        }
      ]
    },
    {
      title: '7. 您的权利',
      content: [
        {
          type: 'paragraph',
          text: '在您使用我们的服务期间，我们可能会视产品具体情况为您提供相应的操作设置，以便您可以查询、删除、更正或撤回您的相关个人信息，您可参考相应的具体指引进行操作。此外，我们还设置了投诉举报渠道，您的意见将会得到及时的处理。如果您无法通过上述途径和方式行使您的个人信息主体权利，您可以通过本《隐私政策》中提供的联系方式提出您的请求，我们会按照法律法规的规定予以反馈。'
        },
        {
          type: 'paragraph',
          text: '当您决定不再使用我们的产品或服务时，可以申请注销账户。注销账户后，除法律法规另有规定外，我们将删除或匿名化处理您的个人信息。'
        }
      ]
    },
    {
      title: '8. 变更',
      content: [
        {
          type: 'paragraph',
          text: '我们可能适时修订本《隐私政策》的条款。当变更发生时，我们会在版本更新时向您提示新的《隐私政策》，并向您说明生效日期。请您仔细阅读变更后的《隐私政策》内容，<strong>若您继续使用我们的服务，即表示您同意我们按照更新后的《隐私政策》处理您的个人信息。</strong>',
          // bold: true
        }
      ]
    },
    {
      title: '9. 未成年人保护',
      content: [
        {
          type: 'paragraph',
          text: '我们鼓励父母或监护人指导未满十八岁的未成年人使用我们的服务。我们建议未成年人鼓励他们的父母或监护人阅读本《隐私政策》，并建议未成年人在提交的个人信息之前寻求父母或监护人的同意和指导。'
        }
      ]
    }
  ]
} as const;
