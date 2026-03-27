import Container from '@/components/ui/Container'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export default function FundraisingProgress() {
  return (
    <section className="py-10 md:py-14">
      <Container className="text-center">
        <AnimateOnScroll>
        <h3 className="mb-2">
          Together, We Can Reach $1,000,000 and Save More Lives
        </h3>
        <h5 className="mb-6 font-normal text-gray-600">
          500 supporters have contributed so far.
        </h5>
        {/* Progress bar */}
        <div className="mx-auto max-w-2xl">
          <div className="h-4 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-brand transition-all duration-1000"
              style={{ width: '50%' }}
            />
          </div>
          <div className="mt-2 flex justify-between text-sm text-gray-600">
            <span>$500,000 raised</span>
            <span>$1,000,000 goal</span>
          </div>
        </div>
        </AnimateOnScroll>
      </Container>
    </section>
  )
}
