import Link from 'next/link'
import Container from '@/components/ui/Container'

export default function DonationCancel() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="mx-auto max-w-lg text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <h1 className="mb-4">Donation Cancelled</h1>
          <p className="mb-8 text-lg text-gray-600">
            Your donation was not completed. If you changed your mind, you can
            always come back and donate later. Every contribution counts.
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
