import type { Metadata } from 'next';
import { getSortedPostsData, getAllCategories } from '@/lib/posts';
import { BlogPostCard } from '@/components/BlogPostCard';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tarot Wisdom & Spiritual Insights Blog',
  description: 'Discover the deeper meanings of tarot cards, love readings, and spiritual symbolism. Explore guidance, intuition, and transformation through the Austin Tarot Reader Blog.',
};

export default function BlogPage() {
  const allPosts = getSortedPostsData();
  const allCategories = getAllCategories();

  return (
    <div className="fade-in-on-load">
      <main className="flex flex-col items-center">
        {/* Section 1: Page Header */}
        <section className="w-full text-center py-20 md:py-28 flex flex-col items-center justify-center px-4">
          <h1 className="font-cinzel text-4xl sm:text-5xl font-bold text-primary">
            Tarot Wisdom & Spiritual Insights Blog
          </h1>
          <p className="mt-4 font-sans text-lg sm:text-xl text-balance max-w-3xl mx-auto text-foreground">
            Welcome to the Austin Tarot Reader blog, your sanctuary for mystical insights. Here, we explore tarot card meanings, delve into love tarot readings, and share spiritual guidance to illuminate your path with intuitive wisdom.
          </p>
        </section>

        <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 md:px-12 pb-24">
          {/* Section 2: Categories */}
          <section className="mb-16">
            <h2 className="font-cinzel text-3xl font-bold text-accent text-center mb-8">
              Explore by Category
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {allCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/blog/category/${category.slug}`}
                  className="bg-secondary/50 px-6 py-2 rounded-full font-sans text-foreground hover:bg-primary hover:text-background transition-colors duration-300"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </section>

          {/* Section 3: All Posts Grid */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allPosts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          </section>

          {/* Section 4: Discover More Links */}
          <section className="text-center bg-secondary p-8 rounded-xl border border-white/10 mt-24">
            <h2 className="font-cinzel text-3xl font-bold text-primary">
              Discover More
            </h2>
            <p className="mt-2 font-sans text-lg text-foreground/90 max-w-lg mx-auto">
              Ready to apply this wisdom to your own life?
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6 font-sans text-lg">
              <Link href="/services" className="text-primary hover:underline">Book a Reading</Link>
              <Link href="/about" className="text-primary hover:underline">About Daniel</Link>
              <Link href="/contact" className="text-primary hover:underline">Contact Me</Link>
              <Link href="/faq" className="text-primary hover:underline">FAQ</Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}