import fs from 'fs';
// CRITICAL FIX: Added the `.js` extension to the import path.
import { getSortedPostsData, getAllCategories } from '../lib/posts.js';

process.chdir(process.cwd());

const siteUrl = 'https://www.austintarotreader.com';

async function generateSitemap() {
  const posts = getSortedPostsData();
  const categories = getAllCategories();

  const staticPages = [
    '/',
    '/about',
    '/services',
    '/blog',
    '/faq',
    '/contact',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map((route) => {
      return `
        <url>
          <loc>${`${siteUrl}${route}`}</loc>
          <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
          <priority>${route === '/' ? '1.0' : '0.8'}</priority>
        </url>
      `;
    })
    .join('')}
  ${posts
    .map(({ slug, date }) => {
      return `
        <url>
          <loc>${`${siteUrl}/blog/${slug}`}</loc>
          <lastmod>${date}</lastmod>
          <priority>0.9</priority>
        </url>
      `;
    })
    .join('')}
  ${categories
    .map(({ slug }) => {
      return `
        <url>
          <loc>${`${siteUrl}/blog/category/${slug}`}</loc>
          <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
          <priority>0.7</priority>
        </url>
      `;
    })
    .join('')}
</urlset>
`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
  console.log('✅ Sitemap generated successfully!');
}

generateSitemap();