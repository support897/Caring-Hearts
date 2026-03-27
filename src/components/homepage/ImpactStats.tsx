import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import { paypalButtons, getPayPalUrl } from '@/data/paypal-links'

const stats = [
  { value: '120,000+', label: 'Meals Distributed' },
  { value: '85,000+', label: 'Clean Water Supplies' },
  { value: '6,500+', label: 'Shelter Kits Provided' },
  { value: '4,200+', label: 'Medical Aid Supported' },
  { value: '18,000+', label: 'Families Assisted' },
  { value: '3,000+', label: 'Children Supported' },
]

export default function ImpactStats() {
  return (
    <section className="py-12 md:py-16">
      <Container className="text-center">
        <AnimateOnScroll>
        <h2 className="mb-2">
          Delivering Relief Where It&apos;s Needed Most
        </h2>
        <p className="mb-10 text-sm font-bold uppercase tracking-widest text-brand">
          OUR IMPACT SO FAR
        </p>
        <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-gray-700">
          Through your generosity, we provide urgent food, clean water, shelter,
          and medical assistance to families facing crisis. Every contribution
          translates into real, life-saving support on the ground.
        </p>
        </AnimateOnScroll>
        <div className="mb-10 grid grid-cols-2 gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-3xl font-bold text-brand md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
        <Button
          href={getPayPalUrl(paypalButtons.general)}
          external
          size="large"
        >
          Donate Now
        </Button>
      </Container>
    </section>
  )
}
