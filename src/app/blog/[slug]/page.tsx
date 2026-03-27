import Image from 'next/image'
import Container from '@/components/ui/Container'
import { blogPosts } from '@/data/blog-posts'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  return (
    <section className="py-12 md:py-20">
      <Container className="max-w-3xl">
        <h1 className="mb-6 text-center">{post.title}</h1>
        <div className="relative mb-8 aspect-[16/10] w-full overflow-hidden rounded-xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="text-sm leading-relaxed text-gray-700">
          <p>{post.content}</p>
        </div>
      </Container>
    </section>
  )
}
