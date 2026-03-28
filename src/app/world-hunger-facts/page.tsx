import Image from 'next/image'
import Container from '@/components/ui/Container'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export default function WorldHungerFactsPage() {
  return (
    <div className="bg-white pb-20">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="/img/caring/children-dist-aid.jpg"
          alt="World Hunger Facts"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center">
          <Container>
            <AnimateOnScroll>
              <h1 className="text-4xl font-extrabold text-white md:text-6xl">
                World Hunger <br />
                The Facts
              </h1>
            </AnimateOnScroll>
          </Container>
        </div>
      </section>

      {/* Intro section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <AnimateOnScroll>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                Hunger is a Solvable Problem
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                At Caring Hearts, we believe no one should go to bed hungry. Even
                though the world produces enough food to feed everyone, nearly
                673 million people still suffer from chronic hunger. Our mission
                is to bridge this gap through immediate relief and long-term
                sustainable solutions.
              </p>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* Stats Grid */}
      <section className="bg-gray-50 py-16">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                stat: '1 in 11',
                desc: 'People globally who suffer from chronic hunger.',
              },
              {
                stat: '2.3B',
                desc: 'People facing moderate or severe food insecurity.',
              },
              {
                stat: '2.6B',
                desc: 'People who cannot afford a healthy, nutritious diet.',
              },
            ].map((item, i) => (
              <AnimateOnScroll key={i}>
                <div className="rounded-2xl bg-white p-10 shadow-sm text-center border border-gray-100 transition-transform hover:scale-105">
                  <div className="mb-4 text-5xl font-black text-primary">
                    {item.stat}
                  </div>
                  <div className="text-gray-600 font-medium">{item.desc}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Child Impact */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <AnimateOnScroll>
              <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
                The Devastating Impact on Children
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                    1
                  </div>
                  <p className="text-gray-700">
                    <span className="font-bold text-gray-900">50% of child deaths</span> are
                    linked to malnutrition, making it one of the leading threats
                    to life in vulnerable regions.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                    2
                  </div>
                  <p className="text-gray-700">
                    <span className="font-bold text-gray-900">148 Million children</span> suffer
                    from stunting due to chronic malnutrition, affecting their
                    physical and cognitive development forever.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                    3
                  </div>
                  <p className="text-gray-700">
                    More than <span className="font-bold text-gray-900">2 million children</span> die
                    every year from the effects of malnutrition. Most of these
                    deaths are preventable with basic aid.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div className="relative aspect-square overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="/img/caring/img3.jpg"
                  alt="Child in need"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* Drivers of Hunger */}
      <section className="bg-gray-900 py-20 text-white">
        <Container>
          <div className="mb-16 text-center">
            <AnimateOnScroll>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl text-white">
                What Drives the Hunger Crisis?
              </h2>
              <p className="mx-auto max-w-2xl text-gray-400">
                Understanding the root causes allows us to implement more
                effective, long-term solutions.
              </p>
            </AnimateOnScroll>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-center">
            {[
              {
                title: 'Armed Conflict',
                desc: '85% of people facing crisis levels of hunger live in conflict-affected countries.',
              },
              {
                title: 'Climate Change',
                desc: 'Extreme weather events disrupt food production and access, especially in rural communities.',
              },
              {
                title: 'Inequality',
                desc: 'Poverty and lack of resources prevent the most vulnerable from obtaining the food they need.',
              },
            ].map((item, i) => (
              <AnimateOnScroll key={i}>
                <div className="p-8">
                  <h3 className="mb-4 text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Final Message / Solution */}
      <section className="py-20 text-center">
        <Container>
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl rounded-3xl bg-primary/5 p-12 md:p-16">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                The Solution is Within Reach
              </h2>
              <p className="mb-8 text-lg text-gray-700">
                Treatment for malnutrition is effective in **90% of cases**. By
                providing therapeutic food, clean water, and training, Caring
                Hearts is helping families build a future without hunger.
              </p>
              <p className="text-2xl font-bold text-primary italic">
                &ldquo;Hunger is predictable, preventable, and treatable.&rdquo;
              </p>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>
    </div>
  )
}
