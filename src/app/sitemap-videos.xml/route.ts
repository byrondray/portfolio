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

  interface VideoEntry {
    url: string;
    videoUrl: string;
    title: string;
    description: string;
    thumbnailUrl?: string;
    duration: number;
  }

  const videoEntries: VideoEntry[] = projects.flatMap((project) => {
    const videos: VideoEntry[] = [];

    // Project videos
    if (project.details?.videos) {
      project.details.videos.forEach((video) => {
        videos.push({
          url: `${baseUrl}/details/${createSlug(project.title)}`,
          videoUrl: toAbsoluteUrl(video.url),
          title: video.title || `${project.title} Demo`,
          description:
            video.description ||
            `Demonstration of ${project.title} features and functionality`,
          thumbnailUrl: video.thumbnail
            ? toAbsoluteUrl(video.thumbnail)
            : undefined,
          duration: 120, // Default duration in seconds
        });
      });
    }

    return videos;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${videoEntries
  .map(
    (entry) => `
  <url>
    <loc>${escapeXml(entry.url)}</loc>
    <video:video>
      <video:content_loc>${escapeXml(entry.videoUrl)}</video:content_loc>
      <video:title>${escapeXml(entry.title)}</video:title>
      <video:description>${escapeXml(entry.description)}</video:description>
      ${
        entry.thumbnailUrl
          ? `<video:thumbnail_loc>${escapeXml(
              entry.thumbnailUrl
            )}</video:thumbnail_loc>`
          : ''
      }
      <video:duration>${entry.duration}</video:duration>
      <video:family_friendly>yes</video:family_friendly>
    </video:video>
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
