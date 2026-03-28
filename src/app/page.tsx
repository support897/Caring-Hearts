import HeroSlider from '@/components/home/HeroSlider'
import FundraisingProgress from '@/components/home/FundraisingProgress'
import DonationCards from '@/components/home/DonationCards'
import DonationWidget from '@/components/home/DonationWidget'
import GlobalHungerSummary from '@/components/home/GlobalHungerSummary'
import TogetherHope from '@/components/home/TogetherHope'
import Newsletter from '@/components/home/Newsletter'
import FAQ from '@/components/home/FAQ'
import RecentProjects from '@/components/home/RecentProjects'
import Testimonials from '@/components/home/Testimonials'
import BlogPreview from '@/components/home/BlogPreview'

export default function Home() {
  return (
    <>
      <HeroSlider variant="gaza" />
      <FundraisingProgress />
      <GlobalHungerSummary />
      <DonationCards variant="gaza" />
      <DonationWidget campaign="stripe1" />
      <TogetherHope variant="gaza" />
      <Newsletter />
      <FAQ />
      <RecentProjects variant="gaza" />
      <Testimonials variant="gaza" />
      <BlogPreview />
    </>
  )
}
