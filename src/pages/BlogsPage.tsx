import { PageHero } from '@/components/layout/PageHero'
import { Reveal } from '@/components/ui/AnimatedSection'
import { blogPosts } from '@/data/pages'
import { ArrowUpRight } from 'lucide-react'

export function BlogsPage() {
  return (
    <>
      <PageHero eyebrow="Blog" title="Latest News & Updates" description="Stay informed with MAQ Builders news, project updates and industry insights." />
      <section className="py-16 md:py-24">
        <div className="container-main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.08}>
              <article className="group card-dark rounded-2xl overflow-hidden h-full flex flex-col">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs text-brand mb-2">{post.date}</span>
                  <h2 className="text-lg font-semibold text-white mb-3 group-hover:text-brand transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-white/55 leading-relaxed flex-1">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm text-brand">
                    Read More <ArrowUpRight size={14} />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
