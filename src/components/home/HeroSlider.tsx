'use client'

import Image from 'next/image'
import Button from '@/components/ui/Button'
import { useDonationPopup } from '@/components/donation/DonationPopupContext'

interface HeroSliderProps {
  variant?: 'gaza' | 'sudan'
}

export default function HeroSlider({ variant = 'gaza' }: HeroSliderProps) {
  const isGaza = variant === 'gaza'
  const { open: openDonation } = useDonationPopup()

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <div className="relative h-[420px] md:h-[560px] lg:h-[720px]">
        {/* Desktop image */}
        <Image
          src={isGaza ? '/img/caring/img1.jpg' : '/img/caring/img4.jpg'}
          alt="Caring Hearts Hero"
          fill
          className="hidden object-cover md:block"
          priority
        />
        {/* Mobile image */}
        <Image
          src={isGaza ? '/img/caring/img2.jpg' : '/img/caring/img3.jpg'}
          alt="Caring Hearts Hero Mobile"
          fill
          className="object-cover md:hidden"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div
          className={`absolute inset-0 flex items-center ${
            isGaza ? 'justify-start text-left' : 'justify-end text-right'
          }`}
        >
          <div className="mx-auto w-full max-w-[1200px] px-4 md:px-10 lg:px-16">
            <h2
              className={`mb-6 max-w-lg text-3xl font-bold leading-tight md:text-5xl lg:text-6xl ${
                isGaza ? 'text-white' : 'text-white'
              } ${!isGaza ? 'ml-auto' : ''}`}
            >
              {isGaza ? 'Feed the World' : 'Stand With Africa'}
              <br />
              Your Support Can
              <br />
              Save Lives
            </h2>
            <div className={!isGaza ? 'flex justify-end' : ''}>
              {isGaza ? (
                <Button
                  href="/donate-now"
                  variant="primary"
                  size="large"
                >
                  Donate Now
                </Button>
              ) : (
                <Button
                  onClick={() => openDonation()}
                  variant="white"
                  size="large"
                >
                  Donate Now
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
