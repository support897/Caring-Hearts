import Stripe from 'stripe'

let stripeInstance: Stripe | null = null

export const getStripe = () => {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) {
    // Return a dummy object or throw a runtime error, 
    // but don't crash the top-level import
    return null as unknown as Stripe
  }
  if (!stripeInstance) {
    stripeInstance = new Stripe(key)
  }
  return stripeInstance
}
