'use client'

import { useState, useEffect } from 'react'

const messages = [
  'Caring Hearts',
  'Together, We Can End World Hunger.',
  'Children Are Starving Right Now. Donate Today and Save Lives!',
  'Every Donation Counts. Help Families Facing Hunger Today!',
]

export default function AnnouncementBar() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % messages.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-10 overflow-hidden bg-black text-white">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`absolute inset-0 flex items-center justify-center px-4 text-center text-sm transition-opacity duration-500 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {msg}
        </div>
      ))}
    </div>
  )
}
