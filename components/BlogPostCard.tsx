import Link from 'next/link';
import { PostData } from '@/lib/posts'; // We import the data structure we defined

interface BlogPostCardProps {
  post: PostData;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const { slug, title, date, category } = post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/blog/${slug}`} className="block group">
      <div className="bg-secondary p-8 rounded-xl border border-white/10 h-full flex flex-col transition-all duration-300 group-hover:border-primary/50 group-hover:scale-105">
        <p className="font-sans text-sm text-accent uppercase tracking-wider">{category}</p>
        <h3 className="font-cinzel text-2xl font-bold text-primary mt-2 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="font-sans text-sm text-foreground/70 mt-4">{formattedDate}</p>
        <div className="mt-auto pt-6">
          <span className="font-sans text-primary font-semibold group-hover:underline">
            Read More →
          </span>
        </div>
      </div>
    </Link>
  );
}