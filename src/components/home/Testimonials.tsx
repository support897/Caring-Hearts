'use client'

import { useState, useEffect } from 'react'
import Container from '@/components/ui/Container'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import { generalTestimonials, worldHungerTestimonials } from '@/data/testimonials'

interface TestimonialsProps {
  variant?: 'gaza' | 'world-hunger'
}

export default function Testimonials({ variant = 'gaza' }: TestimonialsProps) {
  const testimonials = variant === 'gaza' ? generalTestimonials : worldHungerTestimonials
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const goTo = (index: number) => setCurrent(index)
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section className="py-12 md:py-16">
      <Container>
        <AnimateOnScroll>
          <h2 className="mb-10 text-center">Voices of Hope From Our Donors</h2>
        </AnimateOnScroll>
        <div className="relative mx-auto max-w-2xl">
          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-gray-100 md:-left-14"
            aria-label="Previous testimonial"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-gray-100 md:-right-14"
            aria-label="Next testimonial"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Content */}
          <div className="relative overflow-hidden px-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`transition-all duration-500 ease-in-out ${
                  i === current
                    ? 'relative translate-x-0 opacity-100'
                    : 'absolute inset-0 translate-x-4 opacity-0 px-8'
                }`}
                aria-hidden={i !== current}
              >
                <blockquote className="text-center">
                  <svg
                    className="mx-auto mb-4 h-8 w-8 text-brand/30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="mb-6 text-lg italic leading-relaxed text-gray-700 md:text-xl">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <footer className="text-sm font-bold text-gray-900">
                    {t.name}, {t.location}
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i === current ? 'bg-brand' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
