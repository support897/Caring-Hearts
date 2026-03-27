'use client'

import Container from '@/components/ui/Container'

export default function Newsletter() {
  return (
    <section className="bg-black py-12 md:py-16">
      <Container className="text-center">
        <h2 className="mb-4 text-white">Newsletter</h2>
        <p className="mx-auto mb-6 max-w-lg text-sm text-gray-300">
          Get the latest updates, stories of hope, and progress from our mission
          to end world hunger.
        </p>
        <form
          className="mx-auto flex max-w-md gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-[5px] border border-gray-600 bg-transparent px-4 py-3 text-sm text-white placeholder-gray-400 outline-none focus:border-brand"
            suppressHydrationWarning
          />
          <button
            type="submit"
            className="rounded-[5px] bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
          >
            Subscribe
          </button>
        </form>
      </Container>
    </section>
  )
}
