'use client'

import Link from 'next/link'
import { useDonationPopup } from '@/components/donation/DonationPopupContext'

export default function MobileStickyBar() {
  const { open: openDonation } = useDonationPopup()

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-border bg-white py-2 md:hidden">
      {/* Home */}
      <Link
        href="/"
        className="flex flex-col items-center gap-0.5 text-xs text-gray-600"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        </svg>
        Home
      </Link>

      {/* Collection */}
      <Link
        href="/donate-now"
        className="flex flex-col items-center gap-0.5 text-xs text-gray-600"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
        </svg>
        Collection
      </Link>

      {/* Donate CTA */}
      <button
        onClick={() => openDonation()}
        className="flex flex-col items-center gap-0.5 text-xs font-bold text-brand"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#A92733" stroke="none">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        Donate
      </button>

      {/* About */}
      <Link
        href="/about-us"
        className="flex flex-col items-center gap-0.5 text-xs text-gray-600"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
        About
      </Link>
    </div>
  )
}
