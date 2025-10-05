import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Define the directory where your blog posts will be stored
const postsDirectory = path.join(process.cwd(), 'content/blog');

// Define the structure of a single blog post's data
export interface PostData {
  slug: string;
  title: string;
  date: string;
  category: string;
  [key: string]: any;
}

export interface Post extends PostData {
  contentHtml: string;
}

/**
 * Reads all blog post files and returns their metadata, sorted by date.
 */
export function getSortedPostsData(): PostData[] {
  // Get file names under /content/blog
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get id
    const slug = fileName.replace(/\.mdx$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the slug
    return {
      slug,
      ...(matterResult.data as { title: string; date: string; category: string }),
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

/**
 * Reads a single blog post file by its slug and returns its full data, including HTML content.
 */
export async function getPostData(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    slug,
    contentHtml,
    ...(matterResult.data as { title: string; date: string; category: string }),
  };
}

/**
 * Gets all unique categories from all blog posts.
 */
export function getAllCategories() {
    const posts = getSortedPostsData();
    // CRITICAL FIX: Filter out posts without a category, then get unique categories.
    const categories = new Set(
        posts
            .filter(post => post.category) // Only include posts that HAVE a category
            .map(post => post.category)
    );
    return Array.from(categories).map(category => {
        return {
            name: category,
            slug: category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')
        }
    });
}

/**
 * Gets all posts that belong to a specific category.
 */
export function getPostsByCategory(categorySlug: string): PostData[] {
    const posts = getSortedPostsData();
    return posts.filter(post => {
        // Add a safety check here as well
        if (!post.category) return false;
        const postCategorySlug = post.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
        return postCategorySlug === categorySlug;
    });
}