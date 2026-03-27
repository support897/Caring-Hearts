'use client'

import Container from '@/components/ui/Container'

export default function ContactPage() {
  return (
    <section className="py-12 md:py-20">
      <Container className="max-w-2xl">
        <h2 className="mb-2 text-center">Let&apos;s Get In Touch</h2>
        <p className="mb-8 text-center text-sm text-gray-600">
          Contact us for any questions, feedback, or support. We&apos;re always
          happy to assist!
        </p>
        <form
          className="space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-[5px] border border-border px-4 py-3 text-sm outline-none focus:border-brand"
              suppressHydrationWarning
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full rounded-[5px] border border-border px-4 py-3 text-sm outline-none focus:border-brand"
              suppressHydrationWarning
            />
          </div>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded-[5px] border border-border px-4 py-3 text-sm outline-none focus:border-brand"
            suppressHydrationWarning
          />
          <textarea
            placeholder="Message"
            rows={6}
            required
            className="w-full rounded-[5px] border border-border px-4 py-3 text-sm outline-none focus:border-brand"
          />
          <button
            type="submit"
            className="rounded-[5px] bg-brand px-8 py-3 font-medium text-white transition-colors hover:bg-brand-hover"
          >
            Submit Now
          </button>
        </form>
      </Container>
    </section>
  )
}
