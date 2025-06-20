import { MetadataRoute } from 'next';
import { projects, createSlug } from '@/data/projectData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://byrondray.com';

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/uses`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/process`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ];
  // Dynamic project pages with enhanced metadata
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/details/${createSlug(project.title)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    // Note: Images and videos would be handled by separate XML sitemaps
    // as Next.js MetadataRoute.Sitemap doesn't support extended properties
  }));

  return [...staticPages, ...projectPages];
}
