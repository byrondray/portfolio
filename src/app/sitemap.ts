import { MetadataRoute } from 'next';
import { projects } from '@/data/projectData';

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
  ];

  // Dynamic project pages
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/details/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
}
