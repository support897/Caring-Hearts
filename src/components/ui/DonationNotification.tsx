'use client'

import React, { useState, useEffect } from 'react'

const NAMES = [
  'Daniel', 'Sarah', 'Michael', 'Emma', 'James', 
  'Olivia', 'William', 'Sophia', 'Robert', 'Isabella',
  'David', 'Emily', 'Joseph', 'Charlotte', 'Christopher', 'Amelia'
]

const TIMES = [
  'just now', '2 minutes ago', '5 minutes ago', 
  '12 minutes ago', '24 minutes ago', 'an hour ago'
]

export default function DonationNotification() {
  const [visible, setVisible] = useState(false)
  const [currentName, setCurrentName] = useState('')
  const [currentTime, setCurrentTime] = useState('')
  const [closedManually, setClosedManually] = useState(false)

  useEffect(() => {
    if (closedManually) return

    const showNotification = () => {
      const name = NAMES[Math.floor(Math.random() * NAMES.length)]
      const time = TIMES[Math.floor(Math.random() * TIMES.length)]
      setCurrentName(name)
      setCurrentTime(time)
      setVisible(true)

      // Hide after 8 seconds
      setTimeout(() => {
        setVisible(false)
      }, 8000)
    }

    // Initial delay
    const initialTimeout = setTimeout(showNotification, 5000)

    // Interval every 45 seconds
    const interval = setInterval(showNotification, 45000)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [closedManually])

  if (closedManually) return null

  return (
    <div
      className={`fixed bottom-6 left-6 z-[9999] flex w-[320px] items-center gap-4 rounded-full bg-white p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 md:w-[380px] ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
      }`}
    >
      {/* Icon */}
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#4CAF50]">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          <path d="M12 9v4" />
          <path d="M10 11h4" />
        </svg>
      </div>

      {/* Text Content */}
      <div className="flex-1 overflow-hidden pr-2">
        <p className="text-sm font-bold text-gray-900 truncate">{currentName}</p>
        <p className="text-[13px] text-gray-600 leading-tight">
          just made a donation to help save lives!
        </p>
        <p className="mt-1 text-[11px] text-gray-400 uppercase tracking-wider">
          {currentTime}
        </p>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setClosedManually(true)}
        className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition-colors"
        aria-label="Close"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}
