import PayPalHero from '@/components/homepage/PayPalHero'
import PayPalWidget from '@/components/homepage/PayPalWidget'
import ImpactStats from '@/components/homepage/ImpactStats'
import WhyThisMatters from '@/components/homepage/WhyThisMatters'
import Newsletter from '@/components/home/Newsletter'

export default function HomePage() {
  return (
    <>
      <PayPalHero />
      <PayPalWidget />
      <ImpactStats />
      <WhyThisMatters />
      <Newsletter />
    </>
  )
}
