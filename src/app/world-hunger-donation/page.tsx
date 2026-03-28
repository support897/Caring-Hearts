import HeroSlider from '@/components/home/HeroSlider'
import DonationCards from '@/components/home/DonationCards'
import DonationWidget from '@/components/home/DonationWidget'
import TogetherHope from '@/components/home/TogetherHope'
import Newsletter from '@/components/home/Newsletter'
import RecentProjects from '@/components/home/RecentProjects'
import Testimonials from '@/components/home/Testimonials'

export default function WorldHungerDonationPage() {
  return (
    <>
      <HeroSlider variant="world-hunger" />
      <DonationCards variant="world-hunger" />
      <DonationWidget campaign="stripe1" />
      <TogetherHope variant="world-hunger" />
      <Newsletter />
      <RecentProjects variant="world-hunger" />
      <Testimonials variant="world-hunger" />
    </>
  )
}
