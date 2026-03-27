'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import MobileMenu from './MobileMenu'
import { useDonationPopup } from '@/components/donation/DonationPopupContext'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Donate', href: '/donate-now' },
  { label: 'Africa Donation', href: '/africa-donation' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const { open: openDonation } = useDonationPopup()

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
          isSticky ? 'shadow-md' : ''
        }`}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3">
          {/* Mobile burger */}
          <button
            className="flex items-center md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/img/logo.png"
              alt="Caring Hearts"
              width={130}
              height={65}
              className="h-auto w-[110px] md:w-[130px]"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-black transition-colors hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Donate CTA */}
          <Button onClick={() => openDonation()} size="small">
            Donate
          </Button>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </>
  )
}
