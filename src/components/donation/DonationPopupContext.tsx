'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

interface DonationPopupState {
  isOpen: boolean
  campaign: string
  defaultAmount: string
  open: (campaign?: string, amount?: string) => void
  close: () => void
}

const DonationPopupContext = createContext<DonationPopupState>({
  isOpen: false,
  campaign: 'stripe1',
  defaultAmount: '50',
  open: () => {},
  close: () => {},
})

export function DonationPopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [campaign, setCampaign] = useState('stripe1')
  const [defaultAmount, setDefaultAmount] = useState('50')

  const open = useCallback((c: string = 'stripe1', amount: string = '50') => {
    setCampaign(c)
    setDefaultAmount(amount)
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    document.body.style.overflow = ''
  }, [])

  return (
    <DonationPopupContext.Provider value={{ isOpen, campaign, defaultAmount, open, close }}>
      {children}
    </DonationPopupContext.Provider>
  )
}

export function useDonationPopup() {
  return useContext(DonationPopupContext)
}
