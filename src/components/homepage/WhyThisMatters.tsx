import Image from 'next/image'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import { paypalButtons, getPayPalUrl } from '@/data/paypal-links'

export default function WhyThisMatters() {
  return (
    <section className="py-12 md:py-16" style={{ background: '#F5F5F5' }}>
      <Container>
        <AnimateOnScroll>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-2">
              Families Are Facing Unimaginable Hardship
            </h3>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-brand">
              Why This Matters
            </p>
            <p className="mb-4 text-sm leading-relaxed text-gray-700">
              In Gaza, parents wake up each day unsure how they will feed their
              children. Homes have been lost. Access to clean water is limited.
              Hospitals are overwhelmed.
            </p>
            <p className="mb-6 text-sm leading-relaxed text-gray-700">
              But even in the darkest moments, compassion travels across
              borders. Your support provides real relief; warm meals, safe water,
              shelter, medicine, and the reassurance that they are not forgotten.
            </p>
            <Button
              href={getPayPalUrl(paypalButtons.general)}
              external
              size="large"
            >
              Give Hope Today
            </Button>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
            <Image
              src="/img/loving-embrace.png"
              alt="A loving embrace in troubled times"
              fill
              className="object-cover"
            />
          </div>
        </div>
        </AnimateOnScroll>
      </Container>
    </section>
  )
}
