import { projects, createSlug } from '@/data/projectData';

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const baseUrl = 'https://byrondray.com';
  const toAbsoluteUrl = (path: string) =>
    path.startsWith('http') ? path : `${baseUrl}${path}`;

  const imageEntries = projects.flatMap((project) => {
    const images = []; // Project main image
    if (project.image) {
      images.push({
        url: `${baseUrl}/details/${createSlug(project.title)}`,
        image: toAbsoluteUrl(project.image),
        title: project.title,
        caption: project.description,
      });
    }

    // Project screenshots
    if (project.details?.screenshots) {
      project.details.screenshots.forEach((screenshot, index) => {
        images.push({
          url: `${baseUrl}/details/${createSlug(project.title)}`,
          image: toAbsoluteUrl(screenshot),
          title: `${project.title} - Screenshot ${index + 1}`,
          caption: `Screenshot of ${project.title} application`,
        });
      });
    }

    return images;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${imageEntries
  .map(
    (entry) => `
  <url>
    <loc>${escapeXml(entry.url)}</loc>
    <image:image>
      <image:loc>${escapeXml(entry.image)}</image:loc>
      <image:title>${escapeXml(entry.title)}</image:title>
      <image:caption>${escapeXml(entry.caption)}</image:caption>
    </image:image>
  </url>`
  )
  .join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
