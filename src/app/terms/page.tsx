import Container from '@/components/ui/Container'

export default function TermsPage() {
  return (
    <section className="py-12 md:py-20">
      <Container className="max-w-3xl">
        <h1 className="mb-8 text-center">Terms of service</h1>
        <div className="space-y-6 text-sm leading-relaxed text-gray-700">
          <p>
            Welcome to <em>Caring Hearts</em>. By accessing or donating through
            our website, you agree to the following terms and conditions. Please
            read them carefully.
          </p>

          <div>
            <h3 className="mb-2 text-lg font-bold text-black">
              1. Use of Website
            </h3>
            <p>
              This website is intended for individuals who wish to learn about
              or support our humanitarian efforts. You agree to use this site
              only for lawful and respectful purposes.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold text-black">2. Donations</h3>
            <p>
              All donations made through this website are voluntary and
              non-refundable, unless clearly stated otherwise. Each donation is
              used to support the specified cause or project areas such as clean
              water, meals, shelter, or medical aid.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold text-black">
              3. Payment Processing
            </h3>
            <p>
              All transactions are processed securely through trusted payment
              providers. We do not store any credit card or payment details on
              our servers.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold text-black">
              4. Tax &amp; Receipts
            </h3>
            <p>
              If applicable, digital receipts will be issued for all donations.
              Please consult your local regulations to determine whether your
              donation is tax-deductible.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold text-black">
              5. Limitation of Liability
            </h3>
            <p>
              While we do our best to ensure transparency and responsible fund
              use, <em>Caring Hearts</em> shall not be held liable for any
              indirect, incidental, or consequential damages arising from your
              use of this site.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold text-black">
              6. Changes to These Terms
            </h3>
            <p>
              We may update these Terms of Service at any time. Continued use of
              our website after updates means you accept the new terms.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold text-black">7. Contact</h3>
            <p>
              For any questions about these Terms, please contact us at{' '}
              <span className="text-brand">info@nourishtheworld.foundation</span>.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
