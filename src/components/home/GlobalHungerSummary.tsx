import Image from 'next/image'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export default function GlobalHungerSummary() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <AnimateOnScroll>
            <div className="max-w-2xl">
              <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                HOW SERIOUS IS <br className="hidden md:block" />
                GLOBAL HUNGER?
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-700 md:text-xl">
                Hunger is predictable, preventable, and treatable. Still, one in
                11 people suffers from hunger, and nearly 32% of the world&apos;s
                population doesn&apos;t have access to a healthy diet.
              </p>
              <div className="mb-10">
                <Button
                  href="/world-hunger-facts"
variant="default"
                  className="border-2 font-bold tracking-wide transition-all hover:bg-gray-50"
                >
                  WORLD HUNGER FACTS
                </Button>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Visual Content / Stat */}
          <AnimateOnScroll>
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/img/caring/children-dist-aid.jpg"
                  alt="Global Hunger Crisis"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  quality={100}
                />
                {/* Overlay with stat */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-bottom p-8 md:p-12">
                  <div className="mt-auto">
                    <div className="mb-2 text-6xl font-black text-white md:text-7xl lg:text-8xl">
                      673M
                    </div>
                    <div className="text-xl font-bold uppercase tracking-widest text-white md:text-2xl">
                      People Go to Bed <br />
                      Hungry Each Night
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  )
}
