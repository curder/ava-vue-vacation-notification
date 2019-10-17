export const name = 'AvaTrade'
export const licenseKey = '57D4D9AC-F794-E111-83FC-001AA0D5C8DF'
export const servicesDomain = 'https://services.avaapiweb.com/'
export const myAvaDomain = 'https://myvip.avatrade.cn/'
export const avaDomain = 'https://myvip.avatrade.cn/'
export const avaTradeDomain = 'https://www.avatrade.cn/'
export const cdnResourcesDomain = 'https://myvip.avatrade.cn/myava/'
export const myAvaWebroot = 'myava/'

export const security = {
  licenseKey
};

export const regTypes = {
  real: 1, // 真实注册
  demo: 2, // 模拟注册
};

export const regType = regTypes.real

export const regWidget = {
  configs: {
    ShowPartnerCode: true, // 是否显示代理号
    servicesDomain,
    myAvaDomain,
    avaDomain,
    avaTradeDomain,
    cdnResourcesDomain,
    myAvaWebroot,
    whiteLabel: { name }
  }
}

export const layout = {
  settings: {
    Style: 'Style.css',
    Lang: 'zh-hans',
    'Show-Social': false,
    'Label-Inside': false,
    'Show-TradingPlatformLink': false,
    'Show-CurrencyBaseLink': false,
    'Mini': true,
    'ShowIcons': true
  }
}

export const loginWidget = {
  configs: {
    servicesDomain,
    myAvaDomain,
    cdnResourcesDomain,
    myAvaWebroot,
    whiteLabel: { name }
  },
};

export const LoginLayout = {
  settings: {
    Width: '100%',
    Height: '100%',
    CssClass: '',
    ForColor: '',
    BackColor: '',
    Title: '',
    Lang: 'zh-hans',
    Style: 'StyleBLogin.css',
    widgetContainerId: 'avaLoginWidgetContainer'
  }
};

export const langs = {
  en: 'en',
  zh_cn: 'zh-hans',
  zh_tw: 'zh-hant',
};
