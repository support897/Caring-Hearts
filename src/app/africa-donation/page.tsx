import HeroSlider from '@/components/home/HeroSlider'
import DonationCards from '@/components/home/DonationCards'
import DonationWidget from '@/components/home/DonationWidget'
import TogetherHope from '@/components/home/TogetherHope'
import Newsletter from '@/components/home/Newsletter'
import RecentProjects from '@/components/home/RecentProjects'
import Testimonials from '@/components/home/Testimonials'

export default function AfricaDonationPage() {
  return (
    <>
      <HeroSlider variant="sudan" />
      <DonationCards variant="sudan" />
      <DonationWidget campaign="stripe1" />
      <TogetherHope variant="sudan" />
      <Newsletter />
      <RecentProjects variant="sudan" />
      <Testimonials variant="sudan" />
    </>
  )
}
