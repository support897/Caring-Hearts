import { NextRequest, NextResponse } from 'next/server'
import { createPayPalOrder } from '@/lib/paypal'

export async function POST(req: NextRequest) {
  try {
    const { amount } = await req.json()

    const value = Number(amount)
    if (!value || value < 1) {
      return NextResponse.json(
        { error: 'Minimum donation is $1' },
        { status: 400 }
      )
    }

    const order = await createPayPalOrder(
      value,
      'Donation to Caring Hearts'
    )

    return NextResponse.json({ id: order.id })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal server error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
