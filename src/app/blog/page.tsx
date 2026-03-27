import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { blogPosts } from '@/data/blog-posts'

export default function BlogPage() {
  return (
    <section className="py-12 md:py-20">
      <Container>
        <h2 className="mb-10 text-center">Our Blog</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-xl bg-white card-shadow"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg md:text-xl">{post.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
