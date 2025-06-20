import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectBySlug, createSlug, projects } from '@/data/projectData';
import ProjectDetailClient from '@/components/ProjectDetailClient';

interface PageParams {
  slug: string;
}

interface ProjectPageProps {
  params: PageParams | Promise<PageParams>;
}

// Generate static params for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: createSlug(project.title),
  }));
}

// Dynamic metadata generation
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const unwrappedParams = params instanceof Promise ? await params : params;
  const slug = unwrappedParams.slug;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }

  const baseUrl = 'https://byrondray.com';
  const projectUrl = `${baseUrl}/details/${slug}`;
  const ogImage = project.image
    ? `${baseUrl}${project.image}`
    : `${baseUrl}/og-image.png`;

  return {
    title: `${project.title} | Byron Dray Portfolio`,
    description: project.details?.longDescription || project.description,
    keywords: [
      project.title,
      ...project.technologies,
      'Byron Dray',
      'Full Stack Developer',
      'Software Engineering',
      'Portfolio Project',
      'AI Engineer',
    ],
    authors: [{ name: 'Byron Dray', url: 'https://byrondray.com' }],
    creator: 'Byron Dray',
    publisher: 'Byron Dray',
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: projectUrl,
    },
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: projectUrl,
      siteName: "Byron Dray's Portfolio",
      title: `${project.title} - Software Development Project`,
      description: project.details?.longDescription || project.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${project.title} - Project Screenshot`,
          type: 'image/png',
        },
      ],
      publishedTime: new Date().toISOString(),
      modifiedTime: new Date().toISOString(),
      authors: ['Byron Dray'],
      section: 'Portfolio',
      tags: project.technologies,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@byrondray',
      creator: '@byrondray',
      title: `${project.title} | Byron Dray Portfolio`,
      description: project.details?.longDescription || project.description,
      images: [
        {
          url: ogImage,
          alt: `${project.title} - Project Screenshot`,
        },
      ],
    },
    category: 'technology',
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const unwrappedParams = params instanceof Promise ? await params : params;
  const slug = unwrappedParams.slug;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Generate structured data for the project
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    description: project.details?.longDescription || project.description,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: ['Web', 'Cross-platform'],
    url: project.liveLink,
    codeRepository: project.githubLink,
    author: {
      '@type': 'Person',
      name: 'Byron Dray',
      jobTitle: 'Full Stack Developer & AI Engineer',
      url: 'https://byrondray.com',
      sameAs: [
        'https://github.com/byrondray',
        'https://www.linkedin.com/in/byron-dray',
      ],
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    programmingLanguage: project.technologies,
    image: project.image ? `https://byrondray.com${project.image}` : undefined,
    screenshot: project.details?.screenshots?.map(
      (screenshot) => `https://byrondray.com${screenshot}`
    ),
    video: project.details?.videos?.map((video) => ({
      '@type': 'VideoObject',
      name: video.title || `${project.title} Demo`,
      description: video.description || `Demonstration of ${project.title}`,
      contentUrl: `https://byrondray.com${video.url}`,
      thumbnailUrl: project.image
        ? `https://byrondray.com${project.image}`
        : undefined,
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '1',
      bestRating: '5',
      worstRating: '1',
    },
    offers: project.liveLink
      ? {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        }
      : undefined,
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <ProjectDetailClient project={project} />
    </>
  );
}
