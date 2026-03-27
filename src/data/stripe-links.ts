export type Frequency = 'one' | 'daily' | 'weekly' | 'monthly'

export const stripeLinks: Record<string, Record<Frequency, Record<string, string>>> = {
  stripe1: {
    one: {
      '25': 'https://donate.stripe.com/dRmdR9ek4e6s9nW88n3ZK00',
      '50': 'https://donate.stripe.com/6oU28rgscbYkbw460f3ZK01',
      '100': 'https://donate.stripe.com/7sYaEXcbW7I4bw4agv3ZK02',
      '150': 'https://buy.stripe.com/00w28rfo88M8bw40FV3ZK03',
      '200': 'https://donate.stripe.com/00w28rfo88M8bw40FV3ZK03',
      'custom': 'https://donate.stripe.com/7sYaEX7VG8M8as03S73ZK04',
    },
    daily: {
      '25': 'https://donate.stripe.com/7sYaEX2Bm1jGbw40FV3ZK05',
      '50': 'https://donate.stripe.com/3cI00j6RC7I42Zy60f3ZK06',
      '100': 'https://donate.stripe.com/28E28rfo82nKbw43S73ZK07',
      '150': 'https://donate.stripe.com/4gM6oH5NygeA2Zy1JZ3ZK08',
      '200': 'https://donate.stripe.com/6oU4gz5Nyfaw1Vu9cr3ZK09',
      'custom': 'https://donate.stripe.com/5kQ8wP7VGe6sfMk74j3ZK0n',
    },
    weekly: {
      '25': 'https://donate.stripe.com/5kQ4gz7VG6E07fO0FV3ZK0b',
      '50': 'https://donate.stripe.com/5kQ7sLdg0e6s8jSfAP3ZK0c',
      '100': 'https://donate.stripe.com/7sYaEX7VG6E043CgET3ZK0d',
      '150': 'https://donate.stripe.com/4gM5kD2Bme6s57G4Wb3ZK0e',
      '200': 'https://donate.stripe.com/6oUbJ1gsc0fC2ZyewL3ZK0f',
      'custom': 'https://donate.stripe.com/eVqdR98ZK4vS6bK3S73ZK0o',
    },
    monthly: {
      '25': 'https://donate.stripe.com/28EbJ11xie6s57GfAP3ZK0h',
      '50': 'https://donate.stripe.com/4gMfZh7VG9Qc0Rqagv3ZK0i',
      '100': 'https://donate.stripe.com/9B6dR9b7Se6s7fOewL3ZK0j',
      '150': 'https://donate.stripe.com/3cI7sL1xi5zW7fOfAP3ZK0k',
      '200': 'https://donate.stripe.com/8x2eVdfo82nK2Zy74j3ZK0l',
      'custom': 'https://donate.stripe.com/6oU6oHa3OaUgfMk4Wb3ZK0p',
    },
  },

  stripe2: {
    one: {
      '25': 'https://donate.stripe.com/eVq6oId1bdYEa629YBg3600',
      '50': 'https://donate.stripe.com/28E4gA1it4o4emigmZg3601',
      '100': 'https://donate.stripe.com/3cI00k9OZ2fW1zw0o1g3602',
      '150': 'https://donate.stripe.com/8x200k7GR7Ag3HEb2Fg3603',
      '200': 'https://donate.stripe.com/fZu7sM7GR07OceagmZg360k',
      'custom': 'https://donate.stripe.com/7sY00k2mx7Ag91Y2w9g360l',
    },
    daily: {
      '25': 'https://donate.stripe.com/9B66oI0ep3k04LIgmZg3604',
      '50': 'https://donate.stripe.com/3cI28s2mx9Iofqmc6Jg3605',
      '100': 'https://donate.stripe.com/9B600kgdn9Iofqmb2Fg3606',
      '150': 'https://donate.stripe.com/bJedRa5yJ5s80vsb2Fg3607',
      '200': 'https://donate.stripe.com/dRm00ke5f7Ag5PM0o1g3608',
      'custom': 'https://donate.stripe.com/14AbJ29OZdYE3HEb2Fg360m',
    },
    weekly: {
      '25': 'https://donate.stripe.com/7sY14o1it1bSemi5Ilg3609',
      '50': 'https://donate.stripe.com/14A5kE1it5s80vs0o1g360a',
      '100': 'https://donate.stripe.com/14A4gAd1b3k0guq4Ehg360b',
      '150': 'https://donate.stripe.com/aFafZiaT33k0emib2Fg360c',
      '200': 'https://donate.stripe.com/dRm6oI8KV4o40vseeRg360d',
      'custom': 'https://donate.stripe.com/cNi5kEbX7cUA1zw6Mpg360n',
    },
    monthly: {
      '25': 'https://donate.stripe.com/dRm6oI5yJ3k02DA2w9g360e',
      '50': 'https://donate.stripe.com/bJe6oIf9j9Io4LI9YBg360f',
      '100': 'https://donate.stripe.com/cNi6oIgdn07O4LI9YBg360g',
      '150': 'https://donate.stripe.com/6oUaEY4uF4o4ceac6Jg360h',
      '200': 'https://donate.stripe.com/bJe5kEaT32fWceaeeRg360i',
      'custom': 'https://donate.stripe.com/7sY00k2mx7Ag91Y2w9g360l',
    },
  },

  stripe3: {
    one: {
      '25': 'https://donate.stripe.com/4gM14odUN77T7ve5Pw4ow00',
      '50': 'https://donate.stripe.com/dRm28scQJ2RDaHqb9Q4ow01',
      '100': 'https://donate.stripe.com/9B65kE6slbo9aHq1zg4ow02',
      '150': 'https://donate.stripe.com/eVq6oIg2V77TcPyem24ow03',
      '200': 'https://donate.stripe.com/bJeaEYeYRcsd02M4Ls4ow04',
      'custom': 'https://donate.stripe.com/4gM9AU1818bX8zidhY4ow05',
    },
    daily: {
      '25': 'https://donate.stripe.com/14A00k03Xdwh5n64Ls4ow06',
      '50': 'https://donate.stripe.com/aFa8wQ7wpbo93eYgua4ow07',
      '100': 'https://donate.stripe.com/8x2fZi1811NzeXGgua4ow08',
      '150': 'https://donate.stripe.com/14A3cw03Xcsd9Dmgua4ow09',
      '200': 'https://donate.stripe.com/14A14oaIBeAl6ra2Dk4ow0a',
      'custom': 'https://donate.stripe.com/fZu28q1E60yogJffNt6sw0q',
    },
    weekly: {
      '25': 'https://donate.stripe.com/aFa00k03X0JvdTC7XE4ow0b',
      '50': 'https://donate.stripe.com/4gMfZi7wp77TeXG51I4ow0c',
      '100': 'https://donate.stripe.com/8x200k9Ex2RD9Dm51I4ow0d',
      '150': 'https://donate.stripe.com/8x2dRaaIBgIt7vecdU4ow0e',
      '200': 'https://donate.stripe.com/dRm28s03Xbo902McdU4ow0f',
      'custom': 'https://donate.stripe.com/8x27sMdUNfEp5n691I4ow0m',
    },
    monthly: {
      '25': 'https://donate.stripe.com/4gM00kaIBeAldTCgua4ow0g',
      '50': 'https://donate.stripe.com/5kQcN66sldwheXG1zg4ow0h',
      '100': 'https://donate.stripe.com/8x228s1813VH8zigua4ow0i',
      '150': 'https://donate.stripe.com/dRm28s8Atbo96raa5M4ow0j',
      '200': 'https://donate.stripe.com/aFa9AU9Ex1Nz3eYb9Q4ow0k',
      'custom': 'https://donate.stripe.com/3cI6oI5ohbo99Dm4Ls4ow0n',
    },
  },

  stripe4: {
    one: {
      '25': 'https://donate.stripe.com/aFacN45Um1Cs8cJ30H6sw00',
      '50': 'https://donate.stripe.com/cNieVc82ua8Y2Sp6cT6sw01',
      '100': 'https://donate.stripe.com/8x228qfuWdlaeB79p56sw02',
      '150': 'https://donate.stripe.com/fZu00idmO0yo1OlcBh6sw03',
      '200': 'https://donate.stripe.com/eVq28q0A21Csdx3fNt6sw04',
      '250': 'https://donate.stripe.com/28E00i1E63KA9gNbxd6sw0p',
      'custom': 'https://donate.stripe.com/aFaeVc96ybd2boV1WD6sw05',
    },
    daily: {
      '25': 'https://donate.stripe.com/8x25kC96ybd2fFbfNt6sw06',
      '50': 'https://donate.stripe.com/28EbJ00A2epe1OleJp6sw07',
      '100': 'https://donate.stripe.com/bJe00i6Yq6WM50x9p56sw08',
      '150': 'https://donate.stripe.com/dRm14meqSbd28cJbxd6sw09',
      '200': 'https://donate.stripe.com/3cIcN482uepe0Kh0Sz6sw0a',
      '250': 'https://donate.stripe.com/9B68wO5Um2Gw8cJ6cT6sw0m',
      'custom': 'https://donate.stripe.com/fZu28q1E60yogJffNt6sw0q',
    },
    weekly: {
      '25': 'https://donate.stripe.com/aFa14m96y5SIgJfbxd6sw0b',
      '50': 'https://donate.stripe.com/fZu4gy5UmepecsZ30H6sw0c',
      '100': 'https://donate.stripe.com/14A8wO6Yq5SIakRbxd6sw0d',
      '150': 'https://donate.stripe.com/fZu00ibeG5SIfFbat96sw0e',
      '200': 'https://donate.stripe.com/aFadR8aaC94UakR6cT6sw0f',
      '250': 'https://donate.stripe.com/28E00iciK3KAeB730H6sw0n',
      'custom': 'https://donate.stripe.com/7sY14m82ua8Y78FeJp6sw0r',
    },
    monthly: {
      '25': 'https://donate.stripe.com/14A6oG96y4OEdx3at96sw0g',
      '50': 'https://donate.stripe.com/28EdR8aaC80Q3WtgRx6sw0h',
      '100': 'https://donate.stripe.com/14A8wO3Me0yodx36cT6sw0i',
      '150': 'https://donate.stripe.com/5kQdR896ych678F8l16sw0j',
      '200': 'https://donate.stripe.com/dRmaEW96ybd23Wt6cT6sw0k',
      '250': 'https://donate.stripe.com/00w5kC1E694UeB7gRx6sw0o',
      'custom': 'https://donate.stripe.com/5kQ14mciK80Q3Wt9p56sw0s',
    },
  },
}

export const frequencyLabels: Record<Frequency, string> = {
  one: 'Give once',
  daily: 'Daily',
  weekly: 'Weekly',
  monthly: 'Monthly',
}

export const defaultAmounts = ['25', '50', '100', '150', '200'] as const
export const stripe4Amounts = ['25', '50', '100', '150', '200', '250'] as const
