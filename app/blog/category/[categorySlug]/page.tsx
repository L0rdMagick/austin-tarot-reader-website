import { getPostsByCategory, getAllCategories } from '@/lib/posts';
import { BlogPostCard } from '@/components/BlogPostCard';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';

// This function generates the metadata (title, description) for each category page
export async function generateMetadata({ params }: { params: { categorySlug: string } }): Promise<Metadata> {
  const allCategories = getAllCategories();
  const category = allCategories.find(cat => cat.slug === params.categorySlug);

  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }

  return {
    title: `${category.name} | Blog`,
    description: `Browse all tarot blog posts in the ${category.name} category from Austin Tarot Reader.`,
  };
}

export default function CategoryPage({ params }: { params: { categorySlug: string } }) {
  const posts = getPostsByCategory(params.categorySlug);
  const allCategories = getAllCategories();
  const category = allCategories.find(cat => cat.slug === params.categorySlug);

  if (!posts.length || !category) {
    notFound();
  }

  return (
    <div className="fade-in-on-load">
      <main className="flex flex-col items-center">
        {/* Section 1: Page Header */}
        <section className="w-full text-center py-20 md:py-28 flex flex-col items-center justify-center px-4">
          <p className="font-sans text-accent uppercase tracking-wider">Category</p>
          <h1 className="font-cinzel text-4xl sm:text-5xl font-bold text-primary mt-4">
            {category.name}
          </h1>
        </section>

        <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 md:px-12 pb-24">
          {/* Posts Grid */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          </section>

          {/* All Categories Link */}
          <div className="text-center mt-20">
            <Link href="/blog" className="font-sans text-lg text-primary hover:underline">
              ← View All Categories & Posts
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

// This function tells Next.js which category pages to build at deployment
export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    categorySlug: category.slug,
  }));
}