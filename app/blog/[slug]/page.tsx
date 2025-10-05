import { getPostData, getSortedPostsData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

// This function generates the metadata (title, description) for each post page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostData(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      url: `https://www.austintarotreader.com/blog/${post.slug}`,
      images: [
        {
          url: `https://www.austintarotreader.com${post.image}`, // Assumes image path starts with /
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}


export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);

  if (!post) {
    notFound(); // If the post doesn't exist, show a 404 page
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="fade-in-on-load">
      <main className="flex flex-col items-center">
        <article className="w-full max-w-3xl mx-auto px-4 sm:px-8 md:px-12 py-16 sm:py-24">
          
          {/* Post Header */}
          <header className="text-center mb-12">
            <p className="font-sans text-accent uppercase tracking-wider">{post.category}</p>
            <h1 className="font-cinzel text-4xl sm:text-5xl font-bold text-primary mt-4 text-balance">
              {post.title}
            </h1>
            <p className="font-sans text-foreground/70 mt-6">{formattedDate}</p>
          </header>

          {/* Featured Image (Optional) */}
          {post.image && (
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-12 border border-primary/20">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 896px"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          )}

          {/* Post Content */}
          <div
            className="prose prose-invert prose-lg max-w-none 
                       prose-headings:font-cinzel prose-headings:text-accent 
                       prose-p:font-sans prose-p:text-foreground/90
                       prose-a:text-primary prose-a:transition-colors hover:prose-a:text-accent
                       prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
          
          {/* CTA Box */}
          <section className="text-center bg-secondary p-8 rounded-xl border border-white/10 mt-16">
            <h2 className="font-cinzel text-3xl font-bold text-primary">
              ✨ Want to go deeper?
            </h2>
            <p className="mt-2 font-sans text-lg text-foreground/90 max-w-lg mx-auto">
              Book your personalized tarot reading with Austin Tarot Reader today.
            </p>
            <Link
              href="/services"
              className="mt-6 inline-block bg-primary text-background font-bold py-3 px-8 rounded-lg text-lg hover:opacity-90 transition-opacity duration-300 font-sans"
            >
              Book a Reading
            </Link>
          </section>

        </article>
      </main>
    </div>
  );
}

// This function tells Next.js which blog posts exist at build time
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}