import Image from 'next/image'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

const sections = [
  {
    title: 'Who We Are',
    content: [
      'Caring Hearts is a global initiative dedicated to supporting families affected by extreme poverty, conflict, and disaster.',
      'Our team is made up of volunteers, donors, and partners from around the world — all united by a single purpose: to bring relief, dignity, and hope to those struggling to survive without the basic necessities of life.',
      'We started with a simple idea — that even a small act of kindness can spark big change. Today, your generosity helps deliver life-saving aid, restore hope, and rebuild lives for countless families who deserve a future of safety and health.',
    ],
    image: '/img/caring/img1.jpg',
    imageAlt: 'Mother and child receiving aid',
  },
  {
    title: 'What We Do',
    content: [
      'We provide essential aid that brings real change to families in need:',
    ],
    list: [
      { bold: 'Food Assistance:', text: 'Fresh meals for families facing hunger.' },
      { bold: 'Clean Water:', text: 'Safe drinking water for homes and communities.' },
      { bold: 'Shelter:', text: 'Emergency tents and basic supplies for displaced families.' },
      { bold: 'Medical Aid:', text: 'Life-saving medicines and healthcare support.' },
      { bold: 'Education:', text: 'Materials and help for children to keep learning.' },
    ],
    afterList: 'Every donation goes straight to helping families survive, heal, and rebuild their lives.',
    image: '/img/caring/img5.jpg',
    imageAlt: 'Providing water to communities',
  },
  {
    title: 'Our Mission',
    content: [
      'At Caring Hearts, our mission is to bring lasting hope and relief to families in crisis. We provide essential humanitarian aid — food, clean water, shelter, medical care, and education — while helping communities rebuild with dignity and strength.',
      'We believe compassion creates real change. Every person deserves safety, nourishment, and the chance to live with dignity. Through transparency and action, we turn kindness into meaningful impact for those who need it most.',
    ],
    image: '/img/caring/img2.jpg',
    imageAlt: 'Relief efforts',
  },
  {
    title: 'Our Vision',
    content: [
      'We envision a future where every child can sleep safely, eat well, and learn freely. A future where families can rebuild their homes and live with peace and stability.',
      'Our goal is not only to bring immediate relief but also to create lasting hope through compassion and global solidarity. We believe a kinder world begins when humanity comes before borders.',
    ],
    image: '/img/caring/img4.jpg',
    imageAlt: 'Smiling children',
  },
  {
    title: 'Join Us in Making a Difference',
    content: [
      "You don't have to be there to make a difference.",
      'Every act of kindness, every small donation, and every share of our mission creates real impact.',
      'By joining Caring Hearts, you become part of a community that believes in humanity and the power of compassion. Together, we can feed the hungry, heal the sick, and restore hope to families who have lost everything.',
    ],
    image: '/img/caring/img3.jpg',
    imageAlt: 'Volunteers helping',
    showCta: true,
  },
]

export default function AboutUsPage() {
  return (
    <>
      {sections.map((section, i) => {
        const imageLeft = i % 2 === 0
        return (
          <section key={section.title} className="py-10 md:py-16">
            <Container>
              <div
                className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2 ${
                  imageLeft ? '' : 'md:[direction:rtl]'
                }`}
              >
                <div className={imageLeft ? '' : 'md:[direction:ltr]'}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                    <Image
                      src={section.image}
                      alt={section.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={imageLeft ? '' : 'md:[direction:ltr]'}>
                  <h2 className="mb-4">{section.title}</h2>
                  {section.content.map((p, j) => (
                    <p
                      key={j}
                      className="mb-3 text-sm leading-relaxed text-gray-700"
                    >
                      {p}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="mb-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-gray-700">
                      {section.list.map((item) => (
                        <li key={item.bold}>
                          <strong>{item.bold}</strong> {item.text}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.afterList && (
                    <p className="mb-3 text-sm leading-relaxed text-gray-700">
                      {section.afterList}
                    </p>
                  )}
                  {section.showCta && (
                    <Button href="/donate-now" size="large" className="mt-3">
                      Donate Now
                    </Button>
                  )}
                </div>
              </div>
            </Container>
          </section>
        )
      })}
    </>
  )
}
