import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import { blogPosts } from '@/data/blog-posts'

export default function BlogPreview() {
  // Show first 3 blog posts
  const posts = blogPosts.slice(0, 3)

  return (
    <section className="py-12 md:py-16">
      <Container>
        <AnimateOnScroll>
          <h2 className="mb-10 text-center">Stories of Hope and Relief</h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-xl bg-white card-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h4 className="mb-2 transition-colors group-hover:text-brand">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-600">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="font-medium text-brand underline underline-offset-4 hover:text-brand-hover"
          >
            View More
          </Link>
        </div>
      </Container>
    </section>
  )
}
