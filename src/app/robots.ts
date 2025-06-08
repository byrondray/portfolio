import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/static/', '/admin/', '/private/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/static/'],
      },
    ],
    sitemap: [
      'https://byrondray.com/sitemap.xml',
      'https://byrondray.com/sitemap-images.xml',
      'https://byrondray.com/sitemap-videos.xml',
    ],
    host: 'https://byrondray.com',
  };
}
