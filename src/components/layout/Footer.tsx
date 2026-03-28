'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Donate', href: '/donate-now' },
  { label: 'World Hunger Donation', href: '/world-hunger-donation' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact Us', href: '/contact' },
]

const policyLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms' },
]

function FooterAccordion({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/10 md:border-0">
      <button
        className="flex w-full items-center justify-between py-3 text-left font-heading text-lg font-bold md:cursor-default md:py-0"
        onClick={() => setOpen(!open)}
      >
        {title}
        <svg
          className={`h-4 w-4 transition-transform md:hidden ${open ? 'rotate-180' : ''}`}
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
        className={`overflow-hidden transition-all duration-300 md:max-h-none md:opacity-100 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100'
        }`}
      >
        <div className="pb-4 md:pb-0">{children}</div>
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer
      className="pb-20 md:pb-0"
      style={{
        background: 'linear-gradient(180deg, #F9E9EC 3.237%, #FDF6F6 100%)',
      }}
    >
      <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Column 1: Logo + text */}
          <div>
            <Image
              src="/img/logo.png"
              alt="Caring Hearts"
              width={150}
              height={75}
              className="mb-4 h-auto w-[150px]"
            />
            <p className="text-sm leading-relaxed text-gray-700">
              We stand together against world hunger. Your donation helps deliver food, shelter, and
              essential care to those in need. Every contribution brings hope and
              relief.
            </p>
          </div>

          {/* Column 2: Quick links */}
          <FooterAccordion title="Quick link">
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-700 transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterAccordion>

          {/* Column 3: Policies */}
          <FooterAccordion title="Our Policy">
            <ul className="flex flex-col gap-2">
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-700 transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterAccordion>

          {/* Column 4: Newsletter */}
          <FooterAccordion title="Newsletter">
            <p className="mb-4 text-sm text-gray-700">
              Get the latest updates, stories of hope, and progress from our
              mission to end world hunger.
            </p>
            <form
              className="flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-[5px] border border-border px-3 py-2 text-sm outline-none focus:border-brand"
                suppressHydrationWarning
              />
              <button
                type="submit"
                className="rounded-[5px] bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
              >
                Submit
              </button>
            </form>
          </FooterAccordion>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/10">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4">
          <p className="text-xs text-gray-600">
            &copy; Caring Hearts.
          </p>
          <div className="flex items-center gap-3">
            {/* PayPal icon */}
            <svg width="40" height="16" viewBox="0 0 40 16" fill="#222">
              <text x="0" y="12" fontSize="10" fontFamily="sans-serif">
                PayPal
              </text>
            </svg>
            {/* Venmo icon */}
            <svg width="40" height="16" viewBox="0 0 40 16" fill="#222">
              <text x="0" y="12" fontSize="10" fontFamily="sans-serif">
                Venmo
              </text>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  )
}
