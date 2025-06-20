import { projects, createSlug } from '@/data/projectData';

export async function GET() {
  const baseUrl = 'https://byrondray.com';

  interface VideoEntry {
    url: string;
    videoUrl: string;
    title: string;
    description: string;
    thumbnailUrl?: string;
    duration: number;
    publicationDate: string;
  }

  const videoEntries: VideoEntry[] = projects.flatMap((project) => {
    const videos: VideoEntry[] = [];

    // Project videos
    if (project.details?.videos) {
      project.details.videos.forEach((video, index) => {
        videos.push({
          url: `${baseUrl}/details/${createSlug(project.title)}`,
          videoUrl: `${baseUrl}${video.url}`,
          title: video.title || `${project.title} Demo`,
          description:
            video.description ||
            `Demonstration of ${project.title} features and functionality`,
          thumbnailUrl: project.image
            ? `${baseUrl}${project.image}`
            : undefined,
          duration: 120, // Default duration in seconds
          publicationDate: new Date().toISOString(),
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
    <loc>${entry.url}</loc>
    <video:video>
      <video:content_loc>${entry.videoUrl}</video:content_loc>
      <video:title>${entry.title}</video:title>
      <video:description>${entry.description}</video:description>
      ${
        entry.thumbnailUrl
          ? `<video:thumbnail_loc>${entry.thumbnailUrl}</video:thumbnail_loc>`
          : ''
      }
      <video:duration>${entry.duration}</video:duration>
      <video:publication_date>${entry.publicationDate}</video:publication_date>
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
