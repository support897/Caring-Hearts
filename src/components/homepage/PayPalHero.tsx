import Image from 'next/image'
import Button from '@/components/ui/Button'
import { paypalButtons, getPayPalUrl } from '@/data/paypal-links'

export default function PayPalHero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[420px] md:h-[560px] lg:h-[720px]">
        <Image
          src="/img/children-bowls.png"
          alt="Children in need"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[1200px] px-4 md:px-10">
            <h2 className="mb-4 max-w-lg text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Your Kindness Can Save a Family Today
            </h2>
            <p className="mb-6 max-w-md text-base text-white/90 md:text-lg">
              Families across the world are facing hunger, displacement, and
              urgent medical needs. Your donation delivers food, clean water,
              and life-saving support, right now.
            </p>
            <Button
              href={getPayPalUrl(paypalButtons.general)}
              external
              variant="white"
              size="large"
            >
              Donate Now to Save Lives
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
