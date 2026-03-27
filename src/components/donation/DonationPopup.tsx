'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { useDonationPopup } from './DonationPopupContext'
import { donationPackages } from '@/data/donation-services'

const HeartSvg = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#e74c3c" stroke="none" className="mr-1.5 inline-block">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
)

type Freq = 'one' | 'monthly'
type PaymentMethod = 'stripe' | 'paypal'

const frequencies: { key: Freq; label: string; hasHeart?: boolean }[] = [
  { key: 'one', label: 'Give once' },
  { key: 'monthly', label: 'Monthly', hasHeart: true },
]

const amounts = ['25', '50', '100', '150', '200'] as const

export default function DonationPopup() {
  const { isOpen, close, defaultAmount } = useDonationPopup()
  const [activeFrequency, setActiveFrequency] = useState<Freq>('one')
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('stripe')
  const [selectedAmount, setSelectedAmount] = useState<string>('50')
  const [customAmount, setCustomAmount] = useState('')
  const [isCustom, setIsCustom] = useState(false)
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => setVisible(true))
      setSelectedAmount(defaultAmount || '50')
      setIsCustom(false)
      setCustomAmount('')
      setError('')
      setSuccess(false)
      setLoading(false)
      setPaymentMethod('stripe')
      setActiveFrequency('one')
    } else {
      setVisible(false)
    }
  }, [isOpen, defaultAmount])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [close])

  if (!isOpen) return null

  const displayAmount = isCustom ? customAmount : selectedAmount
  const donationAmount = isCustom ? customAmount : selectedAmount
  const isValidAmount = Number(donationAmount) >= 1

  const handleAmountClick = (amount: string) => {
    setSelectedAmount(amount)
    setIsCustom(false)
    setCustomAmount('')
    setError('')
    setSuccess(false)
  }

  const handleCustomFocus = () => {
    setIsCustom(true)
    setSuccess(false)
  }

  const handleStripeDonate = async () => {
    const amount = isCustom ? customAmount : selectedAmount
    if (!amount || Number(amount) < 1) {
      setError('Please enter a valid amount (min $1)')
      return
    }

    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          frequency: activeFrequency,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Something went wrong')
        setLoading(false)
        return
      }

      if (data.url) {
        window.location.href = data.url
      }
    } catch {
      setError('Network error. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={close}
      />

      {/* Popup container */}
      <div
        className={`relative z-10 mx-4 flex max-h-[90vh] w-full max-w-[900px] flex-col overflow-hidden rounded-2xl bg-[#f7f7f7] shadow-2xl transition-all duration-300 md:flex-row ${
          visible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-8 scale-95 opacity-0'
        }`}
      >
        {/* Close button */}
        <button
          onClick={close}
          className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-500 shadow-sm transition-colors hover:bg-white hover:text-black"
          aria-label="Close"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Left column — info */}
        <div className="flex flex-col overflow-y-auto bg-white md:w-[55%]">
          <div className="relative aspect-[16/10] w-full flex-shrink-0">
            <Image
              src="/img/children-bowls.png"
              alt="Children receiving aid"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-5 md:p-6">
            <Image
              src="/img/logo.png"
              alt="Hope for Gaza Foundation"
              width={90}
              height={45}
              className="mb-3 h-auto w-[90px]"
            />
            <h3 className="mb-2 text-lg font-bold leading-snug md:text-xl">
              Emergency Relief &amp; Humanitarian Support for Gaza
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-600">
              Your support helps provide clean water, meals, shelter, medical
              aid, education support, and full relief packages to families in
              Gaza. Every contribution delivers urgent help to people facing
              extreme hardship.
            </p>
            <p className="mb-2 text-sm font-bold">Package Names:</p>
            <ul className="space-y-0.5 text-sm text-gray-700">
              {donationPackages.map((pkg) => (
                <li key={pkg.name}>
                  &bull; {pkg.name} &ndash; ${pkg.price}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right column — form */}
        <div className="flex flex-col overflow-y-auto md:w-[45%]">
          <div className="flex flex-1 flex-col p-5 md:p-6">
            {/* Header */}
            <div className="mb-5 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
              </span>
              <h3 className="text-xl font-bold">Secure donation</h3>
            </div>

            {/* Payment method tabs */}
            <div className="mb-4 grid grid-cols-2 gap-2">
              <button
                onClick={() => { setPaymentMethod('stripe'); setError(''); setSuccess(false) }}
                className={`flex items-center justify-center gap-2 rounded-lg border-2 px-3 py-2.5 text-sm font-semibold transition-all ${
                  paymentMethod === 'stripe'
                    ? 'border-gray-900 bg-white text-gray-900'
                    : 'border-gray-200 bg-white text-gray-500 hover:border-gray-300'
                }`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                  <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
                Card (Stripe)
              </button>
              <button
                onClick={() => { setPaymentMethod('paypal'); setError(''); setSuccess(false) }}
                className={`flex items-center justify-center gap-2 rounded-lg border-2 px-3 py-2.5 text-sm font-semibold transition-all ${
                  paymentMethod === 'paypal'
                    ? 'border-[#0070ba] bg-[#fefce8] text-[#003087]'
                    : 'border-gray-200 bg-white text-gray-500 hover:border-gray-300'
                }`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797H9.603c-.564 0-1.04.408-1.13.964L7.076 21.337z" />
                </svg>
                PayPal
              </button>
            </div>

            {/* Frequency tabs — only for Stripe */}
            {paymentMethod === 'stripe' && (
              <div className="mb-5 grid grid-cols-2 gap-2">
                {frequencies.map((freq) => (
                  <button
                    key={freq.key}
                    onClick={() => setActiveFrequency(freq.key)}
                    className={`rounded-full border-2 px-4 py-2.5 text-sm font-semibold transition-all ${
                      activeFrequency === freq.key
                        ? 'border-gray-900 bg-white text-gray-900'
                        : 'border-gray-200 bg-white text-gray-500 hover:border-gray-300'
                    }`}
                  >
                    {freq.hasHeart && <HeartSvg />}
                    {freq.label}
                  </button>
                ))}
              </div>
            )}

            {/* Amount grid */}
            <div className="mb-4 grid grid-cols-3 gap-2">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleAmountClick(amount)}
                  className={`rounded-full border-2 px-3 py-3 text-base font-semibold transition-all ${
                    selectedAmount === amount && !isCustom
                      ? 'border-blue-500 bg-white text-gray-900'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>

            {/* Custom amount input */}
            <div
              className={`mb-5 flex items-center rounded-full border-2 bg-white transition-colors ${
                isCustom ? 'border-blue-500' : 'border-gray-200'
              }`}
            >
              <span className="pl-4 text-lg text-gray-400">$</span>
              <input
                type="number"
                placeholder={displayAmount || '0'}
                value={isCustom ? customAmount : ''}
                onFocus={handleCustomFocus}
                onChange={(e) => {
                  setCustomAmount(e.target.value)
                  setError('')
                  setSuccess(false)
                }}
                className="flex-1 bg-transparent px-2 py-3 text-lg font-semibold outline-none placeholder:text-gray-800"
                min="1"
              />
              <span className="pr-4 text-sm text-gray-400">USD</span>
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Error */}
            {error && (
              <p className="mb-3 text-center text-sm text-red-500">{error}</p>
            )}

            {/* Success */}
            {success && (
              <div className="mb-3 rounded-lg bg-emerald-50 p-3 text-center text-sm text-emerald-700">
                Thank you for your donation!
              </div>
            )}

            {/* Designation */}
            <p className="mb-3 text-sm text-gray-500">
              Designate to General designation
            </p>

            {/* Payment buttons */}
            {paymentMethod === 'stripe' ? (
              <button
                onClick={handleStripeDonate}
                disabled={loading}
                className="flex w-full items-center justify-center rounded-full bg-[#4f6ef7] py-3.5 text-base font-bold text-white transition-colors hover:bg-[#3b5ce4] disabled:opacity-60"
              >
                {loading ? (
                  <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : (
                  'Donate'
                )}
              </button>
            ) : (
              <PayPalScriptProvider
                options={{
                  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || '',
                  currency: 'USD',
                  intent: 'capture',
                }}
              >
                {isValidAmount ? (
                  <PayPalButtons
                    key={`popup-${donationAmount}`}
                    style={{
                      layout: 'vertical',
                      color: 'gold',
                      shape: 'pill',
                      label: 'donate',
                      height: 45,
                    }}
                    createOrder={async () => {
                      const res = await fetch('/api/create-paypal-order', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ amount: donationAmount }),
                      })
                      const data = await res.json()
                      if (!res.ok) {
                        setError(data.error || 'Failed to create order')
                        throw new Error(data.error)
                      }
                      return data.id
                    }}
                    onApprove={async (data) => {
                      const res = await fetch('/api/capture-paypal-order', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ orderId: data.orderID }),
                      })
                      const capture = await res.json()
                      if (!res.ok || capture.status !== 'COMPLETED') {
                        setError('Payment capture failed. Please try again.')
                        return
                      }
                      setSuccess(true)
                      setError('')
                    }}
                    onError={() => {
                      setError('Payment failed. Please try again.')
                    }}
                    onCancel={() => {
                      setError('Payment was cancelled.')
                    }}
                  />
                ) : (
                  <div className="rounded-full bg-gray-100 py-3.5 text-center text-sm text-gray-500">
                    Enter an amount to donate via PayPal
                  </div>
                )}
              </PayPalScriptProvider>
            )}
          </div>

          {/* Bottom info */}
          <div className="border-t border-gray-200 px-5 py-3 text-center text-xs text-gray-400">
            Your donation is secure and encrypted. You can cancel recurring donations at any time.
          </div>
        </div>
      </div>
    </div>
  )
}
