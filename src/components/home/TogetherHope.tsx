import Image from 'next/image'
import Container from '@/components/ui/Container'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

interface TogetherHopeProps {
  variant?: 'gaza' | 'sudan'
}

export default function TogetherHope({ variant = 'gaza' }: TogetherHopeProps) {
  const isGaza = variant === 'gaza'
  const region = isGaza ? 'Gaza' : 'Sudan'

  return (
    <section className="py-12 md:py-16">
      <Container>
        {/* First block: image + text */}
        <AnimateOnScroll>
        <div className="mb-12 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
            <Image
              src={isGaza ? '/img/gaza/mass-aid.webp' : '/img/sudan/wa_5.40.35_f8e.jpg'}
              alt="Together We Bring Hope"
              fill
              className="object-cover"
              quality={100}
            />
          </div>
          <div>
            <h3 className="mb-4">Together, We Bring Hope</h3>
            <p className="mb-4 text-gray-700">
              {isGaza
                ? 'Many have lost everything to hunger and poverty, but your support can bring relief and hope. Each donation helps provide meals, clean water, medicine, and shelter for those who need it most.'
                : 'Many families across Africa have lost their homes and loved ones to hunger and hardship, but your support can bring relief and hope. Each donation helps provide meals, clean water, medicine, and shelter for those who need it most.'}
            </p>
            <p className="text-gray-700">
              Together, we can bring comfort and strength to families fighting to
              survive.
            </p>
          </div>
        </div>
        </AnimateOnScroll>

        {/* Second block: video/poster + text */}
        <AnimateOnScroll>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4">
              {isGaza ? 'Together, We Can End Hunger Around the World' : 'Together, We Can Bring Hope to Africa'}
            </h3>
            <p className="mb-4 text-gray-700">
              {isGaza
                ? 'Every day, families around the world struggle to find food, clean water, and shelter. Your support helps deliver urgent relief. Meals for the hungry, medicine for the sick, and hope for those who have lost everything.'
                : 'Every day, families across Africa struggle to find food, clean water, and shelter. Your support helps deliver urgent relief. Meals for the hungry, medicine for the sick, and hope for those who have lost everything.'}
            </p>
            <p className="text-gray-700">
              Each donation, no matter the size, changes lives and reminds them
              they are not forgotten.
            </p>
          </div>
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
            <Image
              src={isGaza ? '/img/caring/water-well.jpg' : '/video/sudan-poster.jpg'}
              alt={`${region} project video`}
              fill
              className="object-cover"
              quality={100}
            />
            {/* Play icon overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-white/80 shadow-lg">
                <Image
                  src="/img/caring/img3.jpg"
                  alt="Play video"
                  fill
                  className="object-cover opacity-60 transition-opacity hover:opacity-100"
                  quality={100}
                />
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#A92733"
                  className="relative z-10"
                >
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        </AnimateOnScroll>
      </Container>
    </section>
  )
}
