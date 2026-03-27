import Container from '@/components/ui/Container'

export default function PrivacyPolicyPage() {
  return (
    <section className="py-12 md:py-20">
      <Container className="max-w-3xl">
        <h1 className="mb-8 text-center">Privacy policy</h1>
        <div className="space-y-6 text-sm leading-relaxed text-gray-700">
          <p>
            At <em>Caring Hearts</em>, we value your privacy and are committed
            to protecting your personal information. This Privacy Policy explains
            how we collect, use, and protect the data you share with us when you
            make a donation or visit our website.
          </p>

          <div>
            <h3 className="mb-2 text-lg font-bold text-black">
              Information We Collect
            </h3>
            <p className="mb-2">
              We may collect the following types of information:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Name, email address, phone number, and billing address</li>
              <li>
                Payment details processed securely through trusted payment
                providers
              </li>
              <li>
                Optional information provided in donation forms or contact
                requests
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold text-black">
              How We Use Your Information
            </h3>
            <p className="mb-2">Your information is used to:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Process and confirm donations</li>
              <li>Send receipts or updates about your contributions</li>
              <li>Improve our website services and user experience</li>
              <li>Comply with legal and financial reporting requirements</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold text-black">
              Data Protection
            </h3>
            <p>
              We do not sell, rent, or share your personal data with third
              parties except as required by law or to process your payment
              securely. All transactions are encrypted and handled by trusted,
              secure payment systems.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold text-black">Cookies</h3>
            <p>
              Our website may use cookies to improve user experience and analyze
              website traffic. You can disable cookies through your browser
              settings at any time.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold text-black">Your Rights</h3>
            <p>
              You have the right to request access to, correction of, or
              deletion of your personal data. To do so, please contact us at{' '}
              <span className="text-brand">info@nourishtheworld.foundation</span>.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold text-black">Contact</h3>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at{' '}
              <span className="text-brand">info@nourishtheworld.foundation</span>.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
