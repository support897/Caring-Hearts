import DonationCards from '@/components/home/DonationCards'
import DonationWidget from '@/components/home/DonationWidget'

export default function DonateNowPage() {
  return (
    <>
      <DonationCards variant="gaza" />
      <DonationWidget campaign="stripe1" />
    </>
  )
}
