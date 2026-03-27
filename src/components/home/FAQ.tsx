'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import { faqItems } from '@/data/faq'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-12 md:py-16" style={{ background: '#EDF1ED' }}>
      <Container>
        <AnimateOnScroll>
          <h2 className="mb-10 text-center">Frequently Asked Questions</h2>
        </AnimateOnScroll>
        <div className="mx-auto max-w-3xl">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-black/10">
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span className="pr-4 font-heading text-base font-bold md:text-lg">
                  {item.question}
                </span>
                <svg
                  className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === i ? '500px' : '0px',
                  opacity: openIndex === i ? 1 : 0,
                }}
              >
                <p className="pb-5 text-sm leading-relaxed text-gray-700">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
