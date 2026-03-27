import Image from 'next/image'
import Container from '@/components/ui/Container'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

const gazaImages = [
  '/img/gaza/mass-aid.webp',
  '/img/gaza/food-dist-webp.webp',
  '/img/gaza/truck-logistics.webp',
  '/img/water-distribution.webp',
  '/img/children-receiving.webp',
  '/img/volunteer.webp',
  '/img/child-portrait.webp',
  '/img/gaza/download_37.png',
]

const sudanImages = [
  '/img/sudan/wa_5.40.30_1.jpg',
  '/img/sudan/wa_5.40.30.jpg',
  '/img/sudan/wa_5.40.34_1.jpg',
  '/img/sudan/wa_5.40.35_9dc.jpg',
  '/img/sudan/wa_5.40.32.jpg',
  '/img/sudan/wa_5.40.31.jpg',
  '/img/sudan/wa_5.40.32_1.jpg',
  '/img/sudan/wa_5.40.30_1.jpg',
]

interface RecentProjectsProps {
  variant?: 'gaza' | 'sudan'
}

export default function RecentProjects({ variant = 'gaza' }: RecentProjectsProps) {
  const images = variant === 'gaza' ? gazaImages : sudanImages

  return (
    <section className="py-12 md:py-16">
      <Container>
        <AnimateOnScroll>
        <h3 className="mb-3 text-center">Our Recently Completed Project</h3>
        <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-gray-600">
          Take a look at some of our most recent work! We&apos;re proud of what
          we&apos;ve achieved and even prouder of the value we&apos;ve created
          for our clients. Every project tells a story of creativity,
          collaboration, and success.
        </p>
        </AnimateOnScroll>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden rounded-xl"
            >
              <Image
                src={src}
                alt={`Project ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
