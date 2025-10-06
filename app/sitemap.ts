import { MetadataRoute } from 'next';
import { getSortedPostsData, getAllCategories } from '@/lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://www.austintarotreader.com';

  // Get all posts for the sitemap
  const posts = getSortedPostsData();
  const postUrls = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.9,
  }));

  // Get all categories for the sitemap
  const categories = getAllCategories();
  const categoryUrls = categories.map((category) => ({
    url: `${siteUrl}/blog/category/${category.slug}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  // Define your static pages
  const staticPages = [
    '/',
    '/about',
    '/services',
    '/blog',
    '/faq',
    '/contact',
  ];

  const staticUrls = staticPages.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    priority: route === '/' ? 1.0 : 0.8,
  }));

  return [...staticUrls, ...postUrls, ...categoryUrls];
}