export const paypalButtons: Record<string, string> = {
  '25': 'VHFRM3C44AJWW',
  '50': 'RWHVA5M87L9VJ',
  '75': 'B6U4U43BAP2X6',
  '100': 'RPMEPGCPU73D2',
  '200': 'B57AHRSAP7BGL',
  '500': 'CPEG4CVMRLADU',
  custom: '6QK64YWSEPY9Y',
  general: 'ZJE7TFT5SCRCA',
}

export function getPayPalUrl(buttonId: string, amount?: number): string {
  const base = `https://www.paypal.com/donate/?hosted_button_id=${buttonId}`
  return amount ? `${base}&amount=${amount}` : base
}

export const paypalAmounts = ['25', '50', '75', '100', '200', '500'] as const
