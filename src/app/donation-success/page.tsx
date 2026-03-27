import Link from 'next/link'
import Container from '@/components/ui/Container'

export default function DonationSuccess() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="mx-auto max-w-lg text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h1 className="mb-4">Thank You!</h1>
          <p className="mb-8 text-lg text-gray-600">
            Your donation has been received. Your generosity helps provide
            essential relief to families in Gaza. Together, we are making a
            difference.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-3 font-medium text-white transition-colors hover:bg-brand-hover"
          >
            Return Home
          </Link>
        </div>
      </Container>
    </section>
  )
}
