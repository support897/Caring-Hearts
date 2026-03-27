'use client'

import Image from 'next/image'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import { donationServices } from '@/data/donation-services'
import { useDonationPopup } from '@/components/donation/DonationPopupContext'

interface DonationCardsProps {
  variant?: 'gaza' | 'sudan'
}

export default function DonationCards({ variant = 'gaza' }: DonationCardsProps) {
  const isSudan = variant === 'sudan'
  const { open: openDonation } = useDonationPopup()

  return (
    <section className="py-12 md:py-16">
      <Container>
        <AnimateOnScroll>
          <h2 className="mb-10 text-center">Your Help Can Change Lives</h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {donationServices.map((service) => (
            <div
              key={service.name}
              className="card-shadow flex flex-col items-center rounded-lg bg-white p-8 text-center md:p-10"
            >
              <div className="relative mb-6 h-48 w-full overflow-hidden rounded-lg">
                <Image
                  src={isSudan ? service.sudanImage : service.imageWebp}
                  alt={service.name}
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
              <h3 className="mb-2 text-xl md:text-2xl">
                {service.name} &mdash; ${service.price}
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-600">
                {isSudan ? service.sudanDescription : service.description}
              </p>
              <Button
                onClick={() => openDonation(service.stripeCampaign, service.price.toString())}
                size="default"
              >
                Donate Now
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
