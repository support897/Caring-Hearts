'use client'

import { useState } from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'

const frequencyTabs = ['Give once', 'Weekly', 'Monthly'] as const
const amounts = ['25', '50', '75', '100', '200', '500'] as const

export default function PayPalWidget() {
  const [activeTab, setActiveTab] = useState(0)
  const [selectedAmount, setSelectedAmount] = useState<string>('50')
  const [customAmount, setCustomAmount] = useState('')
  const [isCustom, setIsCustom] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const donationAmount = isCustom ? customAmount : selectedAmount

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

  const isValidAmount = Number(donationAmount) >= 1

  return (
    <section className="py-12 md:py-16" style={{ background: '#EDF1ED' }}>
      <div className="mx-auto max-w-xl px-4">
        <h2 className="mb-2 text-center">Give Today</h2>
        <p className="mb-6 text-center text-sm text-gray-600">
          Choose an amount below or enter a custom amount to support urgent
          relief.
        </p>

        {/* Frequency tabs */}
        <div className="mb-6 grid grid-cols-3 gap-2">
          {frequencyTabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`rounded-[5px] px-3 py-2 text-sm font-medium transition-all ${
                activeTab === i
                  ? 'bg-brand text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Amount buttons */}
        <div className="mb-4 grid grid-cols-3 gap-3">
          {amounts.map((amount) => (
            <button
              key={amount}
              onClick={() => handleAmountClick(amount)}
              className={`flex items-center justify-center rounded-[5px] border-2 px-4 py-3 text-lg font-bold transition-all ${
                selectedAmount === amount && !isCustom
                  ? 'border-brand bg-brand text-white'
                  : 'border-brand bg-white text-brand hover:bg-brand hover:text-white'
              }`}
            >
              ${amount}
            </button>
          ))}
        </div>

        {/* Custom amount */}
        <div className="mb-6 flex gap-2">
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              $
            </span>
            <input
              type="number"
              placeholder="Other amount"
              value={customAmount}
              onFocus={handleCustomFocus}
              onChange={(e) => {
                setCustomAmount(e.target.value)
                setError('')
                setSuccess(false)
              }}
              className={`w-full rounded-[5px] border py-3 pl-7 pr-3 text-base outline-none focus:border-brand ${
                isCustom ? 'border-brand' : 'border-border'
              }`}
              min="1"
            />
          </div>
        </div>

        {/* Error */}
        {error && (
          <p className="mb-4 text-center text-sm text-red-500">{error}</p>
        )}

        {/* Success */}
        {success && (
          <div className="mb-4 rounded-lg bg-emerald-50 p-3 text-center text-sm text-emerald-700">
            Thank you for your donation! Your generosity makes a difference.
          </div>
        )}

        {/* PayPal Buttons */}
        {isValidAmount ? (
          <PayPalScriptProvider
            options={{
              clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
              currency: 'USD',
              intent: 'capture',
            }}
          >
            <PayPalButtons
              key={`${donationAmount}-${activeTab}`}
              style={{
                layout: 'vertical',
                color: 'gold',
                shape: 'rect',
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
                if (
                  !res.ok ||
                  capture.status !== 'COMPLETED'
                ) {
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
          </PayPalScriptProvider>
        ) : (
          <div className="rounded-[5px] bg-gray-100 py-4 text-center text-sm text-gray-500">
            Select or enter an amount to donate via PayPal
          </div>
        )}

        {/* Trust line */}
        <p className="mt-4 text-center text-xs text-gray-500">
          Secure PayPal &amp; Credit/Debit Card Payment
        </p>
      </div>
    </section>
  )
}
