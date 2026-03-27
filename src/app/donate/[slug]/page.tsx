import Image from 'next/image'
import Container from '@/components/ui/Container'
import DonationWidget from '@/components/home/DonationWidget'
import { donationServices } from '@/data/donation-services'
import { notFound } from 'next/navigation'

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function generateStaticParams() {
  return donationServices.map((s) => ({ slug: slugify(s.name) }))
}

interface DonatePageProps {
  params: Promise<{ slug: string }>
}

export default async function DonatePage({ params }: DonatePageProps) {
  const { slug } = await params
  const service = donationServices.find((s) => slugify(s.name) === slug)
  if (!service) notFound()

  return (
    <>
      <section className="py-12 md:py-20">
        <Container>
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src={service.imageWebp}
                alt={service.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="mb-2">{service.name}</h1>
              <p className="mb-4 text-2xl font-bold text-brand">
                ${service.price}
              </p>
              <p className="mb-6 text-sm leading-relaxed text-gray-700">
                {service.description}
              </p>
            </div>
          </div>
        </Container>
      </section>
      <DonationWidget campaign={service.stripeCampaign} />
    </>
  )
}
