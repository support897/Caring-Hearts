'use client'

import { useState } from 'react'
import Image from 'next/image'
import { stripeLinks, frequencyLabels, defaultAmounts, type Frequency } from '@/data/stripe-links'
import { donationPackages } from '@/data/donation-services'

interface DonationWidgetProps {
  campaign?: string
}

export default function DonationWidget({ campaign = 'stripe1' }: DonationWidgetProps) {
  const [activeFrequency, setActiveFrequency] = useState<Frequency>('one')
  const frequencies = Object.keys(frequencyLabels) as Frequency[]
  const campaignLinks = stripeLinks[campaign] || stripeLinks.stripe1

  return (
    <section className="py-12 md:py-16" style={{ background: '#EDF1ED' }}>
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left: Image + info */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6 aspect-[4/3] w-full max-w-md overflow-hidden rounded-xl">
              <Image
                src="/img/food.webp"
                alt="Support Our Cause"
                fill
                className="object-cover"
              />
            </div>
            <Image
              src="/img/logo.png"
              alt="Donation Logo"
              width={120}
              height={60}
              className="mb-4 h-auto w-[120px]"
            />
            <h2 className="mb-4 text-center">
              Emergency Relief &amp; Humanitarian Aid for Gaza
            </h2>
            <p className="text-center text-sm leading-relaxed text-gray-700">
              Your donation helps deliver clean water, hot meals, shelter, medical
              care, and education support to families in Gaza. Every contribution
              provides urgent relief to people facing severe humanitarian hardship.
            </p>
          </div>

          {/* Right: Donation form */}
          <div className="rounded-2xl bg-white p-6 md:p-8">
            <h2 className="mb-6 text-center text-2xl md:text-3xl">
              Secure donation
            </h2>

            {/* Frequency tabs */}
            <div className="mb-6 grid grid-cols-4 gap-2">
              {frequencies.map((freq) => (
                <button
                  key={freq}
                  onClick={() => setActiveFrequency(freq)}
                  className={`rounded-[5px] px-3 py-2 text-sm font-medium transition-all ${
                    activeFrequency === freq
                      ? 'bg-brand text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {frequencyLabels[freq]}
                </button>
              ))}
            </div>

            {/* Amount buttons */}
            <div className="mb-6 grid grid-cols-3 gap-3">
              {defaultAmounts.map((amount) => {
                const url = campaignLinks[activeFrequency]?.[amount] || '#'
                return (
                  <a
                    key={amount}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-[5px] border-2 border-brand px-4 py-3 text-lg font-bold text-brand transition-all hover:bg-brand hover:text-white"
                  >
                    ${amount}
                  </a>
                )
              })}
              <a
                href={campaignLinks[activeFrequency]?.custom || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-[5px] border-2 border-brand px-4 py-3 text-sm font-bold text-brand transition-all hover:bg-brand hover:text-white"
              >
                Custom Donation
              </a>
            </div>

            {/* Donation packages list */}
            <div className="border-t border-border pt-4">
              <ul className="space-y-2">
                {donationPackages.map((pkg) => (
                  <li
                    key={pkg.name}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-gray-700">{pkg.name}</span>
                    <span className="font-bold text-brand">${pkg.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
