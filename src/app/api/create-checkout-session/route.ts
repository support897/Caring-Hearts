import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import type Stripe from 'stripe'

const FREQUENCY_MAP: Record<string, Stripe.Price.Recurring.Interval | null> = {
  one: null,
  daily: 'day',
  weekly: 'week',
  monthly: 'month',
}

export async function POST(req: NextRequest) {
  try {
    const { amount, frequency } = await req.json()

    const cents = Math.round(Number(amount) * 100)
    if (!cents || cents < 100) {
      return NextResponse.json({ error: 'Minimum donation is $1' }, { status: 400 })
    }

    const interval = FREQUENCY_MAP[frequency] ?? null
    const isRecurring = interval !== null

    const origin = req.headers.get('origin') || 'http://localhost:3000'

    const lineItem: Stripe.Checkout.SessionCreateParams.LineItem = {
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'Donation to Hope for Gaza Foundation',
          description: isRecurring
            ? `${frequency.charAt(0).toUpperCase() + frequency.slice(1)} donation`
            : 'One-time donation',
        },
        unit_amount: cents,
        ...(isRecurring && {
          recurring: { interval },
        }),
      },
      quantity: 1,
    }

    const session = await stripe.checkout.sessions.create({
      mode: isRecurring ? 'subscription' : 'payment',
      line_items: [lineItem],
      success_url: `${origin}/donation-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/donation-cancel`,
      submit_type: isRecurring ? undefined : 'donate',
    })

    return NextResponse.json({ url: session.url })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal server error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
